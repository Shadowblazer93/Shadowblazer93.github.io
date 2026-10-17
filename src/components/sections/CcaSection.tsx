import { ccas } from "../../data/ccas";
import { CcaCard } from "../ui/CcaCard";

export function CcaSection() {
  return (
    <section className="full-bleed bg-section">
      <h2 className="section-title--center section-title--sm">
        Co-Curricular Activities (CCAs)
      </h2>

      <div className="experience-grid">
        {ccas.map((item) => (
          <CcaCard key={item.role} {...item} />
        ))}
      </div>

      <br className="spacer-lg" />
    </section>
  );
}
