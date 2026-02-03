"use client";

import { personal } from "@/lib/content";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center page-container">
      <div className="space-y-6">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight opacity-0 animate-fade-in">
          {personal.name.toUpperCase()}
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-[var(--muted)] max-w-xl opacity-0 animate-fade-in animate-delay-2">
          {personal.tagline}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-5">
        <span className="text-sm text-[var(--muted)]">↓</span>
      </div>
    </section>
  );
}
