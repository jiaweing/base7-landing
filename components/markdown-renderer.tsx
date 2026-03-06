"use client";

import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlock } from "@/components/notion/NotionBlock";

interface NotionRendererProps {
  blocks: BlockObjectResponse[];
}

type BlockGroup =
  | { type: "numbered_list"; blocks: BlockObjectResponse[] }
  | { type: "bulleted_list"; blocks: BlockObjectResponse[] }
  | { type: "single"; blocks: [BlockObjectResponse] };

function groupBlocks(blocks: BlockObjectResponse[]): BlockGroup[] {
  const groups: BlockGroup[] = [];
  for (const block of blocks) {
    const last = groups[groups.length - 1];
    if (block.type === "numbered_list_item") {
      if (last?.type === "numbered_list") {
        last.blocks.push(block);
      } else {
        groups.push({ type: "numbered_list", blocks: [block] });
      }
    } else if (block.type === "bulleted_list_item") {
      if (last?.type === "bulleted_list") {
        last.blocks.push(block);
      } else {
        groups.push({ type: "bulleted_list", blocks: [block] });
      }
    } else {
      groups.push({ type: "single", blocks: [block] });
    }
  }
  return groups;
}

export function NotionRenderer({ blocks }: NotionRendererProps) {
  const groups = groupBlocks(blocks);
  return (
    <div className="prose dark:prose-invert max-w-none">
      {groups.map((group, i) => {
        if (group.type === "numbered_list") {
          return (
            <ol className="my-4 ml-1 list-decimal space-y-1" key={i}>
              {group.blocks.map((block) => (
                <NotionBlock block={block} key={block.id} />
              ))}
            </ol>
          );
        }
        if (group.type === "bulleted_list") {
          return (
            <ul className="my-4 ml-1 list-disc space-y-1" key={i}>
              {group.blocks.map((block) => (
                <NotionBlock block={block} key={block.id} />
              ))}
            </ul>
          );
        }
        const block = group.blocks[0];
        return (
          <div key={block.id}>
            <NotionBlock block={block} />
          </div>
        );
      })}
    </div>
  );
}
