import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Section from "@/components/v2/Section";
import Eyebrow from "@/components/v2/Eyebrow";
import Button from "@/components/v2/Button";
import { useModal } from "@/context/ModalContext";

/** 404 (spec §33) */
export default function NotFound() {
  const { openModal } = useModal();
  return (
    <>
      <SEO title="Sivua ei löytynyt" description="Etsimäänne sivua ei löytynyt." noindex />
      <Section spacing="lg" container="text" ariaLabelledby="notfound-heading">
        <div className="text-center">
          <Eyebrow className="justify-center">404</Eyebrow>
          <h1 id="notfound-heading" className="t-page mt-5">
            Sivua ei löytynyt.
          </h1>
          <p className="t-lead mx-auto mt-6 max-w-[520px]" style={{ color: "var(--body)" }}>
            Etsimäänne sivua ei ole olemassa tai se on siirretty. Palatkaa etusivulle tai pyytäkää demo suoraan.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" to="/" blockOnMobile>
              Etusivulle
            </Button>
            <Button variant="secondary" onClick={() => openModal("404")} blockOnMobile>
              Pyydä demo
            </Button>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
