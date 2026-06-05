"use client";

import { NavLogo } from "@/components/layout/NavLogo";
import { useNavTheme } from "@/hooks/useNavTheme";

const links = [
  { label: "Thesis", href: "#thesis" },
  { label: "Why Now", href: "#why-now" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const { theme } = useNavTheme();

  const isLight = theme === "light";
  const linkClass = isLight
    ? "text-ink/70 hover:text-ink"
    : "text-white/70 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        isLight ? "bg-light-gray/70" : "bg-ink/70"
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between py-2 pl-3 pr-5 md:py-2.5 md:pl-4 md:pr-8"
        aria-label="Primary"
      >
        <NavLogo theme={theme} />

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
