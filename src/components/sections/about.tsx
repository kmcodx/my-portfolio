"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/section-title";

const timeline = ["Developer", "Senior Engineer", "Technical Lead", "CTO", "Architect"];

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionTitle
        eyebrow="About"
        title="A decade of building products that scale with confidence."
        description="From writing first production endpoints to leading engineering strategy, each role sharpened one obsession: sustainable systems design."
      />
      <div className="relative ml-4 border-l border-white/15 pl-8">
        {timeline.map((stage, idx) => (
          <motion.div
            key={stage}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative mb-10"
          >
            <span className="absolute -left-[42px] top-1 h-3 w-3 rounded-full bg-accent-gradient" />
            <h3 className="text-xl font-semibold text-white">{stage}</h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Driving architecture decisions, delivery velocity, and resilient infrastructure with measurable business outcomes.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
