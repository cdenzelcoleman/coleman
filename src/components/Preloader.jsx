import React, { useEffect } from "react";
import gsap from "gsap";
// import { TypeAnimation } from "react-type-animation";
import "../css/panelPreloader.css" 

import TypeJobTitles from "./TypeJobTitles"; 

const Preloader = ({ onAnimationComplete }) => {
  // job titles 
  const jobTitles = [
    "Full-Stack Developer",
    "Software Engineer",
    "Back-End Developer",
    "UI/UX Developer",
    "Based In Austin, TX",
  ];

  // overall preloader animation (like fading out)
  useEffect(() => {
    // fade out after 8 seconds.
    const timer = setTimeout(() => {
      //hide the preloader
      onAnimationComplete && onAnimationComplete();
    }, 3500); //  duration 

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="preloader">
      <div className="loader-content">
        <h1>
          <TypeJobTitles titles={jobTitles} />
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
