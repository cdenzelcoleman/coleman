import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.1
      });
    });

    const hoverTargets = document.querySelectorAll(".project-card, a, button, .hover-link");
    
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        gsap.to(cursorRef.current, {
          scale: 1.8,
          backgroundColor: "#FF0000",
          duration: 0.2
        });
        textRef.current.style.opacity = "1";
      });

      target.addEventListener("mouseleave", () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "#000",
          duration: 0.2
        });
        textRef.current.style.opacity = "0";
      });
    });

    return () => {
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", () => {});
        target.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="w-8 h-8 bg-black fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center"
    >
      <span 
        ref={textRef}
        className="text-xs text-white font-urbanist font-bold absolute opacity-0 transition-opacity"
        style={{ transform: 'translateY(150%)' }}
      >
        VIEW
      </span>
    </div>
  );
};

export default CustomCursor;