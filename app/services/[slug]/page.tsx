import { servicesContent, getServiceContent } from "@/data/services-content";
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

      {/* Hero */}
      <section
        className="w-full py-14 px-4 text-center"
        style={{ backgroundColor: "var(--green-deep)" }}
      >
        <nav className="flex items-center justify-center gap-2 text-xs mb-6" style={{ color: "rgba(255,255,255,0.55)" }} aria-label="Breadcrumb">
          <Link href="/" style={{ color: "rgba(255,255,255,0.55)" }}>Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/#services" style={{ color: "rgba(255,255,255,0.55)" }}>Services</Link>
          <span aria-hidden="true">›</span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}>{service.name}</span>
        </nav>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--green-bright)" }}>
          Big Creek Tree Service
        </p>
        <h1
          className="leading-tight mb-4 max-w-3xl mx-auto"
          style={{
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            color: "#ffffff",
            letterSpacing: "0.04em",
          }}
        >
          {service.name}
        </h1>
        <p className="text-sm max-w-xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
          {service.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={businessInfo.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold min-h-[44px] transition-opacity hover:opacity-85"
            style={{ backgroundColor: "var(--green-bright)", color: "#fff", fontFamily: "var(--font-bebas-neue)", fontSize: "1.05rem", letterSpacing: "0.08em" }}
          >
            📞 CALL {businessInfo.phone}
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold min-h-[44px] transition-opacity hover:opacity-85"
            style={{ backgroundColor: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", fontFamily: "var(--font-bebas-neue)", fontSize: "1.05rem", letterSpacing: "0.08em" }}
          >
            GET FREE QUOTE
          </a>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose-content" style={{ color: "#333", fontSize: "1rem", lineHeight: "1.75" }}>
          {service.body.split("\n\n").map((para, i) => (
            <p key={i} className="mb-5">{para}</p>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <h2
          className="mb-6"
          style={{ fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)", fontSize: "1.8rem", color: "var(--green-deep)", letterSpacing: "0.04em" }}
        >
          How It Works
        </h2>
        <div className="flex flex-col gap-4">
          {service.process.map((step, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 rounded-xl"
              style={{ backgroundColor: "#ffffff", border: "1.5px solid rgba(114,204,53,0.2)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
            >
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: "var(--green-deep)", color: "#fff" }}
              >
                {i + 1}
              </div>
              <div>
                <p className="font-bold text-sm mb-0.5" style={{ color: "var(--green-deep)" }}>{step.step}</p>
                <p className="text-sm" style={{ color: "#666" }}>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <h2
          className="mb-6"
          style={{ fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)", fontSize: "1.8rem", color: "var(--green-deep)", letterSpacing: "0.04em" }}
        >
          Common Questions
        </h2>
        <div className="flex flex-col gap-4">
          {service.faqs.map((faq, i) => (
            <div
              key={i}
              className="p-5 rounded-xl"
              style={{ backgroundColor: "#ffffff", border: "1.5px solid rgba(0,0,0,0.07)" }}
            >
              <p className="font-bold text-sm mb-2" style={{ color: "var(--green-deep)" }}>{faq.q}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#555" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2
            className="mb-5"
            style={{ fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)", fontSize: "1.8rem", color: "var(--green-deep)", letterSpacing: "0.04em" }}
          >
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="p-4 rounded-xl font-bold text-sm min-h-[44px] flex items-center justify-between transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: "#ffffff", color: "var(--green-deep)", border: "1.5px solid rgba(114,204,53,0.25)", textDecoration: "none" }}
              >
                {s.name}
                <span style={{ color: "var(--green-bright)" }}>→</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-12 px-4 text-center" style={{ backgroundColor: "var(--green-deep)" }}>
        <p
          className="mb-1"
          style={{ fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#fff", letterSpacing: "0.04em" }}
        >
          Ready for a Free Estimate?
        </p>
        <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
          Licensed &amp; insured. Serving Greater Cleveland and all of NE Ohio.
        </p>
        <a
          href={businessInfo.phoneHref}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold transition-opacity hover:opacity-85 min-h-[44px]"
          style={{ backgroundColor: "var(--green-bright)", color: "#fff", fontFamily: "var(--font-bebas-neue)", fontSize: "1.15rem", letterSpacing: "0.08em" }}
        >
          📞 CALL {businessInfo.phone} — FREE ESTIMATE
        </a>
      </section>
    </main>
  );
}
