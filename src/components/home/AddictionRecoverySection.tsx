import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { clinicImages } from "@/lib/images";
import { addictionRecoveryItems, type AddictionRecoveryItem } from "@/lib/data/addictionRecovery";
import { SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

function RecoveryIcon({ type }: { type: AddictionRecoveryItem["icon"] }) {
  const props = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true as const };

  switch (type) {
    case "crystal":
      return (
        <svg {...props}>
          <path d="M12 3l7 7-7 13L5 10l7-7z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "crack":
      return (
        <svg {...props}>
          <path d="M8 18l4-12 4 12" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M7 14h10" stroke="white" strokeWidth="1.8" />
        </svg>
      );
    case "tramadol":
      return (
        <svg {...props}>
          <rect x="7" y="7" width="10" height="10" rx="2" stroke="white" strokeWidth="1.8" />
          <path d="M12 7v10M7 12h10" stroke="white" strokeWidth="1.8" />
        </svg>
      );
    case "methadone":
      return (
        <svg {...props}>
          <rect x="4" y="8" width="16" height="8" rx="4" stroke="white" strokeWidth="1.8" />
          <line x1="12" y1="8" x2="12" y2="16" stroke="white" strokeWidth="1.8" />
        </svg>
      );
    case "buprenorphine":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="1.8" />
          <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="1.8" />
        </svg>
      );
    case "opium":
      return (
        <svg {...props}>
          <rect x="6" y="10" width="12" height="8" rx="2" stroke="white" strokeWidth="1.8" />
          <path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="white" strokeWidth="1.8" />
        </svg>
      );
    case "hashish":
      return (
        <svg {...props}>
          <path d="M6 18l3-12h6l3 12" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="12" cy="8" r="2" fill="white" />
        </svg>
      );
    case "heroin":
      return (
        <svg {...props}>
          <path d="M8 18l4-12 4 12" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9 14h6" stroke="white" strokeWidth="1.8" />
        </svg>
      );
    case "chemical":
      return (
        <svg {...props}>
          <path d="M9 3h6v4l4 10H5L9 7V3z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8 14h8" stroke="white" strokeWidth="1.8" />
        </svg>
      );
  }
}

export function AddictionRecoverySection() {
  return (
    <section
      className="section-padding bg-sage-light"
      id="addiction-recovery"
      aria-labelledby="addiction-recovery-title"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          id="addiction-recovery-title"
          label="ترک اعتیاد"
          title="خدمات کلینیک ترک اعتیاد خورشید"
          description="مرکز درمان سوء مصرف مواد — ارزیابی تخصصی و مسیر درمان متناسب با نوع اعتیاد."
          centered
        />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-8 lg:gap-10 items-start">
          <figure className="overflow-hidden rounded-[20px] border border-border bg-surface shadow-md">
            <div className="relative aspect-[4/3] sm:aspect-[3/2]">
              <Image
                src={clinicImages.addictionSign.src}
                alt={clinicImages.addictionSign.alt}
                fill
                className="img-signage"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
            <figcaption className="bg-primary px-4 py-3 text-center text-sm font-semibold text-white">
              مرکز درمان سوء مصرف مواد — ترک اعتیاد خورشید
              <span className="mt-1 block text-xs font-medium text-white/80">
                دارای مجوز از {siteConfig.licensesIssuer}
              </span>
            </figcaption>
          </figure>

          <div>
            <ul className="grid grid-cols-2 gap-3 sm:gap-4">
              {addictionRecoveryItems.map((item) => (
                <li key={item.id}>
                  <article
                    className="flex flex-col items-center gap-3 rounded-[16px] border border-border bg-surface p-4 sm:p-5 text-center shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full shadow-sm"
                      style={{ backgroundColor: item.color }}
                    >
                      <RecoveryIcon type={item.icon} />
                    </span>
                    <h3 className="text-sm font-bold leading-snug text-primary sm:text-base">
                      {item.label}
                    </h3>
                  </article>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-[16px] bg-primary px-5 py-4 text-center text-white sm:mt-8">
              <p className="text-sm text-white/85 mb-3">
                برای دریافت اطلاعات درباره مراجعه و مسیر درمان با کلینیک تماس بگیرید.
              </p>
              <Button href={siteConfig.phoneTel} variant="accent" size="md">
                تماس با کلینیک
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
