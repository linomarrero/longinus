"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useState } from "react";
import { teamMembers } from "@/lib/team";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Team() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  const toggle = useCallback((id: string) => {
    setExpanded((current) => (current === id ? null : id));
  }, []);

  return (
    <section
      id="team"
      className="relative bg-surface py-36 md:py-48"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <h2
          id="team-heading"
          className="mb-16 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.03em] text-ink"
        >
          Our team
        </h2>

        <ul className="divide-y divide-rule">
          {teamMembers.map((member) => {
            const isOpen = expanded === member.id;

            return (
              <li key={member.id}>
                <button
                  type="button"
                  className="group flex w-full flex-col py-12 text-left md:py-16"
                  onClick={() => toggle(member.id)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) {
                      setExpanded(member.id);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia("(hover: hover)").matches) {
                      setExpanded(null);
                    }
                  }}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <span
                      className={`font-serif text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-[-0.03em] transition-colors duration-300 ${
                        isOpen ? "text-crimson" : "text-ink group-hover:text-crimson"
                      }`}
                    >
                      {member.name}
                    </span>
                    <span
                      className="hidden font-sans text-xs uppercase tracking-[0.2em] text-muted md:block"
                      aria-hidden="true"
                    >
                      {isOpen ? "Close" : "View"}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-8 pt-8 md:flex-row md:items-start md:gap-12 md:pt-10">
                          <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full md:h-52 md:w-52">
                            <Image
                              src={member.image}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 144px, 208px"
                            />
                          </div>
                          <ul className="flex flex-col gap-3 font-sans text-base leading-relaxed text-muted md:text-lg">
                            {member.credentials.map((credential) => (
                              <li key={credential}>{credential}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
