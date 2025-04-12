import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-1";
import FAQsFour from "@/components/faqs-4";
import FeaturesSection from "@/components/features-6";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-4";
import TeamSection from "@/components/team";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <StatsSection />
      <FeaturesSection />
      <TeamSection />
      <Testimonials />
      <FAQsFour />
      <CallToAction />
      <FooterSection />
    </>
  );
}
