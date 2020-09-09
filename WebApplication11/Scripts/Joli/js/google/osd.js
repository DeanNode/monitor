(function(window, document) {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var l;
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    }
    ;
    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this);
    function ea(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }
    function r(a) {
        if (!(a instanceof Array)) {
            a = ea(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
    var fa = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , ha;
    if ("function" == typeof Object.setPrototypeOf)
        ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = {
                Gb: !0
            }
              , ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.Gb;
                break a
            } catch (a) {}
            ia = !1
        }
        ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var la = ha;
    function t(a, b) {
        a.prototype = fa(b.prototype);
        a.prototype.constructor = a;
        if (la)
            la(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c]
    }
    function ma(a, b) {
        if (b) {
            var c = da;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    var na = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    ma("Object.assign", function(a) {
        return a || na
    });
    ma("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
                return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    var u = this || self;
    function oa() {}
    function w(a) {
        a.Pa = void 0;
        a.g = function() {
            return a.Pa ? a.Pa : a.Pa = new a
        }
    }
    function pa(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }
    function qa(a) {
        var b = pa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function ra(a) {
        return "function" == pa(a)
    }
    function sa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function ta(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    function ua(a, b) {
        a = a.split(".");
        var c = u;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    function va(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    }
    ;var wa;
    function xa(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    function x(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
    function ya(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
    function za(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
    function Aa(a, b, c) {
        var d = c;
        x(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
    function Ba(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    function Ca(a, b) {
        var c = 0;
        x(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    }
    function Da(a, b) {
        b = Ea(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Ea(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return f;
        return -1
    }
    function Ga(a, b) {
        return 0 <= xa(a, b)
    }
    function Ha(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function Ia(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function Ja(a, b) {
        a.sort(b || Ka)
    }
    function Ka(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function La(a) {
        if (!arguments.length)
            return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)
            arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++)
                e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    }
    ;function Ma(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    ;function Na(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function Oa(a, b) {
        var c = {}, d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function Pa(a) {
        var b = Qa, c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b))
                return !1;
        return !0
    }
    function Ra(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    var Sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function y(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Sa.length; f++)
                c = Sa[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;function Ta(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var Ua = /&/g
      , Va = /</g
      , Wa = />/g
      , Xa = /"/g
      , Ya = /'/g
      , Za = /\x00/g
      , $a = /[\x00&<>"']/;
    function z(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }
    function ab(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;var A;
    a: {
        var bb = u.navigator;
        if (bb) {
            var cb = bb.userAgent;
            if (cb) {
                A = cb;
                break a
            }
        }
        A = ""
    }
    function B(a) {
        return -1 != A.indexOf(a)
    }
    ;function db() {
        return B("Safari") && !(eb() || B("Coast") || B("Opera") || B("Edge") || B("Edg/") || B("OPR") || B("Firefox") || B("FxiOS") || B("Silk") || B("Android"))
    }
    function eb() {
        return (B("Chrome") || B("CriOS")) && !B("Edge")
    }
    ;function fb(a) {
        $a.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Ua, "&amp;")),
        -1 != a.indexOf("<") && (a = a.replace(Va, "&lt;")),
        -1 != a.indexOf(">") && (a = a.replace(Wa, "&gt;")),
        -1 != a.indexOf('"') && (a = a.replace(Xa, "&quot;")),
        -1 != a.indexOf("'") && (a = a.replace(Ya, "&#39;")),
        -1 != a.indexOf("\x00") && (a = a.replace(Za, "&#0;")));
        return a
    }
    function gb() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }
    function hb(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }
    function ib(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;function jb(a) {
        jb[" "](a);
        return a
    }
    jb[" "] = oa;
    function kb(a, b) {
        try {
            return jb(a[b]),
            !0
        } catch (c) {}
        return !1
    }
    function lb(a, b) {
        var c = mb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    }
    ;var nb = B("Opera")
      , C = B("Trident") || B("MSIE")
      , ob = B("Edge")
      , pb = B("Gecko") && !(z(A, "WebKit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge")
      , qb = z(A, "WebKit") && !B("Edge")
      , rb = qb && B("Mobile");
    function sb() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var tb;
    a: {
        var ub = ""
          , vb = function() {
            var a = A;
            if (pb)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (ob)
                return /Edge\/([\d\.]+)/.exec(a);
            if (C)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (qb)
                return /WebKit\/(\S+)/.exec(a);
            if (nb)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        vb && (ub = vb ? vb[1] : "");
        if (C) {
            var wb = sb();
            if (null != wb && wb > parseFloat(ub)) {
                tb = String(wb);
                break a
            }
        }
        tb = ub
    }
    var xb = tb
      , mb = {};
    function yb(a) {
        return lb(a, function() {
            for (var b = 0, c = Ta(String(xb)).split("."), d = Ta(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || ""
                  , h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length)
                        break;
                    b = ab(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || ab(0 == g[2].length, 0 == h[2].length) || ab(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var zb;
    if (u.document && C) {
        var Ab = sb();
        zb = Ab ? Ab : parseInt(xb, 10) || void 0
    } else
        zb = void 0;
    var Bb = zb;
    var Cb = {}
      , Db = null;
    var Eb = 0
      , Fb = 0;
    function Gb() {
        this.a = []
    }
    Gb.prototype.length = function() {
        return this.a.length
    }
    ;
    function Hb(a, b) {
        for (; 127 < b; )
            a.a.push(b & 127 | 128),
            b >>>= 7;
        a.a.push(b)
    }
    function Ib(a, b) {
        a.a.push(b >>> 0 & 255);
        a.a.push(b >>> 8 & 255);
        a.a.push(b >>> 16 & 255);
        a.a.push(b >>> 24 & 255)
    }
    ;function Jb() {
        this.b = [];
        this.a = new Gb
    }
    function Kb(a, b, c) {
        if (null != c) {
            Hb(a.a, 8 * b);
            a = a.a;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0,
            b = (~b >>> 0) + 1,
            4294967295 < b && (b = 0,
            d++,
            4294967295 < d && (d = 0)));
            Eb = b;
            Fb = d;
            c = Eb;
            for (b = Fb; 0 < b || 127 < c; )
                a.a.push(c & 127 | 128),
                c = (c >>> 7 | b << 25) >>> 0,
                b >>>= 7;
            a.a.push(c)
        }
    }
    ;function Lb() {}
    var Mb = "function" == typeof Uint8Array
      , Nb = [];
    function Ob(a) {
        var b = a.c + a.f;
        a.a[b] || (a.b = a.a[b] = {})
    }
    function Pb(a, b) {
        if (b < a.c) {
            b += a.f;
            var c = a.a[b];
            return c === Nb ? a.a[b] = [] : c
        }
        if (a.b)
            return c = a.b[b],
            c === Nb ? a.b[b] = [] : c
    }
    function Qb(a, b) {
        a = Pb(a, b);
        return null == a ? 0 : a
    }
    function Rb(a, b, c) {
        0 !== c ? b < a.c ? a.a[b + a.f] = c : (Ob(a),
        a.b[b] = c) : b < a.c ? a.a[b + a.f] = null : (Ob(a),
        delete a.b[b]);
        return a
    }
    function Sb(a) {
        if (a.h)
            for (var b in a.h) {
                var c = a.h[b];
                if ("array" == pa(c))
                    for (var d = 0; d < c.length; d++)
                        c[d] && Sb(c[d]);
                else
                    c && Sb(c)
            }
    }
    Lb.prototype.toString = function() {
        Sb(this);
        return this.a.toString()
    }
    ;
    var Tb;
    Tb = ["av.key", "js", "20200410"].slice(-1)[0];
    var D = document
      , E = window;
    var Ub = Ma(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            u.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    function Vb(a) {
        return a ? a.passive && Ub() ? a : a.capture || !1 : !1
    }
    function Wb(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Vb(d)),
        !0) : !1
    }
    function Xb(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, Vb(void 0))
    }
    ;var Yb = !C || 9 <= Number(Bb)
      , Zb = C || nb || qb;
    function F(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    F.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    F.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    F.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    function G(a, b) {
        this.width = a;
        this.height = b
    }
    G.prototype.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    G.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    G.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    G.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    function $b(a) {
        return a ? new ac(H(a)) : wa || (wa = new ac)
    }
    function bc() {
        var a = document;
        a.getElementsByClassName ? a = a.getElementsByClassName("GoogleActiveViewContainer")[0] : (a = document,
        a = a.querySelectorAll && a.querySelector ? a.querySelector(".GoogleActiveViewContainer") : cc(a, "*", "GoogleActiveViewContainer", void 0)[0] || null);
        return a || null
    }
    function cc(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++)
                    b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++)
                b = g.className,
                "function" == typeof b.split && Ga(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }
    function dc(a, b) {
        Na(b, function(c, d) {
            c && "object" == typeof c && c.kc && (c = c.jc());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ec.hasOwnProperty(d) ? a.setAttribute(ec[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var ec = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    function fc(a) {
        var b = a.scrollingElement ? a.scrollingElement : qb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return C && yb("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft,b.scrollTop) : new F(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    function gc(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    function hc(a, b, c) {
        var d = arguments
          , e = document
          , f = String(d[0])
          , g = d[1];
        if (!Yb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', fb(g.name), '"');
            if (g.type) {
                f.push(' type="', fb(g.type), '"');
                var h = {};
                y(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = ic(e, f);
        g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : dc(f, g));
        2 < d.length && jc(e, f, d);
        return f
    }
    function jc(a, b, c) {
        function d(g) {
            g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !qa(f) || sa(f) && 0 < f.nodeType ? d(f) : x(kc(f) ? Ia(f) : f, d)
        }
    }
    function ic(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    function H(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function lc(a) {
        try {
            return a.contentWindow || (a.contentDocument ? gc(a.contentDocument) : null)
        } catch (b) {}
        return null
    }
    function kc(a) {
        if (a && "number" == typeof a.length) {
            if (sa(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (ra(a))
                return "function" == typeof a.item
        }
        return !1
    }
    function mc(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a; ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
    function ac(a) {
        this.a = a || u.document || document
    }
    ;function nc() {
        return B("iPad") || B("Android") && !B("Mobile") || B("Silk")
    }
    ;var oc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    function pc(a) {
        try {
            return !!a && null != a.location.href && kb(a, "foo")
        } catch (b) {
            return !1
        }
    }
    function qc(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
    function rc(a) {
        var b = [];
        qc(a, function(c, d) {
            b.push(d)
        });
        return b
    }
    function sc() {
        var a = tc;
        if (!a)
            return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c)
                return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    }
    ;var uc = {
        fc: 1,
        ic: 2,
        ec: 3
    };
    function I() {
        this.$ = this.$;
        this.sa = this.sa
    }
    I.prototype.$ = !1;
    I.prototype.X = function() {
        return this.$
    }
    ;
    I.prototype.B = function() {
        this.$ || (this.$ = !0,
        this.V())
    }
    ;
    I.prototype.V = function() {
        if (this.sa)
            for (; this.sa.length; )
                this.sa.shift()()
    }
    ;
    /*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
    function vc(a) {
        this.methodName = a
    }
    var wc = new vc(15)
      , xc = new vc(5);
    function yc(a, b) {
        return b[a.methodName] || function() {}
    }
    ;function zc() {
        this.b = function(a, b) {
            return void 0 === b ? !1 : b
        }
        ;
        this.a = function() {}
    }
    function Ac(a, b, c) {
        a.b = function(d, e) {
            return yc(xc, b)(d, e, c)
        }
        ;
        a.a = function() {
            yc(wc, b)(c)
        }
    }
    w(zc);
    function Bc(a) {
        var b = void 0 === b ? !1 : b;
        return zc.g().b(a, b)
    }
    ;function J(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    function Cc(a) {
        return a.right - a.left
    }
    function Dc(a) {
        return a.bottom - a.top
    }
    function Ec(a) {
        return new J(a.top,a.right,a.bottom,a.left)
    }
    J.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    J.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    J.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    function Fc(a, b, c) {
        b instanceof F ? (a.left += b.x,
        a.right += b.x,
        a.top += b.y,
        a.bottom += b.y) : (a.left += b,
        a.right += b,
        "number" === typeof c && (a.top += c,
        a.bottom += c));
        return a
    }
    ;function Gc(a) {
        a = void 0 === a ? u : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl)
                return b
        } catch (c) {}
        return null
    }
    ;function Hc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        c && (d.referrerPolicy = "no-referrer");
        d.src = b;
        a.google_image_requests.push(d)
    }
    function Ic(a) {
        if (Jc())
            Hc(window, a, !0);
        else {
            var b = u.document;
            if (b.body) {
                var c = b.getElementById("goog-srcless-iframe");
                c || (c = ic((new ac(b)).a, "IFRAME"),
                c.style.display = "none",
                c.id = "goog-srcless-iframe",
                b.body.appendChild(c));
                b = c
            } else
                b = null;
            b && b.contentWindow && Hc(b.contentWindow, a, !0)
        }
    }
    var Jc = Ma(function() {
        return "referrerPolicy"in u.document.createElement("img")
    });
    var Kc = {};
    function Lc(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        C && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
    function Mc(a, b) {
        var c = new F(0,0)
          , d = gc(H(a));
        if (!kb(d, "parent"))
            return c;
        do {
            if (d == b) {
                var e = a
                  , f = H(e);
                var g = new F(0,0);
                var h = f ? H(f) : document;
                h = !C || 9 <= Number(Bb) || "CSS1Compat" == $b(h).a.compatMode ? h.documentElement : h.body;
                e != h && (e = Lc(e),
                f = fc($b(f).a),
                g.x = e.left + f.x,
                g.y = e.top + f.y)
            } else
                g = Lc(a),
                g = new F(g.left,g.top);
            c.x += g.x;
            c.y += g.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));return c
    }
    ;function Nc(a) {
        return !(!a || !a.call) && "function" === typeof a
    }
    function Oc() {
        var a = D.documentElement
          , b = K();
        try {
            if (D.createEvent) {
                var c = D.createEvent("CustomEvent");
                c.initCustomEvent("osd_load", !0, !0, "");
                a.dispatchEvent(c)
            } else if (Nc(b.CustomEvent)) {
                var d = new b.CustomEvent("osd_load",{
                    bubbles: !0,
                    cancelable: !0,
                    detail: ""
                });
                a.dispatchEvent(d)
            } else if (Nc(b.Event)) {
                var e = new Event("osd_load",{
                    bubbles: !0,
                    cancelable: !0
                });
                a.dispatchEvent(e)
            }
        } catch (f) {}
    }
    function Pc() {
        var a = K();
        return "complete" === a.document.readyState || !!a.google_onload_fired
    }
    var Qc = !!window.google_async_iframe_id
      , Rc = Qc && window.parent || window;
    function K() {
        if (Qc && !pc(Rc)) {
            var a = "." + D.domain;
            try {
                for (; 2 < a.split(".").length && !pc(Rc); )
                    D.domain = a = a.substr(a.indexOf(".") + 1),
                    Rc = window.parent
            } catch (b) {}
            pc(Rc) || (Rc = window)
        }
        return Rc
    }
    ;function Sc(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                if (void 0 === c ? 0 : c)
                    var f = (new G(e.innerWidth,e.innerHeight)).round();
                else {
                    var g = (e || window).document
                      , h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                    f = (new G(h.clientWidth,h.clientHeight)).round()
                }
                d = f
            } catch (q) {
                d = new G(-12245933,-12245933)
            }
            a = d;
            var p = fc($b(b.document).a);
            if (-12245933 == a.width) {
                var m = a.width;
                var k = new J(m,m,m,m)
            } else
                k = new J(p.y,p.x + a.width,p.y + a.height,p.x);
            return k
        } catch (q) {
            return new J(-12245933,-12245933,-12245933,-12245933)
        }
    }
    ;var Tc = {
        NONE: 0,
        Tb: 1
    };
    function Uc() {
        this.o = 0;
        this.c = !1;
        this.b = -1;
        this.a = !1;
        this.f = 0
    }
    Uc.prototype.isVisible = function() {
        return this.a ? .3 <= this.o : .5 <= this.o
    }
    ;
    var L = {
        Xa: 0,
        Vb: 1
    }
      , Vc = {
        Xa: 0,
        ac: 1,
        bc: 2
    }
      , Wc = {
        Xa: 0,
        Sb: 1,
        Ub: 2
    }
      , Xc = {
        668123728: 0,
        668123729: 1
    }
      , Yc = {
        NONE: 0,
        cc: 1,
        Wb: 2
    }
      , Zc = {
        480596784: 0,
        480596785: 1,
        21063355: 2
    }
      , $c = {
        21065805: 0,
        21065806: 1
    };
    function ad() {
        this.b = null;
        this.c = !1;
        this.a = null
    }
    function M(a) {
        a.c = !0;
        return a
    }
    function bd(a, b) {
        a.a && x(b, function(c) {
            c = a.a[c];
            void 0 !== c && cd(a, c)
        })
    }
    function dd(a) {
        ad.call(this);
        this.f = a
    }
    t(dd, ad);
    function cd(a, b) {
        var c;
        if (!(c = null !== a.b)) {
            a: {
                c = a.f;
                for (d in c)
                    if (c[d] == b) {
                        var d = !0;
                        break a
                    }
                d = !1
            }
            c = !d
        }
        c || (a.b = b)
    }
    ;function ed() {
        this.a = {};
        this.b = {}
    }
    function N(a, b, c) {
        a.a[b] || (a.a[b] = new dd(c));
        return a.a[b]
    }
    function fd(a, b, c) {
        (a = a.a[b]) && cd(a, c)
    }
    function O(a, b) {
        var c = a.b;
        if (null !== c && b in c)
            return a.b[b];
        if (a = a.a[b])
            return a.b
    }
    function gd(a) {
        var b = {}
          , c = Oa(a.a, function(d) {
            return d.c
        });
        Na(c, function(d, e) {
            d = void 0 !== a.b[e] ? String(a.b[e]) : d.c && null !== d.b ? String(d.b) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }
    function hd(a, b) {
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("=")
              , e = d[0];
            d = 1 < d.length ? parseInt(d[1], 10) : 1;
            isNaN(d) || (e = a.a[e]) && cd(e, d)
        }
        return b.join("&")
    }
    function id(a, b) {
        x(Ra(a.a), function(c) {
            return bd(c, b)
        })
    }
    function jd(a, b) {
        b && "string" === typeof b && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","),
        b = za(b, function(c) {
            return Number(c)
        }),
        id(a, b))
    }
    ;var kd = !C && !db();
    function ld(a, b) {
        if (/-[a-z]/.test(b))
            return null;
        if (kd && a.dataset) {
            if (!(!B("Android") || eb() || B("Firefox") || B("FxiOS") || B("Opera") || B("Silk") || b in a.dataset))
                return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + hb(b))
    }
    function md(a, b) {
        return /-[a-z]/.test(b) ? !1 : kd && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + hb(b)) : !!a.getAttribute("data-" + hb(b))
    }
    ;function nd() {
        this.b = this.a = null;
        this.c = "no"
    }
    ;function od(a, b) {
        this.b = (void 0 === a ? 0 : a) || 0;
        this.a = (void 0 === b ? "" : b) || ""
    }
    function pd(a) {
        return !!a.b || !!a.a
    }
    od.prototype.toString = function() {
        return this.b + (this.a ? "-" : "") + this.a
    }
    ;
    function P() {}
    P.prototype.a = function() {
        return 0
    }
    ;
    P.prototype.c = function() {
        return 0
    }
    ;
    P.prototype.f = function() {
        return 0
    }
    ;
    P.prototype.b = function() {
        return 0
    }
    ;
    function qd() {
        if (!rd())
            throw Error();
    }
    t(qd, P);
    function rd() {
        return !(!E || !E.performance)
    }
    qd.prototype.a = function() {
        return rd() && E.performance.now ? E.performance.now() : P.prototype.a.call(this)
    }
    ;
    qd.prototype.c = function() {
        return rd() && E.performance.memory ? E.performance.memory.totalJSHeapSize || 0 : P.prototype.c.call(this)
    }
    ;
    qd.prototype.f = function() {
        return rd() && E.performance.memory ? E.performance.memory.usedJSHeapSize || 0 : P.prototype.f.call(this)
    }
    ;
    qd.prototype.b = function() {
        return rd() && E.performance.memory ? E.performance.memory.jsHeapSizeLimit || 0 : P.prototype.b.call(this)
    }
    ;
    function sd() {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[D.visibilityState || D.webkitVisibilityState || D.mozVisibilityState || ""] || 0
    }
    ;function td() {}
    td.prototype.isVisible = function() {
        return 1 === sd()
    }
    ;
    var ud = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    function vd() {
        var a = u
          , b = []
          , c = null;
        do {
            var d = a;
            if (pc(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else
                e = c,
                c = null;
            b.push(new wd(e || "",d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);d = 0;
        for (a = b.length - 1; d <= a; ++d)
            b[d].depth = a - d;
        d = u;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a)
                e = b[a],
                e.url || (e.url = d.location.ancestorOrigins[a - 1] || "",
                e.ob = !0);
        return b
    }
    function xd(a, b) {
        this.a = a;
        this.b = b
    }
    function wd(a, b, c) {
        this.url = a;
        this.s = b;
        this.ob = !!c;
        this.depth = null
    }
    ;function yd() {
        this.c = "&";
        this.f = !1;
        this.b = {};
        this.h = 0;
        this.a = []
    }
    function zd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }
    function Ad(a, b, c, d, e) {
        var f = [];
        qc(a, function(g, h) {
            (g = Bd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
    function Bd(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0,
            d < c.length) {
                for (var f = [], g = 0; g < a.length; g++)
                    f.push(Bd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(Ad(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    function Cd(a, b, c, d) {
        a.a.push(b);
        a.b[b] = zd(c, d)
    }
    function Dd(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Ed(a) - c.length;
        if (0 > d)
            return "";
        a.a.sort(function(k, q) {
            return k - q
        });
        c = null;
        for (var e = "", f = 0; f < a.a.length; f++)
            for (var g = a.a[f], h = a.b[g], p = 0; p < h.length; p++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = Ad(h[p], a.c, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        b += m;
                        e = a.c;
                        break
                    }
                    a.f && (e = d,
                    m[e - 1] == a.c && --e,
                    b += m.substr(0, e),
                    e = a.c,
                    d = 0);
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }
    function Ed(a) {
        var b = 1, c;
        for (c in a.b)
            b = c.length > b ? c.length : b;
        return 3997 - b - a.c.length - 1
    }
    ;function Fd() {
        this.b = new td;
        this.a = rd() ? new qd : new P
    }
    Fd.prototype.setInterval = function(a, b) {
        return E.setInterval(a, b)
    }
    ;
    Fd.prototype.clearInterval = function(a) {
        E.clearInterval(a)
    }
    ;
    Fd.prototype.setTimeout = function(a, b) {
        return E.setTimeout(a, b)
    }
    ;
    Fd.prototype.clearTimeout = function(a) {
        E.clearTimeout(a)
    }
    ;
    function Gd(a) {
        Q();
        var b = K() || E;
        Hc(b, a, !1)
    }
    w(Fd);
    function Hd() {}
    function Q() {
        var a = Hd.g();
        if (!a.a) {
            if (!E)
                throw Error("Context has not been set and window is undefined.");
            a.a = Fd.g()
        }
        return a.a
    }
    w(Hd);
    function Id(a) {
        this.h = null;
        a || (a = []);
        this.f = -1;
        this.a = a;
        a: {
            if (a = this.a.length) {
                --a;
                var b = this.a[a];
                if (!(null === b || "object" != typeof b || Array.isArray(b) || Mb && b instanceof Uint8Array)) {
                    this.c = a - -1;
                    this.b = b;
                    break a
                }
            }
            this.c = Number.MAX_VALUE
        }
    }
    va(Id, Lb);
    function Jd(a) {
        this.f = a;
        this.a = -1;
        this.b = this.c = 0
    }
    function Kd(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e)
                d[e] = arguments[e];
            if (-1 < a.a)
                return b.apply(null, r(d));
            try {
                return a.a = a.f.a.a(),
                b.apply(null, r(d))
            } finally {
                a.c += a.f.a.a() - a.a,
                a.a = -1,
                a.b += 1
            }
        }
    }
    ;function Ld(a, b) {
        this.b = a;
        this.c = b;
        this.a = new Jd(a)
    }
    ;function R() {
        this.h = void 0;
        this.c = this.l = 0;
        this.i = -1;
        this.a = new ed;
        M(N(this.a, "mv", Yc)).a = void 0 === Zc ? null : Zc;
        N(this.a, "omid", L);
        M(N(this.a, "epoh", L));
        M(N(this.a, "epph", L));
        M(N(this.a, "umt", L)).a = void 0 === Xc ? null : Xc;
        M(N(this.a, "phel", L));
        M(N(this.a, "phell", L));
        M(N(this.a, "oseid", uc));
        M(N(this.a, "xdi", L));
        M(N(this.a, "amp", L));
        M(N(this.a, "prf", L));
        M(N(this.a, "gtx", L));
        M(N(this.a, "mvp_lv", L));
        this.a.b.mxd = 1;
        M(N(this.a, "msp", L));
        M(N(this.a, "eocm", L));
        M(N(this.a, "pnl", Vc));
        M(N(this.a, "osddtx", L)).a = void 0 === $c ? null : $c;
        this.j = new Ld(Q(),this.a);
        this.b = null;
        this.f = !1
    }
    function Md() {
        return R.g().j
    }
    w(R);
    function Nd() {
        var a = "https:";
        E && E.location && "http:" === E.location.protocol && (a = "http:");
        this.b = a;
        this.a = .01;
        this.c = Math.random()
    }
    function Od(a, b, c, d, e) {
        if ((d ? a.c : Math.random()) < (e || a.a))
            try {
                if (c instanceof yd)
                    var f = c;
                else
                    f = new yd,
                    qc(c, function(h, p) {
                        var m = f
                          , k = m.h++;
                        h = zd(p, h);
                        m.a.push(k);
                        m.b[k] = h
                    });
                var g = Dd(f, a.b, "/pagead/gen_204?id=" + b + "&");
                g && Gd(g)
            } catch (h) {}
    }
    ;function Pd(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }
    ;var Qd = null;
    function Rd() {
        var a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }
    function Sd() {
        var a = void 0 === a ? u : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
    ;function Td(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    }
    ;var S = u.performance
      , Ud = !!(S && S.mark && S.measure && S.clearMarks)
      , Vd = Ma(function() {
        var a;
        if (a = Ud) {
            var b;
            if (null === Qd) {
                Qd = "";
                try {
                    a = "";
                    try {
                        a = u.top.location.hash
                    } catch (c) {
                        a = u.location.hash
                    }
                    a && (Qd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                } catch (c) {}
            }
            b = Qd;
            a = !!b.indexOf && 0 <= b.indexOf("1337")
        }
        return a
    });
    function Wd() {
        var a = K();
        this.b = [];
        this.c = a || u;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [],
        this.b = a.google_js_reporting_queue,
        b = a.google_measure_js_timing);
        this.a = Vd() || (null != b ? b : 1 > Math.random())
    }
    function Xd(a) {
        a && S && Vd() && (S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
        S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Wd.prototype.start = function(a, b) {
        if (!this.a)
            return null;
        var c = Sd() || Rd();
        a = new Td(a,b,c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        S && Vd() && S.mark(b);
        return a
    }
    ;
    function Yd() {
        var a = Zd;
        this.i = $d;
        this.h = "jserror";
        this.f = !0;
        this.b = null;
        this.j = this.c;
        this.a = void 0 === a ? null : a
    }
    function ae(a, b, c) {
        return Kd(Md().a, function() {
            try {
                if (a.a && a.a.a) {
                    var d = a.a.start(b.toString(), 3);
                    var e = c();
                    var f = a.a
                      , g = d;
                    if (f.a && "number" === typeof g.value) {
                        var h = Sd() || Rd();
                        g.duration = h - g.value;
                        var p = "goog_" + g.label + "_" + g.uniqueId + "_end";
                        S && Vd() && S.mark(p);
                        !f.a || 2048 < f.b.length || f.b.push(g)
                    }
                } else
                    e = c()
            } catch (m) {
                f = a.f;
                try {
                    Xd(d),
                    f = a.j(b, new be(ce(m)), void 0, void 0)
                } catch (k) {
                    a.c(217, k)
                }
                if (!f)
                    throw m;
            }
            return e
        })()
    }
    function de(a, b) {
        var c = ee;
        return Kd(Md().a, function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f)
                e[f] = arguments[f];
            return ae(c, a, function() {
                return b.apply(void 0, e)
            })
        })
    }
    Yd.prototype.c = function(a, b, c, d, e) {
        e = e || this.h;
        try {
            var f = new yd;
            f.f = !0;
            Cd(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new be(ce(b)));
            b.msg && Cd(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.b)
                try {
                    this.b(g)
                } catch (v) {}
            if (d)
                try {
                    d(g)
                } catch (v) {}
            b = [g];
            f.a.push(3);
            f.b[3] = b;
            var h = vd()
              , p = new wd(u.location.href,u,!1);
            b = null;
            var m = h.length - 1;
            for (d = m; 0 <= d; --d) {
                var k = h[d];
                !b && ud.test(k.url) && (b = k);
                if (k.url && !k.ob) {
                    p = k;
                    break
                }
            }
            k = null;
            var q = h.length && h[m].url;
            0 != p.depth && q && (k = h[m]);
            var n = new xd(p,k);
            n.b && Cd(f, 4, "top", n.b.url || "");
            Cd(f, 5, "url", n.a.url || "");
            Od(this.i, e, f, !1, c)
        } catch (v) {
            try {
                Od(this.i, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ce(v),
                    url: n && n.a.url
                }, !1, c)
            } catch (Fa) {}
        }
        return this.f
    }
    ;
    function ce(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c; )
                    c = a,
                    a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    }
    function be(a) {
        Pd.call(this, Error(a), {
            message: a
        })
    }
    t(be, Pd);
    var $d, ee, Zd = new Wd;
    function fe() {
        var a = K();
        a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = Zd,
        a.a = !1,
        a.b != a.c.google_js_reporting_queue && (Vd() && x(a.b, Xd),
        a.b.length = 0))
    }
    (function() {
        $d = new Nd;
        ee = new Yd;
        var a = K();
        a && a.document && ("complete" == a.document.readyState ? fe() : Zd.a && Wb(a, "load", function() {
            fe()
        }))
    }
    )();
    function ge(a) {
        ee.b = function(b) {
            x(a, function(c) {
                c(b)
            })
        }
    }
    function he(a, b) {
        return ae(ee, a, b)
    }
    function ie(a, b) {
        return de(a, b)
    }
    function je(a, b) {
        Od($d, a, b, "jserror" != a, void 0)
    }
    function ke(a, b, c, d) {
        ee.c(a, b, c, d)
    }
    ;var le = Date.now()
      , me = -1
      , ne = -1
      , oe = !1;
    function T() {
        return Date.now() - le
    }
    function pe() {
        var a = R.g().h
          , b = 0 <= ne ? T() - ne : -1
          , c = oe ? T() - me : -1;
        if (947190542 == a)
            return 100;
        if (79463069 == a)
            return 200;
        a = [2E3, 4E3];
        var d = [250, 500, 1E3];
        ke(637, Error(), .001);
        var e = b;
        -1 != c && c < b && (e = c);
        for (b = 0; b < a.length; ++b)
            if (e < a[b]) {
                var f = d[b];
                break
            }
        void 0 === f && (f = d[a.length]);
        return f
    }
    ;function qe(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent; )
            a = a.parent,
            d++,
            pc(a) && (c = a,
            b = d);
        return {
            s: c,
            level: b
        }
    }
    ;var Qa = {
        Rb: "addEventListener",
        Xb: "getMaxSize",
        Yb: "getScreenSize",
        Zb: "getState",
        $b: "getVersion",
        hc: "removeEventListener",
        dc: "isViewable"
    };
    function re(a) {
        var b = a !== a.top
          , c = a.top === qe(a).s
          , d = -1
          , e = 0;
        if (b && c && a.top.mraid) {
            d = 3;
            var f = a.top.mraid
        } else
            d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
        f && (f.IS_GMA_SDK || (e = 2),
        Pa(function(g) {
            return ra(f[g])
        }) || (e = 1));
        return {
            F: f,
            va: e,
            Bb: d
        }
    }
    ;function se(a) {
        a = Gc(a);
        return !(!a || !a.observeIntersection)
    }
    function te(a) {
        return (a = a.document) && ra(a.elementFromPoint)
    }
    ;if (D && D.URL) {
        var ue, tc = D.URL;
        ue = !!tc && 0 < sc().length;
        ee.f = !ue
    }
    function ve(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = de(d, c);
        Wb(a, b, c, {
            capture: e
        });
        return c
    }
    function we(a) {
        var b = ["IMG", "FRAME", "IFRAME"];
        return Ba(b, function(c) {
            return a.nodeName == String(c)
        }) ? [a] : Aa(b, function(c, d) {
            return c.concat(Ia((a || document).getElementsByTagName(String(d))))
        }, [])
    }
    function xe(a, b) {
        if (a) {
            var c = 0
              , d = null;
            a = we(a);
            for (var e = 0; e < a.length; e++) {
                var f = !1;
                d = a[e];
                switch (d.nodeName) {
                case "IMG":
                    var g = d;
                    if (g.complete || g.naturalWidth)
                        f = !0;
                    break;
                case "FRAME":
                case "IFRAME":
                    g = d;
                    try {
                        if (g.readyState)
                            f = "complete" == g.readyState;
                        else {
                            var h = g.contentWindow || g.contentDocument;
                            h.document && (h = h.document);
                            f = h && h.readyState ? "complete" == h.readyState : !1
                        }
                    } catch (p) {
                        f = !1
                    }
                }
                f || (c++,
                ve(d, "load", function() {
                    c--;
                    c || b(null)
                }, 130))
            }
            a = d = null;
            !c && b(null)
        }
    }
    ;function ye(a) {
        var b = [];
        Na(a, function(c, d) {
            d = encodeURIComponent(d);
            "string" === typeof c && (c = encodeURIComponent(c));
            b.push(d + "=" + c)
        });
        b.push("24=" + Date.now());
        return b.join("\n")
    }
    ;var ze = 0;
    function Ae(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }
    function Be(a, b) {
        try {
            ze++,
            b.postMessage(a, "*")
        } catch (c) {}
    }
    function Ce(a, b) {
        b && (a(b),
        b.frames && x(b.frames, function(c) {
            Ce(a, c)
        }))
    }
    function De(a) {
        return new J(a.top,a.right,a.bottom,a.left)
    }
    function Ee() {
        var a = Q().b;
        return 0 === sd() ? -1 : a.isVisible() ? 0 : 1
    }
    function Fe(a) {
        return [a.top, a.left, a.bottom, a.right].join("-")
    }
    function Ge(a, b, c) {
        if (b && a)
            if (c && 0 < c.length)
                for (c = ya(c, function(e) {
                    var f = e.parent && e.parent !== e;
                    return e === E.top || f
                }),
                a = ea(c),
                c = a.next(); !c.done; c = a.next())
                    Be(b, c.value);
            else {
                c = [];
                var d = lc(a);
                d && c.push(d);
                if (0 === c.length)
                    try {
                        c = za(cc(document, "IFRAME".toString().toLowerCase(), void 0, a), function(e) {
                            return lc(e)
                        })
                    } catch (e) {}
                a = ea(c);
                for (c = a.next(); !c.done; c = a.next()) {
                    c = c.value;
                    try {
                        b && Ce(ta(Be, b), c)
                    } catch (e) {}
                }
            }
    }
    function He(a, b, c) {
        try {
            var d = ye(b);
            Ge(a, d, c)
        } catch (e) {}
    }
    ;function Ie() {
        var a = A;
        return a ? Ba("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return z(a, b)
        }) || z(a, "OMI/") && !z(a, "XiaoMi/") ? !0 : z(a, "Presto") && z(a, "Linux") && !z(a, "X11") && !z(a, "Android") && !z(a, "Mobi") : !1
    }
    function Je() {
        var a = A;
        return z(a, "AppleTV") || z(a, "Apple TV") || z(a, "CFNetwork") || z(a, "tvOS")
    }
    function Ke() {
        var a = A;
        return z(a, "sdk_google_atv_x86") || z(a, "Android TV")
    }
    ;function U() {
        this.b = !pc(E.top);
        this.A = !this.b || se(E);
        this.i = nc() || !nc() && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile"));
        var a = vd();
        a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(oc)[3] || null) ? decodeURI(a) : a) || "" : "";
        this.domain = a;
        this.a = new J(0,0,0,0);
        this.j = new G(0,0);
        this.h = new G(0,0);
        this.c = new J(0,0,0,0);
        this.l = new F(0,0);
        this.u = this.m = !1;
        this.f = !(!E || !re(E).F);
        Le(this)
    }
    function Me(a, b) {
        b && b.screen && (a.j = new G(b.screen.width,b.screen.height))
    }
    function Ne(a, b) {
        var c = a.a ? new G(Cc(a.a),Dc(a.a)) : new G(0,0);
        b = void 0 === b ? E : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0
          , e = 0;
        try {
            var f = b.document
              , g = f.body
              , h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight)
                d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight,
                e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var p = h.scrollHeight
                  , m = h.scrollWidth
                  , k = h.offsetHeight
                  , q = h.offsetWidth;
                h.clientHeight != k && (p = g.scrollHeight,
                m = g.scrollWidth,
                k = g.offsetHeight,
                q = g.offsetWidth);
                p > c.height ? p > k ? (d = p,
                e = m) : (d = k,
                e = q) : p < k ? (d = p,
                e = m) : (d = k,
                e = q)
            }
            var n = new G(e,d)
        } catch (v) {
            n = new G(-12245933,-12245933)
        }
        a.h = n
    }
    function Le(a) {
        E && E.document && (a.c = Sc(!1, E, a.i),
        a.a = Sc(!0, E, a.i),
        Ne(a, E),
        Me(a, E))
    }
    function Oe() {
        if (U.g().u)
            return !0;
        var a = Q().b.isVisible()
          , b = 0 === sd();
        return a || b
    }
    w(U);
    var Pe = new J(0,0,0,0);
    function Qe(a, b) {
        b = Re(b);
        return 0 === b ? 0 : Re(a) / b
    }
    function Re(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }
    function Se(a, b) {
        if (!a || !b)
            return !1;
        for (var c = 0; null !== a && 100 > c++; ) {
            if (a === b)
                return !0;
            try {
                a: {
                    var d = void 0;
                    if (Zb && !(C && yb("9") && !yb("10") && u.SVGElement && a instanceof u.SVGElement) && (d = a.parentElement)) {
                        var e = d;
                        break a
                    }
                    d = a.parentNode;
                    e = sa(d) && 1 == d.nodeType ? d : null
                }
                if (a = e || a) {
                    var f = H(a)
                      , g = f && gc(f)
                      , h = g && g.frameElement;
                    h && (a = h)
                }
            } catch (p) {
                break
            }
        }
        return !1
    }
    function Te(a, b, c) {
        if (!a || !b)
            return !1;
        b = Fc(Ec(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = K();
        pc(d.top) && d.top && d.top.document && (d = d.top);
        if (!te(d))
            return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a)
            return !1;
        b = (b = (b = H(c)) && b.defaultView && b.defaultView.frameElement) && Se(b, a);
        d = a === c;
        a = !d && a && mc(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }
    function Ue(a, b, c, d) {
        return U.g().b ? !1 : 0 >= Cc(a) || 0 >= Dc(a) ? !0 : c && d ? he(208, function() {
            return Te(a, b, c)
        }) : !1
    }
    ;function Ve(a, b, c) {
        var d = new J(0,0,0,0);
        this.time = a;
        this.volume = null;
        this.c = b;
        this.a = d;
        this.b = c
    }
    ;function We(a, b, c, d, e, f, g) {
        this.j = a;
        this.i = b;
        this.c = c;
        this.a = d;
        this.h = e;
        this.b = f;
        this.f = g
    }
    ;function Xe(a) {
        this.c = a;
        this.b = 0;
        this.a = null
    }
    Xe.prototype.cancel = function() {
        Q().clearTimeout(this.a);
        this.a = null
    }
    ;
    function Ye(a) {
        var b = Q();
        a.a = b.setTimeout(Kd(Md().a, ie(143, function() {
            a.b++;
            a.c.Ab()
        })), pe())
    }
    ;function V(a, b, c) {
        this.s = a;
        this.N = void 0 === c ? "na" : c;
        this.h = [];
        this.m = !1;
        this.c = new Ve(-1,!0,this);
        this.a = this;
        this.i = b;
        this.u = this.l = !1;
        this.G = "uk";
        this.D = !1;
        this.j = !0
    }
    l = V.prototype;
    l.Z = function() {
        return !1
    }
    ;
    l.Oa = function() {
        return this.m = !0
    }
    ;
    l.W = function() {
        return this.a.G
    }
    ;
    l.ga = function() {
        return this.a.u
    }
    ;
    function Ze(a, b, c) {
        if (!a.u || (void 0 === c ? 0 : c))
            a.u = !0,
            a.G = b,
            a.i = 0,
            a.a != a || $e(a)
    }
    l.w = function() {
        return this.a.N
    }
    ;
    l.K = function() {
        return this.a.ib()
    }
    ;
    l.ib = function() {
        return {}
    }
    ;
    l.L = function() {
        return this.a.i
    }
    ;
    function af(a, b) {
        Ga(a.h, b) || (a.h.push(b),
        b.fa(a.a),
        b.P(a.c),
        b.R() && (a.l = !0))
    }
    l.Sa = function() {
        var a = U.g();
        a.a = Sc(!0, this.s, a.i)
    }
    ;
    l.Ta = function() {
        Me(U.g(), this.s)
    }
    ;
    l.tb = function() {
        Ne(U.g(), this.s)
    }
    ;
    l.ub = function() {
        var a = U.g();
        a.c = Sc(!1, this.s, a.i)
    }
    ;
    l.Ma = function() {
        return this.c.a
    }
    ;
    function bf(a) {
        a = a.a;
        a.Ta();
        a.Sa();
        a.ub();
        a.tb();
        a.c.a = a.Ma()
    }
    l.Ab = function() {}
    ;
    function cf(a) {
        a.l = a.h.length ? Ba(a.h, function(b) {
            return b.R()
        }) : !1
    }
    function df(a) {
        var b = Ia(a.h);
        x(b, function(c) {
            c.P(a.c)
        })
    }
    function $e(a) {
        var b = Ia(a.h);
        x(b, function(c) {
            c.fa(a.a)
        });
        a.a != a || df(a)
    }
    l.fa = function(a) {
        var b = this.a;
        this.a = a.L() >= this.i ? a : this;
        b !== this.a ? (this.j = this.a.j,
        $e(this)) : this.j !== this.a.j && (this.j = this.a.j,
        $e(this))
    }
    ;
    l.P = function(a) {
        if (a.b === this.a) {
            var b = this.c
              , c = this.l;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.c == a.c)
                b = b.a,
                c = a.a,
                c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
            this.c = a;
            !c && df(this)
        }
    }
    ;
    l.R = function() {
        return this.l
    }
    ;
    l.B = function() {
        this.D = !0
    }
    ;
    l.X = function() {
        return this.D
    }
    ;
    function ef(a, b, c, d) {
        this.c = a;
        this.a = new J(0,0,0,0);
        this.l = new J(0,0,0,0);
        this.b = b;
        this.G = c;
        this.D = d;
        this.C = !1;
        this.timestamp = -1;
        this.h = new We(b.c,this.a,new J(0,0,0,0),0,0,T(),0)
    }
    l = ef.prototype;
    l.Aa = function() {
        return !0
    }
    ;
    l.S = function() {}
    ;
    l.La = function() {
        if (this.c) {
            var a = this.c
              , b = this.b.a.s;
            try {
                try {
                    var c = De(a.getBoundingClientRect())
                } catch (m) {
                    c = new J(0,0,0,0)
                }
                var d = c.right - c.left
                  , e = c.bottom - c.top
                  , f = Mc(a, b)
                  , g = f.x
                  , h = f.y;
                var p = new J(Math.round(h),Math.round(g + d),Math.round(h + e),Math.round(g))
            } catch (m) {
                p = Ec(Pe)
            }
            this.a = p
        }
    }
    ;
    l.bb = function() {
        this.l = this.b.c.a
    }
    ;
    l.O = function() {
        this.La();
        this.h = new We(this.b.c,this.a,this.h.c,this.h.a,this.h.h,T(),this.h.f)
    }
    ;
    l.B = function() {
        if (!this.X()) {
            var a = this.b
              , b = a.h
              , c = xa(b, this);
            0 <= c && Array.prototype.splice.call(b, c, 1);
            a.l && this.R() && cf(a);
            this.S();
            this.C = !0
        }
    }
    ;
    l.X = function() {
        return this.C
    }
    ;
    l.K = function() {
        return this.b.K()
    }
    ;
    l.L = function() {
        return this.b.L()
    }
    ;
    l.W = function() {
        return this.b.W()
    }
    ;
    l.ga = function() {
        return this.b.ga()
    }
    ;
    l.fa = function() {}
    ;
    l.P = function() {
        this.O()
    }
    ;
    l.R = function() {
        return this.D
    }
    ;
    function ff(a) {
        this.h = !1;
        this.a = a;
        this.f = oa
    }
    l = ff.prototype;
    l.L = function() {
        return this.a.L()
    }
    ;
    l.W = function() {
        return this.a.W()
    }
    ;
    l.ga = function() {
        return this.a.ga()
    }
    ;
    l.create = function(a, b, c) {
        var d = null;
        this.a && (d = this.wa(a, b, c),
        af(this.a, d));
        return d
    }
    ;
    l.Ra = function() {
        return this.Y()
    }
    ;
    l.Y = function() {
        return !1
    }
    ;
    l.mb = function(a) {
        return this.a.Oa() ? (af(this.a, this),
        this.f = a,
        !0) : !1
    }
    ;
    l.fa = function(a) {
        0 == a.L() && this.f(a.W(), this)
    }
    ;
    l.P = function() {}
    ;
    l.R = function() {
        return !1
    }
    ;
    l.B = function() {
        this.h = !0
    }
    ;
    l.X = function() {
        return this.h
    }
    ;
    l.K = function() {
        return {}
    }
    ;
    function gf(a, b, c) {
        this.c = void 0 === c ? 0 : c;
        this.b = a;
        this.a = null == b ? "" : b
    }
    function hf(a) {
        switch (Math.trunc(a.c)) {
        case -16:
            return -16;
        case -8:
            return -8;
        case 0:
            return 0;
        case 8:
            return 8;
        case 16:
            return 16;
        default:
            return 16
        }
    }
    function jf(a, b) {
        return a.c < b.c ? !0 : a.c > b.c ? !1 : a.b < b.b ? !0 : a.b > b.b ? !1 : typeof a.a < typeof b.a ? !0 : typeof a.a > typeof b.a ? !1 : a.a < b.a
    }
    ;function kf() {
        this.c = 0;
        this.a = [];
        this.b = !1
    }
    kf.prototype.add = function(a, b, c) {
        ++this.c;
        a = new gf(a,b,c);
        this.a.push(new gf(a.b,a.a,a.c + this.c / 4096));
        this.b = !0;
        return this
    }
    ;
    function lf(a, b) {
        x(b.a, function(c) {
            a.add(c.b, c.a, hf(c))
        })
    }
    function mf(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        qc(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        })
    }
    function nf(a) {
        var b = of;
        a.b && (Ja(a.a, function(c, d) {
            return jf(d, c) ? 1 : jf(c, d) ? -1 : 0
        }),
        a.b = !1);
        return Aa(a.a, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    }
    ;function of(a) {
        var b = a.b;
        a = a.a;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : "array" == pa(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Ga(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    }
    ;function pf(a) {
        var b = void 0 === b ? !0 : b;
        this.a = new kf;
        void 0 !== a && lf(this.a, a);
        b && this.a.add("v", Tb, -16)
    }
    pf.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204"
          , b = nf(this.a);
        0 < b.length && (a += "?" + b);
        return a
    }
    ;
    function qf(a) {
        var b = []
          , c = [];
        Na(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d)
                switch ("array" == pa(d) && (d = d.join(",")),
                d = [e, "=", d].join(""),
                e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
                }
        });
        return b.concat(c)
    }
    function rf() {
        if (Tb && "unreleased" !== Tb)
            return Tb
    }
    ;function sf() {
        this.a = 0
    }
    w(sf);
    function tf(a) {
        this.m = a;
        this.l = !1
    }
    tf.prototype.i = function(a, b) {
        this.a = a;
        this.b = b
    }
    ;
    function uf() {
        tf.call(this, "capability")
    }
    t(uf, tf);
    uf.prototype.j = function() {
        return !0
    }
    ;
    uf.prototype.h = function() {
        var a = {};
        return a.b_name = this.a.U,
        a.v_name = this.b.U,
        a
    }
    ;
    function vf() {
        tf.call(this, "diff")
    }
    t(vf, tf);
    vf.prototype.j = function() {
        return !(.02 >= Math.abs(this.b.o - this.a.o))
    }
    ;
    vf.prototype.h = function() {
        var a = {};
        return a.b_name = this.a.U,
        a.v_name = this.b.U,
        a.b_vp_off = JSON.stringify(this.a.I),
        a.v_vp_off = JSON.stringify(this.b.I),
        a.b_vp_sz = JSON.stringify(this.a.Wa),
        a.v_vp_sz = JSON.stringify(this.b.Wa),
        a.b_exp = this.a.o,
        a.v_exp = this.b.o,
        a.efp_occ = this.a.Eb,
        a.sbv = this.a.ia,
        a
    }
    ;
    function wf() {
        tf.call(this, "capt");
        this.f = [];
        this.c = []
    }
    t(wf, tf);
    wf.prototype.i = function(a, b) {
        tf.prototype.i.call(this, a, b);
        20 <= this.c.length || (this.f.push(a.o),
        this.c.push(b.o))
    }
    ;
    wf.prototype.j = function() {
        return 20 === this.c.length
    }
    ;
    wf.prototype.h = function() {
        var a = xf(this.f, this.c)
          , b = yf(this.f, this.c)
          , c = {};
        return c.b_name = this.a.U,
        c.v_name = this.b.U,
        c.b_exp = this.f.join(","),
        c.v_exp = this.c.join(","),
        c.diff = a,
        c.diff_buckets = b,
        c
    }
    ;
    function xf(a, b) {
        return Ca(La(a, b), function(c) {
            return c[0] !== c[1]
        })
    }
    function yf(a, b) {
        function c(d) {
            return .25 * Math.floor(d / .25)
        }
        return xf(za(a, c), za(b, c))
    }
    ;function zf(a, b, c, d, e) {
        e = void 0 === e ? [new uf, new vf, new wf] : e;
        I.call(this);
        this.a = a.wa(b, c, this.R());
        this.a.Aa();
        this.c = e;
        this.b = d
    }
    t(zf, I);
    zf.prototype.V = function() {
        this.a && (this.a.S(),
        this.a.B())
    }
    ;
    function Af(a, b, c) {
        x(a.c, function(d) {
            var e = a.b;
            if (!d.l && (d.i(b, c),
            d.j())) {
                d.l = !0;
                var f = d.h()
                  , g = new kf;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.m);
                d = sf.g();
                g.add("i", d.a++);
                g.add("adk", e);
                mf(g, f);
                e = new pf(g);
                var h = void 0 === h ? 4E3 : h;
                e = e.toString();
                /&v=[^&]+/.test(e) || (e = (f = rf()) ? e + "&v=" + encodeURIComponent(f) : e);
                e = e.substring(0, h);
                Gd(e)
            }
        })
    }
    zf.prototype.P = function() {}
    ;
    zf.prototype.fa = function() {}
    ;
    zf.prototype.R = function() {
        return !1
    }
    ;
    function Bf() {
        this.a = this.b = this.c = 0
    }
    function Cf(a, b, c, d) {
        b && (a.c += c,
        a.b += c,
        a.a = Math.max(a.a, a.b));
        if (void 0 === d ? !b : d)
            a.b = 0
    }
    ;var Df = [1, .75, .5, .3, 0];
    function Ef(a) {
        this.a = a = void 0 === a ? Df : a;
        this.b = za(this.a, function() {
            return new Bf
        })
    }
    function Ff(a) {
        return Gf(a, function(b) {
            return b.c
        }, !1)
    }
    function Hf(a) {
        return Gf(a, function(b) {
            return b.a
        }, !0)
    }
    function If(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.a.length; f++) {
            var h = a.a[f]
              , p = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            Cf(a.b[f], g && p, e, !g || h)
        }
    }
    function Gf(a, b, c) {
        a = za(a.b, function(d) {
            return b(d)
        });
        return c ? a : Jf(a)
    }
    function Jf(a) {
        return za(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    }
    ;function Kf() {
        this.a = new Ef;
        this.c = new Bf;
        this.b = -1;
        this.f = new Ef([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }
    function W(a) {
        return 1E3 <= a.c.a
    }
    ;var Lf = new J(0,0,0,0);
    function Mf(a, b, c) {
        I.call(this);
        this.Qb = Ec(Lf);
        this.c = new Kf;
        this.na = -2;
        this.Db = -1;
        this.Ha = b;
        this.ma = null;
        this.N = !1;
        this.I = null;
        this.D = -1;
        this.ca = c;
        this.Fb = this.Ia = oa;
        this.b = new nd;
        this.b.a = a;
        this.b.b = a;
        this.m = !1;
        this.i = {
            Ca: null,
            Ba: null
        };
        this.da = !0;
        this.H = null;
        this.Ga = !1;
        R.g().l++;
        this.f = new Uc;
        this.Cb = this.ua = -1;
        this.Fa = 0;
        this.aa = -1;
        this.a = null;
        this.Ka = new J(0,0,0,0);
        this.wb = !1;
        a = this.h = new ed;
        N(a, "od", Tc);
        M(N(a, "opac", L));
        M(N(a, "gcm", L));
        M(N(a, "sbeos", L));
        M(N(a, "prf", L));
        M(N(a, "mwt", L));
        M(N(a, "lcs", L));
        N(a, "iogeo", L);
        M(N(a, "osddt", L));
        M(N(a, "nrl", L));
        M(N(a, "nrls", Wc));
        (a = this.b.a) && a.getAttribute && md(a, "googleAvInapp") && (U.g().f = !0);
        1 == this.ca ? fd(this.h, "od", 1) : fd(this.h, "od", 0)
    }
    t(Mf, I);
    l = Mf.prototype;
    l.V = function() {
        Nf(this);
        this.H && this.H.B();
        this.a && this.a.B();
        delete this.c;
        delete this.Ia;
        delete this.Fb;
        delete this.b.a;
        delete this.b.b;
        delete this.i;
        delete this.H;
        delete this.a;
        delete this.h;
        I.prototype.V.call(this)
    }
    ;
    function Of(a) {
        return a.a ? a.a.a : a.Qb
    }
    l.za = function(a) {
        var b = R.g();
        "string" === typeof a && 0 != a.length && hd(b.a, a)
    }
    ;
    l.sb = function() {
        return !1
    }
    ;
    l.T = function() {
        this.N = !0
    }
    ;
    l.ya = function() {
        return this.N
    }
    ;
    l.Ua = function() {
        this.f.o = 0
    }
    ;
    function Pf(a, b) {
        if (a.a) {
            if (b.w() === a.a.w())
                return;
            a.a.B();
            a.a = null
        }
        b = b.create(a.b.b, a.h, a.sb());
        if (b = null != b && b.Aa() ? b : null)
            a.a = b
    }
    function Qf(a, b, c) {
        if (a.a) {
            a.a.O();
            var d = a.a.h
              , e = d.j
              , f = e.a;
            if (null != d.c) {
                var g = d.i;
                a.I = new F(g.left - f.left,g.top - f.top);
                a.Ka = d.c
            }
            f = a.ia() ? Math.max(d.a, d.h) : d.a;
            f = .99 <= f ? 1 : f;
            g = {};
            null !== e.volume && (g.volume = e.volume);
            e = 1 === O(a.h, "osddt");
            1 === O(a.h, "osddtx") && (e = !0);
            "nis" == a.a.w() && (e = !0);
            "gsv" == a.a.w() && (e = !0);
            "nio" == a.a.w() && (e = !0);
            e ? (a.ma && -1 !== d.b && -1 !== a.ma.b ? (e = d.b - a.ma.b,
            e = 1E4 < e ? 0 : e) : e = 0,
            a.ma = d,
            a.Da(f, b, c, !1, g, e, d.f)) : (-1 == a.Ha ? e = 0 : (e = b - a.Ha,
            e = 1E4 < e ? 0 : e),
            a.Da(f, b, c, !1, g, e, d.f))
        }
    }
    function Rf(a) {
        if (a.ya() && a.H) {
            var b = 1 == O(a.h, "od")
              , c = U.g().a
              , d = a.H
              , e = new G(Cc(c),Dc(c));
            c = a.ia();
            a = {
                U: a.a ? a.a.w() : "ns",
                I: a.I,
                Wa: e,
                ia: c,
                o: a.f.o,
                Eb: b
            };
            if (b = d.a) {
                b.O();
                e = b.h;
                var f = e.j.a
                  , g = null
                  , h = null;
                null != e.c && f && (g = e.i,
                g = new F(g.left - f.left,g.top - f.top),
                h = new G(f.right - f.left,f.bottom - f.top));
                c = {
                    U: b.w(),
                    I: g,
                    Wa: h,
                    ia: c,
                    Eb: !1,
                    o: c ? Math.max(e.a, e.h) : e.a
                }
            } else
                c = null;
            c && Af(d, a, c)
        }
    }
    l.Da = function(a, b, c, d, e, f, g) {
        this.m || (this.ya() && (e = new Uc,
        e.c = c,
        e.b = Ee(),
        e.o = 0 === this.D && 1 === O(this.h, "opac") ? 0 : a,
        e.a = this.ha(),
        e.f = g,
        a = this.c,
        g = this.f,
        d = d && this.f.o >= (this.ha() ? .3 : .5),
        a.b = Math.max(a.b, e.o),
        If(a.f, e.f, g.f, e.c, f, d),
        If(a.a, e.o, g.o, e.c, f, d),
        d = d || g.a != e.a ? g.isVisible() && e.isVisible() : g.isVisible(),
        g = !e.isVisible() || e.c,
        Cf(a.c, d, f, g),
        this.Ha = b,
        0 < e.o && (-1 === this.ua && (this.ua = b),
        this.Cb = b),
        -1 == this.Db && W(this.c) && (this.Db = b),
        -2 == this.na && (this.na = Re(Of(this)) ? e.o : -1),
        this.f = e,
        c && (this.f.o = 0)),
        this.Ia(this))
    }
    ;
    l.ha = function() {
        return !1
    }
    ;
    l.ia = function() {
        return this.wb || this.Ga
    }
    ;
    function Sf(a) {
        a.b.b && (a.i.Ca = ve(a.b.b, "mouseover", function() {
            a.aa = T()
        }, 149),
        a.i.Ba = ve(a.b.b, "mouseout", function() {
            var b = T();
            -1 == a.aa || b < a.aa || (a.Fa += b - a.aa);
            a.aa = -1
        }, 150))
    }
    function Nf(a) {
        a.b.b && (a.i.Ca && (Xb(a.b.b, "mouseover", a.i.Ca),
        a.i.Ca = null),
        a.i.Ba && (Xb(a.b.b, "mouseout", a.i.Ba),
        a.i.Ba = null))
    }
    function Tf(a) {
        a.a && a.a.S()
    }
    ;function Uf() {
        Vf(this)
    }
    function Vf(a) {
        !a.a && ra(E.Goog_AdSense_getAdAdapterInstance) && (a.a = Goog_AdSense_getAdAdapterInstance());
        !a.b && ra(E.Goog_Common_getAdAdapterInstance) && (a.b = Goog_Common_getAdAdapterInstance());
        !a.c && bc() && (a.c = !0)
    }
    function Wf(a, b, c, d) {
        Vf(a);
        var e = U.g().m;
        a.a && a.a.getNewBlocks(b, e);
        a.b && a.b.getNewBlocks(b, e);
        a.c && !c() && (d(!0),
        b(bc(), "", 13, !0))
    }
    function Xf(a) {
        Vf(a);
        return (a.a ? a.a.numBlocks() : 0) + (a.b ? a.b.numBlocks() : 0) + (a.c ? 1 : 0)
    }
    function Yf(a) {
        Vf(a);
        return a.a ? a.a.getOseId() : a.b ? a.b.getOseId() : 0
    }
    ;function Zf(a) {
        return db() ? (a = (a = H(a)) && gc(a),
        !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    }
    ;var $f = "StopIteration"in u ? u.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    function ag() {}
    ag.prototype.next = function() {
        throw $f;
    }
    ;
    ag.prototype.Ya = function() {
        return this
    }
    ;
    function bg(a) {
        if (a instanceof ag)
            return a;
        if ("function" == typeof a.Ya)
            return a.Ya(!1);
        if (qa(a)) {
            var b = 0
              , c = new ag;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        throw $f;
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    function cg(a, b) {
        if (qa(a))
            try {
                x(a, b, void 0)
            } catch (c) {
                if (c !== $f)
                    throw c;
            }
        else {
            a = bg(a);
            try {
                for (; ; )
                    b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== $f)
                    throw c;
            }
        }
    }
    function dg(a, b) {
        var c = 1;
        cg(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }
    function eg(a, b) {
        var c = bg(a);
        a = new ag;
        a.next = function() {
            var d = c.next();
            if (b.call(void 0, d, void 0, c))
                return d;
            throw $f;
        }
        ;
        return a
    }
    function fg(a) {
        var b = bg(a);
        a = new ag;
        var c = 100;
        a.next = function() {
            if (0 < c--)
                return b.next();
            throw $f;
        }
        ;
        return a
    }
    ;function gg(a, b) {
        this.c = b;
        this.b = null == a;
        this.a = a
    }
    t(gg, ag);
    gg.prototype.next = function() {
        if (this.b)
            throw $f;
        var a = this.a || null;
        this.b = null == a;
        var b;
        if (b = a) {
            b = this.c;
            if (kb(a, "parentElement") && null != a.parentElement && a != a.parentElement)
                var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? Zf : d;
                if (d(a))
                    try {
                        var e = H(a)
                          , f = e && gc(e)
                          , g = f && f.frameElement;
                        c = null == g ? null : g
                    } catch (h) {
                        c = null
                    }
                else
                    c = null
            } else
                c = null;
            b = c
        }
        this.a = b;
        return a
    }
    ;
    function hg(a) {
        var b = 1;
        a = fg(new gg(a,!0));
        a = eg(a, function() {
            return 0 < b
        });
        return dg(a, function(c, d) {
            var e = 1;
            if (kb(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = H(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[gb()];
                    if ("undefined" !== typeof g)
                        d = g;
                    else {
                        g = d.style;
                        var h = Kc.opacity;
                        if (!h) {
                            var p = gb();
                            h = p;
                            void 0 === d.style[p] && (p = (qb ? "Webkit" : pb ? "Moz" : C ? "ms" : nb ? "O" : null) + ib(p),
                            void 0 !== d.style[p] && (h = p));
                            Kc.opacity = h
                        }
                        d = g[h] || ""
                    }
                    g = d
                }
                f = f(g);
                "number" !== typeof f || isNaN(f) || (e = f)
            }
            return b = c * e
        })
    }
    ;function ig(a, b, c, d, e, f, g) {
        f = void 0 === f ? oa : f;
        g = void 0 === g ? [] : g;
        Mf.call(this, c, d, e);
        this.C = b;
        this.ja = this.j = 0;
        this.pb = null;
        this.lb = this.fb = "";
        this.gb = [];
        this.hb = [];
        this.ab = this.jb = "";
        this.vb = !1;
        this.u = 4;
        this.yb = !1;
        this.ba = [];
        this.J = this.l = "";
        this.xb = this.cb = this.rb = !1;
        this.ka = 0;
        this.ea = this.qb = Ee();
        this.qa = 0;
        this.Pb = f;
        this.zb = !1;
        this.oa = this.Ea = this.Ja = this.ta = this.A = -1;
        this.G = {};
        this.ra = g;
        jg(this, this.b.a);
        this.C && "string" === typeof this.C && (a = this.C.match(/fa=([^&;]+)/)) && 2 == a.length && a[1] == (30).toString() && (this.Ga = !0);
        jd(R.g().a, this.C)
    }
    t(ig, Mf);
    function kg(a, b, c) {
        return (a = String(a[b] || ld(a, c) || "")) ? a.split("|") : []
    }
    function jg(a, b) {
        if (b) {
            if (0 == a.j)
                if (a.b.a) {
                    var c = a.b.a._adk_;
                    c || (c = (c = ld(a.b.a, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                } else
                    c = 0;
            else
                c = a.j;
            a.j = c;
            "" == a.fb && (a.fb = String(b._avi_ || ""));
            "" == a.lb && (a.lb = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
            a.gb.length || (a.gb = kg(b, "_avicxn_", "googleAvCxn"));
            a.hb.length || (a.hb = kg(b, "_avieoscxn_", "googleEOSAvCxn"));
            "" == a.jb && (a.jb = String(b._aviextcxn_ || ld(b, "googleAvExtCxn") || ""));
            "" == a.ab && (a.ab = String(b._cid_ || ""));
            a.vb || (a.vb = !!b._imm_ || md(b, "googleAvImmediate"));
            "" == a.J && (a.J = String(b._cvu_ || ld(b, "googleAvCpmav") || ""));
            "" == a.l && (a.l = String(ld(b, "googleAvBtr") || ""));
            a.za(String(b._avm_ || ld(b, "googleAvMetadata") || ""))
        }
    }
    l = ig.prototype;
    l.V = function() {
        delete this.ba;
        delete this.ra;
        Mf.prototype.V.call(this)
    }
    ;
    function lg(a, b, c) {
        x(a.ra, function(d) {
            return d.a(a, c, b)
        })
    }
    l.ya = function() {
        return this.N && !(1 == this.qa || 3 == this.qa)
    }
    ;
    l.Ua = function() {
        Mf.prototype.Ua.call(this);
        this.Ka = new J(0,0,0,0)
    }
    ;
    l.T = function() {
        this.N || (this.Ja = Rd(),
        mg(this, !1, this.na),
        null != this.l && "" != this.l && (Ic(this.l),
        this.l = ""));
        Mf.prototype.T.call(this);
        ng(this)
    }
    ;
    function ng(a) {
        if (a.N && u == u.top) {
            var b = u.pageYOffset;
            null != b && (a.oa = Math.max(b, a.oa));
            lg(a, 4, {})
        }
    }
    function og(a) {
        return new od(a.j,a.pb)
    }
    l.za = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = new ed
              , c = R.g();
            N(b, "omid", L);
            hd(b, a);
            b = O(b, "omid");
            null !== b && (c.a.b.omid = b);
            a = hd(this.h, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                "ts=0" == d ? this.da = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1],
                "0" == d ? this.ka = 2 : "1" == d && (this.ka = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.wb = !0) : "adf=1" == d && (this.zb = !0)
            }
            this.f.a = this.ha();
            Mf.prototype.za.call(this, a)
        }
    }
    ;
    l.Da = function(a, b, c, d, e, f, g) {
        var h = W(this.c)
          , p = Math.floor(100 * this.f.o);
        this.ka = 242500 <= Re(Of(this)) ? 1 : 2;
        Mf.prototype.Da.call(this, a, b, c, d, e, f, g);
        -1 == this.ea && -1 != this.f.b ? this.ea = this.f.b : 0 == this.ea && 1 == this.f.b && (this.ea = 1);
        a = W(this.c);
        b = Math.floor(100 * this.f.o);
        (!h && a || b != p) && mg(this, a, b);
        try {
            this.D = hg(this.b.b)
        } catch (m) {}
        ng(this)
    }
    ;
    l.ha = function() {
        return rb ? !1 : 1 == this.ka
    }
    ;
    function pg(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {}
          , f = qg(a);
        d && y(f, d);
        f.adk = a.j;
        a.zb && a.ja && (f.adf = a.ja);
        d = a.m;
        var g = R.g();
        !c && d && g.b && (c = g.b);
        c && (f.r = c);
        0 === a.D && (f.invis = 1);
        c = qf(f).join("&");
        e[3] = c;
        e[11] = d;
        e[29] = R.g().c;
        e[0] = b;
        e[7] = a.f.o;
        e[9] = Fe(a.Ka);
        e[28] = a.ca;
        e[32] = a.a ? a.a.w() : "ns";
        e[5] = W(a.c) && 4 != a.u;
        e[13] = Hf(a.c.a).join(",");
        e[18] = 0 == Re(Of(a));
        null != a.I && (e[20] = a.I.y,
        e[21] = a.I.x);
        b = U.g();
        null != b.c && (e[22] = Cc(b.c),
        e[23] = Dc(b.c));
        null != b.a && (e[30] = Cc(b.a),
        e[31] = Dc(b.a),
        e[38] = Fe(b.a));
        c = b.l;
        f = Of(a);
        e[37] = Fe(new J(f.top + c.y,f.right + c.x,f.bottom + c.y,f.left + c.x));
        b.h && (b = b.h,
        e[39] = b.width + "-" + b.height);
        -1 != a.D && (e[25] = a.D);
        if (a = og(a))
            a.b && (e[4] = a.b),
            a.a && (e[12] = a.a);
        return e
    }
    function qg(a) {
        var b = U.g()
          , c = gd(a.h)
          , d = b.l
          , e = Of(a);
        c.p = [e.top + d.y, e.left + d.x, e.bottom + d.y, e.right + d.x];
        d = a.c;
        c.tos = Ff(d.a);
        c.mtos = Hf(d.a);
        c.mcvt = d.c.a;
        c.rs = a.ca;
        (e = 5 == a.ca) || (c.ht = a.Fa);
        0 <= a.ua && (c.tfs = a.ua,
        c.tls = a.Cb);
        c.mc = Ae(d.b);
        c.lte = Ae(a.na);
        c.bas = a.qb;
        c.bac = a.ea;
        b.b && (c["if"] = a.m ? 0 : 1);
        c.met = a.b.c;
        e && a.C && (c.req = encodeURIComponent(a.C).substring(0, 100));
        a.xb && (c.ci = "1");
        a.ha() && (c.la = "1");
        a.Ga && (c.pa = "1");
        c.avms = a.a ? a.a.w() : "ns";
        a.a && y(c, a.a.K());
        0 != a.qa && (c.md = a.qa);
        c.btr = null != a.l && "" != a.l ? 1 : 0;
        c.lm = a.u;
        y(c, rg(a));
        return c
    }
    function rg(a) {
        var b = a.A;
        var c = a.A;
        c = -1 == c || a.ta < c ? -1 : a.ta - c;
        var d = -1 == a.A || a.Ja < a.A ? -1 : a.Ja - a.A
          , e = sg(a)
          , f = {};
        return f.rst = 0 < b ? b : void 0,
        f.dlt = 0 <= c ? c : void 0,
        f.rpt = 0 <= d ? d : void 0,
        f.isd = 0 <= a.Ea ? a.Ea : void 0,
        f.msd = 0 <= a.oa ? a.oa : void 0,
        f.ext = e ? e : void 0,
        f
    }
    function sg(a) {
        return a.G && 0 < rc(a.G).length ? encodeURIComponent(za(rc(a.G), function(b) {
            return b + "=" + a.G[b]
        }).join("&")) : null
    }
    function tg(a, b) {
        b && qc(b, function(c, d) {
            null == c ? delete a.G[d] : a.G[d] = c
        })
    }
    function mg(a, b, c) {
        if (b = a.Pb(b, c))
            tg(a, b),
            lg(a, 3, {})
    }
    l.sb = function() {
        return !1
    }
    ;
    function ug(a, b, c, d) {
        ef.call(this, a, b, c, d)
    }
    t(ug, ef);
    ug.prototype.nb = function(a) {
        return Ue(a, this.l, this.c, 1 == O(this.G, "od"))
    }
    ;
    ug.prototype.O = function() {
        var a = this.b.c;
        this.timestamp = -1 === a.time ? T() : a.time;
        this.La();
        this.bb();
        a = this.a;
        var b = this.l;
        a = a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new J(Math.max(a.top, b.top),Math.min(a.right, b.right),Math.min(a.bottom, b.bottom),Math.max(a.left, b.left)) : new J(0,0,0,0);
        b = a.top >= a.bottom || a.left >= a.right ? new J(0,0,0,0) : a;
        a = this.b.c;
        var c = 0
          , d = 0
          , e = 0;
        0 < (this.a.bottom - this.a.top) * (this.a.right - this.a.left) && (this.nb(b) ? b = new J(0,0,0,0) : (c = U.g().j,
        e = new J(0,c.height,c.width,0),
        c = Qe(b, this.a),
        d = Qe(b, U.g().a),
        e = Qe(b, e)));
        b = b.top >= b.bottom || b.left >= b.right ? new J(0,0,0,0) : Fc(b, -this.a.left, -this.a.top);
        this.h = new We(a,this.a,b,c,d,this.timestamp,e)
    }
    ;
    ug.prototype.w = function() {
        return this.b.w()
    }
    ;
    function vg(a) {
        var b = [];
        wg(new xg, a, b);
        return b.join("")
    }
    function xg() {}
    function wg(a, b, c) {
        if (null == b)
            c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)
                        c.push(e),
                        wg(a, d[f], c),
                        e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (f = b[d],
                        "function" != typeof f && (c.push(e),
                        yg(d, c),
                        c.push(":"),
                        wg(a, f, c),
                        e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                yg(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var zg = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , Ag = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    function yg(a, b) {
        b.push('"', a.replace(Ag, function(c) {
            var d = zg[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1),
            zg[c] = d);
            return d
        }), '"')
    }
    ;function Bg() {
        this.key = "goog_adspeed";
        this.c = [3, 4];
        this.b = null
    }
    Bg.prototype.a = function(a, b, c) {
        if (!Ga(this.c, c) || !pd(og(a)))
            return !1;
        c = {};
        c = (c[0] = this.key,
        c[40] = vg(rg(a)),
        c);
        var d;
        if (d = this.b)
            a: {
                d = this.b;
                for (var e in d)
                    if (!(e in c) || d[e] !== c[e]) {
                        d = !1;
                        break a
                    }
                for (var f in c)
                    if (!(f in d)) {
                        d = !1;
                        break a
                    }
                d = !0
            }
        if (d)
            return !1;
        this.b = c;
        e = {};
        y(e, c, b);
        return Cg(a, {
            Va: {},
            Qa: e
        })
    }
    ;
    function Dg() {
        this.key = "goog_update_data";
        this.b = 0;
        this.c = !1
    }
    Dg.prototype.a = function(a, b, c) {
        if (c != this.b || !pd(og(a)))
            return !1;
        c = 1 == a.u;
        var d = W(a.c)
          , e = {}
          , f = {};
        b = {
            Qa: (e[0] = this.key,
            e[40] = vg(rg(a)),
            e),
            Va: Object.assign({}, b, (f.r = b.r,
            f))
        };
        if (c)
            return d && !this.c ? (this.c = d,
            Cg(a, b)) : !1;
        this.c = d;
        return Cg(a, b)
    }
    ;
    function Eg(a) {
        Dg.call(this, a);
        this.key = "goog_image_request";
        this.b = 2
    }
    t(Eg, Dg);
    function Fg(a) {
        Dg.call(this, a);
        this.key = "goog_image_request";
        this.b = 1
    }
    t(Fg, Dg);
    Fg.prototype.a = function(a, b, c) {
        var d = !a.cb;
        if (W(a.c) && a.da || d) {
            if (b = Dg.prototype.a.call(this, a, b, c))
                if (W(a.c) || (a.cb = !0),
                W(a.c) || a.da)
                    a.da = !1;
            return b
        }
        return !1
    }
    ;
    function Gg() {
        this.b = [];
        this.a = []
    }
    function Hg(a) {
        return Da(X.a, function(b) {
            b = og(b);
            return a.a || b.a ? a.a == b.a : a.b || b.b ? a.b == b.b : !1
        })
    }
    function Ig(a) {
        var b = X;
        return a ? Da(b.a, function(c) {
            return c.b.a == a
        }) : null
    }
    function Jg(a) {
        return Da(a.a, function() {
            return !1
        })
    }
    function Kg() {
        var a = X;
        return 0 == a.b.length ? a.a : 0 == a.a.length ? a.b : Ha(a.a, a.b)
    }
    function Lg() {
        var a = X;
        a.b = [];
        a.a = []
    }
    function Mg(a, b) {
        a = a.a;
        var c = Ea(a, function(d) {
            return d == b
        });
        return -1 != c ? (a.splice(c, 1),
        Tf(b),
        b.B(),
        !0) : !1
    }
    function Ng(a) {
        var b = X;
        if (Mg(b, a)) {
            a = function() {
                return null
            }
            ;
            a = function() {
                return Jg(b)
            }
            ;
            for (var c = a(); c; c = a())
                Mg(b, c)
        }
    }
    w(Gg);
    var X = Gg.g();
    function Og() {
        this.a = this.b = null
    }
    function Pg(a, b) {
        function c(d, e) {
            b(d, e)
        }
        if (null == a.b)
            return !1;
        a.a = Da(a.b, function(d) {
            return null != d && d.Ra()
        });
        a.a && (a.a.mb(c) ? bf(a.a.a) : b(a.a.a.W(), a.a));
        return null != a.a
    }
    w(Og);
    function Qg(a) {
        a = Rg(a);
        ff.call(this, a.length ? a[a.length - 1] : new V(E,0));
        this.c = a;
        this.b = null
    }
    t(Qg, ff);
    l = Qg.prototype;
    l.w = function() {
        return (this.b ? this.b : this.a).w()
    }
    ;
    l.K = function() {
        return (this.b ? this.b : this.a).K()
    }
    ;
    l.L = function() {
        return (this.b ? this.b : this.a).L()
    }
    ;
    l.mb = function(a) {
        var b = !1;
        x(this.c, function(c) {
            c.Oa() && (b = !0)
        });
        b && (this.f = a,
        af(this.a, this));
        return b
    }
    ;
    l.B = function() {
        x(this.c, function(a) {
            a.B()
        });
        ff.prototype.B.call(this)
    }
    ;
    l.Ra = function() {
        return Ba(this.c, function(a) {
            return a.Z()
        })
    }
    ;
    l.Y = function() {
        return Ba(this.c, function(a) {
            return a.Z()
        })
    }
    ;
    l.wa = function(a, b, c) {
        return new ug(a,this.a,b,c)
    }
    ;
    l.P = function(a) {
        this.b = a.b
    }
    ;
    function Rg(a) {
        if (!a.length)
            return [];
        a = ya(a, function(c) {
            return null != c && c.Z()
        });
        for (var b = 1; b < a.length; b++)
            af(a[b - 1], a[b]);
        return a
    }
    ;function Sg(a, b, c, d) {
        ef.call(this, a, b, c, d);
        this.u = this.m = null
    }
    t(Sg, ug);
    l = Sg.prototype;
    l.Aa = function() {
        var a = this;
        this.u || (this.u = T());
        if (he(298, function() {
            return a.A()
        }))
            return !0;
        Ze(this.b, "msf");
        return !1
    }
    ;
    function Tg(a, b) {
        try {
            if (b.length) {
                a.m || (a.m = T());
                var c = Ug(b)
                  , d = Mc(a.c, a.b.a.s)
                  , e = d.x
                  , f = d.y;
                a.a = new J(Math.round(f),Math.round(e) + c.boundingClientRect.width,Math.round(f) + c.boundingClientRect.height,Math.round(e));
                var g = De(c.intersectionRect);
                a.l = Fc(g, a.a.left - g.left, a.a.top - g.top)
            }
        } catch (h) {
            a.S(),
            ke(299, h)
        }
    }
    function Ug(a) {
        return Aa(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    }
    l.La = function() {}
    ;
    l.nb = function() {
        return !1
    }
    ;
    l.bb = function() {}
    ;
    l.K = function() {
        var a = {};
        return Object.assign(this.b.K(), (a.niot_obs = this.u,
        a.niot_cbk = this.m,
        a))
    }
    ;
    var Vg = {
        threshold: [0, .3, .5, .75, 1]
    };
    function Wg(a, b, c, d) {
        Sg.call(this, a, b, c, d);
        this.i = this.j = this.f = null
    }
    t(Wg, Sg);
    Wg.prototype.w = function() {
        return "nio"
    }
    ;
    Wg.prototype.S = function() {
        if (this.f && this.c)
            try {
                this.f.unobserve(this.c),
                this.j ? (this.j.unobserve(this.c),
                this.j = null) : this.i && (this.i.disconnect(),
                this.i = null)
            } catch (a) {}
    }
    ;
    function Xg(a) {
        return a.f && a.f.takeRecords ? a.f.takeRecords() : []
    }
    Wg.prototype.A = function() {
        var a = this;
        if (!this.c)
            return !1;
        var b = this.c
          , c = this.b.a.s
          , d = Md().a;
        this.f = new c.IntersectionObserver(Kd(d, function(e) {
            return Tg(a, e)
        }),Vg);
        d = Kd(d, function() {
            a.f.unobserve(b);
            a.f.observe(b);
            Tg(a, Xg(a))
        });
        c.ResizeObserver ? (this.j = new c.ResizeObserver(d),
        this.j.observe(b)) : c.MutationObserver && (this.i = new u.MutationObserver(d),
        this.i.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        this.f.observe(b);
        Tg(this, Xg(this));
        return !0
    }
    ;
    Wg.prototype.O = function() {
        var a = Xg(this);
        0 < a.length && Tg(this, a);
        Sg.prototype.O.call(this)
    }
    ;
    function Yg(a) {
        a = void 0 === a ? E : a;
        ff.call(this, new V(a,2))
    }
    t(Yg, ff);
    Yg.prototype.w = function() {
        return "nio"
    }
    ;
    Yg.prototype.Y = function() {
        var a = A;
        return a && 0 <= a.toLowerCase().indexOf("cobalt") ? !1 : !U.g().f && null != this.a.a.s.IntersectionObserver
    }
    ;
    Yg.prototype.wa = function(a, b, c) {
        return new Wg(a,this.a,b,c)
    }
    ;
    function Zg() {
        var a = $g();
        V.call(this, E.top, a, "geo")
    }
    t(Zg, V);
    Zg.prototype.Ma = function() {
        return U.g().a
    }
    ;
    Zg.prototype.Z = function() {
        var a = $g();
        this.i !== a && (this.a != this && a > this.a.i && (this.a = this,
        $e(this)),
        this.i = a);
        return 2 == a
    }
    ;
    function $g() {
        R.g();
        var a = U.g();
        return a.b || a.f ? 0 : 2
    }
    w(Zg);
    var ah = {}
      , bh = (ah[1] = function() {
        return new Yg
    }
    ,
    ah[2] = function() {
        return new Qg([Zg.g()])
    }
    ,
    ah);
    function ch() {
        this.a = null;
        this.b = bh
    }
    function dh() {
        var a = ch.g();
        a: {
            var b = O(R.g().a, "mv");
            if (null != b && (b = a.b[b]) && (b = b()) && b.Y())
                break a;
            b = null
        }
        a.a = b
    }
    w(ch);
    function eh() {
        this.done = !1;
        this.a = {
            $a: 0,
            Za: 0,
            lc: 0,
            eb: 0,
            xa: -1,
            Ib: 0,
            Hb: 0,
            Jb: 0
        };
        this.j = null;
        this.h = this.l = !1;
        this.i = "";
        this.b = null;
        this.m = 0;
        this.c = new Xe(this)
    }
    function fh(a) {
        var b = Y;
        if (!b.l) {
            b.l = !0;
            if (a) {
                a = Kg();
                for (var c, d = 0; d < a.length; ++d)
                    c = a[d],
                    c.b.b && Sf(c)
            }
            gh(b, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g)
                    f[g] = arguments[g];
                return b.f.apply(b, r(f))
            });
            b.f()
        }
    }
    eh.prototype.Ab = function() {
        hh(this, Kg(), !1)
    }
    ;
    function ih() {
        var a = ch.g();
        null != a.a && a.a.a && bf(a.a.a);
        a = Og.g();
        null != a.a && a.a.a ? bf(a.a.a) : Le(U.g())
    }
    function hh(a, b, c) {
        if (!a.done)
            if (a.c.cancel(),
            0 == b.length)
                a.h = !1;
            else {
                a.b = null;
                try {
                    ih();
                    var d = T()
                      , e = R.g();
                    e.i = d;
                    if (null != Og.g().a)
                        for (e = 0; e < b.length; e++)
                            Qf(b[e], d, c);
                    else
                        je(a.i, {
                            strategy_not_selected: 1,
                            bin: e.c
                        });
                    for (d = 0; d < b.length; d++)
                        Rf(b[d]);
                    ++a.a.eb;
                    jh(a)
                } finally {
                    c ? x(b, function(f) {
                        return f.Ua()
                    }) : Ye(a.c)
                }
            }
    }
    function gh(a, b) {
        if (!a.j) {
            b = de(142, b);
            Q();
            var c;
            D.visibilityState ? c = "visibilitychange" : D.mozVisibilityState ? c = "mozvisibilitychange" : D.webkitVisibilityState && (c = "webkitvisibilitychange");
            c && Wb(D, c, b, {
                capture: !1
            }) && (a.j = b)
        }
    }
    eh.prototype.f = function() {
        var a = Oe()
          , b = T();
        a ? (oe || (me = b,
        x(X.b, function(c) {
            return c.c.i(b, !c.j())
        })),
        oe = !0) : (this.m = kh(this, b),
        oe = !1,
        x(X.b, function(c) {
            c.ya() && c.c.h(b)
        }));
        this.h = !0;
        hh(this, Kg(), !a)
    }
    ;
    function lh(a) {
        return !!(Date && a && a.screen && a.document && a.document.body && a.document.body.getBoundingClientRect)
    }
    function mh(a, b, c) {
        if (!a.b || c) {
            c = b.document;
            var d = 0 <= ne ? T() - ne : -1
              , e = T();
            -1 == a.a.xa && (d = e);
            var f = U.g()
              , g = R.g()
              , h = gd(g.a)
              , p = Kg();
            try {
                if (0 < p.length) {
                    var m = f.a;
                    m && (h.bs = [Cc(m), Dc(m)]);
                    var k = f.h;
                    k && (h.ps = [k.width, k.height]);
                    b.screen && (h.ss = [b.screen.width, b.screen.height])
                } else
                    h.url = encodeURIComponent(b.location.href.substring(0, 512)),
                    c.referrer && (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                h.tt = d;
                h.pt = ne;
                h.bin = g.c;
                void 0 !== b.google_osd_load_pub_page_exp && (h.olpp = b.google_osd_load_pub_page_exp);
                h.deb = [1, a.a.$a, a.a.Za, a.a.eb, a.a.xa, ze, a.c.b, a.a.Ib, a.a.Hb, a.a.Jb].join("-");
                h.tvt = kh(a, e);
                f.f && (h.inapp = 1);
                if (null !== b && b != b.top) {
                    0 < p.length && (h.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                    var q = f.c;
                    h.is = [Cc(q), Dc(q)]
                }
            } catch (Fa) {
                h.error = 1
            }
            a.b = h
        }
        b = a.b;
        a = {};
        for (var n in b)
            a[n] = b[n];
        n = Md();
        var v;
        if (1 == O(n.c, "prf")) {
            b = new Id;
            m = n.a;
            k = 0;
            -1 < m.a && (k = m.f.a.a() - m.a);
            b = Rb(b, 1, m.c + k);
            m = n.a;
            b = Rb(b, 5, -1 < m.a ? m.b + 1 : m.b);
            b = Rb(b, 2, n.b.a.f());
            b = Rb(b, 3, n.b.a.c());
            b = Rb(b, 4, n.b.a.b());
            n = {};
            m = new Jb;
            k = Pb(b, 1);
            k = null == k ? k : +k;
            k = null == k ? 0 : k;
            if (0 !== k && (q = k,
            null != q)) {
                Hb(m.a, 9);
                k = m.a;
                d = q;
                d = (q = 0 > d ? 1 : 0) ? -d : d;
                if (0 === d)
                    Fb = 0 < 1 / d ? 0 : 2147483648,
                    Eb = 0;
                else if (isNaN(d))
                    Fb = 2147483647,
                    Eb = 4294967295;
                else if (1.7976931348623157E308 < d)
                    Fb = (q << 31 | 2146435072) >>> 0,
                    Eb = 0;
                else if (2.2250738585072014E-308 > d)
                    d /= Math.pow(2, -1074),
                    Fb = (q << 31 | d / 4294967296) >>> 0,
                    Eb = d >>> 0;
                else {
                    e = d;
                    c = 0;
                    if (2 <= e)
                        for (; 2 <= e && 1023 > c; )
                            c++,
                            e /= 2;
                    else
                        for (; 1 > e && -1022 < c; )
                            e *= 2,
                            c--;
                    d *= Math.pow(2, -c);
                    Fb = (q << 31 | c + 1023 << 20 | 1048576 * d & 1048575) >>> 0;
                    Eb = 4503599627370496 * d >>> 0
                }
                Ib(k, Eb);
                Ib(k, Fb)
            }
            k = Qb(b, 2);
            0 !== k && null != k && Kb(m, 2, k);
            k = Qb(b, 3);
            0 !== k && null != k && Kb(m, 3, k);
            k = Qb(b, 4);
            0 !== k && null != k && Kb(m, 4, k);
            k = Qb(b, 5);
            if (0 !== k && null != k && null != k)
                if (Hb(m.a, 40),
                b = m.a,
                0 <= k)
                    Hb(b, k);
                else {
                    for (q = 0; 9 > q; q++)
                        b.a.push(k & 127 | 128),
                        k >>= 7;
                    b.a.push(1)
                }
            b = new Uint8Array(m.a.length());
            q = m.b;
            c = q.length;
            for (d = k = 0; d < c; d++)
                e = q[d],
                b.set(e, k),
                k += e.length;
            q = m.a;
            c = q.a;
            q.a = [];
            b.set(c, k);
            m.b = [b];
            void 0 === v && (v = 0);
            if (!Db)
                for (Db = {},
                m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                k = ["+/=", "+/", "-_=", "-_.", "-_"],
                q = 0; 5 > q; q++)
                    for (c = m.concat(k[q].split("")),
                    Cb[q] = c,
                    d = 0; d < c.length; d++)
                        e = c[d],
                        void 0 === Db[e] && (Db[e] = d);
            v = Cb[v];
            m = [];
            for (k = 0; k < b.length; k += 3)
                f = b[k],
                g = (q = k + 1 < b.length) ? b[k + 1] : 0,
                e = (c = k + 2 < b.length) ? b[k + 2] : 0,
                d = f >> 2,
                f = (f & 3) << 4 | g >> 4,
                g = (g & 15) << 2 | e >> 6,
                e &= 63,
                c || (e = 64,
                q || (g = 64)),
                m.push(v[d], v[f], v[g] || "", v[e] || "");
            v = (n.pf = m.join(""),
            n)
        } else
            v = {};
        y(a, v);
        return a
    }
    function nh() {
        x(Kg(), function(a) {
            if (a.b.a) {
                var b = a.j || 0
                  , c = ch.g();
                if (b = c.a ? new zf(c.a,a.b.b,a.h,b) : null)
                    a.H = b
            }
        })
    }
    function oh() {
        var a = Og.g();
        if (null != a.a) {
            var b = a.a;
            x(Kg(), function(c) {
                return Pf(c, b)
            })
        }
    }
    function jh(a) {
        "osd" == a.i && x(X.a, function(b) {
            var c = {};
            lg(b, 0, (c.r = void 0,
            c))
        })
    }
    function kh(a, b) {
        a = a.m;
        oe && (a += b - me);
        return a
    }
    function ph(a) {
        return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }
    function qh(a) {
        return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }
    function rh() {
        var a = Y;
        var b = void 0 === b ? function() {
            return {}
        }
        : b;
        ee.h = "av-js";
        $d.a = .01;
        ge([function(c) {
            var d = R.g()
              , e = {};
            y(c, (e.bin = d.c,
            e.type = "error",
            e), gd(d.a), mh(a, E), b());
            if (d = rf())
                e = {},
                y(c, (e.v = encodeURIComponent(d),
                e))
        }
        ])
    }
    function sh(a) {
        var b = new th;
        switch (a) {
        case 0:
        case 5:
            return [];
        default:
            return a = 4 === R.g().c,
            [new Dg(b), new Fg(b), new Eg(b)].concat(r(a ? [] : [new Bg]))
        }
    }
    w(eh);
    var Y = eh.g();
    function th() {}
    function Cg(a, b) {
        var c = b || {};
        b = void 0 === c.Va ? {} : c.Va;
        c = void 0 === c.Qa ? {} : c.Qa;
        var d = c.r
          , e = b[0]
          , f = mh(Y, K(), !1)
          , g = {};
        y(g, f, b);
        b = {};
        y(b, pg(a, e, d, g), c);
        He(a.b.a, b, a.ba);
        return !0
    }
    ;function uh(a, b, c, d) {
        Sg.call(this, a, b, c, d);
        this.f = function() {
            return null
        }
    }
    t(uh, Sg);
    uh.prototype.w = function() {
        return "aio"
    }
    ;
    uh.prototype.S = function() {
        if (this.f)
            try {
                this.f()
            } catch (a) {}
    }
    ;
    uh.prototype.A = function() {
        var a = this;
        if (!this.c)
            return !1;
        this.f = Gc(this.b.a.s).observeIntersection(Kd(Md().a, function(b) {
            return Tg(a, b)
        }));
        return !0
    }
    ;
    function vh(a) {
        a = void 0 === a ? E : a;
        ff.call(this, new V(a,2))
    }
    t(vh, ff);
    vh.prototype.w = function() {
        return "aio"
    }
    ;
    vh.prototype.Ra = function() {
        return U.g().b && this.Y()
    }
    ;
    vh.prototype.Y = function() {
        return !U.g().f && se(this.a.a.s)
    }
    ;
    vh.prototype.wa = function(a, b, c) {
        return new uh(a,this.a,b,c)
    }
    ;
    function wh() {
        V.call(this, E, 2, "iem")
    }
    t(wh, V);
    l = wh.prototype;
    l.Ma = function() {
        function a(n, v) {
            return !!b.s.document.elementFromPoint(n, v)
        }
        var b = this
          , c = new J(0,this.s.innerWidth || this.s.width,this.s.innerHeight || this.s.height,0)
          , d = fc(document)
          , e = Math.floor(c.left - d.x)
          , f = Math.floor(c.top - d.y)
          , g = Math.floor(c.right - d.x)
          , h = Math.floor(c.bottom - d.y);
        c = a(e, f);
        d = a(g, h);
        if (c && d)
            return new J(f,g,h,e);
        var p = a(g, f)
          , m = a(e, h);
        if (c)
            h = Z(f, h, function(n) {
                return a(e, n)
            }),
            g = Z(e, g, function(n) {
                return a(n, f)
            });
        else if (p)
            h = Z(f, h, function(n) {
                return a(g, n)
            }),
            e = Z(g, e, function(n) {
                return a(n, f)
            });
        else if (m)
            f = Z(h, f, function(n) {
                return a(e, n)
            }),
            g = Z(e, g, function(n) {
                return a(n, h)
            });
        else if (d)
            f = Z(h, f, function(n) {
                return a(g, n)
            }),
            e = Z(g, e, function(n) {
                return a(n, h)
            });
        else {
            var k = Math.floor((e + g) / 2)
              , q = Math.floor((f + h) / 2);
            if (!a(k, q))
                return new J(0,0,0,0);
            f = Z(q, f, function(n) {
                return a(k, n)
            });
            h = Z(q, h, function(n) {
                return a(k, n)
            });
            e = Z(k, e, function(n) {
                return a(n, q)
            });
            g = Z(k, g, function(n) {
                return a(n, q)
            })
        }
        return new J(f,g,h,e)
    }
    ;
    function Z(a, b, c) {
        if (c(b))
            return b;
        for (var d = 15; d--; ) {
            var e = Math.floor((a + b) / 2);
            if (e == a || e == b)
                break;
            c(e) ? a = e : b = e
        }
        return a
    }
    l.Z = function() {
        return U.g().b && C && yb(8) && te(this.s)
    }
    ;
    l.Sa = function() {}
    ;
    l.Ta = function() {}
    ;
    l.tb = function() {}
    ;
    l.ub = function() {}
    ;
    w(wh);
    function xh() {
        V.call(this, E, 2, "mraid");
        this.H = 0;
        this.A = this.C = !1;
        this.f = null;
        this.b = re(this.s);
        this.c.a = new J(0,0,0,0);
        this.J = !1
    }
    t(xh, V);
    l = xh.prototype;
    l.Z = function() {
        return null != this.b.F
    }
    ;
    l.ib = function() {
        var a = {};
        this.H && (a.mraid = this.H);
        this.C && (a.mlc = 1);
        a.mtop = this.b.Bb;
        this.f && (a.mse = this.f);
        this.J && (a.msc = 1);
        a.mcp = this.b.va;
        return a
    }
    ;
    l.M = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d)
            c[d - 1] = arguments[d];
        try {
            return this.b.F[a].apply(this.b.F, c)
        } catch (e) {
            ke(538, e, .01, function(f) {
                f.method = a
            })
        }
    }
    ;
    function yh(a, b, c) {
        a.M("addEventListener", b, c)
    }
    l.Oa = function() {
        var a = this;
        if (this.m)
            return !this.ga();
        this.m = !0;
        if (2 === this.b.va)
            return this.f = "ng",
            Ze(this, "w"),
            !1;
        if (1 === this.b.va)
            return this.f = "mm",
            Ze(this, "w"),
            !1;
        var b;
        if (b = 1 != O(R.g().a, "mxd")) {
            a: switch (this.b.Bb) {
            case 0:
            case 3:
                b = !0;
                break a;
            default:
                b = !1
            }
            b = !b
        }
        if (b)
            return this.f = "if",
            Ze(this, "w"),
            !1;
        U.g().u = !0;
        this.s.document.readyState && "complete" == this.s.document.readyState ? zh(this) : ve(this.s, "load", function() {
            Q().setTimeout(ie(292, function() {
                return zh(a)
            }), 100)
        }, 292);
        return !0
    }
    ;
    function zh(a) {
        R.g().f = !!a.M("isViewable");
        yh(a, "viewableChange", Ah);
        "loading" === a.M("getState") ? yh(a, "ready", Bh) : Ch(a)
    }
    function Ch(a) {
        "string" === typeof a.b.F.AFMA_LIDAR ? (a.C = !0,
        Dh(a)) : (a.b.va = 3,
        a.f = "nc",
        Ze(a, "w"))
    }
    function Dh(a) {
        a.A = !1;
        var b = 1 == O(R.g().a, "rmmt")
          , c = !!a.M("isViewable");
        (b ? !c : 1) && Q().setTimeout(ie(524, function() {
            a.A || (Eh(a),
            ke(540, Error()),
            a.f = "mt",
            Ze(a, "w"))
        }), 500);
        Fh(a);
        yh(a, a.b.F.AFMA_LIDAR, Gh)
    }
    function Fh(a) {
        var b = 1 == O(R.g().a, "sneio")
          , c = void 0 !== a.b.F.AFMA_LIDAR_EXP_1
          , d = void 0 !== a.b.F.AFMA_LIDAR_EXP_2;
        (b = b && d) && (a.b.F.AFMA_LIDAR_EXP_2 = !0);
        c && (a.b.F.AFMA_LIDAR_EXP_1 = !b)
    }
    function Eh(a) {
        a.M("removeEventListener", a.b.F.AFMA_LIDAR, Gh);
        a.C = !1
    }
    l.Sa = function() {
        var a = U.g()
          , b = Hh(this, "getMaxSize");
        a.a = new J(0,b.width,b.height,0)
    }
    ;
    l.Ta = function() {
        U.g().j = Hh(this, "getScreenSize")
    }
    ;
    function Hh(a, b) {
        if ("loading" === a.M("getState"))
            return new G(-1,-1);
        b = a.M(b);
        if (!b)
            return new G(-1,-1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new G(-1,-1) : new G(a,b)
    }
    l.B = function() {
        Eh(this);
        V.prototype.B.call(this)
    }
    ;
    function Bh() {
        try {
            var a = xh.g();
            a.M("removeEventListener", "ready", Bh);
            Ch(a)
        } catch (b) {
            ke(541, b)
        }
    }
    function Gh(a, b) {
        try {
            var c = xh.g();
            c.A = !0;
            var d = a ? new J(a.y,a.x + a.width,a.y + a.height,a.x) : new J(0,0,0,0);
            var e = T()
              , f = Oe();
            var g = new Ve(e,f,c);
            g.a = d;
            g.volume = b;
            c.P(g)
        } catch (h) {
            ke(542, h)
        }
    }
    function Ah(a) {
        var b = R.g()
          , c = xh.g();
        a && !b.f && (b.f = !0,
        c.J = !0,
        1 == O(R.g().a, "msp") && c.f && Ze(c, "w", !0))
    }
    w(xh);
    function Ih(a) {
        return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    }
    ;var Jh = ["FRAME", "IMG", "IFRAME"]
      , Kh = /^[01](px)?$/;
    function Lh(a, b) {
        var c = !0, d = !1, e;
        c = void 0 === c ? !0 : c;
        d = void 0 === d ? !1 : d;
        var f = void 0 === f ? !1 : f;
        if (a = "string" === typeof a ? document.getElementById(a) : a) {
            e || (e = function(Fa, Xh, Yh) {
                Fa.addEventListener(Xh, Yh)
            }
            );
            for (var g = !1, h = function(Fa) {
                g || (g = !0,
                b(Fa))
            }, p, m, k = 0; k < Jh.length; ++k)
                if (Jh[k] == a.tagName) {
                    m = 3;
                    p = [a];
                    break
                }
            p || (p = a.querySelectorAll(Jh.join(",")),
            m = 2);
            var q = 0;
            a = !1;
            for (k = 0; k < p.length; k++) {
                var n = p[k];
                if (f || !("IMG" != n.tagName || !n.complete || n.naturalWidth && n.naturalHeight ? Kh.test(n.getAttribute("width")) && Kh.test(n.getAttribute("height")) : 1)) {
                    if ("IMG" == n.tagName)
                        var v = n.naturalWidth && n.naturalHeight ? !0 : !1;
                    else
                        try {
                            v = "complete" === (n.readyState ? n.readyState : n.contentWindow && n.contentWindow.document && n.contentWindow.document.readyState) ? !0 : !1
                        } catch (Fa) {
                            v = void 0 === d ? !1 : d
                        }
                    v ? a = !0 : (q++,
                    e(n, "load", function() {
                        q--;
                        q || h(m)
                    }))
                }
            }
            p = null;
            if (0 === q && !a && "complete" === u.document.readyState)
                m = 5;
            else if (q || !a) {
                e(u, "load", function() {
                    h(4)
                });
                return
            }
            c && h(m)
        }
    }
    ;function Mh() {}
    w(Mh);
    function Nh() {}
    w(Nh);
    function Oh() {
        this.b = null;
        this.f = this.i = this.c = this.h = !1;
        Ph(this);
        rh()
    }
    function Qh() {
        var a = void 0
          , b = 4;
        if (void 0 === a) {
            var c = void 0 === c ? u : c;
            a = c.ggeac || (c.ggeac = {})
        }
        b = void 0 === b ? 0 : b;
        Mh.g();
        b = void 0 === b ? 0 : b;
        Ac(zc.g(), a, b);
        Nh.g();
        zc.g().a();
        b = R.g();
        Bc(160) && fd(b.a, "gtx", 1)
    }
    l = Oh.prototype;
    l.Nb = function(a) {
        this.h = a
    }
    ;
    l.kb = function() {
        Rh(this);
        Q().clearTimeout(this.b);
        this.b = null;
        ne = T();
        Sh(this)
    }
    ;
    function Rh(a) {
        R.g().c = 1;
        if (!(0 < ne)) {
            try {
                if (!Th(a))
                    return;
                ih();
                Uh(a)
            } catch (b) {}
            a.b = Q().setTimeout(ie(129, function() {
                return Rh(a)
            }), 250)
        }
    }
    l.Ob = function(a, b, c, d, e, f, g, h, p) {
        var m = this;
        f = void 0 === f ? !1 : f;
        h = void 0 === h ? -1 : h;
        p = void 0 === p ? -1 : p;
        if (lh(E)) {
            var k = new ig(E,b,a,-1,c,g);
            k.ra = sh(k.u);
            e = R.g();
            0 < h && -1 == k.A && (k.A = h);
            0 <= p && (k.Ea = p);
            k.Ia = function(q) {
                for (var n = [], v = 0; v < arguments.length; ++v)
                    n[v] = arguments[v];
                return m.Kb.apply(m, r(n))
            }
            ;
            k.Fb = function(q) {
                for (var n = [], v = 0; v < arguments.length; ++v)
                    n[v] = arguments[v];
                return m.Na.apply(m, r(n))
            }
            ;
            13 != c && (k.j = ph(b),
            k.pb = Ih(b),
            k.ja = qh(b));
            f && (k.xb = !0);
            fd(e.a, "oseid", Yf(this.a));
            X.a.push(k);
            ++Y.a.Za;
            e.b ? this.Na(k, e.b) : ((b = Og.g().a) && Pf(k, b),
            Sh(this),
            e.b || (d ? (Vh(k),
            k.T()) : a && (Bc(314) ? Lh(a, function() {
                k.X() || (Vh(k),
                k.T())
            }) : xe(a, function() {
                k.X() || (Vh(k),
                k.T())
            })),
            Y.h || Y.f()))
        }
    }
    ;
    function Uh(a) {
        Wh(a);
        Wf(a.a, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
                c[d] = arguments[d];
            return a.Ob.apply(a, r(c))
        }, function() {
            return a.h
        }, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
                c[d] = arguments[d];
            return a.Nb.apply(a, r(c))
        })
    }
    function Zh(a) {
        R.g();
        var b = [wh.g(), xh.g()]
          , c = [Zg.g()];
        return [new Qg(b), new Yg(a), new vh(a), new Qg(c)]
    }
    function Sh(a) {
        if (!a.f) {
            a.f = !0;
            try {
                var b = K()
                  , c = U.g();
                R.g().h = 947190542;
                if (Th(a)) {
                    Y.a.$a = Xf(a.a);
                    var d = Og.g();
                    if (null == d.b) {
                        var e = Zh(b);
                        d.b = e
                    }
                    if (Pg(d, function(g) {
                        return $h(a, g)
                    })) {
                        if (!Y.done) {
                            oh();
                            c.m = !0;
                            Uh(a);
                            var f;
                            (f = U.g().f || z(A, "CrKey") || z(A, "PlayStation") || z(A, "Roku") || Ie() || z(A, "Xbox") || Je() || Ke()) || (Q(),
                            f = 0 !== sd());
                            f ? (dh(),
                            nh(),
                            ai(a),
                            Oc()) : $h(a, "pv")
                        }
                    } else
                        $h(a, "i")
                } else
                    bi(a, "c")
            } catch (g) {
                throw $h(a, "x"),
                Lg(),
                g;
            }
        }
    }
    function ai(a) {
        if (-1 == Y.a.xa) {
            K();
            var b = 2 == Yf(a.a);
            fh(b);
            Q().setTimeout(ie(131, function() {
                bi(a, "t")
            }), 36E5);
            Y.a.xa = T() - ne
        }
    }
    function $h(a, b) {
        R.g().b = b;
        for (var c = ea(X.a), d = c.next(); !d.done; d = c.next())
            d.value.m = !0;
        bi(a, b, !1)
    }
    function bi(a, b, c) {
        c = void 0 === c ? !0 : c;
        if (!Y.done) {
            Y.c.cancel();
            a.a || (a.a = new Uf);
            if (2 == Yf(a.a) || a.c)
                for (a = X.a,
                c && 0 < a.length && hh(Y, a, !0),
                c = ea(a),
                a = c.next(); !a.done; a = c.next()) {
                    a = a.value;
                    var d = {};
                    lg(a, 1, (d.r = b,
                    d));
                    Tf(a)
                }
            Y.done = !0
        }
    }
    function Th(a) {
        if (!lh(K()))
            return !1;
        var b = new Uf;
        if (!(b.a || b.b || b.c))
            return !1;
        a.a = b;
        return !0
    }
    l.Na = function(a, b) {
        a.m = !0;
        var c = {};
        lg(a, 2, (c.r = b,
        c));
        Tf(a)
    }
    ;
    l.Kb = function(a) {
        a && W(a.c) && (0 >= Re(Of(a)) ? 0 : null != a.J && null != a.J.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i) && !a.rb) && (Ic(a.J),
        a.rb = !0)
    }
    ;
    function ci(a, b) {
        if (b && b.data && b.source) {
            var c = b.data;
            if ("string" !== typeof c)
                var d = null;
            else {
                d = {};
                c = c.split("\n");
                for (var e = 0; e != c.length; ++e) {
                    var f = c[e]
                      , g = f.indexOf("=");
                    if (!(0 >= g)) {
                        var h = Number(f.substr(0, g));
                        f = f.substr(g + 1);
                        switch (h) {
                        case 36:
                        case 26:
                        case 15:
                        case 8:
                        case 11:
                        case 16:
                        case 5:
                        case 18:
                            f = "true" == f;
                            break;
                        case 4:
                        case 33:
                        case 6:
                        case 25:
                        case 28:
                        case 29:
                        case 24:
                        case 31:
                        case 30:
                        case 23:
                        case 22:
                        case 7:
                        case 21:
                        case 20:
                            f = Number(f);
                            break;
                        case 19:
                        case 3:
                            if (ra(decodeURIComponent))
                                try {
                                    f = decodeURIComponent(f)
                                } catch (p) {
                                    throw Error("Error: URI malformed: " + f);
                                }
                        }
                        d[h] = f
                    }
                }
                d = d[0] ? d : null
            }
            if (c = d)
                if (e = c[0],
                Ga("goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(" "), e) && (d = Hg(new od(c[4],c[12]))))
                    if (h = c[33],
                    0 < h && -1 == d.ta && (d.ta = h),
                    "goog_stop_monitoring" === e)
                        Ng(d);
                    else if ((c[35] || "goog_creative_loaded" === e) && d.T(),
                    Ga(d.ba, b.source) || d.ba.push(b.source),
                    "goog_request_monitoring" === e || !d.yb)
                        if (d.yb = !0,
                        void 0 !== c[16] && (d.da = !!c[16]),
                        c[19] && d.za(c[19]),
                        void 0 !== c[6]) {
                            b = c[6];
                            c = di(b, d.u);
                            if (c != d.u) {
                                if (5 == c) {
                                    d.m = !0;
                                    Ng(d);
                                    return
                                }
                                d.u = c;
                                d.ra = sh(c)
                            }
                            4 == b && d.T();
                            b = U.g();
                            c = pg(d, "goog_acknowledge_monitoring");
                            c[8] = b.b;
                            c[36] = b.A;
                            He(d.b.a, c, d.ba);
                            b = R.g();
                            d.m && b.b ? (a.Na(d, b.b),
                            Ng(d)) : a.c = !0
                        }
        }
    }
    function Vh(a) {
        if (a && pd(og(a))) {
            var b = pg(a, "goog_get_mode");
            He(a.b.a, b)
        }
    }
    function Wh(a) {
        if (!a.i) {
            ve(E, "message", function(c) {
                return ci(a, c)
            }, 132);
            var b = ei().contentWindow;
            b && ve(b, "message", function(c) {
                return ci(a, c)
            }, 132);
            a.i = !0
        }
    }
    function fi(a) {
        ve(K(), "unload", function() {
            bi(a, "u")
        }, 133)
    }
    function di(a, b) {
        return Da([5, 2, 4, 3, 1, 0], function(c) {
            return c === a || c === b
        }) || 0
    }
    l.Lb = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (a = Ig(a)) {
            var c = K();
            Tf(a);
            try {
                var d = a.b.a;
                if (null != d.contentWindow && 3 == a.ca) {
                    switch (a.u) {
                    case 2:
                    case 4:
                        break;
                    default:
                        return
                    }
                    var e = qg(a);
                    e.adk = a.j;
                    e.adf = a.ja;
                    0 === a.D && (e.invis = 1);
                    e.r = "ac";
                    var f = mh(Y, c, !1);
                    y(e, f);
                    if (b)
                        b = {},
                        lg(a, 1, (b.r = "ac",
                        b));
                    else
                        try {
                            c.google_image_requests || (c.google_image_requests = []),
                            d.contentWindow.osdsir(c, e, a.m || 0 >= Re(Of(a)) ? 2 : W(a.c) ? 4 : 3)
                        } catch (g) {}
                }
            } finally {
                Ng(a)
            }
        }
    }
    ;
    l.Mb = function(a, b) {
        a && b && sa(a) && 1 == a.nodeType && sa(b) && 1 == b.nodeType && (a = Ig(a)) && (K(),
        Nf(a),
        a.b.b = b,
        Sf(a),
        jg(a, b),
        a.a && (a = a.a,
        a.S(),
        a.c = b,
        a.Aa(),
        a.O()))
    }
    ;
    function ei() {
        var a = hc("IFRAME", {
            id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
            name: "google_osd_static_frame"
        });
        a.style.display = "none";
        a.style.width = "0px";
        a.style.height = "0px";
        E.document.body.appendChild(a);
        return a
    }
    function Ph(a) {
        ua("Goog_Osd_UnloadAdBlock", ie(134, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
                c[d] = arguments[d];
            return a.Lb.apply(a, r(c))
        }));
        ua("Goog_Osd_UpdateElementToMeasure", ie(135, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
                c[d] = arguments[d];
            return a.Mb.apply(a, r(c))
        }))
    }
    ;he(155, function() {
        Qh();
        var a = new Oh;
        Y.i = "osd";
        fi(a);
        Pc() ? a.kb() : (Rh(a),
        ve(K(), "load", function() {
            Q().setTimeout(ie(153, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d)
                    c[d] = arguments[d];
                return a.kb.apply(a, r(c))
            }), 100)
        }, 154))
    });
}
).call(this, this, this.document);
