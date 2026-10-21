import type { CcaItem } from "../../data/types";

/** A single co-curricular activity entry, rendered as a compact pill. */
export function CcaCard({ role, org, period, tone }: CcaItem) {
  return (
    <article className={`cca-card${tone ? ` cca-card--${tone}` : ""}`}>
      <span className="cca-title">
        <span className="cca-role">{role}</span>
        <span className="cca-org">, {org}</span>
      </span>
      <span className="cca-period">{period}</span>
    </article>
  );
}
