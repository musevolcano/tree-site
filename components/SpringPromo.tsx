"use client";
import { businessInfo } from "@/data/site-data";

export default function SpringPromo() {
  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl" style={{ backgroundColor: "var(--green-deep)" }}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1.5 flex-shrink-0" style={{ backgroundColor: "var(--green-bright)", minHeight: "6px" }} />
          <div className="p-10 md:p-14 flex-1">
            <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.16em", color: "var(--green-bright)", textTransform: "uppercase", marginBottom: "10px" }}>
              Limited Time Offer
            </p>
            <h2 style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              color: "var(--white)", letterSpacing: "0.04em", lineHeight: 1.05, marginBottom: "16px",
            }}>
              Jump Into Spring<br />With Special Offers
            </h2>
            <p style={{ color: "rgba(244,239,230,0.8)", lineHeight: 1.7, marginBottom: "28px", maxWidth: "480px", fontSize: "0.98rem" }}>
              Book your tree removal or stump grinding this spring and save 10%. Whether you&apos;re clearing for a new project or tackling winter damage, spots fill fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={businessInfo.phoneHref}
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  backgroundColor: "var(--white)", color: "var(--green-deep)",
                  fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                  fontSize: "1.1rem", letterSpacing: "0.07em",
                  padding: "13px 24px", borderRadius: "6px", fontWeight: 700,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--cream)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--white)")}
              >
                CALL TO BOOK — {businessInfo.phone}
              </a>
              <a href="#contact"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  backgroundColor: "transparent", color: "var(--white)",
                  fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                  fontSize: "1.1rem", letterSpacing: "0.07em",
                  padding: "13px 24px", borderRadius: "6px",
                  border: "2px solid rgba(255,255,255,0.4)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
              >
                GET FREE QUOTE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
