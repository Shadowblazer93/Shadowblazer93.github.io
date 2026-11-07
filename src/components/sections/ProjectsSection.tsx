import {
  btoProject,
  featuredProject,
  lilianProject,
  portfolioProject,
} from "../../data/projects";
import { FeaturedProject } from "../ui/FeaturedProject";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionHeading } from "../ui/SectionHeading";

export function ProjectsSection() {
  return (
    <section className="section--decorated">
      <SectionHeading tone="blue">Projects</SectionHeading>

      <FeaturedProject project={featuredProject} />

      <div className="project-grid">
        <ProjectCard project={lilianProject} />

        <div className="project-grid project-grid-vertical">
          <ProjectCard project={portfolioProject} />
          <ProjectCard project={btoProject} />
        </div>
      </div>
    </section>
  );
}
