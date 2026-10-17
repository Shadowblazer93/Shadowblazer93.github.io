import type { ProjectItem } from "../../data/types";
import { cn } from "../../utils/cn";
import { InlineList } from "../common/InlineList";
import { ProjectLink } from "./ProjectLink";

/** A standard project tile used in the Projects grid. */
export function ProjectCard({ project }: { project: ProjectItem }) {
  const {
    title,
    tech,
    description,
    image,
    links,
    compact,
    linkSpacing = 2,
  } = project;

  return (
    <article className={cn("project-card", compact && "project-card--compact")}>
      <h1 className="project-title">{title}</h1>
      <p className="project-tech">{tech}</p>

      {description}

      {image && (
        <img className="project-image" src={image.src} alt={image.alt} />
      )}

      {Array.from({ length: linkSpacing }, (_, index) => (
        <br key={index} />
      ))}

      <InlineList
        items={links.map((link, index) => (
          <ProjectLink key={link.label} {...link} indent={index === 0} />
        ))}
      />
    </article>
  );
}
