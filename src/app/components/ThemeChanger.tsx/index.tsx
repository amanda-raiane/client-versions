"use client";

import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";

export function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="dark:text-slate-200 space-x-2 pt-10">
      <button title="alterar para o tema light" onClick={() => setTheme("light")}>
        <Sun
          size={28}
          className={`${
            theme == "light"
              ? "text-slate-950 dark:text-slate-50"
              : "text-slate-500 dark:text-slate-500"
          }`}
        />
      </button>
      <button title="alterar para o tema dark" onClick={() => setTheme("dark")}>
        <Moon
          size={28}
          className={`${
            theme == "dark"
              ? "text-slate-950 dark:text-slate-50"
              : "text-slate-500 dark:text-slate-500"
          }`}
        />
      </button>
    </div>
  );
}