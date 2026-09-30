import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

interface Stat {
  /** Lopullinen arvo */
  value: number;
  /** Desimaalien määrä (4,9 → 1) */
  decimals: number;
  /** Näytetään lopuksi arvon perässä (esim. "+") */
  suffix?: string;
  label: string;
  /** Näytä pieni gold-tähti luvun yhteydessä (rating) */
  star?: boolean;
}

const STATS: Stat[] = [
  { value: 4.9, decimals: 1, label: "Google-arvosteluissa", star: true },
];

const DURATION = 1500;

/** easeOutCubic — sulava, premium-tuntuinen hidastuminen loppua kohti */
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

/** Suomalainen desimaalierotin */
const format = (v: number, decimals: number) => v.toFixed(decimals).replace(".", ",");

/**
 * Trust/proof-strip heti heron jälkeen.
 * Count-up käynnistyy kun osio tulee viewporttiin (IntersectionObserver),
 * vain kerran. prefers-reduced-motion → lopulliset luvut heti.
 */
export default function StatsStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      setDone(true);
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          setProgress(ease(t));
          if (t < 1) {
            raf = requestAnimationFrame(tick);
          } else {
            setDone(true);
          }
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="proof-heading"
      className="py-12 lg:py-16"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FAF8F3 100%)",
      }}
    >
      <h2 id="proof-heading" className="sr-only">
        Holva lukuina
      </h2>
      <div className="container-v2 container-standard mx-auto">
        {/* Eyebrow: joutsen + label */}
        <div className="flex items-center justify-center gap-2.5">
          <img
            src="/assets/holva-swan.png"
            alt=""
            aria-hidden="true"
            width={22}
            height={26}
            className="h-[26px] w-auto"
          />
          <span className="t-eyebrow" style={{ color: "var(--muted)" }}>
            Tuloksia käytännössä
          </span>
        </div>

        {/* Yksi vahva trust-statistiikka — centered, editorial */}
        <div
          className="mx-auto mt-8 max-w-[420px] overflow-hidden rounded-[20px]"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid var(--line)",
            boxShadow:
              "0 1px 2px rgba(3,22,37,0.04), 0 16px 48px -24px rgba(3,22,37,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center gap-2 px-6 py-9 lg:py-11 ${
                i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""
              }`}
              style={{ borderColor: "var(--line)" }}
            >
              <p
                className="flex items-baseline gap-1 font-serif"
                style={{ fontSize: "clamp(36px, 3.6vw, 47px)", lineHeight: 1.05, color: "var(--ink)" }}
              >
                {s.star && (
                  <Star
                    size={20}
                    fill="var(--gold)"
                    strokeWidth={0}
                    style={{ color: "var(--gold)", alignSelf: "center", marginRight: "2px" }}
                    aria-hidden="true"
                  />
                )}
                <span className="tabular-nums">{format(s.value * progress, s.decimals)}</span>
                {s.suffix && (
                  <span
                    aria-hidden={!done}
                    style={{
                      color: "var(--gold)",
                      fontSize: "0.72em",
                      opacity: done ? 1 : 0,
                      transform: done ? "translateY(0)" : "translateY(4px)",
                      transition: "opacity 0.45s ease, transform 0.45s ease",
                    }}
                  >
                    {s.suffix}
                  </span>
                )}
              </p>
              <p className="t-small" style={{ color: "var(--muted)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
