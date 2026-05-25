import { useEffect, useRef } from "react";
import {
  Target,
  Smartphone,
  Zap,
  Layout,
  Shield,
  MousePointerClick,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Target,
    title: "Rakennettu konversioita varten",
    body: "Jokainen elementti ohjaa kävijää kohti yhteydenottoa. Ei koristeita — vain tuloksia.",
  },
  {
    icon: Smartphone,
    title: "Mobiili edellä",
    body: "Suunnittelu alkaa mobiilista. Sivut toimivat täydellisesti jokaisella laitteella.",
  },
  {
    icon: Zap,
    title: "Salamannopea lataus",
    body: "Optimoitu suorituskyky. Alle 2 sekunnin latausaika — joka kerta.",
  },
  {
    icon: Layout,
    title: "Selkeä rakenne",
    body: "Kävijä tietää välittömästi mitä tehdä. Ei sekaannusta, ei häiriötekijöitä.",
  },
  {
    icon: Shield,
    title: "Luottamus ensin",
    body: "Rakennan uskottavuuden jo ensimmäisellä sekunnilla. Arvostelut, referenssit, selkeä viesti.",
  },
  {
    icon: MousePointerClick,
    title: "Helppo päätös",
    body: "Yksi selkeä toimintakehotus. Ei vaihtoehtohämmennystä — vain seuraava askel.",
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".feature-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
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

      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        {/* Header */}
        <div className="mx-auto max-w-[640px] text-center">
          <p
            className="text-xs font-medium uppercase tracking-[0.08em]"
            style={{ color: "var(--accent-gold)" }}
          >
            PALVELU
          </p>
          <h2
            className="mt-6 text-3xl leading-tight tracking-tight lg:text-[52px] lg:leading-[1.12]"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Sivut jotka eivät vain näytä hyvältä — ne tuottavat tulosta.
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={i}
              className="feature-card flex gap-5 transition-all duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "16px",
                padding: "28px",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "rgba(200, 172, 75, 0.25)";
                e.currentTarget.style.boxShadow =
                  "0 12px 48px rgba(0, 0, 0, 0.18)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: "rgba(200, 172, 75, 0.08)",
                }}
              >
                <item.icon
                  size={24}
                  style={{ color: "var(--accent-gold)" }}
                />
              </div>
              <div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
