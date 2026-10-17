import { navigation } from "../../data/navigation";
import { site } from "../../data/site";
import { socials } from "../../data/socials";
import { InlineList } from "../common/InlineList";
import { NavLink } from "../common/NavLink";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

/**
 * The inner content of the site header. Rendered twice on purpose: once inside
 * the sticky <header> and once inside the floating header overlay.
 */
export function HeaderContent() {
  return (
    <>
      {/* The trailing space inside <h1> mirrors the original markup, where the
          newline before </h1> collapsed to a space and shifted the nav. */}
      <h1>
        <img className="header-avatar" src="/assets/favicon.png" alt="" />{" "}
        {site.name}{" "}
      </h1>
      <nav className="header-shortcuts">
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
      </nav>{" "}
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
              >
                <img src={social.icon} alt="" />
                {social.label}
              </a>
            )),
          ]}
        />
      </div>
    </>
  );
}
