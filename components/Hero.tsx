"use client";
import { businessInfo } from "@/data/site-data";

export default function Hero() {

  return (
    <section className="relative w-full flex flex-col" style={{ minHeight: "100svh" }}>
      {/* Background — positioned to show the silhouette figure */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')", backgroundPosition: "center 30%" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />


      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-start justify-end flex-1 px-6 md:px-16 lg:px-24 pb-8 md:pb-24">
        <div className="max-w-2xl">
          <p className="hidden md:inline-block" style={{
            fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: "var(--cream)",
            textTransform: "uppercase",
            backgroundColor: "rgba(28,58,10,0.55)",
            padding: "3px 10px",
            borderRadius: "3px",
            marginBottom: "14px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}>
            Northeast Ohio&apos;s Trusted Tree Experts
          </p>
          <h1 style={{
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(3.8rem, 11vw, 7.5rem)",
            color: "var(--white)",
            letterSpacing: "0.02em",
            lineHeight: 0.92,
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            marginBottom: "20px",
          }}>
            BIG CREEK<br />TREE SERVICE
          </h1>
          <p style={{ color: "#ffffff", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "32px", maxWidth: "500px", textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>
            Greater Cleveland&apos;s #1 tree &amp; land service. Licensed &amp; insured — tree removal, stump grinding, land clearing, and 24/7 storm response.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={businessInfo.phoneHref} style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
              backgroundColor: "var(--white)", color: "var(--green-deep)",
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "1.15rem", letterSpacing: "0.08em",
              padding: "14px 28px", borderRadius: "6px",
              fontWeight: 700, transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--cream)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--white)"; }}
            >
              📞 CALL NOW
            </a>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              backgroundColor: "transparent", color: "var(--white)",
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "1.15rem", letterSpacing: "0.08em",
              padding: "14px 28px", borderRadius: "6px",
              border: "2px solid rgba(255,255,255,0.6)", transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,1)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; e.currentTarget.style.backgroundColor = "transparent"; }}
            >
              GET FREE QUOTE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
