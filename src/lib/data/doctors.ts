import { clinicImages } from "@/lib/images";

export type Doctor = {
  slug: string;
  name: string;
  title: string;
  specialty: string;
  education?: string;
  experience?: string;
  registrationNumber?: string;
  role?: string;
  bio?: string;
  image?: string;
  imageAlt?: string;
  placeholder: boolean;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-afsari",
    name: "دکتر کیومرث افسری",
    title: "پزشک",
    specialty: "درمان اختلالات مصرف مواد",
    role: "پزشک کلینیک خورشید",
    image: clinicImages.doctorPortrait.src,
    imageAlt: clinicImages.doctorPortrait.alt,
    placeholder: false,
    bio: "اطلاعات تکمیلی سوابق و مدارک پس از دریافت از کلینیک در این صفحه قرار می‌گیرد.",
    education: "[نیازمند تأیید مشتری]",
    experience: "[نیازمند تأیید مشتری]",
    registrationNumber: "[نیازمند تأیید مشتری]",
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}
