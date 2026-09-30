import type { ClientCase } from "@/lib/content";
import BeforeAfter from "./BeforeAfter";
import ImgPlaceholder from "./ImgPlaceholder";
import Reveal from "./Reveal";

interface CaseBlockProps {
  caseItem: ClientCase;
  /** Alternating layout: käännä copy/visual -järjestys desktopilla */
  flip?: boolean;
  /** Näytä before/after-pari vai yksi kuva */
  mobileShot?: string;
  detailed?: boolean;
}

/**
 * Asiakastyö-blokki (spec §18.4, §20.3).
 * Status "Asiakastyö" näkyy aina. Ei keksittyjä tuloksia.
 */
export default function CaseBlock({ caseItem: c, flip = false, mobileShot, detailed = false }: CaseBlockProps) {
  return (
    <Reveal
      className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16`}
    >
      {/* Copy */}
      <div className={flip ? "lg:order-2" : ""}>
        <p
          className="t-eyebrow inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
          style={{ color: "var(--navy)", borderColor: "rgba(200,172,75,0.5)", backgroundColor: "rgba(200,172,75,0.08)" }}
        >
          {c.status}
        </p>
        <h3 className="t-h3 mt-5" style={{ fontSize: "clamp(22px, 2.2vw, 26px)" }}>
          {c.name}
        </h3>
        <p className="t-meta mt-1.5" style={{ color: "var(--muted)" }}>
          {c.industry}
        </p>

        {detailed ? (
          <dl className="mt-7 flex flex-col gap-5">
            {(
              [
                ["Lähtötilanne", c.startingPoint],
                ["Tavoite", c.goal],
                ["Ratkaisu", c.solution],
                ["Lopputulos", c.result],
              ] as const
            )
              .filter(([, dd]) => Boolean(dd))
              .map(([dt, dd]) => (
                <div key={dt}>
                  <dt className="t-eyebrow" style={{ color: "var(--navy)" }}>
                    {dt}
                  </dt>
                  <dd className="t-body mt-1.5" style={{ color: "var(--body)" }}>
                    {dd}
                  </dd>
                </div>
              ))}
          </dl>
        ) : null}
      </div>

      {/* Visual */}
      <div className={flip ? "lg:order-1" : ""}>
        <BeforeAfter beforeLabel={c.beforeImg} afterLabel={c.afterImg} beforeSrc={c.beforeSrc} afterSrc={c.afterSrc} aspect="4/3" />
        {mobileShot && (
          <div className="mt-4 max-w-[220px]">
            <ImgPlaceholder label={mobileShot} aspect="9/16" />
          </div>
        )}
      </div>
    </Reveal>
  );
}
