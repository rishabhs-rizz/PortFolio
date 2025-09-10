// "use client";

// import { div } from "framer-motion/client";
// import { useState } from "react";
// import { Github, LiveLink, Preview, ProjectGithub } from "./icons";
// import { InfoTipProjects } from "../ToolTip/ToolTip";
// import { ProjectStatusText } from "../Status/Status";

// interface ProjectCardProps {
//   title: string;
//   status: "Running" | "in-progress";
//   duration: string;
//   description: string;
//   image: string;
//   tech: string[];
//   githubLink?: string;
// }

// export function ProjectCard() {
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

//   const handleToggle = (index: number) => {
//     setExpandedIndex((prev) => (prev === index ? null : index));
//   };
//   return (
//     <>
//       {data.map((project, index) => (
//         <div className="relative mb-10" key={project.title}>
//           <div className="w-auto absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 t-animation"></div>
//           <div
//             onClick={() => {
//               handleToggle(index);
//             }}
//             className="w-auto relative rounded-xl border border-neutral-800/70 bg-gradient-to-b from-zinc-900 to-black shadow-xl p-3 transition hover:scale-[1.01] hover:shadow-2xl duration-300 ease-in-out cursor-pointer "
//           >
//             {/* Iterate over projects */}

//             <div
//               className="flex md:flex-row gap-6 items-start"
//               key={project.title}
//             >
//               {/* Image */}
//               <div className="overflow-hidden rounded-lg w-32 h-32 flex-shrink-0">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover rounded-lg hover:scale-115 transition-all duration-500 ease-in-out"
//                 />
//               </div>

//               {/* Content */}
//               <div className="flex flex-col justify-between ">
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="font-semibold text-white w-full flex justify-between items-center">
//                     <span className="text-2xl flex items-center gap-2">
//                       {project.title}{" "}
//                       <ProjectStatusText text={project.status} />
//                     </span>{" "}
//                     <span className="flex gap-1">
//                       <InfoTipProjects text="Preview">
//                         <a
//                           onClick={(e) => {
//                             e.stopPropagation();
//                           }}
//                           target="_blank"
//                           className="cursor-pointer hover:text-zinc-400 transition-colors duration-100 group"
//                         >
//                           <Preview />
//                         </a>
//                       </InfoTipProjects>
//                       <InfoTipProjects text="Live">
//                         <a
//                           onClick={(e) => {
//                             e.stopPropagation();
//                           }}
//                           target="_blank"
//                           className="cursor-pointer hover:text-zinc-400 transition-colors duration-100 group"
//                         >
//                           <LiveLink />
//                         </a>
//                       </InfoTipProjects>
//                       <InfoTipProjects text="Github">
//                         <a
//                           onClick={(e) => {
//                             e.stopPropagation();
//                           }}
//                           target="_blank"
//                           className="cursor-pointer hover:text-zinc-400 transition-colors duration-100 group"
//                         >
//                           <ProjectGithub />
//                         </a>
//                       </InfoTipProjects>
//                     </span>
//                   </h3>
//                   {project.githubLink && (
//                     <a
//                       href={project.githubLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white/70 hover:text-white"
//                     >
//                       <i className="fab fa-github"></i>
//                     </a>
//                   )}
//                 </div>

//                 <p className="text-sm text-gray-400 mb-1">{project.duration}</p>
//                 <p className="text-sm text-gray-300 mb-3">
//                   {project.description}
//                 </p>
//               </div>
//             </div>
//             <div
//               className={`transition-all duration-500 ease-in-out overflow-hidden
//               ${
//                 expandedIndex === index
//                   ? "max-h-40 opacity-100 mt-4 pt-2 border-t border-zinc-700"
//                   : "max-h-0 opacity-0"
//               }`}
//             >
//               <div className="flex flex-wrap mt-2 gap-2">
//                 {project.tech.map((item) => (
//                   <span
//                     key={item}
//                     className="px-2 py-1 rounded-md border border-white/40 bg-transparent hover:bg-white/10 transition cursor-pointer text-sm"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default ProjectCard;

// const data: ProjectCardProps[] = [
//   {
//     title: "DrawHive",
//     status: "Running",
//     duration: "april 2025 – may 2025",
//     description:
//       "DrawHive is a real-time collaborative drawing tool where teammates can create, edit, and annotate shapes and text together—perfect for workflows, brainstorming, and visual planning.",
//     image: "https://www.mihircodes.in/assets/images/map.webp",
//     tech: [
//       "Next.js",
//       "Tailwind CSS",
//       "Prisma",
//       "PostgreSQL",
//       "Turborepo",
//       "HTML5 Canvas",
//       "WebSockets",
//       "TypeScript",
//     ],
//     githubLink: "https://github.com/rishabhs-rizz/DrawHive",
//   },

