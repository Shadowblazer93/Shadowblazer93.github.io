import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  THEME_PREFERENCES,
  THEME_STORAGE_KEY,
  ThemeContext,
  type ResolvedTheme,
  type ThemePreference,
} from "./ThemeContext";

function isPreference(value: string | null): value is ThemePreference {
  return value === "system" || value === "dark" || value === "light";
}

function readStoredPreference(): ThemePreference {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (isPreference(saved)) {
      return saved;
    }
  } catch {
    /* localStorage may be unavailable (private mode, disabled cookies). */
  }
  return "system";
}

function prefersDark(): boolean {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

function resolveTheme(preference: ThemePreference): ResolvedTheme {
  return preference === "system" ? (prefersDark() ? "dark" : "light") : preference;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(
    readStoredPreference,
  );
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    resolveTheme(readStoredPreference()),
  );

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    setResolvedTheme(resolveTheme(next));
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* Ignore storage failures; the theme still applies for this session. */
    }
  }, []);

  const cyclePreference = useCallback(() => {
    const currentIndex = THEME_PREFERENCES.indexOf(preference);
    const next =
      THEME_PREFERENCES[(currentIndex + 1) % THEME_PREFERENCES.length];
    setPreference(next);
  }, [preference, setPreference]);

  // Paint the resolved theme on <html> so CSS can react via [data-theme].
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedTheme);
  }, [resolvedTheme]);

  // Follow live OS changes while the visitor is on the "system" preference.
  useEffect(() => {
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!media) {
      return;
    }

    const handleChange = () => {
      if (preference === "system") {
        setResolvedTheme(media.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [preference]);

  const value = useMemo(
    () => ({ preference, resolvedTheme, setPreference, cyclePreference }),
    [preference, resolvedTheme, setPreference, cyclePreference],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
