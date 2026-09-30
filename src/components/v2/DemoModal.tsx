import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { X, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useForm } from "@formspree/react";
import { useModal } from "@/context/ModalContext";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * DemoModal — globaali primary conversion (spec §28).
 * role=dialog, aria-modal, focus trap, ESC, overlay close,
 * body scroll lock, focus restore, loading/error/success -tilat.
 */
export default function DemoModal() {
  const { open, source, closeModal } = useModal();
  const [rendered, setRendered] = useState(false);
  const [showing, setShowing] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  /* Open/close: scroll lock, focus management, entrance animation */
  useEffect(() => {
    if (open) {
      lastFocusedRef.current = document.activeElement as HTMLElement | null;
      setRendered(true);
      requestAnimationFrame(() => setShowing(true));
      document.body.style.overflow = "hidden";
      // Siirrä fokus dialogiin
      setTimeout(() => closeRef.current?.focus(), 60);
    } else if (rendered) {
      setShowing(false);
      document.body.style.overflow = "";
      const t = setTimeout(() => {
        setRendered(false);
        // Success resetataan vasta sulkemisen jälkeen (spec §28):
        // key-remount nollaa lomakkeen ja Formspree-tilan.
        setFormKey((k) => k + 1);
      }, 300);
      // Palauta fokus avanneeseen elementtiin
      lastFocusedRef.current?.focus?.();
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  /* ESC + focus trap */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeModal();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
          (el) => el.offsetParent !== null
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [open, closeModal, rendered]);

  if (!rendered) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
      style={{ pointerEvents: open ? "auto" : "none" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      {/* Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundColor: "rgba(15, 36, 56, 0.6)",
          opacity: showing ? 1 : 0,
        }}
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        className="relative z-10 flex max-h-[100dvh] w-full flex-col overflow-y-auto bg-white transition-all duration-300 sm:max-h-[92dvh] sm:max-w-[520px] sm:rounded-[16px]"
        style={{
          boxShadow: "var(--shadow-modal)",
          opacity: showing ? 1 : 0,
          transform: showing ? "translateY(0)" : "translateY(16px)",
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b px-6 pt-6 pb-5 sm:px-8" style={{ borderColor: "var(--line)" }}>
          <div>
            <h2 id="demo-modal-title" className="t-h3">
              Pyydä demo
            </h2>
            <p className="t-small mt-2" style={{ color: "var(--muted)" }}>
              Kertokaa meille lyhyesti yrityksestänne. Rakennamme ensimmäisen suunnan ja otamme yhteyttä
              demotapaamista varten.
            </p>
          </div>
          <button
            ref={closeRef}
            onClick={closeModal}
            aria-label="Sulje ikkuna"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] transition-colors"
            style={{ color: "var(--muted)", border: "1px solid var(--line)" }}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 sm:px-8">
          <DemoForm key={formKey} source={source} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
}

/* ── Lomake erillisessä komponentissa: key-remount nollaa tilan ── */

function DemoForm({ source, onClose }: { source: string; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    improvement: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fsState, handleFsSubmit] = useForm("mkoeqovo");

  const submitting = fsState.submitting;
  const succeeded = fsState.succeeded;
  const failed = !submitting && !succeeded && fsState.errors && Object.keys(fsState.errors).length > 0;

  const inputCls =
    "w-full rounded-[8px] border bg-white px-4 py-3 text-[16px] text-navy outline-none transition-colors duration-200 placeholder:text-[#66748A66]";
  const inputStyle = (hasErr?: boolean): React.CSSProperties => ({
    borderColor: hasErr ? "#B42318" : "var(--line-strong)",
  });

  const validate = () => {
    const ne: Record<string, string> = {};
    if (!formData.name.trim()) ne.name = "Nimi vaaditaan";
    if (!formData.company.trim()) ne.company = "Yritys vaaditaan";
    if (!formData.email.trim()) ne.email = "Sähköposti vaaditaan";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) ne.email = "Tarkista sähköpostiosoite";
    setErrors(ne);
    return Object.keys(ne).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    handleFsSubmit(e);
  };

  const set =
    (k: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((p) => ({ ...p, [k]: e.target.value }));

  if (succeeded) {
    return (
      <div className="flex flex-col items-center py-10 text-center" role="status" aria-live="polite">
        <CheckCircle2 size={44} style={{ color: "var(--navy)" }} aria-hidden="true" />
        <p className="t-h3 mt-5">Kiitos, demopyyntö on vastaanotettu.</p>
        <p className="t-body mt-3" style={{ color: "var(--body)" }}>
          Rakennamme ensimmäisen suunnan ja otamme yhteyttä demotapaamisen sopimiseksi.
        </p>
        <button onClick={onClose} className="btn btn-primary btn-block-mobile mt-8">
          Sulje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Nimi" required error={errors.name} htmlFor="dm-name">
          <input
            id="dm-name"
            type="text"
            name="Nimi"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            value={formData.name}
            onChange={set("name")}
            className={inputCls}
            style={inputStyle(!!errors.name)}
          />
        </Field>
        <Field label="Yritys" required error={errors.company} htmlFor="dm-company">
          <input
            id="dm-company"
            type="text"
            name="Yritys"
            autoComplete="organization"
            required
            aria-invalid={!!errors.company}
            value={formData.company}
            onChange={set("company")}
            className={inputCls}
            style={inputStyle(!!errors.company)}
          />
        </Field>
      </div>

      <Field label="Verkkosivusto" htmlFor="dm-website">
        <input
          id="dm-website"
          type="url"
          name="Verkkosivusto"
          autoComplete="url"
          placeholder="https://yrityksenne.fi"
          value={formData.website}
          onChange={set("website")}
          className={inputCls}
          style={inputStyle()}
        />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Sähköposti" required error={errors.email} htmlFor="dm-email">
          <input
            id="dm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            value={formData.email}
            onChange={set("email")}
            className={inputCls}
            style={inputStyle(!!errors.email)}
          />
        </Field>
        <Field label="Puhelin" htmlFor="dm-phone">
          <input
            id="dm-phone"
            type="tel"
            name="Puhelin"
            autoComplete="tel"
            value={formData.phone}
            onChange={set("phone")}
            className={inputCls}
            style={inputStyle()}
          />
        </Field>
      </div>

      <Field label="Mikä nykyisessä sivustossanne kaipaa eniten parannusta?" htmlFor="dm-improvement">
        <textarea
          id="dm-improvement"
          name="Parannustarve"
          rows={3}
          value={formData.improvement}
          onChange={set("improvement")}
          className={inputCls}
          style={{ ...inputStyle(), resize: "vertical" }}
        />
      </Field>

      <input type="hidden" name="Lähde" value={`demo_modal — ${source}`} />

      {failed && (
        <p
          role="alert"
          className="t-small flex items-center gap-2 rounded-[8px] border px-4 py-3"
          style={{ color: "#B42318", borderColor: "#B4231840", backgroundColor: "#B423180D" }}
        >
          <AlertCircle size={16} aria-hidden="true" className="shrink-0" />
          Viestin lähetys ei onnistunut. Yrittäkää hetken kuluttua uudelleen tai lähettäkää viesti suoraan
          osoitteeseen hei@holvatoimisto.fi.
        </p>
      )}

      <button type="submit" disabled={submitting} className="btn btn-primary w-full">
        {submitting ? (
          <span className="flex items-center gap-2">
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Lähetetään…
          </span>
        ) : (
          "Pyydä demo"
        )}
      </button>

      <p className="t-meta text-center" style={{ color: "var(--muted)" }}>
        Maksuton demo. Ei sitoutumista.
      </p>
      <p className="t-meta text-center" style={{ color: "var(--muted)" }}>
        Käytämme tietojanne vain yhteydenottoonne vastaamiseen.{" "}
        <Link
          to="/tietosuojaseloste"
          onClick={onClose}
          className="underline underline-offset-2"
          style={{ color: "var(--navy)" }}
        >
          Tietosuojaseloste
        </Link>
      </p>
    </form>
  );
}

function Field({
  label,
  required = false,
  error,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="t-small mb-2 block font-medium" style={{ color: "var(--ink)" }}>
        {label}
        {required && (
          <span aria-hidden="true" style={{ color: "#B42318" }}>
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p role="alert" className="t-meta mt-1.5" style={{ color: "#B42318" }}>
          {error}
        </p>
      )}
    </div>
  );
}
