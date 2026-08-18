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
    name: "دکتر سید هاشم سیادتی",
    title: "پزشک درمانگر اعتیاد و مسئول فنی کلینیک",
    specialty: "درمان اختلالات مصرف مواد",
    role: "پزشک درمانگر اعتیاد و مسئول فنی کلینیک",
    image: clinicImages.doctorPortrait.src,
    imageAlt: clinicImages.doctorPortrait.alt,
    placeholder: false,
    bio: "پزشک دوره‌دیده درمان اعتیاد با نزدیک به ۲۰ سال تجربه. تحصیلات: دکترای پزشکی. شماره نظام پزشکی: ۸۰۰۲۵.",
    education: "دکترای پزشکی",
    experience: "پزشک دوره‌دیده درمان اعتیاد با نزدیک به ۲۰ سال تجربه",
    registrationNumber: "۸۰۰۲۵",
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}
