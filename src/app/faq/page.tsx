import { createPageMetadata } from "@/lib/metadata";
import { Container, SectionHeader } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { faqItems } from "@/lib/data/faq";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/components/seo/JsonLd";

const verifiedFaqItems = faqItems.filter((item) => !item.needsClinicConfirmation);

export const metadata = createPageMetadata({
  title: "سوالات متداول | کلینیک ترک اعتیاد خورشید مشهد",
  description:
    "پاسخ به سوالات متداول درباره مراجعه، محرمانگی، روند درمان و شرایط کلینیک خورشید مشهد.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <div className="section-padding bg-bg-warm">
      <Container narrow>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "خانه", url: "/" },
            { name: "سوالات متداول" },
          ])}
        />
        {verifiedFaqItems.length > 0 && (
          <JsonLd data={faqJsonLd(verifiedFaqItems)} />
        )}
        <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "سوالات متداول" }]} />
        <SectionHeader
          title="سوالات متداول"
          description="پاسخ به پرسش‌های رایج درباره مراجعه و خدمات کلینیک. برخی پاسخ‌ها پس از تأیید کلینیک تکمیل می‌شوند."
          centered
        />
        <FAQAccordion items={faqItems} />
      </Container>
    </div>
  );
}
