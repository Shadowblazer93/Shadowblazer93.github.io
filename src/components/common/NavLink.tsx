import type { MouseEvent, ReactNode } from "react";
import { scrollToHash } from "../../utils/scroll";

interface NavLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

/**
 * In-page anchor link that smooth-scrolls with a header offset. Keeps the real
 * `href` so the link still works for keyboard users and without JavaScript.
 */
export function NavLink({ href, className, children }: NavLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#") || !document.querySelector(href)) {
      return;
    }
    event.preventDefault();
    scrollToHash(href);
  };

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
