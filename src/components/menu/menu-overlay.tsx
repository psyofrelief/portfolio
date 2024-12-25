"use client";

import { useAppContext } from "@/context/app-context";
import MenuNavLink from "./menu-nav-link";
import MenuExtLink from "./menu-ext-link";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
  const { menuOpen } = useAppContext();

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="fixed top-0 right-0 left-0 bottom-0 size-full z-[98] px-xl md:px-xxl bg-black flex flex-col justify-center max-w-[1440px] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <div className="rounded-md flex flex-col w-full justify-center max-w-[800px] mx-auto bg-outline border border-outline mt-8 gap-y-[4px] px-1 py-1">
            <MenuNavLink href="/" num="01">
              home
            </MenuNavLink>
            <MenuNavLink href="/about" num="02">
              about
            </MenuNavLink>
            <MenuNavLink href="/works" num="03">
              works
            </MenuNavLink>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-between text-center gap-[4px] bg-outline text-md">
              <MenuExtLink href="https://www.linkedin.com/in/faried-idris">
                LinkedIn
              </MenuExtLink>

              <MenuExtLink href="https://github.com/psyofrelief">
                github
              </MenuExtLink>

              <MenuExtLink href="/resume.pdf">resume</MenuExtLink>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
