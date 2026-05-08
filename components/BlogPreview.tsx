import { blogPosts } from "@/data/site-data";

const categoryColors: Record<string, string> = {
  "Tree Health":    "var(--green-deep)",
  "Storm Damage":   "#2c5282",
  "Tips & Advice":  "#744210",
};

const categoryIcons: Record<string, string> = {
  "Tree Health":    "🌿",
  "Storm Damage":   "⛈️",
  "Tips & Advice":  "💡",
};

export default function BlogPreview() {
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => {
            const color = categoryColors[post.category] || "var(--green-deep)";
            const icon  = categoryIcons[post.category]  || "🌳";
            return (
              <article
                key={post.slug}
                className="rounded-xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: "#ffffff",
                  border: "2px solid rgba(114,204,53,0.2)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                }}
              >
                {/* Banner */}
                <div
                  className="w-full h-36 flex flex-col items-center justify-center gap-2 relative"
                  style={{ backgroundColor: color }}
                >
                  <span className="text-4xl">{icon}</span>
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs mb-2 font-semibold" style={{ color: "#999999" }}>
                    {post.date}
                  </p>
                  <h3
                    className="font-bold text-base mb-2 leading-snug flex-1"
                    style={{ color: "var(--green-deep)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#555555" }}>
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-sm font-bold inline-flex items-center gap-1 hover:underline"
                    style={{ color: "var(--green-bright)" }}
                  >
                    Read More →
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{ color: "#666666" }}>
            Have a tree question? Skip the blog — call us direct.
          </p>
          <a
            href="tel:2165516445"
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
        </div>

      </div>
    </section>
  );
}
