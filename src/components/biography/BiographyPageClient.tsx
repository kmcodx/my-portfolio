"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import { pageEntrance } from "./animation";
import { ChapterNav } from "./ChapterNav";
import { ProgressBar } from "./ProgressBar";
import { SearchBar } from "./SearchBar";
import { ChapterData } from "./types";

type BiographyPageClientProps = {
  chapters: ChapterData[];
};

const ChapterSection = dynamic(() => import("./ChapterSection").then((module) => module.ChapterSection));

export function BiographyPageClient({ chapters }: BiographyPageClientProps) {
  const [activeChapter, setActiveChapter] = useState(chapters[0]?.id ?? "");
  const [searchTerm, setSearchTerm] = useState("");
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveChapter(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65],
      },
    );

    sectionRefs.current.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [chapters]);

  const matchedIds = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return new Set<string>();

    return new Set(
      chapters
        .filter((chapter) => {
          const blob = [chapter.title, chapter.subtitle, chapter.quote, ...chapter.paragraphs, ...(chapter.callouts ?? [])]
            .join(" ")
            .toLowerCase();
          return blob.includes(query);
        })
        .map((chapter) => chapter.id),
    );
  }, [chapters, searchTerm]);

  useEffect(() => {
    const query = searchTerm.trim();
    if (!query) return;

    const firstMatch = chapters.find((chapter) => matchedIds.has(chapter.id));
    if (!firstMatch) return;

    const section = sectionRefs.current.get(firstMatch.id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveChapter(firstMatch.id);
  }, [chapters, matchedIds, searchTerm]);

  const onSelect = (id: string) => {
    const section = sectionRefs.current.get(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveChapter(id);
  };

  const setRef = (id: string, element: HTMLElement | null) => {
    if (element) {
      sectionRefs.current.set(id, element);
    } else {
      sectionRefs.current.delete(id);
    }
  };

  return (
    <main className="relative pb-20">
      <ProgressBar />

      <motion.div variants={pageEntrance} initial="hidden" animate="visible" className="section-shell">
        <header className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Biography</p>
          <h1 className="mt-4 bg-gradient-to-r from-blue-200 via-violet-200 to-cyan-200 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
            Khurram Malik
          </h1>
          <p className="mt-3 text-base text-slate-300 sm:text-lg">Engineer. Architect. System Builder.</p>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-400 sm:text-base">
            A chapter-by-chapter technical journey from early curiosity to executive-level system ownership.
          </p>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <ChapterNav chapters={chapters} activeId={activeChapter} onSelect={onSelect} matchedIds={matchedIds} />

          <div className="space-y-6">
            <SearchBar value={searchTerm} onChange={setSearchTerm} resultsCount={matchedIds.size} />
            {chapters.map((chapter) => (
              <ChapterSection
                key={chapter.id}
                chapter={chapter}
                searchTerm={searchTerm}
                isActive={chapter.id === activeChapter}
                setRef={setRef}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
