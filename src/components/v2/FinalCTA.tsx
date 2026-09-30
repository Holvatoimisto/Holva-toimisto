import Eyebrow from "./Eyebrow";
import Button from "./Button";
import Reveal from "./Reveal";
import { useModal } from "@/context/ModalContext";

interface FinalCTAProps {
  eyebrow: string;
  title: string;
  body?: string;
  /** Esim. "99 €/kk · 0 € aloitusmaksu" Kasvupaketissa */
  priceLine?: string;
  ctaSource: string;
}

/** Navy Final CTA (spec: jokaisen sivun lopussa, primary "Pyydä demo"). */
export default function FinalCTA({ eyebrow, title, body, priceLine, ctaSource }: FinalCTAProps) {
  const { openModal } = useModal();
  return (
    <section className="surface-navy section-md">
      <div className="container-v2 container-text mx-auto text-center">
        <Reveal>
          <Eyebrow dark className="justify-center">
            {eyebrow}
          </Eyebrow>
          <h2 className="t-h2 mt-4">{title}</h2>
          {priceLine && (
            <p className="t-h3 mt-6" style={{ color: "var(--gold)" }}>
              {priceLine}
            </p>
          )}
          {body && (
            <p className="t-lead mx-auto mt-5 max-w-[560px]" style={{ color: "var(--on-dark-body)" }}>
              {body}
            </p>
          )}
          <div className="mt-9 flex flex-col items-center gap-4">
            <Button variant="primaryOnDark" onClick={() => openModal(ctaSource)} blockOnMobile>
              Pyydä demo
            </Button>
            <p className="t-meta" style={{ color: "var(--on-dark-muted)" }}>
              Maksuton demo. Ei sitoutumista.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
