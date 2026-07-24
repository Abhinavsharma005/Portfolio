import React from 'react';
import Card from './Card';
import { LuCode, LuZap } from 'react-icons/lu';
import { FaRegClock } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { IconType } from 'react-icons';

interface SkillDataItem {
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

const skillsData: SkillDataItem[] = [
  {
    title: '10+',
    description: 'Projects Completed',
    icon: FaRegClock,
    color: 'text-[#00EEFF]'
  },
  {
    title: 'Hackathon & Open Source',
    description: 'Worked with open source, hackathon and ready to contribute to communities',
    icon: GoPeople,
    color: 'text-[#00EEFF]'
  },
  {
    title: 'AI Integration',
    description: 'Soon..Building tools with OpenAI Gemini, and custom LLM implementations',
    icon: LuZap,
    color: 'text-[#00EEFF]'
  },
  {
    title: 'Clean Code',
    description: 'Writing modular, testable, and maintainable software',
    icon: LuCode,
    color: 'text-[#00EEFF]'
  },
];

const SkillsDataCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
      {skillsData.map((skill, index) => (
        <Card
          key={index}
          title={skill.title}
          description={skill.description}
          Icon={skill.icon}
          color={skill.color}
        />
      ))}
    </div>
  );
};

export default SkillsDataCard;