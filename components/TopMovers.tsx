interface MoverItem {
  symbol: string;
  price: string;
  change: number;
}

interface TopMoversProps {
  gainers: MoverItem[];
  losers: MoverItem[];
}

function MoverRow({ items, type }: { items: MoverItem[]; type: "up" | "down" }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 overflow-hidden">
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--border)]"
        style={{
          background: type === "up" ? "var(--up-soft)" : "var(--down-soft)",
        }}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            type === "up" ? "bg-[var(--up)]" : "bg-[var(--down)]"
          } pulse-dot`}
        />
        <span
          className={`mono text-[11px] uppercase tracking-[0.22em] font-bold ${
            type === "up" ? "up" : "down"
          }`}
        >
          {type === "up" ? "Top Gainers · 24h" : "Top Losers · 24h"}
        </span>
      </div>
      <div className="divide-y divide-[var(--border)]">
        {items.map((it, i) => (
          <div
            key={it.symbol}
            className="flex items-center justify-between px-4 py-2.5 hover:bg-[var(--surface-2)] transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="mono text-[10px] text-[var(--muted)] tabular w-4">
                {i + 1}
              </span>
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{
                  background:
                    type === "up"
                      ? "linear-gradient(135deg, var(--up), var(--accent-2))"
                      : "linear-gradient(135deg, var(--down), #c81e35)",
                  color: "#0a0e1a",
                }}
                aria-hidden
              >
                {it.symbol.slice(0, 1)}
              </span>
              <span className="text-sm font-bold text-[var(--foreground)]">
                {it.symbol}
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="mono text-xs tabular text-[var(--muted-strong)]">
                {it.price}
              </span>
              <span
                className={`mono text-xs font-bold tabular w-16 text-right ${
                  type === "up" ? "up" : "down"
                }`}
              >
                {type === "up" ? "+" : ""}
                {it.change.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TopMovers({ gainers, losers }: TopMoversProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <MoverRow items={gainers} type="up" />
      <MoverRow items={losers} type="down" />
    </div>
  );
}
