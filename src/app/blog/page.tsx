import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { posts } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog — Anany Singh" };

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <RevealOnScroll>
        <SectionLabel index="00" label="blog" />
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Writing</h1>
      </RevealOnScroll>

      {posts.length === 0 ? (
        <RevealOnScroll delay={0.1} className="shadow-brutal-sm mt-14 border-brutal bg-surface p-10 text-center">
          <p className="font-mono text-sm tracking-widest text-accent uppercase">
            /404 — nothing here yet
          </p>
          <p className="mt-4 text-lg text-foreground/80">
            Nothing published yet — check back soon.
          </p>
        </RevealOnScroll>
      ) : (
        <div className="mt-12 divide-y-[2.5px]">
          {posts.map((post, i) => (
            <RevealOnScroll key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} data-cursor-hover className="group block py-6">
                <p className="font-mono text-xs tracking-widest text-muted uppercase">
                  {post.date}
                </p>
                <h2 className="mt-2 text-2xl font-bold group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-2 text-foreground/70">{post.excerpt}</p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      )}
    </section>
  );
}
