import { getAllPosts } from "@/lib/blog";
import { businessInfo } from "@/data/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tree Care Blog | Big Creek Tree Service — NE Ohio Tips & Advice",
  description:
    "Free tree care advice from NE Ohio's trusted arborists. Storm prep, tree health, removal tips, and seasonal guides for Greater Cleveland homeowners.",
};

const categoryColors: Record<string, string> = {
  "Tree Health":   "var(--green-deep)",
  "Storm Damage":  "#2c5282",
  "Tips & Advice": "#744210",
};

export default function BlogIndex() {
  const posts = getAllPosts();

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
      </section>

      {/* Posts grid */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => {
            const color = categoryColors[post.category] ?? "var(--green-deep)";
            return (
              <a
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
                    {post.category}
                  </span>
                </div>
                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs mb-2 font-semibold" style={{ color: "#999999" }}>{post.date}</p>
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
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-16 px-4">
        <p className="text-sm mb-4" style={{ color: "#666666" }}>Have a tree question? Skip the blog — call us direct.</p>
        <a
          href={businessInfo.phoneHref}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-opacity hover:opacity-85"
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
