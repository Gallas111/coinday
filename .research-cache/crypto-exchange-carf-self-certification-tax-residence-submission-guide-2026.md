# 리서치 캐시 — CARF 본인확인서(해외 납세의무 정보) 제출 절차와 미제출 시 조치

- 슬러그: crypto-exchange-carf-self-certification-tax-residence-submission-guide-2026
- 작성일: 2026-08-06
- primary 키워드: CARF 본인확인서
- 수집 방법: WebSearch 예산 소진 세션. 전 항목을 curl 로 1차 출처를 직접 내려받아 확인함
  (law.go.kr 공개 API / 업비트 공지 API / 업비트 Zendesk 헬프센터 API / 고팍스 공지 API / OECD 원문 PDF)

---

## A. 법률 — 「국제조세조정에 관한 법률」

취득 경로: `https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=국제조세조정에 관한 법률`
→ 법령일련번호(MST) 280389, 시행 2026-01-02
→ `https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280389&type=XML` (367,030 bytes 수신)

확인된 사실 (모두 위 XML 원문 축자):

1. 제36조 제6항 각 호 외의 부분 전단 — "우리나라의 권한 있는 당국은 조세조약에 따라 체약상대국과 상호주의에 따른 정기적인 금융정보등(…)의 교환을 위하여 필요한 경우 (…) 금융거래회사등(…)의 장에게 요구할 수 있다." (조문 시행일자 20260101, 제목개정 2023.12.31)
   URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280389&type=XML

2. 제36조 제6항 제2호 — "암호화자산(거래를 인증하고 보호할 수 있도록 암호화되어 안전하게 된 분산원장 또는 이와 유사한 기술에 기초하여 자산의 가치를 디지털 방식으로 표현한 것으로서 대통령령으로 정하는 자산을 말한다)을 대상으로 하는 거래 중 대통령령으로 정하는 거래"
   → 소제목 위치: 제36조(조세정보 및 금융정보 등의 교환) 제6항 각 호
   URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280389&type=XML

3. 제36조 제8항 — "제6항에 따라 금융정보등을 제공하거나 제7항에 따라 금융정보등을 확인하려는 금융거래회사등의 장은 금융거래등 상대방에게 인적 사항 등의 확인을 위하여 필요한 자료의 제출을 요청할 수 있다."
   URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280389&type=XML

4. 제36조 제9항 (축자) — "금융거래회사등의 장은 제8항에 따라 자료 제출을 요청받은 금융거래등 상대방이 요청받은 자료를 제출하지 아니하여 제6항에 따른 금융정보등을 우리나라의 권한 있는 당국에 제공할 수 없거나 제7항에 따라 인적 사항 등을 확인할 수 없는 경우에는 해당 금융거래등 상대방의 계좌 개설을 거절할 수 있다."
   → 조문에 적힌 조치는 "계좌 개설을 거절할 수 있다" 하나다. 조문 자체에 이용자 과태료·처벌 규정은 없다.
   URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280389&type=XML

5. 제89조(금융정보의 제공 불이행 등에 대한 과태료) 제1항 — 과태료 3천만원 이하의 부과 대상은 제1호 "제36조제2항에 따른 실제소유자 정보의 제공을 요구받은 자"와 제2호 "제36조제3항ㆍ제4항에 따른 금융정보 또는 같은 조 제6항에 따른 금융정보등의 제공을 요구받은 금융회사등 또는 금융거래회사등"이다.
   → 즉 제36조 제8항의 자료(본인확인서) 미제출은 이 과태료 조항의 열거 대상이 아니다.
   URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280389&type=XML

6. 제38조 제1항 — 조세정보·금융정보등의 획득·교환·제공을 부당하게 방해하거나 지연시켜서는 아니 되는 자에 제2호 "제36조제7항에 따른 금융거래등 상대방"이 포함된다.
   URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280389&type=XML

---

## B. 시행령 — 「국제조세조정에 관한 법률 시행령」

취득 경로: MST 283629, 시행 2026-02-27
`https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283629&type=XML` (648,661 bytes 수신)

확인된 사실:

7. 제75조 제1항 제2호 — 법 제36조제6항제2호에 따른 거래에 관하여 제공하는 정보는 "암호화자산(…) 이용자의 성명, 주소, 조세목적상 거주관할권, 납세자번호, 암호화자산 거래 총액 및 그 밖에 이와 유사한 정보 또는 자료로서 재정경제부장관이 정하여 고시하는 정보 또는 자료"이다.
   URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283629&type=XML

