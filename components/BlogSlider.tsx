"use client";
import { useState, useEffect, useRef } from "react";

type PostPreview = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
};

const categoryColors: Record<string, string> = {
  "tree-care":         "var(--green-deep)",
  "emergency-storm":   "#2c5282",
  "property-business": "#744210",
};
const categoryIcons: Record<string, string> = {
  "tree-care":         "🌿",
  "emergency-storm":   "⛈️",
  "property-business": "🏡",
};
const CATEGORY_LABELS: Record<string, string> = {
  "tree-care":         "Tree Care",
  "emergency-storm":   "Emergency & Storm",
  "property-business": "Property & Business",
};

const INTERVAL = 6000;
const FADE     = 650;

export default function BlogSlider({ posts }: { posts: PostPreview[] }) {
  const [isMobile, setIsMobile] = useState(false);
  const [inView,   setInView]   = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef   = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchX     = useRef<number | null>(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Watch viewport — only animate when section is ≥40% visible
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const perPage = isMobile ? 1 : 3;

  const groups: PostPreview[][] = [];
  for (let i = 0; i < posts.length; i += perPage) groups.push(posts.slice(i, i + perPage));
  const total = groups.length;

  const [idx,     setIdx]     = useState(0);
  const [visible, setVisible] = useState(true);

  // Reset index when layout switches mobile↔desktop
  useEffect(() => { setIdx(0); }, [perPage]);

  function goTo(next: number) {
    setVisible(false);
    setTimeout(() => { setIdx(next); setVisible(true); }, FADE);
  }

  function advance() { goTo((idx + 1) % total); }
  function retreat() { goTo((idx - 1 + total) % total); }

  // Auto-rotate ONLY while section is in view
  useEffect(() => {
    if (!inView) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((prev) => (prev + 1) % total);
        setVisible(true);
      }, FADE);
    }, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [inView, total]);

  // Dot tap — just jump; existing in-view timer continues
  function jumpTo(i: number) { goTo(i); }

  const handleTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const handleTouchEnd   = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const diff = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 48) { diff > 0 ? advance() : retreat(); }
    touchX.current = null;
  };

  const current = groups[idx] ?? [];

  return (
    <div ref={sectionRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {/* Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        style={{ opacity: visible ? 1 : 0, transition: `opacity ${FADE}ms ease` }}
      >
        {current.map((post) => {
          const color = categoryColors[post.category] ?? "var(--green-deep)";
          const icon  = categoryIcons[post.category]  ?? "🌳";
          const label = CATEGORY_LABELS[post.category] ?? post.category;
          return (
            <article
              key={post.slug}
              className="rounded-xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: "#ffffff",
                border: "2px solid rgba(114,204,53,0.2)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              }}
            >
              <div
                className="w-full h-36 flex flex-col items-center justify-center gap-2"
                style={{ backgroundColor: color }}
              >
                <span className="text-4xl" aria-hidden="true">{icon}</span>
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}
                >
                  {label}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-xs font-semibold" style={{ color: "#999999" }}>{post.publishedAt}</p>
                  <span style={{ color: "#cccccc" }}>·</span>
                  <p className="text-xs font-semibold" style={{ color: "#999999" }}>{post.readingTime}</p>
                </div>
                <h3 className="font-bold text-base mb-2 leading-snug flex-1" style={{ color: "var(--green-deep)" }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#555555" }}>{post.excerpt}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-sm font-bold inline-flex items-center gap-1 hover:underline"
                  style={{ color: "var(--green-bright)" }}
                >
                  Read More →
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {groups.map((_, i) => (
          <button
            key={i}
            onClick={() => jumpTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === idx ? "28px" : "10px",
              height: "10px",
              borderRadius: "999px",
              backgroundColor: i === idx ? "var(--green-bright)" : "rgba(22,101,52,0.25)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      <p className="text-center mt-3 text-xs" style={{ color: "#aaa" }}>
        {idx + 1} of {total}
      </p>
    </div>
  );
}
