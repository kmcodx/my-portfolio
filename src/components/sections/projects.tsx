"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/section-title";

const projects = [
  "SaaS platform architecture and scaling blueprint",
  "Stripe billing integration with subscription lifecycle automation",
  "Odoo ERP deployment for operations and finance",
  "Government-level digital system with secure infra",
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionTitle eyebrow="Projects" title="Selected systems built for scale, trust, and resilience." />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project}
            whileHover={{ rotateX: -5, rotateY: i % 2 ? 4 : -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
            className="group glass gradient-border rounded-2xl p-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Project {i + 1}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{project}</h3>
            <p className="mt-3 text-sm text-slate-300">Architecture-led delivery with performance, security, and maintainability prioritized from day one.</p>
            <div className="mt-5 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs text-slate-200 transition group-hover:border-cyan-300/40">
              View case study →
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
