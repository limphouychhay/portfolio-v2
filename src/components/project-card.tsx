"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
}: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const cardContent = (
    <div
      className={`relative group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 transition-all duration-300 ${
        isHovered ? "shadow-2xl shadow-teal-500/20" : ""
      }`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${
              mousePosition.x
            }deg) translateZ(20px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
    >
      <div className="relative z-10">
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            className={`w-full h-48 object-cover transition-transform duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        </div>

        <h3 className="text-xl font-bold text-slate-200 mb-2 flex items-center">
          {title}
          {link && (
            <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </h3>

        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 bg-teal-400/10 text-teal-300 rounded-full text-xs font-medium"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
    </div>
  );

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noreferrer" className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
