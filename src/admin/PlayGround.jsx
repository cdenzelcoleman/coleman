import React, { useEffect, useRef, useState } from "react";
import Landing from "../Landing.jsx";
import gsap from "gsap";
import About from "../About";
import Projects from "../Projects";
import CustomCursor from "../utils/CustomCursor";
import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "../Contact";
import SinglePageProject from "./components/SinglePageProject";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation
} from "react-router-dom";
import Lenis from "lenis";
import "../css/lenis.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import usePreloadSVGAssets from "../hooks/usePreloadSVGAssets";
import { AnimatePresence } from "framer-motion";
import "../animations/hover-animation.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  usePreloadSVGAssets();
  const siteContentRef = useRef(null);
  const lenisRef = useRef();
  const [showLanding, setShowLanding] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
      direction: "vertical",
      smooth: true,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    lenisRef.current = lenis;

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  const handleProjectClick = (projectName) => {
    navigate(`/project/${encodeURIComponent(projectName)}`); 
  };

  return (
    <AnimatePresence mode="wait">
      <ParallaxProvider>
        <div className="overflow-x-hidden w-full bg-noise opacity-90">
          
            <Routes location={location} key={location.pathname}>
              {showLanding && (
                <>
                  <Route
                    path="/*"
                    element={
                      <>
                        <CustomCursor />
                        <Landing />
                        <About />
                        <Projects onProjectClick={handleProjectClick} />
                        <Contact />
                      </>
                    }
                  />
                  <Route path="/project/:name" element={<SinglePageProject />} />
                </>
              )}
            </Routes>
         
        </div>
      </ParallaxProvider> </AnimatePresence>
    );
}