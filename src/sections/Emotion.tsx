import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Emotion() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".em-anim");
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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10"
      style={{ padding: "80px 24px 80px", backgroundColor: "#091525" }}
    >
      {/* Gradient transition from DeeperInsight */}
      <div
        className="absolute top-0 left-0 right-0 h-20"
        style={{
          background: "linear-gradient(180deg, rgba(13,31,53,0.35) 0%, #091525 100%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(200,172,75,0.05) 50%, transparent 100%)" }}
      />

      <div className="relative mx-auto" style={{ maxWidth: "520px" }}>
        {/* Eyebrow */}
        <p className="em-anim text-[11px] font-normal uppercase tracking-[0.2em]" style={{ color: "rgba(200,172,75,0.50)" }}>
          Miltä yrityksenne tuntuu
        </p>

        {/* Headline */}
        <h2 className="em-anim mt-7" style={{
          color: "var(--text-primary)",
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(1.5rem, 3.2vw, 2rem)",
          lineHeight: 1.22,
          letterSpacing: "-0.025em",
        }}>
          Yrityksenne pitäisi tuntua verkossa samalta kuin paikan päällä.
        </h2>

        {/* Body — 4 rhythm lines */}
        <div className="em-anim mt-7 flex flex-col gap-1" style={{ maxWidth: "340px" }}>
          {["Luotettavalta.", "Selkeältä.", "Rauhalliselta.", "Ja ammattimaiselta."].map((line, i) => (
            <p key={i} className="text-[14px] leading-[1.7] font-light" style={{
              color: i === 3 ? "rgba(148,163,184,0.55)" : "rgba(226,232,240,0.72)",
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Closing line */}
        <p className="em-anim mt-8 text-[13px] leading-[1.75] font-light" style={{ color: "rgba(148,163,184,0.50)", maxWidth: "380px" }}>
          Kun verkkokokemus ei tunnu laadukkaalta, kävijä yhdistää sen tunteen helposti myös itse palveluun.
        </p>
      </div>
    </section>
  );
}
