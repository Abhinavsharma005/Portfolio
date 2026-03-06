import React from 'react';
import Card from './Card';
import { LuCode, LuZap } from 'react-icons/lu';
import { FaRegClock } from "react-icons/fa";
import { GoPeople } from "react-icons/go";

const skillsData = [
  {
    title: '10+',
    description: 'Projects Completed',
    icon: FaRegClock,
    color: 'text-cyan-400'
  },
  {
    title: 'Hackathon & Open Source',
    description: 'Worked with open source, hackathon and ready to contribute to communities',
    icon: GoPeople,
    color: 'text-cyan-400'
  },
  {
    title: 'AI Integration',
    description: 'Soon..Building tools with OpenAI Gemini, and custom LLM implementations',
    icon: LuZap,
    color: 'text-cyan-400'
  },
  {
    title: 'Clean Code',
    description: 'Writing modular, testable, and maintainable software',
    icon: LuCode,
    color: 'text-cyan-400'
  },
];

const SkillsDataCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
      {skillsData.map((skill, index) => (
        <Card
          key={index}
          title={skill.title}
          description={skill.description}
          Icon={skill.icon}
          // color={skill.color}
        />
      ))}
    </div>
  );
};

export default SkillsDataCard;