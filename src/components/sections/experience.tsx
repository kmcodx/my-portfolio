"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SectionTitle } from "@/components/shared/section-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { label: "Users served", value: "100k+" },
  { label: "Revenue influenced", value: "$100k+" },
  { label: "Engineers hired", value: "80+" },
];

export function ExperienceSection() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;
    gsap.fromTo(
      statsRef.current.children,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 , ease: "power2.out" },
    );
  }, []);

  return (
    <section id="experience" className="section-shell">
      <SectionTitle eyebrow="Experience" title="Execution at startup speed with enterprise-grade architecture." />
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="nexus">
          <AccordionTrigger>Nexus Technologies · Senior Engineer</AccordionTrigger>
          <AccordionContent>Designed scalable APIs and multi-tenant SaaS architecture with observability, uptime, and deployment automation.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="codex">
          <AccordionTrigger>CodeX · Chief Technology Officer</AccordionTrigger>
          <AccordionContent>Led hiring, engineering velocity, and go-to-market execution for product and platform teams.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div ref={statsRef} className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="text-sm text-slate-300">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
