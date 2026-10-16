"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Film, ArrowRight, Clapperboard } from "lucide-react";

// Kaval links (two separate constants)
const kavalFilmUrl: string = "https://www.instagram.com/reel/DeEKSY5Jrri/";
const kavalBtsUrl: string  = "https://www.instagram.com/reel/DeEyOQtTrVf/";

const makingSteps = [
  { step: "01", label: "Script", desc: "Wrote the original screenplay" },
  { step: "02", label: "Storyboard", desc: "Planned every shot & sequence" },
  { step: "03", label: "Shoot", desc: "Directed & shot as DOP" },
  { step: "04", label: "Edit", desc: "Edited, graded & sound design" },
];

const FeaturedFilm = () => {
  const showBtsButton = Boolean(kavalBtsUrl && kavalBtsUrl !== kavalFilmUrl);

  return (
    <section id="featured-film" className="py-20 px-6 md:px-12 bg-navy relative border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-2 flex items-center gap-2">
            <Clapperboard size={14} className="text-violet" />
            01 — Featured Short Film
          </span>
          <div className="flex flex-wrap items-baseline gap-4">
            <h2 className="text-4xl md:text-6xl font-syne font-bold text-white">
              Kaval
            </h2>
            <span className="text-xl md:text-2xl font-syne text-white/40">
              Short Film
            </span>
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
          {/* Roles Line */}
          <div className="mb-4">
            <span className="px-3.5 py-1.5 bg-violet/15 border border-violet/30 rounded-full text-xs font-bold uppercase tracking-wider text-violet inline-block">
              Writer · Storyboard · Director · DOP · Editor
            </span>
          </div>

          {/* Description */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 font-light max-w-3xl">
            A complete one-person production. I wrote the script, planned every shot, directed, shot, and edited the film myself.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-white/5">
            <a
              href={kavalFilmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet hover:bg-violet/85 text-white px-7 py-3.5 rounded-xl font-bold transition-all hover:translate-y-[-2px] shadow-xl shadow-violet/25 flex items-center gap-2 text-sm"
            >
              <Play size={16} className="fill-white" />
              <span>Watch</span>
            </a>

            {showBtsButton && (
              <a
                href={kavalBtsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-violet text-white px-7 py-3.5 rounded-xl font-bold transition-all hover:bg-white/5 flex items-center gap-2 text-sm hover:translate-y-[-2px]"
              >
                <Film size={16} />
                <span>Behind the Scenes</span>
              </a>
            )}
          </div>

          {/* Making of Kaval — 4 Text-First Steps */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-white/40 font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-px bg-violet/40" />
              Making of Kaval · Independent Production
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {makingSteps.map((item, idx) => (
                <div
                  key={item.step}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 relative"
                >
                  <span className="text-xl font-syne font-bold text-violet block mb-1">
                    {item.step}
                  </span>
                  <h4 className="text-sm font-syne font-bold text-white mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-white/50 font-light leading-snug">
                    {item.desc}
                  </p>
                  {idx < makingSteps.length - 1 && (
                    <ArrowRight size={14} className="text-white/20 hidden md:block absolute right-[-10px] top-1/2 -translate-y-1/2 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedFilm;

