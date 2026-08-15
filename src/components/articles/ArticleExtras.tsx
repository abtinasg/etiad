import Link from "next/link";
import { articles, type Article } from "@/lib/data/articles";

function slugifyHeading(text: string) {
  return text.replace(/\s+/g, "-").slice(0, 60);
}

type ArticleTableOfContentsProps = {
  article: Article;
};

export function ArticleTableOfContents({ article }: ArticleTableOfContentsProps) {
  const headings = article.blocks.filter(
    (block) => block.type === "heading" && block.level === 2
  );

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="فهرست مطالب"
      className="bg-surface border border-border rounded-[16px] p-6 mb-10 not-prose"
    >
      <h2 className="text-sm font-bold text-primary mb-4">فهرست مطالب</h2>
      <ol className="space-y-2 text-sm">
        {headings.map((heading, index) =>
          heading.type === "heading" ? (
            <li key={heading.text}>
              <a
                href={`#${slugifyHeading(heading.text)}`}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                {index + 1}. {heading.text}
              </a>
            </li>
          ) : null
        )}
      </ol>
    </nav>
  );
}

type RelatedArticlesProps = {
  currentSlug: string;
  slugs?: string[];
};

export function RelatedArticles({ currentSlug, slugs = [] }: RelatedArticlesProps) {
  const related = articles.filter(
    (article) => slugs.includes(article.slug) && article.slug !== currentSlug
  );

  if (related.length === 0) return null;

  return (
    <aside className="border-t border-border pt-10 mt-10">
      <h2 className="text-xl font-bold text-primary mb-6">مطالب مرتبط</h2>
      <ul className="space-y-4">
        {related.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/articles/${article.slug}`}
              className="text-primary font-semibold hover:text-accent transition-colors"
            >
              {article.title} →
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export { slugifyHeading };
