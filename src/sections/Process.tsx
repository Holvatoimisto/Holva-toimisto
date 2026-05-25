import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    heading: "Pyydä demo",
    text: "Täytät lyhyen lomakkeen, jonka perusteella suunnittelemme yrityksellesi henkilökohtaisen verkkosivudemonstration.",
  },
  {
    number: "02",
    heading: "Saat videodemon",
    text: "Lähetämme Loom-videon, jossa käymme läpi uuden verkkosivun suunnan ja ideat käytännössä.",
  },
  {
    number: "03",
    heading: "Käydään suunta yhdessä läpi",
    text: "Varaamme lyhyen Teams-palaverin, jossa käymme yhdessä läpi tavoitteesi, vastaan kysymyksiisi ja päätämme tuntuuko yhteistyö hyvältä ratkaisulta.",
  },
  {
    number: "04",
    heading: "Sivusto viimeistellään ja julkaistaan",
    text: "Viimeistelemme verkkosivukokonaisuuden, joka näyttää uskottavalta ja toimii sujuvasti kaikilla laitteilla.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerEls = sectionRef.current?.querySelectorAll(".process-header");
      if (headerEls) {
        gsap.fromTo(
          headerEls,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
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

      const stepEls = sectionRef.current?.querySelectorAll(".process-step");
      if (stepEls) {
        gsap.fromTo(
          stepEls,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stepEls[0],
              start: "top 88%",
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
        backgroundColor: "#091525",
        padding: "72px 24px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1000px" }}>
        {/* Header */}
        <div className="mx-auto max-w-[520px] text-center">
          <p
            className="process-header text-[11px] font-normal uppercase tracking-[0.16em]"
            style={{ color: "rgba(200, 172, 75, 0.65)" }}
          >
            Yksinkertainen prosessi
          </p>
          <h2
            className="process-header mt-2.5 text-[1.8rem] leading-[1.05] sm:text-[2.2rem] lg:text-[2.4rem]"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: "-0.02em",
            }}
          >
Yksinkertainen prosessi. Harkittu lopputulos.
          </h2>
          <p
            className="process-header mt-2.5 text-[14px] leading-[1.6] font-light"
            style={{ color: "var(--text-secondary)" }}
          >
            Huolehdimme koko projektista alusta loppuun, jotta voit keskittyä omaan työhösi.
          </p>
        </div>

        {/* Steps — clean horizontal 4-column grid */}
        <div className="mt-10 lg:mt-12 relative">
          {/* Desktop */}
          <div className="hidden lg:block">
            <div
              className="mb-8"
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(200, 172, 75, 0.12) 50%, transparent 100%)",
              }}
            />

            {/* Steps 1–2 */}
            <div className="grid grid-cols-4 gap-0">
              {steps.slice(0, 2).map((step, i) => (
                <div key={i} className="process-step relative px-5">
                  {i > 0 && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-px"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 10%, rgba(255, 255, 255, 0.06) 50%, transparent 90%)",
                      }}
                    />
                  )}
                  <span
                    className="text-[11px] font-normal tracking-[0.12em]"
                    style={{
                      color: "rgba(200, 172, 75, 0.65)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="mt-3 text-[16px] font-normal leading-[1.3]"
                    style={{
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {step.heading}
                  </h3>
                  <p
                    className="mt-2 text-[12px] leading-[1.65] font-light"
                    style={{ color: "rgba(148, 163, 184, 0.5)" }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}
              {/* Spacer columns for steps 3–4 */}
              <div className="col-span-2" />
            </div>

            {/* Transition line — soft, centered, implies choice */}
            <div className="py-7 text-center">
              <p
                className="text-[12px] font-light italic"
                style={{ color: "rgba(148, 163, 184, 0.32)" }}
              >
                Demo ei sido mihinkään — jatkamme yhdessä vain jos kokonaisuus tuntuu oikealta.
              </p>
            </div>

            {/* Steps 3–4 */}
            <div className="grid grid-cols-4 gap-0">
              {/* Spacer columns for steps 1–2 */}
              <div className="col-span-2" />
              {steps.slice(2, 4).map((step, i) => (
                <div key={i + 2} className="process-step relative px-5">
                  {i > 0 && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-px"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 10%, rgba(255, 255, 255, 0.06) 50%, transparent 90%)",
                      }}
                    />
                  )}
                  <span
                    className="text-[11px] font-normal tracking-[0.12em]"
                    style={{
                      color: "rgba(200, 172, 75, 0.65)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="mt-3 text-[16px] font-normal leading-[1.3]"
                    style={{
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {step.heading}
                  </h3>
                  <p
                    className="mt-2 text-[12px] leading-[1.65] font-light"
                    style={{ color: "rgba(148, 163, 184, 0.5)" }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: stacked */}
          <div className="lg:hidden">
            {steps.map((step, i) => (
              <div key={i}>
                <div
                  className="process-step"
                  style={{
                    borderTop: i > 0 ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
                    paddingTop: i > 0 ? "20px" : "0",
                    marginTop: i > 0 ? "20px" : "0",
                  }}
                >
                  <span
                    className="text-[11px] font-normal tracking-[0.12em]"
                    style={{
                      color: "rgba(200, 172, 75, 0.65)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="mt-2 text-[16px] font-normal leading-[1.3]"
                    style={{
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {step.heading}
                  </h3>
                  <p
                    className="mt-1.5 text-[13px] leading-[1.65] font-light"
                    style={{ color: "rgba(148, 163, 184, 0.45)" }}
                  >
                    {step.text}
                  </p>
                </div>
                {/* Insert transition after step 2 on mobile */}
                {i === 1 && (
                  <div className="py-6 text-center">
                    <p
                      className="text-[12px] font-light italic"
                      style={{ color: "rgba(148, 163, 184, 0.30)" }}
                    >
                      Demo ei sido mihinkään — jatkamme yhdessä vain jos kokonaisuus tuntuu oikealta.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
