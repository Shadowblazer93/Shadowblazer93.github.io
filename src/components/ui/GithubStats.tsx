import { githubStats } from "../../data/stats";
import { useTheme } from "../../theme";

/** Live GitHub stats card whose colours follow the active theme. */
export function GithubStats() {
  const { resolvedTheme } = useTheme();

  return (
    <a
      className="about-card-link"
      href={githubStats.profileUrl}
      target="_blank"
      rel="noreferrer"
    >
      <img
        id="github-stats"
        className="stats-image stats-image--github"
        src={githubStats.baseUrl + githubStats.colors[resolvedTheme]}
        alt="my Github Stats"
      />
    </a>
  );
}
