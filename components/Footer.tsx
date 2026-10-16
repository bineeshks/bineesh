"use client";

import React from "react";
import Link from "next/link";
// components/Footer.tsx
import { Linkedin, Youtube, Instagram } from "lucide-react";

// ... rest of file unchanged until line 40

          {/* Right: Socials with real links */}
          <div className="flex gap-3">
            {/* Instagram link (if provided) */}
            <a
              href="https://www.instagram.com/heybineesh/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-violet hover:text-white transition-all hover:scale-105"
              title="Instagram Profile"
            >
              <Instagram size={18} />
            </a>
            {/* LinkedIn link */}
            <a
              href="https://www.linkedin.com/in/bineesh-k-s-056b06404/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-violet hover:text-white transition-all hover:scale-105"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            {/* YouTube link */}
            <a
              href="https://youtube.com/@bineeshks"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-violet hover:text-white transition-all hover:scale-105"
              title="YouTube Channel"
            >
              <Youtube size={18} />
            </a>
          </div>


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-14 px-6 md:px-12 bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-syne font-bold mb-1 tracking-tight">Bineesh K S</h3>
          <p className="text-white/50 text-sm">Filmmaker, Cinematographer &amp; Video Editor</p>
        </div>

        {/* Center: Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {[
            { name: "Featured Film", href: "#featured-film" },
            { name: "On Set", href: "#on-set" },
            { name: "Work", href: "#work" },
            { name: "BTS & Edit", href: "#bts" },
            { name: "Skills", href: "#skills" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Socials with real links */}
        <div className="flex gap-3">
          {/* Instagram link (if provided) */}
          <a
            href="https://www.linkedin.com/in/bineesh-k-s-056b06404/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-violet hover:text-white transition-all hover:scale-105"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://youtube.com/@bineeshks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-violet hover:text-white transition-all hover:scale-105"
            title="YouTube Channel"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
          Crafted with vision &amp; precision. {currentYear} Bineesh K S.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
