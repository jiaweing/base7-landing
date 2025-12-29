import {
  AppWindow,
  Cloud,
  Lightbulb,
  Paintbrush,
  Store,
  Timer,
} from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

const features = [
  {
    icon: Lightbulb,
    title: "Expert Consulting",
    description:
      "We turn your ideas into plans that just make sense. Simple, clear, and refreshingly straightforward.",
  },
  {
    icon: AppWindow,
    title: "Custom Apps",
    description:
      "Apps that feel made just for you. Because they are. Exactly what you need, with nothing getting in the way.",
  },
  {
    icon: Store,
    title: "Seamless Publishing",
    description:
      "From idea to app store without the headaches. Use our accounts to skip the fees and get to market faster.",
  },
  {
    icon: Paintbrush,
    title: "Beautiful Design",
    description:
      "Interfaces that just work. Thoughtfully designed to feel familiar from the moment you first use them.",
  },
  {
    icon: Timer,
    title: "30-Day Delivery",
    description:
      "Your project, ready in 30 days. Phone apps, websites, desktop software — all crafted with care.",
  },
  {
    icon: Cloud,
    title: "Worry-Free Hosting",
    description:
      "We handle the technical stuff so you don't have to. Your app just works, wherever and whenever it's needed.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <FadeIn duration={0.4}>
          <div className="relative grid items-center gap-4 md:grid-cols-2 md:gap-12">
            <h2 className="font-medium text-4xl tracking-tighter md:text-5xl">
              how we deliver value
            </h2>
            <p className="max-w-sm text-muted-foreground sm:ml-auto">
              with over 10 years of industry experience, we bring expertise and
              insight to every project. Your vision, our craftsmanship.
            </p>
          </div>
        </FadeIn>

        <FadeIn duration={0.5}>
          <div className="relative mb-8">
            <Image
              alt="feature illustration"
              className="h-auto w-full rounded-[1rem]"
              height={1137}
              priority
              src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={2797}
            />
          </div>
        </FadeIn>

        <div className="relative mx-auto grid grid-cols-1 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn delay={0.1 * index} duration={0.4} key={index}>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon className="size-4" />
                    <h3 className="font-medium text-sm">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
