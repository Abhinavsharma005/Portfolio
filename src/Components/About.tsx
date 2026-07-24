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
            className="text-5xl sm:text-6xl font-extrabold text-center tracking-tight flex flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00EEFF]">About</span>
            <span className="text-white">Me</span>
          </motion.h1>
        </div>

        {/* Flex container for paragraphs and cards */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 px-3.5">
          {/* Left side: Paragraphs */}
          <motion.div
            className="md:w-1/2 md:mt-7 p-2 max-w-[750px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="about-text-p">
              I'm{" "}
              <span className="font-bold text-[#00EEFF]">Abhinav Sharma</span>,
              a full-stack web developer and AI/ML enthusiast who enjoys turning
              ideas into real, usable products. I specialize in building
              performant full-stack applications and integrating machine
              learning and AI features where they make the most impact, with a
              focus on creating experiences that are smooth, scalable,
              intuitive, and user-centric.
            </p>
            <p className="about-text-p">
              My journey began with curiosity about how technology works and
              evolved into building complete products from scratch. Along the
              way, I also explored app development mainly for my personal use
              tools, while focusing primarily on full-stack web development and
              expanding into system design, AI/ML, and data-driven
              applications.
            </p>
            <p className="about-text-p">
              I enjoy exploring new technologies and transforming ideas into
              practical products that solve real problems. I'm passionate about
              contributing to product-focused teams building impactful
              solutions.
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
