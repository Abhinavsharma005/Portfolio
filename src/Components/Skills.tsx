"use client"
import React from "react";
import SkillCard from "./SkillCard";
import { motion, Variants } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaPalette,
  FaMobileAlt,
  FaBrain,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface SkillItem {
  name: string;
  color: string;
}

interface SkillData {
  icon: IconType;
  title: string;
  skills: SkillItem[];
}

const Skills: React.FC = () => {
  const skillData: SkillData[] = [
    {
      icon: FaCode,
      title: "Languages",
      skills: [
        { name: "HTML", color: "#E34F26" },
        { name: "CSS", color: "#3b9dd7" },
        { name: "JavaScript", color: "#F6F579" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Python", color: "#3776AB" },
        { name: "C++", color: "#00599C" },
      ],
    },
    {
      icon: FaPalette,
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", color: "#61DAFB" },
        { name: "Next.js", color: "#e4e4e4" },
        { name: "Tailwind CSS", color: "#06B6D4" },
        { name: "Redux Toolkit", color: "#7743c1" },
      ],
    },
    {
      icon: FaDatabase,
      title: "Backend & Database",
      skills: [
        { name: "Node.js", color: "#7fc728" },
        { name: "Express.js", color: "#999999" },
        { name: "MongoDB", color: "#50b33f" },
        { name: "Redis", color: "#c02e2a" },
        { name: "PostgreSQL", color: "#336791" },
        { name: "Firebase", color: "#FFA000" },
      ],
    },
    {
      icon: FaTools,
      title: "DevOps & Tools",
      skills: [
        { name: "Git", color: "#FFA000" },
        { name: "GitHub", color: "#EEF7FF" },
        { name: "Docker", color: "#0db7ed" },
        { name: "VS Code", color: "#007ACC" },
        { name: "Postman", color: "#FF6C37" },
        { name: "Vercel", color: "#D4C7FC" },
        { name: "Render", color: "#9365DB" },
        { name: "Shadcn/ui", color: "#f7f7f7" },
        { name: "Figma", color: "#04c97e" },
      ],
    },
    {
      icon: FaBrain,
      title: "Data Science & ML",
      skills: [
        { name: "NumPy", color: "#4b73c9" },
        { name: "Pandas", color: "#19227A" },
        { name: "Matplotlib", color: "#F7A76C" },
        { name: "Seaborn", color: "#5EA5C5" },
        { name: "Tensorflow", color: "#EEB738" },
        { name: "FastApi", color: "#049789" },
        { name: "OpenCV", color: "#FF0101" },
      ],
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Development",
      skills: [
        { name: "Android Studio", color: "#3DDC84" },
        { name: "React Native (expo)", color: "#61DAFB" },
        { name: "Flutter", color: "#46D1FD" },

      ],
    },
  ];

  const exploring: string[] = [
    "Ai/Ml",
    "Matplotlib",
    "TensorFlow",
    "Kubernetes",
    "Docker",
    "NumPy",
    "GraphQL",
    "Next.js",
    "Pytorque",
    "TypeScript",
    "Generative AI",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-center tracking-tight flex flex-col items-center gap-1"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00EEFF]">Skills</span>
          <span className="text-white">& Expertise</span>
        </motion.h1>
      </div>
      <motion.p
        className="text-2xl text-[#94A3B8] max-w-3xl mx-auto mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Technologies and tools I use to bring ideas to life. Continuously
        learning and adapting to new challenges.
      </motion.p>

      {/* Cards Section*/}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillData.map((data) => (
          <motion.div
            key={data.title}
            variants={itemVariants}
            className="flex flex-col h-full"
            layout="position"
          >
            <SkillCard
              icon={data.icon}
              title={data.title}
              skills={data.skills}
              className="bg-[#11141d]/80 border border-[#1b1e2a] backdrop-blur-md h-full w-full max-w-none"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Exploring Section */}
      <div className="text-center mt-16 mb-16">
        <motion.h2
          className="text-3xl font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technologies I'm currently exploring
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {exploring.map((tech, index) => (
            <div
              key={tech}
              className="px-4 py-2 bg-[#1B2437]/70 text-[#00EEFF] rounded-lg animate-float"
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