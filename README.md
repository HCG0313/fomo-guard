# FOMO Guard

> 포트폴리오가 최근 시장 분위기에 끌려 만들어진 것인지 점검하는 FOMO 리스크 진단 대시보드

FOMO Guard는 특정 종목을 추천하거나 매수, 매도 판단을 대신하는 서비스가 아닙니다. 사용자의 포트폴리오를 입력받아 최근 급등 자산 편입, 성과 추종, 섹터 쏠림 같은 행동 기반 리스크를 규칙 기반으로 진단하고, 사용자가 스스로 투자 이유를 점검할 수 있도록 돕는 해커톤 프로젝트입니다.

## 바로 보기

- Live Demo: https://fomo-guard.netlify.app/
- Website Source: `fomo-guard-site/`
- 파트 예측 개발 일지: [PART_PREDICTION.md](PART_PREDICTION.md)

## 프로젝트 한 줄 요약

투자자는 수익률이 좋은 자산을 보면 늦게라도 따라 사고 싶은 마음이 생깁니다. FOMO Guard는 그 순간의 감정이 실제 포트폴리오 구조에 얼마나 반영되었는지를 데이터로 보여주는 점검 도구입니다.

## 왜 만들었나

처음에는 단순한 투자 대시보드를 만들 수도 있었습니다. 자산별 수익률, 평가금액, 비중을 보여주는 화면은 비교적 쉽게 만들 수 있습니다. 하지만 그런 화면은 사용자가 이미 알고 있는 숫자를 다시 보여주는 데 그칠 가능성이 컸습니다.

우리가 집중한 문제는 조금 달랐습니다.

- 최근 크게 오른 종목을 뒤늦게 산 것은 아닌가?
- 수익률이 좋았던 자산에만 비중이 커진 것은 아닌가?
- 특정 섹터가 전체 포트폴리오를 사실상 지배하고 있지는 않은가?
- 이 상태를 종목 추천 없이, 사용자가 스스로 점검할 수 있는 언어로 설명할 수 있을까?

그래서 FOMO Guard는 “무엇을 사야 하는가”가 아니라 “지금 내 포트폴리오가 어떤 흐름으로 만들어졌는가”를 묻는 서비스로 방향을 잡았습니다.

## 개발 과정의 일대기

### 1. 아이디어 단계: 수익률보다 행동을 읽기로 했다

초기 아이디어는 포트폴리오를 업로드하면 자산 비중과 수익률을 보여주는 웹 대시보드였습니다. 하지만 그런 방식만으로는 FOMO를 설명하기 어려웠습니다. 예를 들어 같은 30% 비중이라도 오래 보유한 자산인지, 최근 급등 후 편입한 자산인지에 따라 의미가 완전히 달라집니다.

그래서 분석 기준을 단순 수익률에서 행동 흐름으로 옮겼습니다. 매수일, 최근 7일 수익률, 최근 30일 수익률, 변동성, 비중 변화율을 함께 보고 “최근 시장 흐름을 따라간 흔적”을 찾는 방식으로 설계를 바꿨습니다.

### 2. 규칙 문서화: 판단 기준을 먼저 고정했다

진단 결과가 그럴듯한 문장만으로 보이면 신뢰하기 어렵습니다. 그래서 웹앱을 만들기 전에 분석 규칙과 출력 기준을 문서로 나누어 정리했습니다.

- 포트폴리오 분석 규칙
- 대시보드 시각화 규칙
- 인사이트 및 가드레일 규칙
- 입력 데이터 및 샘플 명세
- 웹앱 흐름 및 출력 구조

이 과정에서 FOMO 진단 상태를 세 가지로 구분했습니다.

- `timeline_based`: 시간 정보가 충분해 정밀 진단이 가능한 상태
- `snapshot_estimated`: 시간 정보가 부족해 현재 구조 기반으로 추정하는 상태
- `insufficient_data`: 기본 필수 데이터가 부족해 분석할 수 없는 상태

이 구분 덕분에 데이터가 부족할 때도 무리하게 확정적인 판단을 하지 않도록 만들 수 있었습니다.

### 3. 입력 데이터 문제: API 없이도 바로 체험 가능해야 했다

해커톤 제출물은 심사자가 바로 열어보고 이해할 수 있어야 했습니다. 외부 금융 API를 연결하면 더 실제 서비스처럼 보일 수 있지만, API 키, 네트워크 상태, 인증 문제 때문에 데모가 불안정해질 수 있었습니다.

