"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Lang } from "@/lib/writings";


const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export interface RenderedVariant {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  cover?: string;
  htmlContent: string;
}

export function ArticleContent({
  variants,
}: {
  variants: Partial<Record<Lang, RenderedVariant>>;
}) {
  const { lang: siteLang } = useI18n();
  const available = (Object.keys(variants) as Lang[]).filter((l) => variants[l]);
  const pickInitial = (pref: Lang): Lang =>
    variants[pref] ? pref : available[0];

  const [lang, setLang] = useState<Lang>(() => pickInitial(siteLang));

  useEffect(() => {
    setLang(pickInitial(siteLang));
  }, [siteLang]); // eslint-disable-line react-hooks/exhaustive-deps

  const variant = variants[lang];
  if (!variant) return null;

  const useCn = lang === "zh";
  const hasBoth = available.length > 1;

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
          ← {siteLang === "en" ? "Back" : "返回"}
        </Link>
      </motion.div>

      {/* Header */}
      <header className="mb-12 content-width">
        <motion.div
          className="flex items-center justify-between gap-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
        >
          <p className="mono text-xs text-[var(--gray-600)]">{variant.date}</p>
          {hasBoth && (
            <div
              className="flex items-center text-xs mono"
              role="group"
              aria-label="Language"
            >
              {(["en", "zh"] as Lang[]).map((l, i) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  disabled={!variants[l]}
                  className={cn(
                    "px-2 py-0.5 transition-colors",
                    i === 0 && "border-r border-[var(--border)]",
                    lang === l
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]",
                    !variants[l] && "opacity-40 cursor-not-allowed"
                  )}
                >
                  {l === "en" ? "EN" : "中"}
                </button>
              ))}
            </div>
          )}
        </motion.div>
        <motion.h1
          key={`title-${lang}`}
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          style={useCn ? { fontFamily: "var(--font-cn-display)" } : {}}
        >
          {variant.title}
        </motion.h1>
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25, ease }}
        >
          {variant.tags.map((tag) => (
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
      {variant.cover && (
        <motion.div
          className="mb-12 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={variant.cover}
            alt=""
            className="w-full max-h-[480px] object-cover"
          />
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        key={`body-${lang}`}
        className="prose content-width"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease }}
        style={useCn ? { fontFamily: "var(--font-cn-body)" } : {}}
        dangerouslySetInnerHTML={{ __html: variant.htmlContent }}
      />
    </article>
  );
}
