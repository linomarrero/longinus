"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function AboutLonginus() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="about-longinus"
      ref={ref}
      className="relative bg-navy py-20 md:py-28"
      aria-labelledby="about-longinus-heading"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <motion.div
          className="mx-auto max-w-3xl text-center md:max-w-2xl"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView || reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            id="about-longinus-heading"
            className="mb-6 font-sans text-[10px] uppercase tracking-[0.2em] text-crimson sm:text-xs sm:tracking-[0.22em]"
          >
            About Longinus
          </p>
          <div className="space-y-4 font-sans text-[clamp(1rem,2.2vw,1.25rem)] font-medium leading-[1.7] text-white/70">
            <p>
              Founded at Stanford University, Longinus Ventures is a pre-seed fund
              run by the leaders of ASES.
            </p>
            <p>
              We write the first check to student founders, often before
              they&apos;ve raised a dollar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
