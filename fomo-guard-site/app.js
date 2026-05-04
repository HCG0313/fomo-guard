const marketSnapshot = [
  {
    name: "KOSPI",
    value: "2,742.18",
    change: "+0.84%",
    note: "반도체 강세",
    series: [2680, 2694, 2708, 2716, 2722, 2734, 2742],
  },
  {
    name: "KOSDAQ",
    value: "871.44",
    change: "+0.52%",
    note: "성장주 반등",
    series: [856, 860, 862, 865, 867, 869, 871],
  },
  {
    name: "NASDAQ",
    value: "18,492.31",
    change: "+1.12%",
    note: "AI 대형주 주도",
    series: [18020, 18110, 18240, 18310, 18420, 18455, 18492],
  },
  {
    name: "S&P 500",
    value: "5,324.77",
    change: "+0.68%",
    note: "전반적 상승",
    series: [5230, 5248, 5252, 5268, 5290, 5312, 5324],
  },
  {
    name: "DOW",
    value: "39,845.52",
    change: "-0.11%",
    note: "산업재 혼조",
    series: [40080, 40010, 39980, 39940, 39892, 39870, 39845],
  },
];

const demoPortfolios = {
  chasing: [
    { asset_name: "SK하이닉스", asset_type: "Stock", sector: "Semiconductor", market: "KR", buy_price: 186000, current_price: 224000, quantity: 8, purchase_date: "2026-04-25", recent_7d_return: 13.4, recent_30d_return: 22.1, recent_30d_volatility: 17.4, weight_change_7d: 5.1, weight_change_30d: 7.6 },
    { asset_name: "한미반도체", asset_type: "Stock", sector: "Semiconductor", market: "KR", buy_price: 111000, current_price: 139000, quantity: 11, purchase_date: "2026-04-29", recent_7d_return: 18.8, recent_30d_return: 27.4, recent_30d_volatility: 19.8, weight_change_7d: 4.9, weight_change_30d: 6.8 },
    { asset_name: "TIGER 미국필라델피아반도체나스닥", asset_type: "ETF", sector: "Semiconductor", market: "KR", buy_price: 18350, current_price: 20140, quantity: 95, purchase_date: "2026-04-18", recent_7d_return: 9.9, recent_30d_return: 15.4, recent_30d_volatility: 12.2, weight_change_7d: 2.6, weight_change_30d: 4.0 },
    { asset_name: "TSLA", asset_type: "Stock", sector: "Automotive", market: "US", buy_price: 210, current_price: 248, quantity: 6, purchase_date: "2026-04-26", recent_7d_return: 14.7, recent_30d_return: 19.5, recent_30d_volatility: 16.3, weight_change_7d: 4.2, weight_change_30d: 5.3 },
    { asset_name: "QQQ", asset_type: "ETF", sector: "Technology", market: "US", buy_price: 430, current_price: 446, quantity: 5, purchase_date: "2026-03-12", recent_7d_return: 3.1, recent_30d_return: 7.2, recent_30d_volatility: 6.4, weight_change_7d: 0.8, weight_change_30d: 1.4 },
  ],
  balanced: [
    { asset_name: "삼성전자", asset_type: "Stock", sector: "Semiconductor", market: "KR", buy_price: 79200, current_price: 81800, quantity: 24, purchase_date: "2026-01-17", recent_7d_return: 2.1, recent_30d_return: 5.3, recent_30d_volatility: 6.1, weight_change_7d: 0.3, weight_change_30d: 0.5 },
    { asset_name: "현대차", asset_type: "Stock", sector: "Automotive", market: "KR", buy_price: 252000, current_price: 261000, quantity: 6, purchase_date: "2026-01-12", recent_7d_return: 1.4, recent_30d_return: 3.8, recent_30d_volatility: 4.9, weight_change_7d: 0.1, weight_change_30d: 0.2 },
    { asset_name: "JPM", asset_type: "Stock", sector: "Finance", market: "US", buy_price: 190, current_price: 196, quantity: 6, purchase_date: "2025-12-22", recent_7d_return: 1.1, recent_30d_return: 2.7, recent_30d_volatility: 5.1, weight_change_7d: 0.0, weight_change_30d: 0.2 },
    { asset_name: "QQQ", asset_type: "ETF", sector: "Technology", market: "US", buy_price: 414, current_price: 446, quantity: 5, purchase_date: "2026-02-06", recent_7d_return: 3.1, recent_30d_return: 7.2, recent_30d_volatility: 6.4, weight_change_7d: 0.5, weight_change_30d: 0.7 },
    { asset_name: "KOSEF 국고채10년", asset_type: "ETF", sector: "Bond", market: "KR", buy_price: 112340, current_price: 113020, quantity: 18, purchase_date: "2025-11-20", recent_7d_return: 0.3, recent_30d_return: 0.9, recent_30d_volatility: 1.7, weight_change_7d: 0.0, weight_change_30d: 0.1 },
  ],
  "sector-heavy": [
    { asset_name: "SK하이닉스", asset_type: "Stock", sector: "Semiconductor", market: "KR", buy_price: 182000, current_price: 224000, quantity: 9, purchase_date: "2026-04-10", recent_7d_return: 13.4, recent_30d_return: 22.1, recent_30d_volatility: 17.4, weight_change_7d: 3.1, weight_change_30d: 4.8 },
    { asset_name: "한미반도체", asset_type: "Stock", sector: "Semiconductor", market: "KR", buy_price: 108000, current_price: 139000, quantity: 10, purchase_date: "2026-04-17", recent_7d_return: 18.8, recent_30d_return: 27.4, recent_30d_volatility: 19.8, weight_change_7d: 2.4, weight_change_30d: 3.6 },
    { asset_name: "리노공업", asset_type: "Stock", sector: "Semiconductor", market: "KR", buy_price: 208000, current_price: 228000, quantity: 6, purchase_date: "2026-03-26", recent_7d_return: 7.1, recent_30d_return: 12.6, recent_30d_volatility: 10.2, weight_change_7d: 1.2, weight_change_30d: 2.0 },
    { asset_name: "SOXX", asset_type: "ETF", sector: "Semiconductor", market: "US", buy_price: 225, current_price: 248, quantity: 5, purchase_date: "2026-04-14", recent_7d_return: 9.6, recent_30d_return: 17.8, recent_30d_volatility: 11.2, weight_change_7d: 1.8, weight_change_30d: 2.8 },
    { asset_name: "TIGER 반도체TOP10", asset_type: "ETF", sector: "Semiconductor", market: "KR", buy_price: 14620, current_price: 15840, quantity: 120, purchase_date: "2026-04-16", recent_7d_return: 8.7, recent_30d_return: 14.1, recent_30d_volatility: 10.5, weight_change_7d: 1.6, weight_change_30d: 2.5 },
  ],
};

const presetDescriptors = {
  chasing: {
    title: "급등 추종형",
    hook: "최근 급등 자산이 빠르게 상위 비중으로 올라온 구조",
  },
  balanced: {
    title: "균형 유지형",
    hook: "분산과 구조 안정성이 살아 있는 포트폴리오",
  },
  "sector-heavy": {
    title: "섹터 집중형",
    hook: "강한 테마 하나가 전체 스토리를 끌고 가는 구조",
  },
};

const benchmarkSectorWeights = {
  Semiconductor: 18,
  Automotive: 8,
  Technology: 28,
  Healthcare: 14,
  Finance: 14,
  Bond: 12,
  Commodity: 6,
  Industrials: 8,
  Consumer: 6,
};

const domesticBenchmarkSectorWeights = {
  Semiconductor: 22,
  Automotive: 11,
  Finance: 15,
  Healthcare: 9,
  Bond: 14,
  Industrials: 12,
  Consumer: 9,
  Technology: 8,
};

const overseasBenchmarkSectorWeights = {
  Semiconductor: 16,
  Automotive: 9,
  Technology: 30,
  Finance: 14,
  Healthcare: 14,
  Bond: 10,
  Commodity: 7,
  Industrials: 7,
  Consumer: 8,
};

const palette = ["#117a70", "#9c7a3b", "#c04c5d", "#345e87", "#7359a8", "#6d7f48"];
const today = new Date("2026-05-04T00:00:00+09:00");
let activePresetKey = "chasing";
let activeRegionView = "domestic";
let currentAnalysis = null;

const refs = {
  marketGrid: document.getElementById("market-grid"),
  primaryButton: document.getElementById("load-primary-sample"),
  csvInput: document.getElementById("csv-input"),
  presetButtons: document.querySelectorAll(".preset-button"),
  presetShowcase: document.getElementById("preset-showcase"),
  situationGrid: document.getElementById("situation-grid"),
  navTabs: document.querySelectorAll(".scroll-trigger"),
  statusBanner: document.getElementById("status-banner"),
  heroHookCopy: document.getElementById("hero-hook-copy"),
  heroKpiGrid: document.getElementById("hero-kpi-grid"),
  heroDriverList: document.getElementById("hero-driver-list"),
  landingDomesticShare: document.getElementById("landing-domestic-share"),
  landingDomesticCopy: document.getElementById("landing-domestic-copy"),
  landingOverseasShare: document.getElementById("landing-overseas-share"),
  landingOverseasCopy: document.getElementById("landing-overseas-copy"),
  datasetMeta: document.getElementById("dataset-meta"),
  analysisTabButtons: document.querySelectorAll("[data-analysis-view]"),
  analysisViews: document.querySelectorAll("[data-analysis-panel]"),
  classificationBadge: document.getElementById("classification-badge"),
  classificationTitle: document.getElementById("classification-title"),
  classificationImpact: document.getElementById("classification-impact"),
  classificationSummary: document.getElementById("classification-summary"),
  classificationTraits: document.getElementById("classification-traits"),
  classificationBrief: document.getElementById("classification-brief"),
  detailStoryGrid: document.getElementById("detail-story-grid"),
  summaryTakeaways: document.getElementById("summary-takeaways"),
  gaugeRing: document.getElementById("gauge-ring"),
  gaugeScore: document.getElementById("gauge-score"),
  gaugeLevel: document.getElementById("gauge-level"),
  gaugeCaption: document.getElementById("gauge-caption"),
  fomoMixDonut: document.getElementById("fomo-mix-donut"),
  fomoMixScore: document.getElementById("fomo-mix-score"),
  fomoMixLegend: document.getElementById("fomo-mix-legend"),
  researchMeta: document.getElementById("research-meta"),
  dataQuality: document.getElementById("data-quality"),
  verdictTitle: document.getElementById("verdict-title"),
  verdictBody: document.getElementById("verdict-body"),
  summaryGrid: document.getElementById("summary-grid"),
  leadInsight: document.getElementById("lead-insight"),
  regimeGrid: document.getElementById("regime-grid"),
  impactStrip: document.getElementById("impact-strip"),
  rulesVisualGrid: document.getElementById("rules-visual-grid"),
  diagnosisGrid: document.getElementById("diagnosis-grid"),
  behaviorGrid: document.getElementById("behavior-grid"),
  scoreBreakdown: document.getElementById("score-breakdown"),
  riskDriverGrid: document.getElementById("risk-driver-grid"),
  timelineCards: document.getElementById("timeline-cards"),
  regionTabs: document.querySelectorAll("[data-region-view]"),
  regionFocusGrid: document.getElementById("region-focus-grid"),
  regionSummaryGrid: document.getElementById("region-summary-grid"),
  regionContextLabel: document.getElementById("region-context-label"),
  assetDonut: document.getElementById("asset-donut"),
  assetDonutTotal: document.getElementById("asset-donut-total"),
  assetLegend: document.getElementById("asset-legend"),
  sectorBars: document.getElementById("sector-bars"),
  returnBars: document.getElementById("return-bars"),
  signalMatrixBody: document.getElementById("signal-matrix-body"),
  holdingsBody: document.getElementById("holdings-body"),
  comparisonBars: document.getElementById("comparison-bars"),
  comparisonTableBody: document.getElementById("comparison-table-body"),
  insightsGrid: document.getElementById("insights-grid"),
  playbookGrid: document.getElementById("playbook-grid"),
  quickRegionButtons: document.querySelectorAll("[data-region-quick]"),
};

init();

function init() {
  renderMarketSnapshot();
  renderPresetShowcase(activePresetKey);
  bindEvents();
  refs.regionTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.regionView === activeRegionView);
  });
  renderFromRows(demoPortfolios.chasing, "대표 샘플", "chasing");
}

