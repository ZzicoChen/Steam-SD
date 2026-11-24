<p align="center">
  <img src="./assets/steam.svg" alt="Steam" width="110" height="110">
</p>

<h1 align="center">Steam 游戏历史最低价格</h1>

<p align="center">在 Steam 商店游戏页、愿望单列表，直接看到每款游戏的<b>历史最低价</b>与<b>当前最低价</b>，只统计 Steam 官方渠道。</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.1.0-4c6b22" alt="version">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="license">
  <img src="https://img.shields.io/badge/platform-Steam%20Store-1b2838" alt="platform">
</p>

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/ZzicoChen/Steam-SD@main/Steam-SD.js"><img src="https://img.shields.io/badge/点此获取脚本-jsDelivr-4c6b22?logo=steam&logoColor=white" alt="获取脚本"></a>
  <a href="https://raw.githubusercontent.com/ZzicoChen/Steam-SD/main/Steam-SD.js"><img src="https://img.shields.io/badge/raw-备用镜像-blue" alt="raw"></a>
  <a href="https://github.com/ZzicoChen/Steam-SD/blob/main/Steam-SD.js"><img src="https://img.shields.io/badge/源码-GitHub-181717?logo=github" alt="源码"></a>
</p>

---

## 快速获取

| 用途 | 地址 |
| --- | --- |
| **国内镜像（推荐）** | `https://cdn.jsdelivr.net/gh/ZzicoChen/Steam-SD@main/Steam-SD.js` |
| **GitHub raw（备用）** | `https://raw.githubusercontent.com/ZzicoChen/Steam-SD/main/Steam-SD.js` |
| **在线查看源码** | [Steam-SD.js](./Steam-SD.js) |

地址随时取最新版，内容与仓库 `main` 分支同步更新，不用改链接。
国内网络下 `raw.githubusercontent.com` 经常连不上，安装与自动更新请优先用 jsDelivr 地址。

## 效果

### 商店游戏页

在每个「购买」区块内、价格与「添加至购物车」那一行的正上方，会多出两行小字：

```text
历史最低价是 2026/11/14 时在 Steam 中的 -15% ¥42.5
当前最低价是在 Steam 中的 -0% ¥50
```

### 愿望单

在愿望单列表每一行的右侧、价格与「添加到购物车」按钮的左边，显示两行紧凑信息（新版 Steam 愿望单同样生效）：

```text
史低: ¥73.50 -25%
当前: ¥138.00
```

（若史低无折扣，则不显示 `-XX%` 部分；当前价拿不到时只显示史低行。）

- 字体、颜色、绿色折扣胶囊都对齐 Steam / Augmented Steam 的原生样式（12-13px 灰字 + 品牌绿）
- 没有数据时整个区块不渲染，不留空壳，不报错弹窗

## 功能

- **商店页 + 愿望单双场景**：同一个脚本同时支持 `/app/` 游戏页与 `/wishlist/` 愿望单页
- **只认可购买区块**：标题必须以「购买 / Buy / Purchase」开头才算数
- **自动跳过干扰区块**：「下载 Demo」「请求访问权限」「免费开玩」等一律不插入
- **捆绑包独立取价**：每个 Bundle 按自己的 `data-ds-bundleid` 单独查，不是成员游戏价格的加总
- **地区自动识别**：读 Steam 页面自带的 `g_strCountryCode`，其次 URL 的 `?cc=`，无需手动切区
- **三层数据源兜底**：主源挂了自动回落，不会整块消失
- **6 小时本地缓存**：重复打开同一页面不会反复请求接口
- **愿望单批量查询**：一次请求查完当前页全部 appid（每 50 个一组），只对缺数据项并发补查
- **适配新版愿望单 DOM**：按 `div.Panel[data-index]` 行 + `gridArea=purchase` 价格格定位，类名改版也不会失效
- **无需任何 API Key**

## 安装

1. 先装一个用户脚本管理器：**Tampermonkey** / **Violentmonkey**，或浏览器自带的脚本功能
2. 新建脚本，把 [`Steam-SD.js`](./Steam-SD.js) 全文粘贴进去，保存（或直接点击上方 **jsDelivr** 按钮一键安装）
3. 打开任意 Steam 游戏页（`https://store.steampowered.com/app/xxxx`）或愿望单页，刷新即可

脚本头部已固定：

```js
// @updateURL    https://cdn.jsdelivr.net/gh/ZzicoChen/Steam-SD@main/Steam-SD.js
// @downloadURL  https://cdn.jsdelivr.net/gh/ZzicoChen/Steam-SD@main/Steam-SD.js
// @match        https://store.steampowered.com/app/*
// @match        https://store.steampowered.com/wishlist/*
```

安装后就支持自动更新；脚本不会影响创意工坊、社区市场等其他页面。

### 自动更新失败 / 更新后还是旧版？

- **提示「更新失败」**：基本是国内的 raw.githubusercontent.com 域名访问不通导致的；v1.0.9 起已把 `@updateURL` 换成 jsDelivr 镜像，新版不再受此影响。旧安装（之前版本没有这个更新地址）需要**重装一次**。
- **刚发新版，检查更新却还是旧版**：jsDelivr 对分支（`@main`）有缓存，一般几小时到最长 12 小时才会刷新；想立刻拿新版就用 raw 地址或直接重装。

### 图标显示为 `{}`？

