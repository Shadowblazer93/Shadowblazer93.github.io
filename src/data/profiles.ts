import type { ProfileLink } from "./types";

/** Outbound profiles, grouped into the two rows shown in About. */
export const profileRows: ProfileLink[][] = [
  [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sb930/",
      icon: "/assets/InBug-White.png",
      variant: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/Shadowblazer93",
      icon: "/assets/github-mark-white.png",
      variant: "github",
    },
  ],
  [
    {
      label: "LeetCode",
      href: "https://leetcode.com/Shadowblazer93/",
      icon: "/assets/leetcode.png",
      variant: "leetcode",
    },
    {
      label: "Monkeytype",
      href: "https://monkeytype.com/profile/Sb93",
      icon: "/assets/monkeytype.svg",
      variant: "monkeytype",
    },
    {
      label: "ArtStation",
      href: "https://www.artstation.com/sb93",
      icon: "/assets/artstation_black.png",
      variant: "artstation",
    },
  ],
];