function bindEvents() {
  refs.primaryButton.addEventListener("click", () => {
    renderFromRows(demoPortfolios.chasing, "대표 샘플", "chasing");
    scrollToSection("dashboard");
  });

  refs.presetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.preset) return;
      scrollToSection(button.dataset.scroll);
    });
  });

  refs.presetShowcase.addEventListener("click", (event) => {
    const button = event.target.closest("[data-preset-card]");
    if (!button) return;
    const preset = button.dataset.presetCard;
    const labelMap = {
      chasing: "급등 추종형 샘플",
      balanced: "균형 유지형 샘플",
      "sector-heavy": "섹터 집중형 샘플",
    };
    renderFromRows(demoPortfolios[preset], labelMap[preset], preset);
    scrollToSection("dashboard");
  });

  refs.situationGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-situation]");
    if (!button) return;
    const situation = button.dataset.situation;
    const scrollTarget = button.dataset.scrollTarget || "dashboard";
    const labelMap = {
      chasing: "급등 추종형 샘플",
      balanced: "균형 유지형 샘플",
      "sector-heavy": "섹터 집중형 샘플",
    };

    if (situation === "upload") {
      refs.csvInput.click();
      scrollToSection(scrollTarget);
      return;
    }

    renderFromRows(demoPortfolios[situation], labelMap[situation], situation);
    scrollToSection(scrollTarget);
  });

  refs.navTabs.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.analysisTarget) {
        setAnalysisView(button.dataset.analysisTarget);
      }
      scrollToSection(button.dataset.scroll);
    });
  });

  refs.analysisTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setAnalysisView(button.dataset.analysisView);
    });
  });

  refs.regionTabs.forEach((button) => {
    button.addEventListener("click", () => {
      activeRegionView = button.dataset.regionView;
      refs.regionTabs.forEach((tab) => {
        tab.classList.toggle("is-active", tab.dataset.regionView === activeRegionView);
      });
      if (currentAnalysis) {
        renderRegionView(currentAnalysis, activeRegionView);
      }
    });
  });

  refs.quickRegionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeRegionView = button.dataset.regionQuick;
      refs.regionTabs.forEach((tab) => {
        tab.classList.toggle("is-active", tab.dataset.regionView === activeRegionView);
      });
      if (currentAnalysis) {
        renderRegionView(currentAnalysis, activeRegionView);
      }
      scrollToSection("portfolio");
    });
  });

  refs.csvInput.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const rows = parseCsv(text);
      renderFromRows(rows, file.name, null);
      scrollToSection("dashboard");
    } catch (error) {
      updateStatus(`CSV를 읽지 못했습니다. ${error.message}`, "error");
    }
  });
}

function renderPresetShowcase(activeKey = null) {
  const cards = Object.entries(demoPortfolios).map(([key, rows]) => {
    const normalized = normalizeRows(rows);
    const basis = inferDiagnosisBasis(normalized);
    const analysis = analyzePortfolio(normalized, basis, `${presetDescriptors[key].title} 미리보기`);
    const descriptor = presetDescriptors[key];

    return `
      <button class="preset-scenario-card ${activeKey === key ? "is-active" : ""}" type="button" data-preset-card="${key}">
        <div class="preset-scenario-top">
          <div>
            <span class="mini-label">대표 시나리오</span>
            <strong>${descriptor.title}</strong>
          </div>
          <span class="risk-chip ${chipToneClass(analysis.fomoLevel)}">${displayLevel(analysis.fomoLevel)}</span>
        </div>
        <p>${descriptor.hook}</p>
        <div class="ticker-meta">
          <span>유형 ${analysis.classification.name}</span>
          <span class="preset-score">${analysis.fomoScore}/12</span>
        </div>
      </button>
    `;
  });

  refs.presetShowcase.innerHTML = cards.join("");
}

function renderMarketSnapshot() {
  refs.marketGrid.innerHTML = marketSnapshot
    .map((item) => `
      <article class="market-card">
        <div class="market-card-top">
          <span class="market-card-name">${item.name}</span>
          <span class="ticker-change ${item.change.startsWith("-") ? "negative" : "positive"}">${item.change}</span>
        </div>
        <span class="market-card-value">${item.value}</span>
        ${sparklineSvg(item.series, !item.change.startsWith("-"), 28)}
        <p class="market-card-note">${item.note}</p>
      </article>
    `)
    .join("");
}

function sparklineSvg(points, positive, height) {
  const width = 180;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = Math.max(max - min, 1);
  const coords = points.map((point, index) => {
    const x = (index / (points.length - 1)) * width;
    const y = height - ((point - min) / range) * (height - 8) - 4;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  });
  const area = `0,${height} ${coords.join(" ")} ${width},${height}`;
  const tone = positive ? "positive" : "negative";
  return `
    <svg class="sparkline ${tone}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
      <path class="area" d="M ${area} Z"></path>
      <path class="line" d="M ${coords.join(" L ")}"></path>
    </svg>
  `;
}

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderFromRows(rows, label, presetKey = null) {
  const dataset = normalizeRows(rows);
  const basis = inferDiagnosisBasis(dataset);
  activePresetKey = presetKey;
  renderPresetShowcase(activePresetKey);
  const analysis = analyzePortfolio(dataset, basis, label);
  renderDashboard(analysis);
}

function setAnalysisView(view) {
  refs.analysisTabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.analysisView === view);
  });

  refs.analysisViews.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.analysisPanel === view);
  });
}

function parseCsv(text) {
  const rows = [];
  let cell = "";
  let row = [];
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === "\"") {
      if (inQuotes && next === "\"") {
        cell += "\"";
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    if (row.some((value) => value.trim() !== "")) rows.push(row);
  }

  if (rows.length < 2) {
    throw new Error("헤더와 데이터 행이 모두 필요합니다.");
  }

  const [header, ...body] = rows;
  return body.map((columns) => {
    const record = {};
    header.forEach((key, index) => {
      record[key.trim()] = columns[index] ?? "";
    });
    return record;
  });
}

function normalizeRows(rows) {
  const requiredFields = ["asset_name", "asset_type", "sector", "buy_price", "current_price", "quantity"];
  if (!rows || rows.length === 0) {
    throw new Error("업로드된 CSV에 읽을 데이터가 없습니다. 헤더와 자산 행이 모두 있는지 먼저 확인해주세요.");
  }
  const normalized = rows.map((row) => {
    const item = { ...row };

    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "string") item[key] = item[key].trim();
    });

    ["buy_price", "current_price", "quantity", "recent_7d_return", "recent_30d_return", "recent_30d_volatility", "weight_change_7d", "weight_change_30d"].forEach((field) => {
      item[field] = toNumber(item[field]);
    });

    return item;
  });

  const missingFields = requiredFields.filter((field) =>
    normalized.some((item) => item[field] === null || item[field] === "" || Number.isNaN(item[field])),
  );

  if (missingFields.length > 0) {
    throw new Error(`필수 컬럼 또는 값이 부족합니다: ${missingFields.join(", ")}. 기본 6개 컬럼을 먼저 채워주세요.`);
  }

  return normalized;
}

function inferRegion(item) {
  const market = String(item.market ?? "").toUpperCase();
  if (["KR", "KOR", "KOREA", "KOSPI", "KOSDAQ", "KRX"].includes(market)) return "domestic";
  if (["US", "USA", "NASDAQ", "NYSE", "OVERSEAS", "GLOBAL"].includes(market)) return "overseas";

  const name = String(item.asset_name ?? "");
  if (/[가-힣]/.test(name)) return "domestic";
  if (/^\d{6}$/.test(name)) return "domestic";
  if (/^(KODEX|TIGER|ACE|KOSEF|KBSTAR|ARIRANG|SOL|PLUS)/i.test(name)) return "domestic";
  return "overseas";
}

function benchmarkMapForRegion(region) {
  if (region === "domestic") return domesticBenchmarkSectorWeights;
  if (region === "overseas") return overseasBenchmarkSectorWeights;
  return benchmarkSectorWeights;
}

