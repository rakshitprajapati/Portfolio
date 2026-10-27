"use client";

import React, { useState } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { GlassCard } from "../spatial/GlassCard";
import { DecryptedText } from "../spatial/DecryptedText";
import { soundFX } from "../cyber/SoundController";
import { Shield, Cpu, Binary, Radio, CheckCircle, Zap } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories = portfolioConfig.skillsCategories;
  const currentCategory = categories[activeTab];

  return (
    <section id="arsenal" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-[11px] font-mono text-violet-300">
          <Zap className="w-3 h-3 text-violet-400" />
          <span>CAPABILITY MATRIX // MULTI-VECTOR ARSENAL</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          <DecryptedText text="CYBER DEFENSE & SOFTWARE ARSENAL" speed={30} />
        </h2>

        <p className="text-sm sm:text-base text-slate-400 font-sans">
          Engineered for mission-critical resiliency. Fusing low-level offensive & defensive security operations with high-throughput distributed software architecture.
        </p>
      </div>

      {/* Pillar Toggle Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-950/70 backdrop-blur-2xl border border-white/10 shadow-lg">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                soundFX.playClick();
                setActiveTab(idx);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-mono text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_16px_rgba(6,182,212,0.25)] font-bold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {idx === 0 ? <Shield className="w-4 h-4 text-cyan-400" /> : <Cpu className="w-4 h-4 text-violet-400" />}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Category Description Banner */}
      <div className="mb-8 text-center text-xs sm:text-sm font-mono text-slate-400 max-w-xl mx-auto">
        <DecryptedText text={`// DIRECTIVE: ${currentCategory.description}`} speed={20} />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCategory.skills.map((skill, idx) => (
          <GlassCard
            key={skill.name}
            tiltIntensity={8}
            glowColor={activeTab === 0 ? "cyan" : "purple"}
            className="p-6 space-y-4"
          >
            {/* Top row */}
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  {skill.category}
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">
                  {skill.name}
                </h3>
              </div>

              {skill.tag && (
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-cyan-300">
                  {skill.tag}
                </span>
              )}
            </div>

            {/* Proficiency Meter */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400">HARDENED LEVEL</span>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>

              <div className="h-2 w-full bg-slate-950/80 rounded-full overflow-hidden border border-white/5 p-[1px]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-400 transition-all duration-1000 shadow-[0_0_12px_rgba(6,182,212,0.5)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>

            {/* Bottom Status Telemetry */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-slate-500">
              <div className="flex items-center gap-1.5">
                <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span className="text-slate-400">STATUS: COMBAT-READY</span>
              </div>
              <span>V-REF #0{idx + 1}</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
