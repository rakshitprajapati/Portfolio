"use client";

import React, { useState, useEffect } from "react";
import { portfolioConfig, LinkedInPost } from "@/config/portfolio.config";
import { GlassCard } from "../spatial/GlassCard";
import { DecryptedText } from "../spatial/DecryptedText";
import { LinkedinIcon } from "../cyber/Icons";
import { PostBanner } from "../cyber/PostBanner";
import { soundFX } from "../cyber/SoundController";
import {
  ExternalLink,
  Heart,
  MessageSquare,
  BookOpen,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Bookmark,
  Share2,
} from "lucide-react";

export const LinkedInFeedSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<"book" | "grid">("book");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);

  const posts = portfolioConfig.linkedinPosts;
  const currentPost = posts[currentPage] || posts[0];

  const handleNextPage = () => {
    if (currentPage < posts.length - 1) {
      soundFX.playClick();
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
      }, 200);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      soundFX.playClick();
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
      }, 200);
    }
  };

  const jumpToPage = (index: number) => {
    if (index === currentPage) return;
    soundFX.playClick();
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage(index);
      setIsFlipping(false);
    }, 200);
  };

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

  // Keyboard navigation for open book
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "book") return;
      if (e.key === "ArrowRight") handleNextPage();
      if (e.key === "ArrowLeft") handlePrevPage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode, currentPage]);

  return (
    <section id="linkedin" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-[11px] font-mono text-blue-300">
          <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
          <span>SOCIAL TRANSMISSIONS // LINKEDIN CODEX</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          <DecryptedText text="LINKEDIN POSTS & REFLECTIONS" speed={28} />
        </h2>

        <p className="text-sm sm:text-base text-slate-400 font-sans">
          Documenting academic research, hackathons, and CTF competitions in an interactive digital open book.
        </p>

        {/* View Switcher: Interactive Open Book vs Grid */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <div className="inline-flex p-1 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-md shadow-lg">
            <button
              onClick={() => {
                soundFX.playClick();
                setViewMode("book");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                viewMode === "book"
                  ? "bg-blue-600 text-white font-bold shadow-[0_0_16px_rgba(37,99,235,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>INTERACTIVE OPEN BOOK</span>
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                setViewMode("grid");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white font-bold shadow-[0_0_16px_rgba(37,99,235,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>GRID VIEW</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 📖 1. INTERACTIVE OPEN BOOK VIEW (DUAL SPREAD CODEX)                     */}
      {/* ========================================================================= */}
      {viewMode === "book" && (
        <div className="relative max-w-5xl mx-auto">
          {/* Bookmark Ribbon Tabs on Top */}
          <div className="flex items-center justify-center gap-2 mb-4 overflow-x-auto pb-2 text-xs font-mono">
            {posts.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => jumpToPage(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-xl border-t border-x transition-all cursor-pointer whitespace-nowrap ${
                  currentPage === idx
                    ? "bg-slate-900 border-blue-500/50 text-blue-300 font-bold -translate-y-1 shadow-[0_-4px_12px_rgba(59,130,246,0.3)]"
                    : "bg-slate-950/60 border-white/10 text-slate-400 hover:text-slate-200"
                }`}
              >
                <Bookmark className={`w-3 h-3 ${currentPage === idx ? "fill-blue-400 text-blue-400" : ""}`} />
                <span>CH {idx + 1}: {p.category}</span>
              </button>
            ))}
          </div>

          {/* The Open Book Spread Container */}
          <div
            style={{ perspective: "1500px" }}
            className="relative rounded-3xl bg-slate-950/90 border border-white/20 shadow-[0_24px_64px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Book Spine Highlight */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />

            <div className={`grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 transition-opacity duration-200 ${isFlipping ? "opacity-30 scale-[0.99]" : "opacity-100 scale-100"}`}>
              {/* ================================================================ */}
              {/* LEFT PAGE: Visual Spread & Metadata                              */}
              {/* ================================================================ */}
              <div className="p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-slate-900/40 relative">
                {/* Subtle Inner Spine Shadow */}
                <div className="pointer-events-none absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-black/40 to-transparent hidden lg:block" />

                {/* Left Page Header */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/10 pb-3">
                  <span className="text-cyan-400 font-bold">SPREAD #{currentPage * 2 + 1}</span>
                  <span>{currentPost.date}</span>
                </div>

                {/* Visual Banner */}
                <div className="space-y-4">
                  <PostBanner type={currentPost.bannerType} />

                  {/* Author Card Block */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-sm shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                        KR
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">
                          {portfolioConfig.personal.displayName}
                        </div>
                        <div className="text-[11px] font-mono text-cyan-300">
                          NFSU Goa Campus • Student Author
                        </div>
                      </div>
                    </div>

                    <a
                      href={currentPost.postUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors"
                      title="View Verified Profile on LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Left Page Footer Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>PREV PAGE</span>
                  </button>

                  <span className="text-[11px] font-mono text-slate-500">
                    PAGE {currentPage + 1} OF {posts.length}
                  </span>
                </div>
              </div>

              {/* ================================================================ */}
              {/* RIGHT PAGE: Text Narrative & Engagements                         */}
              {/* ================================================================ */}
              <div className="p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-slate-950/60 relative">
                {/* Subtle Left Spine Shadow */}
                <div className="pointer-events-none absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-black/40 to-transparent hidden lg:block" />

                {/* Right Page Header */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/10 pb-3">
                  <span className="text-blue-400 font-bold">ENTRY #{currentPage * 2 + 2}</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 uppercase text-[10px]">
                    {currentPost.category}
                  </span>
                </div>

                {/* Post Narrative */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {currentPost.title}
                  </h3>

                  <p className="text-sm text-slate-300 font-sans leading-relaxed whitespace-pre-line">
                    {currentPost.content}
                  </p>

                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {currentPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Page Footer: Likes & Next Page */}
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Interactive Heart */}
                      <button
                        onClick={() => toggleLike(currentPost.id)}
                        className={`flex items-center gap-1.5 text-xs font-mono transition-colors cursor-pointer ${
                          likedPosts[currentPost.id] ? "text-red-400 font-bold" : "text-slate-400 hover:text-red-400"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedPosts[currentPost.id] ? "fill-red-400 text-red-400" : ""}`} />
                        <span>{currentPost.likes + (likedPosts[currentPost.id] ? 1 : 0)} Likes</span>
                      </button>

                      {/* Comments count */}
                      <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{currentPost.comments}</span>
                      </div>

                      {/* Copy snippet */}
                      <button
                        onClick={() => copySnippet(currentPost)}
                        className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                        title="Copy text snippet"
                      >
                        {copiedId === currentPost.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Next Page Action */}
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === posts.length - 1}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                    >
                      <span>NEXT PAGE</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Direct Link to Verified LinkedIn Post */}
                  <a
                    href={currentPost.postUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-mono transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>VERIFY & ENGAGE ON LINKEDIN</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🗂️ 2. ALTERNATIVE: GRID STREAM VIEW                                     */}
      {/* ========================================================================= */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <GlassCard
              key={post.id}
              tiltIntensity={6}
              glowColor={idx % 2 === 0 ? "cyan" : "purple"}
              className="p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <PostBanner type={post.bannerType} />

                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{post.date}</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 uppercase text-[10px]">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed whitespace-pre-line">
                  {post.content}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono text-cyan-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-1.5 text-xs font-mono cursor-pointer ${
                    likedPosts[post.id] ? "text-red-400 font-bold" : "text-slate-400 hover:text-red-400"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${likedPosts[post.id] ? "fill-red-400 text-red-400" : ""}`} />
                  <span>{post.likes + (likedPosts[post.id] ? 1 : 0)}</span>
                </button>

                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs font-mono font-semibold text-blue-400 hover:text-blue-300"
                >
                  <span>OPEN ON LINKEDIN</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      )}

      {/* Global Activity Link Callout */}
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
