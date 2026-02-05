"use client";

import { research } from "@/lib/content";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export function Research() {
  return (
    <section id="research" className="section page-container">
      {/* Section label */}
      <ScrollReveal>
        <p className="section-label mb-12">Research</p>
      </ScrollReveal>

      <div className="max-w-4xl">
        {/* The Question */}
        <ScrollReveal className="mb-20">
          <p className="text-[var(--muted)] text-sm uppercase tracking-wider mb-4">
            The Question
          </p>
          <h2 className="text-2xl md:text-3xl leading-tight">
            {research.question}
          </h2>
        </ScrollReveal>

        {/* Two columns: Critique and Construction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* Critique */}
          <ScrollReveal direction="left">
            <p className="text-[var(--muted)] text-sm uppercase tracking-wider mb-6">
              The Critique
            </p>
            <StaggerContainer className="space-y-8">
              {research.critique.papers.map((paper) => (
                <StaggerItem key={paper.id}>
                  <div className="flex gap-4">
                    <span className="mono text-2xl font-bold text-[var(--muted)]">
                      {paper.id}
                    </span>
                    <div>
                      <h3 className="text-lg mb-1">{paper.title}</h3>
                      <p className="text-sm text-[var(--muted)] mb-1">
                        {paper.stat}
                      </p>
                      <p className="mono text-xs text-[var(--muted)]">
                        {paper.venue} · {paper.position}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          {/* Construction */}
          <ScrollReveal direction="right" delay={0.2}>
            <p className="text-[var(--muted)] text-sm uppercase tracking-wider mb-6">
              The Construction
            </p>
            <div className="flex gap-4">
              <span className="mono text-2xl font-bold text-[var(--muted)]">
                {research.construction.project.id}
              </span>
              <div>
                <h3 className="text-lg mb-1">
                  {research.construction.project.title}
                </h3>
                <p className="text-sm text-[var(--muted)] mb-1">
                  {research.construction.project.description}
                </p>
                <p className="mono text-xs text-[var(--muted)]">
                  {research.construction.project.role} · {research.construction.project.status}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* The Insight */}
        <ScrollReveal>
          <div className="divider mb-12" />
          <p className="text-2xl md:text-3xl leading-tight">
            "{research.insight}"
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
