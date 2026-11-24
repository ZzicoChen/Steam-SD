// ==UserScript==
// @name         Steam游戏历史最低价格
// @namespace    https://github.com/beerleexc
// @version      1.3.1
// @description  在 Steam 游戏商店页每个「购买」区块内、愿望单列表每一行，显示历史最低价与当前最低价（Steam 渠道），自动跳过下载 Demo、请求访问权限等区块
// @author       beerlee
// @license      MIT
// @updateURL    https://ghfast.top/https://raw.githubusercontent.com/ZzicoChen/Steam-SD/main/Steam-SD.js
// @downloadURL  https://ghfast.top/https://raw.githubusercontent.com/ZzicoChen/Steam-SD/main/Steam-SD.js
// @icon         data:image/png;base64,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
// @match        https://store.steampowered.com/app/*
// @match        https://store.steampowered.com/wishlist/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      api.augmentedsteam.com
// @connect      api.xiaoheihe.cn
// @connect      store.steampowered.com
// @connect      cdn.jsdelivr.net
// @connect      raw.githubusercontent.com
// @connect      ghfast.top
// @run-at       document-end
// ==/UserScript==
// 原地址（GitHub raw，真正的源头，国内可能无法直接访问）：https://raw.githubusercontent.com/ZzicoChen/Steam-SD/main/Steam-SD.js
// 主更新地址（第三方加速，不缓存、拉到即为最新）：https://ghfast.top/https://raw.githubusercontent.com/ZzicoChen/Steam-SD/main/Steam-SD.js
// 原 @icon 图床链接备份：https://aka.doubaocdn.com/s/pXZ2M0av2n

