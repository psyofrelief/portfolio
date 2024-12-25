"use client";
import { motion, useInView } from "framer-motion";
import * as React from "react";

export function FadeUp({
  children,
  className = "",
  staggerChildren = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  const FADE_UP = {
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "linear", stiffness: 100, damping: 0 },
    },
    hidden: { opacity: 0, y: 18 },
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : ""}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_UP}>{child}</motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}
