import { InViewWrapper } from "@/components/core/in-view-wrapper";
import { NotionRenderer } from "@/components/markdown-renderer";
import { getPage, getPages } from "@/lib/notion";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { page } = await getPage(slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: page.title,
  };
}

export default async function GenericPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { page, blocks } = await getPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <InViewWrapper>
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
            {page.title}
          </h1>
        </header>
      </InViewWrapper>

      {blocks && blocks.length > 0 && (
        <InViewWrapper transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="mb-16">
            <NotionRenderer blocks={blocks} />
          </div>
        </InViewWrapper>
      )}
    </>
  );
}
