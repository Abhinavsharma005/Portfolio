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

const NavLink = ({ href, targetId, currentActive, children, onClick }) => {
  const isActive = currentActive === targetId;

  const activeClass = isActive
    ? "text-[#54c8fe] relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300"
    : "hover:text-gray-300 transition-colors duration-300";

  return (
    <a href={href} onClick={onClick} className={`p-3 ${activeClass}`}>
      {children}
    </a>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home-section');
  const [menuOpen, setMenuOpen] = useState(false); // Mobile drawer state

  useEffect(() => {
    const sectionIds = ['home-section', 'about-section', 'skills-section', 'projects-section', 'contact-section'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(el => el);

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -70% 0px',
      threshold: 0.1,
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
      <ScrollToTop />

      {/* Navigation Bar */}
      <div
        className="p-4 flex justify-between items-center fixed-navbar z-[1000] w-full"
        style={{ backgroundColor: "rgba(12, 18, 40, 0.5)", backdropFilter: "blur(18px)" }}
      >
        <div className="flex justify-start text-2xl transition duration-300 transform hover:scale-105 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
          <img src="/logo2.png" alt="Logo" className="w-9 h-9 mr-2" />
          <span>Abhinav Sharma</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4  text-lg">
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
              <div id="" className='pt-[58px]'>
                <h3 id='home-section' className="text-3xl text-[#54c8fe]">Welcome, I'm</h3>
                <h1 className='text-7xl font-bold mt-7 mb-9'>Abhinav Sharma
                  <span className='inline-block float-custom'>👋</span>
                </h1>
                <RotatingSkills />
                <p className='text-2xl text-[#94A3B8] max-w-3xl mx-auto mt-12'>
                  Building scalable applications and intelligent systems that inspire and empower.
                </p>

                <div className='flex flex-col sm:flex-row justify-center items-center mt-10 gap-4 w-full px-4'>
                  <a href="">
                    <button className='button1'><MdOutlineFileDownload /> Download Resume</button>
                  </a>
                  <a href="https://github.com/Abhinavsharma005">
                    <button className='button1'><FiGithub />Visit Github</button>
                  </a>
                  <a href="https://linkedin.com/in/abhinav-sharma-314319327">
                    <button className='button1'><FiLinkedin /> Connect on Linkedin</button>
                  </a>
                </div>

                <ScrollButton targetId="about-heading" />
              </div>

              {/* Other Sections */}
              <div id="about-section"><About /></div>
              <div id="skills-section"><Skills /></div>
              <div id="projects-section"><Projects /></div>
              <div id="contact-section"><Contact /></div>

              <Footer creatorName="Abhinav Sharma" currentYear={2025} />
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
