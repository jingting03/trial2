// StockProject\script.js

// 模擬的股票推薦數據
// 在實際應用中，這部分數據將由後端 API 提供
const mockStockRecommendations = [
    {
        symbol: "AAPL",
        name: "Apple Inc.",
        reason: "強勁的財報表現和穩定的產品線，預計將持續增長。",
        details: "營收連續增長，新產品發布帶動市場需求。"
    },
    {
        symbol: "MSFT",
        name: "Microsoft Corporation",
        reason: "雲端服務 Azure 表現強勁，Office 365 訂閱持續擴大。",
        details: "轉型成功，積極布局 AI 領域，前景看好。"
    },
    {
        symbol: "GOOGL",
        name: "Alphabet Inc.",
        reason: "搜尋引擎龍頭地位穩固，YouTube 廣告收入持續增長。",
        details: "在 AI 和雲端計算領域持續投入，具有長期潛力。"
    },
    {
        symbol: "TSLA",
        name: "Tesla, Inc.",
        reason: "電動車市場領導者，電池技術和自動駕駛取得突破。",
        details: "儘管波動性較大，但長期增長趨勢明顯。"
    },
    {
        symbol: "NVDA",
        name: "NVIDIA Corporation",
        reason: "AI 晶片需求爆炸性增長，在數據中心和遊戲領域市佔率高。",
        details: "GPU 技術領先，受益於 AI 和元宇宙趨勢。"
    }
];

// 獲取 DOM 元素
const stockListElement = document.getElementById('stock-list');

/**
 * 渲染股票推薦列表
 * @param {Array<Object>} recommendations - 股票推薦數據陣列
 */
function renderStockRecommendations(recommendations) {
    if (!stockListElement) {
        console.error("Error: Stock list element not found!");
        return;
    }

    // 清空現有的列表內容
    stockListElement.innerHTML = '';

    if (recommendations.length === 0) {
        stockListElement.innerHTML = '<li>目前沒有推薦的股票。</li>';
        return;
    }

    recommendations.forEach(stock => {
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <h4>${stock.name} (${stock.symbol})</h4>
            <p><strong>推薦原因：</strong> ${stock.reason}</p>
            <p><em>${stock.details}</em></p>
        `;

        stockListElement.appendChild(listItem);
    });
}

/**
 * 模擬從後端獲取即時股票推薦數據
 * 在實際應用中，這裡會發起一個 API 請求
 */
function fetchStockRecommendations() {
    console.log("Fetching stock recommendations...");
    // 模擬網路延遲
    setTimeout(() => {
        console.log("Stock recommendations fetched!");
        // 假設我們從後端獲取了 mockStockRecommendations
        renderStockRecommendations(mockStockRecommendations);
    }, 1500); // 模擬 1.5 秒的延遲
}

// 頁面載入完成後，執行獲取並渲染推薦股票
document.addEventListener('DOMContentLoaded', () => {
    fetchStockRecommendations();

    // 如果您想讓推薦列表定時更新，可以在這裡加入 setInterval
    // 例如：每 60 秒更新一次
    // setInterval(fetchStockRecommendations, 60000);
});
