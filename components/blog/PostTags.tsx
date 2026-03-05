export function PostTags({ tags }: { tags: string[] }) {
  if (!tags.length) return null;
  return (
    <>
      {tags.map((tag) => (
        <span
          className="rounded border px-1.5 py-0.5 text-xs capitalize"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </>
  );
}
