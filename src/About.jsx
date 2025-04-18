import React, { useEffect } from "react";
import "./css/index.css";
import gsap from "gsap";
import about1 from "./assets/about-1.png";
import ScrambleStack from "./components/ScrambleStack";


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
    <div className="w-full font-urbanist uppercase p-4 pb-40 pt-10" id="about">
      <div>
        <h1 className="font-clash-grotesk tablet:text-10xl mobile:text-7xl mobile:pt-14 about-title">
          cameron coleman
        </h1>
      </div>
      <div className="grid tablet:grid-cols-2 mobile:grid-cols-1 gap-4">
        <div className="font-bold p-about flex flex-col">
          <p className="mt-4 text-lg"></p>
          <p className="text-lg"></p>
        </div>
        <div className="p-about">
        <img 
  src={about1} 
  alt="Cameron Coleman" 
  className="rounded-lg w-full max-w-[400px] h-auto mx-auto tablet:max-w-[300px] mobile:max-w-[200px] transition-all duration-300 hover:scale-95"
/>
          <p className="text-lg mt-4">
          I'm Cameron Coleman, a dedicated full-stack developer with over 10 years of leadership experience in hospitality management. As a father, husband, comic book enthusiast, skateboarder, martial artist, and actor, I blend creativity with technical expertise. I thrive on solving complex challenges with clean, efficient code—from designing engaging front-end interfaces using React, HTML, and CSS, to building robust backends with Node.js, Python, and Django, and integrating modern AI solutions with the OpenAI API. I work hard, love to learn, and am driven by a commitment to excellence.
          </p>
          {/* <p className="text-lg mt-5">
          Websites are a form of storytelling—merging images, colors, and typography to craft immersive narratives. My mission is to develop compelling digital experiences that seamlessly integrate modern design with robust frontend and backend technology, ensuring both beautiful visuals and powerful, scalable server-side solutions.
             </p> */}
          <h1 className="font-clash-grotesk tablet:text-10xl mobile:text-7xl">(info)</h1>
          <ScrambleStack />

        </div>
      </div>
    </div>
  );
};

export default About;
