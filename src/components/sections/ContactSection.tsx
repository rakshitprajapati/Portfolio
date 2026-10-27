"use client";

import React, { useState } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { GlassCard } from "../spatial/GlassCard";
import { DecryptedText } from "../spatial/DecryptedText";
import { soundFX } from "../cyber/SoundController";
import { GithubIcon, LinkedinIcon } from "../cyber/Icons";
import {
  Mail,
  Download,
  FileText,
  ExternalLink,
  Copy,
  Check,
  CheckCircle2,
  MapPin,
  GraduationCap,
  Sparkles,
  Send,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(portfolioConfig.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
          <Send className="w-3 h-3 text-cyan-400" />
          <span>CONTACT &amp; COLLABORATION</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          <DecryptedText text="CONNECT WITH RAKSHIT" speed={28} />
        </h2>

        <p className="text-sm sm:text-base text-slate-400 font-sans">
          I am actively seeking cybersecurity internships and practical learning opportunities. Feel free to reach out directly via email, LinkedIn, or GitHub.
        </p>
      </div>

      {/* Balanced 2-Column Contact Pattern */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: RAKSHIT'S RESUME                                             */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 flex flex-col h-full">
          <GlassCard
            tiltIntensity={6}
            glowColor="emerald"
            wrapperClassName="h-full w-full flex flex-col"
            className="p-6 sm:p-8 flex flex-col justify-between h-full w-full space-y-6"
          >
            <div className="space-y-4 flex-1 flex flex-col">
              {/* Card Header (Matched Height with Right) */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5 min-h-[72px]">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                      OFFICIAL DOCUMENT
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Rakshit&apos;s Resume
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>UPDATED 2026</span>
                </div>
              </div>

              {/* Summary Description (Matched min-height) */}
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed min-h-[42px] flex items-center">
                Comprehensive overview of my academic journey in Cybersecurity at NFSU Goa, technical coursework, hands-on projects, and competition accomplishments.
              </p>

              {/* 4 Structured Highlights (Matched height & rhythm with right) */}
              <div className="space-y-2.5 pt-1 flex-1">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">M.Sc. Cybersecurity Student at NFSU Goa Campus</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">Cisco CTF: 1st Place (Goa) &amp; 2nd Place Overall</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">Smart India Hackathon 2025: System Architect</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">B.Sc. in Computer Science &amp; IT (Silver Oak)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons & Sub-Footer */}
            <div className="pt-5 border-t border-white/10 space-y-3">
              <a
                href={portfolioConfig.socials.resumeUrl}
                download="Kolawada_Rakshit_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFX.playHover()}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm font-mono transition-all shadow-[0_0_24px_rgba(16,185,129,0.35)] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <a
                href={portfolioConfig.socials.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFX.playHover()}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-all cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                <span>VIEW IN BROWSER</span>
              </a>

              {/* Matched Sub-Footer */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PDF Document • 1.2 MB</span>
                </span>
                <span className="text-emerald-400/90 font-mono">VERIFIED DOSSIER</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: DIRECT CHANNELS & VERIFIED PROFILES                         */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 flex flex-col h-full">
          <GlassCard
            tiltIntensity={6}
            glowColor="cyan"
            wrapperClassName="h-full w-full flex flex-col"
            className="p-6 sm:p-8 flex flex-col justify-between h-full w-full space-y-6"
          >
            <div className="space-y-4 flex-1 flex flex-col">
              {/* Card Header (Matched Height with Left) */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5 min-h-[72px]">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    <Send className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                      REACH OUT DIRECTLY
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Direct Contact Channels
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AVAILABLE</span>
                </div>
              </div>

              {/* Summary Description (Matched min-height) */}
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed min-h-[42px] flex items-center">
                Open to cybersecurity internships, CTF collaborations, and vulnerability research projects. Reach out directly via email, LinkedIn, or GitHub.
              </p>

              {/* 4 Structured Channels (Matched height & rhythm with left) */}
              <div className="space-y-2.5 pt-1 flex-1">
                {/* 1. Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 text-xs font-mono transition-all group">
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a
                      href={`mailto:${portfolioConfig.socials.email}`}
                      className="text-slate-200 group-hover:text-cyan-300 truncate font-semibold transition-colors"
                    >
                      {portfolioConfig.socials.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? "COPIED" : "COPY"}</span>
                  </button>
                </div>

                {/* 2. LinkedIn */}
                <a
                  href={portfolioConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFX.playHover()}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 text-xs font-mono transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-4 h-4 text-blue-400 shrink-0">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <span className="text-slate-200 group-hover:text-blue-300 truncate font-semibold transition-colors">
                      LinkedIn Profile
                    </span>
                  </div>
                  <span className="shrink-0 flex items-center gap-1 text-[11px] text-blue-400 font-mono">
                    /in/kolawada-rakshit
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </span>
                </a>

                {/* 3. GitHub */}
                <a
                  href={portfolioConfig.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFX.playHover()}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 text-xs font-mono transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-4 h-4 text-cyan-400 shrink-0">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <span className="text-slate-200 group-hover:text-cyan-300 truncate font-semibold transition-colors">
                      GitHub Repositories
                    </span>
                  </div>
                  <span className="shrink-0 flex items-center gap-1 text-[11px] text-cyan-400 font-mono">
                    github.com/rakshitprajapati
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </span>
                </a>

                {/* 4. Campus & Location */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono">
                  <div className="flex items-center gap-3 min-w-0">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 truncate font-semibold">
                      Academic Location
                    </span>
                  </div>
                  <span className="shrink-0 text-[11px] text-slate-400 font-mono">
                    NFSU Goa Campus (Goa &amp; Gujarat)
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons & Sub-Footer */}
            <div className="pt-5 border-t border-white/10 space-y-3">
              <a
                href={`mailto:${portfolioConfig.socials.email}`}
                onMouseEnter={() => soundFX.playHover()}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm font-mono transition-all shadow-[0_0_24px_rgba(6,182,212,0.35)] cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>SEND DIRECT EMAIL</span>
              </a>

              <a
                href={portfolioConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFX.playHover()}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-all cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span>CONNECT ON LINKEDIN</span>
              </a>

              {/* Matched Sub-Footer */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Response Time • Usually within 24h</span>
                </span>
                <span className="text-cyan-400/90 font-mono">DIRECT INBOX</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
