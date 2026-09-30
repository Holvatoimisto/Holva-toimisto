import SEO from "@/components/SEO";
import { Link } from "react-router";
import Footer from "@/components/Footer";
import Section from "@/components/v2/Section";
import SectionHeader from "@/components/v2/SectionHeader";
import Eyebrow from "@/components/v2/Eyebrow";
import Button from "@/components/v2/Button";
import Reveal from "@/components/v2/Reveal";
import ProcessTimeline from "@/components/v2/ProcessTimeline";
import PricingBlock from "@/components/v2/PricingBlock";
import FAQAccordion from "@/components/v2/FAQAccordion";
import FinalCTA from "@/components/v2/FinalCTA";
import { clientCases, kasvupakettiFAQ } from "@/lib/content";
import { useModal } from "@/context/ModalContext";

/* ============================================================
   /KASVUPAKETTI (spec §24)
   Erillinen productized offer hyvinvointialan pienyrityksille.
   ============================================================ */

export default function Kasvupaketti() {
  return (
    <>
      <SEO
        title="Kasvupaketti hyvinvointialalle"
        description="Ammattimainen verkkosivusto ilman suurta aloitusinvestointia. 99 €/kk, 0 € aloitusmaksu. Verkkosivusto, tekninen ylläpito, helppo sisällönhallinta ja arvostelujen hyödyntäminen yhtenä kokonaisuutena."
        canonical="/kasvupaketti"
      />
      <Hero />
      <WhoItsFor />
      <WhyMonthly />
      <FourComponents />
      <Pricing />
      <ScopeBoundary />
      <Booking />
      <FinishedWebsite />
      <DemoFirst />
      <Reviews />
      <NonFit />
      <WellnessWork />
      <Faq />
      {/* 14. FINAL CTA (§24.14) */}
      <FinalCTA
        eyebrow="Ensimmäinen askel"
        title="Katsokaa ensin, miltä yrityksenne uusi sivusto voisi näyttää."
        priceLine="99 €/kk · 0 € aloitusmaksu"
        body="Pyytäkää maksuton demo. Rakennamme ensimmäisen suunnan ja käymme sen kanssanne läpi ennen kuin päätätte Kasvupaketista."
        ctaSource="kasvupaketti_final_cta"
      />
      <Footer />
    </>
  );
}

