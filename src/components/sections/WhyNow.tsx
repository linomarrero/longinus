"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "@/components/ui/CountUp";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function WhyNow() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="why-now"
      ref={ref}
      className="relative min-h-screen bg-light-gray py-24 md:py-32"
      aria-labelledby="why-now-heading"
    >
      <div className="mx-auto flex min-h-[70vh] w-full max-w-[1400px] flex-col justify-center px-6 md:px-10">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[auto_1fr] md:gap-20">
          <div className="md:-ml-4">
            <p className="sr-only" id="why-now-heading">
              Gen Z now starts more new U.S. companies than boomers
            </p>
            <CountUp
              value={9}
              suffix="%"
              className="block font-serif text-[clamp(8rem,28vw,18rem)] leading-[0.82] tracking-[-0.05em] text-ink"
            />
          </div>

          <motion.p
            className="max-w-lg pb-2 font-sans text-[clamp(1rem,2vw,1.25rem)] leading-[1.65] text-muted md:pb-8 md:pt-16"
            initial={reducedMotion ? false : { opacity: 0, x: 30 }}
            animate={inView || reducedMotion ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Gen Z now starts more new U.S. companies than boomers. AI erased
            the barriers. The constraint was never capital, it&apos;s
            conviction.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
