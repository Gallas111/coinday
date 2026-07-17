import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoinPriceCard from "@/components/CoinPriceCard";
import MarketStat from "@/components/MarketStat";
import TopMovers from "@/components/TopMovers";
import { CATEGORIES } from "@/lib/categories";

const CATEGORY_KEYS: (keyof typeof CATEGORIES)[] = [
  "market",
  "altcoin",
  "exchange",
  "news",
  "strategy",
  "defi",
];

// 디자인 데모용 가상 데이터 — 실제 시세 X
const HERO_COINS = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$98,420",
    change24h: 2.34,
    rank: 1,
    sparkline: [92, 91, 93, 90, 92, 95, 96, 94, 97, 96, 98, 99, 100, 99, 98],
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$3,485",
    change24h: 1.18,
    rank: 2,
    sparkline: [33, 32, 34, 33, 35, 34, 36, 35, 34, 35, 33, 34, 35, 34, 35],
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$215.6",
    change24h: -0.74,
    rank: 5,
    sparkline: [210, 215, 220, 218, 215, 213, 217, 219, 216, 218, 215, 217, 213, 216, 215],
  },
  {
    symbol: "XRP",
    name: "Ripple",
    price: "$2.31",
    change24h: 3.85,
    rank: 7,
    sparkline: [2.05, 2.08, 2.12, 2.10, 2.15, 2.18, 2.16, 2.20, 2.22, 2.25, 2.28, 2.26, 2.30, 2.28, 2.31],
  },
];

const TICKER_STRIP = [
  { sym: "BNB",   price: "$685.2",   chg: "0.42%",  up: true  },
  { sym: "DOGE",  price: "$0.385",   chg: "1.62%",  up: false },
  { sym: "ADA",   price: "$0.972",   chg: "0.98%",  up: true  },
  { sym: "AVAX",  price: "$42.80",   chg: "2.05%",  up: true  },
  { sym: "LINK",  price: "$23.15",   chg: "0.32%",  up: false },
  { sym: "TRX",   price: "$0.255",   chg: "0.55%",  up: true  },
  { sym: "DOT",   price: "$8.45",    chg: "1.42%",  up: true  },
  { sym: "MATIC", price: "$0.482",   chg: "2.18%",  up: false },
  { sym: "SHIB",  price: "$0.0000245", chg: "1.85%", up: true },
  { sym: "UNI",   price: "$11.85",   chg: "0.62%",  up: true  },
  { sym: "PEPE",  price: "$0.0000183", chg: "5.32%", up: true },
  { sym: "ATOM",  price: "$6.78",    chg: "0.42%",  up: false },
];

const TOP_GAINERS = [
  { symbol: "TAO",   price: "$502", change: 12.45 },
  { symbol: "PEPE",  price: "$0.0000183", change: 8.72 },
  { symbol: "SUI",   price: "$4.85", change: 6.92 },
  { symbol: "NEAR",  price: "$5.42", change: 5.18 },
  { symbol: "INJ",   price: "$28.70", change: 4.65 },
];

const TOP_LOSERS = [
  { symbol: "MATIC", price: "$0.482", change: -2.18 },
  { symbol: "DOGE",  price: "$0.385", change: -1.62 },
  { symbol: "LINK",  price: "$23.15", change: -0.32 },
  { symbol: "SOL",   price: "$215.6", change: -0.74 },
  { symbol: "ATOM",  price: "$6.78",  change: -0.42 },
];

