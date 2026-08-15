import Link from "next/link";
import { Button } from "@/components/ui/Button";

const topics = [
  { title: "چطور درباره درمان صحبت کنیم؟", href: "/family-guide#talking" },
  { title: "چه زمانی کمک تخصصی بگیریم؟", href: "/family-guide#when-help" },
  { title: "در اولین تماس چه سوالاتی بپرسیم؟", href: "/family-guide#first-call" },
];

export function FamilySection() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="family-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="family-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary mb-6">
              اگر یکی از اعضای خانواده درگیر مصرف مواد است
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              لازم نیست برای گرفتن اطلاعات اولیه منتظر تصمیم قطعی فرد بمانید. خانواده می‌تواند ابتدا درباره نحوه برخورد، شرایط مراجعه و مسیرهای موجود سوال کند.
            </p>
            <Button href="/family-guide" variant="primary" size="lg">
              راهنمای خانواده
            </Button>
          </div>
          <div className="space-y-4">
            {topics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="block bg-bg-warm border border-border rounded-[16px] p-6 hover:border-sage hover:shadow-md transition-all duration-300 group"
              >
                <span className="font-semibold text-primary group-hover:text-accent transition-colors">
                  {topic.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
