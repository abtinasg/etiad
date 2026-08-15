export type FAQItem = {
  question: string;
  answer: string;
  needsClinicConfirmation?: boolean;
};

export const faqItems: FAQItem[] = [
  {
    question: "آیا خانواده می‌تواند ابتدا با کلینیک تماس بگیرد؟",
    answer:
      "بله. خانواده‌ها می‌توانند برای دریافت اطلاعات اولیه درباره شرایط مراجعه و نحوه برخورد با کلینیک تماس بگیرند.",
  },
  {
    question: "برای اولین مراجعه چه مدارکی لازم است؟",
    answer: "[پاسخ باید توسط کلینیک تأیید شود]",
    needsClinicConfirmation: true,
  },
  {
    question: "روند شروع درمان چگونه است؟",
    answer:
      "ابتدا تماس اولیه با کلینیک انجام می‌شود. سپس ارزیابی شرایط فرد توسط تیم درمان انجام می‌گیرد و بر اساس آن، مسیر درمان پیشنهاد می‌شود.",
  },
  {
    question: "آیا اطلاعات مراجعه‌کنندگان محرمانه است؟",
    answer:
      "اطلاعات مراجعان مطابق سیاست حفظ حریم خصوصی کلینیک مدیریت می‌شود. [نیازمند تأیید سیاست]",
    needsClinicConfirmation: true,
  },
  {
    question: "آیا درمان به‌صورت سرپایی انجام می‌شود؟",
    answer: "[پاسخ باید توسط کلینیک تأیید شود]",
    needsClinicConfirmation: true,
  },
  {
    question: "پزشک چه روزهایی در کلینیک حضور دارد؟",
    answer: "[پاسخ باید توسط کلینیک تأیید شود]",
    needsClinicConfirmation: true,
  },
  {
    question: "هزینه درمان چگونه مشخص می‌شود؟",
    answer: "[پاسخ باید توسط کلینیک تأیید شود]",
    needsClinicConfirmation: true,
  },
  {
    question: "چه نوع اختلالات مصرف مواد در کلینیک بررسی می‌شود؟",
    answer: "[پاسخ باید توسط کلینیک تأیید شود]",
    needsClinicConfirmation: true,
  },
];
