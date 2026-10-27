"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectImages, type ProjectImage } from "@/components/sections/Projects";

type Lang = "en" | "zh";
type Text = Record<Lang, string>;

// Always the newest release; scripts/release in the 片刻 repository keeps this name current.
const DOWNLOAD_URL = "https://download.waynewangyuxuan.com/pianke/Pianke.dmg";

const images: ProjectImage[] = [
  {
    src: "/projects/pianke-read.jpg",
    alt: "Reading: a close-reading summary with key frames in the text",
    label: { en: "Read", zh: "阅读" },
  },
  {
    src: "/projects/pianke-watch.jpg",
    alt: "Watch and ask: the player on the left, the text on the right",
    label: { en: "Watch and ask", zh: "边看边问" },
  },
];

const copy = {
  back: { en: "Projects", zh: "项目" },
  name: { en: "Pianke 片刻", zh: "片刻" },
  tagline: {
    en: "Turn Bilibili videos into text you can read, question and play back. Transcription runs on your own Mac.",
    zh: "把 B 站视频变成能读、能问、能回看的文字。转写在你自己的 Mac 上完成。",
  },
  download: { en: "Download for Mac", zh: "下载 Mac 版" },
  requirements: { en: "Apple silicon · macOS 26.2 or later · Free", zh: "Apple 芯片 · macOS 26.2 或更新 · 免费" },
  featuresTitle: { en: "What it does", zh: "片刻能做什么" },
  startTitle: { en: "Getting started", zh: "怎么开始" },
  dataTitle: { en: "Where your data goes", zh: "你的数据在哪里" },
  notesTitle: { en: "Good to know", zh: "需要知道的" },
} satisfies Record<string, Text>;

const features: { title: Text; body: Text }[] = [
  {
    title: { en: "Close-reading summary", zh: "精读摘要" },
    body: {
      en: "Each video becomes notes in sections. Every claim carries the time of the words it rests on; click it to see the quote and play from there.",
      zh: "把一期视频整理成分章节的笔记。每句结论都标着原话的时间点，点一下就能看到原话、从那里播放。",
    },
  },
  {
    title: { en: "Watch and ask", zh: "边看边问" },
    body: {
      en: "Ask while you watch. Answers draw only on what this video says, with the sources attached.",
      zh: "边看边提问。回答只依据这期视频说过的话，并附上出处。",
    },
  },
  {
    title: { en: "Key frames", zh: "关键画面" },
    body: {
      en: "Slides, charts and screen demos are picked out and placed in the text. Click a frame to play the moment around it.",
      zh: "自动挑出幻灯片、图表、界面演示这类画面，放进文字里。点一下画面，就播放那一刻前后的片段。",
    },
  },
  {
    title: { en: "Local transcription", zh: "本地转写" },
    body: {
      en: "Speech becomes timed text on your Mac. It tells speakers apart and can fix misheard words from context.",
      zh: "声音在你的 Mac 上转成带时间的文字，能区分不同的说话人，也能根据上下文校对错字。",
    },
  },
];

const steps: Text[] = [
  {
    en: "Download Pianke, open the disk image and drag Pianke into Applications.",
    zh: "下载片刻，打开磁盘映像，把片刻拖进「应用程序」。",
  },
  {
    en: "The first time it opens, pick a speech recognition model and download it once: Standard (about 481 MB) or Light (about 144 MB).",
    zh: "第一次打开时，选一个语音识别模型下载一次：「标准」约 481 MB，「轻量」约 144 MB。",
  },
  {
    en: "Click Add video and paste a Bilibili link. BV ids, av ids and b23.tv short links all work.",
    zh: "点「添加视频」，粘贴 B 站链接。BV 号、av 号、b23.tv 短链接都可以。",
  },
  {
    en: "Optional: for summaries and questions, connect Claude, OpenAI or DeepSeek with your own API key in Settings → AI services.",
    zh: "可选：要用精读摘要和提问，在「设置 → AI 服务」里连接 Claude、OpenAI 或 DeepSeek，填入你自己的 API key。",
  },
];

const data: Text[] = [
  {
    en: "Audio is transcribed on your Mac and never uploaded. Pianke keeps no video files.",
    zh: "视频的声音在你的 Mac 上转写，不会上传。片刻不保存视频文件。",
  },
  {
    en: "Only summaries and questions send the transcript text and chosen frames to the AI service you chose, under your own key.",
    zh: "只有用精读摘要和提问时，文稿文字和挑出的画面才会发给你选的 AI 服务，使用你自己的 key。",
  },
  {
    en: "Your API key stays in the macOS keychain; the interface shows only its last four characters.",
    zh: "API key 保存在 macOS 钥匙串里，界面上只显示最后四位。",
  },
  {
    en: "Your Bilibili sign-in stays on this Mac and only Pianke can read it.",
    zh: "B 站登录只保存在这台 Mac 上，只有片刻能读取。",
  },
];

const notes: Text[] = [
  {
    en: "Pianke is signed and notarized by Apple, and keeps itself up to date: it checks for a new version once a day, or whenever you choose Check for Updates.",
    zh: "片刻经过 Apple 签名和公证，会自己保持最新：每天检查一次新版本，也可以随时点「检查更新…」。",
  },
  {
    en: "Summaries and questions use your own API key; the service you chose charges by usage.",
    zh: "精读摘要和提问使用你自己的 API key，费用由所选服务按用量收取。",
  },
  {
    en: "Automatic transcription makes mistakes, especially with names and terms. Every quote links back to the original words.",
    zh: "自动转写会有错字，专有名词尤其容易出错。所有引用都能点回原话核对。",
  },
];

function List({ items, lang, ordered }: { items: Text[]; lang: Lang; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`space-y-3 pl-5 text-base text-[var(--muted)] leading-relaxed ${ordered ? "list-decimal" : "list-disc"}`}>
      {items.map((item) => (
        <li key={item.en}>{item[lang]}</li>
      ))}
    </Tag>
  );
}

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
          <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed max-w-xl">{copy.tagline[lang]}</p>
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
          <div className="mt-12">
            <ProjectImages images={images} lang={lang} />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="section-label mt-20 mb-8">{copy.featuresTitle[lang]}</p>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title.en}>
                <h2 className="text-lg font-medium mb-2">{feature.title[lang]}</h2>
                <p className="text-base text-[var(--muted)] leading-relaxed">{feature.body[lang]}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="section-label mt-20 mb-8">{copy.startTitle[lang]}</p>
          <List items={steps} lang={lang} ordered />
        </ScrollReveal>

        <ScrollReveal>
          <p className="section-label mt-20 mb-8">{copy.dataTitle[lang]}</p>
          <List items={data} lang={lang} />
        </ScrollReveal>

        <ScrollReveal>
          <p className="section-label mt-20 mb-8">{copy.notesTitle[lang]}</p>
          <List items={notes} lang={lang} />
        </ScrollReveal>
      </div>
    </section>
  );
}
