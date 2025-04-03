import React, { useState, useEffect, useRef } from "react";
import DateObject from "react-date-object";
import gsap from "gsap";
import "./css/styles.css";
import { useParallax } from "react-scroll-parallax";
import "./animations/hover-animation.css";
import useAnimations from "./animations/useAnimation";
import { TypeAnimation } from 'react-type-animation';

const Landing = () => {
  useAnimations();
  const [time, setTime] = useState(
    new DateObject({ timezone: "America/Chicago" })
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const { ref: titleDesigner } = useParallax({ 
    translateX: [-50, 20], 
    speed: 5 
  });

  const { ref: titleDeveloper } = useParallax({ 
    translateX: [30, -20], 
    speed: 10 
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.to(".blink-colon", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });

    const interval = setInterval(() => {
      setTime(new DateObject({ timezone: "America/Chicago" }));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const hours = time.format("hh");
  const minutes = time.format("mm");
  const ampm = time.format("A");

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="fixed top-0 left-0 w-full #ECECED z-50">
      <div className="flex justify-between items-start overflow-hidden tablet:flex-row mobile:flex-col">
        <div className="flex items-center flex-grow min-w-[300px]">
          <div className="font-extrabold flex flex-col font-urbanist tablet:ml-5 mobile:-ml-24">
            <h1 className="h2-animation">CAMERON COLEMAN</h1>
            <div className="h2-animation font-extrabold">
              <TypeAnimation
                sequence={[
                  'FULL-STACK DEVELOPER',
                  2000,
                  'MOBILE APP DEVELOPER',
                  2000,
                  'UI/UX ENGINEER',
                  2000,
                  'CLOUD ARCHITECT',
                  2000
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                cursorStyle={{
                  color: '#FF0000',
                  width: '2px',
                  animation: 'blink .75s step-end infinite'
                }}
                style={{
                  fontSize: 'inherit',
                  display: 'inline-block'
                }}
              />
            </div>
          </div>
        </div>

        <div className="font-urbanist flex-shrink-0 min-w-[200px] tablet:mr-5 mobile:mr-0">
          <p className="font-extrabold whitespace-nowrap text-center tablet:text-left">LOCATION</p>
          <p className="font-extrabold whitespace-nowrap text-center tablet:text-left">
            AUSTIN, TX {hours}
            <span className="blink-colon">:</span>
            {minutes} {ampm}
          </p>
        </div>

        {/* Navigation */}
        <div className="font-urbanist flex flex-col mr-5 flex-shrink-0 min-w-[200px]">
          <p className="font-extrabold whitespace-nowrap text-center tablet:text-l-right">NAVIGATION</p>
          <div className="font-extrabold flex justify-end gap-3">
            {["about", "work", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="hover-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>
                  <span>{link.toUpperCase()}</span>
                  <span>{link.toUpperCase()}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Main Content */}
      <div className="mt-60 tablet:mt-80">
        <div className="flex justify-center items-center font-clash-grotesk tablet:ml-40" ref={titleDesigner}>
          <h1 className="tablet:text-10xl mobile:text-7xl">FULL-STACK</h1>
        </div>
        
        <div className="flex justify-center items-center font-clash-grotesk tablet:-mt-28" ref={titleDeveloper}>
          <h1 className="tablet:text-10xl mobile:text-7xl">DEVELOPER</h1>
        </div>

        <h2 className="text-center font-urbanist tablet:text-lg mobile:text-sm mt-6">
          Crafting clean, efficient code to solve complex challenges.
        </h2>
      </div>
    </div>
  );
};

export default Landing;