"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function SpearLine() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.015, 1], [0, 1, 1]);

  if (reducedMotion) {
    return (
      <div
        className="pointer-events-none fixed spear-line-x spear-line-y z-40 w-[2px] bg-crimson"
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.div
      className="pointer-events-none fixed spear-line-x spear-line-y z-40 w-[2px]"
      style={{ opacity }}
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full origin-top bg-crimson"
        style={{ scaleY }}
      />
    </motion.div>
  );
}
