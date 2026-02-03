import Link from "next/link";
import { projects } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <div className="page-container py-24">
      {/* Page title */}
      <h1 className="text-4xl md:text-5xl font-medium mb-24">PROJECTS</h1>

      {/* Projects list */}
      <div className="space-y-16">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block border-t border-[var(--border)] pt-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              {/* Left: Name and description */}
              <div className="flex-1 max-w-xl">
                <h2 className="text-2xl font-medium mb-2 group-hover:opacity-70 transition-opacity">
                  {project.name}
                </h2>
                <p className="text-[var(--muted)]">{project.oneLiner}</p>
              </div>

              {/* Right: Arrow */}
              <span className="text-[var(--muted)] group-hover:translate-x-2 transition-transform">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
