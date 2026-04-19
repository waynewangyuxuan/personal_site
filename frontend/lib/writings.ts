import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Lang = "en" | "zh";

export interface WritingVariant {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  cover?: string;
}

export interface WritingVariantWithContent extends WritingVariant {
  content: string;
}

export interface Writing {
  slug: string;
  variants: Partial<Record<Lang, WritingVariant>>;
}

export interface WritingFull {
  slug: string;
  variants: Partial<Record<Lang, WritingVariantWithContent>>;
}

const WRITINGS_DIR = path.join(process.cwd(), "content/writings");
const FILE_RE = /^(.+)\.(en|zh)\.md$/;

interface RawEntry {
  slug: string;
  lang: Lang;
  variant: WritingVariantWithContent;
}

function readAll(): RawEntry[] {
  if (!fs.existsSync(WRITINGS_DIR)) return [];
  const files = fs.readdirSync(WRITINGS_DIR);
  const out: RawEntry[] = [];
  for (const file of files) {
    const m = file.match(FILE_RE);
    if (!m) continue;
    const slug = m[1];
    const lang = m[2] as Lang;
    const source = fs.readFileSync(path.join(WRITINGS_DIR, file), "utf-8");
    const { data, content } = matter(source);
    const variant: WritingVariantWithContent = {
      ...(data as WritingVariant),
      content,
    };
    out.push({ slug, lang, variant });
  }
  return out;
}

function latestDate(variants: Partial<Record<Lang, WritingVariant>>): string {
  return Object.values(variants)
    .map((v) => v!.date)
    .sort()
    .reverse()[0];
}

export function getAllWritings(): Writing[] {
  const entries = readAll();
  const bySlug = new Map<string, Writing>();
  for (const e of entries) {
    const existing = bySlug.get(e.slug) ?? { slug: e.slug, variants: {} };
    const { content: _content, ...meta } = e.variant;
    existing.variants[e.lang] = meta;
    bySlug.set(e.slug, existing);
  }
  return [...bySlug.values()].sort(
    (a, b) =>
      new Date(latestDate(b.variants)).getTime() -
      new Date(latestDate(a.variants)).getTime()
  );
}

export function getWritingBySlug(slug: string): WritingFull | null {
  const entries = readAll().filter((e) => e.slug === slug);
  if (entries.length === 0) return null;
  const variants: Partial<Record<Lang, WritingVariantWithContent>> = {};
  for (const e of entries) variants[e.lang] = e.variant;
  return { slug, variants };
}

export function pickVariant<T extends WritingVariant>(
  variants: Partial<Record<Lang, T>>,
  preferred: Lang
): { variant: T; lang: Lang } | null {
  const fallback: Lang = preferred === "en" ? "zh" : "en";
  const chosen = variants[preferred] ?? variants[fallback];
  if (!chosen) return null;
  const lang = variants[preferred] ? preferred : fallback;
  return { variant: chosen, lang };
}
