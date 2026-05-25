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
      style={{ padding: "140px 24px 100px", backgroundColor: "#091525" }}
    >
      {/* Subtle top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(200,172,75,0.06) 50%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto" style={{ maxWidth: "620px" }}>
        {/* Eyebrow — centered */}
        <p
          className="phi-anim text-[11px] font-normal uppercase tracking-[0.2em]"
          style={{ color: "rgba(200,172,75,0.50)" }}
        >
          Mitä teemme erilailla
        </p>

        {/* Headline — centered, dramatic */}
        <h2
          className="phi-anim mx-auto mt-6 text-center"
          style={{
            color: "var(--text-primary)",
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
            className="text-[14px] leading-[1.75] font-light"
            style={{ color: "rgba(148,163,184,0.65)" }}
          >
            Hyvinvointialalla luottamus ei synny siitä, että kaikki näyttää viimeistellyltä. Se syntyy siitä, että verkkosivusto tuntuu aidosti yrityksenne näköiseltä.
          </p>
        </div>

        {/* Divider + hero statement — tighter spacing */}
        <div className="phi-anim mx-auto text-center" style={{ maxWidth: "440px", marginTop: "40px" }}>
          <div
            style={{
              width: "28px",
              height: "1px",
              background: "rgba(200,172,75,0.16)",
              margin: "0 auto 20px",
            }}
          />
          {/* First line — softer */}
          <p
            style={{
              color: "rgba(226, 232, 240, 0.50)",
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
              color: "rgba(226, 232, 240, 0.82)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.3rem, 2.6vw, 1.75rem)",
              lineHeight: 1.35,
              letterSpacing: "-0.02em",
            }}
          >
            Tuomme sen vain <span style={{ color: "rgba(200,172,75,0.75)" }}>selkeämmin</span> esiin.
          </p>
        </div>
      </div>
    </section>
  );
}
