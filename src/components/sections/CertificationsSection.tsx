"use client";

import React, { useState } from "react";
import { portfolioConfig, Certification } from "@/config/portfolio.config";
import { GlassCard } from "../spatial/GlassCard";
import { DecryptedText } from "../spatial/DecryptedText";
import { soundFX } from "../cyber/SoundController";
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Maximize2,
  X,
  ExternalLink,
  Calendar,
  Building,
  FileCheck,
  ListTree,
  LayoutGrid,
  Copy,
  Check,
  GraduationCap,
  Trophy,
} from "lucide-react";

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [patternMode, setPatternMode] = useState<"ledger" | "grid">("ledger");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleOpen = (cert: Certification) => {
    soundFX.playClick();
    setSelectedCert(cert);
  };

  const handleClose = () => {
    soundFX.playClick();
    setSelectedCert(null);
  };

  const copyRecord = (id: string) => {
    soundFX.playClick();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="dossier" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
          <Award className="w-3 h-3 text-emerald-400" />
          <span>ACADEMIC & COMPETITION DOSSIER</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          <DecryptedText text="EDUCATION & CTF ACHIEVEMENTS" speed={28} />
        </h2>

        <p className="text-sm sm:text-base text-slate-400 font-sans">
          Structured records verifying my academic degrees, university CTF competition awards, and national hackathons.
        </p>

        {/* Presentation Pattern Switcher */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <div className="inline-flex p-1 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-md shadow-lg">
            <button
              onClick={() => {
                soundFX.playClick();
                setPatternMode("ledger");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                patternMode === "ledger"
                  ? "bg-emerald-600 text-white font-bold shadow-[0_0_16px_rgba(16,185,129,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <ListTree className="w-3.5 h-3.5" />
              <span>TIMELINE LEDGER PATTERN</span>
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                setPatternMode("grid");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                patternMode === "grid"
                  ? "bg-emerald-600 text-white font-bold shadow-[0_0_16px_rgba(16,185,129,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>CARD MATRIX PATTERN</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 📜 PATTERN 1: INTERACTIVE ACADEMIC LEDGER TIMELINE (RECOMMENDED MODERN)  */}
      {/* ========================================================================= */}
      {patternMode === "ledger" && (
        <div className="relative max-w-4xl mx-auto space-y-6">
          {/* Vertical Connecting Guide Wire */}
          <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-emerald-500/50 via-cyan-500/30 to-violet-500/20 hidden sm:block" />

          {portfolioConfig.certifications.map((cert, idx) => {
            const isDegree = cert.name.includes("Master") || cert.name.includes("Bachelor");

            return (
              <div
                key={cert.id}
                onClick={() => handleOpen(cert)}
                className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group/ledger cursor-pointer"
              >
                {/* Node Milestone Stamp on Timeline */}
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-slate-900 border border-emerald-500/40 group-hover/ledger:border-emerald-400 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_16px_rgba(16,185,129,0.25)] group-hover/ledger:scale-105 transition-all">
                  {isDegree ? <GraduationCap className="w-6 h-6" /> : <Trophy className="w-6 h-6" />}
                </div>

                {/* Ledger Panel */}
                <div className="flex-1 w-full p-5 sm:p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 group-hover/ledger:border-emerald-500/40 transition-all shadow-xl space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase">
                        {cert.status}
                      </span>
                      <span className="text-xs font-mono text-cyan-300">
                        {cert.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                      <span>ID: {cert.verificationId}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyRecord(cert.verificationId);
                        }}
                        className="hover:text-emerald-400 transition-colors p-1"
                        title="Copy record ID"
                      >
                        {copiedId === cert.verificationId ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover/ledger:text-emerald-300 transition-colors">
                      {cert.name}
                    </h3>
                    <div className="text-xs font-mono text-slate-400 mt-0.5">
                      Issuing Institution: <span className="text-slate-200">{cert.issuer}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>OFFICIAL ACADEMIC / COMPETITION RECORD</span>
                    </span>

                    <span className="flex items-center gap-1 text-cyan-400 group-hover/ledger:translate-x-1 transition-transform">
                      <span>INSPECT</span>
                      <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🗂️ PATTERN 2: 3D CARD MATRIX PATTERN                                    */}
      {/* ========================================================================= */}
      {patternMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioConfig.certifications.map((cert, idx) => (
            <GlassCard
              key={cert.id}
              tiltIntensity={9}
              glowColor={idx % 2 === 0 ? "emerald" : "cyan"}
              onClick={() => handleOpen(cert)}
              className="p-6 flex flex-col justify-between h-full space-y-4 cursor-pointer group/card"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover/card:border-emerald-500/40 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug group-hover/card:text-emerald-300 transition-colors">
                  {cert.name}
                </h3>

                <div className="text-xs font-mono text-slate-400">
                  Issuer: <span className="text-slate-200">{cert.issuer}</span>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-white/5">
                <div className="space-y-1.5 font-mono text-[10px]">
                  <div className="flex justify-between text-slate-400">
                    <span>TIMELINE:</span>
                    <span className="text-white">{cert.date}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>RECORD:</span>
                    <span className="text-cyan-400">{cert.verificationId}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400/80 group-hover/card:text-emerald-300 pt-1">
                  <span>INSPECT DETAILS</span>
                  <Maximize2 className="w-3.5 h-3.5 group-hover/card:scale-110 transition-transform" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      )}

      {/* Holographic Certificate Inspection Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-slate-950/95 border border-white/20 shadow-[0_24px_64px_rgba(0,0,0,0.9)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Bar */}
            <div className="h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500" />

            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 sm:p-8 border-b border-white/10">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase">
                  VERIFIED RECORD // {selectedCert.status}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white pt-1">
                  {selectedCert.name}
                </h3>
              </div>

              <button
                onClick={handleClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Certificate Card Graphic */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Certificate Frame Preview */}
              <div className="relative rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 text-center space-y-4 shadow-[0_0_30px_rgba(16,185,129,0.15)] overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <Award className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                    ACADEMIC & COMPETITION RECOGNITION
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {selectedCert.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-300">
                    Associated with <span className="text-cyan-300 font-bold">{portfolioConfig.personal.displayName}</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 text-left font-mono text-xs max-w-md mx-auto">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                    <span className="text-[10px] text-slate-400 block">ISSUING BODY</span>
                    <span className="text-slate-200 font-semibold">{selectedCert.issuer}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                    <span className="text-[10px] text-slate-400 block">TIMELINE</span>
                    <span className="text-slate-200 font-semibold">{selectedCert.date}</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  RECORD IDENTIFIER: <span className="text-cyan-400 font-bold">{selectedCert.verificationId}</span>
                </div>
              </div>

              {/* Upload instructions helper */}
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs font-mono text-slate-300 flex items-start gap-2.5">
                <FileCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Note: If you have an image file of your certificate or award letter, drop it into <code className="text-cyan-300 bg-black/40 px-1 py-0.5 rounded">public/certificates/{selectedCert.id}.png</code> and it will automatically display as the high-resolution scanned photo!
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-950 border-t border-white/10 flex justify-end">
              <button
                onClick={handleClose}
                className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
