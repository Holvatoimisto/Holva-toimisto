import { useEffect, useRef, useState } from "react";
import { Mail, CheckCircle, Loader2, ChevronDown } from "lucide-react";
import { useForm } from "@formspree/react";
import gsap from "gsap";
import Footer from "@/components/Footer";

/* ── Reusable input style ─────────────────────────────── */
const inputBase = {
  backgroundColor: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.10)",
  color: "#E2E8F0",
  borderRadius: "10px",
  padding: "12px 16px",
  fontSize: "14px",
  width: "100%" as const,
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};
const inputFocus = {
  borderColor: "var(--accent-gold)",
  boxShadow: "0 0 0 3px rgba(200,172,75,0.15)",
};

/* ── Collapsible form ──────────────────────────────────── */
function CollapsibleContactForm() {
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: "", company: "", phone: "", email: "",
    hasWebsite: "", websiteUrl: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fsState, handleFsSubmit] = useForm("mkoeqovo");

  const submitting = fsState.submitting;
  const succeeded = fsState.succeeded;
  const showWebsiteField = formData.hasWebsite === "on_parannusta";

  const validate = () => {
    const ne: Record<string, string> = {};
    if (!formData.name.trim()) ne.name = "Nimi vaaditaan";
    if (!formData.phone.trim()) ne.phone = "Puhelin vaaditaan";
    if (!formData.email.trim()) ne.email = "Sähköposti vaaditaan";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) ne.email = "Virheellinen sähköposti";
    setErrors(ne);
    return Object.keys(ne).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    handleFsSubmit(e);
  };

  const open = () => setExpanded(true);
  const sf = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((p) => ({ ...p, [k]: e.target.value }));
  const fw = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    Object.assign(e.target.style, inputFocus);
  const fb = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    Object.assign(e.target.style, { borderColor: "rgba(255,255,255,0.10)", boxShadow: "none" });

  if (succeeded) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[16px] border border-white/[0.08] py-16 text-center"
        style={{ backgroundColor: "rgba(13,6,48,0.45)", backdropFilter: "blur(20px)" }}>
        <CheckCircle size={44} style={{ color: "var(--accent-teal)" }} />
        <h3 className="mt-4 text-lg font-medium" style={{ color: "var(--text-primary)" }}>Kiitos!</h3>
        <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>Otamme yhteyttä sinuun pian.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}
      className="rounded-[16px] border border-white/[0.08]"
      style={{ backgroundColor: "rgba(13,6,48,0.40)", backdropFilter: "blur(20px)", boxShadow: "0 24px 80px rgba(0,0,0,0.35)" }}>

      {/* Header */}
      <div className="px-6 pt-6 lg:px-8 lg:pt-8">
        <h3 className="text-center text-lg font-medium" style={{ color: "var(--text-primary)" }}>
          Pyydä henkilökohtainen demo
        </h3>
        <p className="mt-2 text-center text-sm" style={{ color: "var(--text-muted)" }}>
          Täytä tiedot, lähetämme sinulle Loom-videodemon 3 päivän sisällä.
        </p>
      </div>

      {/* Always-visible: name / company / phone / email */}
      <div className="px-6 pt-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <Field label="Nimi *" error={errors.name}>
            <input type="text" name="Nimi" placeholder="Etunimi Sukunimi" value={formData.name} onChange={sf("name")} onFocus={open} style={inputBase} onFocusCapture={fw} onBlur={fb} />
          </Field>
          <Field label="Yritys">
            <input type="text" name="Yritys" placeholder="Yrityksesi nimi" value={formData.company} onChange={sf("company")} onFocus={open} style={inputBase} onFocusCapture={fw} onBlur={fb} />
          </Field>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Puhelin *" error={errors.phone}>
              <input type="tel" name="Puhelin" placeholder="+358 XX XXX XXXX" value={formData.phone} onChange={sf("phone")} onFocus={open} style={inputBase} onFocusCapture={fw} onBlur={fb} />
            </Field>
            <Field label="Sähköposti *" error={errors.email}>
              <input type="email" name="email" placeholder="sähköposti@yritys.fi" value={formData.email} onChange={sf("email")} onFocus={open} style={inputBase} onFocusCapture={fw} onBlur={fb} />
            </Field>
          </div>
        </div>
      </div>

      {/* Hidden source field */}
      <input type="hidden" name="Lähde" value="ota_yhteytta_sivu" />

      {/* White blur overlay + expand trigger (collapsed only) */}
      {!expanded && (
        <div className="relative">
          <div className="pointer-events-none" style={{
            height: "90px",
            background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.12) 100%)",
          }} />
          <div className="pointer-events-none" style={{
            height: "40px",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            marginTop: "-1px",
          }} />
          <button type="button" onClick={open}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pb-4 pt-3 text-xs tracking-wide transition-colors duration-200 hover:text-white"
            style={{ color: "rgba(200,172,75,0.65)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(200,172,75,0.9)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(200,172,75,0.65)"; }}>
            <span className="font-normal">Näytä koko lomake</span>
            <ChevronDown size={14} className="mt-1" />
          </button>
        </div>
      )}

      {/* Collapsed fields (expanded only) */}
      {expanded && (
        <div className="px-6 pb-6 pt-4 lg:px-8 lg:pb-8">
          <div className="flex flex-col gap-4">
            {/* Radio */}
            <div className="pt-2">
              <label className="mb-2 block text-xs font-medium" style={{ color: "var(--text-muted)" }}>Onko sinulla jo nettisivut?</label>
              <div className="flex flex-col gap-2">
                <label className="flex cursor-pointer items-center gap-2.5">
                  <input type="radio" name="hasWebsiteRadio" value="ei_viela" checked={formData.hasWebsite === "ei_viela"}
                    onChange={(e) => setFormData((p) => ({ ...p, hasWebsite: e.target.value, websiteUrl: "" }))}
                    className="h-4 w-4 accent-[var(--accent-gold)]" />
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Ei ole vielä</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2.5">
                  <input type="radio" name="hasWebsiteRadio" value="on_parannusta" checked={formData.hasWebsite === "on_parannusta"}
                    onChange={(e) => setFormData((p) => ({ ...p, hasWebsite: e.target.value }))}
                    className="h-4 w-4 accent-[var(--accent-gold)]" />
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>On, mutta voisi tarvita parannusta</span>
                </label>
              </div>
              <input type="hidden" name="Onko_nettisivut" value={formData.hasWebsite === "on_parannusta" ? "On, mutta voisi tarvita parannusta" : formData.hasWebsite === "ei_viela" ? "Ei ole vielä" : "Ei vastattu"} />
            </div>

            {/* URL */}
            {showWebsiteField && (
              <Field label="Nykyisten nettisivujen osoite">
                <input type="url" name="Nykyinen_sivu" placeholder="https://yrityksesi.fi" value={formData.websiteUrl} onChange={sf("websiteUrl")} style={inputBase} onFocusCapture={fw} onBlur={fb} />
              </Field>
            )}

            {/* Message */}
            <Field label="Viesti (vapaaehtoinen)">
              <textarea name="Viesti" rows={3} placeholder="Kerro mikä ei toimi tällä hetkellä tai mitä haluaisit parantaa..." value={formData.message} onChange={sf("message")} style={{ ...inputBase, resize: "vertical" } as React.CSSProperties} onFocusCapture={fw} onBlur={fb} />
            </Field>

            {/* Submit */}
            <SubmitButton status={submitting ? "submitting" : "idle"} />
          </div>
        </div>
      )}
    </form>
  );
}

