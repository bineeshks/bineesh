"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Camera, Play, Volume2, VolumeX, ExternalLink } from "lucide-react";
import Image from "next/image";

// Instagram-style BTS grid
// Mix of real images and videos from the WhatsApp BTS collection
const btsItems = [
  { id: "b1",  type: "image", src: "/bts/WhatsApp Image 2026-10-16 at 12.32.43 PM.jpeg", alt: "On-set BTS" },
  { id: "b2",  type: "video", src: "/bts/WhatsApp Video 2026-10-16 at 12.32.56 PM.mp4",  alt: "BTS video" },
  { id: "b3",  type: "image", src: "/bts/WhatsApp Image 2026-10-16 at 12.36.19 PM.jpeg", alt: "Behind the scenes" },
  { id: "b4",  type: "video", src: "/bts/WhatsApp Video 2026-10-16 at 12.36.28 PM.mp4",  alt: "BTS video" },
  { id: "b5",  type: "image", src: "/bts/WhatsApp Image 2026-10-16 at 12.36.20 PM.jpeg", alt: "On-set moment" },
  { id: "b6",  type: "video", src: "/bts/WhatsApp Video 2026-10-16 at 12.36.31 PM.mp4",  alt: "BTS video" },
  { id: "b7",  type: "image", src: "/bts/WhatsApp Image 2026-10-16 at 12.37.05 PM.jpeg", alt: "BTS shot" },
  { id: "b8",  type: "video", src: "/bts/WhatsApp Video 2026-10-16 at 12.36.33 PM.mp4",  alt: "BTS video" },
  { id: "b9",  type: "image", src: "/bts/WhatsApp Image 2026-10-16 at 12.37.05 PM (1).jpeg", alt: "Camera work" },
  { id: "b10", type: "video", src: "/bts/WhatsApp Video 2026-10-16 at 12.36.37 PM.mp4",  alt: "BTS video" },
  { id: "b11", type: "image", src: "/bts/WhatsApp Image 2026-10-16 at 12.37.05 PM (2).jpeg", alt: "Production" },
  { id: "b12", type: "video", src: "/bts/WhatsApp Video 2026-10-16 at 12.36.56 PM.mp4",  alt: "BTS video" },
  { id: "b13", type: "image", src: "/bts/WhatsApp Image 2026-10-16 at 12.37.26 PM.jpeg", alt: "Film set" },
  { id: "b14", type: "video", src: "/bts/WhatsApp Video 2026-10-16 at 12.37.03 PM.mp4",  alt: "BTS video" },
  { id: "b15", type: "image", src: "/bts/WhatsApp Image 2026-10-16 at 12.37.27 PM.jpeg", alt: "Shoot day" },
  { id: "b16", type: "video", src: "/bts/WhatsApp Video 2026-10-16 at 12.37.09 PM.mp4",  alt: "BTS video" },
  { id: "b17", type: "image", src: "/bts/WhatsApp Image 2026-10-16 at 12.37.29 PM.jpeg", alt: "Behind lens" },
  { id: "b18", type: "video", src: "/bts/WhatsApp Video 2026-10-16 at 12.37.19 PM.mp4",  alt: "BTS video" },
];

interface GridItem {
  id: string;
  type: string;
  src: string;
  alt: string;
}

function BTSCell({ item, index }: { item: GridItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const handleEnter = () => {
    if (item.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };
  const handleLeave = () => {
    if (item.type === "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
      setMuted(true);
      if (videoRef.current) videoRef.current.muted = true;
    }
  };
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 9) * 0.05 }}
      className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer bg-white/[0.03] border border-white/8"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {item.type === "image" ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />
      ) : (
        <video
          ref={videoRef}
          src={item.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Video play icon (static, before hover) */}
      {item.type === "video" && !playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-black/50 border border-white/30 flex items-center justify-center">
            <Play size={14} className="fill-white text-white ml-0.5" />
          </div>
        </div>
      )}

      {/* Mute toggle when playing */}
      {item.type === "video" && playing && (
        <button
          onClick={toggleMute}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-violet/70 transition-all z-10"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
        </button>
      )}
    </motion.div>
  );
}

// Instagram BTS links (existing ones)
const instaBtsLinks = [
  {
    id: "kaval-bts",
    title: "Kaval — BTS",
    tag: "Short Film · Solo Production",
    url: "https://www.instagram.com/reel/DeEyOQtTrVf/",
  },
  {
    id: "toothsuite-bts",
    title: "Toothsuite — On Set",
    tag: "Commercial Shoot · Camera Dept",
    url: "https://www.instagram.com/reel/DeJ94Onoa-Y/",
  },
];

const EditAndBTS = () => {
  return (
    <section id="bts" className="py-24 px-6 md:px-12 bg-navy relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-3 flex items-center gap-2">
            <Camera size={13} className="text-violet" />
            06 &mdash; Behind the Scenes
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-white leading-tight mb-4">
            BTS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan">
              Gallery
            </span>
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light max-w-xl">
            Real on-set moments &mdash; short films, brand shoots &amp; production days. Hover videos to preview.
          </p>
        </motion.div>

        {/* Instagram-style Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1.5 md:gap-2">
          {btsItems.map((item, idx) => (
            <BTSCell key={item.id} item={item} index={idx} />
          ))}
        </div>

        {/* Instagram Reel Links */}
        {instaBtsLinks.length > 0 && (
          <div className="mt-12 space-y-3">
            <p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-4">Also on Instagram</p>
            {instaBtsLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-violet/40 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div>
                  <span className="text-[10px] font-bold text-violet uppercase tracking-wider block mb-0.5">{link.tag}</span>
                  <span className="text-base font-syne font-bold text-white group-hover:text-violet transition-colors">{link.title}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50 group-hover:text-violet transition-colors shrink-0">
                  <Play size={12} className="fill-current" />
                  <span className="font-medium hidden sm:block">Watch Reel</span>
                  <ExternalLink size={11} className="opacity-60" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EditAndBTS;
