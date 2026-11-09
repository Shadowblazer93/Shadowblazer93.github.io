import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  children: ReactNode;
  align?: "center" | "left";
  /** Extra classes for the title itself. */
  headingClassName?: string;
  /** Extra classes for the wrapper. */
  className?: string;
}

/** Centred section title. */
export function SectionHeading({
  children,
  align = "center",
  headingClassName,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "section-heading",
        `section-heading--${align}`,
        className,
      )}
    >
      <h2 className={cn("section-heading-title", headingClassName)}>
        {children}
      </h2>
    </div>
  );
}
