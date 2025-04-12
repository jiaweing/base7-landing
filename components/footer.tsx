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
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Logo />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X/Twitter"
            className="text-muted-foreground hover:text-primary block"
          >
            <img
              className="h-4.5 w-fit dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
              src="/logos/x.svg"
              alt="Microsoft Logo"
              height="16"
              width="auto"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/base07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary block"
          >
            <img
              className="h-5 w-fit dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
              src="/logos/linkedin.svg"
              alt="Microsoft Logo"
              height="16"
              width="auto"
            />
          </Link>
          <Link
            href="https://www.threads.net/@j14.wei"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="text-muted-foreground hover:text-primary block"
          >
            <img
              className="h-5 w-fit dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
              src="/logos/threads.svg"
              alt="Microsoft Logo"
              height="16"
              width="auto"
            />
          </Link>
          <Link
            href="https://instagram.com/base7llp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary block"
          >
            <img
              className="h-5 w-fit dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
              src="/logos/instagram.svg"
              alt="Microsoft Logo"
              height="16"
              width="auto"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@j14.wei"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-muted-foreground hover:text-primary block"
          >
            <img
              className="h-5 w-fit dark:invert hover:opacity-100 opacity-50 transition-colors duration-300 grayscale"
              src="/logos/tiktok.svg"
              alt="Microsoft Logo"
              height="16"
              width="auto"
            />
          </Link>
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} Base 7 LLP, UEN: T25LL0003D.
        </span>
      </div>
    </footer>
  );
}
