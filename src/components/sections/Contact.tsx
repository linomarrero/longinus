"use client";

import { motion, useInView } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type FormState = "idle" | "submitting" | "success";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotion();
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("submitting");

    window.setTimeout(() => {
      setFormState("success");
    }, 600);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-navy pb-12 pt-28 md:pb-16 md:pt-36"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute bottom-0 spear-line-x hidden h-24 w-[2px] bg-crimson md:block" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={inView || reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            id="contact-heading"
            className="max-w-[20ch] font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] tracking-[-0.03em] text-white"
          >
            The next great company is in a classroom right now. We exist to
            make that bet.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-16 md:mt-24 md:grid-cols-[1fr_1.1fr] md:gap-24">
            <div>
              <a
                href="mailto:hello@longinus.vc"
                className="font-serif text-2xl text-white transition-colors hover:text-crimson md:text-3xl"
              >
                hello@longinus.vc
              </a>
              <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-white/70">
                For founders, partners, and anyone building before the world
                notices.
              </p>
            </div>

            {formState === "success" ? (
              <div
                className="font-sans text-white/70"
                role="status"
                aria-live="polite"
              >
                <p className="text-lg text-white">Message received.</p>
                <p className="mt-2 text-sm">
                  We read every note. Expect to hear from us soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
                noValidate
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block font-sans text-xs uppercase tracking-[0.16em] text-muted">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full border-b border-white/20 bg-transparent py-3 font-sans text-white placeholder:text-white/30 focus:border-crimson focus:outline-none"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-sans text-xs uppercase tracking-[0.16em] text-muted">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full border-b border-white/20 bg-transparent py-3 font-sans text-white placeholder:text-white/30 focus:border-crimson focus:outline-none"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block font-sans text-xs uppercase tracking-[0.16em] text-muted">
                    What you&apos;re building
                  </span>
                  <input
                    type="text"
                    name="building"
                    className="w-full border-b border-white/20 bg-transparent py-3 font-sans text-white placeholder:text-white/30 focus:border-crimson focus:outline-none"
                    placeholder="One line on the company"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-sans text-xs uppercase tracking-[0.16em] text-muted">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none border-b border-white/20 bg-transparent py-3 font-sans text-white placeholder:text-white/30 focus:border-crimson focus:outline-none"
                    placeholder="Tell us what you're working on"
                  />
                </label>
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="font-sans text-sm uppercase tracking-[0.18em] text-white transition-colors hover:text-crimson disabled:opacity-50"
                >
                  {formState === "submitting" ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        <footer className="mt-24 border-t border-white/10 pt-8 md:mt-32">
          <p className="font-sans text-xs tracking-wide text-muted">
            &copy; {new Date().getFullYear()} Longinus Ventures
          </p>
        </footer>
      </div>
    </section>
  );
}
