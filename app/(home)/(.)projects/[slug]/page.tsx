import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NotionRenderer } from "@/components/markdown-renderer";
import ProjectGallery from "@/components/project-gallery";
import {
  Credenza,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import { FadeIn } from "@/components/ui/fade-in";
import { GithubDark } from "@/components/ui/svgs/githubDark";
import { getProject, getProjects } from "@/lib/notion";

interface ProjectModalProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectModalProps): Promise<Metadata> {
  const { slug } = await params;
  const { project } = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
  };
}

export default async function ProjectModal({ params }: ProjectModalProps) {
  const { slug } = await params;
  const { project, blocks } = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <Credenza defaultOpen>
      <CredenzaContent className="min-w-[90vw] rounded-3xl bg-background/95 backdrop-blur-md md:min-w-[700px] lg:min-w-[900px]">
        <CredenzaHeader className="hidden">
          <CredenzaTitle>{project.title}</CredenzaTitle>
        </CredenzaHeader>
        <div className="max-h-[85vh] overflow-y-auto p-6 md:p-8">
          <div className="space-y-8">
            {/* Project Header */}
            <FadeIn>
              <div className="flex items-start gap-4">
                {project.logo ? (
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-white/10">
                    <Image
                      alt={`${project.title} logo`}
                      className="h-full w-full object-cover"
                      fill
                      sizes="64px"
                      src={project.logo}
                    />
                  </div>
                ) : null}
                <div className="flex-1">
                  <h2 className="font-bold text-3xl tracking-tight">
                    {project.title}
                  </h2>
                  {project.year && (
                    <p className="font-mono text-muted-foreground text-sm">
                      {project.year}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.1}>
              <p className="text-foreground/90 leading-relaxed">
                {project.description}
              </p>
            </FadeIn>

            {/* Links & Tech Stack */}
            <FadeIn delay={0.2}>
              <div className="flex flex-row items-center justify-between">
                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.url && (
                    <a
                      className="inline-flex items-center gap-2 font-medium text-primary text-sm hover:underline"
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Website
                    </a>
                  )}

                  {project.github && (
                    <a
                      className="inline-flex items-center gap-2 font-medium text-primary text-sm hover:underline"
                      href={project.github}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GithubDark className="h-4 w-4" />
                      GitHub
                    </a>
                  )}

                  <Link
                    className="inline-flex items-center gap-2 font-medium text-primary text-sm hover:underline"
                    href={`/projects/${project.slug}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                    View Project
                  </Link>
                </div>

                {/* Tech Stack */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        className="inline-flex items-center rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground text-xs"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground text-xs">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </FadeIn>

            {/* Header Image & Gallery */}
            {(project.cover ||
              (project.screenshots && project.screenshots.length > 0)) && (
              <FadeIn delay={0.3}>
                <ProjectGallery
                  images={[
                    project.cover,
                    ...(project.screenshots || []),
                  ].filter((img): img is string => !!img)}
                />
              </FadeIn>
            )}

            {/* Notion Content */}
            {blocks && blocks.length > 0 && (
              <FadeIn delay={0.4}>
                <div className="mt-8">
                  <NotionRenderer blocks={blocks as BlockObjectResponse[]} />
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </CredenzaContent>
    </Credenza>
  );
}
