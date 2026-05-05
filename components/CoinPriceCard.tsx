interface CoinPriceCardProps {
  symbol: string;
  name: string;
  price: string;
  change24h: number;
  sparkline: number[];
  rank?: number;
}

export default function CoinPriceCard({
  symbol,
  name,
  price,
  change24h,
  sparkline,
  rank,
}: CoinPriceCardProps) {
  const isUp = change24h >= 0;
  const max = Math.max(...sparkline);
  const min = Math.min(...sparkline);
  const range = max - min || 1;
  const w = 120;
  const h = 40;

  const points = sparkline
    .map((v, i) => {
      const x = (i / (sparkline.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <div className="card-glow rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 relative overflow-hidden">
      {rank !== undefined && (
        <span className="absolute top-3 right-3 mono text-[10px] text-[var(--muted)] tabular">
          #{rank}
        </span>
      )}
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
          style={{
            background: `linear-gradient(135deg, var(--accent), var(--accent-2))`,
            color: "#0a0e1a",
          }}
          aria-hidden
        >
          {symbol.slice(0, 1)}
        </div>
        <div className="leading-none">
          <div className="text-sm font-bold text-[var(--foreground)]">{symbol}</div>
          <div className="text-[10px] text-[var(--muted)] mono uppercase tracking-wider mt-0.5">
            {name}
          </div>
        </div>
      </div>

      <div className="price-display !text-[1.6rem] mb-1">{price}</div>
      <div
        className={`mono text-xs font-semibold tabular ${
          isUp ? "up" : "down"
        }`}
      >
        {isUp ? "▲" : "▼"} {Math.abs(change24h).toFixed(2)}%{" "}
        <span className="text-[var(--muted)] font-normal">24h</span>
      </div>

      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-10 mt-3"
        preserveAspectRatio="none"
        aria-hidden
      >
        <polyline
          points={points}
          fill="none"
          stroke={isUp ? "var(--up)" : "var(--down)"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
