import {
  btoProject,
  featuredProject,
  lilianProject,
  portfolioProject,
} from "../../data/projects";
import { FeaturedProject } from "../ui/FeaturedProject";
import { ProjectCard } from "../ui/ProjectCard";

export function ProjectsSection() {
  return (
    <section>
      <h2 className="section-title--center">Projects</h2>

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
