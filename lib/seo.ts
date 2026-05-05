import type { PostMeta } from "./posts";

const ORGANIZATION = {
  "@type": "Organization" as const,
  name: "Coinday",
  alternateName: "코인데이",
  url: "https://www.coindaynow.com",
  logo: {
    "@type": "ImageObject" as const,
    url: "https://www.coindaynow.com/icon.png",
    width: 512,
    height: 512,
  },
  sameAs: [],
  description:
    "비트코인·이더리움·알트코인·DeFi·NFT 시장 정보를 매일 정리하는 코인 정보 매체. 정보 제공 목적이며 매매 권유가 아님.",
};

export function generateArticleSchema(post: PostMeta, url: string) {
  const imageUrl = `https://www.coindaynow.com/blog/${post.slug}/opengraph-image`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    inLanguage: "ko",
    articleSection: post.category,
    author: {
      ...ORGANIZATION,
      "@id": "https://www.coindaynow.com/about",
    },
    publisher: ORGANIZATION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.tags.join(", "),
    isAccessibleForFree: true,
  };
}

export function generateFaqSchema(
  faqs: { question: string; answer: string }[]
) {
  if (faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    ...ORGANIZATION,
    "@id": "https://www.coindaynow.com/#organization",
    foundingDate: "2026",
    knowsAbout: [
      "비트코인",
      "이더리움",
      "알트코인",
      "암호화폐",
      "코인 시세",
      "코인 거래소",
      "DeFi",
      "NFT",
      "스테이킹",
      "블록체인",
      "트레이딩 전략",
      "온체인 분석",
    ],
  };
}
