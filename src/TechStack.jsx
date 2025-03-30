import React from "react";

const techStack = {
  "Frontend Development": [
    "React", "JavaScript", "HTML", "HTML5", "CSS", "React Flow", "Front-End Development", "Front-end Coding"
  ],
  "Mobile Development": [
    "React Native", "Mobile Application Development"
  ],
  "Backend Development": [
    "Express.js", "Node.js", "Django", "Python", "SQL", "Back-End Web Development"
  ],
  "Databases": [
    "PostgreSQL", "MongoDB", "NEON"
  ],
  "Cloud & DevOps": [
    "Heroku", "Amazon Web Services (AWS)", "Kubernetes", "Docker Products"
  ],
  "AI & Machine Learning": [
    "OpenAI API"
  ]
};

const TechStack = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Tech Stack</h1>
      {Object.entries(techStack).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h2 className="text-2xl font-semibold">{category}</h2>
          <ul className="list-disc ml-6 mt-2">
            {items.map((tech) => (
              <li key={tech} className="text-lg">{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
