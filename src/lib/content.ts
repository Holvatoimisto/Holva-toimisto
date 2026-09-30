/* ============================================================
   HOLVA V2 — keskitetty sisältödata
   Kaikki [HAKASULKU]-merkinnät ovat tarkoituksellisia
   placeholdereita, jotka käyttäjä korvaa myöhemmin (spec §5–§6, §27).
   ============================================================ */

/* ── Oikeat asiakastyöt (3 kpl, spec §4) ──
   Mappingia nimistä ei ole varmistettu sourcesta → CLIENT CASE 01–03. */

export interface CaseSolution {
  /** Numero, esim. "01" */
  n: string;
  title: string;
  body: string[];
  bullets?: string[];
  /** Lisäkuva (public/) — renderöidään vain jos asset on olemassa */
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right" | "full";
}

export interface ClientCaseProof {
  quote: string;
  author: string;
  note?: string;
  extraReview?: string;
}

export interface ClientCase {
  id: string;
  /** Anchori /case-esimerkit-sivulla (esim. #andino) */
  slug: string;
  name: string;
  industry: string;
  status: "Asiakastyö";
  /** Etusivun tiivis teaser-copy (Lähtötilanne / Muutos) */
  startingPoint: string;
  /** Valinnaiset tarkentavat kohdat (CaseBlock detailed) — renderöidään vain jos asetettu */
  goal?: string;
  solution: string;
  result?: string;
  /** Case study -sivun laajempi sisältö */
  lead: string;
  startingPointLong: string[];
  goalIntro?: string;
  goals: string[];
  goalNote?: string;
  solutions: CaseSolution[];
  resultBody: string[];
  resultBullets?: string[];
  resultNote?: string;
  proof?: ClientCaseProof;
  beforeImg: string;
  afterImg: string;
  /** Oikeiden kuvien polut (public/) — kun asetettu, käytetään img:tä placeholderin sijaan */
  beforeSrc?: string;
  afterSrc?: string;
  mobileImg?: string;
}

