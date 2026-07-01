# 今晚喝哪 — Bar Search Taiwan

一個以「今晚的情境」而非單純星等為核心的台灣酒吧探索 Web App。使用者可以依城市、心情、類型、預算與關鍵字篩選，查看酒吧的氛圍資訊，完成情境問答推薦，並在本機收藏清單。

> 目前酒吧資料為產品展示用的策展式示範資料，並非即時店家資料。正式營運前需完成店家授權／驗證及即時營業資訊串接。

## 功能

- 台北、台中、高雄酒吧探索
- 城市、情境、類型、預算及關鍵字篩選
- 三步驟「幫我選」情境推薦
- 酒吧詳情、代表酒款、氛圍及交通資訊
- `localStorage` 收藏功能
- 響應式手機／桌面介面
- 店家合作與訂位意向入口

## 開發

```bash
pnpm install
pnpm dev
```

打開 [http://localhost:3000](http://localhost:3000)。

## 驗證

```bash
pnpm lint
pnpm build
```

## 正式版 Roadmap

1. 串接可商用的地點／營業時間資料源，建立店家認領與資料驗證流程。
2. 加入 Supabase 帳號、跨裝置收藏、後台與訂位意向管理。
3. 上線店家認證方案、原生贊助版位與訂位轉介追蹤。
4. 建立使用者回報與編輯審核機制，避免資料過期。

完整商業模式見 [docs/MONETIZATION.md](docs/MONETIZATION.md)。

## 技術

Next.js 16 · React 19 · TypeScript · 原生 CSS

## License

MIT
