"use client";
import { InView } from "@/components/core/in-view";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
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
        data-state={menuState && "active"}
        className={`fixed z-50 w-full bg-white/50 backdrop-blur-md dark:bg-zinc-950/50 lg:dark:bg-zinc-950/20 transition-transform duration-300 ${
          !scrollState.visible ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="m-auto px-6 py-2">
          <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto lg:flex-1">
              <div className="lg:hidden">
                <InView
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, filter: "blur(2px)" },
                    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewOptions={{ once: true }}
                >
                  <Link
                    href="/"
                    aria-label="home"
                    className="flex items-center space-x-2"
                  >
                    <Logo />
                  </Link>
                </InView>
              </div>

              <InView
                variants={{
                  hidden: { opacity: 0, scale: 0.9, filter: "blur(2px)" },
                  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                viewOptions={{ once: true }}
              >
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </InView>
            </div>

            <div className="hidden lg:flex justify-center items-center flex-1">
              <InView
                variants={{
                  hidden: { opacity: 0, scale: 0.9, filter: "blur(2px)" },
                  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewOptions={{ once: true }}
              >
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                >
                  <Logo />
                </Link>
              </InView>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent lg:flex-1 z-50">
              <div className="lg:pr-4">
                <InView
                  variants={{
                    hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewOptions={{ once: true }}
                >
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <InView
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
                          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                        }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.1 * index,
                        }}
                        viewOptions={{ once: true }}
                      >
                        <li>
                          <Link
                            href={item.href}
                            className="text-muted-foreground hover:text-accent-foreground block duration-150"
                          >
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      </InView>
                    ))}
                  </ul>
                </InView>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
