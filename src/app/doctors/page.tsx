import Link from "next/link";
import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import { Container, SectionHeader } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { doctors } from "@/lib/data/doctors";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createPageMetadata({
  title: "تیم درمان | کلینیک ترک اعتیاد خورشید مشهد",
  description:
    "تیم درمان کلینیک خورشید مشهد به سرپرستی دکتر سید هاشم سیادتی، پزشک دوره‌دیده درمان اعتیاد با نزدیک به ۲۰ سال تجربه.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <div className="section-padding bg-bg-warm">
      <Container>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: "تیم درمان" },
          ])}
        />
        <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "تیم درمان" }]} />
        <SectionHeader
          title="تیم درمان کلینیک خورشید"
          description="پزشک درمانگر اعتیاد، روانشناس و مشاور، و پرستار کلینیک خورشید."
        />
        <div className="max-w-5xl">
          {doctors.map((doctor) => (
            <article
              key={doctor.slug}
              className="overflow-hidden rounded-[24px] border border-border bg-surface shadow-sm"
            >
              <div className="grid grid-cols-[6.5rem_1fr] sm:grid-cols-[8.5rem_1fr] lg:grid-cols-[260px_1fr]">
                <div className="relative bg-primary min-h-[6.5rem] sm:min-h-[8.5rem] lg:min-h-full">
                  {doctor.image && (
                    <Image
                      src={doctor.image}
                      alt={doctor.imageAlt ?? doctor.name}
                      width={400}
                      height={500}
                      className="absolute inset-0 img-portrait"
                      sizes="(max-width: 1024px) 120px, 260px"
                    />
                  )}
                </div>
                <div className="p-4 sm:p-6 lg:p-10">
                  <p className="text-sm font-semibold text-accent">{doctor.role ?? doctor.title}</p>
                  <h2 className="mt-2 text-2xl font-extrabold text-primary">{doctor.name}</h2>
                  <p className="mt-1 text-text-secondary">{doctor.specialty}</p>
                  <ul className="mt-4 space-y-1 text-sm text-text-secondary">
                    {doctor.education && <li>تحصیلات: {doctor.education}</li>}
                    {doctor.experience && <li>سوابق: {doctor.experience}</li>}
                    {doctor.registrationNumber && (
                      <li>شماره نظام پزشکی: {doctor.registrationNumber}</li>
                    )}
                  </ul>
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="mt-6 inline-block text-sm font-semibold text-accent transition-colors hover:text-primary"
                  >
                    مشاهده پروفایل کامل →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
