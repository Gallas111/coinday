"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

// href는 lib/categories.ts의 name과 정확히 일치해야 한다.
// (category/[category] 라우트가 cat.name으로만 생성됨 — 하이픈 표기는 404)
const NAV = [
  { label: "시세·전망", href: "/category/시세·전망" },
  { label: "알트코인", href: "/category/알트코인" },
  { label: "거래소", href: "/category/거래소" },
  { label: "코인뉴스", href: "/category/코인뉴스" },
  { label: "전략", href: "/category/트레이딩전략" },
  { label: "DeFi·NFT", href: "/category/DeFi·NFT" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #f7931a 0%, #ea7c00 100%)",
              boxShadow: "0 0 22px rgba(247,147,26,0.45)",
              border: "1px solid rgba(247,147,26,0.5)",
            }}
            aria-hidden
          >
            <svg viewBox="0 0 32 32" className="w-5 h-5" aria-label="Coinday 로고">
              {/* Bitcoin-style ₿ glyph stylized */}
              <path
                d="M11 7h7c2.8 0 4.5 1.4 4.5 3.7 0 1.4-0.7 2.5-1.8 3.1 1.5 0.6 2.4 1.9 2.4 3.6 0 2.6-2 4.1-5.2 4.1H11V7zm3 5.7h3.5c1.4 0 2.2-0.6 2.2-1.7 0-1.1-0.8-1.7-2.2-1.7H14v3.4zm0 6.6h3.9c1.5 0 2.3-0.7 2.3-1.9 0-1.2-0.8-1.9-2.3-1.9H14v3.8zM15 5h2v3h-2V5zm0 19h2v3h-2v-3z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="display text-[17px] font-bold tracking-tight">
              <span className="brand-gradient">Coinday</span>
            </span>
            <span className="text-[9px] mono text-[var(--muted)] uppercase tracking-[0.22em] mt-[2px]">
              Live Crypto · Daily
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5 text-[13px]">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-2.5 py-1.5 rounded-md text-[var(--muted-strong)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
          <div className="w-px h-5 bg-[var(--border)] mx-1.5" />
          <Link
            href="/search"
            className="px-2.5 py-1.5 rounded-md text-[var(--muted)] hover:text-[var(--accent-2)] hover:bg-[var(--accent-2-soft)] transition-colors flex items-center gap-1.5"
            aria-label="검색"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile button area */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[var(--muted-strong)] p-2 rounded-md hover:bg-[var(--surface)]"
            aria-label="메뉴"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[var(--border)] bg-[var(--surface)] px-4 py-3 space-y-1">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 rounded-md text-[var(--muted-strong)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/search"
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-3 rounded-md text-[var(--muted)] hover:bg-[var(--surface-2)]"
          >
            🔍 검색
          </Link>
        </nav>
      )}
    </header>
  );
}
