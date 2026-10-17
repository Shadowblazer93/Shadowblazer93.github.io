import type { FeaturedProjectItem, ProjectItem } from "./types";

/** The wide SIERRA card at the top of the Projects section. */
export const featuredProject: FeaturedProjectItem = {
  title: "SIERRA",
  tech: "React.js, Neo4j, Javascript, Docker",
  videoSrc: "https://www.youtube.com/embed/ogFBnBrBaP8",
  videoTitle: "YouTube video player",
  heading: "Build Neo4j queries visually.",
  description: (
    <>
      Visual query builder for property graphs.
      <br />
      <br />
      • Real-time graph to cypher query translation.
      <br />
      • Theta/Equi Join support between predicates.
      <br />
      • Relationship property support.
      <br />
      • Advanced query parameters, e.g. hops and filters
      <br />
      • Join-validation system : detect &amp; fix mismatched joins.
      <br />
      • Easily import your Neo4j Aura server into SIERRA.
    </>
  ),
  links: [
    {
      label: "Github",
      href: "https://github.com/Shadowblazer93/SIERRA",
      icon: "/assets/github-mark.png",
      variant: "light",
    },
    {
      label: "Website",
      href: "https://shadowblazer93.github.io/SIERRA",
      icon: "/assets/website_black.png",
      variant: "light",
    },
    {
      label: "Demo",
      href: "https://youtu.be/ogFBnBrBaP8",
      icon: "/assets/video_black.png",
      variant: "light",
    },
  ],
};

export const lilianProject: ProjectItem = {
  title: "Lilian : Discord Bot",
  tech: "Javascript, Node.js, discord.js, npm",
  image: {
    src: "/assets/lilian_project_showcase.png",
    alt: "Lilian Discord bot showcase",
  },
  description: (
    <>
      <p className="project-description-lg">
        A moderation, utility and social bot for Discord.
        <br />
        Built using{" "}
        <span className="accent-green">Node.js</span> and deployed 24/7 on the
        cloud.
        <br />
        Integrated external APIs for real-time content inside discord.
      </p>
      <p className="project-description-lg">
        Verified by Discord{" "}
        <img
          className="verified-badge"
          src="/assets/discord_verified_check.png"
          alt="Verified"
        />
        <br /> in <b>100+</b> servers with <b>1000+</b> users.
      </p>
    </>
  ),
  links: [
    {
      label: "Github",
      href: "https://github.com/Shadowblazer93/Lilianv4",
      icon: "/assets/github-mark.png",
      variant: "light",
    },
    {
      label: "Top.gg",
      href: "https://top.gg/bot/728176491514298478",
      icon: "/assets/top.gg_logo.png",
      variant: "light",
    },
  ],
};

export const portfolioProject: ProjectItem = {
  title: "Portfolio Website",
  tech: "HTML/CSS, Javascript",
  image: { src: "/assets/portfolio.png", alt: "Portfolio website preview" },
  description: (
    <p className="project-description-lg">
      Website to display my achievements and contact info.
      <br />
      <br />
      Built from the ground up using custom animations.
      <br />
      Real-time Github and leetcode widget integration.
      <br />
      Hosted using Github pages.
    </p>
  ),
  links: [
    {
      label: "Github",
      href: "https://github.com/Shadowblazer93/Shadowblazer93.github.io",
      icon: "/assets/github-mark.png",
      variant: "light",
    },
  ],
};

export const btoProject: ProjectItem = {
  title: "BTO Management System",
  tech: "Java, HTML/CSS, UML",
  compact: true,
  linkSpacing: 1,
  description: (
    <p className="project-description-lg">
      An application to manage and submit BTO applications.
      <br />
      Applied OOP and SOLID design principles.
      <br />
      Persistent Data through CSV storage.
    </p>
  ),
  links: [
    {
      label: "Github",
      href: "https://github.com/Shadowblazer93/SC2002-BTO-Project",
      icon: "/assets/github-mark.png",
      variant: "light",
    },
  ],
};
