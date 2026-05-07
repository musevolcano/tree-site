"use client";
import { businessInfo } from "@/data/site-data";

export default function TopBar() {
  return (
    <div
      className="w-full py-2.5 px-6"
      style={{ backgroundColor: "var(--green-bright)", color: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">

        {/* Left: brand claim */}
        <span
          style={{
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "1.05rem",
            letterSpacing: "0.1em",
            color: "#ffffff",
          }}
        >
          NE Ohio's #1 Rated Tree Service
        </span>

        {/* Center: CTA */}
        <span
          className="text-center"
          style={{
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "1.05rem",
            letterSpacing: "0.1em",
            color: "#ffffff",
          }}
        >
          Call Today — Free Quotes on Spring Deals!
        </span>

        {/* Right: phone | hours | facebook */}
        <div className="flex items-center justify-end gap-4 text-sm font-semibold">

          <a
            href={businessInfo.phoneHref}
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity font-bold"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "1.05rem",
              letterSpacing: "0.08em",
              color: "#ffffff",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
            </svg>
            {businessInfo.phone}
          </a>

          <span style={{ color: "rgba(255,255,255,0.4)" }}>|</span>

          <span className="flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.95)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            Mon–Sun: 7am–7pm
          </span>

          <span style={{ color: "rgba(255,255,255,0.4)" }}>|</span>

          <a
            href={businessInfo.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            style={{ color: "#ffffff" }}
            aria-label="Big Creek Tree Service on Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>

        </div>
      </div>
    </div>
  );
}
