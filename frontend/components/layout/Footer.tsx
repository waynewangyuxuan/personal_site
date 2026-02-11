"use client";

import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="page-container py-16">
      <div className="max-w-[var(--content-max-width)] mx-auto">
        {/* Signature Divider */}
        <div className="divider-signature">
          <span>·</span>
        </div>

        {/* Signature */}
        <p className="signature text-center text-lg mb-8 breathe">
          {t("footer.signature")}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="mailto:w.wayne.vip@gmail.com"
            className="mono text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/vw-wang"
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/wayne-wang"
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="mono text-xs text-[var(--gray-400)] text-center">
          © {new Date().getFullYear()} Wayne Wang
        </p>
      </div>
    </footer>
  );
}
