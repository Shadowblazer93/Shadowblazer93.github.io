import { useEffect, useState } from "react";

/**
 * Tracks whether the page has been scrolled past `threshold` pixels.
 * Used by the floating header (30px) and the back-to-top button (200px).
 */
export function useScrolledPast(threshold: number): boolean {
  const [scrolledPast, setScrolledPast] = useState(
    () => typeof window !== "undefined" && window.scrollY > threshold,
  );

  useEffect(() => {
    const handleScroll = () => setScrolledPast(window.scrollY > threshold);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolledPast;
}