(function () {
    "use strict";
    if (document.documentElement.dataset.shcLowActive) return;
    document.documentElement.dataset.shcLowActive = "1";

    const APP_MATCH = location.pathname.match(/\/app\/(\d+)/);
    const APPID = APP_MATCH ? Number(APP_MATCH[1]) : 0;

    /* 地区：优先 Steam 页面自带的国家代码，其次 URL 的 cc 参数，最后中国区 */
    function detectCountry() {
        try {
            const root = typeof unsafeWindow === "undefined" ? window : unsafeWindow;
            const code = root.g_strCountryCode || root.g_rgCountryCode;
            if (code && /^[A-Za-z]{2}$/.test(String(code))) return String(code).toLowerCase();
        } catch { /* ignore */ }
        const cc = new URLSearchParams(location.search).get("cc");
        return cc && /^[A-Za-z]{2}$/.test(cc) ? cc.toLowerCase() : "cn";
    }
    const CC = detectCountry();

    const SYMBOL = { CNY: "¥", USD: "$", JPY: "¥", RUB: "₽", UAH: "₴", INR: "₹", IDR: "Rp", KRW: "₩", BRL: "R$", EUR: "€", GBP: "£" };
    const ZERO_DECIMAL = new Set([ "JPY", "IDR", "KRW" ]);

    function formatPrice(amount, currency) {
        if (amount == null || isNaN(amount)) return "?";
        const sym = SYMBOL[currency] || currency + " ";
        const num = ZERO_DECIMAL.has(currency)
            ? String(Math.round(Number(amount)))
            : String(Number(Number(amount).toFixed(2)));
        return sym + num;
    }
    function formatDate(raw) {
        const m = String(raw || "").match(/(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
        if (!m) return "";
        return `${m[1]}/${Number(m[2])}/${Number(m[3])}`;
    }

    /* ---------------- 请求层 ---------------- */
    let reqCount = 0;   // 诊断用：本页发起了多少次接口请求（可在控制台看 html[data-shc-req]）
    function bumpReq() {
        reqCount++;
        document.documentElement.dataset.shcReq = String(reqCount);
    }
    function request(opts) {
        return new Promise((resolve, reject) => {
            bumpReq();
            GM_xmlhttpRequest({
                method: opts.method || "GET",
                url: opts.url,
                headers: opts.headers || {},
                data: opts.data === undefined ? undefined : JSON.stringify(opts.data),
                timeout: opts.timeout || 8000,
                onload: r => r.status >= 200 && r.status < 400
                    ? resolve(r.responseText)
                    : reject(Object.assign(new Error("HTTP " + r.status), { status: r.status })),
                onerror: () => reject(new Error("网络错误")),
                ontimeout: () => reject(new Error("请求超时"))
            });
        });
    }
    const getJSON = opts => request(opts).then(text => JSON.parse(text));

    /* ---------------- 价格：AugmentedSteam / ITAD，只取 Steam 渠道 shops:61 ---------------- */
    async function fetchAugmented(cc, appIds, bundleIds) {
        if (!appIds.length && !bundleIds.length) return null;
        const data = await getJSON({
            method: "POST",
            url: "https://api.augmentedsteam.com/prices/v2",
            headers: { "Content-Type": "application/json" },
            data: {
                country: cc.toUpperCase(),
                apps: appIds,
                subs: [],
                bundles: bundleIds,
                voucher: true,
                shops: [ 61 ]
            }
        });
        return data && data.prices || null;
    }

    /* 小黑盒兜底：只覆盖 app 层面的史低 */
    async function fetchXiaoheiheLow(appid, cc) {
        const d = await getJSON({
            url: `https://api.xiaoheihe.cn/game/get_game_prices/history/v2?appid=${appid}&cc=${cc}`,
            headers: { Accept: "application/json" }
        });
        const result = d && d.status === "ok" ? d.result : null;
        const li = result && result.lowest_info;
        if (!li) return null;
        const currency = (result.lowest_info_v2 && result.lowest_info_v2.currency)
            || (result.prices && result.prices[0] && result.prices[0].currency);
        const amount = Number(li.price);
        if (!(amount > 0)) return null;
        return {
            amount: amount,
            currency: currency || "CNY",
            cut: Number(li.discount) > 0 ? Number(li.discount) : 0,
            date: formatDate(li.date)
        };
    }

    /* 当前价兜底：Steam appdetails */
    async function fetchSteamCurrent(appid, cc) {
        const d = await getJSON({
            url: `https://store.steampowered.com/api/appdetails?appids=${appid}&cc=${cc}&l=schinese&filters=price_overview`,
            headers: { Accept: "application/json" }
        });
        const node = d && d[String(appid)];
        if (!node || !node.success) return null;
        const p = node.data && node.data.price_overview;
        if (!p) return null;
        return {
            amount: Number(p.final) / 100,
            currency: p.currency,
            cut: Number(p.discount_percent) || 0
        };
    }

    const pickLow = entry => entry && entry.lowest && entry.lowest.price ? {
        amount: Number(entry.lowest.price.amount),
        currency: entry.lowest.price.currency,
        cut: Number(entry.lowest.cut) > 0 ? Number(entry.lowest.cut) : 0,
        date: formatDate(entry.lowest.timestamp)
    } : null;

    const pickCurrent = entry => entry && entry.current && entry.current.price ? {
        amount: Number(entry.current.price.amount),
        currency: entry.current.price.currency,
        cut: Number(entry.current.cut) > 0 ? Number(entry.current.cut) : 0
    } : null;

    /* ---------------- 目标区块：只认「购买」标题，跳过 Demo / 请求访问权限 ---------------- */
    const TITLE_SKIP = /下载|试玩|Demo|请求访问权限|Request\s*Access|Play|免费/i;

    function collectTargets() {
        const targets = [];
        document.querySelectorAll("#game_area_purchase .game_area_purchase_game").forEach(block => {
            const titleEl = block.querySelector("h2.title, h1");
            const title = String(titleEl && titleEl.textContent || "").replace(/\s+/g, " ").trim();
            if (!/^(购买|Buy|Purchase)/i.test(title)) return;   // 必须是购买区块
            if (TITLE_SKIP.test(title)) return;                 // 排除下载 Demo / 请求访问权限

            const wrapper = block.closest("[data-ds-bundleid]");
            const bundleId = wrapper ? Number(wrapper.getAttribute("data-ds-bundleid")) : 0;
            const appAttr = wrapper && wrapper.getAttribute("data-ds-appid");
            const appId = Number(appAttr) || APPID;

            targets.push({
                block: block,
                key: bundleId > 0 ? `bundle/${bundleId}` : `app/${appId}`,
                kind: bundleId > 0 ? "bundle" : "app",
                id: bundleId > 0 ? bundleId : appId
            });
        });
        return targets;
    }

    /* ---------------- 取数（含 6 小时缓存） ---------------- */
    /* 缓存版本号必须与写入一致，否则读永远不命中（旧版 bug：写 v4、读 v3 → 每次刷新都重新请求） */
    const CACHE_TTL = 6 * 60 * 60 * 1e3;
    const CACHE_VER = 4;
    function cacheGet(key) {
        try {
            const hit = GM_getValue(key, null);
            if (hit && hit.v === CACHE_VER && Date.now() - hit.t < CACHE_TTL) return hit.data;
        } catch { /* ignore */ }
        return null;
    }
    function cacheSet(key, data) {
        try { GM_setValue(key, { v: CACHE_VER, t: Date.now(), data: data }); } catch { /* ignore */ }
    }

    const cacheKeyOf = targets => `shcAppLow:v4:${CC}:${targets.map(t => t.key).sort().join("|")}`;

    /* 已有缓存时同步返回，页面立刻就能画出来，不必等网络 */
    function cachedData(targets) {
        const key = cacheKeyOf(targets);
        const cached = cacheGet(key);
        return cached ? { key: key, data: cached } : null;
    }

    async function buildData(targets) {
        const cacheKey = cacheKeyOf(targets);
        const cached = cacheGet(cacheKey);
        if (cached) return cached;

        const appIds = [ ...new Set(targets.filter(t => t.kind === "app").map(t => t.id)) ];
        const bundleIds = [ ...new Set(targets.filter(t => t.kind === "bundle").map(t => t.id)) ];

        const prices = await fetchAugmented(CC, appIds, bundleIds).catch(() => null);
        const out = {};
        targets.forEach(t => {
            const entry = prices && prices[t.key];
            out[t.key] = { low: pickLow(entry), current: pickCurrent(entry) };
        });

        /* 兜底全部并发：小黑盒史低 + Steam 官方现价同时发，不再一个接一个等 */
        await Promise.all(targets.filter(t => t.kind === "app").map(async t => {
            const item = out[t.key];
            const [low, cur] = await Promise.all([
                item.low ? null : fetchXiaoheiheLow(t.id, CC).catch(() => null),
                item.current ? null : fetchSteamCurrent(t.id, CC).catch(() => null)
            ]);
            if (low) item.low = low;
            if (cur) item.current = cur;
        }));

        // 最后兜底：接口缺「当前价」时读页面自身价格（同步、零请求）
        targets.forEach(t => {
            const item = out[t.key];
            if (item.current) return;
            const cur = parseCurrentFromBlock(t.block);
            if (cur) item.current = cur;
        });

        cacheSet(cacheKey, out);
        return out;
    }

    /* ---------------- UI：贴在每个购买区块内、价格行正上方 ---------------- */
    const CSS = `
.shc-low-info{margin:2px 0 6px;font-size:13.5px;line-height:1.7;letter-spacing:0.2px;color:#aebbc7;font-weight:700;
font-family:"Motiva Sans",Arial,sans-serif}
.shc-low-info .shc-row{display:block;white-space:nowrap}
.shc-low-info .shc-label{color:#aebbc7}
.shc-low-info .shc-date{color:#ffffff}
.shc-low-info .shc-shop{color:#cfdae3}
.shc-low-info .shc-price{color:#ffffff}
.shc-low-info .shc-cut{display:inline-block;background:#4c6b22;color:#c9f22f;font-weight:700;
padding:0 4px;margin:0 2px;border-radius:2px;font-size:12.5px;line-height:1.55}
.shc-low-info .shc-none{color:#8f98a0;font-weight:400}
.shc-wl-info{display:block;flex:0 0 auto;margin:0 12px 0 0;text-align:left;
font-size:13.5px;line-height:1.7;letter-spacing:0.2px;color:#aebbc7;font-weight:700;white-space:nowrap;
font-family:"Motiva Sans",Arial,sans-serif}
.shc-wl-info .shc-wl-row{display:block;white-space:nowrap}
.shc-wl-info .shc-wl-label{color:#aebbc7;font-weight:700}
.shc-wl-info .shc-wl-price{color:#ffffff;font-weight:400}
.shc-wl-info .shc-wl-cut{display:inline-block;background:#4c6b22;color:#c9f22f;font-weight:700;
padding:0 4px;margin:0 2px;border-radius:2px;font-size:12.5px;line-height:1.55}
.shc-wl-info .shc-wl-none{color:#8f98a0;font-weight:400}
`;

    function makeRow(label, date, cut, priceText) {
        const row = document.createElement("div");
        row.className = "shc-row";
        const add = (cls, text) => {
            const span = document.createElement("span");
            span.className = cls;
            span.textContent = text;
            row.appendChild(span);
        };
        add("shc-label", label);
        if (date) {
            add("shc-date", date);
            add("shc-label", " 时在 ");
        }
        add("shc-shop", "Steam");
        add("shc-label", " 中的 ");
        /* 按需求：无折扣时也要有胶囊，显示「-0%」；cut 缺失时按 0 处理 */
        add("shc-cut", "-" + (cut > 0 ? cut : 0) + "%");
        add("shc-price", " " + priceText);
        return row;
    }

        /* 没有史低数据但有折扣时：当前价即史低，直接用当前价把这一行填上（不加备注，避免一行折成两行） */
    function makeFallbackLowRow(label, cur) {
        return makeRow(label, "", cur.cut, formatPrice(cur.amount, cur.currency));
    }

    /* 没有数据的那一行也给个占位，保证「历史最低价 / 当前最低价」两行始终都在 */
    function makeEmptyRow(label, text) {
        const row = document.createElement("div");
        row.className = "shc-row";
        const a = document.createElement("span");
        a.className = "shc-label";
        a.textContent = label;
        const b = document.createElement("span");
        b.className = "shc-none";
        b.textContent = text || "暂无记录";
        row.append(a, b);
        return row;
    }

    /* 页面兜底：接口没给「当前价」时，直接读区块自己显示的价格（保证史低、当前两行都有数） */
    const SYM_TO_CUR = { "HK$": "HKD", "NT$": "TWD", "R$": "BRL", "¥": "CNY", "￥": "CNY", "$": "USD", "€": "EUR", "£": "GBP", "₽": "RUB", "₩": "KRW", "₹": "INR" };
    function parseCurrentFromBlock(block) {
        if (!block) return null;
        const el = block.querySelector(".discount_final_price") ||
            block.querySelector(".game_purchase_price") ||
            block.querySelector(".price");
        if (!el) return null;
        const text = String(el.textContent || "").trim();
        const m = text.match(/([^\d]*)([\d][\d.,]*)/);
        if (!m) return null;
        let cur = "CNY";
        Object.keys(SYM_TO_CUR).forEach(sym => { if (m[1].includes(sym)) cur = SYM_TO_CUR[sym]; });
        let numText = m[2].trim();
        if (/,\d{2}$/.test(numText)) numText = numText.replace(".", "").replace(",", ".");   // 1.234,56 欧式
        else numText = numText.replace(/,/g, "");                                             // 1,234.56 英式
        const amount = Number(numText);
        if (!isFinite(amount)) return null;
        const cutText = block.querySelector(".discount_pct");
        const cut = cutText ? (Math.abs(parseInt(String(cutText.textContent).replace(/[^\d]/g, ""), 10)) || 0) : 0;
        return { amount: amount, currency: cur, cut: cut };
    }

    function paintTarget(target, data) {
        if (!data || (!data.low && !data.current)) return;
        if (!target.block.isConnected) return;

        let box = target.block.querySelector(".shc-low-info");
        if (!box) {
            box = document.createElement("div");
            box.className = "shc-low-info";
        }

        /* 内容没变就不重画：避免自己改 DOM → 触发 observer → 再重画 → 死循环重排 */
        const sig = JSON.stringify(data);
        if (box.dataset.sig === sig && box.isConnected) return;
        box.dataset.sig = sig;
        box.textContent = "";

        if (data.low) {
            box.appendChild(makeRow("历史最低价是 ", data.low.date, data.low.cut,
                formatPrice(data.low.amount, data.low.currency)));
        } else if (data.pending) {
            /* 数据还没回来：史低那行写「读取中…」，不拿当前价冒充，避免数字先假后真来回跳 */
            box.appendChild(makeEmptyRow("历史最低价是 ", "读取中…"));
        } else if (data.current && data.current.cut > 0) {
            /* 当前就在打折、且查不到更低价记录 → 当前价即史低 */
            box.appendChild(makeFallbackLowRow("历史最低价是 ", data.current));
        } else {
            box.appendChild(makeEmptyRow("历史最低价是 "));
        }
        if (data.current) {
            box.appendChild(makeRow("当前最低价是在 ", "", data.current.cut,
                formatPrice(data.current.amount, data.current.currency)));
        } else {
            box.appendChild(makeEmptyRow("当前最低价是在 "));
        }

        // 位置：该区块内 .game_purchase_action（价格+按钮行）之前
        if (!box.isConnected) {
            const action = target.block.querySelector(".game_purchase_action");
            if (action) action.insertAdjacentElement("beforebegin", box);
            else target.block.appendChild(box);
        }
        markPaint();
    }

    let firstPaintAt = 0;   // 诊断用：第一次把价格画到页面上的时刻（ms）
    function markPaint() {
        if (firstPaintAt) return;
        firstPaintAt = Math.round(performance.now());
        document.documentElement.dataset.shcMs = String(firstPaintAt);
    }

    function ensureStyle() {
        if (document.querySelector("style[data-shc-low]")) return;
        const style = document.createElement("style");
        style.dataset.shcLow = "1";
        style.textContent = CSS;
        document.head.appendChild(style);
    }

    /* ---------------- 调度 ---------------- */
    let running = false;
    let pending = false;

    async function refresh() {
        if (running) {
            pending = true;
            return;
        }
        running = true;
        try {
            ensureStyle();
            const targets = collectTargets();
            if (!targets.length) return;

            /* 命中缓存 → 直接画，不发任何请求 */
            const hit = cachedData(targets);
            if (hit) {
                targets.forEach(t => paintTarget(t, hit.data[t.key]));
                return;
            }

            /* 未命中 → 先用页面自身的价格立刻画出两行，网络回来后补齐史低 */
            const quick = {};
            targets.forEach(t => {
                quick[t.key] = { low: null, current: parseCurrentFromBlock(t.block), pending: true };
            });
            targets.forEach(t => paintTarget(t, quick[t.key]));

            const data = await buildData(targets);
            targets.forEach(t => paintTarget(t, data[t.key]));
        } finally {
            running = false;
            if (pending) {
                pending = false;
                refresh();
            }
        }
    }

    /* 立刻试一次，没挂上再每 120ms 试（原来固定等 250ms 才第一次动） */
    function bootGamePage() {
        const host = document.querySelector("#game_area_purchase");
        if (!host) return false;
        refresh();
        /* 捆绑包展开/收起等真实结构变化时才重跑；脚本自己的插入不算 */
        let timerId = null;
        const observer = new MutationObserver(muts => {
            const foreign = muts.some(m => {
                const el = m.target.nodeType === 1 ? m.target : m.target.parentElement;
                return !(el && el.closest && el.closest(".shc-low-info"));
            });
            if (!foreign) return;
            clearTimeout(timerId);
            timerId = setTimeout(refresh, 400);
        });
        observer.observe(host, { childList: true });
        return true;
    }

    if (!bootGamePage()) {
        let tries = 0;
        const startTimer = setInterval(() => {
            if (bootGamePage() || ++tries > 40) clearInterval(startTimer);
        }, 120);
    }

    /* ================= 愿望单页 ================= */
    const WL_CHUNK = 50;

    /* 新版愿望单每行是 div.Panel[data-index]，内部类名是每次构建随机生成的哈希，只能靠属性/结构定位；
       旧版页面是 .wishlist_row，两套都兼容 */
    function wishlistRows() {
        const rows = [ ...document.querySelectorAll("div.Panel[data-index]") ]
            .filter(row => row.querySelector('a[href*="/app/"]'));
        if (rows.length) return rows;
        return [ ...document.querySelectorAll(".wishlist_row") ];
    }

    function wishlistRowAppId(row) {
        let id = Number(row.getAttribute("data-app-id") || row.getAttribute("data-ds-appid") || row.getAttribute("data-appid"));
        if (!id) {
            for (const a of row.querySelectorAll("a[href]")) {   // 行内第一个 /app/ 链接就是游戏本体
                const m = String(a.getAttribute("href") || "").match(/\/app\/(\d+)/);
                if (m) { id = Number(m[1]); break; }
            }
        }
        return id;
    }

    /* 新版行是 CSS Grid，价格 + 「添加到购物车」所在格的 gridArea 名为 purchase */
    function wishlistPriceCell(row) {
        for (const cell of row.querySelectorAll("div")) {
            if (/\bpurchase\b/.test(getComputedStyle(cell).gridArea)) return cell;
        }
        return null;
    }

    /* 价格格里「价格 + 添加到购物车」是最后那条 flex 横排；史低块插进它最前面，就和价格同一行、靠左 */
    function wishlistPriceLine(cell, box) {
        const kids = [...cell.children].filter(c => c !== box);
        for (let i = kids.length - 1; i >= 0; i--) {
            const cs = getComputedStyle(kids[i]);
            if (cs.display.indexOf("flex") > -1 && cs.flexDirection.indexOf("row") === 0) return kids[i];
        }
        return null;
    }

    function textSpan(cls, text) {
        const span = document.createElement("span");
        if (cls) span.className = cls;
        span.textContent = text;
        return span;
    }

    const PRICE_RE = /(HK\$|NT\$|R\$|¥|￥|\$|€|£|₽|₩|₹)\s*([\d][\d.,]*)/g;

    function priceNumber(text) {
        return /,\d{2}$/.test(text) ? Number(text.replace(".", "").replace(",", ".")) : Number(text.replace(/,/g, ""));
    }

    /* 读价格格文本时跳过脚本自己插进去的块，避免把上次显示的数字又读回来 */
    function priceTextExcludingBox(scope) {
        let out = "";
        const walk = node => {
            node.childNodes.forEach(n => {
                if (n.nodeType === 3) out += n.nodeValue;
                else if (n.nodeType === 1 && !n.classList.contains("shc-wl-info")) walk(n);
            });
        };
        walk(scope);
        return out;
    }

    /* 愿望单行内价格直接读 DOM（不打请求），只把拿不到的部分交给接口 */
    function wishlistRowPrice(row) {
        const cell = wishlistPriceCell(row);
        const scope = cell || row;

        /* Steam 自带 aria-label：「立省 10%。原价为 ¥77.00，折后为 ¥69.30。」——折后价才是当前价 */
        const labeled = scope.querySelector('[aria-label*="折后"]');
        if (labeled) {
            const label = labeled.getAttribute("aria-label") || "";
            const m = label.match(/折后为\s*(HK\$|NT\$|R\$|¥|￥|\$|€|£|₽|₩|₹)\s*([\d][\d.,]*)/) ||
                label.match(/(HK\$|NT\$|R\$|¥|￥|\$|€|£|₽|₩|₹)\s*([\d][\d.,]*)/);
            if (m) {
                const amount = priceNumber(m[2]);
                const pct = label.match(/立省\s*(\d+)%/);
                if (amount > 0) {
                    return { amount: amount, currency: SYM_TO_CUR[m[1]] || "CNY", cut: pct ? Number(pct[1]) : 0 };
                }
            }
        }

        /* 兜底：有折扣的是「原价 折后价」两个数字，取最后一个；只有一个就直接用 */
        const text = priceTextExcludingBox(scope);
        const all = [];
        let m;
        PRICE_RE.lastIndex = 0;
        while ((m = PRICE_RE.exec(text))) all.push(m);
        if (!all.length) return null;
        const last = all[all.length - 1];
        const amount = priceNumber(last[2]);
        if (!(amount > 0)) return null;
        const pct = text.match(/[-–]\s*(\d+)\s*%/) || text.match(/(\d+)\s*%/);
        return { amount: amount, currency: SYM_TO_CUR[last[1]] || "CNY", cut: pct ? Number(pct[1]) : 0 };
    }

    async function fetchWishlistData(appIds, seed) {
        const cacheKey = `shcWlLow:v4:${CC}:${appIds.slice().sort().join("|")}`;
        const cached = cacheGet(cacheKey);
        if (cached) return cached;

        const out = {};
        for (let i = 0; i < appIds.length; i += WL_CHUNK) {
            const chunk = appIds.slice(i, i + WL_CHUNK);
            const prices = await fetchAugmented(CC, chunk, []).catch(() => null);
            if (!prices) continue;
            chunk.forEach(id => {
                const entry = prices["app/" + id];
                if (entry) out[id] = { low: pickLow(entry), current: pickCurrent(entry) };
            });
        }

        /* 页面能读到的现价先顶上，剩下的才发请求；史低才用小黑盒，并发 8 路 */
        const queue = [];
        appIds.forEach(id => {
            const item = out[id] || (out[id] = { low: null, current: null });
            if (!item.current && seed[id]) item.current = seed[id];
            if (!item.low) queue.push(id);
        });

        const worker = async () => {
            while (queue.length) {
                const id = queue.shift();
                const item = out[id];
                if (!item.current) {
                    const cur = await fetchSteamCurrent(id, CC).catch(() => null);
                    if (cur) item.current = cur;
                }
                const low = await fetchXiaoheiheLow(id, CC).catch(() => null);
                if (low) item.low = low;
            }
        };
        await Promise.all([worker(), worker(), worker(), worker(), worker(), worker(), worker(), worker()]);

        cacheSet(cacheKey, out);
        return out;
    }

    function paintWishlistRow(row, data) {
        if (!data || (!data.low && !data.current)) {
            const stale = row.querySelector(".shc-wl-info");
            if (stale) stale.remove();
            return;
        }
        if (!row.isConnected) return;

        let box = row.querySelector(".shc-wl-info");
        if (!box) {
            box = document.createElement("div");
            box.className = "shc-wl-info";
        }
        const sig = JSON.stringify(data);
        if (box.dataset.sig === sig && box.isConnected && box.parentElement) return;
        box.dataset.sig = sig;
        box.textContent = "";

        if (data.low) {
            const line = document.createElement("span");
            line.className = "shc-wl-row";
            line.appendChild(textSpan("shc-wl-label", "史低: "));
            line.appendChild(textSpan("shc-wl-price", formatPrice(data.low.amount, data.low.currency)));
            if (data.low.cut > 0) line.appendChild(textSpan("shc-wl-cut", "-" + data.low.cut + "%"));
            box.appendChild(line);
        } else if (data.pending) {
            /* 史低还没取到：写「读取中…」，不拿当前价冒充 */
            const line = document.createElement("span");
            line.className = "shc-wl-row";
            line.appendChild(textSpan("shc-wl-label", "史低: "));
            line.appendChild(textSpan("shc-wl-none", "读取中…"));
            box.appendChild(line);
        } else if (data.current && data.current.cut > 0) {
            /* 当前就在打折、查不到更低价记录 → 用当前价顶替史低 */
            const line = document.createElement("span");
            line.className = "shc-wl-row";
            line.appendChild(textSpan("shc-wl-label", "史低: "));
            line.appendChild(textSpan("shc-wl-price", formatPrice(data.current.amount, data.current.currency)));
            line.appendChild(textSpan("shc-wl-cut", "-" + data.current.cut + "%"));
            box.appendChild(line);
        } else {
            const line = document.createElement("span");
            line.className = "shc-wl-row";
            line.appendChild(textSpan("shc-wl-label", "史低: "));
            line.appendChild(textSpan("shc-wl-none", "暂无记录"));
            box.appendChild(line);
        }
        if (data.current) {
            const line = document.createElement("span");
            line.className = "shc-wl-row";
            line.appendChild(textSpan("shc-wl-label", "当前: "));
            line.appendChild(textSpan("shc-wl-price", formatPrice(data.current.amount, data.current.currency)));
            box.appendChild(line);
        } else {
            const line = document.createElement("span");
            line.className = "shc-wl-row";
            line.appendChild(textSpan("shc-wl-label", "当前: "));
            line.appendChild(textSpan("shc-wl-none", "暂无记录"));
            box.appendChild(line);
        }

        /* 新版：插进价格格里那条「价格 + 购物车」横排的最前面，与价格同一行、整体靠左 */
        markPaint();
        const cell = wishlistPriceCell(row);
        if (cell) {
            const line = wishlistPriceLine(cell, box);
            if (line) {
                line.style.alignItems = "center";
                if (box.parentElement !== line || line.firstElementChild !== box) {
                    line.insertBefore(box, line.firstElementChild);
                }
                return;
            }
            /* 兜底：格子里没有横排就退回格子最前面 */
            if (box.parentElement !== cell || cell.firstElementChild !== box) {
                cell.insertBefore(box, cell.firstElementChild);
            }
            return;
        }
        /* 旧版页面兜底 */
        if (!box.isConnected) {
            const anchor = row.querySelector(".discount_block, .btn_addtocart, .wishlist_add_to_cart");
            if (anchor && anchor.parentElement) anchor.parentElement.insertBefore(box, anchor);
            else (row.querySelector(".wl_right") || row).appendChild(box);
        }
    }

    let wlRunning = false;
    let wlPending = false;
    let wlData = {};   // 本页已取到的价格，供行重建后快速补画

    async function refreshWishlist() {
        if (wlRunning) {
            wlPending = true;
            return;
        }
        wlRunning = true;
        try {
            ensureStyle();
            const rows = wishlistRows();
            if (!rows.length) return;
            const ids = [ ...new Set(rows.map(wishlistRowAppId).filter(Boolean)) ];
            if (!ids.length) return;

            /* 页面可见的现价先同步补上，接口返回后再覆盖 */
            const seed = {};
            rows.forEach(row => {
                const id = wishlistRowAppId(row);
                if (!id) return;
                const p = wishlistRowPrice(row);
                if (p) seed[id] = p;
            });

            /* 先把页面自带的现价画上去，接口回来再补齐史低 */
            rows.forEach(row => {
                const id = wishlistRowAppId(row);
                if (id && seed[id]) paintWishlistRow(row, { low: null, current: seed[id], pending: true });
            });

            const data = await fetchWishlistData(ids, seed);
            wlData = data;
            rows.forEach(row => {
                const id = wishlistRowAppId(row);
                if (id && data[id]) paintWishlistRow(row, data[id]);
            });
        } finally {
            wlRunning = false;
            if (wlPending) {
                wlPending = false;
                refreshWishlist();
            }
        }
    }

    function startWishlistPage() {
        function bootWishlist() {
            if (!wishlistRows().length) return false;
            refreshWishlist();
            let debounceId = null;
            let lastSig = wishlistRows().map(wishlistRowAppId).join(",");
            const observer = new MutationObserver(muts => {
                /* 脚本自己插入/重画造成的变更直接忽略，避免自我触发 */
                const foreign = muts.some(m => {
                    const el = m.target.nodeType === 1 ? m.target : m.target.parentElement;
                    return !(el && el.closest && el.closest(".shc-wl-info"));
                });
                if (!foreign) return;
                // 滚动懒加载 / 翻页 / Steam 自己重建行 → 行集合变化才重新取数
                const sig = wishlistRows().map(wishlistRowAppId).join(",");
                if (sig !== lastSig) {
                    lastSig = sig;
                    clearTimeout(debounceId);
                    debounceId = setTimeout(refreshWishlist, 350);
                    return;
                }
                // 行数没变但行被重建（脚本插入的块会跟着消失）→ 用已有数据直接补画
                wishlistRows().forEach(row => {
                    if (row.querySelector(".shc-wl-info")) return;
                    const id = wishlistRowAppId(row);
                    if (id && wlData[id]) paintWishlistRow(row, wlData[id]);
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
            return true;
        }

        if (!bootWishlist()) {
            let wlTries = 0;
            const wlTimer = setInterval(() => {
                if (bootWishlist() || ++wlTries > 40) clearInterval(wlTimer);
            }, 120);
        }
    }

    /* ================= 自动更新兜底 ================= */
    /* 用户脚本头部只能写一条 @updateURL，写多行也只有一条生效。
       走 ghfast 加速直取 raw：不缓存，拉到的永远是 main 最新内容；
       jsDelivr 的 @main 有 12 小时缓存，实测 purge 后仍会返回旧版，所以只当最后的兜底。 */
    const SELF_VERSION = (typeof GM_info !== "undefined" && GM_info.script && GM_info.script.version) || "1.3.0";
    const UPDATE_MIRRORS = [
        "https://ghfast.top/https://raw.githubusercontent.com/ZzicoChen/Steam-SD/main/Steam-SD.js",  // 主更新地址：加速直取 raw，不缓存
        "https://raw.githubusercontent.com/ZzicoChen/Steam-SD/main/Steam-SD.js",   // 原地址：GitHub raw 源头
        "https://cdn.jsdelivr.net/gh/ZzicoChen/Steam-SD@main/Steam-SD.js"          // 兜底：jsDelivr，有 12 小时缓存可能滞后
    ];

    function compareVersion(a, b) {   // a 比 b 新返回 1，旧返回 -1，同版本 0
        const pa = String(a || "0").split(".").map(Number);
        const pb = String(b || "0").split(".").map(Number);
        for (let i = 0; i < 3; i++) {
            const x = pa[i] || 0, y = pb[i] || 0;
            if (x !== y) return x > y ? 1 : -1;
        }
        return 0;
    }

    function showUpdateTip(version, url) {
        if (document.getElementById("shc-update-tip")) return;
        const box = document.createElement("div");
        box.id = "shc-update-tip";
        box.style.cssText = "position:fixed;right:16px;bottom:16px;z-index:99999;background:#1b2838;" +
            "color:#c6d4df;border:1px solid #4c6b22;border-radius:4px;padding:10px 14px;" +
            "font-size:13px;line-height:1.6;box-shadow:0 4px 16px rgba(0,0,0,.5);font-family:inherit";
        const text = document.createElement("span");
        text.textContent = `脚本有新版本 v${version}，`;
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.textContent = "点此安装";
        link.style.cssText = "color:#a4d007;text-decoration:none";
        const close = document.createElement("span");
        close.textContent = "✕";
        close.style.cssText = "margin-left:12px;cursor:pointer;color:#8f98a0";
        close.onclick = () => box.remove();
        box.append(text, link, close);
        document.body.appendChild(box);
    }

    async function checkSelfUpdate() {
        try {
            const key = "shcSelfUpdateCheckAt";
            const last = Number(GM_getValue(key, 0)) || 0;
            if (Date.now() - last < 6 * 60 * 60 * 1e3) return;   // 6 小时内只核对一次
            GM_setValue(key, Date.now());
        } catch { return; }

        for (const url of UPDATE_MIRRORS) {
            try {
                const text = await request({
                    url: url + (url.includes("?") ? "&" : "?") + "_=" + Date.now(),
                    timeout: 12000
                });
                const m = String(text).match(/@version\s+([\d.]+)/);
                if (!m) continue;
                if (compareVersion(m[1], SELF_VERSION) > 0) {
                    showUpdateTip(m[1], url);
                    return;   // 已提示，不再继续试后面的镜像
                }
            } catch { /* 这个镜像不通，换下一个 */ }
        }
    }

    /* ================= 入口分发 ================= */
    if (!APP_MATCH && /^\/wishlist/i.test(location.pathname)) {
        startWishlistPage();
    }
    checkSelfUpdate();
})();
