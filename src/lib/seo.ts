export const seoConfig = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tarketiadkhorshid.ir",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
} as const;

export const defaultOgImage = "/images/articles/khorshid-article-start-treatment.png";
export const defaultOgImageSize = {
  width: 1200,
  height: 675,
} as const;
