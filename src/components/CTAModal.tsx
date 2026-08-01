import { useState, useEffect } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { useForm } from "@formspree/react";

interface CTAModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CTAModal({ open, onClose }: CTAModalProps) {
  const [visible, setVisible] = useState(false);
  const [showing, setShowing] = useState(false);
  const [formData, setFormData] = useState({
    name: "", company: "", phone: "", email: "",
    hasWebsite: "", websiteUrl: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fsState, handleFsSubmit] = useForm("mkoeqovo");

  const submitting = fsState.submitting;
  const succeeded = fsState.succeeded;

  /* ── visibility + animation ──────────────────────────── */
  useEffect(() => {
    if (open) {
      setVisible(true);
      requestAnimationFrame(() => setShowing(true));
      document.body.style.overflow = "hidden";
    } else {
      setShowing(false);
      document.body.style.overflow = "";
      const t = setTimeout(() => setVisible(false), 350);
      return () => clearTimeout(t);
    }
  }, [open]);

  /* ── ESC ────────────────────────────────────────────── */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape" && open) onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [open, onClose]);

  /* ── validate ──────────────────────────────── */
  const validate = () => {
    const ne: Record<string, string> = {};
    if (!formData.name.trim()) ne.name = "Nimi vaaditaan";
    if (!formData.phone.trim()) ne.phone = "Puhelin vaaditaan";
    if (!formData.email.trim()) ne.email = "Sähköposti vaaditaan";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) ne.email = "Virheellinen";
    setErrors(ne);
    return Object.keys(ne).length === 0;
  };

