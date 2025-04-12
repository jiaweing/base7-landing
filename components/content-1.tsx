import Image from "next/image";

export default function ContentSection() {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl tracking-tighter lg:text-5xl">
          who are we
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/payments.png"
                className="hidden rounded-[15px] dark:block"
                alt="software development illustration dark"
                width={1207}
                height={929}
              />
              <Image
                src="/payments-light.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="software development illustration light"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              We are{" "}
              <span className="text-accent-foreground font-bold">
                innovators, creators, and enablers
              </span>{" "}
              of tomorrow&apos;s technology.
            </p>
            <p className="text-muted-foreground">
              Rooted in the heart of Singapore, we specialize in crafting
              scalable, impactful, and beautifully designed software solutions
              that transform ideas into reality and integrate seamlessly into
              the fabric of everyday life.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  Only those who are crazy enough to change the world can do it.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">
                    Jia Wei Ng, Co-Founder
                  </cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
