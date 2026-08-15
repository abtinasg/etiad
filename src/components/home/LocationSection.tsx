import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { clinicImages } from "@/lib/images";
import { Button } from "@/components/ui/Button";

export function LocationSection() {
  return (
    <section className="section-padding bg-sage-light" id="location" aria-labelledby="location-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 id="location-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary text-center mb-10 lg:mb-14">
          کلینیک ترک اعتیاد در محدوده وکیل‌آباد مشهد
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 bg-surface rounded-[24px] overflow-hidden border border-border shadow-sm">
          <div className="p-8 lg:p-10">
            <dl className="space-y-6">
              <div>
                <dt className="text-sm font-semibold text-text-secondary mb-1">آدرس</dt>
                <dd className="text-text leading-relaxed">{siteConfig.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-text-secondary mb-1">ساعات کاری</dt>
                <dd className="text-text">{siteConfig.workingHours}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-text-secondary mb-1">تلفن</dt>
                <dd>
                  <a href={siteConfig.phoneTel} className="text-2xl font-extrabold text-primary hover:text-accent transition-colors">
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-text-secondary mb-1">نشانه</dt>
                <dd className="text-text">جنب آزمایشگاه ابن سینا — ساختمان سامان</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button href="/contact#map" variant="outline">
                مسیریابی
              </Button>
              <Button href={siteConfig.phoneTel} variant="primary">
                تماس با کلینیک
              </Button>
            </div>
          </div>
          <div id="map" className="relative h-44 sm:h-52 lg:h-auto lg:min-h-[280px]">
            <Image
              src={clinicImages.buildingExterior.src}
              alt={clinicImages.buildingExterior.alt}
              fill
              className="img-building"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
