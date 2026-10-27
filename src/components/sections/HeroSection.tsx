"use client";

import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { QuantumCore3D } from "../spatial/QuantumCore3D";
import { DecryptedText } from "../spatial/DecryptedText";
import { GlassCard } from "../spatial/GlassCard";
import { soundFX } from "../cyber/SoundController";
import {
  ShieldCheck,
  Terminal,
  ArrowRight,
  Download,
  Lock,
  Code2,
  Sparkles,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    soundFX.playClick();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="core" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Identity & Directives */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Clearance Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-[11px] font-mono font-semibold tracking-wider text-cyan-300">
              {portfolioConfig.personal.clearanceLevel}
            </span>
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              <DecryptedText
                text={portfolioConfig.personal.displayName.toUpperCase()}
                speed={25}
                maxIterations={16}
                className="text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.2)]"
              />
            </h1>

            <div className="text-lg sm:text-2xl font-mono font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400">
              <DecryptedText
                text={portfolioConfig.personal.role}
                speed={20}
                maxIterations={12}
                revealDelay={300}
              />
            </div>
          </div>

          {/* Bio / Strategic Directive */}
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-sans leading-relaxed mx-auto lg:mx-0">
            {portfolioConfig.personal.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
            <button
              onClick={() => scrollTo("operations")}
              onMouseEnter={() => soundFX.playHover()}
              className="h-12 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-sm transition-all shadow-[0_0_24px_rgba(6,182,212,0.4)] hover:shadow-[0_0_32px_rgba(6,182,212,0.6)] cursor-pointer active:scale-95 flex items-center justify-center gap-2 border border-cyan-400"
            >
              <span>EXPLORE OPERATIONS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={portfolioConfig.socials.resumeUrl}
              download="Kolawada_Rakshit_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundFX.playHover()}
              className="h-12 px-6 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 font-mono font-semibold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] cursor-pointer active:scale-95 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>GET RESUME</span>
            </a>

            <button
              onClick={() => scrollTo("terminal")}
              onMouseEnter={() => soundFX.playHover()}
              className="h-12 px-6 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/15 hover:border-cyan-500/40 text-slate-200 hover:text-white font-mono font-semibold text-sm transition-all backdrop-blur-xl cursor-pointer active:scale-95 flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>TERMINAL</span>
            </button>
          </div>

          {/* Stat Pill Grid */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 items-stretch">
            {portfolioConfig.personal.stats.map((stat, idx) => (
              <GlassCard
                key={idx}
                tiltIntensity={5}
                glowColor={idx % 2 === 0 ? "cyan" : "purple"}
                wrapperClassName="h-full w-full flex flex-col"
                className="p-3 text-center flex flex-col justify-center items-center h-[88px] w-full"
              >
                <div className="text-base sm:text-lg lg:text-xl font-bold font-mono text-white tracking-tight whitespace-nowrap leading-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider truncate leading-tight w-full">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Holographic Quantum Core */}
        <div className="lg:col-span-5 flex justify-center">
          <QuantumCore3D />
        </div>
      </div>
    </section>
  );
};
