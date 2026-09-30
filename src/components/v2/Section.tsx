import type { ReactNode } from "react";

type Surface = "white" | "alt" | "navy";
type Spacing = "lg" | "md" | "sm" | "none";
type Container = "wide" | "standard" | "text";

interface SectionProps {
  children: ReactNode;
  surface?: Surface;
  spacing?: Spacing;
  container?: Container;
  id?: string;
  ariaLabelledby?: string;
  className?: string;
}

const surfaceClass: Record<Surface, string> = {
  white: "",
  alt: "surface-alt",
  navy: "surface-navy",
};
const spacingClass: Record<Spacing, string> = {
  lg: "section-lg",
  md: "section-md",
  sm: "section-sm",
  none: "",
};
const containerClass: Record<Container, string> = {
  wide: "container-wide",
  standard: "container-standard",
  text: "container-text",
};

/** V2 section-wrapper: pinta + rytmi + container (spec §9, §11). */
export default function Section({
  children,
  surface = "white",
  spacing = "md",
  container = "standard",
  id,
  ariaLabelledby,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`${surfaceClass[surface]} ${spacingClass[spacing]} ${className}`.trim()}
    >
      <div className={`container-v2 ${containerClass[container]}`}>{children}</div>
    </section>
  );
}
