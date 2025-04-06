import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useParallax } from "react-scroll-parallax";
import projectsData from "./utils/data";
import HoverComponent from "./components/HoverComponent";
import gsap from "gsap";
import "./animations/hover-animation.css";

const Projects = ({ onProjectClick }) => {
  const [hoveredProjectId, setHoveredProjectId] = useState();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { ref: title } = useParallax({ translateX: [60, -43], speed: 5 });
  

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
        <p className="w-96 -ml-80 -mt-32 p-2">
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
      onMouseEnter={() => setHoveredProjectId(project.id)}
      onMouseLeave={() => setHoveredProjectId(null)}
      style={springStyles}
    >
      <h2 className="hover-h2 uppercase font-bold text-10xl hover:text-gray-500 h2-animation">
        <span>
          <span>{project.name}</span>
          <span>{project.name}</span>
        </span>
      </h2>
      
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