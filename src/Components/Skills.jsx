import React from "react";
import SkillCard from "./SkillCard";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaPalette,
  FaMobileAlt,
  FaBrain,
} from "react-icons/fa";

const Skills = () => {
  const skillData = [
    {
      icon: FaCode,
      title: "Languages",
      iconColor: "#61DAFB",
      skills: [
        { name: "HTML", color: "#E34F26" },
        { name: "CSS", color: "#1572B6" },
        { name: "JavaScript", color: "#F6F579" },
        { name: "Soon..TypeScript", color: "#3178C6" },
        { name: "C++", color: "#00599C" },
      ],
    },
    {
      icon: FaPalette,
      title: "Web Frameworks",
      iconColor: "#61DAFB",
      skills: [
        { name: "React", color: "#61DAFB" },
        { name: "Soon..Next.js", color: "#e4e4e4" },
        { name: "Tailwind CSS", color: "#06B6D4" },
        { name: "Bootstrap", color: "#7952B3" },
        { name: "Django", color: "#2aa473" },
      ],
    },
    {
      icon: FaDatabase,
      title: "Backend & Database",
      iconColor: "#FF69B4", 
      skills: [
        { name: "Soon..Node.js", color: "#22C55E" },
        { name: "Soon..Express.js", color: "#999999" },
        { name: "Soon..MongoDB", color: "#4EA94B" },
        { name: "Soon..PostgreSQL", color: "#336791" },
        { name: "Firebase", color: "#FFA000" },
      ],
    },
    {
      icon: FaTools,
      title: "Tools",
      iconColor: "#FFD700", 
      skills: [
        { name: "Git", color: "#FFA000" },
        { name: "GitHub", color: "#EEF7FF" },
        { name: "Soon..Docker", color: "#0db7ed" },
        { name: "VS Code", color: "#007ACC" },
        { name: "Postman", color: "#FF6C37" },
        { name: "Vercel", color: "#9365DB" },
        { name: "Figma", color: "#ff3737" },
      ],
    },
    {
      icon: FaBrain,
      title: "Soon..Data Science & ML",
      iconColor: "#61DAFB",
      skills: [
        { name: "Python", color: "#3776AB" },
        { name: "TensorFlow", color: "#FF6F00" },
        { name: "NumPy", color: "#4b73c9" },
        { name: "Pandas", color: "#160358" },
        { name: "Matplotlib", color: "#11557C" },
      ],
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Development",
      iconColor: "#61DAFB",
      skills: [
        { name: "Android Studio", color: "#3DDC84" },
        { name: "Flutter", color: "#46D1FD" },
        { name: "Soon..React Native", color: "#61DAFB" },
        { name: "Dart", color: "#2bb7f6" },
        { name: "Kotlin + XML", color: "#A97BFF" },
      ],
    },
  ];

  const exploring = [
    
    "Express",
    "Node.js",
    "TensorFlow",
    "Kubernetes",
    "Docker",
    "FastAPI",
    "GraphQL",
    "Next.js",
    "React",
    "TypeScript",
    "Generative AI",
    
  ];

  return (
    <div>
      <h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600 mt-10">
        Skills & Expertise
      </h1>
      <p className="text-2xl text-[#94A3B8] max-w-3xl mx-auto mt-12 text-center">
        Technologies and tools I use to bring ideas to life. Continuously
        learning and adapting to new challenges.
      </p>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 p-8 max-w-7xl mx-auto overflow-x-auto">
        {skillData.map((data) => (
          <SkillCard
            key={data.title}
            icon={data.icon}
            title={data.title}
            iconColor={data.iconColor}
            skills={data.skills}
            className="bg-[#11141d]/80 border border-[#1b1e2a] backdrop-blur-md"
          />
        ))}
      </div>

      {/* Exploring Section */}
      <div className="text-center mt-16 mb-16">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Technologies I'm currently exploring
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {exploring.map((tech, index) => (
            <div
              key={tech}
              className="px-4 py-2 bg-[#1B2437]/70 text-cyan-400 rounded-lg animate-float"
              style={{
                animationDelay: `${index * 0.2}s`,
                opacity: 0.8 + Math.random() * 0.2,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
