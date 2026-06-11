"use client";

import { useState } from "react";

const LEVERAGES = [3, 5, 10, 20, 50, 100];

function fmtPrice(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return "—";
  if (n >= 1000) return n.toLocaleString("en-US", { maximumFractionDigits: 1 });
  if (n >= 1) return n.toLocaleString("en-US", { maximumFractionDigits: 4 });
  return n.toLocaleString("en-US", { maximumFractionDigits: 8 });
}

// 격리마진 USDT 무기한 단순화 공식 (수수료 제외)
// 롱: 청산가 = 진입가 × (1 − 1/레버리지 + 유지증거금률)
// 숏: 청산가 = 진입가 × (1 + 1/레버리지 − 유지증거금률)
function liqPrice(entry: number, lev: number, mmr: number, isLong: boolean): number {
  if (entry <= 0 || lev <= 0) return 0;
  return isLong ? entry * (1 - 1 / lev + mmr) : entry * (1 + 1 / lev - mmr);
}

const inputCls =
  "w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-lg px-3 py-2.5 text-[var(--foreground)] tabular focus:outline-none focus:border-[var(--accent)] transition-colors";
const labelCls = "block text-sm text-[var(--muted-strong)] mb-1.5 font-medium";

export default function LiquidationCalculator() {
  const [side, setSide] = useState<"long" | "short">("long");
  const [entry, setEntry] = useState("100000");
  const [leverage, setLeverage] = useState("10");
  const [mmrPct, setMmrPct] = useState("0.5");

  const num = (s: string, fallback = 0) => {
    const n = parseFloat(s.replace(/,/g, ""));
    return Number.isFinite(n) && n >= 0 ? n : fallback;
  };

  const entryN = num(entry);
  const levN = Math.min(200, Math.max(1, num(leverage, 10)));
  const mmr = Math.min(5, Math.max(0, num(mmrPct, 0.5))) / 100;
  const isLong = side === "long";

  const liq = liqPrice(entryN, levN, mmr, isLong);
  const distancePct = entryN > 0 ? (Math.abs(liq - entryN) / entryN) * 100 : 0;

  return (
    <section className="my-8 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 md:p-6">
      {/* 방향 토글 */}
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setSide("long")}
          className={`flex-1 py-2.5 rounded-lg font-semibold text-sm border transition-colors ${
            isLong
              ? "up border-[var(--up,#00d395)] bg-[rgba(0,211,149,0.1)]"
              : "text-[var(--muted)] border-[var(--border)]"
          }`}
        >
          롱 (Long) ▲
        </button>
        <button
          type="button"
          onClick={() => setSide("short")}
          className={`flex-1 py-2.5 rounded-lg font-semibold text-sm border transition-colors ${
            !isLong
              ? "down border-[var(--down,#ff3d5a)] bg-[rgba(255,61,90,0.1)]"
              : "text-[var(--muted)] border-[var(--border)]"
          }`}
        >
          숏 (Short) ▼
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className={labelCls} htmlFor="lc-entry">
            진입가 (USDT)
          </label>
          <input
            id="lc-entry"
            className={inputCls}
            inputMode="decimal"
            value={entry}
            onChange={(e) => setEntry(e.target.value.replace(/[^0-9.,]/g, ""))}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="lc-lev">
            레버리지 (배)
          </label>
          <input
            id="lc-lev"
            className={inputCls}
            inputMode="decimal"
            value={leverage}
            onChange={(e) => setLeverage(e.target.value.replace(/[^0-9.]/g, ""))}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="lc-mmr">
            유지증거금률 (%)
          </label>
          <input
            id="lc-mmr"
            className={inputCls}
            inputMode="decimal"
            value={mmrPct}
            onChange={(e) => setMmrPct(e.target.value.replace(/[^0-9.]/g, ""))}
          />
        </div>
      </div>

      {/* 결과 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-lg p-4">
          <p className="text-xs text-[var(--muted)] mb-1">예상 청산가 (격리 기준)</p>
          <p className={`text-2xl font-bold tabular ${isLong ? "down" : "up"}`}>
            {fmtPrice(liq)} <span className="text-sm font-normal">USDT</span>
          </p>
        </div>
        <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-lg p-4">
          <p className="text-xs text-[var(--muted)] mb-1">청산까지 거리</p>
          <p className="text-2xl font-bold text-[var(--foreground)] tabular">
            {distancePct.toFixed(2)}%
          </p>
          <p className="text-xs text-[var(--muted)] mt-1">
            진입가에서 {isLong ? "하락" : "상승"} 시 청산
          </p>
        </div>
      </div>

      {/* 레버리지별 비교 표 */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[var(--muted)] border-b border-[var(--border)]">
              <th className="py-2 pr-3 font-medium">레버리지</th>
              <th className="py-2 pr-3 font-medium">청산가 (USDT)</th>
              <th className="py-2 font-medium">청산까지 거리</th>
            </tr>
          </thead>
          <tbody>
            {LEVERAGES.map((lv) => {
              const p = liqPrice(entryN, lv, mmr, isLong);
              const d = entryN > 0 ? (Math.abs(p - entryN) / entryN) * 100 : 0;
              return (
                <tr
                  key={lv}
                  className={`border-b border-[var(--border)]/50 ${
                    lv === Math.round(levN)
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted-strong)]"
                  }`}
                >
                  <td className="py-2 pr-3 tabular">{lv}x</td>
                  <td className="py-2 pr-3 tabular">{fmtPrice(p)}</td>
                  <td className="py-2 tabular">{d.toFixed(2)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[var(--muted)] mt-4 leading-relaxed">
        ※ 격리마진·USDT 무기한 기준 단순화 공식이에요(수수료·펀딩비 제외, 교차마진은
        지갑 잔고에 따라 달라요). 거래소마다 유지증거금률이 포지션 규모 구간별로
        다르므로 실제 청산가는 거래소 화면 기준으로 반드시 확인하세요. 본 도구는
        정보 제공 목적이며 매매 권유가 아니에요.
      </p>
    </section>
  );
}
