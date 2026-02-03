"use client";

import Link from "next/link";
import { research } from "@/lib/content";

export function ResearchTeaser() {
  return (
    <section className="section page-container border-t border-[var(--border)]">
      {/* Section title */}
      <h2 className="text-sm text-[var(--muted)] mb-12 tracking-wide">
        RESEARCH
      </h2>

      {/* Teaser quote */}
      <p className="text-2xl md:text-3xl font-medium mb-12 max-w-2xl leading-tight">
        "{research.teaser}"
      </p>

      {/* Research items */}
      <div className="space-y-4 mb-8">
        {/* Critique papers */}
        {research.critique.papers.map((paper) => (
          <div key={paper.id} className="flex items-baseline gap-4">
            <span className="mono text-sm text-[var(--muted)]">
              {paper.venue}
            </span>
            <span className="text-sm">{paper.title}</span>
          </div>
        ))}

        {/* Construction project */}
        <div className="flex items-baseline gap-4">
          <span className="mono text-sm text-[var(--muted)]">Active</span>
          <span className="text-sm">{research.construction.project.title}</span>
        </div>
      </div>

      {/* Read more link */}
      <Link
        href="/research"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
      >
        Read more
        <span>→</span>
      </Link>
    </section>
  );
}
