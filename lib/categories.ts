export const CATEGORIES = {
  market: {
    name: "시세·전망",
    icon: "📈",
    description: "비트코인·이더리움·주요 알트 시세 분석과 전망",
    longDescription: "BTC·ETH·SOL·XRP 등 주요 코인의 차트 분석, 지지·저항선, 단기·중기 시세 흐름과 매크로 지표(달러 인덱스·금리)까지 종합 정리합니다. 매매 권유가 아니며 투자 책임은 본인에게 있습니다.",
  },
  altcoin: {
    name: "알트코인",
    icon: "🪙",
    description: "신규·유망 알트코인 정보와 토큰 분석",
    longDescription: "신규 상장 코인, AI·DePIN·RWA 같은 트렌드 섹터의 유망 알트코인 정보를 토크노믹스·팀·로드맵·온체인 데이터 관점에서 정리합니다. 투기성 종목 다수 포함이라 충분한 자체 검증 후 판단하세요.",
  },
  exchange: {
    name: "거래소",
    icon: "🏦",
    description: "바이낸스·바이비트·업비트 등 거래소 비교·이용법",
    longDescription: "글로벌·국내 거래소(Binance·Bybit·OKX·Upbit·Bithumb)의 수수료·KYC·입출금·선물·현물 비교와 가입 방법, 보안 설정까지. 안전한 거래 환경 구성에 필요한 정보를 다룹니다.",
  },
  news: {
    name: "코인뉴스",
    icon: "📰",
    description: "정책·ETF·해킹·발표 등 코인 시장 핵심 뉴스",
    longDescription: "SEC·FOMC·ETF 승인·CEX 해킹·주요 프로젝트 발표 등 코인 시장에 직접적 영향을 주는 뉴스를 정리하고 시세 영향까지 분석합니다.",
  },
  strategy: {
    name: "트레이딩전략",
    icon: "🎯",
    description: "차트·지표·전략·리스크 관리 가이드",
    longDescription: "RSI·MACD·이동평균·피보나치 같은 지표 활용법, 분할 매수·DCA·피라미딩 전략, 손절·포지션 사이징·심리 관리까지. 단기 매매부터 장기 보유까지 실전 트레이딩에 필요한 노하우를 정리합니다.",
  },
  defi: {
    name: "DeFi·NFT",
    icon: "⚡",
    description: "스테이킹·DeFi·NFT·온체인 활용 가이드",
    longDescription: "이더리움·솔라나 스테이킹, 유니스왑·Aave 같은 DeFi 프로토콜, NFT 컬렉션·민팅, 온체인 지갑·브리지 사용법까지. CEX 외부 자산 운용에 필요한 실전 가이드를 정리합니다.",
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

export function getCategoryByKey(key: string) {
  return CATEGORIES[key as CategoryKey] ?? null;
}

export function getAllCategories() {
  return Object.entries(CATEGORIES).map(([key, value]) => ({
    key: key as CategoryKey,
    ...value,
  }));
}
