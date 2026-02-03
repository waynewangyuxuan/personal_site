"use client";

import Link from "next/link";
import { featuredProjects } from "@/lib/content";

export function ProjectsPreview() {
  return (
    <section className="section page-container">
      {/* Section title */}
      <h2 className="text-sm text-[var(--muted)] mb-12 tracking-wide">
        SELECTED PROJECTS
      </h2>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {featuredProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block p-6 border border-[var(--border)] hover:border-[var(--foreground)] transition-all duration-200 hover:scale-[1.02]"
          >
            <h3 className="text-lg font-medium mb-2">{project.name}</h3>
            <p className="text-sm text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {project.oneLiner}
            </p>
          </Link>
        ))}
      </div>

      {/* View all link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
      >
        View all projects
        <span>→</span>
      </Link>
    </section>
  );
}
