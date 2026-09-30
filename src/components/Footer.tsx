import { Link } from "react-router";
import { Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { label: "Työt", path: "/case-esimerkit" },
  { label: "Palvelut", path: "/palvelut" },
  { label: "Kasvupaketti", path: "/kasvupaketti" },
  { label: "Prosessi", path: "/prosessi" },
  { label: "Meistä", path: "/meista" },
  { label: "Ota yhteyttä", path: "/ota-yhteytta" },
];

/** V2 footer (spec §16): navy, BRAND / NAV / CONTACT, dynaaminen vuosi. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-navy" style={{ borderTop: "1px solid rgba(200,172,75,0.18)" }}>
      <div className="container-v2 container-standard mx-auto grid gap-12 py-16 md:grid-cols-3 md:py-20">
        {/* BRAND */}
        <div>
          <Link to="/" aria-label="Holva Toimisto — etusivu">
            <img src="/holva-logo-transparent.png" alt="Holva Toimisto" className="h-8 w-auto" width="192" height="80" />
          </Link>
          <p className="t-small mt-5 max-w-[280px]" style={{ color: "var(--on-dark-muted)" }}>
            Premium-verkkosivut palveluyrityksille, joissa luottamus ratkaisee ennen yhteydenottoa.
          </p>
        </div>

        {/* NAV */}
        <nav aria-label="Alavalikko" className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="t-small w-fit footer-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CONTACT */}
        <div className="flex flex-col gap-3">
          <a
            href="mailto:hei@holvatoimisto.fi"
            className="t-small w-fit underline-offset-4 hover:underline"
            style={{ color: "var(--gold)" }}
          >
            hei@holvatoimisto.fi
          </a>
          <p className="t-small" style={{ color: "var(--on-dark-muted)" }}>
            Helsinki, Suomi
          </p>
          <div className="mt-3 flex items-center gap-3">
            <a
              href="https://www.instagram.com/holvatoimisto/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Holva Toimisto Instagramissa"
              className="flex h-11 w-11 items-center justify-center rounded-[8px] icon-link"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/holva-toimisto-545961400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Holva Toimisto LinkedInissä"
              className="flex h-11 w-11 items-center justify-center rounded-[8px] icon-link"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div style={{ borderTop: "1px solid var(--line-dark)" }}>
        <div className="container-v2 container-standard mx-auto flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-meta" style={{ color: "var(--on-dark-muted)" }}>
            &copy; {year} Holva Toimisto. Kaikki oikeudet pidätetään.
          </p>
          <Link to="/tietosuojaseloste" className="t-meta w-fit footer-link-muted">
            Tietosuojaseloste
          </Link>
        </div>
      </div>
    </footer>
  );
}
