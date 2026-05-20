import { businessInfo } from "@/data/site-data";

const items = [
  { icon: "⭐", label: "5-Star Google Reviews", href: businessInfo.googleReviews },
  { icon: "✓", label: "ISA Certified Arborist" },
  { icon: "✓", label: "Licensed & Insured" },
  { icon: "✓", label: "15+ Years Experience" },
  { icon: "✓", label: "Free Estimates" },
  { icon: "🚨", label: "24/7 Emergency Response" },
  { icon: "📍", label: "NE Ohio · 40-Mile Radius" },
];

export default function TrustBar() {
  return (
    <div
      className="w-full px-4 py-2.5"
      style={{ backgroundColor: "#ffffff", borderBottom: "1.5px solid var(--green-bright)" }}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center flex-wrap gap-x-1 gap-y-1">
        {items.map((item, i) => {
          const content = (
            <span className="flex items-center gap-1.5">
              <span style={{ fontSize: "0.85rem" }}>{item.icon}</span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--green-deep)",
                }}
              >
                {item.label}
              </span>
            </span>
          );

          return (
            <span key={item.label} className="flex items-center gap-1">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full transition-colors hover:bg-green-50"
                  style={{
                    border: "1px solid rgba(114,204,53,0.4)",
                    textDecoration: "none",
                  }}
                >
                  {content}
                </a>
              ) : (
                <span
                  className="px-3 py-1 rounded-full"
                  style={{ border: "1px solid rgba(114,204,53,0.4)" }}
                >
                  {content}
                </span>
              )}
              {i < items.length - 1 && (
                <span style={{ color: "rgba(114,204,53,0.4)", fontSize: "0.8rem", margin: "0 2px" }}>·</span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