function analyzePortfolio(dataset, basis, label) {
  const enriched = dataset.map((item) => {
    const evaluationAmount = item.current_price * item.quantity;
    const assetReturn = ((item.current_price - item.buy_price) / item.buy_price) * 100;
    const recentDays = daysBetween(item.purchase_date, today);
    const hotAsset = (item.recent_7d_return ?? 0) >= 10;
    const recentEntry = recentDays !== null && recentDays <= 14;
    const weightIncrease = (item.weight_change_7d ?? 0) > 0 || (item.weight_change_30d ?? 0) > 0;
    const region = inferRegion(item);
    return { ...item, evaluationAmount, assetReturn, recentDays, hotAsset, recentEntry, weightIncrease, region };
  });

  const totalPortfolioValue = enriched.reduce((sum, item) => sum + item.evaluationAmount, 0);

  enriched.forEach((item) => {
    item.assetWeight = totalPortfolioValue > 0 ? (item.evaluationAmount / totalPortfolioValue) * 100 : 0;
  });

  const totalReturn = enriched.reduce((sum, item) => sum + item.assetWeight * item.assetReturn, 0) / 100;
  const assetWeights = enriched.map((item) => ({ label: item.asset_name, value: item.assetWeight })).sort((a, b) => b.value - a.value);
  const assetReturns = enriched.map((item) => ({ label: item.asset_name, value: item.assetReturn })).sort((a, b) => b.value - a.value);
  const sectorWeights = aggregateBySector(enriched, totalPortfolioValue);
  const domesticItems = enriched.filter((item) => item.region === "domestic");
  const overseasItems = enriched.filter((item) => item.region === "overseas");
  const regionViews = {
    all: buildRegionView(enriched, totalPortfolioValue, "all"),
    domestic: buildRegionView(domesticItems, totalPortfolioValue, "domestic"),
    overseas: buildRegionView(overseasItems, totalPortfolioValue, "overseas"),
  };
  const domesticShare = regionViews.domestic.shareOfPortfolio;
  const overseasShare = regionViews.overseas.shareOfPortfolio;

  const topAssetWeight = assetWeights[0]?.value ?? 0;
  const topSectorWeight = sectorWeights[0]?.value ?? 0;
  const avgVolatility = average(enriched.map((item) => item.recent_30d_volatility).filter((value) => value !== null));
  const hotAssets = enriched.filter((item) => item.hotAsset);
  const recentEntryAssets = enriched.filter((item) => item.recentEntry);
  const hotAssetWeight = hotAssets.reduce((sum, item) => sum + item.assetWeight, 0);
  const recentEntryWeight = recentEntryAssets.reduce((sum, item) => sum + item.assetWeight, 0);
  const topPerformers = enriched
    .filter((item) => item.recent_7d_return !== null)
    .slice()
    .sort((a, b) => b.recent_7d_return - a.recent_7d_return)
    .slice(0, 3);

  const singleAssetRisk = scoreRange(topAssetWeight, 35, 50);
  const sectorConcentrationRisk = scoreRange(topSectorWeight, 40, 60);
  const volatilityRisk = scoreRange(avgVolatility ?? 0, 8, 15);
  const lateEntryRisk = evaluateLateEntryRisk(enriched);
  const momentumRisk = evaluateMomentumRisk(enriched);
  const sectorFollowingRisk = evaluateSectorFollowingRisk(enriched, sectorWeights);

  const scoreBreakdown = [
    { key: "late-entry", label: "후행 편입", level: lateEntryRisk, points: riskPoints(lateEntryRisk, 3, 2), max: 3, color: "#c04c5d" },
    { key: "momentum", label: "성과 추종", level: momentumRisk, points: riskPoints(momentumRisk, 3, 2), max: 3, color: "#a66d29" },
    { key: "sector", label: "섹터 쏠림", level: sectorFollowingRisk, points: riskPoints(sectorFollowingRisk, 2, 1), max: 2, color: "#117a70" },
    { key: "concentration", label: "단일 자산 집중", level: singleAssetRisk, points: riskPoints(singleAssetRisk, 2, 1), max: 2, color: "#345e87" },
    { key: "volatility", label: "변동성 압력", level: volatilityRisk, points: riskPoints(volatilityRisk, 2, 1), max: 2, color: "#7359a8" },
  ];

  const fomoScore = scoreBreakdown.reduce((sum, item) => sum + item.points, 0);
  const fomoLevel = fomoScore >= 8 ? "High" : fomoScore >= 4 ? "Moderate" : "Low";
  const diagnosisBasisLabel = basis === "timeline_based" ? "시간 정보 기반 진단" : "스냅샷 추정 진단";
  const confidenceLabel = basis === "timeline_based" ? "높음" : "보통";

  const comparisonRows = sectorWeights
    .map((item) => ({
      label: item.label,
      value: item.value,
      benchmark: benchmarkSectorWeights[item.label] ?? 0,
      gap: item.value - (benchmarkSectorWeights[item.label] ?? 0),
    }))
    .sort((a, b) => b.gap - a.gap);

  const topGap = comparisonRows[0];
  const riskDrivers = buildRiskDrivers(enriched, sectorWeights[0], topGap);
  const marketRegime = buildMarketRegime();
  const missingTimelineFields = enriched.filter(
    (item) =>
      !item.purchase_date ||
      item.recent_7d_return === null ||
      item.recent_30d_return === null ||
      item.recent_30d_volatility === null,
  ).length;
  const missingMarketFields = enriched.filter((item) => !String(item.market ?? "").trim()).length;
  const latestPurchaseDate = enriched
    .map((item) => item.purchase_date)
    .filter(Boolean)
    .sort()
    .reverse()[0] ?? null;
  const classification = classifyPortfolio({
    topAssetWeight,
    topSectorWeight,
    hotAssetWeight,
    recentEntryWeight,
    assetCount: enriched.length,
    singleAssetRisk,
    sectorConcentrationRisk,
    lateEntryRisk,
    momentumRisk,
    sectorFollowingRisk,
    volatilityRisk,
  });

  const timelineItems = enriched
    .slice()
    .sort((a, b) => new Date(b.purchase_date || "1970-01-01") - new Date(a.purchase_date || "1970-01-01"))
    .map((item) => ({
      title: item.asset_name,
      date: item.purchase_date || "날짜 없음",
      risk: item.recentEntry && item.hotAsset ? "High" : item.recentEntry || item.hotAsset ? "Moderate" : "Low",
      description:
        item.recentEntry && item.hotAsset
          ? `최근 2주 안에 편입됐고 최근 7일 수익률도 ${formatPercent(item.recent_7d_return)} 수준입니다. 이미 움직인 자산을 뒤늦게 따라 들어간 흔적으로 볼 수 있습니다.`
          : item.hotAsset
            ? `최근 7일 수익률이 ${formatPercent(item.recent_7d_return)}입니다. 현재 시장에서 주목받는 급등 자산군에 속해 있습니다.`
            : item.recentEntry
              ? "최근에 편입된 자산이지만, 단기 급등 신호가 강한 편은 아닙니다."
              : "최근 흐름을 뒤쫓아 편입한 흔적은 상대적으로 약합니다.",
    }));

  const signalMatrixRows = enriched
    .slice()
    .sort((a, b) => b.assetWeight - a.assetWeight)
    .map((item) => ({
      asset: item.asset_name,
      weight: item.assetWeight,
      recent7d: item.recent_7d_return ?? 0,
      recentEntry: item.recentEntry ? "예" : "아니오",
      hotAsset: item.hotAsset ? "예" : "아니오",
      weightIncrease: item.weightIncrease ? "예" : "아니오",
    }));

  const insights = buildFomoInsights({
    basis,
    classification,
    topAsset: assetWeights[0],
    topSector: sectorWeights[0],
    topGap,
    avgVolatility,
    lateEntryRisk,
    momentumRisk,
    sectorFollowingRisk,
    singleAssetRisk,
    volatilityRisk,
    hotAssets,
    recentEntryAssets,
    topPerformers,
    riskDrivers,
    hotAssetWeight,
    recentEntryWeight,
  });

  const behaviors = buildBehaviors({
    lateEntryRisk,
    momentumRisk,
    sectorFollowingRisk,
    topSector: sectorWeights[0],
    comparisonRows,
    hotAssets,
    recentEntryAssets,
    topPerformers,
  });

  const playbook = buildPlaybook({
    lateEntryRisk,
    momentumRisk,
    sectorFollowingRisk,
    singleAssetRisk,
    basis,
    classification,
    topAsset: assetWeights[0],
    topSector: sectorWeights[0],
    topGap,
    hotAssets,
    recentEntryAssets,
    riskDrivers,
  });

  const researchMeta = [
    { label: "분석 데이터", value: label },
    { label: "포트폴리오 유형", value: classification.name },
    { label: "진단 기준", value: diagnosisBasisLabel },
    { label: "신뢰도", value: confidenceLabel },
    { label: "국내/해외 비중", value: `${formatPercent(domesticShare)} / ${formatPercent(overseasShare)}` },
    { label: "비교 기준", value: "균형형 기준 포트폴리오" },
  ];

  const dataQuality = [
    {
      label: "입력 충실도",
      value: basis === "timeline_based" ? "정밀 진단 가능" : "추정 진단",
      note:
        basis === "timeline_based"
          ? "매수일과 최근 수익률, 변동성까지 포함되어 형성 과정 해석이 가능합니다."
          : "매수일 또는 최근 변동성 정보가 일부 없어 현재 구조 중심으로 해석합니다.",
    },
    {
      label: "자산/섹터 수",
      value: `${enriched.length}개 자산 / ${sectorWeights.length}개 섹터`,
      note:
        enriched.length < 4
          ? "자산 수가 적어 한 종목 영향력이 크게 보일 수 있습니다."
          : "자산 수가 충분해 상위 비중과 섹터 편차를 함께 읽기 좋습니다.",
    },
    {
      label: "최근 기준 시점",
      value: latestPurchaseDate ?? "매수일 일부 없음",
      note:
        latestPurchaseDate
          ? `가장 최근 편입일을 기준으로 후행 진입 여부를 함께 읽습니다.`
          : "편입 시점 정보가 없어 시간 흐름 해석은 제한적입니다.",
    },
    {
      label: "누락 데이터",
      value: missingTimelineFields > 0 || missingMarketFields > 0 ? `시간 ${missingTimelineFields} / 시장 ${missingMarketFields}` : "없음",
      note:
        missingTimelineFields > 0 || missingMarketFields > 0
          ? "누락된 항목은 구조 분석에는 반영되지만, 시간 해석 또는 국내/해외 분리는 일부 자동 추정될 수 있습니다."
          : "모든 자산이 동일 기준으로 점검되었습니다.",
    },
  ];

  const regimeNotes = [
    { title: "시장 분위기", body: marketRegime.summary },
    { title: "최대 보유 자산", body: `${assetWeights[0]?.label ?? "-"} ${formatPercent(assetWeights[0]?.value ?? 0)}` },
    { title: "최대 섹터 편차", body: topGap ? `${displaySectorName(topGap.label)} ${formatSignedPercent(topGap.gap)}` : "유의미한 편차 없음" },
    { title: "급등 자산 비중", body: formatPercent(hotAssetWeight) },
  ];
  const verdict = buildQuickVerdict({
    fomoLevel,
    classification,
    hotAssetWeight,
    topGap,
    recentEntryWeight,
    riskDrivers,
    domesticShare,
    overseasShare,
  });
  const regionSummary = [
    {
      label: "국내 비중",
      value: formatPercent(domesticShare),
      text: regionViews.domestic.topSector
        ? `상위 섹터 ${displaySectorName(regionViews.domestic.topSector.label)} ${formatPercent(regionViews.domestic.topSector.value)}`
        : "국내 자산 없음",
    },
    {
      label: "해외 비중",
      value: formatPercent(overseasShare),
      text: regionViews.overseas.topSector
        ? `상위 섹터 ${displaySectorName(regionViews.overseas.topSector.label)} ${formatPercent(regionViews.overseas.topSector.value)}`
        : "해외 자산 없음",
    },
    {
      label: "국내 핵심 자산",
      value: regionViews.domestic.topAsset?.label ?? "-",
      text: regionViews.domestic.topAsset ? `국내 내 비중 ${formatPercent(regionViews.domestic.topAsset.value)}` : "국내 자산 없음",
    },
    {
      label: "해외 핵심 자산",
      value: regionViews.overseas.topAsset?.label ?? "-",
      text: regionViews.overseas.topAsset ? `해외 내 비중 ${formatPercent(regionViews.overseas.topAsset.value)}` : "해외 자산 없음",
    },
  ];

  const appliedRules = buildAppliedRules({
    recentEntryWeight,
    hotAssetWeight,
    topGap,
    topAsset: assetWeights[0],
    basis,
  });

  const impactBriefs = buildImpactBriefs({
    classification,
    insights,
    playbook,
    topGap,
    topSector: sectorWeights[0],
    hotAssetWeight,
    recentEntryWeight,
    topAsset: assetWeights[0],
  });

  const regionFocus = buildRegionFocusCards({
    domesticShare,
    overseasShare,
    domesticView: regionViews.domestic,
    overseasView: regionViews.overseas,
  });

  return {
    label,
    basis,
    enriched,
    totalPortfolioValue,
    totalReturn,
    assetCount: enriched.length,
    fomoScore,
    fomoLevel,
    diagnosisBasisLabel,
    confidenceLabel,
    researchMeta,
    dataQuality,
    regimeNotes,
    statusMessage:
      `${classification.name} / 국내 ${formatPercent(domesticShare)} / 급등 자산 ${formatPercent(hotAssetWeight)} / 최대 섹터 편차 ${topGap ? formatSignedPercent(topGap.gap) : "0.0%p"}` +
      `${riskDrivers[0] ? ` / 최우선 점검 ${riskDrivers[0].asset}` : ""}` +
      `${basis === "timeline_based" ? " / 정밀 진단" : " / 추정 진단"}`,
    assetWeights,
    assetReturns,
    sectorWeights,
    comparisonRows,
    scoreBreakdown,
    timelineItems,
    signalMatrixRows,
    regionViews,
    regionSummary,
    domesticShare,
    overseasShare,
    topAsset: assetWeights[0],
    topSector: sectorWeights[0],
    topGap,
    hotAssetWeight,
    recentEntryWeight,
    riskDrivers,
    hotAssets,
    recentEntryAssets,
    topPerformers,
    marketRegime,
    singleAssetRisk,
    sectorConcentrationRisk,
    volatilityRisk,
    lateEntryRisk,
    momentumRisk,
    sectorFollowingRisk,
    classification,
    behaviors,
    insights,
    playbook,
    appliedRules,
    impactBriefs,
    regionFocus,
    leadInsight: insights[0],
    classificationBrief: buildClassificationBrief(classification, basis, {
      topAsset: assetWeights[0],
      topGap,
      hotAssetWeight,
      recentEntryWeight,
      riskDrivers,
    }),
    verdict,
  };
}

function classifyPortfolio(context) {
  if (context.sectorFollowingRisk === "High" || context.topSectorWeight >= 55) {
    return {
      name: "강세 섹터 집중형",
      badge: "과열 경보",
      tone: "negative",
      impact: "지금 포트폴리오는 사실상 하나의 강한 테마에 크게 베팅한 상태입니다.",
      summary: "현재 포트폴리오는 하나의 시장 테마가 구조를 지배하고 있습니다. 분산보다 특정 섹터 스토리가 훨씬 강하게 작동하고 있습니다.",
      traits: [
        { title: "섹터 의존도가 매우 높습니다", body: `상위 섹터가 전체 포트폴리오의 ${formatPercent(context.topSectorWeight)}를 차지하고 있습니다. 섹터 하나의 분위기가 포트폴리오 전체를 흔들 수 있습니다.` },
        { title: "기준 대비 편차가 큽니다", body: "이 구조는 먼저 균형형 기준 포트폴리오와 비교한 뒤 해석해야 합니다. 일반적인 분산형 포트폴리오와는 결이 다릅니다." },
        { title: "FOMO는 테마로도 들어옵니다", body: "개별 종목 비중이 과하지 않아 보여도, 특정 섹터 과열만으로 행동 리스크가 생길 수 있습니다." },
      ],
    };
  }

  if ((context.lateEntryRisk === "High" || context.momentumRisk === "High") && context.hotAssetWeight >= 35) {
    return {
      name: "급등 추종 성장형",
      badge: "추종 경보",
      tone: "negative",
      impact: "최근 잘 오른 자산이 포트폴리오 중심으로 올라오며 판단을 끌고 있습니다.",
      summary: "최근 상승 종목들이 포트폴리오 구조를 강하게 만들고 있어, 확신보다 추종 심리가 먼저 반영됐는지 확인이 필요합니다.",
      traits: [
        { title: "급등 자산 비중이 높습니다", body: `전체 포트폴리오 중 ${formatPercent(context.hotAssetWeight)}가 최근 강하게 움직인 자산에 들어가 있습니다. 수익률이 구조를 만들고 있다는 신호입니다.` },
        { title: "최근 매수 시점이 중요합니다", body: "장기 전략보다 최근 시장 흐름이 구조 형성에 영향을 줬을 가능성이 있습니다. 특히 최근 편입 자산은 따로 떼어 읽어야 합니다." },
        { title: "무조건 FOMO는 아닙니다", body: "성장형 전략일 수도 있지만, 지금은 그 전략이 추종이 아닌지 더 엄격하게 확인해야 합니다." },
      ],
    };
  }

  if (context.singleAssetRisk === "High" && context.momentumRisk === "Low") {
    return {
      name: "고확신 집중형",
      badge: "집중 주의",
      tone: "warning",
      impact: "한 종목 또는 소수 자산의 판단이 포트폴리오 전체 성과를 좌우하는 구조입니다.",
      summary: "포트폴리오가 집중되어 있지만, 반드시 단기 추종 때문이라고 볼 수는 없습니다. 행동 리스크보다 확신 집중 리스크에 가깝습니다.",
      traits: [
        { title: "단일 자산 영향력이 큽니다", body: "한 종목의 비중이 커서 전체 포트폴리오 흐름을 좌우할 수 있습니다. 맞으면 크게 먹고, 틀리면 전체가 흔들립니다." },
        { title: "행동 리스크는 2순위입니다", body: "이 포트폴리오는 먼저 집중형으로 읽어야지, 곧바로 추종형으로 단정하면 안 됩니다." },
        { title: "그래도 점검은 필요합니다", body: "집중이 전략인지 감정인지 구분하기 위해 비중 관리 기준은 다시 확인해야 합니다." },
      ],
    };
  }

  if (
    context.singleAssetRisk === "Low" &&
    context.sectorConcentrationRisk === "Low" &&
    context.momentumRisk === "Low" &&
    context.lateEntryRisk === "Low"
  ) {
    return {
      name: "균형형 코어",
      badge: "구조 안정",
      tone: "positive",
      impact: "지금 구조는 감정보다 설계에 더 가까운 포트폴리오입니다.",
      summary: "포트폴리오 구조상 분산이 어느 정도 확보되어 있어, 당장의 FOMO보다 전체 구조 해석이 우선입니다.",
      traits: [
        { title: "분산이 보입니다", body: "특정 종목이나 섹터가 전체 구조를 압도하고 있지 않습니다. 한 방향으로 쏠린 구조는 아닙니다." },
        { title: "행동 잡음이 크지 않습니다", body: "최근 급등 자산이 전체 포트폴리오를 끌고 가는 구조는 아닙니다." },
        { title: "점검 기반이 안정적입니다", body: "이런 구조는 FOMO 해석도 더 신중하고 깨끗하게 읽을 수 있습니다." },
      ],
    };
  }

  return {
    name: "성장 편향 혼합형",
    badge: "혼합 주의",
    tone: "warning",
    impact: "지금 포트폴리오는 균형형도, 추종형도 아닌 애매한 중간 지대에 있습니다.",
    summary: "성장 편향은 분명하지만, 균형형이라고 보기에도, 완전한 FOMO 추종형이라고 보기에도 애매한 혼합 구조입니다.",
    traits: [
      { title: "성장 편중이 일부 보입니다", body: "성장 자산 노출은 높지만, 한 테마가 완전히 지배하는 수준은 아닙니다. 그래서 더 애매하게 느껴질 수 있습니다." },
      { title: "신호가 섞여 있습니다", body: "최근 타이밍 압박 신호가 일부 있으나, 한 가지 행동만으로 정의할 수는 없습니다." },
      { title: "분류가 먼저입니다", body: "이런 포트폴리오일수록 강한 행동 결론보다 구조 분류가 우선되어야 합니다." },
    ],
  };
}

