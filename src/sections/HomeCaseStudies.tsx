import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    title: "ChiroPhysio Kerava",
    before: "/case-chiro-before.png",
    after: "/case-chiro-after.png",
    beforeInsight: "Palvelut ja rakenne tuntuivat raskailta hahmottaa nopeasti.",
    afterInsight: "Selkeämpi ensivaikutelma, vahvempi palvelulupaus ja helpompi eteneminen yhteydenottoon.",
  },
  {
    title: "Hieronta & kehonhuolto",
    before: "/case-massage-before.jpg",
    after: "/case-massage-after.jpg",
    beforeInsight: "Sivusto ei välittänyt yrityksen tunnelmaa tai palvelun laatua.",
    afterInsight: "Rauhallisempi kokonaisuus, vahvempi premium-tunne ja selkeämpi käyttäjäpolku.",
  },
  {
    title: "Hierontapalvelu Salo",
    before: "/case-utriainen-before.png",
    after: "/case-utriainen-after.png",
    beforeInsight: "Sisältöä oli paljon, mutta tärkeimmät asiat eivät erottuneet tarpeeksi nopeasti.",
    afterInsight: "Rakennetta selkeytettiin ja palvelukokemus tehtiin uskottavammaksi heti ensisilmäyksellä.",
  },
];

function CaseCard({ c }: { c: (typeof cases)[0] }) {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <div>
      {/* Image card */}
      <div
        className="group relative overflow-hidden cursor-pointer"
        style={{
          borderRadius: "14px",
          boxShadow:
            "0 4px 20px rgba(0, 0, 0, 0.20), 0 0 0 1px rgba(255, 255, 255, 0.03)",
          transition: "box-shadow 0.4s ease, transform 0.4s ease",
        }}
        onClick={() => setShowAfter((prev) => !prev)}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 12px 40px rgba(0, 0, 0, 0.30), 0 0 0 1px rgba(200, 172, 75, 0.10)";
          e.currentTarget.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 4px 20px rgba(0, 0, 0, 0.20), 0 0 0 1px rgba(255, 255, 255, 0.03)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Main image */}
        <div className="relative overflow-hidden">
          <img
            src={showAfter ? c.after : c.before}
            alt={c.title}
            className="h-auto w-full"
            style={{
              transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease",
              filter: showAfter ? "brightness(1)" : "brightness(0.82)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            loading="lazy"
          />

          {/* Subtle bottom gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 65%, rgba(9, 21, 37, 0.35) 100%)",
            }}
          />

          {/* Toggle thumbnail — darker, more contrast */}
          <div
            className="absolute left-3 top-3 z-10 overflow-hidden"
            style={{
              width: "72px",
              height: "48px",
              borderRadius: "8px",
              border: "1.5px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 3px 12px rgba(0, 0, 0, 0.45)",
              transition: "transform 0.3s ease",
            }}
          >
            <img
              src={showAfter ? c.before : c.after}
              alt="toggle"
              className="h-full w-full object-cover object-top"
              style={{
                filter: showAfter
                  ? "saturate(0.35) brightness(0.45)"
                  : "saturate(0.7) brightness(0.75)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: showAfter
                  ? "rgba(9,21,37,0.40)"
                  : "rgba(9,21,37,0.20)",
              }}
            />
          </div>
        </div>

        {/* Card footer — BEFORE: grey, AFTER: gold accent */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ backgroundColor: "rgba(13, 31, 53, 0.95)" }}
        >
          <p
            className="text-[13px] font-normal tracking-wide"
            style={{ color: "rgba(255, 255, 255, 0.55)" }}
          >
            {c.title}
          </p>
          <span
            className="text-[10px] font-normal uppercase tracking-[0.12em]"
            style={{
              color: showAfter
                ? "rgba(200,172,75,0.85)"
                : "rgba(148,163,184,0.45)",
              border: showAfter
                ? "1px solid rgba(200,172,75,0.35)"
                : "1px solid rgba(255,255,255,0.08)",
              backgroundColor: showAfter
                ? "rgba(200,172,75,0.08)"
                : "transparent",
              borderRadius: "5px",
              padding: "2px 8px",
              transition: "all 0.3s ease",
            }}
          >
            {showAfter ? "Jälkeen" : "Ennen"}
          </span>
        </div>
      </div>

      {/* Single insight line — matches active image, no labels */}
      <div className="mt-3 px-1">
        <p
          className="text-[12px] leading-[1.6] font-light"
          style={{
            color: showAfter ? "rgba(226,232,240,0.58)" : "rgba(148,163,184,0.48)",
            transition: "color 0.35s ease",
          }}
        >
          {showAfter ? c.afterInsight : c.beforeInsight}
        </p>
      </div>
    </div>
  );
}

export default function HomeCaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".proof-animate");
      if (els) {
        gsap.fromTo(
          els,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        backgroundColor: "#0d1f35",
        padding: "80px 24px",
      }}
    >
      {/* Gradient transition */}
      <div
        className="absolute top-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(180deg, #091525 0%, #0d1f35 100%)",
        }}
      />

      <div className="relative mx-auto" style={{ maxWidth: "1200px" }}>
        {/* Header */}
        <div className="mx-auto max-w-[640px] text-center">
          <p
            className="proof-animate text-[11px] font-normal uppercase tracking-[0.16em]"
            style={{ color: "rgba(200, 172, 75, 0.50)" }}
          >
            Valittuja projekteja
          </p>
          <h2
            className="proof-animate mt-3 text-[1.7rem] leading-[1.1] sm:text-[2.1rem] lg:text-[2.4rem]"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Rakennettu uudelleen tukemaan luottamusta ja yhteydenottoa
          </h2>
        </div>

        {/* Cards */}
        <div className="proof-animate mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <CaseCard key={i} c={c} />
          ))}
        </div>

        {/* Dual CTA */}
        <div className="proof-animate mt-10 flex flex-wrap items-center justify-center gap-4">
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
            Katso miltä sivunne voisivat näyttää
          </button>

          <Link
            to="/case-esimerkit"
            className="inline-flex items-center gap-2 rounded-[10px] px-6 py-[10px] text-[13px] font-normal tracking-wide transition-all duration-300"
            style={{
              color: "var(--accent-gold)",
              letterSpacing: "0.02em",
              border: "1.5px solid rgba(200, 172, 75, 0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(200, 172, 75, 0.65)";
              e.currentTarget.style.backgroundColor =
                "rgba(200, 172, 75, 0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(200, 172, 75, 0.35)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Tutustu kaikkiin töihin
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
