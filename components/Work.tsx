"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { Play, Film, MessageCircle, ExternalLink, X, Sparkles, Check, CheckCircle2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. Kaval links (two separate constants)
const kavalFilmUrl: string = "https://www.instagram.com/reel/DeEKSY5Jrri/";
const kavalBtsUrl: string = "https://www.instagram.com/reel/DeEyOQtTrVf/";

// 2. Pathivazhiyil constants
const pathivazhiyilUrl: string = "";
const pathivazhiyilStory: string = "";
const pathivazhiyilRequestUrl =
  "https://wa.me/918300895493?text=Hi%20Bineesh%2C%20I%20would%20like%20to%20watch%20Pathivazhiyil.";

const categories = ["All", "Short Films", "Commercials"] as const;

const Work = () => {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const showKavalBts = Boolean(kavalBtsUrl && kavalBtsUrl !== kavalFilmUrl);

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-navy relative border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-2 block">
            03 — Selected Work
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-white">
            Selected <span className="text-white/40">Work</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg mt-3 font-light max-w-xl">
            Original narrative short films, brand commercials, and on-set camera department productions.
          </p>
        </div>

        {/* Filter Tabs (Text-First, No Non-Film Categories) */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all border",
                filter === cat
                  ? "bg-violet border-violet text-white shadow-lg shadow-violet/20"
                  : "bg-transparent border-white/10 text-white/60 hover:border-white/30 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Text-First Project Cards (No Thumbnails) */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isKaval = project.id === "kaval";
              const isPathivazhiyil = project.id === "pathivazhiyil";
              const isToothsuite = project.id === "toothsuite";

              // Dynamic status for Pathivazhiyil
              const projectStatus = isPathivazhiyil
                ? pathivazhiyilUrl
                  ? "Released"
                  : "Unreleased · Available on request"
                : project.status;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-violet/40 transition-all duration-300 shadow-xl"
                >
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-wider text-white/60">
                        {project.category}
                      </span>
                      <span className="text-white/20 text-xs">·</span>
                      <span className="text-xs font-syne font-bold text-violet uppercase tracking-wider">
                        {project.headerTag}
                      </span>
                    </div>

                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider",
                        isPathivazhiyil && !pathivazhiyilUrl
                          ? "bg-cyan/15 text-cyan border border-cyan/30"
                          : "bg-violet/15 text-violet border border-violet/30"
                      )}
                    >
                      {projectStatus}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-2">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="text-2xl md:text-3xl font-syne font-bold text-white">
                        {project.title}
                      </h3>
                      <span className="text-sm md:text-base font-syne text-white/40">
                        {project.subtitle}
                      </span>
                    </div>

                    {/* Pathivazhiyil one-line story: show under title only if not empty */}
                    {isPathivazhiyil && pathivazhiyilStory && pathivazhiyilStory.trim().length > 0 && (
                      <p className="text-sm md:text-base text-cyan font-medium italic mt-2">
                        {pathivazhiyilStory}
                      </p>
                    )}
                  </div>

                  {/* Roles Line */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-violet uppercase tracking-wider">
                      {project.roles}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/75 text-sm md:text-base leading-relaxed mb-6 font-light max-w-3xl">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/50 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons (Plain Text-First, New Tab) */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/5">
                    {/* 1. Kaval Specific Buttons */}
                    {isKaval && (
                      <>
                        <a
                          href={kavalFilmUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-violet hover:bg-violet/85 text-white px-6 py-3 rounded-xl font-bold transition-all hover:translate-y-[-2px] shadow-lg shadow-violet/20 flex items-center gap-2 text-xs md:text-sm"
                        >
                          <Play size={14} className="fill-white" />
                          <span>Watch</span>
                        </a>

                        {showKavalBts && (
                          <a
                            href={kavalBtsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/20 hover:border-violet text-white px-6 py-3 rounded-xl font-bold transition-all hover:bg-white/5 flex items-center gap-2 text-xs md:text-sm hover:translate-y-[-2px]"
                          >
                            <Film size={14} />
                            <span>Behind the Scenes</span>
                          </a>
                        )}
                      </>
                    )}

                    {/* 2. Pathivazhiyil Specific Button */}
                    {isPathivazhiyil && (
                      <>
                        {pathivazhiyilUrl ? (
                          <a
                            href={pathivazhiyilUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-violet hover:bg-violet/85 text-white px-6 py-3 rounded-xl font-bold transition-all hover:translate-y-[-2px] shadow-lg shadow-violet/20 flex items-center gap-2 text-xs md:text-sm"
                          >
                            <Play size={14} className="fill-white" />
                            <span>Watch</span>
                          </a>
                        ) : (
                          <a
                            href={pathivazhiyilRequestUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-cyan hover:bg-cyan/90 text-navy px-6 py-3 rounded-xl font-bold transition-all hover:translate-y-[-2px] shadow-lg shadow-cyan/20 flex items-center gap-2 text-xs md:text-sm"
                          >
                            <MessageCircle size={15} />
                            <span>Request Private Link</span>
                          </a>
                        )}
                      </>
                    )}

                    {/* 3. Toothsuite Specific Buttons */}
                    {isToothsuite && (
                      <>
                        <a
                          href="https://www.instagram.com/reel/DeJpWRgTK1Z/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-violet hover:bg-violet/85 text-white px-6 py-3 rounded-xl font-bold transition-all hover:translate-y-[-2px] shadow-lg shadow-violet/20 flex items-center gap-2 text-xs md:text-sm"
                        >
                          <Play size={14} className="fill-white" />
                          <span>Watch Ad</span>
                        </a>
                        <a
                          href="https://www.instagram.com/reel/DeJ94Onoa-Y/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-white/20 hover:border-violet text-white px-6 py-3 rounded-xl font-bold transition-all hover:bg-white/5 flex items-center gap-2 text-xs md:text-sm hover:translate-y-[-2px]"
                        >
                          <Film size={14} />
                          <span>Behind the Scenes</span>
                        </a>
                      </>
                    )}

                    {/* Details / Case Study Trigger */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="border border-white/10 hover:border-white/30 text-white/70 hover:text-white px-5 py-3 rounded-xl font-bold text-xs md:text-sm transition-all hover:bg-white/5 flex items-center gap-2 ml-auto"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Clean Text-First Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-navy/95 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="relative w-full max-h-[90vh] max-w-4xl rounded-3xl bg-[#0A0D18] border border-white/10 overflow-hidden shadow-2xl flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-30 px-6 md:px-10 py-5 flex items-center justify-between border-b border-white/10 bg-[#0A0D18]/90 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-violet/15 flex items-center justify-center text-violet">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-violet font-bold block">
                      {selectedProject.headerTag}
                    </span>
                    <h4 className="text-xs md:text-sm font-bold text-white/70">
                      Case Study Breakdown
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all hover:rotate-90"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-grow overflow-y-auto px-6 md:px-10 py-8 space-y-10 no-scrollbar">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-violet/15 text-violet text-xs font-bold uppercase tracking-wider border border-violet/30">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
                      {selectedProject.roles}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-syne font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm md:text-base text-white/50 font-light">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* 3 Step Flow: Brief -> What I Did -> Result */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet mb-2 block">
                      01 · Brief
                    </span>
                    <h4 className="text-base font-syne font-bold text-white mb-2">The Objective</h4>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      {selectedProject.brief}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan mb-2 block">
                      02 · Execution
                    </span>
                    <h4 className="text-base font-syne font-bold text-white mb-2">What I Did</h4>
                    <ul className="space-y-2 text-xs text-white/70 font-light">
                      {selectedProject.whatIDid.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check size={12} className="text-cyan shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-violet/15 to-transparent border border-violet/30 flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-2 block">
                      03 · Impact
                    </span>
                    <h4 className="text-base font-syne font-bold text-white mb-2">The Result</h4>
                    <p className="text-xs text-white/90 leading-relaxed font-light mb-4">
                      {selectedProject.resultSummary}
                    </p>
                    <div className="mt-auto pt-3 border-t border-white/10 flex items-center gap-1.5 text-cyan font-bold text-xs">
                      <CheckCircle2 size={14} />
                      <span>{selectedProject.result}</span>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {selectedProject.stats.map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                      <span className="text-xl font-syne font-bold text-white block mb-0.5">{stat.value}</span>
                      <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tools & External Link */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">
                      Tools &amp; Equipment
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold text-white/70 border border-white/10">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.watchUrl && (
                    <a
                      href={selectedProject.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-violet hover:bg-violet/85 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-violet/20 shrink-0"
                    >
                      <span>Watch Online</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
