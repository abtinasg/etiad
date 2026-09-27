import { siteConfig } from "@/lib/site";
import { clinicImages } from "@/lib/images";
import { defaultOgImage } from "@/lib/seo";
import { getPublishedServices } from "@/lib/data/services";
import { doctors } from "@/lib/data/doctors";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function clinicBase() {
  return {
    "@type": "MedicalClinic",
    "@id": `${siteConfig.url}/#clinic`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneInternational,
  };
}

export function organizationJsonLd() {
  const services = getPublishedServices();
  const doctor = doctors[0];

  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${siteConfig.url}/#clinic`,
    name: siteConfig.name,
    alternateName: siteConfig.alternateNames,
    sameAs: siteConfig.sameAs,
    url: siteConfig.url,
    telephone: siteConfig.phoneInternational,
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
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.mapsUrl,
    areaServed: {
      "@type": "City",
      name: "مشهد",
    },
    slogan: siteConfig.mission,
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
      telephone: siteConfig.phoneInternational,
      contactType: "customer service",
      availableLanguage: ["Persian", "fa"],
      areaServed: "IR",
    },
    employee: doctor
      ? {
          "@type": "Physician",
          "@id": `${siteConfig.url}/doctors/${doctor.slug}#physician`,
          name: doctor.name,
          jobTitle: doctor.title,
          url: `${siteConfig.url}/doctors/${doctor.slug}`,
          sameAs: doctor.sameAs,
        }
      : undefined,
    knowsAbout: [
      "درمان اختلالات مصرف مواد",
      "درمان سرپایی اعتیاد",
      ...services.map((service) => service.title),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات درمانی کلینیک خورشید",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: service.title,
          description: service.shortDescription,
          url: `${siteConfig.url}/services/${service.slug}`,
        },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.alternateNames,
    url: siteConfig.url,
    inLanguage: siteConfig.locale,
    publisher: {
      "@id": `${siteConfig.url}/#clinic`,
    },
  };
}

export function homePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.locale,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#clinic`,
    },
    mainEntity: {
      "@id": `${siteConfig.url}/#clinic`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${defaultOgImage}`,
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
  identifier?: string;
  alternateNames?: string[];
  sameAs?: string[];
}) {
  const url = `${siteConfig.url}/doctors/${doctor.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${url}#physician`,
    name: doctor.name,
    alternateName: doctor.alternateNames,
    sameAs: doctor.sameAs,
    jobTitle: doctor.title,
    medicalSpecialty: doctor.specialty,
    image: doctor.image ? `${siteConfig.url}${doctor.image}` : undefined,
    identifier: doctor.identifier
      ? {
          "@type": "PropertyValue",
          propertyID: "IRIMC",
          value: doctor.identifier,
        }
      : undefined,
    worksFor: { "@id": `${siteConfig.url}/#clinic` },
    memberOf: { "@id": `${siteConfig.url}/#clinic` },
    url,
    mainEntityOfPage: {
      "@type": "ProfilePage",
      "@id": url,
    },
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
