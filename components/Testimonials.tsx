"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We needed someone who could understand our brand — authentic Kerala food in Hyderabad — and translate that into content that feels real. Bineesh did exactly that. The AI-generated visuals he created for our campaigns were unlike anything we had seen for a food brand. He managed everything remotely and we never had to follow up. Consistent, creative, and reliable.",
    author: "Founder",
    role: "elaVate",
    location: "Hyderabad",
  },
];

const Testimonials = () => {
  const item = testimonials[0];

  return (
    <section className="py-24 px-6 md:px-12 bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-2 block">
            07 — Social Proof
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold">
            Client <span className="text-white/40">Review</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-14 bg-navy border border-white/10 rounded-[2.5rem] relative group hover:border-violet/40 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 shadow-2xl"
          >
            <Quote className="text-violet opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" size={56} />
            <div className="flex-grow">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic font-light">
                &quot;{item.quote}&quot;
              </p>
              <div>
                <h4 className="font-syne font-bold text-white text-xl">
                  {item.author}
                </h4>
                <p className="text-xs sm:text-sm text-violet font-bold uppercase tracking-widest mt-1">
                  {item.role} · <span className="text-white/40">{item.location}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default Testimonials;
