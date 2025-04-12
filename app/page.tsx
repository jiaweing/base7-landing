import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-1";
import { InViewWrapper } from "@/components/core/in-view-wrapper";
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
      <InViewWrapper
        variants={{
          hidden: { opacity: 0, filter: "blur(4px)" },
          visible: { opacity: 1, filter: "blur(0px)" },
        }}
        viewOptions={{ once: true }}
      >
        <HeroSection />
      </InViewWrapper>

      <InViewWrapper>
        <ProjectsShowcase />
      </InViewWrapper>

      <InViewWrapper>
        <StatsSection />
      </InViewWrapper>

      <InViewWrapper>
        <ContentSection />
      </InViewWrapper>

      <InViewWrapper>
        <FeaturesSection />
      </InViewWrapper>

      <InViewWrapper>
        <TeamSection />
      </InViewWrapper>

      {/* <Testimonials /> */}

      <InViewWrapper>
        <FAQsFour />
      </InViewWrapper>

      <InViewWrapper>
        <CallToAction />
      </InViewWrapper>

      <FooterSection />
    </>
  );
}
