import { createContext } from "react";

export type ThemePreference = "system" | "dark" | "light";
export type ResolvedTheme = "dark" | "light";

export interface ThemeContextValue {
  /** What the visitor picked: follow the OS, or force dark / light. */
  preference: ThemePreference;
  /** The theme actually painted right now ("system" resolved to dark or light). */
  resolvedTheme: ResolvedTheme;
  setPreference: (preference: ThemePreference) => void;
  /** Cycles system -> dark -> light -> system, matching the header button. */
  cyclePreference: () => void;
}

export const THEME_STORAGE_KEY = "theme-preference";
export const THEME_PREFERENCES: readonly ThemePreference[] = [
  "system",
  "dark",
  "light",
];

export const ThemeContext = createContext<ThemeContextValue | null>(null);
