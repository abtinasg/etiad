import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getPublishedServices } from "@/lib/data/services";
import { articles } from "@/lib/data/articles";
import { doctors } from "@/lib/data/doctors";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const contentUpdatedAt = new Date("2026-09-27");

  const staticPages = [
    "",
    "/services",
    "/doctors",
    "/family-guide",
    "/about",
    "/articles",
    "/faq",
    "/contact",
    "/privacy",
    "/addiction-treatment-mashhad",
    "/addiction-consultation-mashhad",
    "/outpatient-addiction-treatment-mashhad",
  ];

  const servicePages = getPublishedServices().map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: contentUpdatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articlePages = articles.map((a) => ({
    url: `${base}/articles/${a.slug}`,
    lastModified: new Date(a.lastReviewed ?? a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const doctorPages = doctors.map((d) => ({
    url: `${base}/doctors/${d.slug}`,
    lastModified: contentUpdatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((path) => ({
      url: new URL(path || "/", base).toString(),
      lastModified: contentUpdatedAt,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
    })),
    ...servicePages,
    ...articlePages,
    ...doctorPages,
  ];
}
