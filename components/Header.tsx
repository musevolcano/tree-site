"use client";
import { useState } from "react";
import Link from "next/link";
import { businessInfo } from "@/data/site-data";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--sand)", boxShadow: "0 1px 12px rgba(0,0,0,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo — icon + text wordmark */}
        <Link href="/" className="flex items-center gap-2.5 leading-none select-none">
          {/* Tree mark icon */}
          <svg
            width="36"
            height="40"
            viewBox="0 0 100 115"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <polygon points="50,4 34,28 66,28" fill="#0a3d24" />
            <polygon points="50,14 22,48 78,48" fill="#0a3d24" />
            <polygon points="50,28 10,70 90,70" fill="#0a3d24" />
            <rect x="42" y="69" width="16" height="26" rx="4" fill="#0a3d24" />
          </svg>
          {/* Text wordmark */}
          <div className="flex flex-col items-start">
            <span style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              color: "#0a3d24",
              letterSpacing: "0.07em",
              fontSize: "1.7rem",
              lineHeight: 1,
            }}>
              BIG CREEK
            </span>
            <span style={{
              fontFamily: "var(--font-bebas-neue, 'Bebas Neue', sans-serif)",
              color: "#0a3d24",
              letterSpacing: "0.07em",
              fontSize: "1.28rem",
              lineHeight: 1,
            }}>
              TREE SERVICE
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold transition-colors"
              style={{ color: "var(--gray)", letterSpacing: "0.02em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green-mid)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={businessInfo.phoneHref}
            className="px-5 py-2 rounded-md font-bold text-sm transition-all"
            style={{ backgroundColor: "var(--green-mid)", color: "var(--white)", letterSpacing: "0.03em" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--green-deep)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--green-mid)")}
          >
            Call for Free Quote
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-6 h-0.5 block transition-all" style={{ backgroundColor: "var(--green-deep)",
              transform: i === 0 && menuOpen ? "rotate(45deg) translateY(8px)" : i === 2 && menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              opacity: i === 1 && menuOpen ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden w-full py-5 px-6 flex flex-col gap-4" style={{ backgroundColor: "var(--white)", borderTop: "1px solid var(--sand)" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-base font-semibold py-2.5" style={{ color: "var(--black)" }} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={businessInfo.phoneHref} className="text-center py-3 rounded-md font-bold text-white mt-1" style={{ backgroundColor: "var(--green-mid)" }}>
            📞 Call for Free Quote
          </a>
        </div>
      )}
    </header>
  );
}
