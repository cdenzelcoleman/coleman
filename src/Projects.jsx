import React from 'react';
import projectsData from './utils/data';

const Projects = ({ onProjectClick }) => {
  return (
    <section className="projects-section p-8" id="projects">
      <h2 className="text-4xl font-clash-grotesk-bold mb-8">Projects</h2>
      <div className="grid tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            className="project-card bg-zinc-800 p-6 rounded-lg cursor-pointer hover:bg-zinc-700 transition-colors"
            onClick={() => onProjectClick(project.name)}
          >
            <h3 className="text-2xl font-clash-grotesk-medium mb-4">
              {project.name}
            </h3>
            <p className="text-font mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-background rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 