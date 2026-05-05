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
              본 글은 미국 주식·ETF에 대한{" "}
              <strong className="!bg-transparent !p-0 text-[var(--foreground)]">
                객관 데이터·시뮬레이션 정보
              </strong>이며, 특정 종목 매수·매도 권유가 아닙니다. 환율·세금·시장 변동
              리스크가 있어 본인 판단과 전문가 상담 후 결정하세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