function buildClassificationBrief(classification, basis, context) {
  const topAssetText = context.topAsset ? `${context.topAsset.label} ${formatPercent(context.topAsset.value)}` : "상위 자산 정보 부족";
  const topGapText = context.topGap
    ? `${displaySectorName(context.topGap.label)} ${formatSignedPercent(context.topGap.gap)}`
    : "섹터 편차 제한적";

  return {
    title: classification.name,
    body:
      basis === "timeline_based"
        ? `${classification.impact ?? classification.summary} 매수 시점까지 포함해 읽었습니다.`
        : `${classification.impact ?? classification.summary} 현재 결과는 스냅샷 기준의 추정 진단입니다.`,
    evidence: `상위 자산 ${topAssetText} / 급등 자산 비중 ${formatPercent(context.hotAssetWeight)} / 최근 편입 비중 ${formatPercent(context.recentEntryWeight)} / 최대 섹터 편차 ${topGapText}`,
  };
}

function buildAppliedRules(context) {
  return [
    {
      title: "최근 14일 편입 비중",
      value: formatPercent(context.recentEntryWeight),
      note: "뒤늦게 들어간 자산 비중이 클수록 후행 편입 신호가 강해집니다.",
      strength: Math.min(context.recentEntryWeight / 45, 1),
      tone: context.recentEntryWeight >= 30 ? "strong" : context.recentEntryWeight >= 15 ? "medium" : "soft",
    },
    {
      title: "최근 급등 자산 비중",
      value: formatPercent(context.hotAssetWeight),
      note: "짧은 기간 급등한 자산에 비중이 몰릴수록 FOMO 해석이 강해집니다.",
      strength: Math.min(context.hotAssetWeight / 50, 1),
      tone: context.hotAssetWeight >= 35 ? "strong" : context.hotAssetWeight >= 18 ? "medium" : "soft",
    },
    {
      title: "최대 섹터 편차",
      value: context.topGap ? formatSignedPercent(context.topGap.gap) : "0.0%p",
      note: "균형형 기준 대비 과도하게 벌어진 섹터는 군집 쏠림 신호로 읽습니다.",
      strength: Math.min(Math.abs(context.topGap?.gap ?? 0) / 24, 1),
      tone: Math.abs(context.topGap?.gap ?? 0) >= 15 ? "strong" : Math.abs(context.topGap?.gap ?? 0) >= 7 ? "medium" : "soft",
    },
    {
      title: "상위 자산 집중도",
      value: formatPercent(context.topAsset?.value ?? 0),
      note: "한 종목이 전체를 끌고 가면 구조 안정성보다 종목 리스크가 먼저 커집니다.",
      strength: Math.min((context.topAsset?.value ?? 0) / 35, 1),
      tone: (context.topAsset?.value ?? 0) >= 25 ? "strong" : (context.topAsset?.value ?? 0) >= 15 ? "medium" : "soft",
    },
    {
      title: "진단 수준",
      value: context.basis === "timeline_based" ? "정밀" : "추정",
      note:
        context.basis === "timeline_based"
          ? "매수일과 최근 수익률이 있어 형성 과정까지 읽었습니다."
          : "현재 스냅샷 중심 해석입니다. 매수일이 있으면 더 정밀해집니다.",
      strength: context.basis === "timeline_based" ? 0.95 : 0.55,
      tone: context.basis === "timeline_based" ? "positive" : "medium",
    },
  ];
}

function buildImpactBriefs(context) {
  const sectorName = displaySectorName(context.topSector?.label ?? "상위");
  const topAssetName = context.topAsset?.label ?? "상위 자산";

  return [
    {
      label: "현재 구조",
      title: context.classification.name,
      body: context.classification.impact ?? context.classification.summary,
      tone: "core",
    },
    {
      label: "핵심 원인",
      title: `${sectorName} / ${formatPercent(context.hotAssetWeight)}`,
      body: `최근 급등 자산 비중 ${formatPercent(context.hotAssetWeight)}, 최대 섹터 편차 ${formatSignedPercent(
        context.topGap?.gap ?? 0,
      )}, 상위 자산 ${topAssetName} ${formatPercent(context.topAsset?.value ?? 0)}가 동시에 영향을 주고 있습니다.`,
      tone: "warning",
    },
    {
      label: "이어질 가능성",
      title:
        context.recentEntryWeight >= 30
          ? "최근 편입 자산 조정 시 체감 손실 확대"
          : context.topGap && context.topGap.gap >= 12
            ? "특정 섹터 조정 시 전체 수익률 흔들림"
            : "상위 비중 자산 하나가 성과를 좌우할 가능성",
      body:
        context.playbook[0]?.body ??
        "지금 구조가 계속되면 포트폴리오 전체가 최근 시장 분위기에 더 민감하게 반응할 수 있습니다.",
      tone: "neutral",
    },
  ];
}

function buildRegionFocusCards(context) {
  return [
    {
      label: "국내 주식 파트",
      title: `${formatPercent(context.domesticShare)} 비중`,
      emphasis:
        context.domesticView.shareOfPortfolio >= 50
          ? "현재 진단의 중심은 국내 주식 구간입니다"
          : "국내 구간 비중은 낮아도 FOMO 신호는 국내 쪽에서 먼저 확인해야 합니다",
      body: context.domesticView.topSector
        ? `${displaySectorName(context.domesticView.topSector.label)} 중심 구조입니다. 상위 자산은 ${
            context.domesticView.topAsset?.label ?? "-"
          }이며 국내 구간 비중 ${formatPercent(context.domesticView.topAsset?.value ?? 0)}입니다.`
        : "국내 자산 비중이 낮아 현재는 국내 주식 해석 영향이 제한적입니다.",
      tone: "domestic",
    },
    {
      label: "해외 자산 파트",
      title: `${formatPercent(context.overseasShare)} 비중`,
      emphasis:
        context.overseasView.shareOfPortfolio >= 45
          ? "해외 자산은 성장 보조축으로 작동하고 있습니다"
          : "해외 자산은 보조 역할이며 최종 해석은 국내 구조를 먼저 봐야 합니다",
      body: context.overseasView.topSector
        ? `${displaySectorName(context.overseasView.topSector.label)} 중심 구조입니다. 상위 자산은 ${
            context.overseasView.topAsset?.label ?? "-"
          }이며 해외 구간 비중 ${formatPercent(context.overseasView.topAsset?.value ?? 0)}입니다.`
        : "해외 자산이 없거나 비중이 낮아 현재 해석의 중심은 국내 구간입니다.",
      tone: "overseas",
    },
  ];
}

function buildQuickVerdict(context) {
  const topDriver = context.riskDrivers[0];

  if (context.fomoLevel === "High") {
    return {
      title: "지금 포트폴리오는 전략보다 추종이 먼저 드러나는 상태입니다",
      body: `${context.classification.name} / 국내 비중 ${formatPercent(context.domesticShare)} / 급등 자산 ${formatPercent(context.hotAssetWeight)} / 최대 섹터 편차 ${context.topGap ? formatSignedPercent(context.topGap.gap) : "0.0%p"}${topDriver ? ` / 최우선 점검 ${topDriver.asset}` : ""}`,
    };
  }

  if (context.fomoLevel === "Moderate") {
    return {
      title: "겉으로는 안정적이지만 안쪽에서는 추종 신호가 쌓이고 있습니다",
      body: `${context.classification.name} / 국내 비중 ${formatPercent(context.domesticShare)} / 최근 편입 ${formatPercent(context.recentEntryWeight)}${topDriver ? ` / 먼저 볼 종목 ${topDriver.asset}` : ""}`,
    };
  }

  return {
    title: "지금은 과열 경보보다 구조 유지와 비중 관리가 더 중요한 상태입니다",
    body: `${context.classification.name} / 국내 비중 ${formatPercent(context.domesticShare)} / 구조 안정 우위 / 상위 비중 자산 점검 우선`,
  };
}

function aggregateBySector(items, totalValue) {
  const map = new Map();
  items.forEach((item) => {
    map.set(item.sector, (map.get(item.sector) ?? 0) + item.evaluationAmount);
  });

  return Array.from(map.entries())
    .map(([label, value]) => ({
      label,
      value: totalValue > 0 ? (value / totalValue) * 100 : 0,
    }))
    .sort((a, b) => b.value - a.value);
}

function buildRegionView(items, overallTotalValue, regionKey) {
  const subtotal = items.reduce((sum, item) => sum + item.evaluationAmount, 0);
  const benchmarkMap = benchmarkMapForRegion(regionKey);
  const assetWeights = items
    .map((item) => ({
      label: item.asset_name,
      value: subtotal > 0 ? (item.evaluationAmount / subtotal) * 100 : 0,
      totalValue: item.assetWeight,
    }))
    .sort((a, b) => b.value - a.value);
  const assetReturns = items
    .map((item) => ({ label: item.asset_name, value: item.assetReturn }))
    .sort((a, b) => b.value - a.value);
  const sectorWeights = aggregateBySector(items, subtotal);
  const comparisonRows = sectorWeights
    .map((item) => ({
      label: item.label,
      value: item.value,
      benchmark: benchmarkMap[item.label] ?? 0,
      gap: item.value - (benchmarkMap[item.label] ?? 0),
    }))
    .sort((a, b) => b.gap - a.gap);
  const signalMatrixRows = items
    .slice()
    .sort((a, b) => b.evaluationAmount - a.evaluationAmount)
    .map((item) => ({
      asset: item.asset_name,
      weight: subtotal > 0 ? (item.evaluationAmount / subtotal) * 100 : 0,
      recent7d: item.recent_7d_return ?? 0,
      recentEntry: item.recentEntry ? "예" : "아니오",
      hotAsset: item.hotAsset ? "예" : "아니오",
      weightIncrease: item.weightIncrease ? "예" : "아니오",
    }));
  const holdings = items
    .slice()
    .sort((a, b) => b.evaluationAmount - a.evaluationAmount)
    .map((item) => ({
      ...item,
      regionWeight: subtotal > 0 ? (item.evaluationAmount / subtotal) * 100 : 0,
    }));

  return {
    key: regionKey,
    items,
    subtotal,
    shareOfPortfolio: overallTotalValue > 0 ? (subtotal / overallTotalValue) * 100 : 0,
    assetWeights,
    assetReturns,
    sectorWeights,
    comparisonRows,
    signalMatrixRows,
    holdings,
    topSector: sectorWeights[0] ?? null,
    topAsset: assetWeights[0] ?? null,
  };
}

function evaluateLateEntryRisk(items) {
  const matched = items.filter((item) => {
    const signals = [item.recentEntry, item.hotAsset, item.assetWeight >= 15].filter(Boolean).length;
    return signals >= 2;
  }).length;

  if (matched >= 2) return "High";
  if (matched === 1) return "Moderate";
  return "Low";
}

function evaluateMomentumRisk(items) {
  const topPerformers = items
    .filter((item) => item.recent_7d_return !== null)
    .sort((a, b) => b.recent_7d_return - a.recent_7d_return)
    .slice(0, 3);

  const topWeight = topPerformers.reduce((sum, item) => sum + item.assetWeight, 0);
  const hasIncrease = topPerformers.some((item) => item.weightIncrease);
  const hasLargeWinner = topPerformers.some((item) => item.assetWeight >= 15);
  const signals = [topWeight >= 30, hasIncrease, hasLargeWinner].filter(Boolean).length;

  if (signals >= 2) return "High";
  if (signals === 1) return "Moderate";
  return "Low";
}

function evaluateSectorFollowingRisk(items, sectorWeights) {
  const topSector = sectorWeights[0];
  if (!topSector) return "Low";

  const sectorItems = items.filter((item) => item.sector === topSector.label);
  const recentEntries = sectorItems.filter((item) => item.recentEntry).length;
  const benchmarkGap = topSector.value - (benchmarkSectorWeights[topSector.label] ?? 0);
  const signals = [
    topSector.value >= 50,
    recentEntries >= 2 || sectorItems.some((item) => item.recentEntry && item.assetWeight >= 12),
    benchmarkGap >= 15,
  ].filter(Boolean).length;

  if (signals >= 2) return "High";
  if (signals === 1) return "Moderate";
  return "Low";
}