export default function HomePage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const restPosts = posts.slice(1, 5);
  const totalPosts = posts.length;

  return (
    <>
      <Header />

      {/* Live ticker marquee */}
      <div className="border-b border-[var(--border)] bg-[var(--surface)]/60 overflow-hidden live-strip-backdrop">
        <div className="max-w-7xl mx-auto py-2.5 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-r from-[var(--background)] to-transparent w-12 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-[var(--background)] to-transparent w-12 pointer-events-none" />
          <div className="marquee text-[13px] items-center">
            {[...TICKER_STRIP, ...TICKER_STRIP].map((t, i) => (
              <span key={i} className="flex items-baseline gap-1.5 mono whitespace-nowrap">
                <span className="text-[var(--accent)] font-bold tracking-wide">{t.sym}</span>
                <span className="text-[var(--foreground)] tabular">{t.price}</span>
                <span className={t.up ? "up tabular font-semibold" : "down tabular font-semibold"}>
                  {t.up ? "▲" : "▼"} {t.chg}
                </span>
                <span className="text-[var(--border-strong)] mx-3">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* HERO — 풀 와이드 시장 대시보드 */}
        <section className="relative border-b border-[var(--border)]">
          <div className="absolute inset-0 scanline-backdrop opacity-50 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-14">
            {/* Headline strip */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--accent)]/40 bg-[var(--accent-soft)] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] pulse-dot" />
                  <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                    Live Crypto Insight · {new Date().toLocaleDateString("ko-KR", { month: "short", day: "numeric" })}
                  </span>
                </div>
                <h1 className="display text-3xl md:text-5xl font-bold leading-[1.05] text-[var(--foreground)]">
                  오늘의 코인,{" "}
                  <span className="brand-gradient">한 눈에</span>
                </h1>
                <p className="text-sm md:text-base text-[var(--muted-strong)] leading-relaxed mt-3 max-w-2xl">
                  매일 정리되는 시세 · 알트코인 · 거래소 · DeFi · 뉴스. 매매 권유 아닌 정보 제공.
                </p>
              </div>

              {/* Market summary stats */}
              <div className="flex flex-wrap gap-2">
                <MarketStat
                  label="Total Mkt Cap"
                  value="$3.72T"
                  delta={{ value: "1.85%", up: true }}
                />
                <MarketStat
                  label="24h Volume"
                  value="$142B"
                  delta={{ value: "3.42%", up: true }}
                />
                <MarketStat
                  label="BTC Dominance"
                  value="58.4%"
                  subtle="+0.3pt today"
                />
                <MarketStat
                  label="Fear & Greed"
                  value="72"
                  subtle="Greed (탐욕)"
                />
              </div>
            </div>

            {/* 4-column 가격 카드 (BTC·ETH·SOL·XRP) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {HERO_COINS.map((c) => (
                <CoinPriceCard key={c.symbol} {...c} />
              ))}
            </div>

            <p className="text-[10px] mono text-[var(--muted)] mt-3">
              ⚠ 표시된 시세·통계는 디자인 데모 (가상 데이터) · 실시간 X · 매매 권유 아님
            </p>
          </div>
        </section>

        {/* Top movers (24h) */}
        <section className="border-b border-[var(--border)] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-5">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)] mb-2">
                  Movers · 24h
                </p>
                <h2 className="display text-xl md:text-2xl font-bold text-[var(--foreground)]">
                  지금 움직이는 코인
                </h2>
              </div>
              <span className="hidden md:inline mono text-[10px] text-[var(--muted)] uppercase tracking-wider">
                Demo data
              </span>
            </div>
            <TopMovers gainers={TOP_GAINERS} losers={TOP_LOSERS} />
          </div>
        </section>

        {/* Categories — horizontal pill scroll on mobile, grid on desktop */}
        <section className="border-b border-[var(--border)] py-12 bg-[var(--surface)]/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-5">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)] mb-2">
                  Categories
                </p>
                <h2 className="display text-xl md:text-2xl font-bold text-[var(--foreground)]">
                  무엇을 찾으시나요?
                </h2>
              </div>
              <Link
                href="/search"
                className="hidden md:inline-flex items-center gap-1.5 text-sm text-[var(--muted-strong)] hover:text-[var(--accent-2)] transition-colors"
              >
                전체 검색 <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {CATEGORY_KEYS.map((key) => {
                const cat = CATEGORIES[key];
                return (
                  <Link
                    key={key}
                    href={`/category/${cat.name}`}
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] text-[var(--foreground)] transition-all"
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span className="font-semibold text-sm">{cat.name}</span>
                    <span className="mono text-[10px] text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Latest — 매거진 스타일 (1 big featured + 4 small) */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)] mb-2">
                  Latest · {totalPosts} articles
                </p>
                <h2 className="display text-xl md:text-2xl font-bold text-[var(--foreground)]">
                  최신 글
                </h2>
              </div>
              <Link
                href="/search"
                className="hidden md:inline-flex items-center gap-1.5 text-sm text-[var(--muted-strong)] hover:text-[var(--accent-2)] transition-colors"
              >
                전체 보기 <span aria-hidden>→</span>
              </Link>
            </div>

            {!featured ? (
              <div className="text-center py-20 rounded-xl border border-dashed border-[var(--border)]">
                <p className="text-[var(--muted)]">분석 글이 곧 업데이트됩니다.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Featured — 큰 카드 */}
                <Link
                  href={`/blog/${featured.slug}`}
                  className="lg:col-span-7 card-glow group rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden flex flex-col"
                >
                  <div className="relative h-56 md:h-72 bg-gradient-to-br from-[var(--accent-soft)] via-[var(--accent-2-soft)] to-transparent flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 scanline-backdrop opacity-40 pointer-events-none" />
                    <div className="text-7xl md:text-8xl opacity-30">
                      {featured.icon}
                    </div>
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded text-[10px] font-bold mono uppercase tracking-wider bg-[var(--accent)] text-[#0a0e1a]">
                      Featured
                    </span>
                    <span className="absolute top-4 right-4 px-2 py-1 rounded text-[10px] font-bold mono uppercase tracking-wider bg-[var(--background)]/85 text-[var(--accent-strong)] border border-[var(--accent)]/30 backdrop-blur-sm">
                      {featured.category}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mono text-[10px] text-[var(--muted)] tabular mb-2">
                      {featured.date} · {featured.readingTime}min read
                    </div>
                    <h3 className="display text-xl md:text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] leading-snug mb-2 transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-strong)] leading-relaxed line-clamp-3">
                      {featured.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--accent-2)] font-semibold">
                      자세히 보기
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </div>
                  </div>
                </Link>

                {/* Sub posts — 4개 가로 스택 */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {restPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="card-glow group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 flex gap-3"
                    >
                      <div
                        className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-2xl"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--accent-soft), var(--accent-2-soft))",
                        }}
                        aria-hidden
                      >
                        {post.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold mono uppercase tracking-wider bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                            {post.category}
                          </span>
                          <span className="mono text-[9px] text-[var(--muted)] tabular">
                            {post.readingTime}min
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] leading-snug line-clamp-2 transition-colors">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter / 알림 CTA */}
        <section className="border-t border-[var(--border)] py-14 bg-[var(--surface)]/40 live-strip-backdrop">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--accent-2)]/40 bg-[var(--accent-2-soft)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-2)] pulse-dot" />
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent-2-strong)]">
                Daily Digest
              </span>
            </div>
            <h2 className="display text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-3">
              매일 아침 코인 시장 요약을 받아보세요
            </h2>
            <p className="text-sm md:text-base text-[var(--muted-strong)] mb-6 leading-relaxed">
              주요 코인 시세·뉴스·정책 변화를 한 메일로. 광고 없는 정보 제공 매체.
            </p>
            <Link
              href="/category/시세·전망"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[#0a0e1a] font-bold text-sm shadow-[0_0_28px_rgba(247,147,26,0.45)] transition-all"
            >
              오늘의 시세 보기 <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
