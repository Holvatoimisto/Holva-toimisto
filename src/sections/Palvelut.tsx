import { useEffect, useRef } from "react";
// import { Link } from "react-router";
// import { ArrowRight } from "lucide-react";
// import { useModal } from "@/context/ModalContext";
import {
  Palette,
  LayoutGrid,
  FileText,
  Search,
  CalendarCheck,
  BarChart3,
  Workflow,
  Settings2,
  type LucideIcon,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ────────────────────────────────────────────── */
interface FeatureItem {
  label: string;
  text: string;
  icon: LucideIcon;
}

const coreItems: FeatureItem[] = [
  { label: "Custom design", text: "Suunniteltu yrityksesi brändin ympärille, ei valmiin templaten päälle.", icon: Palette },
  { label: "Strateginen rakenne", text: "Rakennettu tukemaan selkeyttä, luottamusta ja yhteydenottoa.", icon: LayoutGrid },
  { label: "Ihmisläheinen copy", text: "Teksti, joka tuntuu luonnolliselta eikä geneeriseltä markkinoinnilta.", icon: FileText },
  { label: "SEO-perusta", text: "Selkeä rakenne ja palvelusivut, jotka tukevat löydettävyyttä.", icon: Search },
  { label: "Sujuva ajanvaraus", text: "Selkeä ja helposti saavutettava ajanvaraus, joka tukee luonnollista asiakaspolkua.", icon: CalendarCheck },
];

const extendedItems: FeatureItem[] = [
  { label: "Analytics & data", text: "Näe miten asiakkaat liikkuvat sivulla ja mistä yhteydenotot syntyvät.", icon: BarChart3 },
  { label: "Automaatiot", text: "Mahdollisuus follow up-, arvostelu- ja lead automaatioihin.", icon: Workflow },
  { label: "Ylläpito & jatkuva kehitys", text: "Sisällön päivitykset, uudet arvostelut, kausittaiset muutokset ja jatkuva hienosäätö yrityksesi mukana.", icon: Settings2 },
];

/* ── Reusable animate hook ──────────────────────────── */
function useAnim(ref: React.RefObject<HTMLDivElement | null>, selector: string, opts: { start?: string; stagger?: number; y?: number } = {}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = ref.current?.querySelectorAll(selector);
      if (!els?.length) return;
      gsap.fromTo(els, { y: opts.y ?? 28, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: opts.stagger ?? 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: els[0], start: opts.start ?? "top 85%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, [ref, selector, opts.start, opts.stagger, opts.y]);
}

/* ══════════════════════════════════════════════════════ */
export default function Palvelut() {
  // const { openModal } = useModal();
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null);

  useAnim(s1, ".p1-anim");
  useAnim(s2, ".p2-anim");
  useAnim(s3, ".p3-anim");
  useAnim(s4, ".p4-anim");
  useAnim(s5, ".p5-anim");

  return (
    <div className="relative" style={{ backgroundColor: "var(--background-primary)" }}>

      {/* ── SECTION 2: Core Offer (split) ─────────────── */}
      <section ref={s2} className="relative" style={{ padding: "80px 24px 100px" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(163,122,70,0.18) 50%, transparent 100%)",
        }} />

        <div className="mx-auto grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16" style={{ maxWidth: "1000px" }}>
          {/* Left: Copy */}
          <div className="lg:col-span-5">
            <p className="p2-anim text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.10em] sm:text-[13px]" style={{ color: "var(--text-secondary-editorial)" }}>
              Premium-verkkosivustot palveluyrityksille
            </p>
            <h2 className="p2-anim mt-3 text-[1.6rem] leading-[1.12] sm:text-[1.9rem] lg:text-[2.1rem]"
              style={{ color: "var(--text-primary-editorial)", fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.02em", maxWidth: "380px" }}>
              Hyvät verkkosivut eivät vain näytä hyviltä. Ne ohjaavat asiakkaita eteenpäin.
            </h2>
            <div className="p2-anim mt-4 flex flex-col gap-3" style={{ maxWidth: "380px" }}>
              <p className="text-[16px] leading-[1.65] font-normal lg:text-[17px]" style={{ color: "var(--text-secondary-editorial)", maxWidth: "60ch" }}>
                Asiakkaan pitäisi ymmärtää muutamassa sekunnissa, miksi juuri teihin kannattaa ottaa yhteyttä.
              </p>
              <p className="text-[16px] leading-[1.65] font-normal" style={{ color: "var(--text-secondary-editorial)" }}>
                Rakennamme sivustot niin, että tärkeimmät asiat eivät huku designin alle ja yhteydenotto tuntuu helpolta ilman ylimääräistä etsimistä.
              </p>
            </div>

            {/* Strategic note — balances left side */}
            <div className="p2-anim mt-10" style={{ maxWidth: "320px" }}>
              <div style={{
                width: "20px",
                height: "1px",
                background: "rgba(163,122,70,0.22)",
                marginBottom: "14px",
              }} />
              <p className="text-[15px] leading-[1.6] font-normal" style={{ color: "var(--text-secondary-editorial)" }}>
                Kun tärkeimmät asiat ovat heti selkeitä, asiakkaan on helpompi luottaa ja ottaa seuraava askel.
              </p>
            </div>
          </div>

          {/* Right: Core + Extended feature cards */}
          <div className="lg:col-span-7" style={{ maxWidth: "480px" }}>
            {/* ── YDINPALVELUT ── */}
            <p className="p2-anim mb-4 text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.10em]" style={{ color: "var(--text-secondary-editorial)" }}>
              Mitä Holvan tekemät sivut sisältävät
            </p>
            <div className="flex flex-col gap-2.5">
              {coreItems.map((it, i) => {
                const Icon = it.icon;
                return (
                  <div
                    key={i}
                    className="p2-anim group flex items-start gap-3.5 rounded-[10px] px-3.5 py-3.5 transition-all duration-300"
                    style={{
                      background: "var(--surface-secondary)",
                      border: "1px solid var(--border-subtle)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--surface-primary)";
                      e.currentTarget.style.borderColor = "var(--border-strong)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                      const icon = e.currentTarget.querySelector(".feat-icon") as HTMLElement;
                      if (icon) icon.style.color = "var(--accent-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--surface-secondary)";
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.transform = "translateY(0)";
                      const icon = e.currentTarget.querySelector(".feat-icon") as HTMLElement;
                      if (icon) icon.style.color = "var(--text-decorative)";
                    }}
                  >
                    <span
                      className="feat-icon mt-0.5 flex-shrink-0 transition-colors duration-300"
                      style={{ color: "var(--text-decorative)" }}
                    >
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-[18px] font-semibold leading-[1.35]" style={{ color: "var(--text-primary-editorial)" }}>
                        {it.label}
                      </p>
                      <p className="mt-1 text-[15px] leading-[1.6] font-normal" style={{ color: "var(--text-secondary-editorial)" }}>
                        {it.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Divider ── */}
            <div className="p2-anim my-8">
              <div style={{
                height: "1px",
                background: "linear-gradient(90deg, rgba(163,122,70,0.16) 0%, transparent 70%)",
              }} />
            </div>

            {/* ── JATKUVA KEHITYS ── */}
            <p className="p2-anim mb-4 text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.10em]" style={{ color: "var(--text-secondary-editorial)" }}>
              Mahdollisuus myös jatkuvaan kehitykseen
            </p>
            <div className="flex flex-col gap-2.5">
              {extendedItems.map((it, i) => {
                const Icon = it.icon;
                return (
                  <div
                    key={i}
                    className="p2-anim group flex items-start gap-3.5 rounded-[10px] px-3.5 py-3.5 transition-all duration-300"
                    style={{
                      background: "var(--surface-secondary)",
                      border: "1px solid var(--border-subtle)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--surface-primary)";
                      e.currentTarget.style.borderColor = "var(--border-strong)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                      const icon = e.currentTarget.querySelector(".feat-icon") as HTMLElement;
                      if (icon) icon.style.color = "var(--accent-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--surface-secondary)";
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.transform = "translateY(0)";
                      const icon = e.currentTarget.querySelector(".feat-icon") as HTMLElement;
                      if (icon) icon.style.color = "var(--text-decorative)";
                    }}
                  >
                    <span
                      className="feat-icon mt-0.5 flex-shrink-0 transition-colors duration-300"
                      style={{ color: "var(--text-decorative)" }}
                    >
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-[18px] font-semibold leading-[1.35]" style={{ color: "var(--text-primary-editorial)" }}>
                        {it.label}
                      </p>
                      <p className="mt-1 text-[15px] leading-[1.6] font-normal" style={{ color: "var(--text-secondary-editorial)" }}>
                        {it.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

{/* [Hidden] ── SECTION 1: Strategic Intro (Lähestymistapa) ─
      <section ref={s1} className="relative" style={{ padding: "120px 24px 100px" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(163,122,70,0.20) 50%, transparent 100%)",
        }} />

        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <div className="p1-anim" style={{ paddingLeft: "6%" }}>
            <p className="text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.10em] sm:text-[13px]" style={{ color: "var(--text-secondary-editorial)" }}>
              Lähestymistapa
            </p>
          </div>

          <div className="p1-anim" style={{
            width: "28px",
            height: "1px",
            background: "rgba(163,122,70,0.24)",
            marginLeft: "6%",
            marginTop: "10px",
          }} />

          <div className="p1-anim mx-auto mt-8 text-center" style={{ maxWidth: "460px" }}>
            <p style={{
              color: "var(--text-secondary-editorial)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.4rem, 2.4vw, 1.8rem)",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}>
              Useimmat yritykset<br />luulevat ongelman olevan<br />liikenteen puute.
            </p>

            <div style={{ height: "24px" }} />

            <p style={{
              color: "var(--text-primary-editorial)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.8rem, 3.6vw, 2.5rem)",
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
            }}>
              Totuus on, että sitä on.<br />Sitä ei vain ohjata<br />oikein.
            </p>
          </div>

          <p className="p1-anim mx-auto mt-10 text-center text-[17px] leading-[1.65] font-normal"
            style={{ color: "var(--text-secondary-editorial)", maxWidth: "60ch" }}>
            Monet yritykset investoivat jatkuvasti mainontaan ja näkyvyyteen, vaikka verkkosivusto menettää asiakkaita jo ennen ensimmäistä yhteydenottoa.
          </p>
        </div>
      </section>
      */}

{/* [Hidden] ── SECTION 4: Ecosystem ────────────────────────
      <section ref={s4} className="relative" style={{ padding: "80px 24px 100px" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(163,122,70,0.18) 50%, transparent 100%)",
        }} />

        <div className="mx-auto text-center" style={{ maxWidth: "560px" }}>
          <p className="p4-anim text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.10em] sm:text-[13px]" style={{ color: "var(--text-secondary-editorial)" }}>
            Pitkäjänteinen kehitys
          </p>
          <h2 className="p4-anim mt-3 text-[1.6rem] leading-[1.08] sm:text-[1.9rem] lg:text-[2.1rem]"
            style={{ color: "var(--text-primary-editorial)", fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.02em" }}>
            Verkkosivusto ei jää vain valmiiksi projektiksi.
          </h2>
          <p className="p4-anim mt-4 text-[17px] leading-[1.65] font-normal lg:text-[18px]" style={{ color: "var(--text-secondary-editorial)" }}>
            Tarvittaessa autamme myös ylläpidossa, sisällön päivityksissä, analytiikassa sekä automaatioissa, jotta verkkonäkyvyys voi kehittyä yrityksesi mukana pitkällä aikavälillä.
          </p>
        </div>
      </section>
      */}

{/* [Hidden] ── SECTION 5: CTA ─────────────────────────
      <section ref={s5} className="relative" style={{ padding: "80px 24px 100px" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(163,122,70,0.20) 50%, transparent 100%)",
        }} />

        <div className="mx-auto text-center" style={{ maxWidth: "560px" }}>
          <h2 className="p5-anim text-[1.8rem] leading-[1.05] sm:text-[2.1rem] lg:text-[2.4rem]"
            style={{ color: "var(--text-primary-editorial)", fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.02em" }}>
            Pyydä henkilökohtainen demo
          </h2>
          <p className="p5-anim mt-4 text-[17px] leading-[1.65] font-normal lg:text-[18px]" style={{ color: "var(--text-secondary-editorial)" }}>
            Täytä lyhyt lomake, niin suunnittelemme yrityksellesi henkilökohtaisen demonstraation siitä, miltä verkkonäkyvyytesi voisi parhaimmillaan näyttää ja tuntua.
          </p>
          <div className="p5-anim mt-8 flex flex-wrap items-center justify-center gap-4">
            <button onClick={openModal}
              className="editorial-button editorial-button-primary rounded-[10px] px-9 py-[11px] transition-all duration-300">
              Pyydä demo
            </button>
            <Link to="/case-esimerkit"
              className="editorial-button editorial-button-secondary-light gap-2 rounded-[10px] px-6 py-[10px] transition-all duration-300">
              Katso case-esimerkit
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
