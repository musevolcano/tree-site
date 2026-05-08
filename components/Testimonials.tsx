"use client";
import { useState } from "react";
import { testimonials, businessInfo } from "@/data/site-data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#F9AB00", fontSize: "1.15rem", lineHeight: 1 }}>★</span>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="rounded-xl p-6 flex flex-col gap-4 h-full"
      style={{
        backgroundColor: "#ffffff",
        border: "2px solid rgba(114,204,53,0.2)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
      }}
    >
      {/* Stars + verified */}
      <div className="flex items-center justify-between gap-2">
        <StarRating count={t.rating} />
        <span
          className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full whitespace-nowrap"
          style={{ backgroundColor: "#f1f8e9", color: "#3E8018" }}
        >
          <GoogleIcon />
          Verified
        </span>
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "#333333", fontStyle: "italic" }}>
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid rgba(114,204,53,0.2)" }}>
        <div
          className="flex items-center justify-center rounded-full flex-shrink-0 font-bold"
          style={{
            width: "38px",
            height: "38px",
            backgroundColor: "var(--green-bright)",
            color: "#ffffff",
            fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
          }}
        >
          {t.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-sm" style={{ color: "var(--green-deep)" }}>{t.name}</p>
          <p className="text-xs" style={{ color: "#888888" }}>{t.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const topRow = testimonials.slice(0, 3);
  const bottomRow = testimonials.slice(3);

  return (
    <section
      id="reviews"
      className="w-full py-16 px-4"
      style={{ backgroundColor: "var(--green-deep)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "var(--green-bright)" }}>
            What Clients Say
          </p>
          <h2
            className="leading-none"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "#ffffff",
              letterSpacing: "0.04em",
            }}
          >
            5.0 ★ on Google
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 rounded" style={{ backgroundColor: "var(--green-bright)" }} />
          <p className="mt-3 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
            5 reviews · All five stars
          </p>
        </div>

        {/* Desktop: 3 top + 2 bottom centered */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-6 mb-6">
            {topRow.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {bottomRow.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>

        {/* Mobile: full carousel */}
        <div className="md:hidden">
          <TestimonialCard t={testimonials[active]} />
          <div className="flex justify-center items-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === active ? "24px" : "10px",
                  height: "10px",
                  backgroundColor: i === active ? "var(--green-bright)" : "rgba(255,255,255,0.35)",
                }}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google CTA */}
        <div className="text-center mt-10">
          <a
            href={businessInfo.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-opacity hover:opacity-85"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#ffffff",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <GoogleIcon />
            See all our reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
}
