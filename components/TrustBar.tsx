export default function TrustBar() {
  const items = [
    { icon: "⭐⭐⭐⭐⭐", label: "5-Star Google Reviews" },
    { icon: "📍", label: "Proudly Serving Greater Cleveland & NE Ohio" },
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
            className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl"
            style={{ backgroundColor: "#ffffff", border: "2px solid var(--green-bright)" }}
          >
            <span className="text-xl">{item.icon}</span>
            <span
              className="font-bold text-sm uppercase tracking-wide"
              style={{
                fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
                fontSize: "1rem",
                letterSpacing: "0.08em",
                color: "var(--green-deep)",
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