/* ── Small helpers ──────────────────────────────────────── */
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium" style={{ color: "var(--text-muted)" }}>{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function SubmitButton({ status }: { status: string }) {
  const hover = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (status === "submitting") return;
    e.currentTarget.style.backgroundColor = "#D4B85A";
    e.currentTarget.style.boxShadow = "0 8px 28px rgba(200,172,75,0.35)";
    e.currentTarget.style.transform = "translateY(-2px)";
  };
  const leave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "var(--accent-gold)";
    e.currentTarget.style.boxShadow = "0 4px 20px rgba(200,172,75,0.20)";
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <>
      <button type="submit" disabled={status === "submitting"}
        className="mt-2 w-full rounded-[10px] py-[14px] text-sm font-medium tracking-wide transition-all duration-300 disabled:opacity-60"
        style={{ backgroundColor: "var(--accent-gold)", color: "var(--bg-secondary)", letterSpacing: "0.02em", boxShadow: "0 4px 20px rgba(200,172,75,0.20)" }}
        onMouseEnter={hover} onMouseLeave={leave}>
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2"><Loader2 size={16} className="animate-spin" />Lähetetään...</span>
        ) : "Lähetä minulle demo uusista nettisivuista"}
      </button>
      <div className="flex flex-col items-center gap-0.5">
        <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>Täysin ilmainen.</p>
        <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>Tietoja käsitellään luottamuksellisesti.</p>
      </div>
    </>
  );
}

