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
    en: "A lot of good Bilibili videos are ten minutes of someone explaining something, and the only way to find a line again is to scrub through it. Pianke turns the video into a transcript. Reading is faster than watching, and when you want to hear a line, its time stamp plays it.",
    zh: "B 站上很多讲东西的视频，看一遍要十几分钟，想回头找一句话只能拖进度条。片刻把视频转成文字稿，读比看快；读到哪句想听原话，点时间就跳回去。",
  },
  download: { en: "Download for Mac", zh: "下载 Mac 版" },
  requirements: { en: "Apple silicon · macOS 26.2 or later · Free", zh: "Apple 芯片 · macOS 26.2 或更新 · 免费" },
  howTitle: { en: "How it works", zh: "怎么用" },
  privacy: {
    en: "Transcription runs on your Mac. Only summaries and questions send text to the AI service you chose, with your own key.",
    zh: "转写在本机完成。只有摘要和提问会把文字发给你选的 AI 服务，用你自己的 key。",
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
      en: "Sign in to Bilibili, then put an API key for Claude, OpenAI or DeepSeek in Settings. The models it can use show up on their own.",
      zh: "登录 B 站，再在设置里填一个 AI 的 API key，Claude、OpenAI 或 DeepSeek 都行。填完会自动列出能用的模型。",
    },
    image: { src: "/projects/pianke-ai.jpg", alt: "Settings, AI: Claude, OpenAI and DeepSeek as icons, a key field, and the list of models", label: { en: "AI", zh: "AI" } },
  },
  {
    title: { en: "Paste a link", zh: "粘贴一个链接" },
    body: {
      en: "Press +, paste the link, and transcription starts on your own Mac. A ten-minute video takes a minute or two.",
      zh: "点 +，粘贴视频链接，转写就开始了，在你自己的 Mac 上跑。十分钟的视频一两分钟转完。",
    },
    image: { src: "/projects/pianke-add.jpg", alt: "The add form over the reader: one field with a Bilibili link in it", label: { en: "Add a video", zh: "添加视频" } },
  },
  {
    title: { en: "Read and ask", zh: "读，然后问" },
    body: {
      en: "Then read. The summary comes in sections with the key frames in the text. Ask anything next to the player; the answer cites the video, and each time stamp plays that part.",
      zh: "转完直接读。摘要按章节分，关键画面截在正文里；有疑问就在旁边问，回答带出处，点时间就回到视频那一段。",
    },
    image: { src: "/projects/pianke-watch.jpg", alt: "Watch and ask: the player and an answered question on the left, the summary on the right", label: { en: "Watch and ask", zh: "边看边问" } },
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
