import React from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  title: string;
  description: string;
  Icon: IconType;
  color?: string;
}

const Card: React.FC<CardProps> = ({ title, description, Icon, color = 'text-[#00EEFF]' }) => {
  return (
    <div className="bg-[#0b0d17] border border-slate-800 rounded-lg p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[#00EEFF] hover:shadow-lg hover:shadow-[#00EEFF]/20">
      <div className={`${color} flex justify-center items-center`}>
        {/* Pass the icon component as a prop */}
        <Icon size={36} />
      </div>
      <h3 className="text-white text-xl font-semibold">
        {title}
      </h3>
      <p className="text-slate-400 text-sm">
        {description}
      </p>
    </div>
  );
};

export default Card;