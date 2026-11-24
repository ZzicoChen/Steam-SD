// ==UserScript==
// @name         Steam游戏历史最低价格
// @namespace    https://github.com/beerleexc
// @version      1.1.1
// @description  在 Steam 游戏商店页每个「购买」区块内、愿望单列表每一行，显示历史最低价与当前最低价（Steam 渠道），自动跳过下载 Demo、请求访问权限等区块
// @author       beerlee
// @license      MIT
// @updateURL    https://cdn.jsdelivr.net/gh/ZzicoChen/Steam-SD@main/Steam-SD.js
// @downloadURL  https://cdn.jsdelivr.net/gh/ZzicoChen/Steam-SD@main/Steam-SD.js
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
// 备用直链（GitHub raw 原地址，国内可能无法访问）：https://raw.githubusercontent.com/ZzicoChen/Steam-SD/main/Steam-SD.js
// 备用镜像（第三方加速，国内可用）：https://ghfast.top/https://raw.githubusercontent.com/ZzicoChen/Steam-SD/main/Steam-SD.js
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
    function request(opts) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: opts.method || "GET",
                url: opts.url,
                headers: opts.headers || {},
                data: opts.data === undefined ? undefined : JSON.stringify(opts.data),
                timeout: opts.timeout || 15000,
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
    const CACHE_TTL = 6 * 60 * 60 * 1e3;
    function cacheGet(key) {
        try {
            const hit = GM_getValue(key, null);
            if (hit && hit.v === 3 && Date.now() - hit.t < CACHE_TTL) return hit.data;
        } catch { /* ignore */ }
        return null;
    }
    function cacheSet(key, data) {
        try { GM_setValue(key, { v: 3, t: Date.now(), data: data }); } catch { /* ignore */ }
    }

    async function buildData(targets) {
        const cacheKey = `shcAppLow:v3:${CC}:${targets.map(t => t.key).sort().join("|")}`;
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

        // app 区块兜底：小黑盒史低 / Steam 官方当前价
        for (const t of targets) {
            if (t.kind !== "app") continue;
            if (!out[t.key].low) {
                const low = await fetchXiaoheiheLow(t.id, CC).catch(() => null);
                if (low) out[t.key].low = low;
            }
            if (!out[t.key].current) {
                const cur = await fetchSteamCurrent(t.id, CC).catch(() => null);
                if (cur) out[t.key].current = cur;
            }
        }

        cacheSet(cacheKey, out);
        return out;
    }

    /* ---------------- UI：贴在每个购买区块内、价格行正上方 ---------------- */
    const CSS = `
.shc-low-info{margin:2px 0 6px;font-size:13px;line-height:1.7;color:#8f98a0;
font-family:"Motiva Sans",Arial,sans-serif}
.shc-low-info .shc-row{display:block;white-space:nowrap}
.shc-low-info .shc-date,.shc-low-info .shc-shop,.shc-low-info .shc-price{color:#c6d4df}
.shc-low-info .shc-cut{display:inline-block;background:#4c6b22;color:#beee11;
padding:0 4px;margin:0 2px;border-radius:2px;font-size:12px;line-height:1.55}
.shc-wl-info{display:inline-block;vertical-align:middle;flex:0 0 auto;margin:0 14px 0 0;text-align:right;
font-size:12px;line-height:1.5;color:#8f98a0;white-space:nowrap;
font-family:"Motiva Sans",Arial,sans-serif}
.shc-wl-info .shc-wl-row{display:block}
.shc-wl-info .shc-wl-price{color:#c6d4df}
.shc-wl-info .shc-wl-cut{color:#a4d007}
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
        add("shc-cut", "-" + cut + "%");
        add("shc-price", " " + priceText);
        return row;
    }

    function paintTarget(target, data) {
        if (!data || (!data.low && !data.current)) return;
        if (!target.block.isConnected) return;

        let box = target.block.querySelector(".shc-low-info");
        if (!box) {
            box = document.createElement("div");
            box.className = "shc-low-info";
        }
        box.textContent = "";

        if (data.low) {
            box.appendChild(makeRow("历史最低价是 ", data.low.date, data.low.cut,
                formatPrice(data.low.amount, data.low.currency)));
        }
        if (data.current) {
            box.appendChild(makeRow("当前最低价是在 ", "", data.current.cut,
                formatPrice(data.current.amount, data.current.currency)));
        }

        // 位置：该区块内 .game_purchase_action（价格+按钮行）之前
        if (!box.isConnected) {
            const action = target.block.querySelector(".game_purchase_action");
            if (action) action.insertAdjacentElement("beforebegin", box);
            else target.block.appendChild(box);
        }
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

    let tries = 0;
    const startTimer = setInterval(() => {
        const host = document.querySelector("#game_area_purchase");
        if (host) {
            clearInterval(startTimer);
            refresh();
            // 捆绑包展开/隐藏、区块动态出现时补挂
            let timerId = null;
            const observer = new MutationObserver(() => {
                clearTimeout(timerId);
                timerId = setTimeout(refresh, 300);
            });
            observer.observe(host, { childList: true });
        } else if (++tries > 20) {
            clearInterval(startTimer);
        }
    }, 250);

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

    function textSpan(cls, text) {
        const span = document.createElement("span");
        if (cls) span.className = cls;
        span.textContent = text;
        return span;
    }

    async function fetchWishlistData(appIds) {
        const cacheKey = `shcWlLow:v3:${CC}:${appIds.slice().sort().join("|")}`;
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

        // 缺失项兜底：小黑盒史低 / Steam 官方当前价（限并发，避免一次打太多请求）
        const queue = appIds.filter(id => !out[id] || (!out[id].low && !out[id].current));
        const worker = async () => {
            while (queue.length) {
                const id = queue.shift();
                const item = out[id] || (out[id] = { low: null, current: null });
                if (!item.low) {
                    const low = await fetchXiaoheiheLow(id, CC).catch(() => null);
                    if (low) item.low = low;
                }
                if (!item.current) {
                    const cur = await fetchSteamCurrent(id, CC).catch(() => null);
                    if (cur) item.current = cur;
                }
            }
        };
        await Promise.all([ worker(), worker(), worker() ]);

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
        box.textContent = "";

        if (data.low) {
            const line = document.createElement("span");
            line.className = "shc-wl-row";
            line.appendChild(textSpan("", "史低: "));
            line.appendChild(textSpan("shc-wl-price", formatPrice(data.low.amount, data.low.currency)));
            if (data.low.cut > 0) line.appendChild(textSpan("shc-wl-cut", " -" + data.low.cut + "%"));
            box.appendChild(line);
        }
        if (data.current) {
            const line = document.createElement("span");
            line.className = "shc-wl-row";
            line.appendChild(textSpan("", "当前: "));
            line.appendChild(textSpan("shc-wl-price", formatPrice(data.current.amount, data.current.currency)));
            box.appendChild(line);
        }

        /* 新版：插进价格格（purchase）最前面，价格与按钮保持原位、整组靠右 */
        const cell = wishlistPriceCell(row);
        if (cell) {
            if (getComputedStyle(cell).alignItems !== "center") cell.style.alignItems = "center";
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
            const data = await fetchWishlistData(ids);
            wlData = data;
            rows.forEach(row => {
                const id = wishlistRowAppId(row);
                if (id) paintWishlistRow(row, data[id]);
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
        let wlTries = 0;
        const wlTimer = setInterval(() => {
            if (wishlistRows().length) {
                clearInterval(wlTimer);
                refreshWishlist();
                let debounceId = null;
                let lastSig = wishlistRows().map(wishlistRowAppId).join(",");
                const observer = new MutationObserver(() => {
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
            } else if (++wlTries > 40) {
                clearInterval(wlTimer);
            }
        }, 250);
    }

    /* ================= 自动更新兜底 ================= */
    /* 用户脚本头部只能写一条 @updateURL，写多行也只有一条生效。
       这里额外主动核对多个镜像，谁先返回新版本就提示谁，避免镜像缓存或域名不可达时一直收不到更新。 */
    const SELF_VERSION = (typeof GM_info !== "undefined" && GM_info.script && GM_info.script.version) || "1.1.1";
    const UPDATE_MIRRORS = [
        "https://cdn.jsdelivr.net/gh/ZzicoChen/Steam-SD@main/Steam-SD.js",   // 元数据里的主更新地址
        "https://raw.githubusercontent.com/ZzicoChen/Steam-SD/main/Steam-SD.js",  // GitHub 原地址
        "https://ghfast.top/https://raw.githubusercontent.com/ZzicoChen/Steam-SD/main/Steam-SD.js"  // 国内加速兜底
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
