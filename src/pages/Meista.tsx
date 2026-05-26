import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import FinalCTA from "@/sections/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: "01",
    title: "Tulokset edellä",
    body: "Kaikki päätökset perustuvat siihen, mikä auttaa kävijää etenemään eteenpäin. Selkeys, rakenne ja käyttökokemus eivät ole vain design-valintoja — ne vaikuttavat suoraan siihen, ottaako asiakas yhteyttä vai ei.",
  },
  {
    number: "02",
    title: "Läpinäkyvyys",
    body: "Pidämme prosessin yksinkertaisena ja selkeänä. Ei piilokuluja, ei turhaa teknistä jargonia. Näet suunnan ja demon ennen päätöstä.",
  },
  {
    number: "03",
    title: "Pitkäjänteinen kumppanuus",
    body: "Emme ajattele projekteja kertaluontoisina toimituksina. Haluamme rakentaa verkkonäkyvyyttä, joka tukee yrityksen kasvua myös pitkällä aikavälillä.",
  },
];

export default function Meista() {
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      const textEls = storyRef.current?.querySelectorAll(".story-animate");
      if (textEls) {
        gsap.fromTo(
          textEls,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: storyRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
      const img = storyRef.current?.querySelector(".story-img");
      if (img) {
        gsap.fromTo(
          img,
          { scale: 0.96, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: storyRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
      const valCards = valuesRef.current?.querySelectorAll(".value-card");
      if (valCards) {
        gsap.fromTo(
          valCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: valuesRef.current,
              start: "top 80%",
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
      <SEO title="Meistä" description="Tutustu Holva Toimistoon — rakennamme premium-verkkosivustoja hyvinvointibrändeille." canonical="/meista" />
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center px-6 text-center"
        style={{
          backgroundColor: "var(--bg-secondary)",
          paddingTop: "100px",
          paddingBottom: "100px",
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
            MEISTÄ
          </p>
          <h1
            className="mt-6 text-4xl leading-[1.08] tracking-tight lg:text-[56px]"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: "-0.03em",
            }}
          >
            Emme rakenna verkkosivuja vain näyttämään hyvältä.
          </h1>
          <p
            className="mx-auto mt-8 max-w-[600px] text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Rakennamme verkkosivuja, jotka ohjaavat kävijän kohti yhteydenottoa.
            Holva Toimisto syntyi yksinkertaisesta havainnosta: liian moni yritys
            investoi verkkosivuihin, jotka näyttävät hyviltä — mutta eivät auta
            yritystä kasvamaan.
          </p>
        </div>
      </section>

      {/* Story — lightweight hook */}
      <section
        ref={storyRef}
        className="relative"
        style={{
          backgroundColor: "var(--bg-primary)",
          padding: "120px 48px",
        }}
      >
        <div
          className="mx-auto grid items-start gap-16 lg:grid-cols-2"
          style={{ maxWidth: "1100px" }}
        >
          <div className="lg:pr-8">
            <h2
              className="story-animate text-3xl leading-tight tracking-tight lg:text-[48px] lg:leading-[1.1]"
              style={{
                color: "var(--text-primary)",
                fontFamily: "'Instrument Serif', serif",
                letterSpacing: "-0.02em",
              }}
            >
              Palvelun ja verkkokokemuksen välinen ero
            </h2>
            <div className="mt-10 flex flex-col gap-8">
              <p
                className="story-animate text-base leading-[1.7] font-light"
                style={{ color: "var(--text-secondary)" }}
              >
                Näemme jatkuvasti saman tilanteen: yritys tarjoaa hyvää palvelua,
                mutta verkkosivusto ei tee siitä helppoa ymmärtää tai luottaa
                siihen nopeasti.
              </p>
              <p
                className="story-animate text-base leading-[1.7] font-light"
                style={{ color: "var(--text-secondary)" }}
              >
                Kun tärkeimmät asiat jäävät epäselviksi, moni potentiaalinen
                asiakas poistuu ennen yhteydenottoa.
              </p>
              <div
                className="story-animate"
                style={{
                  width: "28px",
                  height: "1px",
                  background: "rgba(200,172,75,0.18)",
                }}
              />
              <p
                className="story-animate text-base leading-[1.7] font-normal"
                style={{ color: "rgba(226,232,240,0.70)", maxWidth: "420px" }}
              >
                Ongelma ei yleensä ole itse palvelussa. Vaan siinä, miten se
                välittyy verkossa.
              </p>
            </div>
          </div>
          <div
            className="story-img overflow-hidden rounded-2xl"
            style={{
              maxHeight: "420px",
              boxShadow:
                "0 16px 48px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            <img
              src="/about-workspace.jpg"
              alt="Työtila"
              className="h-full w-full object-cover"
              style={{ maxHeight: "420px" }}
            />
          </div>
        </div>
      </section>

      {/* Philosophy — separate section for deeper thinking */}
      <section
        className="relative"
        style={{
          backgroundColor: "var(--bg-primary)",
          padding: "80px 48px 120px",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(200,172,75,0.08) 50%, transparent 100%)",
          }}
        />

        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          <p
            className="text-[11px] font-normal uppercase tracking-[0.2em]"
            style={{ color: "rgba(200,172,75,0.45)" }}
          >
            Lähestymistapa
          </p>
          <h2
            className="mt-5"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Verkkosivut eivät ole vain ulkoasu.
          </h2>
          <div className="mt-10 flex flex-col gap-8">
            <p
              className="text-[15px] leading-[1.8] font-light"
              style={{ color: "var(--text-secondary)" }}
            >
              Siksi keskitymme rakentamaan kokonaisuuksia, joissa design, rakenne,
              copy ja käyttökokemus toimivat yhdessä.
            </p>
            <p
              className="text-[15px] leading-[1.8] font-light"
              style={{ color: "var(--text-secondary)" }}
            >
              Jokainen päätös tehdään tarkoituksella — ei vain visuaalisuuden
              vuoksi, vaan tukemaan luottamusta, selkeyttä ja konversiota.
            </p>
            <p
              className="text-[15px] leading-[1.8] font-normal"
              style={{ color: "rgba(226,232,240,0.70)" }}
            >
              Meille verkkosivut eivät ole pelkkä käyntikortti. Ne ovat osa
              yrityksen myyntiä, brändiä ja ensivaikutelmaa.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        ref={valuesRef}
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

        <div className="mx-auto" style={{ maxWidth: "1200px" }}>
          <div className="mx-auto max-w-[640px] text-center">
            <p
              className="text-xs font-medium uppercase tracking-[0.08em]"
              style={{ color: "var(--accent-teal)" }}
            >
              ARVOT
            </p>
            <h2
              className="mt-6 text-3xl leading-tight tracking-tight lg:text-[52px] lg:leading-[1.12]"
              style={{
                color: "var(--text-primary)",
                fontFamily: "'Instrument Serif', serif",
                letterSpacing: "-0.02em",
              }}
            >
              Näillä periaatteilla toimimme
            </h2>
          </div>
          <div className="mt-24 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={i}
                className="value-card transition-all duration-300"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "16px",
                  padding: "40px 32px",
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
                <span
                  className="text-5xl font-normal lg:text-6xl"
                  style={{
                    color: "rgba(200, 172, 75, 0.15)",
                    fontFamily: "'Instrument Serif', serif",
                  }}
                >
                  {v.number}
                </span>
                <h3
                  className="mt-3 text-xl font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="mt-3 text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
