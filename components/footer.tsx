import { InView } from "@/components/core/in-view";
import { Logo } from "@/components/logo";
import Link from "next/link";

const links = [
  { title: "build with us", href: "https://tally.so/r/wLoJKj" },
  { title: "become a partner", href: "https://tally.so/r/3x6PdG" },
  { title: "book a call", href: "https://cal.com/jiaweing/base7" },
];

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32">
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
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary block text-center px-2 py-1 duration-150"
              >
                <span>{link.title}</span>
              </Link>
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
            <Link
              href="https://x.com/j14wei"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter"
              className="text-muted-foreground hover:text-primary text-center w-6 h-6 flex items-center justify-center"
            >
              <img
                className="h-5 w-5 dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
                src="/logos/x.svg"
                alt="X Logo"
                height="16"
                width="16"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/base07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary text-center w-6 h-6 flex items-center justify-center"
            >
              <img
                className="h-5 w-5 dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
                src="/logos/linkedin.svg"
                alt="LinkedIn Logo"
                height="16"
                width="16"
              />
            </Link>
            <Link
              href="https://www.threads.net/@j14.wei"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="text-muted-foreground hover:text-primary text-center w-6 h-6 flex items-center justify-center"
            >
              <img
                className="h-5 w-5 dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
                src="/logos/threads.svg"
                alt="Threads Logo"
                height="16"
                width="16"
              />
            </Link>
            <Link
              href="https://instagram.com/base7llp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary text-center w-6 h-6 flex items-center justify-center"
            >
              <img
                className="h-5 w-5 dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
                src="/logos/instagram.svg"
                alt="Instagram Logo"
                height="16"
                width="16"
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@j14.wei"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-muted-foreground hover:text-primary text-center w-6 h-6 flex items-center justify-center"
            >
              <img
                className="h-5 w-5 dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
                src="/logos/tiktok.svg"
                alt="Tiktok Logo"
                height="16"
                width="16"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@j14wei"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-primary text-center w-6 h-6 flex items-center justify-center"
            >
              <img
                className="h-5 w-5 dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
                src="/logos/youtube.svg"
                alt="YouTube Logo"
                height="16"
                width="16"
              />
            </Link>
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
            © {new Date().getFullYear()} Base 7 LLP, Singapore. <br />
            (UEN: T25LL0003D)
          </div>
        </InView>
      </div>
    </footer>
  );
}
