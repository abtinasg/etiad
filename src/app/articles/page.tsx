import Link from "next/link";
import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import { Container, SectionHeader } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { articles } from "@/lib/data/articles";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createPageMetadata({
  title: "مقالات و راهنما | کلینیک ترک اعتیاد خورشید مشهد",
  description:
    "مطالب آموزشی درباره مسیر درمان، نقش خانواده و آگاهی عمومی در زمینه اختلالات مصرف مواد.",
  path: "/articles",
});

export default function ArticlesPage() {
  return (
    <div className="section-padding bg-bg-warm">
      <Container>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: "مقالات" },
          ])}
        />
        <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "مقالات" }]} />
        <SectionHeader
          title="راهنمای درمان و خانواده"
          description="مطالب آموزشی برای آشنایی بیشتر با فرآیند درمان. تمامی مطالب نیازمند بازبینی پزشکی هستند."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-surface border border-border rounded-[16px] overflow-hidden hover:shadow-md transition-shadow group"
            >
              <Link href={`/articles/${article.slug}`} className="block">
                <div className="aspect-video relative overflow-hidden bg-sage">
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    width={article.image.width}
                    height={article.image.height}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </Link>
              <div className="p-6">
                <span className="text-xs font-semibold text-accent">{article.category}</span>
                <h2 className="text-lg font-bold text-primary mt-2 mb-3 leading-snug">
                  <Link href={`/articles/${article.slug}`} className="hover:text-accent transition-colors">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">{article.excerpt}</p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="mt-4 text-sm font-semibold text-accent hover:text-primary inline-block"
                >
                  ادامه مطلب →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
