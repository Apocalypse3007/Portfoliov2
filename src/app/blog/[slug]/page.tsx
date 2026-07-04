import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? `${post.title} — Anany Singh` : "Post not found" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/blog"
        data-cursor-hover
        className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent"
      >
        <ArrowLeft size={14} /> back to blog
      </Link>
      <p className="mt-8 font-mono text-xs tracking-widest text-accent uppercase">{post.date}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
      <div className="prose prose-lg mt-10 max-w-none text-foreground/85">
        {post.content.split("\n\n").map((para, i) => (
          <p key={i} className="mb-5 leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </article>
  );
}
