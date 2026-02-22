"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-24">
      <SectionTitle eyebrow="Contact" title="Let’s build your next platform with precision." />
      <div className="glass gradient-border rounded-3xl p-6 sm:p-8">
        <form className="grid gap-4">
          <input className="rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:shadow-[0_0_24px_rgba(6,182,212,0.2)]" placeholder="Your name" />
          <input className="rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:shadow-[0_0_24px_rgba(6,182,212,0.2)]" placeholder="Your email" type="email" />
          <textarea className="min-h-32 rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:shadow-[0_0_24px_rgba(6,182,212,0.2)]" placeholder="Project brief" />
          <Button type="submit" className="w-fit">Send Message</Button>
        </form>
        <div className="mt-6 flex gap-3 text-slate-300">
          <a className="rounded-full border border-white/15 p-3 transition hover:border-cyan-300/40 hover:text-cyan-300" href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a className="rounded-full border border-white/15 p-3 transition hover:border-cyan-300/40 hover:text-cyan-300" href="#" aria-label="GitHub"><Github size={18} /></a>
          <a className="rounded-full border border-white/15 p-3 transition hover:border-cyan-300/40 hover:text-cyan-300" href="mailto:khurram@example.com" aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>
    </section>
  );
}
