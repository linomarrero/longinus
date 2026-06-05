"use client";

import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type AnimatedWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "p" | "span";
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function AnimatedWords({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
}: AnimatedWordsProps) {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          custom={i + delay * 10}
          initial="hidden"
          animate="visible"
          variants={wordVariants}
          className="inline-block mr-[0.28em] last:mr-0"
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
