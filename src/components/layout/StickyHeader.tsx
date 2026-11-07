import { useHeaderExpansion } from "../../hooks/useHeaderExpansion";
import { HeaderContent } from "./HeaderContent";

/**
 * The single sticky header at the top of the page. Its scroll progress is fed
 * to CSS, which expands only the background layer from the floating,
 * container-width state to the pinned, full-viewport state; the content stays
 * put.
 */
export function StickyHeader() {
  const ref = useHeaderExpansion<HTMLElement>();

  return (
    <header ref={ref}>
      <HeaderContent />
    </header>
  );
}
