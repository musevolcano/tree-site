import { getAllPosts, getPostsByCategory, CATEGORY_LABELS, CATEGORY_DESCRIPTIONS } from "@/lib/blog";
import type { BlogCategory } from "@/lib/blog";
import { businessInfo } from "@/data/site-data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tree Care Blog | Big Creek Tree Service — NE Ohio Tips & Advice",
  description:
    "Free tree care advice from NE Ohio's trusted arborists. Storm prep, tree health, removal tips, and seasonal guides for Greater Cleveland homeowners.",
  alternates: {
    types: {
      "application/rss+xml": "https://www.bigcreektreeservice.com/blog/feed.xml",
    },
  },
};

const POSTS_PER_PAGE = 12;

const categoryColors: Record<string, string> = {
  "tree-care":        "var(--green-deep)",
  "emergency-storm":  "#2c5282",
  "property-business":"#744210",
};

const CATEGORIES: BlogCategory[] = ["tree-care", "emergency-storm", "property-business"];

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const { page: pageParam, category: categoryParam } = await searchParams;

  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
  const activeCategory = CATEGORIES.includes(categoryParam as BlogCategory)
    ? (categoryParam as BlogCategory)
    : null;

  const allPosts = activeCategory
    ? getPostsByCategory(activeCategory)
    : getAllPosts();

  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const posts = allPosts.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f8faf5" }}>

      {/* Header */}
      <section
        className="w-full py-16 px-4 text-center"
        style={{ backgroundColor: "var(--green-deep)" }}
      >
        <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "var(--green-bright)" }}>
          Ohio Arborist Insights
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
          From The Blog
        </h1>
        <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
          Free tree care advice from NE Ohio&apos;s tree pros. No sales pitch — just what you need to protect your property.
        </p>
        {/* RSS link */}
        <a
          href="/blog/feed.xml"
          className="inline-flex items-center gap-1 mt-4 text-xs font-semibold"
          style={{ color: "rgba(255,255,255,0.5)" }}
          aria-label="Subscribe to RSS feed"
        >
          ⚡ RSS Feed
        </a>
      </section>

      {/* Category filter pills */}
      <section className="max-w-6xl mx-auto px-4 pt-10">
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/blog"
            className="px-4 py-2 rounded-full text-sm font-bold transition-colors min-h-[44px] flex items-center"
            style={
              !activeCategory
                ? { backgroundColor: "var(--green-deep)", color: "#ffffff" }
                : { backgroundColor: "#ffffff", color: "var(--green-deep)", border: "2px solid var(--green-deep)" }
            }
          >
            All Posts
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/blog/category/${cat}`}
              className="px-4 py-2 rounded-full text-sm font-bold transition-colors min-h-[44px] flex items-center"
              style={
                activeCategory === cat
                  ? { backgroundColor: categoryColors[cat], color: "#ffffff" }
                  : { backgroundColor: "#ffffff", color: "#444444", border: "2px solid rgba(0,0,0,0.12)" }
              }
            >
              {CATEGORY_LABELS[cat]}
            </Link>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg font-semibold mb-2" style={{ color: "#666666" }}>
              No posts yet in this category.
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
            {posts.map((post) => {
              const color = categoryColors[post.category] ?? "var(--green-deep)";
              return (
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
                  {/* Banner */}
                  <div
                    className="w-full h-32 flex items-center justify-center"
                    style={{ backgroundColor: color }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}
                    >
                      {CATEGORY_LABELS[post.category] ?? post.category}
                    </span>
                  </div>
                  {/* Body */}
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
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="flex justify-center gap-3 mt-12" aria-label="Pagination">
            {safePage > 1 && (
              <Link
                href={`/blog?page=${safePage - 1}${activeCategory ? `&category=${activeCategory}` : ""}`}
                className="px-4 py-2 rounded-lg font-bold text-sm min-h-[44px] flex items-center"
                style={{ backgroundColor: "#ffffff", color: "var(--green-deep)", border: "2px solid var(--green-deep)" }}
              >
                ← Prev
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/blog?page=${p}${activeCategory ? `&category=${activeCategory}` : ""}`}
                className="w-11 h-11 flex items-center justify-center rounded-lg font-bold text-sm"
                style={
                  p === safePage
                    ? { backgroundColor: "var(--green-deep)", color: "#ffffff" }
                    : { backgroundColor: "#ffffff", color: "#444444", border: "2px solid rgba(0,0,0,0.12)" }
                }
                aria-current={p === safePage ? "page" : undefined}
              >
                {p}
              </Link>
            ))}
            {safePage < totalPages && (
              <Link
                href={`/blog?page=${safePage + 1}${activeCategory ? `&category=${activeCategory}` : ""}`}
                className="px-4 py-2 rounded-lg font-bold text-sm min-h-[44px] flex items-center"
                style={{ backgroundColor: "#ffffff", color: "var(--green-deep)", border: "2px solid var(--green-deep)" }}
              >
                Next →
              </Link>
            )}
          </nav>
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
