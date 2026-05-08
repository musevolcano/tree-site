import { getAllPosts, getPostBySlug, renderMarkdown } from "@/lib/blog";
import { businessInfo } from "@/data/site-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Big Creek Tree Service`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.bigcreektreeservice.com/blog/${slug}`,
      type: "article",
    },
  };
}

const categoryColors: Record<string, string> = {
  "Tree Health":   "var(--green-deep)",
  "Storm Damage":  "#2c5282",
  "Tips & Advice": "#744210",
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await renderMarkdown(post.content);
  const color = categoryColors[post.category] ?? "var(--green-deep)";

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f8faf5" }}>

      {/* Hero banner */}
      <section
        className="w-full py-14 px-4 text-center"
        style={{ backgroundColor: color }}
      >
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
          style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}
        >
          {post.category}
        </span>
        <h1
          className="leading-tight mb-4 max-w-3xl mx-auto"
          style={{
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#ffffff",
            letterSpacing: "0.03em",
          }}
        >
          {post.title}
        </h1>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
          {post.date} · Big Creek Tree Service
        </p>
      </section>

      {/* Article body */}
      <article className="max-w-2xl mx-auto px-4 py-12">
        <div
          className="prose-content"
          style={{ color: "#333333" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* CTA inside article */}
        <div
          className="mt-12 rounded-xl p-6 text-center"
          style={{ backgroundColor: "var(--green-deep)" }}
        >
          <p
            className="mb-2"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "1.6rem",
              color: "#ffffff",
              letterSpacing: "0.04em",
            }}
          >
            Get a Free Estimate Today
          </p>
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
            Licensed &amp; insured. Serving Greater Cleveland &amp; NE Ohio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={businessInfo.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold transition-opacity hover:opacity-85"
              style={{
                backgroundColor: "var(--green-bright)",
                color: "#ffffff",
                fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                fontSize: "1.05rem",
                letterSpacing: "0.08em",
              }}
            >
              📞 CALL {businessInfo.phone}
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold transition-opacity hover:opacity-85"
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "2px solid rgba(255,255,255,0.5)",
                fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                fontSize: "1.05rem",
                letterSpacing: "0.08em",
              }}
            >
              GET FREE QUOTE
            </a>
          </div>
        </div>
      </article>

      {/* Back to blog */}
      <div className="text-center pb-12">
        <a
          href="/blog"
          className="text-sm font-bold"
          style={{ color: "var(--green-mid)" }}
        >
          ← Back to All Posts
        </a>
      </div>
    </main>
  );
}
