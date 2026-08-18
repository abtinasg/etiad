import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { Container, SectionHeader } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getPublishedServices } from "@/lib/data/services";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createPageMetadata({
  title: "خدمات درمانی | کلینیک ترک اعتیاد خورشید مشهد",
  description:
    "خدمات سم‌زدایی، درمان نگهدارنده، مشاوره فردی، گروه‌درمانی، خانواده‌درمانی و پشتیبانی پس از درمان در کلینیک خورشید مشهد.",
  path: "/services",
});

export default function ServicesPage() {
  const services = getPublishedServices();

  return (
    <div className="section-padding bg-bg-warm">
      <Container>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: "خدمات درمانی" },
          ])}
        />
        <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "خدمات درمانی" }]} />
        <SectionHeader
          title="خدمات درمانی کلینیک خورشید"
          description="سم‌زدایی، درمان نگهدارنده، مشاوره فردی، گروه‌درمانی، خانواده‌درمانی و پشتیبانی پس از درمان. برای اطلاعات بیشتر درباره هر خدمت با کلینیک تماس بگیرید."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="bg-surface border border-border rounded-[16px] p-8 hover:shadow-lg hover:border-sage transition-all duration-300 group"
            >
              <h2 className="text-xl font-bold text-primary group-hover:text-accent transition-colors mb-3">
                {service.title}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {service.shortDescription}
              </p>
              <span className="text-sm font-semibold text-accent">اطلاعات بیشتر ←</span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
