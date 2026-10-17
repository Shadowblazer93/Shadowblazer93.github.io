import { useScrolledPast } from "../../hooks/useScrolledPast";
import { cn } from "../../utils/cn";
import { scrollToTop } from "../../utils/scroll";

/** Floating button that appears once the page is scrolled and returns to top. */
export function BackToTop() {
  const visible = useScrolledPast(200);

  return (
    <button
      id="back-to-top"
      type="button"
      className={cn("back-to-top", visible && "is-visible")}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
