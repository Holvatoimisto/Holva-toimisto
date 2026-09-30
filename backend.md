# Holva Toimisto — Backend Architecture

## Overview

The backend handles form submissions from the hero contact form and any other CTA forms on the site. It stores lead data in a MySQL database via Drizzle ORM, and sends email notifications to forms@holvatoimisto.com when a new lead is submitted.

No authentication required. No admin panel. Simple, focused backend.

## Database Schema

### Table: `leads`

Stores form submissions from the contact/CTA forms.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | `serial` | PK, auto-increment | Unique lead ID |
| `name` | `varchar(255)` | NOT NULL | Submitter's full name |
| `company` | `varchar(255)` | nullable | Company name |
| `phone` | `varchar(50)` | NOT NULL | Phone number |
| `email` | `varchar(255)` | NOT NULL | Email address |
| `message` | `text` | nullable | Description of situation |
| `source` | `varchar(100)` | NOT NULL, default "hero_form" | Which form submitted (hero_form, cta_section, etc.) |
| `createdAt` | `timestamp` | DEFAULT now() | Submission timestamp |

**Schema implementation (Drizzle ORM)**:

```typescript
import { mysqlTable, serial, varchar, text, timestamp } from "drizzle-orm/mysql-core";

export const leads = mysqlTable("leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  phone: varchar("phone", { length: 50 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message"),
  source: varchar("source", { length: 100 }).notNull().default("hero_form"),
  createdAt: timestamp("created_at").defaultNow(),
});
```

## API Design (tRPC Routers)

### Router: `lead`

#### `lead.submit` — Public Mutation

Submits a new lead from the contact form.

**Input (Zod)**:
```typescript
z.object({
  name: z.string().min(1, "Nimi vaaditaan").max(255),
  company: z.string().max(255).optional(),
  phone: z.string().min(1, "Puhelin vaaditaan").max(50),
  email: z.string().email("Virheellinen sähköposti").max(255),
  message: z.string().optional(),
  source: z.string().max(100).default("hero_form"),
})
```

**Logic**:
1. Insert lead into `leads` table
2. Send email notification to forms@holvatoimisto.com (async, non-blocking)
3. Return `{ success: true, leadId: number }`

**Error handling**:
- Zod validation errors → 400 with field-level error messages
- DB insertion error → 500 with generic "Palvelinvirhe" message
- Email failure → logged but does not fail the mutation (fire-and-forget)

#### `lead.list` — Public Query (for potential future admin use)

Returns all leads ordered by createdAt DESC.

**Output**: Array of lead objects with all fields.

**Note**: Currently no auth required. If admin panel is added later, wrap with admin procedure.

### Router Registration

Register in `api/router.ts`:
```typescript
import { leadRouter } from "./routers/lead";

export const appRouter = router({
  // ... existing routers
  lead: leadRouter,
});
```

## Email Integration

### Library: `nodemailer`

Use Nodemailer for sending email notifications. Configuration via environment variables.

**Email template (new lead notification)**:

Subject: `Uusi yhteydenotto - Holva Toimisto`

Body (HTML):
```html
<h2>Uusi yhteydenotto vastaanotettu</h2>
<p><strong>Nimi:</strong> {name}</p>
<p><strong>Yritys:</strong> {company || "Ei ilmoitettu"}</p>
<p><strong>Puhelin:</strong> {phone}</p>
<p><strong>Sähköposti:</strong> {email}</p>
<p><strong>Viesti:</strong> {message || "Ei viestiä"}</p>
<p><strong>Lähde:</strong> {source}</p>
<p><strong>Aika:</strong> {createdAt}</p>
```

**Environment variables**:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=forms@holvatoimisto.com
SMTP_PASS=<app_password>
NOTIFICATION_EMAIL=forms@holvatoimisto.com
```

**Implementation**:
- Create `api/lib/email.ts` with a `sendLeadNotification(lead)` function
- Use `nodemailer.createTransport` with SMTP config
- Wrap send in try/catch — email failure should NOT fail the form submission
- Log success/failure to console

## Data Flow

```
User fills form → Frontend validation → trpc.lead.submit.mutate()
                                                  ↓
                                       Zod validation (server)
                                                  ↓
                                       Drizzle insert into `leads`
                                                  ↓
                                       Return success to frontend
                                                  ↓
                                       Fire-and-forget email notification
```

## Frontend Integration

### tRPC Client
The frontend uses the existing tRPC client from `@/providers/trpc`. Call the mutation:

```typescript
const submitLead = trpc.lead.submit.useMutation({
  onSuccess: () => {
    setSubmitStatus("success");
  },
  onError: (error) => {
    setSubmitStatus("error");
    setErrorMessage(error.message);
  },
});
```

### Form State Management
Use React `useState` for form fields and submission status:
- `formData`: `{ name, company, phone, email, message }`
- `errors`: Record of field-level validation errors
- `submitStatus`: `"idle" | "submitting" | "success" | "error"`

### Toast Notifications
On successful submission:
- Replace form with thank-you message (as per design.md)
- Optionally show a toast: "Kiitos! Otatan yhteyttä sinuun pian."

On error:
- Show inline error below the submit button
- Keep form data intact so user can retry

## File Structure

```
api/
  routers/
    lead.ts          # Lead router with submit/list procedures
  lib/
    email.ts         # Nodemailer email service
db/
  schema.ts          # Leads table definition
contracts/
  lead.ts            # Shared Zod schemas (if needed)
```

## Implementation Order

1. Add `leads` table to `db/schema.ts`
2. Run `npm run db:push` to sync schema
3. Install `nodemailer` and `@types/nodemailer`
4. Create `api/lib/email.ts` with email transport and notification function
5. Create `api/routers/lead.ts` with submit mutation
6. Register router in `api/router.ts`
7. Wire frontend forms to `trpc.lead.submit.useMutation()`
8. Add loading states and error handling to forms
