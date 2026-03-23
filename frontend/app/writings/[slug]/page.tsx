import { getAllWritings, getWritingBySlug } from "@/lib/writings";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { ArticleContent } from "./ArticleContent";

export function generateStaticParams() {
  return getAllWritings().map((w) => ({ slug: w.slug }));
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter, content } = getWritingBySlug(slug);

  const result = await remark().use(remarkGfm).use(html).process(content);
  const htmlContent = result.toString();

  return (
    <ArticleContent frontmatter={frontmatter} htmlContent={htmlContent} />
  );
}
