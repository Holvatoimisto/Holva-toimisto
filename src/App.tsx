import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { ModalProvider } from "./context/ModalContext";
import Navbar from "./components/Navbar";
import DemoModal from "./components/v2/DemoModal";
import Home from "./pages/Home";
import Palvelut from "./pages/Palvelut";
import CaseEsimerkit from "./pages/CaseEsimerkit";
import Prosessi from "./pages/Prosessi";
import Meista from "./pages/Meista";
import Contact from "./pages/Contact";
import Kasvupaketti from "./pages/Kasvupaketti";
import Tietosuojaseloste from "./pages/Tietosuojaseloste";
import NotFound from "./pages/NotFound";

/**
 * Route-vaihtojen scroll-käytös.
 * - Ilman hashia: scrollaa aina sivun alkuun.
 * - Hashin kanssa (esim. /case-esimerkit#andino): scrollaa kohde-
 *   elementtiin route mountin jälkeen, sticky navbar -offsetin kanssa.
 *   prefers-reduced-motion → ei smooth scrollingia.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navOffset = () => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue("--nav-height");
      const parsed = parseFloat(raw);
      return (Number.isFinite(parsed) ? parsed : 72) + 16;
    };
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (!el) {
        /* Route-mount/kuva-delay: yritetään muutamaan kertaan ennen luovutusta */
        if (attempts++ < 10) window.setTimeout(tryScroll, 50);
        return;
      }
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset();
      window.scrollTo({ top: Math.max(0, top), behavior: reduced ? "instant" : "smooth" } as ScrollToOptions);
    };
    /* Odotetaan frame, jotta uusi route on ehtinyt renderöityä */
    const raf = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <ModalProvider>
        <div className="min-h-[100dvh] bg-white">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[200] focus:rounded-[8px] focus:bg-white focus:px-4 focus:py-3 focus:text-[15px] focus:font-semibold focus:text-navy"
          >
            Siirry sisältöön
          </a>
          <ScrollToTop />
          <Navbar />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/palvelut" element={<Palvelut />} />
              <Route path="/case-esimerkit" element={<CaseEsimerkit />} />
              <Route path="/prosessi" element={<Prosessi />} />
              <Route path="/meista" element={<Meista />} />
              <Route path="/ota-yhteytta" element={<Contact />} />
              <Route path="/kasvupaketti" element={<Kasvupaketti />} />
              <Route path="/tietosuojaseloste" element={<Tietosuojaseloste />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <DemoModal />
        </div>
      </ModalProvider>
    </HelmetProvider>
  );
}
