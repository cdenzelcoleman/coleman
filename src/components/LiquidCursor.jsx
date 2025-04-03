import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LiquidCursor = () => {
  const cursorRef = useRef(null);
  const pos = useRef({ 
    x: typeof window !== 'undefined' ? window.innerWidth/2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight/2 : 0 
  });
  const mouse = useRef({ x: 0, y: 0 });
  const speed = 0.2;

  // mobile detection
  const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia("(pointer: coarse)").matches || 
           'ontouchstart' in window || 
           navigator.maxTouchPoints > 0;
  };

  useEffect(() => {
    if (typeof window === 'undefined' || isMobile()) return;

    // cursor position
    gsap.set(cursorRef.current, {
      x: pos.current.x,
      y: pos.current.y
    });

    const updatePosition = () => {
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;

      pos.current.x += dx * speed;
      pos.current.y += dy * speed;

      gsap.set(cursorRef.current, {
        x: pos.current.x,
        y: pos.current.y,
        overwrite: "auto"
      });

      requestAnimationFrame(updatePosition);
    };

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    // Hover 
    const handleHover = (e) => {
      const target = e.target.closest('a, button, .hover-effect');
      gsap.to(cursorRef.current, {
        scale: target ? 1.5 : 1,
        background: target ? 'rgba(255, 100, 200, 0.5)' : 'rgba(100, 200, 255, 0.4)',
        duration: 0.3
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleHover);
    updatePosition();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleHover);
    };
  }, []);

  if (typeof window !== 'undefined' && isMobile()) return null;

  
return (
  <>
    <div
      ref={cursorRef}
      className="liquid-cursor"
      style={{
        position: 'fixed',
        left: '-20px',
        top: '-20px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        filter: 'url(#gooey)',
        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    />
    
    <svg style={{ position: 'absolute', width: '0', height: '0' }}>
  <defs>
    <filter 
      id="gooey" 
      x="-50%" 
      y="-50%" 
      width="200%" 
      height="200%"
      colorInterpolationFilters="sRGB"
    >
      <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
      <feColorMatrix 
        in="blur" 
        mode="matrix" 
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -8" 
        result="goo"
      />
      <feBlend in="SourceGraphic" in2="goo" mode="lighten" />
    </filter>
  </defs>
</svg>
  </>
);
}
export default LiquidCursor;