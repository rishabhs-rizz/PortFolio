import { Twitter, LinkedIn, Github, Mail } from "@/components/icons/icons";
import ShinyButton from "@/components/buttons/button";
import {
  CoffeeSupport,
  GithubSponsors,
  GPaySupport,
} from "@/components/icons/Supports";
import { Skills } from "@/components/skills/skills";
import { ProjectCard } from "@/components/icons/ProjectCard";
import { InfoTipProjects } from "@/components/ToolTip/ToolTip";
import { ProfilePic } from "@/components/Image/Image";
import { Contact } from "@/components/Contact/Contact";
import Status from "@/components/Status/Status";
import { Hire } from "@/components/icons/Hire";
export default function PortFolio() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-2 sm:px-4">
      <div className="bg-black w-full max-w-3xl mt-6 sm:mt-10 px-2 sm:px-6 md:px-10">
        <div className="prof-sec flex flex-col sm:flex-row gap-3 pb-8 border-b border-neutral-400/30">
          <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3">
            <ProfilePic />
            <Status text="Available" />
          </div>
          <div className="mt-3 flex-1">
            <h1 className="font-bricolage text-2xl sm:text-3xl">
              Rishabh Shukla
            </h1>
            <p className="text-base sm:text-lg">Software Engineer</p>
            <div className="tags flex gap-2 mt-3.5">
              <InfoTipProjects text="Github">
                <a
                  target="_blank"
                  href="https://github.com/rishabhs-rizz"
                  className="cursor-pointer hover:text-zinc-400 transition-colors duration-100 group"
                >
                  <Github />
                </a>
              </InfoTipProjects>
              <InfoTipProjects text="Twitter">
                <a
                  target="_blank"
                  href="https://x.com/intent/follow?screen_name=rishabhs_rizz"
                  className="cursor-pointer hover:text-zinc-400 transition-colors duration-100 group"
                >
                  <Twitter />
                </a>
              </InfoTipProjects>
              <InfoTipProjects text="LinkedIn">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rishabh-shukla-9725b123b/"
                  className="cursor-pointer hover:text-zinc-400 transition-colors duration-100 group"
                >
                  <LinkedIn />
                </a>
              </InfoTipProjects>
              <InfoTipProjects text="Mail">
                <a
                  target="_blank"
                  className="cursor-pointer hover:text-zinc-400 transition-colors duration-100 group"
                >
                  <Mail />
                </a>
              </InfoTipProjects>
            </div>
          </div>
        </div>
        <div className="about mt-8 sm:mt-10">
          <h1 className="text-xl sm:text-2xl md:text-[1.6rem] font-semibold tracking-tight text-start sm:text-left max-sm:text-center">
            About Me
          </h1>
          <p className="mt-1 text-sm sm:text-base">
            Hey! I am Rishabh Shukla, a 20-year old computer science student and
            full-stack developer who loves turning ideas into real, functional
            products.
          </p>
          <p className="text-sm sm:text-base">
            I enjoy working with modern tools like Next.js, TypeScript, and
            Express, and I’m always up for learning something new. Outside of
            coding, I’m into reading books, playing cricket, swimming, and
            exploring business insights.
          </p>
          <p className="text-sm sm:text-base">
            I also love contributing to open source and building things that
            make a real difference.
          </p>
          <span className="buttons flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <a href="#contact">
              <ShinyButton text="Get in Touch" />
            </a>
            <a
              href="https://cal.com/rishabh-shukla/15min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShinyButton text="Book a Meet" />
            </a>
          </span>
        </div>
        <div className="support mt-8 sm:mt-10">
          <h1 className="text-xl sm:text-2xl md:text-[1.6rem] font-semibold tracking-tight text-start sm:text-left max-sm:text-center">
            Hire Me
          </h1>
          <p className="mt-1 text-sm sm:text-base">
            I’m currently available for internships, full-time opportunities,
            and freelance projects. If you’re looking for someone passionate,
            skilled, and ready to contribute, I’m here to help bring your ideas
            to life!
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-3.5">
            <Hire />
          </div>
        </div>

        <div className="support mt-8 sm:mt-10">
          <h1 className="text-xl sm:text-2xl md:text-[1.6rem] font-semibold tracking-tight text-start sm:text-left max-sm:text-center">
            Support Me
          </h1>
          <p className="mt-1 text-sm sm:text-base">
            If you love what I do, whether it’s my work, the content I share, or
            anything else, please consider supporting me. Your support helps me
            continue creating, improving, and sharing my work.
          </p>
          <div className="sponsors flex flex-wrap items-center gap-2 mt-3.5">
            <GithubSponsors />
            <CoffeeSupport />
            <GPaySupport />
          </div>
        </div>

        <div className="skills mt-8 sm:mt-10">
          <h1 className="text-xl sm:text-2xl md:text-[1.6rem] font-semibold tracking-tight text-start sm:text-left max-sm:text-center">
            Skills & Tools
          </h1>
          <div className="skills-container mt-1">
            <div className="p-1">
              <Skills />
            </div>
          </div>
        </div>

        <div className="projects mt-8 sm:mt-10">
          <h1 className="text-xl sm:text-2xl md:text-[1.6rem] font-semibold tracking-tight text-start sm:text-left max-sm:text-center">
            Proof of Work
          </h1>
          <div className="project-container flex flex-col mt-6">
            <ProjectCard />
          </div>
        </div>

        <Contact />
        <div className="w-full text-xs sm:text-sm h-14 flex justify-center items-center mt-4">
          &copy; 2025 Rishabh. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
