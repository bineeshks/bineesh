"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { shortFilms, ShortFilm } from "@/data/shortFilms";
import { Play, Film, ExternalLink, X, Clapperboard } from "lucide-react";
import Image from "next/image";

const ShortFilms = () => {
  const [activeFilm, setActiveFilm] = useState<ShortFilm | null>(null);

  return (
    <section id="short-films" className="py-24 px-6 md:px-12 bg-navy relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-2 block flex items-center gap-2">
            <Clapperboard size={14} className="text-violet" />
            02 — Narrative Direction
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-syne font-bold">
                Short <span className="text-white/40">Films</span>
              </h2>
              <p className="text-white/60 text-lg mt-3 max-w-xl font-light">
                Original cinematic projects written, shot, and edited independently.
              </p>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/50 w-fit">
              2 Original Short Films Produced
            </div>
          </div>
        </div>

        {/* Two Film Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {shortFilms.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden hover:border-violet/40 transition-all duration-500 flex flex-col hover:-translate-y-2 shadow-2xl"
            >
              {/* Media Thumbnail Container */}
              <div
                className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-black"
                onClick={() => setActiveFilm(film)}
              >
                <Image
                  src={film.thumbnail}
                  alt={film.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />

                {/* Duration / Tag Pill */}
                {film.duration && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[11px] font-bold text-white/80 border border-white/10">
                    {film.duration} · {film.year}
                  </div>
                )}

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-violet/90 group-hover:bg-violet text-white flex items-center justify-center shadow-xl backdrop-blur-md border border-white/20 transform group-hover:scale-110 transition-all duration-300">
                    <Play size={26} className="ml-1 fill-white" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-6 z-10">
                  <span className="px-3 py-1 bg-violet/20 border border-violet/30 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                    {film.role}
                  </span>
                </div>
              </div>

              {/* Film Details */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-syne font-bold text-white mb-3 group-hover:text-violet transition-colors">
                    {film.title}
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed mb-6 font-light">
                    {film.story}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setActiveFilm(film)}
                    className="inline-flex items-center gap-2 text-violet hover:text-white font-bold text-sm tracking-wide transition-colors group/btn"
                  >
                    <span>Watch Film</span>
                    <Play size={14} className="fill-current group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {film.externalLink && (
                    <a
                      href={film.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/40 hover:text-white flex items-center gap-1 transition-colors"
                      title="Open in external player"
                    >
                      <span>External Link</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeFilm && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFilm(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0C101D] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div>
                  <span className="text-[10px] uppercase font-bold text-violet tracking-widest block">
                    {activeFilm.role}
                  </span>
                  <h4 className="font-syne font-bold text-white text-lg">{activeFilm.title}</h4>
                </div>
                <button
                  onClick={() => setActiveFilm(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all hover:rotate-90"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-[16/9] w-full bg-black">
                {activeFilm.videoUrl ? (
                  <video
                    src={activeFilm.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/40">
                    <Film size={48} className="mb-2" />
                    <p>Video loading...</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 bg-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-white/70 max-w-lg">{activeFilm.story}</p>
                {activeFilm.externalLink && (
                  <a
                    href={activeFilm.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-violet hover:bg-violet/80 text-white text-xs font-bold flex items-center gap-2 transition-all flex-shrink-0"
                  >
                    <span>Open External Link</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ShortFilms;
