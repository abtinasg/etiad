import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { AudienceSection } from "@/components/home/AudienceSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AssessmentEducationSection } from "@/components/home/AssessmentEducationSection";
import { WhyKhorshidSection } from "@/components/home/WhyKhorshidSection";
import { TreatmentTimelineSection } from "@/components/home/TreatmentTimelineSection";
import { TeamSection } from "@/components/home/TeamSection";
import { CredentialsSection } from "@/components/home/CredentialsSection";
import { FamilySection } from "@/components/home/FamilySection";
import { ArticlesSection } from "@/components/home/ArticlesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { LocationSection } from "@/components/home/LocationSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AudienceSection />
      <ServicesSection />
      <AssessmentEducationSection />
      <WhyKhorshidSection />
      <TreatmentTimelineSection />
      <TeamSection />
      <CredentialsSection />
      <FamilySection />
      <ArticlesSection />
      <FAQSection />
      <LocationSection />
      <FinalCTASection />
    </>
  );
}