//   {
//     title: "DrawHive",
//     status: "in-progress",
//     duration: "april 2025 – may 2025",
//     description:
//       "DrawHive is a real-time collaborative drawing tool where teammates can create, edit, and annotate shapes and text together—perfect for workflows, brainstorming, and visual planning.",
//     image: "https://www.mihircodes.in/assets/images/map.webp",
//     tech: [
//       "Next.js",
//       "Tailwind CSS",
//       "Prisma",
//       "PostgreSQL",
//       "Turborepo",
//       "HTML5 Canvas",
//       "WebSockets",
//       "TypeScript",
//     ],
//     githubLink: "https://github.com/rishabhs-rizz/DrawHive",
//   },
// ];

"use client";

import { div } from "framer-motion/client";
import { useState } from "react";
import { Github, LiveLink, Preview, ProjectGithub } from "./icons";
import { InfoTipProjects } from "../ToolTip/ToolTip";
import { ProjectStatusText } from "../Status/Status";

interface ProjectCardProps {
  title: string;
  status: "Running" | "in-progress";
  duration: string;
  description: string;
  image: string;
  tech: string[];
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
          <div className="w-auto absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 t-animation"></div>
          <div
            onClick={() => {
              handleToggle(index);
            }}
            className="w-auto relative rounded-xl border border-neutral-800/70 bg-gradient-to-b from-zinc-900 to-black shadow-xl p-3 sm:p-4 transition hover:scale-[1.01] hover:shadow-2xl duration-300 ease-in-out cursor-pointer"
          >
            <div
              className="flex flex-col md:flex-row gap-4 md:gap-6 items-start"
              key={project.title}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg w-full h-40 md:w-32 md:h-32 flex-shrink-0 mb-3 md:mb-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                  <h3 className="font-semibold text-white w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <span className="text-lg sm:text-xl md:text-2xl flex items-center gap-2">
                      {project.title}{" "}
                      <ProjectStatusText text={project.status} />
                    </span>
                    <span className="flex gap-1 mt-2 sm:mt-0">
                      <InfoTipProjects text="Preview">
                        <a
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          target="_blank"
                          className="cursor-pointer hover:text-zinc-400 transition-colors duration-100 group"
                        >
                          <Preview />
                        </a>
                      </InfoTipProjects>
                      <InfoTipProjects text="Live">
                        <a
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          target="_blank"
                          className="cursor-pointer hover:text-zinc-400 transition-colors duration-100 group"
                        >
                          <LiveLink />
                        </a>
                      </InfoTipProjects>
                      <InfoTipProjects text="Github">
                        <a
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          target="_blank"
                          className="cursor-pointer hover:text-zinc-400 transition-colors duration-100 group"
                        >
                          <ProjectGithub />
                        </a>
                      </InfoTipProjects>
                    </span>
                  </h3>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white ml-0 sm:ml-2"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
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
              className={`transition-all duration-500 ease-in-out overflow-hidden
              ${
                expandedIndex === index
                  ? "max-h-40 opacity-100 mt-4 pt-2 border-t border-zinc-700"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-wrap mt-2 gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded-md border border-white/40 bg-transparent hover:bg-white/10 transition cursor-pointer text-xs sm:text-sm"
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
    duration: "april 2025 – may 2025",
    description:
      "DrawHive is a real-time collaborative drawing tool where teammates can create, edit, and annotate shapes and text together—perfect for workflows, brainstorming, and visual planning.",
    image: "https://www.mihircodes.in/assets/images/map.webp",
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
  },

  {
    title: "MemoBucket",
    status: "Running",
    duration: "april 2025 – may 2025",
    description:
      "DrawHive is a real-time collaborative drawing tool where teammates can create, edit, and annotate shapes and text together—perfect for workflows, brainstorming, and visual planning.",
    image: "https://www.mihircodes.in/assets/images/map.webp",
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
  },

  {
    title: "PixelFury",
    status: "Running",
    duration: "april 2025 – may 2025",
    description:
      "DrawHive is a real-time collaborative drawing tool where teammates can create, edit, and annotate shapes and text together—perfect for workflows, brainstorming, and visual planning.",
    image: "https://www.mihircodes.in/assets/images/map.webp",
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
  },

  {
    title: "Pickabeat",
    status: "in-progress",
    duration: "april 2025 – may 2025",
    description:
      "DrawHive is a real-time collaborative drawing tool where teammates can create, edit, and annotate shapes and text together—perfect for workflows, brainstorming, and visual planning.",
    image: "https://www.mihircodes.in/assets/images/map.webp",
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
  },
];
