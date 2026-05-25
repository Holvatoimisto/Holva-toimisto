import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyBackRoom() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = ref.current?.querySelectorAll(".cs-anim");
      if (!els?.length) return;
      gsap.fromTo(
        els,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* ── Centered title ── */}
      <div className="cs-anim mx-auto mb-8 text-center" style={{ maxWidth: "560px" }}>
        <p className="text-[10px] font-normal uppercase tracking-[0.2em]" style={{ color: "rgba(200,172,75,0.45)" }}>
          HYVINVOINTIALA
        </p>
        <h2
          className="mt-3"
          style={{
            color: "var(--text-primary)",
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(1.6rem, 2.8vw, 2.1rem)",
            lineHeight: 1.18,
            letterSpacing: "-0.02em",
          }}
        >
          Selkeämpi ensivaikutelma hyvinvointialan yritykselle
        </h2>
      </div>

      {/* ── Before / After side by side ── */}
      <div className="cs-anim grid grid-cols-12 gap-2" style={{ maxWidth: "820px", margin: "0 auto" }}>
        {/* Before — smaller, muted */}
        <div className="col-span-5">
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.03)",
            }}
          >
            <img
              src="/case-backroom-before.jpg"
              alt="The Back Room — ennen"
              className="h-auto w-full"
              loading="lazy"
              style={{ filter: "saturate(0.40) brightness(0.55)" }}
            />
            <span
              className="absolute left-2.5 top-2.5 text-[9px] font-normal uppercase tracking-[0.12em]"
              style={{
                color: "rgba(255,255,255,0.35)",
                padding: "2px 7px",
                borderRadius: "4px",
                background: "rgba(0,0,0,0.40)",
              }}
            >
              Ennen
            </span>
          </div>
        </div>

        {/* After — larger, dominant but balanced */}
        <div className="col-span-7">
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: "12px",
              border: "1px solid rgba(200,172,75,0.10)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            }}
          >
            <img
              src="/case-backroom-after.png"
              alt="The Back Room — jälkeen"
              className="h-auto w-full"
              loading="lazy"
              style={{ filter: "brightness(1.08)" }}
            />
            <span
              className="absolute left-3 top-3 text-[9px] font-normal uppercase tracking-[0.12em]"
              style={{
                color: "var(--accent-gold)",
                padding: "2px 7px",
                borderRadius: "4px",
                background: "rgba(9,21,37,0.60)",
                border: "1px solid rgba(200,172,75,0.18)",
              }}
            >
              Jälkeen
            </span>
          </div>
        </div>
      </div>

      {/* ── Text below — 3 insights with varied rhythm ── */}
      <div className="cs-anim mx-auto mt-7 grid grid-cols-1 gap-7 sm:grid-cols-3" style={{ maxWidth: "820px" }}>
        {/* Lähtötilanne — short */}
        <div>
          <p className="text-[10px] font-normal uppercase tracking-[0.12em]" style={{ color: "rgba(148,163,184,0.40)" }}>
            Lähtötilanne
          </p>
          <p className="mt-2 text-[13px] leading-[1.65] font-light" style={{ color: "rgba(226,232,240,0.60)" }}>
            Vanha sivusto ei välittänyt samaa tunnetta kuin itse tila. Tärkeimmät asiat hukkuivat sisällön alle.
          </p>
        </div>

        {/* Muutos — slightly longer */}
        <div>
          <p className="text-[10px] font-normal uppercase tracking-[0.12em]" style={{ color: "rgba(148,163,184,0.40)" }}>
            Muutos
          </p>
          <p className="mt-2 text-[13px] leading-[1.65] font-light" style={{ color: "rgba(226,232,240,0.65)" }}>
            Rakennetta yksinkertaistettiin ja ensivaikutelmaa vahvistettiin selkeämmällä typografialla sekä lämpimämmällä visuaalisuudella.
          </p>
        </div>

        {/* Lopputulos — shortest, punchy, serif */}
        <div>
          <p className="text-[10px] font-normal uppercase tracking-[0.12em]" style={{ color: "rgba(148,163,184,0.40)" }}>
            Lopputulos
          </p>
          <p
            className="mt-2 text-[14px] leading-[1.55] font-light"
            style={{
              color: "rgba(226,232,240,0.78)",
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: "-0.01em",
            }}
          >
            Verkkokokemus tuntuu nyt enemmän samalta kuin itse paikka.
          </p>
        </div>
      </div>
    </div>
  );
}
