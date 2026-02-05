"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "zh";

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.research": "Research",
    "nav.work": "Work",
    "nav.about": "About",

    // Hero
    "hero.name": "Wayne Wang",
    "hero.line1": "Building systems that think.",
    "hero.line2": "Questioning systems that predict.",
    "hero.signature": "Living between grief and nothing",

    // Projects
    "projects.title": "Work",
    "projects.viewProject": "View Project",

    // Research
    "research.title": "Research",
    "research.statement": `My research asks: how do we move LLMs beyond pattern matching toward genuine understanding?

I think of it like Taylor expansion. Prompt engineering gives us first-order approximation—linear workflows. RL and fine-tuning add second-order terms—reasoning chains. But true creativity lives in higher-order terms.

My work focuses on mental models—structured ways of understanding that could give LLMs higher-order capabilities. Current focus: agentic deep research. End goal: machines that genuinely predict, not recall.`,
    "research.publications": "Publications",
    "research.inProgress": "In Progress",

    // About
    "about.title": "About",
    "about.currently": "Currently",
    "about.previously": "Previously",
    "about.education": "Education",
    "about.connect": "Connect",

    // Footer
    "footer.signature": "Living between grief and nothing",

    // Taylor Animation
    "taylor.title": "Approximating Intelligence",
    "taylor.firstOrder": "1st Order",
    "taylor.secondOrder": "2nd Order",
    "taylor.higherOrder": "Higher Order",
    "taylor.promptEng": "Prompt Engineering",
    "taylor.rlReasoning": "RL / Reasoning",
    "taylor.mentalModels": "Mental Models",
  },
  zh: {
    // Navigation
    "nav.research": "研究",
    "nav.work": "作品",
    "nav.about": "关于",

    // Hero
    "hero.name": "王宇轩",
    "hero.line1": "构建会思考的系统",
    "hero.line2": "质疑会预测的系统",
    "hero.signature": "Living between grief and nothing",

    // Projects
    "projects.title": "作品",
    "projects.viewProject": "查看项目",

    // Research
    "research.title": "研究",
    "research.statement": `我的研究问的是：如何让 LLM 超越模式匹配，走向真正的理解？

我把它类比为 Taylor 展开。Prompt engineering 是一阶近似——线性工作流。RL 和 fine-tuning 加上二阶项——推理链。但真正的创造力在更高阶。

我研究 mental models——结构化的认知方式，可能赋予 LLM 高阶能力。当前聚焦：agentic deep research。终极目标：真正能预测的机器，而非回忆。`,
    "research.publications": "发表论文",
    "research.inProgress": "进行中",

    // About
    "about.title": "关于",
    "about.currently": "目前",
    "about.previously": "之前",
    "about.education": "教育",
    "about.connect": "联系",

    // Footer
    "footer.signature": "Living between grief and nothing",

    // Taylor Animation
    "taylor.title": "逼近智能",
    "taylor.firstOrder": "一阶",
    "taylor.secondOrder": "二阶",
    "taylor.higherOrder": "高阶",
    "taylor.promptEng": "Prompt Engineering",
    "taylor.rlReasoning": "RL / 推理",
    "taylor.mentalModels": "Mental Models",
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "zh" : "en")}
      className="text-sm font-mono text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
      aria-label="Toggle language"
    >
      {lang === "en" ? "中" : "EN"}
    </button>
  );
}
