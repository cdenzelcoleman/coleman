import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LiquidCursor = () => {
  const numBlobs = 10; // number of blobs to render
  const blobs = useRef([]);
  // Start all blobs at the center
  const positions = useRef(
    Array.from({ length: numBlobs }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }))
  );
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const updatePositions = () => {
      blobs.current.forEach((blob, index) => {
        // For the first blob, target is the mouse.
        // For subsequent blobs, target is the previous blob's position.
        const target = index === 0 ? mouse.current : positions.current[index - 1];
        const dx = target.x - positions.current[index].x;
        const dy = target.y - positions.current[index].y;
        // Using a fixed speed factor for a smooth chain effect
        const speed = 0.2;
        positions.current[index].x += dx * speed;
        positions.current[index].y += dy * speed;

        gsap.set(blob, {
          x: positions.current[index].x,
          y: positions.current[index].y,
        });
      });
      requestAnimationFrame(updatePositions);
    };

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove);
    updatePositions();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Prevent the custom cursor on mobile devices
  const isMobile = () =>
    window.matchMedia('(pointer: coarse)').matches ||
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0;
  if (isMobile()) return null;

  return (
    <>
      {Array.from({ length: numBlobs }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (blobs.current[index] = el)}
          className="liquid-cursor"
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9999,
            transform: 'translate(-50%, -50%)',
            filter: 'url(#gooey)',
            background: 'rgba(100, 200, 255, 0.4)',
          }}
        />
      ))}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
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
              values="
                1 0 0 0 0  
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
};

export default LiquidCursor;
