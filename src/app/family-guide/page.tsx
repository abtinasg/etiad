import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createPageMetadata({
  title: "راهنمای خانواده | کلینیک ترک اعتیاد خورشید مشهد",
  description:
    "راهنمای خانواده برای همراهی فرد درگیر مصرف مواد. نحوه برخورد، زمان دریافت کمک تخصصی و سوالات اولین تماس با کلینیک.",
  path: "/family-guide",
});

export default function FamilyGuidePage() {
  return (
    <div className="section-padding bg-bg-warm">
      <Container>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: "راهنمای خانواده" },
          ])}
        />
        <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "راهنمای خانواده" }]} />
        <article className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6">
            راهنمای خانواده فرد درگیر مصرف مواد
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-4">
            خانواده می‌تواند برای دریافت اطلاعات اولیه درباره شرایط مراجعه، نحوه برخورد و
            مسیرهای موجود با کلینیک تماس بگیرد. لازم نیست منتظر تصمیم قطعی فرد بمانید.
          </p>
          <p className="text-lg font-medium text-primary leading-relaxed mb-10">
            {siteConfig.mission}
          </p>

          <section id="talking" className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">چطور درباره درمان صحبت کنیم؟</h2>
            <div className="prose-medical">
              <p>
                صحبت درباره درمان می‌تواند دشوار باشد. انتخاب زمان آرام، گوش دادن بدون قضاوت
                و بیان نگرانی به‌صورت محترم می‌تواند مفید باشد.
              </p>
              <p>
                اگر نمی‌دانید چگونه شروع کنید، می‌توانید ابتدا با کلینیک تماس بگیرید و
                درباره نحوه برخورد سوال کنید.
              </p>
            </div>
          </section>

          <section id="when-help" className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">چه زمانی کمک تخصصی بگیریم؟</h2>
            <div className="prose-medical">
              <p>
                اگر نگرانی‌های جسمی، روانی یا اجتماعی مرتبط با مصرف مواد وجود دارد،
                ارزیابی توسط متخصص می‌تواند گام مناسبی باشد.
              </p>
              <p>{siteConfig.contentDisclaimer}</p>
            </div>
          </section>

          <section id="first-call" className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">در اولین تماس چه سوالاتی بپرسیم؟</h2>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                شرایط مراجعه و ساعات کاری کلینیک چگونه است؟
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                روند ارزیابی اولیه چگونه انجام می‌شود؟
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                آیا خانواده می‌تواند مشاوره بگیرد؟
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                اطلاعات مراجعه‌کنندگان چگونه محافظت می‌شود؟
              </li>
            </ul>
          </section>

          <div className="bg-sage-light border border-border rounded-[16px] p-8">
            <h2 className="text-xl font-bold text-primary mb-3">مشاوره خانواده در کلینیک خورشید</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              برای اطلاعات بیشتر درباره
              <Link href="/services/family-therapy" className="text-primary font-semibold mx-1 hover:text-accent">
                مشاوره خانواده
              </Link>
              با کلینیک تماس بگیرید.
            </p>
            <Button href={siteConfig.phoneTel} variant="primary">
              تماس با کلینیک — {siteConfig.phoneDisplay}
            </Button>
          </div>

          <p className="mt-8 text-sm text-text-secondary">{siteConfig.medicalDisclaimer}</p>
        </article>
      </Container>
    </div>
  );
}
