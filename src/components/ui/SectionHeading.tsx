import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import {
  Envelope,
  FleurDeLis,
  Sparkle,
  Squiggle,
  Star,
  type DoodleTone,
} from "./Doodles";

const DOODLES = {
  sparkle: Sparkle,
  star: Star,
  fleur: FleurDeLis,
  envelope: Envelope,
} as const;

type SectionDoodle = keyof typeof DOODLES;

interface SectionHeadingProps {
  children: ReactNode;
  /** Sticker shown at the top-right of the title. */
  doodle?: SectionDoodle;
  tone?: DoodleTone;
  align?: "center" | "left";
  /** Extra classes for the title itself. */
  headingClassName?: string;
  /** Extra classes for the wrapper. */
  className?: string;
}

/** Centred section title with a floating sticker and a hand-drawn underline. */
export function SectionHeading({
  children,
  doodle = "sparkle",
  tone = "yellow",
  align = "center",
  headingClassName,
  className,
}: SectionHeadingProps) {
  const Doodle = DOODLES[doodle];

  return (
    <div
      className={cn(
        "section-heading",
        `section-heading--${align}`,
        className,
      )}
      data-reveal
    >
      <h2 className={cn("section-heading-title", headingClassName)}>
        {children}
      </h2>
      <Doodle className="section-heading-doodle" tone={tone} />
      <Squiggle className="section-heading-underline" tone={tone} />
    </div>
  );
}
