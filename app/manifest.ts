import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Coinday — 오늘의 코인, 한 눈에",
    short_name: "Coinday",
    description:
      "비트코인·이더리움부터 신규 알트코인·DeFi·NFT까지 매일 정리되는 코인 시세·뉴스·분석 매체",
    start_url: "/",
    display: "standalone",
    background_color: "#fafbfd",
    theme_color: "#fafbfd",
    orientation: "portrait",
    lang: "ko-KR",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["finance", "news", "education"],
  };
}
