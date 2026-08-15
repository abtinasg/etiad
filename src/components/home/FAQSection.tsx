import { faqItems } from "@/lib/data/faq";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/Section";
import Link from "next/link";

export function FAQSection() {
  const preview = faqItems.slice(0, 5);

  return (
    <section className="section-padding bg-surface" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          id="faq-title"
          label="سوالات متداول"
          title="سوالات متداول"
          centered
        />
        <FAQAccordion items={preview} />
        <div className="mt-8 text-center">
          <Link href="/faq" className="text-primary font-semibold hover:text-accent transition-colors">
            مشاهده همه سوالات →
          </Link>
        </div>
      </div>
    </section>
  );
}
