"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const info = {
  currently: {
    en: "MS Computer Science @ UCSD",
    zh: "加州大学圣地亚哥分校 计算机科学硕士",
  },
  previously: [
    { en: "ByteDance", zh: "字节跳动" },
    { en: "NYU Research", zh: "纽约大学研究" },
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
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

        {/* Right: Info */}
        <motion.div
          className="lg:col-span-5 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Currently */}
          <div>
            <p className="mono text-xs text-[var(--gray-400)] mb-1 uppercase tracking-wider">
              {lang === "en" ? "Currently" : "目前"}
            </p>
            <p
              className="text-sm"
              style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
            >
              {info.currently[lang]}
            </p>
          </div>

          {/* Previously */}
          <div>
            <p className="mono text-xs text-[var(--gray-400)] mb-1 uppercase tracking-wider">
              {lang === "en" ? "Previously" : "之前"}
            </p>
            <p
              className="text-sm"
              style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
            >
              {info.previously.map((p) => p[lang]).join(", ")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="mono text-xs text-[var(--gray-400)] mb-2 uppercase tracking-wider">
              {lang === "en" ? "Contact" : "联系"}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${info.contact.email}`}
                className="mono text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Email
              </a>
              <a
                href={info.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                GitHub
              </a>
              <a
                href={info.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
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
