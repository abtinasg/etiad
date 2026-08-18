import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getDoctorBySlug, doctors } from "@/lib/data/doctors";
import { createDoctorMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { JsonLd, breadcrumbJsonLd, physicianJsonLd } from "@/components/seo/JsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return createDoctorMetadata(
    doctor.name,
    doctor.bio ?? `${doctor.title} — ${doctor.specialty}`,
    doctor.slug
  );
}

export default async function DoctorDetailPage({ params }: Props) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  return (
    <div className="section-padding bg-bg-warm">
      <Container>
        <JsonLd
          data={physicianJsonLd({
            name: doctor.name,
            title: doctor.title,
            specialty: doctor.specialty,
            slug: doctor.slug,
            image: doctor.image,
            identifier: doctor.registrationNumber,
          })}
        />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: "تیم درمان", url: "/doctors" },
            { name: doctor.name },
          ])}
        />
        <Breadcrumb
          items={[
            { label: "خانه", href: "/" },
            { label: "تیم درمان", href: "/doctors" },
            { label: doctor.name },
          ]}
        />
        <article className="max-w-3xl">
          <div className="flex flex-col sm:flex-row gap-8 mb-10">
            <div className="relative h-36 w-28 shrink-0 overflow-hidden rounded-[16px] bg-primary sm:h-44 sm:w-32">
              {doctor.image ? (
                <Image
                  src={doctor.image}
                  alt={doctor.imageAlt ?? doctor.name}
                  fill
                  className="img-portrait"
                  sizes="128px"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-sm text-white/80">
                  تصویر پزشک
                </div>
              )}
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-primary mb-2">{doctor.name}</h1>
              <p className="text-lg text-text-secondary">{doctor.title}</p>
              <p className="text-text-secondary">{doctor.specialty}</p>
            </div>
          </div>

          {doctor.placeholder ? (
            <div className="bg-sage-light border border-border rounded-[16px] p-8 mb-10">
              <p className="text-text-secondary leading-relaxed">
                اطلاعات پزشک پس از دریافت از کلینیک تکمیل می‌شود. این صفحه شامل بیوگرافی،
                مدارک، سوابق و شماره نظام پزشکی (در صورت تأیید) خواهد بود.
              </p>
            </div>
          ) : (
            <div className="mb-10">
              <div className="prose-medical mb-8">
                <p>{doctor.bio}</p>
              </div>
              {doctor.slug === "dr-afsari" && (
                <div className="img-office-wrap rounded-[16px] border border-border">
                  <Image
                    src="/images/khorshid-clinic-doctor-office.jpg"
                    alt="دکتر سید هاشم سیادتی در اتاق مشاوره کلینیک خورشید"
                    fill
                    className="img-office"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              )}
            </div>
          )}

          <dl className="space-y-4 mb-10">
            <div>
              <dt className="text-sm font-semibold text-text-secondary">تحصیلات</dt>
              <dd className="text-text">{doctor.education ?? "[نیازمند تأیید مشتری]"}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-text-secondary">سوابق</dt>
              <dd className="text-text">{doctor.experience ?? "[نیازمند تأیید مشتری]"}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-text-secondary">شماره نظام پزشکی</dt>
              <dd className="text-text">{doctor.registrationNumber ?? "[نیازمند تأیید مشتری]"}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-text-secondary">مدارک کلینیک</dt>
              <dd className="text-text">
                پروانه مطب، مجوز MMT و پروانه بهره‌برداری ترک اعتیاد از {siteConfig.licensesIssuer}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-text-secondary">نقش در کلینیک</dt>
              <dd className="text-text">{doctor.role ?? doctor.specialty}</dd>
            </div>
          </dl>

          <div className="bg-primary text-white rounded-[16px] p-8">
            <p className="mb-4">برای دریافت اطلاعات درباره مراجعه با کلینیک تماس بگیرید.</p>
            <Button href={siteConfig.phoneTel} variant="accent">
              تماس با کلینیک
            </Button>
          </div>

          <div className="mt-8">
            <Link href="/services" className="text-primary font-semibold hover:text-accent">
              مشاهده خدمات درمانی →
            </Link>
          </div>
        </article>
      </Container>
    </div>
  );
}
