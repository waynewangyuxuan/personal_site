"use client";

import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TaylorExpansion } from "@/components/ui/TaylorExpansion";

// Publications data
const publications = [
  {
    id: "01",
    title: "Temporal Leakage in Search-Engine Date-Filtered Web Retrieval",
    venue: "ACL 2026",
    authors: "4th author",
    stat: "71% of date-filtered queries return post-cutoff data",
    link: null,
  },
  {
    id: "02",
    title: "Simulated Ignorance Fails",
    venue: "arXiv",
    authors: "2nd author",
    stat: "52% performance gap when simulating ignorance",
    link: "https://arxiv.org/abs/2601.13717",
  },
];

const currentWork = {
  title: "Systemic World Models",
  description: {
    en: "Structured forecasting with Threads, Timelines, Causes",
    zh: "结构化预测：线程、时间线、因果",
  },
  status: {
    en: "In Progress",
    zh: "进行中",
  },
};

export function Research() {
  const { t, lang } = useI18n();

  return (
    <section id="research" className="section page-container">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <p className="section-label mb-12">{t("research.title")}</p>
        </ScrollReveal>

        {/* Research Statement */}
        <ScrollReveal>
          <div
            className="text-lg leading-relaxed text-[var(--foreground)] mb-16 space-y-4"
            style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
          >
            {t("research.statement").split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        {/* Taylor Expansion Animation */}
        <ScrollReveal>
          <TaylorExpansion />
        </ScrollReveal>

        {/* Divider */}
        <div className="divider-signature my-16">
          <span>·</span>
        </div>

        {/* Publications */}
        <ScrollReveal>
          <p className="section-label mb-8">{t("research.publications")}</p>

          <div className="space-y-8">
            {publications.map((paper) => (
              <article key={paper.id} className="flex gap-6">
                <span className="mono text-2xl font-bold text-[var(--gray-300)] shrink-0">
                  {paper.id}
                </span>
                <div>
                  <h3 className="text-base font-medium mb-1">
                    {paper.link ? (
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                      >
                        {paper.title}
                      </a>
                    ) : (
                      paper.title
                    )}
                  </h3>
                  <p className="text-sm text-[var(--muted)] mb-1">
                    {paper.stat}
                  </p>
                  <p className="mono text-xs text-[var(--gray-400)]">
                    {paper.venue} · {paper.authors}
                  </p>
                </div>
              </article>
            ))}

            {/* Current Work */}
            <article className="flex gap-6">
              <span className="mono text-2xl font-bold text-[var(--gray-300)] shrink-0">
                03
              </span>
              <div>
                <h3 className="text-base font-medium mb-1">{currentWork.title}</h3>
                <p
                  className="text-sm text-[var(--muted)] mb-1"
                  style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
                >
                  {currentWork.description[lang]}
                </p>
                <p className="mono text-xs text-[var(--gray-400)]">
                  UCSD · {currentWork.status[lang]}
                </p>
              </div>
            </article>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
