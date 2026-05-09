import { servicesContent, getServiceContent } from "@/data/services-content";
import { getPostsByTag } from "@/lib/blog";
import { businessInfo } from "@/data/site-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://www.bigcreektreeservice.com";

export async function generateStaticParams() {
  return servicesContent.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceContent(slug);
  if (!service) return {};
  return {
    title: `${service.name} | Big Creek Tree Service — NE Ohio`,
    description: service.description,
    openGraph: {
      title: `${service.name} | Big Creek Tree Service`,
      description: service.description,
      url: `${SITE_URL}/services/${slug}`,
      type: "website",
      siteName: "Big Creek Tree Service",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceContent(slug);
  if (!service) notFound();

  const relatedServices = servicesContent.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  const relatedPosts = getPostsByTag(slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${slug}#service`,
        "name": service.name,
        "description": service.description,
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#business`,
          "name": "Big Creek Tree Service",
          "telephone": "+1-216-551-6445",
          "url": SITE_URL,
          "areaServed": "Northeast Ohio",
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 41.4993, "longitude": -81.6944 },
          "geoRadius": "64000",
        },
        "url": `${SITE_URL}/services/${slug}`,
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/#services` },
          { "@type": "ListItem", "position": 3, "name": service.name, "item": `${SITE_URL}/services/${slug}` },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f8faf5" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="w-full py-16 px-4 text-center"
        style={{ backgroundColor: "var(--green-deep)" }}
      >
        <nav
          className="flex items-center justify-center gap-2 text-xs mb-6"
          style={{ color: "rgba(255,255,255,0.45)" }}
          aria-label="Breadcrumb"
        >
          <Link href="/" style={{ color: "rgba(255,255,255,0.45)" }}>Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/#services" style={{ color: "rgba(255,255,255,0.45)" }}>Services</Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}>{service.name}</span>
        </nav>
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: "var(--green-bright)" }}
        >
          Big Creek Tree Service
        </p>
        <h1
          className="leading-none mb-4 max-w-3xl mx-auto"
          style={{
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(2.6rem, 7vw, 4.5rem)",
            color: "#ffffff",
            letterSpacing: "0.04em",
          }}
        >
          {service.name}
        </h1>
        <p className="text-base max-w-lg mx-auto mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
          {service.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={businessInfo.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold min-h-[48px] transition-opacity hover:opacity-85"
            style={{
              backgroundColor: "var(--green-bright)",
              color: "#fff",
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "1.1rem",
              letterSpacing: "0.08em",
            }}
          >
            📞 CALL {businessInfo.phone}
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold min-h-[48px] transition-opacity hover:opacity-85"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.35)",
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "1.1rem",
              letterSpacing: "0.08em",
            }}
          >
            GET FREE QUOTE
          </a>
        </div>
      </section>

      {/* ── INTRO BODY ───────────────────────────────────────────────── */}
      <section className="w-full py-14" style={{ backgroundColor: "#f8faf5" }}>
        <div className="max-w-3xl mx-auto px-4">
          <div
            style={{
              borderLeft: "4px solid var(--green-bright)",
              paddingLeft: "1.5rem",
            }}
          >
            {service.body.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="mb-5 last:mb-0"
                style={{ color: "#2d2d2d", fontSize: "1.05rem", lineHeight: "1.8" }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="w-full py-16" style={{ backgroundColor: "#edf4e8" }}>
        <div className="max-w-3xl mx-auto px-4">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--green-mid)" }}
          >
            The Process
          </p>
          <h2
            className="mb-10"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              color: "var(--green-deep)",
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            How It Works
          </h2>

          <div className="flex flex-col" style={{ gap: 0 }}>
            {service.process.map((step, i) => (
              <div key={i} className="flex gap-0" style={{ position: "relative" }}>
                {/* Timeline spine */}
                <div
                  className="flex flex-col items-center"
                  style={{ width: "56px", flexShrink: 0 }}
                >
                  {/* Circle */}
                  <div
                    className="flex items-center justify-center font-bold z-10"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "var(--green-deep)",
                      color: "#fff",
                      fontSize: "1rem",
                      fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                      letterSpacing: "0.04em",
                      flexShrink: 0,
                      boxShadow: "0 0 0 4px #edf4e8, 0 0 0 5px rgba(22,101,52,0.25)",
                    }}
                  >
                    {i + 1}
                  </div>
                  {/* Connector line — hidden on last item */}
                  {i < service.process.length - 1 && (
                    <div
                      style={{
                        width: "2px",
                        flexGrow: 1,
                        minHeight: "32px",
                        background: "repeating-linear-gradient(to bottom, var(--green-bright) 0px, var(--green-bright) 5px, transparent 5px, transparent 10px)",
                        margin: "4px 0",
                      }}
                    />
                  )}
                </div>

                {/* Step content */}
                <div
                  className="rounded-xl mb-4"
                  style={{
                    flex: 1,
                    backgroundColor: "#fff",
                    border: "1px solid rgba(114,204,53,0.2)",
                    padding: "1rem 1.25rem",
                    marginLeft: "12px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <p
                    className="font-bold mb-1"
                    style={{ color: "var(--green-deep)", fontSize: "0.95rem" }}
                  >
                    {step.step}
                  </p>
                  <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: "1.6" }}>
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMON QUESTIONS ─────────────────────────────────────────── */}
      <section className="w-full py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto px-4">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--green-mid)" }}
          >
            Quick Answers
          </p>
          <h2
            className="mb-10"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              color: "var(--green-deep)",
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            Common Questions
          </h2>

          <div className="flex flex-col" style={{ gap: "0" }}>
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderLeft: "3px solid var(--green-bright)",
                  paddingLeft: "1.25rem",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  marginBottom: i < service.faqs.length - 1 ? "0" : "0",
                  borderBottom: i < service.faqs.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                }}
              >
                <p
                  className="font-bold mb-2"
                  style={{ color: "var(--green-deep)", fontSize: "0.95rem" }}
                >
                  {faq.q}
                </p>
                <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: "1.7" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FROM THE BLOG ─────────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section
          className="w-full py-16"
          style={{ backgroundColor: "#f5f2ec" }}
        >
          <div className="max-w-3xl mx-auto px-4">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--green-mid)" }}
            >
              Related Reading
            </p>
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                color: "var(--green-deep)",
                letterSpacing: "0.04em",
                lineHeight: 1,
              }}
            >
              From the Blog
            </h2>

            <div className="flex flex-col gap-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex items-center justify-between rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "1.1rem 1.4rem",
                    textDecoration: "none",
                    border: "1.5px solid rgba(22,101,52,0.10)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0, paddingRight: "1rem" }}>
                    <p
                      className="font-bold leading-snug mb-1"
                      style={{ color: "var(--green-deep)", fontSize: "0.95rem" }}
                    >
                      {post.title}
                    </p>
                    <p style={{ color: "#999", fontSize: "0.75rem" }}>{post.readingTime}</p>
                  </div>
                  <span
                    className="flex-shrink-0 font-bold text-sm"
                    style={{
                      color: "#fff",
                      backgroundColor: "var(--green-bright)",
                      padding: "0.35rem 0.85rem",
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED SERVICES ─────────────────────────────────────────── */}
      {relatedServices.length > 0 && (
        <section className="w-full py-16" style={{ backgroundColor: "#edf4e8" }}>
          <div className="max-w-3xl mx-auto px-4">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--green-mid)" }}
            >
              See Also
            </p>
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                color: "var(--green-deep)",
                letterSpacing: "0.04em",
                lineHeight: 1,
              }}
            >
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between rounded-xl font-bold min-h-[52px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    backgroundColor: "#fff",
                    color: "var(--green-deep)",
                    border: "1.5px solid rgba(22,101,52,0.12)",
                    padding: "0.9rem 1.1rem",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                  }}
                >
                  <span>{s.name}</span>
                  <span
                    style={{
                      color: "var(--green-bright)",
                      fontSize: "1rem",
                      transition: "transform 0.2s",
                    }}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
      <section
        className="w-full py-16 px-4 text-center"
        style={{
          background:
            "linear-gradient(to bottom, #1e7a42 0%, #166534 30%, #0d3d1e 70%, #111111 100%)",
        }}
      >
        <p
          className="mb-2"
          style={{
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            color: "#fff",
            letterSpacing: "0.04em",
            lineHeight: 1,
          }}
        >
          Ready for a Free Estimate?
        </p>
        <p className="text-sm mb-7 max-w-sm mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
          Licensed &amp; insured. Serving Greater Cleveland and all of NE Ohio.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={businessInfo.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-opacity hover:opacity-85 min-h-[52px]"
            style={{
              backgroundColor: "var(--green-bright)",
              color: "#fff",
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "1.15rem",
              letterSpacing: "0.08em",
            }}
          >
            📞 CALL {businessInfo.phone} — FREE ESTIMATE
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-opacity hover:opacity-85 min-h-[52px]"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.3)",
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "1.15rem",
              letterSpacing: "0.08em",
            }}
          >
            GET FREE QUOTE ONLINE
          </a>
        </div>
      </section>
    </main>
  );
}