export const clientCases: ClientCase[] = [
  {
    id: "client-case-01",
    slug: "andino",
    name: "Hieronta & Kehonhuolto Andino",
    industry: "Hieronta ja kehonhuolto",
    status: "Asiakastyö",
    startingPoint: "Yksisivuinen sivusto ei tehnyt Andinon ammattitaitoa, asiakastyytyväisyyttä tai palveluiden laajuutta riittävän näkyväksi.",
    solution: "Rakensimme monisivuisen kokonaisuuden, jossa arvostelut, tekijä, palvelut ja selkeä ajanvarauspolku rakentavat luottamusta läpi sivuston.",
    lead: "Yksinkertaisesta yksisivuisesta verkkosivusta kokonaisuudeksi, joka tekee ammattitaidon, asiakastyytyväisyyden ja palveluiden arvon näkyväksi.",
    startingPointLong: [
      "Andinon vanha verkkosivusto ei ollut varsinaisesti huono. Se oli kuitenkin hyvin yksinkertainen, sisällöltään suppea ja luottamusta rakentavia elementtejä oli vähän.",
      "Sivusto kertoi yrityksen nimen ja mahdollisti ajanvarauksen, mutta se ei välittänyt riittävän vahvasti sitä ammattitaitoa, kokemusta ja asiakastyytyväisyyttä, joita yrityksellä todellisuudessa jo oli.",
      "Vanha kokonaisuus oli käytännössä yksisivuinen. Palveluiden esittely jäi suppeaksi, yrityksen ja tekijän tausta eivät nousseet vahvasti esiin, eikä sivustolla hyödynnetty asiakasarvosteluja luottamuksen rakentamiseen.",
    ],
    goalIntro: "Tavoitteena ei ollut tehdä vain uutta visuaalista ilmettä. Halusimme rakentaa kokonaisuuden, joka:",
    goals: [
      "esittelee palvelut kattavammin",
      "tuo Andinon itsensä ja ammattitaidon näkyväksi",
      "hyödyntää oikeita asiakasarvosteluja luottamuksen rakentamiseen",
      "antaa yrityksestä ammattimaisemman ensivaikutelman",
      "tekee ajanvaraukseen etenemisestä selkeää",
      "antaa tilaa uusille palveluille, kuten yrityksille tarjottavalle hieronnalle",
      "tarjoaa monisivuisen rakenteen sisällölle ja hakukoneystävälliselle perustalle",
    ],
    solutions: [
      {
        n: "01",
        title: "Monisivuinen rakenne",
        body: [
          "Vanhan suppean yhden sivun rakenteen tilalle rakennettiin monisivuinen kokonaisuus.",
          "Tavoitteena ei ollut lisätä sivuja vain määrän vuoksi, vaan antaa eri sisällöille riittävästi tilaa ja tehdä sivuston navigoinnista selkeämpi.",
          "Palveluita voidaan käsitellä kattavammin ja myös uusia sisältöjä, kuten yrityksille suunnattuja palveluita, voidaan tuoda esille ilman että kaikki tieto kilpailee samassa näkymässä huomiosta.",
        ],
      },
      {
        n: "02",
        title: "Luottamus näkyväksi",
        body: [
          "Arvostelut olivat yksi uudistuksen keskeisistä muutoksista.",
          "Vanha sivusto ei tuonut asiakaspalautetta näkyviin. Uudessa kokonaisuudessa arvostelut nostettiin näkyvästi jo etusivulle, heron yhteyteen sekä omalle arvostelusivulle.",
          "Ajatus oli yksinkertainen: jos yrityksellä on jo tyytyväisiä asiakkaita, uuden kävijän pitäisi päästä näkemään se.",
        ],
      },
      {
        n: "03",
        title: "Tekijä näkyväksi",
        body: [
          "Sivustolle lisättiin Andinoa itseään esittelevää sisältöä ja kuvia.",
          "Näin yritys ei jää kasvottomaksi palveluntarjoajaksi, vaan kävijä pystyy jo ennen ajanvarausta muodostamaan käsityksen siitä, kuka palvelun tarjoaa ja millaiseen osaamiseen hän on luottamassa.",
        ],
      },
      {
        n: "04",
        title: "Hero, joka kertoo miksi varata",
        body: [
          "Vanha hero nojasi pitkälti yrityksen nimeen ja ajanvarauspainikkeeseen.",
          "Uudessa versiossa hero rakennettiin uudelleen. Vahvemman kuvan lisäksi copy kertoo heti enemmän palvelun arvosta ja siitä, miksi asiakkaan kannattaa jatkaa sivulla tai varata aika.",
          "Visuaalista identiteettiä laajennettiin yhdessä asiakkaan kanssa vanhan punaisen ja valkoisen rinnalle tummalla navy-sävyllä. Tavoite oli säilyttää yhteys aiempaan brändiin mutta tehdä kokonaisuudesta selvästi vahvempi ja ammattimaisempi.",
        ],
      },
      {
        n: "05",
        title: "Ajanvaraus osaksi asiakaspolkua",
        body: [
          "Andinon käytössä ollut Timma säilytettiin. Tarkoituksena ei ollut vaihtaa jo toimivaa ajanvarausjärjestelmää, vaan integroida se uuteen sivustoon paremmin.",
          "Ajanvaraus nostettiin selkeästi näkyviin CTA-painikkeilla ja sivuston sisältö sekä rakenne suunniteltiin johdattamaan kävijää luonnollisesti kohti varausta.",
        ],
      },
    ],
    resultBody: [
      "Uusi sivusto tekee näkyväksi asioita, joita Andinon liiketoiminnassa oli jo valmiiksi: ammattitaito, asiakastyytyväisyys, henkilökohtainen palvelu ja kokemus.",
      "Muutos ei siis ollut vain uusi värimaailma tai modernimpi hero. Sivuston rooli muuttui suppeasta esittelysivusta laajemmaksi asiakaspoluksi, joka rakentaa luottamusta ennen ajanvarausta ja antaa yritykselle enemmän tilaa esitellä palveluitaan.",
    ],
    proof: {
      quote: "Bro you're right. Getting a good deal now from the website.",
      author: "Andino",
      note: "Kun kysyimme tarkoittiko hän liikennettä vai asiakkaita, vastaus oli: “Customers”.",
      extraReview: "Five start service, I recommend 🙏🏾",
    },
    beforeImg: "[CLIENT CASE 01 — BEFORE]",
    afterImg: "[CLIENT CASE 01 — AFTER]",
    beforeSrc: "/assets/cases/andino/andino-before.png",
    afterSrc: "/assets/cases/andino/andino-after.png",
    /* Mobile-shot säilyy datassa — renderöidään myöhemmin pienenä
       overlay/detail-elementtinä, ei omana desktop-elementtinään. */
    mobileImg: "[CLIENT CASE 01 — MOBILE]",
  },
  {
    id: "client-case-02",
    slug: "mikko-tuominen",
    name: "Mikko Tuominen",
    industry: "Hieronta",
    status: "Asiakastyö",
    startingPoint: "Yksisivuinen ja tekstipainotteinen sivusto teki tärkeiden tietojen löytämisestä ja kokonaisuuden nopeasta hahmottamisesta vaikeaa.",
    solution: "Rakensimme monisivuisen premium-kokonaisuuden, jossa selkeä visuaalinen hierarkia, palvelukohtainen sisältö ja ajanvarauspolku tekevät sivustosta helpomman skannata ja käyttää.",
    lead: "Yksisivuisesta ja tekstipainotteisesta sivustosta selkeäksi premium-kokonaisuudeksi, jossa tärkeimmät asiat löytyvät nopeasti.",
    startingPointLong: [
      "Mikon vanha verkkosivusto sisälsi olennaista tietoa, mutta lähes kaikki esitettiin samalla visuaalisella painoarvolla.",
      "Pitkät tekstiosuudet, vähäinen kuvankäyttö ja selkeän hierarkian puute tekivät sivusta raskaan skannata. Ongelma ei siis ollut tiedon täydellinen puuttuminen — ongelma oli siinä, miten tieto oli järjestetty ja esitetty.",
      "Pitkät leipätekstiosuudet näyttivät visuaalisesti lähes samanarvoisilta, minkä vuoksi uuden kävijän oli vaikeampi hahmottaa nopeasti tärkeimpiä asioita ja seuraavaa askelta.",
    ],
    goalIntro: "Mikko oli valmis näkemään Holvan demon ja huomasi siinä selkeän eron nykyiseen sivustoonsa. Uudistuksessa tavoiteltiin erityisesti:",
    goals: [
      "laadukkaampaa ja premiumimpaa ensivaikutelmaa",
      "enemmän ja uudempia kuvia",
      "selkeämpää sisältörakennetta",
      "parempaa pohjaa hakukonenäkyvyydelle",
      "viimeistellympiä teknisiä yksityiskohtia kuten faviconia",
      "mahdollisuutta muokata sisältöä itse",
    ],
    goalNote: "Premiumimpi ilme rakennettiin vastaamaan paremmin itse palvelun laatua ja yrityksen positiointia.",
    solutions: [
      {
        n: "01",
        title: "Yksisivuisesta monisivuiseksi",
        body: [
          "Vanha yhden sivun kokonaisuus korvattiin monisivuisella rakenteella.",
          "Eri aiheille annettiin oma selkeä paikkansa sen sijaan, että kaikki sisältö kilpailisi huomiosta samalla sivulla. Samalla rakenne tarjoaa paremman pohjan sekä laajemmalle sisällölle että hakukoneystävälliselle sivustorakenteelle.",
        ],
      },
      {
        n: "02",
        title: "Tekstimassasta visuaaliseksi hierarkiaksi",
        body: [
          "Suurin muutos ei ollut yksittäisessä herokuvassa. Se oli siinä, miten koko sivuston sisältö järjestettiin.",
          "Pitkät samanarvoiselta näyttävät tekstimassat korvattiin selkeämmin erottuvilla osioilla, otsikkotasoilla, kuvilla, CTA-elementeillä ja sisällöllisellä rytmillä.",
          "Tämän ansiosta sivustoa ei tarvitse lukea lineaarisesti alusta loppuun. Kävijä pystyy skannaamaan tärkeimmät asiat nopeasti ja syventymään niihin kohtiin, jotka ovat hänelle relevantteja.",
        ],
      },
      {
        n: "03",
        title: "Premiumimpi ensivaikutelma",
        body: [
          "Visuaalinen uudistus suunniteltiin tukemaan laadukkaampaa ja elegantimpaa mielikuvaa.",
          "Tarkoituksena ei ollut vain tehdä sivusta näyttävämpi, vaan saada verkkosivuston koettu taso vastaamaan paremmin itse palvelun tasoa. Kuvien suurempi rooli, vahvempi typografinen hierarkia, harkitut värit ja selkeämpi layout tekevät kokonaisuudesta viimeistellymmän.",
        ],
      },
      {
        n: "04",
        title: "Sisältö päätöksenteon tueksi",
        body: [
          "Uusi rakenne antaa selkeän paikan kaikelle olennaiselle:",
        ],
        bullets: [
          "klassinen hieronta",
          "urheiluhieronta",
          "personal training",
          "hinnasto",
          "Mikon esittely",
          "arvostelut",
          "UKK",
          "yhteystiedot",
          "sijainti ja saapumisohjeet",
        ],
      },
      {
        n: "05",
        title: "Ajanvaraus",
        body: [
          "Mikon käytössä oleva Slotti-ajanvaraus integroitiin uuteen sivustoon.",
          "Ajanvaraus ei ole vain irrallinen ulkoinen linkki, vaan sivuston rakenne ja CTA-hierarkia ohjaavat kävijää sitä kohti luonnollisesti.",
        ],
      },
      {
        n: "06",
        title: "Helposti muokattava sivusto",
        body: [
          "Uuteen kokonaisuuteen integroitiin sisällönhallinta. Sen avulla Mikko pystyy päivittämään esimerkiksi hintoja, tekstejä ja kuvia ilman että jokaiseen pieneen muutokseen tarvitaan kehittäjää.",
          "Tämä tekee sivustosta pitkäikäisemmän ja antaa yritykselle enemmän kontrollia omaan sisältöönsä.",
        ],
      },
    ],
    resultBody: [
      "Mikon case näyttää erityisen hyvin, kuinka suuri vaikutus informaation hierarkialla on sivuston kokemiseen.",
      "Vanha sivusto sisälsi paljon tekstiä, mutta tärkeimpien asioiden tunnistaminen vaati kävijältä enemmän työtä. Uudessa kokonaisuudessa:",
    ],
    resultBullets: [
      "tärkein tieto erottuu",
      "palveluihin voi syventyä tarpeen mukaan",
      "luottamusta rakentava sisältö saa oman paikkansa",
      "ajanvaraus löytyy helposti",
      "visuaalinen taso tukee premiumimpaa mielikuvaa",
    ],
    resultNote: "Kävijän päätöksenteosta tehtiin helpompaa.",
    beforeImg: "[CLIENT CASE 02 — BEFORE]",
    afterImg: "[CLIENT CASE 02 — AFTER]",
    beforeSrc: "/assets/cases/mikko/mikko-before.png",
    afterSrc: "/assets/cases/mikko/mikko-after.png",
  },
  {
    id: "client-case-03",
    slug: "me-massage",
    name: "ME Massage",
    industry: "Hieronta ja hyvinvointi",
    status: "Asiakastyö",
    startingPoint: "Nopeasti kasvanut yritys oli ehtinyt kasvaa ulos vain vuotta aiemmin uudistetusta sivustostaan, eikä brändi, kaksi toimipistettä tai laajentunut kokonaisuus enää välittynyt riittävän vahvasti.",
    solution: "Rakensimme kasvua varten monisivuisen kokonaisuuden, jossa toimipisteet, ihmiset, arvostelut, ajanvaraus, verkkokauppa ja uudet sisältöpolut muodostavat yhden selkeän asiakaskokemuksen.",
    lead: "Nopeasti kasvaneen hyvinvointiyrityksen verkkosivusto uudistettiin vastaamaan nykyistä liiketoimintaa ja antamaan tilaa seuraavalle kasvuvaiheelle.",
    startingPointLong: [
      "ME Massagen verkkosivusto oli uudistettu vasta noin vuotta aikaisemmin. Yritys oli kuitenkin kasvanut nopeasti, ja myös verkkosivustolta vaadittiin nyt enemmän.",
      "Kaksi toimipistettä, laajempi palvelukokonaisuus, verkkokauppa, eri kieliversiot ja kasvava yritys tekivät aiemmasta rakenteesta nopeasti liian rajallisen.",
      "Kyse ei ollut siitä, että vanha sivusto olisi ollut täysin toimimaton. Se ei vain enää vastannut yrityksen nykyistä mittakaavaa, brändiä tai sitä suuntaa, johon liiketoimintaa haluttiin viedä.",
    ],
    goalIntro: "Rakentaa digitaalinen kokonaisuus, joka vastaa paremmin sitä, millainen ME Massage todellisuudessa on ja pystyy elämään yrityksen kasvun mukana. Tavoitteita olivat:",
    goals: [
      "tehdä palvelun arvo ymmärrettäväksi heti",
      "välittää turvallisen mutta tehokkaan hoidon identiteetti",
      "tuoda Mathias ja muu tiimi näkyväksi",
      "erottaa Vaasan ja Klaukkalan toimipisteet selkeästi",
      "tehdä ajanvarauksesta helppo",
      "tuoda verkkokauppa ja lahjakortit paremmin näkyville",
      "hyödyntää arvosteluja vahvemmin",
      "tukea kielivalintoja",
      "antaa tilaa uusille palveluille, tekijöille ja toimipisteille",
      "mahdollistaa jatkuvat sisältö- ja sesonkimuutokset",
      "lisätä analytiikka jatkokehityksen tueksi",
    ],
    solutions: [
      {
        n: "01",
        title: "Uusi hero",
        body: [
          "Vanhan sivuston ensimmäinen näkymä ei tehnyt riittävän nopeasti selväksi, mitä yritys tekee ja miksi asiakkaan kannattaa jatkaa.",
          "Uusi hero rakennettiin niin, että kävijä pystyy ymmärtämään nopeasti mitä ME Massage tekee, missä palvelua saa, millaista apua on tarjolla, miksi yritykseen voi luottaa ja mikä seuraava askel on. Arvosteluja hyödynnetään jo aikaisessa vaiheessa luottamuksen rakentamiseen.",
        ],
      },
      {
        n: "02",
        title: "Brändi, joka tuntuu palvelulta",
        body: [
          "Mathiaksen kuvaama palvelun ydin oli: turvallista mutta tehokasta hoitoa.",
          "Sivuston ei siis pitänyt näyttää kylmältä tai kliiniseltä, mutta ei myöskään geneeriseltä rentoutumissivulta. Kokonaisuuteen tuotiin enemmän aitoja kuvia hoitotilanteista, kuvia tiloista, ihmisiä, vahvempaa visuaalista hierarkiaa ja premiumimpaa sommittelua.",
          "Tavoite oli, että kävijä pystyy jo verkossa muodostamaan käsityksen paikasta, ihmisistä ja palvelun tunnelmasta.",
        ],
      },
      {
        n: "03",
        title: "Kaksi toimipistettä, kaksi selkeää polkua",
        body: [
          "Vaasa ja Klaukkala erotettiin selkeästi.",
          "Kävijän pitää pystyä ymmärtämään nopeasti mikä toimipiste on hänelle oikea, mitä siellä tarjotaan, miten sinne pääsee ja miten juuri siihen toimipisteeseen varataan.",
          "Rakenne suunniteltiin myös niin, että tulevia toimipisteitä voidaan lisätä ilman uutta kokonaisuudistusta.",
        ],
      },
      {
        n: "04",
        title: "Ihmiset näkyväksi",
        body: [
          "ME Massagea ei haluttu esittää kasvottomana yrityksenä. Sivustolle rakennettiin henkilöstöä ja yrityksen tekijöitä esittelevää sisältöä.",
          "Hyvinvointipalvelussa asiakas ei valitse vain palvelun nimeä — hän valitsee myös ihmisen, jonka käsiin hän on tulossa. Siksi henkilöiden, kuvien ja osaamisen näkyminen on osa luottamusta.",
        ],
      },
      {
        n: "05",
        title: "Arvostelut",
        body: [
          "Arvostelut tuotiin näkyväksi osaksi asiakaspolkua eikä vain yhdeksi irralliseksi sivuksi.",
          "Tavoite: uusi kävijä näkee jo ennen ajanvarausta konkreettista näyttöä siitä, että muut asiakkaat ovat luottaneet palveluun.",
        ],
      },
      {
        n: "06",
        title: "Verkkokauppa ja lahjakortit",
        body: [
          "Verkkokauppa uudistettiin niin, että tuotteiden löytäminen, selaaminen ja valitseminen on helpompaa. Erityisesti lahjakorttien näkyvyyttä haluttiin parantaa.",
          "Tavoitteena ei kuitenkaan ollut tehdä pääsivusta aggressiivista verkkokauppaa. Verkkokaupan pitää löytyä helposti silloin kun asiakas sitä tarvitsee, mutta muun sivuston päätehtävä säilyy palveluiden ja luottamuksen rakentamisessa.",
        ],
      },
      {
        n: "07",
        title: "Oirekysely",
        body: [
          "Yksi projektin erottuvimmista uusista ratkaisuista oli oirekysely. Sen tarkoitus on auttaa asiakasta jo ennen ajanvarausta tunnistamaan omaa tilannettaan, ymmärtämään paremmin mahdollista avuntarvettaan, löytämään relevanttia tietoa ja hakeutumaan hoitoon informoidummin.",
          "Oirekysely tekee sivustosta muutakin kuin passiivisen esitteen: se pystyy tuottamaan asiakkaalle arvoa jo ennen ensimmäistä käyntiä.",
        ],
      },
      {
        n: "08",
        title: "Elävä sivusto",
        body: [
          "Sivuston tarkoitus ei ole näyttää hyvältä vain julkaisupäivänä.",
          "Rakenteessa huomioitiin sesonkikampanjat, ilmoitukset, uudet tekijät, uudet palvelut, tulevat toimipisteet ja jatkuvat sisältömuutokset. Sivuston pitää pystyä elämään yrityksen mukana.",
        ],
      },
      {
        n: "09",
        title: "Analytiikka",
        body: [
          "Sivustolle lisättiin analytiikka, jotta jatkokehitystä voidaan tehdä käyttäjädatasta saatavan tiedon avulla eikä pelkästään arvailun varassa.",
        ],
      },
    ],
    resultBody: [
      "ME Massage -projektin merkittävin muutos ei ole yksittäinen hero tai väripaletti. Verkkosivuston rooli yrityksessä muuttui.",
      "Uusi kokonaisuus suunniteltiin yritykselle, jolla on kaksi toimipistettä, kasvava kokonaisuus, verkkokauppa, useita kieliä, laaja palveluvalikoima, tarve päivittää sisältöä jatkuvasti ja mahdollisuus kasvaa myös tulevaisuudessa.",
    ],
    resultNote: "ME Massage näyttää, miten verkkosivusto voidaan rakentaa nykyhetken lisäksi seuraavaa kasvuvaihetta varten — niin, että toimipisteet, tekijät, verkkokauppa, sisältö ja asiakaspolku voivat kehittyä ilman että koko digitaalinen kokonaisuus täytyy rakentaa aina uudelleen.",
    beforeImg: "[CLIENT CASE 03 — BEFORE]",
    afterImg: "[CLIENT CASE 03 — AFTER]",
    beforeSrc: "/assets/cases/mathias/mathias-before.png",
    afterSrc: "/assets/cases/mathias/mathias-after.png",
  },
];

