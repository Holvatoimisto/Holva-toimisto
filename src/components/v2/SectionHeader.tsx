import Eyebrow from "./Eyebrow";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
  /** Otsikon id, kun section haluaa aria-labelledby:n */
  id?: string;
  maxWidth?: string;
}

/** Eyebrow + H2 + lead -yhdistelmä. */
export default function SectionHeader({
  eyebrow,
  title,
  lead,
  dark = false,
  id,
  maxWidth = "720px",
}: SectionHeaderProps) {
  return (
    <div style={{ maxWidth }}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 id={id} className="t-h2 mt-4">
        {title}
      </h2>
      {lead && (
        <p className="t-lead mt-5" style={{ color: dark ? "var(--on-dark-body)" : "var(--body)" }}>
          {lead}
        </p>
      )}
    </div>
  );
}
