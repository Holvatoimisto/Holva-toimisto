import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import CaseStudyBackRoom from "@/sections/CaseStudyBackRoom";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ────────────────────────────────────────────── */

interface CaseStudy {
  category: string;
  headline: string;
  before: string;
  after: string;
  start: string;
  change: string;
  result: string;
}

const cases: CaseStudy[] = [
  {
    category: "FYSIOTERAPIA",
    headline: "Selkeämpi ensivaikutelma fysioterapia-alan yritykselle",
    before: "/case-fysio-before.png",
    after: "/case-fysio-after.png",
    start: "Vanha verkkosivu sisälsi paljon tietoa, mutta tärkeimmät asiat eivät erottuneet tarpeeksi nopeasti. Palvelut, yhteydenotto ja yrityksen vahvuudet jäivät liian syvälle sisällön alle.",
    change: "Keskityttiin selkeämpään palvelulupaukseen, näkyviin toimintakehotteisiin ja luottamusta rakentaviin elementteihin. Kokonaisuus rakennettiin tukemaan asiakkaan päätöksentekoa selkeämmin.",
    result: "Uusi rakenne tekee kokonaisuudesta helpommin hahmotettavan ja ohjaa kävijää luonnollisemmin eteenpäin.",
  },
  {
    category: "HIERONTA / WELLNESS",
    headline: "Premium-tason verkkokokemus hyvinvointibrändille",
    before: "/case-utriainen-before.png",
    after: "/case-utriainen-after.png",
    start: "Vanha verkkosivu sisälsi paljon sisältöä, mutta tärkeimmät asiat eivät erottuneet tarpeeksi nopeasti ja ensivaikutelma jäi geneeriseksi.",
    change: "Keskityttiin vahvempaan palvelulupaukseen, näkyviin toimintakehotteisiin ja premium-tason käyttökokemukseen.",
    result: "Uusi kokonaisuus tuntuu rauhallisemmalta, selkeämmältä ja tukee paremmin yrityksen brändiä sekä asiakkaan etenemistä yhteydenottoon.",
  },
  {
    category: "HIERONTA / KEHONHUOLTO",
    headline: "Rauhallisempi ja selkeämpi verkkokokemus kehonhuoltoalan yritykselle",
    before: "/case-kehostaja-before.png",
    after: "/case-kehostaja-after.png",
    start: "Vanha verkkosivu ei tuonut yrityksen tärkeimpiä vahvuuksia esille tarpeeksi nopeasti ja kokonaisuus tuntui visuaalisesti sekavalta.",
    change: "Keskityttiin vahvempaan visuaaliseen hierarkiaan, selkeästi erottuviin toimintakehotteisiin ja rauhallisempaan käyttökokemukseen.",
    result: "Kävijän on nyt helpompi ymmärtää mitä yritys tekee, mitä hyötyä palvelusta saa ja miten seuraava askel otetaan.",
  },
  {
    category: "KIROPRAKTIIKKA / HYVINVOINTI",
    headline: "Modernimpi ja helpommin hahmotettava verkkosivu hyvinvointialan yritykselle",
    before: "/case-chiro-before.png",
    after: "/case-chiro-after.png",
    start: "Vanha verkkosivu sisälsi paljon arvokasta tietoa, mutta rakenne oli raskas ja tärkeimmät asiat hukkuivat pitkän tekstisisällön alle.",
    change: "Keskityttiin selkeämpään sisältöhierarkiaan, vahvempaan ensivaikutelmaan ja modernimpaan visuaaliseen ilmeeseen.",
    result: "Uusi kokonaisuus tekee palveluista helpommin ymmärrettäviä ja auttaa kävijää etenemään luonnollisemmin kohti yhteydenottoa tai ajanvarausta.",
  },
  {
    category: "LVI / PUTKIPALVELUT",
    headline: "Rakennettiin selkeämpi verkkoläsnäolo putkialan yritykselle",
    before: "/case-jt-before.png",
    after: "/case-jtcs2.png",
    start: "Vanha verkkosivu ei kertonut tarpeeksi nopeasti mitä yritys tekee, kenelle palvelu on suunnattu tai miten asiakkaan pitäisi edetä seuraavaksi.",
    change: "Keskityttiin näkyviin toimintakehotteisiin, vahvempaan palvelulupaukseen ja selkeämpään sisältöhierarkiaan.",
    result: "Kokonaisuus tuntuu nyt uskottavammalta, helpommalta käyttää ja ohjaa kävijää selkeämmin yhteydenottoon.",
  },
];

