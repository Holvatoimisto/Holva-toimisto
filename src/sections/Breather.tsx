import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Breather() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = ref.current?.querySelector(".breather-text");
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative"
      style={{ padding: "36px 24px 52px", backgroundColor: "#0b1f35" }}
    >
      {/* Top blend: navy → teal */}
      <div
        className="absolute left-0 right-0 top-0"
        style={{
          height: "28px",
          background: "linear-gradient(180deg, #091525 0%, #0b1f35 100%)",
        }}
      />

      {/* Bottom blend: teal → navy */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "28px",
          background: "linear-gradient(180deg, #0b1f35 0%, #091525 100%)",
        }}
      />

      <div
        className="breather-text relative mx-auto"
        style={{ maxWidth: "460px" }}
      >
        <p
          className="text-center"
          style={{
            color: "rgba(226, 232, 240, 0.50)",
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
            lineHeight: 1.7,
            letterSpacing: "-0.005em",
          }}
        >
          Verkkosivusto on usein ensimmäinen tunne yrityksestänne.
          <br />
          <span style={{ color: "rgba(226, 232, 240, 0.32)" }}>
            Jos kokemus ei tunnu luotettavalta ja laadukkaalta jo siellä, kävijä
            yhdistää sen tunteen alitajuntaisesti myös palvelunne tasoon.
          </span>
        </p>
      </div>
    </section>
  );
}
