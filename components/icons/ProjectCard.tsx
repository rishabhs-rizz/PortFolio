"use client";

import { useState } from "react";
import { LiveLink, Preview, ProjectGithub } from "./icons";
import { InfoTipProjects } from "../ToolTip/ToolTip";
import { ProjectStatusText } from "../Status/Status";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  status: "Running" | "in-progress";
  duration?: string;
  description: string;
  image: string;
  tech: string[];
  liveLink?: string;
  PreviewLink?: string;
  githubLink?: string;
}

export function ProjectCard() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };
  return (
    <>
      {data.map((project, index) => (
        <div className="relative mb-10" key={project.title}>
          <div className="w-auto absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

          <div
            onClick={() => handleToggle(index)}
            className="
        w-auto relative rounded-xl border border-neutral-800/70
        bg-gradient-to-b from-zinc-900 to-black shadow-xl
        p-4 sm:p-6
        transition hover:scale-[1.01] hover:shadow-2xl duration-300 ease-in-out
        cursor-pointer
      "
          >
            <div
              className="
          flex flex-col md:flex-row gap-4 md:gap-6 items-start
        "
            >
              <div className="relative w-full md:w-40 lg:w-48 aspect-video sm:aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
              object-cover
              hover:scale-105 transition-transform duration-500 ease-in-out
            "
                />
              </div>

              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                  <h3 className="font-semibold text-white w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <span className="text-lg sm:text-xl md:text-2xl flex items-center gap-2">
                      {project.title}
                      <ProjectStatusText text={project.status} />
                    </span>

                    <span className="flex gap-2 mt-2 sm:mt-0">
                      {project.PreviewLink && (
                        <InfoTipProjects text="Preview">
                          <a
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            href={project.PreviewLink}
                            className="cursor-pointer hover:text-zinc-400 transition-colors duration-100"
                          >
                            <Preview />
                          </a>
                        </InfoTipProjects>
                      )}
                      {project.liveLink && (
                        <InfoTipProjects text="Live">
                          <a
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            href={project.liveLink}
                            className="cursor-pointer hover:text-zinc-400 transition-colors duration-100"
                          >
                            <LiveLink />
                          </a>
                        </InfoTipProjects>
                      )}
                      {project.githubLink && (
                        <InfoTipProjects text="Github">
                          <a
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            href={project.githubLink}
                            className="cursor-pointer hover:text-zinc-400 transition-colors duration-100"
                          >
                            <ProjectGithub />
                          </a>
                        </InfoTipProjects>
                      )}
                    </span>
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-400 mb-1">
                  {project.duration}
                </p>
                <p className="text-sm sm:text-base text-gray-300 mb-3">
                  {project.description}
                </p>
              </div>
            </div>

            <div
              className={`
          transition-all duration-500 ease-in-out overflow-hidden
          ${
            expandedIndex === index
              ? "max-h-40 opacity-100 mt-4 pt-2 border-t border-zinc-700"
              : "max-h-0 opacity-0"
          }
        `}
            >
              <div className="flex flex-wrap mt-2 gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                px-2 py-1 rounded-md border border-white/40 bg-transparent
                hover:bg-white/10 transition cursor-pointer
                text-xs sm:text-sm
              "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;

const data: ProjectCardProps[] = [
  {
    title: "DrawHive",
    status: "Running",
    description:
      "DrawHive is a real-time collaborative drawing tool where teammates can create, edit, and annotate shapes and text together—perfect for workflows, brainstorming, and visual planning.",
    image: "/drawhive.png",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Turborepo",
      "HTML5 Canvas",
      "WebSockets",
      "TypeScript",
    ],
    githubLink: "https://github.com/rishabhs-rizz/DrawHive",
    PreviewLink: "https://youtu.be/e1YpieZ5qOQ",
  },

  {
    title: "MemoBucket",
    status: "Running",
    description:
      "A bookmarking app that lets you save and organize Tweets and YouTube videos into one “BigBrain,” which you can also share for quick access and collaboration.",
    image: "/memo-bucket.png",
    tech: ["React.js", "Tailwind CSS", "Prisma", "PostgreSQL", "TypeScript"],
    githubLink: "https://github.com/rishabhs-rizz/MEMO-BUCKET-FE",
    PreviewLink: "https://youtu.be/i9Ov76oSFw8",
  },

  {
    title: "PixelFury",
    status: "Running",
    description:
      "PixelFury is a visually striking, animated gaming-themed website crafted for gamers and enthusiasts. Featuring smooth animations, dynamic visuals, and a vibrant design, it delivers an immersive web experience built with React and GSAP.",
    image: "/pixelfury.webp",
    tech: ["React.js", "GSAP", "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com/rishabhs-rizz/PixelFury",
    PreviewLink: "https://www.youtube.com/watch?v=ocpqqJcKc9Q",
    liveLink: "https://pixel-fury.vercel.app/",
  },

  {
    title: "Pickabeat",
    status: "in-progress",
    description:
      "This app lets your audience take control of the vibe. Whether in a café, club, or campus event, users can vote for their favorite tracks in real-time. No more boring background music — give the crowd the aux.",
    image: "/PickaBeat.png",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Turborepo",
      "WebSockets",
      "TypeScript",
      "Spotify API",
    ],
    githubLink: "https://github.com/rishabhs-rizz/Pickabeat",
  },
];
