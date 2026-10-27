"use client";

import React from "react";

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  maxIterations?: number;
  scrambleOnHover?: boolean;
  revealDelay?: number;
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <span className={`inline-block transition-colors duration-200 ${className}`}>
      {text}
    </span>
  );
};
