import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineArrowUpward } from 'react-icons/md';

const Footer = ({ creatorName = "Abhinav Sharma", currentYear = 2025 }) => {
  const scrollToHome = "#home-section";
    
  return (
    <footer className="w-full bg-slate-900 bg-opacity-70 backdrop-blur-md text-gray-400 py-6 px-8 mt-12">
      
      <div className="max-w-7xl h-17 mx-auto flex justify-between items-center relative">
        
        <div className="flex items-center gap-16 text-sm font-light">
          
          <p className="flex items-center text-gray-300 whitespace-nowrap">
            Made with passion, <FaHeart className="mx-1" /> and a lot of ☕.
          </p>
          
          <p className="text-gray-400 px-72 whitespace-nowrap">
            &copy; {currentYear} {creatorName}. All rights reserved.
          </p>
        </div>

        <a 
          href={scrollToHome} 
          aria-label="Scroll to top"
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 hover:text-[#54c8fe] bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors duration-300 shadow-lg"
        >
          <MdOutlineArrowUpward className="text-xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;