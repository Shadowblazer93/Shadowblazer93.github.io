import { experience } from "../../data/experience";
import { ExperienceCard } from "../ui/ExperienceCard";

export function ExperienceSection() {
  return (
    <section className="full-bleed bg-section">
      <h2 className="section-title--center">Experience</h2>

      <div className="experience-grid">
        {experience.map((item) => (
          <ExperienceCard key={item.role} {...item} />
        ))}
      </div>
    </section>
  );
}
