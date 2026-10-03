import BlurFade from "@/components/magicui/blur-fade";
import { posts } from "@/lib/posts";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software, AI, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Blog{" "}
          <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
            {posts.length} posts
          </span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">My thoughts on software, AI, and more.</p>
      </BlurFade>

      {posts.length > 0 ? (
        <div className="flex flex-col gap-5">
          {posts.map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={post.slug}>
              <Link
                className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                href={`/blog/${post.slug}`}
              >
                <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                  {String(id + 1).padStart(2, "0")}.
                </span>
                <div className="flex flex-col gap-y-2 flex-1">
                  <p className="tracking-tight text-lg font-medium">
                    {post.title}
                    <ChevronRight
                      className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                      aria-hidden
                    />
                  </p>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">No blog posts yet. Check back soon!</p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
