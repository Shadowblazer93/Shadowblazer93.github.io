import type { ReactNode } from "react";

/** A link rendered as a pill button (project / experience / CTA links). */
export type LinkVariant = "light" | "dark";

export interface ProjectLinkItem {
  label: string;
  href: string;
  /** Path to the icon served from public/assets. */
  icon: string;
  variant?: LinkVariant;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  variant: "github" | "linkedin" | "resume";
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Certification {
  name: string;
  credentialUrl: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  location: string;
  logo: string;
  logoAlt: string;
  /** Optional accent for the card background (defaults to Macchiato yellow). */
  tone?: "green";
  description?: ReactNode;
  links?: ProjectLinkItem[];
}

export interface CcaItem {
  role: string;
  org: string;
  period: string;
  /** Optional accent for the pill background (defaults to Macchiato green). */
  tone?: "teal";
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectItem {
  title: string;
  tech: string;
  image?: ProjectImage;
  /** Rich description; arbitrary JSX so each project keeps its own copy. */
  description: ReactNode;
  links: ProjectLinkItem[];
  /** Reduces padding-bottom for the short stacked cards. */
  compact?: boolean;
  /** How many blank lines sit between the body and the links (default 2). */
  linkSpacing?: number;
}

export interface FeaturedProjectItem {
  title: string;
  tech: string;
  links: ProjectLinkItem[];
  videoSrc: string;
  videoTitle: string;
  heading: string;
  description: ReactNode;
}