8. 제75조 제2항 제14호 — "금융거래회사등"에 "암호화자산사업자(제4항에 따른 거래와 관련한 서비스를 제공하는 자로서 재정경제부장관이 정하여 고시하는 자를 말한다)"가 포함된다.
   URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283629&type=XML

9. 제75조 제9항 제1호 — 법 제36조제8항에 따라 개인에게 요청할 수 있는 인적 사항은 "성명, 주소, 체약상대국의 납세자번호(납세자번호가 없는 경우에는 생년월일을 말한다) 및 그 밖에 인적 사항의 확인을 위하여 조세조약에서 정하는 사항"이다.
   URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283629&type=XML

10. 제146조 제1항 — 법 제89조제1항 과태료 부과기준. 제1호 "요구한 금융정보등의 전부를 제공하지 않은 경우: 2천만원", 제1호의2 "거짓으로 제공한 경우: 1계좌당 30만원(2천만원을 한도로 한다)", 제2호 "일부를 제공하지 않은 경우: 1계좌당 10만원(1천만원을 한도로 한다)".
    → 이 금액의 부과 대상은 금융거래회사등(거래소)이다. 이용자 개인이 아니다.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283629&type=XML

11. 제76조(정보교환 세부사항 등) — 인적 사항의 확인 등에 필요한 사항은 재정경제부장관이 고시로 정하며, 제정·개정 시 금융위원회 위원장 및 국세청장과 미리 협의해야 한다.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283629&type=XML

---

## C. 고시 — 「정보교환협정에 따른 암호화자산정보자동교환 이행규정」 (CARF 이행규정)

취득 경로: `https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=admrul&type=XML&query=암호화자산정보자동교환`
→ 행정규칙일련번호 2100000273080
`https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML` (114,423 bytes 수신, 조문 68개)

서지: 재정경제부 고시 제2026-46호. 발령일자 2026-01-02, 시행일자 2026-01-02.

확인된 사실:

12. 제1조(목적) — 이행 대상 조약은 제1호 「조세행정공조협약」, 제2호 「다자간 암호화자산정보자동교환 협정」이다. 법 제36조와 영 제76조에서 위임한 사항을 규정한다.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

13. 제2조 제1항 (축자) — "이 고시는 정보교환협정과 「OECD 암호화자산 자동정보교환체계(Crypto Asset Reporting Framework)」(이하 "CARF"라 한다)에 부합하도록 해석하여야 하며…"
    → 소제목 위치: 제1편 총칙 > 제1장 통칙 > 제2조(해석 및 적용)
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

14. 제31조(본인확인서) 정의 — "보고의무 암호화자산사업자가 암호화자산이용자 또는 실질적지배자(…)로부터 의무이행을 위해 필요한 사항에 대하여 서명(「전자서명법」 제2조제2호에 따른 전자서명을 포함한다)ㆍ기명날인ㆍ녹취ㆍ전자우편ㆍ우편 등을 통해 확인을 받은 것". 본인확인서에는 별표 1 또는 별표 2의 항목이 포함되어야 한다.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

15. 제42조 제2항 — 개인 암호화자산이용자로부터 본인확인서등을 수취해야 하는 시점.
    제1호 "2026년 1월 1일 현재 기존 개인 암호화자산이용자의 경우: 2026년 12월 31일"
    제2호 "개인 암호화자산이용자와 신규로 거래관계를 수립하는 경우: 암호화자산 계좌 또는 주소를 개설하는 때"
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

16. 제42조 제3항 제1호 — 개인이 제출하는 본인확인서에 포함되어야 하는 항목: "암호화자산이용자등의 성명, 거주지 주소, 세법상 거주관할권, 모든 보고대상관할권에서의 납세자번호, 생년월일, 출생지". 제2호 서명 또는 명시적 확인, 제3호 작성일자가 수취일보다 늦지 않을 것.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

17. 제42조 제4항·제5항 — 거주관할권이 납세자번호를 발급하지 않거나 그 국내법이 수집을 요구하지 않으면 납세자번호를 기재하지 않을 수 있고, 출생지 수집을 요구하지 않으면 출생지를 기재하지 않을 수 있다.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

