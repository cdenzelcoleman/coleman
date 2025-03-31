import React, { useEffect } from "react";
import { useParallax } from "react-scroll-parallax";
import gsap from "gsap";
import "./animations/hover-animation.css";

const Landing = () => {
  const { ref: designerRef } = useParallax({
    translateX: [-100, 50], 
    speed: -10
  });

  const { ref: developerRef } = useParallax({
    translateX: [50, -50],
    speed: 10
  });

  // GSAP animations for initial load
  useEffect(() => {
    gsap.fromTo(
      [".name-heading", ".location-text"],
      { 
        opacity: 0,
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      }
    );
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Header Section */}
      <header className="flex justify-between p-8 absolute w-full z-10">
        <div className="flex flex-col font-urbanist">
          <h1 className="name-heading text-3xl font-bold">CAMERON COLEMAN</h1>
          <h2 className="name-heading text-4xl font-extrabold mt-2">
            FULL-STACK DEVELOPER
          </h2>
        </div>

        <div className="flex items-center gap-8">
          <div className="font-urbanist location-text">
            <p className="text-lg">BASED IN</p>
            <p className="text-2xl font-extrabold">AUSTIN, TX</p>
          </div>
          <nav className="flex gap-6">
            {["about", "work", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="hover-link text-xl font-bold uppercase"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Parallax Content */}
      <main className="h-full w-full flex items-center justify-center">
        {/* Developer Title */}
        <div 
          ref={designerRef} 
          className="absolute left-[15%] top-1/3 -translate-y-1/2"
        >
          <h1 className="font-clash-grotesk text-[12rem] leading-[0.8]">
            DEVELOPER
          </h1>
        </div>

        {/* Designer Title */}
        <div
          ref={developerRef}
          className="absolute right-[15%] top-2/3 -translate-y-1/2"
        >
          <h1 className="font-clash-grotesk text-[12rem] leading-[0.8]">
            DESIGNER
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Landing;