function formatAssetList(items, limit = 2) {
  const names = items.map((item) => item.asset_name).slice(0, limit);
  if (names.length === 0) return "해당 자산";
  if (items.length > limit) return `${names.join(", ")} 외 ${items.length - limit}개`;
  return names.join(", ");
}

function buildRiskDrivers(items, topSector, topGap) {
  return items
    .map((item) => {
      const weightSignal = item.assetWeight >= 18 ? 2.5 : item.assetWeight >= 12 ? 1.5 : item.assetWeight >= 8 ? 0.8 : 0;
      const hotSignal = item.hotAsset ? 2.2 : 0;
      const recentEntrySignal = item.recentEntry ? 2.0 : 0;
      const increaseSignal = item.weightIncrease ? 1.2 : 0;
      const momentumSignal = Math.min(Math.max((item.recent_7d_return ?? 0) / 8, 0), 2.2);
      const volatilitySignal = Math.min(Math.max(((item.recent_30d_volatility ?? 0) - 8) / 4, 0), 2.0);
      const sectorGapSignal =
        topSector && topGap && item.sector === topSector.label && topGap.gap >= 10
          ? Math.min(topGap.gap / 10, 2.0)
          : 0;

      const score = Number(
        (weightSignal + hotSignal + recentEntrySignal + increaseSignal + momentumSignal + volatilitySignal + sectorGapSignal).toFixed(1),
      );

      const tags = [];
      if (item.recentEntry) tags.push("최근 편입");
      if (item.hotAsset) tags.push("급등 자산");
      if (item.weightIncrease) tags.push("비중 확대");
      if (item.assetWeight >= 12) tags.push("상위 비중");
      if (topSector && topGap && item.sector === topSector.label && topGap.gap >= 10) tags.push("상위 섹터");

      const mainReason =
        item.recentEntry && item.hotAsset
          ? "짧은 기간 안에 들어온 급등 자산으로, 행동 리스크 해석에서 가장 먼저 봐야 하는 종목입니다."
          : item.hotAsset && item.weightIncrease
            ? "최근 수익률이 좋았고 실제 비중까지 늘어나, 성과 추종 신호의 중심이 될 가능성이 있습니다."
            : item.assetWeight >= 12
              ? "포트폴리오 내 영향력이 큰 상위 비중 자산으로, 구조와 행동 해석에 동시에 영향을 줍니다."
              : "현재 점수 체계에서 다수의 리스크 신호를 함께 가진 종목입니다.";

      return {
        asset: item.asset_name,
        sector: item.sector,
        score,
        tags,
        reason: mainReason,
        weight: item.assetWeight,
        recent7d: item.recent_7d_return,
        volatility: item.recent_30d_volatility,
        recentEntry: item.recentEntry,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function buildVerdict(context) {
  const topDriver = context.riskDrivers[0];

  if (context.fomoLevel === "High") {
    return {
      title: "지금 포트폴리오는 최근 시장 흐름을 따라간 흔적이 뚜렷합니다",
      body: `${context.classification.name}입니다. 급등 자산 비중 ${formatPercent(context.hotAssetWeight)}, 최대 섹터 편차 ${context.topGap ? formatSignedPercent(context.topGap.gap) : "0.0%p"}입니다.${topDriver ? ` 1순위 점검 종목은 ${topDriver.asset}입니다.` : ""}`,
    };
  }

  if (context.fomoLevel === "Moderate") {
    return {
      title: "겉으로는 안정적으로 보여도 내부에는 추종 신호가 겹쳐 있습니다",
      body: `${context.classification.name}입니다. 최근 편입 비중 ${formatPercent(context.recentEntryWeight)}를 먼저 보고,${topDriver ? ` ${topDriver.asset}부터 점검해보세요.` : ` 상위 리스크 종목부터 확인해보세요.`}`,
    };
  }

  return {
    title: "지금은 FOMO 경보보다 구조 관리가 더 중요한 상태입니다",
    body: `${context.classification.name}입니다. 강한 추종 압력은 제한적이지만 상위 비중 자산과 섹터 편차는 계속 점검해야 합니다.`,
  };
}

function buildFomoInsights(context) {
  const list = [];
  const hotAssetNames = formatAssetList(context.hotAssets, 2);
  const recentEntryNames = formatAssetList(context.recentEntryAssets, 2);
  const performerNames = formatAssetList(context.topPerformers, 2);
  const topDriverNames = context.riskDrivers.map((item) => item.asset).join(", ");
  const strongWarning =
    context.fomoLevel === "High" &&
    (context.hotAssetWeight >= 50 ||
      (context.topSector?.value ?? 0) >= 50 ||
      context.singleAssetRisk === "High");

  if (strongWarning) {
    list.push({
      priority: 0,
      category: "강한 경고",
      title: "지금 구조는 단순 관심 수준이 아니라, 최근 강세 구간에 실제로 크게 올라탄 상태입니다",
      body: `${context.classification.name} 구조에서 급등 자산 비중 ${formatPercent(context.hotAssetWeight)}, ${displaySectorName(context.topSector?.label ?? "상위")} 비중 ${formatPercent(context.topSector?.value ?? 0)}가 동시에 높습니다. 지금은 상승을 즐기는 구간이 아니라, 과열을 구조적으로 확인해야 하는 구간입니다.`,
      evidence: `급등 자산 ${formatPercent(context.hotAssetWeight)} / 상위 섹터 ${formatPercent(context.topSector?.value ?? 0)} / 상위 자산 ${formatPercent(context.topAsset?.value ?? 0)}`,
      guide: "추가 매수보다 먼저 상위 비중 한도와 섹터 한도를 정하고, 최근 편입 종목의 보유 이유를 다시 써보는 편이 좋습니다.",
    });
  }

  if (context.lateEntryRisk === "High") {
    list.push({
      priority: 1,
      category: "후행 편입",
      title: "최근 오른 자산을 뒤늦게 편입한 흔적이 선명합니다",
      body: `${recentEntryNames} 같은 최근 편입 자산이 ${formatPercent(context.recentEntryWeight)}를 차지합니다. 이미 상승한 자산을 따라 들어간 비중이 커, 추격 매수 성격이 강하게 보입니다.`,
      evidence: `최근 14일 내 편입 비중 ${formatPercent(context.recentEntryWeight)} / 급등 자산 비중 ${formatPercent(context.hotAssetWeight)}`,
      guide: "최근 편입 자산마다 매수 이유를 한 줄씩 다시 적어보고, 가격이 아니라 원래 전략 때문에 산 것인지 확인해보세요.",
    });
  }

  if (context.momentumRisk !== "Low") {
    list.push({
      priority: 2,
      category: "성과 추종",
      title: "최근 수익률이 좋은 자산이 포트폴리오의 중심 판단을 대신하고 있습니다",
      body: `${performerNames} 등 최근 성과 상위 자산이 실제 자금 배분을 끌고 있습니다. 수익률이 좋다는 이유만으로 포트폴리오 중심이 바뀌고 있을 가능성이 있습니다.`,
      evidence: `성과 상위 자산군 비중 ${formatPercent(context.topPerformers.reduce((sum, item) => sum + item.assetWeight, 0))}`,
      guide: "장기 전략 자산과 최근 성과 때문에 비중이 커진 자산을 구분해서 봐야 합니다. 지금 구조가 이어지면 판단 기준이 점점 더 짧아질 수 있습니다.",
    });
  }

  if (context.sectorFollowingRisk !== "Low") {
    list.push({
      priority: 3,
      category: "섹터 쏠림",
      title: "하나의 강한 섹터가 전체 포트폴리오의 이야기를 사실상 대신하고 있습니다",
      body: `${displaySectorName(context.topSector?.label ?? "상위")} 섹터 비중이 ${formatPercent(context.topSector?.value ?? 0)}이고, 기준 대비 편차는 ${formatSignedPercent(context.topGap?.gap ?? 0)}입니다. 한국 시장에서는 이런 쏠림이 개인투자자 군집 행동으로 빠르게 확대되는 경우가 많습니다.`,
      evidence: `기준 대비 편차 ${formatSignedPercent(context.topGap?.gap ?? 0)} / 상위 리스크 종목 ${topDriverNames || "없음"}`,
      guide: "현재 섹터 편중이 전략인지, 최근 시장 관심을 따라간 결과인지 구분해서 점검해야 합니다.",
    });
  }

  if (context.singleAssetRisk !== "Low") {
    list.push({
      priority: 4,
      category: "단일 자산 집중",
      title: "한 종목이 포트폴리오 전체 의사결정을 좌우하고 있습니다",
      body: `${context.topAsset?.label ?? "상위 보유 자산"} 비중이 ${formatPercent(context.topAsset?.value ?? 0)}입니다. 이 경우 FOMO 신호와 별개로 종목 자체 리스크가 전체 성과를 끌고 가게 됩니다.`,
      evidence: `상위 자산 ${context.topAsset?.label ?? "-"} ${formatPercent(context.topAsset?.value ?? 0)}`,
      guide: "이 비중이 전략적 최대치 안에 있는지 먼저 확인하는 것이 좋습니다.",
    });
  }

  if (context.volatilityRisk !== "Low") {
    list.push({
      priority: 5,
      category: "변동성 압력",
      title: "기대 수익만큼 손실 체감도 커질 수 있는 구간입니다",
      body: `최근 평균 변동성은 ${formatPercent(context.avgVolatility ?? 0)} 수준입니다. 지금 구조는 오른 속도만큼 되돌림도 크게 느껴질 가능성이 있습니다.`,
      evidence: `평균 30일 변동성 ${formatPercent(context.avgVolatility ?? 0)}`,
      guide: "내가 감당 가능한 손실 폭 안에 있는 포트폴리오인지 숫자로 다시 확인해보세요.",
    });
  }

  if (list.length === 0) {
    list.push({
      priority: 1,
      category: "종합",
      title: "현재 구조는 비교적 안정적이며, 강한 FOMO 압력은 제한적으로 보입니다",
      body: "공격적인 후행 편입이나 급한 성과 추종 신호는 강하지 않습니다. 지금은 FOMO보다 구조와 분산 상태를 먼저 읽는 것이 적절합니다.",
      evidence: `최대 섹터 편차 ${formatSignedPercent(context.topGap?.gap ?? 0)} / 급등 자산 비중 ${formatPercent(context.hotAssetWeight)}`,
      guide: "현재 구조를 유지하되, 이후에도 최근 급등 자산 비중이 급격히 커지지 않는지만 점검해보세요.",
    });
  }

  if (context.basis === "snapshot_estimated") {
    list.push({
      priority: 6,
      category: "데이터 메모",
      title: "현재 결과는 스냅샷 기반 추정 진단입니다",
      body: "매수일과 시간 정보가 충분하지 않으면 포트폴리오 형성 과정을 완전하게 복원할 수 없습니다. 지금 결과는 구조와 현재 비중을 중심으로 읽은 추정 진단입니다.",
      evidence: "매수일, 최근 변동성, 최근 수익률이 모두 있어야 정밀 진단으로 넘어갑니다.",
      guide: "매수일과 최근 수익률 데이터를 함께 넣으면 시간 기반 정밀 진단으로 전환할 수 있습니다.",
    });
  }

  return list.sort((a, b) => a.priority - b.priority).slice(0, 4);
}

function buildBehaviors(context) {
  const topGap = context.comparisonRows[0];
  const recentEntryNames = formatAssetList(context.recentEntryAssets, 2);
  const performerNames = formatAssetList(context.topPerformers, 2);

  return [
    {
      title: "형성 패턴",
      body:
        context.lateEntryRisk === "High"
          ? `${recentEntryNames} 같은 최근 편입 자산이 짧은 시간 안에 상위 비중으로 올라왔습니다. 이런 구조는 이미 눈에 띈 흐름을 뒤늦게 따라붙을 때 자주 나타납니다.`
          : "최근 편입 자산이 비교적 분산되어 있어, 구조 전체가 하나의 단기 흐름만 따라 만든 것처럼 보이지는 않습니다.",
      footer: context.lateEntryRisk === "High" ? "후행 편입 신호 강함" : "후행 편입 신호 제한적",
      level: context.lateEntryRisk,
    },
    {
      title: "판단 편향",
      body:
        context.momentumRisk === "High"
          ? `${performerNames} 등 최근 수익이 좋았던 자산에 자금이 더 실리고 있습니다. 이는 수익률이 판단의 지름길처럼 작동하고 있다는 뜻일 수 있습니다.`
          : "비중 변화가 최근 상승 자산에만 몰려 있는 구조는 아닙니다.",
      footer: context.momentumRisk === "High" ? "성과 추종 성향 존재" : "성과 추종 신호 제한적",
      level: context.momentumRisk,
    },
    {
      title: "시장 영향",
      body:
        context.sectorFollowingRisk === "High"
          ? `${displaySectorName(context.topSector?.label ?? "상위")} 섹터 비중이 균형형 기준보다 높습니다. 시장의 관심이 몰린 테마를 따라간 흔적일 수 있습니다.`
          : topGap
            ? `${displaySectorName(topGap.label)} 섹터가 기준과 차이는 있지만, 아직 극단적인 편중으로 보이진 않습니다.`
            : "섹터 노출이 기준과 크게 다르지 않아, 강한 군집 쏠림이 핵심 문제는 아닙니다.",
      footer: context.sectorFollowingRisk === "High" ? "기준 대비 군집 쏠림" : "기준 대비 편차 관리 가능",
      level: context.sectorFollowingRisk,
    },
  ];
}

function buildPlaybook(context) {
  const driverNames = context.riskDrivers.map((item) => item.asset).slice(0, 2).join(", ");
  const list = [
    {
      title: "먼저 포트폴리오 유형부터 확정하세요",
      body: `FOMO 점수보다 먼저 "${context.classification.name}"이라는 구조 분류가 맞는지 확인해야 합니다. 구조를 잘못 읽으면 이후 경고도 과하거나 약해질 수 있습니다.`,
    },
  ];

  if (
    context.fomoLevel === "High" &&
    (context.hotAssetWeight >= 50 ||
      (context.topSector?.value ?? 0) >= 50 ||
      context.sectorFollowingRisk === "High")
  ) {
    list.push({
      title: "지금은 관찰보다 규칙 재설정이 먼저입니다",
      body: `현재 구조는 최근 강세 자산과 ${displaySectorName(context.topSector?.label ?? "상위")} 섹터 쏠림이 동시에 보입니다. 추가 판단보다 먼저 상위 비중 한도, 섹터 한도, 최근 편입 자산 재검토 기준을 정해야 합니다.`,
    });
  }

  if (context.lateEntryRisk !== "Low") {
    list.push({
      title: "최근 편입 자산의 매수 이유를 다시 적어보세요",
      body: `${formatAssetList(context.recentEntryAssets, 2)}처럼 최근 들어온 자산은 가격이 올랐기 때문에 산 것인지, 원래 전략 안에 있던 것인지 구분해서 적어보는 것이 좋습니다.`,
    });
  }

  if (context.momentumRisk !== "Low") {
    list.push({
      title: "성과가 좋았던 자산과 전략 보유 자산을 분리해 보세요",
      body: `${formatAssetList(context.hotAssets, 2)}처럼 최근 잘 오른 자산을 따로 묶어보면, 포트폴리오가 전략보다 수익률에 더 끌렸는지 훨씬 분명하게 보입니다.`,
    });
  }

  if (context.sectorFollowingRisk !== "Low") {
    list.push({
      title: "국내 강세 테마 편중인지 먼저 확인하세요",
      body: `${displaySectorName(context.topSector?.label ?? "상위")} 섹터 편중이 큽니다. 한국 시장은 테마 쏠림이 빠르게 심해지는 경우가 많아, 현재 구조가 의도된 전략인지 아닌지를 먼저 구분해야 합니다.`,
    });
  }

  if (context.singleAssetRisk !== "Low") {
    list.push({
      title: "최대 비중 자산에 대한 상한선을 숫자로 정해두세요",
      body: `${context.topAsset?.label ?? "상위 자산"} 비중이 큽니다. 이 종목 하나가 전체 포트폴리오의 기분을 대신하지 않도록 최대 허용 비중을 정해두는 편이 좋습니다.`,
    });
  }

  if (context.basis === "snapshot_estimated") {
    list.push({
      title: "매수일과 최근 수익률 데이터를 추가해 정밀 진단으로 넘기세요",
      body: "현재는 구조 중심 추정 진단입니다. 매수일과 최근 수익률이 있으면 포트폴리오가 어떤 흐름에서 만들어졌는지까지 읽을 수 있습니다.",
    });
  }

  if ((context.riskDrivers?.length ?? 0) > 0 && context.riskDrivers[0].weight >= 18) {
    list.push({
      title: "가장 비중이 큰 종목부터 점검해야 합니다",
      body: `${context.riskDrivers[0].asset} 비중이 ${formatPercent(context.riskDrivers[0].weight)}입니다. 점수보다 먼저 이 비중이 전략인지 감정인지 확인하는 편이 더 중요합니다.`,
    });
  }

  if (driverNames) {
    list.push({
      title: "상위 리스크 종목을 따로 메모해 두세요",
      body: `${driverNames}은 현재 점수 체계에서 가장 먼저 봐야 할 종목입니다. 두 종목만 따로 떼어 놓고 보유 이유와 손절 기준을 적어보면 판단이 훨씬 선명해집니다.`,
    });
  }

  return list.slice(0, 4);
}

function buildDetailStory(analysis) {
  const topDriver = analysis.riskDrivers[0];
  const topSectorLabel = displaySectorName(analysis.topSector?.label ?? "상위");

  return [
    {
      label: "현재 상태",
      title: analysis.classification.name,
      body: analysis.classification.impact ?? analysis.classification.summary,
      tone: "current",
    },
    {
      label: "왜 이렇게 판단했는가",
      title: `${topSectorLabel} 편차 ${analysis.topGap ? formatSignedPercent(analysis.topGap.gap) : "0.0%p"}`,
      body: `${topDriver ? `${topDriver.asset}가 점수 ${topDriver.score.toFixed(1)}점으로 가장 크게 작동했고, ` : ""}최근 급등 자산 비중 ${formatPercent(analysis.hotAssetWeight)}와 최근 편입 비중 ${formatPercent(analysis.recentEntryWeight)}를 동시에 반영했습니다.`,
      tone: "reason",
    },
    {
      label: "이 상태가 이어지면",
      title:
        analysis.fomoLevel === "High"
          ? "조정이 오면 체감 손실이 더 크게 느껴질 수 있습니다"
          : analysis.fomoLevel === "Moderate"
            ? "추가 상승이 나오면 더 추종형으로 기울 수 있습니다"
            : "과열보다 구조 유지가 먼저인 구간입니다",
      body:
        analysis.fomoLevel === "High"
          ? `${topSectorLabel} 한 구간의 조정만으로도 전체 포트폴리오 심리가 빠르게 흔들릴 수 있습니다.`
          : analysis.fomoLevel === "Moderate"
            ? "최근 수익률이 좋은 자산에 비중이 더 실리면 현재 구조가 빠르게 추종형으로 이동할 수 있습니다."
            : "강한 과열 신호는 제한적이지만 상위 비중 자산이 구조를 무너뜨리지 않도록 꾸준히 봐야 합니다.",
      tone: "outlook",
    },
    {
      label: "지금 해야 할 것",
      title: analysis.playbook[0]?.title ?? "구조부터 다시 점검하세요",
      body: analysis.playbook[0]?.body ?? "점검 가이드에서 우선순위를 확인하세요.",
      tone: "action",
    },
  ];
}

function buildMarketRegime() {
  const positives = marketSnapshot.filter((item) => item.change.startsWith("+")).length;
  if (positives >= 4) {
    return { summary: "시장 전반이 우호적입니다. 이런 환경에서는 최근 강한 종목을 따라 사는 행동이 감정적으로 더 쉽게 정당화됩니다." };
  }
  if (positives >= 2) {
    return { summary: "시장은 혼조입니다. 전반적 낙관보다 특정 테마 쏠림이 더 중요해져서, 기준 대비 편중을 보는 것이 더 중요합니다." };
  }
  return { summary: "시장이 다소 방어적입니다. 이런 구간에서는 집중도와 진입 타이밍 실수가 평소보다 더 크게 작용할 수 있습니다." };
}

function renderDashboard(analysis) {
  currentAnalysis = analysis;
  const statusTone =
    analysis.basis === "snapshot_estimated" || analysis.assetCount < 4 || analysis.fomoLevel === "High"
      ? "warn"
      : "ok";
  updateStatus(analysis.statusMessage, statusTone);
  setAnalysisView("summary");
  renderHeroSnapshot(analysis);
  renderLandingRegionCards(analysis);
  refs.datasetMeta.textContent = `${analysis.label} / ${analysis.diagnosisBasisLabel}`;
  renderClassification(analysis.classification);
  renderGauge(analysis);
  renderFomoMix(analysis.scoreBreakdown, analysis.fomoScore);
  renderResearchMeta(analysis.researchMeta);
  renderDataQuality(analysis.dataQuality);
  renderVerdict(analysis.verdict);
  renderSummary(analysis);
  renderSummaryTakeaways(analysis);
  renderImpactStrip(analysis.impactBriefs);
  renderRulesVisualGrid(analysis.appliedRules);
  renderClassificationBrief(analysis.classificationBrief);
  renderLeadInsight(analysis.leadInsight);
  renderRegimeNotes(analysis.regimeNotes);
  renderDetailStory(analysis);
  renderDiagnosis(analysis);
  renderBehaviors(analysis.behaviors);
  renderScoreBreakdown(analysis.scoreBreakdown);
  renderRiskDrivers(analysis.riskDrivers);
  renderTimeline(analysis.timelineItems);
  renderRegionFocus(analysis.regionFocus);
  renderRegionSummary(analysis.regionSummary);
  renderRegionView(analysis, activeRegionView);
  renderInsights(analysis.insights);
  renderPlaybook(analysis.playbook);
}

function renderVerdict(verdict) {
  refs.verdictTitle.textContent = verdict.title;
  refs.verdictBody.textContent = verdict.body;
}

function renderHeroSnapshot(analysis) {
  const topDriver = analysis.riskDrivers[0];
  refs.heroHookCopy.textContent =
    analysis.fomoLevel === "High"
      ? `${analysis.classification.name}으로 분류됐습니다. 국내 비중 ${formatPercent(analysis.domesticShare)}에서 최근 급등 자산 비중 ${formatPercent(analysis.hotAssetWeight)}와 최대 섹터 편차 ${analysis.topGap ? formatSignedPercent(analysis.topGap.gap) : "0.0%p"}가 동시에 높습니다.`
      : analysis.fomoLevel === "Moderate"
        ? `${analysis.classification.name} 구조 안에서 일부 추종 신호가 보입니다. 국내 비중 ${formatPercent(analysis.domesticShare)}와 최근 편입 비중 ${formatPercent(analysis.recentEntryWeight)}를 먼저 확인해보세요.`
        : `${analysis.classification.name} 구조로 읽히며 강한 FOMO 압력은 제한적입니다. 다만 국내와 해외 중 어느 구간이 유형을 만들었는지는 먼저 보는 것이 좋습니다.`;

  const cards = [
    {
      label: "포트폴리오 유형",
      value: analysis.classification.name,
      text: analysis.classification.badge,
    },
    {
      label: "FOMO 점수",
      value: `${analysis.fomoScore} / 12`,
      text: displayLevel(analysis.fomoLevel),
    },
    {
      label: "국내 주식 비중",
      value: formatPercent(analysis.domesticShare),
      text: "한국 투자자 FOMO 해석 중심",
    },
    {
      label: "해외 자산 비중",
      value: formatPercent(analysis.overseasShare),
      text: "보조 성장 축 여부 확인",
    },
    {
      label: "최근 급등 자산 비중",
      value: formatPercent(analysis.hotAssetWeight),
      text: "7일 수익률 10%+ 자산 기준",
    },
    {
      label: "최우선 점검 종목",
      value: topDriver?.asset ?? "-",
      text: topDriver ? `${topDriver.score.toFixed(1)}점 기여` : "상위 종목 없음",
    },
  ];

  refs.heroKpiGrid.innerHTML = cards
    .map(
      (item) => `
        <article class="hero-kpi-card">
          <span class="mini-label">${item.label}</span>
          <strong>${item.value}</strong>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");

  refs.heroDriverList.innerHTML = analysis.riskDrivers
    .map(
      (item, index) => `
        <article class="hero-driver-item">
          <div class="hero-driver-item-top">
            <strong>${index + 1}. ${item.asset}</strong>
            <span class="risk-driver-score">${item.score.toFixed(1)}점</span>
          </div>
          <p>${item.reason}</p>
          <div class="driver-badges">
            ${item.tags.map((tag) => `<span class="driver-tag">${tag}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderLandingRegionCards(analysis) {
  const domesticSector = analysis.regionViews.domestic.topSector;
  const overseasSector = analysis.regionViews.overseas.topSector;
  const domesticAsset = analysis.regionViews.domestic.topAsset;
  const overseasAsset = analysis.regionViews.overseas.topAsset;

  refs.landingDomesticShare.textContent = `${formatPercent(analysis.domesticShare)} 비중`;
  refs.landingDomesticCopy.textContent = domesticSector
    ? `국내 해석의 중심 섹터는 ${displaySectorName(domesticSector.label)}이고, 핵심 자산은 ${domesticAsset?.label ?? "-"}입니다. 한국 투자자 FOMO는 이 구간에서 먼저 읽습니다.`
    : "국내 자산 비중이 낮아도 한국 주식 구간의 추종 신호는 별도로 먼저 확인합니다.";

  refs.landingOverseasShare.textContent = `${formatPercent(analysis.overseasShare)} 비중`;
  refs.landingOverseasCopy.textContent = overseasSector
    ? `해외 자산은 ${displaySectorName(overseasSector.label)} 중심으로 묶여 있고, 대표 자산은 ${overseasAsset?.label ?? "-"}입니다. 국내 해석과 분리해서 따로 봅니다.`
    : "해외 자산은 보조축으로 보고, 최종 해석은 국내 주식 구조를 먼저 읽습니다.";
}

function renderClassification(classification) {
  refs.classificationTitle.textContent = classification.name;
  refs.classificationBadge.className = `risk-chip ${classification.tone}`;
  refs.classificationBadge.textContent = classification.badge;
  refs.classificationImpact.textContent = classification.impact ?? classification.summary;
  refs.classificationSummary.textContent = classification.summary;
  refs.classificationTraits.innerHTML = classification.traits
    .map((trait) => `
      <div class="classification-trait compact-trait">
        <strong>${trait.title}</strong>
        <p>${trait.body}</p>
      </div>
    `)
    .join("");
}

function renderGauge(analysis) {
  const cappedScore = Math.min(analysis.fomoScore, 12);
  const angle = (cappedScore / 12) * 360;
  const color = analysis.fomoLevel === "High" ? "#c04c5d" : analysis.fomoLevel === "Moderate" ? "#a66d29" : "#117a70";
  refs.gaugeRing.style.background = `conic-gradient(${color} 0deg ${angle}deg, #dfe5ed ${angle}deg 360deg)`;
  refs.gaugeScore.textContent = String(analysis.fomoScore);
  refs.gaugeLevel.textContent = displayLevel(analysis.fomoLevel);
  refs.gaugeCaption.textContent =
    analysis.fomoLevel === "High"
      ? "구조적 편중 위에 여러 행동 리스크가 동시에 쌓여 있습니다."
      : analysis.fomoLevel === "Moderate"
        ? "일부 추종과 쏠림 신호가 보이지만, 포트폴리오 유형과 함께 해석해야 합니다."
        : "현재는 강한 FOMO 압력보다 구조와 집중도 해석이 더 중요합니다.";
}

function renderFomoMix(items, totalScore) {
  const safeValues = items.map((item) => ({ ...item, weight: item.points > 0 ? item.points : 0.15 }));
  const totalWeight = safeValues.reduce((sum, item) => sum + item.weight, 0);
  let angle = 0;
  const segments = safeValues.map((item) => {
    const span = (item.weight / totalWeight) * 360;
    const start = angle;
    const end = angle + span;
    angle = end;
    return `${item.color} ${start}deg ${end}deg`;
  });

  refs.fomoMixDonut.style.background = `conic-gradient(${segments.join(", ")})`;
  refs.fomoMixScore.textContent = String(totalScore);
  refs.fomoMixLegend.innerHTML = items
    .map((item) => {
      const share = totalScore > 0 ? (item.points / totalScore) * 100 : 0;
      return `
        <div class="legend-item">
          <div class="legend-top">
            <span class="legend-name"><span class="swatch" style="background:${item.color}"></span>${item.label}</span>
            <span class="legend-value">${item.points}점</span>
          </div>
          <div class="ticker-meta">
            <span>${displayLevel(item.level)}</span>
            <span>${share.toFixed(0)}%</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderResearchMeta(items) {
  refs.researchMeta.innerHTML = items
    .map((item) => `
      <div class="meta-item">
        <span class="mini-label">${item.label}</span>
        <strong>${item.value}</strong>
      </div>
    `)
    .join("");
}

function renderDataQuality(items) {
  refs.dataQuality.innerHTML = items
    .map((item) => `
      <div class="meta-item">
        <span class="mini-label">${item.label}</span>
        <strong>${item.value}</strong>
        <span class="meta-note">${item.note}</span>
      </div>
    `)
    .join("");
}

function renderSummary(analysis) {
  const rows = [
    { label: "포트폴리오 유형", value: analysis.classification.name, text: "구조를 먼저 읽습니다", primary: true },
    { label: "FOMO 점수", value: `${analysis.fomoScore} / 12`, text: displayLevel(analysis.fomoLevel), primary: true },
    { label: "최근 급등 자산 비중", value: formatPercent(analysis.hotAssetWeight), text: "7일 수익률 10%+ 자산" },
    { label: "최근 편입 자산 비중", value: formatPercent(analysis.recentEntryWeight), text: "최근 14일 내 편입 자산" },
    { label: "최대 섹터 편차", value: analysis.topGap ? formatSignedPercent(analysis.topGap.gap) : "0.0%p", text: analysis.topGap ? displaySectorName(analysis.topGap.label) : "기준과 유사" },
    { label: "리스크 기여 1위", value: analysis.riskDrivers[0]?.asset ?? "-", text: analysis.riskDrivers[0] ? `${analysis.riskDrivers[0].score.toFixed(1)}점 기여` : "상위 종목 없음" },
  ];

  refs.summaryGrid.innerHTML = rows
    .map((item) => `
      <article class="summary-card ${item.primary ? "is-primary" : ""}">
        <span class="label">${item.label}</span>
        <strong>${item.value}</strong>
        <p>${item.text}</p>
      </article>
    `)
    .join("");
}

function renderSummaryTakeaways(analysis) {
  const items = [
    {
      label: "현재 상태",
      title: analysis.classification.name,
      body: analysis.classification.impact ?? analysis.classification.summary,
      primary: true,
    },
    {
      label: "핵심 원인",
      title: analysis.riskDrivers[0]?.asset ? `${analysis.riskDrivers[0].asset} 주도` : "핵심 신호 확인",
      body: analysis.leadInsight?.title ?? "어떤 자산이 가장 크게 작동했는지부터 확인합니다.",
    },
    {
      label: "이어질 가능성",
      title:
        analysis.fomoLevel === "High"
          ? "추가 조정 시 체감 손실 확대"
          : analysis.fomoLevel === "Moderate"
            ? "추가 상승 시 추종형 심화"
            : "구조 유지가 우선",
      body:
        analysis.fomoLevel === "High"
          ? "지금 구조가 이어지면 상위 자산과 상위 섹터 조정이 전체 손익을 더 크게 흔들 수 있습니다."
          : analysis.fomoLevel === "Moderate"
            ? "최근 강세가 한 번 더 이어지면 비중이 더 쏠릴 가능성이 있습니다."
            : "과열보다 상위 비중 자산 관리가 우선인 구간입니다.",
    },
    {
      label: "지금 할 일",
      title: analysis.playbook[0]?.title ?? "구조부터 다시 점검하세요",
      body: analysis.playbook[0]?.body ?? "점검 가이드에서 우선순위를 확인하세요.",
    },
  ];

  refs.summaryTakeaways.innerHTML = items
    .map(
      (item) => `
        <article class="summary-takeaway-card ${item.primary ? "primary" : ""}">
          <span class="mini-label">${item.label}</span>
          <strong>${item.title}</strong>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderImpactStrip(items) {
  refs.impactStrip.innerHTML = items
    .map(
      (item) => `
        <article class="impact-card tone-${item.tone}">
          <span class="mini-label">${item.label}</span>
          <strong>${item.title}</strong>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderRulesVisualGrid(items) {
  refs.rulesVisualGrid.innerHTML = items
    .map((item, index) => {
      const width = Math.max(10, Math.round(item.strength * 100));
      return `
        <article class="rule-card tone-${item.tone}">
          <div class="rule-card-head">
            <span class="rule-card-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="mini-label">${item.title}</span>
            <strong>${item.value}</strong>
          </div>
          <div class="rule-bar-track">
            <div class="rule-bar-fill" style="width:${width}%"></div>
          </div>
          <p>${item.note}</p>
        </article>
      `;
    })
    .join("");
}

function renderRegionSummary(items) {
  refs.regionSummaryGrid.innerHTML = items
    .map(
      (item) => `
        <article class="region-summary-card">
          <span class="mini-label">${item.label}</span>
          <strong>${item.value}</strong>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderRegionFocus(items) {
  refs.regionFocusGrid.innerHTML = items
    .map(
      (item) => `
        <article class="region-focus-card tone-${item.tone}">
          <span class="mini-label">${item.label}</span>
          <strong>${item.title}</strong>
          <h3>${item.emphasis}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderRegionView(analysis, regionKey) {
  const view = analysis.regionViews[regionKey] ?? analysis.regionViews.all;
  const regionLabel =
    regionKey === "domestic"
      ? "국내 주식 기준"
      : regionKey === "overseas"
        ? "해외 자산 기준"
        : "전체 포트폴리오 기준";

  refs.regionContextLabel.textContent = regionLabel;
  renderDonut(view.assetWeights);
  renderBars(refs.sectorBars, view.sectorWeights, Math.max(...view.sectorWeights.map((item) => item.value), 1), false);
  renderReturnBars(view.assetReturns);
  renderSignalMatrix(view.signalMatrixRows);
  renderHoldings(view.holdings);
  renderBars(refs.comparisonBars, view.comparisonRows, Math.max(...view.comparisonRows.map((item) => Math.max(item.value, item.benchmark)), 1), true);
  renderComparisonTable(view.comparisonRows);
}

function renderClassificationBrief(item) {
  if (!item) return;
  refs.classificationBrief.innerHTML = `
    <span class="mini-label">포트폴리오 분류</span>
    <h3>${item.title}</h3>
    <p>${item.body}</p>
    <div class="guide-block detail-block">
      <strong>판단 근거</strong>
      <p>${item.evidence}</p>
    </div>
  `;
}

function renderLeadInsight(item) {
  if (!item) return;
  refs.leadInsight.innerHTML = `
    <span class="mini-label">${item.category}</span>
    <h3>${item.title}</h3>
    <p>${item.body}</p>
    <div class="guide-block detail-block">
      <strong>즉시 가이드</strong>
      <p>${item.guide ?? item.evidence}</p>
    </div>
  `;
}

function renderRegimeNotes(items) {
  refs.regimeGrid.innerHTML = items
    .map((item) => `
      <div class="regime-item">
        <strong>${item.title}</strong>
        <p>${item.body}</p>
      </div>
    `)
    .join("");
}

function renderDetailStory(analysis) {
  const items = buildDetailStory(analysis);
  refs.detailStoryGrid.innerHTML = items
    .map(
      (item) => `
        <article class="story-card tone-${item.tone}">
          <span class="mini-label">${item.label}</span>
          <strong>${item.title}</strong>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderDiagnosis(analysis) {
  const recentEntryNames = formatAssetList(analysis.recentEntryAssets, 2);
  const performerNames = formatAssetList(analysis.topPerformers, 2);
  const sectorLabel = displaySectorName(analysis.topSector?.label ?? "상위");
  const cards = [
    {
      title: "후행 편입 위험",
      level: analysis.lateEntryRisk,
      current:
        analysis.lateEntryRisk === "High"
          ? `${recentEntryNames} 같은 최근 편입 자산이 ${formatPercent(analysis.recentEntryWeight)}를 차지합니다. 최근 움직임을 따라 들어간 흔적이 강합니다.`
          : analysis.lateEntryRisk === "Moderate"
            ? `최근 편입 자산 비중이 ${formatPercent(analysis.recentEntryWeight)}입니다. 일부 종목은 가격 움직임 이후 편입된 정황이 보입니다.`
            : "최근 편입 자산이 포트폴리오를 강하게 끌고 있는 구조는 아닙니다.",
      outlook:
        analysis.lateEntryRisk === "High"
          ? "이 흐름이 이어지면 가격이 멈추는 순간에도 최근 편입 종목이 포트폴리오 전체 심리를 흔들 가능성이 큽니다."
          : analysis.lateEntryRisk === "Moderate"
            ? "추가 비중 확대가 반복되면 후행 편입 신호가 더 뚜렷해질 수 있습니다."
            : "지금 단계에서는 진입 시점보다 구조와 분산 상태를 우선 읽는 편이 적절합니다.",
      evidence: `최근 14일 내 편입 비중 ${formatPercent(analysis.recentEntryWeight)}`,
      action:
        analysis.lateEntryRisk === "High"
          ? "최근 편입 자산별로 매수 이유를 다시 적고, 추가 매수는 잠시 멈춘 상태에서 구조를 다시 보세요."
          : analysis.lateEntryRisk === "Moderate"
            ? "최근 들어온 자산만 따로 떼어 보면서 전략 편입인지 확인해보세요."
            : "지금은 최근 진입보다 상위 비중 자산 관리가 더 중요합니다.",
    },
    {
      title: "성과 추종 위험",
      level: analysis.momentumRisk,
      current:
        analysis.momentumRisk === "High"
          ? `${performerNames}처럼 최근 잘 오른 자산이 실제 비중 상위권에 있습니다. 수익률이 판단을 이끌고 있을 가능성이 큽니다.`
          : analysis.momentumRisk === "Moderate"
            ? `최근 수익률 상위 자산 비중이 ${formatPercent(analysis.topPerformers.reduce((sum, item) => sum + item.assetWeight, 0))}입니다. 성과가 좋은 자산 쪽으로 무게가 실리고 있습니다.`
            : "최근 성과가 좋은 자산이 곧바로 포트폴리오 중심이 된 구조는 아닙니다.",
      outlook:
        analysis.momentumRisk === "High"
          ? "이 패턴이 이어지면 장기 전략보다 최근 수익률이 더 큰 기준이 되면서 포트폴리오가 점점 더 추종형으로 굳어질 수 있습니다."
          : analysis.momentumRisk === "Moderate"
            ? "시장 강세가 한 번 더 오면 성과 상위 자산 중심으로 비중이 더 쏠릴 가능성이 있습니다."
            : "지금은 단기 수익보다 원래 정한 전략과 비중 규칙을 유지할 여지가 남아 있습니다.",
      evidence: `성과 상위 자산군 비중 ${formatPercent(analysis.topPerformers.reduce((sum, item) => sum + item.assetWeight, 0))}`,
      action:
        analysis.momentumRisk === "High"
          ? "최근 잘 오른 자산과 장기 전략 자산을 분리해서 보고, 성과가 좋다는 이유만으로 비중이 커졌는지 확인하세요."
          : analysis.momentumRisk === "Moderate"
            ? "성과 상위 자산의 비중 확대가 반복되는지만 먼저 체크하세요."
            : "지금은 성과 추종보다 구조 유지가 우선입니다.",
    },
    {
      title: "섹터 쏠림 위험",
      level: analysis.sectorFollowingRisk,
      current:
        analysis.sectorFollowingRisk === "High"
          ? `${sectorLabel} 비중이 ${formatPercent(analysis.topSector?.value ?? 0)}로 높고, 기준 대비 ${formatSignedPercent(analysis.topGap?.gap ?? 0)}만큼 벌어져 있습니다.`
          : analysis.sectorFollowingRisk === "Moderate"
            ? `${sectorLabel} 섹터가 상위 비중이지만 아직 극단적 과열로 보기는 이릅니다. 다만 기준과의 차이는 계속 볼 필요가 있습니다.`
            : "특정 섹터가 기준 대비 과하게 불어난 흔적은 제한적입니다.",
      outlook:
        analysis.sectorFollowingRisk === "High"
          ? `지금 상태가 이어지면 ${sectorLabel} 분위기 하나가 전체 포트폴리오 성과를 좌우하는 구조가 더 강해질 수 있습니다.`
          : analysis.sectorFollowingRisk === "Moderate"
            ? `현재 편차가 한 번 더 커지면 ${sectorLabel}가 사실상 포트폴리오 서사를 끌고 가는 단계로 넘어갈 수 있습니다.`
            : "지금은 섹터 하나가 전체 판단을 좌우하는 수준은 아니지만, 비교 기준과의 차이는 계속 보는 편이 좋습니다.",
      evidence: `${sectorLabel} 비중 ${formatPercent(analysis.topSector?.value ?? 0)} / 기준 대비 ${formatSignedPercent(analysis.topGap?.gap ?? 0)}`,
      action:
        analysis.sectorFollowingRisk === "High"
          ? "특정 섹터가 포트폴리오를 대신 설명하는 상태라면, 섹터 한도를 먼저 정하고 상위 종목을 순서대로 점검해야 합니다."
          : analysis.sectorFollowingRisk === "Moderate"
            ? "현재 편차가 더 커지는지만 먼저 보면서, 기준 대비 차이를 유지할 이유가 있는지 확인하세요."
            : "섹터 편차는 관리 가능한 수준이지만 기준과의 차이는 계속 기록해두는 편이 좋습니다.",
    },
  ];

  refs.diagnosisGrid.innerHTML = cards
    .map((card) => `
      <article class="diagnosis-card">
        ${chipHtml(card.level)}
        <h3>${card.title}</h3>
        <div class="guide-block detail-block">
          <strong>현재 상태</strong>
          <p>${card.current}</p>
        </div>
        <div class="guide-block detail-block">
          <strong>이어질 가능성</strong>
          <p>${card.outlook}</p>
        </div>
        <div class="guide-block detail-block diagnosis-meta">
          <strong>판단 근거</strong>
          <p>${card.evidence}</p>
        </div>
        <div class="guide-block detail-block">
          <strong>지금 대응</strong>
          <p>${card.action}</p>
        </div>
      </article>
    `)
    .join("");
}

function renderBehaviors(items) {
  refs.behaviorGrid.innerHTML = items
    .map((item) => `
      <article class="behavior-card">
        ${chipHtml(item.level)}
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <div class="behavior-footer">
          <span>해석</span>
          <span>${item.footer}</span>
        </div>
      </article>
    `)
    .join("");
}

function renderScoreBreakdown(items) {
  refs.scoreBreakdown.innerHTML = items
    .map((item) => {
      const width = (item.points / item.max) * 100;
      return `
        <div class="bar-row">
          <div class="bar-top">
            <span class="bar-name">${item.label}</span>
            <span class="bar-value">${item.points}/${item.max} / ${displayLevel(item.level)}</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${width}%; background:${item.color};"></div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderRiskDrivers(items) {
  refs.riskDriverGrid.innerHTML = items
    .map(
      (item, index) => `
        <article class="risk-driver-card">
          <div class="risk-driver-top">
            <strong>${index + 1}. ${item.asset}</strong>
            <span class="risk-driver-score">${item.score.toFixed(1)}점</span>
          </div>
          <p>${item.reason}</p>
          <div class="ticker-meta">
            <span>비중 ${formatPercent(item.weight ?? 0)}</span>
            <span>7일 수익률 ${formatPercent(item.recent7d ?? 0)}</span>
            <span>30일 변동성 ${formatPercent(item.volatility ?? 0)}</span>
          </div>
          <div class="driver-badges">
            ${item.tags.map((tag) => `<span class="driver-tag">${tag}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderTimeline(items) {
  refs.timelineCards.innerHTML = items
    .map((item) => `
      <article class="timeline-card">
        <div class="timeline-top">
          <span class="timeline-title">${item.title}</span>
          <span class="timeline-date">${item.date}</span>
        </div>
        <div>${chipHtml(item.risk)}</div>
        <p>${item.description}</p>
      </article>
    `)
    .join("");
}

function renderDonut(items) {
  if (!items.length) {
    refs.assetDonutTotal.textContent = "0";
    refs.assetDonut.style.background = "conic-gradient(#dfe5ed 0deg 360deg)";
    refs.assetLegend.innerHTML = `<div class="legend-item"><span class="legend-value">해당 구간 자산이 없습니다.</span></div>`;
    return;
  }

  refs.assetDonutTotal.textContent = `${items.length}`;
  let angle = 0;
  const slices = items.map((item, index) => {
    const color = palette[index % palette.length];
    const next = angle + item.value * 3.6;
    const segment = `${color} ${angle}deg ${next}deg`;
    angle = next;
    return { ...item, color, segment };
  });

  refs.assetDonut.style.background = `conic-gradient(${slices.map((item) => item.segment).join(", ")})`;
  refs.assetLegend.innerHTML = slices
    .map((item) => `
      <div class="legend-item">
        <div class="legend-top">
          <span class="legend-name"><span class="swatch" style="background:${item.color}"></span>${item.label}</span>
          <span class="legend-value">${formatPercent(item.value)}</span>
        </div>
      </div>
    `)
    .join("");
}

function renderBars(targetElement, rows, maxValue, showBenchmark) {
  targetElement.innerHTML = rows
    .map((item, index) => {
      const width = maxValue > 0 ? (Math.max(item.value, 0) / maxValue) * 100 : 0;
      const label = displaySectorName(item.label);
      return `
        <div class="bar-row">
          <div class="bar-top">
            <span class="bar-name">${label}</span>
            <span class="bar-value">${formatPercent(item.value)}${showBenchmark ? ` / 기준 ${formatPercent(item.benchmark)}` : ""}</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${width}%; background:${palette[index % palette.length]};"></div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderReturnBars(rows) {
  const maxAbs = Math.max(...rows.map((item) => Math.abs(item.value)), 1);
  refs.returnBars.innerHTML = rows
    .map((item) => {
      const width = (Math.abs(item.value) / maxAbs) * 100;
      const color = item.value >= 0 ? "#117a70" : "#c04c5d";
      return `
        <div class="bar-row">
          <div class="bar-top">
            <span class="bar-name">${item.label}</span>
            <span class="bar-value">${formatPercent(item.value)}</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${width}%; background:${color};"></div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderSignalMatrix(rows) {
  refs.signalMatrixBody.innerHTML = rows
    .map((row) => `
      <tr>
        <td>${row.asset}</td>
        <td>${formatPercent(row.weight)}</td>
        <td>${formatPercent(row.recent7d)}</td>
        <td>${row.recentEntry}</td>
        <td>${row.hotAsset}</td>
        <td>${row.weightIncrease}</td>
      </tr>
    `)
    .join("");
}

function renderHoldings(items) {
  refs.holdingsBody.innerHTML = items
    .slice()
    .sort((a, b) => (b.regionWeight ?? b.assetWeight) - (a.regionWeight ?? a.assetWeight))
    .map((item) => `
      <tr>
        <td>${item.asset_name}</td>
        <td>${displayAssetType(item.asset_type)}</td>
        <td>${displaySectorName(item.sector)}</td>
        <td>${formatPercent(item.regionWeight ?? item.assetWeight)}</td>
        <td>${formatPercent(item.assetReturn)}</td>
        <td>${formatPercent(item.recent_7d_return ?? 0)}</td>
        <td>${item.purchase_date ?? "-"}</td>
      </tr>
    `)
    .join("");
}

function renderComparisonTable(rows) {
  refs.comparisonTableBody.innerHTML = rows
    .map((row) => {
      const status = row.gap >= 15 ? "과집중" : row.gap >= 5 ? "다소 높음" : row.gap <= -5 ? "낮음" : "유사 수준";
      return `
        <tr>
          <td>${displaySectorName(row.label)}</td>
          <td>${formatPercent(row.value)}</td>
          <td>${formatPercent(row.benchmark)}</td>
          <td>${formatSignedPercent(row.gap)}</td>
          <td>${status}</td>
        </tr>
      `;
    })
    .join("");
}

function renderInsights(items) {
  refs.insightsGrid.innerHTML = items
    .map((item) => `
      <article class="insight-card">
        <span class="mini-label">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <div class="guide-block detail-block">
          <strong>판단 근거</strong>
          <p>${item.evidence ?? "현재 포트폴리오 구조와 점수 체계를 기준으로 해석했습니다."}</p>
        </div>
        <div class="guide-block detail-block">
          <strong>점검 포인트</strong>
          <p>${item.guide}</p>
        </div>
      </article>
    `)
    .join("");
}

function renderPlaybook(items) {
  refs.playbookGrid.innerHTML = items
    .map((item) => `
      <article class="playbook-card">
        <strong>${item.title}</strong>
        <p>${item.body}</p>
      </article>
    `)
    .join("");
}

function updateStatus(message, tone) {
  refs.statusBanner.textContent = message;
  refs.statusBanner.style.background =
    tone === "error"
      ? "rgba(192, 76, 93, 0.12)"
      : tone === "warn"
        ? "rgba(166, 109, 41, 0.14)"
        : "rgba(17, 122, 112, 0.10)";
}

function diagnosisReason(level) {
  if (level === "High") return "복수 조건 충족";
  if (level === "Moderate") return "일부 조건 충족";
  return "직접 증거 제한적";
}

function chipHtml(level) {
  return `<span class="risk-chip ${chipToneClass(level)}">${displayLevel(level)}</span>`;
}

function chipToneClass(level) {
  return level === "High" ? "negative" : level === "Moderate" ? "warning" : "positive";
}

function displayLevel(level) {
  if (level === "High") return "높음";
  if (level === "Moderate") return "보통";
  return "낮음";
}

function displayAssetType(type) {
  const map = {
    Stock: "주식",
    ETF: "ETF",
    Fund: "펀드",
    Bond: "채권",
    Crypto: "가상자산",
    Cash: "현금",
  };
  return map[type] ?? type;
}

function displaySectorName(sector) {
  const map = {
    Semiconductor: "반도체",
    Automotive: "자동차",
    Technology: "기술",
    Healthcare: "헬스케어",
    Finance: "금융",
    Bond: "채권",
    Commodity: "원자재",
    Energy: "에너지",
    Consumer: "소비재",
    Industrials: "산업재",
    Communication: "커뮤니케이션",
    Utilities: "유틸리티",
    RealEstate: "부동산",
  };
  return map[sector] ?? sector;
}

function inferDiagnosisBasis(dataset) {
  return dataset.every(
    (item) =>
      item.purchase_date &&
      item.recent_7d_return !== null &&
      item.recent_30d_return !== null &&
      item.recent_30d_volatility !== null,
  )
    ? "timeline_based"
    : "snapshot_estimated";
}

function scoreRange(value, mediumThreshold, highThreshold) {
  if (value >= highThreshold) return "High";
  if (value >= mediumThreshold) return "Moderate";
  return "Low";
}

function riskPoints(level, highScore, mediumScore) {
  if (level === "High") return highScore;
  if (level === "Moderate") return mediumScore;
  return 0;
}

function daysBetween(dateString, baseDate) {
  if (!dateString) return null;
  const target = new Date(`${dateString}T00:00:00+09:00`);
  if (Number.isNaN(target.getTime())) return null;
  return Math.floor((baseDate - target) / (1000 * 60 * 60 * 24));
}

function average(values) {
  if (values.length === 0) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function toNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return value;
  const cleaned = String(value).replace(/[%,$\s]/g, "").replace(/,/g, "");
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value) {
  const numeric = Number.isFinite(value) ? value : 0;
  const sign = numeric > 0 ? "+" : "";
  return `${sign}${numeric.toFixed(1)}%`;
}

function formatSignedPercent(value) {
  const numeric = Number.isFinite(value) ? value : 0;
  const sign = numeric > 0 ? "+" : "";
  return `${sign}${numeric.toFixed(1)}%p`;
}

