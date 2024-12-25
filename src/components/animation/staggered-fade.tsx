"use client";
import { motion, useInView } from "framer-motion";
import * as React from "react";

type TextStaggeredFadeProps = {
  className?: string;
  children: React.ReactNode;
};

export const StaggeredFade: React.FC<TextStaggeredFadeProps> = ({
  children,
  className = "",
}) => {
  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.03 },
    }),
  };

  // Split children into an array of words
  const letters = String(children).split("");

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : ""}
      variants={variants}
      viewport={{ once: true }}
      className={`${className}`}
    >
      {letters.map((word, i) => (
        <motion.span
          key={`${word}-${
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            i
          }`}
          variants={variants}
          custom={i}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
