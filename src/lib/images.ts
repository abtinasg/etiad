export const clinicImages = {
  logo: {
    src: "/images/khorshid-clinic-logo.svg",
    alt: "لوگوی کلینیک ترک اعتیاد خورشید مشهد",
    width: 512,
    height: 512,
  },
  logoFull: {
    src: "/images/khorshid-clinic-logo-full.png",
    alt: "کلینیک خورشید — مرکز درمان اختلالات مصرف مواد",
    width: 1024,
    height: 1024,
  },
  hero: {
    src: "/images/khorshid-clinic-doctor-office.jpg",
    alt: "اتاق مشاوره و پزشک کلینیک ترک اعتیاد خورشید مشهد",
    width: 800,
    height: 600,
  },
  reception: {
    src: "/images/khorshid-clinic-reception.jpg",
    alt: "فضای پذیرش و انتظار کلینیک خورشید مشهد",
    width: 800,
    height: 600,
  },
  signage: {
    src: "/images/khorshid-clinic-signage.jpg",
    alt: "تابلو کلینیک ترک اعتیاد خورشید در ساختمان سامان مشهد",
    width: 800,
    height: 600,
  },
  buildingExterior: {
    src: "/images/khorshid-clinic-building-exterior.jpg",
    alt: "نمای بیرونی ساختمان سامان — کلینیک خورشید مشهد",
    width: 800,
    height: 600,
  },
  doctorPortrait: {
    src: "/images/khorshid-clinic-doctor-portrait.jpg",
    alt: "دکتر کیومرث افسری — پزشک کلینیک خورشید مشهد",
    width: 400,
    height: 500,
  },
  doctorOffice: {
    src: "/images/khorshid-clinic-doctor-office.jpg",
    alt: "پزشک کلینیک خورشید در اتاق مشاوره",
    width: 600,
    height: 800,
  },
} as const;

export const clinicGallery = [
  clinicImages.reception,
  clinicImages.signage,
] as const;

export const articleImages = {
  startTreatment: {
    src: "/images/articles/khorshid-article-start-treatment.png",
    alt: "مشاوره تخصصی و ارزیابی اولیه در کلینیک ترک اعتیاد خورشید مشهد",
    width: 1200,
    height: 675,
  },
  familySupport: {
    src: "/images/articles/khorshid-article-family-support.png",
    alt: "مشاوره خانواده و همراهی در فرآیند درمان — کلینیک خورشید مشهد",
    width: 1200,
    height: 675,
  },
  addictionRelapse: {
    src: "/images/articles/khorshid-article-addiction-relapse.png",
    alt: "ارزیابی مجدد و پیگیری درمان پس از بازگشت به مصرف — کلینیک خورشید",
    width: 1200,
    height: 675,
  },
} as const;
