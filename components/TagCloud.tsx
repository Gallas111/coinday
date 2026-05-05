import Link from "next/link";
import type { TagInfo } from "@/lib/tags";

interface TagCloudProps {
  tags: TagInfo[];
  limit?: number;
}

export default function TagCloud({ tags, limit = 20 }: TagCloudProps) {
  const displayTags = tags.slice(0, limit);

  return (
    <div className="flex flex-wrap gap-2">
      {displayTags.map((tag) => (
        <Link
          key={tag.slug}
          href={`/tag/${encodeURIComponent(tag.slug)}`}
          className="inline-flex items-center gap-1 text-xs bg-[var(--surface)] border border-[var(--border)] px-3 py-1.5 rounded-full text-muted hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
        >
          <span>#{tag.name}</span>
          <span className="text-muted/60">({tag.count})</span>
        </Link>
      ))}
    </div>
  );
}
