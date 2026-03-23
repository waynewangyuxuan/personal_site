"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useI18n, LanguageToggle } from "@/lib/i18n";
import { ThemeToggle } from "@/lib/theme";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/research", label: t("nav.research") },
    { href: "/writings", label: t("nav.writing") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 page-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className={cn(
          "flex items-center justify-between py-4 -mx-4 px-4 transition-all duration-300",
          hasScrolled
            ? "bg-[var(--background)]/90 backdrop-blur-sm"
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight hover:opacity-70 transition-opacity"
          style={{ fontFamily: "var(--font-display)" }}
        >
          W.
        </Link>

        {/* Nav Items + Language Toggle */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors",
                    isActive(item.href)
                      ? "text-[var(--foreground)] font-semibold underline underline-offset-4 decoration-2"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Toggle */}
          <div className="border-l border-[var(--border)] pl-6">
            <LanguageToggle />
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
