import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface WritingFrontmatter {
  title: string;
  title_zh?: string;
  summary: string;
  summary_zh?: string;
  date: string;
  tags: string[];
  cover?: string;
}

export interface WritingMeta extends WritingFrontmatter {
  slug: string;
}

const WRITINGS_DIR = path.join(process.cwd(), "content/writings");

export function getAllWritings(): WritingMeta[] {
  if (!fs.existsSync(WRITINGS_DIR)) return [];
  const files = fs.readdirSync(WRITINGS_DIR).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const slug = file.replace(".md", "");
      const source = fs.readFileSync(path.join(WRITINGS_DIR, file), "utf-8");
      const { data } = matter(source);
      return { slug, ...(data as WritingFrontmatter) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getWritingBySlug(slug: string) {
  const file = path.join(WRITINGS_DIR, `${slug}.md`);
  const source = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(source);
  return { frontmatter: data as WritingFrontmatter, content };
}
