"use client";

import { motion } from "framer-motion";

const lines = ["Performance is a Feature.", "Infrastructure Matters.", "Ship. Scale. Sustain."];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="section-shell">
      <div className="glass rounded-3xl p-8 sm:p-12">
        {lines.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-3xl font-black leading-tight text-white sm:text-5xl"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
