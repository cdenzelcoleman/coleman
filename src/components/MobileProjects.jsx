// src/components/MobileProjects.jsx
import React from "react";
import projectsData from "../utils/data";

const MobileProjects = ({ onProjectClick }) => {
  return (
    <div id="projects" className="mobile:block tablet:hidden">
      <div className="px-4">
        <h1 className="text-4xl font-clash-grotesk text-center mb-8 pt-40">PROJECTS</h1>
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="py-6 border-b border-gray-200"
            onClick={() => onProjectClick(project.name)}
          >
            <h2 className="text-2xl font-bold text-center mb-4">
              {project.name}
            </h2>
            <div className="text-center">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#4545ee] text-white rounded-lg"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileProjects;
