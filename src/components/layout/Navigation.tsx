"use client";

import { useEffect, useState } from "react";
import { NavLogo } from "@/components/layout/NavLogo";
import { useNavTheme } from "@/hooks/useNavTheme";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const links = [
  { label: "Thesis", href: "#thesis" },
  { label: "Why Now", href: "#why-now" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const reducedMotion = useReducedMotion();
  const { theme, overAccent } = useNavTheme();
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setTimeout(() => setVisible(true), 2200);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  const isLight = theme === "light";
  const linkClass = isLight
    ? "text-ink/70 hover:text-ink"
    : "text-white/70 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-[background-color,opacity] duration-300 ${
        isLight ? "bg-light-gray/75" : "bg-ink/75"
      } ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10 md:py-5"
        aria-label="Primary"
      >
        <NavLogo theme={theme} useBlend={!overAccent} />

        <ul className="flex items-center gap-3 sm:gap-6 md:gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.14em] transition-colors sm:text-[11px] sm:tracking-[0.18em] md:text-xs ${linkClass}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
