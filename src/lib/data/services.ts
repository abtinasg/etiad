export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: "assessment" | "consultation" | "psychology" | "family" | "followup" | "relapse";
  verified: boolean;
  draft?: boolean;
  needsVerification?: boolean;
};

export const services: Service[] = [
  {
    slug: "initial-assessment",
    title: "ارزیابی اولیه",
    shortDescription: "بررسی وضعیت جسمی و روانی مراجعه‌کننده توسط تیم درمان.",
    description:
      "ارزیابی اولیه گام نخست در مسیر درمان است. در این مرحله، وضعیت جسمی، روانی و اجتماعی مراجعه‌کننده بررسی می‌شود تا مسیر درمان متناسب با شرایط فرد تعیین گردد.",
    icon: "assessment",
    verified: false,
    needsVerification: true,
  },
  {
    slug: "addiction-consultation",
    title: "مشاوره درمان اعتیاد",
    shortDescription: "جلسات مشاوره فردی با رویکرد درمانی علمی.",
    description:
      "مشاوره درمان اعتیاد به مراجعه‌کننده کمک می‌کند درباره مسیر درمان، گزینه‌های موجود و مراحل بعدی اطلاعات دقیق دریافت کند.",
    icon: "consultation",
    verified: false,
    needsVerification: true,
  },
  {
    slug: "psychology-services",
    title: "خدمات روان‌شناسی",
    shortDescription: "حمایت روان‌شناختی در فرآیند درمان و بهبود.",
    description:
      "خدمات روان‌شناسی بخشی از برنامه درمان چندتخصصی است و به مدیریت چالش‌های روانی مرتبط با اختلال مصرف مواد کمک می‌کند.",
    icon: "psychology",
    verified: false,
    needsVerification: true,
  },
  {
    slug: "family-counseling",
    title: "مشاوره خانواده",
    shortDescription: "راهنمایی خانواده برای ایجاد محیط حمایتی.",
    description:
      "مشاوره خانواده به اعضای خانواده کمک می‌کند نحوه برخورد، حمایت و همراهی در فرآیند درمان را بهتر درک کنند.",
    icon: "family",
    verified: false,
    needsVerification: true,
  },
  {
    slug: "treatment-followup",
    title: "پیگیری روند درمان",
    shortDescription: "نظارت مستمر بر پیشرفت درمان و تنظیم برنامه.",
    description:
      "پیگیری روند درمان به تیم درمان امکان می‌دهد مسیر درمان را بر اساس وضعیت فرد تنظیم و حمایت مستمر ارائه کند.",
    icon: "followup",
    verified: false,
    needsVerification: true,
  },
  {
    slug: "relapse-prevention",
    title: "پیشگیری از بازگشت به مصرف",
    shortDescription: "برنامه‌های حمایتی برای کاهش خطر عود.",
    description:
      "پیشگیری از بازگشت به مصرف بخشی از برنامه درمان است و شامل آموزش، پیگیری و حمایت روان‌شناختی می‌شود.",
    icon: "relapse",
    verified: false,
    needsVerification: true,
  },
];

export const draftServices: Service[] = [
  {
    slug: "opioid-treatment",
    title: "درمان وابستگی به تریاک",
    shortDescription: "ارزیابی و برنامه درمان — پس از تأیید کلینیک.",
    description: "این صفحه پس از تأیید ارائه خدمات توسط کلینیک منتشر خواهد شد.",
    icon: "consultation",
    verified: false,
    draft: true,
  },
  {
    slug: "methamphetamine-treatment",
    title: "درمان وابستگی به شیشه",
    shortDescription: "ارزیابی و برنامه درمان — پس از تأیید کلینیک.",
    description: "این صفحه پس از تأیید ارائه خدمات توسط کلینیک منتشر خواهد شد.",
    icon: "consultation",
    verified: false,
    draft: true,
  },
  {
    slug: "methadone-treatment",
    title: "درمان وابستگی به متادون",
    shortDescription: "ارزیابی و برنامه درمان — پس از تأیید کلینیک.",
    description: "این صفحه پس از تأیید ارائه خدمات توسط کلینیک منتشر خواهد شد.",
    icon: "consultation",
    verified: false,
    draft: true,
  },
  {
    slug: "cannabis-treatment",
    title: "درمان وابستگی به گل",
    shortDescription: "ارزیابی و برنامه درمان — پس از تأیید کلینیک.",
    description: "این صفحه پس از تأیید ارائه خدمات توسط کلینیک منتشر خواهد شد.",
    icon: "consultation",
    verified: false,
    draft: true,
  },
  {
    slug: "alcohol-treatment",
    title: "درمان وابستگی به الکل",
    shortDescription: "ارزیابی و برنامه درمان — پس از تأیید کلینیک.",
    description: "این صفحه پس از تأیید ارائه خدمات توسط کلینیک منتشر خواهد شد.",
    icon: "consultation",
    verified: false,
    draft: true,
  },
];

export const allServices = [...services, ...draftServices];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getPublishedServices(): Service[] {
  return services;
}
