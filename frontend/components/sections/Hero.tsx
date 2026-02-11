"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { TimelineItem } from "@/components/ui/AnimatedCard";

const info = {
  education: [
    {
      degree: { en: "MS Computer Science", zh: "计算机科学硕士" },
      school: { en: "UC San Diego", zh: "加州大学圣地亚哥分校" },
      year: "2024 - 2026",
      note: null,
    },
    {
      degree: { en: "BS Computer Science", zh: "计算机科学学士" },
      school: { en: "NYU Tandon", zh: "纽约大学工学院" },
      year: "2021 - 2025",
      note: { en: "Summa Cum Laude", zh: "最优等毕业" },
    },
  ],
  timeline: [
    {
      period: "Jun 2025 - Sep 2025",
      company: { en: "ByteDance", zh: "字节跳动" },
      role: { en: "Software Engineer Intern", zh: "软件工程实习" },
      description: {
        en: "AI that answers 'how's my ad doing?'",
        zh: "AI 回答「我的广告跑得怎么样？」",
      },
    },
    {
      period: "Jun 2024 - May 2025",
      company: { en: "NYU Research", zh: "纽约大学研究" },
      role: { en: "Research Assistant", zh: "研究助理" },
      description: {
        en: "Taught search to follow trails, not just keywords",
        zh: "让搜索学会顺藤摸瓜，而不只是匹配关键词",
      },
    },
    {
      period: "Jun 2023 - Aug 2023",
      company: { en: "CITIC Poly Fund", zh: "中信保诚基金" },
      role: { en: "Data Engineering Intern", zh: "数据工程实习" },
      description: {
        en: "AI that reads the news so you don't have to",
        zh: "AI 帮你读新闻，你只管喝咖啡",
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
          {/* Headshot */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-[var(--gray-200)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/headshot.jpg"
                alt="Wayne Wang"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

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
          {/* Education */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mono text-xs text-[var(--gray-400)] mb-3 uppercase tracking-wider">
              {lang === "en" ? "Education" : "教育"}
            </p>
            <div className="space-y-2">
              {info.education.map((edu, i) => (
                <div key={i}>
                  <p
                    className="text-base font-medium"
                    style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
                  >
                    {edu.degree[lang]} @ {edu.school[lang]}
                    {edu.note && (
                      <span className="ml-2 text-xs text-[var(--muted)] italic">
                        {edu.note[lang]}
                      </span>
                    )}
                  </p>
                  <p className="mono text-xs text-[var(--gray-400)]">{edu.year}</p>
                </div>
              ))}
            </div>
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
                className="text-base text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Email ↗
              </a>
              <a
                href={info.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub ↗
              </a>
              <a
                href={info.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
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
