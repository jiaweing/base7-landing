import CallToAction from "@/components/call-to-action";
import { InViewWrapper } from "@/components/core/in-view-wrapper";
import FAQsFour from "@/components/faqs-4";
import HeroSection from "@/components/hero-section";
import Partners from "@/components/partners";
import ProjectsShowcase from "@/components/projects-showcase";
import TeamSection from "@/components/team";
import { blurVariants } from "@/lib/animations";
import { getProjects } from "@/lib/notion";

// Revalidate every hour
export const revalidate = 3600;

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <InViewWrapper variants={blurVariants} viewOptions={{ once: true }}>
        <HeroSection />
      </InViewWrapper>

      <InViewWrapper>
        <ProjectsShowcase projects={projects} />
      </InViewWrapper>

      <InViewWrapper>
        <Partners />
      </InViewWrapper>

      {/* <InViewWrapper>
        <ContentSection />
      </InViewWrapper>

      <InViewWrapper>
        <StatsSection />
      </InViewWrapper>

      <InViewWrapper>
        <FeaturesSection />
      </InViewWrapper> */}

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
    </>
  );
}
