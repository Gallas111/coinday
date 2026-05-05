import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroChart from "@/components/HeroChart";
import { CATEGORIES } from "@/lib/categories";

const CATEGORY_KEYS: (keyof typeof CATEGORIES)[] = [
  "market",
  "altcoin",
  "exchange",
  "news",
  "strategy",
  "defi",
];

// 데모 라이브 티커 (실제 시세 X — 디자인 데모용)
const TICKER_PREVIEW = [
  { sym: "BTC",   price: "$98,420",  chg: "+2.34%", up: true  },
  { sym: "ETH",   price: "$3,485",   chg: "+1.18%", up: true  },
  { sym: "SOL",   price: "$215.6",   chg: "−0.74%", up: false },
  { sym: "XRP",   price: "$2.31",    chg: "+3.85%", up: true  },
  { sym: "BNB",   price: "$685.2",   chg: "+0.42%", up: true  },
  { sym: "DOGE",  price: "$0.385",   chg: "−1.62%", up: false },
  { sym: "ADA",   price: "$0.972",   chg: "+0.98%", up: true  },
  { sym: "AVAX",  price: "$42.80",   chg: "+2.05%", up: true  },
  { sym: "LINK",  price: "$23.15",   chg: "−0.32%", up: false },
  { sym: "TRX",   price: "$0.255",   chg: "+0.55%", up: true  },
  { sym: "DOT",   price: "$8.45",    chg: "+1.42%", up: true  },
  { sym: "MATIC", price: "$0.482",   chg: "−2.18%", up: false },
];

export default function HomePage() {
  const posts = getAllPosts();
  const latest = posts.slice(0, 6);

  const totalPosts = posts.length;
  const totalCategories = CATEGORY_KEYS.length;

  // 사이트 통계
  const stats = [
    { label: "Articles",      value: String(totalPosts).padStart(3, "0"), sub: "코인 분석·뉴스·전략 정리"             },
    { label: "Categories",    value: String(totalCategories).padStart(2, "0"), sub: "시세·알트·거래소·뉴스·전략·DeFi"   },
    { label: "Coverage",      value: "24/7",                              sub: "BTC · ETH · 알트코인 · DeFi"           },
    { label: "Disclosure",    value: "100%",                              sub: "전 글 면책 + 매매 권유 X"               },
  ];

  return (
    <>
      <Header />

      {/* Live ticker marquee */}
      <div className="border-b border-[var(--border)] bg-[var(--surface)]/60 overflow-hidden live-strip-backdrop">
        <div className="max-w-6xl mx-auto py-2.5 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-r from-[var(--background)] to-transparent w-12 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-[var(--background)] to-transparent w-12 pointer-events-none" />
          <div className="marquee text-[13px] items-center">
            {[...TICKER_PREVIEW, ...TICKER_PREVIEW].map((t, i) => (
              <span key={i} className="flex items-baseline gap-1.5 mono whitespace-nowrap">
                <span className="text-[var(--accent)] font-bold tracking-wide">{t.sym}</span>
                <span className="text-[var(--foreground)] tabular">{t.price}</span>
                <span className={t.up ? "up tabular font-semibold" : "down tabular font-semibold"}>
                  {t.up ? "▲" : "▼"} {t.chg.replace("+", "").replace("−", "")}
                </span>
                <span className="text-[var(--border-strong)] mx-3">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative border-b border-[var(--border)]">
          <div className="absolute inset-0 scanline-backdrop opacity-60 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* LEFT — copy */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--accent)]/40 bg-[var(--accent-soft)] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] pulse-dot" />
                  <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                    Live Crypto Insight · Daily
                  </span>
                </div>
                <h1 className="display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-[var(--foreground)] mb-6">
                  오늘의 코인,{" "}
                  <span className="brand-gradient">한 눈에</span>
                </h1>
                <p className="text-base md:text-lg text-[var(--muted-strong)] leading-relaxed mb-8 max-w-xl">
                  비트코인·이더리움부터 신규 알트코인·DeFi·NFT까지{" "}
                  <strong className="!bg-transparent !p-0 text-[var(--foreground)]">
                    실시간 시세 흐름·차트 분석·핵심 뉴스
                  </strong>
                  를 매일 정리해 드려요. 본 매체는 정보 제공 목적이며{" "}
                  <strong className="!bg-transparent !p-0 text-[var(--warn)]">
                    매매 권유가 아닙니다.
                  </strong>
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/category/시세-전망"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[#0a0e1a] font-bold text-sm shadow-[0_0_28px_rgba(247,147,26,0.45)] transition-all"
                  >
                    오늘의 시세 보기 <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="/category/알트코인"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border-strong)] hover:border-[var(--accent-2)] text-[var(--foreground)] font-semibold text-sm transition-all"
                  >
                    알트코인 분석
                  </Link>
                </div>
              </div>

              {/* RIGHT — chart */}
              <div className="lg:col-span-5">
                <HeroChart />
              </div>
            </div>
          </div>
        </section>

        {/* Site stats */}
        <section className="border-b border-[var(--border)] bg-[var(--surface)]/30">
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card-glow rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <p className="mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] mb-2">
                    {s.label}
                  </p>
                  <p className="price-display text-[var(--foreground)] mb-1">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-[var(--muted)] leading-snug">
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-[var(--border)] py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)] mb-2">
                  Categories — {totalCategories.toString().padStart(2, "0")}
                </p>
                <h2 className="display text-2xl md:text-3xl font-bold text-[var(--foreground)]">
                  무엇을 찾으시나요?
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CATEGORY_KEYS.map((key, i) => {
                const cat = CATEGORIES[key];
                return (
                  <Link
                    key={key}
                    href={`/category/${cat.name}`}
                    className="card-glow group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
                  >
                    <div className="absolute top-4 right-4 mono text-[11px] text-[var(--muted)] tabular">
                      {String(i + 1).padStart(2, "0")} / {totalCategories.toString().padStart(2, "0")}
                    </div>
                    <div className="text-2xl mb-3">{cat.icon}</div>
                    <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] mb-2 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-xs text-[var(--accent-2)] font-semibold">
                      Browse
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Latest articles */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)] mb-2">
                  Latest — {totalPosts} articles
                </p>
                <h2 className="display text-2xl md:text-3xl font-bold text-[var(--foreground)]">
                  최신 글
                </h2>
              </div>
            </div>

            {latest.length === 0 ? (
              <div className="text-center py-20 rounded-xl border border-dashed border-[var(--border)]">
                <p className="text-[var(--muted)]">분석 글이 곧 업데이트됩니다.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {latest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="card-glow group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold mono uppercase tracking-wider bg-[var(--accent-soft)] text-[var(--accent-strong)] border border-[var(--accent)]/30">
                        {post.category}
                      </span>
                      <span className="mono text-[10px] text-[var(--muted)] tabular">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] leading-snug mb-2 line-clamp-3 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-[11px]">
                      <span className="mono text-[var(--muted)]">
                        {post.readingTime}min read
                      </span>
                      <span className="text-[var(--accent-2)] font-semibold">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
