import { leetCodeStats } from "../../data/stats";

/** Static LeetCode stats card. */
export function LeetCodeStats() {
  return (
    <a
      className="about-card-link"
      href={leetCodeStats.profileUrl}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="stats-image stats-image--leetcode"
        src={leetCodeStats.imageUrl}
        alt="my Leetcode Stats"
      />
    </a>
  );
}
