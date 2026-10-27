"use client";

import React, { useState } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { GlassCard } from "../spatial/GlassCard";
import { DecryptedText } from "../spatial/DecryptedText";
import { soundFX } from "../cyber/SoundController";
import { GithubIcon, LinkedinIcon } from "../cyber/Icons";
import {
  Mail,
  Phone,
  Download,
  FileText,
  ExternalLink,
  Copy,
  Check,
  CheckCircle2,
  MapPin,
  MessageCircle,
  GraduationCap,
  Sparkles,
  Send,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(portfolioConfig.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(portfolioConfig.socials.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
          <Send className="w-3 h-3 text-cyan-400" />
          <span>CONTACT & COLLABORATION</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          <DecryptedText text="CONNECT WITH RAKSHIT" speed={28} />
        </h2>

        <p className="text-sm sm:text-base text-slate-400 font-sans">
          I am actively seeking cybersecurity internships and practical learning opportunities. Feel free to reach out directly via email, phone, or LinkedIn.
        </p>
      </div>

      {/* Balanced 2-Column Contact Pattern */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: RAKSHIT'S RESUME (NO RAW PDF NAME)                           */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 flex">
          <GlassCard
            tiltIntensity={6}
            glowColor="emerald"
            className="p-6 sm:p-8 flex flex-col justify-between w-full space-y-6"
          >
            <div className="space-y-4">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                      OFFICIAL DOCUMENT
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Rakshit&apos;s Resume
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  UPDATED
                </span>
              </div>

              {/* Summary Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Comprehensive overview of my academic journey in Cybersecurity at NFSU Goa, technical coursework, hands-on projects, and competition accomplishments.
              </p>

              {/* Key Resume Highlights */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>M.Sc. Cybersecurity Student at NFSU Goa Campus</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Cisco CTF: 1st Place (Goa) &amp; 2nd Place Overall (All NFSU)</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Smart India Hackathon 2025: Guardian Global System Architect</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Bachelor of Science in Computer Science &amp; IT (Silver Oak)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Download & View */}
            <div className="pt-4 border-t border-white/10 space-y-3">
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
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span>VIEW IN BROWSER</span>
              </a>
            </div>
          </GlassCard>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: DIRECT CHANNELS & VERIFIED PROFILES                         */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 flex">
          <GlassCard
            tiltIntensity={6}
            glowColor="cyan"
            className="p-6 sm:p-8 flex flex-col justify-between w-full space-y-6"
          >
            <div className="space-y-4">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                    REACH OUT DIRECTLY
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Direct Contact Channels
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AVAILABLE</span>
                </div>
              </div>

              {/* Email Block */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Mail className="w-3.5 h-3.5" />
                    <span>EMAIL ADDRESS</span>
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? "COPIED" : "COPY"}</span>
                  </button>
                </div>

                <a
                  href={`mailto:${portfolioConfig.socials.email}`}
                  className="text-sm sm:text-base font-mono font-semibold text-white hover:text-emerald-300 transition-colors block break-all"
                >
                  {portfolioConfig.socials.email}
                </a>
              </div>

              {/* Phone & WhatsApp Block */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Phone className="w-3.5 h-3.5" />
                    <span>PHONE &amp; WHATSAPP</span>
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone ? "COPIED" : "COPY"}</span>
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm sm:text-base font-mono font-semibold text-white">
                    {portfolioConfig.socials.phone}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${portfolioConfig.socials.phone}`}
                      className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-[11px] font-mono text-slate-200 hover:text-white transition-all"
                    >
                      Call
                    </a>
                    <a
                      href="https://wa.me/919265630380"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 hover:text-white transition-all flex items-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels: LinkedIn & GitHub */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={portfolioConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFX.playHover()}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-mono transition-all"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LINKEDIN</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={portfolioConfig.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFX.playHover()}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-all"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GITHUB</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Academic Location Stamp */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{portfolioConfig.personal.location}</span>
              </span>
              <span>NFSU GOA CAMPUS</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
