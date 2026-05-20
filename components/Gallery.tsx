import Image from "next/image";

const photos = [
  {
    src: "/images/tree-removal-big-oak-cleveland-ohio.jpeg",
    alt: "Large oak tree removal in Cleveland, Ohio — Big Creek Tree Service",
    caption: "Tree Removal",
  },
  {
    src: "/images/tree-removal-crew-northeast-ohio.jpeg",
    alt: "Heavy equipment tree service in Northeast Ohio — Big Creek Tree Service",
    caption: "Heavy Equipment",
  },
  {
    src: "/images/stump-grinding-residential-cleveland.jpeg",
    alt: "Fallen tree removal at residential property in Cleveland",
    caption: "Fallen Tree Removal",
  },
  {
    src: "/images/emergency-tree-service-storm-damage.jpeg",
    alt: "Professional chainsaw and tree removal equipment — Big Creek Tree Service",
    caption: "Tools of the Trade",
  },
  {
    src: "/images/land-clearing-green-site-ohio.jpeg",
    alt: "Land clearing service in Northeast Ohio",
    caption: "Land Clearing",
  },
  {
    src: "/images/tree-work-crew-cleveland.jpeg",
    alt: "Complete tree removal — sectioned trunk cleared from Cleveland property",
    caption: "Complete Tree Removal",
  },
  {
    src: "/images/stump-grinding-after-removal-ohio.jpeg",
    alt: "Stump removed and ground down — Northeast Ohio",
    caption: "Stump Removal",
  },
  {
    src: "/images/tree-removal-large-oak-ohio.jpeg",
    alt: "Large tree removal job completed in Ohio",
    caption: "Large Tree Removal",
  },
  {
    src: "/images/arborist-tree-work-cleveland.jpeg",
    alt: "Emergency fallen tree removal after tree crushed structure — Cleveland area",
    caption: "Emergency Fallen Tree",
  },
  {
    src: "/images/property-tree-service-ohio.jpeg",
    alt: "Property tree service and cleanup — Northeast Ohio",
    caption: "Property Cleanup",
  },
  {
    src: "/images/big-creek-tree-service-crew.jpeg",
    alt: "Big Creek Tree Service crew — licensed and insured in Ohio",
    caption: "Licensed & Insured Crew",
  },
  {
    src: "/images/tall-tree-removal-cleveland-ohio.png",
    alt: "Tall tree removal in Cleveland Ohio — Big Creek Tree Service",
    caption: "Tall Tree Removal",
  },
];

export default function Gallery() {
  return (
    <section
      className="w-full py-14"
      style={{ backgroundColor: "#f8f9f7" }}
      aria-label="Job photo gallery"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <p
            style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontSize: "0.7rem",
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--green-bright)",
              marginBottom: "0.5rem",
            }}
          >
            Real Jobs · Real Results
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              letterSpacing: "0.04em",
              color: "var(--green-deep)",
              lineHeight: 1.1,
            }}
          >
            Our Work Speaks for Itself
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontSize: "0.95rem",
              color: "#4a5568",
              marginTop: "0.5rem",
              maxWidth: "480px",
            }}
          >
            Every photo is from an actual job site in the Greater Cleveland area.
            No stock images. No staged shots.
          </p>
        </div>

        {/* Mobile: horizontal scroll carousel */}
        <div
          className="flex md:hidden gap-3 overflow-x-auto pb-2"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden rounded-lg"
              style={{ width: "82vw", aspectRatio: "4/3", scrollSnapAlign: "center" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="82vw"
                className="object-cover"
                loading={i < 2 ? "eager" : "lazy"}
              />
              <div
                className="absolute inset-0 flex items-end"
                style={{ background: "linear-gradient(to top, rgba(0,40,0,0.65) 0%, transparent 55%)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#fff",
                    padding: "0.75rem",
                  }}
                >
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: responsive grid */}
        <div
          className="hidden md:grid gap-3"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg group"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading={i < 4 ? "eager" : "lazy"}
              />
              <div
                className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "linear-gradient(to top, rgba(0,40,0,0.7) 0%, transparent 60%)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#fff",
                    padding: "0.75rem",
                  }}
                >
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="tel:+12165516445"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#fff",
              backgroundColor: "var(--green-bright)",
              padding: "0.75rem 2rem",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            Request a Free Estimate — (216) 551-6445
          </a>
        </div>
      </div>
    </section>
  );
}
