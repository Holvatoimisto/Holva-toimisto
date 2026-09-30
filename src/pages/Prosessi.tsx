import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Section from "@/components/v2/Section";
import SectionHeader from "@/components/v2/SectionHeader";
import PageHero from "@/components/v2/PageHero";
import ProcessTimeline from "@/components/v2/ProcessTimeline";
import FAQAccordion from "@/components/v2/FAQAccordion";
import FinalCTA from "@/components/v2/FinalCTA";
import { processFAQ } from "@/lib/content";

/* ============================================================
   /PROSESSI (spec §21) — ainoa canonical full process
   ============================================================ */

const timelineSteps = [
  {
    n: "01",
    title: "Pyydätte demon",
    body: "Kerrotte meille lyhyesti yrityksestänne ja nykyisestä verkkosivustostanne, jos sellainen on. Tämän perusteella pystymme tutustumaan tilanteeseenne ennen ensimmäistä tapaamista.",
    time: "Alle minuutti",
    note: "Tässä vaiheessa ette sitoudu projektiin tai tarvitse valmista briiffiä.",
  },
  {
    n: "02",
    title: "Rakennamme yrityksellenne ensimmäisen suunnan",
    body: "Tutustumme yritykseenne, palveluihinne ja nykyiseen verkkonäkyvyyteen. Sen pohjalta rakennamme demon, joka näyttää käytännössä, millaista suuntaa ehdottaisimme uudelle sivustollenne.",
    time: "Tyypillisesti noin 3 päivää",
    note: "Demo ei ole geneerinen valmis pohja, vaan se rakennetaan yrityksenne lähtökohdista.",
  },
  {
    n: "03",
    title: "Käymme demon yhdessä läpi",
    body: "Esittelemme demon Teams-tapaamisessa ja käymme läpi, miksi olemme tehneet tietyt ratkaisut. Samalla keskustelemme tavoitteistanne, sisällöistä, toiminnallisuuksista ja siitä, mitä valmiin sivuston pitäisi yrityksellenne tehdä.",
    time: "Noin 30–45 minuuttia",
  },
  {
    n: "04",
    title: "Päätätte vasta nähtyänne suunnan",
    body: "Demotapaamisen jälkeen päätätte, haluatteko jatkaa projektia kanssamme. Jos suunta tuntuu oikealta, sovimme toteutuksen laajuudesta ja etenemisestä. Jos ette halua jatkaa, demo ei sido teitä mihinkään.",
    time: "Päätös vasta demon jälkeen",
  },
  {
    n: "05",
    title: "Viimeistelemme sivuston ja viemme sen julkaisuun",
    body: "Kun suunta on hyväksytty, viimeistelemme sisällöt, toiminnallisuudet ja yksityiskohdat sovitun kokonaisuuden mukaan.",
    time: "Aikataulu sovitaan projektikohtaisesti",
  },
];

