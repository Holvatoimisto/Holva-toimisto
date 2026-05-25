import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Mitä jos nykyiset sivumme toimivat jo ihan hyvin?",
    a: "Monessa tapauksessa ne toimivatkin — eikä tarkoitus ole tehdä muutoksia vain muutoksen vuoksi.\n\nUsein kyse on enemmän siitä, kuinka hyvin verkkosivusto välittää yrityksenne laadun, rakentaa luottamusta ja ohjaa yhteydenottoon.\n\nHyväkin sivusto voi jättää paljon potentiaalia käyttämättä, jos kokonaisuus tuntuu epäselvältä, geneeriseltä tai vaikealta hahmottaa asiakkaan näkökulmasta.",
  },
  {
    q: "Miksi panostaisin verkkosivuihin enkä vain mainontaan?",
    a: "Mainonta voi tuoda kävijöitä sivulle — mutta verkkosivusto vaikuttaa siihen, mitä tapahtuu sen jälkeen.\n\nJos kokonaisuus tuntuu epäselvältä tai vaikealta lähestyä, moni poistuu ennen yhteydenottoa.\n\nHyvät verkkosivut eivät korvaa markkinointia. Ne tekevät siitä tehokkaampaa rakentamalla luottamusta ja tekemällä etenemisestä asiakkaalle helpompaa.",
  },
  {
    q: "Miten varmistatte, ettei yrityksen oma tunnelma katoa uudistuksessa?",
    a: "Emme rakenna yrityksestänne jotain, mitä se ei ole.\n\nTavoitteemme on tuoda nykyinen identiteetti, tunnelma ja vahvuudet selkeämmin esiin — ei korvata niitä geneerisellä \"premium\"-ilmeellä.\n\nParhaat verkkosivut tuntuvat aidosti yrityksensä näköisiltä.",
  },
  {
    q: "Mitä demo käytännössä sisältää?",
    a: "Suunnittelemme yrityksellenne henkilökohtaisen verkkosivudemonstration ja lähetämme siitä Loom-videon.\n\nVideolla käymme läpi:\n\nmiltä uusi suunta voisi näyttää\nmitä nykyisissä sivuissa voisi kehittää\nja miten kokonaisuutta voisi selkeyttää asiakkaan näkökulmasta\n\nTarkoitus ei ole myydä painostavasti, vaan näyttää konkreettisesti mitä mahdollisuuksia näemme.",
  },
  {
    q: "Voinko pyytää demon vaikka en olisi vielä valmis sitoutumaan?",
    a: "Kyllä.\n\nDemo on tarkoitettu myös yrityksille, jotka haluavat ensin nähdä miltä uusi suunta voisi näyttää käytännössä.\n\nEt sitoudu mihinkään pyytämällä demon. Tarkoitus on tehdä päätöksestä helpompi näyttämällä konkreettisesti, mitä verkkosivustolta voisi puuttua ja miltä parempi kokonaisuus voisi näyttää.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!answerRef.current) return;
    if (isOpen) {
      gsap.to(answerRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(answerRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.035)",
        padding: "28px 0",
      }}
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-start justify-between gap-4 text-left transition-all duration-300"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          transform: isOpen ? "translateX(0)" : "translateX(0)",
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.transform = "translateX(3px)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0)";
        }}
      >
        <span
          className="text-[15px] font-normal leading-[1.55] transition-colors duration-300"
          style={{
            color: isOpen ? "rgba(226,232,240,0.88)" : "rgba(226,232,240,0.65)",
            letterSpacing: "-0.01em",
          }}
        >
          {faq.q}
        </span>
        <span
          className="mt-0.5 flex-shrink-0 transition-all duration-300"
          style={{
            color: isOpen ? "rgba(200,172,75,0.70)" : "rgba(148,163,184,0.30)",
            transform: isOpen ? "rotate(0deg)" : "rotate(0deg)",
          }}
        >
          {isOpen ? (
            <Minus size={14} strokeWidth={1.5} />
          ) : (
            <Plus size={14} strokeWidth={1.5} />
          )}
        </span>
      </button>

      <div
        ref={answerRef}
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
      >
        <div className="pt-5" style={{ maxWidth: "480px" }}>
          {faq.a.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-[14px] leading-[1.75] font-light"
              style={{
                color: "rgba(148,163,184,0.60)",
                marginTop: i > 0 ? "12px" : "0",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".faq-anim");
      if (!els?.length) return;
      gsap.fromTo(
        els,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: els[0],
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10"
      style={{ padding: "100px 24px 80px", backgroundColor: "#091525" }}
    >
      {/* Subtle top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(200,172,75,0.05) 50%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto" style={{ maxWidth: "640px" }}>
        {/* Eyebrow */}
        <p
          className="faq-anim text-[11px] font-normal uppercase tracking-[0.2em]"
          style={{ color: "rgba(200,172,75,0.50)" }}
        >
          FAQ
        </p>

        {/* Headline */}
        <h2
          className="faq-anim mt-6"
          style={{
            color: "var(--text-primary)",
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(1.5rem, 3.2vw, 2rem)",
            lineHeight: 1.22,
            letterSpacing: "-0.025em",
          }}
        >
          Yleisiä mietteitä
        </h2>

        {/* FAQ list */}
        <div className="faq-anim mt-12">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.035)" }} />
        </div>

        {/* Emotional reset — premium quote before pricing */}
        <div className="faq-anim mt-16 text-center" style={{ maxWidth: "420px", margin: "64px auto 0" }}>
          <div
            style={{
              width: "24px",
              height: "1px",
              background: "rgba(200,172,75,0.12)",
              margin: "0 auto 28px",
            }}
          />
          <p
            style={{
              color: "rgba(226, 232, 240, 0.45)",
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)",
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
            }}
          >
            Hyvä verkkosivusto ei huuda huomiota. Se ohjaa luonnollisesti eteenpain.
          </p>
        </div>
      </div>
    </section>
  );
}
