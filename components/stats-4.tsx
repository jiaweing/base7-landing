export default function StatsSection() {
  return (
    <section id="services" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl font-medium lg:text-5xl">
            we build your app in 20 days
          </h2>
          <p>
            With a focus on ubiquitous computing, we build technology that is
            accessible, adaptive, and seamlessly integrated across devices and
            contexts. Our local-first approach prioritizes data sovereignty,
            reliability, and user empowerment.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <p>
              We simplify the complexity of building solutions by addressing
              real-world pain points with intelligent, local-first, and
              edge-optimized technology.
            </p>
            <div className="mb-12 mt-12 grid grid-cols-2 gap-6 md:mb-0">
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl text-transparent dark:from-white dark:to-zinc-800">
                  6+
                </div>
                <p>Services Offered</p>
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl text-transparent dark:from-white dark:to-zinc-800">
                  100%
                </div>
                <p>Client Satisfaction</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl text-transparent dark:from-white dark:to-zinc-800">
                  SG
                </div>
                <p>Based in Singapore</p>
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl text-transparent dark:from-white dark:to-zinc-800">
                  24/7
                </div>
                <p>Support</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 pl-4">
              <p>
                At Base 7, we don't just follow trends; we set them—creating the
                infrastructure for a smarter, more connected, and innovative
                future. Our vision is to be the cornerstone of global
                innovation, leading the evolution of technology.
              </p>

              <div className="mt-6 space-y-3">
                <cite className="block font-medium">Base 7 Team</cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
