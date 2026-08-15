import type { Article } from "./types";
import {
  howToStartBlocks,
  howToStartReferences,
} from "./how-to-start";
import {
  familySupportBlocks,
  familySupportReferences,
} from "./family-support";
import {
  addictionRelapseBlocks,
  addictionRelapseReferences,
} from "./addiction-relapse";
import { articleImages } from "@/lib/images";

export const articles: Article[] = [
  {
    slug: "how-to-start-addiction-treatment",
    title: "برای ترک اعتیاد از کجا شروع کنیم؟ راهنمای اولین قدم درمان",
    metaTitle: "برای ترک اعتیاد از کجا شروع کنیم؟ | کلینیک خورشید مشهد",
    excerpt:
      "برای شروع درمان اعتیاد چه باید کرد؟ با مراحل ارزیابی اولیه، انتخاب مسیر درمان، نقش خانواده و نحوه مراجعه به کلینیک ترک اعتیاد در مشهد آشنا شوید.",
    category: "راهنمای درمان",
    publishedAt: "2026-08-14",
    lastReviewed: "2026-08-14",
    author: "تیم محتوای کلینیک خورشید",
    medicalReviewer: "دکتر کیومرث افسری — [نیازمند تأیید بازبینی]",
    relatedServiceSlug: "initial-assessment",
    relatedArticleSlugs: ["family-support-addiction", "addiction-relapse"],
    image: articleImages.startTreatment,
    blocks: howToStartBlocks,
    references: howToStartReferences,
  },
  {
    slug: "family-support-addiction",
    title: "خانواده چگونه به فرد درگیر مصرف مواد کمک کند؟",
    metaTitle: "خانواده چگونه به فرد درگیر اعتیاد کمک کند؟ | کلینیک خورشید",
    excerpt:
      "نحوه برخورد خانواده با فرد درگیر مصرف مواد، چگونگی صحبت درباره درمان، تعیین مرزها و زمان مناسب برای دریافت مشاوره تخصصی را بخوانید.",
    category: "راهنمای خانواده",
    publishedAt: "2026-08-14",
    lastReviewed: "2026-08-14",
    author: "تیم محتوای کلینیک خورشید",
    medicalReviewer: "دکتر کیومرث افسری — [نیازمند تأیید بازبینی]",
    relatedServiceSlug: "family-counseling",
    relatedArticleSlugs: ["how-to-start-addiction-treatment", "addiction-relapse"],
    image: articleImages.familySupport,
    blocks: familySupportBlocks,
    references: familySupportReferences,
  },
  {
    slug: "addiction-relapse",
    title: "عود یا بازگشت به مصرف چیست و بعد از آن چه باید کرد؟",
    metaTitle: "عود اعتیاد چیست؟ علت بازگشت به مصرف و راهکارها | کلینیک خورشید",
    excerpt:
      "عود یا بازگشت به مصرف چرا اتفاق می‌افتد؟ با عوامل محرک، نحوه برخورد خانواده، اهمیت ارزیابی مجدد و روش‌های کاهش خطر عود آشنا شوید.",
    category: "آموزش درمان",
    publishedAt: "2026-08-14",
    lastReviewed: "2026-08-14",
    author: "تیم محتوای کلینیک خورشید",
    medicalReviewer: "دکتر کیومرث افسری — [نیازمند تأیید بازبینی]",
    relatedServiceSlug: "relapse-prevention",
    relatedArticleSlugs: ["how-to-start-addiction-treatment", "family-support-addiction"],
    image: articleImages.addictionRelapse,
    blocks: addictionRelapseBlocks,
    references: addictionRelapseReferences,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export type { Article, ArticleBlock } from "./types";
