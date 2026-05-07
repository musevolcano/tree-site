"use client";
import { blogPosts } from "@/data/site-data";

export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="w-full py-16 px-4"
      style={{ backgroundColor: "var(--white)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--green-bright)" }}
          >
            Ohio Arborist Insights
          </p>
          <h2
            className="font-bebas leading-none"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--green-deep)",
              letterSpacing: "0.04em",
            }}
          >
            From The Blog
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-3 rounded"
            style={{ backgroundColor: "var(--green-bright)" }}
          />
        </div>

        {/* 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-lg overflow-hidden shadow-md border transition-shadow hover:shadow-xl"
              style={{ borderColor: "rgba(45,80,22,0.1)" }}
            >
              {/* Placeholder image area */}
              <div
                className="w-full h-44 flex items-center justify-center img-placeholder"
              >
                <span className="text-4xl opacity-40">🌳</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{ backgroundColor: "rgba(45,80,22,0.1)", color: "var(--green-deep)" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(26,26,26,0.5)" }}>
                    {post.date}
                  </span>
                </div>
                <h3
                  className="font-bold text-base mb-2 leading-snug"
                  style={{ color: "var(--green-deep)" }}
                >
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(26,26,26,0.7)" }}>
                  {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-sm font-bold transition-colors"
                  style={{ color: "var(--green-bright)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green-deep)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--green-bright)")}
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
