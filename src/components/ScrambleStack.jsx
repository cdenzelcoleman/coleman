import React, { useEffect, useState } from "react";
// import "./css/index.css"; 

const techStack = [
  "Python","React", "JavaScript","Docker", "HTML", "CSS", "Node", "Django", "PostgreSQL",
  "MongoDB", "NEON", "AWS", "Kubernetes",
   "OpenAI API", "Express", "Heroku", 
   "React Native", "Git", "GitHub","SQL"
];

const characters = "█▓▒░<>|!@#$%^&*()_+=-ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const scrambleWord = (target, progress) => {
  let scrambled = "";
  for (let i = 0; i < target.length; i++) {
    scrambled += i < progress
      ? target[i]
      : characters[Math.floor(Math.random() * characters.length)];
  }
  return scrambled;
};

const ScrambleStack = () => {
  const [index, setIndex] = useState(0);
  const [frame, setFrame] = useState(0);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const word = techStack[index];
    const interval = setInterval(() => {
      if (frame >= word.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % techStack.length); 
          setFrame(0);
        }, 2000);
      } else {
        setFrame((f) => f + 1);
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [index, frame]);

  useEffect(() => {
    const word = techStack[index];
    setCurrent(scrambleWord(word, frame));
  }, [frame, index]);

  return (
   <div className="mt-10 text-center font-clash-grotesk tablet:text-8xl mobile:text-4xl uppercase text-black-400 tracking-tight">
      <p className="text-black-400 opacity-70 mb-4">TECH STACK:</p>
      <div className="inline-block px-6 py-3 text-black-300  border-green-700 animate-pulse duration-1000">
        {current}
      </div>
    </div>
  );
};

export default ScrambleStack;