/* ── Konseptidemot (10 kpl, spec §4, §20.5) ──
   Visual-first-rakenne: kortin pääelementti on hero-kuva.
   Kuvat: public/assets/concepts/concept-demo-01…10.png
   (lähteet: public/assets/hero-snapshots/). */

export interface ConceptDemo {
  id: string;
  status: "Konseptidemo";
  /** Hero-kuvan polku (public/) — kun asetettu, kortti renderöi kuvan placeholderin sijaan */
  imageSrc?: string;
  /** Kuvan alt-teksti — täytetään kuvan mukana */
  imageAlt?: string;
}

export const conceptDemos: ConceptDemo[] = Array.from({ length: 10 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    id: `concept-demo-${n}`,
    status: "Konseptidemo" as const,
    imageSrc: `/assets/concepts/concept-demo-${n}.png`,
    imageAlt: `Holvan konseptidemo ${i + 1} – verkkosivuston hero-näkymä`,
  };
});

/* ── Google-arvostelut (8 aitoa olemassa, sisältöä EI keksitä — spec §27) ── */

export interface ReviewPlaceholder {
  id: string;
  name: string;
  source: "Google-arvostelu";
  /** Aidon arvostelun teksti */
  text?: string;
  /** Tähtiarvosana asteikolla 1–5 (vain varmennetut) */
  rating?: number;
}

