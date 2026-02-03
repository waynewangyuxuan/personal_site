import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page-container py-24">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-12"
      >
        <span>←</span>
        All projects
      </Link>

      {/* Project header */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">{project.name}</h1>
        <p className="text-xl text-[var(--muted)] max-w-xl">{project.oneLiner}</p>
      </header>

      {/* Project details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl">
        {/* Problem */}
        <section className="md:col-span-2">
          <h2 className="text-sm text-[var(--muted)] mb-4 tracking-wide">
            PROBLEM
          </h2>
          <p className="text-lg">{project.problem}</p>
        </section>

        {/* Tech stack */}
        <section>
          <h2 className="text-sm text-[var(--muted)] mb-4 tracking-wide">
            STACK
          </h2>
          <ul className="space-y-1">
            {project.tech.map((t) => (
              <li key={t} className="mono text-sm">
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Solution */}
        <section className="md:col-span-2">
          <h2 className="text-sm text-[var(--muted)] mb-4 tracking-wide">
            SOLUTION
          </h2>
          <p className="text-lg">{project.solution}</p>
        </section>

        {/* Link */}
        <section>
          <h2 className="text-sm text-[var(--muted)] mb-4 tracking-wide">
            LINK
          </h2>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-sm link-underline"
          >
            {project.url.replace("https://", "")}
          </a>
        </section>
      </div>
    </div>
  );
}
