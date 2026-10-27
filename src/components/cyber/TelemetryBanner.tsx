"use client";

import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { GraduationCap, Trophy, MapPin, Sparkles } from "lucide-react";

export const TelemetryBanner: React.FC = () => {
  return (
    <div className="w-full border-y border-white/10 bg-slate-950/60 backdrop-blur-md overflow-hidden py-2.5 select-none">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-y-2 text-[11px] font-mono text-slate-400">
        {/* Left: Institution & Degree */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>M.SC. CYBERSECURITY</span>
          </div>

          <span className="text-white/20">|</span>

          <div className="flex items-center gap-1 text-slate-300">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>NFSU GOA CAMPUS</span>
          </div>
        </div>

        {/* Center/Right: Genuine Competition & Internship Status */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 text-amber-300">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline text-slate-400">CTF:</span>
            <span>1ST (GOA) &amp; 2ND (ALL NFSU)</span>
          </div>

          <span className="text-white/20 hidden sm:inline">|</span>

          <div className="flex items-center gap-1.5 text-cyan-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline text-slate-400">LOCATION:</span>
            <span>GOA &amp; GUJARAT, INDIA</span>
          </div>

          <span className="text-white/20 hidden md:inline">|</span>

          <div className="hidden md:flex items-center gap-1.5 text-emerald-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPEN FOR INTERNSHIPS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
