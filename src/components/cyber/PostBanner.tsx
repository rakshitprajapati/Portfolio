import React from "react";
import { Shield, Award, MapPin, Cpu, BookOpen, Layers } from "lucide-react";

export const PostBanner: React.FC<{ type?: "ctf" | "sih" | "ehr" | "nfsu"; className?: string }> = ({
  type = "ctf",
  className = "",
}) => {
  if (type === "ctf") {
    return (
      <div className={`relative h-44 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-amber-950/60 via-slate-900 to-slate-950 border border-amber-500/30 p-5 flex flex-col justify-between select-none ${className}`}>
        <div className="flex items-center justify-between z-10">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
            CISCO CTF COMPETITION
          </span>
          <Award className="w-5 h-5 text-amber-400 animate-pulse" />
        </div>

        <div className="z-10 text-center space-y-1">
          <div className="text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]">
            TEAM GOA_NULLDRIFT
          </div>
          <div className="flex justify-center gap-2 text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
              Goa Campus: 1st Place
            </span>
            <span className="px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/30 text-violet-300">
              All NFSU: 2nd Place Overall
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 z-10 border-t border-white/5 pt-2">
          <span>WEB • FORENSICS • REVERSE ENG</span>
          <span>SEP 2026</span>
        </div>

        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
    );
  }

  if (type === "sih") {
    return (
      <div className={`relative h-44 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-950/60 via-slate-900 to-slate-950 border border-cyan-500/30 p-5 flex flex-col justify-between select-none ${className}`}>
        <div className="flex items-center justify-between z-10">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
            SMART INDIA HACKATHON 2025
          </span>
          <MapPin className="w-5 h-5 text-cyan-400 animate-bounce" />
        </div>

        <div className="z-10 text-center space-y-1">
          <div className="text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]">
            GUARDIAN GLOBAL
          </div>
          <div className="text-xs font-mono text-cyan-200">
            Tourist Safety Platform • System Architect
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 z-10 border-t border-white/5 pt-2">
          <span>AI • BLOCKCHAIN IDENTITY • GEO-FENCING</span>
          <span>GOA, INDIA</span>
        </div>

        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
    );
  }

  if (type === "ehr") {
    return (
      <div className={`relative h-44 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 border border-emerald-500/30 p-5 flex flex-col justify-between select-none ${className}`}>
        <div className="flex items-center justify-between z-10">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            HEALTH INFORMATICS // NFSU
          </span>
          <Layers className="w-5 h-5 text-emerald-400" />
        </div>

        <div className="z-10 text-center space-y-1">
          <div className="text-xl sm:text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]">
            EHR API INTEGRATION
          </div>
          <div className="text-xs font-mono text-emerald-200">
            NAMASTE ⇄ ICD-11 TM2 ER Graph Model
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 z-10 border-t border-white/5 pt-2">
          <span>API DESIGN • ONTOLOGY • DATA PRIVACY</span>
          <span>NFSU RESEARCH</span>
        </div>

        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
    );
  }

  return (
    <div className={`relative h-44 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-violet-950/60 via-slate-900 to-slate-950 border border-violet-500/30 p-5 flex flex-col justify-between select-none ${className}`}>
      <div className="flex items-center justify-between z-10">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/40">
          ACADEMIC ODYSSEY
        </span>
        <BookOpen className="w-5 h-5 text-violet-400" />
      </div>

      <div className="z-10 text-center space-y-1">
        <div className="text-xl sm:text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-200 to-pink-400 drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]">
          NFSU GOA CAMPUS
        </div>
        <div className="text-xs font-mono text-violet-200">
          Master of Science in Cybersecurity (2024–2028)
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 z-10 border-t border-white/5 pt-2">
        <span>PREV: B.SC CS & IT (SILVER OAK)</span>
        <span>GOA, INDIA</span>
      </div>

      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );
};
