"use client";

import Image from "next/image";
import type { NavTheme } from "@/hooks/useNavTheme";

type NavLogoProps = {
  theme: NavTheme;
};

const logoClass = "h-18.3 w-auto sm:h-20.1 md:h-22";

export function NavLogo({ theme }: NavLogoProps) {
  const colorClass = theme === "light" ? "brightness-0" : "brightness-0 invert";

  return (
    <a
      href="#hero"
      className="relative shrink-0"
      aria-label="Longinus Ventures home"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={1200}
        height={640}
        className={`${logoClass} ${colorClass}`}
        priority
      />
    </a>
  );
}
