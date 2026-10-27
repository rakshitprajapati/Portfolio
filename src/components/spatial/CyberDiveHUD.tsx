"use client";

import React, { useState, useEffect } from "react";
import { soundFX } from "../cyber/SoundController";
import {
  Compass,
  Cpu,
  Layers,
  Terminal,
  Award,
  BookOpen,
  Send,
  Zap,
} from "lucide-react";

interface SectorMarker {
  id: string;
  code: string;
  label: string;
  depth: number; // in meters
  icon: React.ComponentType<{ className?: string }>;
}

const SECTORS: SectorMarker[] = [
  { id: "core", code: "CORE", label: "Quantum Core", depth: 120, icon: Compass },
  { id: "arsenal", code: "MATRIX", label: "Skill Arsenal", depth: 840, icon: Cpu },
  { id: "operations", code: "OPS", label: "Mission Ops", depth: 1650, icon: Layers },
  { id: "terminal", code: "SHELL", label: "Cyber Terminal", depth: 2480, icon: Terminal },
  { id: "dossier", code: "LEDGER", label: "Honor Ledger", depth: 3260, icon: Award },
  { id: "linkedin", code: "CODEX", label: "LinkedIn Codex", depth: 3980, icon: BookOpen },
  { id: "contact", code: "UPLINK", label: "Direct Uplink", depth: 4650, icon: Send },
];

export const CyberDiveHUD: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectorIndex, setActiveSectorIndex] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [isWarping, setIsWarping] = useState(false);
  const [depthMeters, setDepthMeters] = useState(120);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let warpTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      const dy = Math.abs(currentScrollY - lastScrollY);
      const instantVelocity = Math.round((dy / dt) * 100);

      setVelocity((prev) => Math.round(prev * 0.7 + instantVelocity * 0.3));

      if (instantVelocity > 45) {
        setIsWarping(true);
        clearTimeout(warpTimeout);
        warpTimeout = setTimeout(() => setIsWarping(false), 300);
      }

      // Calculate total scroll progress (0 to 100%)
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Depth in cyber meters (120m to 4800m)
      const calculatedDepth = Math.round(120 + (progress / 100) * 4680);
      setDepthMeters(calculatedDepth);

      // Determine active sector
      const currentSectionRatio = progress / 100;
      const index = Math.min(
        SECTORS.length - 1,
        Math.floor(currentSectionRatio * SECTORS.length)
      );
      setActiveSectorIndex(index);

      lastScrollY = currentScrollY;
      lastTime = now;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(warpTimeout);
    };
  }, []);

  const scrollToSector = (id: string) => {
    soundFX.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeSector = SECTORS[activeSectorIndex] || SECTORS[0];

  return (
    <>
      {/* Desktop Cyber-Dive Telemetry Strip (Fixed Right Edge) */}
      <aside
        aria-label="Cyber-Dive Depth Telemetry"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 select-none pointer-events-auto"
      >
        {/* Real-time Warp Status Capsule */}
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-xl border transition-all duration-300 font-mono text-[10px] ${
            isWarping
              ? "bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.6)] scale-105"
              : "bg-slate-950/60 border-white/10 text-slate-400"
          }`}
        >
          <Zap
            className={`w-3 h-3 ${
              isWarping ? "text-cyan-400 animate-bounce" : "text-slate-500"
            }`}
          />
          <span>{isWarping ? "WARP DIVE ACTIVE" : "SYNAPSE STABLE"}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        </div>

        {/* Depth & Sector Telemetry Card */}
        <div className="p-3.5 rounded-2xl bg-slate-950/75 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.8)] space-y-2.5 w-48 text-right">
          <div className="flex items-center justify-between text-[10px] font-mono border-b border-white/10 pb-2">
            <span className="text-slate-500">CYBER DEPTH</span>
            <span className="text-cyan-300 font-bold tracking-wider">
              -{depthMeters.toLocaleString()}m
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>ACTIVE SECTOR</span>
              <span className="text-emerald-400 font-bold">
                [{activeSector.code}]
              </span>
            </div>
            <div className="text-xs font-mono font-bold text-white truncate">
              {activeSector.label}
            </div>
          </div>

          {/* Velocity Metric */}
          <div className="flex items-center justify-between text-[10px] font-mono pt-1 border-t border-white/5 text-slate-400">
            <span>WARP SPEED</span>
            <span
              className={`${
                velocity > 30 ? "text-cyan-300 font-bold" : "text-slate-500"
              }`}
            >
              {velocity > 0 ? `${velocity * 12} Gbit/s` : "CRUISE"}
            </span>
          </div>

          {/* Laser Progress Track */}
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/10 mt-1">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        {/* Interactive Sector Nodes */}
        <div className="flex flex-col items-end gap-1.5 py-1">
          {SECTORS.map((sector, idx) => {
            const isActive = idx === activeSectorIndex;
            return (
              <button
                key={sector.id}
                onClick={() => scrollToSector(sector.id)}
                onMouseEnter={() => soundFX.playHover()}
                className={`group flex items-center gap-2 px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.3)] scale-105"
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                }`}
                title={`Dive to ${sector.label}`}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[9px] uppercase tracking-wider hidden xl:inline">
                  {sector.code}
                </span>
                <span
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive
                      ? "bg-cyan-400 shadow-[0_0_8px_#06b6d4] scale-125"
                      : "bg-slate-700 group-hover:bg-slate-400"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </aside>

      {/* Mobile Cyber Depth Strip (Fixed at bottom edge above docks) */}
      <div className="fixed bottom-1 left-4 right-4 z-30 xl:hidden pointer-events-none">
        <div className="h-1 w-full bg-slate-900/80 backdrop-blur-md rounded-full overflow-hidden border border-white/10">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-400 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </>
  );
};
