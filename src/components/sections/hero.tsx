"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const words = ["Engineer.", "Architect.", "Builder.", "Leader."];
const badges = ["Laravel", "NestJS", "Next.js", "AWS", "Docker", "CI/CD"];

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="section-shell">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 text-sm uppercase tracking-[0.22em] text-cyan-300">
          Senior Software Engineer | Architect | DevOps Engineer · Pakistan
        </motion.p>
        <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-slate-300"
        >
          I build scalable backend systems, SaaS platforms, and production-grade infrastructure for high-growth UK and US teams.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-10 flex flex-wrap gap-4">
          <a href="#projects">
            <Button>View Projects</Button>
          </a>
          <a href="#contact">
            <Button variant="ghost">Contact Me</Button>
          </a>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-2xl">
          {badges.map((badge, idx) => (
            <motion.div
              key={badge}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + idx * 0.35, repeat: Infinity, ease: "easeInOut" }}
              className="gradient-border glass rounded-xl px-4 py-3 text-center text-sm text-slate-200"
            >
              {badge}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
