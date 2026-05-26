import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowLeft, Clock, Eye, MessageCircle } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Pyydä demo",
    intro: "Täytät lyhyen lomakkeen, jonka perusteella suunnittelemme yrityksellesi henkilökohtaisen verkkosivudemonstration.",
    bullets: [
      "nykyisen verkkosivun ensivaikutelman",
      "rakenteen selkeyden",
      "mahdolliset kitkakohdat käyttäjäkokemuksessa",
      "miten sivusto voisi tukea yhteydenottoja paremmin",
    ],
    duration: "alle minuutti",
  },
  {
    number: "02",
    title: "Saat videodemon",
    intro: "Rakennamme suunnan uudelle verkkosivulle ja lähetämme Loom-videon, jossa käymme kokonaisuuden käytännössä läpi.",
    bullets: [
      "miltä uusi ensivaikutelma voisi näyttää",
      "miten rakenne ja sisältö selkeytyvät",
      "konkreettiset parannusehdotukset",
    ],
    duration: "noin 3 päivässä",
  },
  {
    number: "03",
    title: "Käydään suunta yhdessä läpi",
    intro: "Varaamme lyhyen Teams-palaverin, jossa käymme yhdessä läpi sivuston suunnan, tavoitteet ja kokonaisuuden ennen toteutusta.",
    bullets: [
      "rakenne tukee yrityksenne tavoitteita",
      "tunnelma vastaa brändiänne",
      "kokonaisuus toimii myös mobiilissa",
    ],
    duration: "30–45 minuuttia",
  },
  {
    number: "04",
    title: "Sivusto viimeistellään ja julkaistaan",
    intro: "Viimeistelemme verkkosivukokonaisuuden, joka näyttää uskottavalta ja toimii sujuvasti kaikilla laitteilla.",
    bullets: [
      "responsiivisuudesta",
      "visuaalisesta viimeistelystä",
      "käyttökokemuksen hienosäädöstä",
    ],
    duration: "kun suunta on hyväksytty",
  },
];

const badges = [
  {
    icon: Clock,
    title: "Selkeä prosessi",
    body: "Tiedät koko ajan missä mennään, mitä tapahtuu seuraavaksi ja miksi.",
  },
  {
    icon: Eye,
    title: "Näet suunnan ennen toteutusta",
    body: "Saat konkreettisen demon ja Loom-videon ennen lopullista päätöstä.",
  },
  {
    icon: MessageCircle,
    title: "Pitkäjänteinen ajattelu",
    body: "Rakennamme verkkosivuja, jotka tukevat yrityksen uskottavuutta ja kasvua myös pitkällä aikavälillä.",
  },
];

