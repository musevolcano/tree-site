import { cities } from "@/data/cities";
import { businessInfo } from "@/data/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tree Service Areas | Big Creek Tree Service — Greater Cleveland NE Ohio",
  description:
    "Big Creek Tree Service serves a 40-mile radius from Cleveland including Strongsville, Parma, Berea, Medina, Westlake, Lakewood, Avon, Brunswick and more. Free estimates.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreas() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f8faf5" }}>

      {/* Header */}
      <section className="w-full py-16 px-4 text-center" style={{ backgroundColor: "var(--green-deep)" }}>
        <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "var(--green-bright)" }}>
          40-Mile Radius from Cleveland
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
          Service Areas
        </h1>
        <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
          Serving Greater Cleveland and all of NE Ohio. Free estimates, same-day response.
        </p>
      </section>

      {/* Cities grid */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {cities.map((city) => (
            <a
              key={city.slug}
              href={`/service-areas/${city.slug}`}
              className="rounded-xl p-6 flex flex-col gap-2 transition-transform hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: "#ffffff",
                border: "2px solid rgba(114,204,53,0.2)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                textDecoration: "none",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span style={{ color: "var(--green-bright)", fontSize: "1.1rem" }}>📍</span>
                <h2
                  style={{
                    fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                    fontSize: "1.3rem",
                    color: "var(--green-deep)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {city.name}
                </h2>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#999" }}>
                {city.county}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                {city.blurb}
              </p>
              <span
                className="text-sm font-bold mt-2"
                style={{ color: "var(--green-bright)" }}
              >
                View Services →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-16 px-4">
        <p className="text-sm mb-4" style={{ color: "#666" }}>
          Don&apos;t see your city? Call us — we likely cover it.
        </p>
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
          📞 CALL {businessInfo.phone} — FREE ESTIMATE
        </a>
      </section>
    </main>
  );
}
