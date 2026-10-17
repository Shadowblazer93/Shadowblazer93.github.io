/** Joins truthy class names, so conditional classes stay readable in JSX. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
