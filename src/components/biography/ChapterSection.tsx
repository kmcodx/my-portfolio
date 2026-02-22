"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { chapterReveal, paragraphStagger } from "./animation";
import { ChapterData } from "./types";

type ChapterSectionProps = {
  chapter: ChapterData;
  searchTerm: string;
  isActive: boolean;
  setRef: (id: string, element: HTMLElement | null) => void;
};

function escapeRegex(input: string) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function HighlightText({ text, searchTerm }: { text: string; searchTerm: string }) {
  const safeTerm = searchTerm.trim();
  if (!safeTerm) return <>{text}</>;

  const parts = text.split(new RegExp(`(${escapeRegex(safeTerm)})`, "gi"));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === safeTerm.toLowerCase() ? (
          <mark key={`${part}-${index}`} className="rounded bg-cyan-300/30 px-1 text-cyan-100">
            {part}
          </mark>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}

function AnimatedMetric({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const duration = 1200;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.floor(progress * value));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="glass rounded-xl p-4">
      <p className="text-2xl font-semibold text-cyan-200">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
    </div>
  );
}

export function ChapterSection({ chapter, searchTerm, isActive, setRef }: ChapterSectionProps) {
  const hasMatch = useMemo(() => {
    const source = [chapter.title, chapter.subtitle, chapter.quote, ...chapter.paragraphs, ...(chapter.callouts ?? [])]
      .join(" ")
      .toLowerCase();
    return searchTerm ? source.includes(searchTerm.toLowerCase()) : false;
  }, [chapter, searchTerm]);

  return (
    <motion.section
      id={chapter.id}
      ref={(element) => setRef(chapter.id, element)}
      variants={chapterReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      className={`relative scroll-mt-28 rounded-3xl border p-6 sm:p-8 ${
        isActive
          ? "border-cyan-300/50 bg-white/[0.065]"
          : "border-white/10 bg-slate-900/45"
      } ${hasMatch ? "shadow-[0_0_40px_rgba(34,211,238,0.12)]" : ""}`}
    >
      <p className="pointer-events-none absolute right-4 top-3 text-6xl font-black text-white/5 sm:text-8xl">
        {String(chapter.number).padStart(2, "0")}
      </p>
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
          Chapter {chapter.number}
        </span>
        {chapter.period && <span className="text-sm text-slate-400">{chapter.period}</span>}
      </div>

      <h2 className="text-2xl font-semibold text-white sm:text-3xl">
        <HighlightText text={chapter.title} searchTerm={searchTerm} />
      </h2>
      <p className="mt-2 text-sm text-slate-300 sm:text-base">
        <HighlightText text={chapter.subtitle} searchTerm={searchTerm} />
      </p>

      <motion.div className="mt-6 space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {chapter.paragraphs.map((paragraph) => (
          <motion.p key={paragraph.slice(0, 20)} variants={paragraphStagger} className="leading-relaxed text-slate-200">
            <HighlightText text={paragraph} searchTerm={searchTerm} />
          </motion.p>
        ))}
      </motion.div>

      {chapter.callouts && chapter.callouts.length > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {chapter.callouts.map((callout) => (
            <div key={callout} className="glass rounded-xl p-4 text-sm text-slate-200">
              <HighlightText text={callout} searchTerm={searchTerm} />
            </div>
          ))}
        </div>
      )}

      {chapter.metrics && chapter.metrics.length > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {chapter.metrics.map((metric) => (
            <AnimatedMetric key={metric.label} {...metric} />
          ))}
        </div>
      )}

      <blockquote className="glass mt-7 rounded-2xl border-l-2 border-cyan-300/60 p-5 text-base italic text-slate-100">
        “<HighlightText text={chapter.quote} searchTerm={searchTerm} />”
      </blockquote>

      <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-400/0 via-blue-300/60 to-cyan-300/0" />
    </motion.section>
  );
}
