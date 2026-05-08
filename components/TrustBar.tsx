export default function TrustBar() {
  const items = [
    { icon: "⭐⭐⭐⭐⭐", label: "5-Star Google Reviews" },
    { icon: "📍", label: "Serving NE Ohio — 40-Mile Radius" },
  ];

  return (
    <section
      className="w-full py-5 px-4"
      style={{ backgroundColor: "#ffffff", borderBottom: "2px solid var(--green-bright)" }}
    >
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-3 px-3 py-4 rounded-xl min-h-[72px]"
            style={{ backgroundColor: "#ffffff", border: "2px solid var(--green-bright)" }}
          >
            <span className="text-xl">{item.icon}</span>
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
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
