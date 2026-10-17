import type { ProjectLinkItem } from "../../data/types";
import { cn } from "../../utils/cn";

interface ProjectLinkProps extends ProjectLinkItem {
  /** First link in a row, nudged right by 20px. */
  indent?: boolean;
  /** The lead link of the featured card, nudged right by 210px. */
  lead?: boolean;
}

/** External pill link with an icon and a trailing "opens in new tab" marker. */
export function ProjectLink({
  label,
  href,
  icon,
  variant = "light",
  indent,
  lead,
}: ProjectLinkProps) {
  const dark = variant === "dark";

  const className = cn(
    dark ? "project-link-dark" : "project-link",
    indent && (dark ? "project-link-dark--indent" : "project-link--indent"),
    lead && "project-link--lead",
  );

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      <img className="link-icon" src={icon} alt="" />{" "}
      <span>{label}</span>{" "}
      <i className="fa fa-external-link external-icon" aria-hidden="true" />{" "}
    </a>
  );
}
