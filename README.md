# FOMO Guard

포트폴리오를 먼저 분류하고, FOMO(추종 매수, 섹터 쏠림, 성과 추종) 신호를 규칙 기반으로 진단하는 해커톤 제출 프로젝트입니다.

FOMO Guard는 특정 종목을 추천하는 서비스가 아니라, 사용자가 자신의 포트폴리오가 최근 시장 흐름과 단기 성과 추종의 영향을 받아 형성되었는지 점검할 수 있도록 돕는 멘토형 대시보드입니다.

## Live Demo

- https://fomo-guard.netlify.app/

## Website Source

- `fomo-guard-site/`

## Key Features

- 샘플 포트폴리오 즉시 분석
- CSV 포트폴리오 업로드
- 시간 흐름 기반 FOMO 진단
- 종합 FOMO 점수 산출
- 국내/해외 자산 분리 분석
- 기준 포트폴리오 대비 섹터 편중 비교
- 투자 추천 없는 멘토형 점검 가이드

## Project Development Story

### 1. 문제 정의: 수익률 화면이 아니라 행동 리스크 진단이 필요했다

초기 목표는 단순히 보유 자산의 수익률과 비중을 보여주는 대시보드가 아니었습니다. 실제 투자자는 최근 크게 오른 자산, 시장에서 주목받는 섹터, 단기 성과 상위 종목에 영향을 받아 포트폴리오를 구성할 수 있습니다.

그래서 프로젝트의 핵심 질문을 다음처럼 정했습니다.

- 최근 급등한 자산을 뒤늦게 편입했는가?
- 최근 성과가 좋은 자산 중심으로 비중이 커졌는가?
- 특정 강세 섹터에 포트폴리오가 과도하게 몰렸는가?
- 이 결과를 종목 추천이 아니라 점검 가이드로 설명할 수 있는가?

### 2. 규칙 설계: FOMO를 숫자로만 보지 않고 흐름으로 판단했다

처음에는 자산 비중과 수익률만으로 위험도를 판단할 수 있을 것처럼 보였지만, 그것만으로는 FOMO 여부를 설명하기 어려웠습니다. 같은 30% 비중이라도 장기 보유인지, 최근 급등 후 편입인지에 따라 해석이 달라지기 때문입니다.

이를 해결하기 위해 별도의 분석 규칙 문서를 만들고, 진단 기준을 세 단계로 나누었습니다.

- `timeline_based`: 매수일, 최근 수익률, 변동성 등 시간 정보가 충분한 정밀 진단
- `snapshot_estimated`: 시간 정보가 부족할 때 현재 구성 기반으로 추정하는 진단
- `insufficient_data`: 기본 필수 컬럼이 부족해 분석이 어려운 상태

또한 종합 FOMO 점수는 후행 편입, 성과 추종, 후행 섹터 집중, 단일 자산 집중, 섹터 편중을 함께 반영하도록 설계했습니다.

### 3. 입력 데이터 시행착오: 누구나 바로 테스트할 수 있어야 했다

해커톤 제출물은 심사자가 별도 API 키나 계정 연결 없이 바로 확인할 수 있어야 했습니다. 그래서 외부 금융 API 연동 대신 정적 웹앱 구조를 선택하고, 샘플 CSV와 직접 업로드 기능을 중심으로 구성했습니다.

CSV 입력 과정에서는 다음 문제를 고려했습니다.

- 필수 컬럼이 빠졌을 때 분석을 중단하고 명확한 메시지를 보여줄 것
- 시간 정보가 부족해도 기본 분석은 제공할 것
- 쉼표, 퍼센트 기호, 문자열 숫자 등 입력 형식 차이를 정규화할 것
- 샘플 데이터만으로도 FOMO 진단의 핵심 흐름이 드러날 것

그 결과 `sample_portfolio.csv`와 업로드 검증 로직을 함께 구성했습니다.

