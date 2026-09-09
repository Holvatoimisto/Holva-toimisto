import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "1. Rekisterinpitäjä",
    body: (
      <>
        <p>Cent Entertainment Oy</p>
        <p>Holva Toimisto</p>
        <p>Y-tunnus: 3368028-4</p>
        <p>
          Sähköposti:{" "}
          <a href="mailto:hei@holvatoimisto.fi" className="transition-colors duration-200 hover:text-white" style={{ color: "var(--accent-gold)" }}>
            hei@holvatoimisto.fi
          </a>
        </p>
        <p>Suomi</p>
      </>
    ),
  },
  {
    heading: "2. Mitä henkilötietoja keräämme",
    body: (
      <>
        <p>Voimme käsitellä esimerkiksi seuraavia tietoja:</p>
        <ul>
          <li>nimi</li>
          <li>sähköpostiosoite</li>
          <li>puhelinnumero</li>
          <li>yrityksen nimi</li>
          <li>yrityksen verkkosivu tai sosiaalisen median tili</li>
          <li>yhteydenottojen ja tarjouspyyntöjen sisältö</li>
          <li>muut tiedot, jotka henkilö antaa meille vapaaehtoisesti</li>
        </ul>
      </>
    ),
  },
  {
    heading: "3. Mihin tietoja käytetään",
    body: (
      <>
        <p>Käsittelemme henkilötietoja esimerkiksi seuraaviin tarkoituksiin:</p>
        <ul>
          <li>yhteydenottoihin vastaaminen</li>
          <li>maksuttomaan verkkosivudemoon liittyvä yhteydenpito</li>
          <li>tarjous- ja asiakassuhteiden hoitaminen</li>
          <li>palveluiden toteuttaminen ja kehittäminen</li>
          <li>asiakaspalvelu</li>
          <li>lakisääteisten velvollisuuksien täyttäminen</li>
        </ul>
      </>
    ),
  },
  {
    heading: "4. Henkilötietojen käsittelyn oikeusperuste",
    body: (
      <p>
        Henkilötietojen käsittely perustuu tilanteesta riippuen henkilön suostumukseen, sopimuksen tekemiseen tai
        täytäntöönpanoon, lakisääteiseen velvollisuuteen tai Holva Toimiston oikeutettuun etuun, kuten
        yhteydenottoihin vastaamiseen ja liiketoimintaan liittyvän asiakasviestinnän hoitamiseen.
      </p>
    ),
  },
  {
    heading: "5. Mistä tiedot saadaan",
    body: (
      <>
        <p>Henkilötiedot saadaan pääasiassa henkilöltä itseltään esimerkiksi:</p>
        <ul>
          <li>verkkosivuston yhteydenottojen kautta</li>
          <li>Meta/Facebook/Instagram Lead Ads -lomakkeiden kautta</li>
          <li>sähköpostitse</li>
          <li>puhelimitse</li>
          <li>tapaamisten tai muun asiakasviestinnän yhteydessä</li>
        </ul>
      </>
    ),
  },
  {
    heading: "6. Meta Lead Ads",
    body: (
      <>
        <p>
          Holva Toimisto voi käyttää Meta Platforms -yhtiön Facebook- ja Instagram-palveluissa Lead Ads -lomakkeita
          yhteydenottojen keräämiseen.
        </p>
        <p>
          Kun henkilö täyttää tällaisen lomakkeen, Holva Toimisto voi vastaanottaa lomakkeessa annetut tiedot, kuten:
        </p>
        <ul>
          <li>nimen</li>
          <li>sähköpostiosoitteen</li>
          <li>puhelinnumeron</li>
          <li>yrityksen nimen</li>
          <li>yrityksen verkkosivun tai Instagram-tilin</li>
        </ul>
        <p>
          Näitä tietoja käytetään henkilön yhteydenottoon sekä maksuttomaan verkkosivudemoon ja Holva Toimiston
          palveluihin liittyvään keskusteluun.
        </p>
        <p>Meta käsittelee tietoja lisäksi omien tietosuojakäytäntöjensä mukaisesti.</p>
      </>
    ),
  },
  {
    heading: "7. Henkilötietojen säilyttäminen",
    body: (
      <>
        <p>
          Säilytämme henkilötietoja vain niin kauan kuin se on tarpeellista tässä selosteessa kuvattujen tarkoitusten
          toteuttamiseksi tai lakisääteisten velvollisuuksien täyttämiseksi.
        </p>
        <p>
          Yhteydenottoihin ja potentiaalisiin asiakkuuksiin liittyvät tiedot poistetaan tai anonymisoidaan, kun niiden
          säilyttämiselle ei enää ole perusteltua tarvetta.
        </p>
        <p>
          Asiakassuhteeseen liittyviä tietoja voidaan säilyttää pidempään esimerkiksi kirjanpitoon, sopimuksiin tai
          oikeudellisten velvoitteiden täyttämiseen liittyvistä syistä.
        </p>
      </>
    ),
  },
  {
    heading: "8. Tietojen luovuttaminen ja palveluntarjoajat",
    body: (
      <>
        <p>
          Henkilötietoja voidaan käsitellä Holva Toimiston käyttämissä teknisissä palveluissa silloin, kun se on
          tarpeellista verkkosivuston, yhteydenottojen, asiakasviestinnän tai palveluiden toteuttamiseksi. Tällaisia
          palveluita ovat esimerkiksi verkkosivuston yhteydenottolomakkeiden välityspalvelu (Formspree) sekä
          yhteydenottojen keräämiseen käytetyt Metan Facebook- ja Instagram-palvelut.
        </p>
        <p>Tietoja ei myydä ulkopuolisille.</p>
      </>
    ),
  },
  {
    heading: "9. Tietojen siirrot EU/ETA-alueen ulkopuolelle",
    body: (
      <p>
        Osa Holva Toimiston käyttämistä palveluntarjoajista voi käsitellä tietoja Euroopan unionin tai Euroopan
        talousalueen ulkopuolella. Tällöin henkilötietojen asianmukaisesta suojauksesta huolehditaan sovellettavan
        tietosuojalainsäädännön edellyttämillä mekanismeilla.
      </p>
    ),
  },
  {
    heading: "10. Rekisteröidyn oikeudet",
    body: (
      <>
        <p>Sinulla on sovellettavan tietosuojalainsäädännön mukaisesti oikeus:</p>
        <ul>
          <li>pyytää pääsyä omiin henkilötietoihisi</li>
          <li>pyytää virheellisten tietojen korjaamista</li>
          <li>pyytää tietojen poistamista silloin, kun käsittelylle ei enää ole perustetta</li>
          <li>pyytää käsittelyn rajoittamista</li>
          <li>vastustaa henkilötietojen käsittelyä tietyissä tilanteissa</li>
          <li>peruuttaa antamasi suostumus silloin, kun käsittely perustuu suostumukseen</li>
          <li>tehdä valitus toimivaltaiselle tietosuojaviranomaiselle</li>
        </ul>
      </>
    ),
  },
  {
    heading: "11. Tietoturva",
    body: (
      <p>
        Holva Toimisto pyrkii suojaamaan henkilötiedot asianmukaisilla teknisillä ja organisatorisilla toimenpiteillä
        luvattomalta käytöltä, muuttamiselta, luovuttamiselta ja hävittämiseltä.
      </p>
    ),
  },
  {
    heading: "12. Yhteydenotot tietosuoja-asioissa",
    body: (
      <p>
        Henkilötietoihin ja tähän tietosuojaselosteeseen liittyvissä kysymyksissä voit olla yhteydessä:{" "}
        <a href="mailto:hei@holvatoimisto.fi" className="transition-colors duration-200 hover:text-white" style={{ color: "var(--accent-gold)" }}>
          hei@holvatoimisto.fi
        </a>
      </p>
    ),
  },
  {
    heading: "13. Selosteen muutokset",
    body: (
      <>
        <p>
          Voimme päivittää tätä tietosuojaselostetta palveluidemme tai lainsäädännön muuttuessa. Ajantasainen versio
          julkaistaan tällä sivulla.
        </p>
        <p>Viimeksi päivitetty: 8.9.2026</p>
      </>
    ),
  },
];

