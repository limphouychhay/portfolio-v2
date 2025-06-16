"use client";

import type React from "react";
import type { ReactNode } from "react";

interface ScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function ScrollLink({
  href,
  children,
  className = "",
}: ScrollLinkProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    // Get the target element
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Update the URL hash without triggering scroll
      window.history.replaceState({}, "", href);

      // Get current scroll position
      const startPosition = window.pageYOffset;
      const targetPosition = targetElement.offsetTop - 100; // Offset for better positioning
      const distance = targetPosition - startPosition;
      const duration = 800; // Fixed duration for consistent feel

      let startTime: number | null = null;

      // Smooth easing function
      const easeInOutQuart = (t: number): number => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      };

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const easedProgress = easeInOutQuart(progress);
        const currentPosition = startPosition + distance * easedProgress;

        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <a href={href} onClick={handleScroll} className={className}>
      {children}
    </a>
  );
}
