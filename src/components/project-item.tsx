import Image from "next/image";
import GrainEffect from "./grained";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

interface Props {
  project: Project | undefined;
  className?: string;
}

export default function ProjectItem({ project, className = "" }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const baseColor = project?.colour || "transparent";
  const hoverColor = project?.colour ? `${baseColor}20` : "transparent";

  return (
    <Link
      href={`/works/${project?.slug.toLowerCase()}`}
      className={`relative flex flex-col-reverse justify-between gap-md border border-outline w-full overflow-hidden rounded-md items-center p-md hover:bg-popover hover:scale-95 ease-out duration-300 transition-all transform will-change-transform 2xs:pb-0 ${className} w-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? hoverColor : `${baseColor}70`,
      }}
    >
      <span id="grain" className="hidden" />
      <GrainEffect />

      {/* Image with slide-up animation */}
      <motion.div
        className="2xs:block hidden z-[1] border-black  bg-black rounded-t-md overflow-clip w-full"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }} //
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          height={1920}
          width={1080}
          alt={`${project?.name} display image`}
          src={project?.displayImg || ""}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="size-full"
          loading="eager"
        />
      </motion.div>

      <div className="flex items-center gap-xs tracking-wide whitespace-nowrap text-xs 2xs:text-sm sm:text-md font-medium">
        <p>{project?.name}</p>
        <span className="h-sm bg-secondary mix-blend-exclusion w-[1px]" />
        <p className="text-foreground mix-blend-exclusion">{project?.type}</p>
      </div>
    </Link>
  );
}
