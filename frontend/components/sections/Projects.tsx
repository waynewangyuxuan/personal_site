"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Project data with bilingual content
const projectsData = [
  {
    slug: "inxtone",
    name: "Inxtone 砚台",
    tagline: {
      en: "AI-Native Storytelling",
      zh: "让AI学会讲故事",
    },
    description: {
      en: "Turns AI from a text generator into a story architect.",
      zh: "让 AI 从文字生成器变成故事架构师。",
    },
    tech: ["Rust", "React", "Gemini API"],
    url: "https://inxtone.com",
    previewImage: "/previews/inxtone.png",
  },
  {
    slug: "graphex",
    name: "Graphex",
    tagline: {
      en: "AI Learning Canvas",
      zh: "AI 学习画布",
    },
    description: {
      en: "transforms documents into interactive knowledge graphs for active learning",
      zh: "将文档转化为交互式知识图谱，实现主动学习",
    },
    tech: ["Python", "Multi-Agent", "Knowledge-Graph"],
    url: "https://graphex.app",
    previewImage: "/previews/graphex.png",
  },
  {
    slug: "notate",
    name: "Notate",
    tagline: {
      en: "Knowledge Layer",
      zh: "知识层",
    },
    description: {
      en: "Quick capture, never miss another idea",
      zh: "桌面速记，再也不错过任何一个想法",
    },
    tech: ["Rust", "React", "SQLite", "LanceDB"],
    url: "https://vw-ai.github.io/Notate.ai/",
    previewImage: "/previews/notate.png",
  },
  {
    slug: "vibehub",
    name: "VibeHub",
    tagline: {
      en: "Team Collaboration OS",
      zh: "团队协作系统",
    },
    description: {
      en: "Keep teams aligned when everyone moves faster",
      zh: "当每个人都更快时，让团队保持同步",
    },
    tech: ["Context Engineering", "Living Spec", "Pre-merge Sync"],
    url: "https://vibehub.icu/",
    previewImage: "/previews/vibehub.png",
  },
];

const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
};

const easings = {
  smooth: [0.16, 1, 0.3, 1],
};

interface GalleryCardProps {
  project: (typeof projectsData)[0];
  index: number;
  lang: "en" | "zh";
}

function GalleryCard({ project, index, lang }: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 rounded-2xl border border-[var(--gray-200)] bg-[var(--background)] hover:border-[var(--gray-300)] hover:bg-[var(--gray-50)] transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: durations.slow, delay: 0.1 * index, ease: easings.smooth }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Browser Preview */}
      <motion.div
        className="relative bg-[var(--gray-100)] rounded-xl overflow-hidden mb-4"
        animate={{
          y: isHovered ? -2 : 0,
        }}
        transition={{ duration: durations.normal }}
      >
        {/* Browser Title Bar */}
        <div className="flex items-center gap-2 px-3 py-2 bg-[var(--gray-200)] border-b border-[var(--gray-300)]">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff5f57] opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="w-2 h-2 rounded-full bg-[#febc2e] opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="w-2 h-2 rounded-full bg-[#28c840] opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex-1 mx-2">
            <div className="bg-[var(--background)] rounded px-2 py-0.5 text-[10px] text-[var(--muted)] mono truncate">
              {new URL(project.url).hostname}
            </div>
          </div>
        </div>

        {/* Preview Image - Grayscale by default, color on hover */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {project.previewImage ? (
            <motion.img
              src={project.previewImage}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover object-top transition-all duration-500"
              style={{
                filter: isHovered ? "grayscale(0%) brightness(1)" : "grayscale(80%) brightness(0.95)",
              }}
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={{ duration: durations.slow }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[var(--gray-100)] to-[var(--gray-200)] flex items-center justify-center">
              <span className="text-[var(--muted)] text-sm">{project.name}</span>
            </div>
          )}

          {/* Subtle hover indicator */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/20 to-transparent flex items-end justify-center pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: durations.fast }}
          >
            <motion.div
              className="text-[var(--background)] flex items-center gap-1.5 bg-[var(--foreground)]/80 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm"
              animate={{ y: isHovered ? 0 : 8, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: durations.fast, delay: 0.05 }}
            >
              View Project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Project Info */}
      <div>
        <motion.h3
          className="text-lg font-bold mb-1 text-[var(--foreground)]"
          animate={{ x: isHovered ? 2 : 0 }}
          transition={{ duration: durations.fast }}
        >
          {project.name}
        </motion.h3>
        <motion.p
          className="text-sm text-[var(--muted)] mb-3 leading-relaxed"
          style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
          animate={{ x: isHovered ? 2 : 0 }}
          transition={{ duration: durations.fast, delay: 0.02 }}
        >
          {project.description[lang]}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-1.5"
          animate={{ x: isHovered ? 2 : 0 }}
          transition={{ duration: durations.fast, delay: 0.04 }}
        >
          {project.tech.map((t) => (
            <span
              key={t}
              className="mono text-[10px] px-2 py-1 bg-[var(--foreground)] text-[var(--background)] rounded-md font-medium"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.a>
  );
}

export function Projects() {
  const { t, lang } = useI18n();

  return (
    <section id="work" className="section page-container">
      {/* Section label */}
      <ScrollReveal>
        <p className="section-label mb-12">{t("projects.title")}</p>
      </ScrollReveal>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projectsData.map((project, index) => (
          <GalleryCard
            key={project.slug}
            project={project}
            index={index}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
}
