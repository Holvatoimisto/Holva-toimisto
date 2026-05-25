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
  const iBase = "w-full rounded-[10px] px-3.5 py-2.5 text-[13px] outline-none transition-all duration-200";
  const iSt = { backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", color: "#E2E8F0" };
  const iFo = { borderColor: "var(--accent-gold)", boxShadow: "0 0 0 3px rgba(200,172,75,0.15)", backgroundColor: "rgba(255,255,255,0.08)" };
  const iBl = { borderColor: "rgba(255,255,255,0.10)", boxShadow: "none", backgroundColor: "rgba(255,255,255,0.05)" };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
      style={{ pointerEvents: open ? "auto" : "none" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0" style={{
        backgroundColor: "rgba(9, 16, 30, 0.78)",
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
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 40px 120px rgba(0,0,0,0.50), 0 0 0 1px rgba(200,172,75,0.06)",
          transform: showing ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
          opacity: showing ? 1 : 0,
          transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease",
        }}
      >
        {/* Close */}
        <button onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200"
          style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.4)" }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}>
          <X size={14} />
        </button>

        {/* Inner — 2 columns */}
        <div className="flex flex-col lg:flex-row overflow-auto" style={{
          backgroundColor: "rgba(9, 21, 37, 0.92)",
          backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
        }}>

          {/* ── LEFT: Copy ── */}
          <div className="hidden lg:flex lg:flex-col lg:shrink-0" style={{
            width: "340px",
            borderRight: "1px solid rgba(255,255,255,0.05)",
            backgroundColor: "rgba(13, 31, 53, 0.35)",
            padding: "40px 36px 44px",
          }}>
            {/* Eyebrow */}
            <p className="text-[11px] font-normal uppercase tracking-[0.18em]" style={{ color: "rgba(200,172,75,0.55)" }}>
              Pyydä henkilökohtainen demo
            </p>

            {/* Headline */}
            <p className="mt-8 text-[17px] leading-[1.55] font-light" style={{ color: "var(--text-secondary)" }}>
              Rakennamme sinulle henkilökohtaisen Loom-videodemon siitä, miltä verkkosivustosi voisi näyttää ja tuntua.
            </p>

            {/* Sub text */}
            <p className="mt-5 text-[13px] leading-[1.65] font-light" style={{ color: "rgba(148,163,184,0.5)" }}>
              Saat selkeän suunnan, visuaalisen idean ja konkreettisia parannusehdotuksia ilman sitoutumista.
            </p>

            {/* Reassurance */}
            <div className="mt-8 flex flex-col gap-2">
              {["Ei myyntipuhelua", "Ei sitoutumista", "Selkeä prosessi"].map((t) => (
                <span key={t} className="text-[12px] font-light" style={{ color: "rgba(148,163,184,0.45)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="flex-1 overflow-y-auto px-6 py-5 lg:px-7 lg:py-6">
            {/* Mobile header */}
            <div className="mb-4 lg:hidden">
              <p className="text-[11px] font-normal uppercase tracking-[0.16em]" style={{ color: "rgba(200,172,75,0.6)" }}>
                Pyydä henkilökohtainen demo
              </p>
              <p className="mt-1 text-xs font-light" style={{ color: "var(--text-muted)" }}>
                Rakennamme sinulle henkilökohtaisen Loom-demonstration.
              </p>
            </div>

            {succeeded ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={40} style={{ color: "var(--accent-teal)" }} />
                <h3 className="mt-4 text-base font-medium" style={{ color: "var(--text-primary)" }}>Kiitos!</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>Otamme yhteyttä sinuun pian.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                {/* Row 1: Nimi + Yritys */}
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <F label="Nimi *" e={errors.name}>
                    <input type="text" name="Nimi" placeholder="Etunimi Sukunimi" value={formData.name} onChange={sf("name")} className={iBase} style={iSt} onFocusCapture={(e) => Object.assign(e.target.style, iFo)} onBlur={(e) => Object.assign(e.target.style, iBl)} />
                  </F>
                  <F label="Yritys">
                    <input type="text" name="Yritys" placeholder="Yrityksesi nimi" value={formData.company} onChange={sf("company")} className={iBase} style={iSt} onFocusCapture={(e) => Object.assign(e.target.style, iFo)} onBlur={(e) => Object.assign(e.target.style, iBl)} />
                  </F>
                </div>

                {/* Row 2: Puhelin + Sähköposti */}
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <F label="Puhelin *" e={errors.phone}>
                    <input type="tel" name="Puhelin" placeholder="+358 ..." value={formData.phone} onChange={sf("phone")} className={iBase} style={iSt} onFocusCapture={(e) => Object.assign(e.target.style, iFo)} onBlur={(e) => Object.assign(e.target.style, iBl)} />
                  </F>
                  <F label="Sähköposti *" e={errors.email}>
                    <input type="email" name="email" placeholder="sähköposti@yritys.fi" value={formData.email} onChange={sf("email")} className={iBase} style={iSt} onFocusCapture={(e) => Object.assign(e.target.style, iFo)} onBlur={(e) => Object.assign(e.target.style, iBl)} />
                  </F>
                </div>

                {/* Hidden source field */}
                <input type="hidden" name="Lähde" value="popup_modal" />

                {/* Row 3: Segmented selector */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium" style={{ color: "var(--text-muted)" }}>
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
                    <input type="url" name="Nykyinen_sivu" placeholder="https://yrityksesi.fi" value={formData.websiteUrl} onChange={sf("websiteUrl")} className={iBase} style={iSt} onFocusCapture={(e) => Object.assign(e.target.style, iFo)} onBlur={(e) => Object.assign(e.target.style, iBl)} />
                  </F>
                )}

                {/* Viesti */}
                <F label="Viesti (vapaaehtoinen)">
                  <textarea rows={2} name="Viesti" placeholder="Kerro lyhyesti tarpeestasi..." value={formData.message} onChange={sf("message")} className={iBase} style={{ ...iSt, resize: "vertical" } as React.CSSProperties} onFocusCapture={(e) => Object.assign(e.target.style, iFo)} onBlur={(e) => Object.assign(e.target.style, iBl)} />
                </F>

                {/* Submit */}
                <button type="submit" disabled={submitting}
                  className="mt-1 w-full rounded-[10px] py-[12px] text-sm font-normal tracking-wide transition-all duration-300 disabled:opacity-60"
                  style={{
                    backgroundColor: "var(--accent-gold)", color: "var(--bg-secondary)",
                    letterSpacing: "0.02em",
                    boxShadow: "0 4px 16px rgba(200,172,75,0.20)",
                  }}
                  onMouseEnter={(e) => { if (!submitting) { e.currentTarget.style.backgroundColor = "#D4B85A"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(200,172,75,0.35)"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--accent-gold)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(200,172,75,0.20)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2"><Loader2 size={14} className="animate-spin" />Lähetetään...</span>
                  ) : "Pyydä demo"}
                </button>

                <p className="text-center text-[11px] font-light" style={{ color: "rgba(148,163,184,0.35)" }}>
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
      <label className="mb-1 block text-[11px] font-medium" style={{ color: "var(--text-muted)" }}>{label}</label>
      {children}
      {e && <p className="mt-1 text-xs text-red-400">{e}</p>}
    </div>
  );
}

/* ── Segmented button ── */
function BtnS({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick}
      className="rounded-[10px] py-2 text-xs font-normal transition-all duration-200"
      style={{
        backgroundColor: active ? "rgba(200,172,75,0.12)" : "rgba(255,255,255,0.04)",
        border: active ? "1.5px solid rgba(200,172,75,0.45)" : "1px solid rgba(255,255,255,0.10)",
        color: active ? "var(--accent-gold)" : "var(--text-secondary)",
      }}>
      {children}
    </button>
  );
}