export default function Tietosuojaseloste() {
  return (
    <div>
      <SEO
        title="Tietosuojaseloste"
        description="Holva Toimiston tietosuojaseloste: mitä henkilötietoja keräämme, mihin niitä käytetään ja mitä oikeuksia sinulla on."
        canonical="/tietosuojaseloste"
      />
      <section className="relative" style={{ backgroundColor: "#091525", padding: "160px 24px 110px" }}>
        <div className="mx-auto" style={{ maxWidth: "680px" }}>
          {/* Header */}
          <p className="text-[11px] font-normal uppercase tracking-[0.18em]" style={{ color: "rgba(200,172,75,0.60)" }}>
            Holva Toimisto
          </p>
          <h1
            className="mt-4 text-[2rem] leading-[1.1] sm:text-[2.4rem]"
            style={{ color: "var(--text-primary)", fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.02em" }}
          >
            Tietosuojaseloste
          </h1>
          <p className="mt-6 text-[14px] leading-[1.8] font-light" style={{ color: "var(--text-secondary)" }}>
            Holva Toimisto käsittelee henkilötietoja luottamuksellisesti ja sovellettavan tietosuojalainsäädännön
            mukaisesti. Tässä tietosuojaselosteessa kerromme, mitä henkilötietoja keräämme, miksi niitä käsitellään ja
            mitä oikeuksia sinulla on henkilötietojesi suhteen.
          </p>

          {/* Sections */}
          {sections.map((s) => (
            <div key={s.heading} className="mt-12">
              <div
                style={{
                  width: "20px",
                  height: "1px",
                  background: "rgba(200,172,75,0.20)",
                  marginBottom: "16px",
                }}
              />
              <h2
                className="text-[17px] font-normal leading-[1.35]"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
              >
                {s.heading}
              </h2>
              <div
                className="tietosuoja-body mt-4 flex flex-col gap-3 text-[13px] leading-[1.75] font-light"
                style={{ color: "rgba(148,163,184,0.70)" }}
              >
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
