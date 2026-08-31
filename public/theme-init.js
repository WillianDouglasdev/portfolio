(() => {
  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem("willian-portfolio-theme");
  } catch {
    // A preferência do sistema é o fallback quando o armazenamento está bloqueado.
  }

  const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
  const initialTheme = savedTheme || systemTheme;

  document.documentElement.dataset.theme = initialTheme;
  document.querySelector('meta[name="theme-color"]').content =
    initialTheme === "dark" ? "#0c0d13" : "#f8f7fc";
})();
