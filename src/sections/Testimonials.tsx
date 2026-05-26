import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Sini Oksanen",
    text: "Kuunteli mun omia ajatuksia myös ja sivuista tuli just sen näköset kun oltiin kuviteltu.",
  },
  {
    name: "Eero Kinnunen",
    text: "Sivut toimii ja asiakkaat on jo tullu kehumaan niitä meille. Kiitos onnistuneesta lopputuloksesta ja kivasta yhteistyöstä.",
  },
  {
    name: "Eetu Penttilä",
    text: "Tekee tosi hyvää jälkeä ja ymmärtää mikä on hyvinvointialalla asiakkaille tärkeetä.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".t-anim");
      if (!els?.length) return;
      gsap.fromTo(
        els,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#091525" }}>
      {/* Fade from hero */}
      <div
        style={{
          height: "80px",
          background:
            "linear-gradient(180deg, rgba(9,21,37,0) 0%, #091525 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ padding: "20px 24px 100px" }}>
        <div className="mx-auto" style={{ maxWidth: "900px" }}>
          {/* ── Trust row ── */}
          <div className="t-anim flex items-center justify-center gap-2.5">
            <div className="flex items-center gap-[3px]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  fill="rgba(200,172,75,0.65)"
                  color="rgba(200,172,75,0.65)"
                />
              ))}
            </div>
            <span
              className="text-[12px] font-normal"
              style={{ color: "rgba(226,232,240,0.50)" }}
            >
              4.8/5 Google-arvosteluista
            </span>
          </div>

          {/* ── Heading ── */}
          <p
            className="t-anim mx-auto mt-6 text-center"
            style={{
              color: "rgba(148,163,184,0.55)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Palautetta yhteistyöstä
          </p>

          {/* ── 3 equal cards ── */}
          <div className="t-anim mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="rounded-[10px] px-5 py-5 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.010)",
                  border: "1px solid rgba(255,255,255,0.035)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.018)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.035)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.010)";
                }}
              >
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={9}
                      fill="rgba(200,172,75,0.50)"
                      color="rgba(200,172,75,0.50)"
                    />
                  ))}
                </div>
                <p
                  className="mt-3 text-[14px] leading-[1.6] font-light"
                  style={{ color: "rgba(226,232,240,0.68)" }}
                >
                  {r.text}
                </p>
                <p
                  className="mt-3 text-[11px] font-normal"
                  style={{ color: "rgba(148,163,184,0.35)" }}
                >
                  {r.name}
                </p>
              </div>
            ))}
          </div>

          {/* ── Soft CTA ── */}
          <div className="t-anim mt-8 text-center">
            <a
              href="https://www.google.com/search?q=Holva+Toimisto+arvostelut&tbm=lcl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[12px] font-light tracking-wide transition-colors duration-300"
              style={{ color: "rgba(200,172,75,0.45)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(200,172,75,0.75)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(200,172,75,0.45)";
              }}
            >
              Katso kaikki arvostelut &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
