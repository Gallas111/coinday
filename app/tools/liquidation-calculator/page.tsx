import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";
import LiquidationCalculator from "@/components/LiquidationCalculator";

const PAGE_URL = "https://www.coindaynow.com/tools/liquidation-calculator";

export const metadata: Metadata = {
  title: "청산가 계산기 — 선물 레버리지별 강제청산 가격·거리 계산",
  description:
    "진입가와 레버리지만 넣으면 무기한 선물 예상 청산가와 청산까지 거리(%)를 바로 계산해 드려요. 롱/숏, 유지증거금률 반영, 3x~100x 레버리지별 비교표 제공.",
  keywords: [
    "청산가 계산기",
    "강제청산 계산",
    "레버리지 계산기",
    "선물 청산가",
    "무기한 선물 계산기",
    "격리마진 청산가",
    "코인 선물 계산기",
  ],
  alternates: { canonical: "/tools/liquidation-calculator" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: PAGE_URL,
    siteName: "Coinday",
    title: "청산가 계산기 — 선물 레버리지별 강제청산 가격 계산",
    description:
      "진입가·레버리지로 무기한 선물 예상 청산가와 청산 거리(%)를 즉시 계산. 레버리지별 비교표 제공.",
  },
  twitter: {
    card: "summary",
    title: "청산가 계산기 — Coinday",
    description: "진입가·레버리지로 예상 청산가와 청산 거리(%)를 즉시 계산.",
  },
};

const faqs = [
  {
    q: "청산가는 어떤 공식으로 계산하나요?",
    a: "격리마진 USDT 무기한 기준 단순화 공식을 사용해요. 롱은 진입가 × (1 − 1/레버리지 + 유지증거금률), 숏은 진입가 × (1 + 1/레버리지 − 유지증거금률)이에요. 예를 들어 10만 USDT 진입 10배 롱(유지증거금 0.5%)이면 청산가는 약 90,500 USDT로, 진입가 대비 약 9.5% 하락 지점이에요.",
  },
  {
    q: "유지증거금률(MMR)이 뭔가요?",
    a: "포지션을 유지하기 위해 계좌에 남아 있어야 하는 최소 증거금 비율이에요. 손실로 증거금이 이 수준까지 줄면 거래소가 강제청산을 실행해요. 보통 0.4~1% 수준에서 시작하지만 포지션 규모가 클수록 구간별로 높아지므로, 정확한 값은 이용하는 거래소의 리스크 한도 표에서 확인해야 해요.",
  },
  {
    q: "실제 거래소 청산가와 왜 조금 다르게 나오나요?",
    a: "이 계산기는 진입 수수료·펀딩비·추가 증거금을 뺀 단순화 모델이기 때문이에요. 실제로는 펀딩비 누적, 수수료 차감, 표시가격(마크 프라이스) 기준 청산 등이 반영돼 청산가가 약간 달라져요. 주문 전 거래소 화면의 예상 청산가를 최종 기준으로 삼으세요.",
  },
  {
    q: "교차마진(크로스)일 때도 이 계산기를 쓸 수 있나요?",
    a: "참고용으로만 쓸 수 있어요. 교차마진은 지갑 전체 잔고가 증거금으로 잡혀서 잔고가 많을수록 청산가가 진입가에서 멀어져요. 이 계산기는 포지션 증거금만 따로 잡는 격리마진 기준이라, 교차마진의 실제 청산가는 거래소 화면에서 확인해야 해요.",
  },
  {
    q: "레버리지가 높을수록 청산 거리가 얼마나 가까워지나요?",
    a: "거의 반비례로 가까워져요. 10배면 진입가에서 약 9~10%, 20배면 약 4~5%, 100배면 약 0.5~1% 움직임에 청산이에요. 코인 시장에서 하루 5% 변동은 흔하기 때문에 고배율일수록 일상적인 변동에도 청산될 수 있다는 뜻이에요. 청산 클러스터가 쌓인 구간은 스탑헌트의 표적이 되기도 해요.",
  },
  {
    q: "청산을 피하려면 어떻게 해야 하나요?",
    a: "일반적으로 거론되는 방법은 레버리지를 낮춰 청산 거리를 벌리는 것, 청산가에 도달하기 전 손절 라인을 미리 설정하는 것, 증거금을 추가해 청산가를 옮기는 것이에요. 다만 어떤 방법도 손실 자체를 막아주지는 않으며, 변동성 급등 구간에서는 슬리피지로 손절가보다 불리하게 체결될 수 있어요.",
  },
  {
    q: "이 계산기 결과로 매매해도 되나요?",
    a: "이 도구는 정보 제공 목적의 계산기일 뿐 매매 권유가 아니에요. 선물 거래는 원금 전액 손실이 가능한 고위험 상품이고, 청산가 계산이 정확해도 손실 위험은 사라지지 않아요. 투자 판단과 책임은 본인에게 있어요.",
  },
];

