"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
};

export function CountUp({
  value,
  suffix = "",
  className = "",
  duration = 1.4,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reducedMotion) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, value, duration, reducedMotion]);

  const shown = reducedMotion ? value : display;

  return (
    <span ref={ref} className={className} aria-label={`${value}${suffix}`}>
      {shown}
      {suffix}
    </span>
  );
}