/* ── 1. HERO (§24.1) ── */
function Hero() {
  const { openModal } = useModal();
  return (
    <section className="surface-navy relative overflow-hidden">
      <div className="container-v2 container-wide mx-auto grid grid-cols-1 items-center gap-12 pt-14 pb-16 lg:grid-cols-[55fr_45fr] lg:gap-16 lg:pt-20 lg:pb-24">
        <div>
          <Eyebrow dark>Kasvupaketti hyvinvointialalle</Eyebrow>
          <h1 className="t-hero mt-5">Ammattimainen verkkosivusto ilman suurta aloitusinvestointia.</h1>
          <p className="t-lead mt-6 max-w-[540px]" style={{ color: "var(--on-dark-body)" }}>
            Kasvupaketti yhdistää verkkosivuston, teknisen ylläpidon, helpon sisällönhallinnan ja arvostelujen
            hyödyntämisen yhdeksi jatkuvaksi palveluksi pienille hyvinvointialan yrityksille.
          </p>
          <p className="mt-7 font-serif" style={{ fontSize: "32px", lineHeight: 1, color: "var(--gold)" }}>
            99 €/kk
            <span className="t-small ml-3 font-sans font-semibold" style={{ color: "var(--on-dark-body)" }}>
              0 € aloitusmaksu
            </span>
          </p>
          <div className="mt-8">
            <Button variant="primaryOnDark" onClick={() => openModal("kasvupaketti_hero")} blockOnMobile>
              Pyydä demo
            </Button>
            <p className="t-meta mt-4" style={{ color: "var(--on-dark-muted)" }}>
              Maksuton demo. Ei sitoutumista.
            </p>
          </div>
        </div>
        <Reveal delay={120}>
          <img
            src="/assets/cases/mathias/mathias-after.png"
            alt="ME Massage — toteutettu hyvinvointialan verkkosivusto"
            loading="lazy"
            className="w-full rounded-[16px] border"
            style={{ borderColor: "rgba(255,255,255,0.14)", boxShadow: "0 24px 64px -32px rgba(0,0,0,0.5)" }}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ── 2. WHO IT'S FOR (§24.2) ── */
function WhoItsFor() {
  const examples = [
    "Hierojat",
    "Fysioterapeutit",
    "Osteopaatit",
    "Kiropraktikot",
    "Personal trainerit",
    "Muut pienet hyvinvointialan palveluyritykset",
  ];
  return (
    <Section spacing="md" ariaLabelledby="who-heading">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionHeader
          id="who-heading"
          eyebrow="Kenelle"
          title="Rakennettu pienille hyvinvointialan yrityksille."
          lead="Kasvupaketti sopii erityisesti yritykselle, jossa hyvä palvelu ja vahva asiakaskokemus ovat jo olemassa, mutta verkkosivusto ja digitaalinen näkyvyys eivät vielä tue niitä samalla tasolla."
        />
        <ul className="flex flex-col gap-4 self-center">
          {examples.map((e) => (
            <li
              key={e}
              className="t-body flex items-center gap-4 border-b pb-4"
              style={{ color: "var(--body)", borderColor: "var(--line)" }}
            >
              <span aria-hidden="true" className="h-[2px] w-5 shrink-0" style={{ backgroundColor: "var(--gold)" }} />
              {e}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ── 3. WHY MONTHLY MODEL (§24.3) ── */
function WhyMonthly() {
  return (
    <Section surface="alt" spacing="sm" container="text" ariaLabelledby="monthly-heading">
      <SectionHeader
        id="monthly-heading"
        eyebrow="Kevyempi tapa päästä alkuun"
        title="Hyvän verkkosivuston ei pitäisi vaatia suurta kertapanostusta."
      />
      <p className="t-body mt-6" style={{ color: "var(--body)" }}>
        Pienelle palveluyritykselle perinteinen verkkosivuprojekti voi tarkoittaa suurta alkuinvestointia, vaikka
        tarve olisi yksinkertainen: laadukas sivusto, joka pysyy toiminnassa ja auttaa uusia asiakkaita löytämään
        oikean seuraavan askeleen.
      </p>
      <p className="t-body mt-4" style={{ color: "var(--body)" }}>
        Kasvupaketissa kustannus jakautuu kuukausimalliin ja tärkeimmät jatkuvat tarpeet kuuluvat samaan
        kokonaisuuteen.
      </p>
    </Section>
  );
}

/* ── 4. FOUR CORE COMPONENTS (§24.4) ── */
function FourComponents() {
  const items = [
    {
      title: "Premium-verkkosivusto",
      body: "Suunnittelemme yrityksellenne modernin ja mobiilioptimoidun verkkosivuston, joka tekee palvelunne helpoksi ymmärtää ja ohjaa asiakkaan selkeästi kohti ajanvarausta tai yhteydenottoa.",
    },
    {
      title: "Google-arvostelujen hankinta ja hyödyntäminen",
      body: "Arvostelut ovat yksi vahvimmista luottamussignaaleista hyvinvointipalvelua valittaessa. Kasvupaketti auttaa tekemään arvostelujen pyytämisestä järjestelmällisempää ja tuo olemassa olevan sosiaalisen todisteen paremmin osaksi verkkosivustoa.",
    },
    {
      title: "Tekninen ylläpito ja hosting",
      body: "Huolehdimme sivuston teknisestä ylläpidosta ja hostingista osana kuukausipalvelua, jotta teidän ei tarvitse käyttää aikaa palvelinten, päivitysten tai teknisten yksityiskohtien hallintaan.",
    },
    {
      title: "Helppo sisällönhallinta",
      body: "Sivuston tärkeimpiä sisältöjä voidaan päivittää helposti ilman, että jokaista hinnan, palvelun tai tekstin muutosta varten tarvitaan uusi verkkosivuprojekti.",
    },
  ];
  return (
    <Section spacing="lg" ariaLabelledby="components-heading">
      <SectionHeader
        id="components-heading"
        eyebrow="Yksi kokonaisuus"
        title="Neljä asiaa, joista toimiva digitaalinen perusta rakentuu."
      />
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((p, i) => (
          <Reveal
            key={p.title}
            delay={(i % 2) * 80}
            className="rounded-[12px] border bg-white"
            style={{ borderColor: "var(--line)", padding: "clamp(24px, 3vw, 34px)" }}
          >
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

/* ── 5. PRICING (§24.5) ── */
function Pricing() {
  const included = [
    "Verkkosivuston suunnittelu ja toteutus",
    "Mobiilioptimointi",
    "Tekninen ylläpito",
    "Hosting",
    "Helppo sisällönhallinta",
    "Arvostelujen hankinnan järjestelmä",
    "Arvostelujen hyödyntäminen verkkosivustolla",
  ];
  return (
    <Section surface="alt" spacing="md" container="standard" ariaLabelledby="pricing-heading">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionHeader
          id="pricing-heading"
          eyebrow="Hinta"
          title="Yksi kuukausihinta. Ei aloitusmaksua."
        />
        <Reveal>
          <PricingBlock included={included} ctaSource="kasvupaketti_pricing" />
        </Reveal>
      </div>
    </Section>
  );
}

/* ── 6. SCOPE BOUNDARY (§24.6) ── */
function ScopeBoundary() {
  const out = [
    "Laaja verkkokauppa",
    "Räätälöidyt web-sovellukset",
    "Poikkeuksellisen laajat integraatiot",
    "Suuret jatkuvat sisältömuutokset",
  ];
  return (
    <Section spacing="md" ariaLabelledby="boundary-heading">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionHeader
          id="boundary-heading"
          eyebrow="Selkeä rajaus"
          title="Kaikkea ei tarvitse pakata samaan kuukausihintaan."
          lead="Jos yrityksenne tarvitsee tavallista laajemman integraation, verkkokaupan, täysin räätälöidyn järjestelmän tai muuta Kasvupaketin normaalin laajuuden ulkopuolista toteutusta, sovimme siitä erikseen ennen työn aloittamista."
        />
        <ul className="flex flex-col gap-4 self-center">
          {out.map((e) => (
            <li
              key={e}
              className="t-body flex items-center gap-4 border-b pb-4"
              style={{ color: "var(--body)", borderColor: "var(--line)" }}
            >
              <span aria-hidden="true" className="h-[2px] w-5 shrink-0" style={{ backgroundColor: "var(--line-strong)" }} />
              {e}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ── 7. BOOKING (§24.7) ── */
function Booking() {
  return (
    <Section surface="alt" spacing="sm" container="text" ariaLabelledby="booking-heading">
      <SectionHeader
        id="booking-heading"
        eyebrow="Ajanvaraus"
        title="Nykyinen ajanvarausjärjestelmänne voidaan yleensä pitää käytössä."
      />
      <p className="t-body mt-6" style={{ color: "var(--body)" }}>
        Jos käytätte jo esimerkiksi ulkoista ajanvarausjärjestelmää, uusi sivusto voidaan ohjata siihen selkeästi
        ilman, että koko ajanvarausratkaisua tarvitsee vaihtaa.
      </p>
      <p className="t-body mt-4" style={{ color: "var(--body)" }}>
        Jos ajanvaraus täytyy asentaa tai konfiguroida uutena osana kokonaisuutta, se voidaan toteuttaa erillisenä
        lisätyönä.
      </p>
    </Section>
  );
}

/* ── 8. FINISHED WEBSITE (§24.8) ── */
function FinishedWebsite() {
  return (
    <Section spacing="md" container="wide" ariaLabelledby="finished-heading">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionHeader
          id="finished-heading"
          eyebrow="Lopputulos"
          title="Ei kuukausipalvelun näköinen kompromissi."
          lead="Kuukausimalli ei tarkoita valmista geneeristä sivupohjaa, johon vaihdetaan vain logo ja tekstit. Sivusto rakennetaan yrityksenne palveluiden, ilmeen ja asiakaspolun ympärille."
        />
        <Reveal>
          <img
            src="/assets/cases/andino/andino-after.png"
            alt="Hieronta & Kehonhuolto Andino — toteutettu verkkosivusto"
            loading="lazy"
            className="w-full rounded-[16px] border"
            style={{ borderColor: "var(--line)", boxShadow: "var(--shadow-card)" }}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ── 9. DEMO-FIRST (§24.9) ── */
function DemoFirst() {
  const { openModal } = useModal();
  const steps = [
    { n: "01", title: "Pyydätte demon" },
    { n: "02", title: "Rakennamme suunnan" },
    { n: "03", title: "Käymme sen yhdessä läpi" },
    { n: "04", title: "Päätätte jatkosta" },
  ];
  return (
    <Section surface="navy" spacing="md" ariaLabelledby="kp-demo-heading">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow dark>Näe ennen kuin päätät</Eyebrow>
          <h2 id="kp-demo-heading" className="t-h2 mt-4">
            Kasvupaketissakin näette suunnan ennen sitoutumista.
          </h2>
          <div className="mt-9">
            <Button variant="primaryOnDark" onClick={() => openModal("kasvupaketti_demo")} blockOnMobile>
              Pyydä demo
            </Button>
          </div>
        </div>
        <ProcessTimeline steps={steps} dark />
      </div>
    </Section>
  );
}

/* ── 10. REVIEWS (§24.10) ── */
function Reviews() {
  const flow = ["Asiakaskäynti", "Arvostelupyyntö", "Google-arvostelu", "Arvostelu verkkosivulle"];
  return (
    <Section spacing="md" ariaLabelledby="reviews-heading">
      <SectionHeader
        id="reviews-heading"
        eyebrow="Sosiaalinen todiste"
        title="Hyvä palvelu tuottaa tyytyväisiä asiakkaita. Heidän kokemuksensa pitäisi myös näkyä."
        lead="Monella pienellä hyvinvointiyrityksellä on tyytyväisiä kanta-asiakkaita, mutta arvostelujen pyytäminen jää helposti muun työn alle. Kasvupaketin tarkoitus on tehdä tästä mahdollisimman järjestelmällistä ilman, että yrittäjän pitää muistaa pyytää arvostelua jokaiselta asiakkaalta käsin."
      />
      <Reveal className="mt-12">
        <ol className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {flow.map((f, i) => (
            <li key={f} className="flex items-center gap-3">
              <span
                className="t-small rounded-[12px] border bg-white px-5 py-3.5 font-semibold"
                style={{ borderColor: "var(--line)", color: "var(--ink)" }}
              >
                {f}
              </span>
              {i < flow.length - 1 && (
                <span aria-hidden="true" className="hidden sm:inline" style={{ color: "var(--gold)" }}>
                  →
                </span>
              )}
              {i < flow.length - 1 && (
                <span aria-hidden="true" className="ml-5 sm:hidden" style={{ color: "var(--gold)" }}>
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

/* ── 11. NON-FIT (§24.11) ── */
function NonFit() {
  return (
    <Section surface="alt" spacing="sm" container="text" ariaLabelledby="kp-nonfit-heading">
      <SectionHeader
        id="kp-nonfit-heading"
        eyebrow="Sopivuus"
        title="Kasvupaketti ei ole tarkoitettu jokaiselle yritykselle."
      />
      <p className="t-body mt-6" style={{ color: "var(--body)" }}>
        Jos tarvitsette suuren verkkokaupan, poikkeuksellisen laajan räätälöidyn järjestelmän tai täysin yksilöllisen
        suuren verkkopalvelun, Holvan räätälöity verkkosivuprojekti on todennäköisesti parempi vaihtoehto.
      </p>
      <div className="mt-8">
        <Button variant="secondary" to="/palvelut">
          Tutustu palveluihin
        </Button>
      </div>
    </Section>
  );
}

/* ── 12. WELLNESS WORK (§24.12) — kolme oikeaa hyvinvointialan asiakastyötä ── */
function WellnessWork() {
  return (
    <Section spacing="md" container="standard" ariaLabelledby="wellness-heading">
      <SectionHeader
        id="wellness-heading"
        eyebrow="Hyvinvointialan töitä"
        title="Suunniteltu ympäristöön, jossa luottamus ratkaisee."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clientCases.map((c, i) => (
          <Reveal key={c.id} delay={i * 60}>
            <Link
              to={`/case-esimerkit#${c.slug}`}
              className="group block overflow-hidden rounded-[12px] border bg-white transition-shadow duration-200 hover:shadow-[0_16px_40px_-24px_rgba(3,22,37,0.25)]"
              style={{ borderColor: "var(--line)" }}
            >
              <img
                src={c.afterSrc}
                alt={`${c.name} — toteutettu verkkosivusto`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top"
              />
              <div className="px-5 py-5">
                <p className="t-eyebrow" style={{ color: "var(--muted)", fontSize: "11px" }}>
                  Asiakastyö · {c.industry}
                </p>
                <p className="t-small mt-2 font-semibold" style={{ color: "var(--ink)" }}>
                  {c.name}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-12">
        <Button variant="textlink" to="/case-esimerkit">
          Katso kaikki työt →
        </Button>
      </div>
    </Section>
  );
}

/* ── 13. FAQ (§24.13) ── */
function Faq() {
  return (
    <Section surface="alt" spacing="md" container="text" ariaLabelledby="kp-faq-heading">
      <SectionHeader id="kp-faq-heading" eyebrow="Usein kysyttyä" title="Kysymyksiä Kasvupaketista" />
      <div className="mt-12">
        <FAQAccordion items={kasvupakettiFAQ} />
      </div>
    </Section>
  );
}
