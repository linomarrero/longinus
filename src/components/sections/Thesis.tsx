"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Thesis() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="thesis"
      ref={ref}
      className="relative flex min-h-screen items-center bg-ink py-24"
      aria-labelledby="thesis-heading"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <motion.h2
          id="thesis-heading"
          className="ml-0 max-w-[18ch] font-serif text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.08] tracking-[-0.03em] text-white md:ml-[18vw]"
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={inView || reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          The gap isn&apos;t undiscovered startups. It&apos;s{" "}
          <span className="text-crimson">undiscovered founders</span>
        </motion.h2>
      </div>
    </section>
  );
}
