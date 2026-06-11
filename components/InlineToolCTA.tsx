"use client";

interface InlineToolCTAProps {
  category?: string;
}

export default function InlineToolCTA({ category }: InlineToolCTAProps) {
  void category;
  return (
    <div className="my-10 not-prose">
      <div className="rounded-xl border border-[var(--warn)]/30 bg-[var(--warn-soft)] p-5">
        <div className="flex items-start gap-3">
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-[var(--warn)] font-bold flex-shrink-0 mt-1">
            Notice
          </span>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-[var(--foreground)] mb-1">
              투자 정보 안내
            </h4>
            <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
              본 글은 암호화폐 시장에 대한{" "}
              <strong className="!bg-transparent !p-0 text-[var(--foreground)]">
                객관 데이터·정보 제공
              </strong>{" "}
              목적이며, 특정 코인 매수·매도 권유가 아닙니다. 암호화폐는 변동성이
              매우 크고 원금 전액 손실이 가능하므로 본인 판단과 책임 하에
              결정하세요.
            </p>
            <p className="text-sm mt-2">
              <a
                href="/tools/liquidation-calculator"
                className="text-[var(--accent)] font-medium hover:underline"
              >
                ⚡ 내 포지션 점검 — 레버리지별 청산가 계산기로 확인해 보기
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
