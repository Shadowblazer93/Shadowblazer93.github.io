import type { ExperienceItem } from "../../data/types";
import { InlineList } from "../common/InlineList";
import { ProjectLink } from "./ProjectLink";

/** A single experience entry. */
export function ExperienceCard({
  role,
  org,
  period,
  location,
  logo,
  logoAlt,
  tone,
  description,
  links,
}: ExperienceItem) {
  return (
    <article
      className={`experience-card${tone ? ` experience-card--${tone}` : ""}`}
    >
      <div className="exp-title-row">
        <h1 className="card-title">{role}</h1>
        <img className="exp-logo" src={logo} alt={logoAlt} />
      </div>

      <p className="exp-org">{org}</p>
      <p className="exp-meta">
        {period} | {location}
      </p>

      {description && <p className="exp-description">{description}</p>}

      <InlineList
        items={(links ?? []).map((link, index) => (
          <ProjectLink key={link.label} {...link} indent={index === 0} />
        ))}
      />
    </article>
  );
}
