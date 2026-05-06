import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateOrganizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "소개 — Coinday 편집팀",
  description:
    "Coinday 편집팀의 콘텐츠 작성·검수 프로세스, 참고 자료(CoinGecko·CoinMarketCap·TradingView·DefiLlama), 면책·정정 정책을 안내합니다. 코인 시장 정보 매체.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const orgSchema = generateOrganizationSchema();

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-12 flex-1">
        <h1 className="display text-2xl md:text-3xl font-bold text-[var(--accent-strong)] mb-6">
          Coinday 소개
        </h1>
        <p className="text-[var(--muted-strong)] leading-relaxed mb-10">
          Coinday(coindaynow.com)는 비트코인·이더리움부터 알트코인·DeFi·NFT까지 코인 시장
          전반의 시세·뉴스·전략을 매일 정리하는 정보 매체예요. 본 매체는 정보 제공
          목적으로 운영되며, 특정 코인·토큰의 매수·매도 권유나 투자 자문이 아닙니다.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">콘텐츠 원칙</h2>
          <ul className="list-disc pl-5 space-y-2 text-[var(--muted-strong)] leading-relaxed">
            <li><strong>출처 명시</strong> — 모든 시세·통계는 CoinGecko, CoinMarketCap, TradingView, DefiLlama, 글로벌·국내 거래소 공식 자료를 교차 확인 후 기재합니다.</li>
            <li><strong>객관 데이터 + 시장 흐름</strong> — 가격·거래량·온체인 지표·뉴스 사실관계 위주로 정리하고, 개인 보유·매수 권유는 다루지 않습니다.</li>
            <li><strong>면책 명시</strong> — 모든 글에 매매 권유 아님·원금 손실 위험 면책을 포함합니다.</li>
            <li><strong>정정·업데이트</strong> — 사실관계 오류가 확인되면 본문 하단에 정정 이력을 남기고, 시세·정책 변경에 따라 갱신합니다.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">참고 자료</h2>
          <ul className="list-disc pl-5 space-y-2 text-[var(--muted-strong)] leading-relaxed">
            <li><strong>시세·시가총액</strong> — CoinGecko, CoinMarketCap, TradingView</li>
            <li><strong>온체인·DeFi</strong> — DefiLlama, Glassnode, Dune Analytics</li>
            <li><strong>거래소 공시</strong> — Binance, Bybit, OKX, Upbit, Bithumb 공식 발표</li>
            <li><strong>정책·규제</strong> — SEC, FSC(금융위원회), 국세청, FIU(금융정보분석원)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">중요 면책 사항</h2>
          <div className="rounded-xl border border-[var(--warn)]/40 bg-[var(--warn-soft)] p-5">
            <p className="text-[var(--muted-strong)] leading-relaxed text-sm">
              본 매체의 모든 콘텐츠는 <strong className="text-[var(--warn)]">정보 제공 목적</strong>이며,
              <strong className="text-[var(--warn)]"> 매매 권유나 투자 자문이 아닙니다</strong>. 코인
              시장은 변동성이 매우 크고 24시간 거래되며 원금 손실 위험이 있어요. 투자 결정과
              그에 따른 손익은 전적으로 본인 책임이고, 본인의 자금 사정·투자 경험·위험 감수
              범위에 맞게 신중히 판단하세요.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">문의·정정 요청</h2>
          <p className="text-[var(--muted-strong)] leading-relaxed">
            팩트 오류·정정 요청·제휴 문의는{" "}
            <Link href="/contact" className="text-[var(--accent-2)] hover:text-[var(--accent-2-strong)] underline">
              문의 페이지
            </Link>
            로 보내주세요. 영업일 기준 24~48시간 안에 답변드리겠습니다.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
