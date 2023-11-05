import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(localStorage.theme);
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const rootElement = window.document.documentElement;
    rootElement.classList.remove(nextTheme)
    rootElement.classList.add(theme);
    localStorage.setItem('theme',theme)
  }, [nextTheme, theme]);

  return [nextTheme, setTheme];
}
