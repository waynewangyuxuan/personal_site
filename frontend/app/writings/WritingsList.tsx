"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import type { WritingMeta } from "@/lib/writings";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function WritingsList({ writings }: { writings: WritingMeta[] }) {
  const { lang } = useI18n();

  return (
    <section className="page-container py-24">
      <motion.h1
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        style={lang === "zh" ? { fontFamily: "var(--font-cn-display)" } : {}}
      >
        {lang === "en" ? "Writings" : "思考"}
      </motion.h1>

      {writings.length === 0 ? (
        <motion.p
          className="text-[var(--muted)] text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {lang === "en" ? "Nothing here yet." : "暂无内容。"}
        </motion.p>
      ) : (
        <div className="space-y-12">
          {writings.map((w, i) => {
            const title =
              lang === "zh" && w.title_zh ? w.title_zh : w.title;
            const summary =
              lang === "zh" && w.summary_zh ? w.summary_zh : w.summary;

            return (
              <motion.article
                key={w.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease }}
              >
                <Link
                  href={`/writings/${w.slug}/`}
                  className="group block"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Cover image */}
                    {w.cover && (
                      <div className="w-full md:w-64 shrink-0 aspect-[16/10] overflow-hidden rounded-lg bg-[var(--gray-100)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={w.cover}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="mono text-xs text-[var(--gray-600)] mb-2">
                        {w.date}
                      </p>
                      <h2
                        className="text-xl md:text-2xl font-bold mb-2 group-hover:opacity-70 transition-opacity"
                        style={
                          lang === "zh"
                            ? { fontFamily: "var(--font-cn-display)" }
                            : {}
                        }
                      >
                        {title}
                      </h2>
                      <p
                        className="text-[var(--muted)] mb-3 leading-relaxed line-clamp-2"
                        style={
                          lang === "zh"
                            ? { fontFamily: "var(--font-cn-body)" }
                            : {}
                        }
                      >
                        {summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {w.tags.map((tag) => (
                          <span
                            key={tag}
                            className="mono text-xs px-3 py-1 border border-[var(--gray-200)] text-[var(--muted)] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      )}
    </section>
  );
}
