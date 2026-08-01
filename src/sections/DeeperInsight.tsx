import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const symptoms = [
  "Uusi kävijä ei ymmärrä heti mitä tarjoatte.",
  "Tärkeimmät asiat hukkuvat muun sisällön joukkoon.",
  "Sivusto näyttää \"ihan hyvältä\", mutta ei tunnu erityiseltä.",
  "Yhteydenotto vaatii liikaa etsimistä tai ajattelua.",
];

export default function DeeperInsight() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".insight-anim");
      if (!els?.length) return;
      gsap.fromTo(
        els,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: els[0],
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10"
      style={{ padding: "100px 24px 80px", backgroundColor: "var(--background-primary)" }}
    >
      {/* Fade from testimonials */}
      <div
        className="absolute top-0 left-0 right-0 h-20"
        style={{ background: "linear-gradient(180deg, var(--background-secondary) 0%, var(--background-primary) 100%)" }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(163,122,70,0.16) 50%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto" style={{ maxWidth: "900px" }}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — headline + intro */}
          <div>
            {/* Eyebrow */}
            <p
              className="insight-anim text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.10em] sm:text-[13px]"
              style={{ color: "var(--text-secondary-editorial)" }}
            >
              Verkkokokemus
            </p>

            {/* Headline */}
            <h2
              className="insight-anim mt-6"
              style={{
                color: "var(--text-primary-editorial)",
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(1.5rem, 3.2vw, 2.1rem)",
                lineHeight: 1.22,
                letterSpacing: "-0.025em",
                maxWidth: "420px",
              }}
            >
              Usein ongelma ei ole palvelussa, vaan siinä miltä yritys tuntuu verkossa.
            </h2>

            {/* Intro */}
            <p
              className="insight-anim mt-6 text-[17px] leading-[1.65] font-normal lg:text-[18px]"
              style={{ color: "var(--text-secondary-editorial)", maxWidth: "60ch" }}
            >
              Kun ensivaikutelma tuntuu epäselvältä, moni hyväkin palvelu jää kokematta.
            </p>
          </div>

          {/* Right — audit cards */}
          <div className="insight-anim flex flex-col gap-3" style={{ maxWidth: "420px" }}>
            {symptoms.map((text, i) => (
              <div
                key={i}
                className="group flex items-start gap-3 rounded-[10px] px-4 py-3.5 transition-all duration-300"
                style={{
                  background: "var(--surface-secondary)",
                  border: "1px solid var(--border-subtle)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--surface-primary)";
                  e.currentTarget.style.borderColor = "var(--border-strong)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--surface-secondary)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                }}
              >
                {/* Problem indicator — subtle circle, not checkmark */}
                <span
                  className="mt-[6px] flex-shrink-0"
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "var(--accent-primary)",
                  }}
                />
                <p
                  className="text-[15px] leading-[1.6] font-normal lg:text-[16px]"
                  style={{ color: "var(--text-primary-editorial)" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing — centered, soft */}
        <div className="insight-anim mx-auto mt-14 text-center" style={{ maxWidth: "420px" }}>
          <div
            style={{
              width: "24px",
              height: "1px",
              background: "rgba(163,122,70,0.20)",
              margin: "0 auto 20px",
            }}
          />
          <p
            className="text-[16px] leading-[1.65] font-normal lg:text-[17px]"
            style={{ color: "var(--text-secondary-editorial)" }}
          >
            Usein pienetkin kitkat vaikuttavat siihen, poistuuko kävijä sivulta vai ottaako hän yhteyttä.
          </p>
        </div>
      </div>
    </section>
  );
}
