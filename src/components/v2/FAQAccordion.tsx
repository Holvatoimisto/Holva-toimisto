import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface QA {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: QA[];
  dark?: boolean;
}

/** Saavutettava accordion (spec §31: accordion-motion sallittu). */
export default function FAQAccordion({ items, dark = false }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div
      className="flex flex-col"
      style={{ borderTop: dark ? "1px solid var(--line-dark)" : "1px solid var(--line)" }}
    >
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div key={i} style={{ borderBottom: dark ? "1px solid var(--line-dark)" : "1px solid var(--line)" }}>
            <h3>
              <button
                onClick={() => setOpenIdx(open ? null : i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="t-h3" style={{ fontSize: "17px", color: dark ? "#fff" : "var(--ink)" }}>
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300"
                  style={{
                    color: "var(--gold)",
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={!open}
            >
              <p
                className="t-body pb-7 pr-10"
                style={{ color: dark ? "var(--on-dark-body)" : "var(--body)" }}
              >
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
