"use client";

import { useEffect, useState } from "react";

export default function CursorFlare() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Main cursor flare */}
      <div
        className={`pointer-events-none fixed z-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle, 
            rgba(20, 184, 166, 0.15) 0%, 
            rgba(20, 184, 166, 0.1) 20%, 
            rgba(20, 184, 166, 0.05) 40%, 
            rgba(20, 184, 166, 0.02) 60%, 
            transparent 80%
          )`,
          borderRadius: "50%",
          filter: "blur(1px)",
        }}
      />

      {/* Inner glow */}
      <div
        className={`pointer-events-none fixed z-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, 
            rgba(20, 184, 166, 0.2) 0%, 
            rgba(20, 184, 166, 0.1) 30%, 
            rgba(20, 184, 166, 0.05) 50%, 
            transparent 70%
          )`,
          borderRadius: "50%",
          filter: "blur(0.5px)",
        }}
      />

      {/* Core spotlight */}
      <div
        className={`pointer-events-none fixed z-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: mousePosition.x - 75,
          top: mousePosition.y - 75,
          width: "150px",
          height: "150px",
          background: `radial-gradient(circle, 
            rgba(20, 184, 166, 0.25) 0%, 
            rgba(20, 184, 166, 0.15) 40%, 
            transparent 70%
          )`,
          borderRadius: "50%",
        }}
      />
    </>
  );
}
