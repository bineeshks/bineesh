"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Camera, Film, ExternalLink } from "lucide-react";

const tags = [
  "Sony FX3",
  "G Master Lenses",
  "Lighting Setup",
  "Camera Department",
  "Commercial Shoot",
];

const AssistantDOP = () => {
  return (
    <section id="on-set" className="py-20 px-6 md:px-12 bg-navy relative border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-2 flex items-center gap-2">
            <Camera size={14} className="text-violet" />
            02 — On Set Experience
          </span>
          <div className="flex flex-wrap items-baseline gap-4">
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-white">
              On Set: <span className="text-white/40">Assistant DOP</span>
            </h2>
          </div>
        </div>

        {/* Text-First Card (No Thumbnails) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 md:p-12 hover:border-violet/40 transition-all duration-300 shadow-xl"
        >
          {/* Tag & Role */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-violet/15 border border-violet/30 rounded-full text-xs font-bold uppercase tracking-wider text-violet">
              Brand Ad Film · Dental / Clear Aligners
            </span>
            <span className="text-white/40 text-xs">·</span>
            <span className="text-xs font-syne font-bold text-cyan uppercase tracking-wider">
              Production: RootMedia
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-4xl font-syne font-bold text-white mb-2">
            Toothsuite: An Aligner Connection
          </h3>

          <p className="text-sm text-violet font-bold uppercase tracking-wider mb-6">
            Assistant DOP · Camera Department
          </p>

          {/* Description — No brackets */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6 font-light max-w-3xl">
            Worked on a brand ad shoot for Toothsuite, handling the Sony FX3 with G Master lenses and supporting the DOP with camera setup, lens changes, focus, monitoring, gear management, and lighting setups.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Plain Text-First Action Buttons (New Tab) */}
          <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-white/5">
            <a
              href="https://www.instagram.com/reel/DeJpWRgTK1Z/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet hover:bg-violet/85 text-white px-7 py-3.5 rounded-xl font-bold transition-all hover:translate-y-[-2px] shadow-xl shadow-violet/25 flex items-center gap-2 text-sm"
            >
              <Play size={16} className="fill-white" />
              <span>Watch Ad</span>
              <ExternalLink size={12} className="opacity-70" />
            </a>

            <a
              href="https://www.instagram.com/reel/DeJ94Onoa-Y/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-violet text-white px-7 py-3.5 rounded-xl font-bold transition-all hover:bg-white/5 flex items-center gap-2 text-sm hover:translate-y-[-2px]"
            >
              <Film size={16} />
              <span>Behind the Scenes</span>
              <ExternalLink size={12} className="opacity-70" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AssistantDOP;
