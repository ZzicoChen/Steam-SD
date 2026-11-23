// ==UserScript==
// @name         Steam游戏页历史最低价格
// @namespace    https://github.com/beerleexc
// @version      1.0.4
// @description  在 Steam 游戏商店页每个「购买」区块内显示历史最低价与当前最低价（Steam 渠道），自动跳过下载 Demo、请求访问权限等区块
// @author       beerlee
// @license      MIT
// @icon         https://store.steampowered.com/favicon.ico
// @icon         https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg
// @match        https://store.steampowered.com/app/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      api.augmentedsteam.com
// @connect      api.xiaoheihe.cn
// @connect      store.steampowered.com
// @run-at       document-end
// ==/UserScript==

(function () {
    "use strict";
    if (document.documentElement.dataset.shcLowActive) return;
    document.documentElement.dataset.shcLowActive = "1";

    const APP_MATCH = location.pathname.match(/\/app\/(\d+)/);
    if (!APP_MATCH) return;
    const APPID = Number(APP_MATCH[1]);

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
font-family:"Motiva Sans",Arial,Helvetica,sans-serif}
.shc-low-info .shc-row{display:block;white-space:nowrap}
.shc-low-info .shc-date,.shc-low-info .shc-shop,.shc-low-info .shc-price{color:#c6d4df}
.shc-low-info .shc-cut{display:inline-block;background:#4c6b22;color:#beee11;
padding:0 4px;margin:0 2px;border-radius:2px;font-size:12px;line-height:1.55}
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
})();
