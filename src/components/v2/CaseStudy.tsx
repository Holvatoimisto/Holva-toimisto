import { useState } from "react";
import type { ClientCase } from "@/lib/content";
import BeforeAfter from "./BeforeAfter";
import Reveal from "./Reveal";

/**
 * /case-esimerkit — CASE STUDY (preview + expanded).
 * Preview on tarkoituksella kompakti: käyttäjä voi skannata kaikki caset
 * avaamatta yhtäkään. "Lue koko case" avaa editorial-muotoisen
 * laajemman sisällön inline-accordionina.
 */
export default function CaseStudy({ caseItem: c, index }: { caseItem: ClientCase; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `${c.slug}-full-case`;
  const btnId = `${c.slug}-toggle`;

  return (
    <article id={c.slug} className="scroll-mt-28">
      {/* ── PREVIEW ── */}
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="font-serif" style={{ fontSize: "15px", color: "var(--gold)" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
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
        </div>
        <h3 className="t-h2 mt-5" style={{ fontSize: "clamp(26px, 3vw, 34px)" }}>
          {c.name}
        </h3>
        <p className="t-meta mt-2" style={{ color: "var(--muted)" }}>
          {c.industry}
        </p>
        <p className="t-lead mt-5 max-w-[760px]" style={{ color: "var(--body)" }}>
          {c.lead}
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <BeforeAfter beforeLabel={c.beforeImg} afterLabel={c.afterImg} beforeSrc={c.beforeSrc} afterSrc={c.afterSrc} aspect="16/10" />
      </Reveal>

      <Reveal className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <p className="t-eyebrow" style={{ color: "var(--muted)" }}>
            Lähtötilanne
          </p>
          <p className="t-body mt-2.5" style={{ color: "var(--body)" }}>
            {c.startingPoint}
          </p>
        </div>
        <div>
          <p className="t-eyebrow" style={{ color: "var(--muted)" }}>
            Muutos
          </p>
          <p className="t-body mt-2.5" style={{ color: "var(--body)" }}>
            {c.solution}
          </p>
        </div>
      </Reveal>

      {/* ── ACCORDION TOGGLE ── */}
      <Reveal className="mt-10">
        <button
          type="button"
          id={btnId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            borderColor: "rgba(174,143,74,0.45)",
            color: "var(--navy)",
            outlineColor: "var(--gold)",
          }}
        >
          <span className="t-small font-medium">{open ? "Sulje case" : "Lue koko case"}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            <path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </Reveal>

      {/* ── EXPANDED CASE STUDY ── */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className={`pt-14 transition-opacity duration-300 motion-reduce:transition-none ${open ? "opacity-100" : "opacity-0"}`}>
            {/* LÄHTÖTILANNE */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr] lg:gap-14">
              <p className="t-eyebrow" style={{ color: "var(--gold)" }}>
                Lähtötilanne
              </p>
              <div className="max-w-[720px] space-y-4">
                {c.startingPointLong.map((p, i) => (
                  <p key={i} className="t-body" style={{ color: "var(--body)" }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* TAVOITE */}
            <div className="mt-14 grid grid-cols-1 gap-6 border-t pt-14 lg:grid-cols-[220px_1fr] lg:gap-14" style={{ borderColor: "var(--line)" }}>
              <p className="t-eyebrow" style={{ color: "var(--gold)" }}>
                Tavoite
              </p>
              <div className="max-w-[720px]">
                {c.goalIntro && (
                  <p className="t-body" style={{ color: "var(--body)" }}>
                    {c.goalIntro}
                  </p>
                )}
                <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                  {c.goals.map((g) => (
                    <li key={g} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                      <span className="t-small" style={{ color: "var(--body)" }}>
                        {g}
                      </span>
                    </li>
                  ))}
                </ul>
                {c.goalNote && (
                  <p className="t-body mt-6" style={{ color: "var(--body)" }}>
                    {c.goalNote}
                  </p>
                )}
              </div>
            </div>

            {/* RATKAISU */}
            <div className="mt-14 border-t pt-14" style={{ borderColor: "var(--line)" }}>
              <p className="t-eyebrow" style={{ color: "var(--gold)" }}>
                Ratkaisu
              </p>
              <div className="mt-10 space-y-14">
                {c.solutions.map((s) => (
                  <div key={s.n} className="grid grid-cols-1 gap-5 lg:grid-cols-[220px_1fr] lg:gap-14">
                    <div className="flex items-baseline gap-4">
                      <span className="font-serif" style={{ fontSize: "26px", color: "var(--gold)" }}>
                        {s.n}
                      </span>
                      <h4 className="t-h3" style={{ fontSize: "19px" }}>
                        {s.title}
                      </h4>
                    </div>
                    <div className="max-w-[720px] space-y-4">
                      {s.body.map((p, i) => (
                        <p key={i} className="t-body" style={{ color: "var(--body)" }}>
                          {p}
                        </p>
                      ))}
                      {s.bullets && (
                        <ul className="grid grid-cols-1 gap-x-10 gap-y-2.5 pt-1 sm:grid-cols-2">
                          {s.bullets.map((b) => (
                            <li key={b} className="flex gap-3">
                              <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                              <span className="t-small" style={{ color: "var(--body)" }}>
                                {b}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {/* Lisäkuva renderöidään vain jos asset on olemassa datassa */}
                      {s.imageSrc && (
                        <figure className={s.imagePosition === "full" ? "" : "max-w-[560px]"}>
                          <img
                            src={s.imageSrc}
                            alt={s.imageAlt ?? ""}
                            loading="lazy"
                            className="w-full rounded-[12px] border"
                            style={{ borderColor: "var(--line)" }}
                          />
                        </figure>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LOPPUTULOS */}
            <div className="mt-14 grid grid-cols-1 gap-6 border-t pt-14 lg:grid-cols-[220px_1fr] lg:gap-14" style={{ borderColor: "var(--line)" }}>
              <p className="t-eyebrow" style={{ color: "var(--gold)" }}>
                Lopputulos
              </p>
              <div className="max-w-[720px] space-y-4">
                {c.resultBody.map((p, i) => (
                  <p key={i} className="t-body" style={{ color: "var(--body)" }}>
                    {p}
                  </p>
                ))}
                {c.resultBullets && (
                  <ul className="grid grid-cols-1 gap-x-10 gap-y-2.5 pt-1 sm:grid-cols-2">
                    {c.resultBullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                        <span className="t-small" style={{ color: "var(--body)" }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {c.resultNote && (
                  <p className="font-serif pt-2" style={{ fontSize: "clamp(20px, 2.2vw, 24px)", lineHeight: 1.4, color: "var(--navy)" }}>
                    {c.resultNote}
                  </p>
                )}
              </div>
            </div>

            {/* ASIAKKAAN PALAUTE — renderöidään vain jos aitoa näyttöä on */}
            {c.proof && (
              <div className="mt-14 border-t pt-14" style={{ borderColor: "var(--line)" }}>
                <div className="mx-auto max-w-[720px] rounded-[16px] border bg-white px-7 py-9 sm:px-10" style={{ borderColor: "var(--line)" }}>
                  <p className="t-eyebrow" style={{ color: "var(--gold)" }}>
                    Asiakkaan palaute
                  </p>
                  <blockquote className="font-serif mt-5" style={{ fontSize: "clamp(21px, 2.4vw, 26px)", lineHeight: 1.45, color: "var(--navy)" }}>
                    “{c.proof.quote}”
                  </blockquote>
                  <p className="t-meta mt-4" style={{ color: "var(--muted)" }}>
                    — {c.proof.author}
                  </p>
                  {c.proof.note && (
                    <p className="t-small mt-4" style={{ color: "var(--body)" }}>
                      {c.proof.note}
                    </p>
                  )}
                  {c.proof.extraReview && (
                    <p className="t-small mt-6 border-t pt-5" style={{ color: "var(--muted)", borderColor: "var(--line)" }}>
                      Google-arvostelu: “{c.proof.extraReview}”
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
