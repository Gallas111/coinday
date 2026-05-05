import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import ScrollTracker from "@/components/ScrollTracker";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0e1a" },
    { media: "(prefers-color-scheme: light)", color: "#fafbfd" },
  ],
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  title: {
    default: "Coinday — 오늘의 코인, 한 눈에",
    template: "%s | Coinday",
  },
  description:
    "비트코인·이더리움부터 신규 알트코인·DeFi·NFT까지 매일 정리되는 코인 시세·뉴스·분석 매체. 정보 제공 목적이며 매매 권유가 아닙니다.",
  metadataBase: new URL("https://www.coinday.kr"),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon" }],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  keywords: [
    "코인 시세",
    "비트코인",
    "이더리움",
    "알트코인",
    "코인 뉴스",
    "암호화폐",
    "거래소 비교",
    "바이낸스",
    "업비트",
    "DeFi",
    "NFT",
    "트레이딩 전략",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "Coinday",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Coinday — 오늘의 코인, 한 눈에",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coinday — 오늘의 코인, 한 눈에",
    description:
      "비트코인·이더리움부터 신규 알트코인·DeFi·NFT까지 매일 정리되는 코인 시세·뉴스·분석 매체.",
    images: ["/images/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification은 GSC·Naver 등록 후 발급된 코드로 채우기
  // verification: {
  //   google: "GOOGLE_VERIFICATION_CODE",
  //   other: {
  //     "naver-site-verification": "NAVER_VERIFICATION_CODE",
  //   },
  // },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Coinday",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  // AdSense·GA4는 도메인 등록·승인 후 활성화
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* FOUC 방지 — 다크 우선 (코인 매체 컨벤션) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var s=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t||s||'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Coinday",
              url: "https://www.coinday.kr",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.coinday.kr/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {children}
        <ScrollToTop />
        <ScrollTracker />
        {/* GA4·AdSense는 도메인 등록·승인 후 활성화 */}
      </body>
    </html>
  );
}
