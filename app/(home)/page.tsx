import CallToAction from "@/components/call-to-action";
import FAQsFour from "@/components/faqs-4";
import HeroSection from "@/components/hero-section";
import Partners from "@/components/partners";
import ProjectsShowcase from "@/components/projects-showcase";
import TeamSection from "@/components/team";
import { FadeIn } from "@/components/ui/fade-in";
import { getProjects } from "@/lib/notion";

// Revalidate every hour
export const revalidate = 3600;

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <FadeIn>
        <HeroSection />
      </FadeIn>

      <FadeIn>
        <ProjectsShowcase projects={projects} />
      </FadeIn>

      <FadeIn>
        <Partners />
      </FadeIn>

      {/* <FadeIn>
        <ContentSection />
      </FadeIn>

      <FadeIn>
        <StatsSection />
      </FadeIn>

      <FadeIn>
        <FeaturesSection />
      </FadeIn> */}

      <FadeIn>
        <TeamSection />
      </FadeIn>

      {/* <Testimonials /> */}

      <FadeIn>
        <FAQsFour />
      </FadeIn>

      <FadeIn>
        <CallToAction />
      </FadeIn>
    </>
  );
}
