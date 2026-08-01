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
            ? "rgba(51, 46, 37, 0.98)"
            : "var(--background-emphasis)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(185, 183, 177, 0.24)"
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
                className="editorial-focus relative text-[15px] font-medium transition-colors duration-200 hover:text-white"
                style={{
                  color:
                    location.pathname === link.path
                      ? "var(--text-inverse)"
                      : "var(--text-inverse-secondary)",
                }}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ backgroundColor: "var(--accent-primary)" }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA — outline style, matches funnel language */}
          <button
            onClick={openModal}
            className="editorial-button editorial-button-secondary-dark hidden rounded-[10px] px-5 py-2.5 transition-all duration-300 md:inline-flex"
            style={{
              boxShadow: "none",
            }}
          >
            Pyydä demo
          </button>

          {/* Mobile Hamburger */}
          <button
            className="editorial-focus text-white md:hidden"
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
            className="absolute inset-0 backdrop-blur-sm"
            style={{ backgroundColor: "rgba(51, 46, 37, 0.48)" }}
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="absolute right-0 top-0 h-full w-72 p-6 pt-20"
            style={{ backgroundColor: "var(--background-emphasis)" }}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="editorial-focus text-lg font-medium transition-colors duration-200"
                  style={{
                    color:
                      location.pathname === link.path
                        ? "var(--text-inverse)"
                        : "var(--text-inverse-secondary)",
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
                className="editorial-button editorial-button-secondary-dark mt-4 w-full rounded-[10px] px-[22px] py-[14px]"
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
