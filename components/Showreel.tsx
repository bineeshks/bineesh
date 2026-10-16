"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2, Film } from "lucide-react";

// Replace with your YouTube embed URL (e.g. "https://www.youtube-nocookie.com/embed/YOUR_ID")
// or Google Drive / Vimeo / custom video link when ready.
// If left empty (""), it defaults to the bundled local cinematic showreel video.
const SHOWREEL_EXTERNAL_EMBED_URL = ""; 

const LOCAL_SHOWREEL_SOURCE = "/videos/resort.MP4";

const Showreel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => console.log("Play failed: ", err));
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="showreel" className="py-24 px-6 md:px-12 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet/10 border border-violet/20 text-violet text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Film size={14} />
              <span>Cinematic Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-syne font-bold mb-4">
              Show<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan">reel</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-light">
              60-second look at my best work.
            </p>
          </motion.div>
        </div>

        {/* Video Player 16:9 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-[16/9] w-full rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-black shadow-2xl shadow-violet/10 group">
            {SHOWREEL_EXTERNAL_EMBED_URL ? (
              <iframe
                src={SHOWREEL_EXTERNAL_EMBED_URL}
                title="Bineesh K S Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 object-cover"
              />
            ) : (
              <div className="relative w-full h-full cursor-pointer" onClick={togglePlay}>
                <video
                  ref={videoRef}
                  src={LOCAL_SHOWREEL_SOURCE}
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none group-hover:opacity-60 transition-opacity" />

                {/* Center Play/Pause button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-violet/90 hover:bg-violet text-white flex items-center justify-center shadow-2xl backdrop-blur-md border border-white/20 transition-all duration-300 pointer-events-auto ${
                      isPlaying ? "opacity-0 group-hover:opacity-100 scale-90" : "opacity-100 scale-100 animate-pulse"
                    }`}
                  >
                    {isPlaying ? <Pause size={32} /> : <Play size={34} className="ml-1 fill-white" />}
                  </div>
                </div>

                {/* Bottom Control Bar */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 flex items-center justify-between z-20 pointer-events-auto">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white/90 border border-white/10">
                      Showreel · 60s
                    </span>
                    <span className="text-xs text-white/50 hidden sm:inline-block">
                      {isPlaying ? "Playing" : "Click to Play"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 rounded-full bg-black/60 hover:bg-violet backdrop-blur-md flex items-center justify-center text-white border border-white/10 transition-colors"
                      title={isMuted ? "Unmute" : "Mute"}
                      aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                    <button
                      onClick={toggleFullscreen}
                      className="w-10 h-10 rounded-full bg-black/60 hover:bg-violet backdrop-blur-md flex items-center justify-center text-white border border-white/10 transition-colors"
                      title="Fullscreen"
                      aria-label="View fullscreen"
                    >
                      <Maximize2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Caption underneath */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 px-2 gap-2">
            <span>Directed, Shot &amp; Edited by Bineesh K S</span>
            <span>Formats: 16:9 Landscape &amp; 9:16 Vertical</span>
          </div>
        </motion.div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Showreel;
