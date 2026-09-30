import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Section from "@/components/v2/Section";
import SectionHeader from "@/components/v2/SectionHeader";
import Eyebrow from "@/components/v2/Eyebrow";
import Button from "@/components/v2/Button";
import Reveal from "@/components/v2/Reveal";
import ContactForm from "@/components/v2/ContactForm";
import { useModal } from "@/context/ModalContext";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";

/* ============================================================
   /OTA-YHTEYTTA (spec §23)
   ============================================================ */

export default function Contact() {
  return (
    <>
      <SEO
        title="Ota yhteyttä"
        description="Keskustellaan yrityksenne verkkosivustosta. Pyytäkää maksuton demo tai lähettäkää meille viesti."
        canonical="/ota-yhteytta"
      />

      {/* 1. HERO (§23.1) */}
      <Section spacing="md" container="standard" ariaLabelledby="contact-hero">
        <div style={{ maxWidth: "760px" }}>
          <Eyebrow>Ota yhteyttä</Eyebrow>
          <h1 id="contact-hero" className="t-page mt-5">
            Keskustellaan yrityksenne verkkosivustosta.
          </h1>
          <p className="t-lead mt-6" style={{ color: "var(--body)" }}>
            Jos haluatte nähdä, mitä tekisimme yrityksellenne, nopein tapa on pyytää demo. Muissa verkkosivuihin,
            yhteistyöhön tai projektiin liittyvissä asioissa voitte ottaa meihin yhteyttä tällä sivulla.
          </p>
        </div>
      </Section>

      <ContactChoice />

      {/* 3. CONTACT DETAILS + FORM (§23.3) */}
      <Section spacing="md" container="standard" ariaLabelledby="contact-details-heading">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Yhteystiedot */}
          <div>
            <h2 id="contact-details-heading" className="t-h2" style={{ fontSize: "clamp(26px, 2.6vw, 32px)" }}>
              Yhteystiedot
            </h2>
            <ul className="mt-8 flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-[8px]"
                  style={{ border: "1px solid var(--line)", color: "var(--navy)" }}
                >
                  <Mail size={18} />
                </span>
                <a
                  href="mailto:hei@holvatoimisto.fi"
                  className="t-body font-medium underline-offset-4 hover:underline"
                  style={{ color: "var(--navy)" }}
                >
                  hei@holvatoimisto.fi
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-[8px]"
                  style={{ border: "1px solid var(--line)", color: "var(--navy)" }}
                >
                  <MapPin size={18} />
                </span>
                <span className="t-body" style={{ color: "var(--body)" }}>
                  Helsinki, Suomi
                </span>
              </li>
            </ul>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.instagram.com/holvatoimisto/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Holva Toimisto Instagramissa"
                className="flex h-11 w-11 items-center justify-center rounded-[8px] icon-link-light"
                
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/holva-toimisto-545961400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Holva Toimisto LinkedInissä"
                className="flex h-11 w-11 items-center justify-center rounded-[8px] icon-link-light"
                
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Lomake */}
          <ContactForm />
        </div>
      </Section>

      {/* 4. NEXT STEPS (§23.4) */}
      <Section surface="alt" spacing="sm" ariaLabelledby="next-steps-heading">
        <SectionHeader id="next-steps-heading" eyebrow="Seuraavaksi" title="Mitä yhteydenoton jälkeen tapahtuu?" />
        <ul className="mt-10 grid grid-cols-1 gap-x-10 md:grid-cols-3">
          {["Luemme viestinne", "Otamme yhteyttä", "Sovitaan seuraava askel"].map((t) => (
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
      </Section>

      {/* 6. FOOTER */}
      <Footer />
    </>
  );
}

/* ── 2. CONTACT CHOICE (§23.2) ── */
function ContactChoice() {
  const { openModal } = useModal();
  return (
    <Section surface="alt" spacing="md" container="standard" ariaLabelledby="choice-heading">
      <SectionHeader id="choice-heading" eyebrow="Valitkaa sopiva tapa" title="Demo vai muu yhteydenotto?" />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Card 1: demo */}
        <Reveal
          className="flex flex-col rounded-[12px] border bg-white"
          style={{ borderColor: "var(--line)", boxShadow: "var(--shadow-card)", padding: "clamp(24px, 3vw, 40px)" }}
        >
          <p className="t-eyebrow" style={{ color: "var(--muted)" }}>
            Haluatteko nähdä suunnan ensin?
          </p>
          <h3 className="t-h3 mt-4" style={{ fontSize: "22px" }}>
            Pyydä demo
          </h3>
          <p className="t-body mt-3 flex-1" style={{ color: "var(--body)" }}>
            Kerrotte meille lyhyesti yrityksestänne. Rakennamme ensimmäisen suunnan ja käymme sen kanssanne läpi
            Teams-tapaamisessa ennen kuin päätätte jatkosta.
          </p>
          <div className="mt-7">
            <Button variant="primary" onClick={() => openModal("ota_yhteytta_choice")} blockOnMobile>
              Pyydä demo
            </Button>
            <p className="t-meta mt-3" style={{ color: "var(--muted)" }}>
              Maksuton demo. Ei sitoutumista.
            </p>
          </div>
        </Reveal>

        {/* Card 2: viesti */}
        <Reveal
          delay={80}
          className="flex flex-col rounded-[12px] border bg-white"
          style={{ borderColor: "var(--line)", padding: "clamp(24px, 3vw, 40px)" }}
        >
          <p className="t-eyebrow" style={{ color: "var(--muted)" }}>
            Onko asianne jotain muuta?
          </p>
          <h3 className="t-h3 mt-4" style={{ fontSize: "22px" }}>
            Lähettäkää viesti
          </h3>
          <p className="t-body mt-3 flex-1" style={{ color: "var(--body)" }}>
            Jos haluatte keskustella projektista, yhteistyöstä tai jostain muusta verkkosivuihin liittyvästä
            asiasta, voitte lähettää meille viestin suoraan tällä sivulla.
          </p>
          <div className="mt-7">
            <Button variant="secondary" href="#yhteydenottolomake" blockOnMobile>
              Siirry yhteydenottolomakkeeseen
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ── Demo-painotus on ContactChoice-kortissa — erillistä navy-calloutia ei toisteta ── */
