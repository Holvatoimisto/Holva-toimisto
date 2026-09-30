import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Section from "@/components/v2/Section";
import SectionHeader from "@/components/v2/SectionHeader";
import Eyebrow from "@/components/v2/Eyebrow";
import Button from "@/components/v2/Button";
import Reveal from "@/components/v2/Reveal";
import HeroSitePreview from "@/components/v2/HeroSitePreview";
import CaseFeature from "@/components/v2/CaseFeature";
import ProcessTimeline from "@/components/v2/ProcessTimeline";
import TestimonialCard from "@/components/v2/TestimonialCard";
import ServicesSection from "@/components/v2/ServicesSection";
import FAQAccordion from "@/components/v2/FAQAccordion";
import FinalCTA from "@/components/v2/FinalCTA";
import { Star } from "lucide-react";
import { clientCases, reviewPlaceholders, homeFAQ } from "@/lib/content";
import { useModal } from "@/context/ModalContext";

/* ============================================================
   ETUSIVU / (spec §18)
   1 Hero (+ hienovarainen trust-rivi) · 2 Problem (editorial
   split) · 3 Selected Work · 4 Beyond Design · 5 Services
   6 Demo-first (~5 % skaalattu) · 7 Social Proof
   8 FAQ · 9 Final CTA
   ============================================================ */

export default function Home() {
  return (
    <>
      <SEO
        description="Suunnittelemme palveluyrityksille verkkosivustoja, jotka tekevät palvelunne laadun näkyväksi, rakentavat luottamusta ja ohjaavat kävijän selkeästi kohti yhteydenottoa. Pyydä maksuton demo."
        canonical="/"
      />
      <Hero />
      <WhatHolvaBuilds />
      <SelectedWork />
      <BeyondDesign />
      <ServicesSection />
      <DemoMechanism />
      <SocialProof />
      <Faq />
      <FinalCTA
        eyebrow="Seuraava askel"
        title="Näette suunnan ennen kuin teette päätöksen."
        body="Pyytäkää demo yrityksellenne. Rakennamme ensimmäisen suunnan ja käymme sen kanssanne läpi ennen kuin päätätte jatkosta."
        ctaSource="etusivu_final_cta"
      />
      <Footer />
    </>
  );
}

/* ── 1. HERO (§18.1) ── */
function Hero() {
  const { openModal } = useModal();
  return (
    <section className="surface-navy relative overflow-hidden">
      {/* Taustakuva — navy/gold-brändikuva, hillitty opasiteetti luettavuuden vuoksi */}
      <img
        src="/assets/herotaustakuva-uusi.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="container-v2 container-wide relative mx-auto grid grid-cols-1 items-center gap-12 pt-14 pb-16 lg:grid-cols-[48fr_52fr] lg:gap-14 lg:pt-16 lg:pb-20">
        {/* Copy */}
        <div>
          <Eyebrow dark>Verkkosivut palveluyrityksille</Eyebrow>
          <h1 className="t-hero mt-5">
            Verkkosivustoja kasvattamaan brändiäsi ja myymään puolestasi.
          </h1>
          <p className="t-lead mt-6 max-w-[540px]" style={{ color: "var(--on-dark-body)" }}>
            Suunnittelemme palveluyrityksille sivustoja, jotka auttavat löytymään, tekevät laadun näkyväksi ja
            ohjaavat kävijän kohti yhteydenottoa.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button variant="primaryOnDark" onClick={() => openModal("etusivu_hero")} blockOnMobile>
              Pyydä demo
            </Button>
            <Button variant="secondaryOnDark" to="/case-esimerkit" blockOnMobile>
              Katso työt
            </Button>
          </div>
          <p className="t-meta mt-4" style={{ color: "var(--on-dark-muted)" }}>
            Maksuton demo. Ei sitoutumista.
          </p>
          <p
            className="t-meta mt-3 flex items-center gap-1.5"
            style={{ color: "var(--on-dark-muted)" }}
          >
            <Star size={12} fill="var(--gold)" strokeWidth={0} style={{ color: "var(--gold)" }} aria-hidden="true" />
            4,9 Google-arvosteluissa (8)
          </p>
        </div>

        {/* Visual — live case-preview asiakastyöstä */}
        <Reveal delay={120} className="min-w-0">
          <HeroSitePreview />
        </Reveal>
      </div>
    </section>
  );
}

/* ── 4. SELECTED WORK (§18.4) — 3 compact feature casea, alternating ── */
function SelectedWork() {
  return (
    <Section spacing="lg" container="standard" ariaLabelledby="work-heading">
      <SectionHeader
        id="work-heading"
        eyebrow="Valittuja töitä"
        title="Näin yrityksestä syntyvä ensivaikutelma muuttuu."
        lead="Rakenne, viestintä ja visuaalinen suunta vaikuttavat siihen, millaisena yritys koetaan jo ennen ensimmäistä yhteydenottoa."
        maxWidth="760px"
      />
      <div className="mt-16 flex flex-col gap-16 lg:gap-24">
        {clientCases.map((c, i) => (
          <CaseFeature key={c.id} caseItem={c} flip={i % 2 === 0} />
        ))}
      </div>
      <div className="mt-14">
        <Button variant="textlink" to="/case-esimerkit">
          Katso kaikki työt →
        </Button>
      </div>
    </Section>
  );
}

