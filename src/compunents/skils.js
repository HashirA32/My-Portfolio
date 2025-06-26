
import { FaReact, FaNodeJs, FaGitAlt, FaLock } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact size={28} />,
    title: "React.js Development",
    desc: "Building interactive UIs with reusable components using React and hooks.",
  },
  {
    icon: <SiExpress size={28} />,
    title: "REST API with Express",
    desc: "Creating scalable and secure backend services using Express.js.",
  },
  {
    icon: <SiMongodb size={28} />,
    title: "MongoDB + Mongoose",
    desc: "Managing data with MongoDB and modeling schemas using Mongoose.",
  },
  {
    icon: <FaNodeJs size={28} />,
    title: "Node.js Server Logic",
    desc: "Server-side development with Node.js for handling requests and business logic.",
  },
  {
    icon: <SiTypescript size={28} />,
    title: "TypeScript Programming",
    desc: "Typed JavaScript to reduce bugs and improve code maintainability.",
  },
  {
    icon: <SiTailwindcss size={28} />,
    title: "Tailwind UI Design",
    desc: "Building modern, responsive UI with utility-first Tailwind CSS.",
  },
  {
    icon: <FaLock size={28} />,
    title: "JWT Authentication",
    desc: "Implementing secure authentication systems using JWT.",
  },
  {
    icon: <SiPostman size={28} />,
    title: "API Testing with Postman",
    desc: "Testing and validating REST endpoints for correct behavior.",
  },
  {
    icon: <FaGitAlt size={28} />,
    title: "Git & Version Control",
    desc: "Collaborating on projects with Git and GitHub efficiently.",
  },
];

function SkillsSet() {
  return (
    <section className=" py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className=" text-lg mb-2">Services</h2>
        <h1 className="text-white text-3xl font-bold mb-12">
          Skill-<span className="text-yellow-500">Set</span>
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-[#0203038e] p-6 rounded-lg hover:shadow-lg transition group"
            >
              <div className="text-yellow-500 mb-4 group-hover:scale-105 transition">
                {skill.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSet;
