import { useEffect, useRef } from "react";
import { MonitorSmartphone, Star, Wrench, PenSquare, type LucideIcon } from "lucide-react";
import { useModal } from "@/context/ModalContext";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ────────────────────────────────────────────── */
interface CardItem {
  title: string;
  text: string;
  icon: LucideIcon;
}

const cards: CardItem[] = [
  {
    title: "Premium-verkkosivusto",
    text: "Monisivuinen, mobiilioptimoitu sivusto, joka tuo yrityksesi laadun näkyviin ja tekee ajan varaamisesta mahdollisimman helppoa.",
    icon: MonitorSmartphone,
  },
  {
    title: "Google-arvostelujen hankinta",
    text: "Järjestelmä auttaa tekemään arvostelujen pyytämisestä systemaattista sen sijaan, että se jäisi kiireisen työpäivän jälkeen muistamisen varaan.",
    icon: Star,
  },
  {
    title: "Tekninen ylläpito & hosting",
    text: "Pidämme sivuston teknisesti kunnossa ja huolehdimme hostingista sekä tarvittavista ylläpitotoimista, jotta sinun ei tarvitse käyttää aikaa sivuston tekniseen puoleen.",
    icon: Wrench,
  },
  {
    title: "Helppo sisällönhallinta",
    text: "Muokkaa hintoja, palveluita, tekstejä ja kuvia itse selkeällä työkalulla ilman koodausta tai erillisen tekijän tilaamista pieniä muutoksia varten.",
    icon: PenSquare,
  },
];

/* ══════════════════════════════════════════════════════ */
export default function Kasvupaketti() {
  const { openModal } = useModal();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".kp-anim");
      if (!els?.length) return;
      gsap.fromTo(els, { y: 28, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: els[0], start: "top 85%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="kasvupaketti"
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "#091525", padding: "96px 24px 110px" }}
    >
      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(200,172,75,0.10) 50%, transparent 100%)",
      }} />

      <div className="mx-auto" style={{ maxWidth: "1000px" }}>

        {/* ── Header: eyebrow, headline, price ─────────── */}
        <div className="mx-auto text-center" style={{ maxWidth: "620px" }}>
          <p className="kp-anim text-[11px] font-normal uppercase tracking-[0.18em]" style={{ color: "rgba(200,172,75,0.60)" }}>
            Holva Kasvupaketti hyvinvointialalle
          </p>
          <h2 className="kp-anim mt-4 text-[1.8rem] leading-[1.12] sm:text-[2.1rem] lg:text-[2.4rem]"
            style={{ color: "var(--text-primary)", fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.02em" }}>
            Kaikki mitä tarvitset vahvempaan verkkonäkyvyyteen.
            <br />
            Yhdellä kuukausihinnalla.
          </h2>

          {/* Price */}
          <div className="kp-anim mt-8 flex items-baseline justify-center gap-3">
            <span
              style={{
                color: "var(--text-primary)",
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2.6rem, 5vw, 3.6rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              99 €/kk
            </span>
          </div>
          <p className="kp-anim mt-2.5 text-[11px] font-normal uppercase tracking-[0.16em]" style={{ color: "rgba(200,172,75,0.55)" }}>
            0 € aloitusmaksu
          </p>

          <p className="kp-anim mx-auto mt-6 text-[14px] leading-[1.7] font-light" style={{ color: "var(--text-secondary)", maxWidth: "440px" }}>
            Suunniteltu yksinyrittäjille ja pienille hyvinvointialan yrityksille, jotka haluavat vahvistaa digitaalista mainettaan ilman tuhansien eurojen alkuinvestointia.
          </p>
        </div>

        {/* ── Three core value cards ───────────────────── */}
        <p className="kp-anim mt-12 text-center text-[10px] font-normal uppercase tracking-[0.16em]" style={{ color: "rgba(200,172,75,0.45)" }}>
          Yksi kokonaisuus — neljä ydinosaa
        </p>
        <div className="mx-auto mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5" style={{ maxWidth: "880px" }}>
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="kp-anim group rounded-[12px] px-6 py-7 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.028)";
                  e.currentTarget.style.borderColor = "rgba(200,172,75,0.14)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  const icon = e.currentTarget.querySelector(".kp-icon") as HTMLElement;
                  if (icon) icon.style.color = "rgba(200,172,75,0.85)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.015)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                  const icon = e.currentTarget.querySelector(".kp-icon") as HTMLElement;
                  if (icon) icon.style.color = "rgba(200,172,75,0.55)";
                }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="kp-icon transition-colors duration-300"
                    style={{ color: "rgba(200,172,75,0.55)" }}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span
                    className="text-[11px] font-normal tracking-[0.12em]"
                    style={{ color: "rgba(200,172,75,0.55)", fontVariantNumeric: "tabular-nums" }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-normal leading-[1.3]" style={{ color: "rgba(226,232,240,0.85)", letterSpacing: "-0.01em" }}>
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-[1.65] font-light" style={{ color: "rgba(148,163,184,0.55)" }}>
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Outcome block ────────────────────────────── */}
        <div className="kp-anim mx-auto mt-16 text-center" style={{ maxWidth: "560px" }}>
          <div className="mx-auto" style={{
            width: "28px",
            height: "1px",
            background: "rgba(200,172,75,0.20)",
            marginBottom: "26px",
          }} />
          <p
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              lineHeight: 1.22,
              letterSpacing: "-0.015em",
            }}
          >
            Sinä keskityt asiakkaisiin.
            <br />
            Me huolehdimme digitaalisesta puolesta.
          </p>
          <p className="mt-5 text-[13px] leading-[1.7] font-light" style={{ color: "rgba(148,163,184,0.55)" }}>
            Parempi ensivaikutelma. Kasvava digitaalinen maine. Vähemmän manuaalista säätämistä.
          </p>
        </div>

        {/* ── CTA ──────────────────────────────────────── */}
        <div className="kp-anim mt-12 text-center">
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
            Hae maksuton demo
          </button>
          <p className="mx-auto mt-4 text-[12px] leading-[1.7] font-light" style={{ color: "rgba(148,163,184,0.45)", maxWidth: "380px" }}>
            Rakennamme ensin yrityksellesi demon, jotta näet konkreettisesti miltä uusi kokonaisuus voisi näyttää ennen päätöstä.
          </p>
        </div>

      </div>
    </section>
  );
}
