"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/section-title";
import { Card } from "@/components/ui/card";

const skills = [
  { title: "Backend", stack: "Laravel, Node.js, NestJS", level: 95 },
  { title: "Frontend", stack: "Next.js, React", level: 90 },
  { title: "DevOps", stack: "Docker, CI/CD, AWS, VPS, Nginx", level: 92 },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <SectionTitle eyebrow="Skills" title="Interactive engineering depth, not checkbox expertise." />
      <div className="grid gap-5 md:grid-cols-3">
        {skills.map((skill) => (
          <motion.div key={skill.title} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200 }}>
            <Card className="group h-full">
              <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{skill.stack}</p>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full bg-accent-gradient"
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
