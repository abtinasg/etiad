export const seoConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://khorshid-clinic.ir",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
} as const;

export const defaultOgImage = "/images/khorshid-clinic-logo-full.png";
