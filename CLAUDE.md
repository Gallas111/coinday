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

## 한글 자수 룰 (필수, 2026-05-11 추가)

- **최소 자수**: 한글 2500자+ (이 블로그 정책 컷)
- **검증 명령** (포스팅·보강 후 보고 직전 필수):
  ```
  bash ~/scripts/check-post-length.sh coinday --today
  bash ~/scripts/check-post-length.sh coinday "<slug1,slug2,...>"
  bash ~/scripts/check-post-length.sh coinday --date YYYY-MM-DD
  ```
  exit 0 받을 때까지 보강 반복.
- ⚠️ **파일 KB ≠ 한글 자수**. KB는 영문·이모지·MDX 마크업 포함. KB로 보고 금지 (5/9·5/11 ai-blog/coinday/easy/baby/health KB 혼동 thin 누적 사고 학습)
- 사용자 보고 시 이 명령 출력값 그대로 사용

## 🔴🔴 집필 전 필수 — 교차 사이트 중복 게이트 (2026-08-01 신설)

coinday·tokennara·altnara 는 같은 운영자의 **hard 클러스터**다. 같은 쿼리를 두 도메인이 겨냥하면 서로를 잡아먹고, 같은 운영자 지문(네트워크로 보이는 것)이 된다.
기존 게이트(`check-duplicate-post.py`·`check-keyword-overlap.py`)는 **같은 사이트 안만** 보므로 이 유형을 구조적으로 못 잡는다.

```bash
export PATH="/c/Users/owner/AppData/Local/Programs/Python/Python312:$PATH"
python ~/scripts/check-crosssite-overlap.py coinday "<제목>" "<키워드1>" "<키워드2>"
```

- exit 0 = 작성 OK · exit 1 = 주의(각도 분리를 본문에 명시) · **exit 2 = 작성 금지, 다른 축으로 피벗**
- 🔑 **키워드를 2개 이상 넘겨라.** 제목만으로는 같은 의도를 못 잡는다.
- 🔑 키워드 후보는 상대 글의 `primary` 뿐 아니라 **secondary·longTail 까지** 읽고 골라라.
- 클러스터 전수 감사: `python ~/scripts/check-crosssite-overlap.py --audit coin`
- 🔴 **사이트 간 직접 링크 금지**(PBN 회피). 자매 사이트를 본문에 링크하거나 언급하지 마라.

**실제로 벌어진 일(2026-08-01)**: `keywords.primary` 로 실측하니 세 사이트에 완전중복 **11쌍**이 있었다. 22편이 같은 키워드로 경쟁해 28일 노출 36·클릭 0. 10편을 축 이동시키고 1편은 noindex 처리했다. 판정은 **쌍별 28일 노출 우위**로 했다(0-0 동률이면 먼저 쓴 쪽 유지).

## 🛡 발행 전·후 게이트 (2026-08-03 정리)

### 집필 전 — 중복 3종
```bash
export PATH="/c/Users/owner/AppData/Local/Programs/Python/Python312:$PATH"
python ~/scripts/check-duplicate-post.py coinday "<제목>"        # 제목 토큰 유사도
python ~/scripts/check-keyword-overlap.py coinday "<kw1>" "<kw2>" # 같은 사이트 키워드
python ~/scripts/check-crosssite-overlap.py coinday "<제목>" "<kw1>" "<kw2>"  # 사이트 간
```
exit 0 통과 · 1 주의(각도 분리 명시) · **2 작성 금지**.
🔑 **판정 문구를 눈으로 읽어라** — `| tail` 같은 파이프 뒤에서 `$?` 를 읽으면 파이프의 종료코드가 잡힌다.
🔑 **게이트만 믿지 마라.** 제목이 조금만 달라도 near-dup 을 통과시킨다. `ls content/*/` 와 `grep -ril "<핵심어>" content/` 로 실파일을 직접 대조하라.

