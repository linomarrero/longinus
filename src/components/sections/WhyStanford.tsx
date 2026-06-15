"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function WhyStanford() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="why-stanford"
      ref={ref}
      className="relative bg-navy py-20 md:py-28"
      aria-labelledby="why-stanford-heading"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <motion.div
          className="mx-auto max-w-3xl text-center md:max-w-2xl"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView || reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            id="why-stanford-heading"
            className="mb-6 font-sans text-[10px] uppercase tracking-[0.2em] text-crimson sm:text-xs sm:tracking-[0.22em]"
          >
            Why Stanford
          </p>
          <p className="font-sans text-[clamp(1rem,2.2vw,1.25rem)] font-medium leading-[1.7] text-white/70">
            Stanford has produced more billion-dollar founders than any university
            on earth. We&apos;re embedded in the network where they start, before
            anyone else is.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
