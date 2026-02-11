"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TaylorExpansion } from "@/components/ui/TaylorExpansion";
import { SignatureDivider } from "@/components/ui/AnimatedCard";

// Publications data
const publications = [
  {
    id: "01",
    title: "Temporal Leakage in Search-Engine Date-Filtered Web Retrieval",
    venue: "arXiv",
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

// Animation tokens
const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
};

const easings = {
  smooth: [0.16, 1, 0.3, 1],
};

function PublicationCard({ paper, index, lang }: { paper: typeof publications[0]; index: number; lang: "en" | "zh" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="group flex gap-6 py-4 px-4 -mx-4 rounded-lg transition-colors duration-200 hover:bg-[var(--gray-50)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: durations.slow, delay: 0.1 * index, ease: easings.smooth }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className="mono text-3xl font-bold leading-none select-none shrink-0"
        style={{
          color: isHovered ? "var(--gray-300)" : "var(--gray-200)",
          transition: "color 0.2s ease",
        }}
      >
        {paper.id}
      </motion.span>
      <div>
        <motion.h3
          className="text-base font-medium mb-1 relative inline-block"
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: durations.fast }}
        >
          {paper.link ? (
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              {paper.title}
              <motion.span
                className="absolute bottom-0 left-0 h-[1px] bg-[var(--foreground)]"
                initial={{ width: 0 }}
                animate={{ width: isHovered ? "100%" : 0 }}
                transition={{ duration: durations.normal, ease: easings.smooth }}
              />
            </a>
          ) : (
            paper.title
          )}
        </motion.h3>
        <motion.p
          className="text-sm text-[var(--muted)] mb-1"
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: durations.fast, delay: 0.02 }}
        >
          {paper.stat}
        </motion.p>
        <motion.p
          className="mono text-xs text-[var(--gray-400)]"
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: durations.fast, delay: 0.04 }}
        >
          {paper.venue} · {paper.authors}
        </motion.p>
      </div>
    </motion.article>
  );
}

export function Research() {
  const { t, lang } = useI18n();

  return (
    <section id="research" className="section page-container">
      {/* Section label */}
      <ScrollReveal>
        <p className="section-label mb-12">{t("research.title")}</p>
      </ScrollReveal>

      {/* Main content: Left-Right Layout */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-16">
        {/* Left: Research Statement */}
        <div className="flex-1 lg:max-w-xl">
          <ScrollReveal>
            <div
              className="text-lg leading-relaxed text-[var(--foreground)] space-y-4"
              style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
            >
              {t("research.statement").split("\n\n").map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: durations.slow, delay: 0.1 * i, ease: easings.smooth }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Taylor Expansion Animation */}
        <motion.div
          className="w-full lg:w-[400px] shrink-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durations.slow, delay: 0.2 }}
        >
          <TaylorExpansion />
        </motion.div>
      </div>

      {/* Divider */}
      <SignatureDivider className="my-16" />

      {/* Papers */}
      <ScrollReveal>
        <p className="section-label mb-8">{lang === "en" ? "Papers" : "论文"}</p>

        <div className="space-y-2 max-w-2xl">
          {publications.map((paper, index) => (
            <PublicationCard key={paper.id} paper={paper} index={index} lang={lang} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