### 발행 후 — 상시 감사 게이트 (매 회차 필수)
```bash
python ~/scripts/blog-audit.py            # 9레포 전수 · exit 0 통과 / 1 위반 / 2 검사불가
python ~/scripts/blog-audit.py coinday     # 이 레포만
python ~/scripts/blog-audit.py --fix-orphans   # 고아 이미지를 git rm 까지(커밋은 사람이)
python ~/scripts/blog-audit.py --canary        # 게이트 자체 자가검증
```
권위본은 `saju-blog/scripts/blog-audit.py`(버전관리됨). 검사 10종 = 고아 이미지 · 깨진 이미지 참조 · 라이브 픽셀중복 · 썸네일 누락 · U+FFFD · 사이트 내 자기잠식 · 플레이스홀더 · 초안 흔적 · og 크기 하드코딩 · 스팸 제목(경고).

- 🔴 **`exit 2`(NOT_CHECKED)는 통과가 아니다.** 분모가 0이면 "검사를 안 한 것"이다.
- 🔴 **게이트를 고쳤으면 `--canary` 를 반드시 다시 돌려라.** 2026-08-03 첫 실행에서 오탐 97건이 났고(경로 해석 누락·고정 자산·독자 안내문), 좁히는 과정에서 카나리가 회귀를 막았다.

## 🔴 하지 말 것 (전 블로그 공통)

- **초안 흔적·편집 메모를 발행하지 마라.** 2026-08-03 실사례: easy-zetec 글에 `잠깐 — 보수 외 소득 산정 시…` 자문자답 문단 2개와 `보건복지부 고시 제2025-XXX호` 플레이스홀더가, coinday·tokennara 글에 `(확인 필요)` 가 라이브에 노출돼 있었다. **사실을 못 정했으면 확정하거나 그 문장을 빼라. 미확정 상태로 발행하지 마라.**
- **글을 지우거나 슬러그를 바꿨으면 그 이미지도 같이 정리하라.** 안 하면 고아가 쌓인다(8/3 기준 9레포에 434장·22.9MB 누적돼 있었다). `blog-audit.py --fix-orphans` 로 정리한다.
- **같은 사이트 안에서 두 글이 같은 `keywords.primary` 를 겨냥하지 마라**(정규화 후 완전일치 기준). 이미 있으면 노출 우위 쪽이 키워드를 지키고 진 쪽은 **축을 옮기거나**(primary 를 실제 각도로 좁힘) **noindex** 한다. 8/3 에 6쌍을 이렇게 처리했다.
- **og:image 의 width/height 를 하드코딩하지 마라.** 실제 썸네일은 800x533~1792x1024 로 제각각이다. `image-dims.json` 실측값을 쓰고, 모르면 **틀린 값을 주장하는 대신 생략**한다. (사이트 고정 `og-image.png` 는 실측 1200x630 이라 그 선언은 정상)
- **제목 규칙**: 이모지 · `0원`·`공짜` · `칼퇴`·`야근` · `폭발`·`박멸`·`지옥`·`치트키` · `완벽 가이드/마스터` · `생산성 10배` 류 배수 과장 · `월 100만원` 류 금액 약속 금지. **월 표기**(`(8월 기준)`)도 금지 — 매달 낡는다. 연도 `2026` 은 관행상 허용하되 본문이 실제로 그 해 기준일 때만.
- 🔴 **제목은 SERP 의 약속이자 발행 게이트의 팩트체크 대상이다.** 본문에 없는 것을 제목이 약속하면 격리된다. 제목을 바꿀 땐 그 글을 가리키는 **내부링크 앵커**도 함께 고쳐라(`grep -rn "/blog/<slug>" content/`).
- **깨진 글자(U+FFFD)를 만들지 마라.** 생긴 시점에 그 자리 한글은 소실이라 어떤 도구로도 되돌릴 수 없다. 전수 점검 `bash ~/scripts/scan-encoding.sh coinday`.
- **판례 없는 법적 경고**(`처벌된다`·`위법`) 금지. 확인되는 범위(반려·지연·재요청)까지만 쓴다.

## 🖼 이미지 규칙