export const reviewPlaceholders: ReviewPlaceholder[] = [
  {
    id: "review-01",
    name: "Eero Kinnunen",
    source: "Google-arvostelu",
    text: "Sivut toimii ja asiakkaat on jo tullu kehumaan niitä meille. Kiitos onnistuneesta lopputuloksesta ja kivasta yhteistyöstä.",
    rating: 5,
  },
  {
    id: "review-02",
    name: "Casimir Hakulinen",
    source: "Google-arvostelu",
    text: "Loistavaa ajattelua nuorella herralla. Ei tehnyt pelkkiä sivuja vaan anto oikeesti hyviä neuvoja brändin kasvattamiselle. Kiitos!",
    rating: 5,
  },
  {
    id: "review-03",
    name: "S K",
    source: "Google-arvostelu",
    text: "Todella hyvä kokemus! Nettisivuista tuli juuri sellaiset kuin halusin ja kommunikointi oli helppoa koko projektin ajan.",
    rating: 5,
  },
];

export const featuredReview: ReviewPlaceholder = {
  id: "review-featured",
  name: "Sini Oksanen",
  source: "Google-arvostelu",
  text: "Kuunteli mun omia ajatuksia myös ja sivuista tuli just sen näköset kun oltiin kuviteltu. Kiitos erittäin paljon Holva Toimisto! :)",
  /* Tähtimäärää ei ole varmennettu tälle arvostelulle → rating jätetty asettamatta tarkoituksella */
};