18. 제42조 제6항 (축자) — "보고의무 암호화자산사업자가 기존 개인 암호화자산이용자로부터 본인확인서등을 제출받기 위하여 합리적인 노력을 하였으나 제2항제1호에서 정한 시점까지 수취하지 못한 경우에는 제33조제2항제8호 또는 제9호의 정보에 근거하여 해당 암호화자산이용자의 거주관할권을 식별하여야 한다. 이 경우 보고의무 암호화자산사업자가 식별한 거주관할권을 해당 암호화자산이용자의 거주관할권으로 본다."
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

19. 제33조 제2항 제8호·제9호 — 위 제42조 제6항이 가리키는 정보. 제8호 "법령 준수 또는 고객관계 목적으로 보고의무 암호화자산사업자가 관리하는 정보(자금세탁방지 및 고객확인 절차에 따라 수취한 자료를 포함한다)", 제9호 "그 밖의 보고의무 암호화자산사업자가 계좌 개설 시 수취하는 정보 또는 이미 보유하거나 공개적으로 이용 가능한 정보".
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

20. 제38조(의무이행방해자 신고) 제1항 — 의무이행방해자로 보는 다섯 가지: 제1호 제출 거부, 제2호 제출 지연, 제3호 허위 작성 제출, 제4호 정보 변경 미통보, 제5호 그 밖의 방해 행위.
    제2항 — "구체적인 이유와 방해 경위 등을 제50조에 따른 보고기한 이내에 국세청장에게 신고하여야 한다."
    제3항 — "본인확인서 또는 증빙자료를 요청하면서 의무이행방해자에 해당되는 경우에는 제2항에 따라 국세청장에게 신고될 수 있다는 사실을 고지하여야 한다."
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

21. 제41조 제8항 — 정보가 변경되는 경우 또는 사업자가 제출을 요청한 경우, "그 사유가 발생한 날부터 90일 이내에 본인확인서를 다시 제출할 의무가 있음을 고지하여야 한다."
    제41조 제9항 — 수취한 본인확인서등은 정보수집기준연도 종료일부터 6년간 보관.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

22. 제44조 제2항 (축자) — "암호화자산이용자등이 제출한 본인확인서가 합리적이지 않은 것으로 판단되는 경우 보고의무 암호화자산사업자는 해당 암호화자산이용자등에게 보고대상거래를 체결하는 서비스를 제공하기 전에 정정된 본인확인서 또는 기존 본인확인서의 합리성을 뒷받침하는 자료를 수취하여야 한다."
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

23. 제45조 제4항·제5항 — 사정변경이 생기면 기존 본인확인서는 유효하지 않게 되고, "사정변경으로 본인확인서가 유효하지 아니하게 된 날부터 90일이 경과한 날"까지 새 본인확인서나 유효성 뒷받침 자료를 내지 않으면 "기존 본인확인서에 기재된 거주관할권과 사정변경으로 인하여 새롭게 추정되는 거주관할권 모두를 해당 암호화자산이용자등의 거주관할권으로 본다."
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

24. 제46조 — 경미한 오류는 보유 증빙서류로 사업자가 직권 보정할 수 있고, 보정된 본인확인서는 유효한 것으로 볼 수 있다.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

25. 제6조 — 보고대상거래는 제1호 교환거래, 제2호 정보등제공대상 암호화자산의 이전이다. 제4항 "보고대상 소매지급거래"는 "그 가치가 미화 5만달러를 초과하는 상품이나 서비스에 대한 대가로 정보등제공대상 암호화자산을 이전하는 것"이다.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

26. 제5조 제1항 — 정보등제공대상 암호화자산에서 제외되는 것은 제1호 중앙은행 디지털화폐, 제2호 특정전자화폐상품, 제3호 "보고의무 암호화자산사업자가 지급수단 또는 투자목적으로 사용할 수 없다고 적절하게 판단한 암호화자산"이며, 단서로 "암호화자산이 지급수단 또는 투자목적으로 사용될 수 있는지 여부가 불확실한 경우 해당 암호화자산은 정보등제공대상 암호화자산으로 본다."
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

27. 제47조 제1항 — 보고 항목. 제1호 가목 "보고대상이용자: 성명 또는 단체명, 주소, 세법상 거주관할권, 납세자번호(TIN), 출생일 및 출생지(단체인 경우는 제외한다)". 제3호는 암호화자산 종류별로 취득·처분 법정통화 총액, 총 단위 수, 보고대상거래 건수 등을 요구한다. 제7항 — 보고대상거래가 없는 경우에도 없음을 보고해야 한다.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

