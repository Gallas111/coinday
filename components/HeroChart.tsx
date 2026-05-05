/**
 * Coinday Hero — 가상 BTC 가격 차트 (90일 시뮬레이션)
 * 실시간 시세 X · 디자인 데모용 (실제 가격 표시 시 시세 API 연결 필요)
 */
export default function HeroChart() {
  // 90일 가상 BTC 가격 시뮬레이션 ($90k → $98k 변동)
  const days = 90;
  const w = 540;
  const h = 320;
  const pad = { l: 46, r: 16, t: 26, b: 32 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;

  // 가상 BTC 종가 시퀀스 (USD k)
  const seed = [
    90.2, 91.4, 89.8, 88.5, 90.1, 91.6, 92.3, 93.5, 92.8, 91.5,
    90.4, 89.7, 90.9, 92.4, 93.7, 94.5, 93.2, 92.0, 90.3, 88.6,
    87.4, 88.9, 90.5, 91.7, 92.6, 93.8, 95.1, 96.3, 97.4, 96.8,
    95.5, 94.2, 93.6, 95.0, 96.5, 97.8, 99.1, 98.3, 96.7, 95.4,
    94.0, 92.8, 93.5, 94.8, 96.2, 97.5, 98.6, 99.8, 100.7, 99.5,
    98.0, 96.4, 95.1, 96.5, 98.0, 99.3, 100.5, 101.8, 102.4, 101.2,
    99.7, 98.3, 97.0, 95.8, 96.9, 98.4, 99.6, 100.9, 102.0, 103.1,
    104.3, 103.5, 102.0, 100.6, 99.4, 100.7, 102.2, 103.5, 104.8, 105.6,
    104.5, 103.0, 101.7, 100.4, 99.2, 100.5, 101.9, 103.2, 102.6, 98.4,
  ].slice(0, days);

  const max = Math.max(...seed);
  const min = Math.min(...seed);
  const range = max - min;
  const padTop = range * 0.08;
  const padBot = range * 0.05;

  const points = seed.map((v, i) => {
    const x = pad.l + (i / (days - 1)) * innerW;
    const y = pad.t + innerH - ((v - min + padBot) / (range + padTop + padBot)) * innerH;
    return [x, y];
  });

  const linePath = points
    .map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`))
    .join(" ");

  const areaPath =
    `M ${points[0][0]} ${pad.t + innerH} ` +
    points.map((p) => `L ${p[0]} ${p[1]}`).join(" ") +
    ` L ${points[points.length - 1][0]} ${pad.t + innerH} Z`;

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((r) => {
    const v = min - padBot + r * (range + padTop + padBot);
    return {
      y: pad.t + innerH - r * innerH,
      label: `$${v.toFixed(0)}k`,
    };
  });

  const last = seed[seed.length - 1];
  const first = seed[0];
  const change = ((last - first) / first) * 100;
  const isUp = change >= 0;

  return (
    <div className="relative">
      <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--background)]/85 border border-[var(--border)] backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--up)] pulse-dot" />
        <span className="mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted-strong)]">
          BTC/USD · 90D · DEMO
        </span>
      </div>

      <div className="absolute top-3 right-3 z-10 text-right">
        <div className="mono text-[18px] font-bold text-[var(--foreground)]">
          ${last.toFixed(1)}k
        </div>
        <div className={`mono text-[11px] font-semibold ${isUp ? "up" : "down"}`}>
          {isUp ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
        </div>
      </div>

      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-auto rounded-xl border border-[var(--border)] bg-[var(--surface)]"
        role="img"
        aria-label="비트코인 가상 가격 차트 (데모)"
      >
        <defs>
          <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="50%" stopColor="var(--accent-2)" />
            <stop offset="100%" stopColor="var(--up)" />
          </linearGradient>
        </defs>

        {/* Y grid */}
        {yTicks.map((t, i) => (
          <g key={i}>
            <line
              x1={pad.l}
              x2={w - pad.r}
              y1={t.y}
              y2={t.y}
              stroke="var(--border)"
              strokeDasharray="2 5"
              strokeWidth="1"
            />
            <text
              x={pad.l - 6}
              y={t.y + 3}
              textAnchor="end"
              fontSize="10"
              fill="var(--muted)"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
            >
              {t.label}
            </text>
          </g>
        ))}

        {/* X labels */}
        {[0, 30, 60, 89].map((d) => {
          const x = pad.l + (d / (days - 1)) * innerW;
          return (
            <text
              key={d}
              x={x}
              y={h - pad.b + 18}
              textAnchor="middle"
              fontSize="10"
              fill="var(--muted)"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
            >
              {d === 0 ? "D-90" : d === 89 ? "Today" : `D-${90 - d}`}
            </text>
          );
        })}

        {/* Area */}
        <path d={areaPath} fill="url(#hero-area)" />

        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke="url(#hero-line)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="chart-line"
        />

        {/* End dot */}
        <circle
          cx={points[points.length - 1][0]}
          cy={points[points.length - 1][1]}
          r="5"
          fill={isUp ? "var(--up)" : "var(--down)"}
          className="pulse-dot"
        />
        <circle
          cx={points[points.length - 1][0]}
          cy={points[points.length - 1][1]}
          r="2.5"
          fill="var(--background)"
        />
      </svg>

      <p className="mt-2 text-[10px] text-[var(--muted)] mono leading-relaxed">
        ⚠ 데모용 가상 시세 · 실시간 X · 매매 권유 아님
      </p>
    </div>
  );
}
