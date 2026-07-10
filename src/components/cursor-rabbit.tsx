"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorRabbit() {
  const [isVisible, setIsVisible] = useState(false);
  const [facingRight, setFacingRight] = useState(false);
  
  // Motion values for x and y coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for smooth "following" effect
  const springConfig = { damping: 25, stiffness: 40, mass: 2 };
  
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    let lastX = 0;
    const moveCursor = (e: MouseEvent) => {
      // Offset by some pixels so it sits near the cursor
      cursorX.set(e.clientX + 15);
      cursorY.set(e.clientY + 15);
      
      // Determine direction
      if (e.clientX > lastX) {
        setFacingRight(true);
      } else if (e.clientX < lastX) {
        setFacingRight(false);
      }
      lastX = e.clientX;

      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99999,
        fontSize: "28px",
      }}
    >
      <motion.div
        animate={{ scaleX: facingRight ? -1 : 1 }}
        transition={{ duration: 0.1 }}
      >
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, -15, 10, 0] // Galloping rotation to simulate legs moving
          }}
          transition={{ repeat: Infinity, duration: 0.35, ease: "linear" }}
          style={{ transformOrigin: "bottom center" }}
        >
          🐇
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