28. 제50조 제3항 — "보고의무 암호화자산사업자는 국세청장이 보고기간을 달리 정하지 않는 한 정보수집기준연도의 다음 연도 4월 1일부터 4월 30일까지의 기간 이내에 보고대상정보를 국세청장에게 보고하여야 한다."
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

29. 제40조 제2항 — 「특정 금융거래정보의 보고 및 이용 등에 관한 법률 시행령」 제10조의20제3호에 따라 거래가 제한된 암호화자산이용자에 대해서는 실사·보고 의무를 이행하지 아니할 수 있다.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

### C-2. 고시 별표 (같은 XML 안의 별표단위 + 별표 서식 파일 직접 내려받음)

30. 별표 1 「본인확인서(개인용) 의무 포함사항」 — 기재란은 여덟 개다. ① 성 ② 명 ③ 현재 거주 주소 ④ 거주관할권 ⑤ 전화번호 ⑥ 납세자번호 ⑦ 생년월일 ⑧ 출생지. 하단에 작성자 서명란과 서명일란이 있다.
    서식 파일: https://www.law.go.kr/LSW/flDownload.do?flSeq=161012033 (PDF, 48,243 bytes 수신)

31. 별표 1 작성방법 제1호 (축자) — "모든 정보는 영어로 작성하여야 합니다. 다만, 대한민국이 유일한 거주관할권임을 확인하기 위한 본인확인서의 경우 한글로 작성할 수 있습니다."
    제2호 — "모든 정보는 정보수집기준연도 12월 31일을 기준(계좌를 신규 개설하는 경우 개설 시점 기준)으로 작성하여야 합니다."
    제6호 — "⑤번란: 사용 중인 전화번호가 여러 개인 경우 모두 기입하여야 하고, 국가번호를 반드시 기입하여야 합니다."
    제7호 — 복수 거주관할권이면 각 거주관할권의 납세자번호를 모두 기입. 미기재 사유는 (A) 거주관할권이 납세자번호를 발급하지 않은 경우, (B) 거주관할권의 국내법이 납세자번호 수집을 요구하지 않은 경우 중 해당란에 체크.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

32. 별표 1 유의사항 제1호 (축자) — "본인확인서는 이행규정에서 특별히 허용하지 않는 한 위 정보가 모두 기입되어야 유효합니다."
    유의사항 제2호 — "본인확인서 제출을 부당하게 거부ㆍ지연하는 행위, 허위 정보를 기입하는 행위 등은 보고의무 암호화자산사업자의 실사의무와 보고의무를 방해하는 것입니다. 그러한 의무이행 방해 행위는 이행규정 제38조에 따라 보고의무 암호화자산사업자에 의해 국세청에 신고됩니다."
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273080&type=XML

33. 별표 3 「참여관할권」과 별표 4 「보고대상관할권 및 보고대상관할권 지정연도」는 2026년 8월 6일 현재 국가법령정보센터가 제공하는 고시 원문과 별표 서식 PDF 어디에도 국가명이 채워져 있지 않다. 별표 4 PDF에서 추출되는 문자열은 "[별표 4] 보고대상관할권 및 보고대상관할권 지정연도 (국가명) (xxxx년)"이 전부이고, 별표 3 PDF는 "[별표 3] 참여관할권 (국가명)"이 전부다. 표의 나머지 칸은 비어 있다.
    별표 3 PDF: https://www.law.go.kr/LSW/flDownload.do?flSeq=161012047 (119,716 bytes 수신, 1페이지)
    별표 4 PDF: https://www.law.go.kr/LSW/flDownload.do?flSeq=161012053 (95,792 bytes 수신, 1페이지)

---

## D. 「정보교환협정에 따른 금융정보자동교환 이행규정」 (CRS 쪽 고시, 대조용)

취득 경로: 행정규칙일련번호 2100000273078
`https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273078&type=XML` (176,662 bytes 수신)
서지: 재정경제부 고시 제2026-45호, 발령·시행 2026-01-02.

34. 제2조 제3항 — "이 고시에서 정하지 않은 암호화자산과 관련된 사항에 대하여는 「정보교환협정에 따른 암호화자산정보자동교환 이행규정」(…)에서 정한 바에 따른다."
    → 은행·증권 쪽 CRS 고시와 암호화자산 쪽 CARF 고시가 서로 다른 별개 고시로 나뉘어 있다는 근거.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273078&type=XML

