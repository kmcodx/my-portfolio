"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = ["hero", "about", "skills", "experience", "projects", "philosophy", "contact"];

export function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 },
    );

    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 mx-auto w-[min(95%,980px)] rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 backdrop-blur-xl">
      <nav className="flex items-center justify-between">
        <a href="#hero" className="text-sm font-semibold tracking-wide text-white">
          Khurram Malik
        </a>
        <ul className="hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={cn(
                  "text-xs uppercase tracking-wider text-slate-400 transition-colors hover:text-white",
                  active === link && "text-cyan-300",
                )}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
