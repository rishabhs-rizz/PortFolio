interface ProjectCardProps {
  title: string;
  duration: string;
  description: string;
  image: string;
  tech: string[];
  githubLink?: string;
}

const ProjectCard = () => {
  return (
    <>
      {data.map((project) => (
        <div className="relative group mb-8" key={project.title}>
          <div className="w-auto absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 t-animation"></div>
          <div className="w-auto relative rounded-xl border border-neutral-800/70 bg-gradient-to-b from-zinc-900 to-black p-3 shadow-xl transition hover:scale-[1.01] hover:shadow-2xl duration-300 ease-in-out">
            {/* Iterate over projects */}

            <div className="flex md:flex-row gap-6 mb-8" key={project.title}>
              {/* Image */}
              <div className="overflow-hidden rounded-lg w-full h-1/4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-auto h-auto object-cover rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between pt-2">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>

                <p className="text-sm text-gray-400 mb-1">{project.duration}</p>
                <p className="text-sm text-gray-300 mb-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-white border border-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;

const data: ProjectCardProps[] = [
  {
    title: "DrawHive",
    duration: "april 2025 – may 2025",
    description:
      "DrawHive is a real-time collaborative drawing tool where teammates can create, edit, and annotate shapes and text together—perfect for workflows, brainstorming, and visual planning.",
    image: "/edit-bridge.png",
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
    title: "DrawHive",
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
