import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]/40 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="relative w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #f7931a 0%, #ea7c00 100%)",
                  boxShadow: "0 0 18px rgba(247,147,26,0.45)",
                  border: "1px solid rgba(247,147,26,0.5)",
                }}
              >
                <svg viewBox="0 0 32 32" className="w-4 h-4" aria-label="Coinday 로고">
                  <path
                    d="M11 7h7c2.8 0 4.5 1.4 4.5 3.7 0 1.4-0.7 2.5-1.8 3.1 1.5 0.6 2.4 1.9 2.4 3.6 0 2.6-2 4.1-5.2 4.1H11V7zm3 5.7h3.5c1.4 0 2.2-0.6 2.2-1.7 0-1.1-0.8-1.7-2.2-1.7H14v3.4zm0 6.6h3.9c1.5 0 2.3-0.7 2.3-1.9 0-1.2-0.8-1.9-2.3-1.9H14v3.8zM15 5h2v3h-2V5zm0 19h2v3h-2v-3z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <span className="font-bold text-[var(--foreground)]">
                <span className="brand-gradient">Coinday</span>
              </span>
            </div>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              매일 정리되는 코인 시세·뉴스·전략 매체
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[var(--warn-soft)] border border-[var(--warn)]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--warn)] animate-pulse" />
              <span className="text-[10px] font-semibold text-[var(--warn)] uppercase tracking-wider mono">
                Not Financial Advice
              </span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[11px] font-bold text-[var(--accent)] mb-3 uppercase tracking-wider mono">
              Categories
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/시세-전망" className="text-[var(--muted-strong)] hover:text-[var(--accent)] transition-colors">시세·전망</Link></li>
              <li><Link href="/category/알트코인" className="text-[var(--muted-strong)] hover:text-[var(--accent)] transition-colors">알트코인</Link></li>
              <li><Link href="/category/거래소" className="text-[var(--muted-strong)] hover:text-[var(--accent)] transition-colors">거래소</Link></li>
              <li><Link href="/category/코인뉴스" className="text-[var(--muted-strong)] hover:text-[var(--accent)] transition-colors">코인뉴스</Link></li>
              <li><Link href="/category/트레이딩전략" className="text-[var(--muted-strong)] hover:text-[var(--accent)] transition-colors">트레이딩전략</Link></li>
              <li><Link href="/category/DeFi-NFT" className="text-[var(--muted-strong)] hover:text-[var(--accent)] transition-colors">DeFi·NFT</Link></li>
            </ul>
          </div>

          {/* Data sources */}
          <div>
            <h3 className="text-[11px] font-bold text-[var(--accent)] mb-3 uppercase tracking-wider mono">
              Data Sources
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-strong)] hover:text-[var(--accent-2)] transition-colors">CoinGecko</a></li>
              <li><a href="https://www.coinmarketcap.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-strong)] hover:text-[var(--accent-2)] transition-colors">CoinMarketCap</a></li>
              <li><a href="https://www.tradingview.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-strong)] hover:text-[var(--accent-2)] transition-colors">TradingView</a></li>
              <li><a href="https://www.binance.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-strong)] hover:text-[var(--accent-2)] transition-colors">Binance</a></li>
              <li><a href="https://defillama.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-strong)] hover:text-[var(--accent-2)] transition-colors">DefiLlama</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-[11px] font-bold text-[var(--accent)] mb-3 uppercase tracking-wider mono">
              About
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-[var(--muted-strong)] hover:text-[var(--accent-2)] transition-colors">소개</Link></li>
              <li><Link href="/contact" className="text-[var(--muted-strong)] hover:text-[var(--accent-2)] transition-colors">문의·정정 요청</Link></li>
              <li><Link href="/terms" className="text-[var(--muted-strong)] hover:text-[var(--accent-2)] transition-colors">이용약관</Link></li>
              <li><Link href="/privacy" className="text-[var(--muted-strong)] hover:text-[var(--accent-2)] transition-colors">개인정보처리방침</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)]">
          <p className="mb-2 leading-relaxed max-w-3xl">
            본 매체의 모든 콘텐츠는 정보 제공 목적이며, 특정 코인·토큰의 매수·매도 권유나
            투자 자문이 아닙니다. 코인 시장은 변동성이 매우 크고 원금 손실 위험이 있으며,
            투자 결정에 따른 손익은 본인에게 귀속됩니다.
          </p>
          <div className="flex items-center justify-between flex-wrap gap-2 mt-4">
            <span>&copy; {new Date().getFullYear()} Coinday · coindaynow.com</span>
            <span className="mono text-[var(--muted)]">v1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
