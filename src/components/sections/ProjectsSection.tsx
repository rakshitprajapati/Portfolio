"use client";

import React, { useState } from "react";
import { portfolioConfig, Project } from "@/config/portfolio.config";
import { GlassCard } from "../spatial/GlassCard";
import { DecryptedText } from "../spatial/DecryptedText";
import { ProjectModal } from "../cyber/ProjectModal";
import { soundFX } from "../cyber/SoundController";
import {
  ShieldAlert,
  ExternalLink,
  Maximize2,
  Lock,
  Layers,
  Star,
  Activity,
  CheckCircle2,
  Eye,
} from "lucide-react";
import { GithubIcon } from "../cyber/Icons";

interface ProjectCardItemProps {
  project: Project;
  idx: number;
  onInspect: (project: Project) => void;
}

const ProjectCardItem: React.FC<ProjectCardItemProps> = ({
  project,
  idx,
  onInspect,
}) => {
  const [activeImgIdx, setActiveImgIdx] = useState<number>(0);

  const currentImage =
    project.gallery && project.gallery[activeImgIdx]
      ? project.gallery[activeImgIdx].image
      : project.previewImage;

  const currentCaption =
    project.gallery && project.gallery[activeImgIdx]
      ? project.gallery[activeImgIdx].caption
      : project.previewNote;

  return (
    <GlassCard
      tiltIntensity={7}
      glowColor={idx % 2 === 0 ? "cyan" : "purple"}
      className="p-6 sm:p-8 flex flex-col justify-between space-y-6"
    >
      {/* Top Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.status}
            </span>
          </div>

          {project.stars && (
            <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{project.stars}</span>
            </div>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm font-mono text-cyan-400/80">
          {project.tagline}
        </p>

        <p className="text-sm text-slate-300 font-sans line-clamp-3 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Visual Screenshot, Architecture Artifact & Gallery Showcase */}
      {currentImage && (
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950/85 p-3.5 space-y-2.5 backdrop-blur-md shadow-inner">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="flex items-center gap-1.5 font-bold text-cyan-300 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              {project.previewLabel || "VERIFIED ARTIFACT"}
            </span>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
              PROVEN OUTCOME
            </span>
          </div>

          {/* Main Visual Display */}
          <div
            onClick={() => onInspect(project)}
            className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-slate-950/95 flex items-center justify-center cursor-pointer group/img"
          >
            <img
              src={currentImage}
              alt={project.title}
              className="w-full h-full object-cover sm:object-contain object-top group-hover/img:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" /> CLICK FOR FULL PROTOCOL INSPECTION
              </span>
            </div>
          </div>

          {/* Interactive Screen Selector Switcher Pills */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.gallery.map((item, gIdx) => (
                <button
                  key={gIdx}
                  type="button"
                  onClick={() => {
                    soundFX.playClick();
                    setActiveImgIdx(gIdx);
                  }}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all cursor-pointer ${
                    activeImgIdx === gIdx
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                      : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          )}

          {currentCaption && (
            <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
              {currentCaption}
            </p>
          )}
        </div>
      )}

      {/* Verified Real-World Outcomes */}
      {project.verifiedOutcomes && project.verifiedOutcomes.length > 0 && (
        <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
          <div className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>MEASURED OUTCOMES &amp; BENCHMARKS</span>
          </div>
          <ul className="space-y-1">
            {project.verifiedOutcomes.map((outcome, oIdx) => (
              <li
                key={oIdx}
                className="text-xs font-mono text-slate-300 flex items-start gap-2"
              >
                <span className="text-cyan-400 font-bold shrink-0">›</span>
                <span className="leading-snug">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Benchmark Metrics Bar */}
      <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-black/40 border border-white/5">
        {project.metrics.map((m, mIdx) => (
          <div key={mIdx} className="text-center">
            <div className="text-xs sm:text-sm font-bold font-mono text-cyan-400">
              {m.value}
            </div>
            <div className="text-[9px] font-mono text-slate-400">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/5 text-slate-400"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <button
          onClick={() => onInspect(project)}
          className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
        >
          <Maximize2 className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
          <span>INSPECT DETAILS</span>
        </button>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="View GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              title="Live Demo / Walkthrough"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["ALL", "Security", "Systems", "Cloud"];

  const filteredProjects =
    selectedFilter === "ALL"
      ? portfolioConfig.projects
      : portfolioConfig.projects.filter((p) => p.category === selectedFilter);

  const handleInspect = (project: Project) => {
    soundFX.playClick();
    setActiveProject(project);
  };

  return (
    <section id="operations" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
          <Layers className="w-3 h-3 text-cyan-400" />
          <span>VERIFIED REPOSITORIES &amp; OUTCOMES</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          <DecryptedText text="PROJECTS &amp; ARCHITECTURES" speed={28} />
        </h2>

        <p className="text-sm sm:text-base text-slate-400 font-sans">
          Proven implementations, threat models, and real-world outcomes with direct visual artifacts and live codebases.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 rounded-xl bg-slate-950/70 border border-white/10 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFX.playClick();
                setSelectedFilter(cat);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono uppercase transition-all cursor-pointer ${
                selectedFilter === cat
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCardItem
            key={project.id}
            project={project}
            idx={idx}
            onInspect={handleInspect}
          />
        ))}
      </div>

      {/* Holographic Protocol Inspector Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