/* ── Main Contact page ──────────────────────────────────── */
export default function Contact() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = heroRef.current?.querySelectorAll(".contact-anim");
      if (els) {
        gsap.fromTo(els, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.2,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative" style={{ paddingTop: "calc(var(--nav-height) + 80px)", paddingBottom: "60px", backgroundColor: "#091525" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(200,172,75,0.10) 50%, transparent 100%)" }} />
        <div ref={heroRef} className="mx-auto text-center px-6" style={{ maxWidth: "680px" }}>
          <p className="contact-anim text-[11px] font-normal uppercase tracking-[0.16em]" style={{ color: "rgba(200,172,75,0.65)" }}>Ota yhteyttä</p>
          <h1 className="contact-anim mt-3 text-[2rem] leading-[1.08] sm:text-[2.4rem] lg:text-[2.8rem]" style={{ color: "var(--text-primary)", fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.02em" }}>
            Keskustellaan yrityksesi verkkosivustosta.
          </h1>
          <p className="contact-anim mt-4 text-[15px] leading-[1.65] font-light" style={{ color: "var(--text-secondary)" }}>
            Voit pyytää henkilökohtaisen demon, kysyä projektista tai ottaa yhteyttä matalalla kynnyksellä. Vastaamme yleensä 24 tunnin sisällä.
          </p>
        </div>
      </section>

      {/* Contact Methods + Form */}
      <section style={{ backgroundColor: "#0d1f35", padding: "80px 24px" }}>
        <div className="mx-auto grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12" style={{ maxWidth: "1100px" }}>
          {/* LEFT — Contact Info */}
          <div>
            <h2 className="text-[1.4rem] leading-[1.15] sm:text-[1.6rem]" style={{ color: "var(--text-primary)", fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.01em" }}>
              Yhteydenotto ilman turhaa kitkaa.
            </h2>
            <p className="mt-4 text-[14px] leading-[1.7] font-light" style={{ color: "var(--text-secondary)" }}>
              Voit ottaa yhteyttä lomakkeella tai suoraan sähköpostilla ja somessa. Tärkeintä on, että ensimmäinen askel tuntuu helpolta.
            </p>

            {/* Details */}
            <div className="mt-10 flex flex-col gap-6">
              <ContactRow icon={<Mail size={16} style={{ color: "var(--accent-gold)" }} />} label="Sähköposti"
                href="mailto:hei@holvatoimisto.fi" value="hei@holvatoimisto.fi" />
              <ContactRow icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-gold)" }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              } label="Instagram" href="https://www.instagram.com/holvatoimisto/" value="@holvatoimisto" />
              <ContactRow icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-gold)" }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              } label="LinkedIn" href="https://www.linkedin.com/in/holva-toimisto-545961400" value="Holva Toimisto" />
            </div>

            {/* Divider + philosophy */}
            <div className="mt-12" style={{ height: "1px", background: "linear-gradient(90deg, rgba(200,172,75,0.08) 0%, transparent 100%)" }} />
            <p className="mt-10 text-[14px] leading-[1.7] font-light italic" style={{ color: "rgba(148,163,184,0.45)" }}>
              "Näkyvyys ei korjaa heikkoa perustaa."
            </p>
          </div>

          {/* RIGHT — Form */}
          <CollapsibleContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ── Contact row helper ─────────────────────────────────── */
function ContactRow({ icon, label, href, value }: { icon: React.ReactNode; label: string; href: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(200,172,75,0.08)", border: "1px solid rgba(200,172,75,0.15)" }}>
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>{label}</p>
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="mt-0.5 block text-sm transition-colors duration-200 hover:text-white" style={{ color: "var(--accent-gold)" }}>
          {value}
        </a>
      </div>
    </div>
  );
}
