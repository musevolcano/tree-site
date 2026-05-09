import { businessInfo } from "@/data/site-data";
import { getAllPosts } from "@/lib/blog";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <footer
      className="w-full py-10 px-4"
      style={{ backgroundColor: "var(--black)", color: "#ffffff", WebkitFontSmoothing: "antialiased" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">

          {/* Logo + tagline */}
          <div>
            <div className="flex flex-col leading-none mb-3">
              <span
                style={{
                  fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                  color: "var(--green-bright)",
                  letterSpacing: "0.07em",
                  fontSize: "1.7rem",
                  lineHeight: 1,
                }}
              >
                BIG CREEK
              </span>
              <span
                style={{
                  fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                  color: "var(--green-bright)",
                  letterSpacing: "0.07em",
                  fontSize: "1.28rem",
                  lineHeight: 1,
                }}
              >
                TREE SERVICE
              </span>
            </div>
            <p className="text-sm font-semibold max-w-xs" style={{ color: "#cccccc" }}>
              Northeast Ohio&apos;s trusted tree experts. Licensed, insured, and local.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-2">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: "var(--green-bright)" }}
            >
              Services
            </p>
            {[
              "Tree Removal & Trimming",
              "Tree Planting",
              "Tree Treatment",
              "Stump Grinding",
              "Storm Damage 24/7",
              "Demolition",
              "Land Clearing",
              "Haul Away",
              "Consulting",
            ].map((s) => (
              <a
                key={s}
                href="#services"
                className="text-sm font-semibold transition-colors hover:text-white"
                style={{ color: "#dddddd" }}
              >
                {s}
              </a>
            ))}
          </div>

          {/* Recent Posts */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--green-bright)" }}
            >
              Recent Posts
            </p>
            {recentPosts.length === 0 ? (
              <p className="text-sm font-semibold" style={{ color: "#888888" }}>
                Coming soon
              </p>
            ) : (
              recentPosts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold hover:text-white transition-colors leading-snug max-w-[200px]"
                  style={{ color: "#dddddd" }}
                >
                  {post.title}
                </a>
              ))
            )}
            <a
              href="/blog"
              className="text-xs font-bold mt-1 hover:text-white transition-colors"
              style={{ color: "var(--green-bright)" }}
            >
              View all posts →
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--green-bright)" }}
            >
              Contact
            </p>
            <a
              href={businessInfo.phoneHref}
              className="text-sm font-semibold hover:text-white transition-colors"
              style={{ color: "#dddddd" }}
            >
              📞 {businessInfo.phone}
            </a>
            <a
              href={`mailto:${businessInfo.email}`}
              className="text-sm font-semibold hover:text-white transition-colors"
              style={{ color: "#dddddd" }}
            >
              📧 {businessInfo.email}
            </a>
            <a
              href={businessInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:text-white transition-colors"
              style={{ color: "#dddddd" }}
            >
              📘 Facebook
            </a>
            <p className="text-sm font-semibold" style={{ color: "#dddddd" }}>
              📍 {businessInfo.serviceArea}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-2 text-xs font-semibold"
          style={{ borderColor: "rgba(255,255,255,0.15)", color: "#aaaaaa" }}
        >
          <p>© {currentYear} Big Creek Tree Service. All rights reserved.</p>
          <p>Licensed &amp; Insured | Northeast Ohio</p>
        </div>
      </div>
    </footer>
  );
}
