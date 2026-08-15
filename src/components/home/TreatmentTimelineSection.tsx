import { SectionHeader } from "@/components/ui/Section";

const steps = [
  {
    step: "01",
    title: "تماس اولیه",
    text: "برای دریافت اطلاعات و هماهنگی مراجعه با کلینیک تماس بگیرید.",
  },
  {
    step: "02",
    title: "ارزیابی",
    text: "شرایط فرد توسط تیم درمان بررسی می‌شود.",
  },
  {
    step: "03",
    title: "پیشنهاد مسیر درمان",
    text: "بر اساس ارزیابی انجام‌شده، گزینه‌های مناسب توضیح داده می‌شوند.",
  },
  {
    step: "04",
    title: "پیگیری",
    text: "در صورت شروع درمان، روند مراجعه و پیگیری طبق برنامه انجام می‌شود.",
  },
];

export function TreatmentTimelineSection() {
  return (
    <section className="section-padding bg-bg-warm" id="process" aria-labelledby="timeline-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          id="timeline-title"
          label="روند مراجعه"
          title="روند مراجعه به کلینیک چگونه است؟"
        />
        <ol className="grid lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {steps.map((item, index) => (
            <li key={item.step} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-0 w-full h-0.5 bg-border -z-10 translate-x-1/2" aria-hidden="true" />
              )}
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
