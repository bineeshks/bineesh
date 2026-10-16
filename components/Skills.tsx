"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-navy relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-2 block">
            05 — Skills &amp; Gear
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold">
            Skill <span className="text-white/40">Ecosystem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-violet/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-violet/10 rounded-2xl flex items-center justify-center text-violet mb-6 group-hover:bg-violet group-hover:text-white transition-all duration-300">
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-syne font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/5 group-hover:border-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Skills;
