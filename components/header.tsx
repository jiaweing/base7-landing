"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { ProgressiveBlur } from "@/components/progressive-blur";
import { ThemeToggle } from "@/components/theme-toggle";
import { FadeIn } from "@/components/ui/fade-in";

const menuItems = [
  { name: "blog", href: "/blog" },
  { name: "build with us", href: "https://tally.so/r/wLoJKj" },
  { name: "become a partner", href: "https://tally.so/r/3x6PdG" },
  { name: "book a call", href: "https://cal.com/jiaweing/base7" },
];

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const [scrollState, setScrollState] = useState({
    visible: true,
    prevScrollPos: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > scrollState.prevScrollPos;
      const isScrolledPastThreshold = currentScrollPos > 50;

      setScrollState({
        // Show header when scrolling up or at the top of the page
        // Always show header when menu is open
        visible:
          (!isScrollingDown && isScrolledPastThreshold) ||
          currentScrollPos < 50 ||
          menuState,
        prevScrollPos: currentScrollPos,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollState.prevScrollPos, menuState]);

  return (
    <header>
      <nav
        className={`fixed z-60 w-full transition-transform duration-300 ${
          scrollState.visible ? "translate-y-0" : "-translate-y-full"
        }`}
        data-state={menuState && "active"}
      >
        <ProgressiveBlur useThemeBackground={true} />
        <div className="z-100 m-auto px-6 py-2">
          <div className="flex flex-wrap items-center justify-center gap-6 py-3 lg:gap-0 lg:py-4 xl:justify-between">
            {/* Left Spacer */}
            <div className="hidden flex-1 xl:block" />

            <div className="z-60 flex items-center justify-center">
              <FadeIn duration={0.4} viewOptions={{ margin: "0px" }}>
                <Link
                  aria-label="home"
                  className="flex items-center space-x-2"
                  href="/"
                >
                  <Logo />
                </Link>
              </FadeIn>
            </div>

            <div className="z-50 mb-6 in-data-[state=active]:block hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:in-data-[state=active]:flex lg:w-fit lg:flex-1 lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none xl:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:pr-4">
                <div className="flex items-center gap-6">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <FadeIn
                        delay={0.1 * index}
                        duration={0.4}
                        key={index}
                        viewOptions={{ margin: "0px" }}
                      >
                        <li>
                          {item.href.startsWith("/") ? (
                            <Link
                              className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                              href={item.href as any}
                            >
                              <span>{item.name}</span>
                            </Link>
                          ) : (
                            <a
                              className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                              href={item.href}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <span>{item.name}</span>
                            </a>
                          )}
                        </li>
                      </FadeIn>
                    ))}
                  </ul>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
