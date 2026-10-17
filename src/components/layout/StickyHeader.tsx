import { forwardRef } from "react";
import { HeaderContent } from "./HeaderContent";

/** The sticky <header> at the top of the page. */
export const StickyHeader = forwardRef<HTMLElement>(function StickyHeader(
  _props,
  ref,
) {
  return (
    <header ref={ref}>
      <HeaderContent />
    </header>
  );
});
