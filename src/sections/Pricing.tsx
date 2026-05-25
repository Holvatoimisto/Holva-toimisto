import { useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const coreFeatures = [
  "Custom design",
  "Strateginen rakenne",
  "Ihmisläheinen copy",
  "SEO-perusta",
  "Sujuva ajanvaraus",
];

const addOns = [
  {
    num: "06",
    name: "Analytics & data",
    desc: "Näe miten asiakkaat liikkuvat sivulla ja mistä yhteydenotot syntyvät.",
    price: "+50€/kk",
  },
  {
    num: "07",
    name: "Automaatiot",
    desc: "Follow up-, arvostelu- ja lead automaatiot helpottamaan asiakaskokemusta.",
    price: "+50€/kk",
  },
  {
    num: "08",
    name: "Ylläpito & jatkuva kehitys",
    desc: "Sisältöpäivitykset, uudet arvostelut, kausittaiset muutokset ja jatkuva hienosäätö.",
    price: "+50€/kk",
  },
];

export default function Pricing() {
  const { openModal } = useModal();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".pr-anim");
      if (!els?.length) return;
      gsap.fromTo(
        els,
        { y: 28, opacity: 0 },
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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ padding: "120px 24px 100px", backgroundColor: "#091525" }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(200,172,75,0.08) 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto" style={{ maxWidth: "840px" }}>
        {/* ── Top header ── */}
        <div className="pr-anim text-center">
          <p
            className="text-[11px] font-normal uppercase tracking-[0.25em]"
            style={{ color: "rgba(200,172,75,0.50)" }}
          >
            Investointi
          </p>
        </div>

        <div
          className="pr-anim mx-auto mt-6 text-center"
          style={{ maxWidth: "540px" }}
        >
          {/* Line 1 — smaller, foundation statement */}
          <p
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Hienot sivut ovat kulu.
          </p>
          {/* Line 2 — larger, authoritative payoff */}
          <p
            className="mt-1"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.7rem, 3.4vw, 2.5rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Laadukkaat sivut ovat perusta kasvulle.
          </p>
        </div>

        <p
          className="pr-anim mx-auto mt-5 text-center text-[14px] leading-[1.8] font-light"
          style={{ color: "var(--text-secondary)", maxWidth: "520px" }}
        >
          Useimmat yritykset investoivat näkyvyyteen ennen kuin perusta on
          kunnossa. Kun verkkosivusto tukee asiakkaan päätöstä ottaa yhteyttä,
          kaikki muu markkinointi toimii tehokkaammin.
        </p>

        {/* ════════ MAIN CARD ════════ */}
        <div
          className="pr-anim mt-14"
          style={{
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(255,255,255,0.015)",
            overflow: "hidden",
          }}
        >
          {/* Inner split */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ position: "relative" }}
          >
            {/* LEFT */}
            <div style={{ padding: "36px 36px 32px" }}>
              <p
                className="text-[10px] font-normal uppercase tracking-[0.18em]"
                style={{ color: "rgba(200,172,75,0.50)" }}
              >
                Premium verkkosivusto
              </p>

              <h3
                className="mt-3"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "1.35rem",
                  lineHeight: 1.22,
                  letterSpacing: "-0.02em",
                  maxWidth: "300px",
                }}
              >
                Suunniteltu näyttämään yhtä laadukkaalta kuin palvelusi.
              </h3>

              <p
                className="mt-3 text-[12px] leading-[1.7] font-light"
                style={{ color: "var(--text-secondary)", maxWidth: "320px" }}
              >
                Custom verkkosivustoja kasvaville hyvinvointibrändeille, jotka
                haluavat vahvistaa luottamusta ja tehdä yhteydenotosta
                luonnollisen seuraavan askeleen.
              </p>

              {/* Features — spaced list */}
              <div className="mt-7 flex flex-col gap-3">
                {coreFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3.5">
                    <span
                      className="text-[10px] font-normal tracking-[0.1em]"
                      style={{
                        color: "rgba(200,172,75,0.50)",
                        fontVariantNumeric: "tabular-nums",
                        width: "18px",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-[12px] font-normal"
                      style={{ color: "rgba(226,232,240,0.70)" }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical divider — absolute positioned on lg */}
            <div
              className="hidden lg:block"
              style={{
                position: "absolute",
                left: "50%",
                top: "10%",
                bottom: "10%",
                width: "1px",
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(200,172,75,0.12) 25%, rgba(200,172,75,0.12) 75%, transparent 100%)",
              }}
            />

            {/* RIGHT */}
            <div
              style={{
                padding: "36px 36px 32px",
                borderTop: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              {/* Pricing anchor — top */}
              <div>
                <p
                  className="text-[10px] font-normal uppercase tracking-[0.15em]"
                  style={{ color: "rgba(148,163,184,0.40)" }}
                >
                  Projektit alk.
                </p>
                <p
                  className="mt-1"
                  style={{
                    color: "var(--accent-gold)",
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "2.6rem",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                  }}
                >
                  1000€
                </p>
              </div>

              <p
                className="mt-4 text-[12px] leading-[1.7] font-light"
                style={{ color: "rgba(148,163,184,0.45)", maxWidth: "240px" }}
              >
                Jokainen projekti suunnitellaan yrityksesi tavoitteiden ja
                tarpeiden mukaan.
              </p>

              {/* Divider */}
              <div
                className="mt-6"
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(200,172,75,0.12) 0%, transparent 85%)",
                }}
              />

              {/* Trust copy */}
              <div className="mt-5 flex flex-col gap-1.5">
                {[
                  "Ei templateja.",
                  "Ei geneerisiä ratkaisuja.",
                  "Ei valmista agency-pakettia.",
                ].map((t, i) => (
                  <p
                    key={i}
                    className="text-[12px] font-light"
                    style={{ color: "rgba(148,163,184,0.38)" }}
                  >
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ════════ ADD-ONS ════════ */}
        <div className="pr-anim mt-12">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-[10px] font-normal uppercase tracking-[0.18em]"
                style={{ color: "rgba(200,172,75,0.40)" }}
              >
                Mahdollisuus jatkuvaan kehitykseen
              </p>
              <p
                className="mt-1.5 text-[12px] font-light"
                style={{ color: "rgba(148,163,184,0.40)" }}
              >
                Verkkosivustoa voidaan kehittää jatkuvasti yrityksesi mukana.
              </p>
            </div>
            <span
              className="text-[9px] font-normal uppercase tracking-[0.14em]"
              style={{
                color: "rgba(200,172,75,0.35)",
                border: "1px solid rgba(200,172,75,0.12)",
                borderRadius: "5px",
                padding: "3px 10px",
              }}
            >
              Lisäpalvelut
            </span>
          </div>

          {/* Vertical card stack */}
          <div className="mt-6 flex flex-col" style={{ gap: "10px" }}>
            {addOns.map((a, i) => (
              <div
                key={i}
                className="group transition-all duration-300"
                style={{
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.04)",
                  background: "rgba(255,255,255,0.012)",
                  padding: "20px 22px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.022)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.012)";
                }}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
                  {/* Left: num + name */}
                  <div className="flex items-baseline gap-3 sm:w-44 sm:flex-shrink-0">
                    <span
                      className="text-[10px] font-normal tracking-[0.1em]"
                      style={{
                        color: "rgba(200,172,75,0.40)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {a.num}
                    </span>
                    <span
                      className="text-[13px] font-normal"
                      style={{ color: "rgba(226,232,240,0.65)" }}
                    >
                      {a.name}
                    </span>
                  </div>

                  {/* Center: description */}
                  <p
                    className="flex-1 text-[12px] leading-[1.6] font-light"
                    style={{ color: "rgba(148,163,184,0.40)" }}
                  >
                    {a.desc}
                  </p>

                  {/* Right: price */}
                  <p
                    className="text-[12px] font-normal sm:flex-shrink-0"
                    style={{ color: "rgba(200,172,75,0.50)", minWidth: "56px" }}
                  >
                    {a.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA: elegant close ── */}
        <div className="pr-anim mx-auto mt-14 text-center" style={{ maxWidth: "440px" }}>
          <button
            onClick={openModal}
            className="rounded-[10px] px-9 py-[11px] text-[13px] font-normal tracking-wide transition-all duration-300"
            style={{
              backgroundColor: "var(--accent-gold)",
              color: "var(--bg-secondary)",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 20px rgba(200,172,75,0.18)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#D4B85A";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(200,172,75,0.35)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-gold)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(200,172,75,0.18)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Pyydä henkilökohtainen Loom-demo
          </button>
          <p
            className="mt-3 text-[12px] leading-[1.7] font-light"
            style={{ color: "rgba(148,163,184,0.35)" }}
          >
            Maksuton. Ilman sitoumuksia.
          </p>
        </div>

        {/* ── Bottom value statement ── */}
        <div
          className="pr-anim mx-auto mt-20 text-center"
          style={{ maxWidth: "480px" }}
        >
          <div
            style={{
              width: "24px",
              height: "1px",
              background: "rgba(200,172,75,0.12)",
              margin: "0 auto 24px",
            }}
          />
          <p
            style={{
              color: "rgba(226, 232, 240, 0.40)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
            }}
          >
            Hyvin rakennettu verkkosivusto ei ainoastaan tuo enemmän
            yhteydenottoja.
            <br />
            <span style={{ color: "rgba(226, 232, 240, 0.60)" }}>
              Se nostaa koko brändin arvoa pitkällä aikavälillä.
            </span>
          </p>
        </div>


      </div>
    </section>
  );
}
