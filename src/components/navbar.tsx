"use client";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { motion } from "framer-motion";
import MenuTrigger from "./menu/menu-trigger";

export default function Navbar() {
  const pathname = usePathname();

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.nav
      key={pathname} // Ensures the component remounts on route change
      initial="hidden"
      animate="show"
      variants={navbarVariants}
      className="flex mix-blend-exclusion z-[99] justify-between items-center py-md fixed top-0 left-0 right-0 px-sm sm:px-xl max-w-[1440px] mx-auto "
    >
      <Logo />
      <MenuTrigger />
    </motion.nav>
  );
}
