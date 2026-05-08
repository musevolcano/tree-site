import { cities } from "@/data/cities";
import { services, businessInfo } from "@/data/site-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};
  return {
    title: `Tree Service ${city.name} Ohio | Big Creek Tree Service`,
    description: `Licensed & insured tree removal, stump grinding, land clearing, and 24/7 storm damage response in ${city.name}, ${city.county}. Free estimates — call 216-551-6445.`,
    alternates: { canonical: `/service-areas/${city.slug}` },
    openGraph: {
      title: `Tree Service ${city.name} Ohio | Big Creek Tree Service`,
      description: `Greater Cleveland's #1 tree service now serving ${city.name}. Free estimates, same-day response.`,
      url: `https://www.bigcreektreeservice.com/service-areas/${city.slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Big Creek Tree Service",
    "description": `Tree removal, stump grinding, land clearing, and storm damage response in ${city.name}, Ohio.`,
    "url": `https://www.bigcreektreeservice.com/service-areas/${city.slug}`,
    "telephone": "+1-216-551-6445",
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "addressRegion": "OH",
      "addressCountry": "US",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Tree Services in ${city.name}, Ohio`,
      "itemListElement": services.map((s) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": s.name, "description": s.description },
      })),
    },
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f8faf5" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {/* Hero */}
      <section className="w-full py-16 px-4 text-center" style={{ backgroundColor: "var(--green-deep)" }}>
        <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "var(--green-bright)" }}>
          Serving {city.county}
        </p>
        <h1
          className="leading-none mb-4"
          style={{
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(2.2rem, 7vw, 4.5rem)",
            color: "#ffffff",
            letterSpacing: "0.04em",
          }}
        >
          Tree Service {city.name}, Ohio
        </h1>
        <p className="text-base max-w-xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
          {city.blurb}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={businessInfo.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-opacity hover:opacity-85"
            style={{
              backgroundColor: "var(--green-bright)",
              color: "#ffffff",
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "1.1rem",
              letterSpacing: "0.08em",
            }}
          >
            📞 CALL {businessInfo.phone}
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-opacity hover:opacity-85"
            style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "2px solid rgba(255,255,255,0.5)",
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "1.1rem",
              letterSpacing: "0.08em",
            }}
          >
            GET FREE QUOTE
          </a>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2
          className="text-center mb-2"
          style={{
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "var(--green-deep)",
            letterSpacing: "0.04em",
          }}
        >
          Tree Services in {city.name}
        </h2>
        <p className="text-center text-sm mb-10" style={{ color: "#666" }}>
          Licensed &amp; insured — free estimates on every job
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.slug}
              className="rounded-xl p-5 flex flex-col gap-2"
              style={{
                backgroundColor: "#ffffff",
                border: "2px solid rgba(114,204,53,0.2)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              }}
            >
              <span className="text-2xl">{s.icon}</span>
              <h3
                className="font-bold"
                style={{
                  fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                  fontSize: "1.1rem",
                  color: "var(--green-deep)",
                  letterSpacing: "0.06em",
                }}
              >
                {s.name}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#555" }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Local trust section */}
      <section className="max-w-3xl mx-auto px-4 pb-14">
        <div
          className="rounded-xl p-8"
          style={{ backgroundColor: "#ffffff", border: "2px solid rgba(114,204,53,0.2)" }}
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "1.8rem",
              color: "var(--green-deep)",
              letterSpacing: "0.04em",
            }}
          >
            Why {city.name} Homeowners Choose Big Creek
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              `Local crew — we know ${city.name}'s tree species, soil conditions, and weather patterns`,
              "5.0 stars on Google — every review earned on real jobs",
              "Licensed & insured — you're protected on every job",
              "24/7 storm response — we answer when it matters most",
              `Free estimates — no obligation, same-day response throughout ${city.county}`,
              `Also serving nearby: ${city.nearbyAreas.join(", ")}`,
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#333" }}>
                <span style={{ color: "var(--green-bright)", flexShrink: 0, marginTop: "2px" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        className="w-full py-12 px-4 text-center"
        style={{ backgroundColor: "var(--green-deep)" }}
      >
        <h2
          className="mb-2"
          style={{
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "2rem",
            color: "#ffffff",
            letterSpacing: "0.04em",
          }}
        >
          Free Estimate in {city.name} — Call Today
        </h2>
        <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
          Licensed &amp; insured. Same-day response. No obligation.
        </p>
        <a
          href={businessInfo.phoneHref}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-opacity hover:opacity-85"
          style={{
            backgroundColor: "var(--green-bright)",
            color: "#ffffff",
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "1.2rem",
            letterSpacing: "0.08em",
          }}
        >
          📞 CALL {businessInfo.phone}
        </a>
      </section>

      {/* Back */}
      <div className="text-center py-8">
        <a href="/service-areas" className="text-sm font-bold" style={{ color: "var(--green-mid)" }}>
          ← All Service Areas
        </a>
      </div>
    </main>
  );
}
