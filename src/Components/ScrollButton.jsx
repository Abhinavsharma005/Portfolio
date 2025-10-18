import React from "react";

const ScrollButton = ({ targetId }) => {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    const navbar = document.querySelector(".fixed-navbar");

    if (targetElement && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center mt-20 mb-16 select-none animate-float">
      {/* Mouse outline */}
      <div
        onClick={handleScroll}
        className="relative w-8 h-14 border-2 border-slate-400 rounded-full flex justify-center items-start cursor-pointer hover:border-blue-400 transition-colors duration-300"
      >
        {/* Scroll indicator */}
        <div className="absolute top-2 w-1.5 h-3 bg-blue-400 rounded-full animate-scroll"></div>
      </div>

      {/* Label */}
      <p className="text-slate-400 mt-3 text-sm">Scroll Down</p>

      {/* Animations */}
      <style jsx>{`
        /* Inner blue bar (scroll) animation */
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(25px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Entire button float animation */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
        }

        .animate-scroll {
          animation: scroll 2.5s ease-in-out infinite;
        }

        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollButton;
