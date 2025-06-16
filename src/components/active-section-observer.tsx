"use client";

import { useEffect, useState } from "react";

export default function ActiveSectionObserver() {
  const [activeSection, setActiveSection] = useState("");
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!sections.length || !navLinks.length) return;

    // Function to update active navigation
    const updateActiveNav = (sectionId: string) => {
      if (sectionId === activeSection && !isNavigating) return;

      setActiveSection(sectionId);

      // Update nav links
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === `#${sectionId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      // Dispatch custom event for floating nav dots
      window.dispatchEvent(
        new CustomEvent("activeSection", {
          detail: { section: sectionId },
        })
      );
    };

    // Simplified scroll detection
    const handleScroll = () => {
      if (isNavigating) return;

      const scrollTop = window.scrollY;

      // Simple threshold-based detection
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const projectsSection = document.getElementById("projects");

      if (!aboutSection || !experienceSection || !projectsSection) return;

      // const aboutTop = aboutSection.offsetTop
      const experienceTop = experienceSection.offsetTop;
      const projectsTop = projectsSection.offsetTop;

      // Determine active section based on scroll position
      let currentSection = "about";

      if (scrollTop < experienceTop - 200) {
        currentSection = "about";
      } else if (scrollTop < projectsTop - 200) {
        currentSection = "experience";
      } else {
        currentSection = "projects";
      }

      updateActiveNav(currentSection);
    };

    // Handle navigation clicks
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;

      if (link) {
        const targetId = link.getAttribute("href")?.replace("#", "");
        if (targetId) {
          setIsNavigating(true);
          updateActiveNav(targetId);

          // Clear navigation flag after animation
          setTimeout(() => {
            setIsNavigating(false);
          }, 1000);
        }
      }
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add event listeners
    window.addEventListener("scroll", throttledScroll, { passive: true });
    document.addEventListener("click", handleNavClick);

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      document.removeEventListener("click", handleNavClick);
    };
  }, [activeSection, isNavigating]);

  return null;
}
