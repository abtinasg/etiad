import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, allServices } from "@/lib/data/services";
import { createServiceMetadata, createDraftMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { InternalLinks, getArticlesForService } from "@/components/seo/InternalLinks";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/components/seo/JsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || service.draft) {
    if (!service) return {};
    return createDraftMetadata(service.title);
  }
  return createServiceMetadata(service.title, service.description, service.slug);
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  if (service.draft) {
    return (
      <div className="section-padding bg-bg-warm">
        <Container narrow>
          <Breadcrumb
            items={[
              { label: "خانه", href: "/" },
              { label: "خدمات", href: "/services" },
              { label: service.title },
            ]}
          />
          <div className="bg-surface border border-border rounded-[16px] p-10 text-center">
            <h1 className="text-2xl font-extrabold text-primary mb-4">{service.title}</h1>
            <p className="text-text-secondary mb-6">
              این صفحه در حالت پیش‌نویس است و پس از تأیید ارائه خدمات توسط کلینیک منتشر خواهد شد.
            </p>
            <Button href="/contact" variant="primary">تماس با کلینیک</Button>
          </div>
        </Container>
      </div>
    );
  }

  const relatedArticles = getArticlesForService(service.slug);

  return (
    <div className="section-padding bg-bg-warm">
      <Container>
        <JsonLd
          data={serviceJsonLd({
            title: service.title,
            description: service.description,
            slug: service.slug,
          })}
        />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: "خدمات درمانی", url: "/services" },
            { name: service.title },
          ])}
        />
        <Breadcrumb
          items={[
            { label: "خانه", href: "/" },
            { label: "خدمات درمانی", href: "/services" },
            { label: service.title },
          ]}
        />
        <article className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6">
            {service.title} در مشهد
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            {service.description}
          </p>

          <div className="prose-medical mb-10">
            <h2>چه زمانی ارزیابی تخصصی ممکن است لازم باشد؟</h2>
            <p>
              اگر فرد یا خانواده درباره مسیر درمان، شرایط مراجعه یا گزینه‌های موجود سوال دارند،
              تماس با کلینیک برای دریافت اطلاعات اولیه گام مناسبی است.
            </p>
            <h2>نقش ارزیابی در کلینیک خورشید</h2>
            <p>
              در کلینیک خورشید، شرایط هر مراجعه‌کننده ابتدا بررسی می‌شود و بر اساس آن،
              مسیر درمان متناسب با وضعیت فرد پیشنهاد می‌شود.
            </p>
            <h2>حمایت خانواده</h2>
            <p>
              خانواده می‌تواند برای دریافت راهنمایی درباره نحوه برخورد و همراهی،
              <Link href="/family-guide" className="text-primary font-semibold hover:text-accent">
                راهنمای خانواده
              </Link>
              را مطالعه کند یا با کلینیک تماس بگیرد.
            </p>
          </div>

          {service.needsVerification && (
            <p className="text-sm text-text-secondary bg-sage-light border border-border rounded-[12px] p-4 mb-8">
              جزئیات این خدمت {siteConfig.needsVerification} است.
            </p>
          )}

          <InternalLinks
            variant="service"
            service={{ slug: service.slug, title: service.title }}
            articleSlugs={relatedArticles.map((article) => article.slug)}
          />

          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <Link href="/doctors" className="text-primary font-semibold hover:text-accent">
              آشنایی با تیم درمان →
            </Link>
            <Link href="/family-guide" className="text-primary font-semibold hover:text-accent">
              راهنمای خانواده →
            </Link>
            <Link href="/faq" className="text-primary font-semibold hover:text-accent">
              سوالات متداول →
            </Link>
          </div>
        </article>
      </Container>
    </div>
  );
}
