"use client";

import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard, SignatureDivider } from "@/components/ui/AnimatedCard";

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
    previewImage: "/previews/graphex.png",
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
    previewImage: "/previews/notate.png",
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
    previewImage: "/previews/vibehub.png",
  },
];

export function Projects() {
  const { t, lang } = useI18n();

  return (
    <section id="work" className="section page-container">
      {/* Section label */}
      <ScrollReveal>
        <p className="section-label mb-16">{t("projects.title")}</p>
      </ScrollReveal>

      {/* Projects as chapters with animated cards */}
      <div className="space-y-24">
        {projectsData.map((project, index) => (
          <div key={project.slug}>
            <ProjectCard
              chapter={index + 1}
              name={project.name}
              question={project.question[lang]}
              description={project.description[lang]}
              tech={project.tech}
              url={project.url}
              previewImage={project.previewImage}
              index={index}
            />
            {index < projectsData.length - 1 && (
              <SignatureDivider className="mt-16" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
