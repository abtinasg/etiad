import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "مشاوره ترک اعتیاد مشهد | کلینیک خورشید",
  description:
    "مشاوره ترک اعتیاد و مشاوره اعتیاد در مشهد — کلینیک خورشید. برای اطلاعات اولیه و هماهنگی مراجعه تماس بگیرید.",
  path: "/addiction-consultation-mashhad",
});

export default function AddictionConsultationPage() {
  return (
    <div className="section-padding bg-bg-warm">
      <Container>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: "مشاوره ترک اعتیاد مشهد" },
          ])}
        />
        <Breadcrumb
          items={[
            { label: "خانه", href: "/" },
            { label: "مشاوره ترک اعتیاد مشهد" },
          ]}
        />
        <article className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6">
            مشاوره ترک اعتیاد در مشهد
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            کلینیک خورشید در مشهد خدمات مشاوره درمان اعتیاد را برای مراجعه‌کنندگان و خانواده‌ها
            ارائه می‌دهد. برای دریافت اطلاعات اولیه می‌توانید با کلینیک تماس بگیرید.
          </p>

          <p className="text-text-secondary mb-8">
            اطلاعات بیشتر درباره
            <Link href="/services/individual-counseling" className="text-primary font-semibold mx-1 hover:text-accent">
              مشاوره درمان اعتیاد
            </Link>
            در صفحه خدمات کلینیک.
          </p>

          <Button href={siteConfig.phoneTel} variant="primary" size="lg">
            تماس محرمانه — {siteConfig.phoneDisplay}
          </Button>
        </article>
      </Container>
    </div>
  );
}
