import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { clinicImages } from "@/lib/images";
import { Container } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/components/seo/JsonLd";

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
  const localFaqs = [
    {
      question: "آیا کلینیک خورشید کمپ اقامتی ترک اعتیاد است؟",
      answer: "خیر. کلینیک خورشید یک مرکز درمان سرپایی اختلالات مصرف مواد در مشهد است و کمپ اقامتی نیست.",
    },
    {
      question: "برای شروع درمان در کلینیک خورشید چه کاری انجام دهیم؟",
      answer: "ابتدا برای دریافت اطلاعات و هماهنگی مراجعه تماس بگیرید. پس از ارزیابی شرایط فرد، گزینه‌های درمانی مناسب توسط تیم درمان توضیح داده می‌شود.",
    },
    {
      question: "آیا خانواده می‌تواند پیش از مراجعه بیمار تماس بگیرد؟",
      answer: "بله. خانواده‌ها می‌توانند برای دریافت اطلاعات اولیه درباره شرایط مراجعه و نحوه همراهی با کلینیک تماس بگیرند.",
    },
    {
      question: "ساعات فعالیت کلینیک ترک اعتیاد خورشید مشهد چیست؟",
      answer: siteConfig.workingHours,
    },
  ];

  return (
    <div className="section-padding bg-bg-warm">
      <Container>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: breadcrumbLabel },
          ])}
        />
        <JsonLd data={faqJsonLd(localFaqs)} />
        <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: breadcrumbLabel }]} />
        <article>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-10 items-start">
            <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6">{h1}</h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">{intro}</p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Button href={siteConfig.phoneTel} variant="primary" size="lg">
                  تماس با کلینیک
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  آدرس و مسیریابی
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-border bg-sage-light">
              <Image
                src={clinicImages.signage.src}
                alt={clinicImages.signage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
                priority
              />
            </div>
          </div>

          <div className="max-w-3xl mt-14">
            <h2 className="text-2xl font-bold text-primary mb-4">خدمات کلینیک ترک اعتیاد خورشید در مشهد</h2>
            <p className="text-text-secondary leading-relaxed mb-5">
              خدمات قابل ارائه شامل سم‌زدایی، درمان نگهدارنده، مشاوره فردی، گروه‌درمانی، خانواده‌درمانی و پشتیبانی پس از درمان است. انتخاب هر روش به شرایط فرد و نتیجه ارزیابی تیم درمان بستگی دارد.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {[
                ["/services/detoxification", "سم‌زدایی"],
                ["/services/maintenance-treatment", "درمان نگهدارنده"],
                ["/services/individual-counseling", "مشاوره فردی"],
                ["/services/family-therapy", "خانواده‌درمانی"],
              ].map(([href, label]) => (
                <li key={href} className="rounded-[12px] border border-border bg-surface px-5 py-4">
                  <Link href={href} className="font-semibold text-primary hover:text-accent">
                    {label} در کلینیک خورشید ←
                  </Link>
                </li>
              ))}
            </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">چرا ارزیابی تخصصی مهم است؟</h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            شرایط مصرف و نیازهای درمانی افراد متفاوت است. ارزیابی توسط تیم درمان به تعیین
            مسیر مناسب کمک می‌کند. {siteConfig.contentDisclaimer}
          </p>

            <h2 className="text-2xl font-bold text-primary mb-4">تفاوت کلینیک سرپایی با کمپ اقامتی</h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              کلینیک خورشید یک مرکز درمان سرپایی است؛ یعنی مراجعه‌کننده طبق برنامه برای ارزیابی، درمان و پیگیری به مرکز مراجعه می‌کند و در کلینیک اقامت ندارد. اگر درباره مناسب‌بودن درمان سرپایی برای شرایط خود یا یکی از اعضای خانواده سوال دارید، تصمیم‌گیری باید پس از ارزیابی تخصصی انجام شود.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">روند شروع درمان</h2>
            <ol className="space-y-4 mb-10">
              {[
                "تماس اولیه و دریافت اطلاعات درباره شرایط مراجعه",
                "ارزیابی وضعیت فرد توسط تیم درمان",
                "توضیح گزینه‌های درمانی متناسب با نتیجه ارزیابی",
                "شروع درمان و پیگیری طبق برنامه تعیین‌شده",
              ].map((step, index) => (
                <li key={step} className="flex gap-3 text-text-secondary leading-relaxed">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

          <h2 className="text-2xl font-bold text-primary mb-4">اطلاعات تماس</h2>
          <p className="text-text-secondary mb-2">{siteConfig.address}</p>
          <p className="text-text-secondary mb-6">ساعات: {siteConfig.workingHours}</p>

            <p className="text-text-secondary mb-8">
              تلفن: <a href={siteConfig.phoneTel} className="font-bold text-primary hover:text-accent">{siteConfig.phoneDisplay}</a>
            </p>

            <h2 className="text-2xl font-bold text-primary mb-5">سوالات رایج</h2>
            <div className="space-y-5 mb-10">
              {localFaqs.map((item) => (
                <section key={item.question} className="rounded-[16px] border border-border bg-surface p-6">
                  <h3 className="font-bold text-primary mb-2">{item.question}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.answer}</p>
                </section>
              ))}
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
          </div>
        </article>
      </Container>
    </div>
  );
}
