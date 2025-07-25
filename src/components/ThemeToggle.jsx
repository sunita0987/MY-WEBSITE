import React from "react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <button
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
      onClick={() => setDarkMode(!darkMode)}
    >
      Toggle {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
}
