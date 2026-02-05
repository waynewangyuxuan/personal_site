"use client";

import { personal, experience, education } from "@/lib/content";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <section id="about" className="section page-container">
      {/* Section label */}
      <ScrollReveal>
        <p className="section-label mb-12">About</p>
      </ScrollReveal>

      <div className="max-w-4xl">
        {/* Bio */}
        <ScrollReveal className="mb-20">
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            I build tools that help humans work effectively alongside AI.
          </p>
          <p className="text-[var(--muted)] leading-relaxed">
            Currently pursuing my MS in Computer Science at UC San Diego.
            My research focuses on AI evaluation methodology—not just building systems,
            but rigorously testing whether they actually work.
          </p>
        </ScrollReveal>

        {/* Experience */}
        <ScrollReveal className="mb-16">
          <p className="text-[var(--muted)] text-sm uppercase tracking-wider mb-8">
            Experience
          </p>
          <StaggerContainer className="space-y-8">
            {experience.map((exp) => (
              <StaggerItem key={exp.company}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8">
                  <p className="mono text-sm text-[var(--muted)]">
                    {exp.period}
                  </p>
                  <div className="md:col-span-3">
                    <h3 className="text-lg">{exp.company}</h3>
                    <p className="text-[var(--muted)] text-sm">
                      {exp.role}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal>
          <p className="text-[var(--muted)] text-sm uppercase tracking-wider mb-8">
            Education
          </p>
          <StaggerContainer className="space-y-4">
            {education.map((edu) => (
              <StaggerItem key={edu.school}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8">
                  <p className="mono text-sm text-[var(--muted)]">
                    {edu.period}
                  </p>
                  <div className="md:col-span-3">
                    <h3 className="text-lg">
                      {edu.school}
                      {edu.current && (
                        <span className="text-[var(--muted)] text-sm ml-2">
                          (current)
                        </span>
                      )}
                    </h3>
                    <p className="text-[var(--muted)] text-sm">
                      {edu.degree}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>
      </div>
    </section>
  );
}
