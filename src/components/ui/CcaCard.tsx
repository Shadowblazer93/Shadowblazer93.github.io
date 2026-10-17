import type { CcaItem } from "../../data/types";

/** A single co-curricular activity entry. */
export function CcaCard({ role, org, period, location, logo, logoAlt }: CcaItem) {
  return (
    <article className="cca-card">
      <div className="exp-title-row">
        <h1 className="card-title">{role}</h1>
        <img className="exp-logo" src={logo} alt={logoAlt} />
      </div>

      <p className="exp-org">{org}</p>
      <p className="exp-meta">
        {period} | {location}
      </p>
    </article>
  );
}
