"use client";

interface CTABannerProps {
  label?: string;
  href?: string;
  category?: string;
}

const CATS = [
  { name: "시세·전망", href: "/category/시세-전망", icon: "📈" },
  { name: "알트코인", href: "/category/알트코인", icon: "🪙" },
  { name: "거래소", href: "/category/거래소", icon: "🏦" },
  { name: "코인뉴스", href: "/category/코인뉴스", icon: "📰" },
  { name: "트레이딩전략", href: "/category/트레이딩전략", icon: "🎯" },
  { name: "DeFi·NFT", href: "/category/DeFi-NFT", icon: "⚡" },
];

export default function CTABanner({ label, href, category }: CTABannerProps) {
  void label;
  void href;
  void category;

  return (
    <div
      className="relative my-12 rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-[var(--surface-2)]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 70% 50% at 0% 0%, var(--accent-soft), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, var(--accent-2-soft), transparent 60%)",
      }}
    >
      {/* Scanline pattern (decorative) */}
      <div className="absolute inset-0 scanline-backdrop pointer-events-none opacity-50" aria-hidden="true" />
      <div className="relative p-8">
        {/* Watermark BTC glyph (decorative) */}
        <svg
          viewBox="0 0 32 32"
          className="absolute right-6 top-6 w-16 h-16 opacity-[0.10] pointer-events-none"
          aria-hidden="true"
        >
          <path
            d="M11 7h7c2.8 0 4.5 1.4 4.5 3.7 0 1.4-0.7 2.5-1.8 3.1 1.5 0.6 2.4 1.9 2.4 3.6 0 2.6-2 4.1-5.2 4.1H11V7zm3 5.7h3.5c1.4 0 2.2-0.6 2.2-1.7 0-1.1-0.8-1.7-2.2-1.7H14v3.4zm0 6.6h3.9c1.5 0 2.3-0.7 2.3-1.9 0-1.2-0.8-1.9-2.3-1.9H14v3.8zM15 5h2v3h-2V5zm0 19h2v3h-2v-3z"
            fill="var(--accent)"
          />
        </svg>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-soft)] border border-[var(--accent)]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              Coinday
            </span>
          </div>
          <h3 className="display text-xl md:text-2xl font-bold text-[var(--foreground)] mb-2 tracking-tight">
            다른 카테고리 코인 정보도 확인해 보세요
          </h3>
          <p className="text-sm text-[var(--muted-strong)] mb-6 max-w-xl leading-relaxed">
            본 매체의 모든 콘텐츠는 정보 제공 목적이며, 특정 코인 매수·매도 권유가 아닙니다.
            코인 시장 변동성을 충분히 인지하고 본인 책임 하에 판단하세요.
          </p>
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <a
                key={c.name}
                href={c.href}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] hover:bg-[var(--accent-soft)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--foreground)] text-sm font-medium transition-colors"
              >
                <span>{c.icon}</span>
                <span>{c.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
