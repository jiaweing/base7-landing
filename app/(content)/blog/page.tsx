import { InViewWrapper } from "@/components/core/in-view-wrapper";
import { getBlogPosts } from "@/lib/notion";
import { format } from "date-fns";
import Link from "next/link";

export const revalidate = 3600;

export default async function BlogIndex() {
  const posts = await getBlogPosts();

  return (
    <>
      <div className="mb-16">
        <h1 className="text-2xl font-medium tracking-tight mb-4">blog</h1>
      </div>

      <div className="grid gap-10">
        {posts.map((post) => (
          <InViewWrapper
            key={post.id}
            viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <Link href={`/blog/${post.slug}`} className="group block space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {post.authors && post.authors.length > 0 && (
                  <div className="flex items-center gap-2">
                    {post.authors[0].avatar && (
                      <img
                        src={post.authors[0].avatar}
                        alt={post.authors[0].name}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                    )}
                    <span className="font-medium text-foreground">
                      {post.authors.map((a) => a.name).join(", ")}
                    </span>
                    {post.tags.length > 0 && <span>•</span>}
                  </div>
                )}
                {post.tags.length > 0 && (
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="capitalize">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-medium">{post.title}</h2>
                <time
                  dateTime={post.date}
                  className="text-sm text-muted-foreground whitespace-nowrap"
                >
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
              </div>

              {post.description && (
                <p className="text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              )}
            </Link>
          </InViewWrapper>
        ))}

        {posts.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No posts found.
          </div>
        )}
      </div>
    </>
  );
}