export default function Prosessi() {
  return (
    <>
      <SEO
        title="Prosessi"
        description="Näette ensin suunnan. Päätätte vasta sen jälkeen. Rakennamme ensin demon, käymme sen kanssanne läpi ja päätätte jatkosta vasta sen jälkeen."
        canonical="/prosessi"
      />

      {/* 1. HERO */}
      <Section spacing="md" container="standard" ariaLabelledby="prosessi-hero">
        <PageHero
          eyebrow="Prosessi"
          title="Näette ensin suunnan. Päätätte vasta sen jälkeen."
          body="Prosessimme on rakennettu niin, ettei teidän tarvitse ostaa verkkosivuprojektia pelkän lupauksen perusteella. Rakennamme ensin demon, käymme sen kanssanne läpi ja päätätte jatkosta vasta sen jälkeen."
          withCtas
          ctaSource="prosessi_hero"
        />
      </Section>

      {/* 2. INTRO + 5-STEP TIMELINE */}
      <Section surface="alt" spacing="md" container="standard" ariaLabelledby="intro-heading">
        <div style={{ maxWidth: "760px" }}>
          <SectionHeader
            id="intro-heading"
            eyebrow="Miten yhteistyö etenee"
            title="Yksi selkeä prosessi demosta julkaisuun."
            lead="Tiedätte koko ajan, missä vaiheessa projekti on, mitä tarvitsemme teiltä ja mitä seuraavaksi tapahtuu."
          />
          <div className="mt-12">
            <ProcessTimeline steps={timelineSteps} />
          </div>
        </div>
      </Section>

      {/* 3. WHAT WE NEED FROM YOU */}
      <Section spacing="md" ariaLabelledby="need-heading">
        <SectionHeader
          id="need-heading"
          eyebrow="Teidän osanne"
          title="Prosessin ei kuulu lisätä teidän työmääräänne."
          lead="Tarvitsemme teiltä vain sen tiedon, jota emme voi selvittää itse."
        />
        <ul className="mt-10 grid grid-cols-1 gap-x-10 md:grid-cols-3">
          {[
            "Perustiedot yrityksestänne",
            "Pääsy olennaiseen materiaaliin",
            "Palaute oikeissa kohdissa",
          ].map((t) => (
            <li
              key={t}
              className="t-body flex items-center gap-4 border-t py-5"
              style={{ color: "var(--ink)", borderColor: "var(--line-strong)" }}
            >
              <span aria-hidden="true" className="h-[2px] w-5 shrink-0" style={{ backgroundColor: "var(--gold)" }} />
              {t}
            </li>
          ))}
        </ul>
        <p className="t-small mt-8" style={{ color: "var(--muted)" }}>
          Ette tarvitse valmista sivukarttaa, design-suunnitelmaa tai teknistä briiffiä ennen yhteydenottoa.
        </p>
      </Section>

      {/* 4. DEMO MEETING + PÄÄTÖS (yhdistää aiemmat Demon jälkeen + Ei sitoutumista) */}
      <Section surface="navy" spacing="md" ariaLabelledby="meeting-heading">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              id="meeting-heading"
              dark
              eyebrow="Demotapaaminen"
              title="Tarkoitus ei ole vain näyttää sivua. Tarkoitus on arvioida suunta yhdessä."
              lead="Käymme demon läpi ruudunjakona Teamsissa. Selitämme tärkeimmät ratkaisut ja keskustelemme siitä, mikä nykyisessä tilanteessa toimii, mitä kannattaa muuttaa ja mitä valmiilta sivustolta tarvitaan."
            />
            {/* Päätös vasta demon jälkeen — secondary note samassa sectionissa */}
            <div className="mt-10 border-t pt-8" style={{ borderColor: "var(--line-dark)" }}>
              <h3 className="t-eyebrow" style={{ color: "var(--gold)" }}>
                Päätös vasta demon jälkeen
              </h3>
              <p className="t-body mt-4" style={{ color: "var(--on-dark-body)" }}>
                Demotapaamisen jälkeen päätätte, haluatteko jatkaa projektia kanssamme. Jos ehdottamamme suunta ei
                tunnu oikealta, siihen voidaan jättää — demon pyytäminen ei sido teitä projektiin.
              </p>
            </div>
          </div>
          <div>
            <h3 className="t-eyebrow" style={{ color: "var(--gold)" }}>
              Tapaamisen agenda
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {[
                "Ensivaikutelma ja visuaalinen suunta",
                "Sisältörakenne ja palveluiden esittäminen",
                "Luottamusta rakentavat elementit",
                "CTA:t ja yhteydenottopolku",
                "Tarvittavat integraatiot",
                "Seuraavat askeleet",
              ].map((item) => (
                <li
                  key={item}
                  className="t-body flex items-center gap-4 border-b pb-4"
                  style={{ color: "var(--on-dark-body)", borderColor: "var(--line-dark)" }}
                >
                  <span aria-hidden="true" className="h-[2px] w-5 shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 5. FAQ */}
      <Section spacing="md" container="text" ariaLabelledby="process-faq-heading">
        <SectionHeader id="process-faq-heading" eyebrow="Usein kysyttyä" title="Kysymyksiä prosessista" />
        <div className="mt-12">
          <FAQAccordion items={processFAQ} />
        </div>
      </Section>

      {/* 9. FINAL CTA (§21.9) */}
      <FinalCTA
        eyebrow="Ensimmäinen askel"
        title="Ensimmäinen askel ei ole tarjouspyyntö. Se on demo."
        body="Kertokaa meille yrityksestänne. Rakennamme ensimmäisen suunnan ja käymme sen kanssanne läpi ennen kuin päätätte projektista."
        ctaSource="prosessi_final_cta"
      />
      <Footer />
    </>
  );
}
