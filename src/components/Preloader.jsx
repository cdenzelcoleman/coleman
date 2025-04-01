import React, { useEffect } from "react";
import gsap from "gsap";
import "../css/loader.css"; 

const Preloader = ({ onAnimationComplete }) => {
  useEffect(() => {
    gsap.to(".overlay", {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", 
      duration: 1.5,
      ease: "power4.inOut",
      delay: 8, 
      onComplete: onAnimationComplete, 
    });
  }, [onAnimationComplete]);

  return (
    <div className="preloader">
      <div className="loader">
        <h1>Loading...</h1>
        {/* You can add more animated elements here (like a logo or animated graphics) */}
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Preloader;
