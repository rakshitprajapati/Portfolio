"use client";

import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { soundFX } from "../cyber/SoundController";
import { Shield, ArrowUp, Lock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../cyber/Icons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-xl py-12 px-4 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-sm font-bold text-white tracking-widest">
              {portfolioConfig.personal.displayName.toUpperCase()} // NFSU GOA
            </span>
          </div>
          <p className="text-xs font-mono text-slate-500">
            Engineered with Spatial VisionOS Architecture • Next.js • Three.js WebGL • Tailwind CSS
          </p>
        </div>

        {/* Center Cryptographic Telemetry */}
        <div className="text-center font-mono text-[11px] text-slate-500 space-y-0.5">
          <div>NODE: {portfolioConfig.telemetry.clusterNode}</div>
          <div className="text-cyan-400/80">CISCO CTF CHAMPION // SIH 2025 ARCHITECT</div>
        </div>

        {/* Right Actions & Scroll Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={portfolioConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
            title="Return to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
