import { personal, experience, education } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="page-container py-24">
      {/* Page title */}
      <h1 className="text-4xl md:text-5xl font-medium mb-24">ABOUT</h1>

      {/* Bio */}
      <section className="mb-24 max-w-2xl">
        <p className="text-xl leading-relaxed mb-6">
          I'm {personal.name}, currently pursuing my MS in Computer Science at UC San Diego.
        </p>
        <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
          My work sits at the intersection of AI systems and human collaboration.
          I research how to evaluate AI reliably, then build tools that help humans
          work effectively alongside it.
        </p>
        <p className="text-lg text-[var(--muted)] leading-relaxed">
          I believe AI produces faster than humans can process. My job is to build
          the bridges.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-24 border-t border-[var(--border)] pt-12">
        <h2 className="text-sm text-[var(--muted)] mb-12 tracking-wide">
          EXPERIENCE
        </h2>

        <div className="space-y-12">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              {/* Period */}
              <div className="mono text-sm text-[var(--muted)]">
                {exp.period}
              </div>

              {/* Details */}
              <div className="md:col-span-3">
                <h3 className="text-lg font-medium mb-1">{exp.company}</h3>
                <p className="text-[var(--muted)] mb-2">{exp.role}</p>
                <p className="text-sm text-[var(--muted)]">
                  {exp.highlights.join(" · ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-[var(--border)] pt-12">
        <h2 className="text-sm text-[var(--muted)] mb-12 tracking-wide">
          EDUCATION
        </h2>

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              {/* Period */}
              <div className="mono text-sm text-[var(--muted)]">
                {edu.period}
              </div>

              {/* Details */}
              <div className="md:col-span-3">
                <h3 className="text-lg font-medium mb-1">
                  {edu.school}
                  {edu.current && (
                    <span className="ml-2 text-sm text-[var(--muted)]">
                      (current)
                    </span>
                  )}
                </h3>
                <p className="text-[var(--muted)]">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
