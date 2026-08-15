import Link from "next/link";
import { siteConfig } from "@/lib/site";

const serviceLinks = [
  { href: "/services/initial-assessment", label: "ارزیابی اولیه" },
  { href: "/services/addiction-consultation", label: "مشاوره درمان" },
  { href: "/services/family-counseling", label: "مشاوره خانواده" },
  { href: "/services/psychology-services", label: "خدمات روان‌شناسی" },
];

const guideLinks = [
  { href: "/family-guide", label: "راهنمای خانواده" },
  { href: "/faq", label: "سوالات متداول" },
  { href: "/addiction-consultation-mashhad", label: "مشاوره اعتیاد مشهد" },
  { href: "/outpatient-addiction-treatment-mashhad", label: "درمان سرپایی مشهد" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="text-2xl font-extrabold">{siteConfig.brand}</span>
            <p className="mt-3 text-sm text-white/75 leading-relaxed">
              مرکز درمان علمی و محرمانه اختلالات مصرف مواد در مشهد
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">خدمات درمانی</h3>
            <ul className="space-y-2 text-sm text-white/75">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">راهنمای مراجعه</h3>
            <ul className="space-y-2 text-sm text-white/75">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">تماس</h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <a href={siteConfig.phoneTel} className="font-bold text-white text-lg hover:text-accent transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="leading-relaxed">{siteConfig.address}</li>
              <li>ساعات: {siteConfig.workingHoursShort}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/60">
          <p>© ۱۴۰۴ {siteConfig.name}. تمامی حقوق محفوظ است.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="hover:text-white">درباره ما</Link>
            <Link href="/doctors" className="hover:text-white">تیم درمان</Link>
            <Link href="/articles" className="hover:text-white">مقالات</Link>
            <Link href="/contact" className="hover:text-white">تماس</Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-white/50 leading-relaxed max-w-3xl">
          {siteConfig.medicalDisclaimer}
        </p>

        <p className="mt-6 text-xs text-white/50 text-center">
          ساخته شده توسط{" "}
          <a
            href="https://araaye.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            آرایه🤍
          </a>
        </p>
      </div>
    </footer>
  );
}