export default function Prosessi() {
  const { openModal } = useModal();
  const stepsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      const stepEls = stepsRef.current?.querySelectorAll(".step-item");
      if (stepEls) {
        gsap.fromTo(
          stepEls,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
      const line = stepsRef.current?.querySelector(".timeline-line");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
      const badgeEls = badgesRef.current?.querySelectorAll(".badge-card");
      if (badgeEls) {
        gsap.fromTo(
          badgeEls,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: badgesRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <SEO title="Prosessi" description="Näin Holva Toimisto rakentaa verkkosivustosi — selkeä prosessi alusta loppuun." canonical="/prosessi" />
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center px-6 text-center"
        style={{
          backgroundColor: "var(--bg-secondary)",
          paddingTop: "100px",
          paddingBottom: "80px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(200, 172, 75, 0.12) 50%, transparent 100%)",
          }}
        />

        <div className="mx-auto max-w-[800px]">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-white"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={16} />
            Takaisin etusivulle
          </Link>
          <p
            className="text-xs font-medium uppercase tracking-[0.08em]"
            style={{ color: "var(--accent-gold)" }}
          >
            Prosessi
          </p>
          <h1
            className="mt-6 text-4xl leading-[1.08] tracking-tight lg:text-[56px]"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: "-0.03em",
            }}
          >
            Yksinkertainen prosessi. Harkittu lopputulos.
          </h1>
          <p
            className="mx-auto mt-8 max-w-[600px] text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Prosessi on rakennettu mahdollisimman selkeäksi ja läpinäkyväksi.
            Näet suunnan ennen toteutusta, ja etenemme vaihe vaiheelta yhdessä.
          </p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section
        className="relative"
        style={{
          backgroundColor: "var(--bg-primary)",
          padding: "120px 48px",
        }}
      >
        <div className="mx-auto max-w-[800px]" ref={stepsRef}>
          <div className="relative">
            {/* Timeline line */}
            <div
              className="timeline-line absolute hidden md:left-1/2 md:block md:-translate-x-1/2"
              style={{
                top: 0,
                bottom: 0,
                width: "2px",
                backgroundColor: "rgba(200, 172, 75, 0.20)",
                transformOrigin: "top",
              }}
            />
            <div
              className="timeline-line absolute left-7 top-0 bottom-0 block md:hidden"
              style={{
                width: "2px",
                backgroundColor: "rgba(200, 172, 75, 0.20)",
                transformOrigin: "top",
              }}
            />

            <div className="flex flex-col gap-14">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`step-item relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step card */}
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div
                      className="transition-all duration-300"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        border: "1px solid var(--card-border)",
                        borderRadius: "16px",
                        padding: "32px",
                        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.10)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(200, 172, 75, 0.25)";
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
                      <h3
                        className="text-xl font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="mt-3 text-base leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {step.intro}
                      </p>
                      {/* Bullets */}
                      <div className="mt-4 flex flex-col gap-1.5">
                        {step.bullets.map((b, j) => (
                          <p
                            key={j}
                            className="text-sm leading-relaxed"
                            style={{
                              color: "rgba(148,163,184,0.65)",
                              paddingLeft: i % 2 === 0 ? "0px" : "0px",
                              paddingRight: i % 2 === 0 && window.innerWidth >= 768 ? "0px" : "0px",
                            }}
                          >
                            – {b}
                          </p>
                        ))}
                      </div>
                      <p
                        className="mt-4 text-sm"
                        style={{ color: "var(--accent-teal)" }}
                      >
                        {step.duration}
                      </p>
                    </div>
                  </div>

                  {/* Number circle */}
                  <div
                    className="absolute left-7 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full md:left-1/2 md:-translate-x-1/2"
                    style={{
                      backgroundColor: "var(--accent-gold)",
                      color: "var(--bg-secondary)",
                      boxShadow: "0 0 0 6px var(--bg-primary)",
                    }}
                  >
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>

                  {/* Spacer */}
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section
        ref={badgesRef}
        className="relative"
        style={{
          backgroundColor: "var(--bg-secondary)",
          padding: "120px 48px",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(200, 172, 75, 0.12) 50%, transparent 100%)",
          }}
        />

        <div className="mx-auto max-w-[1000px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {badges.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="badge-card flex flex-col items-center text-center"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "16px",
                    padding: "40px 24px",
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(200, 172, 75, 0.10)" }}
                  >
                    <Icon size={22} style={{ color: "var(--accent-gold)" }} />
                  </div>
                  <h3
                    className="mt-5 text-lg font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)", maxWidth: "280px" }}
                  >
                    {b.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative"
        style={{
          backgroundColor: "var(--bg-primary)",
          padding: "120px 24px",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(200, 172, 75, 0.12) 50%, transparent 100%)",
          }}
        />

        <div className="mx-auto text-center" style={{ maxWidth: "560px" }}>
          <h2
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Haluatko nähdä miltä sivustonne voisi näyttää?
          </h2>
          <p
            className="mt-4 text-[15px] leading-[1.75] font-light"
            style={{
              color: "var(--text-secondary)",
              maxWidth: "460px",
              margin: "16px auto 0",
            }}
          >
            Suunnittelemme yrityksellenne henkilökohtaisen verkkosivudemon ja
            käymme sen läpi Loom-videolla.
          </p>
          <button
            onClick={openModal}
            className="mt-8 rounded-[10px] px-9 py-[11px] text-[13px] font-normal tracking-wide transition-all duration-300"
            style={{
              backgroundColor: "var(--accent-gold)",
              color: "var(--bg-secondary)",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 20px rgba(200,172,75,0.18)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#D4B85A";
              e.currentTarget.style.boxShadow =
                "0 8px 28px rgba(200,172,75,0.35)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-gold)";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(200,172,75,0.18)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Pyydä demo
          </button>
          <p
            className="mt-3 text-[12px] font-light"
            style={{ color: "rgba(148,163,184,0.40)" }}
          >
            Ei sitoumuksia. Ei painostavaa myyntiä.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
