"use client";

import React, { useEffect, useState, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  className?: string;
  scrambleOnHover?: boolean;
  revealDelay?: number;
}

const GLYPHS = "0123456789ABCDEF$#@%&*+-/<>~^λΩ§Δψ";

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 30,
  maxIterations = 12,
  className = "",
  scrambleOnHover = true,
  revealDelay = 0,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startDecryption = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsScrambling(true);

    let iteration = 0;
    const targetLength = text.length;

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((char, index) => {
            if (char === " " || char === "\n") return char;
            if (index < iteration) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("");
      });

      iteration += 1 / (maxIterations / targetLength);

      if (iteration >= targetLength) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, speed);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startDecryption();
    }, revealDelay);

    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, revealDelay]);

  return (
    <span
      className={`inline-block font-mono select-none transition-colors duration-200 ${
        isScrambling ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" : ""
      } ${className}`}
      onMouseEnter={() => {
        if (scrambleOnHover && !isScrambling) {
          startDecryption();
        }
      }}
    >
      {displayText}
    </span>
  );
};
