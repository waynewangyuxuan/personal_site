import { notFound } from "next/navigation";
import { getAllWritings, getWritingBySlug, type Lang } from "@/lib/writings";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { ArticleContent, type RenderedVariant } from "./ArticleContent";

export function generateStaticParams() {
  return getAllWritings().map((w) => ({ slug: w.slug }));
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writing = getWritingBySlug(slug);
  if (!writing) notFound();

  const rendered: Partial<Record<Lang, RenderedVariant>> = {};
  for (const [lang, variant] of Object.entries(writing.variants)) {
    if (!variant) continue;
    const result = await remark().use(remarkGfm).use(html).process(variant.content);
    rendered[lang as Lang] = {
      title: variant.title,
      summary: variant.summary,
      date: variant.date,
      tags: variant.tags,
      cover: variant.cover,
      htmlContent: result.toString(),
    };
  }

  return <ArticleContent variants={rendered} />;
}
