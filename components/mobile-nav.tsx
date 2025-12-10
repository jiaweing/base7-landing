"use client";

import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

import { cn } from "@/lib/utils";

import { ProgressiveBlur } from "@/components/progressive-blur";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  return (
    <div className={`fixed right-6 bottom-6 z-100 xl:hidden ${className}`}>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            size="icon"
            className="bg-transparent/20 hover:bg-transparent/30 h-14 w-14 rounded-full border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-200 text-foreground"
          >
            <Menu className="size-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[100vh]">
          <ProgressiveBlur
            position="top"
            height="50px"
            className="z-10 rounded-t-4xl"
            blurAmount="50px"
            useThemeBackground
          />
          <div className="flex flex-col gap-12 overflow-auto px-6 py-6 pb-20">
            <div className="flex flex-col gap-4">
              <div className="text-muted-foreground text-sm font-medium">
                Menu
              </div>
              <div className="flex flex-col gap-3">
                <MobileLink href="/" onOpenChange={setOpen}>
                  Home
                </MobileLink>
                <MobileLink href="/blog" onOpenChange={setOpen}>
                  Blog
                </MobileLink>
                {/* Removed Setup/Books as they might not exist, keeping requested links plus what was in header */}
                <MobileLink
                  href="https://tally.so/r/wLoJKj"
                  onOpenChange={setOpen}
                >
                  Build with us
                </MobileLink>
                <MobileLink
                  href="https://tally.so/r/3x6PdG"
                  onOpenChange={setOpen}
                >
                  Become a partner
                </MobileLink>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-muted-foreground text-sm font-medium">
                Theme
              </div>
              <div className="flex flex-col gap-3">
                <MobileLink
                  href="#"
                  onOpenChange={setOpen}
                  onClick={() => setTheme("light")}
                >
                  Light
                </MobileLink>
                <MobileLink
                  href="#"
                  onOpenChange={setOpen}
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </MobileLink>
                <MobileLink
                  href="#"
                  onOpenChange={setOpen}
                  onClick={() => setTheme("system")}
                >
                  System
                </MobileLink>
              </div>
            </div>
          </div>
          <ProgressiveBlur
            position="bottom"
            height="100px"
            className="z-10 rounded-b-4xl"
            blurAmount="50px"
            useThemeBackground
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  onClick,
  ...props
}: React.ComponentProps<typeof Link> & {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
        // Only prevent default and control navigation if it's not a simple anchor
        if (href.toString().startsWith("#")) {
          e.preventDefault();
        }
        onOpenChange?.(false);
      }}
      className={cn("text-2xl font-medium", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
