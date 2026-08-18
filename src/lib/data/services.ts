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
    slug: "detoxification",
    title: "سم‌زدایی",
    shortDescription: "سم‌زدایی تحت نظارت تیم درمان کلینیک.",
    description:
      "سم‌زدایی نخستین مرحله درمان است و با نظارت پزشک، پرستار و تیم درمان انجام می‌شود تا علائم جسمی قطع مصرف به‌صورت ایمن مدیریت شود.",
    icon: "assessment",
    verified: true,
  },
  {
    slug: "maintenance-treatment",
    title: "درمان نگهدارنده",
    shortDescription: "درمان نگهدارنده بر اساس پروتکل‌های وزارت بهداشت.",
    description:
      "درمان نگهدارنده با نظارت پزشک و طبق پروتکل‌های ابلاغی وزارت بهداشت انجام می‌شود تا روند درمان پایدار بماند و خطر بازگشت به مصرف کاهش یابد.",
    icon: "consultation",
    verified: true,
  },
  {
    slug: "individual-counseling",
    title: "مشاوره فردی",
    shortDescription: "جلسات مشاوره فردی با روانشناس و مشاور کلینیک.",
    description:
      "در مشاوره فردی، شرایط هر مراجعه‌کننده جداگانه بررسی می‌شود تا مسیر درمان، چالش‌های روانی و برنامه پیگیری متناسب با وضعیت فرد تنظیم گردد.",
    icon: "psychology",
    verified: true,
  },
  {
    slug: "group-therapy",
    title: "گروه‌درمانی",
    shortDescription: "جلسات گروه‌درمانی برای حمایت و آموزش در مسیر ترک.",
    description:
      "گروه‌درمانی فضایی برای تبادل تجربه، آموزش مهارت‌های مقابله‌ای و تقویت انگیزه درمان در کنار سایر مراجعان و تحت نظارت مشاور است.",
    icon: "relapse",
    verified: true,
  },
  {
    slug: "family-therapy",
    title: "خانواده‌درمانی",
    shortDescription: "همراهی و راهنمایی خانواده در فرآیند درمان.",
    description:
      "خانواده‌درمانی به اعضای خانواده کمک می‌کند نحوه برخورد، حمایت و همراهی با فرد در حال درمان را بهتر بشناسند و محیط مناسب‌تری برای بهبود فراهم کنند.",
    icon: "family",
    verified: true,
  },
  {
    slug: "aftercare",
    title: "پشتیبانی پس از درمان",
    shortDescription: "پیگیری و حمایت پس از اتمام مرحله اصلی درمان.",
    description:
      "پشتیبانی پس از درمان شامل پیگیری وضعیت فرد، پیشگیری از بازگشت به مصرف و ادامه حمایت روان‌شناختی پس از مرحله اصلی درمان است.",
    icon: "followup",
    verified: true,
  },
];

export const legacyServices: Service[] = [
  {
    slug: "initial-assessment",
    title: "ارزیابی اولیه",
    shortDescription: "بررسی وضعیت جسمی و روانی مراجعه‌کننده توسط تیم درمان.",
    description:
      "ارزیابی اولیه گام نخست در مسیر درمان است. در این مرحله، وضعیت جسمی، روانی و اجتماعی مراجعه‌کننده بررسی می‌شود تا مسیر درمان متناسب با شرایط فرد تعیین گردد.",
    icon: "assessment",
    verified: false,
  },
  {
    slug: "addiction-consultation",
    title: "مشاوره درمان اعتیاد",
    shortDescription: "جلسات مشاوره فردی با رویکرد درمانی علمی.",
    description:
      "مشاوره درمان اعتیاد به مراجعه‌کننده کمک می‌کند درباره مسیر درمان، گزینه‌های موجود و مراحل بعدی اطلاعات دقیق دریافت کند.",
    icon: "consultation",
    verified: false,
  },
  {
    slug: "psychology-services",
    title: "خدمات روان‌شناسی",
    shortDescription: "حمایت روان‌شناختی در فرآیند درمان و بهبود.",
    description:
      "خدمات روان‌شناسی بخشی از برنامه درمان چندتخصصی است و به مدیریت چالش‌های روانی مرتبط با اختلال مصرف مواد کمک می‌کند.",
    icon: "psychology",
    verified: false,
  },
  {
    slug: "family-counseling",
    title: "مشاوره خانواده",
    shortDescription: "راهنمایی خانواده برای ایجاد محیط حمایتی.",
    description:
      "مشاوره خانواده به اعضای خانواده کمک می‌کند نحوه برخورد، حمایت و همراهی در فرآیند درمان را بهتر درک کنند.",
    icon: "family",
    verified: false,
  },
  {
    slug: "treatment-followup",
    title: "پیگیری روند درمان",
    shortDescription: "نظارت مستمر بر پیشرفت درمان و تنظیم برنامه.",
    description:
      "پیگیری روند درمان به تیم درمان امکان می‌دهد مسیر درمان را بر اساس وضعیت فرد تنظیم و حمایت مستمر ارائه کند.",
    icon: "followup",
    verified: false,
  },
  {
    slug: "relapse-prevention",
    title: "پیشگیری از بازگشت به مصرف",
    shortDescription: "برنامه‌های حمایتی برای کاهش خطر عود.",
    description:
      "پیشگیری از بازگشت به مصرف بخشی از برنامه درمان است و شامل آموزش، پیگیری و حمایت روان‌شناختی می‌شود.",
    icon: "relapse",
    verified: false,
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

export const allServices = [...services, ...legacyServices, ...draftServices];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getPublishedServices(): Service[] {
  return services;
}
