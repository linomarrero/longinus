"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedWords } from "@/components/ui/AnimatedWords";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [showSecondLine, setShowSecondLine] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setTimeout(() => setShowSecondLine(true), 1600);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] items-end bg-navy pb-16 pt-24 md:min-h-[90vh] md:pb-20 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[20%] top-[15%] h-[60vh] w-[60vh] rounded-full bg-crimson/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <h1
          id="hero-heading"
          className="max-w-[14ch] font-serif text-[clamp(2rem,5.5vw,4.75rem)] leading-[0.95] tracking-[-0.03em] text-white"
        >
          <AnimatedWords text="We don't find founders," delay={0.2} as="span" />
          <span className="mt-2 block min-h-[1.05em] text-crimson">
            {showSecondLine ? (
              <motion.span
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <AnimatedWords text="We make them." delay={0} as="span" />
              </motion.span>
            ) : (
              <span className="invisible" aria-hidden="true">
                We make them.
              </span>
            )}
          </span>
        </h1>
      </div>

      <motion.div
        className="absolute bottom-8 spear-line-x hidden h-16 w-[2px] origin-top bg-crimson md:block"
        initial={reducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />
    </section>
  );
}
