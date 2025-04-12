"use client";

import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from "@/components/motion-primitives/morphing-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

// Project data from base07.com/portfolio
const projects = [
  {
    id: 1,
    title: "Decosmic",
    year: "2024",
    shortDescription: "Launch your own AI in seconds",
    fullDescription:
      "The fastest way to launch a customized AI for you, your team, or your customers, tailored to your custom knowledge. Zero code and technical knowledge required - deploy in minutes.",
    image: "/screenshots/decosmic.png",
    bgColor: "bg-blue-500/20",
    features: [
      {
        title: "Integrate with everywhere",
        description:
          "Ingest data from anywhere, use it everywhere. Decosmic integrates with your favorite tools and services and consolidates all of the data automatically for you. Find the information you need across multiple data sources in seconds.",
      },
      {
        title: "Chat with unlimited data sources",
        description:
          "Ask your entire workspace all in a single chat. Import your data, code documentation, minutes, reports, lecture slides and more.",
      },
      {
        title: "Integrate a private search engine to your own files",
        description:
          "It's like having your own Google for you and your team. Find anything in seconds.",
      },
    ],
    technologies: ["AI", "NLP", "Vector Database", "React"],
    link: "https://decosmic.com/?utm_source=portfolio&utm_medium=website",
    ctaText: "Pre-register today!",
  },
  {
    id: 2,
    title: "Been",
    year: "2024",
    shortDescription: "Your places. Your world.",
    fullDescription:
      "A platform designed to help users track the places they want to visit and those they have already been to, all in one central location.",
    image: "/images/projects/been-desktop.png",
    bgColor: "bg-purple-500/20",
    features: [
      {
        title: "Problem",
        description:
          "In today's fast-paced world, many people struggle to keep track of the places they want to visit and those they have already explored. With numerous platforms available, users often find themselves overwhelmed, leading to lost recommendations and forgotten destinations.",
      },
      {
        title: "Solution",
        description:
          "Been.place is a platform designed to help users track the places they want to visit and those they have already been to, all in one central location.",
      },
      {
        title: "Key Features",
        description:
          "List Management, Social Integration, Map Integration, Caching for Efficiency, User Profiles",
      },
    ],
    technologies: ["Next.js", "React", "Apple Maps API", "Tailwind CSS"],
    link: "https://been.place",
    ctaText: "Visit Been.place",
    videoLink: "https://www.youtube.com/watch?v=GtNW5-4e8qw",
  },
  {
    id: 3,
    title: "Coming Soon",
    year: "2025",
    shortDescription: "Watch this space for our next launch.",
    fullDescription:
      "Our next exciting project is in development. Stay tuned for more information.",
    image: "/images/projects/c.png",
    bgColor: "bg-green-500/20",
    features: [],
    technologies: [],
    link: "",
    ctaText: "",
  },
  {
    id: 4,
    title: "Coming Soon",
    year: "2025",
    shortDescription: "Watch this space for our next launch.",
    fullDescription:
      "Our next exciting project is in development. Stay tuned for more information.",
    image: "/images/projects/d.png",
    bgColor: "bg-amber-500/20",
    features: [],
    technologies: [],
    link: "",
    ctaText: "",
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="portfolio" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 flex flex-row justify-between">
          <h2 className="text-2xl font-medium tracking-tighter">our work</h2>
          <p className="text-muted-foreground">Since 2024</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex items-center justify-end gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <MorphingDialog>
      <div className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md">
        <MorphingDialogTrigger className="block h-full w-full cursor-pointer">
          <div className="aspect-video relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-30" />
            <div className="h-full w-full bg-muted">
              {/* Project image or placeholder */}
              <div
                className={`flex h-full items-center justify-center ${project.bgColor} text-accent-foreground`}
              >
                <span className="text-xl font-medium">{project.title}</span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="text-sm text-muted-foreground">{project.year}</div>
            <h3 className="text-xl font-medium">{project.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>
        </MorphingDialogTrigger>

        <MorphingDialogContainer>
          <MorphingDialogContent className="max-w-3xl rounded-xl bg-card p-0 shadow-lg">
            <div className="aspect-video relative overflow-hidden rounded-t-xl">
              <div
                className={`h-full w-full ${project.bgColor} flex items-center justify-center`}
              >
                <span className="text-2xl font-bold">{project.title}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <MorphingDialogTitle className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
                {project.title}
              </MorphingDialogTitle>
            </div>

            <div className="p-6">
              <MorphingDialogDescription className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {project.year}
                  </div>
                </div>

                <p className="text-lg">{project.fullDescription}</p>

                {project.features && project.features.length > 0 && (
                  <div className="space-y-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="text-lg font-medium">{feature.title}</h4>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium">Technologies</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.videoLink && (
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${
                        project.videoLink.split("v=")[1]
                      }`}
                      title={`${project.title} video`}
                      style={{ border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                <div className="flex items-center gap-4 pt-4">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {project.ctaText || "Visit Project"}
                    </Link>
                  )}
                </div>
              </MorphingDialogDescription>
            </div>

            <MorphingDialogClose className="absolute right-4 top-4 rounded-full bg-black/20 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-black/30" />
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </div>
    </MorphingDialog>
  );
}
