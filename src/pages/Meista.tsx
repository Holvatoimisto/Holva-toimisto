import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Section from "@/components/v2/Section";
import SectionHeader from "@/components/v2/SectionHeader";
import Button from "@/components/v2/Button";
import Reveal from "@/components/v2/Reveal";
import PageHero from "@/components/v2/PageHero";
import ImgPlaceholder from "@/components/v2/ImgPlaceholder";
import CaseBlock from "@/components/v2/CaseBlock";
import FinalCTA from "@/components/v2/FinalCTA";
import { clientCases, teamMembers } from "@/lib/content";

/* ============================================================
   /MEISTA — consolidation + visual polish
   Flow: about-hero → ihmiset (Felix & Leo, kuvaplaceholderit)
   → miksi Holva (compact) → miten ajattelemme (dark) →
   yhteistyö / mitä emme tee → valittuja töitä → final CTA.
   ============================================================ */

export default function Meista() {
  return (
    <>
      <SEO
        title="Meistä"
        description="Pieni tiimi. Suora yhteistyö. Selkeä vastuu. Holvassa verkkosivuprojekti ei siirry ketjulta toiselle."
        canonical="/meista"
      />

      {/* 1. HERO — about-specific */}
      <Section spacing="md" container="standard" ariaLabelledby="meista-hero">
        <PageHero
          eyebrow="Holva Toimisto"
          title="Pieni tiimi. Suora yhteistyö. Selkeä vastuu."
          body="Holvassa verkkosivuprojekti ei siirry ketjulta toiselle. Tiedätte alusta asti, kuka vastaa asiakkuudesta ja kuka suunnittelee ja toteuttaa sivuston."
          withCtas
          ctaSource="meista_hero"
        />
      </Section>

      {/* 2. PEOPLE — Felix & Leo; kuvaplaceholderit jäävät oikeita kuvia varten */}
      <Section surface="alt" spacing="md" ariaLabelledby="people-heading">
        <SectionHeader
          id="people-heading"
          eyebrow="Holvan takana"
          title="Kuka työn oikeasti tekee?"
          lead="Verkkosivuprojekti on yhteistyötä. Siksi haluamme, että tiedätte alusta asti, keiden kanssa työskentelette."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {teamMembers.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 80}
              className="rounded-[12px] border bg-white"
              style={{ borderColor: "var(--line)", padding: "clamp(24px, 3vw, 36px)" }}
            >
              {p.imgSrc ? (
                <div
                  className="flex items-center justify-center rounded-[8px]"
                  style={{ aspectRatio: "16/9", backgroundColor: "var(--bg-alt)" }}
                >
                  <img
                    src={p.imgSrc}
                    alt={p.name}
                    className="h-full w-full object-contain p-6"
                  />
                </div>
              ) : (
                <ImgPlaceholder label={p.img} aspect="16/9" />
              )}
              <h3 className="t-h3 mt-6">{p.name}</h3>
              <p className="t-small mt-1 font-semibold" style={{ color: "var(--gold)" }}>
                {p.role}
              </p>
              <p className="t-body mt-4" style={{ color: "var(--muted)" }}>
                {p.bio}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. MIKSI HOLVA — kompakti editorial statement */}
      <Section spacing="sm" container="text" ariaLabelledby="why-heading">
        <SectionHeader
          id="why-heading"
          eyebrow="Miksi Holva"
          title="Hyvän palvelun pitäisi näyttää verkossa yhtä hyvältä kuin se tuntuu asiakkaalle."
        />
        <p className="t-body mt-6" style={{ color: "var(--body)" }}>
          Holva syntyi tästä yksinkertaisesta ajatuksesta. Kun yrityksen todellinen laatu ja verkossa syntyvä
          vaikutelma vastaavat toisiaan paremmin, uuden asiakkaan on helpompi ymmärtää, luottaa ja ottaa seuraava
          askel.
        </p>
      </Section>

      {/* 4. MITEN AJATTELEMME (dark) */}
      <Section surface="navy" spacing="md" ariaLabelledby="think-heading">
        <SectionHeader
          id="think-heading"
          dark
          eyebrow="Miten ajattelemme"
          title="Verkkosivusto ei ole lopputulos. Se on väline asiakkaan päätökselle."
        />
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {[
            {
              title: "Näytämme ennen kuin myymme",
              body: "Demo tekee suunnasta konkreettisen ennen kuin päätätte projektista.",
            },
            {
              title: "Suunnittelemme asiakkaan näkökulmasta",
              body: "Rakenne ja sisältö suunnitellaan sen ympärille, mitä uuden asiakkaan pitää ymmärtää ennen yhteydenottoa.",
            },
            {
              title: "Tekniikka palvelee liiketoimintaa",
              body: "Valitsemme ratkaisut sen mukaan, mitä sivuston pitää käytännössä tehdä — emme teknologian itsensä vuoksi.",
            },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="border-t pt-6" style={{ borderColor: "var(--line-dark)" }}>
              <h3 className="t-h3" style={{ color: "#fff" }}>
                {p.title}
              </h3>
              <p className="t-small mt-3" style={{ color: "var(--on-dark-muted)" }}>
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. YHTEISTYÖ + MITÄ EMME TEE */}
      <Section spacing="md" ariaLabelledby="how-heading">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              id="how-heading"
              eyebrow="Yhteistyö"
              title="Selkeästi, ilman turhaa teknistä välikieltä."
            />
            <ul className="mt-10 flex flex-col">
              {["Me otamme vastuun suunnittelusta", "Te tunnette yrityksenne", "Päätökset tehdään yhdessä"].map((t) => (
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
          </div>
          <div>
            <SectionHeader
              id="dont-heading"
              eyebrow="Mitä emme tee"
              title="Emme rakenna sivustoa vain siksi, että yrityksellä kuuluu olla sellainen."
            />
            <ul className="mt-10 flex flex-col">
              {[
                "Emme aloita teknologiasta",
                "Emme täytä sivua asioilla vain näyttääksemme työn määrää",
                "Emme pyydä sitoutumaan näkymättömään",
              ].map((t) => (
                <li
                  key={t}
                  className="t-body flex items-center gap-4 border-t py-5"
                  style={{ color: "var(--body)", borderColor: "var(--line)" }}
                >
                  <span aria-hidden="true" className="h-[2px] w-5 shrink-0" style={{ backgroundColor: "var(--line-strong)" }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 6. VALITTUJA TÖITÄ — proof, ei case study */}
      <Section surface="alt" spacing="lg" container="wide" ariaLabelledby="meista-work-heading">
        <div className="mx-auto" style={{ maxWidth: "720px" }}>
          <SectionHeader id="meista-work-heading" eyebrow="Valittuja töitä" title="Työt puhuvat puolestamme." />
        </div>
        <div className="mt-14 flex flex-col gap-20 lg:gap-24">
          {clientCases.slice(0, 2).map((c, i) => (
            <CaseBlock key={c.id} caseItem={c} flip={i % 2 === 1} />
          ))}
        </div>
        <div className="mt-14">
          <Button variant="textlink" to="/case-esimerkit">
            Katso kaikki työt →
          </Button>
        </div>
      </Section>

      {/* 7. FINAL CTA */}
      <FinalCTA
        eyebrow="Tutustutaan käytännössä"
        title="Paras tapa arvioida Holvaa on nähdä, mitä tekisimme yrityksellenne."
        body="Pyytäkää demo. Rakennamme ensimmäisen suunnan ja käymme sen kanssanne läpi ennen kuin päätätte jatkosta."
        ctaSource="meista_final_cta"
      />
      <Footer />
    </>
  );
}
