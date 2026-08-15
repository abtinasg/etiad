import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Container, SectionHeader } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createPageMetadata({
  title: "درباره کلینیک خورشید مشهد | مرکز درمان اختلالات مصرف مواد",
  description:
    "کلینیک ترک اعتیاد خورشید مشهد — مرکز درمان علمی و محرمانه اختلالات مصرف مواد در محدوده وکیل‌آباد.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="section-padding bg-bg-warm">
      <Container>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: "درباره کلینیک" },
          ])}
        />
        <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "درباره کلینیک" }]} />
        <article className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6">
            درباره کلینیک خورشید مشهد
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            کلینیک ترک اعتیاد خورشید یک مرکز درمان اختلالات مصرف مواد در مشهد است که
            خدمات ارزیابی، مشاوره و درمان را در فضایی آرام و حرفه‌ای ارائه می‌دهد.
          </p>

          <SectionHeader
            title="موقعیت و دسترسی"
            description={siteConfig.address}
          />

          <div id="process" className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-6">روند مراجعه به کلینیک</h2>
            <ol className="space-y-6">
              {[
                { title: "تماس اولیه", text: "برای دریافت اطلاعات و هماهنگی مراجعه با کلینیک تماس بگیرید." },
                { title: "ارزیابی", text: "شرایط فرد توسط تیم درمان بررسی می‌شود." },
                { title: "پیشنهاد مسیر درمان", text: "گزینه‌های مناسب بر اساس ارزیابی توضیح داده می‌شوند." },
                { title: "پیگیری", text: "در صورت شروع درمان، پیگیری طبق برنامه انجام می‌شود." },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-primary">{step.title}</h3>
                    <p className="text-text-secondary text-sm mt-1">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 bg-primary text-white rounded-[16px] p-8">
            <p className="mb-4">برای اطلاعات بیشتر با کلینیک تماس بگیرید.</p>
            <Button href={siteConfig.phoneTel} variant="accent">
              {siteConfig.phoneDisplay}
            </Button>
          </div>

          <p className="mt-8 text-sm text-text-secondary">
            تجربه نزدیک به ۲۰ سال و جزئیات مجوز {siteConfig.needsVerification} است.
          </p>
        </article>
      </Container>
    </div>
  );
}
