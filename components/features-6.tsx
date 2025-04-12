import { Briefcase, Cloud, Code, Palette, Rocket, Server } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium tracking-tighter">what we do</h2>
        </div>
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Briefcase className="size-4" />
              <h3 className="text-sm font-medium">Consultant</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Need professional advice? We're here to help.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Code className="size-4" />
              <h3 className="text-sm font-medium">Development</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We build software that works for you.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Server className="size-4" />
              <h3 className="text-sm font-medium">Architect</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We design software that scales.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Palette className="size-4" />
              <h3 className="text-sm font-medium">Design</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We love software that looks good and we know you do too.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Rocket className="size-4" />
              <h3 className="text-sm font-medium">Deploy</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We bring your software to life.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cloud className="size-4" />
              <h3 className="text-sm font-medium">Software as a Service</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We build our own software too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
