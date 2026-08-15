import { siteConfig } from "@/lib/site";
import { SectionHeader } from "@/components/ui/Section";

const points = [
  "شرایط مصرف افراد یکسان نیست.",
  "وضعیت جسمی و روانی باید بررسی شود.",
  "انتخاب روش درمان باید توسط فرد متخصص انجام شود.",
  "پیگیری می‌تواند بخشی از روند درمان باشد.",
];

export function AssessmentEducationSection() {
  return (
    <section className="section-padding bg-sage-light" aria-labelledby="assessment-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SectionHeader
            id="assessment-title"
            title="چرا ارزیابی تخصصی قبل از شروع درمان مهم است؟"
          />
          <div>
            <ul className="space-y-4 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-text-secondary">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5" aria-hidden="true">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-sm text-text-secondary bg-surface border border-border rounded-[12px] p-4">
              {siteConfig.contentDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
