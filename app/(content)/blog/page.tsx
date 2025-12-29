import { format } from "date-fns";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { getBlogPosts } from "@/lib/notion";

export const revalidate = 3600;

export default async function BlogIndex() {
  const posts = await getBlogPosts();

  return (
    <>
      <FadeIn>
        <div className="mb-16">
          <h1 className="mb-4 font-medium text-2xl tracking-tight">blog</h1>
        </div>
      </FadeIn>

      <div className="grid gap-10">
        {posts.map((post, index) => (
          <FadeIn delay={(index % 5) * 0.1} duration={0.5} key={post.id}>
            <Link className="group block space-y-4" href={`/blog/${post.slug}`}>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                {post.authors && post.authors.length > 0 && (
                  <div className="flex items-center gap-2">
                    {post.authors[0].avatar && (
                      <img
                        alt={post.authors[0].name}
                        className="h-5 w-5 rounded-full object-cover"
                        src={post.authors[0].avatar}
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
                      <span className="capitalize" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-4">
                <h2 className="font-medium text-xl">{post.title}</h2>
                <time
                  className="whitespace-nowrap text-muted-foreground text-sm"
                  dateTime={post.date}
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
          </FadeIn>
        ))}

        {posts.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No posts found.
          </div>
        )}
      </div>
    </>
  );
}
