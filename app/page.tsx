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
export default function PortFolio() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="bg-black w-3xl mt-10">
        <div className="prof-sec flex gap-3 pb-8 border-b border-neutral-400/30">
          <ProfilePic></ProfilePic>
          <div className="mt-3">
            <p className="font-semibold text-3xl">Rishabh Shukla</p>
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
          <div
            className="relative z-20 border-neutral-400/60 dark:border-neutral-600 col-span-1 row-span-1 shadow-xl border rounded-lg sm:h-40 cursor-pointer overflow-hidden translate-y-1 ml-10"
            draggable={false}
            style={{ userSelect: "none", touchAction: "none" }}
          >
            <div className="z-10 absolute p-2 w-full">
              <div className="flex justify-between items-center">
                <p className="text-xs">Location</p>
                <p className="text-neutral-500 text-xs">Lucknow</p>
              </div>
              <div className="top-7 bg-neutral-400/60 dark:bg-neutral-600 mt-1 w-full h-[0.9px]"></div>
            </div>
            <img
              className="w-full h-full transition-all duration-700 ease-in-out object-cover hover:scale-250"
              alt=""
              src="https://www.mihircodes.in/assets/images/map.webp"
            />
          </div>
          <div className="p-2">
            <div className="flex justify-between items-center">
              <p className="text-white text-xs">Status</p>
              <div>
                <span>
                  <span className="flex justify-center items-center mr-1.5 w-2 h-2">
                    <span className="absolute flex  w-2 h-2 rounded-full  opacity-75 animation-delay-4000 animate-ping bg-lime-500 "></span>
                    <span className="relative inline-flex w-1 h-1 rounded-full bg-lime-500 "></span>
                  </span>
                </span>
              </div>
            </div>
            <div className="top-7 bg-neutral-400/60 dark:bg-neutral-600 mt-1 w-full h-[0.9px]"></div>
            <div className="flex flex-col gap-3 mt-4 h-full">
              <div className="flex items-center gap-2 ml-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-folder w-[14px] h-[14px] text-white"
                >
                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                </svg>
                <p className="font-semibold text-white text-xs">
                  available_for
                </p>
              </div>
              <div className="space-y-2 ml-3">
                <div className="group flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-file w-[14px] h-[14px] text-white"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  </svg>
                  <span className="text-neutral-400 hover:text-neutral-300 text-xs underline cursor-pointer">
                    freelance
                  </span>
                </div>
                <div className="group flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-file w-[14px] h-[14px] text-white"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  </svg>
                  <span className="text-neutral-400 hover:text-neutral-300 text-xs underline cursor-pointer">
                    full-time
                  </span>
                </div>
                <div className="group flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-file w-[14px] h-[14px] text-white"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  </svg>
                  <span className="text-neutral-400 hover:text-neutral-300 text-xs underline cursor-pointer">
                    contract
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about mt-12">
          <p className="font-semibold text-xl">About Me</p>
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
            <ShinyButton text="Book a Call" />
          </span>
        </div>

        <div className="support mt-12">
          <p className="font-semibold text-xl">Support Me</p>
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
          <p className="font-semibold text-xl">Skills</p>
          <div className="skills-container mt-2">
            <div className="p-1">
              <Skills />
            </div>
          </div>
        </div>

        <div className="projects mt-12">
          <p className="font-semibold text-xl">Proof of Work</p>
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
