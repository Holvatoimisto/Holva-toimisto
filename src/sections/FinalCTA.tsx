import { useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FinalCTAProps {
  headline?: string;
  body?: string;
  buttonText?: string;
  helperText?: string;
}

export default function FinalCTA({
  headline = "Haluatteko nähdä miltä sivunne voisi näyttää oikein rakennettuna?",
  body = "Lähetämme teille henkilökohtaisen Loom-videodemon uudesta verkkosivusuunnasta noin 3 päivän sisällä.",
  buttonText = "Pyydä demo",
  helperText = "Ei sitoumuksia. Ei myyntipuhelua.",
}: FinalCTAProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".cta-animate");
      if (els) {
        gsap.fromTo(
          els,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const { openModal } = useModal();

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        backgroundColor: "var(--bg-secondary)",
        padding: "120px 48px",
      }}
    >
      {/* Subtle top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(200, 172, 75, 0.12) 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-[700px] text-center">
        <h2
          className="cta-animate text-3xl leading-tight tracking-tight lg:text-[52px] lg:leading-[1.12]"
          style={{
            color: "var(--text-primary)",
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: "-0.02em",
          }}
        >
          {headline}
        </h2>
        <p
          className="cta-animate mt-5 text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {body}
        </p>
        <button
          onClick={openModal}
          className="cta-animate mt-12 rounded-[10px] px-10 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
          style={{
            backgroundColor: "var(--accent-gold)",
            color: "var(--bg-secondary)",
            letterSpacing: "0.04em",
            boxShadow: "0 4px 20px rgba(200, 172, 75, 0.25)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#D4B85A";
            e.currentTarget.style.boxShadow =
              "0 8px 32px rgba(200, 172, 75, 0.50)";
            e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent-gold)";
            e.currentTarget.style.boxShadow =
              "0 4px 20px rgba(200, 172, 75, 0.25)";
            e.currentTarget.style.transform = "translateY(0) scale(1)";
          }}
        >
          {buttonText}
        </button>
        <p
          className="cta-animate mt-2 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          {helperText}
        </p>
      </div>
    </section>
  );
}