用户脚本的图标**只在安装那一刻抓取并缓存**，之后只更新正文是不会重抓的。解决办法：把脚本删掉，重新安装一次即可（已把图标改成内嵌 base64，重装后不会再出现此问题）。

## 挂载位置

### 商店游戏页

插入点是每个购买区块内部的 `.game_purchase_action`（价格 + 按钮行）**之前**：

| 区块类型 | 实际位置 |
| --- | --- |
| 普通游戏 | 紧贴在「购买 XXX」标题下方 |
| 捆绑包 | 在包内容图片之后、价格行之上 |
| 下载 Demo / 请求访问权限 | **不插入** |

### 愿望单

新版 Steam 愿望单每一行是一个 CSS Grid 卡片，价格与「添加到购物车」位于 `gridArea = purchase` 的格子里；脚本把两行文字插在该格最前面，整组仍然靠右对齐：

| 情况 | 表现 |
| --- | --- |
| 在售游戏 | 「史低 / 当前」两行都在 |
| 未发售、已下架、无价 | 不渲染 |
| 滚动懒加载新增的行 | 行集合变化时自动补挂；行被 Steam 重建时用已取到的数据直接补画 |

## 数据来源

| 用途 | 接口 | 说明 |
| --- | --- | --- |
| 史低 + 当前价（主） | `POST https://api.augmentedsteam.com/prices/v2` | 免 Key；`shops: [61]` 锁定 Steam 官方商店；数据底层来自 IsThereAnyDeal |
| 史低（兜底） | `GET https://api.xiaoheihe.cn/game/get_game_prices/history/v2` | 主源无史低时启用 |
| 当前价（兜底） | `GET https://store.steampowered.com/api/appdetails` | 主源缺 `current` 时补位 |
| 地区 | Steam 页面变量 `g_strCountryCode` / URL `?cc=` | 纯本地读取，不联网 |

## 价格口径

- **历史最低价**：该地区 Steam 商店历史上出现过的最低售价（含折扣），后面跟折扣比例与发生日期
- **当前最低价**：该地区 Steam 商店的当前售价，`-0%` 表示正价无折扣
- **货币随地区**：中国区 ¥、美区 $、日区 ¥ 等；JPY / IDR / KRW 不显示小数
- **捆绑包单独计算**：按 bundle 自身的历史价，不取成员游戏的加总

## 常见问题

**某个区块没有显示两行字？**
免费游戏、锁区、该地区未上架，或者这个区块的标题不是「购买」类（Demo / 试玩 / 请求访问权限会被主动排除）。

**愿望单里只有部分游戏显示？**
未发售 / 已下架 / 该地区无价的条目本来就没有价格数据；其余条目会批量查询，缺失时再逐个补充。

**数字和 SteamDB 不一样？**
本脚本只统计 Steam 官方渠道（`shops: 61`），不含 Fanatical、Humble 等第三方站；另外地区不同数值自然不同。

**会不会请求太频繁？**
每个页面组合 6 小时内只请求一次；愿望单一次查完当前页（每 50 个 appid 一组），仅对缺数据项并发补查（限 3 并发）。

**支持英文商店页吗？**
支持，「购买」和 `Buy` / `Purchase` 两种标题都能识别。

**支持 `/bundle/`、`/sub/` 独立页吗？**
不支持，只在 `/app/` 游戏页与 `/wishlist/` 愿望单页生效。

## 兼容性

- 用户脚本管理器：Tampermonkey、Violentmonkey、支持 `GM_xmlhttpRequest` 的内置脚本功能
- 需要放行 `@connect` 里的三个域名（`api.augmentedsteam.com`、`api.xiaoheihe.cn`、`store.steampowered.com`）

## 更新日志

### v1.1.0

- **修复：愿望单不显示历史最低价** — 新版 Steam 愿望单已改为 React + CSS Grid 结构，旧选择器（`.wishlist_row` / `.wl_right`）已失效。现改为：行 = `div.Panel[data-index]`，appid 从行内 `/app/xxxxx` 链接读取，插入点 = `gridArea` 为 `purchase` 的价格格（类名是随机哈希，不写死）
- **适配懒加载与行重建** — 行集合变化才重新取数；Steam 自己重建行导致插入块消失时，用页内已取到的数据直接补画，不会漏行
- **样式微调** — 愿望单两行文字与价格、按钮垂直居中，整组靠右，与截图格式一致

### v1.0.9

- **新增：愿望单页支持** — `/wishlist/*` 每行右侧显示 `史低: ¥xx -yy%` 与 `当前: ¥xx`，位置、字号、颜色对齐商店页样式
- **新增：愿望单批量取价** — 当前页 appid 每 50 个一组请求，缺数据项限 3 并发用小黑盒 / Steam appdetails 兜底
- **新增：翻页与懒加载监听** — 愿望单滚动加载的新行会自动补挂，不会漏行
- **修复：自动更新失败** — `@updateURL` / `@downloadURL` 由 raw.githubusercontent.com 换成 jsDelivr 镜像，国内网络可正常检查更新
- **更名**：`Steam游戏页历史最低价格` → `Steam游戏历史最低价格`
- **新增**：`@updateURL` / `@downloadURL`，装一次即可自动更新

### v1.0.8

- 挂载位置改到每个购买区块内价格行上方；捆绑包按 bundle 独立取价；排除下载 Demo 与请求访问权限区块

### v1.0.1

- 名称与版本号整理

## License

[MIT](./LICENSE) © ZzicoChen
