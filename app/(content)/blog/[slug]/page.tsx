import { NotionRenderer } from "@/components/markdown-renderer";
import { getBlogPost, getBlogPosts } from "@/lib/notion";
import { format } from "date-fns";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { post, blocks } = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        back to blog
      </Link>

      <header className="mb-12 space-y-6">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {post.authors && post.authors.length > 0 && (
            <div className="flex items-center gap-2">
              {post.authors[0].avatar && (
                <img
                  src={post.authors[0].avatar}
                  alt={post.authors[0].name}
                  className="h-6 w-6 rounded-full object-cover"
                />
              )}
              <span className="font-medium text-foreground">
                {post.authors.map((a) => a.name).join(", ")}
              </span>
              <span>•</span>
            </div>
          )}
          <time dateTime={post.date}>
            {format(new Date(post.date), "MMMM d, yyyy")}
          </time>
          {post.tags.length > 0 && (
            <>
              <span>•</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      {blocks && blocks.length > 0 && (
        <div className="mb-16">
          <NotionRenderer blocks={blocks} />
        </div>
      )}
    </>
  );
}
