"use client";
import Image from "next/image";
import { businessInfo } from "@/data/site-data";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-16 px-4"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image side */}
        <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-xl">
          <div className="relative w-full" style={{ paddingBottom: "75%" }}>
            <Image
              src="/images/about-arborist.jpg"
              alt="Big Creek Tree Service arborist in Northeast Ohio neighborhood"
              fill
              className="object-cover"
              style={{ objectPosition: "center center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Text side */}
        <div className="w-full md:w-1/2">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--green-bright)" }}
          >
            Who We Are
          </p>
          <h2
            className="font-bebas leading-none mb-4"
            style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--green-deep)",
              letterSpacing: "0.04em",
            }}
          >
            Northeast Ohio&apos;s
            <br />
            Trusted Tree Experts
          </h2>
          <div
            className="w-12 h-1 rounded mb-6"
            style={{ backgroundColor: "var(--green-bright)" }}
          />
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "var(--black)" }}
          >
            Big Creek Tree Service is a local, family-owned business rooted in Northeast Ohio. We know these neighborhoods — the oaks along the creek bottoms, the ash trees fighting disease, the old maples that define a yard. We treat your property like our own.
          </p>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--black)" }}
          >
            From single-tree removals to full land clearing projects, our licensed and insured crew brings the right equipment, the right experience, and a straightforward price. No upsells. No surprises. Just honest work done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={businessInfo.phoneHref}
              className="px-6 py-3 rounded font-bold text-white text-center transition-colors"
              style={{ backgroundColor: "var(--green-deep)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--green-mid)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--green-deep)")}
            >
              📞 {businessInfo.phone}
            </a>
            <a
              href={businessInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded font-bold text-center transition-colors border-2"
              style={{ borderColor: "var(--green-deep)", color: "var(--green-deep)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--green-deep)";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--green-deep)";
              }}
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
