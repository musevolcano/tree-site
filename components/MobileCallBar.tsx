import { businessInfo } from "@/data/site-data";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Gradient fade — content visually recedes into bar, no hard cut */}
      <div
        style={{
          height: "24px",
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.08))",
          pointerEvents: "none",
        }}
      />
      <a
        href={businessInfo.phoneHref}
        className="flex items-center justify-center gap-2 py-4"
        style={{
          backgroundColor: "var(--green-deep)",
          color: "var(--white)",
          fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
          letterSpacing: "0.1em",
          fontSize: "1.15rem",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.25)",
          paddingBottom: "calc(1rem + env(safe-area-inset-bottom, 0px))",
        }}
      >
        📞 CALL FOR FREE QUOTE — {businessInfo.phone}
      </a>
    </div>
  );
}
