import { InView } from "@/components/core/in-view";
import { Logo } from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

const links = [
  { title: "manifesto", href: "/manifesto" },
  { title: "about", href: "/about" },
  { title: "brand story", href: "/story" },
];

export default function FooterSection() {
  return (
    <footer className="pb-16 md:pb-32">
      <div className="mx-auto max-w-5xl px-6">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
        >
          <Link
            href="/"
            aria-label="go home"
            className="mx-auto block size-fit"
          >
            <Logo />
          </Link>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
        >
          <div className="my-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 text-sm">
            {links.map((link, index) => (
              <>
                {link.href.startsWith("/") ? (
                  <Link
                    key={index}
                    href={link.href as any}
                    className="text-muted-foreground hover:text-primary block text-center px-2 py-1 duration-150"
                  >
                    <span>{link.title}</span>
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary block text-center px-2 py-1 duration-150"
                  >
                    <span>{link.title}</span>
                  </a>
                )}
              </>
            ))}
          </div>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
        >
          <div className="my-8 flex flex-row flex-wrap justify-center items-center gap-6 md:gap-10">
            <a
              href="https://x.com/j14wei"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter"
              className="text-muted-foreground hover:text-primary text-center w-6 h-6 flex items-center justify-center"
            >
              <Image
                className="h-5 w-5 dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
                src="/logos/x.svg"
                alt="X/Twitter - Follow Base 7"
                height={16}
                width={16}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/base07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary text-center w-6 h-6 flex items-center justify-center"
            >
              <Image
                className="h-5 w-5 dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
                src="/logos/linkedin.svg"
                alt="LinkedIn - Connect with Base 7"
                height={16}
                width={16}
              />
            </a>
            <a
              href="https://www.threads.net/@j14.wei"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="text-muted-foreground hover:text-primary text-center w-6 h-6 flex items-center justify-center"
            >
              <Image
                className="h-5 w-5 dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
                src="/logos/threads.svg"
                alt="Threads - Follow Base 7 Updates"
                height={16}
                width={16}
              />
            </a>
            <a
              href="https://instagram.com/base7llp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary text-center w-6 h-6 flex items-center justify-center"
            >
              <Image
                className="h-5 w-5 dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
                src="/logos/instagram.svg"
                alt="Instagram - Follow Base 7 Photos"
                height={16}
                width={16}
              />
            </a>
            <a
              href="https://www.tiktok.com/@j14.wei"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-muted-foreground hover:text-primary text-center w-6 h-6 flex items-center justify-center"
            >
              <Image
                className="h-5 w-5 dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
                src="/logos/tiktok.svg"
                alt="TikTok - Follow Base 7 Videos"
                height={16}
                width={16}
              />
            </a>
            <a
              href="https://www.youtube.com/@j14wei"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-primary text-center w-6 h-6 flex items-center justify-center"
            >
              <Image
                className="h-5 w-5 dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
                src="/logos/youtube.svg"
                alt="YouTube - Watch Base 7 Videos"
                height={16}
                width={16}
              />
            </a>
          </div>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
        >
          <div className="text-muted-foreground text-center text-sm px-4 mt-8 mb-4">
            <span itemScope itemType="http://schema.org/Organization">
              © {new Date().getFullYear()}{" "}
              <span itemProp="name">Base 7 LLP</span>,{" "}
              <span itemProp="location">Singapore</span>. <br />
              (UEN: <span itemProp="taxID">T25LL0003D</span>)
              <meta itemProp="foundingDate" content="2025-01-01" />
              <meta itemProp="url" content="https://base7.com" />
              <meta
                itemProp="description"
                content="Base 7 is a Singapore-based software company specializing in rapid app development. We build web, mobile, and desktop apps in just 10 days."
              />
            </span>
          </div>
        </InView>
      </div>
    </footer>
  );
}