35. 제52조 제8항 — CRS 쪽 고시는 본인확인서·증빙자료 제출 기한을 "해당한 날부터 60일 이내"로 고지하도록 한다.
    → CARF 고시 제41조 제8항의 90일과 숫자가 다르다.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273078&type=XML

36. 제80조 제1항 제1호 바목 — CRS 쪽 보고 항목에는 "각 계좌보유자(개인)가 유효한 본인확인서를 제공하였는지 여부"가 들어간다.
    URL: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000273078&type=XML

---

## E. 업비트 공지 (공지 API 로 직접 수신)

취득 경로: `https://api-manager.upbit.com/api/v1/announcements?os=web&page=<n>&per_page=30&category=all`
30페이지(2022-08-25 까지 900건) 를 훑어 제목에 CARF·본인확인서·납세·거주 등이 들어간 건을 뽑음. 해당 건은 두 건이었다.
본문 수신: `https://api-manager.upbit.com/api/v1/announcements/5879?os=web`

서지: 공지 id 5879, 제목 "CARF 이행규정에 따른 본인확인서 제출 절차 도입 안내 (01/01 시행 예정, 추가 안내)", first_listed_at 2025-12-23T18:58:32+09:00, 본문 상단 표기 "업데이트 일자 : 2025-12-24 20:17"

37. (축자) "업비트는 「국제조세조정에 관한 법률」 제36조 및 「정보교환협정에 따른 암호화자산정보자동교환 이행규정」("CARF 이행규정")에 따라 회원님의 해외 납세의무 관련 정보를 확인하는 본인확인서 제출 절차를 도입합니다."
    URL: https://api-manager.upbit.com/api/v1/announcements/5879?os=web

38. 적용 일정 항목 — "시행 일자 : 2026-01-01(목)". 각주로 "2025-12-23(화)부터는 일부 고객확인 재이행 대상자에 한해 정보 제출을 요청드릴 수 있습니다."
    URL: https://api-manager.upbit.com/api/v1/announcements/5879?os=web

39. 주요 변경사항 표 (소제목 "주요 변경사항" 아래) — 두 행이다.
    "2026년 1월 1일 이후 가입하는 신규 회원 / 고객확인 절차 완료 시 즉시 제출 / 고객확인 및 본인확인서 제출 완료 후 서비스 이용가능"
    "2025년 12월 31일까지 가입한 기존 회원 / 2026년 12월 31일까지 / 서비스 이용에 영향 없음"
    URL: https://api-manager.upbit.com/api/v1/announcements/5879?os=web

40. 제출 경로 (축자) — "경로 : 모바일 앱 [더보기] > [회원정보] > [기타정보] > [해외 납세의무 정보]"
    URL: https://api-manager.upbit.com/api/v1/announcements/5879?os=web

41. 소제목 "① 해외에 납세 의무가 있는 경우" 아래 제출 항목 — 납세 국가, 납세자번호(TIN), 납세자번호 증빙 서류, 해외 거주지 주소. 그리고 "내국인·외국인 모두" 해당 납세 국가별로 제출해야 한다고 적혀 있다.
    URL: https://api-manager.upbit.com/api/v1/announcements/5879?os=web

42. 소제목 "② 해외 납세 의무가 없는 경우" 아래 표 — 내국인은 추가 서류 "불필요", 외국인은 "조건부 필요"이며 그 조건은 "고객확인 단계에서 외국국적동포 국내거소신고증 제출한 경우에 한해, 183일 이상 국내 거주 여부 확인이 가능한 추가 서류(출입국관리기록 등) 제출 필요"다.
    URL: https://api-manager.upbit.com/api/v1/announcements/5879?os=web

43. 소제목 "유의사항" 아래 (축자) — "제출한 정보에 변경이 발생한 경우, 변경일로부터 90일 이내에 수정 제출해야 합니다."
    URL: https://api-manager.upbit.com/api/v1/announcements/5879?os=web

44. 소제목 "유의사항" 아래 (축자) — "관련 자료를 제출하지 않거나 지연·허위 제출 시, 서비스 이용이 제한되거나 국세청에 의무이행 방해자로 신고될 수 있습니다."
    URL: https://api-manager.upbit.com/api/v1/announcements/5879?os=web

45. 소제목 "유의사항" 아래 (축자) — "2026년 1월 1일 이후 가입한 회원 중 해외 납세의무 정보를 제출하지 않은 경우, 리딤코드·바우처·에어드랍 경품 수령을 포함한 모든 보상 제공이 제한됩니다."
    URL: https://api-manager.upbit.com/api/v1/announcements/5879?os=web

