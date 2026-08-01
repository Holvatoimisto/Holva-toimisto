import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".phi-anim");
      if (!els?.length) return;
      gsap.fromTo(
        els,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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
      style={{ padding: "140px 24px 100px", backgroundColor: "var(--background-emphasis)" }}
    >
      {/* Subtle top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(163,122,70,0.20) 50%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto" style={{ maxWidth: "620px" }}>
        {/* Eyebrow — centered */}
        <p
          className="phi-anim text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.10em] sm:text-[13px]"
          style={{ color: "var(--text-inverse-secondary)" }}
        >
          Mitä teemme erilailla
        </p>

        {/* Headline — centered, dramatic */}
        <h2
          className="phi-anim mx-auto mt-6 text-center"
          style={{
            color: "var(--text-inverse)",
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(1.7rem, 3.6vw, 2.4rem)",
            lineHeight: 1.18,
            letterSpacing: "-0.025em",
            maxWidth: "500px",
          }}
        >
          Moni yritys yrittää näyttää premiumilta. Siksi niin moni näyttää samalta.
        </h2>

        {/* Breathing space */}
        <div style={{ height: "48px" }} />

        {/* Body — centered container, left-aligned text */}
        <div className="phi-anim" style={{ maxWidth: "480px", margin: "0 auto", textAlign: "left" }}>
          <p
            className="text-[16px] leading-[1.65] font-normal lg:text-[17px]"
            style={{ color: "var(--text-inverse-secondary)" }}
          >
            Palvelualalla luottamus ei synny siitä, että kaikki näyttää viimeistellyltä. Se syntyy siitä, että verkkosivusto välittää palvelun laadun, rakentaa luottamusta ja ohjaa yhteydenottoon.
          </p>
        </div>

        {/* Divider + hero statement — tighter spacing */}
        <div className="phi-anim mx-auto text-center" style={{ maxWidth: "440px", marginTop: "40px" }}>
          <div
            style={{
              width: "28px",
              height: "1px",
              background: "rgba(163,122,70,0.26)",
              margin: "0 auto 20px",
            }}
          />
          {/* First line — softer */}
          <p
            style={{
              color: "var(--text-inverse-secondary)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.2rem, 2.4vw, 1.6rem)",
              lineHeight: 1.4,
              letterSpacing: "-0.02em",
            }}
          >
            Emme rakenna identiteettiä uusiksi.
          </p>
          {/* Second line — brighter, the hero moment */}
          <p
            className="mt-1"
            style={{
              color: "var(--text-inverse)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.3rem, 2.6vw, 1.75rem)",
              lineHeight: 1.35,
              letterSpacing: "-0.02em",
            }}
          >
            Tuomme sen vain <span style={{ color: "var(--accent-primary)" }}>selkeämmin</span> esiin.
          </p>
        </div>
      </div>
    </section>
  );
}
