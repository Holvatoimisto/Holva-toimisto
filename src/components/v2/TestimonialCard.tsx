import { Star } from "lucide-react";
import type { ReviewPlaceholder } from "@/lib/content";

interface TestimonialCardProps {
  review: ReviewPlaceholder;
  dark?: boolean;
  large?: boolean;
}

/** Johda avatarin alkukirjain nimestä (fallback "?"). */
function getInitial(name: string): string {
  const trimmed = name.trim();
  return trimmed ? trimmed.charAt(0).toUpperCase() : "?";
}

/**
 * Testimonial card (spec §27).
 * Renderöi aidon Google-arvostelun (teksti + nimi + source;
 * tähdet vain jos rating on varmennettu).
 */
export default function TestimonialCard({ review, dark = false, large = false }: TestimonialCardProps) {
  return (
    <figure
      className="flex h-full flex-col rounded-[10px] border"
      style={{
        padding: large ? "clamp(28px, 3vw, 40px)" : "clamp(22px, 2vw, 26px)",
        borderColor: dark ? "var(--line-dark)" : "var(--line)",
        backgroundColor: dark ? "rgba(255,255,255,0.04)" : large ? "rgba(200,172,75,0.05)" : "#fff",
      }}
    >
      {typeof review.rating === "number" && (
        <span
          className="mb-4 flex items-center gap-0.5"
          role="img"
          aria-label={`${review.rating}/5 tähteä`}
        >
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} size={large ? 14 : 12} fill="var(--gold)" strokeWidth={0} style={{ color: "var(--gold)" }} aria-hidden="true" />
          ))}
        </span>
      )}
      <blockquote
        className="flex-1"
        style={{
          color: dark ? "var(--on-dark-muted)" : "var(--ink)",
          fontFamily: "'Instrument Serif', serif",
          fontStyle: "italic",
          fontSize: large ? "clamp(23px, 2.2vw, 30px)" : "clamp(18px, 1.55vw, 22px)",
          lineHeight: large ? 1.3 : 1.4,
        }}
      >
        ”{review.text}”
      </blockquote>
      {/* Footer: initial-avatar + nimi + source */}
      <figcaption className="mt-7 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[14px] font-semibold md:h-11 md:w-11"
          style={{ backgroundColor: "var(--navy)", color: "#fff" }}
        >
          {getInitial(review.name)}
        </span>
        <span>
          <span className="t-small block font-semibold" style={{ color: dark ? "#fff" : "var(--ink)" }}>
            {review.name}
          </span>
          <span className="t-meta block" style={{ color: dark ? "var(--on-dark-muted)" : "var(--muted)" }}>
            {review.source}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
