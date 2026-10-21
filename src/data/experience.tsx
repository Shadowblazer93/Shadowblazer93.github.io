import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    role: "Incoming Full Stack Developer Intern",
    org: "Seagate Technologies",
    period: "Jan 2027 - May 2027",
    location: "Singapore",
    logo: "/assets/seagate_logo.png",
    logoAlt: "Seagate Logo",
    tone: "green",
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Nanyang Technological University, Singapore",
    period: "Sept 2025 - Current",
    location: "Singapore",
    logo: "/assets/NTU_logo.png",
    logoAlt: "NTU Logo",
    description: (
      <>
        • Developed features for <b>SIERRA</b>, a visual query interface for
        property graphs using{" "}
        <span className="text-highlight">
          React, Neo4j, Cypher and Docker
        </span>
        .<br />
        • Built React front-end components for new features with emphasis on
        interactive and intuitive data visualization.
        <br />
        • Implemented Cypher query builders in Neo4j to support advanced graph
        operations and integrated them with backend services.
        <br />
        • Collaborated with faculty to define requirements and translate them
        into technical features enhancing graph data exploration.
        <br />
      </>
    ),
    links: [
      {
        label: "Github",
        href: "https://github.com/Shadowblazer93/SIERRA",
        icon: "/assets/github-mark-white.png",
        variant: "dark",
      },
      {
        label: "Website",
        href: "https://shadowblazer93.github.io/SIERRA",
        icon: "/assets/website.png",
        variant: "dark",
      },
      {
        label: "Demo",
        href: "https://youtu.be/ogFBnBrBaP8",
        icon: "/assets/video.png",
        variant: "dark",
      },
    ],
  },
];
