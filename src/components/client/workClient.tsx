"use client";

import { FadeUp } from "@/components/animation/fade-up";
import GrainEffect from "@/components/grained";
import H1 from "@/components/heading/heading-large";
import H2 from "@/components/heading/heading-medium";
import InfoContainer from "@/components/info-container";
import InfoRow from "@/components/info-row";
import Panel from "@/components/panel";
import Paragraph from "@/components/paragraph";
import Pill from "@/components/pill";
import ProjectItem from "@/components/project-item";
import { useAppContext } from "@/context/app-context";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useRef } from "react";
import { LuLink } from "react-icons/lu";

export default function WorkClient() {
  const { slug } = useParams();
  const { projects } = useAppContext();
  const project = projects.find((p) => p.slug.toLowerCase() === slug);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Find next project
  const currentIndex = projects.findIndex((p) => p.slug.toLowerCase() === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    notFound();
  }

  return (
    <Panel>
      <div className="flex flex-col xl:grid grid-cols-2 justify-between gap-xl">
        <FadeUp className="flex flex-col justify-between">
          <FadeUp>
            <H1>{project.name}</H1>
            <Paragraph>{project.description}</Paragraph>
          </FadeUp>
          <div className="flex flex-wrap gap-xs mt-auto pt-md">
            {project.techStack.map((stack) => (
              <Pill key={Math.random()}>{stack}</Pill>
            ))}
          </div>
        </FadeUp>

        <InfoContainer>
          <InfoRow title="client">
            <p>{project.client}</p>
          </InfoRow>
          <InfoRow title="year">
            <p>{project.year}</p>
          </InfoRow>
          <InfoRow title="category">
            <p>{project.category}</p>
          </InfoRow>
          <InfoRow title="live project">
            <a
              href={project.link}
              rel="noreferrer"
              target="_blank"
              className="hover:text-primary transition-all flex items-center gap-xs"
              aria-label="View project"
            >
              <LuLink /> view
            </a>
          </InfoRow>
          <InfoRow title="source code">
            {project.source ? (
              <a
                href={project.source}
                rel="noreferrer"
                target="_blank"
                className="hover:text-primary transition-all flex items-center gap-xs"
                aria-label="View source code"
              >
                <LuLink /> github
              </a>
            ) : (
              <p className="line-through">Private</p>
            )}
          </InfoRow>
        </InfoContainer>
      </div>

      {/* Scaling Phones Image */}
      <motion.div className="bg-none flex rounded-md relative  overflow-hidden">
        <span id="grain" />
        <GrainEffect />
        <motion.div
          ref={ref}
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="z-[1]  h-full mx-auto flex-1 w-full"
        >
          <Image
            height={1920}
            width={1080}
            src={project.phonesImg}
            alt="phones image"
            className="w-full "
            loading="eager"
          />
        </motion.div>
      </motion.div>

      <FadeUp className="flex flex-col">
        <H2>Blueprint</H2>
        <div className="flex flex-col gap-sm">
          {project.blueprint.map((para) => (
            <Paragraph key={Math.random()}>{para}</Paragraph>
          ))}
        </div>
      </FadeUp>
      <div className="size-full pt-[4%] rounded-md bg-transparent flex items-center justify-center bg-cover bg-center relative">
        <FadeUp>
          <Image
            height={1920}
            width={1080}
            src={project.dualScreenImg}
            alt="dual screen image"
            loading="eager"
          />
        </FadeUp>
      </div>

      {/* Next Project Section */}
      <FadeUp className="flex flex-col gap-md">
        <H2>Next Project</H2>
        {nextProject && <ProjectItem project={nextProject} />}
      </FadeUp>
    </Panel>
  );
}
