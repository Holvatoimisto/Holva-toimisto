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
        backgroundColor: "var(--background-emphasis)",
        padding: "80px 48px 40px",
      }}
    >
      {/* Subtle top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(185, 183, 177, 0.34) 50%, transparent 100%)",
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
            className="mt-5 text-[15px] leading-[1.5]"
            style={{ color: "var(--text-inverse-secondary)" }}
          >
            &copy; 2026 Holva Toimisto. Kaikki oikeudet pidätetään.
          </p>
        </div>

        {/* Center - Nav */}
        <div className="flex flex-col gap-3">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="editorial-focus text-[15px] leading-[1.5] transition-colors duration-200 hover:text-white hover:underline"
              style={{ color: "var(--text-inverse-secondary)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right - Contact */}
        <div>
          <a
            href="mailto:hei@holvatoimisto.fi"
            className="editorial-focus text-[15px] leading-[1.5] transition-colors duration-200 hover:underline"
            style={{ color: "var(--text-inverse)" }}
          >
            hei@holvatoimisto.fi
          </a>
          <p className="mt-2 text-[15px] leading-[1.5]" style={{ color: "var(--text-inverse-secondary)" }}>
            Helsinki, Suomi
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/holva-toimisto-545961400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="editorial-focus transition-colors duration-200 hover:text-white"
              style={{ color: "var(--text-inverse-secondary)" }}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/holvatoimisto/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="editorial-focus transition-colors duration-200 hover:text-white"
              style={{ color: "var(--text-inverse-secondary)" }}
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
