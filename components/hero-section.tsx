"use client";
import { InView } from "@/components/core/in-view";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { name: "build with us", href: "https://tally.so/r/wLoJKj" },
  { name: "become a partner", href: "https://tally.so/r/3x6PdG" },
  { name: "book a call", href: "https://cal.com/jiaweing/base7" },
];

export default function HeroSection() {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <header>
        <nav
          data-state={menuState && "active"}
          className="fixed z-50 w-full bg-white/50 backdrop-blur-md dark:bg-zinc-950/50 lg:dark:bg-zinc-950/20"
        >
          <div className="m-auto px-6 py-2">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto lg:flex-1">
                <div className="lg:hidden">
                  <Link
                    href="/"
                    aria-label="home"
                    className="flex items-center space-x-2"
                  >
                    <Logo />
                  </Link>
                </div>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="hidden lg:flex justify-center items-center flex-1">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                >
                  <Logo />
                </Link>
              </div>

              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent lg:flex-1 z-50">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

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
              <div className="mx-auto mt-10 grid grid-cols-3 sm:grid-cols-4 lg:flex lg:flex-wrap max-w-4xl items-center justify-center lg:justify-between gap-x-4 gap-y-8 lg:gap-x-10 lg:gap-y-10">
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
