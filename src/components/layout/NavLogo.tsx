"use client";

import Image from "next/image";
import type { NavTheme } from "@/hooks/useNavTheme";

type NavLogoProps = {
  theme: NavTheme;
  useBlend: boolean;
};

const logoClass = "h-26 w-auto sm:h-32 md:h-38";

export function NavLogo({ theme, useBlend }: NavLogoProps) {
  const colorClass = theme === "light" ? "brightness-0" : "brightness-0 invert";

  return (
    <a
      href="#hero"
      className={`relative shrink-0 ${useBlend ? "mix-blend-difference" : ""}`}
      aria-label="Longinus Ventures home"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={1200}
        height={640}
        className={`${logoClass} ${useBlend ? "" : colorClass}`}
        priority
      />
    </a>
  );
}
