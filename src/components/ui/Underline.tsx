import { cn } from "../../utils/cn";

export type AccentTone = "blue" | "green" | "yellow" | "pink" | "teal" | "red";

interface UnderlineProps {
  className?: string;
  tone?: AccentTone;
}

/** A straight accent line used beneath section headings. */
export function Underline({ className, tone }: UnderlineProps) {
  return (
    <svg
      className={cn("underline", tone && `underline--${tone}`, className)}
      viewBox="0 0 200 14"
      preserveAspectRatio="none"
      data-reveal
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="underline-line"
        pathLength={1}
        vectorEffect="non-scaling-stroke"
        d="M3 7h194"
      />
    </svg>
  );
}
