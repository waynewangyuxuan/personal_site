"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import Link from "next/link";

const articles = [
  {
    slug: "grinding-wheel",
    title: {
      en: "Grinding Wheel Industry Report",
      zh: "砂轮行业报告",
    },
    description: {
      en: "A comprehensive analysis of the grinding wheel industry landscape.",
      zh: "砂轮行业全景分析报告。",
    },
    date: "2025",
  },
];

export default function WritingPage() {
  const { t, lang } = useI18n();

  return (
    <section className="min-h-screen page-container py-24">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={lang === "zh" ? { fontFamily: "var(--font-cn-display)" } : { fontFamily: "var(--font-display)" }}
      >
        {t("nav.writing")}
      </motion.h2>

      <div className="space-y-6">
        {articles.map((article, i) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/docs/${article.slug}/`}
              className="block group p-6 border border-[var(--border)] rounded-lg hover:border-[var(--foreground)] transition-colors"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3
                  className="text-lg font-medium group-hover:opacity-70 transition-opacity"
                  style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
                >
                  {article.title[lang]}
                </h3>
                <span className="mono text-xs text-[var(--muted)]">{article.date}</span>
              </div>
              <p
                className="text-sm text-[var(--muted)]"
                style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
              >
                {article.description[lang]}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
