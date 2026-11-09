import { experience } from "../../data/experience";
import { ExperienceCard } from "../ui/ExperienceCard";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section className="full-bleed bg-section">
      <SectionHeading>Experience</SectionHeading>

      <div className="experience-grid">
        {experience.map((item) => (
          <ExperienceCard key={item.role} {...item} />
        ))}
      </div>
    </section>
  );
}
