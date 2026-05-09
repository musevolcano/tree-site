import {
  getPostsByCategory,
  CATEGORY_LABELS,
  CATEGORY_DESCRIPTIONS,
} from "@/lib/blog";
import type { BlogCategory } from "@/lib/blog";
import { businessInfo } from "@/data/site-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

const VALID_CATEGORIES: BlogCategory[] = [
  "tree-care",
  "emergency-storm",
  "property-business",
];

const categoryColors: Record<BlogCategory, string> = {
  "tree-care":        "var(--green-deep)",
  "emergency-storm":  "#2c5282",
  "property-business":"#744210",
};

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!VALID_CATEGORIES.includes(category as BlogCategory)) return {};
  const cat = category as BlogCategory;
  return {
    title: `${CATEGORY_LABELS[cat]} | Big Creek Tree Service Blog`,
    description: CATEGORY_DESCRIPTIONS[cat],
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!VALID_CATEGORIES.includes(category as BlogCategory)) notFound();

  const cat = category as BlogCategory;
  const posts = getPostsByCategory(cat);
  const color = categoryColors[cat];
  const label = CATEGORY_LABELS[cat];
  const description = CATEGORY_DESCRIPTIONS[cat];

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f8faf5" }}>

      {/* Header */}
      <section
        className="w-full py-16 px-4 text-center"
        style={{ backgroundColor: color }}
      >
        {/* Breadcrumb */}
        <nav
          className="flex items-center justify-center gap-2 text-xs mb-6"
          style={{ color: "rgba(255,255,255,0.6)" }}
          aria-label="Breadcrumb"
        >
          <Link href="/" style={{ color: "rgba(255,255,255,0.6)" }}>Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/blog" style={{ color: "rgba(255,255,255,0.6)" }}>Blog</Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}>{label}</span>
        </nav>

        <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
          Category
        </p>
        <h1
          className="leading-none mb-4"
          style={{
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            color: "#ffffff",
            letterSpacing: "0.04em",
          }}
        >
          {label}
        </h1>
        <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
          {description}
        </p>
      </section>

      {/* Category filter pills */}
      <section className="max-w-6xl mx-auto px-4 pt-10">
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/blog"
            className="px-4 py-2 rounded-full text-sm font-bold transition-colors min-h-[44px] flex items-center"
            style={{ backgroundColor: "#ffffff", color: "#444444", border: "2px solid rgba(0,0,0,0.12)" }}
          >
            All Posts
          </Link>
          {VALID_CATEGORIES.map((c) => (
            <Link
              key={c}
              href={`/blog/category/${c}`}
              className="px-4 py-2 rounded-full text-sm font-bold transition-colors min-h-[44px] flex items-center"
              style={
                c === cat
                  ? { backgroundColor: categoryColors[c], color: "#ffffff" }
                  : { backgroundColor: "#ffffff", color: "#444444", border: "2px solid rgba(0,0,0,0.12)" }
              }
            >
              {CATEGORY_LABELS[c]}
            </Link>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg font-semibold mb-2" style={{ color: "#666666" }}>
              No posts yet in {label}.
            </p>
            <p className="text-sm mb-6" style={{ color: "#999999" }}>
              Check back soon — new content is on the way.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-5 py-3 rounded-lg font-bold min-h-[44px]"
              style={{ backgroundColor: "var(--green-deep)", color: "#ffffff" }}
            >
              ← View All Posts
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: "#ffffff",
                  border: "2px solid rgba(114,204,53,0.2)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  textDecoration: "none",
                }}
              >
                <div
                  className="w-full h-32 flex items-center justify-center"
                  style={{ backgroundColor: color }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}
                  >
                    {label}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xs font-semibold" style={{ color: "#999999" }}>{post.publishedAt}</p>
                    <span style={{ color: "#cccccc" }}>·</span>
                    <p className="text-xs font-semibold" style={{ color: "#999999" }}>{post.readingTime}</p>
                  </div>
                  <h2 className="font-bold text-base mb-2 leading-snug flex-1" style={{ color: "var(--green-deep)" }}>
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#555555" }}>
                    {post.excerpt}
                  </p>
                  <span className="text-sm font-bold" style={{ color: "var(--green-bright)" }}>
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="text-center pb-16 px-4">
        <p className="text-sm mb-4" style={{ color: "#666666" }}>Have a tree question? Skip the blog — call us direct.</p>
        <a
          href={businessInfo.phoneHref}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-opacity hover:opacity-85 min-h-[44px]"
          style={{
            backgroundColor: "var(--green-deep)",
            color: "#ffffff",
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "1.1rem",
            letterSpacing: "0.08em",
          }}
        >
          📞 CALL (216) 551-6445 — FREE ADVICE
        </a>
      </section>
    </main>
  );
}
