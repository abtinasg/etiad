import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

type LandingPageProps = {
  breadcrumbLabel: string;
  h1: string;
  intro: string;
  links: Array<{ href: string; label: string }>;
};

export function LandingPage({
  breadcrumbLabel,
  h1,
  intro,
  links,
}: LandingPageProps) {
  return (
    <div className="section-padding bg-bg-warm">
      <Container>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: breadcrumbLabel },
          ])}
        />
        <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: breadcrumbLabel }]} />
        <article className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6">{h1}</h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">{intro}</p>

          <h2 className="text-2xl font-bold text-primary mb-4">چرا ارزیابی تخصصی مهم است؟</h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            شرایط مصرف و نیازهای درمانی افراد متفاوت است. ارزیابی توسط تیم درمان به تعیین
            مسیر مناسب کمک می‌کند. {siteConfig.contentDisclaimer}
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">اطلاعات تماس</h2>
          <p className="text-text-secondary mb-2">{siteConfig.address}</p>
          <p className="text-text-secondary mb-6">ساعات: {siteConfig.workingHours}</p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Button href={siteConfig.phoneTel} variant="primary" size="lg">
              تماس با کلینیک
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              صفحه تماس
            </Button>
          </div>

          <h2 className="text-xl font-bold text-primary mb-4">صفحات مرتبط</h2>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-primary font-semibold hover:text-accent">
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </div>
  );
}
