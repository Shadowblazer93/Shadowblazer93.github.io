/**
 * The GitHub card is an external image whose colours come from hex values in
 * its URL, so the theme-specific query string is appended at render time.
 */
export const githubStats = {
  profileUrl: "https://github.com/Shadowblazer93",
  baseUrl:
    "https://github-readme-stats-eight-theta.vercel.app/api?username=Shadowblazer93&hide_border=true&include_all_commits=true&count_private=true&hide=contribs",
  colors: {
    dark: "&bg_color=101010&text_color=f0f0f0&title_color=58c5ff",
    light: "&bg_color=ffffff&text_color=1a1c22&title_color=2f66d0",
  },
} as const;

export const leetCodeStats = {
  profileUrl: "https://leetcode.com/Shadowblazer93/",
  imageUrl: "https://leetcard.jacoblin.cool/Shadowblazer93?border=0&radius=20",
} as const;
