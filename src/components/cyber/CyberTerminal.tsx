"use client";

import React, { useState, useRef, useEffect } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { soundFX } from "./SoundController";
import { Terminal, Shield, Play, RotateCcw, Copy, Check } from "lucide-react";
import confetti from "canvas-confetti";

interface LogEntry {
  type: "input" | "output" | "error" | "success" | "system";
  text: string;
}

export const CyberTerminal: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      type: "system",
      text: "RAKSHIT@NFSU-GOA INTERACTIVE SHELL v2.4 [CYBERSECURITY LAB]",
    },
    {
      type: "system",
      text: "Type 'help' or click any quick command below to explore academic projects and skills.",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [copied, setCopied] = useState(false);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [logs]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    soundFX.playClick();
    setHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const newLogs: LogEntry[] = [...logs, { type: "input", text: `rakshit@nfsu-goa:~$ ${rawCmd}` }];

    switch (cmd) {
      case "help":
        newLogs.push({
          type: "output",
          text: `AVAILABLE PROTOCOLS:\n${portfolioConfig.terminalCommands
            .map((c) => `  • ${c.cmd.padEnd(12)} - ${c.desc}`)
            .join("\n")}`,
        });
        break;

      case "whoami":
        newLogs.push({
          type: "output",
          text: `OPERATIVE DOSSIER:\n  Name:       ${portfolioConfig.personal.displayName} (${portfolioConfig.personal.name})\n  Institution:National Forensic Sciences University (NFSU Goa)\n  Role:       ${portfolioConfig.personal.role}\n  Clearance:  ${portfolioConfig.personal.clearanceLevel}\n  Directive:  ${portfolioConfig.personal.bio}`,
        });
        break;

      case "resume":
        newLogs.push({
          type: "success",
          text: `📄 RESUME DEPLOYED:\n  File: /Kolawada_Rakshit_Resume.pdf\n  Opening verified official resume dossier...`,
        });
        if (typeof window !== "undefined") {
          window.open(portfolioConfig.socials.resumeUrl, "_blank");
        }
        break;

      case "posts":
        newLogs.push({
          type: "output",
          text: `LINKEDIN TRANSMISSION LOGS:\n${portfolioConfig.linkedinPosts
            .map((p, i) => `  [#${i + 1}] ${p.title} (${p.date})\n      ${p.content.slice(0, 120)}...\n      ${p.postUrl}`)
            .join("\n\n")}`,
        });
        break;

      case "skills":
        newLogs.push({
          type: "output",
          text: `ARSENAL CAPABILITIES:\n${portfolioConfig.skillsCategories
            .map(
              (cat) =>
                `\n[${cat.title.toUpperCase()}]\n` +
                cat.skills.map((s) => `  - ${s.name.padEnd(38)} [${s.level}%] // ${s.tag}`).join("\n")
            )
            .join("\n")}`,
        });
        break;

      case "projects":
        newLogs.push({
          type: "output",
          text: `ACTIVE SYSTEMS IN PRODUCTION:\n${portfolioConfig.projects
            .map((p, i) => `  [#${i + 1}] ${p.title} (${p.category})\n      Tagline: ${p.tagline}\n      Status: ${p.status}`)
            .join("\n\n")}`,
        });
        break;

      case "certs":
        newLogs.push({
          type: "output",
          text: `CRYPTOGRAPHIC HONORS & ACCREDITATIONS:\n${portfolioConfig.certifications
            .map((c) => `  ✓ ${c.name}\n    Issuer: ${c.issuer} | ID: ${c.verificationId} | Status: ${c.status}`)
            .join("\n\n")}`,
        });
        break;

      case "contact":
        newLogs.push({
          type: "output",
          text: `DIRECT COMMUNICATION CHANNELS:\n  Email:       ${portfolioConfig.socials.email}\n  GitHub:      ${portfolioConfig.socials.github}\n  LinkedIn:    ${portfolioConfig.socials.linkedin}\n  PGP Key:     ${portfolioConfig.socials.pgpKeyId}`,
        });
        break;

      case "easteregg":
        soundFX.playEngage();
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#06b6d4", "#8b5cf6", "#10b981"],
          });
        } catch {}
        newLogs.push({
          type: "success",
          text: `🔓 CLASSIFIED DOSSIER UNLOCKED!\n"In the space between zero and one, security is not a barrier—it is the foundation of high-concurrency freedom."\nSecret Token: [QUANTUM_SYNAPSE_8892_AUTHORIZED]`,
        });
        break;

      case "scan":
        setIsScanning(true);
        soundFX.playScan();
        newLogs.push({ type: "system", text: "INITIATING DEEP PERIMETER SECURITY AUDIT..." });
        setLogs([...newLogs]);

        const steps = [
          "Resolving ingress TLS 1.3 cryptographic handshakes...",
          "Checking memory bounds & pointer safety in kernel buffers... [PASSED]",
          "Testing zero-trust mTLS policy enforcement on Pod mesh... [PASSED]",
          "Auditing active ports (443, 8443, 9090) for unauthorized listeners... [0 DEFECTS]",
          "Verifying NIST Kyber-1024 Post-Quantum key exchange resilience... [CONFIRMED]",
          "AUDIT COMPLETE // PERIMETER INTEGRITY: 100% UNCOMPROMISED",
        ];

        steps.forEach((step, idx) => {
          setTimeout(() => {
            setLogs((prev) => [
              ...prev,
              {
                type: idx === steps.length - 1 ? "success" : "output",
                text: `[AUDIT +${(idx * 0.4).toFixed(1)}s] ${step}`,
              },
            ]);
            if (idx === steps.length - 1) {
              setIsScanning(false);
            }
          }, (idx + 1) * 450);
        });
        setInputVal("");
        return;

      case "clear":
        setLogs([]);
        setInputVal("");
        return;

      default:
        newLogs.push({
          type: "error",
          text: `Command not recognized: '${cmd}'. Type 'help' to review authorized directives.`,
        });
        break;
    }

    setLogs(newLogs);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  const copyDossier = () => {
    soundFX.playClick();
    const textToCopy = `${portfolioConfig.personal.displayName} // ${portfolioConfig.personal.role}\nInstitution: National Forensic Sciences University (NFSU Goa)\nLinkedIn: ${portfolioConfig.socials.linkedin}\nGitHub: ${portfolioConfig.socials.github}\nEmail: ${portfolioConfig.socials.email}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-20 px-4 max-w-5xl mx-auto scroll-mt-20">
      <div className="relative rounded-2xl bg-slate-950/70 backdrop-blur-2xl border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Terminal Window Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="h-4 w-[1px] bg-white/10 mx-2" />
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>bash - rakshit@nfsu-goa (Spatial CLI)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyDossier}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
              title="Copy credentials"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "COPIED" : "COPY CONTACT"}</span>
            </button>
            <button
              onClick={() => executeCommand("clear")}
              className="p-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Clear terminal"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Quick Action Interactive Command Pills */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-black/40 border-b border-white/5 overflow-x-auto text-xs font-mono">
          <span className="text-slate-500 text-[11px] uppercase tracking-wider mr-1 hidden sm:inline">
            QUICK RUN:
          </span>
          {["help", "whoami", "posts", "resume", "scan", "skills", "projects", "certs", "contact"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              disabled={isScanning}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all text-[11px] cursor-pointer whitespace-nowrap active:scale-95 disabled:opacity-50"
            >
              {cmd === "scan" ? "⚡ scan" : cmd === "resume" ? "📄 resume" : cmd === "posts" ? "🔗 posts" : cmd}
            </button>
          ))}
        </div>

        {/* Terminal Logs & Output */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="p-4 sm:p-6 min-h-[340px] max-h-[460px] overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed space-y-2 cursor-text"
        >
          {logs.map((log, idx) => {
            if (log.type === "input") {
              return (
                <div key={idx} className="text-cyan-400 font-semibold">
                  {log.text}
                </div>
              );
            }
            if (log.type === "system") {
              return (
                <div key={idx} className="text-slate-500 italic">
                  {log.text}
                </div>
              );
            }
            if (log.type === "error") {
              return (
                <div key={idx} className="text-red-400">
                  {log.text}
                </div>
              );
            }
            if (log.type === "success") {
              return (
                <div key={idx} className="text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-500/20 whitespace-pre-wrap">
                  {log.text}
                </div>
              );
            }
            return (
              <div key={idx} className="text-slate-300 whitespace-pre-wrap">
                {log.text}
              </div>
            );
          })}

          {/* Interactive Command Input Line */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-emerald-400 font-semibold select-none">
              rakshit@nfsu-goa:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              disabled={isScanning}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isScanning ? "Audit in progress..." : "type a command..."}
              className="flex-1 bg-transparent border-none outline-none text-cyan-300 font-mono caret-cyan-400 placeholder:text-slate-600 disabled:opacity-50"
              autoComplete="off"
              spellCheck="false"
            />
          </div>

          <div ref={terminalEndRef} />
        </div>
      </div>
    </section>
  );
};
