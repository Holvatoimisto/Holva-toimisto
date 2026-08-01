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
    <div ref={wrapperRef} className="relative" style={{ backgroundColor: "var(--background-emphasis)" }}>

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
                "linear-gradient(105deg, rgba(51,46,37,0.92) 0%, rgba(51,46,37,0.72) 42%, rgba(51,46,37,0.34) 100%)",
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
                "radial-gradient(ellipse at center, rgba(163, 122, 70, 0.08) 0%, transparent 70%)",
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
              className="hero-animate mb-3 text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.10em] sm:text-[13px]"
              style={{ color: "var(--text-inverse-secondary)" }}
            >
              Premium-verkkosivut palveluyrityksille
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
                  "radial-gradient(ellipse at center, rgba(163, 122, 70, 0.08) 0%, transparent 70%)",
                zIndex: -1,
              }}
            />

            {/* Headline */}
            <h1
              className="hero-animate text-[2.2rem] leading-[1.05] sm:text-[2.6rem] lg:text-[3rem]"
              style={{
                color: "var(--text-inverse)",
                fontFamily: "'Instrument Serif', serif",
                letterSpacing: "-0.02em",
                textShadow: "0 0 80px rgba(163, 122, 70, 0.08)",
              }}
            >
              Verkkosivustoja, jotka tuntuvat yhtä laadukkailta kuin palvelunne
              paikan päällä.
            </h1>

            {/* Supporting text */}
            <p
              className="hero-animate mt-6 max-w-[460px] text-[16px] leading-[1.65] font-normal lg:text-[17px]"
              style={{ color: "var(--text-inverse-secondary)" }}
            >
              Rakennamme sivustoja, jotka auttavat kävijää ymmärtämään
              nopeasti miksi juuri teihin kannattaa ottaa yhteyttä.
            </p>

            {/* Dual CTA */}
            <div className="hero-animate mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={openModal}
                className="editorial-button editorial-button-primary-inverse rounded-[10px] px-9 py-[11px] transition-all duration-300"
                style={{ boxShadow: "0 4px 20px rgba(51, 46, 37, 0.22)" }}
              >
                Pyydä demo
              </button>

              <Link
                to="/case-esimerkit"
                className="editorial-button editorial-button-secondary-dark gap-2 rounded-[10px] px-6 py-[10px] transition-all duration-300"
                style={{ marginTop: "2px" }}
              >
                Katso töitämme
                <span>→</span>
              </Link>
            </div>

            {/* Microcopy */}
            <p
              className="hero-animate mt-3 max-w-[400px] text-[14px] leading-[1.6] font-normal"
              style={{ color: "var(--text-inverse-secondary)" }}
            >
              Täyttäkää lyhyt lomake. Rakennamme yrityksellenne henkilökohtaisen demon ja otamme yhteyttä demotapaamisen sopimiseksi.
            </p>

            {/* Inline trust row */}
            <div
              className="hero-animate mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] font-normal leading-[1.5]"
              style={{ color: "var(--text-inverse-secondary)" }}
            >
              <span>
                <span style={{ color: "var(--accent-primary)" }}>★</span> 4.9/5 Google-arvosteluista · 7 arvostelua
              </span>
              <span style={{ color: "var(--text-decorative)" }}>•</span>
              <span>Riskitön ensiaskel</span>
              <span style={{ color: "var(--text-decorative)" }}>•</span>
              <span>Maksuton. Ilman sitoumuksia.</span>
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
