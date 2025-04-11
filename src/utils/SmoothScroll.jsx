// src/utils/SmoothScroll.jsx
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.5,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      normalizeWheel: true,
    });

    // Update GSAP ScrollTrigger on scroll
    lenis.on("scroll", ScrollTrigger.update);
    // Add Lenis to the GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      // Clean up the ticker and destroy Lenis
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
