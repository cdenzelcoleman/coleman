import React, { useEffect, useRef, useState } from "react";
import PanelPreloader from "./components/PanelPreloader";
import gsap from "gsap";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import CustomCursor from "./utils/CustomCursor";
import Contact from "./Contact";
import SinglePageProject from "./components/SinglePageProject";
import Lenis from "lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import Preloader from "./components/Preloader";
import { ParallaxProvider } from "react-scroll-parallax";
import { AnimatePresence } from "framer-motion";
import "./css/lenis.css";
import "./animations/hover-animation.css";
import "./css/loader.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import usePreloadSVGAssets from "./hooks/usePreloadSVGAssets";
import "./css/index.css";
import TechStack from "./TechStack";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const siteContentRef = useRef(null);
  const lenisRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const handlePreloadComplete = () => {
    setIsLoading(false);
  };

  usePreloadSVGAssets();

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Since the loader images are removed, only fade out the overlay.
      gsap.to(".overlay", { autoAlpha: 0, duration: 1 });
    }, 2000);

    return () => {
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
        {isLoading && <Preloader onAnimationComplete={handlePreloadComplete} />}
        <div
          className="content-wrapper"
          style={{ visibility: isLoaded ? "visible" : "hidden" }}
        >
          <Routes location={location} key={location.pathname}>
            <Route
              path="/*"
              element={
                <>
                  <Landing />
                  <CustomCursor />
                  <About />
                  <Projects onProjectClick={handleProjectClick} />
                  <Contact />
                </>
              }
            />
            <Route path="/project/:name" element={<SinglePageProject />} />
            <Route path="/tech" element={<TechStack />} />
          </Routes>
        </div>

        {/* Loader image markup has been removed */}

        <div className="overlay">
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
