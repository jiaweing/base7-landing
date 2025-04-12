export default function StatsSection() {
  return (
    <section id="services" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl font-medium tracking-tighter lg:text-5xl">
            software that works everywhere, for everyone.
          </h2>
          <p className="text-muted-foreground">
            We create software that fits perfectly into your life — whether
            you&apos;re on your phone, laptop, or whatever comes next. Our apps
            work even when your internet doesn&apos;t, keep your data private,
            and put you in control.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <p className="text-muted-foreground">
              We turn complicated problems into simple solutions. No tech
              jargon, no unnecessary features — just smart apps that solve real
              problems and work exactly when and where you need them.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl text-transparent dark:from-white dark:to-zinc-800">
                  50+
                </div>
                <p className="text-muted-foreground">
                  projects delivered since 2024
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl text-transparent dark:from-white dark:to-zinc-800">
                  400k+
                </div>
                <p className="text-muted-foreground">users scaled to</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 pl-4 space-y-2">
              <p>
                At Base 7, we don&apos;t chase tech trends — we build what
                actually matters. The kind of software that makes you go
                &quot;why didn&apos;t this exist before?&quot;
              </p>
              <p>
                We&apos;re not just coding; we&apos;re crafting tomorrow&apos;s
                digital experiences that feel like they were made just for you.
              </p>

              <div className="mt-6 space-y-3">
                <cite className="block font-medium">
                  Cheng En Liout, Co-Founder
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
