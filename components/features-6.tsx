import { InView } from "@/components/core/in-view";
import { Briefcase, Cloud, Code, Palette, Rocket, Server } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Consultant",
    description: "Need professional advice? We're here to help.",
  },
  {
    icon: Code,
    title: "Development",
    description: "We build software that works for you.",
  },
  {
    icon: Server,
    title: "Architect",
    description: "We design software that scales.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "We love software that looks good and we know you do too.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "We bring your software to life.",
  },
  {
    icon: Cloud,
    title: "Software as a Service",
    description: "We build our own software too.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
        >
          <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium tracking-tighter">
              what we do
            </h2>
          </div>
        </InView>

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <InView
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.1 * index, // Staggered animation
                }}
                viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon className="size-4" />
                    <h3 className="text-sm font-medium">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </InView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
