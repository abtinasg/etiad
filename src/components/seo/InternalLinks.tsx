import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { articles } from "@/lib/data/articles";
import { Button } from "@/components/ui/Button";

type InternalLinksProps = {
  service?: { slug: string; title: string };
  articleSlugs?: string[];
  variant?: "article" | "service";
};

export function InternalLinks({
  service,
  articleSlugs = [],
  variant = "article",
}: InternalLinksProps) {
  const relatedArticles = articles.filter((article) =>
    articleSlugs.includes(article.slug)
  );

  return (
    <nav
      aria-label="مسیر مراجعه و مطالب مرتبط"
      className="not-prose space-y-6 border-t border-border pt-10 mt-10"
    >
      {service && variant === "article" && (
        <div className="rounded-[16px] border border-border bg-sage-light p-6">
          <p className="text-xs font-semibold text-accent mb-2">گام بعدی</p>
          <h2 className="font-bold text-primary mb-2">خدمت مرتبط</h2>
          <p className="text-sm text-text-secondary mb-4 leading-relaxed">
            برای آشنایی با نحوه ارائه این خدمت در کلینیک خورشید، صفحه خدمت را ببینید.
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            {service.title} در کلینیک خورشید →
          </Link>
        </div>
      )}

      {variant === "service" && relatedArticles.length > 0 && (
        <div className="rounded-[16px] border border-border bg-surface p-6">
          <h2 className="font-bold text-primary mb-4">مقالات مرتبط</h2>
          <ul className="space-y-3">
            {relatedArticles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  {article.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-[16px] bg-primary p-6 sm:p-8 text-white">
        <h2 className="text-lg font-bold mb-2">
          {variant === "service" ? "هماهنگی مراجعه" : "برای دریافت اطلاعات درباره مراجعه"}
        </h2>
        <p className="text-sm text-white/80 mb-6 leading-relaxed">
          {siteConfig.medicalDisclaimer}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="accent" size="md">
            صفحه تماس و آدرس
          </Button>
          <Button href={siteConfig.phoneTel} variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10">
            تماس — {siteConfig.phoneDisplay}
          </Button>
        </div>
      </div>
    </nav>
  );
}

export function getArticlesForService(serviceSlug: string) {
  return articles.filter((article) => article.relatedServiceSlug === serviceSlug);
}
