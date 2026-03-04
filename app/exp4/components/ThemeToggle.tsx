"use client";

import { Moon, Sun } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <button
      className={`${styles.toggle} ${theme === "dark" ? styles.dark : ""}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
      <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}
