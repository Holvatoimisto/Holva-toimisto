import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const navLinks = [
  { label: "Työt", path: "/case-esimerkit" },
  { label: "Palvelut", path: "/palvelut" },
  { label: "Prosessi", path: "/prosessi" },
  { label: "Meistä", path: "/meista" },
  { label: "Ota yhteyttä", path: "/ota-yhteytta" },
];

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** V2 global nav (spec §15): navy, sticky, active route + gold detail. */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useModal();
  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  /* Sulje drawer route-vaihdossa */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* Drawer: ESC, focus trap, scroll lock, focus restore */
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const drawer = drawerRef.current;
    const focusables = drawer
      ? Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null)
      : [];
    focusables[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        burgerRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 right-0 left-0 z-50"
        style={{
          height: "var(--nav-height)",
          backgroundColor: "var(--navy)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container-v2 container-wide mx-auto flex h-full items-center justify-between">
          {/* Logo */}
          <Link to="/" aria-label="Holva Toimisto — etusivu" className="flex items-center">
            <img src="/holva-logo-transparent.png" alt="Holva Toimisto" className="h-7 w-auto" width="168" height="70" />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Päävalikko" className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="relative py-2 text-[15px] font-medium transition-colors duration-200"
                style={({ isActive }) => ({ color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.72)" })}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute right-0 -bottom-0.5 left-0 h-[2px]"
                        style={{ backgroundColor: "var(--gold)" }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <button
              onClick={() => openModal("navbar_desktop")}
              className="btn btn-primary-on-dark"
              style={{ minHeight: "44px", padding: "0 20px", fontSize: "15px" }}
            >
              Pyydä demo
            </button>
          </nav>

          {/* Mobile burger */}
          <button
            ref={burgerRef}
            className="flex h-11 w-11 items-center justify-center rounded-[8px] text-white md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Sulje valikko" : "Avaa valikko"}
          >
            {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(15,36,56,0.5)" }}
            onClick={() => {
              setMobileOpen(false);
              burgerRef.current?.focus();
            }}
          />
          <div
            id="mobile-nav"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobiilivalikko"
            className="absolute top-0 right-0 flex h-full w-[300px] flex-col px-7 pt-24 pb-8"
            style={{ backgroundColor: "var(--navy)" }}
          >
            <button
              onClick={() => {
                setMobileOpen(false);
                burgerRef.current?.focus();
              }}
              aria-label="Sulje valikko"
              className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-[8px] text-white"
            >
              <X size={24} aria-hidden="true" />
            </button>
            <nav aria-label="Mobiilivalikko" className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="rounded-[8px] px-3 py-3.5 text-[19px] font-medium"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--gold)" : "rgba(255,255,255,0.85)",
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-5">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openModal("navbar_mobile");
                }}
                className="btn btn-primary-on-dark w-full"
              >
                Pyydä demo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer fixed-navin alle */}
      <div aria-hidden="true" style={{ height: "var(--nav-height)" }} />
    </>
  );
}
