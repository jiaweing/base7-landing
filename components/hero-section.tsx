"use client";
import { InView } from "@/components/core/in-view";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <main className="pt-16 lg:pt-20">
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
                  we shape the future
                </h1>
                <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-muted-foreground">
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
                <p
                  className="mx-auto my-8 max-w-2xl font-light"
                  itemProp="description"
                >
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
            </InView>
          </div>
        </section>
      </main>
    </>
  );
}
