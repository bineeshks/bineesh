"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
}

const statsData: StatItem[] = [
  { value: "2.5+", label: "Years Freelance" },
  { value: "30+", label: "Reels & Videos" },
  { value: "4+", label: "Industries" },
  { value: "2", label: "Short Films (1 Released)" },
];

const statsLine = "2.5+ Years · 30+ Reels & Videos · 4+ Industries · 2 Short Films (1 Released)";

const Stats = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white/5 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Exact Stats Line Banner */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm md:text-base font-syne font-bold uppercase tracking-[0.2em] text-violet">
            {statsLine}
          </p>
        </div>

        {/* 4 Clean Text-First Stat Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-syne font-bold text-white mb-2">
                <span className="tabular-nums text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan">
                  {stat.value}
                </span>
              </div>
              <p className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-[0.15em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