/* ── FAQ:t ── */

export const homeFAQ = [
  {
    q: "Maksaako demo jotain?",
    a: "Ei. Demo on maksuton, eikä sen pyytäminen sido teitä verkkosivuprojektiin.",
  },
  {
    q: "Sitooko demo meitä mihinkään?",
    a: "Ei. Demon tarkoitus on näyttää konkreettisesti, millaisen suunnan näkisimme yrityksenne sivustolle. Päätätte vasta demotapaamisen jälkeen, haluatteko jatkaa kanssamme.",
  },
  {
    q: "Mitä tarvitsette meiltä demon tekemiseen?",
    a: "Aluksi riittää muutama perustieto yrityksestänne ja nykyinen verkkosivustonne, jos sellainen on. Tarvittaessa kysymme ennen demon rakentamista muutaman tarkentavan kysymyksen.",
  },
  {
    q: "Mitä demotapaamisessa tapahtuu?",
    a: "Käymme demon kanssanne läpi Teamsissa, avaamme suunnitteluratkaisut ja keskustelemme siitä, mitä verkkosivuston pitäisi yrityksellenne tehdä. Tapaaminen kestää yleensä noin 30–45 minuuttia.",
  },
  {
    q: "Mitä tapahtuu, jos haluamme jatkaa?",
    a: "Sovimme projektin laajuuden, viimeistelemme sisällöt ja toiminnallisuudet sekä viemme hyväksytyn suunnan valmiiksi julkaistavaksi verkkosivustoksi.",
  },
  {
    q: "Voitteko käyttää nykyistä domainiamme, ajanvarausta tai muita järjestelmiämme?",
    a: "Useimmissa tapauksissa kyllä. Nykyinen domain, ajanvarausjärjestelmä ja muut olennaiset palvelut voidaan yleensä liittää osaksi uutta sivustoa. Tarkistamme tarvittavat integraatiot projektikohtaisesti.",
  },
];

