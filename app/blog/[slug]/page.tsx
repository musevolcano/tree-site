import { getAllPosts, getPostBySlug, getRelatedPosts, renderMarkdown, CATEGORY_LABELS } from "@/lib/blog";
import { businessInfo } from "@/data/site-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://www.bigcreektreeservice.com";

const categoryColors: Record<string, string> = {
  "tree-care":        "var(--green-deep)",
  "emergency-storm":  "#2c5282",
  "property-business":"#744210",
};

// Only expose published (non-draft) posts as static routes
export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
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
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: "Big Creek Tree Service",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // Draft posts return null from getPostBySlug — serve 404
  if (!post) notFound();

  const html = await renderMarkdown(post.content);
  const related = getRelatedPosts(slug, 3);
  const color = categoryColors[post.category] ?? "var(--green-deep)";
  const categoryLabel = CATEGORY_LABELS[post.category] ?? post.category;

  // JSON-LD: Article + BreadcrumbList
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/blog/${slug}#article`,
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
          "@type": "Person",
          "name": post.author,
        },
        "publisher": {
          "@type": "Organization",
          "@id": `${SITE_URL}/#business`,
          "name": "Big Creek Tree Service",
          "url": SITE_URL,
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog/${slug}`,
        },
        "articleSection": categoryLabel,
        "keywords": post.tags.join(", "),
        "url": `${SITE_URL}/blog/${slug}`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/blog/${slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE_URL,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `${SITE_URL}/blog/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f8faf5" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero banner */}
      <section
        className="w-full py-14 px-4 text-center"
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
          <span style={{ color: "rgba(255,255,255,0.9)" }}>{categoryLabel}</span>
        </nav>

        <span
          className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
          style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}
        >
          {categoryLabel}
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
          {post.publishedAt} · {post.readingTime} · {post.author}
        </p>
      </section>

      {/* Article body — max 70ch, mobile-first */}
      <article
        className="mx-auto px-4 py-12"
        style={{ maxWidth: "70ch" }}
      >
        <div
          className="prose-content"
          style={{
            color: "#333333",
            fontSize: "1rem",
            lineHeight: "1.75",
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* CTA block */}
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
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold transition-opacity hover:opacity-85 min-h-[44px]"
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
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold transition-opacity hover:opacity-85 min-h-[44px]"
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

      {/* Related posts */}
      {related.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2
            className="font-bold text-lg mb-6"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "1.6rem",
              letterSpacing: "0.04em",
              color: "var(--green-deep)",
            }}
          >
            Related Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {related.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="rounded-xl overflow-hidden flex flex-col min-h-[44px] transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: "#ffffff",
                  border: "2px solid rgba(114,204,53,0.2)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  textDecoration: "none",
                }}
              >
                <div
                  className="w-full h-2 rounded-t-xl"
                  style={{ backgroundColor: categoryColors[rp.category] ?? "var(--green-deep)" }}
                />
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-xs font-semibold mb-1" style={{ color: "#999999" }}>
                    {rp.publishedAt} · {rp.readingTime}
                  </p>
                  <h3
                    className="font-bold text-sm leading-snug flex-1 mb-2"
                    style={{ color: "var(--green-deep)" }}
                  >
                    {rp.title}
                  </h3>
                  <span className="text-xs font-bold" style={{ color: "var(--green-bright)" }}>
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back to blog */}
      <div className="text-center pb-12">
        <Link
          href="/blog"
          className="text-sm font-bold inline-flex items-center min-h-[44px]"
          style={{ color: "var(--green-mid)" }}
        >
          ← Back to All Posts
        </Link>
      </div>
    </main>
  );
}
