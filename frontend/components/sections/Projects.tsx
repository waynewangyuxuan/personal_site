"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type Lang = "en" | "zh";

interface ProjectImage {
  src: string;
  alt: string;
  label: Record<Lang, string>;
}

interface Project {
  slug: string;
  name: string;
  line: Record<Lang, string>;
  url: string;
  place: string;
  images?: ProjectImage[];
}

const projectsData: Project[] = [
  {
    slug: "peel",
    name: "Peel",
    line: {
      en: "Peel a thought off the current Codex conversation.",
      zh: "从当前的 Codex 对话里，剥下一支想法。",
    },
    url: "https://github.com/waynewangyuxuan/Peel",
    place: "GitHub",
    images: [
      {
        src: "/projects/peel-overview.png",
        alt: "Peel Overview, the branches of one conversation",
        label: { en: "Overview · the branches", zh: "Overview · 分支" },
      },
      {
        src: "/projects/peel-focus.png",
        alt: "Peel Focus, the current Codex conversation",
        label: { en: "Focus · the conversation", zh: "Focus · 对话" },
      },
    ],
  },
  {
    slug: "nomi",
    name: "Nomi",
    line: {
      en: "Capture anything, at any time.",
      zh: "随时捕捉任何东西。",
    },
    url: "https://getnomi.net",
    place: "getnomi.net",
    images: [
      {
        src: "/projects/nomi.png",
        alt: "Nomi window with quick capture, the next event, and a running agent",
        label: { en: "Nomi", zh: "Nomi" },
      },
    ],
  },
  {
    slug: "vibehub",
    name: "VibeHub",
    line: {
      en: "Keep teams aligned when everyone moves faster.",
      zh: "当每个人都更快时，让团队保持同步。",
    },
    url: "https://vibehub.team",
    place: "vibehub.team",
    images: [
      {
        src: "/projects/vibehub.png",
        alt: "VibeHub Ticket Workbench, a graph of tickets and the one that is ready",
        label: { en: "VibeHub", zh: "VibeHub" },
      },
    ],
  },
  {
    slug: "where2meet",
    name: "Where2Meet",
    line: {
      en: "Meet in the middle — fair by travel time.",
      zh: "在正中间见面——按路程时间公平选点。",
    },
    url: "https://www.where2meet.org/",
    place: "where2meet.org",
    images: [
      {
        src: "/projects/where2meet.png",
        alt: "Where2Meet landing, meeting form beside a fair travel-time diagram",
        label: { en: "Where2Meet", zh: "Where2Meet" },
      },
    ],
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function ProjectImages({ images, lang }: { images: ProjectImage[]; lang: Lang }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const image = images[active];

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="mt-6">
      {images.length > 1 && (
        <div className="flex flex-wrap gap-x-5 gap-y-1 mb-3">
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              className={cn(
                "text-sm transition-colors",
                index === active
                  ? "text-[var(--foreground)] underline underline-offset-4 decoration-1"
                  : "text-[var(--gray-600)] hover:text-[var(--foreground)]"
              )}
              style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
            >
              {item.label[lang]}
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group block w-full cursor-zoom-in rounded-xl border border-[var(--gray-300)] bg-[var(--paper)] p-3 md:p-4"
        aria-label={lang === "en" ? `Enlarge ${image.label.en}` : `放大${image.label.zh}`}
      >
        <span className="relative block overflow-hidden rounded-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            className="relative z-0 block w-full"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 bg-[var(--ink)] opacity-[0.14] transition-opacity duration-300 ease-out group-hover:opacity-0"
          />
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-12"
          style={{ backgroundColor: "var(--paper)" }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={image.label[lang]}
        >
          <div className="max-h-full max-w-full overflow-hidden rounded-xl border border-[var(--gray-300)] bg-[var(--paper)] p-3 md:p-4 cursor-zoom-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              className="block max-h-[calc(100vh-6rem)] max-w-full rounded-md md:max-h-[calc(100vh-8rem)]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const { t, lang } = useI18n();

  return (
    <section id="work" className="section page-container">
      <ScrollReveal>
        <p className="section-label mb-12">{t("projects.title")}</p>
      </ScrollReveal>

      <div className="max-w-[var(--content-max-width)]">
        {projectsData.map((project, index) => (
          <motion.article
            key={project.slug}
            className="py-8 border-t border-[var(--border)] last:border-b"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05 * index, ease }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex items-baseline justify-between gap-6 mb-2">
                <h3 className="text-2xl font-medium tracking-tight group-hover:opacity-70 transition-opacity">
                  {project.name}
                </h3>
                <span className="mono text-xs text-[var(--gray-600)] shrink-0">
                  {project.place} ↗
                </span>
              </div>
              <p
                className="text-base text-[var(--muted)] leading-relaxed max-w-xl"
                style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
              >
                {project.line[lang]}
              </p>
            </a>
            {project.images && <ProjectImages images={project.images} lang={lang} />}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
