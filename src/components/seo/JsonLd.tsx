import { siteConfig } from "@/lib/site";
import { clinicImages } from "@/lib/images";
import { defaultOgImage } from "@/lib/seo";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function clinicBase() {
  return {
    "@type": "MedicalClinic",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${siteConfig.url}/#clinic`,
    name: siteConfig.name,
    alternateName: siteConfig.brand,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    image: `${siteConfig.url}${clinicImages.buildingExterior.src}`,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${clinicImages.logo.src}`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "مشهد",
      addressRegion: "خراسان رضوی",
      addressCountry: "IR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.2972,
      longitude: 59.6067,
    },
    areaServed: {
      "@type": "City",
      name: "مشهد",
    },
    availableLanguage: ["fa", "Persian"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "16:00",
        closes: "19:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      availableLanguage: ["Persian", "fa"],
      areaServed: "IR",
    },
    priceRange: "$$",
    medicalSpecialty: "Substance Use Disorder Treatment",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locale,
    publisher: {
      "@id": `${siteConfig.url}/#clinic`,
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; url?: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
      };
      if (item.url) {
        entry.item = `${siteConfig.url}${item.url}`;
      }
      return entry;
    }),
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  lastReviewed?: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.lastReviewed ?? article.publishedAt,
    image: article.image
      ? `${siteConfig.url}${article.image}`
      : `${siteConfig.url}${defaultOgImage}`,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${clinicImages.logo.src}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/articles/${article.slug}`,
    },
    inLanguage: siteConfig.locale,
  };
}

export function physicianJsonLd(doctor: {
  name: string;
  title: string;
  specialty: string;
  slug: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    jobTitle: doctor.title,
    medicalSpecialty: doctor.specialty,
    image: doctor.image ? `${siteConfig.url}${doctor.image}` : undefined,
    worksFor: clinicBase(),
    memberOf: clinicBase(),
    url: `${siteConfig.url}/doctors/${doctor.slug}`,
    knowsAbout: doctor.specialty,
  };
}

export function serviceJsonLd(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: service.title,
    description: service.description,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: {
      ...clinicBase(),
      "@id": `${siteConfig.url}/#clinic`,
    },
  };
}

export function faqJsonLd(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** @deprecated Use physicianJsonLd */
export function personJsonLd(doctor: {
  name: string;
  title: string;
  specialty: string;
  slug: string;
}) {
  return physicianJsonLd(doctor);
}
