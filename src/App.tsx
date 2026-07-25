import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import RotatingSkills from './Components/RotatingSkills';
import { MdOutlineFileDownload } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import ScrollButton from './Components/ScrollButton';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiNextdotjs } from 'react-icons/si';
import ParticlesBackground from './Components/ParticlesBackground';
import TargetCursor from './Components/TargetCursor';
import FloatingTerminal from './Components/FloatingTerminal';

interface NavLinkProps {
  href: string;
  targetId: string;
  currentActive: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, targetId, currentActive, children, onClick }) => {
  const isActive = currentActive === targetId;

  const activeClass = isActive
    ? "text-[#00EEFF] relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-[2px] after:bg-[#00EEFF] after:transition-all after:duration-300"
    : "hover:text-gray-300 transition-colors duration-300";

  return (
    <a href={href} onClick={onClick} className={`p-3 ${activeClass}`}>
      {children}
    </a>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home-section');
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Mobile drawer state

  useEffect(() => {
    const sectionIds = ['home-section', 'about-section', 'skills-section', 'projects-section', 'contact-section'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => { sections.forEach(section => observer.unobserve(section)); };
  }, []);

  return (
    <>
    <TargetCursor targetSelector=".cursor-target, a, button, .button1" />
      <ParticlesBackground />
      <ScrollToTop />
      <FloatingTerminal />

      {/* Navigation Bar */}
      <div
        className="p-4 flex justify-between items-center fixed-navbar z-[1000] w-full"
        style={{ backgroundColor: "rgba(12, 18, 40, 0.5)", backdropFilter: "blur(18px)" }}
      >
        <div className="flex justify-start items-center text-2xl transition duration-300 transform hover:scale-105 font-extrabold text-[#00EEFF] animate-slide-down-logo">
          <img src="/logo3.png" alt="Logo" className="w-10 h-10 mr-2"  />
          <span className="text-[#00D1FE] oswald">Abhinav Sharma</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 animate-slide-down-nav text-lg">
          <NavLink href="#home-section" targetId="home-section" currentActive={activeSection}>Home</NavLink>
          <NavLink href="#about-section" targetId="about-section" currentActive={activeSection}>About</NavLink>
          <NavLink href="#skills-section" targetId="skills-section" currentActive={activeSection}>Skills</NavLink>
          <NavLink href="#projects-section" targetId="projects-section" currentActive={activeSection}>Projects</NavLink>
          <NavLink href="#contact-section" targetId="contact-section" currentActive={activeSection}>Contact</NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-3xl p-3"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Right Drawer Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#0C1228] z-[2000]
        transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <button className="text-white text-3xl p-4" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <div className="flex flex-col p-6 space-y-6 text-xl">
          <NavLink
            href="#home-section"
            onClick={() => { setMenuOpen(false); setActiveSection('home-section'); }}
            targetId="home-section"
            currentActive={activeSection}>Home</NavLink>

          <NavLink
            href="#about-section"
            onClick={() => { setMenuOpen(false); setActiveSection('about-section'); }}
            targetId="about-section"
            currentActive={activeSection}>About</NavLink>

          <NavLink
            href="#skills-section"
            onClick={() => { setMenuOpen(false); setActiveSection('skills-section'); }}
            targetId="skills-section"
            currentActive={activeSection}>Skills</NavLink>

          <NavLink
            href="#projects-section"
            onClick={() => { setMenuOpen(false); setActiveSection('projects-section'); }}
            targetId="projects-section"
            currentActive={activeSection}>Projects</NavLink>

          <NavLink
            href="#contact-section"
            onClick={() => { setMenuOpen(false); setActiveSection('contact-section'); }}
            targetId="contact-section"
            currentActive={activeSection}>Contact</NavLink>
        </div>
      </div>

      <div className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              {/* Home Section */}
              <div id="home-section" className='pt-[48px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24'>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                  {/* Left Column - Content */}
                  <div className="lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 animate-pop-up-1">Hi, I'm</h1>
                    <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold mb-6 animate-pop-up-2'>Abhinav Sharma
                      <span className='inline-block float-custom ml-2'>👋</span>
                    </h1>
                    <div className='animate-pop-up-3'>
                      <RotatingSkills />
                    </div>
                    <p className='text-lg sm:text-xl md:text-2xl text-[#94A3B8] max-w-2xl mt-6 animate-pop-up-4'>
                      Building scalable applications and intelligent systems that inspire and empower.
                    </p>

                    <div className='flex flex-col sm:flex-row justify-center lg:justify-start items-center mt-10 gap-4 w-full animate-pop-up-4'>
                      <a href="/Abhinav_Sharma_Resume.pdf" download="Abhinav_Sharma_Resume.pdf">
                        <button className='button1'><MdOutlineFileDownload /> Download Resume</button>
                      </a>
                      <a href="https://github.com/Abhinavsharma005" target="_blank" rel="noopener noreferrer">
                        <button className='button1'><FiGithub />Visit Github</button>
                      </a>
                      <a href="https://linkedin.com/in/abhinav-sharma-314319327" target="_blank" rel="noopener noreferrer">
                        <button className='button1'><FiLinkedin /> Connect on Linkedin</button>
                      </a>
                    </div>
                  </div>

                  {/* Right Column - Profile & Badges */}
                  <div className="lg:w-[45%] relative flex justify-center items-center mt-12 lg:mt-0 animate-pop-up-3">
                    <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full p-2"
                      style={{ background: 'linear-gradient(145deg, rgba(0,238,255,0.1) 0%, rgba(12,18,40,0) 100%)' }}>

                      {/* Animated border ring */}
                      <div className="absolute inset-0 rounded-full border border-dashed border-[#00EEFF]/40 animate-[spin_20s_linear_infinite]"></div>
                      <div className="absolute inset-2 rounded-full border border-solid border-[#1e293b]"></div>

                      {/* Profile Picture Placeholder */}
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0a0f20] relative z-10 bg-[#0c1228] flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-3 cursor-pointer">
                        <img
                          src="/office_photo.jpeg"
                          alt="Abhinav Sharma"
                          className="w-full h-full object-cover"
                          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.style.display = 'none';
                            if (target.parentElement) {
                              target.parentElement.innerHTML += '<div class="text-4xl text-[#00EEFF] font-bold">AS</div>';
                            }
                          }}
                        />
                      </div>

                      {/* Floating Skill Badges (6 items in Orbit) */}
                      {/* Top Left */}
                      <div className="absolute top-[8%] -left-[2%] z-20 p-2 sm:p-2.5 bg-[#0a0f20] rounded-xl shadow-[0_4px_15px_rgba(84,200,254,0.15)] border border-[#1e293b] animate-float cursor-pointer hover:scale-110 transition-transform" style={{ animationDelay: '0s' }}>
                        <FaReact className="text-[#61DAFB] text-xl sm:text-2xl" />
                      </div>

                      {/* Top Right */}
                      <div className="absolute -top-[5%] right-[22%] z-20 p-2 sm:p-2.5 bg-[#0a0f20] rounded-xl shadow-[0_4px_15px_rgba(71,162,72,0.15)] border border-[#1e293b] animate-float cursor-pointer hover:scale-110 transition-transform" style={{ animationDelay: '0.5s' }}>
                        <SiMongodb className="text-[#47A248] text-xl sm:text-2xl" />
                      </div>

                      {/* Right Middle */}
                      <div className="absolute top-[35%] -right-[8%] z-20 p-2 sm:p-2.5 bg-[#0a0f20] rounded-xl shadow-[0_4px_15px_rgba(104,160,99,0.15)] border border-[#1e293b] animate-float cursor-pointer hover:scale-110 transition-transform" style={{ animationDelay: '1.2s' }}>
                        <FaNodeJs className="text-[#68A063] text-xl sm:text-2xl" />
                      </div>

                      {/* Bottom Right */}
                      <div className="absolute bottom-[5%] -right-[2%] z-20 p-2 sm:p-2.5 bg-[#0a0f20] rounded-xl shadow-[0_4px_15px_rgba(255,255,255,0.15)] border border-[#1e293b] animate-float cursor-pointer hover:scale-110 transition-transform" style={{ animationDelay: '2.5s' }}>
                        <SiNextdotjs className="text-white text-xl sm:text-2xl" />
                      </div>

                      {/* Bottom Left */}
                      <div className="absolute -bottom-[5%] left-[25%] z-20 p-2 sm:p-2.5 bg-[#0a0f20] rounded-xl shadow-[0_4px_15px_rgba(55,118,171,0.15)] border border-[#1e293b] animate-float cursor-pointer hover:scale-110 transition-transform" style={{ animationDelay: '1.8s' }}>
                        <FaPython className="text-[#3776AB] text-xl sm:text-2xl" />
                      </div>

                      {/* Left Middle */}
                      <div className="absolute top-[45%] -left-[8%] z-20 p-2 sm:p-2.5 bg-[#0a0f20] rounded-xl shadow-[0_4px_15px_rgba(56,189,248,0.15)] border border-[#1e293b] animate-float cursor-pointer hover:scale-110 transition-transform" style={{ animationDelay: '0.8s' }}>
                        <SiTailwindcss className="text-[#38BDF8] text-xl sm:text-2xl" />
                      </div>
                    </div>
                  </div>

                </div>

                <div className="flex justify-center mt-6 w-full animate-pop-up-4">
                  <ScrollButton targetId="about-heading" />
                </div>
              </div>

              {/* Other Sections */}
              <div id="about-section"><About /></div>
              <div id="skills-section"><Skills /></div>
              <div id="projects-section"><Projects /></div>
              <div id="contact-section"><Contact /></div>

              <Footer creatorName="Abhinav Sharma" currentYear={2026} />
            </>
          } />

          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
