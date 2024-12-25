"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  isLoading?: boolean;
}

export default function Logo({ isLoading = false }: Props) {
  return (
    <Link href={"/"} tabIndex={-2}>
      <motion.div
        className={`${isLoading ? "text-primary" : "text-foreground"} leading-none font-extrabold flex flex-col items-center justify-center relative hover:text-primary transition-colors`}
        animate={{
          rotate: isLoading ? 360 : 0,
        }}
        transition={{
          duration: isLoading ? 0.8 : 0.5,
          ease: "easeOut",
          repeat: isLoading ? Number.POSITIVE_INFINITY : 0,
        }}
        whileHover={{
          rotate: 180,
        }}
      >
        <p>F4R</p>
        <p>13D</p>
      </motion.div>
    </Link>
  );
}
