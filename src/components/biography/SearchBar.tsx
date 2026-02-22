"use client";

import { Search, X } from "lucide-react";
import { InputHTMLAttributes } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  resultsCount: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export function SearchBar({ value, onChange, resultsCount, ...props }: SearchBarProps) {
  return (
    <div className="glass gradient-border sticky top-2 z-30 rounded-2xl p-3 sm:top-4 sm:p-4">
      <label htmlFor="biography-search" className="sr-only">
        Search biography keywords
      </label>
      <div className="flex items-center gap-3">
        <Search className="h-4 w-4 text-cyan-300" aria-hidden="true" />
        <input
          id="biography-search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search journey, architecture, DevOps, leadership..."
          className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-400"
          {...props}
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="rounded-md p-1 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <p className="mt-2 text-xs text-slate-400">
        {value ? `${resultsCount} chapter${resultsCount === 1 ? "" : "s"} matched` : "Search all chapters instantly"}
      </p>
    </div>
  );
}
