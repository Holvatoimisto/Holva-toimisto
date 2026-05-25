import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { useForm } from "@formspree/react";

interface ContactFormProps {
  source?: string;
  title?: string;
  subtitle?: string;
  variant?: "card" | "glass" | "inline";
}

export default function ContactForm({
  source = "hero_form",
  title = "Ota selvää, miltä uudet nettisivut näyttäisivät",
  subtitle = "Täytä tiedot, otamme yhteyttä 24h sisällä.",
  variant = "card",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    hasWebsite: "",
    websiteUrl: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fsState, handleFsSubmit] = useForm("mkoeqovo");

  const submitting = fsState.submitting;
  const succeeded = fsState.succeeded;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nimi vaaditaan";
    if (!formData.phone.trim()) newErrors.phone = "Puhelin vaaditaan";
    if (!formData.email.trim()) {
      newErrors.email = "Sähköposti vaaditaan";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Virheellinen sähköposti";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    handleFsSubmit(e);
  };

  const inputClass =
    "w-full rounded-[10px] px-4 py-3 text-sm transition-all duration-200 outline-none";
  const inputStyle =
    variant === "glass"
      ? {
          backgroundColor: "rgba(255, 255, 255, 0.07)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#FFFFFF",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }
      : {
          backgroundColor: "#F5F5F7",
          border: "1px solid rgba(13, 6, 48, 0.10)",
          color: "var(--form-text)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        };
  const inputFocusStyle =
    variant === "glass"
      ? {
          borderColor: "var(--accent-gold)",
          boxShadow: "0 0 0 3px rgba(200, 172, 75, 0.20)",
          backgroundColor: "rgba(255, 255, 255, 0.10)",
        }
      : {
          borderColor: "var(--accent-gold)",
          boxShadow: "0 0 0 3px rgba(200, 172, 75, 0.15)",
        };
  const blurReset =
    variant === "glass"
      ? { borderColor: "rgba(255, 255, 255, 0.15)", boxShadow: "none", backgroundColor: "rgba(255, 255, 255, 0.07)" }
      : { borderColor: "rgba(13, 6, 48, 0.10)", boxShadow: "none" };
  const labelStyle = {
    color:
      variant === "card"
        ? "rgba(13, 6, 48, 0.75)"
        : variant === "glass"
          ? "rgba(255, 255, 255, 0.65)"
          : "var(--text-secondary)",
  };
  const headingColor = variant === "card" ? "var(--form-text)" : "var(--text-primary)";
  const subtitleColor =
    variant === "card"
      ? "rgba(13, 6, 48, 0.65)"
      : variant === "glass"
        ? "rgba(255, 255, 255, 0.55)"
        : "var(--text-secondary)";
  const helperColor =
    variant === "card"
      ? "rgba(13, 6, 48, 0.50)"
      : variant === "glass"
        ? "rgba(255, 255, 255, 0.45)"
        : "var(--text-muted)";
  const radioTextColor = variant === "glass" ? "#FFFFFF" : "var(--form-text)";

  const showWebsiteField = formData.hasWebsite === "on_parannusta";

  if (succeeded) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{
          backgroundColor: variant === "glass" ? "rgba(13, 6, 48, 0.55)" : variant === "card" ? "#FFFFFF" : "transparent",
          backdropFilter: variant === "glass" ? "blur(20px)" : "none",
          borderRadius: "16px",
          padding: variant === "card" ? "48px 36px" : "40px 0",
          border: variant === "glass" ? "1px solid rgba(255, 255, 255, 0.12)" : "none",
        }}
      >
        <CheckCircle size={48} style={{ color: "var(--accent-teal)" }} />
        <h3 className="mt-4 text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
          Kiitos!
        </h3>
        <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          Otamme yhteyttä sinuun pian.
        </p>
      </div>
    );
  }

  return (
    <div
      id="contact-form"
      style={{
        backgroundColor: variant === "glass" ? "rgba(13, 6, 48, 0.55)" : variant === "card" ? "#FFFFFF" : "rgba(255,255,255,0.03)",
        backdropFilter: variant === "glass" ? "blur(20px)" : "none",
        WebkitBackdropFilter: variant === "glass" ? "blur(20px)" : "none",
        borderRadius: "16px",
        padding: variant === "card" ? "32px 36px" : "32px",
        boxShadow:
          variant === "card"
            ? "0 32px 80px rgba(0, 0, 0, 0.40), 0 0 1px rgba(0, 0, 0, 0.15)"
            : variant === "glass"
              ? "0 24px 80px rgba(0, 0, 0, 0.50)"
              : "none",
        border:
          variant === "glass"
            ? "1px solid rgba(255, 255, 255, 0.12)"
            : variant === "inline"
              ? "1px solid var(--card-border)"
              : "none",
      }}
    >
      {title && (
        <h3
          className="text-center text-xl font-semibold"
          style={{ color: headingColor, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="mt-3 text-center text-sm" style={{ color: subtitleColor }}>
          {subtitle}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        {/* Nimi */}
        <div>
          <label className="mb-2.5 block text-xs font-medium" style={labelStyle}>Nimi *</label>
          <input type="text" name="Nimi" placeholder="Etunimi Sukunimi" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} style={inputStyle} onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, blurReset)} />
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>

        {/* Yritys */}
        <div>
          <label className="mb-2.5 block text-xs font-medium" style={labelStyle}>Yritys</label>
          <input type="text" name="Yritys" placeholder="Yrityksesi nimi" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} style={inputStyle} onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, blurReset)} />
        </div>

        {/* Puhelin + Email */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2.5 block text-xs font-medium" style={labelStyle}>Puhelin *</label>
            <input type="tel" name="Puhelin" placeholder="+358 XX XXX XXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} style={inputStyle} onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, blurReset)} />
            {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
          </div>
          <div>
            <label className="mb-2.5 block text-xs font-medium" style={labelStyle}>Sähköposti *</label>
            <input type="email" name="email" placeholder="sähköposti@yritys.fi" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} style={inputStyle} onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, blurReset)} />
            {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
          </div>
        </div>

        {/* Onko nettisivut */}
        <div>
          <label className="mb-3 block text-xs font-medium" style={labelStyle}>Onko sinulla jo nettisivut?</label>
          <div className="flex flex-col gap-3">
            <label className="flex cursor-pointer items-center gap-3">
              <input type="radio" name="hasWebsiteRadio" value="ei_viela" checked={formData.hasWebsite === "ei_viela"} onChange={(e) => setFormData({ ...formData, hasWebsite: e.target.value, websiteUrl: "" })} className="h-4 w-4 accent-[var(--accent-gold)]" />
              <span className="text-sm" style={{ color: radioTextColor }}>Ei ole vielä</span>
            </label>
            <label className="flex cursor-pointer items-center gap-3">
              <input type="radio" name="hasWebsiteRadio" value="on_parannusta" checked={formData.hasWebsite === "on_parannusta"} onChange={(e) => setFormData({ ...formData, hasWebsite: e.target.value })} className="h-4 w-4 accent-[var(--accent-gold)]" />
              <span className="text-sm" style={{ color: radioTextColor }}>On, mutta voisi tarvita parannusta</span>
            </label>
          </div>
          <input type="hidden" name="Onko_nettisivut" value={formData.hasWebsite === "on_parannusta" ? "On, mutta voisi tarvita parannusta" : formData.hasWebsite === "ei_viela" ? "Ei ole vielä" : "Ei vastattu"} />
        </div>

        {/* Website URL */}
        {showWebsiteField && (
          <div>
            <label className="mb-2.5 block text-xs font-medium" style={labelStyle}>Kirjoita nykyisten nettisivujen osoite</label>
            <input type="url" name="Nykyinen_sivu" placeholder="https://yrityksesi.fi" value={formData.websiteUrl} onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })} className={inputClass} style={inputStyle} onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, blurReset)} />
          </div>
        )}

        {/* Viesti */}
        <div>
          <label className="mb-2.5 block text-xs font-medium" style={labelStyle}>Viesti (vapaaehtoinen)</label>
          <textarea name="Viesti" rows={3} placeholder="Kerro mikä ei toimi tällä hetkellä tai mitä haluaisit parantaa..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={inputClass} style={{ ...inputStyle, resize: "vertical" as const }} onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)} onBlur={(e) => Object.assign(e.target.style, blurReset)} />
        </div>

        {/* Hidden source */}
        <input type="hidden" name="Lähde" value={source} />

        {/* Submit */}
        <button type="submit" disabled={submitting} className="w-full rounded-[10px] py-[18px] text-sm font-semibold uppercase tracking-wider transition-all duration-300 disabled:opacity-60" style={{ backgroundColor: "var(--accent-gold)", color: "var(--bg-secondary)", letterSpacing: "0.04em", boxShadow: "0 4px 20px rgba(200, 172, 75, 0.25)" }} onMouseEnter={(e) => { if (!submitting) { e.currentTarget.style.backgroundColor = "#D4B85A"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(200, 172, 75, 0.45)"; e.currentTarget.style.transform = "translateY(-2px)"; } }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--accent-gold)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(200, 172, 75, 0.25)"; e.currentTarget.style.transform = "translateY(0)"; }}>
          {submitting ? (
            <span className="flex items-center justify-center gap-2"><Loader2 size={16} className="animate-spin" />Lähetetään...</span>
          ) : "Lähetä minulle demo uusista nettisivuista"}
        </button>

        <div className="flex flex-col items-center gap-1">
          <p className="text-center text-xs" style={{ color: helperColor }}>Täysin ilmainen.</p>
          <p className="text-center text-xs" style={{ color: helperColor }}>Tietoja käsitellään luottamuksellisesti.</p>
        </div>
      </form>
    </div>
  );
}
