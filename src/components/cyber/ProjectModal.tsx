"use client";

import React, { useEffect } from "react";
import { Project } from "@/config/portfolio.config";
import { soundFX } from "./SoundController";
import {
  X,
  ShieldAlert,
  Cpu,
  BarChart3,
  ExternalLink,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleClose = () => {
    soundFX.playClick();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-fade-in">
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-slate-950/90 border border-white/20 shadow-[0_24px_64px_rgba(0,0,0,0.9)] overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500" />

        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 uppercase">
                STATUS: {project.status}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-cyan-400/90 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
            title="Close Protocol"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>SYSTEM ARCHITECTURE & DIRECTIVE</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Threat Model & Attack Mitigation */}
          {project.threatModel && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>THREAT MODEL & ATTACK VECTOR MITIGATION</span>
              </h4>
              <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                {project.threatModel}
              </p>
            </div>
          )}

          {/* Architectural Pillars */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-violet-400" />
              <span>TECHNICAL HIGHLIGHTS</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.architecture.map((arch, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-300 font-mono"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Telemetry Metrics */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>BENCHMARK METRICS</span>
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 text-center"
                >
                  <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">
                    {m.value}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              DEPENDENCY STACK
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="p-6 bg-slate-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-500">
            SHA-256 HASH VERIFIED // CLASSIFIED PROTOCOL
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white transition-all cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>SOURCE CODE</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>LIVE SYSTEM</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
