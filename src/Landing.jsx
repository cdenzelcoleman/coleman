import React, { useState, useEffect, useRef } from "react"; // Add useState here
import DateObject from "react-date-object";
import gsap from "gsap";
import "./css/styles.css";
// import svgLanding from "./assets/abstract-landing.svg";
import { useParallax } from "react-scroll-parallax";
import "./animations/hover-animation.css";
import useAnimations from "./animations/useAnimation";

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
      <div className="flex justify-between overflow-hidden tablet:flex-row mobile:flex-col">
        <div className="flex justify-center items-center">
          <div className="flex flex-col font-urbanist tablet:ml-5 mobile:-ml-24">
            <h1 className="h2-animation">CAMERON COLEMAN</h1>
            <h1 className="h2-animation font-extrabold">FULL-STACK DEVELOPER</h1>
          </div>
          <div className="flex flex-col ml-3 font-bold text-white font-urbanist">
            <h1>10+</h1>
            <h1>YEARS</h1>
          </div>
        </div>

        <div className="font-urbanist mobile:mt-5 tablet:mt-0 mobile:ml-10">
          <p>LOCATION</p>
          <p className="font-extrabold">
            AUSTIN, TX {hours}
            <span className="blink-colon">:</span>
            {minutes} {ampm}
          </p>
        </div>

        <div className="font-urbanist flex flex-col mr-5 mobile:mt-5 tablet:mt-0">
          <p>NAVIGATION</p>
          <div className="flex font-extrabold">
            {["about", "work", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="hover-link ml-3"
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

      <div className="mt-10 tablet:mt-0">
      <div className="flex justify-center items-center font-clash-grotesk tablet:ml-80 tablet:-mr-96"
  ref={titleDesigner}
>
  <h1 className="tablet:text-12xl mobile:text-8xl">FULL-STACK</h1>
</div>
        
        <div className="flex justify-center items-center font-clash-grotesk tablet:-mt-52 tablet:mr-96 tablet:-ml-96"
          ref={titleDeveloper}
        >
          <h1 className="tablet:text-12xl mobile:text-8xl">DEVELOPER</h1>
        </div>

        <h2 className="text-center font-urbanist tablet:text-lg mobile:text-sm mt-4">
          Crafting clean, efficient code to solve complex challenges.
        </h2>
      </div>
    </div>
  );
};

export default Landing;