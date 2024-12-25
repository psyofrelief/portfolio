"use client";
import { useAppContext } from "@/context/app-context";

export default function MenuTrigger() {
  const { menuOpen, toggleMenu } = useAppContext();

  return (
    <button
      className="size-6 flex flex-col justify-between py-1 cursor-pointer group"
      onClick={toggleMenu}
      type="button"
      tabIndex={0}
      aria-label="Menu trigger"
    >
      {/* Lines */}
      <div
        className={`h-[2px] w-full bg-foreground transition-all duration-300 group-hover:bg-primary ${
          menuOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <div
        className={`h-[2px] w-full bg-foreground transition-all duration-300 group-hover:bg-primary ${
          menuOpen ? "opacity-0" : ""
        }`}
      />
      <div
        className={`h-[2px] w-full bg-foreground transition-all duration-300 group-hover:bg-primary ${
          menuOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      />
    </button>
  );
}
