"use client";
import { useState } from "react";
import { businessInfo, services } from "@/data/site-data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to email service (Formspree, Resend, etc.)
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="w-full py-16 px-4"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--green-bright)" }}
          >
            Get In Touch
          </p>
          <h2
            className="font-bebas leading-none"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--green-deep)",
              letterSpacing: "0.04em",
            }}
          >
            Free Estimate
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-3 rounded"
            style={{ backgroundColor: "var(--green-bright)" }}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Contact Info — left on desktop, top on mobile */}
          <div className="w-full md:w-2/5 flex flex-col gap-6">
            {/* Tap to call — prominent on mobile */}
            <a
              href={businessInfo.phoneHref}
              className="flex items-center justify-center gap-3 py-5 rounded-lg font-bold text-white text-xl transition-colors"
              style={{
                backgroundColor: "var(--green-bright)",
                fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                letterSpacing: "0.08em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--green-deep)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--green-bright)")}
            >
              📞 CALL {businessInfo.phone}
            </a>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📧</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--green-deep)" }}>Email</p>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-sm hover:underline"
                    style={{ color: "var(--black)" }}
                  >
                    {businessInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📍</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--green-deep)" }}>Service Area</p>
                  <p className="text-sm" style={{ color: "var(--black)" }}>{businessInfo.serviceArea}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📘</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--green-deep)" }}>Facebook</p>
                  <a
                    href={businessInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: "var(--green-deep)" }}
                  >
                    Big Creek Tree Service
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form — right on desktop */}
          <div className="w-full md:w-3/5">
            {submitted ? (
              <div
                className="rounded-lg p-10 text-center"
                style={{ backgroundColor: "var(--green-deep)", color: "var(--cream)" }}
              >
                <p className="text-4xl mb-3">✅</p>
                <h3
                  className="font-bebas text-2xl mb-2"
                  style={{ fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)", letterSpacing: "0.06em" }}
                >
                  Got It — We&apos;ll Be In Touch
                </h3>
                <p className="text-sm opacity-80">
                  Expect a call or email within 24 hours. For emergencies, call us directly at {businessInfo.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--green-deep)" }}>
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded border text-sm outline-none focus:ring-2"
                      style={{
                        borderColor: "rgba(45,80,22,0.25)",
                        backgroundColor: "white",
                      }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--green-deep)" }}>
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="(216) 000-0000"
                      className="w-full px-4 py-3 rounded border text-sm outline-none focus:ring-2"
                      style={{ borderColor: "rgba(45,80,22,0.25)", backgroundColor: "white" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--green-deep)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded border text-sm outline-none"
                    style={{ borderColor: "rgba(45,80,22,0.25)", backgroundColor: "white" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--green-deep)" }}>
                    Service Needed
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded border text-sm outline-none"
                    style={{ borderColor: "rgba(45,80,22,0.25)", backgroundColor: "white" }}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--green-deep)" }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, tree size, urgency..."
                    className="w-full px-4 py-3 rounded border text-sm outline-none resize-none"
                    style={{ borderColor: "rgba(45,80,22,0.25)", backgroundColor: "white" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded font-bold text-white text-lg transition-colors mt-2"
                  style={{
                    backgroundColor: "var(--green-deep)",
                    fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                    letterSpacing: "0.08em",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--green-mid)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--green-deep)")}
                >
                  SEND REQUEST — GET FREE QUOTE
                </button>
                <p className="text-xs text-center" style={{ color: "rgba(26,26,26,0.5)" }}>
                  We respond within 24 hours. For emergencies, call directly.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
