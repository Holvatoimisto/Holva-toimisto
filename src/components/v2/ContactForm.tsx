import { useState } from "react";
import { Link } from "react-router";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useForm } from "@formspree/react";

const AIHEET = ["Verkkosivuprojekti", "Kasvupaketti", "Yhteistyö", "Muu kysymys"];

/**
 * Yhteydenottolomake (spec §23.3).
 * Formspree, label-assosiaatiot, autocomplete, aria-invalid, aria-live -tilat.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    topic: "Verkkosivuprojekti",
    message: "",
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
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFormData((p) => ({ ...p, [k]: e.target.value }));

  if (succeeded) {
    return (
      <div
        id="yhteydenottolomake"
        className="flex flex-col items-center rounded-[12px] border bg-white px-8 py-16 text-center"
        style={{ borderColor: "var(--line)", boxShadow: "var(--shadow-card)" }}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 size={44} style={{ color: "var(--navy)" }} aria-hidden="true" />
        <p className="t-h3 mt-5">Viesti lähetetty.</p>
        <p className="t-body mt-3 max-w-[400px]" style={{ color: "var(--body)" }}>
          Kiitos yhteydenotosta. Palaamme asiaan mahdollisimman pian.
        </p>
      </div>
    );
  }

  return (
    <div
      id="yhteydenottolomake"
      className="rounded-[12px] border bg-white"
      style={{ borderColor: "var(--line)", boxShadow: "var(--shadow-card)", padding: "clamp(24px, 3.5vw, 40px)" }}
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <F label="Nimi" required error={errors.name} htmlFor="cf-name">
            <input id="cf-name" type="text" name="Nimi" autoComplete="name" required aria-invalid={!!errors.name} value={formData.name} onChange={set("name")} className={inputCls} style={inputStyle(!!errors.name)} />
          </F>
          <F label="Yrityksen nimi" htmlFor="cf-company">
            <input id="cf-company" type="text" name="Yritys" autoComplete="organization" value={formData.company} onChange={set("company")} className={inputCls} style={inputStyle()} />
          </F>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <F label="Sähköposti" required error={errors.email} htmlFor="cf-email">
            <input id="cf-email" type="email" name="email" autoComplete="email" required aria-invalid={!!errors.email} value={formData.email} onChange={set("email")} className={inputCls} style={inputStyle(!!errors.email)} />
          </F>
          <F label="Puhelinnumero" htmlFor="cf-phone">
            <input id="cf-phone" type="tel" name="Puhelin" autoComplete="tel" value={formData.phone} onChange={set("phone")} className={inputCls} style={inputStyle()} />
          </F>
        </div>

        <F label="Verkkosivuston osoite" htmlFor="cf-website">
          <input id="cf-website" type="url" name="Verkkosivusto" autoComplete="url" placeholder="https://yrityksenne.fi" value={formData.website} onChange={set("website")} className={inputCls} style={inputStyle()} />
        </F>

        <F label="Aihe" htmlFor="cf-topic">
          <select id="cf-topic" name="Aihe" value={formData.topic} onChange={set("topic")} className={inputCls} style={inputStyle()}>
            {AIHEET.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </F>

        <F label="Viesti" htmlFor="cf-message">
          <textarea id="cf-message" name="Viesti" rows={5} value={formData.message} onChange={set("message")} className={inputCls} style={{ ...inputStyle(), resize: "vertical" }} />
        </F>

        <input type="hidden" name="Lähde" value="ota_yhteytta_lomake" />

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
            "Lähetä viesti"
          )}
        </button>

        <p className="t-meta" style={{ color: "var(--muted)" }}>
          Lähettämällä lomakkeen hyväksytte, että käytämme antamianne tietoja yhteydenottoonne vastaamiseen.{" "}
          <Link to="/tietosuojaseloste" className="underline underline-offset-2" style={{ color: "var(--navy)" }}>
            Lue tietosuojaseloste
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

function F({
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
