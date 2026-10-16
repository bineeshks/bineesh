"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, GraduationCap, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-navy relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative sticky top-28"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-violet to-cyan relative overflow-hidden group border border-white/10 shadow-2xl">
              <Image
                src="/myphoto2.jpeg"
                alt="Bineesh K S - Filmmaker, Videographer & Editor"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-500" />
            </div>

            {/* Badges */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 flex flex-col gap-3 z-10">
              <div className="bg-[#0A0D18]/90 backdrop-blur-md border border-green-500/30 px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-green-400">Open to Work</span>
              </div>
              <div className="bg-[#0A0D18]/90 backdrop-blur-md border border-violet/30 px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-white">Based in Kerala</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text & Timelines */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-2 block">
              06 — Who I Am
            </span>
            <h2 className="text-4xl md:text-6xl font-syne font-bold mb-8 leading-tight">
              A storyteller who <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan">
                understands cinema &amp; story
              </span>
            </h2>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
              <p>
                I&apos;m a filmmaker, videographer, and editor with a BCA degree and 2.5 years of experience. I wrote, directed, shot, and edited my released short film Kaval, and made a second short film, Pathivazhiyil, entirely on my own.
              </p>
              <p>
                I&apos;ve worked on set as an Assistant DOP on a brand ad shoot, handling the Sony FX3 with G Master lenses and lighting setups. I also shoot and edit videos for resort, cafe, clothing, and education brands. I&apos;m looking for a role in video production, filmmaking, or editing, where I can keep learning and grow with a creative team.
              </p>
            </div>

            {/* Experience & Education Timelines */}
            <div className="mt-14 space-y-12">
              {/* Experience Timeline */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-violet/15 flex items-center justify-center text-violet">
                    <Briefcase size={18} />
                  </div>
                  <h3 className="text-xl font-syne font-bold text-white">Experience</h3>
                </div>

                <div className="border-l border-white/10 pl-6 space-y-8 ml-4">
                  {/* Item 1 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-violet ring-4 ring-navy" />
                    <span className="text-xs font-bold text-violet uppercase tracking-wider block mb-1">
                      2024 — Present
                    </span>
                    <h4 className="text-lg font-syne font-bold text-white">
                      Filmmaker &amp; Cinematographer (Freelance)
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-white/60 font-light">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-violet shrink-0 mt-1" />
                        <span>wrote, directed, shot, and edited the released short film Kaval, and made a second short film, Pathivazhiyil, which is unreleased.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-violet shrink-0 mt-1" />
                        <span>Assistant DOP on the Toothsuite brand ad &quot;An Aligner Connection&quot; (Sony FX3, G Master lenses, lighting setups)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-violet shrink-0 mt-1" />
                        <span>Shot and edited cinematic commercials, vertical reels, and brand video campaigns for resort, travel, cafe, and education clients</span>
                      </li>
                    </ul>
                  </div>

                  {/* Item 2 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white/30 ring-4 ring-navy" />
                    <span className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-1">
                      2022 — 2023
                    </span>
                    <h4 className="text-lg font-syne font-bold text-white/80">
                      Desktop Engineer
                    </h4>
                    <p className="mt-2 text-sm text-white/50 font-light">
                      Hardware and systems support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Timeline */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-cyan/15 flex items-center justify-center text-cyan">
                    <GraduationCap size={18} />
                  </div>
                  <h3 className="text-xl font-syne font-bold text-white">Education</h3>
                </div>

                <div className="border-l border-white/10 pl-6 space-y-6 ml-4">
                  {/* Degree 1 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan ring-4 ring-navy" />
                    <h4 className="text-lg font-syne font-bold text-white">
                      Bachelor of Computer Applications (BCA)
                    </h4>
                    <p className="text-sm text-white/50 font-light mt-1">
                      University of Calicut
                    </p>
                  </div>

                  {/* Degree 2 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white/30 ring-4 ring-navy" />
                    <h4 className="text-lg font-syne font-bold text-white/80">
                      Higher Secondary (12th)
                    </h4>
                    <p className="text-sm text-white/50 font-light mt-1">
                      TN State Board
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

