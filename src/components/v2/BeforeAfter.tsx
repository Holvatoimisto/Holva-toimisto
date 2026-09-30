import ImgPlaceholder from "./ImgPlaceholder";

interface BeforeAfterProps {
  beforeLabel: string;
  afterLabel: string;
  /** Oikean kuvan polku — kun asetettu, renderöidään img placeholderin sijaan */
  beforeSrc?: string;
  afterSrc?: string;
  dark?: boolean;
  aspect?: string;
}

/**
 * Before/After (spec §26): desktop side-by-side, mobile stacked.
 * Ei slideria. ENNEN neutral/desaturated, JÄLKEEN full color + hillitty gold detail.
 * Wrapperit 47/53 — AFTER saa hienovaraisesti enemmän visuaalista painoa.
 * Kuvat: width 100% / height auto, koko screenshot näkyy, ei croppausta.
 * Hover: koko media-card skaalautuu kevyesti (scale 1.04 + vahvempi varjo).
 */
export default function BeforeAfter({
  beforeLabel,
  afterLabel,
  beforeSrc,
  afterSrc,
  dark = false,
  aspect = "16/10",
}: BeforeAfterProps) {
  const media = (src: string | undefined, label: string, side: "before" | "after") => {
    if (!src) {
      return <ImgPlaceholder label={label} dark={dark} aspect={aspect} className={side === "after" ? "!border-solid" : ""} />;
    }
    return (
      <img
        src={src}
        alt={side === "before" ? "Asiakastyön verkkosivusto ennen uudistusta" : "Asiakastyön verkkosivusto uudistuksen jälkeen"}
        loading="lazy"
        decoding="async"
        className="block w-full"
        style={{ height: "auto", borderRadius: "var(--r-media)", border: "1.5px solid var(--line)" }}
      />
    );
  };

  const hoverCls =
    "relative transition-all duration-[260ms] ease-out hover:z-10 hover:scale-[1.04] hover:shadow-[0_20px_44px_-24px_rgba(3,22,37,0.35)]";

  return (
    <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[47fr_53fr] sm:gap-5">
      <figure>
        <div className={hoverCls} style={{ filter: "saturate(0.65)" }}>
          {media(beforeSrc, beforeLabel, "before")}
        </div>
        <figcaption
          className="t-eyebrow mt-3"
          style={{ color: dark ? "var(--on-dark-muted)" : "var(--muted)" }}
        >
          Ennen
        </figcaption>
      </figure>
      <figure>
        <div
          className={`${hoverCls} rounded-[16px]`}
          style={{ boxShadow: "0 0 0 1.5px rgba(200,172,75,0.5)" }}
        >
          {media(afterSrc, afterLabel, "after")}
        </div>
        <figcaption className="t-eyebrow mt-3" style={{ color: dark ? "var(--gold)" : "var(--navy)" }}>
          Jälkeen
        </figcaption>
      </figure>
    </div>
  );
}
