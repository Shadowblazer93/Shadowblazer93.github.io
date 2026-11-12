import { useEffect, useRef, useState } from "react";
import { navigation } from "../../data/navigation";
import { site } from "../../data/site";
import { socials } from "../../data/socials";
import { InlineList } from "../common/InlineList";
import { NavLink } from "../common/NavLink";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

/** The inner content of the single sticky site header. */
export function HeaderContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on Escape or a click outside it.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current?.contains(target) ||
        toggleRef.current?.contains(target)
      ) {
        return;
      }
      setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <>
      <h1>
        <img className="header-avatar" src="/assets/favicon.png" alt="" />{" "}
        <span className="header-title">{site.name}</span>
      </h1>
      <nav className="header-shortcuts" aria-label="Sections">
        <InlineList
          items={navigation.map((item) => (
            <NavLink
              key={item.href}
              className="header-shortcut"
              href={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        />
      </nav>
      <div className="header-links">
        <InlineList
          items={[
            <ThemeSwitcher key="theme-switcher" />,
            ...socials.map((social) => (
              <a
                key={social.label}
                className={`header-link header-link--${social.variant}`}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <img src={social.icon} alt="" />
                <span className="header-link-label">{social.label}</span>
              </a>
            )),
          ]}
        />
      </div>
      <button
        ref={toggleRef}
        type="button"
        className="header-menu-toggle"
        aria-label={menuOpen ? "Close sections menu" : "Open sections menu"}
        aria-expanded={menuOpen}
        aria-controls="header-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <i
          className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}
          aria-hidden="true"
        />
      </button>
      <nav
        ref={menuRef}
        id="header-menu"
        className={menuOpen ? "header-menu is-open" : "header-menu"}
        aria-label="Sections menu"
        onClick={() => setMenuOpen(false)}
      >
        {navigation.map((item) => (
          <NavLink
            key={item.href}
            className="header-menu-link"
            href={item.href}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
