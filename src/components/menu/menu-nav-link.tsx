import Link from "next/link";
import { usePathname } from "next/navigation";
import GrainEffect from "../grained";
import { FadeUp } from "../animation/fade-up";

interface Props {
  children: React.ReactNode;
  num: string;
  href: string;
}

export default function MenuNavLink({ children, num, href }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className="py-md text-md sm:text-lg md:text-2xl px-lg sm:px-xl text-secondary font-extrabold tracking-wider rounded-md bg-popover flex justify-between items-center group relative overflow-hidden"
    >
      <span id="grain" className="hidden" />
      <GrainEffect />
      <FadeUp>
        <span
          className={`relative text-foreground z-10 mix-blend-exclusion  transition-colors duration-300 ${pathname === href && "text-primary line-through"}`}
        >
          + {children}
        </span>
      </FadeUp>
      <p className="font-mono italic relative z-10 transition-colors duration-300">
        {num}
      </p>
      <div className="absolute inset-0 bg-foreground -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
    </Link>
  );
}
