"use client";
import { useState } from "react";
import { testimonials } from "@/data/site-data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "var(--green-bright)", fontSize: "1.1rem" }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="reviews"
      className="w-full py-16 px-4 relative overflow-hidden"
      style={{ backgroundColor: "var(--green-deep)" }}
    >
      {/* Subtle foliage pattern background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--green-bright)" }}
          >
            What Clients Say
          </p>
          <h2
            className="font-bebas leading-none"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--cream)",
              letterSpacing: "0.04em",
            }}
          >
            5-Star Reviews
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-3 rounded"
            style={{ backgroundColor: "var(--green-bright)" }}
          />
        </div>

        {/* Desktop: 3 cards side by side */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg p-6 flex flex-col gap-4"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <StarRating count={t.rating} />
              <p
                className="text-base leading-relaxed italic flex-1"
                style={{ color: "rgba(245,240,232,0.9)" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-bold" style={{ color: "var(--cream)" }}>{t.name}</p>
                <p className="text-sm" style={{ color: "rgba(245,240,232,0.6)" }}>{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: swipe carousel */}
        <div className="md:hidden">
          <div
            className="rounded-lg p-6 flex flex-col gap-4"
            style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <StarRating count={testimonials[active].rating} />
            <p
              className="text-base leading-relaxed italic"
              style={{ color: "rgba(245,240,232,0.9)" }}
            >
              &ldquo;{testimonials[active].text}&rdquo;
            </p>
            <div>
              <p className="font-bold" style={{ color: "var(--cream)" }}>{testimonials[active].name}</p>
              <p className="text-sm" style={{ color: "rgba(245,240,232,0.6)" }}>{testimonials[active].location}</p>
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-2.5 h-2.5 rounded-full transition-colors"
                style={{ backgroundColor: i === active ? "var(--green-bright)" : "rgba(255,255,255,0.3)" }}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google badge */}
        <div className="text-center mt-10">
          <p className="text-sm" style={{ color: "rgba(245,240,232,0.6)" }}>
            ⭐ See all our reviews on{" "}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "var(--green-bright)" }}
            >
              Google
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
