"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/shared/section-title";

type SkillItem = {
  name: string;
  description: string;
};

type SkillCategory = {
  id: string;
  label: string;
  summary: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    id: "backend-engineering",
    label: "Backend Engineering",
    summary: "Robust backend systems with maintainability, security, and scale built in from day one.",
    skills: [
      {
        name: "PHP (Core PHP)",
        description:
          "Strong foundation in structured backend development with procedural and object-oriented approaches, including custom systems built from scratch.",
      },
      {
        name: "Laravel",
        description:
          "Expert in scalable web apps, REST APIs, queues, auth flows, and production-ready SaaS platforms with clean architecture.",
      },
      {
        name: "CodeIgniter",
        description:
          "Experienced in maintaining and modernizing legacy enterprise platforms while preserving stability and optimized MVC flow.",
      },
      {
        name: "Node.js",
        description:
          "Built modern backend services and scalable API layers for SaaS products and multi-tenant environments.",
      },
      {
        name: "NestJS",
        description:
          "Designed modular backend architectures leveraging dependency injection and clean architecture principles.",
      },
      {
        name: "REST API Architecture",
        description:
          "Designed secure, versioned API ecosystems serving high-volume production workloads with long-term extensibility.",
      },
    ],
  },
  {
    id: "frontend-engineering",
    label: "Frontend Engineering",
    summary: "High-performance product interfaces built for clarity, conversion, and long-term design-system scalability.",
    skills: [
      {
        name: "Next.js",
        description:
          "Built SEO-focused SaaS frontends with SSR, performance optimization, and scalable UI architecture for growth.",
      },
      {
        name: "React.js",
        description:
          "Developed dynamic, component-driven interfaces with reusable structures and strong maintainability standards.",
      },
      {
        name: "Vue.js",
        description:
          "Delivered reactive frontend experiences for enterprise dashboards and complex admin surfaces.",
      },
      {
        name: "Fullstack Architecture",
        description:
          "Designed end-to-end systems across data modeling, backend services, frontend delivery, and deployment workflows.",
      },
    ],
  },
  {
    id: "devops-infrastructure",
    label: "DevOps & Infrastructure",
    summary: "Production operations engineered for resilience, observability, and fast release velocity.",
    skills: [
      {
        name: "Linux VPS Provisioning",
        description: "Provisioned and hardened production-grade VPS infrastructure from the ground up.",
      },
      {
        name: "Docker (Production Use)",
        description: "Deployed ERP and SaaS workloads with containerized environments for predictable operations.",
      },
      {
        name: "CI/CD (GitHub Actions)",
        description: "Designed automated build, test, and deployment pipelines for consistent release quality.",
      },
      {
        name: "Nginx & Apache Reverse Proxy",
        description: "Configured high-performance web server stacks for reliable routing and optimized delivery.",
      },
      {
        name: "Cloud Platforms",
        description:
          "Hands-on deployments across AWS EC2, Azure VPS, Google Cloud VPS, and enterprise hosting layers including WHM/cPanel/Plesk.",
      },
      {
        name: "Cloudflare DNS & Security",
        description: "Configured DNS, SSL, CDN, and edge security for faster and safer production traffic.",
      },
      {
        name: "Redis Caching",
        description: "Implemented caching strategies that improved application response time and reduced backend load.",
      },
      {
        name: "Mailcow (Self-Hosted Email Server)",
        description: "Managed private email server infrastructure with operational reliability in mind.",
      },
    ],
  },
  {
    id: "architecture-scalability",
    label: "Architecture & Scalability",
    summary: "System design decisions grounded in growth economics, reliability, and measurable performance.",
    skills: [
      {
        name: "Enterprise Database Design",
        description: "Designed normalized, scalable schemas supporting large-scale systems with 100,000+ users.",
      },
      {
        name: "High-User System Handling",
        description:
          "Managed performance, integrity, and horizontal growth challenges in government-grade and enterprise-level products.",
      },
      {
        name: "SaaS Architecture",
        description: "Designed modular multi-tenant SaaS foundations with billing and subscription extensibility.",
      },
      {
        name: "Performance Optimization",
        description: "Improved system performance by up to 50% via caching, query optimization, and infrastructure tuning.",
      },
      {
        name: "Stripe Integration",
        description: "Built robust subscription billing and payment workflows tightly aligned to SaaS product models.",
      },
      {
        name: "Zoom SDK Integration",
        description: "Integrated real-time consultation features into enterprise systems with reliable user flow.",
      },
      {
        name: "WebSockets",
        description: "Implemented real-time communication channels for low-latency, event-driven product experiences.",
      },
    ],
  },
  {
    id: "leadership-ownership",
    label: "Leadership & Ownership",
    summary: "Execution leadership that aligns technical direction with business outcomes and delivery discipline.",
    skills: [
      {
        name: "Technical Leadership",
        description: "Led teams up to 15 engineers while coordinating cross-functional technical operations.",
      },
      {
        name: "Hiring & Talent Evaluation",
        description: "Hired 80+ professionals and assessed engineering talent for capability and team fit.",
      },
      {
        name: "Project Management",
        description: "Managed projects up to $80,000 with a 98% uptime-focused delivery standard.",
      },
      {
        name: "Stakeholder Communication",
        description: "Led client conversations and translated business requirements into executable system architecture.",
      },
      {
        name: "Technical Strategy",
        description: "Defined architecture and long-term product direction at CTO level with strategic prioritization.",
      },
      {
        name: "Budgeting & Revenue Oversight",
        description: "Owned financial decisions contributing to $100K+ revenue growth while balancing engineering investment.",
      },
      {
        name: "Product Thinking",
        description: "Designed SaaS products with business-model alignment, market fit sensitivity, and scalability in mind.",
      },
    ],
  },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const activeSkills = useMemo(
    () => skillCategories.find((category) => category.id === activeCategory) ?? skillCategories[0],
    [activeCategory],
  );

  return (
    <section id="skills" className="section-shell">
      <SectionTitle
        eyebrow="Skills & Expertise"
        title="Skills & Expertise"
        description="Engineering systems that scale — from backend logic to production infrastructure."
      />

      <div className="gradient-border rounded-3xl p-[1px]">
        <div className="glass rounded-3xl p-4 md:p-6">
          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {skillCategories.map((category) => {
              const isActive = category.id === activeCategory;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`group rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                    isActive
                      ? "border-cyan-300/40 bg-cyan-400/10 shadow-[0_0_30px_-18px_rgba(34,211,238,0.9)]"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <p className="text-sm font-semibold text-white">{category.label}</p>
                  <p className="mt-2 text-xs text-slate-300">{category.summary}</p>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkills.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.08 },
                  },
                }}
                className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
              >
                {activeSkills.skills.map((skill) => (
                  <motion.article
                    key={skill.name}
                    variants={{
                      hidden: { opacity: 0, y: 18, scale: 0.98 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 230, damping: 18 }}
                    className="group gradient-border rounded-2xl p-[1px]"
                  >
                    <div className="glass h-full rounded-2xl border border-white/10 p-5 transition-all duration-300 group-hover:border-cyan-300/25 group-hover:shadow-[0_22px_45px_-28px_rgba(34,211,238,0.65)]">
                      <p className="text-base font-semibold text-white">{skill.name}</p>
                      <div className="mt-3 overflow-hidden">
                        <p className="text-sm leading-relaxed text-slate-300 transition-all duration-300 group-hover:text-slate-100">
                          {skill.description}
                        </p>
                        <div className="mt-0 h-0.5 w-0 bg-gradient-to-r from-cyan-300/80 to-violet-300/80 transition-all duration-300 group-hover:mt-4 group-hover:w-full" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
