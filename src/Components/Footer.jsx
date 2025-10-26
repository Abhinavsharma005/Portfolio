import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineArrowUpward } from 'react-icons/md';

const Footer = ({ creatorName = "Abhinav Sharma", currentYear = 2025 }) => {
  const scrollToHome = "#home-section";

  return (
    <footer className="w-full bg-slate-900 bg-opacity-70 backdrop-blur-md text-gray-400 py-6 px-6 mt-12">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 items-center text-center gap-15">
        
        {/* Left Content */}
        <p className="flex justify-center items-center sm:justify-start gap-1 text-sm font-light text-gray-300">
          Made with passion <FaHeart /> and a lot of ☕
        </p>

        {/* Center Content */}
        <p className="text-sm font-light sm:justify-end text-gray-300 whitespace-nowrap">
          © {currentYear} {creatorName}. All rights reserved.
        </p>

        {/* Right Arrow */}
        <div className="flex justify-center  sm:justify-end">
          <a
            href={scrollToHome}
            aria-label="Scroll to top"
            className="p-3 bg-gray-800 hover:bg-gray-700 hover:text-[#54c8fe] rounded-md transition duration-300 shadow-lg"
          >
            <MdOutlineArrowUpward className="text-xl" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
