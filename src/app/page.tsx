import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { JsonLd, homePageJsonLd } from "@/components/seo/JsonLd";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { AudienceSection } from "@/components/home/AudienceSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AssessmentEducationSection } from "@/components/home/AssessmentEducationSection";
import { WhyKhorshidSection } from "@/components/home/WhyKhorshidSection";
import { TreatmentTimelineSection } from "@/components/home/TreatmentTimelineSection";
import { TeamSection } from "@/components/home/TeamSection";
import { AddictionRecoverySection } from "@/components/home/AddictionRecoverySection";
import { CredentialsSection } from "@/components/home/CredentialsSection";
import { FamilySection } from "@/components/home/FamilySection";
import { ArticlesSection } from "@/components/home/ArticlesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { LocationSection } from "@/components/home/LocationSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { LocalClinicSection } from "@/components/home/LocalClinicSection";

export const metadata = createPageMetadata({
  title: "کلینیک ترک اعتیاد خورشید مشهد | مرکز درمان سرپایی",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageJsonLd()} />
      <HeroSection />
      <TrustBar />
      <AudienceSection />
      <ServicesSection />
      <AssessmentEducationSection />
      <WhyKhorshidSection />
      <TreatmentTimelineSection />
      <TeamSection />
      <AddictionRecoverySection />
      <CredentialsSection />
      <FamilySection />
      <ArticlesSection />
      <FAQSection />
      <LocalClinicSection />
      <LocationSection />
      <FinalCTASection />
    </>
  );
}
