"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectImages, type ProjectImage } from "@/components/sections/Projects";

type Lang = "en" | "zh";
type Text = Record<Lang, string>;

// Always the newest release; scripts/release in the 片刻 repository keeps this name current.
const DOWNLOAD_URL = "https://download.waynewangyuxuan.com/pianke/Pianke.dmg";

const copy = {
  back: { en: "Projects", zh: "项目" },
  name: { en: "Pianke 片刻", zh: "片刻" },
  idea: {
    en: "A good Bilibili video keeps its ideas locked in speech: you watch it start to finish, and finding one line again is hard. Pianke turns it into text you can read in minutes and question as you go, and every line takes you back to its moment in the video.",
    zh: "B 站上的好视频，内容都锁在声音里：只能从头看到尾，想回头找一句话也难。片刻把它变成文字，几分钟读完，边读边问，每一句都能点回视频里的那一刻。",
  },
  download: { en: "Download for Mac", zh: "下载 Mac 版" },
  requirements: { en: "Apple silicon · macOS 26.2 or later · Free", zh: "Apple 芯片 · macOS 26.2 或更新 · 免费" },
  howTitle: { en: "How it works", zh: "怎么用" },
  privacy: {
    en: "Transcription runs on your Mac. Only summaries and questions send text to the AI service you chose, with your own key.",
    zh: "转写在你的 Mac 上完成。只有摘要和提问会把文字发给你选的 AI 服务，用的是你自己的 key。",
  },
} satisfies Record<string, Text>;

const hero: ProjectImage[] = [
  { src: "/projects/pianke-read.jpg", alt: "Pianke reading a video as a summary in sections, with key frames in the text", label: { en: "Read", zh: "阅读" } },
];

// A wide step shows its picture across the full column; the others sit beside their text.
const steps: { title: Text; body: Text; image: ProjectImage; wide?: boolean }[] = [
  {
    title: { en: "Set up once", zh: "准备一次" },
    body: {
      en: "Sign in to Bilibili from the menu bar, then add your API key for Claude, OpenAI or DeepSeek in Settings → AI services.",
      zh: "在菜单栏登录哔哩哔哩，再到「设置 → AI 服务」填上你的 API key：Claude、OpenAI 或 DeepSeek 都行。",
    },
    image: { src: "/projects/pianke-ai.jpg", alt: "Settings, AI services: choose Claude, OpenAI or DeepSeek and a model", label: { en: "AI services", zh: "AI 服务" } },
  },
  {
    title: { en: "Paste a link", zh: "粘贴一个链接" },
    body: {
      en: "Copy a Bilibili video link and paste it into Add video. That is the whole input; Pianke turns it into text on your Mac.",
      zh: "复制一个 B 站视频链接，粘贴进「添加视频」。输入就这么多，片刻会在你的 Mac 上把它变成文字。",
    },
    image: { src: "/projects/pianke-add.jpg", alt: "Add video, with a Bilibili link pasted in", label: { en: "Add video", zh: "添加视频" } },
  },
  {
    title: { en: "Read and ask", zh: "读，然后问" },
    body: {
      en: "Read the summary in sections, or ask while you watch. Answers cite the video, and every time stamp plays that moment.",
      zh: "读分章节的精读摘要，或者边看边问。回答都标着出处，点时间就播放那一刻。",
    },
    image: { src: "/projects/pianke-watch.jpg", alt: "Watch and ask: a question answered beside the player", label: { en: "Watch and ask", zh: "边看边问" } },
    wide: true,
  },
];

export function Pianke() {
  const { lang } = useI18n();
  const body = lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {};

  return (
    <section className="section page-container" style={body}>
      <div className="max-w-[var(--content-max-width)]">
        <ScrollReveal>
          <Link href="/projects/" className="mono text-xs text-[var(--gray-600)] hover:text-[var(--foreground)] transition-colors">
            ← {copy.back[lang]}
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 flex items-center gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/pianke-icon.png" alt="" width={64} height={64} className="rounded-[14px]" />
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">{copy.name[lang]}</h1>
          </div>
          <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed max-w-2xl">{copy.idea[lang]}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={DOWNLOAD_URL}
              className="inline-flex items-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--paper)] transition-opacity hover:opacity-80"
            >
              {copy.download[lang]} ↓
            </a>
            <span className="mono text-xs text-[var(--gray-600)]">{copy.requirements[lang]}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10">
            <ProjectImages images={hero} lang={lang} />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="section-label mt-24 mb-10">{copy.howTitle[lang]}</p>
        </ScrollReveal>
        <ol className="space-y-16">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title.en}>
              <li className={step.wide ? "" : "grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center md:gap-10"}>
                <div className={step.wide ? "max-w-xl" : ""}>
                  <span className="mono text-xs text-[var(--gray-600)]">0{index + 1}</span>
                  <h2 className="mt-2 text-2xl font-medium tracking-tight">{step.title[lang]}</h2>
                  <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">{step.body[lang]}</p>
                </div>
                <div className={step.wide ? "" : "-mt-6"}>
                  <ProjectImages images={[step.image]} lang={lang} />
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ol>

        <ScrollReveal>
          <p className="mt-20 text-sm text-[var(--gray-600)] leading-relaxed max-w-2xl">{copy.privacy[lang]}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
