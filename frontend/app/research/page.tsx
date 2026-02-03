import { research } from "@/lib/content";

export default function ResearchPage() {
  return (
    <div className="page-container py-24">
      {/* Page title */}
      <h1 className="text-4xl md:text-5xl font-medium mb-24">RESEARCH</h1>

      {/* The Question */}
      <section className="mb-24 border-t border-[var(--border)] pt-12">
        <h2 className="text-sm text-[var(--muted)] mb-6 tracking-wide">
          THE QUESTION
        </h2>
        <p className="text-2xl md:text-3xl font-medium max-w-2xl leading-tight">
          {research.question}
        </p>
      </section>

      {/* The Critique */}
      <section className="mb-24 border-t border-[var(--border)] pt-12">
        <div className="flex items-baseline gap-4 mb-6">
          <h2 className="text-sm text-[var(--muted)] tracking-wide">
            THE CRITIQUE
          </h2>
          <span className="mono text-sm text-[var(--muted)]">
            ({research.critique.year})
          </span>
        </div>

        <p className="text-lg text-[var(--muted)] mb-12 max-w-xl">
          {research.critique.intro}
        </p>

        <div className="space-y-12">
          {research.critique.papers.map((paper) => (
            <div key={paper.id} className="max-w-2xl">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="mono text-2xl font-medium">{paper.id}</span>
                <h3 className="text-xl font-medium">{paper.title}</h3>
              </div>
              <p className="text-[var(--muted)] mb-2 pl-12">{paper.stat}</p>
              <p className="mono text-sm text-[var(--muted)] pl-12">
                {paper.venue} · {paper.position}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Construction */}
      <section className="mb-24 border-t border-[var(--border)] pt-12">
        <div className="flex items-baseline gap-4 mb-6">
          <h2 className="text-sm text-[var(--muted)] tracking-wide">
            THE CONSTRUCTION
          </h2>
          <span className="mono text-sm text-[var(--muted)]">
            ({research.construction.year})
          </span>
        </div>

        <p className="text-lg text-[var(--muted)] mb-12 max-w-xl">
          {research.construction.intro}
        </p>

        <div className="max-w-2xl">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="mono text-2xl font-medium">
              {research.construction.project.id}
            </span>
            <h3 className="text-xl font-medium">
              {research.construction.project.title}
            </h3>
          </div>
          <p className="text-[var(--muted)] mb-1 pl-12">
            {research.construction.project.description}
          </p>
          <p className="text-[var(--muted)] mb-2 pl-12">
            {research.construction.project.detail}
          </p>
          <p className="mono text-sm text-[var(--muted)] pl-12">
            {research.construction.project.role} · {research.construction.project.status}
          </p>
        </div>
      </section>

      {/* The Insight */}
      <section className="border-t border-[var(--border)] pt-12">
        <h2 className="text-sm text-[var(--muted)] mb-6 tracking-wide">
          THE INSIGHT
        </h2>
        <p className="text-2xl md:text-3xl font-medium max-w-2xl leading-tight">
          "{research.insight}"
        </p>
      </section>
    </div>
  );
}
