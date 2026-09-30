import Reveal from "./Reveal";

export interface ProcessStep {
  n: string;
  title: string;
  body?: string;
  time?: string;
  note?: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  dark?: boolean;
}

/** Vertikaalinen numeroitu timeline (Demo-first / Prosessi). */
export default function ProcessTimeline({ steps, dark = false }: ProcessTimelineProps) {
  return (
    <ol className="flex flex-col">
      {steps.map((step, i) => (
        <Reveal as="li" key={step.n} delay={i * 60} className="relative flex gap-6 pb-8 last:pb-0">
          {/* Viiva + numero */}
          <div className="flex flex-col items-center">
            <span
              className="t-meta flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-semibold"
              style={{
                color: dark ? "var(--gold)" : "var(--navy)",
                border: dark ? "1px solid rgba(200,172,75,0.5)" : "1px solid var(--line-strong)",
                backgroundColor: dark ? "rgba(200,172,75,0.08)" : "#fff",
              }}
            >
              {step.n}
            </span>
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="mt-2 w-px flex-1"
                style={{ backgroundColor: dark ? "var(--line-dark)" : "var(--line)" }}
              />
            )}
          </div>
          {/* Sisältö */}
          <div className="pb-2">
            <h3 className="t-h3">{step.title}</h3>
            {step.body && (
              <p className="t-body mt-2.5" style={{ color: dark ? "var(--on-dark-body)" : "var(--body)" }}>
                {step.body}
              </p>
            )}
            {step.time && (
              <p className="t-meta mt-3 font-semibold" style={{ color: dark ? "var(--gold)" : "var(--navy)" }}>
                {step.time}
              </p>
            )}
            {step.note && (
              <p className="t-small mt-2" style={{ color: dark ? "var(--on-dark-muted)" : "var(--muted)" }}>
                {step.note}
              </p>
            )}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
