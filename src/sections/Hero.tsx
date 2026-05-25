import { useEffect, useRef } from "react";
import { Link } from "react-router";
import FloatingPortfolioCards from "@/components/FloatingPortfolioCards";
import { useModal } from "@/context/ModalContext";
import gsap from "gsap";

function FloatingTestimonial() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const tween = gsap.to(cardRef.current, {
      y: -6,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    return () => { tween.kill(); };
  }, []);

  return (
    <div
      ref={cardRef}
      className="pointer-events-none absolute z-10 hidden xl:block"
      style={{
        left: "740px",
        top: "460px",
        width: "240px",
      }}
    >
      <div
        style={{
          borderRadius: "14px",
          border: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(9,21,37,0.55)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "18px 20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        }}
      >
        <p
          className="text-[10px] tracking-[0.08em]"
          style={{ color: "rgba(200, 172, 75, 0.55)" }}
        >
          ★★★★★
        </p>
        <p
          className="mt-2 text-[12px] leading-[1.55] font-light"
          style={{
            color: "rgba(226, 232, 240, 0.72)",
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: "-0.01em",
          }}
        >
          {"Sivut toimii ja asiakkaat on jo tullut kehumaan niitä meille."}
        </p>
        <p
          className="mt-2 text-[11px] font-light"
          style={{ color: "rgba(148, 163, 184, 0.40)" }}
        >
          Eero Kinnunen
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

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

  return (
    <section
      className="relative flex overflow-hidden"
      style={{
        paddingTop: "var(--nav-height)",
        backgroundColor: "#091525",
        minHeight: "100vh",
      }}
    >
      {/* Background image — atmospheric, muted */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.18,
          filter: "blur(3px)",
        }}
      />

      {/* Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(105deg, rgba(9,21,37,0.88) 0%, rgba(9,21,37,0.55) 42%, rgba(9,21,37,0.12) 100%)",
        }}
      />

      {/* Subtle atmospheric glow */}
      <div
        className="pointer-events-none absolute z-[1] hidden lg:block"
        style={{
          width: "600px",
          height: "500px",
          left: "-8%",
          top: "8%",
          background:
            "radial-gradient(ellipse at center, rgba(200, 172, 75, 0.035) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
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
              background: "radial-gradient(ellipse at center, rgba(200, 172, 75, 0.04) 0%, transparent 70%)",
              zIndex: -1,
            }}
          />

          {/* Headline — outcome-focused */}
          <h1
            className="hero-animate text-[2.2rem] leading-[1.05] sm:text-[2.6rem] lg:text-[3rem]"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: "-0.02em",
              textShadow: "0 0 80px rgba(200, 172, 75, 0.06)",
            }}
          >
            Monet sivut toimivat.
            <br />
            Mutta eivät tavalla, jolla ne voisivat.
          </h1>

          {/* Supporting text — positioning statement */}
          <p
            className="hero-animate mt-6 max-w-[460px] text-[15px] leading-[1.65] font-light"
            style={{ color: "var(--text-secondary)" }}
          >
            Varmistamme, että yrityksesi välittää verkossa saman laadun ja luottamuksen, jonka asiakkaasi kokevat palvelussasi. Kun kokonaisuus on selkeä, uskottava ja tunnetta herättävä, yhteydenotosta tulee asiakkaalle luonnollinen seuraava askel.
          </p>

          {/* Dual CTA — horizontal */}
          <div className="hero-animate mt-8 flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
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

            {/* Secondary CTA — outline style, slightly lower */}
            <Link
              to="/case-esimerkit"
              className="inline-flex items-center gap-2 rounded-[10px] px-6 py-[10px] text-[13px] font-normal tracking-wide transition-all duration-300"
              style={{
                color: "var(--accent-gold)",
                letterSpacing: "0.02em",
                border: "1.5px solid rgba(200, 172, 75, 0.35)",
                marginTop: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(200, 172, 75, 0.65)";
                e.currentTarget.style.backgroundColor = "rgba(200, 172, 75, 0.06)";
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

          {/* CTA microcopy */}
          <p
            className="hero-animate mt-4 max-w-[400px] text-[13px] leading-[1.6]"
            style={{ color: "var(--text-muted)" }}
          >
            Täytä lyhyt lomake ja saat demon uusista sivuista 3 päivän sisällä.
          </p>

          {/* Inline trust row */}
          <div
            className="hero-animate mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] tracking-wide font-light"
            style={{ color: "rgba(148, 163, 184, 0.38)" }}
          >
            <span>
              <span style={{ color: "rgba(200, 172, 75, 0.50)" }}>★</span> 4.8/5 Google-arvosteluista
            </span>
            <span style={{ color: "rgba(148, 163, 184, 0.20)" }}>•</span>
            <span>Suunniteltu hyvinvointibrändeille</span>
            <span style={{ color: "rgba(148, 163, 184, 0.20)" }}>•</span>
            <span>Selkeä prosessi alusta loppuun</span>
          </div>
        </div>

        <FloatingPortfolioCards />
        <FloatingTestimonial />
      </div>
    </section>
  );
}
