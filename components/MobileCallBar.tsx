import { businessInfo } from "@/data/site-data";

export default function MobileCallBar() {
  return (
    <a
      href={businessInfo.phoneHref}
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 py-4 md:hidden"
      style={{
        backgroundColor: "var(--green-deep)",
        color: "var(--white)",
        fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
        letterSpacing: "0.1em",
        fontSize: "1.15rem",
        boxShadow: "0 -2px 20px rgba(0,0,0,0.3)",
      }}
    >
      📞 CALL FOR FREE QUOTE — {businessInfo.phone}
    </a>
  );
}
