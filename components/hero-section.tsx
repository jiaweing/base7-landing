"use client";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <main className="pt-16 lg:pt-20">
        <section className="overflow-hidden bg-white dark:bg-transparent">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative z-10 mx-auto px-10 xl:px-0">
              <FadeIn direction="down" duration={0.6}>
                <h1 className="text-5xl md:text-4xl font-medium tracking-tighter">
                  we shape the future
                </h1>
                <h1 className="text-5xl md:text-4xl font-medium tracking-tighter text-muted-foreground">
                  through software
                </h1>
              </FadeIn>

              <FadeIn delay={0.2} duration={0.5}>
                <p className="mx-auto my-8 font-light" itemProp="description">
                  a company building apps as companies.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} duration={0.5}>
                <Button
                  asChild
                  size="lg"
                  className="px-4 !py-0 !h-9 rounded-full"
                >
                  <Link href="https://tally.so/r/wLoJKj">
                    <span className="btn-label">build with us</span>
                  </Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
