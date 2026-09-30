import { useEffect, useRef, type ReactNode, type ElementType, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Viive staggeria varten (ms) */
  delay?: number;
}

/**
 * Hillitty fade + 16px rise (spec §31).
 * prefers-reduced-motion: sisältö näkyy heti (CSS hoitaa).
 */
export default function Reveal({ children, as: Tag = "div", className = "", style, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ ...style, ...(delay ? { transitionDelay: `${delay}ms` } : {}) }}
    >
      {children}
    </Tag>
  );
}
