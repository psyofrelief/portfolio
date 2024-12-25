import Button from "./button";
import { LuMail } from "react-icons/lu";

export default function CallToAction() {
  return (
    <div className="flex md:flex-row flex-col gap-sm items-center py-lg border-t border-t-outline whitespace-nowrap">
      <p className="text-md md:text-lg font-semibold">Want to get in touch?</p>
      <div className="flex-1 items-center hidden md:flex">
        <div className="h-[2px] w-full bg-gradient-to-r from-outline via-secondary  to-outline size-none animate-gradient rounded-full" />
      </div>
      <a
        href="mailto:6faried@gmail.com"
        rel="noreferrer"
        target="_blank"
        className="flex"
        tabIndex={-1}
        aria-label="Send email"
      >
        <Button className="flex flex-row">
          EMAIL ME
          <span>
            <LuMail />
          </span>
        </Button>
      </a>
    </div>
  );
}
