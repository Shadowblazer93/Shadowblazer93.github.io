/** Offset applied when scrolling to a section so it clears the sticky header. */
export const SCROLL_OFFSET = 70;

export function scrollToElement(element: Element, offset = SCROLL_OFFSET): void {
  const rect = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  window.scrollTo({ top: rect.top + scrollTop - offset, behavior: "smooth" });
}

export function scrollToHash(hash: string, offset = SCROLL_OFFSET): void {
  if (!hash.startsWith("#")) {
    return;
  }

  const target = document.querySelector(hash);
  if (target) {
    scrollToElement(target, offset);
  }
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
