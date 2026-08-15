export const siteConfig = {
  name: "کلینیک ترک اعتیاد خورشید مشهد",
  shortName: "کلینیک خورشید مشهد",
  brand: "خورشید",
  brandSub: "مرکز درمان اختلالات مصرف مواد",
  description:
    "کلینیک ترک اعتیاد خورشید در مشهد با ارائه خدمات ارزیابی، مشاوره و درمان اختلالات مصرف مواد. جهت دریافت اطلاعات و هماهنگی مراجعه با کلینیک تماس بگیرید.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://khorshid-clinic.ir",
  phone: "09335754070",
  phoneTel: "tel:09335754070",
  phoneDisplay: "۰۹۳۳۵۷۵۴۰۷۰",
  address:
    "مشهد، بلوار وکیل آباد، سه راه ۷ تیر، بین پل و وکیل آباد ۲۲، جنب آزمایشگاه ابن سینا، پلاک ۵۳۰، ساختمان سامان، طبقه اول",
  addressShort: "بلوار وکیل آباد، سه راه ۷ تیر — مشهد",
  workingHours: "همه‌روزه به جز ایام تعطیل، ساعت ۱۶ تا ۱۹",
  workingHoursShort: "۱۶ تا ۱۹",
  workingHoursResponse: "ساعت پاسخگویی: ۱۶ تا ۱۹",
  locale: "fa-IR",
  lang: "fa",
  direction: "rtl" as const,
  medicalDisclaimer:
    "مطالب این وب‌سایت صرفاً برای افزایش آگاهی عمومی است و جایزین تشخیص یا توصیه پزشک نیست.",
  contentDisclaimer:
    "اطلاعات این سایت جایگزین ارزیابی یا توصیه پزشک نیست.",
  needsVerification: "[نیازمند تأیید مشتری]",
  needsClinicAnswer: "[پاسخ باید توسط کلینیک تأیید شود]",
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};
