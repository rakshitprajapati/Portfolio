"use client";

import React, { useState } from "react";
import { portfolioConfig, LinkedInPost } from "@/config/portfolio.config";
import { GlassCard } from "../spatial/GlassCard";
import { DecryptedText } from "../spatial/DecryptedText";
import { LinkedinIcon } from "../cyber/Icons";
import { soundFX } from "../cyber/SoundController";
import {
  ExternalLink,
  Heart,
  MessageSquare,
  Share2,
  Sparkles,
  Check,
  Radio,
  Copy,
} from "lucide-react";

export const LinkedInFeedSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["ALL", "CTF", "Project", "Education"];

  const filteredPosts =
    selectedCategory === "ALL"
      ? portfolioConfig.linkedinPosts
      : portfolioConfig.linkedinPosts.filter((p) => p.category === selectedCategory);

  const toggleLike = (id: string) => {
    soundFX.playClick();
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copySnippet = (post: LinkedInPost) => {
    soundFX.playClick();
    navigator.clipboard.writeText(`${post.title}\n\n${post.content}\n\nVia LinkedIn: ${post.postUrl}`);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="linkedin" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-[11px] font-mono text-blue-300">
          <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
          <span>SOCIAL TRANSMISSION // LINKEDIN ACTIVITY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          <DecryptedText text="LINKEDIN INSIGHTS & UPDATES" speed={28} />
        </h2>

        <p className="text-sm sm:text-base text-slate-400 font-sans">
          Reflections, competition takeaways, and project milestones shared from my ongoing cybersecurity learning journey at NFSU Goa.
        </p>

        {/* Live Profile Quick Link */}
        <div className="pt-2">
          <a
            href={portfolioConfig.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundFX.playHover()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-mono transition-all shadow-[0_0_16px_rgba(59,130,246,0.2)]"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
            <span>CONNECT ON LINKEDIN: /in/kolawada-rakshit</span>
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 rounded-xl bg-slate-950/70 border border-white/10 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFX.playClick();
                setSelectedCategory(cat);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono uppercase transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white font-bold shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {cat === "ALL" ? "All Updates" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Stream Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post, idx) => {
          const isLiked = Boolean(likedPosts[post.id]);
          const currentLikes = post.likes + (isLiked ? 1 : 0);

          return (
            <GlassCard
              key={post.id}
              tiltIntensity={6}
              glowColor={idx % 2 === 0 ? "cyan" : "purple"}
              className="p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              {/* Post Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Author Meta */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-sm shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                      KR
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white text-sm">
                          {portfolioConfig.personal.displayName}
                        </span>
                        <span className="text-[10px] text-blue-400 font-mono bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                          NFSU
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {post.date} • {post.category}
                      </div>
                    </div>
                  </div>

                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 text-slate-400 hover:text-blue-300 transition-colors"
                    title="View on LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  </a>
                </div>

                {/* Post Title */}
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h3>

                {/* Post Body Content */}
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed whitespace-pre-line">
                  {post.content}
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-cyan-400/90 hover:text-cyan-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engagement Bar & External Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Interactive Heart Reaction */}
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-1.5 text-xs font-mono transition-colors cursor-pointer ${
                      isLiked ? "text-red-400 font-bold" : "text-slate-400 hover:text-red-400"
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isLiked ? "fill-red-400 text-red-400" : ""
                      }`}
                    />
                    <span>{currentLikes}</span>
                  </button>

                  {/* Comments Count */}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>

                  {/* Copy snippet */}
                  <button
                    onClick={() => copySnippet(post)}
                    className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer p-1"
                    title="Copy text snippet"
                  >
                    {copiedId === post.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs font-mono font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>OPEN POST</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* View All on LinkedIn Callout */}
      <div className="mt-12 text-center">
        <a
          href="https://www.linkedin.com/in/kolawada-rakshit/recent-activity/all/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-blue-500/40 text-slate-200 hover:text-white font-mono text-xs transition-all shadow-lg"
        >
          <LinkedinIcon className="w-4 h-4 text-blue-400" />
          <span>VIEW ALL RECENT POSTS DIRECTLY ON LINKEDIN</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