그래서 정적 웹앱 구조를 선택했습니다.

- 기본 샘플 포트폴리오 제공
- 사용자의 CSV 업로드 지원
- 브라우저 안에서 CSV 파싱과 분석 처리
- 별도 서버나 로그인 없이 Netlify에서 바로 실행

이 선택은 기능 범위를 줄인 대신, 제출 환경에서 실패할 가능성을 낮춰주었습니다.

### 4. UI 구성: 숫자보다 진단 메시지를 먼저 보여주기

일반 금융 대시보드는 수익률과 평가금액을 앞세웁니다. 하지만 이 프로젝트의 핵심은 “얼마나 벌었는가”보다 “어떤 판단 흐름이 포트폴리오에 반영되었는가”였습니다.

그래서 화면 구조를 다음 순서로 구성했습니다.

1. 종합 FOMO 점수와 위험도
2. 후행 편입, 성과 추종, 섹터 집중 진단
3. 자산 및 섹터 비중 차트
4. 기준 포트폴리오 대비 비교 분석
5. 투자 추천이 아닌 점검형 행동 가이드

사용자가 첫 화면에서 바로 프로젝트의 목적을 이해할 수 있도록, 샘플 분석 버튼과 CSV 업로드 동선을 함께 배치했습니다.

## 겪었던 어려움과 해결 방법

| 어려움 | 해결 방법 |
| --- | --- |
| 단순 수익률만으로는 FOMO를 설명하기 어려웠음 | 매수일, 최근 수익률, 비중 변화율을 함께 보는 시간 흐름 기반 진단으로 전환 |
| 데이터가 부족한 CSV도 들어올 수 있음 | `timeline_based`, `snapshot_estimated`, `insufficient_data` 상태값을 분리 |
| 종목 추천처럼 보일 위험이 있었음 | 인사이트 문장을 점검 가이드형으로 제한하고 매수, 매도 권유 표현을 제거 |
| API 연동 시 데모 안정성이 떨어질 수 있었음 | 정적 웹앱과 샘플 CSV 중심으로 설계해 누구나 즉시 실행 가능하게 구성 |
| 구현 중 규칙 문서와 점수 산식이 어긋나는 부분이 있었음 | 최종 점검에서 FOMO 점수 항목을 규칙서 기준에 맞게 수정 |
| 인사이트가 너무 많이 노출되어 핵심 메시지가 흐려질 수 있었음 | 우선순위 기준으로 최대 3개까지만 보여주도록 조정 |
| GitHub 제출 과정에서 파일 위치가 헷갈릴 수 있었음 | 루트에는 README와 PDF 문서, `fomo-guard-site/`에는 웹사이트 소스를 두는 구조로 정리 |

## 이 프로젝트가 의미하는 것

FOMO Guard의 의미는 투자 판단을 대신하는 데 있지 않습니다. 오히려 반대입니다. 이 프로젝트는 사용자가 시장 분위기에 휩쓸려 판단하고 있는지 잠시 멈춰서 확인하게 만드는 도구입니다.

많은 투자 서비스는 “무엇을 살 것인가”를 말합니다. FOMO Guard는 “왜 그렇게 사고 싶어졌는가”를 묻습니다. 이 차이가 프로젝트의 핵심입니다.

## 주요 기능

- 샘플 포트폴리오 즉시 분석
- CSV 포트폴리오 업로드
- 시간 흐름 기반 FOMO 진단
- 종합 FOMO 점수 산출
- 국내/해외 자산 분리 분석
- 기준 포트폴리오 대비 섹터 편중 비교
- 투자 추천 없는 멘토형 점검 가이드

## 실행 방법

이 프로젝트는 정적 웹앱입니다. 별도 빌드 없이 실행할 수 있습니다.

1. `fomo-guard-site/index.html`을 브라우저에서 열기
2. `대표 샘플 분석` 버튼 클릭
3. 또는 `sample_portfolio.csv` 형식에 맞춘 CSV 파일 업로드

로컬 서버를 사용할 경우:

```bash
cd fomo-guard-site
node serve-site.js
```

브라우저에서 다음 주소를 엽니다.

```text
http://127.0.0.1:8093/
```

## 저장소 구조

```text
fomo-guard/
  fomo-guard-site/
    index.html
    styles.css
    app.js
    sample_portfolio.csv
    serve-site.js
    serve-site.ps1
  README.md
  FOMO Guard.pdf
  FOMO Guard Skills.pdf
  01_Portfolio_Analysis_Rules.pdf
  02_Dashboard_Visualization_Rules.pdf
  03_Insight_Guardrail_Rules.pdf
  04_Input_Data_and_Sample_Spec.pdf
  05_Web_App_Flow_and_Output_Schema.pdf
```

