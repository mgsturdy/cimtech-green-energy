import Link from 'next/link';
import { type BlogPost } from '@/data/blog';

type BlogListProps = {
  posts: BlogPost[];
  limit?: number;
};

export function BlogList({ posts, limit }: BlogListProps) {
  const visible = limit ? posts.slice(0, limit) : posts;

  return (
    <div>
      {visible.map((post) => (
        <div
          key={post.slug}
          className="border-l-2 border-accent pl-5 mb-6 last:mb-0"
        >
          <span className="font-mono text-xs text-muted">{post.date}</span>
          <h3 className="font-sans text-base font-semibold mt-1.5 mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-2"
          >
            Read More <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
