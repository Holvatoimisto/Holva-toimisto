import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}

/** Yksi yhteinen eyebrow-komponentti (spec §14). */
export default function Eyebrow({ children, dark = false, className = "" }: EyebrowProps) {
  return (
    <p
      className={`t-eyebrow flex items-center gap-2.5 ${className}`}
      style={{ color: dark ? "var(--gold)" : "var(--navy)" }}
    >
      <span
        aria-hidden="true"
        className="inline-block h-[2px] w-6 shrink-0"
        style={{ backgroundColor: "var(--gold)" }}
      />
      {children}
    </p>
  );
}
