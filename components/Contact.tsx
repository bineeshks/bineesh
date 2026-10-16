"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Send, CheckCircle2, Download } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      // Send to Formspree or mailto fallback
      const res = await fetch("https://formspree.io/f/xvgabjyj", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 4000);
      } else {
        // Fallback: open mailto
        const mailtoLink = `mailto:bineeshbineesh518@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        window.open(mailtoLink, "_blank");
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 4000);
      }
    } catch {
      // Fallback: open mailto
      const mailtoLink = `mailto:bineeshbineesh518@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.open(mailtoLink, "_blank");
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormState("idle"), 4000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "bineeshbineesh518@gmail.com", href: "mailto:bineeshbineesh518@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8300895493", href: "tel:+918300895493" },
    { icon: MapPin, label: "Location", value: "Kerala, India (Open to Kochi & Remote)", href: "https://maps.google.com/?q=Kerala,India" },
  ];

  const instagramProfileUrl = "https://www.instagram.com/heybineesh/?hl=en";

  const socialLinks = [
    ...(instagramProfileUrl ? [{ icon: Instagram, href: instagramProfileUrl, label: "Instagram" }] : []),
    { icon: Linkedin, href: "https://www.linkedin.com/in/bineesh-k-s-056b06404/", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/@bineeshks", label: "YouTube" },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-navy relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-6">
            <span className="text-violet font-medium tracking-[0.2em] uppercase text-xs mb-2 block">
              08 — Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-syne font-bold mb-6 leading-tight">
              Let&apos;s <span className="text-white/40">Work Together</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg leading-relaxed font-light">
              Open to full-time roles in cinematography, camera department, video editing, and content production, plus remote freelance projects.
            </p>

            {/* Resume Download CTA */}
            <div className="mb-10">
              <a
                href="/Bineesh__KS_Resume.pdf"
                download="Bineesh_KS_Resume.pdf"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-violet/15 hover:bg-violet text-white border border-violet/30 hover:border-violet font-bold text-sm transition-all duration-300 shadow-lg shadow-violet/15 hover:translate-y-[-2px]"
              >
                <Download size={18} />
                <span>Download Resume (Latest)</span>
              </a>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-5 group w-fit"
                >
                  <div className="w-13 h-13 p-3.5 bg-white/5 rounded-2xl flex items-center justify-center text-white/50 group-hover:bg-violet group-hover:text-white transition-all duration-300 border border-white/5">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-white/40 block mb-0.5">
                      {info.label}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-white/90 group-hover:text-violet transition-colors break-all">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="mt-10">
              <span className="text-[11px] uppercase tracking-widest text-white/40 block mb-3 font-bold">
                Follow My Work
              </span>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/50 hover:bg-violet hover:text-white transition-all duration-300 border border-white/5 hover:border-violet/40 hover:-translate-y-1"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-6 border border-green-500/20">
                  <CheckCircle2 size={44} />
                </div>
                <h3 className="text-2xl font-syne font-bold mb-2">Message Sent!</h3>
                <p className="text-white/60 text-sm max-w-xs">
                  Thank you for reaching out. I&apos;ll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold ml-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="What should I call you?"
                    className="w-full bg-navy/80 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet transition-colors text-white text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold ml-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-navy/80 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet transition-colors text-white text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, production, or open role..."
                    className="w-full bg-navy/80 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet transition-colors text-white text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="w-full bg-violet hover:bg-violet/85 text-white font-bold py-4.5 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-violet/25 hover:translate-y-[-1px]"
                >
                  {formState === "sending" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Subtle ambient lighting */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-violet/5 to-transparent -z-10 pointer-events-none" />
    </section>
  );
};

export default Contact;
