import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BackgroundColorChanger = () => {
  useEffect(() => {
    // About background color fade
    gsap.to("body", {
      backgroundColor: "#a07178", // Color for About
      ease: "none",
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Projects background color fade
    gsap.to("body", {
      backgroundColor: "#a07178", //color for Projects
      ease: "none",
      scrollTrigger: {
        trigger: "#projects",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Contact background color fade
    gsap.to("body", {
      backgroundColor: "#776274", // Color for Contact
      ease: "none",
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return null;
};

export default BackgroundColorChanger;
