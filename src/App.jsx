// src/App.jsx
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Lenis from "lenis";
import ScrollTrigger from "gsap/ScrollTrigger";

// Mobile components
import MobileContact from './components/MobileContact';
import MobileProjects from './components/MobileProjects';

// Desktop components
import PanelPreloader from "./components/PanelPreloader";
import Preloader from "./components/Preloader";
import LiquidCursor from "./components/LiquidCursor";
import BackgroundColorChanger from "./components/BackgroundColorChanger";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import SinglePageProject from "./components/SinglePageProject";
import TechStack from "./TechStack";
import usePreloadSVGAssets from "./hooks/usePreloadSVGAssets";
import "./css/lenis.css";
import "./animations/hover-animation.css";
import "./css/loader.css";
import "./css/index.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handlePreloadComplete = () => {
    setIsLoading(false);
  };

  usePreloadSVGAssets();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      normalizeWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    const timer = setTimeout(() => {
      setIsLoaded(true);
      gsap.to(".overlay", {
        autoAlpha: 0,
        duration: 1,
        onComplete: () => {
          document.querySelector(".overlay").style.display = "none";
        },
      });
    }, 2000);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  const handleProjectClick = (projectName) => {
    navigate(`/project/${encodeURIComponent(projectName)}`);
  };

  return (
    <AnimatePresence mode="wait">
      <ParallaxProvider>
        <LiquidCursor />
        <BackgroundColorChanger />

        {isLoading && <Preloader onAnimationComplete={handlePreloadComplete} />}

        <div
          className="content-wrapper"
          style={{ visibility: isLoaded ? "visible" : "hidden" }}
        >
          {/* Mobile components */}
          {isMobile && (
            <Routes location={location} key={location.pathname}>
              <Route
                path="/*"
                element={
                  <>
                    <Landing />
                    <About />
                    <MobileProjects onProjectClick={handleProjectClick} />
                    <MobileContact />
                  </>
                }
              />
              <Route path="/project/:name" element={<SinglePageProject />} />
            </Routes>
          )}

          {/* Desktop components */}
          {!isMobile && (
            <Routes location={location} key={location.pathname}>
              <Route
                path="/*"
                element={
                  <>
                    <Landing />
                    <About />
                    <Projects onProjectClick={handleProjectClick} />
                    <Contact />
                  </>
                }
              />
              <Route path="/project/:name" element={<SinglePageProject />} />
              <Route path="/tech" element={<TechStack />} />
            </Routes>
          )}
        </div>

        {/* Overlay */}
        <div className="overlay" style={{ zIndex: 9998 }}>
          <div className="col mobile:text-sm tablet:text-5xl">
            <h2 className="headline">
              <div className="headline-text">A full-stack</div>
            </h2>
            <h2 className="headline">
              <div className="headline-text">developer & innovator</div>
            </h2>
            <h2 className="headline">
              <div className="headline-text">from Austin, TX</div>
            </h2>
          </div>
          <div className="col">
            <h2 className="headline">
              <div className="headline-text">
                <span>click</span> anywhere to continue
              </div>
            </h2>
          </div>
        </div>
      </ParallaxProvider>
    </AnimatePresence>
  );
};

export default App;