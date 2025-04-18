import React, { useEffect, useState } from "react";
// import "./css/index.css";

const techStack = [
  "React", "JavaScript", "HTML", "CSS", "React Native", "Node.js", "Django",
  "Python", "SQL", "PostgreSQL", "MongoDB", "NEON", "AWS", "Kubernetes",
  "Docker", "OpenAI API, Express.js", "Heroku", "Python"
];

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

const scramble = (word, current) => {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    result += i < current ? word[i] : characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
};

const ScrambleStack = () => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (index >= techStack.length) return;

    const word = techStack[index];
    const interval = setInterval(() => {
      if (frame >= word.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((i) => i + 1);
          setFrame(0);
        }, 800);
      } else {
        setFrame((f) => f + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [index, frame]);

  useEffect(() => {
    if (index < techStack.length) {
      const word = techStack[index];
      const scrambled = scramble(word, frame);
      setDisplayed(scrambled);
    }
  }, [frame, index]);

  return (
    <div className="mt-10 text-center font-mono text-xl tablet:text-3xl tracking-widest text-bg-color">
      <p className="opacity-70">TECH I USE:</p>
      <div className="mt-4">
        <span className="inline-block px-4 py-2 bg-black text-white rounded transition-all duration-200">
          {displayed}
        </span>
      </div>
    </div>
  );
};

export default ScrambleStack;
