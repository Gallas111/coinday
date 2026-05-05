import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f1320 0%, #07090f 100%)",
          borderRadius: "40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 우상단 그린 글로우 */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,197,94,0.35) 0%, transparent 60%)",
          }}
        />

        {/* 3개 막대 + 트렌드 라인 SVG */}
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          style={{ position: "relative" }}
        >
          <defs>
            <linearGradient id="apple-bar1" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#3a6dd9" />
              <stop offset="100%" stopColor="#4f8bff" />
            </linearGradient>
            <linearGradient id="apple-bar2" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#4f8bff" />
              <stop offset="100%" stopColor="#6da2ff" />
            </linearGradient>
            <linearGradient id="apple-bar3" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#6da2ff" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>

          {/* 3개 막대 우상향 */}
          <rect x="20" y="80" width="24" height="50" rx="4" fill="url(#apple-bar1)" />
          <rect x="58" y="56" width="24" height="74" rx="4" fill="url(#apple-bar2)" />
          <rect x="96" y="28" width="24" height="102" rx="4" fill="url(#apple-bar3)" />

          {/* 트렌드 라인 */}
          <polyline
            points="32,80 70,56 108,28"
            fill="none"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.92"
          />

          {/* 끝점 닷 */}
          <circle cx="108" cy="28" r="6" fill="#22c55e" />
          <circle cx="108" cy="28" r="2.5" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
