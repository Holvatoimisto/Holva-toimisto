import { useEffect, useRef, useState } from "react";
import { Lock } from "lucide-react";

/**
 * HeroSitePreview — etusivun heron oikean puolen "elävä" case-preview.
 *
 * Näyttää oikean julkaistun asiakassivuston (Mikko Tuominen,
 * mikko-mikko-tuominen.vercel.app) selainkehyksessä. Sivusto ei
 * rajoita iframe-upotusta (ei X-Frame-Options / frame-ancestors
 * -headeria), joten käytetään oikeaa live-embedia. Browser-chromen
 * näkyvä domain-label on tarkoituksellisesti mikkotuominen.fi.
 *
 * Skaalauslogiikka: iframe renderöidään aina virtuaalisessa
 * 1600 × 900 desktop-viewportissa (16/9) ja skaalataan
 * uniformisti (sama kerroin molempiin akseleihin) kehyksen
 * saatavilla olevaan leveyteen: scale = previewWidth / 1600.
 * Sivusto renderöityy siis aina oikeana desktop-layoutina
 * ilman stretchiä tai horisontaalista croppausta.
 *
 * Desktopissa sivua voi scrollata kehyksen sisällä (iframe:n
 * natiivi scrolli). Mobiilissa (alle lg) interaktio on kytketty
 * pois (pointer-events-none), jotta nested scroll ei riko
 * sivun skrollausta — preview toimii siellä livenä "näyttönä".
 */
const VIRTUAL_WIDTH = 1600;
const VIRTUAL_HEIGHT = 900;

export default function HeroSitePreview() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / VIRTUAL_WIDTH);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative min-w-0">
      {/* Kehys: matala selain-chrome + 16/10 viewport */}
      <div
        className="overflow-hidden rounded-[14px]"
        style={{
          border: "1px solid rgba(255,255,255,0.14)",
          backgroundColor: "#0d2136",
          boxShadow: "0 32px 80px -24px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset",
        }}
      >
        {/* Chrome bar — mahdollisimman matala */}
        <div
          className="flex items-center gap-3 px-3.5 py-2"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}
        >
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.18)" }} />
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.18)" }} />
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.18)" }} />
          </span>
          <span
            className="flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-0.5 text-[10px] font-medium tracking-wide"
            style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.75)" }}
          >
            <Lock size={9} aria-hidden="true" />
            <span className="truncate">mikkotuominen.fi</span>
          </span>
          <span className="w-[46px]" aria-hidden="true" />
        </div>

        {/* Viewport — virtuaali 1440×900, uniformisti skaalattuna */}
        <div
          ref={viewportRef}
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16 / 9", backgroundColor: "#fff" }}
        >
          <iframe
            src="https://mikko-mikko-tuominen.vercel.app/"
            title="Asiakastyö: Mikko Tuominen — julkaistu verkkosivusto"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="pointer-events-none lg:pointer-events-auto"
            style={{
              width: `${VIRTUAL_WIDTH}px`,
              height: `${VIRTUAL_HEIGHT}px`,
              border: 0,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          />
          {/* Hillitty scroll-vihje, vain desktop (mobiilissa ei interaktiota) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-3 bottom-3 hidden rounded-full px-2.5 py-1 text-[10px] font-medium tracking-wide lg:block"
            style={{ backgroundColor: "rgba(9,21,37,0.72)", color: "rgba(255,255,255,0.85)" }}
          >
            Selaa sivustoa ↓
          </span>
        </div>
      </div>
    </div>
  );
}
