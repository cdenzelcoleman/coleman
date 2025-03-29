import React, { useEffect } from "react";
import aboutPhoto from "./assets/about-photo.svg";
import { useParallax } from "react-scroll-parallax";
import "./css/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import about1 from "./assets/ABOUT-1.png";
import about2 from "./assets/ABOUT-2.png";

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 120%",
          end: "bottom 50%",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );
    gsap.fromTo(
      ".p-about",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".p-about",
          start: "top 120%",
          end: "bottom 50%",
          toggleActions: "play none none none",
          markers: false,
        },
        delay: 0.2,
      }
    );
  }, []);

  return (
    <div className="w-full font-urbanist uppercase p-2 pb-40" id="about">
      <div>
        <h1 className="font-clash-grotesk tablet:text-10xl mobile:text-7xl about-title">general+</h1>
      </div>
      <div className="grid tablet:grid-cols-2 mobile:grid-cols-1 gap-4">
        <div className="font-bold p-about">
          <img src={about2} alt="Cameron Coleman" className="rounded-lg"/>
          <p className="mt-4 text-lg">cameron coleman &nbsp;&nbsp; full-stack developer</p>
          <p className="text-lg">Austin, TX</p>
        </div>
        <div className="p-about">
          <img src={about1} alt="Cameron Coleman" className="rounded-lg"/>
          <p className="text-lg mt-4">
            Hi, I'm Cameron Coleman, a proactive full-stack developer passionate about creating dynamic digital experiences. I thrive on solving complex challenges with clean, efficient code—from designing engaging front-end interfaces using React to building robust backends with Node.js and Django.
          </p>
          <p className="text-lg mt-5">
            I believe websites are a form of storytelling—merging images, colors, and typography to craft immersive narratives. My mission is to develop compelling digital experiences that blend modern design with robust technology.
          </p>
          <h1 className="font-clash-grotesk tablet:text-10xl mobile:text-7xl">(info)</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
