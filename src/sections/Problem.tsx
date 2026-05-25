import { useEffect, useRef } from "react";
import { Users, TrendingDown, Smartphone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: Users,
    title: "Kävijät lähtevät ottamatta yhteyttä",
    body: "94% kävijöistä poistuu sivulta ilman toimintaa. He eivät soita, eivät täytä lomaketta, eivät osta.",
  },
  {
    icon: TrendingDown,
    title: "Hidastuvat sivut tappavat konversiot",
    body: "Jokainen sekunti latausajassa vähentää konversioita 7%. Kävijät eivät odota — he siirtyvät kilpailijalle.",
  },
  {
    icon: Smartphone,
    title: "Mobiilikokemus ratkaisee",
    body: "Yli 60% kävijöistä tulee mobiililaitteilla. Jos sivu ei toimi puhelimessa, menetät enemmistön potentiaalisista asiakkaista.",
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".problem-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
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
        backgroundColor: "var(--bg-primary)",
        padding: "120px 48px",
      }}
    >
      {/* Subtle top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(200, 172, 75, 0.15) 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        {/* Header */}
        <div className="mx-auto max-w-[720px] text-center">
          <p
            className="text-xs font-medium uppercase tracking-[0.08em]"
            style={{ color: "var(--accent-teal)" }}
          >
            TODELLINEN ONGELMA
          </p>
          <h2
            className="mt-6 text-3xl leading-tight tracking-tight lg:text-[52px] lg:leading-[1.12]"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Useimmat yritykset luulevat tarvitsevansa lisää liikennettä.
            Todellisuudessa he menettävät asiakkaita jo olemassa oleville
            sivuilleen.
          </h2>
          <p
            className="mt-6 text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Ennen kun koitamme saada lisää liidejä muin keinoin, meidän pitää
            varmistaa, että perustassa ei ole reikiä.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {problems.map((item, i) => (
            <div
              key={i}
              className="problem-card transition-all duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "16px",
                padding: "40px 32px",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.10)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(200, 172, 75, 0.25)";
                e.currentTarget.style.boxShadow =
                  "0 12px 48px rgba(0, 0, 0, 0.20)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(0, 0, 0, 0.10)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "rgba(200, 172, 75, 0.10)",
                }}
              >
                <item.icon
                  size={28}
                  style={{ color: "var(--accent-gold)" }}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className="mt-6 text-xl font-semibold"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {item.title}
              </h3>
              <p
                className="mt-3 text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
