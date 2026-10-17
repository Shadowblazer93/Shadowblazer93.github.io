import type { FeaturedProjectItem } from "../../data/types";
import { InlineList } from "../common/InlineList";
import { ProjectLink } from "./ProjectLink";

/** The wide, two-column SIERRA card at the top of the Projects section. */
export function FeaturedProject({ project }: { project: FeaturedProjectItem }) {
  const { title, tech, links, videoSrc, videoTitle, heading, description } =
    project;

  return (
    <div className="project-card">
      <h1 className="featured-title-inline">{title}</h1>{" "}
      <p className="project-tech--featured">{tech}</p>{" "}
      <InlineList
        items={links.map((link, index) => (
          <ProjectLink key={link.label} {...link} lead={index === 0} />
        ))}
      />

      <div className="featured-layout">
        <div className="featured-media">
          <iframe
            className="featured-video"
            width={560}
            height={315}
            src={videoSrc}
            title={videoTitle}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="featured-divider" />

        <div className="featured-text">
          <h1 className="featured-heading">{heading}</h1>
          <p className="featured-description">{description}</p>
        </div>
      </div>
    </div>
  );
}