export default function LiquidationCalculatorPage() {
  const softwareLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "청산가 계산기",
    url: PAGE_URL,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
    description:
      "진입가·레버리지·유지증거금률을 입력하면 무기한 선물의 예상 청산가와 청산까지 거리(%)를 계산하는 무료 계산기. 롱/숏 및 레버리지별 비교표 제공.",
    publisher: {
      "@type": "Organization",
      name: "Coinday",
      url: "https://www.coindaynow.com",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: "https://www.coindaynow.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "청산가 계산기",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8 flex-1">
        <nav className="text-sm text-[var(--muted)] mb-6" aria-label="breadcrumb">
          <a href="/" className="hover:text-[var(--accent)] transition-colors">
            홈
          </a>
          <span className="mx-2">›</span>
          <span className="text-[var(--foreground)]">청산가 계산기</span>
        </nav>

        <header className="mb-2">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] leading-tight">
            ⚡ 청산가 계산기 — 레버리지별 강제청산 가격·거리
          </h1>
          <p className="mt-3 text-[var(--muted-strong)] leading-relaxed">
            결론부터: 진입가와 레버리지만 넣으면 <strong>예상 청산가</strong>와{" "}
            <strong>청산까지 남은 거리(%)</strong>가 바로 나와요. 롱/숏 방향과
            유지증거금률을 반영하고, 3배부터 100배까지 레버리지별 청산 거리도 표로
            비교해 드려요. 주문 넣기 전에 내 포지션이 몇 % 움직임에 청산되는지 먼저
            확인하세요.
          </p>
        </header>

        <LiquidationCalculator />

        <article className="prose">
          <h2>청산(강제청산)은 언제 일어나나요?</h2>
          <p>
            레버리지 포지션의 손실이 커져서 증거금이{" "}
            <strong>유지증거금 수준까지 줄어들면</strong> 거래소가 포지션을 강제로
            종료해요. 이게 청산이에요. 레버리지가 높을수록 같은 가격 변동에도
            증거금이 빨리 소진되므로 청산가가 진입가에 가까워져요. 10배 롱이면 약
            9~10% 하락, 100배면 1%도 안 되는 하락에 청산되는 구조예요.
          </p>
          <h2>청산가 공식 (격리마진 기준)</h2>
          <p>
            이 계산기가 쓰는 단순화 공식은 다음과 같아요. 롱 포지션은{" "}
            <strong>청산가 = 진입가 × (1 − 1/레버리지 + 유지증거금률)</strong>, 숏
            포지션은 <strong>청산가 = 진입가 × (1 + 1/레버리지 − 유지증거금률)</strong>
            이에요. 실제 거래소는 여기에 수수료, 펀딩비, 마크 프라이스 기준 청산
            등을 더 반영하므로 계산기 결과는 근사치로 보고 주문 화면의 예상
            청산가를 최종 확인하는 습관이 중요해요.
          </p>
          <h2>청산 데이터는 시장 분석에도 쓰여요</h2>
          <p>
            내 포지션 관리뿐 아니라, 시장 전체의 청산 물량과 청산 예상 구간(청산
            맵)은 단기 변동성을 읽는 재료로도 널리 쓰여요. 대량 청산이 몰린 구간은
            가격이 그 지점을 향해 움직이는 &lsquo;스탑헌트&rsquo;의 표적이 되곤
            하죠. 이 주제는{" "}
            <a href="/blog/liquidity-sweep-stop-hunt-liquidation-cluster-crypto-trading-guide">
              유동성 스윕·스탑헌트와 청산 클러스터 가이드
            </a>
            와{" "}
            <a href="/blog/liquidation-data-trading-strategy-coinglass-guide">
              청산 데이터 활용 전략 가이드
            </a>
            에서 자세히 다뤘어요. 포지션 유지 비용이 궁금하다면{" "}
            <a href="/blog/crypto-perpetual-funding-rate-binance-bybit-okx-comparison-event-spike-guide">
              무기한 펀딩비 거래소 비교 가이드
            </a>
            도 함께 보세요.
          </p>

          <h2>자주 묻는 질문</h2>
        </article>

        <div className="space-y-4 mt-2">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group bg-[var(--surface)] border border-[var(--border)] rounded-lg px-5 py-4"
              open={i === 0}
            >
              <summary className="cursor-pointer font-semibold text-[var(--foreground)] list-none flex items-start gap-2">
                <span className="text-[var(--accent)] shrink-0">Q.</span>
                <span>{f.q}</span>
              </summary>
              <p className="mt-3 text-[var(--muted-strong)] leading-relaxed pl-6">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <section className="mt-8 text-sm text-[var(--muted)] leading-relaxed">
          <h2 className="text-base font-semibold text-[var(--foreground)] mb-2">
            출처 · 근거 자료
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a
                href="https://www.binance.com/en/support/faq"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[var(--accent-2,#00d9ff)] hover:underline"
              >
                Binance Futures 가이드
              </a>{" "}
              — 격리마진 청산가 산식·유지증거금 구간
            </li>
            <li>
              <a
                href="https://www.bybit.com/en/help-center"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[var(--accent-2,#00d9ff)] hover:underline"
              >
                Bybit 헬프센터
              </a>{" "}
              — USDT 무기한 유지증거금·마크 프라이스 청산 기준
            </li>
          </ul>
        </section>

        <Disclaimer />
      </main>
      <Footer />
    </>
  );
}
