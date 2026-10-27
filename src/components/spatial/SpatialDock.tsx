"use client";

import React, { useEffect, useState } from "react";
import { soundFX } from "../cyber/SoundController";
import {
  Shield,
  Terminal as TerminalIcon,
  Cpu,
  Layers,
  Award,
  Send,
  Volume2,
  VolumeX,
} from "lucide-react";
import { LinkedinIcon } from "../cyber/Icons";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { id: "core", label: "CORE", icon: Shield },
  { id: "arsenal", label: "SKILLS", icon: Cpu },
  { id: "operations", label: "PROJECTS", icon: Layers },
  { id: "dossier", label: "EDUCATION", icon: Award },
  { id: "linkedin", label: "LINKEDIN", icon: LinkedinIcon },
  { id: "terminal", label: "TERMINAL", icon: TerminalIcon },
  { id: "contact", label: "CONTACT", icon: Send },
];

export const SpatialDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState("core");
  const [isMuted, setIsMuted] = useState(soundFX.isMuted);

  useEffect(() => {
    const unsub = soundFX.subscribe((muted) => setIsMuted(muted));

    // Intersection observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      unsub();
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    soundFX.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleAudio = () => {
    soundFX.toggleMute();
  };

  return (
    <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-full bg-slate-950/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all">
        {/* Logo / Clearance Pill */}
        <div
          onClick={() => scrollTo("core")}
          onMouseEnter={() => soundFX.playHover()}
          className="flex items-center gap-2 pl-3 pr-2 py-1 cursor-pointer group"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="font-mono text-xs font-bold text-white tracking-widest hidden sm:inline group-hover:text-cyan-400 transition-colors">
            RAKSHIT // CTF
          </span>
        </div>

        <div className="w-[1px] h-4 bg-white/10 mx-1 hidden sm:block" />

        {/* Navigation Items */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={() => soundFX.playHover()}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? "text-cyan-300 bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border border-cyan-500/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyan-400" : ""}`} />
                <span className="hidden md:inline">{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 inset-x-3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        <div className="w-[1px] h-4 bg-white/10 mx-1" />

        {/* Sci-Fi Audio Synthesizer Toggle */}
        <button
          onClick={toggleAudio}
          onMouseEnter={() => soundFX.playHover()}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border transition-all text-xs font-mono cursor-pointer ${
            !isMuted
              ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
              : "bg-white/5 border-white/10 text-slate-500 hover:text-slate-300"
          }`}
          title={isMuted ? "Enable futuristic audio feedback" : "Mute audio synthesizer"}
        >
          {!isMuted ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <div className="flex items-end gap-0.5 h-3 hidden sm:flex">
                <span className="w-0.5 h-2 bg-cyan-400 animate-[bounce_0.6s_infinite_100ms]" />
                <span className="w-0.5 h-3 bg-cyan-400 animate-[bounce_0.6s_infinite_200ms]" />
                <span className="w-0.5 h-1.5 bg-cyan-400 animate-[bounce_0.6s_infinite_300ms]" />
              </div>
            </>
          ) : (
            <VolumeX className="w-3.5 h-3.5" />
          )}
        </button>
      </nav>
    </header>
  );
};
