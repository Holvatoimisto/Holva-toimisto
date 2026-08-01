import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const googleReviewsUrl =
  "https://www.google.com/search?sa=X&sca_esv=e755c4fcff4cb9a6&sxsrf=APpeQnsIscl4irLxtFWp6_UL634lRFLbNA:1785529145305&q=Holva+Toimisto+Arvostelut&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NTY0Nrc0MTYxNzAzswQCE8MNjIyvGCU98nPKEhVC8jNzM4tL8hUci8ryi0tSc0pLFrHilgMArkAS91IAAAA&rldimm=5313794347066999941&tbm=lcl&hl=fi-FI&ved=2ahUKEwiJmcSz3v2VAxWzFBAIHdLPKUMQ9fQKegQIRhAG&biw=1422&bih=612&dpr=1.35#lkt=LocalPoiReviews";

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
    <section ref={sectionRef} style={{ backgroundColor: "var(--background-secondary)" }}>
      {/* Fade from hero */}
      <div
        style={{
          height: "80px",
          background:
            "linear-gradient(180deg, var(--background-emphasis) 0%, var(--background-secondary) 100%)",
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
                  fill="var(--accent-primary)"
                  color="var(--accent-primary)"
                />
              ))}
            </div>
            <span
              className="text-[14px] font-medium leading-[1.4]"
              style={{ color: "var(--text-secondary-editorial)" }}
            >
              4.9/5 Google-arvosteluista · 7 arvostelua
            </span>
          </div>

          {/* ── Heading ── */}
          <p
            className="t-anim mx-auto mt-6 text-center"
            style={{
              color: "var(--text-primary-editorial)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.125rem, 1.8vw, 1.25rem)",
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
                  background: "var(--surface-primary)",
                  border: "1px solid var(--border-subtle)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-strong)";
                  e.currentTarget.style.background = "var(--surface-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.background = "var(--surface-primary)";
                }}
              >
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={9}
                      fill="var(--accent-primary)"
                      color="var(--accent-primary)"
                    />
                  ))}
                </div>
                <p
                  className="mt-3 text-[16px] leading-[1.65] font-normal"
                  style={{ color: "var(--text-primary-editorial)" }}
                >
                  {r.text}
                </p>
                <p
                  className="mt-3 text-[14px] font-medium leading-[1.4]"
                  style={{ color: "var(--text-secondary-editorial)" }}
                >
                  {r.name}
                </p>
              </div>
            ))}
          </div>

          {/* ── Soft CTA ── */}
          <div className="t-anim mt-8 text-center">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-focus inline-block text-[15px] font-medium leading-[1.5] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors duration-300 hover:text-[var(--text-secondary-editorial)]"
              style={{ color: "var(--text-primary-editorial)" }}
            >
              Katso kaikki arvostelut &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
