import { useTheme, type ThemePreference } from "../../theme";
import { cn } from "../../utils/cn";

const OPTIONS: Array<{ value: ThemePreference; label: string; icon: string }> = [
  { value: "system", label: "System", icon: "fa fa-desktop" },
  { value: "dark", label: "Dark", icon: "fa fa-moon-o" },
  { value: "light", label: "Light", icon: "fa fa-sun-o" },
];

/**
 * Three-state theme control:
 * - clicking the button cycles system -> dark -> light -> system
 * - hovering (or focusing) reveals a menu to pick a preference directly
 * The button always shows sun/moon for the resolved theme; the desktop icon
 * only appears inside the menu.
 */
export function ThemeSwitcher() {
  const { preference, setPreference, cyclePreference } = useTheme();

  const label = `Theme: ${preference.charAt(0).toUpperCase()}${preference.slice(1)} (click to cycle, hover to choose)`;

  return (
    <div className="theme-switcher">
      <button
        className="theme-toggle"
        type="button"
        aria-label={label}
        aria-haspopup="true"
        onClick={cyclePreference}
      >
        <i className="fa fa-sun-o theme-icon-sun" aria-hidden="true" />
        <i className="fa fa-moon-o theme-icon-moon" aria-hidden="true" />
      </button>

      <div className="theme-menu" role="menu" aria-label="Color theme">
        {OPTIONS.map((option) => {
          const active = preference === option.value;
          return (
            <button
              key={option.value}
              type="button"
              className={cn("theme-option", active && "active")}
              role="menuitemradio"
              aria-checked={active}
              onClick={() => setPreference(option.value)}
            >
              <i className={option.icon} aria-hidden="true" />
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
