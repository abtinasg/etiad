import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { clinicImages } from "@/lib/images";
import { Button } from "@/components/ui/Button";

const trustItems = [
  { text: "نزدیک به ۲۰ سال تجربه" },
  { text: "دارای مجوز رسمی از وزارت بهداشت و درمان" },
  { text: "پزشک درمانگر، روانشناس و پرستار" },
];

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-bg-warm to-sage-light pt-8 pb-16 lg:pb-24 overflow-hidden" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-surface px-4 py-2 rounded-full border border-border mb-6">
              <span className="w-2 h-2 bg-accent rounded-full" aria-hidden="true" />
              کلینیک ترک اعتیاد خورشید در مشهد
            </p>
            <h1 id="hero-title" className="text-2xl sm:text-[32px] lg:text-[52px] font-extrabold text-primary leading-[1.35] mb-6 break-words">
              شروع درمان اعتیاد، با ارزیابی تخصصی و بدون قضاوت
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-4 max-w-xl">
              در کلینیک خورشید، شرایط هر مراجعه‌کننده ابتدا بررسی می‌شود تا مسیر درمان با توجه به وضعیت فرد و نظر تیم درمان مشخص شود.
            </p>
            <p className="text-base font-medium text-primary leading-relaxed mb-4 max-w-xl">
              {siteConfig.mission}
            </p>
            <p className="text-base text-text-secondary leading-relaxed mb-8 max-w-xl">
              خانواده‌ها نیز می‌توانند برای دریافت اطلاعات اولیه با کلینیک تماس بگیرند.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button href={siteConfig.phoneTel} variant="primary" size="lg">
                تماس محرمانه با کلینیک
              </Button>
              <Button href="/about#process" variant="outline" size="lg">
                آشنایی با روند مراجعه
              </Button>
            </div>
            <a href={siteConfig.phoneTel} className="block text-2xl font-extrabold text-primary hover:text-accent transition-colors mb-8">
              {siteConfig.phoneDisplay}
            </a>
            <ul className="flex flex-wrap gap-4" aria-label="نشان‌های اعتماد">
              {trustItems.map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-sm font-medium text-text">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary shrink-0" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative rounded-[24px] overflow-hidden shadow-xl img-hero-wrap">
              <Image
                src={clinicImages.hero.src}
                alt={clinicImages.hero.alt}
                width={clinicImages.hero.width}
                height={clinicImages.hero.height}
                priority
                className="img-hero"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="bg-surface rounded-[16px] px-5 py-4 shadow-md border border-border flex items-center gap-3">
              <div className="w-11 h-11 bg-sage rounded-[12px] flex items-center justify-center text-primary shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <strong className="block text-sm font-bold text-primary">محیط امن و محرمانه</strong>
                <span className="text-xs text-text-secondary">اطلاعات شما در امان است</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
