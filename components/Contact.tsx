"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { businessInfo, services } from "@/data/site-data";

// ─── Formspree ───────────────────────────────────────────────────────────────
// 1. Sign up free at formspree.io
// 2. Create a form → copy the form ID (e.g. "xyzabc12")
// 3. Replace FORMSPREE_ID below with your real ID
const FORMSPREE_ID = "mvzlbvny";
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Call us directly at " + businessInfo.phone);
      }
    } catch {
      setError("Something went wrong. Call us directly at " + businessInfo.phone);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="w-full py-16 px-4"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "var(--green-bright)" }}>
            Get In Touch
          </p>
          <h2
            className="leading-none"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--green-deep)",
              letterSpacing: "0.04em",
            }}
          >
            Free Estimate
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 rounded" style={{ backgroundColor: "var(--green-bright)" }} />
          <p className="mt-3 text-sm" style={{ color: "#666666" }}>
            We respond within a few hours. Emergencies answered 24/7.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">

          {/* Left — contact info */}
          <div className="w-full md:w-2/5 flex flex-col gap-5">

            {/* Call CTA */}
            <a
              href={businessInfo.phoneHref}
              className="flex items-center justify-center gap-3 py-5 rounded-xl font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "var(--green-bright)",
                fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                fontSize: "1.35rem",
                letterSpacing: "0.08em",
                boxShadow: "0 4px 16px rgba(114,204,53,0.35)",
              }}
            >
              <Phone size={20} strokeWidth={2.5} />
              CALL {businessInfo.phone}
            </a>

            {/* Info cards */}
            <div
              className="rounded-xl p-6 flex flex-col gap-5"
              style={{ backgroundColor: "#f8faf5", border: "2px solid rgba(114,204,53,0.2)" }}
            >
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center rounded-full flex-shrink-0 mt-0.5"
                  style={{ width: "36px", height: "36px", backgroundColor: "rgba(114,204,53,0.15)" }}>
                  <Mail size={16} style={{ color: "var(--green-deep)" }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--green-deep)" }}>Email</p>
                  <a href={`mailto:${businessInfo.email}`} className="text-sm hover:underline" style={{ color: "#333333" }}>
                    {businessInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center rounded-full flex-shrink-0 mt-0.5"
                  style={{ width: "36px", height: "36px", backgroundColor: "rgba(114,204,53,0.15)" }}>
                  <MapPin size={16} style={{ color: "var(--green-deep)" }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--green-deep)" }}>Service Area</p>
                  <p className="text-sm" style={{ color: "#333333" }}>{businessInfo.serviceArea}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center rounded-full flex-shrink-0 mt-0.5"
                  style={{ width: "36px", height: "36px", backgroundColor: "rgba(114,204,53,0.15)" }}>
                  {/* Facebook icon — inline SVG (not in lucide-react) */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "var(--green-deep)" }}>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--green-deep)" }}>Facebook</p>
                  <a
                    href={businessInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: "var(--green-mid)" }}
                  >
                    Big Creek Tree Service
                  </a>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {["Licensed & Insured", "Free Estimates", "24/7 Storm Response", "NE Ohio Local"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "#f0fae6", color: "var(--green-deep)", border: "1px solid rgba(114,204,53,0.3)" }}
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="w-full md:w-3/5">
            {submitted ? (
              <div
                className="rounded-xl p-10 text-center flex flex-col items-center gap-4 h-full justify-center"
                style={{ backgroundColor: "var(--green-deep)", minHeight: "400px" }}
              >
                <CheckCircle size={48} style={{ color: "var(--green-bright)" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                    fontSize: "2rem",
                    color: "#ffffff",
                    letterSpacing: "0.06em",
                  }}
                >
                  Got It — We&apos;ll Be In Touch
                </h3>
                <p className="text-sm max-w-xs" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Expect a call or email within a few hours. For emergencies, call us directly at{" "}
                  <a href={businessInfo.phoneHref} className="underline font-bold" style={{ color: "var(--green-bright)" }}>
                    {businessInfo.phone}
                  </a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl p-6 md:p-8 flex flex-col gap-4"
                style={{ backgroundColor: "#f8faf5", border: "2px solid rgba(114,204,53,0.2)" }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--green-deep)" }}>
                      Name *
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
                      style={{ borderColor: "rgba(45,80,22,0.2)", backgroundColor: "#ffffff" }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--green-deep)" }}>
                      Phone *
                    </label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="(216) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
                      style={{ borderColor: "rgba(45,80,22,0.2)", backgroundColor: "#ffffff" }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--green-deep)" }}>
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border text-sm outline-none"
                    style={{ borderColor: "rgba(45,80,22,0.2)", backgroundColor: "#ffffff" }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--green-deep)" }}>
                    Service Needed
                  </label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border text-sm outline-none"
                    style={{ borderColor: "rgba(45,80,22,0.2)", backgroundColor: "#ffffff" }}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--green-deep)" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your project — tree size, urgency, location..."
                    className="w-full px-4 py-3 rounded-lg border text-sm outline-none resize-none"
                    style={{ borderColor: "rgba(45,80,22,0.2)", backgroundColor: "#ffffff" }}
                  />
                </div>

                {error && (
                  <p className="text-sm text-center font-semibold" style={{ color: "#cc2222" }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-white text-lg transition-all mt-1 disabled:opacity-60"
                  style={{
                    backgroundColor: "var(--green-deep)",
                    fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                    letterSpacing: "0.08em",
                    boxShadow: "0 4px 16px rgba(62,128,24,0.3)",
                  }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = "var(--green-mid)"; }}
                  onMouseLeave={(e) => { if (!loading) e.currentTarget.style.backgroundColor = "var(--green-deep)"; }}
                >
                  {loading ? "SENDING..." : "SEND REQUEST — GET FREE QUOTE"}
                </button>

                <p className="text-xs text-center" style={{ color: "rgba(26,26,26,0.45)" }}>
                  We respond within a few hours. Emergencies: call directly.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
