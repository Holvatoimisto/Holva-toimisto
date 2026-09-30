import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Section from "@/components/v2/Section";
import SectionHeader from "@/components/v2/SectionHeader";
import Eyebrow from "@/components/v2/Eyebrow";
import Reveal from "@/components/v2/Reveal";
import PageHero from "@/components/v2/PageHero";
import ImgPlaceholder from "@/components/v2/ImgPlaceholder";
import CaseStudy from "@/components/v2/CaseStudy";
import TestimonialCard from "@/components/v2/TestimonialCard";
import FinalCTA from "@/components/v2/FinalCTA";
import { clientCases, conceptDemos, featuredReview } from "@/lib/content";

/* ============================================================
   /CASE-ESIMERKIT — nav label "Työt" (spec §20)
   ============================================================ */

export default function CaseEsimerkit() {
  return (
    <>
      <SEO
        title="Työt"
        description="Ennen ja jälkeen ei tarkoita vain uutta ulkoasua. Näissä töissä näette, miten rakenne, viestintä ja visuaalinen suunta vaikuttavat yrityksestä syntyvään ensivaikutelmaan."
        canonical="/case-esimerkit"
      />

      {/* 1. HERO (§20.1) */}
      <Section spacing="lg" container="standard" ariaLabelledby="work-hero">
        <PageHero
          eyebrow="Työt"
          title="Ennen ja jälkeen ei tarkoita vain uutta ulkoasua."
          body="Hyvä redesign muuttaa sitä, miten yritys ymmärretään ja koetaan. Näissä töissä näette, miten rakenne, viestintä ja visuaalinen suunta vaikuttavat yrityksestä syntyvään ensivaikutelmaan."
          withCtas
          ctaSource="case_esimerkit_hero"
          secondaryLabel="Katso asiakastyöt"
          secondaryHref="#clientwork-heading"
        />
      </Section>

      {/* 2. TRANSPARENCY (§20.2) */}
      <Section surface="alt" spacing="sm" container="text" ariaLabelledby="transparency-heading">
        <SectionHeader
          id="transparency-heading"
          eyebrow="Selkeästi eroteltuna"
          title="Asiakastyö on asiakastyö. Konseptidemo on konseptidemo."
        />
        <p className="t-body mt-6" style={{ color: "var(--body)" }}>
          Näytämme molempia, mutta emme sekoita niitä keskenään. Asiakastyöt ovat oikeille asiakkaille toteutettuja
          projekteja. Konseptidemot taas näyttävät, miten lähestyisimme tietyn yrityksen tai toimialan
          verkkosivustoa suunnittelun näkökulmasta.
        </p>
      </Section>

      {/* 3. FEATURED CLIENT WORK (§20.3) */}
      <Section spacing="lg" container="wide" ariaLabelledby="clientwork-heading">
        <div className="mx-auto" style={{ maxWidth: "720px" }}>
          <SectionHeader
            id="clientwork-heading"
            eyebrow="Asiakastyöt"
            title="Oikeita projekteja oikeille yrityksille."
            lead="Jokaisessa projektissa lähtötilanne on erilainen. Siksi emme arvioi onnistumista vain ulkoasun perusteella, vaan sen mukaan, ratkaiseeko uusi sivusto oikean ongelman."
          />
        </div>
        <div className="mt-16 flex flex-col">
          {clientCases.map((c, i) => (
            <div key={c.id} className={i > 0 ? "mt-20 border-t pt-20 lg:mt-24 lg:pt-24" : ""} style={{ borderColor: "var(--line)" }}>
              <CaseStudy caseItem={c} index={i} />
            </div>
          ))}
        </div>
      </Section>

      {/* 4. ADDITIONAL CLIENT WORK — ei näytetä: asiakastöitä on vain 3 (§20.4) */}

      {/* 5. CONCEPT DEMOS (§20.5) */}
      <Section surface="alt" spacing="lg" container="wide" ariaLabelledby="concepts-heading">
        <div className="mx-auto" style={{ maxWidth: "720px" }}>
          <SectionHeader
            id="concepts-heading"
            eyebrow="Suunnittelukonseptit"
            title="Miten lähestyisimme eri palveluyritysten verkkosivustoja."
            lead="Kaikki näyttämämme työt eivät ole julkaistuja asiakasprojekteja. Konseptidemot ovat suunnitteluharjoituksia ja myyntidemoja, joiden tarkoitus on näyttää, millaisen suunnan rakentaisimme tietyn yrityksen tai toimialan lähtökohdista."
          />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {conceptDemos.map((d, i) => (
            <Reveal
              key={d.id}
              delay={(i % 3) * 60}
              className="rounded-[12px] border bg-white"
              style={{ borderColor: "var(--line)", padding: "20px" }}
            >
              {d.imageSrc ? (
                <img
                  src={d.imageSrc}
                  alt={d.imageAlt ?? ""}
                  loading="lazy"
                  className="w-full rounded-[8px]"
                />
              ) : (
                <ImgPlaceholder label="" aspect="16/10" minHeight="0" />
              )}
              <div className="mt-5">
                <p
                  className="t-eyebrow inline-flex rounded-full border px-3 py-1"
                  style={{ color: "var(--muted)", borderColor: "var(--line)" }}
                >
                  {d.status}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6. HOW TO READ THE WORK (§20.6) */}
      <Section surface="navy" spacing="md" ariaLabelledby="read-heading">
        <SectionHeader
          id="read-heading"
          dark
          eyebrow="Katso pintaa syvemmälle"
          title="Hyvä redesign ei ole vain uusi väri ja fontti."
        />
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {[
            "Mitä ymmärrätte ensimmäisten sekuntien aikana?",
            "Mihin huomio ohjautuu?",
            "Tuntuuko yritys yhtä laadukkaalta verkossa kuin oikeasti?",
          ].map((q, i) => (
            <Reveal key={q} delay={i * 80} className="border-t pt-6" style={{ borderColor: "var(--line-dark)" }}>
              <h3 className="t-h3" style={{ color: "#fff" }}>
                {q}
              </h3>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. SOCIAL PROOF (§20.7) */}
      <Section spacing="md" container="text" ariaLabelledby="review-heading">
        <Eyebrow>Asiakkaiden kokemuksia</Eyebrow>
        <h2 id="review-heading" className="sr-only">
          Asiakkaan arvostelu
        </h2>
        <div className="mt-8">
          <TestimonialCard review={featuredReview} large />
        </div>
      </Section>

      {/* 8. FINAL CTA (§20.8) */}
      <FinalCTA
        eyebrow="Teidän yrityksenne seuraavaksi?"
        title="Haluatteko nähdä, miltä yrityksenne voisi näyttää?"
        body="Pyytäkää demo. Rakennamme yrityksellenne ensimmäisen suunnan ja käymme sen kanssanne läpi ennen kuin päätätte projektista."
        ctaSource="case_esimerkit_final_cta"
      />
      <Footer />
    </>
  );
}
