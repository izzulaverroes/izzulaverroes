function e(e) { return e && e.__esModule ? e.default : e } var o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}, t = {}, n = {}, r = o.parcelRequire3a9a; null == r && ((r = function (e) { if (e in t) return t[e].exports; if (e in n) { var o = n[e]; delete n[e]; var r = { id: e, exports: {} }; return t[e] = r, o.call(r.exports, r, r.exports), r.exports } var a = Error("Cannot find module '" + e + "'"); throw a.code = "MODULE_NOT_FOUND", a }).register = function (e, o) { n[e] = o }, o.parcelRequire3a9a = r); var a = r("1Emd6"); let l = document.images, i = 0, d = l.length, c = document.querySelector(".loader"), s = document.querySelector(".loader__information_percent"), u = document.querySelector(".loader__information_progress"); e(a).set(".loader__content_logo", { yPercent: 110 }), e(a).set(".loader__information_percent", { yPercent: 110 }); const f = async () => { console.log(`${100 / d * (i += 1) << 0}%`), i === d && _() }, _ = () => { let o = e(a).timeline(); o.to(u, { width: "100%", duration: 2, ease: Power1.easeIn }), o.fromTo(s, { textContent: "0%" }, { textContent: "100%", snap: { textContent: 1 }, duration: 2, ease: Power1.easeIn }, "<"), o.to(c, { opacity: 0, ease: Power1.easeIn }), o.to(c, { zIndex: -1 }) }; e(a).set(".loader", { opacity: 1, pointerEvents: "all" }), (() => { e(a).to(".loader__content_logo", { yPercent: 0 }, "<"), e(a).to(".loader__information_percent", { yPercent: 0 }, "<25%"); for (let e = 0; e < d; e++) { let o = new Image; o.onload = f, o.onerror = f, o.src = l[e].src } })()