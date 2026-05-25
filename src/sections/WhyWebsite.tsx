import { useEffect, useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyWebsite() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".phil-anim");
      if (els) {
        gsap.fromTo(
          els,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.16,
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

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        backgroundColor: "#0d1f35",
        padding: "100px 24px",
      }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(200, 172, 75, 0.10) 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto" style={{ maxWidth: "720px" }}>
        {/* Eyebrow */}
        <p
          className="phil-anim text-center text-[11px] font-normal uppercase tracking-[0.2em]"
          style={{ color: "rgba(200, 172, 75, 0.6)" }}
        >
          Lähestymistapa
        </p>

        {/* Main headline — strongest statement */}
        <h2
          className="phil-anim mx-auto mt-4 text-center text-[1.9rem] leading-[1.08] sm:text-[2.2rem] lg:text-[2.4rem]"
          style={{
            color: "var(--text-primary)",
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: "-0.02em",
            maxWidth: "560px",
          }}
        >
          Näkyvyys ei korjaa heikkoa perustaa.
        </h2>

        {/* Secondary statement — bridge between headline and body */}
        <p
          className="phil-anim mx-auto mt-8 text-center text-[16px] leading-[1.6] font-normal"
          style={{
            color: "rgba(226, 232, 240, 0.7)",
            maxWidth: "520px",
          }}
        >
          Yritykset investoivat jatkuvasti mainontaan ja näkyvyyteen, vaikka nykyinen verkkosivusto menettää asiakkaita jo ennen ensimmäistä yhteydenottoa.
        </p>

        {/* Subtle divider line */}
        <div
          className="phil-anim mx-auto mt-10"
          style={{
            width: "48px",
            height: "1px",
            background: "rgba(200, 172, 75, 0.25)",
          }}
        />

        {/* Body copy — editorial, smaller */}
        <div className="phil-anim mt-10" style={{ maxWidth: "600px" }}>
          <p
            className="text-[14px] leading-[1.75] font-light"
            style={{ color: "var(--text-secondary)" }}
          >
            Ongelma ei yleensä ole palvelussa — vaan siinä, miltä yritys tuntuu verkossa. Asiakas tekee päätelmiä sekunneissa luottamuksesta, laadusta ja ammattimaisuudesta.
          </p>
          <p
            className="mt-6 text-[14px] leading-[1.75] font-light"
            style={{ color: "var(--text-secondary)" }}
          >
            Holva Toimisto rakentaa verkkosivustoja, jotka yhdistävät premium-tason visuaalisuuden, selkeän rakenteen ja harkitun käyttäjäkokemuksen, jotta yhteydenotto tuntuisi asiakkaalle helpolta ja luonnolliselta.
          </p>
        </div>

        {/* Editorial CTA */}
        <div className="phil-anim mt-12 text-center">
          <Link
            to="/meista"
            className="inline-flex items-center gap-2 text-[13px] font-normal tracking-wide transition-colors duration-300"
            style={{ color: "rgba(200, 172, 75, 0.65)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(200, 172, 75, 0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(200, 172, 75, 0.65)";
            }}
          >
            <span
              style={{
                borderBottom: "1px solid rgba(200, 172, 75, 0.2)",
                paddingBottom: "1px",
              }}
            >
              Lue lisää Holva Toimiston ajattelutavasta
            </span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
