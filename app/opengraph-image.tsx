import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Coinday — 오늘의 코인, 한 눈에";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // 가상 BTC 가격 차트 (90-day demo)
  const points = [0, 4, 8, 6, 12, 18, 24, 22, 28, 35, 42, 48, 54, 60, 70, 78, 84, 90].map(
    (v, i, arr) => {
      const x = 660 + (i / (arr.length - 1)) * 460;
      const y = 460 - (v / 90) * 220;
      return `${x},${y}`;
    }
  );
  const polyline = points.join(" ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0a0e1a 0%, #111726 100%)",
          fontFamily: "system-ui",
          position: "relative",
          padding: "64px",
        }}
      >
        {/* Grid backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#1e2942 1px, transparent 1px), linear-gradient(90deg, #1e2942 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.5,
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(247,147,26,0.18) 0%, transparent 70%)",
          }}
        />

        {/* LEFT — copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "55%",
          }}
        >
          {/* Logo + brand */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #f7931a, #ea7c00)",
                border: "1px solid rgba(247,147,26,0.5)",
                boxShadow: "0 0 28px rgba(247,147,26,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <svg width="34" height="34" viewBox="0 0 32 32">
                <path
                  d="M11 7h7c2.8 0 4.5 1.4 4.5 3.7 0 1.4-0.7 2.5-1.8 3.1 1.5 0.6 2.4 1.9 2.4 3.6 0 2.6-2 4.1-5.2 4.1H11V7zm3 5.7h3.5c1.4 0 2.2-0.6 2.2-1.7 0-1.1-0.8-1.7-2.2-1.7H14v3.4zm0 6.6h3.9c1.5 0 2.3-0.7 2.3-1.9 0-1.2-0.8-1.9-2.3-1.9H14v3.8zM15 5h2v3h-2V5zm0 19h2v3h-2v-3z"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontSize: "26px", fontWeight: "bold", color: "#e7ecf5", letterSpacing: "-0.01em" }}>
                Coinday
              </span>
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  color: "#8893ac",
                  textTransform: "uppercase",
                  marginTop: "4px",
                  fontFamily: "monospace",
                }}
              >
                Live Crypto · Daily
              </span>
            </div>
          </div>

          {/* Badge */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(247,147,26,0.45)",
              background: "rgba(247,147,26,0.13)",
              alignSelf: "flex-start",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#f7931a",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "0.22em",
                color: "#ffb454",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              Live Crypto Insight · Daily
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "76px",
              fontWeight: "bold",
              color: "#e7ecf5",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>오늘의 코인,</span>
            <span
              style={{
                background: "linear-gradient(90deg, #f7931a, #ffb454, #00d9ff)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              한 눈에
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "20px",
              color: "#8893ac",
              lineHeight: 1.5,
              marginBottom: "12px",
            }}
          >
            BTC · ETH · 알트코인 · 거래소 · DeFi · 뉴스
          </div>
          <div
            style={{
              fontSize: "15px",
              color: "#f5b647",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
            }}
          >
            ⚠ Not Financial Advice
          </div>
        </div>

        {/* RIGHT — mini chart */}
        <div
          style={{
            position: "absolute",
            right: "64px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "500px",
            height: "320px",
            background: "rgba(17, 23, 38, 0.88)",
            border: "1px solid #2c3a5c",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          {/* Chart label */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", width: "100%" }}>
            <span
              style={{
                fontSize: "11px",
                color: "#8893ac",
                fontFamily: "monospace",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              BTC/USD · 90D · DEMO
            </span>
            <span
              style={{
                fontSize: "13px",
                color: "#00d395",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              ▲ 9.2%
            </span>
          </div>

          {/* SVG chart */}
          <div
            style={{
              flex: 1,
              display: "flex",
            }}
          >
            <svg width="100%" height="100%" viewBox="640 220 480 240" preserveAspectRatio="none">
              <defs>
                <linearGradient id="og-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f7931a" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#f7931a" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="og-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f7931a" />
                  <stop offset="50%" stopColor="#00d9ff" />
                  <stop offset="100%" stopColor="#00d395" />
                </linearGradient>
              </defs>
              {/* Grid */}
              {[0, 0.25, 0.5, 0.75, 1].map((r) => (
                <line
                  key={r}
                  x1="640"
                  x2="1120"
                  y1={240 + r * 220}
                  y2={240 + r * 220}
                  stroke="#1e2942"
                  strokeDasharray="3 5"
                  strokeWidth="1"
                />
              ))}
              {/* Area */}
              <polygon
                points={`660,460 ${polyline} 1120,460`}
                fill="url(#og-area)"
              />
              {/* Line */}
              <polyline
                points={polyline}
                fill="none"
                stroke="url(#og-line)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* End dot */}
              <circle cx="1120" cy="240" r="6" fill="#00d395" />
              <circle cx="1120" cy="240" r="3" fill="#111726" />
            </svg>
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "64px",
            fontSize: "16px",
            color: "#8893ac",
            fontFamily: "monospace",
            letterSpacing: "0.05em",
          }}
        >
          coindaynow.com
        </div>
      </div>
    ),
    { ...size }
  );
}
