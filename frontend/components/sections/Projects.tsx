"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Project data with bilingual content
const projectsData = [
  {
    slug: "graphex",
    name: "Graphex",
    question: {
      en: "AI gives you a thousand answers. How many do you remember?",
      zh: "AI 给你一千个答案，你记住了几个？",
    },
    description: {
      en: "AI Learning Canvas — Turn AI conversations into explorable knowledge graphs",
      zh: "AI 学习画布 — 把 AI 对话变成可探索的知识图谱",
    },
    tech: ["React", "Canvas API", "Claude API"],
    url: "https://graphex.app",
  },
  {
    slug: "notate",
    name: "Notate",
    question: {
      en: "AI captures faster than you can organize. Then what?",
      zh: "AI 捕获的速度超过你整理的速度，然后呢？",
    },
    description: {
      en: "Knowledge Layer — Automatic capture, human-friendly retrieval",
      zh: "知识层 — 自动捕获，人性化检索",
    },
    tech: ["React", "TypeScript", "Vector DB"],
    url: "https://vw-ai.github.io/Notate.ai/",
  },
  {
    slug: "vibehub",
    name: "VibeHub",
    question: {
      en: "AI makes you 26% faster. Why is your team slower?",
      zh: "AI 让你快 26%，为什么团队反而慢了？",
    },
    description: {
      en: "Team Collaboration OS — Keep teams aligned when everyone moves faster",
      zh: "团队协作系统 — 当每个人都更快时，让团队保持同步",
    },
    tech: ["Next.js", "Real-time sync"],
    url: "https://vibehub.icu/",
  },
];

function ChapterDivider() {
  return (
    <div className="divider-signature my-16">
      <span>·</span>
    </div>
  );
}

interface ProjectChapterProps {
  project: (typeof projectsData)[0];
  index: number;
}

function ProjectChapter({ project, index }: ProjectChapterProps) {
  const { lang } = useI18n();
  const chapterNum = String(index + 1).padStart(2, "0");

  return (
    <ScrollReveal>
      <article className="max-w-2xl">
        {/* Chapter label */}
        <p className="chapter-label mb-4">Chapter {chapterNum}</p>

        {/* Project name */}
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.name}</h3>

        {/* Question */}
        <p className="question mb-6">
          &ldquo;{project.question[lang]}&rdquo;
        </p>

        {/* Description */}
        <p
          className="text-[var(--foreground)] mb-4 leading-relaxed"
          style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
        >
          {project.description[lang]}
        </p>

        {/* Tech stack */}
        <p className="mono text-sm text-[var(--muted)] mb-6">
          {project.tech.join(" · ")}
        </p>

        {/* Link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow"
        >
          <span>View Project</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </article>
    </ScrollReveal>
  );
}

export function Projects() {
  const { t } = useI18n();

  return (
    <section id="work" className="section page-container">
      {/* Section label */}
      <ScrollReveal>
        <p className="section-label mb-16">{t("projects.title")}</p>
      </ScrollReveal>

      {/* Projects as chapters */}
      <div className="space-y-0">
        {projectsData.map((project, index) => (
          <div key={project.slug}>
            <ProjectChapter project={project} index={index} />
            {index < projectsData.length - 1 && <ChapterDivider />}
          </div>
        ))}
      </div>
    </section>
  );
}
