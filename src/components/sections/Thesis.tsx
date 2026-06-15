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
          className="ml-0 max-w-[18ch] font-serif text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.03em] text-white md:ml-[18vw]"
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={inView || reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Most firms compete for founders after they&apos;ve decided to build.{" "}
          <span className="text-crimson">We find them before that.</span>
        </motion.h2>

        <motion.div
          className="ml-0 mt-10 max-w-2xl space-y-6 font-sans text-[clamp(1rem,2vw,1.125rem)] leading-[1.65] text-white/80 md:ml-[18vw] md:mt-12"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView || reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>
            Most firms meet their founders on pitch day, with memorized lines
            and a tailored deck. We get to them earlier, in the rooms other
            funds wish they could get into: the labs, student orgs, and dorm
            rooms where they start building.
          </p>
          <p>
            Our General Partners run ASES, the largest entrepreneurship
            organization at Stanford. Garry Tan came through it. So did David
            Lee. We meet hundreds of builders a year as peers, not across a
            pitch table.
          </p>
          <p>
            Returns don&apos;t come from meeting the most founders. They come
            from meeting the right ones first, and backing few enough to be in
            every round and every hard decision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
