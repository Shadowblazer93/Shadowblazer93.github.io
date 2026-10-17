import { useLayoutEffect, useRef, type RefObject } from "react";
import { cn } from "../../utils/cn";
import { HeaderContent } from "./HeaderContent";

interface FloatingHeaderProps {
  /** The sticky header to mirror, used to keep both heights in sync. */
  sourceRef: RefObject<HTMLElement | null>;
  visible: boolean;
}

/**
 * Full-width header overlay that fades in once the page is scrolled. It clones
 * the sticky header's content and matches its height (minus the wrapper offset),
 * exactly like the original copy-the-innerHTML behaviour.
 */
export function FloatingHeader({ sourceRef, visible }: FloatingHeaderProps) {
  const innerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const syncHeight = () => {
      const source = sourceRef.current;
      const inner = innerRef.current;
      if (source && inner) {
        inner.style.height = `${source.offsetHeight - 20}px`;
      }
    };

    syncHeight();
    window.addEventListener("resize", syncHeight);
    return () => window.removeEventListener("resize", syncHeight);
  }, [sourceRef]);

  return (
    <div id="floating-header" className={cn(visible && "visible")}>
      <div className="container">
        <header id="floating-header-inner" ref={innerRef}>
          <HeaderContent />
        </header>
      </div>
    </div>
  );
}
