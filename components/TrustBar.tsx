import { businessInfo } from "@/data/site-data";

export default function TrustBar() {
  return (
    <section
      className="w-full py-5 px-4"
      style={{ backgroundColor: "#ffffff", borderBottom: "2px solid var(--green-bright)" }}
    >
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Clickable Google Reviews */}
        <a
          href={businessInfo.googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-3 py-4 rounded-xl min-h-[72px] transition-colors hover:bg-green-50"
          style={{ backgroundColor: "#ffffff", border: "2px solid var(--green-bright)", textDecoration: "none" }}
        >
          <span className="text-xl">⭐⭐⭐⭐⭐</span>
          <span
            className="font-bold uppercase tracking-wide text-center"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(0.75rem, 3.2vw, 1rem)",
              letterSpacing: "0.06em",
              color: "var(--green-deep)",
              lineHeight: "1.2",
            }}
          >
            5-Star Google Reviews
          </span>
        </a>

        {/* Service area — static */}
        <div
          className="flex items-center justify-center gap-3 px-3 py-4 rounded-xl min-h-[72px]"
          style={{ backgroundColor: "#ffffff", border: "2px solid var(--green-bright)" }}
        >
          <span className="text-xl">📍</span>
          <span
            className="font-bold uppercase tracking-wide text-center"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(0.75rem, 3.2vw, 1rem)",
              letterSpacing: "0.06em",
              color: "var(--green-deep)",
              lineHeight: "1.2",
            }}
          >
            Serving NE Ohio — 40-Mile Radius
          </span>
        </div>

      </div>
    </section>
  );
}
