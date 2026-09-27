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
  alternateNames?: string[];
  sameAs?: string[];
  placeholder: boolean;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-hashem-siadati",
    name: "دکتر سید هاشم سیادتی",
    alternateNames: ["دکتر هاشم سیادتی", "هاشم سیادتی"],
    sameAs: [
      "https://nobat.ir/doctor/دکتر-سید-هاشم-سیادتی-مشهد/dr-siadati/",
      "https://www.paziresh24.com/dr/دکتر-سید-هاشم-سیادتی/",
      "https://doktor.vip/doctor/dr-seyed-hashem-siadati",
    ],
    title: "پزشک درمانگر اعتیاد و مسئول فنی کلینیک",
    specialty: "درمان اختلالات مصرف مواد",
    role: "پزشک درمانگر اعتیاد و مسئول فنی کلینیک",
    image: clinicImages.doctorPortrait.src,
    imageAlt: clinicImages.doctorPortrait.alt,
    placeholder: false,
    bio: "دکتر سید هاشم سیادتی، پزشک درمانگر اعتیاد و مسئول فنی کلینیک ترک اعتیاد خورشید مشهد است. او دوره‌دیده درمان اعتیاد و دارای نزدیک به ۲۰ سال تجربه است. تحصیلات: دکترای پزشکی. شماره نظام پزشکی: ۸۰۰۲۵.",
    education: "دکترای پزشکی",
    experience: "پزشک دوره‌دیده درمان اعتیاد با نزدیک به ۲۰ سال تجربه",
    registrationNumber: "۸۰۰۲۵",
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}
