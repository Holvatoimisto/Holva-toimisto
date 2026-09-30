import type { ReactNode } from "react";
import { Link } from "react-router";

type Variant =
  | "primary" // navy bg / white text (light surface)
  | "primaryOnDark" // white bg / navy text (dark surface)
  | "secondary" // transparent + border (light surface)
  | "secondaryOnDark" // transparent + border (dark surface)
  | "textlink"
  | "textlinkOnDark";

const variantClass: Record<Variant, string> = {
  primary: "btn btn-primary",
  primaryOnDark: "btn btn-primary-on-dark",
  secondary: "btn btn-secondary",
  secondaryOnDark: "btn btn-secondary-on-dark",
  textlink: "btn-textlink",
  textlinkOnDark: "btn-textlink btn-textlink-on-dark",
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  /** Sisäinen route → renderöidään react-router Linkinä */
  to?: string;
  /** Ankkurilinkki samalle sivulle (#id) → renderöidään <a>:na */
  href?: string;
  /** Modaalin avaus tms. → renderöidään buttonina */
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  blockOnMobile?: boolean;
  ariaLabel?: string;
}

/** V2 button system (spec §13) — vain määritellyt variantit. */
export default function Button({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  blockOnMobile = false,
  ariaLabel,
}: ButtonProps) {
  const cls = `${variantClass[variant]}${blockOnMobile ? " btn-block-mobile" : ""} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
