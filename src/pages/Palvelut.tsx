import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Section from "@/components/v2/Section";
import SectionHeader from "@/components/v2/SectionHeader";
import Eyebrow from "@/components/v2/Eyebrow";
import Button from "@/components/v2/Button";
import Reveal from "@/components/v2/Reveal";
import PageHero from "@/components/v2/PageHero";
import BeforeAfter from "@/components/v2/BeforeAfter";
import FinalCTA from "@/components/v2/FinalCTA";
import { clientCases } from "@/lib/content";

/* ============================================================
   /PALVELUT — content + visual consolidation pass
   Flow: hero → miksi → mitä projekti sisältää → kenelle sopii
   (+ ei sovi) → julkaisun jälkeen → case proof → Kasvupaketti
   (kompakti) → final CTA. Etusivu on offerin source of truth.
   ============================================================ */

export default function Palvelut() {
  return (
    <>
      <SEO
        title="Palvelut"
        description="Suunnittelemme palveluyrityksille verkkosivustoja, jotka välittävät palvelunne laadun, rakentavat luottamusta ja ohjaavat kävijää selkeästi kohti yhteydenottoa."
        canonical="/palvelut"
      />

      {/* 1. HERO */}
      <Section spacing="md" container="standard" ariaLabelledby="palvelut-hero">
        <PageHero
          eyebrow="Palvelut"
          title="Verkkosivusto, joka tekee palvelunne helpoksi löytää, ymmärtää ja valita."
          body="Suunnittelemme palveluyrityksille verkkosivustoja, jotka välittävät palvelunne laadun, rakentavat luottamusta ja ohjaavat kävijää selkeästi kohti yhteydenottoa."
          withCtas
          ctaSource="palvelut_hero"
        />
      </Section>

      <WhatWebsiteMustDo />
      <ProjectContent />
      <Fit />
      <AfterLaunch />
      <SelectedCase />
      <KasvupakettiCallout />

      {/* 8. FINAL CTA */}
      <FinalCTA
        eyebrow="Seuraava askel"
        title="Näette ensin, mitä tekisimme yrityksellenne."
        body="Pyytäkää demo. Rakennamme yrityksellenne ensimmäisen suunnan ja käymme sen kanssanne läpi ennen kuin päätätte jatkosta."
        ctaSource="palvelut_final_cta"
      />
      <Footer />
    </>
  );
}

