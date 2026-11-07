import { cn } from "../../utils/cn";

export type DoodleTone = "blue" | "green" | "yellow" | "pink" | "teal" | "red";

interface DoodleProps {
  className?: string;
  tone?: DoodleTone;
}

function doodleClass(
  kind: string,
  tone?: DoodleTone,
  className?: string,
) {
  return cn("doodle", `doodle--${kind}`, tone && `doodle--${tone}`, className);
}

/**
 * Crisp, hand-drawn SVG shapes used as stickers and section decorations.
 * They deliberately use flat fills, thick outlines and hard offset shadows -
 * no gradients or blur.
 */

export function Sparkle({ className, tone }: DoodleProps) {
  return (
    <svg
      className={doodleClass("sparkle", tone, className)}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="doodle-shape"
        d="M32 4c2.2 15.4 10.4 25.6 28 28-17.6 2.4-25.8 12.6-28 28-2.2-15.4-10.4-25.6-28-28C21.6 29.6 29.8 19.4 32 4Z"
      />
    </svg>
  );
}

export function Star({ className, tone }: DoodleProps) {
  return (
    <svg
      className={doodleClass("star", tone, className)}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="doodle-shape"
        d="M32 5l7.6 17 18.4 1.9-13.9 12.3 4 18.1L32 45.6 16 54.3l4-18.1L6 23.9 24.4 22 32 5Z"
      />
    </svg>
  );
}

/** Heraldic lily. */
export function FleurDeLis({ className, tone }: DoodleProps) {
  return (
    <svg
      className={doodleClass("fleur", tone, className)}
      viewBox="0 0 120 84"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="doodle-shape"
        d="M60 4c10 22 10 44 0 64-10-20-10-42 0-64Z"
      />
      <path
        className="doodle-shape"
        d="M51 38C40 30 28 36 30 50c2 10 14 10 22 4-7 2-11-2-9-8 1-4 4-7 8-8Z"
      />
      <path
        className="doodle-shape"
        d="M69 38c11-8 23-2 21 12-2 10-14 10-22 4 7 2 11-2 9-8-1-4-4-7-8-8Z"
      />
      <rect
        className="doodle-shape"
        x="44"
        y="64"
        width="32"
        height="14"
        rx="7"
      />
    </svg>
  );
}

export function Squiggle({ className, tone }: DoodleProps) {
  return (
    <svg
      className={doodleClass("squiggle", tone, className)}
      viewBox="0 0 200 14"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="doodle-line"
        pathLength={1}
        vectorEffect="non-scaling-stroke"
        d="M3 9c12-9 24 7 36 0s24-9 36 0 24 7 36 0 24-9 36 0 24 7 36 0"
      />
    </svg>
  );
}

/** Wax-sealed parchment scroll for the contact section. */
export function Scroll({ className, tone }: DoodleProps) {
  return (
    <svg
      className={doodleClass("scroll", tone, className)}
      viewBox="0 0 132 92"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        className="doodle-shape"
        x="26"
        y="12"
        width="80"
        height="62"
        rx="4"
      />
      <rect
        className="doodle-shape"
        x="8"
        y="6"
        width="22"
        height="74"
        rx="11"
      />
      <rect
        className="doodle-shape"
        x="102"
        y="6"
        width="22"
        height="74"
        rx="11"
      />
      <path className="doodle-ink-line" d="M38 28h48M38 40h40M38 52h28" />
      <path className="doodle-ribbon" d="M84 66l-5 16 7-3 3 5 1-16Z" />
      <path className="doodle-ribbon" d="M98 66l7 15-7-3-3 5Z" />
      <circle className="doodle-seal" cx="90" cy="58" r="11" />
      <path className="doodle-seal-mark" d="M90 51v14M83 58h14" />
    </svg>
  );
}

export function Envelope({ className, tone }: DoodleProps) {
  return (
    <svg
      className={doodleClass("envelope", tone, className)}
      viewBox="0 0 120 92"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        className="doodle-shape"
        x="7"
        y="20"
        width="106"
        height="64"
        rx="10"
      />
      <path className="doodle-line" d="m12 27 48 34 48-34" />
      <path className="doodle-line" d="m12 78 32-26M108 78 76 52" />
    </svg>
  );
}
