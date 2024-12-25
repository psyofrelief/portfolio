"use client";
import Button from "@/components/button";
import { FadeUp } from "@/components/animation/fade-up";
import H2 from "@/components/heading/heading-medium";
import InfoContainer from "@/components/info-container";
import InfoRow from "@/components/info-row";
import Panel from "@/components/panel";
import Paragraph from "@/components/paragraph";
import ProjectItem from "@/components/project-item";
import { StaggeredFade } from "@/components/animation/staggered-fade";
import { useAppContext } from "@/context/app-context";
import Link from "next/link";
import { LuExternalLink, LuGithub, LuLink, LuLinkedin } from "react-icons/lu";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";

export default function Home() {
  const { projects } = useAppContext();

  const project = projects.find((p) => p.name.toLowerCase() === "shorx");

  const variants = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  if (!project) {
    return notFound();
  }

  return (
    <Panel home>
      <div className="border-outline flex flex-col items-center justify-center relative min-h-screen">
        <FadeUp className="text-xl sm:text-2xl whitespace-nowrap md:text-3xl font-extrabold flex items-center gap-xs sm:gap-sm tracking-tight">
          <p className="text-primary">Faried</p>
          <p className="text-secondary">Idris</p>
        </FadeUp>

        <StaggeredFade className="text-sm sm:text-md md:text-lg tracking-tight text-center whitespace-nowrap">
          Full Stack Developer / Designer
        </StaggeredFade>

        <motion.div
          className="flex items-end justify-between absolute left-0 right-0 bottom-md w-full"
          initial="hidden"
          animate="show"
          variants={variants}
        >
          <div className="inline-flex gap-xs">
            <a
              href="https://github.com/psyofrelief"
              rel="noreferrer"
              target="_blank"
              aria-label="Visit Github"
            >
              <LuGithub
                size={32}
                className="hover:stroke-primary transition-colors"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/faried-idris"
              rel="noreferrer"
              target="_blank"
              aria-label="Visit LinkedIn profile"
            >
              <LuLinkedin
                size={32}
                className="hover:stroke-primary transition-colors"
              />
            </a>
          </div>
          <a
            href="/resume.pdf"
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-xs text-sm hover:text-primary"
            aria-label="View resume"
          >
            RESUME
            <span>
              <LuExternalLink />
            </span>
          </a>
        </motion.div>
      </div>
      <FadeUp>
        <Paragraph>
          I have expertise with Laravel, Next.js, TypeScript, React, and some
          others. I start from scratch when developing websites & apps, making
          sure to create experiences that are clear, useful, secure, and easy to
          use. I feel at ease working on both the frontend & backend, ensuring
          that everything functions properly. I&apos;m currently freelancing, by
          harnessing my digital / graphic design skills alongside building
          websites and apps for my clients. I&apos;d love to chat and see how I
          can support your initiatives if you need someone that&apos;s
          dependable, realistic, and{" "}
          <span className="italic">not afraid to think outside the box.</span>
        </Paragraph>
      </FadeUp>

      <FadeUp className="flex flex-col mt-md">
        <H2>My Services</H2>
        <InfoContainer>
          <InfoRow title="Web Development">
            <p>01</p>
          </InfoRow>
          <InfoRow title="Graphic Design">
            <p>02</p>
          </InfoRow>
          <InfoRow title="Digital Branding">
            <p>03</p>
          </InfoRow>
        </InfoContainer>
      </FadeUp>

      <FadeUp className="flex flex-col">
        <H2>The Highlight</H2>
        <Link tabIndex={-1} href={"/works"}>
          <Button>
            ALL PROJECTS <LuLink />
          </Button>
        </Link>
        <ProjectItem className="mt-md" project={project} />
      </FadeUp>
    </Panel>
  );
}
