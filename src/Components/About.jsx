import React from "react";
import SkillsDataCard from "./SkillsDataCard";

const About = () => {
  return (
    <>
    <div className="p-3">
      <div className="flex justify-center mb-8">
        <h1 id="about-heading" className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-600">About Me</h1>
      </div>

      {/* Flex container for paragraphs and cards */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 px-4">
        {/* Left side: Paragraphs */}
        <div className="md:w-1/2 md:mt-7 p-2">
          <p className="text-left text-2xl text-[#94A3B8]">
            I'm <span className="text-cyan-400 font-medium">Abhinav Sharma</span>, an IT undergraduate pursuing a Bachelor of Technology at the University Institute of Technology, RGPV Bhopal. I’m passionate about <span className="text-cyan-400 font-medium">software development</span>, problem-solving, and building <span className="text-cyan-400 font-medium">real-world applications</span> that combine innovation with practical design.
          </p>
          <br />
          <p className="text-left text-2xl text-[#94A3B8]">
            I enjoy working with technologies like Flutter mobile development and web development tools to craft <span className="text-cyan-400 font-medium">smart, scalable, and user-focused solutions</span>. Alongside this, I have a strong interest in Machine Learning and Data Science, exploring areas such as <span className="text-cyan-400 font-medium">data preprocessing, predictive analytics, and model integration</span> to create intelligent and adaptive systems.
          </p>
          <br />
          <p className="text-left text-2xl text-[#94A3B8]">
            Currently, I’m focused on projects that bring together <span className="text-cyan-400 font-medium">usability and performance</span>, while continuously learning new technologies to sharpen both my <span className="text-cyan-400 font-medium">frontend and backend</span> development skills.
          </p>
        </div>

        {/* Right side: Skills Cards */}
        <div className="md:w-1/2 md:mt-18 p-2">
          <SkillsDataCard />
        </div>
      </div>
    </div>
      
    </>
  );
};

export default About;
