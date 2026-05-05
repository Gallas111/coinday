export default function Disclaimer() {
  return (
    <div className="my-8 p-5 bg-[var(--warn-soft)] border border-[var(--warn)]/30 rounded-xl">
      <div className="flex items-start gap-3">
        <span className="mono text-[10px] uppercase tracking-[0.2em] text-[var(--warn)] font-bold flex-shrink-0 mt-0.5">
          Disclosure
        </span>
        <div className="text-sm text-[var(--muted-strong)] leading-relaxed">
          <strong className="!bg-transparent !p-0 text-[var(--foreground)] font-bold">
            본 글은 정보 제공 목적이며 투자 권유가 아닙니다.
          </strong>
          <p className="mt-1">
            객관 데이터·과거 실적·시뮬레이션 기반으로 작성되었으며, 특정 종목의 매수·매도
            권유가 아닙니다. 투자 결정에 따른 모든 손익은 본인에게 귀속됩니다. 미국 주식
            직접 투자는 환율·세금·시장 변동 리스크가 있으며, 본인 판단과 전문가 상담을
            통해 결정하세요.
          </p>
        </div>
      </div>
    </div>
  );
}
