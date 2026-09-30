import { Check } from "lucide-react";
import Button from "./Button";
import { useModal } from "@/context/ModalContext";

interface PricingBlockProps {
  included: string[];
  ctaSource: string;
  dark?: boolean;
}

/** Kasvupaketin hintablokki (spec §24.5): 99 €/kk, 0 € aloitusmaksu. */
export default function PricingBlock({ included, ctaSource, dark = false }: PricingBlockProps) {
  const { openModal } = useModal();
  return (
    <div
      className="rounded-[16px] border"
      style={{
        borderColor: dark ? "rgba(200,172,75,0.35)" : "var(--line)",
        backgroundColor: dark ? "rgba(255,255,255,0.04)" : "#fff",
        boxShadow: dark ? "none" : "var(--shadow-card)",
        padding: "clamp(28px, 4vw, 48px)",
      }}
    >
      <div className="flex flex-wrap items-end gap-x-4 gap-y-1">
        <p
          className="font-serif"
          style={{ fontSize: "clamp(44px, 5vw, 56px)", lineHeight: 1, color: dark ? "#fff" : "var(--ink)" }}
        >
          99 €<span className="t-h3" style={{ color: dark ? "var(--on-dark-body)" : "var(--body)" }}>/kk</span>
        </p>
        <p className="t-small pb-2 font-semibold" style={{ color: "var(--gold)" }}>
          0 € aloitusmaksu
        </p>
      </div>

      <ul className="mt-8 flex flex-col gap-3.5">
        {included.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check size={18} aria-hidden="true" className="mt-1 shrink-0" style={{ color: "var(--gold)" }} />
            <span className="t-body" style={{ color: dark ? "var(--on-dark-body)" : "var(--body)" }}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-9">
        <Button variant={dark ? "primaryOnDark" : "primary"} onClick={() => openModal(ctaSource)} blockOnMobile>
          Pyydä demo
        </Button>
        <p className="t-meta mt-3" style={{ color: dark ? "var(--on-dark-muted)" : "var(--muted)" }}>
          Maksuton demo. Ei sitoutumista.
        </p>
      </div>
    </div>
  );
}
