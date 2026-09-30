import type { ClientCase } from "@/lib/content";
import { Link } from "react-router";
import BeforeAfter from "./BeforeAfter";
import Reveal from "./Reveal";

/**
 * Etusivun COMPACT FEATURE CASE (ei full case study -rakennetta).
 * Copy ~38 % / visual ~62 %, align center, ei valtavaa tyhjää tilaa.
 */
export default function CaseFeature({ caseItem: c, flip = false }: { caseItem: ClientCase; flip?: boolean }) {
  return (
    <Reveal
      className={`grid grid-cols-1 items-center gap-8 lg:gap-14 ${flip ? "lg:grid-cols-[62fr_38fr]" : "lg:grid-cols-[38fr_62fr]"}`}
    >
      {/* Copy */}
      <div className={flip ? "lg:order-2" : ""}>
        <p
          className="t-eyebrow inline-flex items-center rounded-full border px-3.5 py-1.5"
          style={{
            color: "var(--navy)",
            borderColor: "rgba(174,143,74,0.45)",
            backgroundColor: "rgba(174,143,74,0.07)",
          }}
        >
          {c.status}
        </p>
        <h3 className="t-h3 mt-4" style={{ fontSize: "clamp(21px, 2vw, 24px)" }}>
          {c.name}
        </h3>
        <p className="t-meta mt-1.5" style={{ color: "var(--muted)" }}>
          {c.industry}
        </p>
        <div className="mt-5 flex flex-col gap-4">
          <div>
            <p className="t-eyebrow" style={{ color: "var(--muted)" }}>
              Lähtötilanne
            </p>
            <p className="t-small mt-1.5" style={{ color: "var(--body)" }}>
              {c.startingPoint}
            </p>
          </div>
          <div>
            <p className="t-eyebrow" style={{ color: "var(--muted)" }}>
              Muutos
            </p>
            <p className="t-small mt-1.5" style={{ color: "var(--body)" }}>
              {c.solution}
            </p>
          </div>
          <Link
            to={`/case-esimerkit#${c.slug}`}
            className="t-small mt-1 inline-flex items-center gap-1.5 font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--navy)" }}
          >
            Lue case
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Visual — BEFORE + AFTER side-by-side (mobile: stacked) */}
      <div className={flip ? "lg:order-1" : ""}>
        <BeforeAfter beforeLabel={c.beforeImg} afterLabel={c.afterImg} beforeSrc={c.beforeSrc} afterSrc={c.afterSrc} aspect="16/10" />
      </div>
    </Reveal>
  );
}
