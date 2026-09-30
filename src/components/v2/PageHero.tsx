import Eyebrow from "./Eyebrow";
import Button from "./Button";
import { useModal } from "@/context/ModalContext";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  body?: string;
  dark?: boolean;
  /** Näytä primary "Pyydä demo" + secondary (oletus "Katso työt" → /case-esimerkit) */
  withCtas?: boolean;
  ctaSource?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  /** Ankkuri samalle sivulle, esim. "#clientwork-heading" */
  secondaryHref?: string;
  /** Hinnasto-rivi, esim. Kasvupaketti */
  priceLine?: React.ReactNode;
  children?: React.ReactNode;
}

/** Sivujen yhteinen hero: eyebrow + H1 + body (+ CTA:t). Yksi H1 per sivu. */
export default function PageHero({
  eyebrow,
  title,
  body,
  dark = false,
  withCtas = false,
  ctaSource = "page_hero",
  secondaryLabel = "Katso työt",
  secondaryTo = "/case-esimerkit",
  secondaryHref,
  priceLine,
  children,
}: PageHeroProps) {
  const { openModal } = useModal();
  return (
    <div style={{ maxWidth: "760px" }}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h1 className="t-page mt-5">{title}</h1>
      {body && (
        <p className="t-lead mt-6" style={{ color: dark ? "var(--on-dark-body)" : "var(--body)" }}>
          {body}
        </p>
      )}
      {priceLine}
      {withCtas && (
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button
            variant={dark ? "primaryOnDark" : "primary"}
            onClick={() => openModal(ctaSource)}
            blockOnMobile
          >
            Pyydä demo
          </Button>
          <Button
            variant={dark ? "secondaryOnDark" : "secondary"}
            to={secondaryHref ? undefined : secondaryTo}
            href={secondaryHref}
            blockOnMobile
          >
            {secondaryLabel}
          </Button>
        </div>
      )}
      {withCtas && (
        <p className="t-meta mt-4" style={{ color: dark ? "var(--on-dark-muted)" : "var(--muted)" }}>
          Maksuton demo. Ei sitoutumista.
        </p>
      )}
      {children}
    </div>
  );
}