46. 같은 공지의 앱 버전 요건 — "안드로이드의 경우 모바일 앱 1.34.23 버전 이상, iOS의 경우 모바일 앱 1.33.17 버전 이상"
    URL: https://api-manager.upbit.com/api/v1/announcements/5879?os=web

47. 추가 안내 부분 Q&A (축자) — "국내(한국)에만 납세의무가 있는 대부분의 회원님께서는 해외 납세 의무가 없기 때문에 보고 대상에 포함되지 않습니다."
    URL: https://api-manager.upbit.com/api/v1/announcements/5879?os=web

48. 추가 안내 부분 (축자) — "업비트는 회원님이 제출하신 본인확인서를 바탕으로 보고대상이용자(해외 납세 의무가 있는 경우)를 식별하여, 2027년부터 보고대상이용자의 이용자정보와 거래정보를 보고하게 됩니다"
    URL: https://api-manager.upbit.com/api/v1/announcements/5879?os=web

49. 추가 안내 부분 (축자) — "CARF 이행 관할권은 2025.12.4. 기준 총 76개 국가/지역입니다" 라고 적고 OECD 문서 링크를 달았다. 이어 76곳의 이름을 한 줄로 나열했고, 그 나열은 최초 교환 연도로 나뉘어 있지 않다.
    URL: https://api-manager.upbit.com/api/v1/announcements/5879?os=web

---

## F. 업비트 고객센터 (Zendesk 헬프센터 API 로 직접 수신)

취득 경로:
- 섹션 목록: `https://support.upbit.com/api/v2/help_center/ko/sections/53469159059353/articles.json?per_page=100` → count 9
- 가이드 문서: `https://support.upbit.com/api/v2/help_center/ko/articles/53461518954265.json`

50. 가이드 「CARF 본인확인서(해외 납세의무 정보) 제출 가이드」 (축자) — "「정보교환협정에 따른 암호화자산정보자동교환 이행규정」에 따라 CARF 본인확인서 제출은 2026년 1월 1일부터 정식 시행되었습니다."
    URL: https://support.upbit.com/hc/ko/articles/53461518954265

51. 같은 가이드 소제목 "6. 납세의무 정보를 제출해야 거래가 가능한가요?" 아래 (축자) — "2026년 1월 1일 이후 가입하신 회원님은 거래를 시작하기 전에 본인확인서를 먼저 제출해야 해요." / "2025년 12월 31일까지 가입하신 회원님은 본인확인서 제출 여부와 관계없이 바로 거래가 가능해요."
    URL: https://support.upbit.com/hc/ko/articles/53461518954265

52. 같은 가이드 소제목 "4. 본인확인서(해외 납세의무 정보)는 한 번만 제출하면 되나요?" 아래 (축자) — "업비트가 본인확인서나 추가 증빙 자료 제출을 요청한 경우, 요청받은 날로부터 90일 이내에 자료를 다시 제출해야 해요." 그리고 "2026년 1월 1일 이전에 제출된 자료는 검증을 위해 추가 제출을 요청드릴 수 있어요."
    URL: https://support.upbit.com/hc/ko/articles/53461518954265

53. 같은 가이드 소제목 "2. 해외에 납세 의무가 있으면 어떤 정보를 제출해야 하나요?" 아래 — 해외 거주지 주소는 영문 주소로 입력하고, "납세 의무는 있지만 실제로 거주하지 않는 경우에는 "거주하지 않아요" 옵션을 선택하시면 돼요."
    URL: https://support.upbit.com/hc/ko/articles/53461518954265

54. 같은 가이드 소제목 "3. 해외에 납세 의무가 없는 경우 어떤 정보를 제출해야 하나요?" 아래 — 추가 서류의 개인식별번호(주민등록번호, 여권번호)는 마스킹하여 제출해야 하고, "마스킹하지 않을 경우 추가 자료 제출을 요청할 수 있어요."
    URL: https://support.upbit.com/hc/ko/articles/53461518954265

55. FAQ 「본인확인서(해외 납세의무 정보)를 제출하지 않을 경우 어떤 불이익이 있나요?」 (축자 전문) — "본인확인서를 제출하지 않을 경우 「국제조세조정에 관한 법률」 제36조 제9항에 따라 거래가 제한될 수 있습니다. 또한 본인확인서 또는 증빙자료 제출을 거부ㆍ지연하거나, 허위로 작성하여 제출하는 등 사유 발생 시 「정보교환협정에 따른 암호화자산정보자동교환 이행규정」 제38조에 따라 의무이행방해자로 국세청에 신고될 수 있습니다."
    URL: https://support.upbit.com/hc/ko/articles/53575198535449

