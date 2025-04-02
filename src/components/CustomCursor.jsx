import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = React.useRef(null);
  const followerRef = React.useRef(null);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hover state handler
  const handleHover = (e) => {
    const target = e.target;
    if (target.closest('a')) setIsHovering('link');
    else if (target.closest('button')) setIsHovering('button');
    else if (target.closest('.video')) setIsHovering('video');
    else setIsHovering(false);
  };

  useEffect(() => {
    if(isMobile) return; // Disable on mobile

    const onMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const updateCursor = () => {
      gsap.to(cursorRef.current, {
        x: mousePos.x - 8,
        y: mousePos.y - 8,
        duration: 0.15,
        ease: 'power2.out'
      });

      gsap.to(followerRef.current, {
        x: mousePos.x - 20,
        y: mousePos.y - 20,
        duration: 0.5,
        ease: 'power2.out'
      });

      requestAnimationFrame(updateCursor);
    };

    document.addEventListener('mouseover', handleHover);
    window.addEventListener('mousemove', onMouseMove);
    updateCursor();

    return () => {
      document.removeEventListener('mouseover', handleHover);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [mousePos, isMobile]);

  if(isMobile) return null; // Don't render on mobile

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed w-4 h-4 rounded-full pointer-events-none z-50 transition-all duration-300 ${
          isHovering === 'link' ? 'bg-blue-500 scale-125' :
          isHovering === 'button' ? 'bg-green-500 scale-150' :
          isHovering === 'video' ? 'bg-purple-500 scale-150' :
          'bg-black scale-100'
        }`}
      />
      <div
        ref={followerRef}
        className="fixed w-10 h-10 border-2 border-black rounded-full pointer-events-none z-40 opacity-50"
      />
    </>
  );
};

export default CustomCursor;