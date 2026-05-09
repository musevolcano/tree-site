import { getAllPosts } from "@/lib/blog";
import BlogSlider from "./BlogSlider";

export default function BlogPreview() {
  const posts = getAllPosts().map((p) => ({
    slug:        p.slug,
    title:       p.title,
    excerpt:     p.excerpt,
    category:    p.category,
    publishedAt: p.publishedAt,
    readingTime: p.readingTime,
  }));

  return (
    <section
      id="blog"
      className="w-full py-16 px-4"
      style={{ backgroundColor: "#f8faf5" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "var(--green-bright)" }}>
            Ohio Arborist Insights
          </p>
          <h2
            className="leading-none"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--green-deep)",
              letterSpacing: "0.04em",
            }}
          >
            From The Blog
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 rounded" style={{ backgroundColor: "var(--green-bright)" }} />
          <p className="mt-3 text-sm" style={{ color: "#666666" }}>
            Free advice from NE Ohio&apos;s tree pros — no sales pitch.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-sm" style={{ color: "#999999" }}>
            New posts coming soon — check back shortly.
          </p>
        ) : (
          <BlogSlider posts={posts} />
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{ color: "#666666" }}>
            Have a tree question? Skip the blog — call us direct.
          </p>
          <a
            href="tel:2165516445"
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
        </div>

      </div>
    </section>
  );
}
