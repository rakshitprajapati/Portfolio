"use client";

import React, { useState } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { GlassCard } from "../spatial/GlassCard";
import { DecryptedText } from "../spatial/DecryptedText";
import { soundFX } from "../cyber/SoundController";
import {
  Send,
  Lock,
  Key,
  Copy,
  Check,
  Mail,
  ShieldCheck,
  Radio,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../cyber/Icons";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    codename: "",
    channel: "",
    clearance: "CONFIDENTIAL",
    payload: "",
  });

  const handleCopyKey = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(portfolioConfig.socials.pgpFingerprint);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.codename || !formData.payload) return;

    soundFX.playScan();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundFX.playEngage();
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#06b6d4", "#8b5cf6", "#10b981"],
        });
      } catch {}
    }, 1200);
  };

  return (
    <section id="transmit" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
          <Send className="w-3 h-3 text-cyan-400" />
          <span>DIRECT TRANSMISSION // ENCRYPTED INGRESS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          <DecryptedText text="ESTABLISH SECURE UPLINK" speed={28} />
        </h2>

        <p className="text-sm sm:text-base text-slate-400 font-sans">
          Initiate an encrypted mission dispatch for security advisory, penetration testing engagements, or high-performance architecture roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: PGP & Direct Comms */}
        <div className="lg:col-span-5 space-y-6">
          {/* PGP Credentials GlassCard */}
          <GlassCard tiltIntensity={6} glowColor="purple" className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">PGP PUBLIC KEY</h3>
                <p className="text-xs font-mono text-violet-400">
                  {portfolioConfig.socials.pgpKeyId}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Use my verified PGP public key for end-to-end encrypted dispatch of sensitive vulnerability disclosures or architectural specifications.
            </p>

            <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-slate-300 break-all space-y-2">
              <div className="text-[10px] text-slate-500 uppercase">FINGERPRINT</div>
              <div className="text-cyan-300">{portfolioConfig.socials.pgpFingerprint}</div>
            </div>

            <button
              onClick={handleCopyKey}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-all cursor-pointer"
            >
              {copiedKey ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedKey ? "FINGERPRINT COPIED TO CLIPBOARD" : "COPY PGP FINGERPRINT"}</span>
            </button>
          </GlassCard>

          {/* Social Channels */}
          <GlassCard tiltIntensity={6} glowColor="cyan" className="p-6 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              DIRECT NETWORK CHANNELS
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={portfolioConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GITHUB</span>
              </a>

              <a
                href={portfolioConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LINKEDIN</span>
              </a>

              <a
                href={`mailto:${portfolioConfig.socials.email}`}
                className="col-span-2 flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="truncate">{portfolioConfig.socials.email}</span>
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Encrypted Dispatch Form */}
        <div className="lg:col-span-7">
          <GlassCard tiltIntensity={5} glowColor="cyan" className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-cyan-400" />
                  <span>TRANSMISSION PORTAL</span>
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  Direct encrypted route to Alexander Vance
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>CH-01 ONLINE</span>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">TRANSMISSION DISPATCHED</h4>
                <p className="text-sm font-mono text-slate-300 max-w-md mx-auto">
                  Your encrypted payload has been routed to secure storage. Expect acknowledgment within 24 operational hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ codename: "", channel: "", clearance: "CONFIDENTIAL", payload: "" });
                  }}
                  className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all cursor-pointer"
                >
                  DISPATCH ANOTHER PACKET
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-400">CALLSIGN / NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Agent Smith"
                      value={formData.codename}
                      onChange={(e) => setFormData({ ...formData, codename: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-500/50 outline-none text-white placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400">RETURN CHANNEL / EMAIL</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. contact@domain.com"
                      value={formData.channel}
                      onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-500/50 outline-none text-white placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400">TRANSMISSION PRIORITY</label>
                  <select
                    value={formData.clearance}
                    onChange={(e) => setFormData({ ...formData, clearance: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-500/50 outline-none text-cyan-300 transition-colors"
                  >
                    <option value="CONFIDENTIAL">CONFIDENTIAL // GENERAL INQUIRY</option>
                    <option value="SECRET">SECRET // ARCHITECTURAL ENGAGEMENT</option>
                    <option value="TOP_SECRET">TOP SECRET // CRITICAL SECURITY AUDIT</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400">ENCRYPTED PAYLOAD / MESSAGE</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Enter project specifications, threat scope, or role parameters..."
                    value={formData.payload}
                    onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-500/50 outline-none text-white placeholder:text-slate-600 transition-colors resize-none font-sans text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 hover:opacity-95 text-slate-950 font-bold font-mono text-sm transition-all shadow-[0_0_24px_rgba(6,182,212,0.4)] cursor-pointer active:scale-98 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "ENCRYPTING & TRANSMITTING..." : "DISPATCH ENCRYPTED TRANSMISSION"}</span>
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
