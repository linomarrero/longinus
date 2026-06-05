"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function TheEdge() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="edge"
      ref={ref}
      className="relative bg-ink py-28 md:py-40"
      aria-labelledby="edge-heading"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <motion.h2
          id="edge-heading"
          className="font-serif text-[clamp(2rem,5.5vw,5.75rem)] text-balance leading-[1.05] tracking-[-0.03em] text-white"
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={inView || reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          We make founders out of the people the rest of venture writes off.
        </motion.h2>

        <motion.p
          className="mt-10 font-sans text-sm tracking-wide text-light-text md:mt-14 md:text-base"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={inView || reducedMotion ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          We reach the would-be banker before the offer letter does.
        </motion.p>
      </div>
    </section>
  );
}
