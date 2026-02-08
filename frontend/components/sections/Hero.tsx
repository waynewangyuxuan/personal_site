"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { TimelineItem } from "@/components/ui/AnimatedCard";

const info = {
  currently: {
    en: "MS Computer Science @ UCSD",
    zh: "加州大学圣地亚哥分校 计算机科学硕士",
  },
  timeline: [
    {
      period: "Jun 2025 - Sep 2025",
      company: { en: "ByteDance", zh: "字节跳动" },
      role: { en: "Software Engineer Intern", zh: "软件工程实习" },
      description: {
        en: "Agentic data Copilot for TikTok Ads: RAG + Agent LLM stack, 1000+ MAU",
        zh: "TikTok 广告 Agentic Copilot：RAG + Agent LLM，1000+ 月活",
      },
    },
    {
      period: "Jun 2024 - May 2025",
      company: { en: "NYU Research", zh: "纽约大学研究" },
      role: { en: "Research Assistant", zh: "研究助理" },
      description: {
        en: "Graph-based retrieval pipeline (LADR) with KNN/HNSW expansion",
        zh: "基于图的检索流水线 (LADR)，KNN/HNSW 扩展",
      },
    },
    {
      period: "Jun 2023 - Aug 2023",
      company: { en: "CITIC Poly Fund", zh: "中信保诚基金" },
      role: { en: "Data Engineering Intern", zh: "数据工程实习" },
      description: {
        en: "Investment-intelligence platform: NLP pipeline + Streamlit dashboard",
        zh: "投研智能平台：NLP 流水线 + Streamlit 可视化",
      },
    },
  ],
  contact: {
    email: "w.wayne.vip@gmail.com",
    github: "https://github.com/vw-wang",
    linkedin: "https://linkedin.com/in/wayne-wang",
  },
};

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section className="min-h-screen flex flex-col justify-center page-container relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start lg:items-center">
        {/* Left: Name + Taglines + Signature */}
        <div className="lg:col-span-7">
          {/* Name */}
          <motion.h1
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={lang === "zh" ? { fontFamily: "var(--font-cn-display)" } : {}}
          >
            {t("hero.name")}
          </motion.h1>

          {/* Taglines */}
          <div className="space-y-1 mb-8">
            <motion.p
              className="text-lg md:text-xl text-[var(--muted)] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
            >
              {t("hero.line1")}
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-[var(--muted)] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
            >
              {t("hero.line2")}
            </motion.p>
          </div>

          {/* Signature */}
          <motion.p
            className="signature text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {t("hero.signature")}
          </motion.p>
        </div>

        {/* Right: Interactive Timeline */}
        <div className="lg:col-span-5">
          {/* Currently */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mono text-xs text-[var(--gray-400)] mb-2 uppercase tracking-wider">
              {lang === "en" ? "Currently" : "目前"}
            </p>
            <p
              className="text-base font-medium"
              style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
            >
              {info.currently[lang]}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mb-6">
            <p className="mono text-xs text-[var(--gray-400)] mb-3 uppercase tracking-wider">
              {lang === "en" ? "Previously" : "之前"}
            </p>
            <div>
              {info.timeline.map((item, index) => (
                <TimelineItem
                  key={item.company.en}
                  period={item.period}
                  title={item.company[lang]}
                  subtitle={item.role[lang]}
                  description={item.description[lang]}
                  index={index}
                  isLast={index === info.timeline.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="mono text-xs text-[var(--gray-400)] mb-2 uppercase tracking-wider">
              {lang === "en" ? "Contact" : "联系"}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${info.contact.email}`}
                className="text-base text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Email ↗
              </a>
              <a
                href={info.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={info.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[var(--gray-400)] text-sm"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
