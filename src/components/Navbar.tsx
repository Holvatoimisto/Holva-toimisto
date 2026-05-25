import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useModal } from "@/context/ModalContext";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Etusivu", path: "/" },
  { label: "Meistä", path: "/meista" },
  { label: "Case-esimerkit", path: "/case-esimerkit" },
  { label: "Prosessi", path: "/prosessi" },
  { label: "Ota yhteyttä", path: "/ota-yhteytta" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const { openModal } = useModal();

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: "var(--nav-height)",
          backgroundColor: scrolled
            ? "rgba(13, 6, 48, 0.92)"
            : "rgba(13, 6, 48, 0.75)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex h-full items-center justify-between px-6 lg:px-12" style={{ maxWidth: "var(--content-max)" }}>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/holva-logo-transparent.png"
              alt="Holva Toimisto"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-sm font-medium tracking-wide transition-colors duration-200 hover:text-white"
                style={{
                  color:
                    location.pathname === link.path
                      ? "var(--accent-gold)"
                      : "var(--text-secondary)",
                }}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ backgroundColor: "var(--accent-gold)" }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA — outline style, matches funnel language */}
          <button
            onClick={openModal}
            className="hidden md:block text-xs font-medium tracking-wider transition-all duration-300"
            style={{
              backgroundColor: "transparent",
              color: "var(--accent-gold)",
              padding: "7px 15px",
              borderRadius: "10px",
              letterSpacing: "0.05em",
              border: "1.5px solid rgba(200, 172, 75, 0.5)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(200, 172, 75, 0.1)";
              e.currentTarget.style.borderColor = "rgba(200, 172, 75, 0.8)";
              e.currentTarget.style.boxShadow =
                "0 0 16px rgba(200, 172, 75, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "rgba(200, 172, 75, 0.5)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Pyydä demo
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="absolute right-0 top-0 h-full w-72 p-6 pt-20"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-medium transition-colors duration-200"
                  style={{
                    color:
                      location.pathname === link.path
                        ? "var(--accent-gold)"
                        : "var(--text-secondary)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setTimeout(openModal, 300);
                }}
                className="mt-4 w-full text-sm font-medium tracking-wider"
                style={{
                  backgroundColor: "var(--accent-gold)",
                  color: "var(--bg-secondary)",
                  padding: "14px 22px",
                  borderRadius: "10px",
                  letterSpacing: "0.03em",
                }}
              >
                Pyydä demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
