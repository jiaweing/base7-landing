import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-1";
import FAQsFour from "@/components/faqs-4";
import FeaturesSection from "@/components/features-6";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProjectsShowcase from "@/components/projects-showcase";
import StatsSection from "@/components/stats-4";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsShowcase />
      <StatsSection />
      <ContentSection />
      <FeaturesSection />
      <TeamSection />
      {/* <Testimonials /> */}
      <FAQsFour />
      <CallToAction />
      <FooterSection />
    </>
  );
}