56. FAQ 「본인확인서(해외 납세의무 정보) 재제출을 요청받았습니다. 왜 그런가요?」 — 업비트는 이행규정 제44조 제2항, 제45조 제3항에 따라 두 경우에 유효한 본인확인서 등을 요청한다고 적었다. 하나는 "기존에 제출한 본인확인서가 당사에서 보유한 정보를 바탕으로 합리적이지 않다고 판단되는 경우", 다른 하나는 "회원의 상황이 변경되어 기존의 본인확인서가 부정확하거나 신뢰할 수 없게 된 것을 알게되거나 이를 확인할 필요성이 생긴 경우"다.
    URL: https://support.upbit.com/hc/ko/articles/53580693156377

57. FAQ 「본인확인서의 납세자번호는 무엇을 의미하는건가요?」 (축자) — "우리나라의 경우 개인은 주민등록번호, 단체·법인은 사업자등록번호가 납세자번호와 동일한 기능을 수행하며…"
    URL: https://support.upbit.com/hc/ko/articles/53580848525721

58. FAQ 「(개인) 본인확인서의 증빙자료는 무엇을 의미하는건가요?」 — 세법상 거주지가 국내인 경우의 예시로 "국세청이 발급한 거주자 증명서, 주민등록증(재외국민용 제외), 외국인등록증, 운전면허증, 영주증 등"을 든다. 그리고 "고객확인(KYC) 절차시 주민등록증, 외국인등록증, 운전면허증, 영주증을 제출하셨다면 국내 거주자 증명을 위해 추가 증빙자료 제출이 불필요하나, 국내거소신고증을 제출하셨다면 해당 거소에서 183일 이상 거주했음을 입증하는 출입국관리기록 또는 국세청에서 발급한 당해년도 거주자 증명서 등을 반드시 제출하셔야 합니다."
    URL: https://support.upbit.com/hc/ko/articles/53580898003353

59. FAQ 「CARF를 통해 우리나라에서 가상자산 거래 관련 과세가 시작되는 걸까요?」 (축자) — "아닙니다. CARF와 우리나라의 가상자산 과세와는 직접적인 관련이 없습니다. CARF는 암호화자산 보고체계 다자간 정보교환협정(CARF MCAA)에 의해 국제사회에서 조세와 관련된 정보를 매년 자동으로 교환하는 제도일 뿐, CARF에 의해 국내에서 새로 가상자산 거래에 대한 세금을 부과한다는 의미는 아닙니다."
    URL: https://support.upbit.com/hc/ko/articles/53580760369177

60. FAQ 「(개인) 세법상 거주지 국가 관련 변경사항이 생겼어요. 어떻게 해야하나요?」 — 이행규정 제41조 제8항을 근거로 들며 "변경된 날부터 90일 이내에 본인확인서를 다시 제출하여야 합니다."
    URL: https://support.upbit.com/hc/ko/articles/53580948906521

---

## G. 고팍스 공지 (공지 API 로 직접 수신)

취득 경로: `https://api.gopax.co.kr/notices?page=<n>` 8페이지(160건) 수신 후 본문에 CARF·본인확인서가 든 건을 뽑음(2건).

61. 공지 id 2389 「[공지] 해외 납세의무 정보 확인 절차 시행 안내 (CARF)」, createdAt 2026-04-07T01:31:45.000Z.
    소제목 "■ 시행  일자" 아래 (축자) — "2026년 4월 7일 10시"
    소제목 "■ 시행 대상 및 방식" 아래 (축자) — "고팍스 신규 회원가입 또는 고객확인 재이행 단계에 한하여 우선 적용됩니다." 그리고 "※ 기존 회원 대상 별도 제출 페이지는 추후 오픈될 예정입니다."
    URL: https://www.gopax.co.kr/notice/2389

62. 같은 공지 소제목 "■ 이용 안내" 아래 (축자) — "일반적인 경우 기존과 동일하게 서비스 이용이 가능하며, 추가 확인이 필요한 경우에 한하여 별도 절차가 진행됩니다."
    URL: https://www.gopax.co.kr/notice/2389

