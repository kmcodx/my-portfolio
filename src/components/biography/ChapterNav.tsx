"use client";

import { motion } from "framer-motion";
import { ChapterData } from "./types";
import { ChevronDown } from "lucide-react";

type ChapterNavProps = {
  chapters: ChapterData[];
  activeId: string;
  onSelect: (id: string) => void;
  matchedIds: Set<string>;
};

export function ChapterNav({ chapters, activeId, onSelect, matchedIds }: ChapterNavProps) {
  return (
    <>
      <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] overflow-y-auto pr-3 lg:block">
        <nav aria-label="Biography chapter navigation" className="space-y-2">
          {chapters.map((chapter) => {
            const isActive = chapter.id === activeId;
            const isMatch = matchedIds.has(chapter.id);
            return (
              <button
                type="button"
                key={chapter.id}
                onClick={() => onSelect(chapter.id)}
                className={`relative w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                  isActive
                    ? "border-cyan-300/70 bg-cyan-300/10 text-white"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-white/30 hover:text-white"
                } ${isMatch ? "shadow-[0_0_0_1px_rgba(103,232,249,0.35)]" : ""}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeChapter"
                    className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400"
                  />
                )}
                <span className="block text-xs uppercase tracking-[0.2em] text-slate-400">Chapter {chapter.number}</span>
                <span className="mt-1 block font-medium">{chapter.title}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/85 px-4 py-3 backdrop-blur lg:hidden">
        <div className="relative">
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <select
            value={activeId}
            onChange={(event) => onSelect(event.target.value)}
            className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-300"
            aria-label="Select chapter"
          >
            {chapters.map((chapter) => (
              <option key={chapter.id} value={chapter.id}>
                Chapter {chapter.number}: {chapter.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {chapters.map((chapter) => {
            const isActive = chapter.id === activeId;
            return (
              <button
                type="button"
                key={chapter.id}
                onClick={() => onSelect(chapter.id)}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs ${
                  isActive
                    ? "border-cyan-300/60 bg-cyan-300/10 text-cyan-100"
                    : "border-white/15 bg-white/5 text-slate-300"
                }`}
              >
                {chapter.number}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
