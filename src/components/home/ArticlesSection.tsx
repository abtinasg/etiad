import Link from "next/link";
import { articles } from "@/lib/data/articles";
import { ArticleCardImage } from "@/components/articles/ArticleCardImage";
import { SectionHeader } from "@/components/ui/Section";

export function ArticlesSection() {
  const featured = articles.slice(0, 3);

  return (
    <section className="section-padding bg-bg-warm" id="articles" aria-labelledby="articles-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          id="articles-title"
          label="آموزش و راهنما"
          title="راهنمای درمان و خانواده"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((article, index) => (
            <article
              key={article.slug}
              className="bg-surface border border-border rounded-[16px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <Link href={`/articles/${article.slug}`} className="block">
                <ArticleCardImage article={article} priority={index === 0} className="group-hover:scale-[1.02] transition-transform duration-500" />
              </Link>
              <div className="p-6">
                <span className="text-xs font-semibold text-accent">{article.category}</span>
                <h3 className="text-lg font-bold text-primary mt-2 mb-3 leading-snug">
                  <Link href={`/articles/${article.slug}`} className="hover:text-accent transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/articles" className="text-primary font-semibold hover:text-accent transition-colors">
            مشاهده همه مطالب →
          </Link>
        </div>
      </div>
    </section>
  );
}
