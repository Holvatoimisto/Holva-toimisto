import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import Reveal from "./Reveal";

const INCLUDED = [
  "Strategia, rakenne ja asiakaspolku",
  "Yksilöllinen UI/UX-suunnittelu ja toteutus",
  "Mobiilioptimointi ja suorituskyky",
  "Hakukoneystävällinen tekninen perusta",
  "Selkeät yhteydenotto- ja ajanvarauspolut",
  "Arvostelut, kartat ja tarvittavat integraatiot",
  "Helppo sisällönhallinta",
  "Domainiin julkaisu ja tekninen käyttöönotto",
];

const ADDONS = [
  {
    title: "Arvostelut & luottamus",
    body: "Tyytyväiset asiakkaat kannattaa tehdä näkyviksi. Autamme muuttamaan arvostelujen pyytämisen systemaattiseksi, jotta uusi kävijä näkee nopeasti, että muutkin luottavat palveluunne.",
    points: ["Automaattiset arvostelupyynnöt", "Uusien arvostelujen automaattinen päivitys verkkosivulle"],
  },
  {
    title: "SEO & löydettävyys",
    body: "Hakukoneoptimoinnin tavoite on yksinkertainen: että useampi oikea asiakas löytää yrityksenne silloin, kun hän etsii tarjoamaanne palvelua. Kehitämme sivuston sisältöä, rakennetta ja näkyvyyttä niin, että orgaaninen liikenne voi kasvaa ja yhteydenottoja syntyy enemmän.",
    points: [
      "Paikallisen ja palvelukohtaisen näkyvyyden kehittäminen",
      "Sisältöjen ja tärkeimpien sivujen optimointi",
      "Hakudataan perustuva jatkuva kehitys",
    ],
  },
];

const SUPPORT = {
  title: "Sisällönhallinta & päivitykset",
  body: "Sivuston sisältöä voi päivittää helposti myös ilman koodausta. Halutessanne voitte tehdä muutoksia itse, tai säästää aikaa ja jättää päivitykset meidän hoidettavaksemme.",
  points: [
    "Helppokäyttöinen sisällönmuokkaustyökalu",
    "Mahdollisuus ulkoistaa päivitykset Holvalle",
    "Tekninen ylläpito ja hosting osana kokonaisuutta",
  ],
};

/** Pieni pyöreä gold-bullet, kohdistettu ensimmäisen tekstirivin korkeudelle. */
function Dot() {
  return (
    <span
      aria-hidden="true"
      className="mt-[0.55em] block h-1.5 w-1.5 shrink-0 rounded-full"
      style={{ backgroundColor: "var(--gold)" }}
    />
  );
}

/**
 * Etusivun palveluosio — Holvan varsinainen offer-section.
 * Vasemmalla core offer (Premium-verkkosivusto), oikealla kaksi
 * tasakorkeaa päälisäpalvelua. Sisällönhallinta & päivitykset on
 * erotettu leveäksi, kevyemmäksi support-paneeliksi ylärivin alle.
 */
export default function ServicesSection() {
  return (
    <Section spacing="md" ariaLabelledby="services-heading">
      <SectionHeader
        id="services-heading"
        eyebrow="Palvelut"
        title="Vahva verkkosivusto toimii jo itsessään. Tarvittaessa kokonaisuutta voi täydentää."
        lead="Verkkosivuprojekti rakentaa yrityksellenne selkeän, luottamusta herättävän ja löydettävän kokonaisuuden. Sen lisäksi voimme tukea näkyvyyttä, arvosteluja ja sisällön päivittämistä palveluilla, jotka täydentävät kokonaisuutta tarpeenne mukaan."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[46fr_54fr] lg:gap-8">
        {/* Main: Premium-verkkosivusto */}
        <Reveal className="h-full">
          <div
            className="flex h-full flex-col rounded-[16px] p-8 lg:p-10"
            style={{
              backgroundColor: "#FBF9F4",
              border: "1px solid var(--line)",
              borderTop: "2px solid var(--gold)",
              boxShadow: "0 1px 2px rgba(3,22,37,0.03), 0 20px 48px -32px rgba(3,22,37,0.14)",
            }}
          >
            <h3 className="t-h3" style={{ fontSize: "clamp(22px, 2.2vw, 27px)" }}>
              Premium-verkkosivusto
            </h3>
            <p className="t-body mt-4 max-w-[440px]" style={{ color: "var(--body)" }}>
              Yksilöllisesti suunniteltu monisivuinen verkkosivusto, joka välittää palvelunne laadun ja tekee
              asiakkaan etenemisestä mahdollisimman selkeää.
            </p>
            <p className="t-meta mt-7" style={{ color: "var(--muted)" }}>
              Sisältää
            </p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {INCLUDED.map((p) => (
                <li key={p} className="t-small flex items-start gap-3" style={{ color: "var(--ink)" }}>
                  <Dot />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Button variant="textlink" to="/palvelut">
                Tutustu verkkosivuprojektiin →
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Oikea: kaksi päälisäpalvelua tasakorkeina */}
        <div className="flex h-full flex-col gap-4 lg:gap-5">
          {ADDONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 70} className="flex-1">
              <div
                className="flex h-full flex-col rounded-[14px] bg-white p-6 lg:p-7"
                style={{
                  border: "1px solid var(--line)",
                  boxShadow: "0 1px 2px rgba(3,22,37,0.03)",
                }}
              >
                {i === 0 && (
                  <p
                    className="mb-2"
                    style={{
                      color: "var(--muted)",
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    Lisäpalvelut tarpeen mukaan
                  </p>
                )}
                <h4 className="t-h3" style={{ fontSize: "clamp(17px, 1.6vw, 19px)" }}>
                  {s.title}
                </h4>
                <p className="t-small mt-2.5" style={{ color: "var(--body)" }}>
                  {s.body}
                </p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2.5"
                      style={{ color: "var(--muted)", fontSize: "13px" }}
                    >
                      <Dot />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Support layer: Sisällönhallinta & päivitykset — leveä, kevyempi paneeli */}
      <Reveal delay={140}>
        <div
          className="mt-6 grid grid-cols-1 gap-5 rounded-[14px] px-6 py-6 lg:mt-8 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-10 lg:px-8 lg:py-7"
          style={{
            border: "1px solid var(--line)",
            backgroundColor: "rgba(255,255,255,0.55)",
          }}
        >
          <div>
            <h4 className="t-h3" style={{ fontSize: "clamp(16px, 1.5vw, 18px)" }}>
              {SUPPORT.title}
            </h4>
            <p className="t-small mt-2 max-w-[560px]" style={{ color: "var(--body)" }}>
              {SUPPORT.body}
            </p>
          </div>
          <ul className="flex flex-col gap-1.5">
            {SUPPORT.points.map((pt) => (
              <li
                key={pt}
                className="flex items-start gap-2.5"
                style={{ color: "var(--muted)", fontSize: "13px" }}
              >
                <Dot />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