### 4. 웹 구현: 정적 사이트 안에서 분석과 시각화를 모두 처리했다

프로젝트는 `index.html`, `styles.css`, `app.js` 중심의 정적 웹앱으로 구현했습니다. 별도 서버나 빌드 과정 없이 Netlify에서 바로 배포할 수 있도록 만들었습니다.

구현 과정에서 대시보드는 일반 수익률보다 FOMO 진단이 먼저 보이도록 구성했습니다.

- 첫 화면에서 서비스 목적과 대표 샘플 분석 버튼 제공
- 상단 요약에서 FOMO 점수와 위험도 우선 노출
- 후행 편입, 성과 추종, 섹터 집중 신호를 별도 카드로 표시
- 자산 비중, 섹터 비중, 수익률, 비교 분석 차트 제공
- 마지막에는 투자 권유가 아닌 점검형 인사이트와 행동 가이드 제공

### 5. 검증 중 발견한 문제와 해결

최종 점검 과정에서 몇 가지 문제를 발견했고 수정했습니다.

- README와 규칙 문서를 다시 읽어 구현 기준을 복원했습니다.
- 한글 문서가 깨져 보이는 경우가 있어 UTF-8 기준으로 다시 확인했습니다.
- FOMO 점수 산식에서 규칙서와 다른 항목이 반영된 부분을 수정했습니다.
- 인사이트가 규칙서 기준보다 많이 노출되던 부분을 최대 3개로 맞췄습니다.
- 브라우저 콘솔에 favicon 404가 발생하던 문제를 data URL favicon으로 해결했습니다.
- 로컬 서버와 headless 브라우저로 대표 샘플 분석, 요약 카드, 인사이트 렌더링, 콘솔 오류 여부를 확인했습니다.

이 과정을 통해 단순히 화면이 보이는 상태가 아니라, 규칙 문서와 실제 웹앱 동작이 일치하도록 정리했습니다.

### 6. 제출 정리: GitHub, Netlify, ZIP 산출물을 맞췄다

마지막 단계에서는 제출 형식을 맞추는 과정에서도 시행착오가 있었습니다. 웹사이트 파일, PDF 문서, README, ZIP 산출물이 서로 다른 위치에 있어 구조가 헷갈릴 수 있었기 때문에, 제출자가 확인하기 쉬운 형태로 정리했습니다.

최종 제출 기준은 다음과 같습니다.

- GitHub 저장소: 프로젝트 코드와 문서 보관
- Netlify 데모 URL: 실제 웹앱 실행 링크
- ZIP 산출물: 웹사이트 소스, README, 기획서 및 규칙 문서 포함

## Repository Structure

```text
fomo-guard/
  fomo-guard-site/
    index.html
    styles.css
    app.js
    sample_portfolio.csv
  README.md
  FOMO Guard.pdf
  FOMO Guard Skills.pdf
  01_Portfolio_Analysis_Rules.pdf
  02_Dashboard_Visualization_Rules.pdf
  03_Insight_Guardrail_Rules.pdf
  04_Input_Data_and_Sample_Spec.pdf
  05_Web_App_Flow_and_Output_Schema.pdf
```

## Documents

- `FOMO Guard.pdf`
- `FOMO Guard Skills.pdf`
- `01_Portfolio_Analysis_Rules.pdf`
- `02_Dashboard_Visualization_Rules.pdf`
- `03_Insight_Guardrail_Rules.pdf`
- `04_Input_Data_and_Sample_Spec.pdf`
- `05_Web_App_Flow_and_Output_Schema.pdf`

## Important Note

FOMO Guard는 종목 추천 서비스가 아닙니다. 모든 출력은 포트폴리오 상태 점검, 편중 해석, 행동 가이드 제공에 한정됩니다.

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

FOMO Guard is a pause button for investment behavior. Many tools try to answer, "What should I buy?" This project asks, "Why do I want to buy it now?"

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
