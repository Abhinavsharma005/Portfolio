import React from 'react';
import Card from './Card'; 
import { LuCode, LuDatabase, LuZap } from 'react-icons/lu'; 
import { FaRegClock } from "react-icons/fa";

const skillsData = [
  {
    title: '10+',
    description: 'Projects Completed',
    icon:  FaRegClock
  },
  {
    title: 'Database Design',
    description: 'Soon..Experience with PostgreSQL, MongoDB and complex data modeling',
    icon: LuDatabase
  },
  {
    title: 'AI Integration',
    description: 'Soon..Building tools with OpenAI Gemini, and custom LLM implementations',
    icon: LuZap
  },
  {
    title: 'Clean Code',
    description: 'Writing modular, testable, and maintainable software',
    icon: LuCode
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
        />
      ))}
    </div>
  );
};

export default SkillsDataCard;