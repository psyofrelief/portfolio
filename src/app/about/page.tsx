import { FadeUp } from "@/components/animation/fade-up";
import H1 from "@/components/heading/heading-large";
import H2 from "@/components/heading/heading-medium";
import InfoContainer from "@/components/info-container";
import InfoRow from "@/components/info-row";
import Panel from "@/components/panel";
import Paragraph from "@/components/paragraph";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FARIEDIDRIS - ABOUT",
  description:
    "Find out more about who I am, my background, and the passion that drives my work. Learn how I blend technical expertise, creativity, and a dedication to quality in all that I do.",
};

export default function About() {
  return (
    <Panel>
      <FadeUp className="flex flex-col">
        <H1>About me</H1>
        <Paragraph>
          I’m a full-stack developer who loves turning ideas into working,
          scalable web applications. With experience in Laravel, Next.js, React,
          TypeScript, and SQL, I’ve built everything from custom e-commerce
          platforms to API-driven systems. I learned all the basics two years
          ago at home, thanks to{" "}
          <span>
            <a
              href="https://www.theodinproject.com/about"
              rel="noreferrer"
              target="_blank"
              className="underline font-bold hover:text-primary transition-colors"
              aria-label="Visit The Odin Project"
            >
              The Odin Project.
            </a>
          </span>{" "}
          My passion for art brings an extra layer of thoughtfulness to user
          interfaces, ensuring they’re not just functional but also intuitive.
          I’m comfortable working on both the front-end and back-end, and I take
          a hands-on approach to making sure all parts of a project are well
          integrated. I build systems that are future-proof and easy to
          maintain. Outside of development, I’m always learning and
          experimenting with new tools and technologies. It&apos;s how I picked
          up graphic design & tools such as Figma in the past year. I’ve always
          believed in taking on challenges and solving problems with creativity
          and persistence, and I’d love to bring that mindset to an established
          organisation.
        </Paragraph>
      </FadeUp>

      <InfoContainer>
        <InfoRow title="full name">
          <p>faried idris</p>
        </InfoRow>
        <InfoRow title="age">
          <p>22</p>
        </InfoRow>
        <InfoRow title="born">
          <p>khartoum, sudan</p>
        </InfoRow>
        <InfoRow title="residing">
          <p>perth, australia</p>
        </InfoRow>
      </InfoContainer>

      <div
        className="size-full h-[300px] sm:h-[500px] overflow-hidden relative rounded-md flex items-center justify-center bg-center opacity-90 bg-contain sm:bg-fixed bg-repeat-x"
        style={{
          backgroundImage: `url('/images/ascii.webp')`,
        }}
      />

      <section className="flex flex-col gap-md">
        <FadeUp staggerChildren={0.1} className="flex flex-col">
          <H2>Skills</H2>
          <Paragraph>
            I focus on ensuring that my projects function well, striving for
            high Lighthouse ratings. I have experience implementing CI/CD
            pipelines to streamline development and automated testing to
            identify problems early. I&apos;ve worked with APIs in the past -
            both creating my own, and using third party ones. I use Vercel,
            DigitalOcean, Forge, and AWS regularly, and I adhere to best
            practices to maintain readable and well organised code. Heres my
            day-to-day tech stack:
          </Paragraph>
        </FadeUp>

        <div className="flex flex-col sm:grid grid-cols-3 text-xs xs:text-sm sm:text-md uppercase text-secondary">
          <FadeUp className="flex flex-col gap-sm">
            <p className="text-foreground">Frontend</p>
            <p>NextJs</p>
            <p>TypeScript</p>
            <p>Tailwind</p>
          </FadeUp>
          <FadeUp className="flex flex-col gap-sm items-center text-center">
            <p className="text-foreground">Backend</p>

            <p>Laravel</p>
            <p>Node</p>
            <p>SQL</p>
          </FadeUp>
          <FadeUp className="flex flex-col gap-sm items-end text-end">
            <p className="text-foreground">Misc</p>

            <p>Illustrator</p>
            <p>Figma</p>
            <p>Git</p>
          </FadeUp>
        </div>
      </section>
      <p className="text-secondary normal-case text-xs xs:text-sm sm:text-md">
        <br />
        Need more info?
        <a
          href="/resume.pdf"
          rel="noreferrer"
          target="_blank"
          className="hover:underline text-foreground hover:text-primary  transition-all"
          aria-label="View resume"
        >
          {" "}
          Click here to view resume
        </a>
      </p>
    </Panel>
  );
}
