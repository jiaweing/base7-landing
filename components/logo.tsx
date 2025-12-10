import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex justify-center flex-row items-center gap-2",
        className
      )}
    >
      {/* <div className="font-semibold">base</div> */}
      <Image
        src="/logos/base7-submark.svg"
        alt="Base 7 Logo - Fast App Development in 10 Days"
        width={14}
        height={14}
        className="mt-0.5 dark:invert"
        priority
      />
    </div>
  );
};