- 로컬 ComfyUI(flux1-dev)로 생성한다: `cd ~/ComfyUI && ./venv/Scripts/python.exe main.py --listen 127.0.0.1 --port 8188`
- 🔴 **alt 는 이미지를 만든 뒤에 실물을 열어 보고 써라.** 생성 전에 미리 쓰면 어긋난다(프롬프트가 "여러 가닥"이어도 실물은 한 가닥일 수 있다).
- 🔴 **alt 에 수량·"굵기가 다른"·"높이가 다르고" 같은 재보면 확인되는 시각 주장을 쓰지 마라.**
- 🔴 **부정어를 나열해도 안 먹는다.** `no beer` 를 넣으면 오히려 맥주가 나온다. **그 물건을 부를 어휘를 프롬프트에서 지우고 다른 피사체·앵글로 갈아라**(측면 유리잔 → 오버헤드 플랫레이).
- 🔴 **썸네일은 "무엇으로 읽히는가"를 먼저 봐라.** og:image 로 그대로 나가고 alt 로는 못 고친다. 8/3 실사례: AI 면접 글 썸네일이 홀로코스트 추모비로, 여름 오존 글이 빈 방+온수 라디에이터로, 학습지 판매 글이 계란 한 판으로 렌더됐다.
- 글자 표면 금지: 프롬프트 말미에 `, no text, no letters, no numbers, no signage, no screens, no charts` + **씬에서 글자가 붙을 표면 자체를 제거**.
- 신규 이미지는 기존 라이브러리와 **픽셀 유일**해야 한다(`gen-post-images-finalize.py` 가 64x64 해시로 전수 대조).

## 🔴🔴 집필 전 필수 — 교차 사이트 중복 게이트

coinday·tokennara·altnara 는 **hard 클러스터**다. 같은 쿼리를 두 도메인이 겨냥하면 서로를 잡아먹고, 같은 운영자 지문(네트워크로 보이는 것)이 된다.
기존 게이트(`check-duplicate-post.py`·`check-keyword-overlap.py`)는 **같은 사이트 안만** 보므로 이 유형을 구조적으로 못 잡는다.

```bash
export PATH="/c/Users/owner/AppData/Local/Programs/Python/Python312:$PATH"
python ~/scripts/check-crosssite-overlap.py coinday "<제목>" "<키워드1>" "<키워드2>"
```
- **exit 2 = 작성 금지**. 🔑 **키워드를 2개 이상 넘겨라**(제목만으로는 같은 의도를 못 잡는다).
- 🔑 상대 글의 `primary` 뿐 아니라 **secondary·longTail 까지** 읽고 후보 키워드를 골라라.
- 🔑 **고유 각도가 없으면 억지로 만들지 말고 skip 하라.** 없는 차별점을 지어내는 것이 중복보다 나쁘다.

**실제로 벌어진 일(2026-08-01)**: coinday 가 6월에 쓴 키워드를 tokennara 가 2~4주 뒤 그대로 다시 쓰는 패턴이 한 달간 반복돼 22편이 같은 키워드로 경쟁했다(28일 노출 36·클릭 0). 10편을 축 이동시키고 1편은 noindex 했다.

## 🔴 도메인 사실 (자주 틀리는 것)

- 실명확인 입출금계정 제휴은행(2026년 8월 초 기준): 업비트=케이뱅크 · **빗썸=KB국민**(2025-03 NH농협에서 전환) · 코인원=카카오뱅크 · 코빗=신한 · 고팍스=전북. 🔴제휴 계약 만료가 잇따라 예정돼 있어 바뀐다 — 기준 시점과 변동 가능성을 함께 적어라.
- 업비트 출금 제한은 **방향이 두 개**다. ①원화 첫 입금 → 72시간 디지털자산 출금 제한 ②디지털자산 첫 입금 → 72시간 **원화** 출금 지연 ③두 번째 원화 입금부터 건별 24시간 지연제. ①만 적으면 외부에서 코인 받아 파는 독자를 오도한다. 🔴빗썸은 "출금 지연 기간 중에도 원화 출금은 자유"라 방향이 반대다.
- 코인 상장폐지에는 주식의 **정리매매 제도가 없다.**
- 🔴 **상장 여부는 지어내지 말고 거래소 공개 시세 API 로 확인하라**(`api.upbit.com/v1/market/all`·`api.bithumb.com/v1/market/all`). 2026-08-03 실측에서 RNDR 은 티커가 **RENDER** 로 바뀌었고 FET 은 **빗썸만 상장**(업비트 미상장)이었다.
- 🔴 `/tools/kimp-calculator` 는 **실재하지 않는다**. `app/tools` 에는 `liquidation-calculator` 만 있다 — 내부링크는 실존 슬러그만.
