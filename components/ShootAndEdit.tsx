"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Play } from "lucide-react";

interface VideoItem {
  id: string;
  src: string;
  label: string;
  tag: string;
}

const videos: VideoItem[] = [
  {
    id: "model",
    src: "/videos/model.mp4",
    label: "Model Reel",
    tag: "Fashion · Shoot & Edit",
  },
  {
    id: "resort1",
    src: "/videos/resort.MP4",
    label: "Resort Reel",
    tag: "Resort · Shoot & Edit",
  },
  {
    id: "restaurant",
    src: "/videos/resturents.MP4",
    label: "Restaurant Reel",
    tag: "Food & Dining · Shoot & Edit",
  },
  {
    id: "resort3",
    src: "/videos/resort3.MP4",
    label: "Resort Highlights",
    tag: "Resort · Shoot & Edit",
  },
  {
    id: "resort4",
    src: "/videos/resort 4.MP4",
    label: "Resort Cinematic",
    tag: "Resort · Shoot & Edit",
  },
  {
    id: "edit1",
    src: "/videos/edit1.mp4",
    label: "Edit Reel 01",
    tag: "Editing · Post-Production",
  },
  {
    id: "edit2",
    src: "/videos/edit2.mp4",
    label: "Edit Reel 02",
    tag: "Editing · Post-Production",
  },
  {
    id: "edit3",
    src: "/videos/edit3.mp4",
    label: "Edit Reel 03",
    tag: "Editing · Post-Production",
  },
];

function VideoCard({ item, index }: { item: VideoItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
      setMuted(true);
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="relative group rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-violet/50 transition-all duration-300 cursor-pointer"
      style={{ aspectRatio: "9/16" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={item.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />

      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-violet/80 group-hover:border-violet transition-all duration-300">
            <Play size={20} className="fill-white text-white ml-1" />
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <span className="text-[10px] font-bold text-violet uppercase tracking-widest block mb-1">
          {item.tag}
        </span>
        <h3 className="text-base md:text-lg font-syne font-bold text-white leading-tight">
          {item.label}
        </h3>
      </div>

      {playing && (
        <button
          onClick={toggleMute}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-violet/70 transition-all duration-200"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      )}
    </motion.div>
  );
}

const ShootAndEdit = () => {
  return (
    <section
      id="shoot-and-edit"
      className="py-24 px-6 md:px-12 bg-navy relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-3 block">
            05 &mdash; Shoot &amp; Edit
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-white leading-tight mb-4">
            Shoot &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan">
              Edit
            </span>
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light max-w-xl">
            Resort, restaurant, and brand videos &mdash; shot and edited by me. Hover to preview, click the icon to unmute.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {videos.map((item, idx) => (
            <VideoCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShootAndEdit;
