import React, { useState, useEffect } from 'react';

const RotatingSkills: React.FC = () => {
  const skills = ["Problem Solver", "Full-Stack Web Developer", "Developing User-Friendly solutions", "UI/UX Designer","Clean Code", "Tech Enthusiast"];
  const [displayedSkill, setDisplayedSkill] = useState<string>('');
  const [skillIndex, setSkillIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    let timeout: any;
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

export default RotatingSkills;