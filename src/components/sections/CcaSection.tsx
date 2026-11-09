import { ccas } from "../../data/ccas";
import { CcaCard } from "../ui/CcaCard";
import { SectionHeading } from "../ui/SectionHeading";

export function CcaSection() {
  return (
    <section className="full-bleed bg-section">
      <SectionHeading
        headingClassName="section-title--center section-title--sm"
      >
        Co-Curricular Activities (CCAs)
      </SectionHeading>

      <div className="experience-grid">
        {ccas.map((item) => (
          <CcaCard key={item.role} {...item} />
        ))}
      </div>

      <br className="spacer-lg" />
    </section>
  );
}
