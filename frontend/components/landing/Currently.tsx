import { personal } from "@/lib/content";

export function Currently() {
  return (
    <section className="section page-container border-t border-[var(--border)]">
      {/* Section title */}
      <h2 className="text-sm text-[var(--muted)] mb-8 tracking-wide">
        CURRENTLY
      </h2>

      {/* Current status */}
      <div className="space-y-2">
        <p className="text-lg">{personal.current}</p>
        <p className="text-sm text-[var(--muted)]">
          Previously: {personal.previous}
        </p>
      </div>
    </section>
  );
}
