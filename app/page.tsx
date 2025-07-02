import { Twitter, LinkedIn, Github, Mail } from "@/components/icons/icons";
import ShinyButton from "@/components/buttons/button";
import {
  CoffeeSupport,
  GithubSponsors,
  GPaySupport,
} from "@/components/icons/Supports";
import { Skills } from "@/components/skills/skills";
import ProjectCard from "@/components/icons/ProjectCard";
import { InfoTipProjects } from "@/components/ToolTip/ToolTip";
import { ProfilePic } from "@/components/Image/Image";
import { Contact } from "@/components/Contact/Contact";
import Status from "@/components/Status/Status";
export default function PortFolio() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="bg-black w-3xl mt-10">
        <div className="prof-sec flex gap-3 pb-8 border-b border-neutral-400/30">
          <ProfilePic></ProfilePic>
          <div className="mt-3">
            <h1 className="font-bricolage text-3xl">Rishabh Shukla</h1>
            <p>Software Engineer</p>
            <div className="tags flex gap-2 mt-3.5">
              <InfoTipProjects text="Github">
                <a
                  target="_blank"
                  className="cursor-pointer hover:text-zinc-400 transition-colors duration-100 group"
                >
                  <Github />
                </a>
              </InfoTipProjects>
              <InfoTipProjects text="Twitter">
                <a
                  target="_blank"
                  className="cursor-pointer hover:text-zinc-400 transition-colors duration-100 group"
                >
                  <Twitter />
                </a>
              </InfoTipProjects>
              <InfoTipProjects text="LinkedIn">
                <a
                  target="_blank"
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

          <Status />
        </div>
        <div className="about mt-12">
          <h1 className="text-[1.6rem] max-sm:text-2xl font-semibold tracking-tight text-start max-sm:text-center">
            About Me
          </h1>
          <p className="mt-2">
            20, reading fuels me - but building grounds me.
          </p>
          <p>
            I just write code, break it, learn fast, make it happen, repeat.
          </p>
          <p>
            Deeply intrested in Cricket, history, Video Editing and business
            insights as well.
          </p>
          <span className="buttons flex gap-4 mt-4">
            <ShinyButton text="Get in Touch" />
            <ShinyButton text="Book a Meet" />
          </span>
        </div>

        <div className="support mt-12">
          <h1 className="text-[1.6rem] max-sm:text-2xl font-semibold tracking-tight text-start max-sm:text-center">
            Support Me
          </h1>
          <p className="mt-2">
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

        <div className="skills mt-12">
          <h1 className="text-[1.6rem] max-sm:text-2xl font-semibold tracking-tight text-start max-sm:text-center">
            Skills
          </h1>
          <div className="skills-container mt-2">
            <div className="p-1">
              <Skills />
            </div>
          </div>
        </div>

        <div className="projects mt-12">
          <h1 className="text-[1.6rem] max-sm:text-2xl font-semibold tracking-tight text-start max-sm:text-center">
            Proof of Work
          </h1>
          <div className="project-container flex-col mt-6 ">
            <ProjectCard />
          </div>
        </div>

        <Contact />
        <div className="w-full text-sm h-18 flex justify-center items-center">
          &copy; 2025 Rishabh. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
