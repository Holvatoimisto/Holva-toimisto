import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bullets = [
  "Näet konkreettisen eron ennen investointia",
  "Demo valmistuu 3 päivän sisällä",
  "Ei kustannuksia, ei sitoumuksia",
];

export default function Demo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const left = sectionRef.current?.querySelector(".demo-left");
      const right = sectionRef.current?.querySelector(".demo-right");
      if (left) {
        gsap.fromTo(
          left,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
      if (right) {
        gsap.fromTo(
          right,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        backgroundColor: "#0b1f35",
        padding: "80px 24px",
      }}
    >
      {/* Gradient transition from pricing */}
      <div
        className="absolute top-0 left-0 right-0 h-24"
        style={{
          background:
            "linear-gradient(180deg, #091525 0%, #0b1f35 100%)",
        }}
      />

      <div
        className="mx-auto grid items-center gap-10 lg:grid-cols-12 lg:gap-12"
        style={{ maxWidth: "900px" }}
      >
        {/* Left — reassurance copy */}
        <div className="demo-left lg:col-span-7">
          <p
            className="text-[10px] font-normal uppercase tracking-[0.18em]"
            style={{ color: "rgba(200,172,75,0.50)" }}
          >
            Riskitön ensiaskel
          </p>
          <h2
            className="mt-4 text-[1.7rem] leading-[1.15] sm:text-[2rem] lg:text-[2.4rem]"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: "-0.02em",
              maxWidth: "480px",
            }}
          >
            Voit nähdä suunnan ennen päätöstä.
          </h2>
          <p
            className="mt-4 text-[13px] leading-[1.7] font-light"
            style={{ color: "var(--text-secondary)", maxWidth: "420px" }}
          >
            Rakennan demon nykyisestä sivustostasi — maksutta, ilman
            sitoumuksia. Näet tarkalleen mitä parannan ja miten se vaikuttaa
            kävijöiden käyttäytymiseen.
          </p>
          <div className="mt-5 flex flex-col gap-2.5">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <Check
                  size={14}
                  style={{ color: "var(--accent-teal)" }}
                  strokeWidth={2.5}
                />
                <span
                  className="text-[13px] font-light"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={openModal}
            className="mt-8 rounded-[10px] px-8 py-3 text-[13px] font-normal tracking-wide transition-all duration-300"
            style={{
              backgroundColor: "var(--accent-gold)",
              color: "var(--bg-secondary)",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 20px rgba(200, 172, 75, 0.18)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#D4B85A";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(200,172,75,0.35)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-gold)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(200,172,75,0.18)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Pyydä ilmainen demo
          </button>
        </div>

        {/* Right — before/after mockup */}
        <div className="demo-right lg:col-span-5 flex justify-center">
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              boxShadow:
                "0 16px 48px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            <img
              src="/backroom-hero-cta.png"
              alt="The Back Room — verkkosivusuunnittelu"
              className="h-auto w-full max-w-[380px]"
              style={{ filter: "saturate(0.9)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