  /* ── submit wrapper (client-side validate → Formspree) ── */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    // Let Formspree handle the actual submit
    handleFsSubmit(e);
  };

  const sf = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((p) => ({ ...p, [k]: e.target.value }));

  /* ── input style ────────────────────────────────────── */
  const iBase = "editorial-input w-full rounded-[10px] px-3.5 py-2.5 transition-all duration-200";

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
      style={{ pointerEvents: open ? "auto" : "none" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0" style={{
        backgroundColor: "rgba(51, 46, 37, 0.68)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        opacity: showing ? 1 : 0, transition: "opacity 0.35s ease",
      }} />

      {/* Modal */}
      <div
        className="relative z-10 flex flex-col overflow-hidden"
        style={{
          width: "100%",
          maxWidth: "880px",
          maxHeight: "min(92vh, 600px)",
          borderRadius: "16px",
          border: "1px solid var(--border-subtle)",
          boxShadow: "0 40px 120px rgba(51,46,37,0.28)",
          transform: showing ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
          opacity: showing ? 1 : 0,
          transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease",
        }}
      >
        {/* Close */}
        <button onClick={onClose}
          className="editorial-focus absolute right-4 top-4 z-30 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200"
          style={{ backgroundColor: "var(--surface-secondary)", border: "1px solid var(--border-strong)", color: "var(--text-primary-editorial)" }}>
          <X size={14} />
        </button>

        {/* Inner — 2 columns */}
        <div className="flex flex-col lg:flex-row overflow-auto" style={{
          backgroundColor: "var(--surface-primary)",
          backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
        }}>

          {/* ── LEFT: Copy ── */}
          <div className="hidden lg:flex lg:flex-col lg:shrink-0" style={{
            width: "340px",
            borderRight: "1px solid rgba(185,183,177,0.34)",
            backgroundColor: "var(--surface-inverse)",
            padding: "40px 36px 44px",
          }}>
            {/* Eyebrow */}
            <p className="text-[13px] font-semibold uppercase leading-[1.4] tracking-[0.10em]" style={{ color: "var(--text-inverse-secondary)" }}>
              Pyydä henkilökohtainen demo
            </p>

            {/* Headline */}
            <p className="mt-8 text-[18px] leading-[1.6] font-normal" style={{ color: "var(--text-inverse)" }}>
              Rakennamme yrityksellenne henkilökohtaisen demon uudesta verkkosivusuunnasta ja sovimme demotapaamisen kanssanne.
            </p>

            {/* Sub text */}
            <p className="mt-5 text-[16px] leading-[1.6] font-normal" style={{ color: "var(--text-inverse-secondary)" }}>
              Saat selkeän suunnan, visuaalisen idean ja konkreettisia parannusehdotuksia ilman sitoutumista.
            </p>

            {/* Reassurance */}
            <div className="mt-8 flex flex-col gap-2">
              {["Ei myyntipuhelua", "Ei sitoutumista", "Selkeä prosessi"].map((t) => (
                <span key={t} className="text-[14px] leading-[1.55] font-normal" style={{ color: "var(--text-inverse-secondary)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="flex-1 overflow-y-auto px-6 py-5 lg:px-7 lg:py-6">
            {/* Mobile header */}
            <div className="mb-4 lg:hidden">
              <p className="text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.10em]" style={{ color: "var(--text-primary-editorial)" }}>
                Pyydä henkilökohtainen demo
              </p>
              <p className="mt-1 text-[16px] leading-[1.6] font-normal" style={{ color: "var(--text-secondary-editorial)" }}>
                Rakennamme yrityksellenne henkilökohtaisen demon uudesta verkkosivusuunnasta.
              </p>
            </div>

            {succeeded ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={40} style={{ color: "var(--accent-primary)" }} />
                <h3 className="mt-4 text-[18px] font-semibold" style={{ color: "var(--text-primary-editorial)" }}>Kiitos!</h3>
                <p className="mt-2 text-[16px] leading-[1.6]" style={{ color: "var(--text-secondary-editorial)" }}>Otamme yhteyttä sinuun pian.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                {/* Row 1: Nimi + Yritys */}
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <F label="Nimi *" e={errors.name}>
                    <input type="text" name="Nimi" placeholder="Etunimi Sukunimi" value={formData.name} onChange={sf("name")} className={iBase} />
                  </F>
                  <F label="Yritys">
                    <input type="text" name="Yritys" placeholder="Yrityksesi nimi" value={formData.company} onChange={sf("company")} className={iBase} />
                  </F>
                </div>

                {/* Row 2: Puhelin + Sähköposti */}
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <F label="Puhelin *" e={errors.phone}>
                    <input type="tel" name="Puhelin" placeholder="+358 ..." value={formData.phone} onChange={sf("phone")} className={iBase} />
                  </F>
                  <F label="Sähköposti *" e={errors.email}>
                    <input type="email" name="email" placeholder="sähköposti@yritys.fi" value={formData.email} onChange={sf("email")} className={iBase} />
                  </F>
                </div>

                {/* Hidden source field */}
                <input type="hidden" name="Lähde" value="popup_modal" />

                {/* Row 3: Segmented selector */}
                <div>
                  <label className="mb-1.5 block text-[14px] font-semibold leading-[1.4]" style={{ color: "var(--text-primary-editorial)" }}>
                    Onko sinulla jo nettisivut?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <BtnS active={formData.hasWebsite === "ei"} onClick={() => setFormData((p) => ({ ...p, hasWebsite: "ei", websiteUrl: "" }))}>
                      Ei vielä
                    </BtnS>
                    <BtnS active={formData.hasWebsite === "kylla"} onClick={() => setFormData((p) => ({ ...p, hasWebsite: "kylla" }))}>
                      Nykyiset sivut löytyy
                    </BtnS>
                  </div>
                  {/* Hidden field for Formspree */}
                  <input type="hidden" name="Onko_nettisivut" value={formData.hasWebsite === "kylla" ? "Kyllä" : formData.hasWebsite === "ei" ? "Ei" : "Ei vastattu"} />
                </div>

                {/* URL — conditional */}
                {formData.hasWebsite === "kylla" && (
                  <F label="Nykyisten sivujen osoite">
                    <input type="url" name="Nykyinen_sivu" placeholder="https://yrityksesi.fi" value={formData.websiteUrl} onChange={sf("websiteUrl")} className={iBase} />
                  </F>
                )}

                {/* Viesti */}
                <F label="Viesti (vapaaehtoinen)">
                  <textarea rows={2} name="Viesti" placeholder="Kerro lyhyesti tarpeestasi..." value={formData.message} onChange={sf("message")} className={iBase} style={{ resize: "vertical" } as React.CSSProperties} />
                </F>

                {/* Submit */}
                <button type="submit" disabled={submitting}
                  className="editorial-button editorial-button-primary mt-1 w-full rounded-[10px] py-[12px] transition-all duration-300">
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2"><Loader2 size={14} className="animate-spin" />Lähetetään...</span>
                  ) : "Pyydä demo"}
                </button>

                <p className="text-center text-[14px] leading-[1.55] font-normal" style={{ color: "var(--text-secondary-editorial)" }}>
                  Ilmainen. Luottamuksellinen.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Field helper ── */
function F({ label, e, children }: { label: string; e?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1 block text-[14px] font-semibold leading-[1.4]" style={{ color: "var(--text-primary-editorial)" }}>{label}</label>
      {children}
      {e && <p className="mt-1 border-l-2 pl-2 text-[14px] font-medium leading-[1.5]" style={{ borderColor: "var(--accent-primary)", color: "var(--text-primary-editorial)" }}>{e}</p>}
    </div>
  );
}

/* ── Segmented button ── */
function BtnS({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick}
      className="editorial-focus rounded-[10px] py-2 text-[14px] font-medium leading-[1.4] transition-all duration-200"
      style={{
        backgroundColor: active ? "var(--surface-secondary)" : "var(--surface-primary)",
        border: active ? "1.5px solid var(--accent-primary)" : "1px solid var(--border-strong)",
        color: active ? "var(--text-primary-editorial)" : "var(--text-secondary-editorial)",
      }}>
      {children}
    </button>
  );
}
