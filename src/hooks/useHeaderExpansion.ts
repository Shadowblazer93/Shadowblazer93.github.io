import { useLayoutEffect, useRef } from "react";

/** How far the page must scroll for the header to reach full width. */
const EXPANSION_DISTANCE = 140;

/** Smoothstep easing so the expansion eases in and out instead of being linear. */
function smoothstep(value: number): number {
  return value * value * (3 - 2 * value);
}

/**
 * Drives the sticky header background's scroll-linked "unfurl".
 *
 * At rest the background sits at the container width with rounded corners. As
 * the page scrolls only the background stretches out to the viewport edges
 * (both sides at once) and the corner radius/shadow interpolate to the pinned,
 * full-width look. The header content stays put. Progress is written as CSS
 * custom properties so the animation runs in CSS and React never re-renders on
 * scroll.
 */
export function useHeaderExpansion<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const header = ref.current;
    if (!header) return;

    const parent = header.parentElement;
    let frame = 0;

    /**
     * Measures how far the header has to grow on each side to touch the
     * viewport edges. This accounts for the centred container, the body
     * margin and the scrollbar.
     */
    const measureBleed = () => {
      if (!parent) return;

      const style = getComputedStyle(parent);
      const rect = parent.getBoundingClientRect();
      const paddingLeft = parseFloat(style.paddingLeft) || 0;
      const paddingRight = parseFloat(style.paddingRight) || 0;
      const borderLeft = parseFloat(style.borderLeftWidth) || 0;
      const borderRight = parseFloat(style.borderRightWidth) || 0;

      const contentLeft = rect.left + borderLeft + paddingLeft;
      const contentRight = rect.right - borderRight - paddingRight;

      const leftBleed = Math.max(0, contentLeft);
      const rightBleed = Math.max(
        0,
        document.documentElement.clientWidth - contentRight,
      );

      header.style.setProperty("--header-bleed-left", `${leftBleed}px`);
      header.style.setProperty("--header-bleed-right", `${rightBleed}px`);
    };

    const updateProgress = () => {
      frame = 0;
      const progress = Math.min(
        1,
        Math.max(0, window.scrollY / EXPANSION_DISTANCE),
      );
      header.style.setProperty(
        "--header-progress",
        `${smoothstep(progress)}`,
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    const onResize = () => {
      measureBleed();
      updateProgress();
    };

    measureBleed();
    updateProgress();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // Keeps the bleed correct when the scrollbar appears/disappears or the
    // container changes width (font loading, zoom, ...).
    const resizeObserver = new ResizeObserver(onResize);
    if (parent) resizeObserver.observe(parent);
    resizeObserver.observe(document.documentElement);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      resizeObserver.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
