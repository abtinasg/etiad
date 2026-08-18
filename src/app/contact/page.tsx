import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { clinicImages } from "@/lib/images";
import { Container } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ClinicMap } from "@/components/ui/ClinicMap";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createPageMetadata({
  title: "تماس با کلینیک خورشید مشهد",
  description: `تماس با کلینیک ترک اعتیاد خورشید مشهد. تلفن: ${siteConfig.phoneDisplay}. آدرس: ${siteConfig.addressShort}. ساعات: ${siteConfig.workingHoursShort}`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="section-padding bg-bg-warm">
      <Container>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: "تماس با ما" },
          ])}
        />
        <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "تماس با ما" }]} />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-10">
          تماس با کلینیک خورشید مشهد
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-surface border border-border rounded-[24px] p-8 lg:p-10">
            <dl className="space-y-8">
              <div>
                <dt className="text-sm font-semibold text-text-secondary mb-2">تلفن</dt>
                <dd>
                  <a
                    href={siteConfig.phoneTel}
                    className="text-3xl font-extrabold text-primary hover:text-accent transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-text-secondary mb-2">آدرس</dt>
                <dd className="text-text leading-relaxed">{siteConfig.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-text-secondary mb-2">ساعات کاری</dt>
                <dd className="text-text">{siteConfig.workingHours}</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3 mt-10">
              <Button href={siteConfig.phoneTel} variant="primary" size="lg">
                تماس با {siteConfig.phoneDisplay}
              </Button>
              <Button href={siteConfig.mapsDirectionsUrl} variant="outline" size="lg">
                مسیریابی
              </Button>
            </div>
          </div>

          <div id="map" className="space-y-6">
            <div className="rounded-[24px] overflow-hidden border border-border h-44 sm:h-52 lg:min-h-[280px] relative">
              <ClinicMap />
            </div>
            <div className="rounded-[16px] overflow-hidden border border-border relative h-40 sm:aspect-video sm:h-auto">
              <Image
                src={clinicImages.signage.src}
                alt={clinicImages.signage.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
