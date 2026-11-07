import { certifications } from "../../data/certifications";
import { FleurDeLis, Squiggle } from "../ui/Doodles";
import { GithubStats } from "../ui/GithubStats";
import { LeetCodeStats } from "../ui/LeetCodeStats";

export function AboutSection() {
  return (
    <section>
      <div className="about-hero" data-reveal>
        <div className="about-heading-wrap">
          <h2 className="about-heading">
            About <span className="about-heading-accent">Me</span>
          </h2>
          <Squiggle className="about-squiggle" tone="green" />
          <FleurDeLis className="about-fleur" tone="yellow" />
        </div>
      </div>

      <p>
        Year 3 Student at NTU, Singapore
        <br />
        Computer Science : <b>Honours (Highest Distinction)</b>
      </p>
      <ul className="about-bullets" data-reveal>
        <li>
          <a
            className="credential"
            href="https://lnkd.in/p/eCA42VAy"
            target="_blank"
            rel="noreferrer"
          >
            CCDS Dean’s List for Academic Year 2025-2026
          </a>
        </li>
      </ul>

      <br />

      <div className="about-columns">
        <div className="about-left" data-reveal>
          <p className="about-subheading">
            Certifications
            <br />
          </p>
          {certifications.map((certification) => (
            <p className="about-list" key={certification.name}>
              {certification.name} |{" "}
              <a
                className="credential"
                href={certification.credentialUrl}
                target="_blank"
                rel="noreferrer"
              >
                Credential{" "}
                <i
                  className="fa fa-external-link external-icon--small"
                  aria-hidden="true"
                />
              </a>
            </p>
          ))}
          <hr className="about-divider" />
        </div>

        <div className="about-card">
          <div className="about-card-inner">
            <GithubStats />
            <LeetCodeStats />
          </div>
        </div>
      </div>

      <br className="spacer-md" />
    </section>
  );
}