/* ── 3. BUSINESS ↔ WEBSITE GAP (§18.5) — editorial split, ei vertailugridiä ── */
function WhatHolvaBuilds() {
  const signals = [
    {
      title: "Selkeys",
      body: "Kävijä ymmärtää sekunneissa, mitä yrityksenne tekee ja kenelle.",
    },
    {
      title: "Luottamus",
      body: "Osaaminen ja asiakkaat ääneen pääsevä maine näkyvät heti.",
    },
    {
      title: "Seuraava askel",
      body: "Yhteydenotto tai ajanvaraus tuntuu helpolta ja luontevalta.",
    },
  ];
  return (
    <Section surface="alt" spacing="md" ariaLabelledby="builds-heading">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[55fr_45fr] lg:gap-20">
        {/* Vasen: viesti */}
        <div>
          <Eyebrow>Verkossa syntyvä vaikutelma</Eyebrow>
          <h2 id="builds-heading" className="t-h2 mt-4">
            Vastaako verkkosivunne sitä tasoa, jonka asiakas saa paikan päällä?
          </h2>
          <p className="t-lead mt-6 max-w-[540px]" style={{ color: "var(--body)" }}>
            Palvelunne voi olla erinomainen, mutta uusi asiakas näkee usein ensin verkkosivunne. Jos verkossa
            syntyvä vaikutelma jää todellista laatua heikommaksi, kynnys ottaa yhteyttä kasvaa.
          </p>
          <p
            className="mt-8 max-w-[480px] pl-5"
            style={{
              color: "var(--navy)",
              borderLeft: "2px solid var(--gold)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(19px, 1.7vw, 22px)",
              lineHeight: 1.45,
            }}
          >
            Jos laatu ei välity verkossa, uusi kävijä ei voi vielä tietää sitä.
          </p>
        </div>

        {/* Oikea: hiljainen tukipaneeli — 3 signaalia, ei numerointia */}
        <Reveal delay={120} className="min-w-0 lg:pt-10">
          <div className="flex h-full flex-col justify-center">
            <p className="t-small mb-5 italic" style={{ color: "var(--muted)", fontSize: "13px" }}>
              Sivuston pitää tehdä kolme asiaa
            </p>
            {signals.map((s, i) => (
              <div
                key={s.title}
                className={i > 0 ? "py-4 lg:py-5" : "pb-4 lg:pb-5"}
                style={i > 0 ? { borderTop: "1px solid var(--line)" } : undefined}
              >
                <h3 className="t-small font-semibold" style={{ color: "var(--ink)", fontSize: "15px" }}>
                  {s.title}
                </h3>
                <p className="t-small mt-1.5" style={{ color: "var(--body)", fontSize: "13.5px" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ── 5. BEYOND DESIGN (education bridge) — löydettävyys + perusta + jatkuvuus ── */
function BeyondDesign() {
  const principles = [
    {
      title: "Löydettävyys",
      body: "Yrityksenne pitää löytyä silloin, kun asiakas etsii tarjoamaanne palvelua.",
    },
    {
      title: "Toimiva perusta",
      body: "Selkeä rakenne ja teknisesti vakaa toteutus, jota voi rakentaa eteenpäin järkevästi.",
    },
    {
      title: "Jatkuvuus",
      body: "Sivusto ei ole kertakäyttöinen — sitä voidaan päivittää, ylläpitää ja kehittää tarpeen mukaan.",
    },
  ];
  return (
    <Section surface="navy" spacing="md" ariaLabelledby="beyond-heading">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[62fr_38fr] lg:gap-20">
        {/* Vasen: pääsisältö */}
        <div>
          <Eyebrow dark>Enemmän kuin ulkoasu</Eyebrow>
          <h2 id="beyond-heading" className="t-h2 mt-4">
            Hyvä sivusto ei vain vakuuta. Sen pitää myös löytyä.
          </h2>
          <p className="t-lead mt-6 max-w-[560px]" style={{ color: "var(--on-dark-body)" }}>
            Ensivaikutelma on tärkeä, mutta se ei yksin riitä. Asiakkaan pitää löytää yrityksenne silloin, kun hän
            etsii tarjoamaanne palvelua — ja sivuston pitää olla rakennettu niin, että sitä voi käyttää, päivittää
            ja kehittää ilman että kaikki alkaa aina alusta.
          </p>
          <p
            className="t-body mt-8 max-w-[520px] pl-5"
            style={{ color: "var(--on-dark)", borderLeft: "2px solid var(--gold)" }}
          >
            Ulkoasu herättää kiinnostuksen ja luotettavuuden. Rakenne ja perusta tekevät sivustosta hyödyllisen.
          </p>
        </div>

        {/* Oikea: yhtenäinen 3 kohdan editorial-paneeli */}
        <Reveal delay={120} className="min-w-0 lg:pt-24">
          <div className="flex h-full flex-col justify-center">
            <div
              className="rounded-[10px] px-6 py-2 lg:px-7"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
            >
              {principles.map((p, i) => (
                <div
                  key={p.title}
                  className={i > 0 ? "py-4" : "py-4"}
                  style={i > 0 ? { borderTop: "1px solid rgba(255,255,255,0.1)" } : undefined}
                >
                  <h3
                    className="t-small font-semibold"
                    style={{ color: "var(--on-dark)", fontSize: "15px", letterSpacing: "0.01em" }}
                  >
                    {p.title}
                  </h3>
                  <p className="t-small mt-1" style={{ color: "var(--on-dark-muted)", fontSize: "13.5px" }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ── 6. DEMO-FIRST MECHANISM (§18.6) ── */
function DemoMechanism() {
  const { openModal } = useModal();
  const steps = [
    {
      n: "01",
      title: "Pyydätte demon",
      body: "Kerrotte meille yrityksestänne ja nykyisestä tilanteesta.",
    },
    {
      n: "02",
      title: "Rakennamme suunnan",
      body: "Tutustumme yritykseenne ja suunnittelemme ensimmäisen version siitä, miltä uusi sivustonne voisi näyttää.",
    },
    {
      n: "03",
      title: "Käymme demon yhdessä läpi",
      body: "Esittelemme demon Teams-tapaamisessa ja keskustelemme tavoitteistanne, sivuston rakenteesta ja mahdollisista muutoksista.",
    },
    {
      n: "04",
      title: "Päätätte jatkosta",
      body: "Jos suunta tuntuu oikealta, jatkamme toteutukseen. Jos ei, demo ei sido teitä mihinkään.",
    },
  ];
  return (
    <Section surface="navy" spacing="md" container="standard" ariaLabelledby="demo-heading">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow dark>Näe ennen kuin päätät</Eyebrow>
          <h2 id="demo-heading" className="t-h2 mt-4" style={{ fontSize: "clamp(28px, 2.85vw, 37px)" }}>
            Teidän ei tarvitse kuvitella, miltä uusi sivusto voisi näyttää. Näytämme sen.
          </h2>
          <p className="t-lead mt-5 max-w-[560px]" style={{ color: "var(--on-dark-body)" }}>
            Rakennamme yrityksellenne yksilöllisen demon ennen ostopäätöstä. Näette suunnan käytännössä, käymme
            sen yhdessä läpi ja päätätte jatkosta vasta sen jälkeen.
          </p>
          <div className="mt-8">
            <Button variant="primaryOnDark" onClick={() => openModal("etusivu_demo_mechanism")} blockOnMobile>
              Pyydä demo
            </Button>
            <p className="t-meta mt-4" style={{ color: "var(--on-dark-muted)" }}>
              Maksuton demo. Ei sitoutumista.
            </p>
            <div className="mt-6">
              <Button variant="textlinkOnDark" to="/prosessi">
                Tutustu koko prosessiin →
              </Button>
            </div>
          </div>
        </div>
        <ProcessTimeline steps={steps} dark />
      </div>
    </Section>
  );
}

/* ── 8. SOCIAL PROOF (§18.8) ── */
function SocialProof() {
  return (
    <Section surface="alt" spacing="md" ariaLabelledby="reviews-heading">
      <SectionHeader
        id="reviews-heading"
        eyebrow="Asiakkaiden kokemuksia"
        title="Millaista yhteistyö Holvan kanssa on?"
      />
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[44fr_56fr] lg:grid-rows-2">
        <Reveal className="lg:row-span-2">
          <TestimonialCard review={reviewPlaceholders[0]} large />
        </Reveal>
        <Reveal delay={80}>
          <TestimonialCard review={reviewPlaceholders[1]} />
        </Reveal>
        <Reveal delay={160}>
          <TestimonialCard review={reviewPlaceholders[2]} />
        </Reveal>
      </div>
      {/* "Katso kaikki arvostelut →" poistettu väliaikaisesti: aiempi linkki oli
          vanheneva Google session-token-URL eikä pysyvää julkista reviews-URLia
          ole vahvistettu. Palautetaan kun omistaja toimittaa stable URLin. */}
    </Section>
  );
}

/* ── 10. FAQ (§18.10) ── */
function Faq() {
  return (
    <Section surface="alt" spacing="md" container="text" ariaLabelledby="faq-heading">
      <SectionHeader id="faq-heading" eyebrow="Usein kysyttyä" title="Ennen kuin pyydätte demon" />
      <div className="mt-12">
        <FAQAccordion items={homeFAQ} />
      </div>
    </Section>
  );
}
