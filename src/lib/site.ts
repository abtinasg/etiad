export const siteConfig = {
  name: "کلینیک ترک اعتیاد خورشید مشهد",
  shortName: "کلینیک ترک اعتیاد خورشید",
  brand: "خورشید",
  brandSub: "مرکز درمان اختلالات مصرف مواد",
  alternateNames: [
    "کلینیک ترک اعتیاد خورشید",
    "کلینیک اعتیاد خورشید مشهد",
    "کلینیک خورشید مشهد",
  ],
  sameAs: [
    "https://doctoreto.com/center/khorshid-mashhad-clinic/AkGnbG",
    "https://balad.ir/p/مرکز-درمان-سوء-مصرف-مواد-ترک-اعتیاد-خورشید-mashhad_drug-addiction-treatment-center-3FiMJad4a7lSub",
    "https://dr-koja.ir/center/کلینیک-ترک-اعتیاد-خورشید-مشهد-4118",
  ],
  description:
    "کلینیک ترک اعتیاد خورشید مشهد با مسئولیت فنی دکتر سید هاشم سیادتی؛ ارائه خدمات ارزیابی، مشاوره و درمان اختلالات مصرف مواد در وکیل‌آباد مشهد.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tarketiadkhorshid.ir",
  phone: "09335754070",
  phoneInternational: "+989335754070",
  phoneTel: "tel:09335754070",
  phoneDisplay: "۰۹۳۳۵۷۵۴۰۷۰",
  address:
    "مشهد، بلوار وکیل آباد، سه راه ۷ تیر، بین پل و وکیل آباد ۲۲، جنب آزمایشگاه ابن سینا، پلاک ۵۳۰، ساختمان سامان، طبقه اول",
  addressShort: "بلوار وکیل آباد، سه راه ۷ تیر — مشهد",
  geo: {
    latitude: 36.326393,
    longitude: 59.502666,
  },
  mapsUrl: "https://www.google.com/maps?q=36.326393,59.502666",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=36.326393,59.502666&hl=fa&z=17&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=36.326393,59.502666",
  workingHours: "همه‌روزه به جز ایام تعطیل، ساعت ۱۶ تا ۱۹",
  workingHoursShort: "۱۶ تا ۱۹",
  workingHoursResponse: "ساعت پاسخگویی: ۱۶ تا ۱۹",
  locale: "fa-IR",
  lang: "fa",
  direction: "rtl" as const,
  licenses: [
    { title: "پروانه مطب", issuer: "نظام پزشکی" },
    { title: "مدرک MMT", issuer: "وزارت بهداشت" },
    { title: "پروانه بهره‌برداری", issuer: "وزارت بهداشت" },
  ],
  licensesIssuer: "وزارت بهداشت و نظام پزشکی",
  licenseStatement: "دارای مجوز رسمی از وزارت بهداشت و درمان",
  teamRoles: [
    "پزشک درمانگر اعتیاد",
    "روانشناس و مشاور",
    "پرستار",
  ],
  mission:
    "هدف ما تنها ترک مواد نیست، بلکه کمک به بازسازی روحیه، سلامت جسم و روان و بازگشت دوباره به خانواده و اجتماع با امید و انگیزه‌ای تازه است.",
  medicalDisclaimer:
    "مطالب این وب‌سایت صرفاً برای افزایش آگاهی عمومی است و جایزین تشخیص یا توصیه پزشک نیست.",
  contentDisclaimer:
    "اطلاعات این سایت جایگزین ارزیابی یا توصیه پزشک نیست.",
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};
