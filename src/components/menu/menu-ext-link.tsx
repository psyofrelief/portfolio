import { LuExternalLink } from "react-icons/lu";
import GrainEffect from "../grained";

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function MenuExtLink({ children, href }: Props) {
  return (
    <a
      href={href}
      rel="noreferrer"
      aria-label={`Visit ${href}`}
      target="_blank"
      className="relative bg-popover p-sm gap-xs text-sm text-secondary sm:text-md  flex justify-center items-center rounded-md hover:italic hover:text-primary overflow-hidden"
    >
      <span id="grain" className="hidden" />
      <GrainEffect />
      {children}
      <LuExternalLink />
    </a>
  );
}
