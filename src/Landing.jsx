import React, { useState, useEffect} from "react";
import DateObject from "react-date-object";
import gsap from "gsap";
import "./css/styles.css";
import { useParallax } from "react-scroll-parallax";
import "./animations/hover-animation.css";
import useAnimations from "./animations/useAnimation";
import { TypeAnimation } from 'react-type-animation';
import MobileBottomNav from './components/MobileBottomNav';

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
    <div className="w-full min-h-screen overflow-x-hidden">

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 w-full z-50 mobile:block tablet:hidden bg-bg-color/95 backdrop-blur-sm py-4">
        <div className="flex flex-col items-center px-4">
          <h1 className="text-2xl font-bold text-center">CAMERON COLEMAN</h1>
          <div className="text-center mt-2">
            <TypeAnimation
              sequence={[
                'FULL-STACK DEVELOPER',
                    2000,
                    'MOBILE APP DEVELOPER',
                    2000,
                    'UI/UX ENGINEER',
                    2000,
                    'CLOUD ARCHITECT',
                    2000,
                     'WEB DEVELOPER',
                    2000,
                    'FRONT-END DEVELOPER',
                    2000,
                    'BACK-END DEVELOPER',
                    2000,
                    'SOFTWARE ENGINEER',
                    2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '0.875rem' }}
              cursorStyle={{
                width: '2px',
                animation: 'blink .75s step-end infinite'
              }}
            />
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="fixed top-0 left-0 w-full #ECECED z-50 mobile:hidden tablet:block">
        <div className="flex justify-between items-start overflow-hidden tablet:flex-row">
          <div className="flex items-center flex-grow min-w-[300px]">
            <div className="font-extrabold flex flex-col font-urbanist tablet:ml-5">
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
                    2000,
                     'WEB DEVELOPER',
                    2000,
                    'FRONT-END DEVELOPER',
                    2000,
                    'BACK-END DEVELOPER',
                    2000,
                    'SOFTWARE ENGINEER',
                    2000,
                    
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

          <div className="font-urbanist flex-shrink-0 min-w-[200px] tablet:mr-5">
            <p className="font-extrabold whitespace-nowrap text-center tablet:text-left">LOCATION</p>
            <p className="font-extrabold whitespace-nowrap text-center tablet:text-left">
              AUSTIN, TX {hours}
              <span className="blink-colon">:</span>
              {minutes} {ampm}
            </p>
          </div>

          <div className="font-urbanist flex flex-col mr-5 flex-shrink-0 min-w-[200px]">
            <p className="font-extrabold whitespace-nowrap text-center tablet:text-right">NAVIGATION</p>
            <div className="font-extrabold flex justify-end gap-3">
              {["about", "projects", "contact"].map((link) => (
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

      {/* Main Content (Shared) */}
      <div className="mt-[30vh] mobile:px-4 tablet:mt-80 px-4 tablet:px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
    <div className="w-full">
      <div className="font-clash-grotesk" ref={titleDesigner}>
        <h1 className="mobile:text-5xl tablet:text-10xl">FULL-STACK</h1>
      </div>
      <div className="font-clash-grotesk mobile:mt-4 tablet:-mt-32" ref={titleDeveloper}>
        <h1 className="mobile:text-5xl tablet:text-10xl">DEVELOPER</h1>
      </div>
      <h2 className="mt-4 font-urbanist mobile:text-base tablet:text-lg px-4">
        Crafting clean, efficient code to solve complex challenges.
      </h2>
    </div>
  </div>
</div>


      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 w-full z-50 mobile:block tablet:hidden bg-[#F2F0EF]/95 backdrop-blur-lg py-4">
       <div className="flex justify-between items-center w-full px-4">
          <div className="text-center">
            <p className="text-sm font-bold">
              {hours}<span className="blink-colon">:</span>{minutes} {ampm}
            </p>
            <p className="text-xs">LOCATION</p>
            <p className="font-bold whitespace-nowrap text-xs">
              AUSTIN, TX
              </p>
          </div>
          <div className="flex gap-4">
            {["about", "projects", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="hover-link text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link)?.scrollIntoView({ 
                    behavior: "smooth",
                    block: "start"
                  });
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
            <MobileBottomNav hours={hours} minutes={minutes} ampm={ampm} />
    </div>
  );
};

export default Landing;