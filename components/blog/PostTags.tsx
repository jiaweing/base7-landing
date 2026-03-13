import { getTagColorClass } from "@/lib/tag-colors";

export function PostTags({
  tags,
  tagColors,
}: {
  tags: string[];
  tagColors?: Record<string, string>;
}) {
  if (!tags.length) return null;
  return (
    <div className="flex gap-1">
      {tags.map((tag, index) => (
        <span
          className={`h-2 w-2 rounded-full ${getTagColorClass(tag, tagColors?.[tag])}`}
          key={`${tag}-${index}`}
          title={tag}
        />
      ))}
    </div>
  );
}
