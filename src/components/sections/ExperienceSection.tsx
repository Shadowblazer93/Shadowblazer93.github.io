import { experience } from "../../data/experience";
import { Sparkle } from "../ui/Doodles";
import { ExperienceCard } from "../ui/ExperienceCard";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section className="full-bleed bg-section section--decorated">
      <SectionHeading tone="yellow">Experience</SectionHeading>

      <Sparkle className="section-doodle section-doodle--right" tone="pink" />

      <div className="experience-grid">
        {experience.map((item) => (
          <ExperienceCard key={item.role} {...item} />
        ))}
      </div>
    </section>
  );
}
