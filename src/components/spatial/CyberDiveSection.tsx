"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface CyberDiveSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const CyberDiveSection: React.FC<CyberDiveSectionProps> = ({
  children,
  id,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

  // Dynamic 3D Spatial Dive Coordinates
  // 0.0 -> Entry: scale up from 0.95, tilt X 4deg, translateY +35px, fade in from 0.35
  // 0.3 to 0.7 -> Active viewing plane: scale 1.0, tilt 0deg, translateY 0, full opacity
  // 1.0 -> Exit: scale 0.97, tilt X -3deg, translateY -25px, fade out to 0.4
  const scale = useTransform(smoothProgress, [0, 0.22, 0.78, 1], [0.95, 1, 1, 0.97]);
  const opacity = useTransform(smoothProgress, [0, 0.18, 0.82, 1], [0.35, 1, 1, 0.35]);
  const rotateX = useTransform(smoothProgress, [0, 0.22, 0.78, 1], [3.5, 0, 0, -2.5]);
  const y = useTransform(smoothProgress, [0, 0.22, 0.78, 1], [35, 0, 0, -25]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{
        scale,
        opacity,
        rotateX,
        y,
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.section>
  );
};
