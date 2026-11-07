import { ccas } from "../../data/ccas";
import { CcaCard } from "../ui/CcaCard";
import { Star } from "../ui/Doodles";
import { SectionHeading } from "../ui/SectionHeading";

export function CcaSection() {
  return (
    <section className="full-bleed bg-section section--decorated">
      <SectionHeading
        doodle="fleur"
        tone="green"
        headingClassName="section-title--center section-title--sm"
      >
        Co-Curricular Activities (CCAs)
      </SectionHeading>

      <Star className="section-doodle section-doodle--right" tone="pink" />

      <div className="experience-grid">
        {ccas.map((item) => (
          <CcaCard key={item.role} {...item} />
        ))}
      </div>

      <br className="spacer-lg" />
    </section>
  );
}
