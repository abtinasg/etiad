import Link from "next/link";
import { siteConfig } from "@/lib/site";

const features = [
  {
    title: "درمان سرپایی و متناسب با شرایط فرد",
    text: "کلینیک خورشید مرکز درمان سرپایی اختلالات مصرف مواد است. پس از ارزیابی، گزینه‌های درمانی متناسب با شرایط مراجعه‌کننده توضیح داده می‌شود.",
  },
  {
    title: "پزشک و تیم درمان چندتخصصی",
    text: "ارزیابی و پیگیری درمان با همکاری پزشک درمانگر اعتیاد، روانشناس و مشاور، و پرستار کلینیک انجام می‌شود.",
  },
  {
    title: "دسترسی در محدوده وکیل‌آباد مشهد",
    text: "کلینیک در سه‌راه ۷ تیر، نزدیک وکیل‌آباد ۲۲ و جنب آزمایشگاه ابن‌سینا قرار دارد و مسیر دقیق در صفحه تماس در دسترس است.",
  },
];

export function LocalClinicSection() {
  return (
    <section className="section-padding bg-bg-warm" aria-labelledby="local-clinic-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="block text-sm font-semibold text-accent mb-2">مرکز ترک اعتیاد در مشهد</span>
          <h2 id="local-clinic-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-tight">
            کلینیک ترک اعتیاد خورشید؛ درمان سرپایی در مشهد
          </h2>
          <p className="mt-5 text-base sm:text-lg text-text-secondary leading-relaxed">
            کلینیک ترک اعتیاد خورشید مشهد در محدوده وکیل‌آباد، خدمات ارزیابی، سم‌زدایی، درمان نگهدارنده، مشاوره فردی و خانواده‌درمانی را ارائه می‌کند. این مرکز کمپ اقامتی نیست و خدمات آن به‌صورت سرپایی و بر اساس ارزیابی تیم درمان انجام می‌شود.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-[16px] border border-border bg-surface p-6">
              <h3 className="text-lg font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
          <Link href="/addiction-treatment-mashhad" className="text-primary hover:text-accent">
            راهنمای انتخاب کلینیک ترک اعتیاد در مشهد ←
          </Link>
          <Link href="/services" className="text-primary hover:text-accent">
            مشاهده خدمات درمانی ←
          </Link>
          <Link href="/contact" className="text-primary hover:text-accent">
            آدرس و شماره تماس {siteConfig.brand} ←
          </Link>
        </div>
      </div>
    </section>
  );
}
