import React from 'react';
import { LuLaptop } from 'react-icons/lu'; // Example icon from react-icons

const Card = ({ title, description, Icon }) => {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 flex flex-col gap-4 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="text-blue-400 flex justify-center items-center">
        {/* Pass the icon component as a prop */}
        <Icon size={32} />
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