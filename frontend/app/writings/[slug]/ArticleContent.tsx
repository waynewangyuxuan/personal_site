"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import type { WritingFrontmatter } from "@/lib/writings";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function ArticleContent({
  frontmatter,
  htmlContent,
}: {
  frontmatter: WritingFrontmatter;
  htmlContent: string;
}) {
  const { lang } = useI18n();
  const title =
    lang === "zh" && frontmatter.title_zh
      ? frontmatter.title_zh
      : frontmatter.title;

  return (
    <article className="page-container py-24">
      {/* Back link */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease }}
      >
        <Link
          href="/writings/"
          className="mono text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          ← {lang === "en" ? "Back" : "返回"}
        </Link>
      </motion.div>

      {/* Header */}
      <header className="mb-12 content-width">
        <motion.p
          className="mono text-xs text-[var(--gray-400)] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
        >
          {frontmatter.date}
        </motion.p>
        <motion.h1
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          style={
            lang === "zh" ? { fontFamily: "var(--font-cn-display)" } : {}
          }
        >
          {title}
        </motion.h1>
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25, ease }}
        >
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="mono text-xs px-3 py-1 border border-[var(--gray-200)] text-[var(--muted)] rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </header>

      {/* Cover */}
      {frontmatter.cover && (
        <motion.div
          className="mb-12 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={frontmatter.cover}
            alt=""
            className="w-full max-h-[480px] object-cover"
          />
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        className="prose content-width"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
}
