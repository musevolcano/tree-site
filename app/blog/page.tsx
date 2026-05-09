import {
  getAllPosts,
  getPostsByCategory,
  CATEGORY_LABELS,
} from "@/lib/blog";
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
  "tree-care":         "var(--green-deep)",
  "emergency-storm":   "#1a3a5c",
  "property-business": "#5c3a0a",
};

const categoryBg: Record<string, string> = {
  "tree-care":         "#f0f7ea",
  "emergency-storm":   "#eaf0f7",
  "property-business": "#f7f2ea",
};

const CATEGORIES: BlogCategory[] = [
  "tree-care",
  "emergency-storm",
  "property-business",
];

const AUTHOR_LINE = "Big Creek Tree Service · 25+ yrs · NE Ohio";

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

  const featuredPost = allPosts[0] ?? null;
  const gridPosts = allPosts.slice(1);

  const totalGridPages = Math.max(1, Math.ceil(gridPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalGridPages);
  const pagedPosts = gridPosts.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f8faf5" }}>

      {/* ── Page header ─────────────────────────────────────────── */}
      <section
        className="w-full py-12 px-4 text-center"
        style={{ backgroundColor: "var(--green-deep)" }}
      >
        <p
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: "var(--green-bright)" }}
        >
          Ohio Arborist Insights
        </p>
        <h1
          className="leading-none mb-3"
          style={{
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(2.8rem, 7vw, 5rem)",
            color: "#ffffff",
            letterSpacing: "0.04em",
          }}
        >
          From The Blog
        </h1>
        <p className="text-sm max-w-lg mx-auto mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
          Straight answers on tree care, storm damage, and property decisions —
          from someone who&apos;s been doing this in NE Ohio for 25 years.
        </p>
        <a
          href="/blog/feed.xml"
          className="inline-flex items-center gap-1 text-xs font-semibold"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          ⚡ RSS
        </a>
      </section>

      {/* ── Category filter pills ────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 pt-8 pb-2">
        <div className="flex flex-wrap gap-2 justify-center">
          <Link
            href="/blog"
            className="px-4 py-2 rounded-full text-sm font-bold min-h-[44px] flex items-center transition-all"
            style={
              !activeCategory
                ? { backgroundColor: "var(--green-deep)", color: "#fff" }
                : { backgroundColor: "#fff", color: "#555", border: "1.5px solid #ddd" }
            }
          >
            All Posts
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/blog/category/${cat}`}
              className="px-4 py-2 rounded-full text-sm font-bold min-h-[44px] flex items-center transition-all"
              style={
                activeCategory === cat
                  ? { backgroundColor: categoryColors[cat], color: "#fff" }
                  : { backgroundColor: "#fff", color: "#555", border: "1.5px solid #ddd" }
              }
            >
              {CATEGORY_LABELS[cat]}
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* ── Featured hero post ───────────────────────────────────── */}
        {featuredPost ? (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block rounded-2xl overflow-hidden mb-10 transition-shadow hover:shadow-2xl"
            style={{
              backgroundColor: categoryColors[featuredPost.category] ?? "var(--green-deep)",
              textDecoration: "none",
              boxShadow: "0 4px 32px rgba(0,0,0,0.13)",
            }}
          >
            <div className="flex flex-col md:flex-row">

              {/* Left — text content */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  {/* Category + featured badge */}
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "#fff" }}
                    >
                      {CATEGORY_LABELS[featuredPost.category] ?? featuredPost.category}
                    </span>
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
                    >
                      ★ Featured
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="mb-3 leading-tight"
                    style={{
                      fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                      fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                      color: "#ffffff",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {featuredPost.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "rgba(255,255,255,0.82)", maxWidth: "52ch" }}
                  >
                    {featuredPost.excerpt}
                  </p>
                </div>

                {/* Bottom meta + CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Author + meta */}
                  <div>
                    <p
                      className="text-xs font-bold mb-0.5"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {AUTHOR_LINE}
                    </p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {featuredPost.publishedAt} · {featuredPost.readingTime}
                    </p>
                  </div>

                  {/* Read CTA */}
                  <span
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-opacity group-hover:opacity-90 min-h-[44px]"
                    style={{
                      backgroundColor: "#ffffff",
                      color: categoryColors[featuredPost.category] ?? "var(--green-deep)",
                      marginLeft: "auto",
                    }}
                  >
                    Read Article →
                  </span>
                </div>
              </div>

              {/* Right — decorative accent panel */}
              <div
                className="hidden md:flex w-56 flex-shrink-0 items-center justify-center"
                style={{ backgroundColor: "rgba(0,0,0,0.12)" }}
                aria-hidden="true"
              >
                <svg
                  width="80"
                  height="90"
                  viewBox="0 0 100 115"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ opacity: 0.25 }}
                >
                  <polygon points="50,4 34,28 66,28" fill="#ffffff" />
                  <polygon points="50,14 22,48 78,48" fill="#ffffff" />
                  <polygon points="50,28 10,70 90,70" fill="#ffffff" />
                  <rect x="42" y="69" width="16" height="26" rx="4" fill="#ffffff" />
                </svg>
              </div>
            </div>
          </Link>
        ) : (
          <div
            className="rounded-2xl p-10 text-center mb-10"
            style={{ backgroundColor: "#ffffff", border: "2px dashed rgba(114,204,53,0.3)" }}
          >
            <p
              className="mb-2"
              style={{
                fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                fontSize: "1.6rem",
                color: "var(--green-deep)",
                letterSpacing: "0.04em",
              }}
            >
              First Post Coming Soon
            </p>
            <p className="text-sm" style={{ color: "#888" }}>
              Our team is writing the first guide now — check back shortly.
            </p>
          </div>
        )}

        {/* ── Section divider ─────────────────────────────────────── */}
        {pagedPosts.length > 0 && (
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(0,0,0,0.08)" }} />
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#999" }}
            >
              More Posts
            </p>
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(0,0,0,0.08)" }} />
          </div>
        )}

        {/* ── Post grid ───────────────────────────────────────────── */}
        {pagedPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {pagedPosts.map((post) => {
              const color  = categoryColors[post.category] ?? "var(--green-deep)";
              const bg     = categoryBg[post.category]    ?? "#f0f7ea";
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1.5px solid rgba(0,0,0,0.07)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    textDecoration: "none",
                  }}
                >
                  {/* Category accent bar */}
                  <div
                    className="w-full px-4 py-2.5 flex items-center justify-between"
                    style={{ backgroundColor: bg }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-wide"
                      style={{ color }}
                    >
                      {CATEGORY_LABELS[post.category] ?? post.category}
                    </span>
                    <span className="text-xs" style={{ color: "#aaa" }}>
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className="font-bold text-base leading-snug mb-2 flex-1"
                      style={{ color: "var(--green-deep)" }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "#666", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}
                    >
                      {post.excerpt}
                    </p>

                    {/* Author + date */}
                    <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid #f0f0f0" }}>
                      <div>
                        <p className="text-xs font-bold" style={{ color: "#444" }}>
                          {post.author ?? "Big Creek Tree Service"}
                        </p>
                        <p className="text-xs" style={{ color: "#aaa" }}>
                          {post.publishedAt}
                        </p>
                      </div>
                      <span
                        className="text-xs font-bold"
                        style={{ color }}
                      >
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* ── Empty grid state ────────────────────────────────────── */}
        {pagedPosts.length === 0 && featuredPost && (
          <div
            className="rounded-xl p-8 text-center"
            style={{ backgroundColor: "#ffffff", border: "1.5px dashed rgba(0,0,0,0.1)" }}
          >
            <p className="font-bold mb-1" style={{ color: "var(--green-deep)" }}>
              More posts on the way
            </p>
            <p className="text-sm" style={{ color: "#888" }}>
              Big Creek Tree Service publishes new guides every few weeks. Check back soon — or call with your question now.
            </p>
            <a
              href={businessInfo.phoneHref}
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg font-bold text-sm min-h-[44px]"
              style={{ backgroundColor: "var(--green-deep)", color: "#fff" }}
            >
              📞 {businessInfo.phone}
            </a>
          </div>
        )}

        {/* ── Pagination ──────────────────────────────────────────── */}
        {totalGridPages > 1 && (
          <nav className="flex justify-center gap-3 mt-8" aria-label="Pagination">
            {safePage > 1 && (
              <Link
                href={`/blog?page=${safePage - 1}${activeCategory ? `&category=${activeCategory}` : ""}`}
                className="px-4 py-2 rounded-lg font-bold text-sm min-h-[44px] flex items-center"
                style={{ backgroundColor: "#fff", color: "var(--green-deep)", border: "1.5px solid var(--green-deep)" }}
              >
                ← Prev
              </Link>
            )}
            {Array.from({ length: totalGridPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/blog?page=${p}${activeCategory ? `&category=${activeCategory}` : ""}`}
                className="w-11 h-11 flex items-center justify-center rounded-lg font-bold text-sm"
                style={
                  p === safePage
                    ? { backgroundColor: "var(--green-deep)", color: "#fff" }
                    : { backgroundColor: "#fff", color: "#555", border: "1.5px solid #ddd" }
                }
                aria-current={p === safePage ? "page" : undefined}
              >
                {p}
              </Link>
            ))}
            {safePage < totalGridPages && (
              <Link
                href={`/blog?page=${safePage + 1}${activeCategory ? `&category=${activeCategory}` : ""}`}
                className="px-4 py-2 rounded-lg font-bold text-sm min-h-[44px] flex items-center"
                style={{ backgroundColor: "#fff", color: "var(--green-deep)", border: "1.5px solid var(--green-deep)" }}
              >
                Next →
              </Link>
            )}
          </nav>
        )}
      </div>

      {/* ── Bottom CTA ──────────────────────────────────────────── */}
      <section
        className="py-12 px-4 text-center"
        style={{ backgroundColor: "var(--green-deep)" }}
      >
        <p
          className="mb-1"
          style={{
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            color: "#fff",
            letterSpacing: "0.04em",
          }}
        >
          Have a tree question right now?
        </p>
        <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
          Skip the blog — we answer the phone.
        </p>
        <a
          href={businessInfo.phoneHref}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold transition-opacity hover:opacity-85 min-h-[44px]"
          style={{
            backgroundColor: "var(--green-bright)",
            color: "#fff",
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "1.15rem",
            letterSpacing: "0.08em",
          }}
        >
          📞 CALL {businessInfo.phone} — FREE ADVICE
        </a>
      </section>

    </main>
  );
}
