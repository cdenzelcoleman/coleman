import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../utils/data';

const SinglePageProject = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(proj => proj.name.toLowerCase() === name.toLowerCase());

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-background text-font">
      <button 
        onClick={() => navigate(-1)}
        className="mb-8 text-lg hover:underline"
      >
        ← Back to Projects
      </button>
      
      <h1 className="text-6xl font-clash-grotesk-bold mb-6">{project.name}</h1>
      
      <div className="grid tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
        <div className="space-y-6">
          <img 
            src={project.hero} 
            alt={project.name} 
            className="rounded-lg shadow-xl"
          />
          
          <div className="prose prose-invert">
            <h2 className="text-3xl font-clash-grotesk-medium">Details</h2>
            <p className="text-lg">{project.details}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-2xl font-clash-grotesk-medium mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-zinc-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-2xl font-clash-grotesk-medium mb-4">Links</h3>
            <div className="flex flex-col gap-2">
              {Object.entries(project.socials).map(([key, value]) => (
                <a
                  key={key}
                  href={value.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-font hover:text-white transition-colors"
                >
                  {value.name} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageProject;