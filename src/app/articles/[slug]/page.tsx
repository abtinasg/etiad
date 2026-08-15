import { notFound } from "next/navigation";
import { getArticleBySlug, articles } from "@/lib/data/articles";
import { getServiceBySlug } from "@/lib/data/services";
import { createArticleMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MedicalReviewer } from "@/components/ui/MedicalReviewer";
import { ArticleContent } from "@/components/articles/ArticleContent";
import { ArticleTableOfContents, RelatedArticles } from "@/components/articles/ArticleExtras";
import { InternalLinks } from "@/components/seo/InternalLinks";
import { JsonLd, breadcrumbJsonLd, articleJsonLd } from "@/components/seo/JsonLd";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return createArticleMetadata(
    article.metaTitle,
    article.excerpt,
    slug,
    article.image.src
  );
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedService = article.relatedServiceSlug
    ? getServiceBySlug(article.relatedServiceSlug)
    : null;

  return (
    <div className="section-padding bg-bg-warm">
      <Container>
        <JsonLd
          data={articleJsonLd({
            title: article.title,
            description: article.excerpt,
            slug: article.slug,
            publishedAt: article.publishedAt,
            lastReviewed: article.lastReviewed,
            author: article.author,
            image: article.image.src,
          })}
        />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: "مقالات", url: "/articles" },
            { name: article.title },
          ])}
        />
        <Breadcrumb
          items={[
            { label: "خانه", href: "/" },
            { label: "مقالات", href: "/articles" },
            { label: article.title },
          ]}
        />
        <article className="max-w-3xl">
          <span className="text-sm font-semibold text-accent">{article.category}</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mt-2 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="rounded-[16px] overflow-hidden border border-border mb-8">
            <Image
              src={article.image.src}
              alt={article.image.alt}
              width={article.image.width}
              height={article.image.height}
              priority
                  className="w-full h-auto object-cover max-h-[280px] sm:max-h-[420px]"
              sizes="(max-width: 768px) 100vw, 760px"
            />
          </div>

          <p className="text-lg text-text-secondary leading-relaxed mb-8">{article.excerpt}</p>

          <MedicalReviewer
            author={article.author}
            medicalReviewer={article.medicalReviewer}
            publishedAt={article.publishedAt}
            lastReviewed={article.lastReviewed}
          />

          <ArticleTableOfContents article={article} />
          <ArticleContent blocks={article.blocks} />

          {article.references.length > 0 && (
            <section className="border-t border-border pt-10 mt-10" aria-labelledby="references-title">
              <h2 id="references-title" className="text-xl font-bold text-primary mb-4">
                منابع علمی
              </h2>
              <ul className="space-y-2 text-sm text-text-secondary list-disc pr-6">
                {article.references.map((reference) => (
                  <li key={reference}>{reference}</li>
                ))}
              </ul>
            </section>
          )}

          <RelatedArticles
            currentSlug={article.slug}
            slugs={article.relatedArticleSlugs}
          />

          <InternalLinks
            variant="article"
            service={
              relatedService
                ? { slug: relatedService.slug, title: relatedService.title }
                : undefined
            }
          />
        </article>
      </Container>
    </div>
  );
}
