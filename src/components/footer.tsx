import Link from "next/link";
import Logo from "./logo";
import { FadeUp } from "./animation/fade-up";
import { LuExternalLink } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className=" py-lg border-t border-t-outline mt-auto grid grid-cols-2 sm:grid-cols-3 items-center justify-center sm:text-sm text-xs gap-y-md">
      {/* Left Section */}
      <FadeUp className="flex flex-col gap-sm items-start sm:order-1">
        <Link
          href={"/"}
          className="hover:text-primary hover:italic transition-colors"
        >
          Home
        </Link>

        <Link
          href={"/about"}
          className="hover:text-primary hover:italic transition-colors"
        >
          About
        </Link>

        <Link
          href={"/works"}
          className="hover:text-primary hover:italic transition-colors"
        >
          Works
        </Link>
      </FadeUp>

      {/* Logo Section */}
      <FadeUp className="flex sm:flex-col flex-row justify-between gap-xs text-secondary items-center text-center  col-span-2 sm:col-span-1 order-3 sm:order-2">
        <Logo isLoading={false} />
        <p className="line-clamp-2 leading-1">MADE WITH LOVE</p>
      </FadeUp>

      {/* Right Section */}
      <FadeUp className="flex flex-col gap-sm items-end text-end sm:order-3 order-2">
        <a
          href={"https://www.linkedin.com/in/faried-idris"}
          className="flex items-center gap-xs hover:text-primary hover:italic transition-colors"
          rel="noreferrer"
          target="_blank"
          aria-label="Visit LinkedIn profile"
        >
          <LuExternalLink /> Linkedin
        </a>

        <a
          href={"https://github.com/psyofrelief"}
          className="flex items-center gap-xs hover:text-primary hover:italic transition-colors"
          rel="noreferrer"
          target="_blank"
          aria-label="Visit Github"
        >
          <LuExternalLink />
          Github
        </a>

        <a
          href={"/resume.pdf"}
          className="flex items-center gap-xs hover:text-primary hover:italic transition-colors"
          rel="noreferrer"
          target="_blank"
          aria-label="View resume"
        >
          <LuExternalLink />
          Resume
        </a>
      </FadeUp>
    </footer>
  );
}