export const processFAQ = [
  {
    q: "Maksaako demo jotain?",
    a: "Ei. Demo on maksuton, eikä sen pyytäminen sido teitä verkkosivuprojektiin.",
  },
  {
    q: "Kuinka kauan demon rakentaminen kestää?",
    a: "Tyypillisesti noin 3 päivää siitä, kun olemme saaneet perustiedot yrityksestänne.",
  },
  {
    q: "Mitä demotapaamisessa tapahtuu?",
    a: "Käymme demon kanssanne läpi Teamsissa, avaamme suunnitteluratkaisut ja keskustelemme siitä, mitä verkkosivuston pitäisi yrityksellenne tehdä. Tapaaminen kestää yleensä noin 30–45 minuuttia.",
  },
  {
    q: "Mitä tapahtuu, jos emme halua jatkaa demon jälkeen?",
    a: "Siihen voidaan jättää. Demo ei sido teitä mihinkään — päätätte jatkosta vasta nähtyänne suunnan.",
  },
  {
    q: "Mitä tarvitsette meiltä prosessin aikana?",
    a: "Perustiedot yrityksestänne, pääsyn olennaiseen materiaaliin ja palautteen sovituissa kohdissa. Ette tarvitse valmista sivukarttaa, design-suunnitelmaa tai teknistä briiffiä ennen yhteydenottoa.",
  },
];

