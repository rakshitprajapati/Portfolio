"use client";

import React, { useEffect, useState } from "react";

export const CyberCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.dataset.cursor === "pointer";
        setIsPointer(Boolean(isInteractive));
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Smooth trailing aura loop
    let animId: number;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(updateTrailing);
    };
    animId = requestAnimationFrame(updateTrailing);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pos.x, pos.y, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Ethereal Luminous Halo */}
      <div
        className="absolute rounded-full transition-all duration-300 -translate-x-1/2 -translate-y-1/2 blur-md"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isPointer ? "48px" : "28px",
          height: isPointer ? "48px" : "28px",
          backgroundColor: isPointer
            ? "rgba(6, 182, 212, 0.35)"
            : "rgba(139, 92, 246, 0.25)",
        }}
      />

      {/* Cyber Reticle Ring */}
      <div
        className="absolute rounded-full border transition-all duration-150 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isClicked ? "16px" : isPointer ? "36px" : "22px",
          height: isClicked ? "16px" : isPointer ? "36px" : "22px",
          borderColor: isPointer ? "#06b6d4" : "rgba(255, 255, 255, 0.4)",
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.8 : 1})`,
        }}
      >
        {/* Precision Crosshair Center Dot */}
        <div
          className={`w-1.5 h-1.5 rounded-full ${
            isPointer ? "bg-cyan-400" : "bg-white"
          }`}
        />
      </div>
    </div>
  );
};
