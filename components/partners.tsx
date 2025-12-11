"use client";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="bg-background relative z-10 md:py-16">
      <div className="m-auto max-w-5xl px-6">
        <FadeIn duration={0.5}>
          <h2 className="text-center">
            we partner with your favourite world leading tech companies.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} duration={0.5}>
          <div className="mx-auto overflow-x-scroll mt-10 flex flex-row justify-center max-w-4xl items-center gap-8 md:gap-10 lg:gap-12">
            <Image
              className="h-5 w-auto"
              src="/logos/aws_light.svg"
              alt="AWS Logo - Cloud Partner"
              height={20}
              width={60}
              priority
            />
            <Image
              className="h-5 w-auto dark:invert"
              src="/logos/github_light.svg"
              alt="GitHub Logo - Development Partner"
              height={16}
              width={50}
              priority
            />
            <Image
              className="h-5 w-auto dark:invert"
              src="/logos/notion.svg"
              alt="Notion Logo - Productivity Partner"
              height={20}
              width={55}
              priority
            />
            <Image
              className="h-5 w-auto dark:invert"
              src="/logos/anthropic_black_wordmark.svg"
              alt="Anthropic Logo - AI Partner"
              height={20}
              width={70}
              priority
            />
            <Image
              className="h-6 w-auto dark:invert"
              src="/logos/openai_wordmark_light.svg"
              alt="OpenAI Logo - AI Partner"
              height={24}
              width={80}
              priority
            />
            <Image
              className="h-5 w-auto"
              src="/logos/microsoft.svg"
              alt="Microsoft Logo - Technology Partner"
              height={16}
              width={80}
              priority
            />
            <Image
              className="h-4 w-auto dark:invert"
              src="/logos/vercel_wordmark.svg"
              alt="Vercel Logo - Hosting Partner"
              height={20}
              width={60}
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