export const kasvupakettiFAQ = [
  {
    q: "Onko aloitusmaksua?",
    a: "Ei. Kasvupaketissa ei ole erillistä aloitusmaksua. Palvelun hinta on 99 €/kk.",
  },
  /* "Sitoudummeko pitkään sopimukseen?" poistettu launch-versiosta —
     irtisanomisehto lisätään kun omistaja vahvistaa sen. */
  {
    q: "Voimmeko pitää nykyisen ajanvarausjärjestelmän?",
    a: "Useimmissa tapauksissa kyllä. Sivusto voidaan yleensä yhdistää nykyiseen ajanvarauspalveluun tai ohjata asiakas suoraan siihen.",
  },
  {
    q: "Voimmeko päivittää sivustoa itse?",
    a: "Kyllä, sovittuja sisältöjä voidaan päivittää helpon sisällönhallinnan kautta ilman koodia.",
  },
  {
    q: "Mitä jos tarvitsemme jotain, mitä pakettiin ei kuulu?",
    a: "Arvioimme sen erikseen ja kerromme mahdollisesta lisähinnasta ennen työn tekemistä.",
  },
  {
    q: "Maksaako demo jotain?",
    a: "Ei. Demo on maksuton eikä sido teitä palveluun.",
  },
];

/* ── Tiimi ──
   Henkilökuvat (avatarit): public/assets/avatar-felix.svg,
   public/assets/avatar-leo.svg. Neliömäiset SVG-avatarit
   renderöidään object-containilla — ei croppausta. */

export const teamMembers = [
  {
    id: "team-sales",
    img: "",
    /** Henkilökuvan polku (public/), esim. /assets/team/felix-saarela.jpg */
    imgSrc: "/assets/avatar-felix.svg",
    name: "Felix Saarela",
    role: "Myynti & asiakkuudet",
    bio: "Felix vastaa asiakasyhteistyöstä, tarpeiden kartoittamisesta ja siitä, että projektin tavoitteet pysyvät selkeinä alusta loppuun. Hänen tehtävänsä on ymmärtää, mitä yrityksenne tarvitsee ja varmistaa, että ratkaisu rakennetaan sen ympärille.",
  },
  {
    id: "team-design",
    img: "",
    /** Henkilökuvan polku (public/), esim. /assets/team/leo-hartikainen.jpg */
    imgSrc: "/assets/avatar-leo.svg",
    name: "Leo Hartikainen",
    role: "Suunnittelu & toteutus",
    bio: "Leo vastaa sivustojen rakenteesta, visuaalisesta suunnittelusta ja teknisestä toteutuksesta. Hän yhdistää yrityksen brändin, asiakkaan näkökulman ja toimivan käyttökokemuksen yhdeksi selkeäksi kokonaisuudeksi.",
  },
];