## 문서

- `FOMO Guard.pdf`
- `FOMO Guard Skills.pdf`
- `01_Portfolio_Analysis_Rules.pdf`
- `02_Dashboard_Visualization_Rules.pdf`
- `03_Insight_Guardrail_Rules.pdf`
- `04_Input_Data_and_Sample_Spec.pdf`
- `05_Web_App_Flow_and_Output_Schema.pdf`

---

# FOMO Guard English Overview

> A portfolio dashboard that checks whether your investments were shaped by recent market hype and FOMO-driven behavior.

FOMO Guard is not a stock recommendation service. It does not tell users what to buy, sell, or hold. Instead, it analyzes a user's portfolio and helps them understand whether recent price movements, performance chasing, or sector concentration may have influenced their investment decisions.

## Live Demo

- https://fomo-guard.netlify.app/

## What Problem Does It Solve?

Most portfolio dashboards show numbers: return, value, allocation, and profit or loss. Those numbers are useful, but they do not explain how the portfolio was formed.

FOMO Guard focuses on a different question:

- Did the user enter recently rising assets too late?
- Did high-performing assets become too large in the portfolio?
- Is one hot sector dominating the entire portfolio?
- Can these risks be explained without giving investment advice?

The goal is to help users pause and review their own behavior before making more decisions.

## Development Story

### 1. From Performance Dashboard to Behavior Diagnosis

The first idea was a simple portfolio dashboard. However, return and allocation alone were not enough to explain FOMO. A 30% position can mean very different things depending on whether it was built over time or bought after a sharp rally.

So the project shifted from showing performance to diagnosing behavior. The analysis uses purchase dates, recent returns, volatility, and weight changes to detect signs of late entry, momentum chasing, and sector following.

### 2. Rule-Based Design Before UI

Before building the final interface, the project defined separate rule documents for analysis, visualization, data input, insight wording, and output schema. This made the dashboard more consistent and reduced arbitrary judgment.

The diagnosis is divided into three states:

- `timeline_based`: enough time-related data exists for detailed diagnosis
- `snapshot_estimated`: time data is missing, so the system estimates from current structure
- `insufficient_data`: required data is missing and analysis cannot continue

### 3. Static Web App for Reliable Submission

Using a live financial API could have made the demo look more realistic, but it also introduced risks such as authentication issues, network errors, and unstable judging environments. For a hackathon submission, reliability mattered more.

The final version uses:

- Static HTML, CSS, and JavaScript
- Built-in sample portfolio data
- CSV upload support
- Client-side parsing and analysis
- Netlify deployment without a backend server

### 4. Challenges and Fixes

| Challenge | Solution |
| --- | --- |
| FOMO could not be explained by return alone | Added timeline-based signals such as purchase date and recent weight changes |
| Some CSV files may not include enough data | Added diagnosis states: `timeline_based`, `snapshot_estimated`, and `insufficient_data` |
| The service could be misunderstood as investment advice | Removed buy/sell language and used mentor-style checkup messages |
| API integration could make the demo unstable | Built a static app with sample data and CSV upload |
| The scoring logic needed to match the written rules | Rechecked and aligned the FOMO score calculation with the rule documents |
| Too many insights could dilute the main message | Limited insights to the top three by priority |
| Submission files could become confusing | Organized the repository around README, PDF documents, and the `fomo-guard-site/` source folder |

## What This Project Means

FOMO Guard is a pause button for investment behavior. Many tools try to answer, “What should I buy?” This project asks, “Why do I want to buy it now?”

That is the core meaning of the project: helping users recognize whether recent market excitement has quietly shaped their portfolio.

## Key Features

- Instant sample portfolio analysis
- CSV portfolio upload
- Timeline-based FOMO diagnosis
- Overall FOMO score
- Domestic and overseas asset separation
- Sector concentration comparison against a benchmark portfolio
- Mentor-style guidance without investment recommendations

## How to Run

Open the static site directly:

```text
fomo-guard-site/index.html
```

Or run the local server:

```bash
cd fomo-guard-site
node serve-site.js
```

Then open:

```text
http://127.0.0.1:8093/
```

## Important Note

FOMO Guard does not provide financial advice. All outputs are limited to portfolio review, concentration analysis, behavioral interpretation, and self-check guidance.
