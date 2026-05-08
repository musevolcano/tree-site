"use client";
import {
  TreePine,
  Syringe,
  CircleDot,
  CloudLightning,
  Hammer,
  Tractor,
  Truck,
  ClipboardList,
  Scissors,
  Axe,
  Sprout,
} from "lucide-react";
import { services } from "@/data/site-data";

const serviceIcons: Record<string, React.ReactNode> = {
  "tree-removal":   <TreePine size={34} strokeWidth={1.5} />,
  "tree-planting":  <Sprout size={34} strokeWidth={1.5} />,
  "tree-treatment": <Syringe size={34} strokeWidth={1.5} />,
  "stump-grinding": <CircleDot size={34} strokeWidth={1.5} />,
  "storm-damage":   <CloudLightning size={34} strokeWidth={1.5} />,
  "demolition":     <Hammer size={34} strokeWidth={1.5} />,
  "land-clearing":  <Tractor size={34} strokeWidth={1.5} />,
  "haul-away":      <Truck size={34} strokeWidth={1.5} />,
  "consulting":     <ClipboardList size={34} strokeWidth={1.5} />,
  "maintenance":    <Scissors size={34} strokeWidth={1.5} />,
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
                  href="#contact"
                  className="mt-5 inline-block text-xs font-bold uppercase tracking-widest transition-colors"
                  style={{ color: "var(--green-mid)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green-deep)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--green-mid)")}
                >
                  Get a Free Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
