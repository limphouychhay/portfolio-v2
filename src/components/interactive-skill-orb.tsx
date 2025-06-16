"use client";

import { useState } from "react";

interface SkillOrbProps {
  skill: string;
  level: number;
  color: string;
}

export default function InteractiveSkillOrb({
  skill,
  level,
  color,
}: SkillOrbProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-20 h-12 rounded-lg border-2 border-${color} relative overflow-hidden transition-all duration-300 bg-slate-800/50 backdrop-blur-sm ${
          isHovered ? "scale-110 shadow-lg" : ""
        }`}
        style={{
          borderColor: `var(--tw-${color.replace("-", "-")})`,
        }}
      >
        {/* Progress bar background */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700/50" />

        {/* Progress bar fill */}
        <div
          className={`absolute bottom-0 left-0 h-1 bg-${color} transition-all duration-500`}
          style={{
            width: `${level}%`,
            backgroundColor: `rgb(var(--tw-color-${color.replace(
              "-",
              "-"
            )}) / 1)`,
          }}
        />

        {/* Skill name */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white text-center px-1">
            {skill}
          </span>
        </div>
      </div>

      {/* Hover tooltip */}
      <div
        className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {skill} - {level}% proficiency
      </div>
    </div>
  );
}
