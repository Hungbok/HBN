function history_data() {
    readTextFile("/data/anime/meitantei-conan.json", function (text) {
        let title = "meitantei-conan"
        let data = JSON.parse(text);
        let pHtml = '<div class="data-title ' + title + '">' + $('.data-title.' + title).html() + '</div>';
        let nHtml = '';
        $('.data-title.' + title).remove();
        data.forEach(function (v, i) {
            let res = pHtml.replace("{count}", i + 1);
            res = res.replace("{id}", v.id);
            res = res.replace("{input}", v.input);
            res = res.replace("{label}", v.label);
            res = res.replace("{div}", v.div);
            res = res.replace("{history_item}", v.history_item);
            res = res.replace("{card-link}", v.card_link);
            res = res.replace("{watched}", v.watched);
            res = res.replace("{thumbnail}", v.thumbnail);
            res = res.replace("{type}", v.type);
            res = res.replace("{type_value}", v.type_value);
            res = res.replace("{year}", v.year);
            res = res.replace("{year_value}", v.year_value);
            res = res.replace("{episode}", v.episode);
            res = res.replace("{episode_value}", v.episode_value);
            res = res.replace("{title_ko}", v.title_ko);
            res = res.replace("{title_ko_title}", v.title_ko_title);
            res = res.replace("{title_en}", v.title_en);
            res = res.replace("{title_en_title}", v.title_en_title);
            res = res.replace("{title_ja}", v.title_ja);
            res = res.replace("{title_ja_title}", v.title_ja_title);
            res = res.replace("{title}", v.title);
            res = res.replace("{title_title}", v.title_title);
            res = res.replace("{tag}", v.tag);
            res = res.replace("{tag_value}", v.tag_value);
            res = res.replace("{subtitle_first}", v.subtitle_first);
            res = res.replace("{subtitle_second}", v.subtitle_second);
            res = res.replace("{subtitle_third}", v.subtitle_third);
            res = res.replace("{subtitle}", v.subtitle);
            res = res.replace("{subtitle_first_class}", v.subtitle_first_class);
            res = res.replace("{subtitle_second_class}", v.subtitle_second_class);
            res = res.replace("{subtitle_third_class}", v.subtitle_third_class);
            res = res.replace("{subtitle_class}", v.subtitle_class);
            res = res.replace("{background}", v.background);
            res = res.replace("{poster}", v.poster);
            res = res.replace("{korean_title}", v.korean_title);
            res = res.replace("{original_title}", v.original_title);
            nHtml += res;
        });
        $('.data.' + title).after(nHtml);
    });
    readTextFile("/data/anime/meitantei-conan-hannin-no-hanzawa-san.json", function (text) {
        let title = "meitantei-conan-hannin-no-hanzawa-san"
        let data = JSON.parse(text);
        let pHtml = '<div class="data-title ' + title + '">' + $('.data-title.' + title).html() + '</div>';
        let nHtml = '';
        $('.data-title.' + title).remove();
        data.forEach(function (v, i) {
            let res = pHtml.replace("{count}", i + 1);
            res = res.replace("{id}", v.id);
            res = res.replace("{input}", v.input);
            res = res.replace("{label}", v.label);
            res = res.replace("{div}", v.div);
            res = res.replace("{history_item}", v.history_item);
            res = res.replace("{card-link}", v.card_link);
            res = res.replace("{watched}", v.watched);
            res = res.replace("{thumbnail}", v.thumbnail);
            res = res.replace("{type}", v.type);
            res = res.replace("{type_value}", v.type_value);
            res = res.replace("{year}", v.year);
            res = res.replace("{year_value}", v.year_value);
            res = res.replace("{episode}", v.episode);
            res = res.replace("{episode_value}", v.episode_value);
            res = res.replace("{title_ko}", v.title_ko);
            res = res.replace("{title_ko_title}", v.title_ko_title);
            res = res.replace("{title_en}", v.title_en);
            res = res.replace("{title_en_title}", v.title_en_title);
            res = res.replace("{title_ja}", v.title_ja);
            res = res.replace("{title_ja_title}", v.title_ja_title);
            res = res.replace("{title}", v.title);
            res = res.replace("{title_title}", v.title_title);
            res = res.replace("{tag}", v.tag);
            res = res.replace("{tag_value}", v.tag_value);
            res = res.replace("{subtitle_first}", v.subtitle_first);
            res = res.replace("{subtitle_second}", v.subtitle_second);
            res = res.replace("{subtitle_third}", v.subtitle_third);
            res = res.replace("{subtitle}", v.subtitle);
            res = res.replace("{subtitle_first_class}", v.subtitle_first_class);
            res = res.replace("{subtitle_second_class}", v.subtitle_second_class);
            res = res.replace("{subtitle_third_class}", v.subtitle_third_class);
            res = res.replace("{subtitle_class}", v.subtitle_class);
            res = res.replace("{background}", v.background);
            res = res.replace("{poster}", v.poster);
            res = res.replace("{korean_title}", v.korean_title);
            res = res.replace("{original_title}", v.original_title);
            nHtml += res;
        });
        $('.data.' + title).after(nHtml);
    });
    readTextFile("/data/anime/tenki-no-ko.json", function (text) {
        let title = "tenki-no-ko"
        let data = JSON.parse(text);
        let pHtml = '<div class="data-title ' + title + '">' + $('.data-title.' + title).html() + '</div>';
        let nHtml = '';
        $('.data-title.' + title).remove();
        data.forEach(function (v, i) {
            let res = pHtml.replace("{count}", i + 1);
            res = res.replace("{id}", v.id);
            res = res.replace("{input}", v.input);
            res = res.replace("{label}", v.label);
            res = res.replace("{div}", v.div);
            res = res.replace("{history_item}", v.history_item);
            res = res.replace("{card-link}", v.card_link);
            res = res.replace("{watched}", v.watched);
            res = res.replace("{thumbnail}", v.thumbnail);
            res = res.replace("{type}", v.type);
            res = res.replace("{type_value}", v.type_value);
            res = res.replace("{season_type}", v.s_type);
            res = res.replace("{episode_type}", v.e_type);
            res = res.replace("{year}", v.year);
            res = res.replace("{year_value}", v.year_value);
            res = res.replace("{season}", v.season);
            res = res.replace("{episode}", v.episode);
            res = res.replace("{episode_value}", v.episode_value);
            res = res.replace("{title_ko}", v.ko_title);
            res = res.replace("{title_ko_title}", v.ko_title_ti);
            res = res.replace("{title_en}", v.en_title);
            res = res.replace("{title_en_title}", v.en_title_ti);
            res = res.replace("{title_ja}", v.ja_title);
            res = res.replace("{title_ja_title}", v.ja_title_ti);
            res = res.replace("{title}", v.title);
            res = res.replace("{title_title}", v.title_ti);
            res = res.replace("{tag}", v.tag);
            res = res.replace("{tag_value}", v.tag_value);
            res = res.replace("{subtitle_first}", v.subtitle_first);
            res = res.replace("{subtitle_second}", v.subtitle_second);
            res = res.replace("{subtitle_third}", v.subtitle_third);
            res = res.replace("{subtitle}", v.subtitle);
            res = res.replace("{subtitle_first_class}", v.subtitle_first_class);
            res = res.replace("{subtitle_second_class}", v.subtitle_second_class);
            res = res.replace("{subtitle_third_class}", v.subtitle_third_class);
            res = res.replace("{subtitle_class}", v.subtitle_class);
            res = res.replace("{background}", v.background);
            res = res.replace("{background_onerror}", v.background_onerror);
            res = res.replace("{poster}", v.poster);
            res = res.replace("{logo}", v.logo);
            res = res.replace("{korean_title}", v.korean_title);
            res = res.replace("{original_title}", v.original_title);
            nHtml += res;
        });
        $('.data.' + title).after(nHtml);
    });
    readTextFile("/data/anime/cyberpunk-edgerunners.json", function (text) {
        let title = "cyberpunk-edgerunners"
        let data = JSON.parse(text);
        let pHtml = '<div class="data-title ' + title + '">' + $('.data-title.' + title).html() + '</div>';
        let nHtml = '';
        $('.data-title.' + title).remove();
        data.forEach(function (v, i) {
            let res = pHtml.replace("{count}", i + 1);
            res = res.replace("{id}", v.id);
            res = res.replace("{input}", v.input);
            res = res.replace("{label}", v.label);
            res = res.replace("{div}", v.div);
            res = res.replace("{history_item}", v.history_item);
            res = res.replace("{card-link}", v.card_link);
            res = res.replace("{watched}", v.watched);
            res = res.replace("{thumbnail}", v.thumbnail);
            res = res.replace("{type}", v.type);
            res = res.replace("{type_value}", v.type_value);
            res = res.replace("{year}", v.year);
            res = res.replace("{year_value}", v.year_value);
            res = res.replace("{episode}", v.episode);
            res = res.replace("{episode_value}", v.episode_value);
            res = res.replace("{title_ko}", v.title_ko);
            res = res.replace("{title_ko_title}", v.title_ko_title);
            res = res.replace("{title_en}", v.title_en);
            res = res.replace("{title_en_title}", v.title_en_title);
            res = res.replace("{title_ja}", v.title_ja);
            res = res.replace("{title_ja_title}", v.title_ja_title);
            res = res.replace("{title}", v.title);
            res = res.replace("{title_title}", v.title_title);
            res = res.replace("{tag}", v.tag);
            res = res.replace("{tag_value}", v.tag_value);
            res = res.replace("{subtitle_first}", v.subtitle_first);
            res = res.replace("{subtitle_second}", v.subtitle_second);
            res = res.replace("{subtitle_third}", v.subtitle_third);
            res = res.replace("{subtitle}", v.subtitle);
            res = res.replace("{subtitle_first_class}", v.subtitle_first_class);
            res = res.replace("{subtitle_second_class}", v.subtitle_second_class);
            res = res.replace("{subtitle_third_class}", v.subtitle_third_class);
            res = res.replace("{subtitle_class}", v.subtitle_class);
            res = res.replace("{background}", v.background);
            res = res.replace("{poster}", v.poster);
            res = res.replace("{korean_title}", v.korean_title);
            res = res.replace("{original_title}", v.original_title);
            nHtml += res;
        });
        $('.data.' + title).after(nHtml);
    })
}

parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++) try {
        f(t[c])
    } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "EmXE": [function(require, module, exports) {
        "use strict";

        function e(e) {
            return "object" == typeof window.Node ? e instanceof window.Node : null !== e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var o = e;
        exports.default = o;
    }, {}],
    "ZaRA": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = t(require("is-dom-node"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(t) {
            var o = Object.prototype.toString.call(t);
            return "object" == typeof window.NodeList ? t instanceof window.NodeList : null !== t && "object" == typeof t && "number" == typeof t.length && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(o) && (0 === t.length || (0, e.default)(t[0]))
        }
        var n = o;
        exports.default = n;
    }, {
        "is-dom-node": "EmXE"
    }],
    "r7AT": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = t(require("is-dom-node")),
            r = t(require("is-dom-node-list"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(t, u) {
            if (void 0 === u && (u = document), t instanceof Array) return t.filter(e.default);
            if ((0, e.default)(t)) return [t];
            if ((0, r.default)(t)) return Array.prototype.slice.call(t);
            if ("string" == typeof t) try {
                var o = u.querySelectorAll(t);
                return Array.prototype.slice.call(o)
            } catch (i) {
                return []
            }
            return []
        }
        var o = u;
        exports.default = o;
    }, {
        "is-dom-node": "EmXE",
        "is-dom-node-list": "ZaRA"
    }],
    "bmgk": [function(require, module, exports) {
        "use strict";
        var r = Object.prototype.hasOwnProperty,
            t = Object.prototype.toString,
            e = Object.defineProperty,
            o = Object.getOwnPropertyDescriptor,
            n = function(r) {
                return "function" == typeof Array.isArray ? Array.isArray(r) : "[object Array]" === t.call(r)
            },
            c = function(e) {
                if (!e || "[object Object]" !== t.call(e)) return !1;
                var o, n = r.call(e, "constructor"),
                    c = e.constructor && e.constructor.prototype && r.call(e.constructor.prototype, "isPrototypeOf");
                if (e.constructor && !n && !c) return !1;
                for (o in e);
                return void 0 === o || r.call(e, o)
            },
            u = function(r, t) {
                e && "__proto__" === t.name ? e(r, t.name, {
                    enumerable: !0,
                    configurable: !0,
                    value: t.newValue,
                    writable: !0
                }) : r[t.name] = t.newValue
            },
            a = function(t, e) {
                if ("__proto__" === e) {
                    if (!r.call(t, e)) return;
                    if (o) return o(t, e).value
                }
                return t[e]
            };
        module.exports = function r() {
            var t, e, o, l, i, f, p = arguments[0],
                y = 1,
                s = arguments.length,
                b = !1;
            for ("boolean" == typeof p && (b = p, p = arguments[1] || {}, y = 2), (null == p || "object" != typeof p && "function" != typeof p) && (p = {}); y < s; ++y)
                if (null != (t = arguments[y]))
                    for (e in t) o = a(p, e), p !== (l = a(t, e)) && (b && l && (c(l) || (i = n(l))) ? (i ? (i = !1, f = o && n(o) ? o : []) : f = o && c(o) ? o : {}, u(p, {
                        name: e,
                        newValue: r(b, f, l)
                    })) : void 0 !== l && u(p, {
                        name: e,
                        newValue: l
                    }));
            return p
        };
    }, {}],
    "wMdc": [function(require, module, exports) {
        var global = arguments[3];
        var t = arguments[3],
            n = "Expected a function",
            e = NaN,
            i = "[object Symbol]",
            r = /^\s+|\s+$/g,
            o = /^[-+]0x[0-9a-f]+$/i,
            u = /^0b[01]+$/i,
            f = /^0o[0-7]+$/i,
            a = parseInt,
            c = "object" == typeof t && t && t.Object === Object && t,
            l = "object" == typeof self && self && self.Object === Object && self,
            s = c || l || Function("return this")(),
            v = Object.prototype,
            p = v.toString,
            y = Math.max,
            d = Math.min,
            m = function() {
                return s.Date.now()
            };

        function b(t, e, i) {
            var r, o, u, f, a, c, l = 0,
                s = !1,
                v = !1,
                p = !0;
            if ("function" != typeof t) throw new TypeError(n);

            function b(n) {
                var e = r,
                    i = o;
                return r = o = void 0, l = n, f = t.apply(i, e)
            }

            function g(t) {
                var n = t - c;
                return void 0 === c || n >= e || n < 0 || v && t - l >= u
            }

            function h() {
                var t = m();
                if (g(t)) return x(t);
                a = setTimeout(h, function(t) {
                    var n = e - (t - c);
                    return v ? d(n, u - (t - l)) : n
                }(t))
            }

            function x(t) {
                return a = void 0, p && r ? b(t) : (r = o = void 0, f)
            }

            function T() {
                var t = m(),
                    n = g(t);
                if (r = arguments, o = this, c = t, n) {
                    if (void 0 === a) return function(t) {
                        return l = t, a = setTimeout(h, e), s ? b(t) : f
                    }(c);
                    if (v) return a = setTimeout(h, e), b(c)
                }
                return void 0 === a && (a = setTimeout(h, e)), f
            }
            return e = O(e) || 0, j(i) && (s = !!i.leading, u = (v = "maxWait" in i) ? y(O(i.maxWait) || 0, e) : u, p = "trailing" in i ? !!i.trailing : p), T.cancel = function() {
                void 0 !== a && clearTimeout(a), l = 0, r = c = o = a = void 0
            }, T.flush = function() {
                return void 0 === a ? f : x(m())
            }, T
        }

        function g(t, e, i) {
            var r = !0,
                o = !0;
            if ("function" != typeof t) throw new TypeError(n);
            return j(i) && (r = "leading" in i ? !!i.leading : r, o = "trailing" in i ? !!i.trailing : o), b(t, e, {
                leading: r,
                maxWait: e,
                trailing: o
            })
        }

        function j(t) {
            var n = typeof t;
            return !!t && ("object" == n || "function" == n)
        }

        function h(t) {
            return !!t && "object" == typeof t
        }

        function x(t) {
            return "symbol" == typeof t || h(t) && p.call(t) == i
        }

        function O(t) {
            if ("number" == typeof t) return t;
            if (x(t)) return e;
            if (j(t)) {
                var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = j(n) ? n + "" : n
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(r, "");
            var i = u.test(t);
            return i || f.test(t) ? a(t.slice(2), i ? 2 : 8) : o.test(t) ? e : +t
        }
        module.exports = g;
    }, {}],
    "IUoh": [function(require, module, exports) {
        function t() {}
        t.prototype = {
            on: function(t, n, e) {
                var i = this.e || (this.e = {});
                return (i[t] || (i[t] = [])).push({
                    fn: n,
                    ctx: e
                }), this
            },
            once: function(t, n, e) {
                var i = this;

                function o() {
                    i.off(t, o), n.apply(e, arguments)
                }
                return o._ = n, this.on(t, o, e)
            },
            emit: function(t) {
                for (var n = [].slice.call(arguments, 1), e = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, o = e.length; i < o; i++) e[i].fn.apply(e[i].ctx, n);
                return this
            },
            off: function(t, n) {
                var e = this.e || (this.e = {}),
                    i = e[t],
                    o = [];
                if (i && n)
                    for (var r = 0, f = i.length; r < f; r++) i[r].fn !== n && i[r].fn._ !== n && o.push(i[r]);
                return o.length ? e[t] = o : delete e[t], this
            }
        }, module.exports = t, module.exports.TinyEmitter = t;
    }, {}],
    "PLp7": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = o(require("tealight")),
            t = o(require("extend")),
            n = o(require("lodash.throttle")),
            i = o(require("tiny-emitter"));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = {
                item: void 0,
                next: void 0,
                pagination: void 0,
                responseType: "document",
                bind: !0,
                scrollContainer: window,
                spinner: !1,
                logger: !0,
                loadOnScroll: !0,
                negativeMargin: 0,
                trigger: !1,
                prefill: !0
            },
            r = {
                singleElement: function(t, n) {
                    var i = (0, e.default)(t);
                    if (i.length > 1) throw new Error('Expected single element for "' + n + '"');
                    if (0 === i.length) throw new Error('Element "' + t + '" not found for "' + n + '"')
                },
                anyElement: function(t, n) {
                    if (0 === (0, e.default)(t).length) throw new Error('Element "' + t + '" not found for "' + n + '"')
                },
                warn: function(e) {
                    for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
                    try {
                        e.apply(void 0, t)
                    } catch (i) {
                        console && console.warn && console.warn(i.message)
                    }
                }
            };

        function l(e) {
            if (e !== window) return {
                x: e.scrollLeft,
                y: e.scrollTop
            };
            var t = void 0 !== window.pageXOffset,
                n = "CSS1Compat" === (document.compatMode || "");
            return {
                x: t ? window.pageXOffset : n ? document.documentElement.scrollLeft : document.body.scrollLeft,
                y: t ? window.pageYOffset : n ? document.documentElement.scrollTop : document.body.scrollTop
            }
        }

        function h(e) {
            var t;
            if (e !== window) t = e.getBoundingClientRect();
            else {
                var n = document.documentElement,
                    i = document.body;
                t = {
                    top: 0,
                    left: 0,
                    right: n.clientWidth || i.clientWidth,
                    width: n.clientWidth || i.clientWidth,
                    bottom: n.clientHeight || i.clientHeight,
                    height: n.clientHeight || i.clientHeight
                }
            }
            return t
        }

        function a(e, t, n) {
            var i = n;
            if (!e) return -1 * i.height;
            var o = t.y,
                s = e.getBoundingClientRect(),
                r = o + i.height,
                l = o + s.bottom - i.top;
            return Math.trunc(l - r)
        }
        var d = "append",
            c = "appended",
            p = "binded",
            u = "unbinded",
            f = "hit",
            m = "load",
            g = "loaded",
            v = "error",
            y = "last",
            b = "next",
            w = "nexted",
            x = "ready",
            E = "scrolled",
            L = "resized",
            S = "page",
            I = "prefill",
            O = "prefilled",
            D = {
                APPEND: d,
                APPENDED: c,
                BINDED: p,
                UNBINDED: u,
                HIT: f,
                LOAD: m,
                LOADED: g,
                ERROR: v,
                LAST: y,
                NEXT: b,
                NEXTED: w,
                READY: x,
                SCROLLED: E,
                RESIZED: L,
                PAGE: S,
                PREFILL: I,
                PREFILLED: O
            },
            C = {
                y: 0,
                x: 0,
                deltaY: 0,
                deltaX: 0
            };

        function P(e, t) {
            var n = l(e);
            return n.deltaY = n.y - (t ? t.y : n.y), n.deltaX = n.x - (t ? t.x : n.x), n
        }

        function T() {
            var e = this._lastScroll || C,
                t = this._lastScroll = P(this.scrollContainer, e);
            this.emitter.emit(E, {
                scroll: t
            })
        }

        function R() {
            var e = this._lastScroll || C,
                t = this._lastScroll = P(this.scrollContainer, e);
            this.emitter.emit(L, {
                scroll: t
            })
        }

        function H(t) {
            var n = this,
                i = n._lastResponse || document,
                o = (0, e.default)(n.options.next, i)[0];
            if (o) {
                var s = o.href;
                return n.load(s).then(function(o) {
                    i = n._lastResponse = o.xhr.response;
                    var s = (0, e.default)(n.options.next, i)[0];
                    return n.append(o.items).then(function() {
                        return !!s
                    }).then(function(e) {
                        return !e && t <= 1 && console && console.warn && console.warn('Element "' + n.options.next + '" not found for "options.next" on "' + o.url + '"'), e
                    })
                })
            }
            r.warn(r.singleElement, n.options.next, "options.next")
        }
        var F = {
            element: void 0,
            hide: !1
        };

        function M(e) {
            return "string" == typeof e || "object" == typeof e && e.nodeType === Node.ELEMENT_NODE ? e = {
                element: e,
                hide: !0
            } : "boolean" == typeof e && (e = {
                element: void 0,
                hide: e
            }), e
        }
        var N = function(e, n) {
            this.options = (0, t.default)({}, F, M(n)), this.originalDisplayStyles = new WeakMap, this.options.hide && (r.warn(r.anyElement, this.options.element, "pagination.element"), e.on(p, this.hide.bind(this)), e.on(u, this.restore.bind(this)))
        };
        N.prototype.hide = function() {
            var t = this;
            (0, e.default)(this.options.element).forEach(function(e) {
                t.originalDisplayStyles.set(e, window.getComputedStyle(e).display), e.style.display = "none"
            })
        }, N.prototype.restore = function() {
            var t = this;
            (0, e.default)(this.options.element).forEach(function(e) {
                e.style.display = t.originalDisplayStyles.get(e) || "block"
            })
        };
        var _ = {
            element: void 0,
            delay: 600,
            show: function(e) {
                e.style.opacity = "1"
            },
            hide: function(e) {
                e.style.opacity = "0"
            }
        };

        function k(e) {
            return ("string" == typeof e || "object" == typeof e && e.nodeType === Node.ELEMENT_NODE) && (e = {
                element: e
            }), e
        }
        var B = function(n, i) {
            !1 !== i && (this.ias = n, this.options = (0, t.default)({}, _, k(i)), void 0 !== this.options.element && r.singleElement(this.options.element, "spinner.element"), this.element = (0, e.default)(this.options.element)[0], this.hideFn = this.options.hide, this.showFn = this.options.show, n.on(p, this.bind.bind(this)), n.on(p, this.hide.bind(this)))
        };
        B.prototype.bind = function() {
            var e, t, n, i, o = this,
                s = this.ias;
            s.on(b, function() {
                e = +new Date, o.show()
            }), s.on(y, function() {
                o.hide()
            }), s.on(d, function(s) {
                t = +new Date, n = t - e, i = Math.max(0, o.options.delay - n);
                var r = s.appendFn.bind({});
                s.appendFn = function(e, t, n) {
                    return new Promise(function(s) {
                        setTimeout(function() {
                            o.hide().then(function() {
                                r(e, t, n), s()
                            })
                        }, i)
                    })
                }
            })
        }, B.prototype.show = function() {
            return Promise.resolve(this.showFn(this.element))
        }, B.prototype.hide = function() {
            return Promise.resolve(this.hideFn(this.element))
        };
        var q = {
            hit: function() {
                console.log("Hit scroll threshold")
            },
            binded: function() {
                console.log("Binded event handlers")
            },
            unbinded: function() {
                console.log("Unbinded event handlers")
            },
            next: function(e) {
                console.log("Next page triggered [pageIndex=" + e.pageIndex + "]")
            },
            nexted: function(e) {
                console.log("Next page completed [pageIndex=" + e.pageIndex + "]")
            },
            load: function(e) {
                console.log("Start loading " + e.url)
                history_data()
            },
            loaded: function() {
                console.log("Finished loading")
                history_data()
            },
            append: function() {
                console.log("Start appending items")
                history_data()
            },
            appended: function(e) {
                console.log("Finished appending " + e.items.length + " item(s)")
            },
            last: function() {
                console.log("No more pages left to load")
            },
            page: function(e) {
                console.log("Page changed [pageIndex=" + e.pageIndex + "]")
            },
            prefill: function(e) {
                console.log("Start prefilling")
            },
            prefilled: function(e) {
                console.log("Finished prefilling")
            }
        };

        function A(e) {
            return !0 === e && (e = q), e
        }
        var X = function(e, t) {
            if (!1 !== t) {
                var n = A(t);
                Object.keys(n).forEach(function(t) {
                    e.on(t, n[t])
                })
            }
        };

        function z(e, t, n) {
            for (var i = t + h(n).height, o = e.length - 1; o >= 0; o--) {
                if (i > e[o].sentinel.getBoundingClientRect().bottom + t) return e[Math.min(o + 1, e.length - 1)]
            }
            return e[0]
        }
        var W = function(e) {
            this.ias = e, this.pageBreaks = [], this.currentPageIndex = e.pageIndex, this.currentScrollTop = 0, e.on(p, this.binded.bind(this)), e.on(b, this.next.bind(this)), e.on(E, this.scrolled.bind(this)), e.on(L, this.scrolled.bind(this))
        };
        W.prototype.binded = function() {
            this.ias.sentinel() && this.pageBreaks.push({
                pageIndex: this.currentPageIndex,
                url: document.location.toString(),
                title: document.title,
                sentinel: this.ias.sentinel()
            })
        }, W.prototype.next = function() {
            var e = this,
                t = document.location.toString(),
                n = document.title,
                i = function(e) {
                    t = e.url, e.xhr.response && (n = e.xhr.response.title)
                };
            this.ias.once(g, i), this.ias.once(w, function(o) {
                e.pageBreaks.push({
                    pageIndex: o.pageIndex,
                    url: t,
                    title: n,
                    sentinel: e.ias.sentinel()
                }), e.update(), e.ias.off(g, i)
            })
        }, W.prototype.scrolled = function(e) {
            this.update(e.scroll.y)
        }, W.prototype.update = function(e) {
            this.currentScrollTop = e || this.currentScrollTop;
            var t = z(this.pageBreaks, this.currentScrollTop, this.ias.scrollContainer);
            t && t.pageIndex !== this.currentPageIndex && (this.ias.emitter.emit(S, t), this.currentPageIndex = t.pageIndex)
        };
        var j = {
            element: void 0,
            when: function(e) {
                return !0
            },
            show: function(e) {
                e.style.opacity = "1"
            },
            hide: function(e) {
                e.style.opacity = "0"
            }
        };

        function Y(e) {
            if (("string" == typeof e || "function" == typeof e || "object" == typeof e && e.nodeType === Node.ELEMENT_NODE) && (e = {
                    element: e
                }), "function" == typeof e.element && (e.element = e.element()), e.when && Array.isArray(e.when)) {
                var t = e.when;
                e.when = function(e) {
                    return -1 !== t.indexOf(e)
                }
            }
            return e
        }
        var G = function(n, i) {
            var o = this;
            !1 !== i && (this.ias = n, this.options = (0, t.default)({}, j, Y(i)), void 0 !== this.options.element && r.singleElement(this.options.element, "trigger.element"), this.element = (0, e.default)(this.options.element)[0], this.hideFn = this.options.hide, this.showFn = this.options.show, this.voter = this.options.when, this.showing = void 0, this.enabled = void 0, n.on(p, this.bind.bind(this)), n.on(u, this.unbind.bind(this)), n.on(f, this.hit.bind(this)), n.on(b, function(e) {
                return o.ias.once(c, function() {
                    return o.update(e.pageIndex)
                })
            }))
        };

        function U(e, t, n) {
            var i = n ? n.nextSibling : null,
                o = document.createDocumentFragment();
            e.forEach(function(e) {
                o.appendChild(e)
            }), t.insertBefore(o, i)
        }
        G.prototype.bind = function() {
            this.hide(), this.update(this.ias.pageIndex), this.element.addEventListener("click", this.clickHandler.bind(this))
        }, G.prototype.unbind = function() {
            this.element.removeEventListener("click", this.clickHandler.bind(this))
        }, G.prototype.clickHandler = function() {
            this.hide().then(this.ias.next.bind(this.ias))
        }, G.prototype.update = function(e) {
            this.enabled = this.voter(e), this.enabled ? this.ias.disableLoadOnScroll() : this.ias.enableLoadOnScroll()
        }, G.prototype.hit = function() {
            this.enabled && this.show()
        }, G.prototype.show = function() {
            if (!this.showing) return this.showing = !0, Promise.resolve(this.showFn(this.element))
        }, G.prototype.hide = function() {
            if (this.showing || void 0 === this.showing) return this.showing = !1, Promise.resolve(this.hideFn(this.element))
        };
        var Z = window.ResizeObserver,
            J = function(e, t) {
                this.el = e, this.listener = t
            };
        J.prototype.observe = function() {
            this.el.addEventListener("resize", this.listener)
        }, J.prototype.unobserve = function() {
            this.el.removeEventListener("resize", this.listener)
        };
        var K = function(e, t) {
            this.el = e, this.listener = t, this.ro = new Z(this.listener)
        };
        K.prototype.observe = function() {
            this.ro.observe(this.el)
        }, K.prototype.unobserve = function() {
            this.ro.unobserve()
        };
        var Q = function(e, t) {
            this.el = e, this.listener = t, this.interval = null, this.lastHeight = null
        };

        function V(e, t) {
            var i = (0, n.default)(R, 200).bind(e);
            return t === window ? new J(t, i) : Z ? new K(t, i) : (console && console.warn && console.warn("ResizeObserver not supported. Falling back on polling."), new Q(t, i))
        }
        Q.prototype.pollHeight = function() {
            var e = Math.trunc(h(this.el).height);
            null !== this.lastHeight && this.lastHeight !== e && this.listener(), this.lastHeight = e
        }, Q.prototype.observe = function() {
            this.interval = setInterval(this.pollHeight.bind(this), 200)
        }, Q.prototype.unobserve = function() {
            clearInterval(this.interval)
        };
        var $ = function(e, t) {
            this.ias = e, this.enabled = t
        };
        $.prototype.prefill = function() {
            var e = this;
            if (this.enabled && !(this.ias.distance() > 0)) return this.ias.emitter.emit(D.PREFILL), this._prefill().then(function() {
                e.ias.emitter.emit(D.PREFILLED), e.ias.measure()
            })
        }, $.prototype._prefill = function() {
            var e = this;
            return this.ias.next().then(function(t) {
                if (t) return e.ias.distance() < 0 ? e._prefill() : void 0
            })
        };
        var ee = function(o, l) {
            var h = this;
            void 0 === l && (l = {}), r.singleElement(o, "container"), this.container = (0, e.default)(o)[0], this.options = (0, t.default)({}, s, l), this.emitter = new i.default, this.options.loadOnScroll ? this.enableLoadOnScroll() : this.disableLoadOnScroll(), this.negativeMargin = Math.abs(this.options.negativeMargin), this.scrollContainer = this.options.scrollContainer, this.options.scrollContainer !== window && (r.singleElement(this.options.scrollContainer, "options.scrollContainer"), this.scrollContainer = (0, e.default)(this.options.scrollContainer)[0]), this.nextHandler = H, !1 === this.options.next ? this.nextHandler = function() {} : "function" == typeof this.options.next && (this.nextHandler = this.options.next), this.resizeObserver = V(this, this.scrollContainer), this._scrollListener = (0, n.default)(T, 200).bind(this), this.ready = !1, this.bindOnReady = !0, this.binded = !1, this.paused = !1, this.pageIndex = this.sentinel() ? 0 : -1, this.on(f, function() {
                h.loadOnScroll && h.next()
            }), this.on(E, this.measure), this.on(L, this.measure), this.pagination = new N(this, this.options.pagination), this.spinner = new B(this, this.options.spinner), this.logger = new X(this, this.options.logger), this.paging = new W(this), this.trigger = new G(this, this.options.trigger), this.prefill = new $(this, this.options.prefill), this.on(p, this.prefill.prefill.bind(this.prefill));
            var a = function() {
                h.ready || (h.ready = !0, h.emitter.emit(x), h.bindOnReady && h.options.bind && h.bind())
            };
            "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(a, 1) : window.addEventListener("DOMContentLoaded", a)
        };
        exports.default = ee, ee.prototype.bind = function() {
            this.binded || (this.ready || (this.bindOnReady = !1), this.scrollContainer.addEventListener("scroll", this._scrollListener), this.resizeObserver.observe(), this.binded = !0, this.emitter.emit(p))
        }, ee.prototype.unbind = function() {
            this.binded ? (this.resizeObserver.unobserve(), this.scrollContainer.removeEventListener("scroll", this._scrollListener), this.binded = !1, this.emitter.emit(u)) : this.ready || this.once(p, this.unbind)
        }, ee.prototype.next = function() {
            var e = this;
            if (!this.binded) return this.ready ? void 0 : this.once(p, this.next);
            this.pause();
            var t = this.pageIndex + 1;
            return this.emitter.emit(b, {
                pageIndex: this.pageIndex + 1
            }), Promise.resolve(this.nextHandler(t)).then(function(n) {
                if (e.pageIndex = t, n) return e.resume(), n;
                e.emitter.emit(y)
            }).then(function(t) {
                return e.emitter.emit(w, {
                    pageIndex: e.pageIndex
                }), t
            })
        }, ee.prototype.load = function(t) {
            var n = this;
            return new Promise(function(i, o) {
                var s = new XMLHttpRequest,
                    r = {
                        url: t,
                        xhr: s,
                        method: "GET",
                        body: null,
                        nocache: !1,
                        responseType: n.options.responseType,
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    };
                n.emitter.emit(m, r);
                var l = r.url,
                    h = r.method,
                    a = r.responseType,
                    d = r.headers,
                    c = r.body;
                for (var p in r.nocache || (l = l + (/\?/.test(l) ? "&" : "?") + (new Date).getTime()), s.onreadystatechange = function() {
                        if (s.readyState === XMLHttpRequest.DONE)
                            if (0 === s.status);
                            else if (200 === s.status) {
                            var t = s.response;
                            "document" === a && (t = (0, e.default)(n.options.item, s.response)), n.emitter.emit(g, {
                                items: t,
                                url: l,
                                xhr: s
                            }), i({
                                items: t,
                                url: l,
                                xhr: s
                            })
                        } else n.emitter.emit(v, {
                            url: l,
                            method: h,
                            xhr: s
                        }), o(s)
                    }, s.onerror = function() {
                        n.emitter.emit(v, {
                            url: l,
                            method: h,
                            xhr: s
                        }), o(s)
                    }, s.open(h, l, !0), s.responseType = a, d) s.setRequestHeader(p, d[p]);
                s.send(c)
            })
        }, ee.prototype.append = function(e, t) {
            var n = this;
            t = t || n.container;
            var i = {
                items: e,
                parent: t,
                appendFn: U
            };
            n.emitter.emit(d, i);
            return new Promise(function(o) {
                window.requestAnimationFrame(function() {
                    Promise.resolve(i.appendFn(i.items, i.parent, n.sentinel())).then(function() {
                        o({
                            items: e,
                            parent: t
                        })
                    })
                })
            }).then(function(e) {
                n.emitter.emit(c, e)
            })
        }, ee.prototype.sentinel = function() {
            var t = (0, e.default)(this.options.item, this.container);
            return t.length ? t[t.length - 1] : null
        }, ee.prototype.pause = function() {
            this.paused = !0
        }, ee.prototype.resume = function() {
            this.paused = !1
        }, ee.prototype.enableLoadOnScroll = function() {
            this.loadOnScroll = !0
        }, ee.prototype.disableLoadOnScroll = function() {
            this.loadOnScroll = !1
        }, ee.prototype.distance = function(e, t) {
            var n = e || h(this.scrollContainer),
                i = a(t || this.sentinel(), l(this.scrollContainer), n);
            return i -= this.negativeMargin, i
        }, ee.prototype.measure = function() {
            if (!this.paused) {
                var e = h(this.scrollContainer);
                if (0 !== e.height) {
                    var t = this.sentinel(),
                        n = this.distance(e, t);
                    n <= 0 && this.emitter.emit(f, {
                        distance: n
                    })
                }
            }
        }, ee.prototype.on = function(e, t) {
            this.emitter.on(e, t, this), e === p && this.binded && t.bind(this)()
        }, ee.prototype.off = function(e, t) {
            this.emitter.off(e, t, this)
        }, ee.prototype.once = function(e, t) {
            var n = this;
            return new Promise(function(i) {
                n.emitter.once(e, function() {
                    Promise.resolve(t.apply(this, arguments)).then(i)
                }, n), e === p && n.binded && (t.bind(n)(), i())
            })
        };
    }, {
        "tealight": "r7AT",
        "extend": "bmgk",
        "lodash.throttle": "wMdc",
        "tiny-emitter": "IUoh"
    }],
    "Zdfz": [function(require, module, exports) {
        "use strict";
        var t = e(require("@webcreate/infinite-ajax-scroll"));

        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function i(t) {
            var e = '<div class="item {id}">'+
                        '<div id="data" class="data '+t.title+'"></div>'+
                        '<a class="item-content data-title '+t.title+'" href"/'+t.title+'/home" target="_blank">'+
                            '<div class="item-background">'+
                                '<img src={background} onerror="this.src={background_onerror}">'+
                            '</div>'+
                            '<div class="watched-date" title="Watched Date">'+t.watched_year+'. '+t.watched_month+'. '+t.watched_day+'.</div>'+
                            '<div class="thumbnail">'+
                                '<img src={poster} onerror="this.src=`/image/error-vertical.svg`">'+
                                '<div class="logo">'+
                                    '<img src={logo} onerror="this.src=`/image/error-icon.svg`">'+
                                '</div>'+
                            '</div>'+
                            '<div class="text-content">'+
                                '<div class="year" title="Original Release">{year}</div>'+
                                '<div class="type {type}"></div>'+
                                '<div class="season {season_type}" title="Season">{season}</div>'+
                                '<div class="episode {episode_type}" title="Episode">{episode}</div>'+
                                '<div class="text">'+
                                    '<div class="title" title={title_title}>{title}</div>'+
                                '</div>'+
                                '<div class="text">'+
                                    '<div class="subtitle" title={title_en_title}>{title_en}</div>'+
                                '</div>'+
                                '<div class="text">'+
                                    '<div class="subtitle" title={title_ja_title}>{title_ja}</div>'+
                                '</div>'+
                                '<div class="text">'+
                                    '<div class="subtitle" title={title_ko_title}>{title_ko}</div>'+
                                '</div>'+
                                '<div class="watched-episode" title="Watched Episode">'+t.watched_episode+'</div>'+
                            '</div>'+
                        '</a>'+
                    '</div>',
                i = document.createElement("div");
            return i.innerHTML = e.trim(), i.firstChild
        }

        function n(t) {
            var e = this;
            return fetch("/data/history.json").then(function(t) {
                return t.json()
            }).then(function(n) {
                for (var a = document.createDocumentFragment(), r = Math.ceil(n.length / 8), c = 8 * t, s = c, o = c + 8; s < o; s++) {
                    var d = i(n[s]);
                    a.appendChild(d)
                }
                var l = t < r - 1;
                return e.append(Array.from(a.childNodes)).then(function() {
                    return l
                })
            })
        }
        window.ias = new t.default(".container", {
            item: ".item",
            next: n,
            pagination: !1
        });
    }, {
        "@webcreate/infinite-ajax-scroll": "PLp7"
    }],
    "dNjy": [function(require, module, exports) {
        module.exports = "loader.cbed30a7.svg";
    }, {}],
    "sC8V": [function(require, module, exports) {

    }, {}],
    "Focm": [function(require, module, exports) {
        "use strict";
        require("./example");

        function a(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }

        function t(n) {
            return new Promise(function(e) {
                var a = document.getElementsByTagName("head")[0],
                    t = document.createElement("script");
                t.type = "text/javascript", t.src = n, t.onload = function() {
                    e()
                }, a.appendChild(t)
            })
        }
    }, {
        "./example": "Zdfz",
        "./loader.svg": "dNjy",
        "fs": "sC8V"
    }]
}, {}, ["Focm"], null)
//# sourceMappingURL=clone.1c601535.js.map

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

lightbox.option({
    'disableScrolling': true,
    'showImageNumberLabel': false,
    'alwaysShowNavOnTouchDevices': true
})