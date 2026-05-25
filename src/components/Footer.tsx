import { Link } from "react-router";
import { Linkedin, Instagram } from "lucide-react";

const footerLinks = [
  { label: "Etusivu", path: "/" },
  { label: "Meistä", path: "/meista" },
  { label: "Case-esimerkit", path: "/case-esimerkit" },
  { label: "Prosessi", path: "/prosessi" },
  { label: "Ota yhteyttä", path: "/ota-yhteytta" },
];

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        backgroundColor: "rgba(13, 6, 48, 0.95)",
        padding: "80px 48px 40px",
      }}
    >
      {/* Subtle top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(200, 172, 75, 0.12) 50%, transparent 100%)",
        }}
      />

      <div
        className="mx-auto grid gap-12 md:grid-cols-3"
        style={{ maxWidth: "1200px" }}
      >
        {/* Left - Logo */}
        <div>
          <div className="flex items-center">
            <img
              src="/holva-logo-transparent.png"
              alt="Holva Toimisto"
              className="h-9 w-auto"
            />
          </div>
          <p
            className="mt-5 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            &copy; 2025 Holva Toimisto. Kaikki oikeudet pidätetään.
          </p>
        </div>

        {/* Center - Nav */}
        <div className="flex flex-col gap-3">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm transition-colors duration-200 hover:text-[var(--accent-gold)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right - Contact */}
        <div>
          <a
            href="mailto:hei@holvatoimisto.fi"
            className="text-sm transition-colors duration-200 hover:underline"
            style={{ color: "var(--accent-teal)" }}
          >
            hei@holvatoimisto.fi
          </a>
          <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
            Helsinki, Suomi
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/holva-toimisto-545961400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "var(--text-muted)" }}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/holvatoimisto/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "var(--text-muted)" }}
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
