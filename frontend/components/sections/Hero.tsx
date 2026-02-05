"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section className="min-h-screen flex flex-col justify-center page-container relative">
      <div className="max-w-3xl">
        {/* Name */}
        <motion.h1
          className={`mb-8 ${lang === "zh" ? "font-[var(--font-cn-display)]" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={lang === "zh" ? { fontFamily: "var(--font-cn-display)" } : {}}
        >
          {t("hero.name")}
        </motion.h1>

        {/* Taglines */}
        <div className="space-y-2 mb-12">
          <motion.p
            className={`text-xl md:text-2xl text-[var(--muted)] leading-relaxed ${
              lang === "zh" ? "" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={lang === "zh" ? { fontFamily: "var(--font-cn-body)" } : {}}
          >
            {t("hero.line1")}
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed"
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
          className="signature text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {t("hero.signature")}
        </motion.p>
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
