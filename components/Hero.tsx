"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Play, Download, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 overflow-hidden grid-pattern">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10 lg:col-span-7"
        >
          <span className="text-violet font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
            Hey, I&apos;m
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-syne font-bold leading-tight mb-4 tracking-tight">
            BINEESH <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan">K S</span>
          </h1>

          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-syne font-bold text-white/95 leading-tight">
              Filmmaker, Videographer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan">
                &amp; Editor
              </span>
            </h2>
          </div>

          <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
            BCA graduate with 2.5 years of experience. I write, shoot, and edit stories for brands and cinema.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#featured-film"
              className="bg-violet hover:bg-violet/85 text-white px-7 py-4 rounded-xl font-bold transition-all hover:translate-y-[-2px] shadow-xl shadow-violet/25 flex items-center gap-2 group"
            >
              <Play size={18} className="fill-white group-hover:scale-110 transition-transform" />
              <span>Watch My Work</span>
            </Link>
            <a
              href="/Bineesh__KS_Resume.pdf"
              download="Bineesh_KS_Resume.pdf"
              className="border border-white/20 hover:border-violet text-white px-7 py-4 rounded-xl font-bold transition-all hover:bg-white/5 flex items-center gap-2 hover:translate-y-[-2px]"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
            <Link
              href="#contact"
              className="bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-xl font-bold transition-all hover:translate-y-[-2px] border border-white/10 flex items-center gap-2"
            >
              <Send size={18} />
              <span>Hire Me</span>
            </Link>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
            {/* Main Profile Image */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1.5, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-white/10 p-3 sm:p-4 z-0"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative ring-4 ring-violet/20 shadow-2xl">
                <Image
                  src="/myphoto1.jpeg"
                  alt="Bineesh K S - Filmmaker, Videographer & Editor"
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border border-violet/30 animate-ping [animation-duration:4s]" />
              <div className="absolute inset-[-20px] rounded-full border border-cyan/15 animate-pulse" />
            </motion.div>
            <div className="absolute w-80 h-80 bg-violet/15 rounded-full blur-[100px] -z-10" />
            <div className="absolute w-64 h-64 bg-cyan/10 rounded-full blur-[80px] bottom-0 right-0 -z-10" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
};

export default Hero;
