"use client";
import { FadeUp } from "@/components/animation/fade-up";
import H1 from "@/components/heading/heading-large";
import Panel from "@/components/panel";
import Paragraph from "@/components/paragraph";
import ProjectItem from "@/components/project-item";
import { useAppContext } from "@/context/app-context";

export default function WorksClient() {
  const { projects } = useAppContext();

  return (
    <Panel>
      <FadeUp className="flex flex-col">
        <H1>Hall Of Fame</H1>
        <Paragraph>
          Welcome to the hall of fame collection. A variety of my favorite
          projects are included here; some are experimental, some are useful,
          and each one represents a little portion of my development path.
          Explore what I&apos;ve been up to by diving in.
        </Paragraph>
      </FadeUp>
      {projects.map((project) => (
        <ProjectItem key={project.name} project={project} />
      ))}
    </Panel>
  );
}
