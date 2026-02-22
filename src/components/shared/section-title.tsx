"use client";

import { motion } from "framer-motion";

export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-slate-300">{description}</p> : null}
    </motion.div>
  );
}
