import { NotionRenderer } from "@/components/markdown-renderer";
import { getProject } from "@/lib/notion";
import { ChevronLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60; // Revalidate every minute

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const { project, blocks } = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      <div className="space-y-8">
        {/* Title and Date */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          back to home
        </Link>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
              {project.title}
            </h1>
            <span className="text-muted-foreground">{project.year}</span>
          </div>

          <div className="flex items-center gap-4">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Project
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="text-lg leading-relaxed text-foreground/90">
          {project.description}
        </div>

        {/* Technologies */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="space-y-4 pt-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Header Image */}
        {project.cover && (
          <div className="aspect-video relative overflow-hidden rounded-2xl">
            <Image
              src={project.cover}
              alt={project.title}
              className="h-full w-full object-cover"
              width={1200}
              height={675}
              priority
            />
          </div>
        )}

        {/* Markdown Content */}
        {blocks && blocks.length > 0 && (
          <div className="mt-12">
            <NotionRenderer blocks={blocks} />
          </div>
        )}
      </div>
    </article>
  );
}
