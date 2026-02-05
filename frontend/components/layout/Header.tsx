"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useI18n, LanguageToggle } from "@/lib/i18n";

export function Header() {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { href: "#work", label: t("nav.work") },
    { href: "#research", label: t("nav.research") },
    { href: "#about", label: t("nav.about") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past first viewport
      setIsVisible(window.scrollY > window.innerHeight * 0.5);

      // Determine active section
      const sections = ["work", "research", "about"];
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          className="fixed top-0 left-0 right-0 z-50 page-container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <nav className="flex items-center justify-between py-5 bg-[var(--background)]/90 backdrop-blur-sm -mx-4 px-4">
            {/* Logo - scrolls to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-lg font-bold tracking-tight hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-display)" }}
            >
              W.
            </button>

            {/* Nav Items + Language Toggle */}
            <div className="flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "text-sm transition-opacity relative",
                        activeSection === item.href.replace("#", "")
                          ? "opacity-100"
                          : "opacity-50 hover:opacity-100"
                      )}
                    >
                      {item.label}
                      {activeSection === item.href.replace("#", "") && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--foreground)]"
                          layoutId="activeSection"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Language Toggle */}
              <div className="border-l border-[var(--border)] pl-6">
                <LanguageToggle />
              </div>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
