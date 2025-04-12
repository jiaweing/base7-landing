import { InView } from "@/components/core/in-view";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
        >
          <h2 className="relative z-10 max-w-xl text-4xl tracking-tighter lg:text-5xl">
            who are we
          </h2>
        </InView>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <InView
            variants={{
              hidden: { opacity: 0, x: -50, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
          >
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
          </InView>

          <div className="relative space-y-4">
            <InView
              variants={{
                hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
                visible: { opacity: 1, x: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
            >
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We are{" "}
                  <span className="text-accent-foreground font-bold">
                    innovators, creators, and enablers
                  </span>{" "}
                  of tomorrow&apos;s technology.
                </p>
                <p className="text-muted-foreground">
                  Rooted in the heart of Singapore, we specialize in crafting
                  scalable, impactful, and beautifully designed software
                  solutions that transform ideas into reality and integrate
                  seamlessly into the fabric of everyday life.
                </p>
              </div>
            </InView>

            <InView
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
            >
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
            </InView>
          </div>
        </div>
      </div>
    </section>
  );
}
