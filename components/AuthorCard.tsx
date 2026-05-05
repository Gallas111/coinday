import Link from "next/link";

interface AuthorCardProps {
  date?: string;
  readingTime?: string;
}

export default function AuthorCard({ date, readingTime }: AuthorCardProps) {
  return (
    <div className="flex gap-4 items-start p-5 bg-[var(--surface)] border border-[var(--border)] rounded-xl my-6">
      <div
        className="relative w-11 h-11 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, #f7931a 0%, #ea7c00 100%)",
          boxShadow: "0 0 22px rgba(247,147,26,0.45)",
          border: "1px solid rgba(247,147,26,0.5)",
        }}
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7" aria-label="Coinday 로고">
          <path
            d="M11 7h7c2.8 0 4.5 1.4 4.5 3.7 0 1.4-0.7 2.5-1.8 3.1 1.5 0.6 2.4 1.9 2.4 3.6 0 2.6-2 4.1-5.2 4.1H11V7zm3 5.7h3.5c1.4 0 2.2-0.6 2.2-1.7 0-1.1-0.8-1.7-2.2-1.7H14v3.4zm0 6.6h3.9c1.5 0 2.3-0.7 2.3-1.9 0-1.2-0.8-1.9-2.3-1.9H14v3.8zM15 5h2v3h-2V5zm0 19h2v3h-2v-3z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span className="text-sm font-bold text-[var(--foreground)]">Coinday 편집팀</span>
          <span className="mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent-strong)] bg-[var(--accent-soft)] px-2 py-0.5 rounded-full border border-[var(--accent)]/30">
            Live Crypto · Daily
          </span>
        </div>
        <p className="text-xs text-[var(--muted)] leading-relaxed mb-2">
          CoinGecko · CoinMarketCap · TradingView · DefiLlama · 글로벌·국내 거래소 공식 자료를 교차 검증해 코인 시장 정보를 정리합니다. 특정 코인 매수·매도 권유가 아닙니다.
        </p>
        <div className="flex flex-wrap gap-3 text-[11px] mono text-[var(--muted)]">
          {date && <span>{date}</span>}
          {readingTime && <span className="tabular">{readingTime}</span>}
          <Link href="/about" className="text-[var(--accent-2)] hover:text-[var(--accent-2-strong)] font-medium">
            편집 정책 →
          </Link>
        </div>
      </div>
    </div>
  );
}
