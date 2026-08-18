import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { SectionHeader } from "@/components/ui/Section";
import { LicensesList } from "@/components/ui/LicensesList";
import { clinicGallery } from "@/lib/images";

export function CredentialsSection() {
  return (
    <section className="section-padding bg-sage-light" aria-labelledby="credentials-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          id="credentials-title"
          label="مجوزها و مدارک"
          title="مدارک رسمی کلینیک خورشید"
          description={`کلینیک خورشید دارای پروانه مطب، مجوز MMT و پروانه بهره‌برداری ترک اعتیاد از ${siteConfig.licensesIssuer} است.`}
          centered
        />
        <LicensesList className="max-w-4xl mx-auto mb-12" />
        <h3 className="text-xl font-bold text-primary text-center mb-6">فضای کلینیک</h3>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {clinicGallery.map((image) => (
            <div
              key={image.src}
              className="rounded-[16px] overflow-hidden border border-border bg-surface shadow-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="img-gallery"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
