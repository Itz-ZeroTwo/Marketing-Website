import React, { useEffect, useState } from "react";

const getInitialTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

 
  const handleToggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      className="theme-toggle-btn"
      onClick={handleToggle}
      aria-label="Toggle light/dark mode"
      title="Toggle light/dark mode"
    >
      {theme === "light" ? (
        <i className="fas fa-moon"></i>
      ) : (
        <i className="fas fa-sun"></i>
      )}
    </button>
  );
};

export default ThemeToggle;
