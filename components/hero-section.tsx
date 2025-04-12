"use client";
import { InView } from "@/components/core/in-view";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <main className="pt-16 lg:pt-20">
        <div
          aria-hidden
          className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="overflow-hidden bg-white dark:bg-transparent">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <InView
                variants={{
                  hidden: { opacity: 0, y: -30, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewOptions={{ once: true }}
              >
                <h1 className="text-5xl md:text-7xl font-medium tracking-tighter">
                  build your next app in 10 days
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
                <p className="mx-auto my-8 max-w-2xl font-light">
                  consulting, design, development, and hosting — all while your
                  competitors are still planning
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
                <Button asChild size="lg">
                  <Link href="https://tally.so/r/wLoJKj">
                    <span className="btn-label">build with us</span>
                  </Link>
                </Button>
              </InView>
            </div>
          </div>
        </section>
        <section className="bg-background relative z-10 md:py-16">
          <div className="m-auto max-w-5xl px-6">
            <InView
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
            >
              <h2 className="text-center">
                we partner with your favourite world leading tech companies.
              </h2>
            </InView>

            <InView
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
            >
              <div className="mx-auto overflow-x-scroll mt-10 flex flex-row justify-center max-w-4xl items-center gap-8 md:gap-10 lg:gap-12">
                <img
                  className="h-5 w-fit dark:invert"
                  src="/logos/aws_light.svg"
                  alt="AWS Logo"
                  height="20"
                  width="auto"
                />
                <img
                  className="h-5 w-fit dark:invert"
                  src="/logos/github_light.svg"
                  alt="GitHub Logo"
                  height="16"
                  width="auto"
                />
                <img
                  className="h-5 w-fit dark:invert"
                  src="/logos/notion.svg"
                  alt="Notion Logo"
                  height="20"
                  width="auto"
                />
                <img
                  className="h-5 w-fit dark:invert"
                  src="/logos/anthropic_black_wordmark.svg"
                  alt="Anthropic Logo"
                  height="20"
                  width="auto"
                />
                <img
                  className="h-6 w-fit dark:invert"
                  src="/logos/openai_wordmark_light.svg"
                  alt="OpenAI Logo"
                  height="24"
                  width="auto"
                />
                <img
                  className="h-5 w-fit dark:invert"
                  src="/logos/microsoft.svg"
                  alt="Microsoft Logo"
                  height="16"
                  width="auto"
                />
                <img
                  className="h-4 w-fit dark:invert"
                  src="/logos/vercel_wordmark.svg"
                  alt="Vercel Logo"
                  height="20"
                  width="auto"
                />
              </div>
            </InView>
          </div>
        </section>
      </main>
    </>
  );
}