/* ── 2. MIKSI: ENEMMÄN KUIN ULKOASU ── */
function WhatWebsiteMustDo() {
  const items = [
    {
      title: "Rakentaa oikea ensivaikutelma",
      body: "Yrityksenne pitäisi näyttää verkossa yhtä laadukkaalta kuin palvelunne tuntuu asiakkaalle paikan päällä.",
    },
    {
      title: "Tehdä palvelu helpoksi ymmärtää",
      body: "Kävijän pitää hahmottaa nopeasti mitä tarjoatte, kenelle palvelunne sopii ja mikä erottaa teidät vaihtoehdoista.",
    },
    {
      title: "Ohjata kohti seuraavaa askelta",
      body: "Ajanvarauksen, yhteydenoton, puhelun tai tarjouspyynnön pitäisi löytyä luontevasti ilman etsimistä tai epävarmuutta.",
    },
  ];
  return (
    <Section surface="alt" spacing="md" ariaLabelledby="mustdo-heading">
      <SectionHeader
        id="mustdo-heading"
        eyebrow="Enemmän kuin ulkoasu"
        title="Verkkosivusto on osa asiakaskokemusta, ei erillinen esite."
        lead="Hyvä sivusto auttaa kävijää ymmärtämään, miksi palvelunne sopii hänelle ja miksi seuraava askel kannattaa ottaa juuri teidän kanssanne."
      />
      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        {items.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} className="border-t pt-6" style={{ borderColor: "var(--line-strong)" }}>
            <h3 className="t-h3">{p.title}</h3>
            <p className="t-body mt-3" style={{ color: "var(--body)" }}>
              {p.body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── 3. MITÄ PROJEKTI SISÄLTÄÄ (yhdistää aiemmat CoreAreas + ProjectScope) ── */
function ProjectContent() {
  const areas = [
    {
      title: "Strategia & rakenne",
      body: "Määrittelemme, mitä uuden asiakkaan pitää nähdä ja ymmärtää ennen yhteydenottoa, ja rakennamme sivuston rakenteen sen ympärille.",
      points: [
        "Sivuston rakenne ja asiakaspolku",
        "Palveluiden sisältöhierarkia",
        "Hakukoneystävällinen sivurakenne",
        "CTA- ja yhteydenottopolut",
      ],
    },
    {
      title: "Design & sisältö",
      body: "Visuaalinen suunnittelu ja sisältö rakennetaan niin, että yrityksenne todellinen laatu, osaaminen ja luottamus välittyvät nopeasti.",
      points: [
        "Yksilöllinen UI/UX-design",
        "Copy- ja sisältöhierarkia",
        "Kuvien ja social proofin hyödyntäminen",
        "Responsiivinen toteutus",
      ],
    },
    {
      title: "Toteutus & julkaisu",
      body: "Rakennamme teknisesti nopean ja helposti ylläpidettävän kokonaisuuden sekä viemme sen valmiiksi julkaisuun.",
      points: [
        "Suorituskyky ja mobiilioptimointi",
        "Sisällönhallinta",
        "Domainiin julkaisu",
        "Tarvittavat integraatiot",
        "Ajanvaraus / analytiikka tarpeen mukaan",
      ],
    },
  ];
  return (
    <Section spacing="lg" ariaLabelledby="content-heading">
      <SectionHeader
        id="content-heading"
        eyebrow="Mitä verkkosivuprojekti sisältää"
        title="Strategiasta julkaisuun yhtenä kokonaisuutena."
        lead="Rakennamme sivuston rakenteen, visuaalisen suunnan, sisällön ja teknisen toteutuksen palvelemaan samaa tavoitetta. Kokonaisuus mukautetaan yrityksenne palveluihin, asiakkaisiin ja siihen, mitä sivuston pitää käytännössä saada aikaan."
      />
      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
        {areas.map((a, i) => (
          <Reveal key={a.title} delay={i * 80} className="border-t pt-6" style={{ borderColor: "var(--line-strong)" }}>
            <h3 className="t-h3">{a.title}</h3>
            <p className="t-small mt-3" style={{ color: "var(--body)" }}>
              {a.body}
            </p>
            <ul className="mt-5 flex flex-col gap-2">
              {a.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-2.5"
                  style={{ color: "var(--muted)", fontSize: "13.5px", lineHeight: 1.5 }}
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55em] block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── 4. KENELLE SOPII + MILLOIN EMME (yhdistää aiemmat Fit + NonFit) ── */
function Fit() {
  const examples = [
    "Hyvinvointi- ja terveyspalvelut",
    "Asiantuntijapalvelut",
    "Kiinteistöala",
    "Koti- ja rakennuspalvelut",
    "Muut palveluyritykset, joissa luottamus ratkaisee ennen yhteydenottoa",
  ];
  return (
    <Section surface="navy" spacing="md" ariaLabelledby="fit-heading">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionHeader
          id="fit-heading"
          dark
          eyebrow="Kenelle Holva sopii"
          title="Kun hyvä palvelu tarvitsee sitä vastaavan digitaalisen ensivaikutelman."
          lead="Holva sopii erityisesti palveluyrityksille, joissa asiakas arvioi yrityksen uskottavuutta ennen kuin hän soittaa, varaa ajan, lähettää tarjouspyynnön tai ottaa muuten yhteyttä."
        />
        <ul className="flex flex-col gap-4 self-center">
          {examples.map((e) => (
            <li
              key={e}
              className="t-body flex items-center gap-4 border-b pb-4"
              style={{ color: "var(--on-dark-body)", borderColor: "var(--line-dark)" }}
            >
              <span aria-hidden="true" className="h-[2px] w-5 shrink-0" style={{ backgroundColor: "var(--gold)" }} />
              {e}
            </li>
          ))}
        </ul>
      </div>
      {/* Secondary note — ei erillinen section */}
      <div className="mt-14 border-t pt-8 lg:mt-16" style={{ borderColor: "var(--line-dark)" }}>
        <h3 className="t-eyebrow" style={{ color: "var(--gold)" }}>
          Milloin emme välttämättä ole oikea kumppani
        </h3>
        <p className="t-body mt-4 max-w-[680px]" style={{ color: "var(--on-dark-body)" }}>
          Jos tarvitsette vain mahdollisimman yksinkertaisen yhden sivun verkkokortin tai halvimman teknisen
          toteutuksen ilman strategista suunnittelua, Holva ei välttämättä ole oikea kumppani.
        </p>
        <p className="t-small mt-3 max-w-[680px]" style={{ color: "var(--on-dark-muted)" }}>
          Olemme parhaimmillamme silloin, kun verkkosivuston pitää vaikuttaa siihen, miten yrityksenne koetaan ja
          kuinka helposti asiakas etenee yhteydenottoon.
        </p>
      </div>
    </Section>
  );
}

/* ── 5. JULKAISUN JÄLKEEN — canonical add-on offer ── */
function AfterLaunch() {
  const items = [
    {
      title: "SEO & löydettävyys",
      body: "Voimme kehittää sivuston sisältöä ja rakennetta niin, että yrityksenne löytyy paremmin silloin, kun oikea asiakas etsii tarjoamaanne palvelua.",
    },
    {
      title: "Arvostelut & luottamus",
      body: "Voimme tehdä arvostelujen pyytämisestä systemaattisempaa ja tuoda tuoreet asiakaskokemukset paremmin näkyviksi myös verkkosivustolla.",
    },
    {
      title: "Sisällönhallinta & ylläpito",
      body: "Voitte päivittää sisältöä itse helppokäyttöisellä työkalulla tai jättää päivitykset ja teknisen ylläpidon meidän hoidettavaksemme.",
    },
  ];
  return (
    <Section surface="alt" spacing="md" ariaLabelledby="after-heading">
      <SectionHeader
        id="after-heading"
        eyebrow="Julkaisun jälkeen"
        title="Sivustoa voidaan kehittää yrityksenne mukana."
        lead="Valmiin sivuston voi ottaa kokonaan omaan käyttöönne tai jatkaa sen kehittämistä kanssamme tarpeen mukaan. Verkkosivusto toimii jo itsessään — lisäpalvelut täydentävät kokonaisuutta silloin, kun niistä on yrityksellenne hyötyä."
      />
      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 70} className="border-t pt-6" style={{ borderColor: "var(--line-strong)" }}>
            <h3 className="t-h3" style={{ fontSize: "clamp(17px, 1.6vw, 19px)" }}>
              {it.title}
            </h3>
            <p className="t-small mt-3" style={{ color: "var(--body)" }}>
              {it.body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── 6. CASE PROOF — ANDINO ── */
function SelectedCase() {
  const c = clientCases[0];
  return (
    <Section spacing="lg" container="wide" ariaLabelledby="case-heading">
      <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Asiakastyö</Eyebrow>
          <h2 id="case-heading" className="t-h2 mt-4">
            Esimerkki toteutetusta projektista.
          </h2>
          <h3 className="t-h3 mt-8">{c.name}</h3>
          <p className="t-meta mt-1.5" style={{ color: "var(--muted)" }}>
            {c.industry}
          </p>
          <div className="mt-7 flex flex-col gap-5">
            <div>
              <p className="t-eyebrow" style={{ color: "var(--navy)" }}>
                Lähtötilanne
              </p>
              <p className="t-body mt-1.5" style={{ color: "var(--body)" }}>
                {c.startingPoint}
              </p>
            </div>
            <div>
              <p className="t-eyebrow" style={{ color: "var(--navy)" }}>
                Muutos
              </p>
              <p className="t-body mt-1.5" style={{ color: "var(--body)" }}>
                {c.solution}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Button variant="textlink" to={`/case-esimerkit#${c.slug}`}>
              Lue koko case →
            </Button>
          </div>
        </div>
        <BeforeAfter beforeLabel={c.beforeImg} afterLabel={c.afterImg} beforeSrc={c.beforeSrc} afterSrc={c.afterSrc} aspect="16/10" />
      </Reveal>
    </Section>
  );
}

/* ── 7. KASVUPAKETTI — kompakti secondary callout ── */
function KasvupakettiCallout() {
  return (
    <Section surface="alt" spacing="md" container="standard" ariaLabelledby="kp-callout-heading">
      <Reveal
        className="grid grid-cols-1 items-center gap-6 rounded-[14px] border bg-white lg:grid-cols-[65fr_35fr] lg:gap-10"
        style={{ borderColor: "var(--line)", padding: "clamp(24px, 3vw, 40px)" }}
      >
        <div>
          <Eyebrow>Hyvinvointialan pienyrityksille</Eyebrow>
          <h2 id="kp-callout-heading" className="t-h3 mt-3" style={{ fontSize: "clamp(20px, 2vw, 24px)" }}>
            Etsittekö kevyempää tapaa päästä alkuun?
          </h2>
          <p className="t-small mt-3 max-w-[520px]" style={{ color: "var(--body)" }}>
            Kasvupaketti on erillinen 99 €/kk palvelu pienille hyvinvointialan yrityksille, jotka haluavat
            laadukkaan verkkosivuston ja jatkuvan digitaalisen tuen ilman suurta alkuinvestointia.
          </p>
          <div className="mt-6">
            <Button variant="textlink" to="/kasvupaketti">
              Tutustu Kasvupakettiin →
            </Button>
          </div>
        </div>
        <div className="lg:text-right">
          <p className="font-serif" style={{ fontSize: "clamp(30px, 3vw, 40px)", lineHeight: 1, color: "var(--ink)" }}>
            99 €<span className="t-h3">/kk</span>
          </p>
          <p className="t-meta mt-2 font-semibold" style={{ color: "var(--gold)" }}>
            0 € aloitusmaksu
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
