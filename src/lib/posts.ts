export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

// Empty for now — add posts here (or wire up MDX/a CMS later) and they'll
// show up on /blog and get their own /blog/[slug] page automatically.
export const posts: Post[] = [];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