/* ── Components ──────────────────────────────────────── */

function CaseStudyBlock({ cs }: { cs: CaseStudy }) {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = blockRef.current?.querySelectorAll(".cs-anim");
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
          scrollTrigger: {
            trigger: blockRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, blockRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={blockRef}>
      {/* ── Centered title ── */}
      <div className="cs-anim mx-auto mb-8 text-center" style={{ maxWidth: "560px" }}>
        <p className="text-[10px] font-normal uppercase tracking-[0.2em]" style={{ color: "rgba(200,172,75,0.45)" }}>
          {cs.category}
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
          {cs.headline}
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
              src={cs.before}
              alt={`${cs.headline} — ennen`}
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

        {/* After — larger, dominant */}
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
              src={cs.after}
              alt={`${cs.headline} — jälkeen`}
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

      {/* ── Text below — 3 insights ── */}
      <div className="cs-anim mx-auto mt-7 grid grid-cols-1 gap-7 sm:grid-cols-3" style={{ maxWidth: "820px" }}>
        {/* Lähtötilanne */}
        <div>
          <p className="text-[10px] font-normal uppercase tracking-[0.12em]" style={{ color: "rgba(148,163,184,0.40)" }}>
            Lähtötilanne
          </p>
          <p className="mt-2 text-[13px] leading-[1.65] font-light" style={{ color: "rgba(226,232,240,0.60)" }}>
            {cs.start}
          </p>
        </div>

        {/* Muutos */}
        <div>
          <p className="text-[10px] font-normal uppercase tracking-[0.12em]" style={{ color: "rgba(148,163,184,0.40)" }}>
            Muutos
          </p>
          <p className="mt-2 text-[13px] leading-[1.65] font-light" style={{ color: "rgba(226,232,240,0.65)" }}>
            {cs.change}
          </p>
        </div>

        {/* Lopputulos — serif, slightly brighter */}
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
            {cs.result}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────── */

export default function CaseEsimerkit() {
  const { openModal } = useModal();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      const els = headerRef.current?.querySelectorAll(".hdr-anim");
      if (els) {
        gsap.fromTo(
          els,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.15,
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Header */}
      <section
        className="relative"
        style={{
          backgroundColor: "#091525",
          padding: "100px 24px 80px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(200,172,75,0.10) 50%, transparent 100%)",
          }}
        />

        <div ref={headerRef} className="mx-auto" style={{ maxWidth: "800px" }}>
          <Link
            to="/"
            className="hdr-anim mb-8 inline-flex items-center gap-2 text-[13px] transition-colors duration-200 hover:text-white"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={14} />
            Takaisin etusivulle
          </Link>

          <p
            className="hdr-anim text-[11px] font-normal uppercase tracking-[0.2em]"
            style={{ color: "rgba(200,172,75,0.45)" }}
          >
            Verkkosivuprojekteja
          </p>

          <h1
            className="hdr-anim mt-5"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "600px",
            }}
          >
            Esimerkkejä toteutuksista
          </h1>

          <p
            className="hdr-anim mt-4 text-[14px] leading-[1.8] font-light"
            style={{ color: "var(--text-secondary)", maxWidth: "480px" }}
          >
            Verkkosivustoja, joissa rakenne, tunnelma ja käyttäjäkokemus
            suunniteltiin tukemaan asiakkaan päätöksentekoa.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section
        style={{
          backgroundColor: "#0d1f35",
          padding: "100px 24px 120px",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: "1100px" }}>
          {/* The Back Room */}
          <CaseStudyBackRoom />

          {/* Remaining cases — same layout */}
          {cases.map((cs, i) => (
            <div key={i}>
              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  margin: "100px 0",
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(200,172,75,0.08) 50%, transparent 100%)",
                }}
              />
              <CaseStudyBlock cs={cs} />
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative"
        style={{
          backgroundColor: "#091525",
          padding: "100px 24px",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(200,172,75,0.10) 50%, transparent 100%)",
          }}
        />

        <div className="mx-auto text-center" style={{ maxWidth: "520px" }}>
          <h2
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Näe miltä yrityksesi voisi näyttää modernimmalla verkkokokemuksella
          </h2>
          <p
            className="mt-4 text-[14px] leading-[1.75] font-light"
            style={{
              color: "var(--text-secondary)",
              maxWidth: "420px",
              margin: "16px auto 0",
            }}
          >
            Pyydä maksuton redesign-demo ja näet tarkalleen mitä parannan ja
            miten se vaikuttaa kävijöiden käyttäytymiseen.
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
            Pyydä oma redesign-demo
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
