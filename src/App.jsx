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
import { ParallaxProvider } from 'react-scroll-parallax';
import { useSpring, animated } from '@react-spring/web';
import { AnimatePresence } from "framer-motion";
import "./css/lenis.css";
import "./animations/hover-animation.css";
import "./css/loader.css";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import usePreloadSVGAssets from "./hooks/usePreloadSVGAssets";
import "./css/index.css";
import TechStack from './TechStack';
import png1 from "./images/1.png";
import png2 from "./images/2.png";
import png3 from "./images/3.png";
import png4 from "./images/4.png";
import png5 from "./images/5.png";
import png6 from "./images/6.png";
import png7 from "./images/7.png";


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loading , setLoading] = useState(true);
  const siteContentRef = useRef(null);
  const lenisRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const handlePreloadComplete = () => {
    setLoading(false);
  }; 
  
  usePreloadSVGAssets();

  useEffect(() => {
    const lenis = new Lenis();
    
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    const timer = setTimeout(() => {
      setIsLoaded(true);
      gsap.to(".loader, .overlay", { autoAlpha: 0, duration: 1 });
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
      {isLoading && <Preloader onAnimationComplete={() => setIsLoading(false)} />}
        <div className="content-wrapper" style={{ visibility: isLoaded ? "visible" : "hidden" }}>
          <Routes location={location} key={location.pathname}>
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
            <Route path="/tech" element={<TechStack />} />
          </Routes>
        </div>

        <div className="loader">
          <div className="img-container">
            <img src={png1} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="img-container">
            <img src={png2} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="img-container">
            <img src={png3} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="img-container">
            <img src={png4} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="img-container">
            <img src={png5} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="img-container">
            <img src={png6} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="img-container">
            <img src={png7} alt="Background" className="w-full h-full object-cover" />
          </div>
        </div>
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
