import { useState } from "react";

const STORAGE_KEY = "willian-portfolio-theme";

function getInitialTheme() {
  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem(STORAGE_KEY);
  } catch {
    // Usa a preferência do sistema quando o armazenamento não está disponível.
  }

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.querySelector('meta[name="theme-color"]').content =
      nextTheme === "dark" ? "#0d0e13" : "#f8f7fc";

    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // A troca de tema continua funcionando durante a sessão atual.
    }

    setTheme(nextTheme);
  }

  return { theme, toggleTheme };
}
