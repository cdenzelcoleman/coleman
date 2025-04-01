import React, { useEffect } from "react";
import gsap from "gsap";
import "../css/panelPreloader.css";

const PanelPreloader = ({ onComplete }) => {
  useEffect(() => {
    // Animate all panels upward with a stagger effect
    gsap.to(".panel", {
      y: "-100%",
      duration: 1.5,
      stagger: 0.3,
      ease: "power4.inOut",
      onComplete: onComplete, 
    });
  }, [onComplete]);

  return (
    <div className="panel-preloader">
      <div className="panel panel1"></div>
      <div className="panel panel2"></div>
      <div className="panel panel3"></div>
    </div>
  );
};

export default PanelPreloader;
