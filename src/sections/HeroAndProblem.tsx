import { useEffect, useRef } from "react";
import { Link } from "react-router";
import FloatingPortfolioCards from "@/components/FloatingPortfolioCards";
import Testimonials from "@/sections/Testimonials";
import { useModal } from "@/context/ModalContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAndProblem() {
  const { openModal } = useModal();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  /* Hero text entrance */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = leftRef.current?.querySelectorAll(".hero-animate");
      if (els) {
        gsap.fromTo(
          els,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.10,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  /* Problem section text entrance */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = wrapperRef.current?.querySelectorAll(".problem-anim");
      if (!els?.length) return;
      gsap.fromTo(
        els,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: els[0],
            start: "top 85%",
            once: true,
          },
        }
      );
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative" style={{ backgroundColor: "#091525" }}>

      {/* ═══════ HERO — with self-contained background layer ═══════ */}
      <section
        ref={heroRef}
        className="relative flex overflow-hidden"
        style={{
          paddingTop: "var(--nav-height)",
          minHeight: "100vh",
        }}
      >
        {/* ══ LAYER 1: Hero-only background (clipped to hero) ══ */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/hero-bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.18,
              filter: "blur(3px)",
            }}
          />
          {/* Overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(9,21,37,0.88) 0%, rgba(9,21,37,0.55) 42%, rgba(9,21,37,0.12) 100%)",
            }}
          />
          {/* Atmospheric glow */}
          <div
            className="absolute hidden lg:block"
            style={{
              width: "600px",
              height: "500px",
              left: "-8%",
              top: "8%",
              background:
                "radial-gradient(ellipse at center, rgba(200, 172, 75, 0.035) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* ══ LAYER 2: Content ══ */}
        <div
          className="relative z-10 mx-auto flex w-full flex-col items-start px-6 lg:px-12"
          style={{
            maxWidth: "1200px",
            paddingTop: "calc(var(--nav-height) + 20px)",
            paddingBottom: "60px",
          }}
        >
          <div ref={leftRef} className="max-w-[600px]">
            {/* Eyebrow */}
            <p
              className="hero-animate mb-3 text-[11px] font-normal uppercase tracking-[0.16em]"
              style={{ color: "rgba(200, 172, 75, 0.65)" }}
            >
              Premium verkkosivut hyvinvointibrändeille
            </p>

            {/* Subtle glow behind headline */}
            <div
              className="hero-animate pointer-events-none absolute"
              style={{
                width: "400px",
                height: "200px",
                left: "-60px",
                top: "60px",
                background:
                  "radial-gradient(ellipse at center, rgba(200, 172, 75, 0.04) 0%, transparent 70%)",
                zIndex: -1,
              }}
            />

            {/* Headline */}
            <h1
              className="hero-animate text-[2.2rem] leading-[1.05] sm:text-[2.6rem] lg:text-[3rem]"
              style={{
                color: "var(--text-primary)",
                fontFamily: "'Instrument Serif', serif",
                letterSpacing: "-0.02em",
                textShadow: "0 0 80px rgba(200, 172, 75, 0.06)",
              }}
            >
              Verkkosivustoja, jotka tuntuvat yhtä laadukkailta kuin palvelunne
              paikan päällä.
            </h1>

            {/* Supporting text */}
            <p
              className="hero-animate mt-6 max-w-[460px] text-[15px] leading-[1.65] font-light"
              style={{ color: "var(--text-secondary)" }}
            >
              Rakennamme sivustoja, jotka auttavat kävijää ymmärtämään
              nopeasti miksi juuri teihin kannattaa ottaa yhteyttä.
            </p>

            {/* Dual CTA */}
            <div className="hero-animate mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={openModal}
                className="rounded-[10px] px-9 py-[11px] text-[13px] font-normal tracking-wide transition-all duration-300"
                style={{
                  backgroundColor: "var(--accent-gold)",
                  color: "var(--bg-secondary)",
                  letterSpacing: "0.02em",
                  boxShadow: "0 4px 20px rgba(200, 172, 75, 0.18)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D4B85A";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(200, 172, 75, 0.35)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent-gold)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(200, 172, 75, 0.18)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Pyydä demo
              </button>

              <Link
                to="/case-esimerkit"
                className="inline-flex items-center gap-2 rounded-[10px] px-6 py-[10px] text-[13px] font-normal tracking-wide transition-all duration-300"
                style={{
                  color: "var(--accent-gold)",
                  letterSpacing: "0.02em",
                  border: "1.5px solid rgba(200, 172, 75, 0.50)",
                  marginTop: "2px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(200, 172, 75, 0.75)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(200, 172, 75, 0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(200, 172, 75, 0.35)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Katso töitämme
                <span>→</span>
              </Link>
            </div>

            {/* Microcopy */}
            <p
              className="hero-animate mt-3 max-w-[400px] text-[12px] leading-[1.7] font-light"
              style={{ color: "rgba(148, 163, 184, 0.60)" }}
            >
              Täytä lyhyt lomake ja saat demon uusista sivuista 3 päivän sisällä.
            </p>

            {/* Inline trust row */}
            <div
              className="hero-animate mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] tracking-wide font-light"
              style={{ color: "rgba(148, 163, 184, 0.52)" }}
            >
              <span>
                <span style={{ color: "rgba(200, 172, 75, 0.55)" }}>★</span> 4.8/5 Google-arvosteluista
              </span>
              <span style={{ color: "rgba(148, 163, 184, 0.25)" }}>•</span>
              <span>Riskitön ensiaskel</span>
              <span style={{ color: "rgba(148, 163, 184, 0.25)" }}>•</span>
              <span>Suunniteltu tukemaan yhteydenottoa</span>
            </div>
          </div>

          <FloatingPortfolioCards />
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <Testimonials />
    </div>
  );
}
