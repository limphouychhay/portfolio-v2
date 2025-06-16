"use client";

import { useEffect, useState } from "react";
import ScrollLink from "./scroll-link";

export default function FloatingNavDots() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", label: "About", icon: "●" },
    { id: "experience", label: "Experience", icon: "◆" },
    { id: "projects", label: "Projects", icon: "▲" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Get section positions
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const projectsSection = document.getElementById("projects");

      if (!aboutSection || !experienceSection || !projectsSection) return;

      //   const aboutTop = aboutSection.offsetTop
      const experienceTop = experienceSection.offsetTop;
      const projectsTop = projectsSection.offsetTop;

      // Determine active section based on scroll position (same logic as main observer)
      let currentSection = "about";

      if (scrollTop < experienceTop - 200) {
        currentSection = "about";
      } else if (scrollTop < projectsTop - 200) {
        currentSection = "experience";
      } else {
        currentSection = "projects";
      }

      setActiveSection(currentSection);
    };

    // Handle clicks on nav dots
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;

      if (link && link.classList.contains("nav-dot")) {
        const targetId = link.getAttribute("href")?.replace("#", "");
        if (targetId) {
          setActiveSection(targetId);
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

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      document.removeEventListener("click", handleNavClick);
    };
  }, []);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
      {sections.map(({ id, label }) => (
        <div key={id} className="relative group">
          <ScrollLink
            href={`#${id}`}
            className={`nav-dot block w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              activeSection === id
                ? "bg-teal-400 border-teal-400 scale-125 shadow-lg shadow-teal-400/50"
                : "border-slate-400 hover:border-teal-400 hover:scale-110 bg-transparent"
            }`}
          >
            <span className="sr-only">{label}</span>
          </ScrollLink>
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-slate-600">
            {label}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 border-l border-b border-slate-600 rotate-45"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
