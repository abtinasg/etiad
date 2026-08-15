import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/lib/data/doctors";
import { SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function TeamSection() {
  const doctor = doctors[0];

  return (
    <section className="section-padding bg-surface" id="team" aria-labelledby="team-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          id="team-title"
          label="تیم درمان"
          title="تیم درمان کلینیک خورشید"
          description="ارزیابی و برنامه‌ریزی درمانی تحت نظر پزشک متخصص کلینیک انجام می‌شود."
          centered
        />

        {doctor && (
          <article className="max-w-5xl mx-auto overflow-hidden rounded-[24px] border border-border bg-bg-warm shadow-lg">
            <div className="grid grid-cols-[6.5rem_1fr] sm:grid-cols-[8.5rem_1fr] lg:grid-cols-[280px_1fr]">
              <div className="relative bg-primary min-h-[6.5rem] sm:min-h-[8.5rem] lg:min-h-full">
                {doctor.placeholder ? (
                  <div className="absolute inset-0 flex items-center justify-center text-white/80 text-xs p-2 text-center">
                    تصویر پزشک
                  </div>
                ) : (
                  <Image
                    src={doctor.image!}
                    alt={doctor.imageAlt ?? doctor.name}
                    width={400}
                    height={500}
                    className="absolute inset-0 img-portrait"
                    sizes="(max-width: 1024px) 120px, 280px"
                  />
                )}
              </div>

              <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-10">
                <span className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-semibold text-accent sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {doctor.role ?? doctor.title}
                </span>
                <h3 className="text-lg font-extrabold text-primary sm:text-2xl lg:text-3xl">{doctor.name}</h3>
                <p className="mt-1 text-sm font-medium text-text sm:text-base">{doctor.specialty}</p>
                {doctor.bio && (
                  <p className="mt-3 max-w-xl text-xs leading-relaxed text-text-secondary sm:mt-4 sm:text-sm lg:text-base">
                    {doctor.bio}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                  <Button href={`/doctors/${doctor.slug}`} variant="primary" size="sm" className="sm:!px-5 sm:!py-3">
                    مشاهده پروفایل
                  </Button>
                  <Link
                    href="/doctors"
                    className="text-xs font-semibold text-primary transition-colors hover:text-accent sm:text-sm"
                  >
                    سایر اعضای تیم →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )}

        {doctors.length > 1 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.slice(1).map((member) => (
              <article
                key={member.slug}
                className="overflow-hidden rounded-[16px] border border-border bg-bg-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-44 bg-sage sm:h-52">
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={member.imageAlt ?? member.name}
                      width={400}
                      height={500}
                      className="img-portrait"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{member.specialty}</p>
                  <Link
                    href={`/doctors/${member.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-accent transition-colors hover:text-primary"
                  >
                    مشاهده پروفایل →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
