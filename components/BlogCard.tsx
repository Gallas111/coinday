import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

interface BlogCardProps {
  post: PostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="border border-[var(--border)] rounded-xl bg-[var(--surface)] hover:bg-[var(--surface-2)] hover:border-[var(--accent)] p-5 transition-all">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold mono uppercase tracking-wider bg-[var(--accent-soft)] text-[var(--accent-strong)] border border-[var(--accent)]/20">
            {post.category}
          </span>
          <span className="mono text-[10px] text-[var(--muted)] tabular">{post.date}</span>
          <span className="mono text-[10px] text-[var(--muted)] tabular">·  {post.readingTime}min</span>
        </div>
        <h2 className="font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] leading-snug mb-2 line-clamp-3 transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-[var(--muted)] line-clamp-2 leading-relaxed">
          {post.description}
        </p>
        {post.tags.length > 0 && (
          <div className="mt-4 pt-3 border-t border-[var(--border)] flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="mono text-[10px] text-[var(--muted)] bg-[var(--background)] px-1.5 py-0.5 rounded border border-[var(--border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
