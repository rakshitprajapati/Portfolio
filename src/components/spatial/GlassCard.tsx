"use client";

import React, { useRef, useState } from "react";
import { soundFX } from "../cyber/SoundController";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  tiltIntensity?: number; // default 12
  glowColor?: "cyan" | "purple" | "emerald" | "amber";
  onClick?: () => void;
  hoverSound?: boolean;
}

const GLOW_MAP = {
  cyan: "rgba(6, 182, 212, 0.25)",
  purple: "rgba(139, 92, 246, 0.25)",
  emerald: "rgba(16, 185, 129, 0.25)",
  amber: "rgba(245, 158, 11, 0.25)",
};

const BORDER_HOVER_MAP = {
  cyan: "group-hover:border-cyan-500/40",
  purple: "group-hover:border-purple-500/40",
  emerald: "group-hover:border-emerald-500/40",
  amber: "group-hover:border-amber-500/40",
};

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  wrapperClassName = "",
  tiltIntensity = 10,
  glowColor = "cyan",
  onClick,
  hoverSound = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -tiltIntensity;
    const rotY = ((x - centerX) / centerX) * tiltIntensity;

    setRotation({ x: rotX, y: rotY });
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseEnter = () => {
    if (hoverSound) soundFX.playHover();
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: "1000px" }}
      className={`relative group transition-all duration-300 ${wrapperClassName}`}
    >
      <div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(0)`,
          transition: "transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease",
          transformStyle: "preserve-3d",
        }}
        className={`relative overflow-hidden rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 ${BORDER_HOVER_MAP[glowColor]} shadow-xl hover:shadow-2xl transition-all ${className}`}
      >
        {/* Dynamic Specular Sheen Glare */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, ${GLOW_MAP[glowColor]}, transparent 70%)`,
          }}
        />

        {/* Ambient Top Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Content */}
        <div className="relative z-20" style={{ transform: "translateZ(20px)" }}>
          {children}
        </div>
      </div>
    </div>
  );
};