63. 공지 id 2373 「[공지] 고팍스 개인정보 처리방침 업데이트 안내 (26.3.24.)」 — 변경 일자 2026년 3월 31일, 변경 사유로 "「국제조세조정에 관한 법률」 및 관련 이행규정(CARF) 준수를 위한 암호화자산 거래 정보 수집 및 보고 의무가 반영됩니다"를 들었다.
    URL: https://www.gopax.co.kr/notice/2373

---

## H. OECD 원문 (업비트 공지가 링크한 그 문서를 직접 내려받음)

취득 경로: `curl -A "<브라우저 UA>" -o oecd_carf.pdf https://www.oecd.org/content/dam/oecd/en/networks/global-forum-tax-transparency/commitments-carf.pdf`
(HTTP 200, 316,803 bytes, 1페이지)

64. 문서 제목 — "Jurisdictions committed to implement the Crypto-Asset Reporting Framework (CARF) in time to commence exchanges in 2027, 2028 or 2029 as part of the Global Forum's CARF commitment process". 문서에 적힌 갱신일은 "Last update: 23 June 2026"이다.
    URL: https://www.oecd.org/content/dam/oecd/en/networks/global-forum-tax-transparency/commitments-carf.pdf

65. 같은 문서 소제목 "Jurisdictions undertaking first exchanges by 2027 (46)" 아래 명단에 Korea 가 들어 있다. 명단은 Austria 로 시작해 United Kingdom 으로 끝나는 46곳이다.
    URL: https://www.oecd.org/content/dam/oecd/en/networks/global-forum-tax-transparency/commitments-carf.pdf

66. 같은 문서 소제목 "Jurisdictions undertaking first exchanges by 2028 (29)" 아래 29곳, 소제목 "Jurisdictions undertaking first exchanges by 2029 (1)" 아래에는 "United States." 한 곳뿐이다.
    → 46 + 29 + 1 = 76. 업비트 공지가 2025.12.4. 기준으로 적은 76개라는 숫자와 총합은 같지만, 이 문서는 최초 교환 연도로 세 무리를 갈라 놓았다.
    URL: https://www.oecd.org/content/dam/oecd/en/networks/global-forum-tax-transparency/commitments-carf.pdf

67. 같은 문서 소제목 "Jurisdictions identified by the Global Forum as relevant to the CARF that have not yet committed to implement the CARF (5)" 아래 — "Argentina, El Salvador, Georgia, India, Viet Nam."
    URL: https://www.oecd.org/content/dam/oecd/en/networks/global-forum-tax-transparency/commitments-carf.pdf

---

## I. 열지 못한 것 (검증관 재시도용)

- 빗썸 공지 전수 목록. `https://feed-api.bithumb.com/v1/notices` 는 200 을 주지만 page·count·offset·limit·size·per_page 를 모두 무시하고 항상 최신 5건만 돌려준다. `https://gw.bithumb.com/exchange/v1/comm/notice` 는 로그인 요구(member.fail.00012), `https://feed.bithumb.com/api/notices` 는 403, `https://support.bithumb.com/api/v2/help_center/...` 와 `https://bithumb.zendesk.com/api/v2/help_center/...` 는 404. `https://feed.bithumb.com/notice` HTML 에는 CARF·납세 문자열이 없다(목록이 클라이언트 렌더). → 빗썸의 CARF 대응 여부는 이 글에서 확인하지 못했다.
- 코인원 공지 목록 API. `https://coinone.co.kr/api/board/notice/`·`https://coinone.co.kr/api/v1/notice/` 는 SPA 셸 HTML 만 돌려주고, `https://api.coinone.co.kr/notice/`·`https://api.coinone.co.kr/board/notice/` 는 404, `https://gw.coinone.co.kr/...` 는 연결 실패. → 코인원의 CARF 대응 여부도 확인하지 못했다.
- 코빗 헬프센터. `https://korbit.zendesk.com/api/v2/help_center/ko/articles/search.json?query=CARF` 404.
- 재정경제부 보도자료 검색. `https://www.moef.go.kr/nw/nes/nesdta.do?...&searchKeyword=암호화자산` 는 200 이지만 목록이 JS 렌더라 결과 앵커가 잡히지 않았다(암호화자산 2회는 페이지 상시 문구). 고시 원문 자체는 국가법령정보센터에서 확보했으므로 본문 근거에는 영향 없음.
- 국세청 게시판. `https://www.nts.go.kr/nts/na/ntt/selectNttList.do?mi=2224&bbsId=1018` 는 200 이지만 본문 217바이트짜리 껍데기만 온다.
