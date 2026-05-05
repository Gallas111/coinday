# Coinday — Claude 프로젝트 지침

## 서비스
- **목적:** 비트코인·이더리움·알트코인·거래소·DeFi·NFT 시장 정보 매체. 트래픽 우선
- **배포:** Cloudflare Pages (`coinday` 프로젝트, 도메인 등록 후 연결)
- **자동 배포:** main push → CF Pages가 GitHub 직접 감지 → 자체 빌드 환경에서 `npm run build` 후 배포 (다른 7개 블로그와 동일 패턴)
- **도메인:** coindaynow.com (사용자 구매 진행 중, 등록 후 CF zone + custom domain 연결)
- **GitHub:** Gallas111/coinday (생성 예정, public)
- **로컬:** `/c/Users/owner/OneDrive/바탕 화면/사이트/coinday`

## 톤·페르소나
- **편집팀 매체** ("Coinday 편집팀") — 개인 보유·매매 후기 X
- **객관 데이터 + 시장 흐름** — CoinGecko·CoinMarketCap·TradingView·DefiLlama·거래소 공식 자료 기반
- **법적 안전선** — "사세요/팔지 마세요" 매매 권유 절대 금지. 모든 글에 매매 권유 아님 면책 포함

## 디자인 시스템 v1.0 (2026-05-05 신설)

**컬러 (globals.css):**
- background: `#0a0e1a` / surface: `#111726` / surface-2: `#1a2236`
- accent: `#f7931a` (Bitcoin orange) — CTA·로고·헤드라인
- accent-2: `#00d9ff` (Neon cyan) — 링크·차트·하이라이트
- up: `#00d395` (형광 그린) / down: `#ff3d5a` (형광 레드)
- warn: `#f5b647` (앰버, 면책)
- 텍스트 그라데이션: `.brand-gradient` (orange → cyan)

**폰트:** Pretendard Variable + Geist Mono + GmarketSans (헤드라인)

**유틸 클래스:**
- `.mono` / `.tabular` / `.ticker` — 모노 + 숫자 정렬
- `.up` / `.down` / `.tick-up` / `.tick-down` — 시장 색·화살표
- `.scanline-backdrop` — 시안+오렌지 그리드 라인 배경
- `.live-strip-backdrop` — Hero 라이브 스트립 그라데이션
- `.card-glow` — hover 시 conic gradient 글로우 (orange/cyan/green)
- `.chart-line` — SVG line draw 애니메이션
- `.pulse-dot` — 펄싱
- `.marquee` — 자동 스크롤 ticker
- `.ticker-pill` — 가격 캡슐 (BTC $98,234 ▲ 2.3%)
- `.brand-gradient` — orange → cyan 텍스트 그라데이션
- `.price-display` — 큰 가격 표시 (Hero·통계)
- `.glow-orange` / `.glow-cyan` / `.glow-up` — 형광 글로우 텍스트

**핵심 컴포넌트:**
- `HeroChart.tsx` — Hero 우측 BTC 90일 가상 차트 + 라이브 가격·변동률 라벨
- `Header.tsx` — BTC orange ₿ 로고, 6 카테고리 네비
- `Footer.tsx` — 4-column grid + Not Financial Advice 배지
- `AuthorCard.tsx` — Coinday 편집팀 EEAT
- `CTABanner.tsx` — Scanline backdrop + 카테고리 6종 링크
- `BlogCard.tsx` — 모노 카테고리·날짜·reading time

## 카테고리 6종 (lib/categories.ts)
- **market** — 시세·전망 (BTC·ETH·SOL·XRP 시세 분석·전망)
- **altcoin** — 알트코인 (신규·유망 알트코인·토크노믹스)
- **exchange** — 거래소 (Binance·Bybit·OKX·Upbit·Bithumb 비교)
- **news** — 코인뉴스 (SEC·FOMC·ETF·해킹·발표)
- **strategy** — 트레이딩전략 (RSI·MACD·DCA·리스크 관리)
- **defi** — DeFi·NFT (스테이킹·DEX·NFT·온체인)

## 파일 위치
- MDX 포스트: `content/posts/*.mdx` (slug 영문, `published: true` 필수)
- 카테고리: `lib/categories.ts`
- SEO 스키마: `lib/seo.ts` (Article + Organization)
- About 페이지: `app/about/page.tsx`

## MDX 작성 규칙
- 슬러그 영문 (kebab-case)
- frontmatter `published: true` 필수
- 본문 한글 ~2,500자+ (트래픽 매체 — 검색 의도 충족 + 가독성 우선)
- FAQ q/a 값 따옴표 감싸기 (YAML 에러 방지)
- 중괄호 `{}` 금지 (MDX 표현식 충돌)
- self-closing tag 금지
- author: "Coinday 편집팀"
- WebSearch로 시세·정책·릴리즈 일자 검증 필수 (코인은 변동성 큼)

## 법적 안전 (자본시장법·금융투자업법)
- "사세요" / "지금이 매수 타이밍" / "확실한 수익" 절대 금지
- 모든 글에 "매매 권유 아님 + 변동성·원금 손실 위험 + 본인 책임" 명시
- 모든 시뮬레이션·예시에 "가상·과거 데이터·미래 수익 보장 X" 명시

## 트래픽 전략
- **검색량 큰 단기 키워드** + 알트코인·뉴스·시세 위주
- 일일 5개+ 페이스 (사용자 결정에 따라 조정)
- 카테고리 6종 균등 분포 + 트렌딩 보강
- 내부 링크 2~3개 필수 (다른 Coinday 포스트로)
- AdSense 신청 — 콘텐츠 30개+ 누적 후

## 인프라 — 등록 필요한 것 (도메인 구매 후)
1. ⏳ **도메인 coindaynow.com** — 사용자 구매 진행 중 (CF에서 구매 권장)
2. ⏳ **CF Pages 프로젝트 생성** + 도메인 연결 (`~/.cf-token` 사용)
3. ⏳ **GitHub repo 생성** (Gallas111/coinday public)
4. ⏳ **GA4 신규 속성** → 측정 ID
5. ⏳ **GSC URL 접두어 등록** → verification 메타 태그
6. ⏳ **Naver 웹마스터** verification
7. ⏳ **AdSense 신청** — 글 30개+ 누적 후

## 개발 명령어

```bash
npm run dev    # 개발 서버 (Turbopack)
npm run build  # 프로덕션 빌드 (webpack, static export → out/)
npm run lint   # ESLint
```

## 배포 (자동)
main push → CF Pages 자체 빌드 환경에서 자동 처리. 수동 배포 불필요.
