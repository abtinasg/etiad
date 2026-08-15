import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createPageMetadata({
  title: "درمان سرپایی اعتیاد مشهد | کلینیک خورشید",
  description:
    "اطلاعات درباره درمان سرپایی اعتیاد در مشهد. کلینیک خورشید — برای بررسی شرایط مراجعه با کلینیک تماس بگیرید.",
  path: "/outpatient-addiction-treatment-mashhad",
});

export default function OutpatientTreatmentPage() {
  return (
    <div className="section-padding bg-bg-warm">
      <Container>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: "درمان سرپایی اعتیاد مشهد" },
          ])}
        />
        <Breadcrumb
          items={[
            { label: "خانه", href: "/" },
            { label: "درمان سرپایی اعتیاد مشهد" },
          ]}
        />
        <article className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6">
            درمان سرپایی اعتیاد در مشهد
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            درمان سرپایی یکی از گزینه‌های درمانی است که بسته به شرایط فرد ممکن است بررسی شود.
            انتخاب مسیر مناسب باید پس از ارزیابی توسط تیم درمان انجام گیرد.
          </p>
          <p className="text-text-secondary mb-8">
            {siteConfig.needsClinicAnswer} — جزئیات درمان سرپایی در کلینیک خورشید.
          </p>
          <p className="text-text-secondary mb-8">
            مطالعه:
            <Link href="/articles/how-to-start-addiction-treatment" className="text-primary font-semibold mx-1 hover:text-accent">
              شروع درمان اعتیاد
            </Link>
          </p>
          <Button href={siteConfig.phoneTel} variant="primary" size="lg">
            تماس برای اطلاعات مراجعه
          </Button>
        </article>
      </Container>
    </div>
  );
}
