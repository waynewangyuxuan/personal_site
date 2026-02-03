import { personal } from "@/lib/content";

export function Footer() {
  return (
    <footer className="page-container py-12 border-t border-[var(--border)]">
      <a
        href={`mailto:${personal.email}`}
        className="mono text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
      >
        {personal.email}
      </a>
    </footer>
  );
}
