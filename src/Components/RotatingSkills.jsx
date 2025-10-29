import React, { useState, useEffect } from 'react';


const RotatingSkills = () => {
  const skills = ["Problem Solver", "Frontend Web Developer", "Flutter App Developer", "UI/UX Designer","Clean Code"];
  const [displayedSkill, setDisplayedSkill] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && charIndex <= skills[skillIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedSkill(skills[skillIndex].substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (!isDeleting) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000); // Delay before deleting
    } else if (charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedSkill(skills[skillIndex].substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 50);
    } else {
      setIsDeleting(false);
      setSkillIndex((skillIndex + 1) % skills.length);
    }
    return () => clearTimeout(timeout);
  }, [skillIndex, charIndex, isDeleting, skills]);

  return (
     <div>
      <h1 className='text-2xl font-medium text-[#54c8fe] rubik-font'>{displayedSkill}<span className="typing-cursor">|</span></h1>
    </div>
  )
}

export default RotatingSkills