import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CyberCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  // Mouse position state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physics for the outer ring
  const springConfig = { damping: 25, stiffness: 300 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Check if hovering over clickable elements
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* 1. The Center Dot (Follows instantly) */}
      <motion.div
        className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />

      {/* 2. The Tactical Ring (Lags slightly) */}
      <motion.div
        className="absolute top-0 left-0 border border-cyan-500/50 rounded-full flex items-center justify-center"
        style={{ 
          x: ringX, 
          y: ringY, 
          translateX: '-50%', 
          translateY: '-50%',
          width: isHovering ? 60 : 30, // Expands on hover
          height: isHovering ? 60 : 30,
        }}
        animate={{
          scale: isClicking ? 0.8 : 1, // Shrinks on click
          borderColor: isClicking ? '#00FF9F' : 'rgba(34, 211, 238, 0.5)'
        }}
      >
        {/* Crosshair lines inside the ring */}
        <div className={`absolute w-[1px] bg-cyan-400/50 transition-all duration-300 ${isHovering ? 'h-4' : 'h-2'}`} />
        <div className={`absolute h-[1px] bg-cyan-400/50 transition-all duration-300 ${isHovering ? 'w-4' : 'w-2'}`} />
      </motion.div>
    </div>
  );
};

export default CyberCursor;