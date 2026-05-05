interface MarketStatProps {
  label: string;
  value: string;
  delta?: { value: string; up: boolean };
  subtle?: string;
}

export default function MarketStat({ label, value, delta, subtle }: MarketStatProps) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur-sm px-5 py-3 flex flex-col gap-0.5 min-w-[160px]">
      <span className="mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
        {label}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="text-[15px] font-bold tabular text-[var(--foreground)]">
          {value}
        </span>
        {delta && (
          <span
            className={`mono text-[11px] font-semibold tabular ${
              delta.up ? "up" : "down"
            }`}
          >
            {delta.up ? "▲" : "▼"} {delta.value}
          </span>
        )}
      </div>
      {subtle && (
        <span className="text-[10px] text-[var(--muted)] mono">{subtle}</span>
      )}
    </div>
  );
}
