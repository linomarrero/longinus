"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const STREAMS = [
  { d: "M620 40 C620 180, 180 220, 180 680", sink: "banking" },
  { d: "M600 40 C600 200, 220 260, 220 680", sink: "banking" },
  { d: "M640 40 C640 190, 160 250, 160 680", sink: "banking" },
  { d: "M580 40 C580 210, 600 280, 600 680", sink: "consulting" },
  { d: "M660 40 C660 200, 640 270, 640 680", sink: "consulting" },
  { d: "M590 40 C590 220, 620 300, 620 680", sink: "consulting" },
  { d: "M650 40 C650 210, 980 280, 980 680", sink: "law" },
  { d: "M670 40 C670 190, 1020 260, 1020 680", sink: "law" },
  { d: "M630 40 C630 200, 960 270, 960 680", sink: "law" },
];

const DIVERGENT =
  "M610 40 C610 180, 610 320, 610 380 C610 380, 132 380, 132 720";

const SINKS = [
  { label: "Banking", x: 180 },
  { label: "Consulting", x: 600 },
  { label: "Law", x: 980 },
];

export function Divergence() {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const streamProgress = useTransform(scrollYProgress, [0.05, 0.45], [0, 1]);
  const divergentProgress = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);
  const captionOpacity = useTransform(scrollYProgress, [0.62, 0.78], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.62, 0.78], [24, 0]);
  const labelOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);

  return (
    <section
      id="divergence"
      ref={containerRef}
      className="relative bg-navy"
      aria-labelledby="divergence-heading"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 px-6 md:grid-cols-[1fr_0.85fr] md:gap-16 md:px-10">
          <div className="relative order-2 md:order-1">
            <svg
              viewBox="0 0 1200 760"
              className="h-auto w-full max-h-[55vh] md:max-h-[70vh]"
              role="img"
              aria-labelledby="divergence-heading divergence-desc"
            >
              <title id="divergence-heading">Talent divergence diagram</title>
              <desc id="divergence-desc">
                Talent streams flow toward traditional career paths. One
                stream diverts along the spear line.
              </desc>

              <defs>
                <linearGradient id="sinkGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--muted)" stopOpacity="0" />
                  <stop offset="100%" stopColor="var(--muted)" stopOpacity="0.15" />
                </linearGradient>
              </defs>

              {SINKS.map((sink) => (
                <g key={sink.label}>
                  <ellipse
                    cx={sink.x}
                    cy={700}
                    rx={90}
                    ry={28}
                    fill="url(#sinkGlow)"
                  />
                  <motion.text
                    x={sink.x}
                    y={748}
                    textAnchor="middle"
                    className="fill-muted font-sans text-[22px] uppercase tracking-[0.2em]"
                    style={{ opacity: reducedMotion ? 1 : labelOpacity }}
                  >
                    {sink.label}
                  </motion.text>
                </g>
              ))}

              {STREAMS.map((stream, i) => (
                <motion.path
                  key={stream.d}
                  d={stream.d}
                  fill="none"
                  stroke="var(--muted)"
                  strokeWidth={1.5}
                  strokeOpacity={0.35 + (i % 3) * 0.08}
                  pathLength={1}
                  style={{
                    pathLength: reducedMotion ? 1 : streamProgress,
                    opacity: reducedMotion ? 0.5 : streamProgress,
                  }}
                />
              ))}

              <motion.path
                d={DIVERGENT}
                fill="none"
                stroke="var(--crimson)"
                strokeWidth={2}
                pathLength={1}
                style={{
                  pathLength: reducedMotion ? 1 : divergentProgress,
                  opacity: reducedMotion ? 1 : divergentProgress,
                }}
              />

              <circle cx={610} cy={40} r={4} fill="var(--bg)" fillOpacity={0.6} />
              <motion.circle
                cx={132}
                cy={720}
                r={5}
                fill="var(--crimson)"
                style={{ opacity: reducedMotion ? 1 : divergentProgress }}
              />
            </svg>
          </div>

          <motion.div
            className="order-1 md:order-2 md:pl-8"
            style={
              reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: captionOpacity, y: captionY }
            }
          >
            <p className="max-w-xl font-serif text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.2] tracking-[-0.02em] text-white">
              Most Stanford builders take the safe path. ASES is where we find
              them first.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="h-[180vh]" aria-hidden="true" />
    </section>
  );
}
