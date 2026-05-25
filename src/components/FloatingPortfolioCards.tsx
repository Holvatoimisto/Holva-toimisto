import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface Card {
  image: string;
  alt: string;
  x: number;
  y: number;
  width: number;
  rotation: number;
  zIndex: number;
  floatY: number;
  floatDuration: number;
  floatDelay: number;
  featured?: boolean;
  ambient?: boolean;
}

const cards: Card[] = [
  {
    image: "/backroom-hero.png",
    alt: "The Back Room — featured case",
    x: 680,
    y: 120,
    width: 314,
    rotation: -2,
    zIndex: 4,
    floatY: -8,
    floatDuration: 4.5,
    floatDelay: 0,
    featured: true,
  },
  {
    image: "/utriainen.png",
    alt: "Hieronta & hyvinvointi",
    x: 990,
    y: 260,
    width: 215,
    rotation: 4,
    zIndex: 3,
    floatY: -10,
    floatDuration: 5.2,
    floatDelay: 0.6,
  },
  {
    image: "/case-massage-after.jpg",
    alt: "Hieronta Salo",
    x: 630,
    y: 330,
    width: 193,
    rotation: -3,
    zIndex: 2,
    floatY: -7,
    floatDuration: 4.8,
    floatDelay: 1.2,
  },
  {
    image: "/fysiokulma.png",
    alt: "Fysioterapia & kuntoutus",
    x: 950,
    y: 400,
    width: 165,
    rotation: 5,
    zIndex: 1,
    floatY: -9,
    floatDuration: 5.8,
    floatDelay: 1.8,
    ambient: true,
  },
];

export default function FloatingPortfolioCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const floatTweens = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const card = cards[i];
      const tween = gsap.to(el, {
        y: card.floatY,
        duration: card.floatDuration / 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: card.floatDelay,
      });
      floatTweens.current[i] = tween;
    });

    return () => {
      floatTweens.current.forEach((t) => t?.kill());
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 hidden xl:block"
      style={{ perspective: "1200px" }}
    >
      {cards.map((card, i) => {
        const isHovered = hoveredIndex === i;
        const isOtherHovered = hoveredIndex !== null && !isHovered;
        const isFeatured = card.featured;
        const isAmbient = card.ambient;

        let defaultFilter: string;
        let defaultOpacity: number;

        if (isFeatured) {
          defaultFilter = "none";
          defaultOpacity = 0.95;
        } else if (isAmbient) {
          defaultFilter = "blur(1.5px) brightness(0.72)";
          defaultOpacity = 0.45;
        } else {
          defaultFilter = "blur(0.8px) brightness(0.82)";
          defaultOpacity = 0.72;
        }

        const hoverFilter = isHovered ? "none" : defaultFilter;
        const hoverOpacity = isHovered
          ? isAmbient ? 0.65 : isFeatured ? 1 : 0.88
          : isOtherHovered
            ? isFeatured ? 0.50 : isAmbient ? 0.22 : 0.40
            : defaultOpacity;

        return (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="pointer-events-auto absolute cursor-pointer"
            style={{
              left: `${card.x}px`,
              top: `${card.y}px`,
              width: `${card.width}px`,
              zIndex: isHovered ? 20 : card.zIndex,
              transform: `
                rotate(${isHovered ? 0 : card.rotation}deg)
                translateY(${isHovered ? -18 : 0}px)
                scale(${isHovered ? 1.03 : 1})
                translateZ(${card.zIndex * 15}px)
              `,
              filter: hoverFilter,
              opacity: hoverOpacity,
              transition: "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease-out, opacity 0.7s ease-out",
            }}
            onMouseEnter={() => {
              setHoveredIndex(i);
              floatTweens.current[i]?.pause();
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              floatTweens.current[i]?.resume();
            }}
          >
            <div
              className="overflow-hidden"
              style={{
                borderRadius: isFeatured ? "24px" : isAmbient ? "18px" : "20px",
                boxShadow: isHovered
                  ? isFeatured
                    ? "0 40px 100px rgba(0, 0, 0, 0.50), 0 0 0 1px rgba(200, 172, 75, 0.25)"
                    : isAmbient
                      ? "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(200, 172, 75, 0.18)"
                      : "0 32px 80px rgba(0, 0, 0, 0.48), 0 0 0 1px rgba(200, 172, 75, 0.20)"
                  : isFeatured
                    ? `0 ${16 + card.zIndex * 4}px ${40 + card.zIndex * 8}px rgba(0, 0, 0, 0.38), 0 0 0 1px rgba(255, 255, 255, 0.07)`
                    : isAmbient
                      ? `0 ${6 + card.zIndex * 2}px ${20 + card.zIndex * 4}px rgba(0, 0, 0, 0.28)`
                      : `0 ${10 + card.zIndex * 3}px ${28 + card.zIndex * 6}px rgba(0, 0, 0, 0.32), 0 0 0 1px rgba(255, 255, 255, 0.05)`,
                transition: "box-shadow 0.55s ease-out, border-radius 0.4s ease",
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="h-auto w-full"
                  style={{
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  loading="eager"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(13, 6, 48, 0.30) 100%)",
                    opacity: isHovered ? 0.08 : isFeatured ? 0.25 : isAmbient ? 0.55 : 0.40,
                    transition: "opacity 0.6s ease-out",
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
