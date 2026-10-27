"use client";

import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { GlassCard } from "../spatial/GlassCard";
import { DecryptedText } from "../spatial/DecryptedText";
import { Award, CheckCircle2, ShieldCheck, Key, ExternalLink } from "lucide-react";

export const CertificationsSection: React.FC = () => {
  return (
    <section id="dossier" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
          <Award className="w-3 h-3 text-emerald-400" />
          <span>EDUCATION & COMPETITIONS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          <DecryptedText text="EDUCATION & ACHIEVEMENTS" speed={28} />
        </h2>

        <p className="text-sm sm:text-base text-slate-400 font-sans">
          Academic foundation in Cybersecurity and Computer Science, alongside achievements in university CTFs and national hackathons.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioConfig.certifications.map((cert, idx) => (
          <GlassCard
            key={cert.id}
            tiltIntensity={9}
            glowColor={idx % 2 === 0 ? "emerald" : "cyan"}
            className="p-6 flex flex-col justify-between h-full space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{cert.status}</span>
                </span>
              </div>

              <h3 className="text-base font-bold text-white leading-snug">
                {cert.name}
              </h3>

              <div className="text-xs font-mono text-slate-400">
                Issuer: <span className="text-slate-200">{cert.issuer}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 space-y-1.5 font-mono text-[10px]">
              <div className="flex justify-between text-slate-400">
                <span>TIMELINE:</span>
                <span className="text-white">{cert.date}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>RECORD:</span>
                <span className="text-cyan-400">{cert.verificationId}</span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
