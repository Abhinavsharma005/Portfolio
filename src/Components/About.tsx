import React from "react";
import SkillsDataCard from "./SkillsDataCard";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <>
      <div className="p-3">
        <div className="flex justify-center mb-8">
          <motion.h1
            id="about-heading"
            className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-600"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h1>
        </div>

        {/* Flex container for paragraphs and cards */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 px-3.5">
          {/* Left side: Paragraphs */}
          <motion.div
            className="md:w-1/2 md:mt-7 p-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-left text-2xl text-white text-shadow-md text-shadow-white/15">
              I'm{" "}
              <span className="text-cyan-400 font-medium">Abhinav Sharma</span>,
              an IT undergraduate pursuing a Bachelor of Technology at the
              University Institute of Technology, RGPV Bhopal. I’m passionate
              about{" "}
              <span className="text-cyan-400 font-medium">
                software development
              </span>
              , problem-solving, and building{" "}
              <span className="text-cyan-400 font-medium">
                real-world applications
              </span>
              .
            </p>
            <br />
            <p className="text-left text-2xl text-white text-shadow-md text-shadow-white/15">
              I've expertise in{" "}
              <span className="text-cyan-400 font-medium">
                Full-Stack Web development
              </span>
              . I also explore{" "}
              <span className="text-cyan-400 font-medium">App Development</span>{" "}
              mainly for my personal use
              <span className="text-cyan-400 font-medium"> projects </span> or{" "}
              <span className="text-cyan-400 font-medium"> tools</span>, while
              my primary professional focus remains on{" "}
              <span className="text-cyan-400 font-medium">web development</span>
              . Alongside this, I have a strong interest and currently exploring
              <span className="text-cyan-400 font-medium">
                {" "}
                Machine Learning
              </span>{" "}
              and
              <span className="text-cyan-400 font-medium">
                {" "}
                Data Science
              </span>{" "}
              so that
              <span className="text-cyan-400 font-medium">
                {" "}
                integrating
              </span>{" "}
              machine learning and AI-powered features with the web projects
              where it makes the most impact.
            </p>
            <br />
            <p className="text-left text-2xl text-white text-shadow-md text-shadow-white/15">
              I enjoy exploring{" "}
              <span className="text-cyan-400 font-medium">
                new technologies
              </span>{" "}
              and
              <span className="text-cyan-400 font-medium">
                {" "}
                transforming ideas
              </span>{" "}
              into
              <span className="text-cyan-400 font-medium">
                {" "}
                practical products
              </span>{" "}
              that solve
              <span className="text-cyan-400 font-medium"> real problems</span>,
              with a strong interest in contributing to{" "}
              <span className="text-cyan-400 font-medium">product-focused</span>{" "}
              teams building impactful solutions.
            </p>
          </motion.div>

          {/* Right side: Skills Cards */}
          <motion.div
            className="md:w-1/2 md:mt-18 p-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SkillsDataCard />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
