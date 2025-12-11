import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <FadeIn duration={0.4}>
          <h2 className="relative z-10 max-w-xl text-4xl tracking-tighter lg:text-5xl">
            who are we
          </h2>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <FadeIn direction="right" duration={0.5} delay={0.1}>
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                <Image
                  src="https://images.unsplash.com/photo-1542315192-1f61a1792f33?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="rounded-[15px]"
                  alt="software development illustration dark"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
          </FadeIn>

          <div className="relative space-y-4">
            <FadeIn direction="left" duration={0.5} delay={0.2}>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We&apos;re the team that turns &quot;it can&apos;t be
                  done&quot; into &quot;it&apos;s already finished.&quot;{" "}
                  <span className="text-accent-foreground font-semibold">
                    10+ years of experience
                  </span>{" "}
                  creating tomorrow&apos;s technology.
                </p>
                <p className="text-muted-foreground">
                  From Singapore to the world, we build digital experiences in
                  days that others take months to create. Our apps don&apos;t
                  just work—they seamlessly become part of how you live, work,
                  and play.
                </p>
                <p className="text-muted-foreground">
                  Consider us your tech allies. We speak your language, move at
                  your pace, and stick around long after the launch confetti
                  settles.
                </p>
              </div>
            </FadeIn>

            <FadeIn duration={0.5} delay={0.3}>
              <div className="pt-6">
                <blockquote className="border-l-4 pl-4">
                  <p>
                    Only those who are crazy enough to change the world can do
                    it.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium">
                      Jia Wei Ng, Co-Founder
                    </cite>
                  </div>
                </blockquote>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
