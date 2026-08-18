import Link from "next/link";
import { getPublishedServices } from "@/lib/data/services";
import { SectionHeader } from "@/components/ui/Section";

const iconMap: Record<string, string> = {
  assessment: "01",
  consultation: "02",
  psychology: "03",
  family: "04",
  followup: "05",
  relapse: "06",
};

export function ServicesSection() {
  const services = getPublishedServices();

  return (
    <section className="section-padding bg-surface" id="services" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          id="services-title"
          label="خدمات درمانی"
          title="خدمات کلینیک خورشید"
          description="سم‌زدایی، درمان نگهدارنده، مشاوره فردی، گروه‌درمانی، خانواده‌درمانی و پشتیبانی پس از درمان."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.slug}
              className="bg-bg-warm border border-transparent rounded-[16px] p-6 lg:p-8 transition-all duration-300 hover:bg-surface hover:border-border hover:shadow-md group"
            >
              <span className="text-sm font-bold text-accent mb-4 block">
                {iconMap[service.icon] ?? "•"}
              </span>
              <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {service.shortDescription}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="text-sm font-semibold text-accent hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
              >
                اطلاعات بیشتر ←
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-primary font-semibold hover:text-accent transition-colors"
          >
            مشاهده همه خدمات →
          </Link>
        </div>
      </div>
    </section>
  );
}
