import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getPublishedServices } from "@/lib/data/services";
import { articles } from "@/lib/data/articles";
import { doctors } from "@/lib/data/doctors";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    "",
    "/services",
    "/doctors",
    "/family-guide",
    "/about",
    "/articles",
    "/faq",
    "/contact",
    "/addiction-treatment-mashhad",
    "/addiction-consultation-mashhad",
    "/outpatient-addiction-treatment-mashhad",
  ];

  const servicePages = getPublishedServices().map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
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
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.9,
    })),
    ...servicePages,
    ...articlePages,
    ...doctorPages,
  ];
}
