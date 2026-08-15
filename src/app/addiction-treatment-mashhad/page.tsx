import { createPageMetadata } from "@/lib/metadata";
import { LandingPage } from "@/components/seo/LandingPage";

export const metadata = createPageMetadata({
  title: "کلینیک ترک اعتیاد مشهد | کلینیک خورشید",
  description:
    "کلینیک ترک اعتیاد خورشید در مشهد — مرکز درمان علمی و محرمانه اختلالات مصرف مواد در محدوده وکیل‌آباد.",
  path: "/addiction-treatment-mashhad",
});

export default function AddictionTreatmentMashhadPage() {
  return (
    <LandingPage
      breadcrumbLabel="کلینیک ترک اعتیاد مشهد"
      h1="کلینیک ترک اعتیاد خورشید در مشهد"
      intro="کلینیک خورشید در محدوده وکیل‌آباد مشهد، خدمات ارزیابی، مشاوره و درمان اختلالات مصرف مواد را ارائه می‌دهد. شرایط هر مراجعه‌کننده ابتدا بررسی می‌شود تا مسیر درمان متناسب با وضعیت فرد تعیین گردد."
      links={[
        { href: "/addiction-consultation-mashhad", label: "مشاوره ترک اعتیاد مشهد" },
        { href: "/outpatient-addiction-treatment-mashhad", label: "درمان سرپایی اعتیاد مشهد" },
        { href: "/family-guide", label: "راهنمای خانواده" },
      ]}
    />
  );
}
