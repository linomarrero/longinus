"use client";

import { useEffect, useState } from "react";

export type NavTheme = "light" | "dark";

type NavState = {
  theme: NavTheme;
  overAccent: boolean;
};

const SECTION_CONFIG: Record<string, { theme: NavTheme; accent?: boolean }> = {
  hero: { theme: "dark", accent: true },
  divergence: { theme: "dark", accent: true },
  thesis: { theme: "dark" },
  "why-now": { theme: "light" },
  edge: { theme: "dark" },
  team: { theme: "light" },
  contact: { theme: "dark" },
};

const SECTION_IDS = Object.keys(SECTION_CONFIG);

export function useNavTheme(): NavState {
  const [state, setState] = useState<NavState>({ theme: "dark", overAccent: false });

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];

    if (sections.length === 0) return;

    const update = () => {
      const navBottom = 72;
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

      const config = SECTION_CONFIG[activeId] ?? SECTION_CONFIG.hero;
      setState({
        theme: config.theme,
        overAccent: config.accent ?? false,
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return state;
}
