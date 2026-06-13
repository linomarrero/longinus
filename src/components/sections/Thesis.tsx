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
          The gap isn&apos;t undiscovered startups. It&apos;s{" "}
          <span className="text-crimson">undiscovered founders</span>
        </motion.h2>

        <motion.div
          className="ml-0 mt-10 max-w-2xl space-y-6 font-sans text-[clamp(1rem,2vw,1.125rem)] leading-[1.65] text-white/80 md:ml-[18vw] md:mt-12"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView || reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>
            The evidence is clear, and most funds look away from it: the
            founders who build the biggest companies are usually experienced
            and well into their careers. We don&apos;t argue with that. We
            exploit what it leaves behind.
          </p>
          <p>
            Capital crowds toward the proven founder and bids them up. The rare
            young outlier, the one who doesn&apos;t yet know they&apos;re a
            founder, sits undiscovered and unpriced, one safe decision away
            from vanishing into banking, consulting, or law.
          </p>
          <p>
            We don&apos;t guess at where they are. We lead ASES, the largest
            entrepreneurship organization at Stanford and the network dozens of
            venture firms compete just to reach. We&apos;re inside it. We see
            real conviction before it&apos;s performed for a check, and we
            reach the would-be founder before the offer letter does.
          </p>
          <p>
            That&apos;s the edge: not sharper taste across a conference table,
            but proprietary access to the best young builders in the world,
            early, cheap, and uncontested.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
