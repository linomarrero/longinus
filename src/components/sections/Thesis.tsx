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
      className="relative flex min-h-screen items-center bg-navy py-24"
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
          The data says we&apos;re wrong.{" "}
          <span className="text-crimson">We bet anyway.</span>
        </motion.h2>

        <motion.div
          className="ml-0 mt-10 max-w-2xl space-y-6 font-sans text-[clamp(1rem,2vw,1.125rem)] leading-[1.65] text-white/80 md:ml-[18vw] md:mt-12"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView || reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>
            The biggest companies get built by founders in their forties with
            years of experience behind them. That&apos;s the base rate, and we
            know it. Our bet is the rare young exception, years before anyone
            else will write the check.
          </p>
          <p>
            We can do that because we run ASES, the largest entrepreneurship
            organization at Stanford. Garry Tan came through it. So did David
            Lee. Every year we meet hundreds of builders before they&apos;ve
            decided they&apos;re founders, and we&apos;re the first call when
            they do.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
