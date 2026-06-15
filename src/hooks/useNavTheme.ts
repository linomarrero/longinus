"use client";

import { useEffect, useState } from "react";

export type NavTheme = "light" | "dark";

const SECTION_CONFIG: Record<string, NavTheme> = {
  hero: "dark",
  thesis: "dark",
  "why-now": "light",
  team: "light",
  contact: "dark",
};

const SECTION_IDS = Object.keys(SECTION_CONFIG);

export function useNavTheme(): { theme: NavTheme } {
  const [theme, setTheme] = useState<NavTheme>("dark");

  useEffect(() => {
    const update = () => {
      const navBottom = 56;
      let activeId = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= navBottom && rect.bottom > navBottom) {
          activeId = id;
          break;
        }
      }

      setTheme(SECTION_CONFIG[activeId] ?? "dark");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { theme };
}
