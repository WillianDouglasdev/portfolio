import { useTheme } from "../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const nextThemeLabel = theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro";

  return (
    <button
      className="icon-button"
      type="button"
      onClick={toggleTheme}
      aria-label={nextThemeLabel}
      title={nextThemeLabel}
    >
      <i className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon-stars"}`} aria-hidden="true" />
    </button>
  );
}

export default ThemeToggle;
