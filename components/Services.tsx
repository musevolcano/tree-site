"use client";
import { services } from "@/data/site-data";

const I = { stroke:"currentColor", fill:"none", strokeWidth:1.5, strokeLinecap:"round" as const, strokeLinejoin:"round" as const };

/* ── Custom service icons — white silhouette, 24×24 viewBox ─────────────── */

const IconTreeRemoval = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...I}>
    {/* Canopy */}
    <path d="M12 2L5 13h14L12 2z"/>
    <path d="M12 6L4 17h16L12 6z"/>
    {/* Trunk */}
    <line x1="10.5" y1="17" x2="10.5" y2="22"/>
    <line x1="13.5" y1="17" x2="13.5" y2="22"/>
    <line x1="8" y1="22" x2="16" y2="22"/>
    {/* Chainsaw cut */}
    <line x1="2" y1="11" x2="22" y2="11"/>
    <path d="M2 11l1.5-2 1.5 2 1.5-2 1.5 2 1.5-2 1.5 2"/>
  </svg>
);

const IconTreePlanting = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...I}>
    {/* Trunk */}
    <line x1="12" y1="22" x2="12" y2="10"/>
    {/* Left branch + leaf */}
    <path d="M12 14C12 14 8 13 7 9C7 9 10 7 12 11"/>
    {/* Right branch + leaf */}
    <path d="M12 11C12 11 15 7 18 8C18 8 18 12 12 14"/>
    {/* Top leaf */}
    <path d="M12 10C12 10 10 6 12 3C12 3 14 6 12 10"/>
    {/* Ground mound */}
    <path d="M6 22C6 22 9 19 12 19C15 19 18 22 18 22"/>
  </svg>
);

const IconTreeTreatment = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...I}>
    {/* Tree */}
    <path d="M12 2L6 11h12L12 2z"/>
    <path d="M12 6L5 15h14L12 6z"/>
    <line x1="11" y1="15" x2="11" y2="20"/>
    <line x1="13" y1="15" x2="13" y2="20"/>
    <line x1="8.5" y1="20" x2="15.5" y2="20"/>
    {/* Syringe */}
    <line x1="18" y1="4" x2="22" y2="8"/>
    <path d="M15 7l4-4 2 2-4 4z"/>
    <path d="M13 9l2-2 3 3-2 2z"/>
    {/* Injection drop */}
    <circle cx="21" cy="3" r="1"/>
  </svg>
);

const IconStumpGrinding = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...I}>
    {/* Stump body */}
    <rect x="6" y="14" width="12" height="7" rx="1"/>
    {/* Stump top face - wood rings */}
    <ellipse cx="12" cy="14" rx="6" ry="2.5"/>
    <ellipse cx="12" cy="14" rx="3.5" ry="1.5"/>
    <ellipse cx="12" cy="14" rx="1.5" ry="0.7"/>
    {/* Roots */}
    <path d="M8 21C7 23 5 23 4 22"/>
    <path d="M16 21C17 23 19 23 20 22"/>
    {/* Grinding blade */}
    <circle cx="12" cy="7" r="5"/>
    <line x1="12" y1="2" x2="12" y2="12"/>
    <line x1="7" y1="7" x2="17" y2="7"/>
    <line x1="8.5" y1="3.5" x2="15.5" y2="10.5"/>
    <line x1="15.5" y1="3.5" x2="8.5" y2="10.5"/>
  </svg>
);

const IconStormDamage = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...I}>
    {/* Storm cloud */}
    <path d="M6 14a4 4 0 0 1 .5-7.9A5 5 0 0 1 16 8h1a3 3 0 0 1 0 6H6z"/>
    {/* Bold lightning bolt */}
    <path d="M13 11l-3 5h4l-3 5" strokeWidth="2"/>
  </svg>
);

const IconDemolition = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...I}>
    {/* Crane arm */}
    <line x1="4" y1="2" x2="4" y2="14"/>
    <line x1="4" y1="2" x2="18" y2="2"/>
    <line x1="18" y1="2" x2="18" y2="6"/>
    {/* Chain */}
    <line x1="18" y1="6" x2="16" y2="9" strokeDasharray="1.5 1.5"/>
    {/* Wrecking ball */}
    <circle cx="14" cy="12" r="5"/>
    {/* Impact lines */}
    <line x1="8" y1="18" x2="6" y2="21"/>
    <line x1="11" y1="19" x2="10" y2="22"/>
    <line x1="14" y1="19" x2="14" y2="22"/>
  </svg>
);

