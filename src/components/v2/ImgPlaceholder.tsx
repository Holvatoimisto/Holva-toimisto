interface ImgPlaceholderProps {
  /** Tarkka placeholder-nimi, esim. "[CLIENT CASE 01 — BEFORE]" (spec §6) */
  label: string;
  dark?: boolean;
  /** aspect-ratio css-arvo, esim. "4/3", "16/10" */
  aspect?: string;
  className?: string;
  minHeight?: string;
}

/**
 * Tarkoituksellinen kuvaplaceholder — näyttää suunnitellulta,
 * ei rikkinäiseltä img-elementiltä. Korvataan myöhemmin oikealla kuvalla.
 */
export default function ImgPlaceholder({
  label,
  dark = false,
  aspect,
  className = "",
  minHeight = "220px",
}: ImgPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label ? `Kuvaplaceholder: ${label}` : "Kuvaplaceholder"}
      className={`img-placeholder${dark ? " img-placeholder-on-dark" : ""} ${className}`.trim()}
      style={{ aspectRatio: aspect, minHeight: aspect ? undefined : minHeight }}
    >
      {label && <span className="img-placeholder-label">{label}</span>}
    </div>
  );
}
