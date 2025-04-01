import React, { useState, useEffect, useRef } from "react";
import DateObject from "react-date-object";
import gsap from "gsap";
import "./css/styles.css";
// Removed unused CustomCursor and smoothscroll imports
import svgLanding from "./assets/abstract-landing.svg";
import { useParallax } from "react-scroll-parallax";
import "./animations/hover-animation.css";
import "./css/loader.css";
import useAnimations from "./animations/useAnimation";

const Landing = () => {
  // Animate elements with "h2-animation" class via custom hook
  useAnimations();

  // Time state and update
  const [time, setTime] = useState(
    new DateObject({ timezone: "America/Chicago" })
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const smoothScrollWrapperRef = useRef(null);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Parallax configuration
  const parallaxConfig = isMobile
    ? {
        titleDesigner: { translateX: [-50, 20], speed: 5 },
        titleDeveloper: { translateX: [20, -10], speed: 5 },
      }
    : {
        titleDesigner: {
          translateX: [10, -20],
          speed: 10,
          easing: "easeInOutQuad",
        },
        titleDeveloper: {
          translateX: [0, 20],
          speed: 10,
          easing: "easeInOutQuad",
        },
      };

  const { ref: titleDesigner } = useParallax(parallaxConfig.titleDesigner);
  const { ref: titleDeveloper } = useParallax(parallaxConfig.titleDeveloper);

  // Smooth scroll to sections
  const handleLinkClick = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Basic GSAP animations
  useEffect(() => {
    gsap.to(".blink-colon", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });

    gsap.from(".custom-animation", {
      opacity: 0,
      ease: "power4.inOut",
      duration: 1.5,
      delay: 0.5,
      stagger: 0.2,
    });

    const interval = setInterval(() => {
      setTime(new DateObject({ timezone: "America/Chicago" }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Overlay click animations with cleanup
  useEffect(() => {
    const overlay = document.querySelector(".overlay");
    const handleOverlayClick = () => {
      gsap.to(".headline-text", {
        yPercent: -100,
        ease: "power4.inOut",
        stagger: { amount: 0.5 },
        duration: 1.5,
      });
      gsap.to(
        ".headline",
        {
          clipPath: "polygon(0 85%, 100% 85%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
          stagger: { amount: 0.5 },
          duration: 1.5,
        },
        0
      );
      gsap.to(".overlay", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        duration: 2,
      });
    };

    overlay.addEventListener("click", handleOverlayClick);
    return () => {
      overlay.removeEventListener("click", handleOverlayClick);
    };
  }, []);

  const hours = time.format("hh");
  const minutes = time.format("mm");
  const ampm = time.format("A");

  return (
    <div className="w-full mt-5 h-screen overflow-hidden">
      <div>
        <div className="flex justify-between overflow-hidden tablet:flex-row mobile:flex-col -z-10">
          <div className="flex justify-center items-center">
            <div className="flex flex-col font-urbanist custom-animation tablet:ml-5 mobile:-ml-24">
              {/* Headings with "h2-animation" */}
              <h1 className="h2-animation">CAMERON COLEMAN</h1>
              <h1 className="h2-animation font-extrabold">
                FULL-STACK DEVELOPER
              </h1>
            </div>
            <div className="flex flex-col ml-3 font-bold text-white custom-animation font-urbanist">
              <h1>10+</h1>
              <h1>YEARS</h1>
            </div>
          </div>
          <div className="font-urbanist custom-animation mobile:mt-5 tablet:mt-0 mobile:ml-10 tablet:ml-0">
            <p>LOCATION</p>
            <p className="font-extrabold">
              AUSTIN, TX, {hours}
              <span className="blink-colon">:</span>
              {minutes} {ampm}
            </p>
          </div>
          <div className="font-urbanist flex flex-col custom-animation mr-5 mobile:mt-5 tablet:mt-0 mobile:ml-10">
            <p>NAVIGATION</p>
            <div className="flex font-extrabold z-10">
              {["about", "work", "contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="hover-link ml-3"
                  onClick={(e) => handleLinkClick(link, e)}
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
        <div className="custom-animation mobile:flex mobile:flex-col mobile:justify-center mobile:text-8xl tablet:text-12xl mobile:mt-20 tablet:mt-0">
          <div
            className="flex justify-center items-center font-clash-grotesk tablet:ml-80 tablet:-mr-96"
            ref={titleDesigner}
          >
            <img
              src={svgLanding}
              alt="abstract landing"
              className="z-10 -mr-48 mobile:w-40 tablet:w-auto"
            />
            <h1>FULL-STACK</h1>
          </div>
          <div className="flex justify-center items-center font-clash-grotesk tablet:-mt-52 tablet:mr-96 tablet:-ml-96 mobile:-mt-20">
            <h1 ref={titleDeveloper}>DEVELOPER</h1>
          </div>
          <h2 className="flex justify-center items-start font-urbanist tablet:-ml-96 tablet:text-lg mobile:text-sm">
            Crafting clean, efficient code to solve complex challenges.
          </h2>
        </div>
      </div>

      {/* Loader markup removed */}

      <div className="overlay">
        <div className="col">
          <h2 className="headline">
            <div className="headline-text">I'm Cameron Coleman</div>
          </h2>
          <h2 className="headline">
            <div className="headline-text">Proactive Full-Stack Developer</div>
          </h2>
          <h2 className="headline">
            <div className="headline-text">Based in Austin, TX</div>
          </h2>
          <h2 className="headline">
            <div className="headline-text">10+ Years in Hospitality Leadership</div>
          </h2>
        </div>
        <div className="col">
          <h2 className="headline">
            <div className="headline-text">
              <span>Click</span> anywhere to continue
            </div>
          </h2>
        </div>
      </div>

      {/* Professional Summary Section */}
      <section id="about" className="professional-summary custom-animation p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Professional Summary</h2>
          <p className="text-lg">
            I'm Cameron Coleman, a proactive full-stack developer with over 10 years
            of leadership experience in hospitality management. I thrive on solving complex
            challenges with clean, efficient code—from designing engaging front-end interfaces using
            React, HTML, and CSS, to building robust backends with Node.js, Python, and Django.
            I also integrate modern AI solutions using the OpenAI API.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="work" className="tech-stack custom-animation p-8 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <ul className="list-disc list-inside text-lg">
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>EJS</li>
            <li>MongoDB</li>
            <li>NEON PostgreSQL</li>
            <li>SQL</li>
            <li>Docker</li>
            <li>Python</li>
            <li>Django</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>OpenAI API Integration</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section custom-animation p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg">
            Get in touch:{"512-317-4414 "}
            <a href="mailto:cameron@example.com" className="text-blue-500">
              camdenzelcoleman@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
