"use client";

import React, { useEffect, useState } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { ShieldCheck, Activity, Lock, Cpu, Server } from "lucide-react";

export const TelemetryBanner: React.FC = () => {
  const [latency, setLatency] = useState(0.84);
  const [entropy, setEntropy] = useState("0x7F2A");

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate realistic microsecond fluctuations
      setLatency(+(0.75 + Math.random() * 0.25).toFixed(2));
      const randHex = Math.floor(Math.random() * 0xffff)
        .toString(16)
        .toUpperCase()
        .padStart(4, "0");
      setEntropy(`0x${randHex}`);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-y border-white/10 bg-slate-950/50 backdrop-blur-md overflow-hidden py-2 select-none">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-y-2 text-[11px] font-mono text-slate-400">
        {/* Node & Health */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold">{portfolioConfig.telemetry.systemHealth}</span>
          </div>

          <span className="text-white/20">|</span>

          <div className="flex items-center gap-1 text-slate-300">
            <Server className="w-3 h-3 text-cyan-400" />
            <span>NODE: {portfolioConfig.telemetry.clusterNode}</span>
          </div>
        </div>

        {/* Cryptography & Latency */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Lock className="w-3 h-3 text-violet-400" />
            <span className="hidden sm:inline text-slate-400">ENCRYPTION:</span>
            <span className="text-violet-300">{portfolioConfig.telemetry.cipherSuite}</span>
          </div>

          <span className="text-white/20 hidden sm:inline">|</span>

          <div className="flex items-center gap-1.5 text-slate-300">
            <Activity className="w-3 h-3 text-cyan-400" />
            <span className="hidden sm:inline text-slate-400">RTT:</span>
            <span className="text-cyan-300">{latency} ms</span>
          </div>

          <span className="text-white/20 hidden md:inline">|</span>

          <div className="hidden md:flex items-center gap-1.5 text-slate-400">
            <Cpu className="w-3 h-3 text-amber-400" />
            <span>ENTROPY:</span>
            <span className="text-amber-300">{entropy}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