const IconLandClearing = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...I}>
    {/* Bulldozer body */}
    <rect x="6" y="10" width="12" height="7" rx="1"/>
    {/* Cabin */}
    <rect x="13" y="7" width="5" height="5" rx="1"/>
    {/* Blade */}
    <path d="M2 9h5v9H2z"/>
    {/* Tracks */}
    <rect x="5" y="17" width="14" height="3" rx="1.5"/>
    {/* Track rollers */}
    <circle cx="8" cy="18.5" r="1"/>
    <circle cx="12" cy="18.5" r="1"/>
    <circle cx="16" cy="18.5" r="1"/>
    {/* Tree stump being cleared */}
    <line x1="21" y1="9" x2="21" y2="14"/>
    <line x1="19" y1="14" x2="23" y2="14"/>
  </svg>
);

const IconHaulAway = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...I}>
    {/* Cab */}
    <path d="M2 16V9l4-5h4v12H2z"/>
    {/* Windshield */}
    <path d="M6 4l-2 4h5V4H6z"/>
    {/* Truck bed */}
    <rect x="10" y="11" width="12" height="5" rx="1"/>
    {/* Logs in bed */}
    <circle cx="14" cy="13.5" r="2"/>
    <circle cx="18" cy="13.5" r="2"/>
    {/* Log rings */}
    <circle cx="14" cy="13.5" r="1"/>
    <circle cx="18" cy="13.5" r="1"/>
    {/* Ground line */}
    <line x1="0" y1="19" x2="24" y2="19"/>
    {/* Wheels */}
    <circle cx="5" cy="19" r="2.5"/>
    <circle cx="14" cy="19" r="2.5"/>
    <circle cx="20" cy="19" r="2.5"/>
  </svg>
);

const IconConsulting = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...I}>
    {/* Clipboard */}
    <rect x="4" y="4" width="16" height="18" rx="2"/>
    {/* Clip */}
    <path d="M9 4V2h6v2"/>
    <rect x="9" y="1" width="6" height="4" rx="1"/>
    {/* Tree on clipboard */}
    <path d="M12 8l-2.5 4h5L12 8z"/>
    <path d="M12 10l-3 5h6l-3-5z"/>
    <line x1="11.5" y1="15" x2="11.5" y2="17"/>
    <line x1="12.5" y1="15" x2="12.5" y2="17"/>
    {/* Checkmark line */}
    <line x1="7" y1="19" x2="17" y2="19"/>
    <polyline points="7,19 9,21 13,17"/>
  </svg>
);

const serviceIcons: Record<string, React.ReactNode> = {
  "tree-removal":   <IconTreeRemoval />,
  "tree-planting":  <IconTreePlanting />,
  "tree-treatment": <IconTreeTreatment />,
  "stump-grinding": <IconStumpGrinding />,
  "storm-damage":   <IconStormDamage />,
  "demolition":     <IconDemolition />,
  "land-clearing":  <IconLandClearing />,
  "haul-away":      <IconHaulAway />,
  "consulting":     <IconConsulting />,
};

export default function Services() {
  return (
    <section
      id="services"
      className="w-full relative"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Green overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(62, 128, 24, 0.85)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-20">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            What We Do
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
            Our Services
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-3 rounded"
            style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`group rounded-xl flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl${index === services.length - 1 && services.length % 2 !== 0 ? " col-span-2 sm:col-span-1" : ""}`}
              style={{
                backgroundColor: "#ffffff",
                border: "2px solid rgba(255,255,255,0.9)",
              }}
            >
              {/* Icon block */}
              <div className="flex items-center justify-center pt-5 pb-2 relative">
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    backgroundColor: "var(--green-bright)",
                    width: "56px",
                    height: "56px",
                    color: "#ffffff",
                  }}
                >
                  {serviceIcons[service.slug]}
                </div>
                {service.slug === "storm-damage" && (
                  <span
                    className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded"
                    style={{ backgroundColor: "var(--green-bright)", color: "#fff" }}
                  >
                    24/7
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="px-3 pb-5 flex flex-col flex-1 text-center md:px-6 md:pb-7">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                    fontSize: "1.45rem",
                    color: "var(--green-deep)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {service.name}
                </h3>
                <div
                  className="w-8 h-0.5 mx-auto mb-3 rounded"
                  style={{ backgroundColor: "var(--green-bright)" }}
                />
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "#4a4a4a" }}
                >
                  {service.description}
                </p>
                <a
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-block text-xs font-bold uppercase tracking-widest transition-colors"
                  style={{ color: "var(--green-mid)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green-deep)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--green-mid)")}
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
