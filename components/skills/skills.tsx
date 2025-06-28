import { span } from "framer-motion/client";

export function Skills() {
  return (
    <div className="flex flex-wrap gap-2">
      {data.map((skill, index) => (
        <span
          key={index}
          className="p-2 rounded-md border border-white/40 bg-transparent hover:bg-white/10 transition cursor-pointer"
        >
          {skill}
        </span>
      ))}
    </div>

    //   /* {data.map((skill, index) => (
    //     <span
    //       key={index}
    //       className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
    //     >
    //       {skill}
    //     </span>
    //   ))} */
  );
}

const data: string[] = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "MySQL",
  "Turborepo",
  "Docker",
  "AWS",
  "Redux",
  "Tailwind CSS",
  "Node.js",
  "Express,js",
  "Git",
];
