import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useParallax } from "react-scroll-parallax";
import projectsData from "./utils/data";
import HoverComponent from "./components/HoverComponent";
import "./animations/hover-animation.css";
import "./css/scrabble-matrix.css";

const MatrixMixupText = ({ text, isActive, hasBeenTriggered, delay = 0 }) => {
  const [displayChars, setDisplayChars] = useState(text.split(''));
  const [mixupStates, setMixupStates] = useState(new Array(text.length).fill('idle'));
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const intervalRefs = useRef([]);
  
  const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ';
  
  const startMixup = (index) => {
    if (text[index] === ' ') return;
    
    setMixupStates(prev => {
      const newStates = [...prev];
      newStates[index] = 'mixing';
      return newStates;
    });
    
    let cycles = 0;
    const maxCycles = 15 + Math.random() * 10;
    
    intervalRefs.current[index] = setInterval(() => {
      if (cycles < maxCycles) {
        setDisplayChars(prev => {
          const newChars = [...prev];
          newChars[index] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          return newChars;
        });
        cycles++;
      } else {
        // Resolve to final character
        setDisplayChars(prev => {
          const newChars = [...prev];
          newChars[index] = text[index];
          return newChars;
        });
        
        setMixupStates(prev => {
          const newStates = [...prev];
          newStates[index] = 'revealed';
          return newStates;
        });
        
        clearInterval(intervalRefs.current[index]);
      }
    }, 30);
  };
  
  useEffect(() => {
    if (hasBeenTriggered && !hasAnimated) {
      setIsAnimating(true);
      setHasAnimated(true);
      
      // Start mixup with cascading effect
      text.split('').forEach((char, index) => {
        if (char !== ' ') {
          const cascadeDelay = index * 150 + Math.random() * 100;
          setTimeout(() => startMixup(index), cascadeDelay);
        }
      });
      
      // Clean up animation after all characters are resolved
      const totalDuration = text.length * 150 + 2000;
      setTimeout(() => {
        setIsAnimating(false);
      }, totalDuration);
    }
    
    return () => {
      intervalRefs.current.forEach(ref => ref && clearInterval(ref));
    };
  }, [hasBeenTriggered, text, hasAnimated]);
  
  return (
    <div className="matrix-mixup-container">
      {displayChars.map((char, index) => (
        <span 
          key={index}
          className={`matrix-char ${mixupStates[index]}`}
          style={{
            '--char-index': index,
            '--cascade-delay': `${index * 0.15}s`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

const Projects = ({ onProjectClick }) => {
  const [hoveredProjectId, setHoveredProjectId] = useState();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [triggeredProjects, setTriggeredProjects] = useState(new Set());
  const { ref: title } = useParallax({ translateX: [60, -43], speed: 5 });
  
  const handleProjectHover = (projectId) => {
    setHoveredProjectId(projectId);
    setTriggeredProjects(prev => new Set(prev).add(projectId));
  };
  

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const springStyles = useSpring({
    opacity: hoveredProjectId !== null ? 1 : 0,
    transform: hoveredProjectId !== null ? "translateY(0)" : "translateY(10px)",
  });

  return (
    <div 
      className="w-full min-h-screen overflow-hidden relative font-urbanist flex flex-col mt-40"
      id="projects"
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex ml-96" ref={title}>
          <h1 className="font-clash-grotesk text-12xl -ml-52">PROJECTS</h1>
        </div>
        <p className="w-96 -ml-80 -mt-32 p-2 pt-10">
          Explore a curated selection of projects I've guided from concept to completion.
        </p>
      </div>

      <div className="flex flex-col -mt-20">
      {projectsData.map((project) => (
  <div 
    key={project.id} 
    className="h-vh mt-96" 
    onClick={() => onProjectClick(project.name)}
  >
    <animated.div
      className="leading-1rem"
      onMouseEnter={() => handleProjectHover(project.id)}
      onMouseLeave={() => setHoveredProjectId(null)}
      style={springStyles}
    >
      <MatrixMixupText 
        text={project.name.toUpperCase()}
        isActive={hoveredProjectId === project.id}
        hasBeenTriggered={triggeredProjects.has(project.id)}
        delay={0}
      />
      
      {hoveredProjectId === project.id && (
        <div 
          className="fixed pointer-events-none"
          style={{
            left: `${mousePosition.x + 20}px`,
            top: `${mousePosition.y - 20}px`
          }}
        >
          <HoverComponent project={project} />
          <a 
            href={project.liveDemo}
            target="_blank" 
            rel="noopener noreferrer"
            className="hover-link"
          >
            <span>
              <span>Click to View</span>
            </span>
          </a>
        </div>
      )}
    </animated.div>
  </div>
))}
      </div>
    </div>
  );
};

export default Projects;