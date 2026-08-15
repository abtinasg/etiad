import type { Metadata } from "next";
import { siteConfig } from "./site";
import { defaultOgImage, seoConfig } from "./seo";

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
  type = "website",
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${siteConfig.url}${ogImage}`
    : `${siteConfig.url}${defaultOgImage}`;

  const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [{ url: image, alt: siteConfig.name, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };

  if (seoConfig.gscVerification) {
    metadata.verification = {
      google: seoConfig.gscVerification,
    };
  }

  return metadata;
}

export function createServiceMetadata(serviceName: string, description: string, slug: string) {
  return createPageMetadata({
    title: `${serviceName} در مشهد | کلینیک خورشید`,
    description,
    path: `/services/${slug}`,
  });
}

export function createArticleMetadata(title: string, description: string, slug: string, ogImage?: string) {
  return createPageMetadata({
    title,
    description,
    path: `/articles/${slug}`,
    ogImage,
    type: "article",
  });
}

export function createDoctorMetadata(name: string, description: string, slug: string) {
  return createPageMetadata({
    title: `${name} | کلینیک خورشید مشهد`,
    description,
    path: `/doctors/${slug}`,
  });
}

export function createDraftMetadata(title: string) {
  return createPageMetadata({
    title: `${title} | کلینیک خورشید`,
    description: "این صفحه در حال تکمیل است.",
    noIndex: true,
  });
}
