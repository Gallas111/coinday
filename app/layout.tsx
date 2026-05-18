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
    { media: "(prefers-color-scheme: light)", color: "#fafbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e1a" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  title: {
    default: "Coinday — 오늘의 코인, 한 눈에",
    template: "%s | Coinday",
  },
  description:
    "비트코인·이더리움부터 신규 알트코인·DeFi·NFT까지 매일 정리되는 코인 시세·뉴스·분석 매체. 정보 제공 목적이며 매매 권유가 아닙니다.",
  metadataBase: new URL("https://www.coindaynow.com"),
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Coinday — 오늘의 코인, 한 눈에",
    description:
      "비트코인·이더리움부터 신규 알트코인·DeFi·NFT까지 매일 정리되는 코인 시세·뉴스·분석 매체.",
    images: ["/opengraph-image"],
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
  verification: {
    google: "XmcKBN_dQzAUP_KEFG7ciSP6Oea9mg9goec_zJ8Ob8E",
    other: {
      "naver-site-verification": "8b675edee65d90647aeb746cddf865b9dd313c2a",
    },
  },
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
        {/* FOUC 방지 — 라이트 디폴트 (블로그 톤). 토글은 유지 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t||'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
        {/* Pretendard 폰트 비동기 (render-blocking 회피) */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="stylesheet"
          media="print"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <noscript>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var links=document.querySelectorAll('link[rel="stylesheet"][media="print"]');links.forEach(function(l){if(l.sheet){l.media='all';}else{l.addEventListener('load',function(){l.media='all';});}});})();`,
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
              url: "https://www.coindaynow.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.coindaynow.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {children}
        <ScrollToTop />
        <ScrollTracker />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DN1HXH761P"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DN1HXH761P');
          `}
        </Script>
      </body>
    </html>
  );
}
