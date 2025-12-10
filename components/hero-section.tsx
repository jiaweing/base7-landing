"use client";
import { InView } from "@/components/core/in-view";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <main className="pt-16 lg:pt-20">
        <section className="overflow-hidden bg-white dark:bg-transparent">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative z-10 mx-auto px-10 xl:px-0">
              <InView
                variants={{
                  hidden: { opacity: 0, y: -30, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewOptions={{ once: true }}
              >
                <h1 className="text-5xl md:text-4xl font-medium tracking-tighter">
                  we shape the future
                </h1>
                <h1 className="text-5xl md:text-4xl font-medium tracking-tighter text-muted-foreground">
                  through software
                </h1>
              </InView>

              <InView
                variants={{
                  hidden: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
                  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewOptions={{ once: true }}
              >
                <p className="mx-auto my-8 font-light" itemProp="description">
                  a company building apps as companies.
                </p>
              </InView>

              <InView
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                viewOptions={{ once: true }}
              >
                <Button
                  asChild
                  size="lg"
                  className="px-4 !py-0 !h-9 rounded-full"
                >
                  <Link href="https://tally.so/r/wLoJKj">
                    <span className="btn-label">build with us</span>
                  </Link>
                </Button>
              </InView>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
