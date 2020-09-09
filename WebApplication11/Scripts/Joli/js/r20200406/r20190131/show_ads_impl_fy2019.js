(function(window, document, location) {
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    'use strict';
    var n, q = this || self;
    function da(a, b, c) {
        a = a.split(".");
        c = c || q;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    function fa() {
        if (null === ha)
            a: {
                var a = q.document;
                if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && ia.test(a)) {
                    ha = a;
                    break a
                }
                ha = ""
            }
        return ha
    }
    var ia = /^[\w+/_-]+[=]{0,2}$/
      , ha = null;
    function ja() {}
    function la(a) {
        a.mb = void 0;
        a.F = function() {
            return a.mb ? a.mb : a.mb = new a
        }
    }
    function na(a) {
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
    function oa(a) {
        return "array" == na(a)
    }
    function pa(a) {
        return "function" == na(a)
    }
    function qa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function ra(a) {
        return Object.prototype.hasOwnProperty.call(a, sa) && a[sa] || (a[sa] = ++ta)
    }
    var sa = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , ta = 0;
    function ua(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function va(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function wa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? wa = ua : wa = va;
        return wa.apply(null, arguments)
    }
    function xa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    function ya() {
        var a = za
          , b = w();
        da("Goog_AdSense_getAdAdapterInstance", a, b)
    }
    function A(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    }
    ;function Aa(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, Aa);
        else {
            const b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    A(Aa, Error);
    Aa.prototype.name = "CustomError";
    var Ba;
    function Ca(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        Aa.call(this, c + a[d])
    }
    A(Ca, Aa);
    Ca.prototype.name = "AssertionError";
    function Da(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    function Ea(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    }
    function Fa(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
    function Ga(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
    function Ia(a, b, c) {
        var d = c;
        Ea(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
    function Ja(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    function Ka(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return e;
        return -1
    }
    function La(a, b) {
        return 0 <= Da(a, b)
    }
    function Ma(a, b) {
        b = Da(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }
    function Na(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function Oa(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function Pa(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c]
              , e = d
              , f = na(e);
            if ("array" == f || "object" == f && "number" == typeof e.length) {
                e = a.length || 0;
                f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++)
                    a[e + g] = d[g]
            } else
                a.push(d)
        }
    }
    function Qa(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    function Sa(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = Sa.apply(null, Qa(d, e, e + 8192)), g = 0; g < f.length; g++)
                        b.push(f[g]);
            else
                b.push(d)
        }
        return b
    }
    function Ta(a, b) {
        b = b || Math.random;
        for (var c = a.length - 1; 0 < c; c--) {
            var d = Math.floor(b() * (c + 1))
              , e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    }
    ;function Ua() {
        return !1
    }
    function Va() {
        return !0
    }
    function Wa(a) {
        const b = arguments
          , c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments))
                    return !1;
            return !0
        }
    }
    function Xa(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }
    function Ya(a) {
        let b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    function Za(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }
    function $a(a, b) {
        let c = 0;
        return function(d) {
            q.clearTimeout(c);
            const e = arguments;
            c = q.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }
    function ab(a, b) {
        function c() {
            e = q.setTimeout(d, 63);
            a.apply(b, g)
        }
        function d() {
            e = 0;
            f && (f = !1,
            c())
        }
        let e = 0
          , f = !1
          , g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    }
    ;function bb(a, b) {
        const c = {};
        for (const d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function cb(a) {
        var b = db;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }
    function eb(a) {
        const b = [];
        let c = 0;
        for (const d in a)
            b[c++] = a[d];
        return b
    }
    function fb(a, b) {
        return null !== a && b in a
    }
    function gb(a) {
        const b = {};
        for (const c in a)
            b[c] = a[c];
        return b
    }
    var ib = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function jb(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (let f = 0; f < ib.length; f++)
                c = ib[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;var kb = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    function lb(a, b) {
        this.l = a === mb && b || "";
        this.m = nb
    }
    lb.prototype.Y = !0;
    lb.prototype.j = function() {
        return this.l
    }
    ;
    function ob(a) {
        return a instanceof lb && a.constructor === lb && a.m === nb ? a.l : "type_error:Const"
    }
    var nb = {}
      , mb = {};
    function pb(a, b) {
        this.m = a === qb && b || "";
        this.o = rb
    }
    pb.prototype.Y = !0;
    pb.prototype.j = function() {
        return this.m.toString()
    }
    ;
    pb.prototype.lb = !0;
    pb.prototype.l = function() {
        return 1
    }
    ;
    function sb(a) {
        if (a instanceof pb && a.constructor === pb && a.o === rb)
            return a.m;
        na(a);
        return "type_error:TrustedResourceUrl"
    }
    function tb(a, b) {
        var c = ob(a);
        if (!ub.test(c))
            throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(vb, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e))
                throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof lb ? ob(d) : encodeURIComponent(String(d))
        });
        return new pb(qb,a)
    }
    var vb = /%{(\w+)}/g
      , ub = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i
      , rb = {}
      , qb = {};
    function wb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    function xb(a, b) {
        if (b)
            a = a.replace(Ab, "&amp;").replace(Bb, "&lt;").replace(Cb, "&gt;").replace(Db, "&quot;").replace(Eb, "&#39;").replace(Fb, "&#0;");
        else {
            if (!Gb.test(a))
                return a;
            -1 != a.indexOf("&") && (a = a.replace(Ab, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(Bb, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(Cb, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(Db, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(Eb, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(Fb, "&#0;"))
        }
        return a
    }
    var Ab = /&/g
      , Bb = /</g
      , Cb = />/g
      , Db = /"/g
      , Eb = /'/g
      , Fb = /\x00/g
      , Gb = /[\x00&<>"']/;
    function Hb(a, b) {
        let c = 0;
        a = wb(String(a)).split(".");
        b = wb(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || ""
              , f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length)
                    break;
                c = Ib(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || Ib(0 == e[2].length, 0 == f[2].length) || Ib(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }
    function Ib(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;function Jb(a, b) {
        this.m = a === Kb && b || "";
        this.o = Lb
    }
    Jb.prototype.Y = !0;
    Jb.prototype.j = function() {
        return this.m.toString()
    }
    ;
    Jb.prototype.lb = !0;
    Jb.prototype.l = function() {
        return 1
    }
    ;
    function Mb(a) {
        if (a instanceof Jb && a.constructor === Jb && a.o === Lb)
            return a.m;
        na(a);
        return "type_error:SafeUrl"
    }
    var Pb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i
      , Qb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i
      , Rb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Sb(a) {
        if (a instanceof Jb)
            return a;
        a = "object" == typeof a && a.Y ? a.j() : String(a);
        Rb.test(a) || (a = "about:invalid#zClosurez");
        return new Jb(Kb,a)
    }
    function Tb(a, b) {
        if (a instanceof Jb)
            return a;
        a = "object" == typeof a && a.Y ? a.j() : String(a);
        if (b && /^data:/i.test(a)) {
            b = a.replace(/(%0A|%0D)/g, "");
            var c = b.match(Qb);
            c = c && Pb.test(c[1]);
            b = new Jb(Kb,c ? b : "about:invalid#zClosurez");
            if (b.j() == a)
                return b
        }
        Rb.test(a) || (a = "about:invalid#zClosurez");
        return new Jb(Kb,a)
    }
    var Lb = {}
      , Kb = {};
    function Ub() {
        this.l = "";
        this.m = Vb
    }
    Ub.prototype.Y = !0;
    var Vb = {};
    Ub.prototype.j = function() {
        return this.l
    }
    ;
    function Wb(a) {
        var b = new Ub;
        b.l = a;
        return b
    }
    var Xb = Wb("");
    function Yb(a) {
        if (a instanceof Jb)
            return 'url("' + Mb(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof lb)
            a = ob(a);
        else {
            a = String(a);
            var b = a.replace(Zb, "$1").replace(Zb, "$1").replace($b, "url");
            if (ac.test(b)) {
                if (b = !dc.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && ec(a)
                }
                a = b ? fc(a) : "zClosurez"
            } else
                a = "zClosurez"
        }
        if (/[{;}]/.test(a))
            throw new Ca("Value does not allow [{;}], got: %s.",[a]);
        return a
    }
    function ec(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b)
                    return !1;
                b = !0
            } else if ("[" == e) {
                if (!b)
                    return !1;
                b = !1
            } else if (!b && !c.test(e))
                return !1
        }
        return b
    }
    var ac = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/
      , $b = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g
      , Zb = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g
      , dc = /\/\*/;
    function fc(a) {
        return a.replace($b, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                f = h;
                return k
            });
            b = Sb(d).j();
            return c + f + b + f + e
        })
    }
    ;var gc;
    a: {
        var hc = q.navigator;
        if (hc) {
            var ic = hc.userAgent;
            if (ic) {
                gc = ic;
                break a
            }
        }
        gc = ""
    }
    function B(a) {
        return -1 != gc.indexOf(a)
    }
    function jc(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a); )
            c.push([d[1], d[2], d[3] || void 0]);
        return c
    }
    ;function kc() {
        return B("Opera")
    }
    function lc() {
        return B("Trident") || B("MSIE")
    }
    function mc() {
        return B("Firefox") || B("FxiOS")
    }
    function nc() {
        return B("Safari") && !(oc() || B("Coast") || kc() || B("Edge") || B("Edg/") || B("OPR") || mc() || B("Silk") || B("Android"))
    }
    function oc() {
        return (B("Chrome") || B("CriOS")) && !B("Edge")
    }
    function pc() {
        function a(e) {
            var f = Ka(e, d);
            return c[0 > f ? null : "string" === typeof e ? e.charAt(f) : e[f]] || ""
        }
        var b = gc;
        if (lc())
            return qc(b);
        b = jc(b);
        var c = {};
        Ea(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = xa(fb, c);
        return kc() ? a(["Version", "Opera"]) : B("Edge") ? a(["Edge"]) : B("Edg/") ? a(["Edg"]) : oc() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
    }
    function qc(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1])
            return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a),
            "7.0" == c[1])
                if (a && a[1])
                    switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                    }
                else
                    b = "7.0";
            else
                b = c[1];
        return b
    }
    ;function rc() {
        this.m = "";
        this.v = sc;
        this.o = null
    }
    rc.prototype.lb = !0;
    rc.prototype.l = function() {
        return this.o
    }
    ;
    rc.prototype.Y = !0;
    rc.prototype.j = function() {
        return this.m.toString()
    }
    ;
    function tc(a) {
        if (a instanceof rc && a.constructor === rc && a.v === sc)
            return a.m;
        na(a);
        return "type_error:SafeHtml"
    }
    function uc(a) {
        if (a instanceof rc)
            return a;
        var b = "object" == typeof a
          , c = null;
        b && a.lb && (c = a.l());
        return vc(xb(b && a.Y ? a.j() : String(a)), c)
    }
    var wc = /^[a-zA-Z0-9-]+$/
      , xc = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    }
      , yc = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    function zc(a) {
        function b(f) {
            Array.isArray(f) ? Ea(f, b) : (f = uc(f),
            e.push(tc(f).toString()),
            f = f.l(),
            0 == d ? d = f : 0 != f && d != f && (d = null))
        }
        var c = uc(Ac)
          , d = c.l()
          , e = [];
        Ea(a, b);
        return vc(e.join(tc(c).toString()), d)
    }
    function Bc(a) {
        return zc(Array.prototype.slice.call(arguments))
    }
    var sc = {};
    function vc(a, b) {
        return Cc(a, b)
    }
    function Cc(a, b) {
        var c = new rc;
        c.m = a;
        c.o = b;
        return c
    }
    Cc("<!DOCTYPE html>", 0);
    var Ac = Cc("", 0);
    Cc("<br>", 0);
    var Dc = Ya(function() {
        var a = document.createElement("div")
          , b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = tc(Ac);
        return !b.parentElement
    });
    function Ec(a, b) {
        if (Dc())
            for (; a.lastChild; )
                a.removeChild(a.lastChild);
        a.innerHTML = tc(b)
    }
    function Fc(a, b) {
        b = b instanceof Jb ? b : Tb(b, /^data:image\//i.test(b));
        a.src = Mb(b)
    }
    function Gc(a, b) {
        a.src = sb(b);
        (b = fa()) && a.setAttribute("nonce", b)
    }
    ;function Hc(a) {
        return a = xb(a, void 0)
    }
    function Ic(a, b) {
        var c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var d = b ? b.createElement("div") : q.document.createElement("div");
        return a.replace(Kc, function(e, f) {
            var g = c[e];
            if (g)
                return g;
            "#" == f.charAt(0) && (f = Number("0" + f.substr(1)),
            isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = Cc(e + " ", null),
            Ec(d, g),
            g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Kc = /&([^;\s<&]+);?/g
      , Lc = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "\\u003C"
    }
      , Mc = {
        "'": "\\'"
    };
    function Nc(a) {
        for (var b = 0, c = 0; c < a.length; ++c)
            b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }
    function Oc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    function Pc(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;function Qc(a) {
        Qc[" "](a);
        return a
    }
    Qc[" "] = ja;
    function Rc(a, b) {
        try {
            return Qc(a[b]),
            !0
        } catch (c) {}
        return !1
    }
    function Sc(a, b) {
        var c = Tc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    }
    ;var Uc = kc()
      , Vc = lc()
      , Wc = B("Edge")
      , Xc = Wc || Vc
      , Yc = B("Gecko") && !(-1 != gc.toLowerCase().indexOf("webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge")
      , Zc = -1 != gc.toLowerCase().indexOf("webkit") && !B("Edge");
    function $c() {
        var a = q.document;
        return a ? a.documentMode : void 0
    }
    var ad;
    a: {
        var bd = ""
          , cd = function() {
            var a = gc;
            if (Yc)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Wc)
                return /Edge\/([\d\.]+)/.exec(a);
            if (Vc)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Zc)
                return /WebKit\/(\S+)/.exec(a);
            if (Uc)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        cd && (bd = cd ? cd[1] : "");
        if (Vc) {
            var dd = $c();
            if (null != dd && dd > parseFloat(bd)) {
                ad = String(dd);
                break a
            }
        }
        ad = bd
    }
    var ed = ad
      , Tc = {};
    function fd(a) {
        return Sc(a, function() {
            return 0 <= Hb(ed, a)
        })
    }
    var gd;
    if (q.document && Vc) {
        var hd = $c();
        gd = hd ? hd : parseInt(ed, 10) || void 0
    } else
        gd = void 0;
    var id = gd;
    var jd = {}
      , kd = null;
    function D() {}
    var ld = "function" == typeof Uint8Array;
    function L(a, b, c, d) {
        a.j = null;
        b || (b = []);
        a.I = void 0;
        a.v = -1;
        a.m = b;
        a: {
            if (b = a.m.length) {
                --b;
                var e = a.m[b];
                if (!(null === e || "object" != typeof e || Array.isArray(e) || ld && e instanceof Uint8Array)) {
                    a.A = b - a.v;
                    a.o = e;
                    break a
                }
            }
            a.A = Number.MAX_VALUE
        }
        a.D = {};
        if (c)
            for (b = 0; b < c.length; b++)
                e = c[b],
                e < a.A ? (e += a.v,
                a.m[e] = a.m[e] || md) : (nd(a),
                a.o[e] = a.o[e] || md);
        if (d && d.length)
            for (b = 0; b < d.length; b++) {
                e = c = void 0;
                for (var f = a, g = d[b], h = 0; h < g.length; h++) {
                    var k = g[h]
                      , l = N(f, k);
                    null != l && (e = k,
                    c = l,
                    od(f, k, void 0))
                }
                e && od(f, e, c)
            }
    }
    var md = [];
    function nd(a) {
        var b = a.A + a.v;
        a.m[b] || (a.o = a.m[b] = {})
    }
    function N(a, b) {
        if (b < a.A) {
            b += a.v;
            var c = a.m[b];
            return c === md ? a.m[b] = [] : c
        }
        if (a.o)
            return c = a.o[b],
            c === md ? a.o[b] = [] : c
    }
    function pd(a, b) {
        a = N(a, b);
        return null == a ? a : +a
    }
    function qd(a, b) {
        a = N(a, b);
        return null == a ? a : !!a
    }
    function rd(a, b, c) {
        a = N(a, b);
        return null == a ? c : a
    }
    function sd(a, b) {
        a = qd(a, b);
        return null == a ? !1 : a
    }
    function td(a, b, c) {
        a = pd(a, b);
        return null == a ? c : a
    }
    function od(a, b, c) {
        b < a.A ? a.m[b + a.v] = c : (nd(a),
        a.o[b] = c);
        return a
    }
    function ud(a, b, c, d) {
        c !== d ? od(a, b, c) : b < a.A ? a.m[b + a.v] = null : (nd(a),
        delete a.o[b]);
        return a
    }
    function O(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            var d = N(a, c);
            d && (a.j[c] = new b(d))
        }
        return a.j[c]
    }
    function P(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            for (var d = N(a, c), e = [], f = 0; f < d.length; f++)
                e[f] = new b(d[f]);
            a.j[c] = e
        }
        b = a.j[c];
        b == md && (b = a.j[c] = []);
        return b
    }
    function vd(a, b, c) {
        a.j || (a.j = {});
        var d = c ? wd(c) : c;
        a.j[b] = c;
        return od(a, b, d)
    }
    function xd(a, b) {
        a.j || (a.j = {});
        b = b || [];
        for (var c = [], d = 0; d < b.length; d++)
            c[d] = wd(b[d]);
        a.j[5] = b;
        od(a, 5, c)
    }
    function wd(a) {
        if (a.j)
            for (var b in a.j) {
                var c = a.j[b];
                if (oa(c))
                    for (var d = 0; d < c.length; d++)
                        c[d] && wd(c[d]);
                else
                    c && wd(c)
            }
        return a.m
    }
    D.prototype.C = ld ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            var b;
            void 0 === b && (b = 0);
            if (!kd) {
                kd = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    jd[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === kd[h] && (kd[h] = g)
                    }
                }
            }
            b = jd[b];
            c = [];
            for (d = 0; d < this.length; d += 3) {
                var k = this[d]
                  , l = (e = d + 1 < this.length) ? this[d + 1] : 0;
                h = (f = d + 2 < this.length) ? this[d + 2] : 0;
                g = k >> 2;
                k = (k & 3) << 4 | l >> 4;
                l = (l & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64,
                e || (l = 64));
                c.push(b[g], b[k], b[l] || "", b[h] || "")
            }
            return c.join("")
        }
        ;
        try {
            return JSON.stringify(this.m && wd(this), yd)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    }
    : function() {
        return JSON.stringify(this.m && wd(this), yd)
    }
    ;
    function yd(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    }
    function zd(a, b) {
        return new a(b ? JSON.parse(b) : null)
    }
    D.prototype.clone = function() {
        return new this.constructor(Ad(wd(this)))
    }
    ;
    function Ad(a) {
        if (Array.isArray(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Ad(d) : d)
            }
            return b
        }
        if (ld && a instanceof Uint8Array)
            return new Uint8Array(a);
        b = {};
        for (c in a)
            d = a[c],
            null != d && (b[c] = "object" == typeof d ? Ad(d) : d);
        return b
    }
    ;/* 
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
    var Bd = Vc && !fd("9")
      , Cd = Vc || Uc || Zc;
    function Dd(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }
    function Ed(a) {
        return Ia(arguments, function(b, c) {
            return b + c
        }, 0)
    }
    function Jd(a) {
        return Ed.apply(null, arguments) / arguments.length
    }
    ;function Kd(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    n = Kd.prototype;
    n.clone = function() {
        return new Kd(this.x,this.y)
    }
    ;
    n.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    n.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    n.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    n.translate = function(a, b) {
        a instanceof Kd ? (this.x += a.x,
        this.y += a.y) : (this.x += Number(a),
        "number" === typeof b && (this.y += b));
        return this
    }
    ;
    n.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    }
    ;
    function Ld(a, b) {
        this.width = a;
        this.height = b
    }
    n = Ld.prototype;
    n.clone = function() {
        return new Ld(this.width,this.height)
    }
    ;
    n.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    n.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    }
    ;
    function Md(a) {
        return a ? new Nd(Od(a)) : Ba || (Ba = new Nd)
    }
    function Pd(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Ld(a.clientWidth,a.clientHeight)
    }
    function Qd(a) {
        var b = a.scrollingElement ? a.scrollingElement : Zc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Vc && fd("10") && a.pageYOffset != b.scrollTop ? new Kd(b.scrollLeft,b.scrollTop) : new Kd(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    function Rd(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    function Sd(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    function Td(a) {
        var b, c = arguments.length;
        if (!c)
            return null;
        if (1 == c)
            return arguments[0];
        var d = []
          , e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g; )
                f.unshift(g),
                g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b])
                    return f;
            f = g
        }
        return f
    }
    function Od(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var Ud = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , Vd = {
        IMG: " ",
        BR: "\n"
    };
    function Wd(a) {
        if (Bd && null !== a && "innerText"in a)
            a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Xd(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Bd || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }
    function Xd(a, b, c) {
        if (!(a.nodeName in Ud))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Vd)
                b.push(Vd[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    Xd(a, b, c),
                    a = a.nextSibling
    }
    function Yd(a) {
        return Zd(a, function(b) {
            return "INS" == b.nodeName && "string" === typeof b.className && La(b.className.split(/\s+/), "adsbygoogle")
        })
    }
    function Zd(a, b) {
        for (var c = 0; a; ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
    function Nd(a) {
        this.j = a || q.document || document
    }
    function $d(a, b) {
        return Sd(a.j, b)
    }
    Nd.prototype.K = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    }
    ;
    Nd.prototype.contains = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    Nd.prototype.l = Td;
    var ae = {
        passive: !0
    }
      , be = Ya(function() {
        let a = !1;
        try {
            const b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            q.addEventListener("test", null, b)
        } catch (b) {}
        return a
    });
    function ce(a) {
        return a ? a.passive && be() ? a : a.capture || !1 : !1
    }
    function Q(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ce(d)),
        !0) : !1
    }
    function de(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, ce(d)),
        !0) : !1
    }
    ;function ee(a) {
        var b = window;
        new Promise((c,d)=>{
            function e() {
                f.onload = null;
                f.onerror = null;
                b.document.body.removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = ()=>{
                e();
                c()
            }
            ;
            f.onerror = ()=>{
                e();
                d(void 0)
            }
            ;
            f.type = "text/javascript";
            Gc(f, a);
            "complete" !== b.document.readyState ? Q(b, "load", ()=>{
                b.document.body.appendChild(f)
            }
            ) : b.document.body.appendChild(f)
        }
        )
    }
    ;function fe(a) {
        const b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.ka}`;
        let c = Promise.resolve(void 0);
        try {
            c = ge(b)
        } catch (d) {}
        return c.then(d=>{
            if (d) {
                var e = a.ya || d.sodar_query_id;
                if (e && d.bg_hash_basename && d.bg_binary)
                    return {
                        context: a.m,
                        Oc: d.bg_hash_basename,
                        Nc: d.bg_binary,
                        cd: `${a.j}_${a.l}`,
                        ya: e,
                        ka: a.ka
                    }
            }
        }
        , ()=>{}
        )
    }
    let ge = a=>new Promise((b,c)=>{
        const d = new XMLHttpRequest;
        d.onreadystatechange = ()=>{
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        }
        ;
        d.open("GET", a, !0);
        d.send()
    }
    );
    function he(a) {
        fe(a).then(b=>{
            if (b) {
                var c = window
                  , d = c.GoogleGcLKhOms;
                d && "function" === typeof d.push || (d = c.GoogleGcLKhOms = []);
                d.push({
                    ["_ctx_"]: b.context,
                    ["_bgv_"]: b.Oc,
                    ["_bgp_"]: b.Nc,
                    ["_li_"]: b.cd,
                    ["_jk_"]: b.ya,
                    ["_st_"]: b.ka
                });
                if (d = c.GoogleDX5YKUSk)
                    c.GoogleDX5YKUSk = void 0,
                    d[1]();
                c = tb(new lb(mb,"//tpc.googlesyndication.com/sodar/%{basename}.js"), {
                    basename: "sodar2"
                });
                ee(c)
            }
            return b
        }
        )
    }
    ;var ie = class {
        constructor(a) {
            this.j = a.j;
            this.l = a.l;
            this.m = a.m;
            this.ya = a.ya;
            this.win = a.K();
            this.ka = a.ka
        }
    }
      , je = class {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.m = c;
            this.win = window;
            this.ka = "env"
        }
        K() {
            return this.win
        }
    }
    ;
    function ke(a) {
        L(this, a, le, null)
    }
    A(ke, D);
    var le = [2, 3];
    function me(a) {
        L(this, a, null, null)
    }
    A(me, D);
    var ne = document
      , R = window;
    const oe = {
        Gd: "google_adtest",
        Kd: "google_ad_client",
        Ld: "google_ad_format",
        Md: "google_ad_height",
        Zd: "google_ad_width",
        Qd: "google_ad_layout",
        Rd: "google_ad_layout_key",
        Sd: "google_ad_output",
        Td: "google_ad_region",
        Wd: "google_ad_slot",
        Xd: "google_ad_type",
        Yd: "google_ad_url",
        $d: "google_allow_expandable_ads",
        pe: "google_analytics_domain_name",
        qe: "google_analytics_uacct",
        Ge: "google_container_id",
        Re: "google_gl",
        nf: "google_enable_ose",
        Af: "google_full_width_responsive",
        vg: "google_rl_filtering",
        ug: "google_rl_mode",
        wg: "google_rt",
        tg: "google_rl_dest_url",
        ag: "google_max_radlink_len",
        fg: "google_num_radlinks",
        gg: "google_num_radlinks_per_unit",
        Jd: "google_ad_channel",
        $f: "google_max_num_ads",
        bg: "google_max_responsive_height",
        Be: "google_color_border",
        mf: "google_enable_content_recommendations",
        Oe: "google_content_recommendation_ui_type",
        Ne: "google_source_type",
        Me: "google_content_recommendation_rows_num",
        Ke: "google_content_recommendation_columns_num",
        Je: "google_content_recommendation_ad_positions",
        Pe: "google_content_recommendation_use_square_imgs",
        De: "google_color_link",
        Ce: "google_color_line",
        Fe: "google_color_url",
        Hd: "google_ad_block",
        Vd: "google_ad_section",
        Id: "google_ad_callback",
        xe: "google_captcha_token",
        Ee: "google_color_text",
        me: "google_alternate_ad_url",
        Pd: "google_ad_host_tier_id",
        ye: "google_city",
        Nd: "google_ad_host",
        Od: "google_ad_host_channel",
        ne: "google_alternate_color",
        Ae: "google_color_bg",
        qf: "google_encoding",
        xf: "google_font_face",
        Ue: "google_cust_ch",
        Xe: "google_cust_job",
        We: "google_cust_interests",
        Ve: "google_cust_id",
        Ye: "google_cust_u_url",
        Hf: "google_hints",
        Lf: "google_image_size",
        de: "google_scs",
        pg: "google_core_dbp",
        cg: "google_mtl",
        eh: "google_cpm",
        Ie: "google_contents",
        eg: "google_native_settings_key",
        mh: "google_video_url_to_fetch",
        Qe: "google_country",
        Vg: "google_targeting",
        yf: "google_font_size",
        cf: "google_disable_video_autoplay",
        lh: "google_video_product_type",
        kh: "google_video_doc_id",
        hg: "google_only_pyv_ads",
        Xf: "google_lact",
        ih: "google_cust_gender",
        qh: "google_yt_up",
        ph: "google_yt_pt",
        Rg: "google_cust_lh",
        Qg: "google_cust_l",
        bh: "google_tfs",
        dg: "google_native_ad_template",
        Uf: "google_kw",
        Sg: "google_tag_for_child_directed_treatment",
        Tg: "google_tag_for_under_age_of_consent",
        zg: "google_region",
        Te: "google_cust_criteria",
        Ud: "google_safe",
        Se: "google_ctr_threshold",
        Dg: "google_resizing_allowed",
        Fg: "google_resizing_width",
        Eg: "google_resizing_height",
        hh: "google_cust_age",
        LANGUAGE: "google_language",
        Vf: "google_kw_type",
        qg: "google_pucrd",
        og: "google_page_url",
        Ug: "google_tag_partner",
        pf: "google_enable_single_iframe",
        Jg: "google_restrict_data_processing"
    };
    function pe(a) {
        L(this, a, null, qe)
    }
    A(pe, D);
    function re(a) {
        L(this, a, null, null)
    }
    A(re, D);
    var qe = [[3, 4, 5]];
    function se(a) {
        this.j = a || {
            cookie: ""
        }
    }
    se.prototype.set = function(a, b, c) {
        let d, e;
        let f = !1, g;
        if ("object" === typeof c) {
            g = c.uh;
            f = c.xd || !1;
            var h = c.domain || void 0;
            e = c.path || void 0;
            d = c.gd
        }
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (h ? ";domain=" + h : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(+new Date + 1E3 * d)).toUTCString()) + (f ? ";secure" : "") + (null != g ? ";samesite=" + g : "")
    }
    ;
    se.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = wb(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.substr(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    const te = a=>(a = (new se(a)).get("DATA_USE_CONSENT", "")) ? a : null;
    var ue = a=>{
        var b = (b = (new se(a)).get("FCCDCF", "")) ? b : null;
        try {
            var c = b ? zd(pe, b) : null
        } catch (d) {
            c = null
        }
        if (!c)
            return te(a);
        c = O(c, re, 3);
        if (!c || null == N(c, 1))
            return te(a);
        a = N(c, 2);
        b = Date.now();
        if (a) {
            if (b < a || b > a + 33696E6)
                return null
        } else
            return null;
        return N(c, 1)
    }
    ;
    function ve(a) {
        L(this, a, we, null)
    }
    A(ve, D);
    var we = [1, 2, 3, 4];
    function xe(a) {
        ye();
        return new pb(qb,a)
    }
    var ye = ja;
    function ze() {
        return !(B("iPad") || B("Android") && !B("Mobile") || B("Silk")) && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile"))
    }
    ;var Ae = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    function Be(a) {
        return a.match(Ae)
    }
    function Ce(a) {
        return a ? decodeURI(a) : a
    }
    ;function De(a) {
        try {
            return !!a && null != a.location.href && Rc(a, "foo")
        } catch (b) {
            return !1
        }
    }
    function Ee(a, b, c, d) {
        d = d || q;
        c && (d = Fe(d));
        for (c = 0; d && 40 > c++ && (!b && !De(d) || !a(d)); )
            d = Fe(d)
    }
    function Ge() {
        let a = q;
        Ee(b=>{
            a = b;
            return !1
        }
        );
        return a
    }
    function Fe(a) {
        try {
            const b = a.parent;
            if (b && b != a)
                return b
        } catch (b) {}
        return null
    }
    function He(a, b) {
        const c = a.createElement("script");
        Gc(c, xe(b));
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }
    function Ie(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
    function Je(a, b, c=!0) {
        let d = !1;
        c || (d = Ke());
        return !d && !Le() && (c = Math.random(),
        c < b) ? (c = Me(q),
        a[Math.floor(c * a.length)]) : null
    }
    function Me(a) {
        if (!a.crypto)
            return Math.random();
        try {
            const b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }
    function Ne(a, b) {
        if (a)
            for (const c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
    function Oe() {
        const a = [];
        Ne(Pe, function(b, c) {
            a.push(c)
        });
        return a
    }
    function Qe(a) {
        const b = [];
        Ne(a, function(c) {
            b.push(c)
        });
        return b
    }
    function Re(a) {
        const b = a.length;
        if (0 == b)
            return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Le = Ya(()=>Ja(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Se) || 1E-4 > Math.random())
      , Ke = Ya(()=>-1 != gc.indexOf("MSIE"));
    const Se = a=>-1 != gc.indexOf(a);
    var Te = /^([0-9.]+)px$/
      , Ue = /^(-?[0-9.]{1,30})$/;
    function Ve(a) {
        return Ue.test(a) && (a = Number(a),
        !isNaN(a)) ? a : null
    }
    function We(a) {
        return /^true$/.test(a)
    }
    function Xe(a) {
        return (a = Te.exec(a)) ? +a[1] : null
    }
    function jf() {
        var a = q.document.URL;
        if (!a)
            return "";
        const b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c)
                return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (c) {}
        return ""
    }
    const kf = {
        ae: "allow-forms",
        be: "allow-modals",
        ce: "allow-orientation-lock",
        ee: "allow-pointer-lock",
        fe: "allow-popups",
        ge: "allow-popups-to-escape-sandbox",
        he: "allow-presentation",
        ie: "allow-same-origin",
        je: "allow-scripts",
        ke: "allow-top-navigation",
        le: "allow-top-navigation-by-user-activation"
    }
      , lf = Ya(()=>Qe(kf));
    function mf() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation"];
        const b = lf();
        return a.length ? Fa(b, c=>!La(a, c)) : b
    }
    function nf() {
        const a = Sd(document, "IFRAME")
          , b = {};
        Ea(lf(), c=>{
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        }
        );
        return b
    }
    var of = (a,b)=>{
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }
      , pf = (a,b)=>{
        for (let c = 0; 50 > c; ++c) {
            if (of(a, b))
                return a;
            if (!(a = Fe(a)))
                break
        }
        return null
    }
      , uf = (a,b)=>{
        a.style.setProperty ? Ne(b, (c,d)=>{
            a.style.setProperty(d, c, "important")
        }
        ) : a.style.cssText = qf(rf(sf(a.style.cssText), tf(b, c=>c + " !important")))
    }
      , rf = Object.assign || function(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (d)
                for (let e in d)
                    Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    }
      , tf = (a,b)=>{
        const c = {};
        for (let d in a)
            Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    }
      , qf = a=>{
        const b = [];
        Ne(a, (c,d)=>{
            null != c && "" !== c && b.push(d + ":" + c)
        }
        );
        return b.length ? b.join(";") + ";" : ""
    }
      , sf = a=>{
        const b = {};
        if (a) {
            const c = /\s*:\s*/;
            Ea((a || "").split(/\s*;\s*/), d=>{
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            }
            )
        }
        return b
    }
      , vf = {
        "http://googleads.g.doubleclick.net": !0,
        "http://pagead2.googlesyndication.com": !0,
        "https://googleads.g.doubleclick.net": !0,
        "https://pagead2.googlesyndication.com": !0
    }
      , wf = /\.proxy\.googleprod\.com(:\d+)?$/
      , xf = (a,b=!1)=>!!vf[a] || b && wf.test(a)
      , yf = (a,b)=>{
        b = Ka(a, b);
        if (0 <= b) {
            const c = a[b];
            Array.prototype.splice.call(a, b, 1);
            return c
        }
        return null
    }
      , zf = a=>{
        if ("number" !== typeof a.goog_pvsid)
            try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * 2 ** 52)
                })
            } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }
    ;
    function Af(a, b, c, d=[]) {
        const e = new a.MutationObserver(f=>{
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || Td(h, b))) {
                        for (const k of d)
                            k.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        }
        );
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Ee(f=>{
            if (!f.parent || !De(f.parent))
                return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let l = 0; l < g.length; l++)
                try {
                    a: {
                        var h = g[l];
                        try {
                            var k = h.contentWindow || (h.contentDocument ? Rd(h.contentDocument) : null);
                            break a
                        } catch (m) {}
                        k = null
                    }
                    if (k == f) {
                        Af(f.parent, g[l], c, d);
                        break
                    }
                } catch (m) {}
            return !1
        }
        , !1, !1, a)
    }
    var Bf = (a,b)=>{
        Af(Rd(Od(a)), a, b)
    }
    ;
    var Pe = {
        Sf: 0,
        Ff: 1,
        Ef: 2,
        Df: 3,
        rg: 4,
        sg: 5,
        Jf: 6,
        Gf: 7
    };
    const Cf = a=>{
        var b = document;
        try {
            const d = ue(b);
            var c = d ? zd(ve, d) : null
        } catch (d) {
            c = null
        }
        if (!c)
            return 0;
        if (qd(c, 7))
            return 4;
        if (6048E5 < +new Date - (N(c, 5) || 0))
            return 0;
        if (a) {
            if (La(N(c, 3), a))
                return 2;
            if (La(N(c, 4), a))
                return 3
        }
        return 1
    }
    ;
    function Df(a, b, c=!1) {
        switch (a) {
        case 2:
        case 4:
            return !1;
        case 3:
            return !0;
        case 1:
            return b;
        default:
            return c && b
        }
    }
    const Ef = Ya(()=>{
        const a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
        try {
            return a.test(q.top.location.href)
        } catch (b) {
            return a.test(q.location.href)
        }
    }
    );
    var Ff = (a,b)=>{
        for (var c = Oe().length, d = [], e = 0; e < c; e++)
            d[e] = 0;
        Ef() && (a = !0);
        d[0] = a ? 1 : 2;
        c = of(q.top, "GoogleSetNPA") || of(Ge(), "GoogleSetNPA");
        d[5] = c ? 1 : 2;
        d[4] = 2;
        e = !!q.googlefc || of(q.top, "googlefcPresent");
        d[1] = e ? 1 : 2;
        var f = Cf(b);
        0 != f ? b = {
            Qb: f,
            Sb: 3
        } : (f = q.top,
        b = of(f, "googlefcInactive") ? 4 : b && of(f, `googlefcPA-${b}`) ? 2 : of(f, "googlefcNPA") ? 3 : 0,
        b = {
            Qb: b,
            Sb: 2
        });
        const {Qb: g, Sb: h} = b;
        d[h] = g;
        return {
            wh: g,
            ud: c || Df(g, a, e),
            hc: 0 == g && a && e,
            Rb: d.join(".")
        }
    }
      , Gf = (a,b,c)=>{
        const d = Ff(a, b);
        d.hc ? q.setTimeout(()=>{
            Gf(a, b, c)
        }
        , 1E3) : c(d)
    }
    ;
    class Hf {
        constructor(a, b, c, d) {
            this.j = a;
            this.pubWin = b;
            this.iframeWin = c;
            this.B = d || c || {};
            this.o = b.document.getElementById(this.B.google_async_iframe_id + "_anchor");
            this.V = b.document.getElementById(this.B.google_async_iframe_id + "_expand");
            this.v = -1;
            this.C = !1;
            this.H = "";
            this.l = 0;
            this.A = !1;
            this.D = this.M = null;
            this.I = 0;
            this.G = null;
            this.T = 0;
            this.m = [];
            this.tcString = this.J = "";
            this.gdprApplies = void 0;
            this.addtlConsent = ""
        }
    }
    ;var If = (a,b)=>{
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? b : a
    }
    ;
    const Jf = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/;
    var Kf = (a,b)=>a ? (a = a.match(Jf)) ? a[0] : b : b;
    var Lf = ()=>"r20200406"
      , Mf = We("false")
      , Nf = We("false")
      , Of = We("false")
      , Pf = We("false")
      , Qf = We("false")
      , Rf = We("true");
    let Sf = Rf || !Pf;
    var Tf = If("0.02", 0)
      , Uf = If("0.0", 0);
    var Vf = ()=>Kf("", "googleads.g.doubleclick.net")
      , Wf = ()=>Kf("", "pagead2.googlesyndication.com");
    function Xf() {
        this.M = this.M;
        this.V = this.V
    }
    Xf.prototype.M = !1;
    Xf.prototype.Oa = function() {
        this.M || (this.M = !0,
        this.l())
    }
    ;
    Xf.prototype.l = function() {
        if (this.V)
            for (; this.V.length; )
                this.V.shift()()
    }
    ;
    class Yf {
        constructor(a) {
            this.methodName = a
        }
    }
    var Zf = new Yf(15)
      , $f = new Yf(2)
      , ag = new Yf(3)
      , bg = new Yf(5)
      , cg = new Yf(6)
      , dg = (a,b,c)=>b[a.methodName] || c || (()=>{}
    );
    function eg(a, b) {
        a.j = (c,d)=>dg(bg, b)(c, d, 1);
        a.l = (c,d)=>dg(cg, b)(c, d, 1);
        a.m = ()=>{
            dg(Zf, b)(1)
        }
    }
    class S {
        constructor() {
            this.j = (a,b=!1)=>b;
            this.l = (a,b=0)=>b;
            this.m = ()=>{}
        }
    }
    la(S);
    function fg(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    n = fg.prototype;
    n.Ra = function() {
        return this.right - this.left
    }
    ;
    n.hb = function() {
        return this.bottom - this.top
    }
    ;
    n.clone = function() {
        return new fg(this.top,this.right,this.bottom,this.left)
    }
    ;
    n.contains = function(a) {
        return this && a ? a instanceof fg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    n.expand = function(a, b, c, d) {
        qa(a) ? (this.top -= a.top,
        this.right += a.right,
        this.bottom += a.bottom,
        this.left -= a.left) : (this.top -= a,
        this.right += Number(b),
        this.bottom += Number(c),
        this.left -= Number(d));
        return this
    }
    ;
    function gg(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    n.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    n.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    n.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    n.translate = function(a, b) {
        a instanceof Kd ? (this.left += a.x,
        this.right += a.x,
        this.top += a.y,
        this.bottom += a.y) : (this.left += a,
        this.right += a,
        "number" === typeof b && (this.top += b,
        this.bottom += b));
        return this
    }
    ;
    n.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    }
    ;
    function hg(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    n = hg.prototype;
    n.clone = function() {
        return new hg(this.left,this.top,this.width,this.height)
    }
    ;
    function ig(a, b) {
        var c = Math.max(a.left, b.left)
          , d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a)
                return new hg(c,e,d - c,a - e)
        }
        return null
    }
    function jg(a, b) {
        var c = ig(a, b);
        if (!c || !c.height || !c.width)
            return [a.clone()];
        c = [];
        var d = a.top
          , e = a.height
          , f = a.left + a.width
          , g = a.top + a.height
          , h = b.left + b.width
          , k = b.top + b.height;
        b.top > a.top && (c.push(new hg(a.left,a.top,a.width,b.top - a.top)),
        d = b.top,
        e -= b.top - a.top);
        k < g && (c.push(new hg(a.left,k,a.width,g - k)),
        e = k - d);
        b.left > a.left && c.push(new hg(a.left,d,b.left - a.left,e));
        h < f && c.push(new hg(h,d,f - h,e));
        return c
    }
    n.contains = function(a) {
        return a instanceof Kd ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    }
    ;
    n.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    n.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    n.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    n.translate = function(a, b) {
        a instanceof Kd ? (this.left += a.x,
        this.top += a.y) : (this.left += a,
        "number" === typeof b && (this.top += b));
        return this
    }
    ;
    n.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    }
    ;
    const kg = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };
    function lg(a=q) {
        let b = a.context || a.AMP_CONTEXT_DATA;
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
    function mg() {
        const a = lg();
        return a && a.initialIntersection
    }
    function ng() {
        const a = mg();
        return a && qa(a.rootBounds) ? new Ld(a.rootBounds.width,a.rootBounds.height) : null
    }
    function og(a) {
        return (a = a || lg()) ? De(a.master) ? a.master : null : null
    }
    function pg(a, b) {
        function c(g) {
            if (a.ampInaboxInitialized)
                e();
            else {
                var h, k = S.F().j(198, !1) && "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g),
                g = h[1],
                a.ampInaboxInitialized || g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || He(a.document, "https://cdn.ampproject.org/" + (g ? `rtv/${g}/` : "") + "amp4ads-host-v0.js"))
            }
        }
        const d = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let e = ()=>{}
          , f = ()=>{}
        ;
        b && (d.push(b),
        f = ()=>{
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Ma(d, b);
            e()
        }
        );
        if (a.ampInaboxInitialized)
            return f;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        d.google_amp_listener_added || (d.google_amp_listener_added = !0,
        Q(a, "message", c),
        e = ()=>{
            de(a, "message", c)
        }
        );
        return f
    }
    ;function qg(a, b=null) {
        rg(a, b)
    }
    function rg(a, b) {
        q.google_image_requests || (q.google_image_requests = []);
        const c = q.document.createElement("img");
        if (b) {
            const d = e=>{
                b && b(e);
                de(c, "load", d);
                de(c, "error", d)
            }
            ;
            Q(c, "load", d);
            Q(c, "error", d)
        }
        c.src = a;
        q.google_image_requests.push(c)
    }
    ;function sg(a, b, c) {
        if ("string" === typeof b)
            (b = tg(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = tg(c, d);
                f && (c.style[f] = e)
            }
    }
    var ug = {};
    function tg(a, b) {
        var c = ug[b];
        if (!c) {
            var d = Oc(b);
            c = d;
            void 0 === a.style[d] && (d = (Zc ? "Webkit" : Yc ? "Moz" : Vc ? "ms" : Uc ? "O" : null) + Pc(d),
            void 0 !== a.style[d] && (c = d));
            ug[b] = c
        }
        return c
    }
    function vg(a, b) {
        var c = Od(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    function wg(a) {
        return vg(a, "position") || (a.currentStyle ? a.currentStyle.position : null) || a.style && a.style.position
    }
    function xg(a) {
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
        Vc && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
    function yg(a) {
        var b = Od(a)
          , c = new Kd(0,0);
        var d = b ? Od(b) : document;
        d = !Vc || 9 <= Number(id) || "CSS1Compat" == Md(d).j.compatMode ? d.documentElement : d.body;
        if (a == d)
            return c;
        a = xg(a);
        b = Qd(Md(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    function zg(a, b) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var c = a.style.left
          , d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }
    function Ag(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? zg(a, b) : 0
    }
    var Bg = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    function Cg(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
            return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Bg ? Bg[b] : zg(a, b)
    }
    ;var T = (a,b)=>{
        if (a)
            for (let c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
      , Dg = a=>!(!a || !a.call) && "function" === typeof a
      , Eg = (a,b)=>{
        if (a.filter)
            return a.filter(b, void 0);
        const c = [];
        for (let d = 0; d < a.length; d++)
            b.call(void 0, a[d], d, a) && c.push(a[d]);
        return c
    }
      , Fg = ()=>{
        var a = w();
        "google_onload_fired"in a || (a.google_onload_fired = !1,
        Q(a, "load", ()=>{
            a.google_onload_fired = !0
        }
        ))
    }
      , Gg = (a,b)=>{
        const c = b.slice(-1);
        let d = "?" === c || "#" === c ? "" : "&";
        const e = [b];
        T(a, (f,g)=>{
            if (f || 0 === f || !1 === f)
                "boolean" === typeof f && (f = f ? 1 : 0),
                e.push(d),
                e.push(g),
                e.push("="),
                e.push(encodeURIComponent(String(f))),
                d = "&"
        }
        );
        return e.join("")
    }
      , Hg = ()=>{
        try {
            return R.history.length
        } catch (a) {
            return 0
        }
    }
      , Ig = a=>{
        a = og(lg(a)) || a;
        a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
    }
      , Jg = a=>{
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
      , Kg = a=>{
        let b;
        b = 9 !== a.nodeType && a.id;
        a: {
            if (a && a.nodeName && a.parentElement) {
                var c = a.nodeName.toString().toLowerCase();
                const d = a.parentElement.childNodes;
                let e = 0;
                for (let f = 0; f < d.length; ++f) {
                    const g = d[f];
                    if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                        if (a === g) {
                            c = "." + e;
                            break a
                        }
                        ++e
                    }
                }
            }
            c = ""
        }
        return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
    }
      , Lg = a=>!!a.google_async_iframe_id
      , Mg = Lg(window);
    let Ng = Mg && window.parent || window;
    var w = ()=>{
        if (Mg && !De(Ng)) {
            let a = "." + ne.domain;
            try {
                for (; 2 < a.split(".").length && !De(Ng); )
                    ne.domain = a = a.substr(a.indexOf(".") + 1),
                    Ng = window.parent
            } catch (b) {}
            De(Ng) || (Ng = window)
        }
        return Ng
    }
      , Og = /(^| )adsbygoogle($| )/
      , Pg = a=>function() {
        if (a) {
            const b = a;
            a = null;
            b.apply(null, arguments)
        }
    }
      , Rg = ()=>{
        if (!R)
            return !1;
        try {
            return !(!R.navigator.standalone && !Qg(R).navigator.standalone)
        } catch (a) {
            return !1
        }
    }
      , Sg = ()=>{
        var a;
        let b;
        const c = window.ActiveXObject;
        if (navigator.plugins && navigator.mimeTypes.length) {
            if ((a = navigator.plugins["Shockwave Flash"]) && a.description)
                return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
        } else {
            if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                b = 3;
                for (a = 1; a; )
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash." + (b + 1)),
                        b++
                    } catch (d) {
                        a = null
                    }
                return b.toString()
            }
            if (lc()) {
                a = null;
                try {
                    a = new c("ShockwaveFlash.ShockwaveFlash.7")
                } catch (d) {
                    b = 0;
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash.6"),
                        b = 6,
                        a.AllowScriptAccess = "always"
                    } catch (e) {
                        if (6 === b)
                            return b.toString()
                    }
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash")
                    } catch (e) {}
                }
                if (a)
                    return b = a.GetVariable("$version").split(" ")[1],
                    b.replace(/,/g, ".")
            }
        }
        return "0"
    }
      , Tg = a=>(a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1
      , Ug = ()=>{
        if (Of)
            try {
                const a = R.google_cafe_host || R.top.google_cafe_host;
                if (a)
                    return a
            } catch (a) {}
        return Wf()
    }
      , Qg = a=>Of && a.google_top_window || a.top
      , Vg = a=>{
        a = Qg(a);
        return De(a) ? a : null
    }
      , Wg = a=>{
        let b = Number(a.google_ad_width)
          , c = Number(a.google_ad_height);
        if (!(0 < b && 0 < c)) {
            a: {
                try {
                    const e = String(a.google_ad_format);
                    if (e && e.match) {
                        const f = e.match(/(\d+)x(\d+)/i);
                        if (f) {
                            const g = parseInt(f[1], 10)
                              , h = parseInt(f[2], 10);
                            if (0 < g && 0 < h) {
                                var d = {
                                    width: g,
                                    height: h
                                };
                                break a
                            }
                        }
                    }
                } catch (e) {}
                d = null
            }
            a = d;
            if (!a)
                return null;
            b = 0 < b ? b : a.width;
            c = 0 < c ? c : a.height
        }
        return {
            width: b,
            height: c
        }
    }
      , Xg = (a,b)=>a.source !== b.contentWindow && a.source.parent !== b.contentWindow ? !1 : !0;
    var Yg = a=>{
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }
      , Zg = (a,b)=>{
        a = Yg(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    }
    ;
    var $g = {
        ["google_ad_channel"]: "channel",
        ["google_ad_type"]: "ad_type",
        ["google_ad_format"]: "format",
        ["google_color_bg"]: "color_bg",
        ["google_color_border"]: "color_border",
        ["google_color_link"]: "color_link",
        ["google_color_text"]: "color_text",
        ["google_color_url"]: "color_url",
        ["google_page_url"]: "url",
        ["google_allow_expandable_ads"]: "ea",
        ["google_ad_section"]: "region",
        ["google_cpm"]: "cpm",
        ["google_encoding"]: "oe",
        ["google_safe"]: "adsafe",
        ["google_flash_version"]: "flash",
        ["google_font_face"]: "f",
        ["google_font_size"]: "fs",
        ["google_hints"]: "hints",
        ["google_ad_host"]: "host",
        ["google_ad_host_channel"]: "h_ch",
        ["google_ad_host_tier_id"]: "ht_id",
        ["google_kw_type"]: "kw_type",
        ["google_kw"]: "kw",
        ["google_contents"]: "contents",
        ["google_targeting"]: "targeting",
        ["google_adtest"]: "adtest",
        ["google_alternate_color"]: "alt_color",
        ["google_alternate_ad_url"]: "alternate_ad_url",
        ["google_cust_age"]: "cust_age",
        ["google_cust_ch"]: "cust_ch",
        ["google_cust_gender"]: "cust_gender",
        ["google_cust_interests"]: "cust_interests",
        ["google_cust_job"]: "cust_job",
        ["google_cust_l"]: "cust_l",
        ["google_cust_lh"]: "cust_lh",
        ["google_cust_u_url"]: "cust_u_url",
        ["google_cust_id"]: "cust_id",
        ["google_language"]: "hl",
        ["google_city"]: "gcs",
        ["google_country"]: "gl",
        ["google_region"]: "gr",
        ["google_content_recommendation_ad_positions"]: "ad_pos",
        ["google_content_recommendation_columns_num"]: "cr_col",
        ["google_content_recommendation_rows_num"]: "cr_row",
        ["google_content_recommendation_ui_type"]: "crui",
        ["google_content_recommendation_use_square_imgs"]: "cr_sq_img",
        ["google_color_line"]: "color_line",
        ["google_disable_video_autoplay"]: "disable_video_autoplay",
        ["google_full_width_responsive_allowed"]: "fwr",
        ["google_full_width_responsive"]: "fwrattr",
        ["efwr"]: "efwr",
        ["google_pgb_reactive"]: "pra",
        ["google_resizing_allowed"]: "rs",
        ["google_resizing_height"]: "rh",
        ["google_resizing_width"]: "rw",
        ["rpe"]: "rpe",
        ["google_responsive_formats"]: "resp_fmts",
        ["google_safe_for_responsive_override"]: "sfro",
        ["google_video_doc_id"]: "video_doc_id",
        ["google_video_product_type"]: "video_product_type",
        ["google_webgl_support"]: "wgl",
        ["google_refresh_count"]: "rc"
    }
      , ah = {
        ["google_ad_block"]: "ad_block",
        ["google_ad_client"]: "client",
        ["google_ad_output"]: "output",
        ["google_ad_callback"]: "callback",
        ["google_ad_height"]: "h",
        ["google_ad_resize"]: "twa",
        ["google_ad_slot"]: "slotname",
        ["google_ad_unit_key"]: "adk",
        ["google_ad_dom_fingerprint"]: "adf",
        ["google_ad_width"]: "w",
        ["google_captcha_token"]: "captok",
        ["google_content_recommendation_columns_num"]: "cr_col",
        ["google_content_recommendation_rows_num"]: "cr_row",
        ["google_ctr_threshold"]: "ctr_t",
        ["google_cust_criteria"]: "cust_params",
        ["gfwrnwer"]: "fwrn",
        ["gfwrnher"]: "fwrnh",
        ["google_bfa"]: "bfa",
        ["ebfa"]: "ebfa",
        ["ebfaca"]: "ebfaca",
        ["google_image_size"]: "image_size",
        ["google_last_modified_time"]: "lmt",
        ["google_loeid"]: "loeid",
        ["google_max_num_ads"]: "num_ads",
        ["google_max_radlink_len"]: "max_radlink_len",
        ["google_mtl"]: "mtl",
        ["google_native_settings_key"]: "nsk",
        ["google_enable_content_recommendations"]: "ecr",
        ["google_num_radlinks"]: "num_radlinks",
        ["google_num_radlinks_per_unit"]: "num_radlinks_per_unit",
        ["google_pucrd"]: "pucrd",
        ["google_reactive_plaf"]: "plaf",
        ["google_reactive_plat"]: "plat",
        ["google_reactive_fba"]: "fba",
        ["google_reactive_sra_channels"]: "plach",
        ["google_responsive_auto_format"]: "rafmt",
        ["armr"]: "armr",
        ["google_rl_dest_url"]: "rl_dest_url",
        ["google_rl_filtering"]: "rl_filtering",
        ["google_rl_mode"]: "rl_mode",
        ["google_rt"]: "rt",
        ["google_source_type"]: "src_type",
        ["google_restrict_data_processing"]: "rdp",
        ["google_tag_for_child_directed_treatment"]: "tfcd",
        ["google_tag_for_under_age_of_consent"]: "tfua",
        ["google_tag_origin"]: "to",
        ["google_ad_semantic_area"]: "sem",
        ["google_tfs"]: "tfs",
        ["google_package"]: "pwprc",
        ["google_tag_partner"]: "tp",
        ["fra"]: "fpla",
        ["google_ml_rank"]: "mlr",
        ["google_apsail"]: "psa"
    }
      , bh = {
        ["google_core_dbp"]: "dbp",
        ["google_lact"]: "lact",
        ["google_only_pyv_ads"]: "pyv",
        ["google_scs"]: "scs",
        ["google_video_url_to_fetch"]: "durl",
        ["google_yt_pt"]: "yt_pt",
        ["google_yt_up"]: "yt_up"
    };
    var ch = a=>{
        T($g, (b,c)=>{
            a[c] = null
        }
        );
        T(ah, (b,c)=>{
            a[c] = null
        }
        );
        T(bh, (b,c)=>{
            a[c] = null
        }
        );
        a.google_container_id = null;
        a.google_eids = null;
        a.google_page_location = null;
        a.google_referrer_url = null;
        a.google_enable_single_iframe = null;
        a.google_ad_region = null;
        a.google_gl = null;
        a.google_loader_used = null;
        a.google_loader_features_used = null;
        a.google_debug_params = null
    }
      , dh = (a,b,c)=>{
        a.l |= 2;
        return b[c % b.length]
    }
    ;
    var db = {
        xg: 0,
        tf: 1,
        uf: 2,
        Bf: 8,
        Mg: 9,
        Ig: 16,
        $e: 17,
        Ze: 24,
        Wf: 25,
        se: 26,
        re: 27,
        qc: 30,
        Of: 32,
        Rf: 40
    };
    var eh = a=>{
        const b = a.iframeWin;
        if (b && Lg(b) && b != b.parent && b.google_async_iframe_close) {
            const c = ()=>{
                b.setTimeout(()=>{
                    b.document.close()
                }
                , 0)
            }
            ;
            a.G ? a.G(c) : c()
        }
    }
    ;
    class fh {
        constructor(a, b, c={}) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        }
    }
    ;const gh = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i, /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i, /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i];
    var hh = a=>Ja(gh, b=>b.test(a));
    function ih(a) {
        if (a = /[-\w]+\.[-\w]+$/.exec(a))
            switch (Nc(a[0].toLowerCase())) {
            case 1967261364:
                return 0;
            case 3147493546:
                return 1;
            case 1567346461:
                return 2;
            case 2183041838:
                return 3;
            case 763236279:
                return 4;
            case 1342279801:
                return 5;
            case 526831769:
                return 6;
            case 352806002:
                return 7;
            case 2755048925:
                return 8;
            case 3306848407:
                return 9;
            case 2207000920:
                return 10;
            case 484037040:
                return 11;
            case 3506871055:
                return 12;
            case 672143848:
                return 13;
            case 2528751226:
                return 14;
            case 2744854768:
                return 15;
            case 3703278665:
                return 16;
            case 2014749173:
                return 17;
            case 133063824:
                return 18;
            case 2749334602:
                return 19;
            case 3131239845:
                return 20;
            case 2074086763:
                return 21;
            case 795772493:
                return 22;
            case 290857819:
                return 23;
            case 3035947606:
                return 24;
            case 2983138003:
                return 25;
            case 2197138676:
                return 26;
            case 4216016165:
                return 27;
            case 239803524:
                return 28;
            case 975993579:
                return 29;
            case 1794940339:
                return 30;
            case 1314429186:
                return 31;
            case 1643618937:
                return 32;
            case 497159982:
                return 33;
            case 3882239661:
                return 34
            }
        return -1
    }
    function jh(a) {
        if (!a.length)
            return 0;
        let b = [];
        for (var c = 0; 34 >= c; c++)
            b[c] = 0;
        for (c = a.length - 1; 0 <= c; c--) {
            const d = ih(a[c]);
            0 <= d && (b[34 - d] = 1)
        }
        return parseInt(b.join(""), 2)
    }
    ;const kh = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    function lh(a) {
        var b = a || q;
        const c = [];
        let d, e = null, f, g;
        do {
            g = b;
            De(g) ? (d = g.location.href,
            e = g.document && g.document.referrer || null,
            f = !0) : (d = e,
            e = null,
            f = !1);
            c.push(new mh(d || "",g,f));
            try {
                b = g.parent
            } catch (h) {
                b = null
            }
        } while (b && g != b);for (let h = 0, k = c.length - 1; h <= k; ++h)
            c[h].depth = k - h;
        g = a || q;
        if (g.location && g.location.ancestorOrigins && g.location.ancestorOrigins.length == c.length - 1)
            for (a = 1; a < c.length; ++a)
                b = c[a],
                b.url || (b.url = g.location.ancestorOrigins[a - 1] || "",
                b.Ub = !0);
        return c
    }
    function nh(a, b) {
        let c = 0;
        const d = (a = a.l[Math.max(a.l.length - 1, 0)].url || null) && Ce(Be(a)[3] || null)
          , e = Math.min(b.length, 26);
        for (let f = 0; f < e; f++)
            a = null != b[f] && Ce(Be(b[f])[3] || null) || "",
            c *= 4,
            a && (d && a == d ? c += 3 : hh(b[f]) ? c += 2 : a && 0 <= ih(a) && (c += 1));
        return c
    }
    class oh {
        constructor(a) {
            a = (this.j = a || q) || q;
            this.m = a = a.top == a ? 1 : De(a.top) ? 2 : 3;
            3 != this.m && Date.parse(q.top.document.lastModified);
            this.l = lh(this.j)
        }
    }
    var ph = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    }
      , mh = class {
        constructor(a, b, c, d, e) {
            this.url = a;
            this.win = b;
            this.Ub = !!d;
            this.depth = "number" === typeof e ? e : null
        }
    }
    ;
    function qh(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }
    function rh(a, b, c, d, e) {
        const f = [];
        Ne(a, function(g, h) {
            (g = sh(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
    function sh(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0,
            d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++)
                    f.push(sh(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(rh(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    function th(a, b, c, d) {
        a.j.push(b);
        a.l[b] = qh(c, d)
    }
    function uh(a) {
        if (!a.o)
            return a.A;
        let b = 1;
        for (const c in a.l)
            b = c.length > b ? c.length : b;
        return a.A - a.o.length - b - a.m.length - 1
    }
    function vh(a, b, c, d) {
        b = b + "//" + c + d;
        let e = uh(a) - d.length;
        if (0 > e)
            return "";
        a.j.sort(function(g, h) {
            return g - h
        });
        d = null;
        c = "";
        for (var f = 0; f < a.j.length; f++) {
            const g = a.j[f]
              , h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!e) {
                    d = null == d ? g : d;
                    break
                }
                let l = rh(h[k], a.m, a.C);
                if (l) {
                    l = c + l;
                    if (e >= l.length) {
                        e -= l.length;
                        b += l;
                        c = a.m;
                        break
                    }
                    a.v && (c = e,
                    l[c - 1] == a.m && --c,
                    b += l.substr(0, c),
                    c = a.m,
                    e = 0);
                    d = null == d ? g : d
                }
            }
        }
        f = "";
        a.o && null != d && (f = c + a.o + "=" + (a.G || d));
        return b + f
    }
    class wh {
        constructor(a, b, c, d, e) {
            this.A = c || 4E3;
            this.m = a || "&";
            this.C = b || ",$";
            this.o = void 0 !== d ? d : "trn";
            this.G = e || null;
            this.v = !1;
            this.l = {};
            this.D = 0;
            this.j = []
        }
    }
    ;function xh() {
        var a = Nh
          , b = Oh.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    }
    function Ph(a, b, c, d, e, f) {
        if ((d ? a.j : Math.random()) < (e || a.l))
            try {
                let g;
                c instanceof wh ? g = c : (g = new wh,
                Ne(c, (k,l)=>{
                    var m = g
                      , p = m.D++;
                    k = qh(l, k);
                    m.j.push(p);
                    m.l[p] = k
                }
                ));
                const h = vh(g, a.v, a.m, a.o + b + "&");
                h && ("undefined" === typeof f ? qg(h) : qg(h, f))
            } catch (g) {}
    }
    class Qh {
        constructor(a, b, c, d) {
            this.v = a;
            this.m = b;
            this.o = c;
            this.l = d;
            this.j = Math.random()
        }
    }
    ;let Rh = !1
      , Sh = null;
    function Th() {
        var a = Uh();
        const b = new Vh;
        Ne(a.j, function(c, d) {
            b.j[d] = c
        });
        Ne(a.l, function(c, d) {
            b.l[d] = c
        });
        return b
    }
    function Wh() {
        if (null === Sh) {
            Sh = "";
            try {
                let a = "";
                try {
                    a = q.top.location.hash
                } catch (b) {
                    a = q.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Sh = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Sh
    }
    function Xh(a, b, c) {
        return "" == b ? "" : c ? a.l.hasOwnProperty(c) ? a.l[c] = b : "" : (a.j[b] = !0,
        b)
    }
    function Yh(a, b, c, d) {
        if (a.m)
            return "";
        if (d ? a.l.hasOwnProperty(d) && "" == a.l[d] : 1) {
            var e;
            e = (e = Wh()) ? (e = e.match(new RegExp("\\b(" + b.join("|") + ")\\b"))) ? e[0] : null : null;
            if (b = e ? e : Rh ? null : Je(b, c, !1))
                return Xh(a, b, d)
        }
        return ""
    }
    function Zh(a, b) {
        return a.l.hasOwnProperty(b) ? a.l[b] : ""
    }
    function $h(a) {
        const b = [];
        Ne(a.j, function(c, d) {
            b.push(d)
        });
        Ne(a.l, function(c) {
            "" != c && b.push(c)
        });
        return b
    }
    class Vh {
        constructor(a) {
            this.j = {};
            this.l = {};
            this.m = !1;
            a = a || [];
            for (let b = 0, c = a.length; b < c; ++b)
                this.l[a[b]] = ""
        }
    }
    ;var ai = ()=>{
        const a = q.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }
      , bi = ()=>{
        const a = q.performance;
        return a && a.now ? a.now() : null
    }
    ;
    class ci {
        constructor(a, b, c, d=0, e) {
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = d;
            this.uniqueId = Math.random();
            this.slotId = e
        }
    }
    ;const di = q.performance
      , ei = !!(di && di.mark && di.measure && di.clearMarks)
      , fi = Ya(()=>{
        var a;
        if (a = ei)
            a = Wh(),
            a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    }
    );
    function gi(a) {
        a && di && fi() && (di.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
        di.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    function hi(a) {
        a.j = !1;
        a.l != a.m.google_js_reporting_queue && (fi() && Ea(a.l, gi),
        a.l.length = 0)
    }
    function ii(a, b) {
        if (a.j && "number" === typeof b.value) {
            var c = bi() || ai();
            b.duration = c - b.value;
            c = `goog_${b.label}_${b.uniqueId}_end`;
            di && fi() && di.mark(c);
            !a.j || 2048 < a.l.length || a.l.push(b)
        }
    }
    function ji(a, b) {
        if (!a.j)
            return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw gi(c),
            e;
        }
        ii(a, c);
        return d
    }
    class ki {
        constructor(a, b) {
            this.l = [];
            this.m = b || q;
            let c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [],
            this.l = b.google_js_reporting_queue,
            c = b.google_measure_js_timing);
            this.j = fi() || (null != c ? c : Math.random() < a)
        }
        start(a, b) {
            if (!this.j)
                return null;
            const c = bi() || ai();
            a = new ci(a,b,c);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            di && fi() && di.mark(b);
            return a
        }
    }
    ;function li(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = mi(a.stack, b));
        return b
    }
    function mi(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c; )
                c = a,
                a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (c) {
            return b
        }
    }
    function ni(a, b, c, d) {
        let e, f;
        try {
            a.m && a.m.j ? (f = a.m.start(b.toString(), 3),
            e = c(),
            ii(a.m, f)) : e = c()
        } catch (g) {
            c = a.o;
            try {
                gi(f),
                c = a.C(b, new fh(g,{
                    message: li(g)
                }), void 0, d)
            } catch (h) {
                a.j(217, h)
            }
            if (!c)
                throw g;
        }
        return e
    }
    function oi(a, b, c, d, e) {
        return (...f)=>ni(a, b, ()=>c.apply(d, f), e)
    }
    class pi {
        constructor(a, b, c, d=null) {
            this.A = a;
            this.D = b;
            this.o = c;
            this.l = null;
            this.C = this.j;
            this.m = d;
            this.v = !1
        }
        j(a, b, c, d, e) {
            e = e || this.D;
            let f;
            try {
                const k = new wh;
                k.v = !0;
                th(k, 1, "context", a);
                b.error && b.meta && b.id || (b = new fh(b,{
                    message: li(b)
                }));
                b.msg && th(k, 2, "msg", b.msg.substring(0, 512));
                var g = b.meta || {};
                b = g;
                if (this.l)
                    try {
                        this.l(b)
                    } catch (l) {}
                if (d)
                    try {
                        d(b)
                    } catch (l) {}
                d = k;
                g = [g];
                d.j.push(3);
                d.l[3] = g;
                {
                    const l = lh();
                    let m = new mh(q.location.href,q,!0,!1);
                    g = null;
                    const p = l.length - 1;
                    for (d = p; 0 <= d; --d) {
                        var h = l[d];
                        !g && kh.test(h.url) && (g = h);
                        if (h.url && !h.Ub) {
                            m = h;
                            break
                        }
                    }
                    h = null;
                    const t = l.length && l[p].url;
                    0 != m.depth && t && (h = l[p]);
                    f = new ph(m,h,g)
                }
                f.l && th(k, 4, "top", f.l.url || "");
                th(k, 5, "url", f.j.url || "");
                Ph(this.A, e, k, this.v, c)
            } catch (k) {
                try {
                    Ph(this.A, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: li(k),
                        url: f && f.j.url
                    }, this.v, c)
                } catch (l) {}
            }
            return this.o
        }
    }
    ;let Nh, qi, ri;
    const Oh = w()
      , si = new ki(1,Oh)
      , ti = a=>{
        var b = R.jerExpIds;
        if (oa(b) && 0 !== b.length) {
            var c = a.eid;
            if (c) {
                b = [...c.split(","), ...b];
                c = {};
                for (var d = 0, e = 0; e < b.length; ) {
                    var f = b[e++];
                    var g = f;
                    g = qa(g) ? "o" + ra(g) : (typeof g).charAt(0) + g;
                    Object.prototype.hasOwnProperty.call(c, g) || (c[g] = !0,
                    b[d++] = f)
                }
                b.length = d;
                a.eid = b.join(",")
            } else
                a.eid = b.join(",")
        }
    }
      , ui = a=>{
        const b = R.jerUserAgent;
        b && (a.useragent = b)
    }
    ;
    (()=>{
        Nh = new Qh("http:" === R.location.protocol ? "http:" : "https:","pagead2.googlesyndication.com","/pagead/gen_204?id=",.01);
        "number" !== typeof Oh.google_srt && (Oh.google_srt = Math.random());
        xh();
        qi = new pi(Nh,"jserror",!0,si);
        qi.l = b=>{
            ti(b);
            ri && (b.jc = ri);
            ui(b)
        }
        ;
        qi.v = !0;
        "complete" == Oh.document.readyState ? Oh.google_measure_js_timing || hi(si) : si.j && Q(Oh, "load", ()=>{
            Oh.google_measure_js_timing || hi(si)
        }
        );
        const a = ne.currentScript;
        ri = a ? a.dataset.jc : ""
    }
    )();
    var vi = ()=>{}
      , wi = (a,b)=>{
        ni(qi, a, b, void 0)
    }
      , V = (a,b,c)=>oi(qi, a, b, c, void 0)
      , W = (a,b,c)=>{
        Ph(Nh, a, b, !0, c, void 0)
    }
      , xi = (a,b)=>{
        W("rmvasft", {
            code: a,
            branch: b ? "exp" : "cntr"
        })
    }
    ;
    var yi = (a,b)=>{
        const c = jf();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(q.document.location.protocol), "//", encodeURIComponent(q.document.location.host)].join("")
    }
    ;
    class zi {
        constructor(a) {
            this.j = this.l = null;
            pa(a) ? this.j = a : this.l = a
        }
        getVerifier(a) {
            return this.l ? this.l[a] : null
        }
        getSchema(a) {
            return this.j ? this.j(a) : null
        }
        doesReturnAnotherSchema() {
            return this.j ? !0 : !1
        }
    }
    var Ai = (a,b,c,d=null)=>{
        const e = g=>{
            let h;
            try {
                h = JSON.parse(g.data)
            } catch (k) {
                return
            }
            !h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
        }
        ;
        Q(a, "message", e);
        let f = !1;
        return ()=>{
            let g = !1;
            f || (f = !0,
            g = de(a, "message", e));
            return g
        }
    }
      , Bi = (a,b,c,d=null)=>{
        const e = Ai(a, b, Wa(c, ()=>e()), d);
        return e
    }
    ;
    function Ci() {}
    A(Ci, Error);
    var Di = (a,b,c,d,e)=>{
        if (oa(a)) {
            var f = a;
            for (var g = 0; g < a.length; g++)
                a[g] = Di(a[g], b, c, d, e)
        } else if (qa(a)) {
            if (b.doesReturnAnotherSchema())
                if (f = b.getSchema(a)) {
                    if (b = f,
                    b.doesReturnAnotherSchema())
                        return Di(a, b, c, d, e)
                } else
                    throw new Ci("in_sc",c ? c : "root",a);
            f = {};
            for (g in a)
                if (Object.prototype.hasOwnProperty.call(a, g)) {
                    d = b.getVerifier(g);
                    c = a[g];
                    var h = b;
                    if (d) {
                        const k = d.predicate || d;
                        if (pa(k)) {
                            h = k(c);
                            if (!h) {
                                if (!d || !d.nullOnInvalid)
                                    throw new Ci("sm",g,c);
                                e && (e[g] = !0);
                                f[g] = null;
                                continue
                            }
                            if (h instanceof zi)
                                d = null;
                            else {
                                f[g] = c;
                                continue
                            }
                        }
                    } else if (!qa(c))
                        continue;
                    f[g] = Di(c, h, g, d, e)
                }
        } else if (f = a,
        b = d ? d.predicate || d : void 0,
        b instanceof RegExp && !b.test("string" === typeof a || void 0 == a ? a : String(a)) || pa(b) && !b(a)) {
            if (!d || !d.nullOnInvalid)
                throw new Ci("sm",c,a);
            e && (e[c] = !0);
            f = null
        }
        return f
    }
      , Fi = (a,b)=>{
        var c = Ei;
        return Ai(a, "ct", (d,e)=>{
            try {
                const f = Di(d, c, null, null, null);
                b(f, e)
            } catch (f) {
                if (!(f instanceof Ci))
                    throw f;
            }
        }
        )
    }
      , Gi = (a,b,c,d,e)=>{
        if (!(0 >= e) && (c.googMsgType = b,
        a.postMessage(JSON.stringify(c), d),
        a = a.frames))
            for (let f = 0; f < a.length; ++f)
                1 < e && Gi(a[f], b, c, d, --e)
    }
    ;
    var Ei = new zi({
        notify: /^expandable-xpc-ready$/
    });
    function Hi(a, b, c, d) {
        xf(d.origin, Of) && "expandable-xpc-ready" == c.notify && Ii(a, b)
    }
    function Ii(a, b) {
        var c = a.kb;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Ib,
            f: a.qd,
            g: a.Fc,
            h: a.bd,
            i: void 0
        });
        q.setTimeout(V(220, Pg(xa(function(d) {
            He(c.document, d)
        }, b))), 0)
    }
    ;var Ji = {
        te: "google_ads_preview",
        df: "google_mc_lab",
        wf: "google_anchor_debug",
        vf: "google_bottom_anchor_debug",
        pc: "google_ia_debug",
        Mf: "google_scr_debug",
        Qf: "google_ia_debug_allow_onclick",
        ng: "googleads",
        qc: "google_pedestal_debug",
        Cg: "google_resize_debug",
        Ng: "google_shoppable_images_debug",
        Og: "google_shoppable_images_cookie",
        Pg: "google_shoppable_images_forced",
        rc: "google_responsive_slot_debug",
        Hg: "google_responsive_slot_preview",
        Gg: "google_responsive_dummy_ad"
    }
      , Ki = {
        ["google_bottom_anchor_debug"]: 1,
        ["google_anchor_debug"]: 2,
        ["google_ia_debug"]: 8,
        ["google_resize_debug"]: 16,
        ["google_scr_debug"]: 9,
        ["googleads"]: 2,
        ["google_pedestal_debug"]: 30
    };
    var Li = {
        pc: 1,
        we: 2,
        gh: 3,
        Lg: 4,
        rc: 6
    };
    var Ni = (a,b)=>{
        if (!a)
            return !1;
        a = a.hash;
        if (!a || !a.indexOf)
            return !1;
        if (-1 != a.indexOf(b))
            return !0;
        b = Mi(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }
      , Mi = a=>{
        let b = "";
        T(a.split("_"), c=>{
            b += c.substr(0, 2)
        }
        );
        return b
    }
      , Oi = ()=>{
        var a = q.location;
        let b = !1;
        T(Ji, c=>{
            Ni(a, c) && (b = !0)
        }
        );
        return b
    }
      , Pi = (a,b)=>{
        switch (a) {
        case 1:
            return Ni(b, "google_ia_debug");
        case 2:
            return Ni(b, "google_bottom_anchor_debug");
        case 3:
            return Ni(b, "google_anchor_debug") || Ni(b, "googleads");
        case 4:
            return Ni(b, "google_scr_debug");
        case 6:
            return Ni(b, "google_responsive_slot_debug")
        }
        return !1
    }
    ;
    let Qi = null;
    function Ri(a) {
        Qi || (Qi = new Si(a.google_t12n_vars || {}));
        return Qi
    }
    function Ti(a, b) {
        a = parseFloat(a.j[b]);
        return a = isNaN(a) ? 0 : a
    }
    class Si {
        constructor(a) {
            this.j = a
        }
    }
    ;let Ui = null;
    var Vi = (a,b)=>{
        let c = 0
          , d = a
          , e = 0;
        for (; a && a != a.parent; )
            if (a = a.parent,
            e++,
            De(a))
                d = a,
                c = e;
            else if (b)
                break;
        return {
            win: d,
            level: c
        }
    }
      , Wi = ()=>{
        Ui || (Ui = Vi(q, !0).win);
        return Ui
    }
    ;
    class Xi extends Vh {
        constructor(a) {
            super(a);
            this.dfltBktExt = this.j;
            this.lrsExt = this.l
        }
    }
    ;function Yi() {
        var a = w()
          , b = lg(a);
        if (b)
            return (b = b || lg()) ? (a = b.pageViewId,
            b = b.clientId,
            "string" === typeof b && (a += b.replace(/\D/g, "").substr(0, 6))) : a = null,
            +a;
        a = Vi(a, !1).win;
        (b = a.google_global_correlator) || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
        return b
    }
    function Zi() {
        if ($i)
            return $i;
        const a = og() || w()
          , b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? $i = b : a.google_persistent_state_async = $i = new aj
    }
    function bj(a) {
        return cj[a] || "google_ps_" + a
    }
    function dj(a, b, c) {
        b = bj(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }
    function ej(a, b) {
        var c = dj(a, b, 0) + 1;
        return a.S[bj(b)] = c
    }
    function fj() {
        var a = Zi();
        return dj(a, 20, {})
    }
    class aj {
        constructor() {
            this.S = {}
        }
    }
    var $i = null;
    const cj = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    function gj(a, b) {
        a.j = c=>dg($f, b, ()=>[])(c, 1);
        a.l = ()=>dg(ag, b, ()=>[])(1)
    }
    class hj {
        constructor() {
            this.j = ()=>[];
            this.l = ()=>[]
        }
    }
    la(hj);
    const ij = {
        If: 5,
        rf: 7,
        Tf: 17,
        ze: 41,
        yg: 62,
        ig: 67,
        Ag: 82,
        Bg: 83,
        mg: 87,
        Le: 89,
        bf: 103,
        Kf: 106,
        oh: 107,
        zf: 108,
        Ed: 124,
        jh: 126,
        Fd: 128,
        Nf: 132,
        Yf: 138,
        lg: 139
    };
    let jj = null;
    var kj = a=>{
        try {
            return !!a && Qc(!0)
        } catch (b) {
            return !1
        }
    }
      , lj = ()=>{
        if (kj(jj))
            return !0;
        var a = Zi();
        if (a = dj(a, 3, null)) {
            if (a && a.dfltBktExt && a.lrsExt) {
                var b = new Xi;
                b.j = a.dfltBktExt;
                b.dfltBktExt = b.j;
                b.l = a.lrsExt;
                b.lrsExt = b.l;
                b.m = !0;
                a = b
            } else
                a = null;
            a || (a = new Xi,
            b = {
                context: "ps::gpes::cf",
                url: w().location.href
            },
            W("jserror", b))
        }
        return kj(a) ? (jj = a,
        !0) : !1
    }
      , mj = a=>{
        if (!lj()) {
            var b = Uh();
            a(b);
            b.m = !0
        }
    }
      , Uh = ()=>{
        if (lj())
            return jj;
        var a = Zi()
          , b = new Xi(Qe(ij));
        return jj = a.S[bj(3)] = b
    }
    ;
    let nj = null;
    var oj = ()=>{
        nj || (nj = Th());
        return nj
    }
      , pj = a=>{
        let b = hj.F().l().join();
        const c = oj();
        c && (b += (b ? "," : "") + $h(c).join());
        b && (a.eid = 50 < b.length ? b.substring(0, 50) + "T" : b)
    }
      , qj = {
        la: "618018085",
        ma: "618018086"
    }
      , rj = {
        Cb: "21060078",
        la: "21060079"
    }
      , sj = {}
      , tj = {
        NONE: "480596784",
        Pf: "480596785",
        Cf: "21063355"
    }
      , uj = {
        la: "423550200",
        ma: "423550201"
    }
      , vj = w();
    Rh = Of && !!vj.google_disable_experiments;
    var wj = (a=oj())=>Eg($h(a), b=>!!sj[b])
      , xj = (a=oj())=>Eg($h(a), b=>!sj[b]);
    var yj = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    }
      , zj = {
        [1]: 1,
        [2]: 1,
        [8]: 2,
        [27]: 3,
        [9]: 4,
        [30]: 5
    };
    function Aj(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Bj) : a.google_reactive_ads_global_state = new Cj;
        return a.google_reactive_ads_global_state
    }
    class Cj {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.improveCollisionDetection = 1;
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Bj
        }
    }
    var Bj = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    }
    ;
    var Ej = (a,b)=>{
        var c = hj.F().j(13).concat(hj.F().j(11))
          , d = a.B;
        const e = Yg(d);
        e.eids = [...e.eids || [], ...Ga(c, String)];
        Ea(Yg(d).eids || [], f=>{
            Xh(b, f)
        }
        );
        c = Ri(a.pubWin);
        Yh(b, ["551"], 0, 108);
        Zh(b, 108) && (Sf = Rf);
        d = ["42631002", "42631003"];
        Yh(b, d, Ti(c, 22), 17);
        d = ["21062174", "21062175"];
        Yh(b, d, Ti(c, 129), 126);
        d = ["26835105", "26835106"];
        Yh(b, d, Ti(c, 24), 41);
        (d = Qc("")) && Xh(b, d);
        d = qj;
        d = [d.la, d.ma];
        Yh(b, d, Ti(c, 28), 67);
        d = rj;
        d = [d.Cb, d.la];
        Yh(b, d, Ti(c, 29), 87);
        d = tj;
        d = eb(d);
        Yh(b, d, Ti(c, 126), 124);
        d = uj;
        d = [d.ma, d.la];
        Yh(b, d, Ti(c, 177), 139);
        a.j && Dj(b, c, a.j)
    }
      , Dj = (a,b,c)=>{
        const d = ["410075105", "410075106"];
        if (c = Aj(c))
            switch (Yh(a, d, Ti(b, 155), 132)) {
            case "410075105":
                c.improveCollisionDetection = 1;
                break;
            case "410075106":
                c.improveCollisionDetection = -1
            }
    }
    ;
    function Fj(a, b=q) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new Kd(b.pageXOffset || a.scrollLeft,b.pageYOffset || a.scrollTop)
    }
    function Gj(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    }
    ;var Hj = (a,b=!1)=>{
        try {
            return b ? (new Ld(a.innerWidth,a.innerHeight)).round() : Pd(a || window).round()
        } catch (c) {
            return new Ld(-12245933,-12245933)
        }
    }
      , Ij = (a,b)=>{
        var c;
        var d;
        c = (d = (d = lg()) && (c = d.initialLayoutRect) && "number" === typeof c.top && "number" === typeof c.left && "number" === typeof c.width && "number" === typeof c.height ? new hg(c.left,c.top,c.width,c.height) : null) ? new Kd(d.left,d.top) : (c = mg()) && qa(c.rootBounds) ? new Kd(c.rootBounds.left + c.boundingClientRect.left,c.rootBounds.top + c.boundingClientRect.top) : null;
        if (c)
            return c;
        try {
            var e = a.j
              , f = new Kd(0,0)
              , g = Rd(Od(b));
            if (Rc(g, "parent")) {
                a = b;
                do {
                    if (g == e)
                        var h = yg(a);
                    else {
                        var k = xg(a);
                        h = new Kd(k.left,k.top)
                    }
                    b = h;
                    f.x += b.x;
                    f.y += b.y
                } while (g && g != e && g != g.parent && (a = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (l) {
            return new Kd(-12245933,-12245933)
        }
    }
    ;
    function Jj(a) {
        L(this, a, Kj, null)
    }
    A(Jj, D);
    var Kj = [15];
    function Lj(a) {
        L(this, a, null, null)
    }
    A(Lj, D);
    function Mj(a) {
        L(this, a, null, null)
    }
    A(Mj, D);
    var Nj;
    {
        const a = parseInt("2019", 10);
        Nj = isNaN(a) ? 2012 : a
    }
    ;var Oj = (a,b,c)=>{
        if ("relative" === a)
            return b;
        c || (c = Sf ? "https" : "http");
        q.location && "https:" == q.location.protocol && "http" == c && (c = "https");
        return [c, "://", a, b].join("")
    }
      , Pj = (a,b,c)=>{
        a = Oj(a, b, c);
        2012 < Nj && (b = (b = a.match(/(__[a-z0-9_]+)\.js(?:\?|$)/)) ? b[1] : "",
        a = a.replace(new RegExp(String(`${b}.js`).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"),"g"), `_fy${Nj}${b}.js`.replace(/\$/g, "$$$$")));
        S.F().j(202, !1) && (a += (0 < a.indexOf("?") ? "&" : "?") + "cache=bust");
        return a
    }
    ;
    let Qj = null
      , Rj = null;
    var Sj = ()=>{
        if (!Of)
            return !1;
        if (null != Qj)
            return Qj;
        Qj = !1;
        try {
            const a = Vg(q);
            a && -1 != a.location.hash.indexOf("google_logging") && (Qj = !0);
            q.localStorage.getItem("google_logging") && (Qj = !0)
        } catch (a) {}
        return Qj
    }
      , Tj = (a,b=[])=>{
        let c = !1;
        q.google_logging_queue || (c = !0,
        q.google_logging_queue = []);
        q.google_logging_queue.push([a, b]);
        c && Sj() && (a = Pj(Wf(), "/pagead/js/logging_library.js"),
        He(q.document, a))
    }
    ;
    function Uj(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }
    function Vj(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }
    function Wj(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    }
    ;function Xj() {
        var a = Yj
          , b = Zj;
        if (!(window && Math.random && navigator))
            return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId())
                    return c.getOseId()
            } catch (d) {}
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            let d;
            !0 === c ? d = 2 : !1 !== c && (d = Je([0], a),
            null == d && ((d = Je([2], b)) || (d = 3)));
            if (!d)
                return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    }
    ;const ak = new ki(1,w());
    var bk = ()=>{
        const a = w();
        a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || hi(ak))
    }
    ;
    (()=>{
        const a = w();
        a && a.document && ("complete" == a.document.readyState ? bk() : ak.j && Q(a, "load", ()=>{
            bk()
        }
        ))
    }
    )();
    var ck = (a,b,c)=>{
        a && (c ? Q(a, "load", b) : de(a, "load", b))
    }
      , dk = ()=>{
        const a = (w() || q).google_osd_amcb;
        return pa(a) ? a : null
    }
      , ek = (a="/r20100101")=>(Sf ? "https:" : "http:") + "//www.googletagservices.com/activeview/js/current/osd.js?cb=" + encodeURIComponent(a);
    function za() {
        const a = w()
          , b = a.__google_ad_urls;
        if (!b)
            return a.__google_ad_urls = new fk(a);
        try {
            if (0 <= b.getOseId())
                return b
        } catch (c) {}
        try {
            return a.__google_ad_urls = new fk(a,b)
        } catch (c) {
            return a.__google_ad_urls = new fk(a)
        }
    }
    function gk(a) {
        var b = a.o ? w() : q;
        a = hk;
        b = b || q;
        b.google_osd_loaded ? a = !1 : (He(b.document, a),
        a = b.google_osd_loaded = !0);
        a && Fg()
    }
    class fk {
        constructor(a, b) {
            this.l = b && b.l ? b.l : 0;
            this.m = b ? b.m : "";
            this.j = b && b.j ? b.j : [];
            this.o = !0;
            if (b)
                for (a = 0; a < this.j.length; ++a)
                    this.j[a].o = !0
        }
        getNewBlocks(a, b) {
            let c = this.j.length;
            for (let d = 0; d < c; d++) {
                let e = this.j[d];
                !e.m && e.j && (e.m = !0,
                a(e.j, e.A, e.H, e.l, void 0, e.o, e.C, e.G, e.D))
            }
            b && ((w() || q).google_osd_amcb = a)
        }
        setupOse(a) {
            if (this.getOseId())
                return this.getOseId();
            let b = Xj();
            if (!b)
                return 0;
            this.l = b;
            this.m = String(a || 0);
            return this.getOseId()
        }
        getOseId() {
            return window && Math.random && navigator ? this.l : -1
        }
        getCorrelator() {
            return this.m
        }
        numBlocks() {
            return this.j.length
        }
        registerAdBlock(a, b, c, d, e, f, g=()=>null) {
            e = dk();
            f = ai() || -1;
            let h = q.pageYOffset;
            0 <= h || (h = -1);
            e && d ? e(d, a, b, !1, void 0, !1, g, f, h) : (c = new ik(a,b,c,d,g,f,h),
            this.j.push(c),
            ck(d, c.v, !0),
            hk || (qg("//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om" + `&rs=${b}` + `&req=${a}`),
            hk = ek("/r20190131")),
            gk(this))
        }
        unloadAdBlock(a, b=!1, c=!1) {
            const d = this.o ? w() : window;
            void 0 !== d.Goog_Osd_UnloadAdBlock && d.Goog_Osd_UnloadAdBlock(a, b);
            c && (b = yf(this.j, e=>e.j == a)) && ck(a, b.v, !1)
        }
        setLoadOsdJsOnPubWindow(a) {
            this.o = a
        }
    }
    var hk = ""
      , Zj = 0
      , Yj = 0
      , ik = class {
        constructor(a, b, c, d, e=ja, f=-1, g=-1) {
            this.A = a;
            this.H = b;
            this.j = d;
            this.o = this.m = this.l = !1;
            this.C = e;
            this.G = f;
            this.D = g;
            this.v = ()=>this.l = !0
        }
    }
    ;
    da("Goog_AdSense_getAdAdapterInstance", za, void 0);
    da("Goog_AdSense_OsdAdapter", fk, void 0);
    function jk() {
        let a = w();
        const b = a.__google_ad_urls;
        return b ? b : a.__google_ad_urls = new kk
    }
    class kk {
        constructor() {}
        getNewBlocks() {}
        setupOse() {}
        getOseId() {
            return -1
        }
        getCorrelator() {
            return ""
        }
        numBlocks() {
            return 0
        }
        registerAdBlock() {}
        unloadAdBlock() {}
        setLoadOsdJsOnPubWindow() {}
    }
    ;var lk = (a,b,c,d)=>{
        c = c || a.google_ad_width;
        d = d || a.google_ad_height;
        if (a && a.top == a)
            return !1;
        const e = b.documentElement;
        if (c && d) {
            let f = 1
              , g = 1;
            a.innerHeight ? (f = a.innerWidth,
            g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth,
            g = e.clientHeight) : b.body && (f = b.body.clientWidth,
            g = b.body.clientHeight);
            if (g > 2 * d || f > 2 * c)
                return !1
        }
        return !0
    }
      , mk = (a,b)=>{
        T(a, (c,d)=>{
            b[d] = c
        }
        )
    }
      , nk = a=>{
        let b = a.location.href;
        if (a == a.top)
            return {
                url: b,
                ob: !0
            };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer,
        a.parent == a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1,
        b = a);
        return {
            url: b,
            ob: c
        }
    }
      , ok = ()=>{
        var a = w();
        if (a == a.top)
            return 0;
        for (; a && a != a.top && De(a); a = a.parent) {
            if (a.sf_)
                return 2;
            if (a.$sf)
                return 3;
            if (a.inGptIF)
                return 4;
            if (a.inDapIF)
                return 5
        }
        return 1
    }
    ;
    var pk = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    }
      , qk = /(corp|borg)\.google\.com:\d+$/;
    var rk = 728 * 1.38
      , sk = (a,b=420)=>(a = X(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
      , tk = a=>{
        var b = X(a).clientWidth;
        a = a.innerWidth;
        return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
    }
      , vk = a=>Math.max(0, uk(a, !0) - X(a).clientHeight)
      , X = a=>{
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }
      , uk = (a,b)=>{
        const c = X(a);
        return b ? c.scrollHeight == X(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
    }
      , wk = (a,b)=>a.adCount ? 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) && 27 != b && 26 != b ? 1 <= a : !1 : !1
      , xk = (a,b)=>a && a.source ? a.source === b || a.source.parent === b : !1
      , yk = a=>void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
      , zk = a=>void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
      , Ak = a=>{
        const b = {};
        let c;
        oa(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key"in d && "value"in d) {
                    const e = d.value;
                    b[d.key] = null == e ? null : String(e)
                }
            }
        return b
    }
      , Bk = (a,b,c,d,e)=>{
        Ph(c, b, {
            c: e.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }
    ;
    var Ck = a=>{
        a = a.google_reactive_ad_format;
        return cb(a) ? "" + a : null
    }
      , Dk = a=>!!Ck(a) || null != a.google_pgb_reactive
      , Ek = a=>{
        a = Ck(a);
        return 26 == a || 27 == a || 30 == a || 16 == a
    }
    ;
    const Fk = a=>{
        const b = /[a-zA-Z0-9._~-]/
          , c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b))
                    return e
            }
            return d.toUpperCase()
        })
    }
      , Gk = a=>{
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    }
    ;
    function Hk(a) {
        L(this, a, Ik, null)
    }
    A(Hk, D);
    function Jk(a) {
        L(this, a, null, null)
    }
    A(Jk, D);
    function Kk(a) {
        L(this, a, null, null)
    }
    A(Kk, D);
    var Ik = [3];
    function Lk(a) {
        L(this, a, Mk, null)
    }
    A(Lk, D);
    var Mk = [2];
    function Nk(a) {
        L(this, a, null, null)
    }
    A(Nk, D);
    function Ok(a) {
        L(this, a, Pk, null)
    }
    A(Ok, D);
    var Pk = [1];
    function Qk(a) {
        L(this, a, Rk, null)
    }
    A(Qk, D);
    var Rk = [4];
    function Sk(a) {
        L(this, a, null, null)
    }
    A(Sk, D);
    Sk.prototype.N = function() {
        return O(this, Qk, 1)
    }
    ;
    Sk.prototype.l = function() {
        return N(this, 2)
    }
    ;
    function Tk(a) {
        L(this, a, null, Uk)
    }
    A(Tk, D);
    function Vk(a) {
        L(this, a, null, null)
    }
    A(Vk, D);
    function Wk(a) {
        L(this, a, null, null)
    }
    A(Wk, D);
    function Xk(a) {
        L(this, a, null, null)
    }
    A(Xk, D);
    var Uk = [[1, 2, 3]];
    function Yk(a) {
        L(this, a, null, null)
    }
    A(Yk, D);
    function Zk(a) {
        L(this, a, $k, null)
    }
    A(Zk, D);
    function al(a) {
        L(this, a, bl, null)
    }
    A(al, D);
    var $k = [2]
      , bl = [2];
    function cl(a) {
        L(this, a, dl, null)
    }
    A(cl, D);
    var dl = [4];
    function el(a) {
        L(this, a, null, fl)
    }
    A(el, D);
    var fl = [[1, 2]];
    function gl(a) {
        L(this, a, hl, null)
    }
    A(gl, D);
    var hl = [1, 2];
    function il(a) {
        L(this, a, jl, null)
    }
    A(il, D);
    var jl = [2];
    function kl(a) {
        L(this, a, null, null)
    }
    A(kl, D);
    function ll(a) {
        L(this, a, null, null)
    }
    A(ll, D);
    function ml(a) {
        L(this, a, nl, null)
    }
    A(ml, D);
    function ol(a) {
        L(this, a, null, null)
    }
    A(ol, D);
    var nl = [1];
    function pl(a) {
        L(this, a, ql, null)
    }
    A(pl, D);
    var ql = [3, 4];
    function rl(a) {
        L(this, a, null, null)
    }
    A(rl, D);
    function sl(a) {
        L(this, a, null, null)
    }
    A(sl, D);
    function tl() {
        var a = new sl;
        return od(a, 2, 1)
    }
    ;function ul(a) {
        L(this, a, vl, null)
    }
    A(ul, D);
    var vl = [6, 7, 9, 10, 11];
    ul.prototype.N = function() {
        return O(this, Qk, 1)
    }
    ;
    ul.prototype.l = function() {
        return N(this, 2)
    }
    ;
    function wl(a) {
        L(this, a, null, null)
    }
    A(wl, D);
    function xl(a) {
        L(this, a, null, null)
    }
    A(xl, D);
    function yl(a) {
        L(this, a, zl, null)
    }
    A(yl, D);
    var zl = [2];
    function Al(a) {
        L(this, a, Bl, null)
    }
    A(Al, D);
    function Cl(a) {
        L(this, a, null, null)
    }
    A(Cl, D);
    function Dl(a) {
        L(this, a, El, null)
    }
    A(Dl, D);
    function Fl(a) {
        L(this, a, null, null)
    }
    A(Fl, D);
    function Gl(a) {
        L(this, a, null, null)
    }
    A(Gl, D);
    function Hl(a) {
        L(this, a, null, null)
    }
    A(Hl, D);
    function Il(a) {
        L(this, a, null, null)
    }
    A(Il, D);
    function Jl(a) {
        L(this, a, null, null)
    }
    A(Jl, D);
    function Kl(a) {
        L(this, a, null, null)
    }
    A(Kl, D);
    var Bl = [1, 2, 5, 7]
      , El = [2, 5, 6, 11];
    function Ll(a) {
        return O(a, Hl, 13)
    }
    function Ml(a) {
        return O(a, Jl, 15)
    }
    ;var Nl = (a,b)=>{
        a = N(a, 2);
        if (!a)
            return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b)
                return !0;
        return !1
    }
    ;
    const Pl = (a,b)=>{
        a = Gk(Fk(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = Re(a)
          , d = Ol(a);
        return b.find(e=>{
            const f = null != N(e, 7) ? N(O(e, Fl, 7), 1) : N(e, 1);
            e = null != N(e, 7) ? N(O(e, Fl, 7), 2) : 2;
            if ("number" !== typeof f)
                return !1;
            switch (e) {
            case 1:
                return f == c;
            case 2:
                return d[f] || !1
            }
            return !1
        }
        ) || null
    }
      , Ol = a=>{
        const b = {};
        for (; ; ) {
            b[Re(a)] = !0;
            if (!a)
                return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    }
    ;
    function Ql(a) {
        const b = [].slice.call(arguments).filter(Xa(e=>null === e));
        if (!b.length)
            return null;
        let c = []
          , d = {};
        b.forEach(e=>{
            c = c.concat(e.Jb || []);
            d = Object.assign(d, e.Yb)
        }
        );
        return new Rl(c,d)
    }
    function Sl(a) {
        switch (a) {
        case 1:
            return new Rl(null,{
                google_ad_semantic_area: "mc"
            });
        case 2:
            return new Rl(null,{
                google_ad_semantic_area: "h"
            });
        case 3:
            return new Rl(null,{
                google_ad_semantic_area: "f"
            });
        case 4:
            return new Rl(null,{
                google_ad_semantic_area: "s"
            });
        default:
            return null
        }
    }
    class Rl {
        constructor(a, b) {
            this.Jb = a;
            this.Yb = b
        }
    }
    ;const Tl = {
        ["google_ad_channel"]: !0,
        ["google_ad_host"]: !0
    };
    var Ul = (a,b)=>{
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        W("ama", b, .01)
    }
      , Vl = a=>{
        const b = {};
        Ne(Tl, (c,d)=>{
            d in a && (b[d] = a[d])
        }
        );
        return b
    }
    ;
    var Yl = (a,b)=>{
        const c = new Wl(a,1E3,b);
        return ()=>Xl(c)
    }
    ;
    function Xl(a) {
        if (a.j)
            return !1;
        if (null == a.l)
            return Zl(a),
            !0;
        const b = a.l + a.o - (new Date).getTime();
        if (1 > b)
            return Zl(a),
            !0;
        $l(a, b);
        return !0
    }
    function Zl(a) {
        a.l = (new Date).getTime();
        a.m()
    }
    function $l(a, b) {
        a.j = !0;
        a.v.setTimeout(()=>{
            a.j = !1;
            Zl(a)
        }
        , b)
    }
    class Wl {
        constructor(a, b, c) {
            this.v = a;
            this.o = b;
            this.m = c;
            this.l = null;
            this.j = !1
        }
    }
    ;function am(a, b) {
        a.v ? b() : a.l.push(b)
    }
    function bm(a) {
        a.v = !0;
        a.l.forEach(b=>{
            b()
        }
        );
        a.l = []
    }
    class cm {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.v = !1;
            this.o = null;
            this.A = Yl(a, ()=>{
                null != this.o && this.o + 1E3 < uk(this.j, !0) && bm(this)
            }
            );
            this.m = null
        }
        O(a) {
            null == a ? (this.o = uk(this.j, !0),
            this.j.addEventListener("scroll", this.A)) : this.m = this.j.setTimeout(()=>{
                this.O()
            }
            , a)
        }
        Oa() {
            null != this.m && this.j.clearTimeout(this.m);
            this.j.removeEventListener("scroll", this.A);
            this.l = []
        }
    }
    ;function dm() {
        this.j = {};
        this.l = {}
    }
    dm.prototype.set = function(a, b) {
        this.j[a] = b;
        this.l[a] = a
    }
    ;
    dm.prototype.get = function(a, b) {
        return void 0 !== this.j[a] ? this.j[a] : b
    }
    ;
    function em(a) {
        var b = [], c;
        for (c in a.j)
            void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }
    function fm(a) {
        var b = [], c;
        for (c in a.j)
            void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    ;function gm(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }
    function hm(a) {
        a = Ga(a, b=>new fg(b.top,b.right,b.bottom,b.left));
        a = im(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }
    function im(a) {
        if (!a.length)
            throw Error("pso:box:m:nb");
        return Ia(a.slice(1), (b,c)=>{
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }
        , a[0].clone())
    }
    ;function jm(a, b, c) {
        this.m = a;
        this.j = b;
        this.l = c
    }
    function km(a, b, c) {
        return {
            top: a.j - c,
            right: a.m + a.l + b,
            bottom: a.j + c,
            left: a.m - b
        }
    }
    ;class lm {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.m = c
        }
    }
    ;class mm {
        constructor(a) {
            this.j = a
        }
        O() {
            const a = this.j.document.createElement("SCRIPT");
            a.src = "//www.google.com/adsense/search/ads.js";
            a.setAttribute("async", "async");
            this.j.document.head.appendChild(a);
            (function(b, c) {
                b[c] = b[c] || function() {
                    (b[c].q = b[c].q || []).push(arguments)
                }
                ;
                b[c].t = 1 * new Date
            }
            )(this.j, "_googCsa")
        }
    }
    ;class nm {
        j() {}
    }
    ;function om(a, b) {
        pm(a).forEach(b, void 0)
    }
    function pm(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    ;function qm(a, b, c, d) {
        this.o = a;
        this.l = b;
        this.m = c;
        this.j = d
    }
    function rm(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.o)
        } catch (g) {}
        if (!c.length)
            return [];
        b = Oa(c);
        b = sm(a, b);
        "number" === typeof a.l && (c = a.l,
        0 > c && (c += b.length),
        b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.m) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = tm(b[d])
                  , f = a.m;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    qm.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.o,
            occurrenceIndex: this.l,
            paragraphIndex: this.m,
            ignoreMode: this.j
        })
    }
    ;
    function sm(a, b) {
        if (null == a.j)
            return b;
        switch (a.j) {
        case 1:
            return b.slice(1);
        case 2:
            return b.slice(0, b.length - 1);
        case 3:
            return b.slice(1, b.length - 1);
        case 0:
            return b;
        default:
            throw Error("Unknown ignore mode: " + a.j);
        }
    }
    function tm(a) {
        var b = [];
        om(a.getElementsByTagName("p"), function(c) {
            100 <= um(c) && b.push(c)
        });
        return b
    }
    function um(a) {
        if (3 == a.nodeType)
            return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName)
            return 0;
        var b = 0;
        om(a.childNodes, function(c) {
            b += um(c)
        });
        return b
    }
    function vm(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }
    ;var wm = (a,b)=>{
        try {
            const c = b.document.documentElement.getBoundingClientRect()
              , d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }
      , xm = (a,b)=>!!a.google_ad_resizable && !a.google_reactive_ad_format && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && Qg(b) == b
      , ym = (a,b,c)=>{
        a = a.style;
        "rtl" == b ? S.F().j(251, !1) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : S.F().j(251, !1) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
    }
    ;
    const zm = (a,b,c)=>{
        a = wm(b, a);
        return "rtl" == c ? -a.x : a.x
    }
    ;
    function Am(a) {
        if (1 != a.nodeType)
            var b = !1;
        else if (b = "INS" == a.tagName)
            a: {
                b = ["adsbygoogle-placeholder"];
                a = a.className ? a.className.split(/\s+/) : [];
                for (var c = {}, d = 0; d < a.length; ++d)
                    c[a[d]] = !0;
                for (d = 0; d < b.length; ++d)
                    if (!c[b[d]]) {
                        b = !1;
                        break a
                    }
                b = !0
            }
        return b
    }
    function Bm(a) {
        return pm(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    }
    ;function Cm(a, b) {
        a = $d(new Nd(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }
    function Dm(a, b, c) {
        switch (c) {
        case 0:
            b.parentNode && b.parentNode.insertBefore(a, b);
            break;
        case 3:
            if (c = b.parentNode) {
                var d = b.nextSibling;
                if (d && d.parentNode != c)
                    for (; d && 8 == d.nodeType; )
                        d = d.nextSibling;
                c.insertBefore(a, d)
            }
            break;
        case 1:
            b.insertBefore(a, b.firstChild);
            break;
        case 2:
            b.appendChild(a)
        }
        Am(b) && (b.setAttribute("data-init-display", b.style.display),
        b.style.display = "block")
    }
    function Em(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Am(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    }
    ;var Gm = (a,b,c,d=0)=>{
        var e = Fm(b, c, d);
        if (e.O) {
            for (c = b = e.O; c = e.Qa(c); )
                b = c;
            e = {
                anchor: b,
                position: e.Wa
            }
        } else
            e = {
                anchor: b,
                position: c
            };
        a["google-ama-order-assurance"] = d;
        Dm(a, e.anchor, e.position)
    }
      , Hm = (a,b,c,d=0)=>{
        S.F().j(313, !1) ? Gm(a, b, c, d) : Dm(a, b, c)
    }
    ;
    function Fm(a, b, c) {
        const d = f=>{
            f = Im(f);
            return f = null == f ? !1 : c < f
        }
          , e = f=>{
            f = Im(f);
            return f = null == f ? !1 : c > f
        }
        ;
        switch (b) {
        case 0:
            return {
                O: Jm(a.previousSibling, d),
                Qa: f=>Jm(f.previousSibling, d),
                Wa: 0
            };
        case 2:
            return {
                O: Jm(a.lastChild, d),
                Qa: f=>Jm(f.previousSibling, d),
                Wa: 0
            };
        case 3:
            return {
                O: Jm(a.nextSibling, e),
                Qa: f=>Jm(f.nextSibling, e),
                Wa: 3
            };
        case 1:
            return {
                O: Jm(a.firstChild, e),
                Qa: f=>Jm(f.nextSibling, e),
                Wa: 3
            }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }
    function Im(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }
    function Jm(a, b) {
        return a && b(a) ? a : null
    }
    ;function Km(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c]
              , e = Oc(d.ub);
            a[e] = d.value
        }
    }
    function Lm(a, b, c, d, e, f) {
        var g = Cm(a, e.clearBoth || !1)
          , h = g.style;
        h.textAlign = "center";
        e.Va && Km(h, e.Va);
        a = $d(new Nd(a), "INS");
        h = a.style;
        h.display = "block";
        h.margin = "auto";
        h.backgroundColor = "transparent";
        e.Bb && (h.marginTop = e.Bb);
        e.bb && (h.marginBottom = e.bb);
        e.pa && Km(h, e.pa);
        g.appendChild(a);
        e = {
            ua: g,
            ba: a
        };
        e.ba.setAttribute("data-ad-format", d ? d : "auto");
        Mm(e, b, c, f);
        return e
    }
    function Mm(a, b, c, d) {
        var e = [];
        if (d = d && d.Jb)
            a.ua.className = d.join(" ");
        a = a.ba;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }
    function Nm(a, b, c) {
        b.setAttribute("data-adsbygoogle-status", "reserved");
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.Yb;
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }
    function Om(a) {
        var b = Bm(a.document);
        Ea(b, function(c) {
            var d = Pm(a, c), e;
            if (e = d)
                e = (e = wm(c, a)) ? e.y : 0,
                e = !(e < X(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)),
            c.removeAttribute("height"),
            c.style.removeProperty("height"),
            c.removeAttribute("width"),
            c.style.removeProperty("width"),
            Nm(a, c))
        })
    }
    function Pm(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b])
            return null;
        a = a[b];
        b = {};
        for (let c in oe)
            a[oe[c]] && (b[oe[c]] = a[oe[c]]);
        return b
    }
    ;function Qm(a) {
        if (!a)
            return null;
        var b = N(a, 7);
        if (N(a, 1) || N(a, 3) || 0 < N(a, 4).length) {
            var c = N(a, 3)
              , d = N(a, 1)
              , e = N(a, 4);
            b = N(a, 2);
            var f = N(a, 5);
            a = Rm(N(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + vm(c));
            if (e)
                for (c = 0; c < e.length; c++)
                    g += "." + vm(e[c]);
            b = (e = g) ? new qm(e,b,f,a) : null
        } else
            b = b ? new qm(b,N(a, 2),N(a, 5),Rm(N(a, 6))) : null;
        return b
    }
    var Sm = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };
    function Rm(a) {
        return null == a ? a : Sm[a]
    }
    function Tm(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = N(a[c], 1)
              , e = N(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.ub = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }
    function Um(a, b) {
        var c = {};
        a && (c.Bb = N(a, 1),
        c.bb = N(a, 2),
        c.clearBoth = !!qd(a, 3));
        b && (c.Va = Tm(P(b, Yk, 3)),
        c.pa = Tm(P(b, Yk, 4)));
        return c
    }
    var Vm = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    }
      , Wm = {
        0: 1,
        1: 2,
        2: 3,
        3: 4
    };
    function Xm(a) {
        return S.F().j(295, !1) ? X(a).scrollHeight : uk(a, !0)
    }
    ;class Ym extends nm {
        constructor(a, b) {
            super();
            this.m = a;
            this.l = b
        }
        j() {
            const a = Qm(this.l);
            return a ? rm(a, this.m.document).map(b=>b.textContent).filter(b=>!!b) : []
        }
    }
    ;class Zm extends nm {
        constructor(a, b) {
            super();
            this.m = a;
            this.l = b
        }
        j() {
            return (new URL(this.l)).searchParams.getAll(this.m)
        }
    }
    ;function $m(a, b) {
        return b.map(c=>{
            {
                const d = O(c, Qk, 1);
                if (d)
                    c = new Ym(a.l,d);
                else if (c = N(c, 2))
                    c = new Zm(c,a.j);
                else
                    throw Error("Unable to get extractor for SearchQueryIdentifier");
            }
            return c
        }
        )
    }
    class an {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    ;class bn {
        constructor(a, b, c) {
            this.m = a;
            this.l = b;
            this.j = c
        }
        N() {
            return this.m
        }
        Ra() {
            return this.j.l
        }
    }
    ;function cn(a, b, c) {
        a.l.push(b);
        a.j.push(c)
    }
    function dn(a) {
        if (!a.j.length)
            return null;
        const b = a.j.reduce((d,e)=>Math.min(d, e.left), Number.MAX_VALUE)
          , c = a.j.reduce((d,e)=>Math.max(d, e.right), Number.MIN_VALUE);
        a = a.j.reduce((d,e)=>Math.max(d, e.bottom), Number.MIN_VALUE);
        return new jm(b,a,c - b)
    }
    class en {
        constructor() {
            this.l = [];
            this.j = []
        }
    }
    function fn(a) {
        return 2 != a.length ? !1 : !!a[0].parentElement && !!a[1].parentElement && a[0].parentElement == a[1].parentElement
    }
    function gn(a, b) {
        return a.length ? b(a) ? a : a.every(c=>!!c.parentElement) ? gn(a.map(c=>c.parentElement), b) : null : null
    }
    ;function hn(a) {
        const b = X(a.j).clientHeight || 0;
        return jn(a, c=>{
            c = c.j;
            var d;
            if (d = c.j >= b) {
                d = a.o;
                a: {
                    for (e of d.j)
                        if (gm(km(c, d.l, d.m), e)) {
                            var e = !0;
                            break a
                        }
                    e = !1
                }
                d = !e
            }
            return d
        }
        )
    }
    function kn(a, b) {
        var c = O(a.m, Zk, 2);
        if (!c)
            return null;
        var d = N(c, 1);
        if (!d)
            return null;
        var e = a.j.document.createElement(d);
        Km(e.style, Tm(P(c, Yk, 2)));
        e.style.width = b.Ra() + "px";
        d = a.j.document.createElement("div");
        e.appendChild(d);
        e = [e];
        if (c = O(c, al, 3)) {
            var f = N(c, 1);
            f ? (a = a.j.document.createElement(f),
            Km(a.style, Tm(P(c, Yk, 2)))) : a = null
        } else
            a = null;
        if (a)
            switch (b.l) {
            case 0:
            case 3:
                e.push(a);
                break;
            case 1:
            case 2:
                e.unshift(a)
            }
        return {
            elements: e,
            container: d
        }
    }
    function ln(a) {
        const b = hn(a);
        if (!b)
            return null;
        a = kn(a, b);
        if (!a)
            return null;
        a.elements.forEach(c=>{
            Dm(c, b.N(), b.l)
        }
        );
        return a.container
    }
    function jn(a, b) {
        const c = mn(a);
        for (let f = 0; f < c.length; ++f) {
            a: {
                var d = f;
                var e = c.length;
                const g = N(a.m, 4);
                for (let h = 0; h < g.length; ++h)
                    switch (g[h]) {
                    case 1:
                        if (d < e - 1) {
                            d = !0;
                            break a
                        }
                        break;
                    case 2:
                        if (d == e - 1) {
                            d = !0;
                            break a
                        }
                    }
                d = !1
            }
            if (d && (d = c[f + 1] || c[f - 1]) && (e = c[f],
            e = e.l.length ? e.l[e.l.length - 1] : null,
            d = d.l[0] || null,
            d = e && d ? (d = gn([e, d], fn)) ? d[0] : null : null,
            d && (e = dn(c[f]))) && (d = new bn(d,3,e),
            b(d)))
                return d
        }
        return null
    }
    function mn(a) {
        if (0 == a.l.length)
            return [];
        const b = a.l.map(d=>d.getBoundingClientRect())
          , c = [new en];
        cn(c[0], a.l[0], b[0]);
        for (let d = 1; d < b.length; ++d)
            nn(b[d - 1], b[d]) || c.push(new en),
            cn(c[c.length - 1], a.l[d], b[d]);
        return c
    }
    class on {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.o = b;
            this.v = c;
            this.m = d;
            this.l = e.slice(0)
        }
    }
    function nn(a, b) {
        return a.top < b.bottom && b.top < a.bottom
    }
    ;function pn(a, b, c) {
        return gm({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }
    function qn(a) {
        if (!a.length)
            return null;
        const b = hm(a.map(c=>c.j));
        a = a.reduce((c,d)=>c + d.l, 0);
        return new rn(b,a)
    }
    class rn {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    }
    ;var xn = (a,b)=>{
        const c = Oa(b.document.querySelectorAll(".google-auto-placed"))
          , d = sn(b)
          , e = tn(b)
          , f = un(b)
          , g = vn(b)
          , h = Oa(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
          , k = Oa(b.document.querySelectorAll("div.googlepublisherpluginad"));
        let l = Oa(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")).concat(Oa(b.document.querySelectorAll("ins.adsbygoogle")));
        b = [];
        for (const [p,t] of [[a.va, c], [a.ga, d], [a.$c, e], [a.wa, f], [a.xa, g], [a.Yc, h], [a.Zc, k]])
            a = t,
            !1 === p ? b = b.concat(a) : l = l.concat(a);
        var m;
        a = wn(l);
        b = wn(b);
        a = a.slice(0);
        for (m of b)
            for (b = 0; b < a.length; b++)
                (m.contains(a[b]) || a[b].contains(m)) && a.splice(b, 1);
        return m = a
    }
    ;
    const yn = a=>{
        try {
            return Fa(Ga(a.googletag.pubads().getSlots(), b=>a.document.getElementById(b.getSlotElementId())), b=>null != b)
        } catch (b) {}
        return null
    }
      , sn = a=>Oa(a.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]'))
      , tn = a=>Oa(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"))
      , un = a=>(yn(a) || Oa(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Oa(a.document.querySelectorAll("iframe[id^=google_ads_iframe]")))
      , vn = a=>Oa(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var wn = a=>{
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    }
    ;
    var zn = V(453, xn)
      , An = V(454, (a,b)=>{
        const c = Oa(b.document.querySelectorAll(".google-auto-placed"))
          , d = sn(b)
          , e = tn(b)
          , f = un(b)
          , g = vn(b)
          , h = Oa(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
        b = Oa(b.document.querySelectorAll("div.googlepublisherpluginad"));
        return wn((!0 === a.va ? c : []).concat(!0 === a.ga ? d : [], !0 === a.$c ? e : [], !0 === a.wa ? f : [], !0 === a.xa ? g : [], !0 === a.Yc ? h : [], !0 === a.Zc ? b : []))
    }
    );
    function Bn(a, b, c) {
        const d = Cn(a);
        b = Dn(d, b, c);
        return new En(a,d,b)
    }
    function Fn(a) {
        return a.j.map(b=>b.sa)
    }
    function Mn(a) {
        return a.j.reduce((b,c)=>b + c.sa.bottom - c.sa.top, 0)
    }
    class En {
        constructor(a, b, c) {
            this.o = a;
            this.j = b.slice(0);
            this.m = c.slice(0);
            this.l = null
        }
    }
    function Cn(a) {
        const b = zn({
            ga: !1
        }, a)
          , c = zk(a)
          , d = yk(a);
        return b.map(e=>{
            var f = e.getBoundingClientRect();
            return f = (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || 1 < (f.bottom - f.top) * (f.right - f.left) ? {
                sa: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                rh: e ? 1 : 0
            } : null
        }
        ).filter(Xa(e=>null === e))
    }
    function Dn(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? so(a, b) : Ga(a, d=>new rn(d.sa,1))
    }
    function so(a, b) {
        a = Ga(a, d=>new rn(d.sa,1));
        const c = [];
        for (; 0 < a.length; ) {
            let d = a.pop()
              , e = !0;
            for (; e; ) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (pn(d, a[f], b)) {
                        d = qn([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    }
    ;function to(a) {
        const b = [];
        P(a.j, gl, 2).forEach(c=>{
            Pa(b, uo(a, c))
        }
        );
        return b
    }
    function uo(a, b) {
        let c = vo(a, b);
        if (!c)
            return [];
        const d = N(b, 3);
        d && (c = d.replace("%s", c));
        const e = [];
        P(b, cl, 1).forEach(f=>{
            var g;
            g = (g = O(f, Qk, 1)) ? (g = Qm(g)) ? rm(g, a.l.document) : [] : [];
            g.length && e.push(new on(a.l,a.o,c,f,g))
        }
        );
        return e
    }
    function vo(a, b) {
        a = $m(new an(a.l,a.v), P(b, el, 2));
        return [].concat.apply([], a.map(c=>c.j())).filter(c=>!!c)[0] || null
    }
    class wo {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.v = b;
            this.j = c;
            this.m = d;
            this.o = e
        }
    }
    ;function xo(a) {
        L(this, a, null, null)
    }
    A(xo, D);
    function yo(a) {
        L(this, a, null, null)
    }
    A(yo, D);
    function zo(a) {
        L(this, a, null, null)
    }
    A(zo, D);
    function Ao(a) {
        L(this, a, Bo, null)
    }
    A(Ao, D);
    var Bo = [5];
    function Co(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? zd(Ao, b) : null
        } catch (b) {
            return null
        }
    }
    function Do(a, b) {
        if (void 0 !== a.ta || void 0 !== a.Pa || void 0 !== a.ab || void 0 !== a.$a) {
            {
                let c = Co(b);
                c || (c = new Ao);
                void 0 !== a.ta && od(c, 2, a.ta);
                void 0 !== a.Pa && od(c, 8, a.Pa);
                void 0 !== a.ab && xd(c, a.ab);
                void 0 !== a.$a && vd(c, 6, a.$a);
                od(c, 1, +new Date + 864E5);
                a = c.C();
                try {
                    b.localStorage.setItem("google_ama_settings", a)
                } catch (d) {}
            }
        } else if ((a = Co(b)) && N(a, 1) < +new Date)
            try {
                b.localStorage.removeItem("google_ama_settings")
            } catch (c) {}
    }
    ;const Eo = ["-webkit-text-fill-color"];
    function Fo(a) {
        if (Xc) {
            {
                const c = Ie(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d)
                        a[c[d]] = "initial";
                    a = Go(a)
                } else
                    a = Ho()
            }
        } else
            a = Ho();
        return a
    }
    var Ho = ()=>{
        const a = {
            all: "initial"
        };
        Ea(Eo, b=>{
            a[b] = "unset"
        }
        );
        return a
    }
    ;
    function Go(a) {
        Ea(Eo, b=>{
            delete a[b]
        }
        );
        return a
    }
    ;var Io = a=>{
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0;
            {
                const f = Math.min(a.screen.width || 0, a.screen.height || 0);
                var c = f ? 320 > f ? 8192 : 0 : 2048
            }
            b |= c;
            var d;
            if (d = a.navigator) {
                var e = a.navigator.userAgent;
                d = /Firefox/.test(e) || /Android 2/.test(e) || /iPhone OS [34]_/.test(e) || /Windows Phone (?:OS )?[67]/.test(e)
            }
            b |= d ? 1048576 : 0
        } catch (f) {
            b |= 32
        }
        return b
    }
      , Lo = (a,b)=>{
        let c = 0;
        try {
            c |= a.innerHeight >= a.innerWidth ? 0 : 8,
            c |= sk(a, rk),
            c |= tk(a)
        } catch (e) {
            c |= 32
        }
        if (b = 2 == b) {
            var d = a.innerWidth;
            b = Aj(a).improveCollisionDetection;
            d = Jo(d, 0, Math.round(a.innerWidth / 320 * 50 + 15));
            b = null != Ko(a, d, b)
        }
        b && !S.F().j(269, !1) && (c |= 16777216);
        return c
    }
      , Mo = a=>{
        const b = a.innerWidth
          , c = a.innerHeight;
        let d = c;
        for (; 100 < d; ) {
            var e = Jo(b, d - 100, d);
            e = Ko(a, e, 1);
            if (!e)
                return c - d;
            d = e.getBoundingClientRect().top - 1
        }
        return null
    }
      , Ko = (a,b,c)=>{
        for (let k = 0; k < b.length; k++) {
            a: {
                var d = a;
                var e = b[k]
                  , f = c
                  , g = d.document;
                g.elementFromPoint(e.x, e.y);
                var h = e.x;
                e = e.y;
                g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, e));
                if (e = g.elementFromPoint(h, e))
                    if ("fixed" == wg(e))
                        d = e;
                    else {
                        if (1 == f) {
                            b: {
                                d = d.document;
                                for (f = e.offsetParent; f && f != d.body; f = f.offsetParent)
                                    if ("fixed" == wg(f)) {
                                        d = f;
                                        break b
                                    }
                                d = null
                            }
                            if (d)
                                break a
                        }
                        d = null
                    }
                else
                    d = null
            }
            if (d)
                return d
        }
        return null
    }
      , Jo = (a,b,c)=>{
        const d = [];
        for (let e = 0; 3 > e; e++)
            for (let f = 0; 3 > f; f++)
                d.push({
                    x: f / 2 * a,
                    y: b + e / 2 * (c - b)
                });
        return d
    }
    ;
    function No(a) {
        if (a.l && "none" != a.l.style.display) {
            const b = yk(a.j);
            if (b > a.m + 100 || b < a.m - 100)
                a.l && uf(a.l, {
                    display: "none"
                }),
                a.m = vk(a.j)
        }
        a.o && a.j.clearTimeout(a.o);
        a.o = a.j.setTimeout(()=>Oo(a), 200)
    }
    function Oo(a) {
        var b = vk(a.j);
        a.m && a.m > b && (a.m = b);
        b = yk(a.j);
        b >= a.m - 100 && (a.m = Math.max(a.m, b),
        a.l || (a.l = Po(a)),
        uf(a.l, {
            display: "block"
        }))
    }
    function Qo(a) {
        a.l && a.l.parentNode && a.l.parentNode.removeChild(a.l);
        a.l = null;
        a.j.removeEventListener("scroll", a.A)
    }
    function Po(a) {
        const b = a.j.document.createElement("ins");
        Ro(a, b);
        uf(b, {
            display: "inline-flex",
            padding: "8px 16px",
            "background-color": "#FFF",
            "border-radius": "20px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)"
        });
        var c = a.j.document.createElement("img");
        Fc(c, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg");
        Ro(a, c);
        uf(c, {
            margin: "0px 8px 0px 0px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        c.addEventListener("click", f=>{
            a.v();
            f.stopPropagation()
        }
        );
        var d = a.j.document.createElement("span");
        Ro(a, d);
        uf(d, {
            "line-height": "24px",
            cursor: "pointer"
        });
        d.appendChild(a.j.document.createTextNode(a.C));
        d.addEventListener("click", f=>{
            a.v();
            f.stopPropagation()
        }
        );
        const e = a.j.document.createElement("img");
        Fc(e, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg");
        e.setAttribute("aria-label", a.D);
        Ro(a, e);
        uf(e, {
            margin: "0px 0px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f=>{
            Qo(a);
            f.stopPropagation()
        }
        );
        b.appendChild(c);
        b.appendChild(d);
        b.appendChild(e);
        c = Mo(a.j);
        d = a.j.document.createElement("div");
        d.className = "google-revocation-link-placeholder";
        uf(d, {
            position: "fixed",
            left: "0px",
            bottom: (null == c ? 30 : c + 30) + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none"
        });
        d.appendChild(b);
        a.j.document.body.appendChild(d);
        return d
    }
    function Ro(a, b) {
        uf(b, Fo(a.j));
        uf(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    }
    class So {
        constructor(a, b, c, d) {
            this.j = a;
            this.C = b;
            this.D = c;
            this.v = d;
            this.l = null;
            this.m = 0;
            this.o = null;
            this.A = ()=>No(this)
        }
        O() {
            this.j.addEventListener("scroll", this.A);
            this.m = vk(this.j);
            Oo(this)
        }
    }
    ;var To = a=>{
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0,
            b |= a.getComputedStyle ? 0 : 2097152,
            b |= sk(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    }
      , Uo = a=>{
        if (460 <= a)
            return a = Math.min(a, 1200),
            Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    }
    ;
    function Vo() {}
    Vo.prototype.l = function(a, b, c, d) {
        return Lm(d.document, a, null, null, {}, b)
    }
    ;
    Vo.prototype.m = function(a) {
        return Uo(Math.min(a.screen.width || 0, a.screen.height || 0))
    }
    ;
    function Wo(a) {
        this.j = a
    }
    Wo.prototype.l = function(a, b, c, d) {
        return Lm(d.document, a, null, null, this.j, b)
    }
    ;
    Wo.prototype.m = function() {
        return null
    }
    ;
    function Xo(a) {
        this.j = a
    }
    Xo.prototype.l = function(a, b, c, d) {
        var e = 0 < P(this.j, pl, 9).length ? P(this.j, pl, 9)[0] : null
          , f = Um(O(this.j, rl, 3), e);
        if (!e)
            return null;
        if (e = N(e, 1)) {
            d = d.document;
            var g = c.tagName;
            c = $d(new Nd(d), g);
            c.style.clear = f.clearBoth ? "both" : "none";
            "A" == g && (c.style.display = "block");
            c.style.padding = "0px";
            c.style.margin = "0px";
            f.Va && Km(c.style, f.Va);
            d = $d(new Nd(d), "INS");
            f.pa && Km(d.style, f.pa);
            c.appendChild(d);
            f = {
                ua: c,
                ba: d
            };
            f.ba.setAttribute("data-ad-type", "text");
            f.ba.setAttribute("data-native-settings-key", e);
            Mm(f, a, null, b);
            a = f
        } else
            a = null;
        return a
    }
    ;
    Xo.prototype.m = function() {
        var a = 0 < P(this.j, pl, 9).length ? P(this.j, pl, 9)[0] : null;
        if (!a)
            return null;
        a = P(a, Yk, 3);
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if ("height" == N(c, 1) && 0 < parseInt(N(c, 2), 10))
                return parseInt(N(c, 2), 10)
        }
        return null
    }
    ;
    class Yo {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = Uo(a);
            return new Rl(["ap_container"],{
                ["google_reactive_ad_format"]: 27,
                ["google_responsive_auto_format"]: 16,
                ["google_max_num_ads"]: 1,
                ["google_ad_type"]: this.l,
                ["google_ad_format"]: a + "x" + b,
                ["google_ad_width"]: a,
                ["google_ad_height"]: b
            })
        }
    }
    ;class Zo {
        constructor(a) {
            this.l = a
        }
        j() {
            return new Rl([],{
                ["google_ad_type"]: this.l,
                ["google_reactive_ad_format"]: 26,
                ["google_ad_format"]: "fluid"
            })
        }
    }
    ;function $o(a, b) {
        this.m = a;
        this.o = b
    }
    $o.prototype.j = function() {
        return this.m
    }
    ;
    $o.prototype.l = function() {
        return this.o
    }
    ;
    function ap(a, b) {
        this.o = a;
        this.m = b
    }
    ap.prototype.l = function() {
        return this.m
    }
    ;
    ap.prototype.j = function(a) {
        a = rm(this.o, a.document);
        return 0 < a.length ? a[0] : null
    }
    ;
    function bp(a, b, c, d) {
        var e = a.N();
        if (!e)
            return null;
        var f = Qm(e);
        if (!f)
            return null;
        var g = a.l();
        g = Vm[g];
        var h = void 0 === g ? null : g;
        if (null === h)
            return null;
        g = (g = O(a, rl, 3)) ? qd(g, 3) : null;
        f = new ap(f,h);
        h = N(a, 10).slice(0);
        null != N(e, 5) && h.push(1);
        var k = d ? d : {};
        d = N(a, 12);
        e = null != N(a, 4) ? O(a, sl, 4) : null;
        switch (N(a, 8)) {
        case 1:
            return k = k.Mc || null,
            new cp(f,new Wo(Um(O(a, rl, 3), null)),k,g,0,h,e,c,b,d,a);
        case 2:
            return new cp(f,new Xo(a),k.ad || new Zo("text"),g,1,h,e,c,b,d,a)
        }
        return null
    }
    function dp(a, b, c) {
        const d = [];
        for (let e = 0; e < a.length; e++) {
            const f = bp(a[e], e, b, c);
            null !== f && d.push(f)
        }
        return d
    }
    function ep(a) {
        return a.m
    }
    function fp(a, b, c) {
        void 0 !== a.C.j[b] || a.C.set(b, []);
        a.C.get(b).push(c)
    }
    function gp(a) {
        return Cm(a.j.document, a.A || !1)
    }
    function hp(a) {
        return a.D.m(a.j)
    }
    function ip(a, b=null, c=null) {
        return new cp(a.v,b || a.D,c || a.G,a.A,a.Ua,a.pb,a.Ba,a.j,a.I,a.o,a.H,a.J)
    }
    class cp {
        constructor(a, b, c, d, e, f, g, h, k, l=null, m=null, p=null) {
            this.v = a;
            this.D = b;
            this.G = c;
            this.A = d;
            this.Ua = e;
            this.pb = f;
            this.Ba = g ? g : new sl;
            this.j = h;
            this.I = k;
            this.o = l;
            this.H = m;
            this.J = p;
            this.m = !1;
            this.C = new dm
        }
        K() {
            return this.j
        }
        l() {
            return this.v.l()
        }
    }
    ;function jp(a, b, c) {
        this.R = a;
        this.j = b;
        this.L = c
    }
    jp.prototype.N = function() {
        return this.j
    }
    ;
    function kp(a, b) {
        if (a.R.m)
            throw Error("AMA:AP:AP");
        Hm(b, a.N(), a.R.l());
        a.R.m = !0
    }
    jp.prototype.fill = function(a, b) {
        var c = this.R;
        (a = c.D.l(a, b, this.j, c.j)) && kp(this, a.ua);
        return a
    }
    ;
    function lp(a, b) {
        var c = []
          , d = [];
        try {
            for (var e = [], f = 0; f < a.length; f++) {
                var g = a[f]
                  , h = g.v.j(g.j);
                h && e.push({
                    placement: g,
                    anchorElement: h
                })
            }
            for (f = 0; f < e.length; f++)
                d.push(mp(e[f]));
            var k = yk(b)
              , l = zk(b);
            for (f = 0; f < d.length; f++) {
                a = l;
                b = k;
                var m = d[f].getBoundingClientRect()
                  , p = e[f];
                c.push(new jp(p.placement,p.anchorElement,new jm(m.left + a,m.top + b,m.right - m.left)))
            }
        } finally {
            for (f = 0; f < d.length; f++)
                Em(d[f])
        }
        return c
    }
    function mp(a) {
        var b = a.anchorElement;
        a = a.placement;
        var c = a.A
          , d = a.j.document.createElement("div");
        d.className = "google-auto-placed";
        var e = d.style;
        e.textAlign = "center";
        e.width = "100%";
        e.height = "0px";
        e.clear = c ? "both" : "none";
        try {
            return Hm(d, b, a.l()),
            d
        } catch (f) {
            throw Em(d),
            f;
        }
    }
    ;function np(a) {
        const b = a.l.document.createElement("button");
        op(a, b);
        uf(b, {
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF"
        });
        b.addEventListener("click", e=>{
            a.v();
            e.stopPropagation()
        }
        );
        var c = a.l.document.createElement("img");
        Fc(c, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg");
        op(a, c);
        uf(c, {
            margin: "0px 8px 0px 0px",
            width: "24px",
            height: "24px"
        });
        const d = a.l.document.createElement("span");
        op(a, d);
        uf(d, {
            "line-height": "24px"
        });
        d.appendChild(a.l.document.createTextNode(a.o));
        b.appendChild(c);
        b.appendChild(d);
        c = gp(a.m.R);
        c.className = "google-in-page-revocation-link";
        uf(c, {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-top": "2px solid #ECEDED",
            "border-bottom": "2px solid #ECEDED"
        });
        c.appendChild(b);
        return c
    }
    function op(a, b) {
        uf(b, Fo(a.l));
        uf(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class pp {
        constructor(a, b, c, d) {
            this.l = a;
            this.o = b;
            this.v = c;
            this.m = d;
            this.j = null
        }
        O() {
            this.j = np(this);
            kp(this.m, this.j)
        }
    }
    function qp(a, b) {
        b = b.filter(c=>5 == N(O(c, sl, 4), 1) && 1 == N(c, 8));
        b = dp(b, a);
        a = lp(b, a);
        a.sort((c,d)=>d.L.j - c.L.j);
        return a[0] || null
    }
    ;function rp(a, b, c, d, e) {
        sp(new tp(a,b,c,d,e))
    }
    function sp(a) {
        up(a) ? am(vp(a), ()=>{
            if (null != a.j) {
                var b = a.j;
                b.j && b.j.parentNode && b.j.parentNode.removeChild(b.j);
                b.j = null;
                a.j = null
            }
            null != a.l && (Qo(a.l),
            a.l = null);
            wp(a)
        }
        ) : wp(a)
    }
    function up(a) {
        {
            var b = a.o;
            var c = a.v
              , d = a.A;
            const e = qp(b, a.D);
            b = e ? new pp(b,c,d,e) : null
        }
        a.j = b;
        return a.j ? (a.j.O(),
        !0) : !1
    }
    function vp(a) {
        null == a.m && (a.m = new cm(a.o),
        a.m.O(2E3));
        return a.m
    }
    function wp(a) {
        a.l = new So(a.o,a.v,a.C,a.A);
        a.l.O()
    }
    class tp {
        constructor(a, b, c, d, e) {
            this.o = a;
            this.v = b;
            this.C = c;
            this.A = d;
            this.D = e;
            this.l = this.j = this.m = null
        }
    }
    ;function xp(a) {
        const b = yp(a);
        Ea(a.j.maxZIndexListeners, c=>c(b))
    }
    function yp(a) {
        a = Qe(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class zp {
        constructor(a) {
            this.j = Aj(a).floatingAdsStacking
        }
    }
    ;function Ap(a) {
        const b = a.l.googlefc = a.l.googlefc || {};
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push(()=>Bp(a))
    }
    function Bp(a) {
        const b = a.l.googlefc = a.l.googlefc || {};
        b && b.getConsentStatus() != b.ConsentStatusEnum.CONSENT_NOT_REQUIRED && rp(a.l, b.getDefaultConsentRevocationText(), b.getDefaultConsentRevocationCloseText(), ()=>b.showRevocationMessage(), a.A);
        Cp(a)
    }
    function Cp(a) {
        if (null != a.j) {
            var b = a.m;
            delete b.j.maxZIndexRestrictions[a.j];
            xp(b);
            a.j = null
        }
    }
    class Dp {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.v = b;
            this.o = c;
            this.m = d;
            this.A = e;
            this.j = null
        }
    }
    ;function Ep(a, b, c) {
        void 0 !== a.j.j[b] || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class Fp {
        constructor() {
            this.j = new dm
        }
    }
    ;function Gp(a) {
        this.A = {};
        this.A.c = a;
        this.m = [];
        this.l = null;
        this.o = [];
        this.C = 0
    }
    function Hp(a, b) {
        a.A.wpc = b;
        return a
    }
    function Ip(a, b) {
        for (var c = 0; c < b.length; c++)
            a.X(b[c]);
        return a
    }
    Gp.prototype.X = function(a) {
        for (var b = 0; b < this.m.length; b++)
            if (this.m[b] == a)
                return this;
        this.m.push(a);
        return this
    }
    ;
    function Jp(a, b) {
        a.l = a.l ? a.l : b;
        return a
    }
    Gp.prototype.v = function(a) {
        var b = gb(this.A);
        0 < this.C && (b.t = this.C);
        b.err = this.m.join();
        b.warn = this.o.join();
        this.l && (b.excp_n = this.l.name,
        b.excp_m = this.l.message && this.l.message.substring(0, 512),
        b.excp_s = this.l.stack && mi(this.l.stack, ""));
        b.w = 0 < a.innerWidth ? a.innerWidth : null;
        b.h = 0 < a.innerHeight ? a.innerHeight : null;
        return b
    }
    ;
    function Kp(a, b) {
        b && (a.j.apv = N(b, 4));
        return a
    }
    function Lp(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    class Mp extends Gp {
        constructor(a) {
            super(a);
            this.j = {}
        }
        v(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.v(a);
            jb(a, this.j);
            return a
        }
    }
    function Np(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    }
    ;var Op = (a,b)=>a.reduce((c,d)=>c.concat(b(d)), []);
    function Pp(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c)
            c = Da(e, f),
            0 > c || b.push(new Qp(a,[f],c,f,3,Wd(f).trim(),d));
        return b
    }
    function Rp(a, b, c) {
        let d = [];
        const e = []
          , f = b.childNodes
          , g = f.length;
        let h = 0
          , k = "";
        for (let p = 0; p < g; p++) {
            var l = f[p];
            if (1 == l.nodeType || 3 == l.nodeType) {
                a: {
                    var m = l;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName)
                        break a;
                    const t = c.getComputedStyle(m).getPropertyValue("display");
                    m = "inline" == t || "inline-block" == t ? null : m
                }
                m ? (d.length && k && e.push(new Qp(a,d,p - 1,m,0,k,c)),
                d = [],
                h = p + 1,
                k = "") : (d.push(l),
                l = Wd(l).trim(),
                k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new Qp(a,d,h,b,2,k,c));
        return e
    }
    function Sp(a, b) {
        return a.l - b.l
    }
    class Qp {
        constructor(a, b, c, d, e, f, g) {
            this.o = a;
            this.cb = b.slice(0);
            this.l = c;
            this.m = d;
            this.v = e;
            this.A = f;
            this.j = g
        }
        K() {
            return this.j
        }
    }
    ;class Tp {
        constructor(a, b, c) {
            this.j = a;
            this.l = b.Na;
            this.v = b.Ob;
            this.m = b.Ec;
            this.o = c
        }
    }
    ;function Up(a) {
        this.j = {};
        this.l = {};
        if (a)
            for (var b = 0; b < a.length; ++b)
                this.add(a[b])
    }
    Up.prototype.add = function(a) {
        this.j[a] = !0;
        this.l[a] = a
    }
    ;
    Up.prototype.contains = function(a) {
        return !!this.j[a]
    }
    ;
    const Vp = new Up("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    const Wp = (a,b)=>{
        if (3 == b.nodeType)
            return 3 == b.nodeType ? (b = b.data,
            a = -1 != b.indexOf("&") ? Ic(b, a.document) : b,
            a = /\S/.test(a)) : a = !1,
            a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if (c = "0" == c.opacity || "none" == c.display || "hidden" == c.visibility ? !0 : !1)
                return !1;
            if (c = (c = b.tagName) && Vp.contains(c.toUpperCase()))
                return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Wp(a, b[c]))
                    return !0
        }
        return !1
    }
    ;
    class Xp {
        constructor(a, b) {
            this.o = a;
            this.m = b;
            this.j = [];
            this.l = []
        }
    }
    ;var Zp = (a,b)=>{
        a = Yp(a, b);
        return Op(a, c=>{
            {
                var d = Na(c.v ? Rp(c.m, c.j, c.o) : [], c.l ? Pp(c.m, c.l, c.j, c.o) : []).slice(0);
                d.sort(Sp);
                c = [];
                const m = new Xp(51,!1);
                for (l of d) {
                    d = m;
                    var e = {
                        Xa: l,
                        Sa: l.A.length >= d.o
                    };
                    if (d.m || e.Sa) {
                        if (d.j.length) {
                            var f = d.j[d.j.length - 1].Xa;
                            b: {
                                var g = f.K();
                                var h = f.cb[f.cb.length - 1];
                                f = e.Xa.cb[0];
                                if (!h || !f) {
                                    g = !1;
                                    break b
                                }
                                var k = h.parentElement;
                                const p = f.parentElement;
                                if (k && p && k == p) {
                                    k = 0;
                                    for (h = h.nextSibling; 10 > k && h; ) {
                                        if (h == f) {
                                            g = !0;
                                            break b
                                        }
                                        if (Wp(g, h))
                                            break;
                                        h = h.nextSibling;
                                        k++
                                    }
                                    g = !1
                                } else
                                    g = !1
                            }
                        } else
                            g = !0;
                        g ? (d.j.push(e),
                        e.Sa && d.l.push(e.Xa)) : (d.j = [e],
                        d.l = e.Sa ? [e.Xa] : [])
                    }
                    if (3 <= m.l.length) {
                        if (1 >= m.l.length)
                            d = null;
                        else {
                            e = m.l[1];
                            for (d = m; d.j.length && !d.j[0].Sa; )
                                d.j.shift();
                            d.j.shift();
                            d.l.shift();
                            d = e
                        }
                        d && c.push(d)
                    }
                }
                var l = c
            }
            return l
        }
        )
    }
      , Yp = (a,b)=>{
        const c = new dm;
        a.forEach(d=>{
            var e = Qm(O(d, Qk, 1));
            if (e) {
                {
                    const f = e.toString();
                    void 0 !== c.j[f] || c.set(f, {
                        Ec: d,
                        Dc: e,
                        Na: null,
                        Ob: !1
                    });
                    e = c.get(f);
                    (d = (d = O(d, Qk, 2)) ? N(d, 7) : null) ? e.Na = e.Na ? e.Na + "," + d : d : e.Ob = !0
                }
            }
        }
        );
        return fm(c).map(d=>{
            {
                const e = rm(d.Dc, b.document);
                d = e.length ? new Tp(e[0],d,b) : null
            }
            return d
        }
        ).filter(d=>null != d)
    }
    ;
    var $p = (a,b,c)=>{
        const d = O(a, ml, 6);
        if (!d)
            return [];
        c = Zp(P(d, ol, 1), c);
        return (a = Ml(a)) && qd(a, 11) ? c.map(e=>{
            {
                const f = tl();
                e = new cp(new $o(e.m,e.v),new Wo({}),null,!1,2,[],f,e.j,null,null,null,e.o)
            }
            return e
        }
        ) : c.map(e=>{
            {
                const f = tl();
                e = new cp(new $o(e.m,e.v),new Vo,new Yo(b),!1,2,[],f,e.j,null,null,null,e.o)
            }
            return e
        }
        )
    }
    ;
    var aq = !Vc && !nc();
    function bq(a) {
        if (/-[a-z]/.test("adFormat"))
            return null;
        if (aq && a.dataset) {
            if (!(!B("Android") || oc() || mc() || kc() || B("Silk") || "adFormat"in a.dataset))
                return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    }
    ;var cq = (a,b,c)=>{
        if (!b)
            return null;
        const d = Sd(document, "INS");
        d.id = "google_pedestal_container";
        d.style.width = "100%";
        d.style.zIndex = "-1";
        if (c) {
            var e = a.getComputedStyle(c)
              , f = "";
            if (e && "static" != e.position) {
                var g = c.parentNode.lastElementChild;
                for (f = e.position; g && g != c; ) {
                    if ("none" != a.getComputedStyle(g).display) {
                        f = a.getComputedStyle(g).position;
                        break
                    }
                    g = g.previousElementSibling
                }
            }
            if (c = f)
                d.style.position = c
        }
        b.appendChild(d);
        if (d) {
            var h = a.document;
            f = h.createElement("div");
            f.style.width = "100%";
            f.style.height = "2000px";
            c = X(a).clientHeight;
            e = h.body.scrollHeight;
            a = a.innerHeight;
            g = h.body.getBoundingClientRect().bottom;
            d.appendChild(f);
            var k = f.getBoundingClientRect().top;
            h = h.body.getBoundingClientRect().top;
            d.removeChild(f);
            f = e;
            e <= a && 0 < c && 0 < g && (f = g - h);
            a = k - h >= .8 * f
        } else
            a = !1;
        return a ? d : (b.removeChild(d),
        null)
    }
      , eq = a=>{
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0;
            b |= a.getComputedStyle ? 0 : 2097152;
            ze() || (b |= 1048576);
            {
                const d = Math.floor(a.document.body.getBoundingClientRect().width)
                  , e = Ti(Ri(a), 79);
                var c = d <= e
            }
            c || (b |= 32768);
            dq(a) && (b |= 33554432)
        } catch (d) {
            b |= 32
        }
        return b
    }
      , dq = a=>{
        a = a.document.getElementsByClassName("adsbygoogle");
        for (let b = 0; b < a.length; b++)
            if ("autorelaxed" == bq(a[b]))
                return !0;
        return !1
    }
    ;
    const fq = {
        1: "0.5vp",
        2: "300px"
    }
      , gq = {
        1: 700,
        2: 1200
    }
      , hq = {
        [1]: {
            lc: "3vp",
            zb: "1vp",
            kc: "0.3vp"
        },
        [2]: {
            lc: "900px",
            zb: "300px",
            kc: "90px"
        }
    };
    function iq(a, b, c, d) {
        var e = jq(a)
          , f = X(a).clientHeight || gq[e]
          , g = void 0;
        d && (g = (d = (d = kq(P(d, Hk, 2), e)) ? O(d, Kk, 7) : void 0) ? lq(d, f) : void 0);
        {
            d = g;
            g = jq(a);
            a = X(a).clientHeight || gq[g];
            const h = mq(hq[g].zb, a);
            a = null === h ? nq(g, a) : new oq(h,h,pq(h, h, 8),8,.3,d)
        }
        d = mq(hq[e].lc, f);
        g = mq(hq[e].zb, f);
        f = mq(hq[e].kc, f);
        e = a.m;
        d && f && g && void 0 !== b && (e = .5 >= b ? g + (1 - 2 * b) * (d - g) : f + (2 - 2 * b) * (g - f));
        c && (e = Math.min(e, a.m));
        b = e;
        return b = new oq(e,b,pq(e, b, a.l),a.l,a.o,a.j)
    }
    function qq(a, b) {
        const c = jq(a);
        a = X(a).clientHeight || gq[c];
        if (b = kq(P(b, Hk, 2), c))
            if (b = rq(b, a))
                return b;
        return nq(c, a)
    }
    function sq(a) {
        const b = jq(a);
        return nq(b, X(a).clientHeight || gq[b])
    }
    function tq(a, b) {
        let c = {
            za: a.m,
            ha: a.v
        };
        for (let d of a.A)
            d.adCount <= b && (c = d.yb);
        return c
    }
    class oq {
        constructor(a, b, c, d, e, f) {
            this.m = a;
            this.v = b;
            this.A = c.sort((g,h)=>g.adCount - h.adCount);
            this.l = d;
            this.o = e;
            this.j = f
        }
    }
    function kq(a, b) {
        for (let c of a)
            if (N(c, 1) == b)
                return c;
        return null
    }
    function rq(a, b) {
        const c = mq(N(a, 2), b)
          , d = mq(N(a, 5), b);
        if (null === c)
            return null;
        const e = N(a, 4);
        if (null == e)
            return null;
        const f = [];
        var g = P(a, Jk, 3);
        for (var h of g) {
            g = N(h, 1);
            const k = mq(N(h, 2), b)
              , l = mq(N(h, 3), b);
            if ("number" !== typeof g || null === k)
                return null;
            f.push({
                adCount: g,
                yb: {
                    za: k,
                    ha: l
                }
            })
        }
        b = (h = O(a, Kk, 7)) ? lq(h, b) : void 0;
        return new oq(c,d,f,e,pd(a, 6),b)
    }
    function nq(a, b) {
        a = mq(fq[a], b);
        return new oq(null === a ? Infinity : a,null,[],3,null)
    }
    function mq(a, b) {
        if (!a)
            return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }
    function jq(a) {
        a = 900 <= X(a).clientWidth;
        return ze() && !a ? 1 : 2
    }
    function pq(a, b, c) {
        if (4 > c)
            return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            yb: {
                za: 2 * a,
                ha: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            yb: {
                za: 3 * a,
                ha: 3 * b
            }
        }]
    }
    function lq(a, b) {
        const c = mq(N(a, 2), b) || 0
          , d = N(a, 3) || 1;
        a = mq(N(a, 1), b) || 0;
        return {
            qb: c,
            Wb: d,
            ca: a
        }
    }
    ;function uq(a) {
        return new Rl(["pedestal_container"],{
            ["google_reactive_ad_format"]: 30,
            ["google_phwr"]: 2.189,
            ["google_ad_width"]: Math.floor(a),
            ["google_ad_format"]: "autorelaxed",
            ["google_full_width_responsive"]: !0,
            ["google_enable_content_recommendations"]: !0,
            ["google_content_recommendation_ui_type"]: "pedestal"
        })
    }
    class vq {
        constructor() {}
        j(a) {
            return uq(Math.floor(a.l))
        }
    }
    ;var wq = {};
    function xq(a, b, c) {
        let d = yq(a, c, b);
        if (!d)
            return !0;
        let e = -1;
        const f = c.A.l;
        for (; d.Aa && d.Aa.length; ) {
            const g = d.Aa.shift()
              , h = hp(g.R)
              , k = g.L.j;
            if ((c.l.Ca || c.l.Da || c.l.Lb || k > e) && (!h || h <= d.Ma) && zq(c, g, d.Ma)) {
                e = k;
                if (d.Ka.j.length + 1 >= f)
                    return !0;
                d = yq(a, c, b);
                if (!d)
                    return !0
            }
        }
        return c.m
    }
    var yq = (a,b,c)=>{
        var d = b.A.l
          , e = b.A.o
          , f = b.A;
        f = Bn(b.K(), f.j ? f.j.ca : void 0, d);
        if (f.j.length >= d)
            return null;
        e ? (d = f.l || (f.l = Xm(f.o) || null),
        e = !d || 0 > d ? -1 : f.l * e - Mn(f)) : e = void 0;
        a = null == e || 50 <= e ? Aq(b, f, {
            types: a
        }, c) : null;
        return {
            Ka: f,
            Ma: e,
            Aa: a
        }
    }
    ;
    wq[2] = xa(function(a, b) {
        a = Aq(b, Bn(b.K()), {
            types: a,
            ia: sq(b.K())
        }, 2);
        if (0 == a.length)
            return !0;
        for (var c = 0; c < a.length; c++)
            if (zq(b, a[c]))
                return !0;
        return b.m ? (b.o.push(11),
        !0) : !1
    }, [0]);
    wq[5] = xa(xq, [0], 5);
    wq[3] = function(a) {
        if (!a.m)
            return !1;
        var b = Aq(a, Bn(a.K()), {
            types: [0],
            ia: sq(a.K())
        }, 3);
        if (0 == b.length)
            return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (zq(a, b[c]))
                return !0;
        a.o.push(11);
        return !0
    }
    ;
    var Bq = a=>{
        var b;
        a.l.nc ? b = new oq(0,null,[],3,null) : b = sq(a.K());
        return {
            types: [0],
            ia: b
        }
    }
      , Dq = a=>{
        var b = a.K().document.body.getBoundingClientRect().width;
        b = uq(b);
        var c = a.j;
        var d = c.document.body
          , e = cq(c, d, null);
        if (e)
            c = e;
        else {
            if (c.document.body) {
                e = Math.floor(c.document.body.getBoundingClientRect().width);
                for (var f = [{
                    element: c.document.body,
                    depth: 0,
                    height: 0
                }], g = -1, h = null; 0 < f.length; ) {
                    const m = f.pop()
                      , p = m.element;
                    var k = m.height;
                    0 < m.depth && k > g && (g = k,
                    h = p);
                    if (5 > m.depth)
                        for (k = 0; k < p.children.length; k++) {
                            const t = p.children[k];
                            {
                                var l = e;
                                const z = t.getBoundingClientRect().width;
                                l = (null == z || null == l ? 0 : z >= .9 * l && z <= 1.01 * l) ? !0 : !1
                            }
                            l && f.push({
                                element: t,
                                depth: m.depth + 1,
                                height: t.getBoundingClientRect().height
                            })
                        }
                }
                e = h
            } else
                e = null;
            c = e ? cq(c, e.parentNode || d, e) : null
        }
        c && (b = Ql(a.G, b),
        d = Lm(a.j.document, a.D, null, null, {}, b)) && (Hm(d.ua, c, 2, 256),
        Cq(a, d, b))
    }
      , Fq = (a,b)=>{
        var c = Bq(a);
        c.xb = [5];
        c = Aq(a, Bn(a.K()), c, 8);
        Eq(a, c.reverse(), b)
    }
      , Eq = (a,b,c)=>{
        for (const d of b)
            if (b = c.j(d.L),
            zq(a, d, void 0, b))
                return !0;
        return !1
    }
    ;
    wq[8] = function(a) {
        var b = a.K().document;
        if ("complete" != b.readyState)
            return b.addEventListener("readystatechange", ()=>wq[8](a), {
                once: !0
            }),
            !0;
        if (!a.m)
            return !1;
        if (!a.Ta())
            return !0;
        b = Bq(a);
        b.wb = [2, 4, 5];
        b = Aq(a, Bn(a.K()), b, 8);
        const c = new vq(a.l.$b || 0);
        if (Eq(a, b, c))
            return !0;
        if (a.l.Mb)
            switch (a.l.Zb || 0) {
            case 1:
                Fq(a, c);
                break;
            default:
                Dq(a)
            }
        return !0
    }
    ;
    wq[6] = xa(xq, [2], 6);
    wq[7] = xa(xq, [1], 7);
    wq[9] = function(a) {
        const b = yq([0, 2], a, 9);
        if (!b || !b.Aa)
            return a.o.push(17),
            a.m;
        for (const e of b.Aa) {
            var c = e;
            var d = a.l.Vc || null;
            null == d ? c = null : (d = ip(c.R, new Gq, new Hq(d,a.K())),
            c = new jp(d,c.N(),c.L));
            if (c && !(hp(c.R) > b.Ma) && zq(a, c, b.Ma))
                return e.R.m = !0
        }
        a.o.push(17);
        return a.m
    }
    ;
    function Iq(a) {
        try {
            if (!a.localStorage)
                return !1;
            a.localStorage.setItem("__storage_test__", "__storage_test__");
            const b = a.localStorage.getItem("__storage_test__");
            a.localStorage.removeItem("__storage_test__");
            return "__storage_test__" == b
        } catch (b) {
            return !1
        }
    }
    function Jq(a) {
        try {
            if (!Iq(a) || !a.localStorage)
                return null;
            const b = a.localStorage.getItem("__lsv__");
            if (!b)
                return [];
            let c;
            try {
                c = JSON.parse(b)
            } catch (d) {}
            return !oa(c) || Ja(c, d=>!Number.isInteger(d)) ? (a.localStorage.removeItem("__lsv__"),
            []) : Kq(c)
        } catch (b) {
            return null
        }
    }
    function Kq(a=[]) {
        const b = Date.now();
        return Fa(a, c=>36E5 > b - c)
    }
    ;var Lq = (a,b)=>{
        let c = 0;
        try {
            c |= a != a.top ? 512 : 0;
            c |= tk(a);
            c |= sk(a);
            c |= a.innerHeight >= a.innerWidth ? 0 : 8;
            c |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var d;
            if (d = b) {
                var e = Jq(a);
                d = !(e && 1 > e.length)
            }
            d && (c |= 134217728)
        } catch (f) {
            c |= 32
        }
        return c
    }
    ;
    class Gq {
        l(a, b, c, d) {
            return Lm(d.document, a, null, null, {}, b)
        }
        m(a) {
            return X(a).clientHeight || 0
        }
    }
    ;var Mq = a=>{
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0,
            b |= a.getComputedStyle ? 0 : 2097152,
            b |= a.document.querySelectorAll && a.document.querySelector ? 0 : 4194304,
            b |= sk(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    }
    ;
    class Nq {
        constructor() {
            this.j = new Promise((a,b)=>{
                this.resolve = a;
                this.reject = b
            }
            )
        }
    }
    ;var Oq = class {
        constructor() {
            const a = new Nq;
            this.promise = a.j;
            this.resolve = a.resolve
        }
    }
    ;
    function Pq(a, b, c) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        b[a] || (b[a] = new Oq,
        c && c());
        return b[a]
    }
    function Qq(a, b, c) {
        return Pq(a, b, function() {
            He(b.document, c)
        }).promise
    }
    ;var Rq = a=>{
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0,
            b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
        } catch (c) {
            b |= 32
        }
        return b
    }
      , Sq = (a,b)=>{
        var c = S.F().j(289, !1);
        let d = 0;
        try {
            d |= sk(a, 0 < S.F().l(43, 0) ? S.F().l(43, 0) : rk);
            if (S.F().j(309, !1)) {
                {
                    const h = X(a).clientHeight;
                    var e = h ? 320 > h ? -2147483648 : 0 : 1073741824
                }
                d |= e
            }
            d |= tk(a);
            c || (d |= a.innerHeight >= a.innerWidth ? 0 : 8);
            var f;
            if (f = b) {
                var g = Jq(a);
                f = !(g && 1 > g.length)
            }
            f && (d |= 134217728)
        } catch (h) {
            d |= 32
        }
        return d
    }
    ;
    function Tq(a, b, c) {
        const d = a.createElement("link");
        try {
            d.rel = "preload",
            d.href = b instanceof pb ? sb(b).toString() : b instanceof Jb ? Mb(b) : Mb(Tb(b))
        } catch (e) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0])
            try {
                a.appendChild(d)
            } catch (e) {}
    }
    ;const Uq = {
        [16]: 4,
        [27]: 512,
        [26]: 128
    };
    var Vq = (a,b,c)=>{
        switch (c) {
        case 1:
        case 2:
            return !(Io(a) | Lo(a, c));
        case 8:
            return b = !("on" === b.google_adtest || Ni(a.location, "google_ia_debug")),
            0 == (Rq(a) | Sq(a, b));
        case 9:
            return b = S.F().j(230, !1) && !("on" === b.google_adtest || Ni(a.location, "google_scr_debug")),
            !Lq(a, b);
        case 30:
            return 0 == eq(a);
        case 26:
            return 0 == Mq(a) && !0;
        case 27:
            return !To(a) && !0;
        default:
            return !1
        }
    }
      , Wq = (a,b,c)=>{
        switch (c) {
        case 0:
            return 0;
        case 1:
        case 2:
            return Io(a) | Lo(a, c);
        case 8:
            return b = !("on" === b.google_adtest || Ni(a.location, "google_ia_debug")),
            Rq(a) | Sq(a, b);
        case 9:
            return Lq(a, S.F().j(230, !1) && !("on" === b.google_adtest || Ni(a.location, "google_scr_debug")));
        case 16:
            return xm(b, a) ? 0 : 8388608;
        case 30:
            return eq(a);
        case 26:
            return Mq(a);
        case 27:
            return To(a);
        default:
            return 32
        }
    }
      , Xq = (a,b)=>{
        const c = b.google_reactive_ad_format;
        if (!cb(c))
            return !1;
        a = Vg(a);
        if (!a || !Vq(a, b, c))
            return !1;
        b = Aj(a);
        if (wk(b, c))
            return !1;
        b.adCount[c] || (b.adCount[c] = 0);
        b.adCount[c]++;
        return !0
    }
      , Yq = a=>!a.google_reactive_ads_config && Dk(a) && 16 != a.google_reactive_ad_format
      , Zq = a=>{
        if (!a.hash)
            return null;
        let b = null;
        T(Ji, c=>{
            !b && Ni(a, c) && (b = Ki[c])
        }
        );
        return b
    }
      , ar = (a,b)=>{
        if (!a.document.getElementById("goog_info_card")) {
            var c = Aj(a).tagSpecificState[1] || null;
            c && T(Li, d=>{
                !c.debugCardRequested && Pi(d, a.location) && (c.debugCardRequested = !0,
                $q(a, e=>{
                    c.debugCard = e.createDebugCard(d, a, b)
                }
                ))
            }
            )
        }
    }
      , cr = (a,b)=>{
        if (!b)
            return null;
        const c = Aj(b);
        let d = 0;
        T(db, e=>{
            const f = Uq[e];
            f && 0 === br(a, b, e) && (d |= f)
        }
        );
        c.wasPlaTagProcessed && (d |= 256);
        a.google_reactive_tag_first && (d |= 1024);
        return d ? "" + d : null
    }
      , dr = (a,b)=>{
        const c = [];
        T(db, d=>{
            const e = br(b, a, d);
            0 !== e && c.push(d + ":" + e)
        }
        );
        return c.join(",") || null
    }
      , er = a=>{
        const b = []
          , c = {};
        T(a, (d,e)=>{
            if ((e = yj[e]) && !c[e]) {
                c[e] = !0;
                if (d)
                    d = 1;
                else if (!1 === d)
                    d = 2;
                else
                    return;
                b.push(e + ":" + d)
            }
        }
        );
        return b.join(",")
    }
      , fr = a=>{
        a = a.overlays;
        if (!a)
            return "";
        a = a.bottom;
        return "boolean" === typeof a ? a ? "1" : "0" : ""
    }
      , br = (a,b,c)=>{
        if (!b)
            return 256;
        let d = 0;
        const e = Aj(b)
          , f = wk(e, c);
        if (a.google_reactive_ad_format == c || 26 != c && 27 != c && f)
            d |= 64;
        let g = !1;
        T(e.reactiveTypeDisabledByPublisher, (h,k)=>{
            String(c) === k && (g = !0)
        }
        );
        g && Zq(b.location) !== c && (d |= 128);
        return d | Wq(b, a, c)
    }
      , gr = (a,b)=>{
        if (a) {
            var c = Aj(a)
              , d = {};
            T(b, (e,f)=>{
                (f = yj[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
            }
            );
            T(db, e=>{
                d[zj[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
            }
            )
        }
    }
      , hr = ()=>{
        const a = Ug();
        return Pj(a, "/pagead/js/" + Lf() + "/r20190131/reactive_library.js", Rf ? "https" : "http")
    }
      , ir = (a,b)=>{
        a = V(a, b);
        return Qq(1, w(), hr()).then(a)
    }
      , $q = (a,b)=>{
        b = V(212, b);
        var c = Ug();
        c = Pj(c, "/pagead/js/" + Lf() + "/r20190131/debug_card_library.js", Rf ? "https" : "http");
        Qq(3, a, c).then(b)
    }
    ;
    const jr = a=>{
        if (!a.adsbygoogle) {
            a.adsbygoogle = [];
            const b = Oj(Ug(), "/pagead/js/adsbygoogle.js");
            He(a.document, b)
        }
    }
    ;
    var kr = (a,b,c)=>{
        a.setAttribute("data-adsbygoogle-status", "reserved");
        a.className += " adsbygoogle-noablate";
        jr(c);
        c.adsbygoogle.push({
            element: a,
            params: b
        })
    }
      , lr = (a,b,c)=>{
        const d = zj[a]
          , e = {};
        a = b.page_level_pubvars;
        qa(a) && jb(e, a);
        T(b, (f,g)=>{
            yj[g] == d && qa(f) && jb(e, f)
        }
        );
        qa(c) && jb(e, c);
        return e
    }
      , mr = (a,b)=>{
        Q(a, "load", ()=>{
            jr(a);
            a.adsbygoogle.push(b)
        }
        )
    }
    ;
    class Hq {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j() {
            {
                var a = this.l;
                var b = this.m;
                const c = a.B || {};
                c.google_ad_client = a.Eb;
                c.google_ad_height = X(b).clientHeight || 0;
                c.google_ad_width = X(b).clientWidth || 0;
                c.google_reactive_ad_format = 9;
                c.google_rasc = a.l().C();
                a.j && (c.google_adtest = "on");
                a = c
            }
            return new Rl([],a)
        }
    }
    ;class nr {
        constructor(a=1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    }
    ;function or(a) {
        this.j = a.slice(0)
    }
    or.prototype.filter = function(a) {
        return new or(Fa(this.j, a))
    }
    ;
    function pr(a, b, c) {
        const d = [];
        for (const e of a.j)
            b(e) ? d.push(e) : c(e);
        return new or(d)
    }
    or.prototype.apply = function(a) {
        return new or(a(this.j.slice(0)))
    }
    ;
    function qr(a, b) {
        return new or(a.j.slice(0).sort(b))
    }
    function rr(a, b) {
        if (0 > b)
            return a;
        a = a.j.slice(0);
        a.splice(b, 1);
        return new or(a)
    }
    function sr(a, b=1) {
        a = a.j.slice(0);
        const c = new nr(b);
        Ta(a, ()=>c.next());
        return new or(a)
    }
    ;class tr {
        constructor(a) {
            this.j = new Up(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    }
    ;function ur(a, b, c, d) {
        const e = km(d, c + 1, b + 1);
        return !Ja(a, f=>gm(f, e))
    }
    function vr(a, b, c, d, e, f, g, h) {
        h = h.L;
        const k = km(h, c, b)
          , l = km(h, e, d)
          , m = km(h, g, f);
        return !Ja(a, p=>gm(p, l) || gm(p, k) && !gm(p, m))
    }
    function wr(a, b, c, d, e) {
        const f = Fn(a);
        if (ur(f, b, d ? 0 : b, e.L))
            return !0;
        if (!vr(f, b, d ? 0 : b, c.qb, d ? 0 : c.qb, c.ca, d ? 0 : c.ca, e))
            return !1;
        const g = new rn(km(e.L, 0, 0),1);
        a = Fa(a.m, h=>pn(h, g, c.ca));
        b = Ia(a, (h,k)=>h + k.l, 1);
        return 0 === a.length || b > c.Wb ? !1 : !0
    }
    ;class xr {
        constructor() {
            this.j = new dm
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new Up,
            this.j.set(a, c));
            c.add(b)
        }
    }
    ;var yr = (a,b)=>{
        const c = [];
        let d = a;
        for (a = ()=>{
            c.push({
                anchor: d.anchor,
                position: d.position
            });
            return d.anchor == b.anchor && d.position == b.position
        }
        ; d; ) {
            switch (d.position) {
            case 1:
                if (a())
                    return c;
                d.position = 2;
            case 2:
                if (a())
                    return c;
                if (d.anchor.firstChild) {
                    d = {
                        anchor: d.anchor.firstChild,
                        position: 1
                    };
                    continue
                } else
                    d.position = 3;
            case 3:
                if (a())
                    return c;
                d.position = 4;
            case 4:
                if (a())
                    return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body; ) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a())
                    return c;
                d.position = 4;
                if (a())
                    return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    }
    ;
    function zr(a, b) {
        const c = new xr
          , d = new Up;
        b.forEach(e=>{
            if (O(e, Vk, 1)) {
                e = O(e, Vk, 1);
                if (O(e, Sk, 1) && O(e, Sk, 1).N() && O(e, Sk, 2) && O(e, Sk, 2).N()) {
                    const g = Ar(a, O(e, Sk, 1).N())
                      , h = Ar(a, O(e, Sk, 2).N());
                    if (g && h)
                        for (var f of yr({
                            anchor: g,
                            position: O(e, Sk, 1).l()
                        }, {
                            anchor: h,
                            position: O(e, Sk, 2).l()
                        }))
                            c.set(ra(f.anchor), f.position)
                }
                O(e, Sk, 3) && O(e, Sk, 3).N() && (f = Ar(a, O(e, Sk, 3).N())) && c.set(ra(f), O(e, Sk, 3).l())
            } else
                O(e, Wk, 2) ? Br(a, O(e, Wk, 2), c) : O(e, Xk, 3) && Cr(a, O(e, Xk, 3), d)
        }
        );
        return new Dr(c,d)
    }
    class Dr {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const Br = (a,b,c)=>{
        O(b, Qk, 1) && (a = Er(a, O(b, Qk, 1))) && a.forEach(d=>{
            d = ra(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        }
        )
    }
      , Cr = (a,b,c)=>{
        O(b, Qk, 1) && (a = Er(a, O(b, Qk, 1))) && a.forEach(d=>{
            c.add(ra(d))
        }
        )
    }
      , Ar = (a,b)=>(a = Er(a, b)) && 0 < a.length ? a[0] : null
      , Er = (a,b)=>(b = Qm(b)) ? rm(b, a) : null;
    function Fr(a) {
        return function(b) {
            return lp(b, a)
        }
    }
    function Gr(a) {
        const b = X(a).clientHeight;
        return b ? xa(Hr, b + yk(a)) : Ua
    }
    function Ir(a, b, c, d=!1) {
        if (0 > a)
            throw Error("ama::ead:nd");
        if (Infinity === a)
            return Ua;
        const e = d ? 0 : a
          , f = Fn(c || Bn(b));
        return g=>ur(f, a, e, g.L)
    }
    function Jr(a, b, c, d, e=!1) {
        if (0 > a || 0 > b.qb || 0 > b.Wb || 0 > b.ca)
            throw Error("ama::ead:nd");
        return Infinity === a ? Ua : f=>wr(d || Bn(c, b.ca), a, b, e || !1, f)
    }
    function Kr(a) {
        if (!a.length)
            return Ua;
        const b = new tr(a);
        return c=>b.contains(c.Ua)
    }
    function Lr(a) {
        return function(b) {
            for (let c of b.pb)
                if (-1 < a.indexOf(c))
                    return !1;
            return !0
        }
    }
    function Mr(a) {
        return a.length ? function(b) {
            const c = b.pb;
            return a.some(d=>-1 < c.indexOf(d))
        }
        : Va
    }
    function Nr(a, b) {
        if (0 >= a)
            return Va;
        const c = Xm(b) - a;
        return function(d) {
            return d.L.j <= c
        }
    }
    function Or(a) {
        const b = {};
        a && a.forEach(c=>{
            b[c] = !0
        }
        );
        return function(c) {
            return !b[N(c.Ba, 2) || 0]
        }
    }
    function Pr(a) {
        return a.length ? b=>a.includes(N(b.Ba, 2) || 0) : Va
    }
    function Qr(a) {
        return a.length ? b=>a.includes(N(b.Ba, 1) || 0) : Va
    }
    function Rr(a, b) {
        const c = zr(a, b);
        return function(d) {
            var e = d.N();
            d = Wm[d.R.l()];
            var f = ra(e);
            f = (f = c.l.j.get(f)) ? f.contains(d) : !1;
            if (!f)
                a: {
                    if (c.j.contains(ra(e)))
                        switch (d) {
                        case 2:
                        case 3:
                            f = !0;
                            break a;
                        default:
                            f = !1;
                            break a
                        }
                    for (e = e.parentElement; e; ) {
                        if (c.j.contains(ra(e))) {
                            f = !0;
                            break a
                        }
                        e = e.parentElement
                    }
                    f = !1
                }
            return !f
        }
    }
    const Hr = (a,b)=>b.L.j >= a
      , Sr = (a,b)=>b.L.j < a
      , Tr = (a,b,c)=>{
        c = c.L.l;
        return a <= c && c <= b
    }
    ;
    class Ur {
        constructor(a=0) {
            this.j = a
        }
    }
    ;class Vr {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    }
    ;function Wr(a) {
        const b = a.N();
        a = a.R.l();
        return 0 == a || 3 == a ? Xr(b.parentElement) : Xr(b)
    }
    function Xr(a) {
        let b = 0;
        for (; a; )
            (!b || a.previousElementSibling || a.nextElementSibling) && b++,
            a = a.parentElement;
        return b
    }
    ;function Yr(a, b) {
        var c = b.L.j + 200 * Math.min(20, Wr(b));
        var d = a.l;
        0 > d.j && (d.j = Xm(d.l) || 0);
        d = d.j - b.L.j;
        d = 1E3 < d ? 0 : 2 * (1E3 - d);
        c += d;
        a = a.j;
        b = b.N();
        b = "string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0;
        return c + b
    }
    class Zr {
        constructor(a, b=0) {
            this.l = new Vr(a);
            this.j = new Ur(b)
        }
    }
    ;function $r(a, b) {
        {
            a = a.j;
            const c = X(a).clientHeight;
            a = c ? xa(Sr, c + yk(a)) : Ua
        }
        b = b.filter(a);
        return b = b.j.slice(0)
    }
    function as(a, b) {
        if (null != b) {
            var c = [], d;
            for (d of b) {
                b = null != d ? d.R.I : null;
                var e = null != d ? d.L : null;
                if (null != b && null != e) {
                    var f = new yo;
                    f = od(f, 1, e.m);
                    f = od(f, 2, e.j);
                    e = od(f, 3, e.l);
                    f = new zo;
                    b = od(f, 1, b);
                    b = vd(b, 2, e);
                    c.push(b)
                }
            }
            a = a.j;
            if (c) {
                (d = Co(a)) || (d = new Ao);
                c = c.concat(P(d, zo, 5));
                d = new Set;
                b = [];
                for (e = 0; e < c.length; e++)
                    d.has(N(c[e], 1)) || (b.push(c[e]),
                    d.add(N(c[e], 1)));
                c = b;
                Do({
                    ab: c
                }, a)
            }
        }
    }
    class bs {
        constructor(a, b, c, d=0) {
            this.l = new or(a);
            this.m = new Zr(c,d);
            this.j = c;
            this.o = new Fp
        }
        find(a, b=0) {
            var c = "number" === typeof a.ic ? a.ic : -1;
            if (c >= this.l.j.length)
                throw Error("AMA:PF:I");
            const d = a.Vb ? a.Vb : [0];
            var e = "number" === typeof a.Xb ? a.Xb : 0
              , f = "number" === typeof a.minWidth ? a.minWidth : 0;
            const g = "number" === typeof a.maxWidth ? a.maxWidth : Infinity
              , h = "number" === typeof a.ha ? a.ha : 0;
            c = rr(this.l, c);
            c = pr(pr(pr(pr(pr(pr(pr(c, Kr(d), cs(1, b)), Lr(a.ra || []), cs(2, b)), Or(a.gb || []), cs(3, b)), Pr(a.th || []), cs(4, b)), Qr(a.xb || []), cs(5, b)), Mr(a.wb || []), cs(6, b)), Xa(ep), cs(7, b));
            c = c.apply(Fr(this.j));
            e = a.La && a.Kb ? pr(c, Jr(e, a.Kb, this.j, a.Ka, a.Ea), ds(16, b)) : pr(c, Ir(e, this.j, a.Ka, a.Ea), ds(9, b));
            e = pr(e, xa(Tr, f, g), ds(10, b));
            a.Ja && (e = pr(e, Rr(this.j.document, a.Ja), ds(11, b)));
            a.Ya && (f = $r(this, e),
            as(this, f));
            e = pr(pr(e, Gr(this.j), ds(12, b)), Nr(h, this.j), ds(13, b));
            e = a.Da ? qr(e, (k,l)=>{
                {
                    var m = k.R.o;
                    const p = l.R.o;
                    null == m || null == p ? null == m && null == p ? (m = this.m,
                    k = Yr(m, k) - Yr(m, l)) : k = null == m ? 1 : -1 : k = m - p
                }
                return k
            }
            ) : qr(e, (k,l)=>{
                var m = this.m;
                return Yr(m, k) - Yr(m, l)
            }
            );
            a.Ca && (e = sr(e, Nc(this.j.location.href + this.j.localStorage.google_experiment_mod)));
            1 === d.length && Ep(this.o, d[0], {
                Hc: c.j.length,
                Cd: e.j.length
            });
            return e.j.slice(0)
        }
    }
    const cs = (a,b)=>c=>fp(c, b, a)
      , ds = (a,b)=>c=>fp(c.R, b, a);
    function es(a, b) {
        if (!a)
            return !1;
        a = Ie(a, b);
        if (!a)
            return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }
    function fs(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType; )
            a = a.previousSibling;
        return a ? a : null
    }
    function gs(a) {
        return !!a.nextSibling || !!a.parentNode && gs(a.parentNode)
    }
    ;function hs(a) {
        const b = uk(a, !0)
          , c = X(a).scrollWidth
          , d = X(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = yk(a);
        const g = [];
        var h = [];
        const k = []
          , l = [];
        var m = []
          , p = []
          , t = [];
        let z = 0
          , C = 0
          , r = Infinity
          , F = Infinity
          , M = null;
        var Y = xn({
            ga: !1
        }, a);
        for (var U of Y) {
            Y = U.getBoundingClientRect();
            const G = b - (Y.bottom + f);
            var aa = void 0
              , ma = void 0;
            if (U.className && -1 != U.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                aa = U.getAttribute("google_element_uid");
                ma = a.google_sv_map;
                if (!aa || !ma || !ma[aa])
                    continue;
                aa = (ma = Wg(ma[aa])) ? ma.height : 0;
                ma = ma ? ma.width : 0
            } else if (aa = Y.bottom - Y.top,
            ma = Y.right - Y.left,
            1 >= aa || 1 >= ma)
                continue;
            g.push(aa);
            k.push(ma);
            l.push(aa * ma);
            U.className && -1 != U.className.indexOf("google-auto-placed") ? (C += 1,
            U.className && -1 != U.className.indexOf("pedestal_container") && (M = aa)) : (r = Math.min(r, G),
            p.push(Y),
            z += 1,
            h.push(aa),
            m.push(aa * ma));
            F = Math.min(F, G);
            t.push(Y)
        }
        r = Infinity === r ? null : r;
        F = Infinity === F ? null : F;
        f = is(p);
        t = is(t);
        h = js(b, h);
        p = js(b, g);
        m = js(b * c, m);
        U = js(b * c, l);
        return new ks(a,{
            Qc: e,
            sb: b,
            nd: c,
            md: d,
            dd: z,
            Gc: C,
            Jc: ls(g),
            Kc: ls(k),
            Ic: ls(l),
            rb: f,
            kd: t,
            jd: r,
            hd: F,
            fb: h,
            eb: p,
            Cc: m,
            Bc: U,
            od: M
        })
    }
    function ms(a, b, c, d) {
        const e = ze() && !(900 <= X(a.l).clientWidth);
        d = Fa(d, f=>La(a.m, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Qc,
            pg_h: ns(a.j.sb),
            pg_w: ns(a.j.nd),
            pg_hs: ns(a.j.md),
            c: ns(a.j.dd),
            aa_c: ns(a.j.Gc),
            av_h: ns(a.j.Jc),
            av_w: ns(a.j.Kc),
            av_a: ns(a.j.Ic),
            s: ns(a.j.rb),
            all_s: ns(a.j.kd),
            b: ns(a.j.jd),
            all_b: ns(a.j.hd),
            d: ns(a.j.fb),
            all_d: ns(a.j.eb),
            ard: ns(a.j.Cc),
            all_ard: ns(a.j.Bc),
            pd_h: ns(a.j.od),
            dt: e ? "m" : "d"
        }
    }
    class ks {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.m = "633794002 633794005 44715380 44715381 21065713 21065714 21065715 21065716".split(" ")
        }
    }
    function ls(a) {
        return Jd.apply(null, Fa(a, b=>0 < b)) || null
    }
    function js(a, b) {
        return 0 >= a ? null : Ed.apply(null, b) / a
    }
    function is(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e]
                  , d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }
    function ns(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    }
    ;function os(a, b) {
        b = (X(b).clientHeight || 0) - yk(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            ps(e) && e.top <= b && (c += 1)
        }
        return c
    }
    function qs(a) {
        const b = {};
        var c = zn({
            ga: !1,
            va: !1,
            wa: !1,
            xa: !1
        }, a).map(d=>d.getBoundingClientRect()).filter(ps);
        b.xc = c.length;
        c = An({
            wa: !0
        }, a).map(d=>d.getBoundingClientRect()).filter(ps);
        b.Rc = c.length;
        c = An({
            xa: !0
        }, a).map(d=>d.getBoundingClientRect()).filter(ps);
        b.ld = c.length;
        c = An({
            va: !0
        }, a).map(d=>d.getBoundingClientRect()).filter(ps);
        b.Ac = c.length;
        c = (X(a).clientHeight || 0) - yk(a);
        c = zn({
            ga: !1
        }, a).map(d=>d.getBoundingClientRect()).filter(ps).filter(wa(rs, null, c));
        b.yc = c.length;
        a = hs(a);
        c = null != a.j.fb ? a.j.fb : null;
        null != c && (b.ed = c);
        a = null != a.j.eb ? a.j.eb : null;
        null != a && (b.zc = a);
        return b
    }
    function zq(a, b, c, d) {
        const e = b.R;
        if (e.m)
            return !1;
        var f = b.N()
          , g = e.l()
          , h = a.m;
        a: {
            var k = a.j;
            switch (g) {
            case 0:
                k = es(fs(f), k);
                break a;
            case 3:
                k = es(f, k);
                break a;
            case 2:
                var l = f.lastChild;
                k = es(l ? 1 == l.nodeType ? l : fs(l) : null, k);
                break a
            }
            k = !1
        }
        if (h = !k && !(!h && 2 == g && !gs(f)))
            f = 1 == g || 2 == g ? f : f.parentNode,
            h = !(f && !Am(f) && 0 >= f.offsetWidth);
        if (!h)
            return !1;
        c = null == c ? null : new Rl(null,{
            google_max_responsive_height: c
        });
        f = Sl(N(e.Ba, 2) || 0);
        g = e.o;
        g = null == g ? null : new Rl(null,{
            google_ml_rank: g
        });
        d = Ql(a.G, e.G ? e.G.j(b.L) : null, c, d || null, f, g);
        b = b.fill(a.D, d);
        if (!Cq(a, b, d))
            return !1;
        Tj(9, [e.o, e.Ua]);
        return !0
    }
    function Aq(a, b, c, d) {
        const e = c.ia ? c.ia : a.A
          , f = tq(e, b.j.length);
        return a.v.find({
            ic: ss(a),
            Vb: c.types,
            Xb: f.za,
            Ka: b,
            ra: a.J,
            ha: f.ha || void 0,
            Ca: !!a.l.Ca,
            Da: !!a.l.Da,
            wb: c.wb,
            minWidth: c.minWidth,
            maxWidth: c.maxWidth,
            gb: a.M,
            Ja: a.I,
            xb: c.xb,
            Ya: !!a.l.Ya,
            Ea: !!a.l.Ea,
            La: !!a.l.La,
            Kb: e.j
        }, d)
    }
    function ts(a) {
        return a.C ? a.C : a.C = a.j.google_ama_state
    }
    function ss(a) {
        var b = ts(a);
        if (null == b)
            return -1;
        b = b.placement;
        return "number" !== typeof b || 0 > b || b > a.v.l.j.length ? -1 : b
    }
    function Cq(a, b, c) {
        if (!b)
            return !1;
        try {
            Nm(a.j, b.ba, c)
        } catch (d) {
            return Em(b.ua),
            a.o.push(6),
            !1
        }
        return !0
    }
    class us {
        constructor(a, b, c, d, e={}) {
            this.v = a;
            this.D = b;
            this.j = c;
            this.A = d.ia;
            this.J = d.ra || [];
            this.G = d.Tc || null;
            this.M = d.gb || [];
            this.I = d.Ja || [];
            this.l = e;
            this.m = !1;
            this.H = [];
            this.o = [];
            this.C = void 0
        }
        K() {
            return this.j
        }
        X(a) {
            this.H.push(a)
        }
        nb() {
            return !!this.l.dc
        }
        Ta() {
            return !dq(this.j)
        }
    }
    const ps = a=>1 < (a.bottom - a.top) * (a.right - a.left)
      , rs = (a,b)=>b.top <= a;
    function vs(a, b, c, d, e) {
        this.qa = a;
        this.ea = b;
        this.Fa = c;
        this.j = d;
        this.l = e
    }
    ;var ws = (a,b,{Ta: c=!1, nb: d=!1, wd: e=!1}={})=>{
        const f = [];
        e && f.push(9);
        -1 < b.indexOf(3) && f.push(6);
        -1 < b.indexOf(4) && !d && c && f.push(8);
        -1 < b.indexOf(1) && (3 === a ? f.push(1, 5) : f.push(1, 2, 3));
        -1 < b.indexOf(2) && f.push(7);
        -1 < b.indexOf(4) && d && c && f.push(8);
        return f
    }
    ;
    function xs(a) {
        return new vs(a.j.v.l.filter(ep).j.length,a.j.H.slice(0),a.j.o.slice(0),a.j.v.l.j.length,a.j.v.o.j)
    }
    class ys {
        constructor(a, b, c) {
            this.o = a.slice(0);
            this.l = a.slice(0);
            this.m = Ma(this.l, 1);
            this.j = c
        }
    }
    ;function zs() {
        this.l = new As(this);
        this.j = 0
    }
    zs.prototype.resolve = function(a) {
        Bs(this);
        this.j = 1;
        this.o = a;
        Cs(this.l)
    }
    ;
    zs.prototype.reject = function(a) {
        Bs(this);
        this.j = 2;
        this.m = a;
        Cs(this.l)
    }
    ;
    function Bs(a) {
        if (0 != a.j)
            throw Error("Already resolved/rejected.");
    }
    function As(a) {
        this.j = a
    }
    As.prototype.then = function(a, b) {
        if (this.l)
            throw Error("Then functions already set.");
        this.l = a;
        this.m = b;
        Cs(this)
    }
    ;
    function Cs(a) {
        switch (a.j.j) {
        case 0:
            break;
        case 1:
            a.l && a.l(a.j.o);
            break;
        case 2:
            a.m && a.m(a.j.m);
            break;
        default:
            throw Error("Unhandled deferred state.");
        }
    }
    ;function Ds(a) {
        this.j = a;
        this.exception = void 0
    }
    ;function Es(a) {
        L(this, a, null, null)
    }
    A(Es, D);
    function Fs(a) {
        try {
            {
                const f = Gs(a).getItem("adsbygoogle_in_page_survey_freqcap");
                var b = f ? zd(Es, f) : null
            }
            if (b) {
                var c = N(b, 1);
                if (null == c)
                    var d = !0;
                else {
                    var e = N(a.j, 1) || 0;
                    d = c + e < (new Date).getTime()
                }
            } else
                d = !0;
            return d
        } catch (f) {
            return !1
        }
    }
    function Hs(a) {
        try {
            var b = (new Date).getTime()
              , c = new Es;
            var d = od(c, 1, b);
            Gs(a).setItem("adsbygoogle_in_page_survey_freqcap", d.C());
            return !0
        } catch (e) {
            return !1
        }
    }
    function Gs(a) {
        a = a.l.localStorage;
        if (!a)
            throw Error("No localStorage");
        return a
    }
    class Is {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    ;var Js = new tr("ar_eg ar_jo ar_ma ar_sa ar_xb ar bg bn bs ca cs da de_at de_ch de el en_au en_ca en_gb en_ie en_in en_nz en_sg en_xa en_xc en en_za es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et fil fi fr_ch fr gsw gu he hi hr hu id in it iw ja km kn ko ln lt lv ml mo mr ms nb nl no pa pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv te th tl tr uk ur vi zh_cn zh_hk zh_tw zh".split(" "));
    function Ks(a) {
        if (1 == N(a.o, 1) && Js.contains(a.m) && Fs(a.l)) {
            var b = Ls(a.j, a.A);
            b && Qq(6, a.j, Ms(a.m)).then(c=>{
                const d = {
                    win: a.j,
                    domInterface: {
                        getDocument: ()=>a.j.document,
                        getContainer: ()=>gp(b.R),
                        attachToDom: e=>kp(b, e)
                    },
                    webPropertyCode: a.v,
                    experimentIds: N(a.o, 2)
                };
                Hs(a.l) && c.handleRequest(d)
            }
            )
        }
    }
    class Ns {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.v = b;
            this.m = c.replace("-", "_").toLowerCase();
            this.o = d;
            this.A = e;
            this.l = new Is(a,O(d, wl, 3) || new wl)
        }
    }
    function Ls(a, b) {
        b = dp(b, a).filter(Mr([5]));
        b = lp(b, a);
        const c = 1.5 * X(a).clientHeight;
        a = b.filter(d=>d.L.j > c);
        a.sort((d,e)=>d.L.j - e.L.j);
        return a[0] || null
    }
    function Ms(a) {
        a = "__" + a;
        const b = Ug();
        return Pj(b, "/pagead/js/" + Lf() + "/r20190131/user_satisfaction/in_page_surveys" + a + ".js", Rf ? "https" : "http")
    }
    ;class Os {
        j() {
            return new Rl([],{
                ["google_tag_origin"]: "qs"
            })
        }
    }
    ;class Ps {
        j() {
            return new Rl(["adsbygoogle-resurrected-ad-slot"],{})
        }
    }
    ;function Qs(a) {
        this.j = a
    }
    Qs.prototype.l = function(a, b, c, d) {
        if (!this.j)
            return null;
        const e = this.j.google_ad_format || null
          , f = this.j.google_ad_slot || null;
        if (c = c.style) {
            var g = [];
            for (let h = 0; h < c.length; h++) {
                const k = c.item(h);
                "width" !== k && "height" !== k && g.push({
                    ub: k,
                    value: c.getPropertyValue(k)
                })
            }
            c = {
                pa: g
            }
        } else
            c = {};
        a = Lm(d.document, a, f, e, c, b);
        a.ba.setAttribute("data-pub-vars", JSON.stringify(this.j));
        return a
    }
    ;
    Qs.prototype.m = function() {
        return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
    }
    ;
    function Rs(a) {
        return Bm(a.j.document).map(b=>{
            const c = new $o(b,3);
            b = new Qs(Pm(a.j, b));
            return new cp(c,b,a.l,!1,0,[],null,a.j,null)
        }
        )
    }
    class Ss {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    }
    ;const Ts = {
        Bb: "10px",
        bb: "10px"
    };
    function Us(a) {
        return pm(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b=>new cp(new $o(b,1),new Wo(Ts),a.l,!1,0,[],null,a.j,null))
    }
    class Vs {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    }
    ;function Ws(a) {
        this.j = a
    }
    function Xs(a, b) {
        a = b.v(a.j);
        a.r = .1;
        W("ama_failure", a, .1)
    }
    ;var Ys = (a,b,c,d,e,f)=>{
        try {
            const g = a.j
              , h = $d(a, "SCRIPT");
            h.async = !0;
            Gc(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", ()=>{
                e();
                d && g.head.removeChild(h)
            }
            );
            h.addEventListener("error", ()=>{
                0 < c ? Ys(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h),
                f())
            }
            )
        } catch (g) {
            f()
        }
    }
    ;
    function Zs(a) {
        L(this, a, null, null)
    }
    A(Zs, D);
    function $s(a, b, c, d) {
        b = zd(Zs, b);
        b = new pb(qb,N(b, 4) || "");
        Ys(a.j, b, 3, !1, c, ()=>{
            d(!1)
        }
        )
    }
    class at {
        constructor(a) {
            this.j = new Nd(a)
        }
    }
    ;var bt = (a,b)=>{
        Object.defineProperty(q, a, {
            configurable: !1,
            get: function() {
                return b
            },
            set: ja
        })
    }
    ;
    var dt = (a,b)=>{
        ct(a, "internal_api_load_with_sb", (c,d,e)=>{
            $s(b, c, d, e)
        }
        );
        ct(a, "internal_api_sb", ()=>{}
        )
    }
      , ct = (a,b,c)=>{
        a = q.btoa(a + b);
        bt(a, c)
    }
      , et = (a,...b)=>{
        a = q.btoa(a + "internal_api_load_with_sb");
        a = q[a];
        if (pa(a))
            a.apply(null, b);
        else
            throw Error("API not exported.");
    }
    ;
    function ft() {
        const a = ()=>{
            if (!q.frames.googlefcPresent)
                if (document.body) {
                    const b = document.createElement("iframe");
                    b.style.display = "none";
                    b.style.width = "0px";
                    b.style.height = "0px";
                    b.style.border = "none";
                    b.style.zIndex = "-1000";
                    b.style.left = "-1000px";
                    b.style.top = "-1000px";
                    b.name = "googlefcPresent";
                    document.body.appendChild(b)
                } else
                    q.setTimeout(a, 5)
        }
        ;
        a()
    }
    function gt(a) {
        et(a.j, a.l.C(), ()=>{
            {
                var b = a.j;
                const c = q[q.btoa(b + "cached_js")];
                c && (q.atob(c),
                b = q.btoa(b + "cached_js"),
                da(b, null, void 0))
            }
        }
        , ()=>{}
        )
    }
    class ht {
        constructor(a) {
            this.m = q.document;
            this.o = new at(this.m);
            this.j = a;
            var b = tb(new lb(mb,"https://fundingchoicesmessages.google.com/uf/%{externalId}"), {
                externalId: this.j
            });
            a = new Zs;
            b = sb(b).toString();
            od(a, 4, b);
            this.l = a
        }
        start() {
            try {
                ft(),
                dt(this.j, this.o),
                q.googlefc = q.googlefc || {},
                "callbackQueue"in q.googlefc || (q.googlefc.callbackQueue = []),
                gt(this)
            } catch (a) {}
        }
    }
    ;var jt = (a,b,c,d,e=null)=>{
        it(a, new Ws(a), b, c, d, e, new cm(a))
    }
      , it = (a,b,c,d,e,f=null,g=null)=>{
        if (c)
            if (d) {
                var h = [];
                O(d, kl, 18) && h.push(2);
                e.P && h.push(0);
                O(d, il, 14) && h.push(1);
                O(d, xl, 21) && O(O(d, xl, 21), yl, 1) && h.push(3);
                try {
                    kt(new lt(a,b,c,d,e,h,f,null,g))
                } catch (k) {
                    Xs(b, Jp(Lp(Kp(Hp(new Mp(0), c), d), h).X(1), k))
                }
            } else
                Xs(b, Hp(new Mp(0), c).X(8));
        else
            Xs(b, (new Mp(0)).X(9))
    }
    ;
    function kt(a) {
        a.G.forEach(b=>{
            switch (b) {
            case 0:
                mt(a) && nt("p");
                Ll(a.j) && 1 === N(Ll(a.j), 1) && (b = O(Ll(a.j), Il, 6)) && 2 === N(b, 1) && Om(a.l);
                if (Ml(a.j) && sd(Ml(a.j), 12)) {
                    b = a.l;
                    var c = O(a.j, Kl, 20), d = Co(b), e;
                    if (e = d)
                        e = (e = O(d, Kl, 7)) || c ? e && c ? N(e, 1) !== N(c, 1) : !0 : !1;
                    if (e) {
                        xd(d, []);
                        vd(d, 6, void 0);
                        vd(d, 7, c);
                        c = d.C();
                        try {
                            b.localStorage.setItem("google_ama_settings", c)
                        } catch (p) {}
                    }
                }
                b = a.m.pd;
                d = Ml(a.j) ? sd(Ml(a.j), 7) : !1;
                c = qq(a.l, b);
                a.m.P && null != N(a.m.P, 10) ? (d = pd(O(a.m.P, Gl, 10), 1),
                null !== d && void 0 !== d && (c = iq(a.l, d, !1, b))) : d && (d = Ml(a.j) && null != N(Ml(a.j), 9) ? pd(Ml(a.j), 9) : null,
                null !== d && (c = iq(a.l, d, !0)));
                d = a.m.P ? N(a.m.P, 6) : [];
                e = a.m.P ? P(a.m.P, Tk, 5) : [];
                var f = a.j;
                var g = P(f, ul, 1)
                  , h = a.m.P && Nl(a.m.P, 1) ? "text_image" : "text"
                  , k = new Os
                  , l = new Ps
                  , m = dp(g, a.l, {
                    Mc: k,
                    ad: new Zo(h)
                });
                g.length != m.length && a.D.push(13);
                m = m.concat(Us(new Vs(a.l,k)));
                g = 0;
                Ll(f) && 1 === N(Ll(f), 1) && (k = O(Ll(f), Il, 6)) && (g = N(k, 2) || 0,
                1 === N(k, 1) && (l = Rs(new Ss(a.l,l)),
                m = m.concat(l)));
                m = m.concat($p(f, h, a.l));
                f = new bs(m,{},a.l,g);
                h = a.v;
                m = a.l;
                d = {
                    ia: c,
                    Tc: a.J,
                    ra: a.m.ra,
                    gb: d,
                    Ja: e
                };
                Ml(a.j) ? (e = Ml(a.j),
                c = {
                    Ca: sd(e, 14),
                    Da: sd(e, 2),
                    Lb: sd(e, 3),
                    nc: sd(e, 4),
                    Mb: sd(e, 5),
                    dc: sd(e, 6),
                    $b: td(e, 8, 0),
                    Zb: N(e, 10),
                    Ya: sd(e, 12),
                    Ea: sd(e, 16),
                    La: ot(a, c, e)
                }) : c = {
                    Ca: !1,
                    Da: !1,
                    Lb: !1,
                    nc: !1,
                    Mb: !1,
                    dc: !1,
                    $b: 0,
                    Zb: 0,
                    Ya: !1,
                    Ea: !1,
                    La: !1
                };
                a.o = new us(f,h,m,d,c);
                e = a.m.P ? N(a.m.P, 2) : [];
                b = N(b, 1);
                c = a.o;
                d = a.l;
                e = ws(b, e, {
                    Ta: c.Ta(),
                    nb: c.nb(),
                    wd: !!c.l.Vc
                });
                b = new ys(e,b,c,d);
                a.A = b;
                b = a.A;
                c = new zs;
                for (b.j.m = !0; 0 < b.l.length; )
                    d = b,
                    (e = wq[b.l[0]]) ? d = e(d.j) : (d.j.X(12),
                    d = !0),
                    d || b.j.X(5),
                    b.l.shift();
                try {
                    c.resolve(new Ds(xs(b)))
                } catch (p) {
                    c.reject(p)
                }
                b = c.l;
                b.then(wa(a.T, a), wa(a.H, a));
                break;
            case 1:
                if (d = O(a.j, il, 14))
                    if (b = a.l,
                    c = a.l.location.href,
                    e = new lm(Fn(Bn(b)),5,200),
                    c = new wo(b,c,d,new mm(b),e),
                    d = N(c.j, 1))
                        for (c.m.O(),
                        b = to(c),
                        h = 0; h < b.length; ++h)
                            if (e = b[h],
                            f = ln(e)) {
                                b = c.m;
                                h = e.v;
                                e = N(e.m, 3) || "";
                                c = N(c.j, 3) || null;
                                m = "afs_container_" + ra(f);
                                f.id = m;
                                d = {
                                    pubId: d,
                                    styleId: e,
                                    query: h
                                };
                                c && (d.fexp = c);
                                b.j._googCsa("ads", d, {
                                    container: m
                                });
                                break
                            }
                break;
            case 2:
                if (b = O(a.j, kl, 18))
                    c = a.M || new ht(a.v),
                    b = new Dp(a.l,c,b,new zp(a.l),P(a.j, ul, 1)),
                    1 == N(b.o, 1) && (null == b.j && (c = b.m,
                    d = c.j.nextRestrictionId++,
                    c.j.maxZIndexRestrictions[d] = 2147483643,
                    xp(c),
                    c = d,
                    b.j = c),
                    Ap(b),
                    b.v.start());
                break;
            case 3:
                (b = O(a.j, xl, 21)) && (b = O(b, yl, 1)) && (c = O(a.j, ll, 22)) && (c = N(c, 1)) && Ks(new Ns(a.l,a.v,c,b,P(a.j, ul, 1)))
            }
        }
        )
    }
    function ot(a, b, c) {
        switch (N(c, 17)) {
        case 0:
            return !1;
        case 1:
            return !0;
        case 2:
            return a.m.P && null != N(a.m.P, 10) ? .5 <= (pd(O(a.m.P, Gl, 10), 1) || 0) : !0;
        case 3:
            return a = hs(a.l),
            a = null != a.j.rb ? a.j.rb : null,
            b = (b.j ? b.j.ca : void 0) || 0,
            null != a && a <= b;
        default:
            return !1
        }
    }
    function pt(a, b) {
        for (var c = Ip(Ip(new Mp(b.qa), b.ea), a.D), d = b.Fa, e = 0; e < d.length; e++)
            a: {
                for (var f = d[e], g = 0; g < c.o.length; g++)
                    if (c.o[g] == f)
                        break a;
                c.o.push(f)
            }
        c.j.eatf = b.Za;
        c.j.reatf = b.jb;
        c.j.a = a.A.o.slice(0).join(",");
        c = Hp(Lp(Kp(c, a.j), a.G), a.v);
        if (d = b.Fb)
            c.j.as_count = d.xc,
            c.j.d_count = d.Rc,
            c.j.ng_count = d.ld,
            c.j.am_count = d.Ac,
            c.j.atf_count = d.yc,
            c.j.mdns = Np(d.ed),
            c.j.alldns = Np(d.zc);
        d = b.tb;
        null != d && (c.j.allp = d);
        if (d = b.Uc) {
            e = [];
            for (var h of em(d))
                0 < d.get(h).length && (f = d.get(h)[0],
                e.push("(" + [h, f.Hc, f.Cd].join() + ")"));
            c.j.fd = e.join(",")
        }
        h = b.sb;
        null != h && (c.j.pgh = h);
        void 0 !== b.exception && Jp(c, b.exception).X(1);
        0 < b.ea.length || 0 < a.D.length || void 0 !== b.exception ? Xs(a.I, c) : (a = c.v(a.I.j),
        a.r = .1,
        W("ama_success", a, .1))
    }
    function qt(a) {
        return Ll(a.j) && 1 === N(Ll(a.j), 1) ? !(O(Ll(a.j), Il, 6) && 1 <= (N(O(Ll(a.j), Il, 6), 3) || 0)) : !1
    }
    function rt(a) {
        if (qt(a)) {
            a = a.o;
            var b = An({
                wa: !0,
                xa: !0
            }, a.j);
            a = 0 < os(b, a.j)
        } else
            a = a.o.j,
            b = zn({
                ga: !1,
                va: !1
            }, a),
            a = 0 < os(b, a);
        return a
    }
    function st(a) {
        mt(a) && (nt("s"),
        a.C.O(),
        am(a.C, ()=>{
            nt("d");
            a.C.Oa()
        }
        ))
    }
    function nt(a) {
        W("ama_inf_scr", {
            r: a
        }, 1)
    }
    function mt(a) {
        return Ml(a.j) && sd(Ml(a.j), 18) ? !0 : !1
    }
    class lt {
        constructor(a, b, c, d, e, f, g, h, k) {
            this.l = a;
            this.I = b;
            this.v = c;
            this.j = d;
            this.m = e;
            this.G = f;
            this.J = g || null;
            this.D = [];
            this.M = h;
            this.C = k
        }
        T(a) {
            try {
                const t = rt(this) || qt(this) ? rt(this) : void 0;
                if (Ml(this.j) && sd(Ml(this.j), 12)) {
                    if (qt(this)) {
                        {
                            var b = this.o;
                            const C = An({
                                wa: !0,
                                xa: !0
                            }, b.j);
                            var c = os(C, b.j)
                        }
                    } else {
                        {
                            var d = this.o;
                            const C = zn({
                                ga: !1,
                                va: !1
                            }, d.j);
                            c = os(C, d.j)
                        }
                    }
                    const z = O(this.j, Lk, 19);
                    if (z) {
                        const C = qq(this.l, z)
                          , r = new xo;
                        var e = tq(C, 0).za;
                        od(r, 3, e);
                        od(r, 1, C.l);
                        Do({
                            ta: t,
                            Pa: c,
                            $a: r
                        }, this.l)
                    } else
                        Do({
                            ta: t,
                            Pa: c
                        }, this.l)
                } else
                    Do({
                        ta: t
                    }, this.l);
                st(this);
                {
                    var f = rt(this);
                    {
                        var g = ts(this.o);
                        const C = a.j
                          , r = C.j;
                        let F = C.qa
                          , M = C.ea.slice()
                          , Y = C.Fa.slice()
                          , U = a.exception;
                        if (g) {
                            g.numAutoAdsPlaced ? F += g.numAutoAdsPlaced : this.A.m && Y.push(13);
                            void 0 !== g.exception && (U = g.exception);
                            var h = {
                                qa: F,
                                tb: r,
                                ea: C.ea.slice(),
                                Fa: Y,
                                exception: U,
                                jb: f,
                                Za: !!g.eatf
                            }
                        } else
                            Y.push(12),
                            this.A.m && Y.push(13),
                            h = {
                                qa: F,
                                tb: r,
                                ea: M,
                                Fa: Y,
                                exception: U,
                                jb: f,
                                Za: !1
                            }
                    }
                    e = h;
                    e.Fb = qs(this.o.j);
                    const z = a.j.l;
                    z && (e.Uc = z);
                    e.sb = Xm(this.l);
                    var k;
                    if (!(k = Of))
                        if (null != Rj)
                            k = Rj;
                        else {
                            Rj = !1;
                            try {
                                const C = Vg(q);
                                if (C && -1 != C.location.hash.indexOf("auto_ads_logging") || q.localStorage.getItem("auto_ads_logging"))
                                    Rj = !0
                            } catch (C) {}
                            k = Rj
                        }
                    if (k) {
                        var l = this.o.v.l.j.slice(0);
                        a = [];
                        for (const C of l) {
                            l = {};
                            const r = C.C;
                            for (const M of em(r))
                                l[M] = r.get(M);
                            const F = {
                                anchorElement: C.v.j(C.j),
                                position: C.l(),
                                clearBoth: C.A,
                                locationType: C.Ua,
                                placed: C.m,
                                placementProto: C.H ? wd(C.H) : null,
                                rejectionReasons: l
                            };
                            a.push(F)
                        }
                        var m = {
                            placementIdentifiers: a
                        };
                        Tj(14, [m, this.o.D])
                    }
                    var p = e
                }
                pt(this, p)
            } catch (t) {
                this.H(t)
            }
        }
        H(a) {
            pt(this, {
                qa: 0,
                tb: void 0,
                ea: [],
                Fa: [],
                exception: a,
                jb: void 0,
                Za: void 0,
                Fb: void 0
            })
        }
    }
    ;var tt = a=>5 == a.google_pgb_reactive && !!a.google_reactive_ads_config
      , ut = a=>"number" === typeof a.google_reactive_sra_index
      , zt = (a,b)=>{
        const c = b.j
          , d = b.B;
        d.google_reactive_plat = dr(c, d);
        var e = er(a);
        e && (d.google_reactive_plaf = e);
        (e = fr(a)) && (d.google_reactive_fba = e);
        vt(a, d);
        e = Zq(c.location);
        wt(a, e, d);
        e ? (d.fra = e,
        d.google_pgb_reactive = 6) : d.google_pgb_reactive = 5;
        const f = ng() || Hj(Qg(b.pubWin));
        e = V(429, (k,l)=>xt(c, d.google_ad_client, a, f, k, l));
        const g = Aj(c)
          , h = V(430, xa(Bk, c, 431, Nh));
        Bi(c, "rsrai", e, h);
        g.wasReactiveTagRequestSent = !0;
        yt(b, a)
    }
    ;
    const yt = (a,b)=>{
        const c = a.j
          , d = a.B
          , e = qa(b.page_level_pubvars) ? b.page_level_pubvars : {};
        a = V(353, (f,g)=>{
            var h = d.google_ad_client;
            if (xf(g.origin, Of))
                a: {
                    f = f.config;
                    try {
                        var k = c.localStorage.getItem("google_ama_config")
                    } catch (t) {
                        k = null
                    }
                    try {
                        var l = k ? zd(Al, k) : null
                    } catch (t) {
                        l = null
                    }
                    k = l;
                    b: {
                        if (f)
                            try {
                                var m = zd(Al, f);
                                break b
                            } catch (t) {
                                Ul(c, {
                                    cfg: 1,
                                    inv: 1
                                })
                            }
                        m = null
                    }
                    if (m) {
                        l = m;
                        k = new Cl;
                        vd(l, 3, k);
                        f = Ml(l) && N(Ml(l), 13) ? N(Ml(l), 13) : 1;
                        od(k, 1, Date.now() + 864E5 * f);
                        k = new l.constructor(Ad(wd(l)));
                        Ml(l) && (f = new Jl,
                        g = sd(Ml(l), 12),
                        f = od(f, 12, g),
                        l = sd(Ml(l), 15),
                        l = od(f, 15, l),
                        vd(k, 15, l));
                        l = P(k, ul, 1);
                        for (f = 0; f < l.length; f++)
                            od(l[f], 11, []);
                        vd(k, 22, void 0);
                        try {
                            c.localStorage.setItem("google_ama_config", k.C())
                        } catch (t) {
                            Ul(c, {
                                lserr: 1
                            })
                        }
                        l = m;
                        k = Pl(c, P(l, Dl, 7));
                        b: {
                            if (k && (f = N(k, 3),
                            g = O(l, Ok, 9),
                            f && g)) {
                                c: {
                                    g = P(g, Nk, 1);
                                    for (p of g)
                                        if (N(p, 1) == f) {
                                            var p = O(p, Lk, 2) || null;
                                            break c
                                        }
                                    p = null
                                }
                                if (p)
                                    break b
                            }
                            p = O(l, Lk, 8) || new Lk
                        }
                        p = {
                            pd: p
                        };
                        k && (p.P = k);
                        k && Nl(k, 3) && (p.ra = [1]);
                        if (7 == e.google_pgb_reactive && (k = p.P,
                        !k || !qd(k, 8))) {
                            h = !1;
                            break a
                        }
                        Zg(c, 2) && (Tj(5, [wd(m)]),
                        l = Vl(e),
                        k = (k = p.P) && N(k, 4) || "",
                        l.google_package = k,
                        k = new Rl(["google-auto-placed"],l),
                        jt(c, h, m, p, k));
                        h = !0
                    } else {
                        if (k) {
                            Ul(c, {
                                cfg: 1,
                                cl: 1
                            });
                            try {
                                c.localStorage.removeItem("google_ama_config")
                            } catch (t) {
                                Ul(c, {
                                    lserr: 1
                                })
                            }
                        }
                        h = !1
                    }
                }
            else
                h = !1;
            return h
        }
        );
        b = V(353, xa(Bk, c, 353, Nh));
        Bi(c, "apcnf", a, b)
    }
    ;
    var xt = (a,b,c,d,e,f)=>{
        if (!xf(f.origin, Of))
            return !1;
        e = e.data;
        if (!e || !oa(e))
            return !1;
        if (!Zg(a, 1))
            return !0;
        Tj(6, [e]);
        const g = [];
        f = [];
        const h = Aj(a);
        for (let k = 0; k < e.length; k++) {
            if (!e[k])
                continue;
            const l = e[k]
              , m = l.adFormat;
            h && l.enabledInAsfe && (h.reactiveTypeEnabledInAsfe[m] = !0);
            l.noCreative || (l.google_reactive_sra_index = k,
            g.push(l),
            f.push(m))
        }
        W("rasra::pm", {
            rt: f.join(","),
            c: b
        }, .1);
        ir(522, k=>{
            At(g, a, b, k, c, d)
        }
        );
        return !0
    }
      , At = (a,b,c,d,e,f)=>{
        const g = [];
        for (let l = 0; l < a.length; l++) {
            const m = a[l]
              , p = m.adFormat;
            var h = m.adKey
              , k = m.piggyback;
            const t = d.configProcessorForAdFormat(p);
            if (p && t && (k || h)) {
                if (k)
                    h = lr(p, e, m.pubVars),
                    h.google_pgb_reactive = h.google_pgb_reactive || 5,
                    m.pubVars = h;
                else {
                    delete m.adKey;
                    k = {};
                    S.F().j(289, !1) && (k.google_reactive_viewport_size = f);
                    const z = e.page_level_pubvars;
                    qa(z) && jb(k, z);
                    k.google_ad_unit_key = h;
                    k.google_reactive_sra_index = m.google_reactive_sra_index;
                    30 === p && (k.google_reactive_ad_format = 30);
                    S.F().j(285, !1) && (k.google_enable_single_iframe = !0);
                    k.google_pgb_reactive = k.google_pgb_reactive || 5;
                    m.pubVars = k
                }
                delete m.google_reactive_sra_index;
                g.push(p);
                wi(466, ()=>t.verifyAndProcessConfig(b, m))
            } else
                W("rasra::ivc", {
                    af: p,
                    ak: h,
                    c
                }, .1)
        }
        W("rasra::pr", {
            rt: g.join(","),
            c
        }, .1)
    }
      , vt = (a,b)=>{
        const c = [];
        let d = !1;
        T(yj, (e,f)=>{
            let g;
            if (a.hasOwnProperty(f)) {
                const h = a[f];
                qa(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
            }
            f = yj[f] - 1;
            c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+",
            d = d || g)
        }
        );
        d && (b.google_reactive_sra_channels = c.join(","))
    }
      , wt = (a,b,c)=>{
        const d = a.page_level_pubvars;
        !c.google_adtest && ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
    }
    ;
    Qc("script");
    /* 
 
 Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
 
 Licensed under the Apache License, Version 2.0 (the "License"); 
 you may not use this file except in compliance with the License. 
 You may obtain a copy of the License at 
 
      http://www.apache.org/licenses/LICENSE-2.0 
 
 Unless required by applicable law or agreed to in writing, software 
 distributed under the License is distributed on an "AS-IS" BASIS, 
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 See the License for the specific language governing permissions and 
 limitations under the License. 
*/
    var Bt = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };
    var Ct = "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_semantic_area google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_apsail google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ad_positions google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_content_recommendation_use_square_imgs google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_bfa ebfa ebfaca google_eids google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_full_width_responsive_allowed efwr google_full_width_responsive gfwroh gfwrow gfwroml gfwromr gfwroz gfwrnh gfwrnwer gfwrnher google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_max_responsive_height google_ml_rank google_mtl google_native_ad_template google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_only_pyv_ads google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width rpe google_responsive_formats google_responsive_auto_format armr google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_tag_origin google_tag_partner google_targeting google_tfs google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_yt_pt google_yt_up google_package google_debug_params google_enable_single_iframe dash google_refresh_count google_restrict_data_processing".split(" ")
      , Dt = a=>(a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null
      , Et = a=>{
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"),
            (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1]))
                return a[1];
        return null
    }
      , Ht = a=>{
        try {
            a: {
                var b = a.document.getElementsByTagName("script")
                  , c = a.navigator && a.navigator.userAgent || "";
                const f = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(c) || /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !Rg() ? Dt : Et;
                for (let g = b.length - 1; 0 <= g; g--) {
                    const h = b[g];
                    if (!h.google_parsed_script) {
                        h.google_parsed_script = !0;
                        const k = f(h);
                        if (k) {
                            var d = k;
                            break a
                        }
                    }
                }
                d = null
            }
        } catch (f) {
            return !1
        }
        if (!d)
            return !1;
        try {
            {
                c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                b = {};
                let f;
                for (; f = c.exec(d); )
                    b[f[1]] = Ft(f[2]);
                var e = b
            }
            Gt(e, a)
        } catch (f) {
            return !1
        }
        return !!a.google_ad_client
    }
      , It = a=>{
        const b = {};
        null == a.google_ad_client && Ht(a) && (b.google_loader_features_used = 2048);
        Gt(a, b);
        return b
    }
      , Ft = a=>{
        switch (a) {
        case "true":
            return !0;
        case "false":
            return !1;
        case "null":
            return null;
        case "undefined":
            break;
        default:
            try {
                const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                if (b)
                    return b[1] || b[2] || "";
                if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                    const c = parseFloat(a);
                    return c === c ? c : void 0
                }
            } catch (b) {}
        }
    }
      , Gt = (a,b)=>{
        for (let c = 0; c < Ct.length; c++) {
            const d = Ct[c];
            null == b[d] && null != a[d] && (b[d] = a[d])
        }
    }
    ;
    function Jt(a) {
        a = Aj(a);
        a.stateForType[16] || (a.stateForType[16] = []);
        return a.stateForType[16]
    }
    function Kt(a, b, c) {
        const d = Lt(a, b);
        b.google_full_width_responsive_allowed && (a.style.marginLeft = b.gfwroml || "",
        a.style.marginRight = b.gfwromr || "",
        a.style.height = b.gfwroh ? b.gfwroh + "px" : "",
        a.style.width = b.gfwrow ? b.gfwrow + "px" : "",
        a.style.zIndex = b.gfwroz || "",
        delete b.google_full_width_responsive_allowed);
        delete b.google_ad_format;
        delete b.google_ad_width;
        delete b.google_ad_height;
        delete b.google_content_recommendation_ui_type;
        delete b.google_content_recommendation_rows_num;
        delete b.google_content_recommendation_columns_num;
        w().google_spfd(a, b, c);
        const e = Lt(a, b);
        !e && d && 1 == a.childNodes.length ? (Mt(d, !1),
        b.google_reactive_ad_format = 16,
        b.google_ad_section = "responsive_resize",
        kr(a, b, c)) : e && d ? e != d && (Mt(d, !1),
        Mt(e, !0)) : W("auto_size_refresh", {
            context: "showOrHideElm",
            url: c.location.href,
            nodes: a.childNodes.length
        })
    }
    function Nt(a, b, c) {
        if (!xm(c, b))
            return ()=>{}
            ;
        const d = Ot(c, b);
        if (!d)
            return ()=>{}
            ;
        const e = Jt(b);
        a = a == c ? It(a) : gb(c);
        const f = {
            vb: d,
            B: a,
            offsetWidth: d.offsetWidth
        };
        e.push(f);
        return ()=>Ma(e, f)
    }
    function Ot(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a)
            return null;
        for (a = a.parentElement; a && !Og.test(a.className); )
            a = a.parentElement;
        return a
    }
    function Lt(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {}
              , k = a.childNodes[g];
            var c = k.style
              , d = h
              , e = ["width", "height"];
            for (let l = 0; l < e.length; l++) {
                const m = "google_ad_" + e[l];
                if (!d.hasOwnProperty(m)) {
                    var f = Xe(c[e[l]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height)
                return k
        }
        return null
    }
    function Mt(a, b) {
        a.style.display = b ? "inline-block" : "none"
    }
    class Pt {
        constructor() {
            this.j = null
        }
        O(a) {
            const b = Aj(a);
            b.wasReactiveAdConfigReceived[16] || (b.wasReactiveAdConfigReceived[16] = !0,
            this.j = a.innerHeight >= a.innerWidth ? 0 : 90,
            Q(a, "resize", ()=>{
                var c = a.innerHeight >= a.innerWidth ? 0 : 90;
                if (this.j != c) {
                    this.j = c;
                    c = Jt(a);
                    for (let d = 0; d < c.length; d++)
                        if (c[d].vb.offsetWidth != c[d].offsetWidth || c[d].B.google_full_width_responsive_allowed)
                            c[d].offsetWidth = c[d].vb.offsetWidth,
                            wi(467, xa(Kt, c[d].vb, c[d].B, a))
                }
            }
            ))
        }
    }
    la(Pt);
    const Qt = {
        ["client"]: "google_ad_client",
        ["format"]: "google_ad_format",
        ["slotname"]: "google_ad_slot",
        ["ad_type"]: "google_ad_type"
    };
    var Rt = a=>{
        Ne(Qt, (b,c)=>{
            try {
                null != q[b] && (a[c] = q[b])
            } catch (d) {}
        }
        )
    }
      , St = a=>{
        a.shv = Lf()
    }
    ;
    qi.o = !Of;
    var Tt = class {
        constructor(a, b, c) {
            this.o = a;
            this.m = b;
            this.j = c;
            this.l = null;
            this.v = this.A = 0
        }
        C() {
            10 <= ++this.A && q.clearInterval(this.l);
            var a = this.m.parentElement;
            var b = a ? (a = Ie(a, this.o)) ? a.direction : "" : "";
            var c = this.o;
            a = this.m;
            if (0 === zm(c, a, b))
                a = !1;
            else {
                ym(a, b, "0px");
                var d = zm(c, a, b);
                ym(a, b, -1 * d + "px");
                c = zm(c, a, b);
                0 !== c && c !== d && ym(a, b, d / (c - d) * d + "px");
                a = !0
            }
            c = a;
            a = wm(this.m, this.o);
            null != a && 0 === a.x || q.clearInterval(this.l);
            c && (c = (Yg(this.j).eids || []).join(","),
            this.v++,
            W("rspv:al", {
                aligns: this.v,
                attempt: this.A,
                client: this.j.google_ad_client,
                eoffs: null != a ? a.x : null,
                eids: c,
                slot: this.j.google_ad_slot,
                url: this.j.google_page_url
            }, .01))
        }
    }
    ;
    function Ut(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }
    function Vt(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && Ut(a) && Dg(a.nq) && Dg(a.nqa) && Dg(a.al) && Dg(a.rl)
    }
    function Wt(a) {
        const b = V(189, wa(a.M, a));
        a.l.setTimeout(b, 0)
    }
    class Xt {
        constructor(a) {
            this.o = [];
            this.l = a || window;
            this.j = 0;
            this.m = null;
            this.D = 0
        }
        G(a, b) {
            0 != this.j || 0 != this.o.length || b && b != window ? this.v(a, b) : (this.j = 2,
            this.C(new Yt(a,window)))
        }
        v(a, b) {
            this.o.push(new Yt(a,b || this.l));
            Wt(this)
        }
        I(a) {
            this.j = 1;
            if (a) {
                const b = V(188, wa(this.A, this, !0));
                this.m = this.l.setTimeout(b, a)
            }
        }
        A(a) {
            a && ++this.D;
            1 == this.j && (null != this.m && (this.l.clearTimeout(this.m),
            this.m = null),
            this.j = 0);
            Wt(this)
        }
        J() {
            return !(!window || !Array)
        }
        H() {
            return this.D
        }
        M() {
            if (0 == this.j && this.o.length) {
                const a = this.o.shift();
                this.j = 2;
                const b = V(190, wa(this.C, this, a));
                a.win.setTimeout(b, 0);
                Wt(this)
            }
        }
        C(a) {
            this.j = 0;
            a.j()
        }
    }
    var Zt;
    Xt.prototype.nq = Xt.prototype.G;
    Xt.prototype.nqa = Xt.prototype.v;
    Xt.prototype.al = Xt.prototype.I;
    Xt.prototype.rl = Xt.prototype.A;
    Xt.prototype.sz = Xt.prototype.J;
    Xt.prototype.tc = Xt.prototype.H;
    var Yt = class {
        constructor(a, b) {
            this.j = a;
            this.win = b
        }
    }
    ;
    class $t extends Xf {
        constructor(a, b, c, d=!1) {
            super();
            this.j = a;
            this.na = b;
            this.oc = c;
            this.uc = d;
            this.Ga = {};
            this.Ha = oi(this.na, 168, (e,f)=>{
                a: {
                    try {
                        if (!xf(f.origin, this.uc))
                            break a
                    } catch (k) {
                        break a
                    }
                    const g = e.msg_type;
                    let h;
                    "string" === typeof g && (h = this.Ga[g]) && h.call(this, e, f)
                }
            }
            );
            this.Db = oi(this.na, 169, (e,f)=>Bk(this.j, "ras::xsf", this.oc, e, f));
            this.T = [];
            this.J(this.Ga);
            this.T.push(Ai(this.j, "sth", this.Ha, this.Db))
        }
        l() {
            for (const a of this.T)
                a();
            this.T.length = 0;
            super.l()
        }
    }
    ;class au extends $t {
        constructor(a) {
            super(a, qi, Nh, Of);
            this.j = a
        }
    }
    ;function bu(a) {
        try {
            const b = a.localStorage.getItem("google_adsense_settings");
            if (!b)
                return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : bb(c, (d,e)=>Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && oa(d))
        } catch (b) {
            return {}
        }
    }
    class cu extends au {
        constructor(a, b) {
            super(a);
            this.m = b;
            this.o = ()=>{}
            ;
            Q(this.m, "load", this.o)
        }
        l() {
            this.m && de(this.m, "load", this.o);
            super.l();
            this.m = null
        }
        J(a) {
            a["adsense-labs"] = this.v
        }
        v(a) {
            if (a = Ak(a).settings)
                try {
                    var b = new ke(JSON.parse(a));
                    if (null != N(b, 1)) {
                        {
                            var c = this.j
                              , d = N(b, 1) || "";
                            const e = bu(c);
                            null !== b && (e[d] = wd(b));
                            try {
                                c.localStorage.setItem("google_adsense_settings", JSON.stringify(e))
                            } catch (f) {}
                        }
                    }
                } catch (e) {}
        }
    }
    ;let du = (new Date).getTime();
    var fu = a=>{
        const b = {};
        b.dtd = eu((new Date).getTime(), du);
        return Gg(b, a)
    }
      , eu = (a,b,c=1E5)=>{
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    }
    ;
    class gu {
        constructor(a) {
            this.j = a;
            a.google_iframe_oncopy || (a.google_iframe_oncopy = {
                handlers: {},
                upd: (b,c)=>{
                    {
                        var d = b
                          , e = /\brx=(\d+)/;
                        const f = e.exec(d);
                        f && (d = d.replace(e, "rx=" + (+f[1] + 1 || 1)))
                    }
                    e = Number;
                    a: {
                        if (b && (b = b.match("dt=([^&]+)")) && 2 == b.length) {
                            b = b[1];
                            break a
                        }
                        b = ""
                    }
                    b = e(b);
                    d = d.replace(/&dtd=(\d+|-?M)/, "&dtd=" + eu((new Date).getTime(), b));
                    this.set(c, d);
                    return c = d
                }
            });
            this.l = a.google_iframe_oncopy
        }
        set(a, b) {
            this.l.handlers[a] = b;
            this.j.addEventListener && this.j.addEventListener("load", ()=>{
                {
                    const c = this.j.document.getElementById(a);
                    try {
                        const d = c.contentWindow.document;
                        if (c.onload && d && (!d.body || !d.body.firstChild))
                            c.onload()
                    } catch (d) {}
                }
            }
            , !1)
        }
    }
    Hc("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
    function hu(a) {
        switch (a) {
        case "":
        case "Test":
        case "Real":
            return !0;
        default:
            return !1
        }
    }
    var iu = class {
        constructor(a, b=!1) {
            this.m = a;
            this.l = b;
            this.j = new se(a.document)
        }
        write(a) {
            let b = a.J();
            if (this.l) {
                if (!hu(this.j.get("__gads", "")))
                    return;
                hu(b) || (b = "Real")
            }
            this.j.set("__gads", b, {
                gd: a.G() - this.m.Date.now() / 1E3,
                path: a.H(),
                domain: a.l(),
                xd: !1
            })
        }
    }
    ;
    const ju = /^\.google\.(com?\.)?[a-z]{2,3}$/
      , ku = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;
    let lu = ()=>q
      , mu = q;
    const ou = a=>{
        a = "https://" + `adservice${a}/adsid/integrator.${"js"}`;
        const b = [`domain=${encodeURIComponent(q.location.hostname)}`];
        nu[3] >= +new Date && b.push(`adsid=${encodeURIComponent(nu[1])}`);
        return a + "?" + b.join("&")
    }
    ;
    let nu, pu;
    const qu = ()=>{
        mu = lu();
        nu = mu.googleToken = mu.googleToken || {};
        var a = +new Date;
        nu[1] && nu[3] > a && 0 < nu[2] || (nu[1] = "",
        nu[2] = -1,
        nu[3] = -1,
        nu[4] = "",
        nu[6] = "");
        pu = mu.googleIMState = mu.googleIMState || {};
        a = pu[1];
        ju.test(a) && !ku.test(a) || (pu[1] = ".google.com");
        oa(pu[5]) || (pu[5] = []);
        "boolean" !== typeof pu[6] && (pu[6] = !1);
        oa(pu[7]) || (pu[7] = []);
        "number" !== typeof pu[8] && (pu[8] = 0)
    }
      , ru = {
        ib: ()=>0 < pu[8],
        rd: ()=>{
            pu[8]++
        }
        ,
        sd: ()=>{
            0 < pu[8] && pu[8]--
        }
        ,
        td: ()=>{
            pu[8] = 0
        }
        ,
        vh: ()=>!1,
        Pb: ()=>pu[5],
        Hb: a=>{
            try {
                a()
            } catch (b) {
                q.setTimeout(()=>{
                    throw b;
                }
                , 0)
            }
        }
        ,
        ac: ()=>{
            if (!ru.ib()) {
                var a = q.document
                  , b = e=>{
                    e = ou(e);
                    a: {
                        try {
                            var f = fa();
                            break a
                        } catch (g) {}
                        f = void 0
                    }
                    Tq(a, e, f);
                    f = a.createElement("script");
                    f.type = "text/javascript";
                    f.onerror = ()=>q.processGoogleToken({}, 2);
                    e = xe(e);
                    Gc(f, e);
                    try {
                        (a.head || a.body || a.documentElement).appendChild(f),
                        ru.rd()
                    } catch (g) {}
                }
                  , c = pu[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    ["newToken"]: "FBT"
                };
                q.setTimeout(()=>q.processGoogleToken(d, 1), 1E3)
            }
        }
    }
      , su = a=>{
        qu();
        const b = mu.googleToken[5] || 0;
        a && (0 != b || nu[3] >= +new Date ? ru.Hb(a) : (ru.Pb().push(a),
        ru.ac()));
        nu[3] >= +new Date && nu[2] >= +new Date || ru.ac()
    }
      , uu = a=>{
        q.processGoogleToken = q.processGoogleToken || ((b,c)=>tu(b, c));
        su(a)
    }
      , tu = (a={},b=0)=>{
        var c = a.newToken || ""
          , d = "NT" == c
          , e = parseInt(a.freshLifetimeSecs || "", 10)
          , f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        qu();
        1 == b ? ru.td() : ru.sd();
        var h = mu.googleToken = mu.googleToken || {}
          , k = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !ru.ib() && (!(nu[3] >= +new Date) || "NT" == nu[1]);
        var l = !(nu[3] >= +new Date) && 0 != b;
        if (k || d || l)
            d = +new Date,
            e = d + 1E3 * e,
            f = d + 1E3 * f,
            1E-5 > Math.random() && qg("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" + `&err=${b}`),
            h[5] = b,
            h[1] = c,
            h[2] = e,
            h[3] = f,
            h[4] = g,
            h[6] = a,
            qu();
        if (k || !ru.ib()) {
            b = ru.Pb();
            for (c = 0; c < b.length; c++)
                ru.Hb(b[c]);
            b.length = 0
        }
    }
    ;
    Qc("script");
    var vu = V(215, a=>{
        const b = a.google_sa_queue
          , c = b.shift();
        a.google_sa_impl || W("shimpl", {
            t: "no_fn"
        });
        pa(c) && wi(216, c);
        b.length && a.setTimeout(()=>vu(a), 0)
    }
    )
      , wu = a=>{
        const b = Sd(document, "IFRAME");
        T(a, (c,d)=>{
            null != c && b.setAttribute(d, c)
        }
        );
        return b
    }
      , xu = a=>{
        const b = ["<iframe"];
        T(a, (c,d)=>{
            null != c && b.push(" " + d + '="' + Hc(c) + '"')
        }
        );
        b.push("></iframe>");
        return b.join("")
    }
      , yu = a=>Oj(Vf(), ["/pagead/html/", Lf(), "/r20190131/zrt_lookup.html#", encodeURIComponent(a)].join(""))
      , zu = (a,b,c,d)=>{
        null != b && (a.width = b && "" + b);
        null != c && (a.height = c && "" + c);
        a.frameborder = "0";
        d && (a.src = d);
        a.marginwidth = "0";
        a.marginheight = "0";
        a.vspace = "0";
        a.hspace = "0";
        a.allowtransparency = "true";
        a.scrolling = "no";
        a.allowfullscreen = "true"
    }
    ;
    var Au = (a,b)=>Bi(a, "adpnt", (c,d)=>{
        xk(d, b.contentWindow) ? (b.dataset.googleQueryId || (c = Ak(c).qid,
        b.setAttribute("data-google-query-id", c)),
        c = !0) : c = !1;
        return c
    }
    );
    function Bu(a, b) {
        const c = a.pubWin.document.getElementById(a.B.google_async_iframe_id + "_expand");
        return c ? new Cu(a,b,c) : null
    }
    function Du(a) {
        a.o = a.A;
        a.v.style.transition = "height 500ms";
        a.I.style.transition = "height 500ms";
        a.m.style.transition = "height 500ms";
        Eu(a)
    }
    function Fu(a, b) {
        (a.C.contentWindow || a.C.contentWindow).postMessage(JSON.stringify({
            ["msg_type"]: "expand-on-scroll-result",
            ["eos_success"]: !0,
            ["eos_amount"]: b,
            googMsgType: "sth"
        }), "*")
    }
    function Eu(a) {
        a.m.style.clip = `rect(0px, ${a.C.width}px, ${a.o}px, 0px)`;
        a.m && (a.m.setAttribute("height", a.o),
        a.m.style.height = a.o + "px");
        a.v.style.height = a.o + "px";
        a.I.style.height = a.o + "px"
    }
    function Gu(a, b) {
        b = Ve(b.r_nh);
        a.A = null == b ? 0 : b;
        if (0 >= a.A)
            return "1";
        a.H = yg(a.m).y;
        a.D = yk(a.j);
        if (a.H + a.o < a.D)
            return "2";
        if (a.H > uk(a.j) - a.j.innerHeight)
            return "3";
        b = a.D;
        a.m && (a.m.setAttribute("height", a.A),
        a.m.style.height = a.A + "px");
        a.C.setAttribute("height", a.A);
        a.C.style.height = a.A + "px";
        a.v.style.height = a.A + "px";
        a.I.style.position = "relative";
        a.v.style.transition = "height 100ms";
        a.I.style.transition = "height 100ms";
        a.m.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.H, a.o);
        sg(a.v, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        sg(a.m, {
            clip: `rect(0px, ${a.C.width}px, ${b}px, 0px)`
        });
        return "0"
    }
    function Hu(a, b={}) {
        a.U && (b.eid = a.U);
        b.qid = a.Z;
        W("eoscrl", b, If(String(a.$), .05))
    }
    class Cu extends au {
        constructor(a, b, c) {
            super(a.j);
            this.C = b;
            this.m = (b = a.iframeWin && Lg(a.B) ? a.iframeWin.frameElement : b) ? b : a.o;
            this.v = c;
            this.I = this.v.parentElement && "adsbygoogle" === this.v.parentElement.className ? this.v.parentElement : this.v;
            this.o = parseInt(this.v.style.height, 10);
            this.U = null;
            this.Ia = this.aa = !1;
            this.Z = "";
            this.W = this.D = this.A = 0;
            this.wc = this.o / 5;
            this.H = yg(this.m).y;
            this.$ = null;
            this.sc = ab(V(651, ()=>{
                this.H = yg(this.m).y;
                var d = this.D;
                this.D = yk(this.j);
                this.o < this.A ? (d = this.D - d,
                0 < d && (this.W += d,
                this.W >= this.wc ? (Du(this),
                Fu(this, this.A)) : (this.o = Math.min(this.A, this.o + d),
                Fu(this, d),
                Eu(this)))) : de(this.j, "scroll", this.G)
            }
            ), this);
            this.G = ()=>{
                var d = this.sc;
                R.requestAnimationFrame ? R.requestAnimationFrame(d) : d()
            }
        }
        J(a) {
            a["expand-on-scroll"] = this.vc;
            a["expand-on-scroll-force-expand"] = this.Lc
        }
        vc(a, b) {
            Xg(b, this.C) && (a = Ak(a),
            this.U = a.i_expid,
            this.Z = a.qid,
            this.$ = a.gen204_fraction,
            this.aa || (this.aa = !0,
            a = Gu(this, a),
            "0" === a && Q(this.j, "scroll", this.G, ae),
            b.source.postMessage(JSON.stringify({
                ["msg_type"]: "expand-on-scroll-result",
                ["eos_success"]: "0" === a,
                googMsgType: "sth"
            }), "*"),
            Hu(this, {
                err: a
            })))
        }
        Lc(a, b) {
            Xg(b, this.C) && !this.Ia && (this.Ia = !0,
            Du(this),
            de(this.j, "scroll", this.G))
        }
        l() {
            this.I = this.v = this.m = null;
            this.G && de(this.j, "scroll", this.G, ae);
            super.l()
        }
    }
    ;function Iu(a) {
        const b = a.o.getBoundingClientRect()
          , c = 0 > b.top + b.height;
        return !(b.top > a.m.innerHeight) && !c
    }
    class Ju extends Xf {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.A = b;
            this.o = c;
            this.C = 0;
            this.o && (this.v = Iu(this),
            this.G = $a(this.D, this),
            this.j = V(433, ()=>{
                var d = this.G;
                R.requestAnimationFrame ? R.requestAnimationFrame(d) : d()
            }
            ),
            Q(this.m, "scroll", this.j, ae))
        }
        D() {
            const a = Iu(this);
            if (a && !this.v) {
                {
                    var b = {
                        rr: "vis-bcr"
                    };
                    const c = this.A.contentWindow;
                    c && (Gi(c, "ig", b, "*", 2),
                    10 <= ++this.C && this.j && de(this.m, "scroll", this.j, ae))
                }
            }
            this.v = a
        }
    }
    ;const Ku = {
        display: "block",
        left: "auto",
        position: "fixed",
        bottom: "0px"
    };
    function Lu(a, b) {
        const c = a.pubWin.document.getElementById(a.B.google_async_iframe_id + "_anchor");
        return c ? new Mu(a,b,c) : null
    }
    function Nu(a, b) {
        if (!a.aa)
            return "1";
        b = Ve(b.r_nh);
        a.o = null == b ? 0 : b;
        if (0 >= a.o)
            return "2";
        a.v = yg(a.A).y;
        b = a.j.innerHeight;
        if (a.v + a.Z < b)
            return "4";
        if (a.v > uk(a.j) - b)
            return "3";
        a.A && (a.A.setAttribute("height", a.o),
        a.A.style.height = a.o + "px");
        a.C.setAttribute("height", a.o);
        a.C.style.height = a.o + "px";
        sg(a.m, Ku);
        a.m.style.height = a.o + "px";
        a.D.style.position = "relative";
        a.$();
        return "0"
    }
    function Ou(a, b={}) {
        a.H && (b.eid = a.H);
        b.qid = a.I;
        W("pscrl", b, If(String(a.U), .05))
    }
    class Mu extends au {
        constructor(a, b, c) {
            a.j && super(a.j);
            this.C = b;
            this.A = (this.G = a.iframeWin && Lg(a.B) ? a.iframeWin.frameElement : b) ? this.G : a.o;
            this.m = c;
            this.D = this.m.parentElement;
            this.Z = parseInt(this.m.style.height, 10);
            this.H = null;
            this.W = !1;
            this.I = "";
            this.o = 0;
            this.v = yg(this.A).y;
            this.U = null;
            this.aa = q.requestAnimationFrame || q.webkitRequestAnimationFrame || q.mozRequestAnimationFrame || q.oRequestAnimationFrame || q.msRequestAnimationFrame;
            this.$ = V(636, ()=>{
                this.aa.call(this.j, this.$);
                var d = this.j.innerHeight
                  , e = yk(this.j);
                this.v = yg(this.D).y;
                e + d > this.v ? (e = e + d - this.v,
                d = Math.min(e, this.Z),
                e = this.o - e,
                e = Math.max(0, e),
                0 >= e ? sg(this.m, {
                    position: "absolute",
                    top: "0px",
                    bottom: "auto"
                }) : sg(this.m, {
                    position: "fixed",
                    top: "auto",
                    bottom: "0px"
                }),
                sg(this.m, {
                    clip: "rect(" + e + "px, " + this.C.width + "px, " + (e + d) + "px, 0px)"
                })) : sg(this.m, {
                    clip: "rect(3000px, " + this.C.width + "px, 0px, 0px)"
                })
            }
            )
        }
        J(a) {
            a["parallax-scroll"] = this.Ia
        }
        Ia(a, b) {
            a = Ak(a);
            this.H = a.i_expid;
            this.I = a.qid;
            this.U = a.gen204_fraction;
            !this.W && Xg(b, this.C) && (this.W = !0,
            a = Nu(this, a),
            b.source.postMessage(JSON.stringify({
                ["msg_type"]: "parallax-scroll-result",
                ["ps_success"]: "0" === a,
                googMsgType: "sth"
            }), "*"),
            Ou(this, {
                err: a
            }))
        }
        l() {
            this.D = this.m = this.A = this.G = null;
            super.l()
        }
    }
    ;function Pu(a, b) {
        b = b && b[0];
        if (!b)
            return null;
        b = b.target;
        const c = b.getBoundingClientRect()
          , d = Pd(a.j.K() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width)
            return null;
        var e = Qu(a, b, c, a.j.j.elementsFromPoint(Dd(c.left + c.width / 2, c.left, c.right - 1), Dd(c.bottom - 1 - a.l, c.top, c.bottom - 1)), 1, [])
          , f = Qu(a, b, c, a.j.j.elementsFromPoint(Dd(c.left + c.width / 2, c.left, c.right - 1), Dd(c.top + a.l, c.top, c.bottom - 1)), 2, e.da)
          , g = Qu(a, b, c, a.j.j.elementsFromPoint(Dd(c.left + a.l, c.left, c.right - 1), Dd(c.top + c.height / 2, c.top, c.bottom - 1)), 3, [...e.da, ...f.da]);
        const h = Qu(a, b, c, a.j.j.elementsFromPoint(Dd(c.right - 1 - a.l, c.left, c.right - 1), Dd(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.da, ...f.da, ...g.da]);
        var k = Ru(a, b, c)
          , l = p=>La(a.o, p.overlapType) && La(a.v, p.overlapDepth) && La(a.m, p.overlapDetectionPoint);
        e = Fa([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Fa(k, l);
        k = [...e, ...l];
        f = c.left < -a.l || c.right > d.width + a.l;
        f = 0 < k.length || f;
        g = Qd(a.j.j);
        const m = new hg(c.left,c.top,c.width,c.height);
        e = [...Ga(e, p=>new hg(p.elementRect.left,p.elementRect.top,p.elementRect.width,p.elementRect.height)), ...Sa(Ga(l, p=>jg(m, p.elementRect))), ...Fa(jg(m, new hg(0,0,d.width,d.height)), p=>0 <= p.top && p.top + p.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? Su(m, e) : Tu(c, e)
        }
    }
    function Uu(a, b) {
        const c = a.j.K()
          , d = a.j.j;
        return new Promise((e,f)=>{
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k=>{
                                    const l = new ki(1)
                                      , m = ji(l, ()=>Pu(a, k));
                                    m && (l.l.length && (m.executionTime = Math.round(Number(l.l[0].duration))),
                                    h.disconnect(),
                                    e(m))
                                }
                                ,Vu);
                                h.observe(b)
                            } else
                                f(Error("5"));
                        else
                            f(Error("4"));
                    else
                        f(Error("3"));
                else
                    f(Error("2"));
            else
                f(Error("1"))
        }
        )
    }
    function Qu(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height)
            return {
                entries: [],
                da: []
            };
        const g = []
          , h = [];
        for (let p = 0; p < d.length; p++) {
            const t = d[p];
            if (t === b)
                continue;
            if (La(f, t))
                continue;
            h.push(t);
            const z = t.getBoundingClientRect();
            if (a.j.contains(t, b)) {
                g.push(Wu(a, c, t, z, 1, e));
                continue
            }
            if (a.j.contains(b, t)) {
                g.push(Wu(a, c, t, z, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b
                  , m = t;
                const F = k.j.l(l, m);
                if (!F) {
                    k = null;
                    break a
                }
                const {suspectAncestor: M, ja: Y} = Xu(k, l, F, m) || {}
                  , {suspectAncestor: U, ja: aa} = Xu(k, m, F, l) || {};
                k = M && Y && U && aa ? Y <= aa ? {
                    suspectAncestor: M,
                    overlapType: Yu[Y]
                } : {
                    suspectAncestor: U,
                    overlapType: Zu[aa]
                } : M && Y ? {
                    suspectAncestor: M,
                    overlapType: Yu[Y]
                } : U && aa ? {
                    suspectAncestor: U,
                    overlapType: Zu[aa]
                } : null
            }
            const {suspectAncestor: C, overlapType: r} = k || {};
            C && r ? g.push(Wu(a, c, t, z, r, e, C)) : g.push(Wu(a, c, t, z, 9, e))
        }
        return {
            entries: g,
            da: h
        }
    }
    function Ru(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Ie(b, a.j.K());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + a.l ? d.push(Wu(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX,
                !e && c.left < f.left - a.l ? d.push(Wu(a, c, b, f, 5, 3)) : !e && c.right > f.right + a.l && d.push(Wu(a, c, b, f, 5, 4))))
            }
        }
        return d
    }
    function Su(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length)
            return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a
              , f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++,
            e = ig(e, b[g]),
            e)); g++)
                ;
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }
    function Tu(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length)
            return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }
    function Wu(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (La(a.o, e) && La(a.m, f)) {
            b = new fg(b.top,b.right - 1,b.bottom - 1,b.left);
            if ((a = $u(a, c)) && gg(b, a))
                c = 4;
            else {
                a = av(c, d);
                if (Vc) {
                    e = Ag(c, "paddingLeft");
                    f = Ag(c, "paddingRight");
                    var k = Ag(c, "paddingTop")
                      , l = Ag(c, "paddingBottom");
                    e = new fg(k,f,l,e)
                } else
                    e = vg(c, "paddingLeft"),
                    f = vg(c, "paddingRight"),
                    k = vg(c, "paddingTop"),
                    l = vg(c, "paddingBottom"),
                    e = new fg(parseFloat(k),parseFloat(f),parseFloat(l),parseFloat(e));
                a = new fg(a.top + e.top,a.right - e.right,a.bottom - e.bottom,a.left + e.left);
                gg(b, a) ? c = 3 : (c = av(c, d),
                c = gg(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }
    function Xu(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement)
            e.unshift(f);
        c = a.j.K();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Ie(h, c);
            if (g) {
                if ("fixed" === g.position)
                    return {
                        suspectAncestor: h,
                        ja: 1
                    };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d))
                    return {
                        suspectAncestor: h,
                        ja: 2
                    };
                if ("absolute" === g.position)
                    return {
                        suspectAncestor: h,
                        ja: 3
                    };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = bv(a, e.slice(0, f), h);
                    if (g || k)
                        return {
                            suspectAncestor: h,
                            ja: 4
                        }
                }
            }
        }
        return (a = bv(a, e, b)) ? {
            suspectAncestor: a,
            ja: 5
        } : null
    }
    function bv(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d)
            return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c))
                continue;
            const g = f.getBoundingClientRect();
            if (!g)
                continue;
            const h = Ie(f, a.j.K());
            if (h && d.bottom > g.bottom + a.l && "visible" === h.overflowY)
                return f
        }
        return null
    }
    function $u(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a)
            return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d=>/^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(); )
            ;
        c = c.previousNode();
        if (!b || !c)
            return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new fg(a.top,a.right,a.bottom,a.left)
    }
    function av(a, b) {
        if (!Vc || 9 <= Number(id)) {
            var c = vg(a, "borderLeftWidth");
            d = vg(a, "borderRightWidth");
            e = vg(a, "borderTopWidth");
            a = vg(a, "borderBottomWidth");
            c = new fg(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))
        } else {
            c = Cg(a, "borderLeft");
            var d = Cg(a, "borderRight")
              , e = Cg(a, "borderTop");
            a = Cg(a, "borderBottom");
            c = new fg(e,d,a,c)
        }
        return new fg(b.top + c.top,b.right - 1 - c.right,b.bottom - 1 - c.bottom,b.left + c.left)
    }
    class cv {
        constructor(a, b=dv, c=ev, d=fv, e=0) {
            this.j = Md(a);
            this.o = b;
            this.v = c;
            this.m = d;
            this.l = e
        }
    }
    const Yu = {
        [1]: 3,
        [4]: 10,
        [3]: 12,
        [2]: 4,
        [5]: 5
    }
      , Zu = {
        [1]: 6,
        [4]: 11,
        [3]: 13,
        [2]: 7,
        [5]: 8
    }
      , dv = Fa(Qe({
        kf: 1,
        lf: 2,
        Xg: 3,
        Yg: 4,
        $g: 5,
        ff: 6,
        gf: 7,
        jf: 8,
        jg: 9,
        Zg: 10,
        hf: 11,
        Wg: 12,
        ef: 13
    }), a=>!La([1, 2], a))
      , ev = Qe({
        ue: 1,
        kg: 2,
        He: 3,
        ah: 4
    })
      , fv = Qe({
        ve: 1,
        fh: 2,
        Zf: 3,
        Kg: 4
    })
      , Vu = {
        threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
    };
    function gv(a, b) {
        Array.isArray(b) || (b = [b]);
        b = Ga(b, function(c) {
            return "string" === typeof c ? c : c.ub + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        sg(a, "transition", b.join(","))
    }
    var hv = Ya(function() {
        if (Vc)
            return fd("10.0");
        var a = Sd(document, "DIV")
          , b = Zc ? "-webkit" : Yc ? "-moz" : Vc ? "-ms" : Uc ? "-o" : null
          , c = {
            transition: "opacity 1s linear"
        };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        if (!wc.test("div"))
            throw Error("");
        if ("DIV"in yc)
            throw Error("");
        c = null;
        var d = "";
        if (b)
            for (l in b) {
                if (!wc.test(l))
                    throw Error("");
                var e = b[l];
                if (null != e) {
                    var f = l;
                    var g = e;
                    if (g instanceof lb)
                        g = ob(g);
                    else if ("style" == f.toLowerCase()) {
                        e = void 0;
                        if (!qa(g))
                            throw Error("");
                        if (!(g instanceof Ub)) {
                            var h = "";
                            for (e in g) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(e))
                                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + e);
                                var k = g[e];
                                null != k && (k = Array.isArray(k) ? Ga(k, Yb).join(" ") : Yb(k),
                                h += e + ":" + k + ";")
                            }
                            g = h ? Wb(h) : Xb
                        }
                        g instanceof Ub && g.constructor === Ub && g.m === Vb ? e = g.l : (na(g),
                        e = "type_error:SafeStyle");
                        g = e
                    } else {
                        if (/^on/i.test(f))
                            throw Error("");
                        if (f.toLowerCase()in xc)
                            if (g instanceof pb)
                                g = sb(g).toString();
                            else if (g instanceof Jb)
                                g = Mb(g);
                            else if ("string" === typeof g)
                                g = Sb(g).j();
                            else
                                throw Error("");
                    }
                    g.Y && (g = g.j());
                    f = f + '="' + xb(String(g)) + '"';
                    d += " " + f
                }
            }
        var l = "<div" + d;
        d = void 0;
        null == d ? d = [] : Array.isArray(d) || (d = [d]);
        !0 === kb.div ? l += ">" : (c = Bc(d),
        l += ">" + tc(c).toString() + "</div>",
        c = c.l());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        b = Cc(l, c);
        Ec(a, b);
        a = a.firstChild;
        b = a.style[Oc("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[tg(a, "transition")] || "")
    });
    function iv(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }
    function jv(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }
    function kv(a, b) {
        0 > a.m.indexOf(b) && (a.m = b + a.m)
    }
    function lv(a, b, c, d) {
        return "" != a.m || b ? null : "" == a.j.replace(mv, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }
    function nv(a) {
        var b = lv(a, "", null, 0);
        if (null === b)
            return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var ov = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.m = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.m].join("|")
        }
    }
    ;
    function pv(a) {
        let b = a.V;
        a.H = function() {}
        ;
        qv(a, a.D, b);
        let c = a.D.parentElement;
        if (!c)
            return a.j;
        let d = !0
          , e = null;
        for (; c; ) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Ie(c, b)
            } catch (g) {
                kv(a.j, "c")
            }
            const f = rv(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.T = !0);
            if (d && !f && sv(e)) {
                jv(a.j, "l");
                a.I = c;
                break
            }
            d = d && f;
            if (e && tv(a, e))
                break;
            c = c.parentElement;
            if (!c) {
                if (b === a.aa)
                    break;
                try {
                    if (c = b.frameElement,
                    b = b.parent,
                    !De(b)) {
                        jv(a.j, "c");
                        break
                    }
                } catch (g) {
                    jv(a.j, "c");
                    break
                }
            }
        }
        a.G && a.o && uv(a);
        return a.j
    }
    function vv(a) {
        function b() {
            wv(c, f, g);
            if (h && !k && !g) {
                const l = function(m) {
                    for (let p = 0; p < m.length; p++)
                        sg(h, m[p], "0px")
                };
                l(xv);
                l(yv)
            }
        }
        const c = a.D;
        c.style.overflow = a.$ ? "visible" : "hidden";
        a.G && (a.I ? (gv(c, zv),
        gv(a.I, zv)) : gv(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.M && (c.style.opacity = a.M);
        const d = null != a.C && null != a.m && (a.W || a.m > a.C) ? a.m : null
          , e = null != a.A && null != a.l && (a.W || a.l > a.A) ? a.l : null;
        if (a.J) {
            const l = a.J.length;
            for (let m = 0; m < l; m++)
                wv(a.J[m], d, e)
        }
        const f = a.m
          , g = a.l
          , h = a.I
          , k = a.T;
        a.G ? q.setTimeout(b, 1E3) : b()
    }
    function Av(a) {
        if (a.o && !a.Ga || null == a.m && null == a.l && null == a.M && a.o)
            return a.j;
        var b = a.o;
        a.o = !1;
        pv(a);
        a.o = b;
        if (!b || null != a.U && !lv(a.j, a.U, a.m, a.l))
            return a.j;
        0 <= a.j.j.indexOf("n") && (a.C = null,
        a.A = null);
        if (null == a.C && null !== a.m || null == a.A && null !== a.l)
            a.G = !1;
        (0 == a.m || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.m = 0,
        a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.m = "";
        vv(a);
        return pv(a)
    }
    function tv(a, b) {
        let c = !1;
        "none" == b.display && (jv(a.j, "n"),
        a.o && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || jv(a.j, "v");
        "hidden" == b.overflow && jv(a.j, "o");
        "absolute" == b.position ? (jv(a.j, "a"),
        c = !0) : "fixed" == b.position && (jv(a.j, "f"),
        c = !0);
        return c
    }
    function qv(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement)
            return !0;
        let e = !1
          , f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = Bv(a, h, c),
            d |= h,
            e && (f |= h))
        }
        f & 1 && (d & 2 && iv(a.j, 0, "o"),
        d & 4 && iv(a.j, 1, "o"));
        return !(d & 1)
    }
    function rv(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (F) {
            kv(a.j, "s")
        }
        var f = c.getAttribute("width")
          , g = Ve(f)
          , h = c.getAttribute("height")
          , k = Ve(h)
          , l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        const m = qv(a, c, b);
        var p = d && d.width
          , t = d && d.height
          , z = e && e.width
          , C = e && e.height
          , r = Xe(p) == a.C && Xe(t) == a.A;
        p = r ? p : z;
        C = r ? t : C;
        z = Xe(p);
        r = Xe(C);
        g = null !== a.C && (null !== z && a.C >= z || null !== g && a.C >= g);
        r = null !== a.A && (null !== r && a.A >= r || null !== k && a.A >= k);
        k = !m && sv(d);
        r = m || r || k || !(f || p || d && (!Cv(String(d.minWidth)) || !Dv(String(d.maxWidth))));
        l = m || g || k || l || !(h || C || d && (!Cv(String(d.minHeight)) || !Dv(String(d.maxHeight))));
        Ev(a, 0, r, c, "width", f, a.C, a.m);
        Fv(a, 0, "d", r, e, d, "width", p, a.C, a.m);
        Fv(a, 0, "m", r, e, d, "minWidth", e && e.minWidth, a.C, a.m);
        Fv(a, 0, "M", r, e, d, "maxWidth", e && e.maxWidth, a.C, a.m);
        if (a.Ha) {
            c = /^html|body$/i.test(c.nodeName);
            t = Xe(t);
            h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1;
            (f = null != a.l && d && t && Math.round(t) !== a.l) && !(f = !h) && (f = t,
            f = (S.F().j(260, !1) || b.location && "#gffwroe2ettq" == b.location.hash) && Math.round(f) < .8 * Math.round(b.innerHeight));
            f = f && "100%" !== d.minHeight;
            if (c = a.o && !c && f)
                c = !(a.Z && d && (S.F().j(265, !1) || b.location && "#gffwroe2etoq" == b.location.hash) && Math.round(Xe(d.minHeight)) === Math.round(b.innerHeight));
            c && (e.setProperty("height", "auto", "important"),
            d && !Cv(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"),
            d && !Dv(String(d.maxHeight)) && a.l && Math.round(t) < a.l && e.setProperty("max-height", "none", "important"))
        } else
            Ev(a, 1, l, c, "height", h, a.A, a.l),
            Fv(a, 1, "d", l, e, d, "height", C, a.A, a.l),
            Fv(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.A, a.l),
            Fv(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.A, a.l);
        return m
    }
    function uv(a) {
        function b() {
            if (0 < c) {
                var l = Ie(e, d) || {};
                const m = Xe(l.width);
                l = Xe(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else
                q.clearInterval(k),
                h && (h(0, 0),
                h(1, 0))
        }
        let c = 31.25;
        const d = a.V
          , e = a.D
          , f = a.m
          , g = a.l
          , h = a.H;
        let k;
        q.setTimeout(function() {
            k = q.setInterval(b, 16)
        }, 990)
    }
    function Bv(a, b, c) {
        if (3 == b.nodeType)
            return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName))
                return 0;
            let d = null;
            try {
                d = Ie(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position)
                    return 0;
                if ("absolute" == d.position) {
                    if (!a.v.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility)
                        return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.v.boundingClientRect.left ? 2 : 0) | (c.bottom > a.v.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }
    function Ev(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f)
                    return;
                f = Ve(f);
                null == f && (kv(a.j, "n"),
                iv(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.o)
                        if (a.G) {
                            const k = Math.max(f + h - (g || 0), 0)
                              , l = a.H;
                            a.H = function(m, p) {
                                m == b && d.setAttribute(e, k - p);
                                l && l(m, p)
                            }
                        } else
                            d.setAttribute(e, h)
                } else
                    iv(a.j, b, "d")
        }
    }
    function Fv(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? Cv(f) : Dv(f)) || (f = Xe(f),
            null == f ? jv(a.j, "p") : null != k && jv(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? Cv(h) : Dv(h))
                    return;
                h = Xe(h);
                null == h && (kv(a.j, "p"),
                iv(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.o)
                        if (a.G) {
                            const m = Math.max(h + l - (k || 0), 0)
                              , p = a.H;
                            a.H = function(t, z) {
                                t == b && (e[g] = m - z + "px");
                                p && p(t, z)
                            }
                        } else
                            e[g] = l + "px"
                } else
                    iv(a.j, b, c)
        }
    }
    var Kv = class {
        constructor(a, b, c, d, e, f, g) {
            this.aa = a;
            this.J = c;
            this.D = b;
            this.V = (a = this.D.ownerDocument) && (a.defaultView || a.parentWindow);
            this.v = new Gv(this.D);
            this.o = g;
            this.Ga = Hv(this.v, d.Ab, d.height, d.ec);
            this.C = this.o ? this.v.boundingClientRect ? this.v.boundingClientRect.right - this.v.boundingClientRect.left : null : e;
            this.A = this.o ? this.v.boundingClientRect ? this.v.boundingClientRect.bottom - this.v.boundingClientRect.top : null : f;
            this.m = Iv(d.width);
            this.l = Iv(d.height);
            this.M = this.o ? Iv(d.opacity) : null;
            this.U = d.check;
            this.G = "animate" == d.Ab && !Jv(this.v, this.l, this.na) && hv();
            this.$ = !!d.Gb;
            this.j = new ov;
            Jv(this.v, this.l, this.na) && jv(this.j, "r");
            e = this.v;
            e.j && e.l >= e.m && jv(this.j, "b");
            this.I = this.H = null;
            this.T = !1;
            this.W = !!d.vd;
            this.Ha = !!d.cc;
            this.na = !!d.ec;
            this.Z = d.Eb
        }
    }
    ;
    function Jv(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.o) && (c ? (b = a.l + Math.min(b, Iv(a.hb())),
        a = a.j && b >= a.m) : a = a.j && a.l >= a.m,
        d = a);
        return d
    }
    var Gv = class {
        constructor(a) {
            var b = a && a.ownerDocument, c = b && (b.defaultView || b.parentWindow), d;
            if (d = c)
                d = De(c.top) ? c.top : null;
            c = d;
            this.j = !!c;
            this.boundingClientRect = null;
            if (a)
                try {
                    this.boundingClientRect = a.getBoundingClientRect()
                } catch (f) {}
            var e;
            {
                d = a;
                let f = 0
                  , g = this.boundingClientRect;
                for (; d; )
                    try {
                        g && (f += g.top);
                        const h = (e = d.ownerDocument) && (e.defaultView || e.parentWindow);
                        (d = h && h.frameElement) && (g = d.getBoundingClientRect())
                    } catch (h) {
                        break
                    }
                e = f
            }
            this.l = e;
            c = c || q;
            this.m = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && Uj(b);
            this.o = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.o
        }
        Ra() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        hb() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    }
    ;
    function Hv(a, b, c, d) {
        switch (b) {
        case "no_rsz":
            return !1;
        case "force":
        case "animate":
            return !0;
        default:
            return Jv(a, c, d)
        }
    }
    function sv(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }
    function Lv(a, b, c, d) {
        return Av(new Kv(a,b,d,c,null,null,!0))
    }
    var Mv = new ov("s","")
      , mv = /[lonvafrbpEe]/g;
    function Dv(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }
    function Cv(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }
    function wv(a, b, c) {
        null !== b && null !== Ve(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== Ve(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var xv = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "), yv = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" "), Nv;
    {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s"
          , b = xv;
        for (let c = 0; c < b.length; c++)
            a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = yv;
        for (let c = 0; c < b.length; c++)
            a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        Nv = a
    }
    var zv = Nv;
    function Iv(a) {
        return "string" === typeof a ? Ve(a) : "number" === typeof a && isFinite(a) ? a : null
    }
    ;function Ov(a, b, c, d, e, f, g, h, k, l) {
        const m = w();
        if (!a.m || !m)
            return l.err = "2",
            Pv(a, l, null),
            !1;
        if ("no_rsz" === f)
            return l.err = "7",
            Pv(a, l, null),
            !0;
        const p = new Gv(a.o || a.m);
        if (!p.j)
            return l.err = "3",
            Pv(a, l, null),
            !1;
        var t = p.Ra();
        null != t && (l.w = t);
        t = p.hb();
        null != t && (l.h = t);
        if (Hv(p, f, d, k)) {
            var z = a.o && a.o.ownerDocument.getElementById(a.o.id + "_anchor");
            t = z ? [a.o, a.m] : null;
            z = z || a.m;
            const C = S.F().j(154, !1);
            b = Lv(m, z, {
                width: c,
                height: d,
                opacity: e,
                check: b,
                Ab: f,
                Gb: g,
                vd: h,
                cc: C,
                ec: k
            }, t);
            null != c && (l.nw = c);
            null != d && (l.nh = d);
            l.rsz = b.toString();
            l.abl = nv(b);
            l.frsz = ("force" === f).toString();
            l.err = "0";
            Pv(a, l, p);
            Ja(hj.F().l(), r=>La([248427477, 248427478], r)) && a.j === m && Uu(new cv(a.j,[5, 8, 9],[3, 4],void 0,2), z).then(r=>{
                Tj(8, [r]);
                return r
            }
            ).then(r=>{
                W("resize-ovlp", {
                    adf: a.v,
                    eid: a.G.join(","),
                    io: Number(r.isOverlappingOrOutsideViewport),
                    oa: r.overlappedArea.toFixed(2),
                    qid: l.qid || "",
                    slot: a.I,
                    url: a.U,
                    vp: r.viewportSize.width + "x" + r.viewportSize.height
                }, 1)
            }
            ).catch(r=>{
                W("resize-ovlp-err", {
                    err: r.message
                }, 1)
            }
            );
            return !0
        }
        l.err = "1";
        Pv(a, l, p);
        return !1
    }
    function Qv(a, b, c) {
        const d = {
            scrl: yk(a.j || w()),
            adk: a.D,
            adf: a.v,
            fmt: a.C
        };
        b && (d.str = Jv(b, Ve(c.r_nh), We(c.r_cab)),
        d.ad_y = b.l,
        d.vph = b.m);
        T(c, (e,f)=>{
            d[f] = e
        }
        );
        return d
    }
    function Pv(a, b, c) {
        const d = If(String(b.gen204_fraction), .05);
        b = Qv(a, c, b);
        b.url = a.j.document.URL;
        W("resize", b, d)
    }
    class Rv extends au {
        constructor(a, b, c, d) {
            super(a);
            this.m = b;
            this.o = c;
            this.D = String(d.google_ad_unit_key || "");
            this.v = String(d.google_ad_dom_fingerprint || "");
            this.C = String(d.google_ad_format || "");
            this.G = Yg(d).eids || [];
            this.I = String(d.google_ad_slot || "");
            this.U = String(d.google_page_url || "")
        }
        J(a) {
            a["ablate-me"] = this.A;
            a["resize-me"] = this.H
        }
        A(a, b) {
            xk(b, this.m.contentWindow) && (a = Ak(a),
            b = a.clp_btf_only,
            Ov(this, null, null, 0, 0, "animate" === a["collapse-after-close"] ? "animate" : "1" === b ? "safe" : "force", !1, !1, !1, a))
        }
        H(a, b) {
            if (xk(b, this.m.contentWindow)) {
                a = Ak(a);
                var c = a.r_chk;
                if (null == c || "" === c) {
                    var d = Ve(a.r_nw)
                      , e = Ve(a.r_nh)
                      , f = Ve(a.r_no);
                    null != f || 0 !== d && 0 !== e || (f = 0);
                    var g = a.r_str;
                    g = g ? g : null;
                    d = Ov(this, c, d, e, f, g, We(a.r_ao), We(a.r_ifr), We(a.r_cab), a);
                    c = {
                        msg_type: "resize-result"
                    };
                    c.r_str = g;
                    c.r_status = d;
                    b = b.source;
                    c.googMsgType = "sth";
                    b.postMessage(JSON.stringify(c), "*");
                    this.m.dataset.googleQueryId || this.m.setAttribute("data-google-query-id", a.qid)
                }
            }
        }
        l() {
            super.l();
            this.m = null
        }
    }
    ;const Sv = (a,b,c)=>new a.IntersectionObserver(c,b)
      , Tv = (a,b,c)=>{
        Q(a, b, c);
        return ()=>de(a, b, c)
    }
    ;
    let Uv = null;
    const Vv = ()=>{
        Uv = ai()
    }
      , Wv = (a,b)=>b ? null === Uv ? (Q(a, "mousemove", Vv, {
        passive: !0
    }),
    Q(a, "scroll", Vv, {
        passive: !0
    }),
    Uv = ai(),
    !1) : ai() - Uv >= 1E3 * b : !1;
    function Xv({win: a, element: b, Ad: c, zd: d, yd: e=0, Pc: f, Sc: g, options: h={}}) {
        let k = null
          , l = !1
          , m = !1;
        const p = []
          , t = Sv(a, h, (z,C)=>{
            try {
                const r = ()=>{
                    p.length || (d && (p.push(Tv(b, "mouseenter", ()=>{
                        l = !0;
                        r()
                    }
                    )),
                    p.push(Tv(b, "mouseleave", ()=>{
                        l = !1;
                        r()
                    }
                    ))),
                    p.push(Tv(a.document, "visibilitychange", ()=>r())));
                    const F = Wv(a, e);
                    !m || l || F || Wj(a.document) ? (a.clearTimeout(k),
                    k = null) : k = k || a.setTimeout(()=>{
                        Wv(a, e) ? r() : (f(),
                        C.disconnect())
                    }
                    , 1E3 * c)
                }
                ;
                ({isIntersecting: m} = z[z.length - 1]);
                r()
            } catch (r) {
                g && g(r)
            }
        }
        );
        t.observe(b);
        return ()=>{
            t.disconnect();
            for (const z of p)
                z();
            null != k && a.clearTimeout(k)
        }
    }
    ;function Yv(a, b, c, d, e) {
        return new Zv(a,b,c,d,e)
    }
    function $v(a, b, c) {
        const d = a.v
          , e = a.C;
        if (null != e && null != d && xk(c, d.contentWindow) && (b = b.config,
        "string" === typeof b)) {
            try {
                var f = JSON.parse(b);
                if (!oa(f))
                    return;
                a.m = new me(f)
            } catch (g) {
                return
            }
            a.Oa();
            f = rd(a.m, 1, 30);
            0 >= f || (f -= .2,
            a.o = Xv({
                win: a.j,
                element: e,
                zd: !ze(),
                yd: rd(a.m, 3, 90),
                Ad: f,
                Pc: ()=>void aw(a, e),
                options: {
                    threshold: td(a.m, 2, 1)
                },
                Sc: g=>qi.j(623, g, void 0, void 0)
            }))
        }
    }
    function aw(a, b) {
        a.D(!!qd(a.m, 4));
        setTimeout(V(624, ()=>{
            a.A.google_refresh_count = (parseInt(a.A.google_refresh_count, 10) || 0) + 1;
            var c;
            a: {
                if (Cd && !(Vc && fd("9") && !fd("10") && q.SVGElement && b instanceof q.SVGElement) && (c = b.parentElement))
                    break a;
                c = b.parentNode;
                c = qa(c) && 1 == c.nodeType ? c : null
            }
            c && Og.test(c.className) || (c = Sd(document, "INS"),
            c.className = "adsbygoogle",
            b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
            b && b.parentNode && b.parentNode.removeChild(b);
            a.v = null;
            kr(c, a.A, a.j)
        }
        ), 200)
    }
    class Zv extends au {
        constructor(a, b, c, d, e) {
            super(a);
            this.v = b;
            this.C = d;
            this.A = c;
            this.D = e;
            this.m = this.o = null;
            (b = (b = b.contentWindow) && b.parent) && a != b && this.T.push(Ai(b, "sth", this.Ha, this.Db))
        }
        J(a) {
            a.av_ref = (b,c)=>$v(this, b, c)
        }
        l() {
            super.l();
            this.C = this.v = null;
            this.o && this.o()
        }
    }
    ;let bw = navigator;
    var cw = ()=>{
        try {
            return bw.javaEnabled()
        } catch (a) {
            return !1
        }
    }
      , dw = a=>{
        let b = 1;
        let c;
        if (void 0 != a && "" != a)
            for (b = 0,
            c = a.length - 1; 0 <= c; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = 0 != d ? b ^ d >> 21 : b
            }
        return b
    }
      , ew = (a,b)=>{
        if (!a || "none" == a)
            return 1;
        a = String(a);
        "auto" == a && (a = b,
        "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
        return dw(a.toLowerCase())
    }
    ;
    const fw = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/
      , gw = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/
      , hw = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    const iw = /^blogger$/
      , jw = /^wordpress(.|\s|$)/i
      , kw = /^joomla!/i
      , lw = /^drupal/i
      , mw = /\/wp-content\//
      , nw = /\/wp-content\/plugins\/advanced-ads/
      , ow = /\/wp-content\/themes\/genesis/
      , pw = /\/wp-content\/plugins\/genesis/;
    var qw = a=>{
        var b = a.getElementsByTagName("script")
          , c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src");
                if (nw.test(e))
                    return 5;
                if (pw.test(e))
                    return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d],
            e.hasAttribute("href") && (e = e.getAttribute("href"),
            ow.test(e) || pw.test(e)))
                return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content");
                if (iw.test(f))
                    return 1;
                if (jw.test(f))
                    return 2;
                if (kw.test(f))
                    return 3;
                if (lw.test(f))
                    return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a],
            "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href"),
            mw.test(d)))
                return 2;
        return 0
    }
    ;
    function rw(a) {
        -1 == a.j && (a.j = Ia(a.l, (b,c,d)=>c ? b + 2 ** d : b, 0));
        return a.j
    }
    class sw {
        constructor() {
            this.l = [];
            this.j = -1
        }
        set(a, b=!0) {
            0 <= a && 52 > a && 0 === a % 1 && this.l[a] != b && (this.l[a] = b,
            this.j = -1)
        }
        get(a) {
            return !!this.l[a]
        }
    }
    ;const tw = /[+, ]/;
    var zw = (a,b)=>{
        const c = a.B;
        {
            var d = w().document;
            const K = {}
              , x = w();
            {
                const v = {};
                v.mc = Vi(w(), !1).win;
                v.Bd = nk(v.mc);
                v.Tb = lk(w(), d, c.google_ad_width, c.google_ad_height);
                {
                    var e = v.Tb
                      , f = v.Bd.ob;
                    const H = w()
                      , u = H.top == H ? 0 : De(H.top) ? 1 : 2;
                    let E = 4;
                    e || 1 != u ? e || 2 != u ? e && 1 == u ? E = 7 : e && 2 == u && (E = 8) : E = 6 : E = 5;
                    f && (E |= 16);
                    var g = "" + E
                }
                v.Xc = g;
                v.Nb = ok();
                var h = v
            }
            const J = h.mc
              , y = h.Tb;
            let I = !!c.google_page_url;
            K.google_iframing = h.Xc;
            0 != h.Nb && (K.google_iframing_environment = h.Nb);
            if (!I && "ad.yieldmanager.com" == d.domain) {
                let v = d.URL.substring(d.URL.lastIndexOf("http"));
                for (; -1 < v.indexOf("%"); )
                    try {
                        v = decodeURIComponent(v)
                    } catch (H) {
                        break
                    }
                c.google_page_url = v;
                I = !!v
            }
            if (I) {
                var k = y
                  , l = K;
                l.google_page_url = c.google_page_url;
                l.google_page_location = (k ? d.referrer : d.URL) || "EMPTY"
            } else if (y && De(x.top) && d.referrer && x.top.document.referrer === d.referrer)
                K.google_page_url = x.top.document.URL,
                K.google_page_location = null;
            else {
                var m = K;
                m.google_page_url = y ? d.referrer : d.URL;
                m.google_page_location = null
            }
            a: {
                if (d.URL == K.google_page_url)
                    try {
                        var p = Date.parse(d.lastModified) / 1E3;
                        break a
                    } catch (v) {}
                p = null
            }
            K.google_last_modified_time = p;
            if (J == J.top)
                var t = J.document.referrer;
            else {
                {
                    const v = lg();
                    var z = v && v.referrer
                }
                t = z || ""
            }
            K.google_referrer_url = t;
            var C = K
        }
        mk(C, c);
        {
            let K = c.google_page_location || c.google_page_url;
            "EMPTY" == K && (K = c.google_page_url);
            if (Of || !K)
                var r = !1;
            else {
                var F = K.toString();
                0 == F.indexOf("http://") ? F = F.substring(7, F.length) : 0 == F.indexOf("https://") && (F = F.substring(8, F.length));
                var M = F.indexOf("/");
                -1 == M && (M = F.length);
                var Y = F.substring(0, M);
                if (qk.test(Y))
                    r = !1;
                else {
                    var U = Y.split(".")
                      , aa = !1;
                    3 <= U.length && (aa = U[U.length - 3]in pk);
                    2 <= U.length && (aa = aa || U[U.length - 2]in pk);
                    r = aa
                }
            }
        }
        const ma = r ? Kf("", "pagead2.googlesyndication.com") : Vf();
        {
            const K = {};
            uw(a, K);
            qu();
            K.adsid = nu[1];
            qu();
            K.pucrd = nu[6];
            {
                var G = K;
                const x = a.B;
                {
                    const y = a.B;
                    G.dt = du;
                    Lg(y) && y.google_bpp && (G.bpp = y.google_bpp);
                    {
                        const v = w();
                        a: {
                            const u = w();
                            try {
                                const E = u.performance;
                                if (E && E.timing && E.now) {
                                    var Gn = E.timing.navigationStart + Math.round(E.now()) - E.timing.domLoading;
                                    break a
                                }
                            } catch (E) {}
                            Gn = null
                        }
                        const H = Gn;
                        var Hn = H ? eu(H, v.Date.now() - du, 1E6) : null
                    }
                    Hn && (G.bdt = Hn);
                    {
                        const v = y.google_iframe_start_time;
                        if ("number" !== typeof v)
                            var In = null;
                        else
                            y.google_iframe_start_time = null,
                            In = eu(v, du)
                    }
                    const I = In;
                    null != I && (G.fdt = I);
                    G.idt = eu(a.T, du)
                }
                {
                    const y = a.B;
                    G.shv = Lf();
                    G.cbv = "/r20190131".replace("/", "");
                    "sa" == y.google_loader_used ? G.ptt = 5 : "aa" == y.google_loader_used && (G.ptt = 9);
                    /^\w{1,3}$/.test(y.google_loader_used) && (G.saldr = y.google_loader_used);
                    Mf && (G.jscb = 1);
                    Nf && (G.jscd = 1)
                }
                {
                    const y = lg(a.pubWin);
                    if (y) {
                        G.is_amp = 1;
                        {
                            const v = y || lg();
                            var Sw = v && v.mode ? +v.mode.version || null : null
                        }
                        G.amp_v = Sw;
                        {
                            const v = y || lg();
                            if (v && v.container) {
                                const H = v.container.split(",")
                                  , u = [];
                                for (let E = 0; E < H.length; E++)
                                    u.push(kg[H[E]] || "x");
                                var Jn = u.join()
                            } else
                                Jn = null
                        }
                        const I = Jn;
                        I && (G.act = I)
                    }
                    w() == window.top && (G.abxe = 1)
                }
                if ("_gfp_a_"in a.pubWin) {
                    const y = a.pubWin._gfp_a_;
                    if ("boolean" !== typeof y)
                        throw Error(`Illegal value of ${"_gfp_a_"}: ${y}`);
                    if (y && S.F().j(225, !1)) {
                        {
                            var Kn = new iu(a.pubWin,S.F().j(226, !1));
                            const I = Kn.j.get("__gads", "");
                            var yh = Kn.l && !hu(I) ? "Real" : I
                        }
                        yh && (G.cookie = yh,
                        G.crv = "Test" !== yh)
                    }
                }
                const J = Zi();
                {
                    var Ln = x
                      , Ye = J;
                    const y = dj(Ye, 8, {})
                      , I = Ln.google_ad_section;
                    y[I] && (G.prev_fmts = y[I]);
                    const v = dj(Ye, 9, {});
                    v[I] && (G.prev_slotnames = v[I].toLowerCase());
                    vw(Ln, Ye);
                    const H = dj(Ye, 15, 0);
                    0 < H && (G.nras = String(H))
                }
                G.correlator = dj(J, 7, Yi());
                oj().j["21060549"] && (G.rume = 1);
                var Ze = x
                  , Nn = J;
                if (Ze.google_ad_channel) {
                    const y = dj(Nn, 10, {});
                    let I = "";
                    const v = Ze.google_ad_channel.split(tw);
                    for (let H = 0; H < v.length; H++) {
                        const u = v[H];
                        y[u] ? I += u + "+" : y[u] = !0
                    }
                    G.pv_ch = I
                }
                if (Ze.google_ad_host_channel) {
                    {
                        var $e = dj(Nn, 11, []);
                        const y = Ze.google_ad_host_channel.split("|");
                        let I = -1;
                        const v = [];
                        for (let u = 0; u < y.length; u++) {
                            const E = y[u].split(tw);
                            $e[u] || ($e[u] = {});
                            let ba = "";
                            for (let ea = 0; ea < E.length; ea++) {
                                const ca = E[ea];
                                "" !== ca && ($e[u][ca] ? ba += "+" + ca : $e[u][ca] = !0)
                            }
                            ba = ba.slice(1);
                            v[u] = ba;
                            "" !== ba && (I = u)
                        }
                        let H = "";
                        if (-1 < I) {
                            for (let u = 0; u < I; u++)
                                H += v[u] + "|";
                            H += v[I]
                        }
                        var Tw = H
                    }
                    G.pv_h_ch = Tw
                }
                G.frm = x.google_iframing;
                G.ife = x.google_iframing_environment;
                var On = x.google_ad_client;
                try {
                    const y = Wi();
                    let I = y.google_prev_clients;
                    I || (I = y.google_prev_clients = {});
                    if (On in I)
                        var zh = 1;
                    else
                        I[On] = !0,
                        zh = 2
                } catch (y) {
                    zh = 0
                }
                G.pv = zh;
                {
                    const y = a.pubWin.document
                      , I = a.B;
                    let v = "";
                    try {
                        v = y.cookie
                    } catch (u) {}
                    var Pn = y.domain
                      , Fd = v
                      , af = a.pubWin.screen
                      , Uw = y.referrer
                      , Vw = Hg();
                    if (lg())
                        var Qn = w().gaGlobal || {};
                    else {
                        var Ah = Math.round((new Date).getTime() / 1E3), Bh = I.google_analytics_domain_name, bf = "undefined" == typeof Bh ? ew("auto", Pn) : ew(Bh, Pn), Ww = -1 < Fd.indexOf("__utma=" + bf + "."), Xw = -1 < Fd.indexOf("__utmb=" + bf), Ch;
                        if (!(Ch = (og() || w()).gaGlobal)) {
                            var Yw = {};
                            Ch = (og() || w()).gaGlobal = Yw
                        }
                        var ka = Ch
                          , Rn = !1;
                        if (Ww) {
                            var Dh = Fd.split("__utma=" + bf + ".")[1].split(";")[0].split(".");
                            Xw ? ka.sid = Dh[3] : ka.sid || (ka.sid = Ah + "");
                            ka.vid = Dh[0] + "." + Dh[1];
                            ka.from_cookie = !0
                        } else {
                            ka.sid || (ka.sid = Ah + "");
                            if (!ka.vid) {
                                Rn = !0;
                                var Zw = Math.round(2147483647 * Math.random());
                                {
                                    var Sn = Vw;
                                    let u, E, ba = [bw.appName, bw.version, bw.language ? bw.language : bw.browserLanguage, bw.platform, bw.userAgent, cw() ? 1 : 0].join("");
                                    af ? ba += af.width + "x" + af.height + af.colorDepth : q.java && q.java.awt && (E = q.java.awt.Toolkit.getDefaultToolkit().getScreenSize(),
                                    ba += E.screen.width + "x" + E.screen.height);
                                    ba = ba + Fd + (Uw || "");
                                    for (u = ba.length; 0 < Sn; )
                                        ba += Sn-- ^ u++;
                                    var $w = dw(ba)
                                }
                                ka.vid = (Zw ^ $w & 2147483647) + "." + Ah
                            }
                            ka.from_cookie = !1
                        }
                        if (!ka.cid) {
                            b: {
                                var Jc = Bh;
                                let E = 999;
                                Jc && (Jc = 0 == Jc.indexOf(".") ? Jc.substr(1) : Jc,
                                E = Jc.split(".").length);
                                let ba, ea = 999;
                                const ca = Fd.split(";");
                                for (let Ra = 0; Ra < ca.length; Ra++) {
                                    const Ha = fw.exec(ca[Ra]) || gw.exec(ca[Ra]) || hw.exec(ca[Ra]);
                                    if (!Ha)
                                        continue;
                                    const Nb = Ha[1] || 0;
                                    if (Nb == E) {
                                        var Tn = Ha[2];
                                        break b
                                    }
                                    Nb < ea && (ea = Nb,
                                    ba = Ha[2])
                                }
                                Tn = ba
                            }
                            const u = Tn;
                            Rn && u && -1 != u.search(/^\d+\.\d+$/) ? ka.vid = u : u != ka.vid && (ka.cid = u)
                        }
                        ka.dh = bf;
                        ka.hid || (ka.hid = Math.round(2147483647 * Math.random()));
                        Qn = ka
                    }
                    const H = Qn;
                    G.ga_vid = H.vid;
                    G.ga_sid = H.sid;
                    G.ga_hid = H.hid;
                    G.ga_fc = H.from_cookie;
                    G.ga_cid = H.cid;
                    G.ga_wpids = I.google_analytics_uacct
                }
                {
                    var Gd = a.pubWin;
                    const y = new oh(Gd);
                    if (Gd.location && Gd.location.ancestorOrigins) {
                        {
                            var Hd = y;
                            const v = []
                              , H = Math.min(Hd.l.length, 27);
                            for (let u = 1; u < H; u++)
                                Hd.l[u] && Hd.l[u].url && (v[u - 1] = Hd.l[u].url);
                            var ax = nh(Hd, v.reverse())
                        }
                        G.iag = ax
                    }
                    {
                        var cf = y;
                        const v = cf.j.document && cf.j.document.scripts ? cf.j.document.scripts : [];
                        if (v) {
                            for (var Eh = [], df = v.length - 1; 0 <= df && 26 > Eh.length; )
                                v[df].src && Eh.unshift(v[df].src),
                                df--;
                            var Un = nh(cf, Eh)
                        } else
                            Un = 0
                    }
                    G.icsg = Un;
                    const I = y.l[0].depth;
                    I && 0 < I && (G.nhd = I);
                    G.dssz = Gd.document.scripts ? Gd.document.scripts.length : 0;
                    {
                        const v = y.l
                          , H = [];
                        for (let u = v.length - 1; 0 < u; u--) {
                            const E = v[u];
                            E && null != E.url && H.push(Ce(Be(E.url)[3] || null))
                        }
                        var bx = jh(H)
                    }
                    G.mdo = bx;
                    {
                        const v = y.j.document && y.j.document.scripts ? y.j.document.scripts : [];
                        if (v) {
                            var Vn = [];
                            for (let H = v.length - 1; 0 <= H; H--) {
                                const u = v[H];
                                u && null != u.src && Vn.push(Ce(Be(u.src)[3] || null))
                            }
                            var Wn = jh(Vn)
                        } else
                            Wn = 0
                    }
                    G.mso = Wn
                }
                {
                    const y = x.google_ad_layout;
                    y && 0 <= Bt[y] && (G.rplot = Bt[y])
                }
            }
            var hb = K;
            hb.u_tz = -(new Date).getTimezoneOffset();
            hb.u_his = Hg();
            hb.u_java = !!R.navigator && "unknown" !== typeof R.navigator.javaEnabled && !!R.navigator.javaEnabled && R.navigator.javaEnabled();
            R.screen && (hb.u_h = R.screen.height,
            hb.u_w = R.screen.width,
            hb.u_ah = R.screen.availHeight,
            hb.u_aw = R.screen.availWidth,
            hb.u_cd = R.screen.colorDepth);
            R.navigator && R.navigator.plugins && (hb.u_nplug = R.navigator.plugins.length);
            R.navigator && R.navigator.mimeTypes && (hb.u_nmime = R.navigator.mimeTypes.length);
            if (b)
                try {
                    {
                        var Ob = K;
                        const x = Ij(a, b);
                        Ob.adx && -12245933 != Ob.adx && Ob.ady && -12245933 != Ob.ady || (Ob.adx = Math.round(x.x),
                        Ob.ady = Math.round(x.y));
                        Gj(b) || (Ob.adx = -12245933,
                        Ob.ady = -12245933)
                    }
                } catch (x) {}
            {
                var ef = K;
                const x = ng() || Hj(Qg(a.pubWin));
                x && (ef.biw = x.width,
                ef.bih = x.height);
                var Xn = a.pubWin;
                if (Qg(Xn) != Xn) {
                    const J = Hj(a.pubWin);
                    J && (ef.isw = J.width,
                    ef.ish = J.height)
                }
            }
            {
                var cx = K;
                var bc = a.pubWin;
                if (null === bc || bc == bc.top)
                    var Yn = 0;
                else {
                    var ff = [bc.document.URL];
                    bc.name && ff.push(bc.name);
                    var Zn = Hj(bc, !1);
                    ff.push(Zn.width.toString());
                    ff.push(Zn.height.toString());
                    Yn = Re(ff.join(""))
                }
                const x = Yn;
                0 !== x && (cx.ifk = x)
            }
            {
                var $n = K;
                let x;
                const J = Vg(a.pubWin);
                x = J && J.document ? Fj(J.document, J) : new Kd(-12245933,-12245933);
                $n.scr_x = Math.round(x.x);
                $n.scr_y = Math.round(x.y)
            }
            {
                var ao = K;
                const x = oj()
                  , J = xj(x)
                  , y = a.B.google_eids;
                if (oa(y)) {
                    a.l |= 64;
                    for (let H = 0; H < y.length; H++)
                        "string" === typeof y[H] && J.push(y[H])
                }
                ao.eid = J.join();
                const I = wj(x)
                  , v = a.B.google_loeid;
                "string" === typeof v && (a.l |= 4096,
                Pa(I, v.split(",")));
                ao.loeid = I.join()
            }
            a.I && (K.oid = a.I);
            var dx = K;
            if (Zh(oj(), 139) === uj.ma) {
                const x = Vg(a.pubWin);
                x && (dx.pg_h = uk(x, !0))
            }
            {
                var ex = K;
                const x = fj()[a.B.google_ad_client];
                x && (ex.psts = x.join())
            }
            K.pvsid = zf(a.pubWin);
            var fx = K;
            a: {
                var bo = a.pubWin;
                let x = -1;
                try {
                    bo.localStorage && (x = parseInt(bo.localStorage.getItem("google_pem_mod"), 10))
                } catch (J) {
                    var co = null;
                    break a
                }
                co = 0 <= x && 1E3 > x ? x : null
            }
            fx.pem = co;
            {
                var Z = K;
                const x = a.B
                  , J = a.pubWin
                  , y = Wi();
                Z.ref = x.google_referrer_url;
                Z.loc = x.google_page_location;
                {
                    const u = lg(a.pubWin);
                    if (u && qa(u.data) && "string" === typeof u.data.type) {
                        var Fh = u.data.type.toLowerCase();
                        var eo = "doubleclick" == Fh || "adsense" == Fh ? null : Fh
                    } else
                        eo = null
                }
                const I = eo;
                I && (Z.apn = I.substr(0, 10));
                const v = nk(y);
                var Gh = v;
                Z.url || Z.loc || !Gh.url || (Z.url = Gh.url,
                Gh.ob || (Z.usrc = 1));
                v.url != (Z.loc || Z.url) && (Z.top = v.url);
                x.google_async_rrc && (Z.rr = x.google_async_rrc);
                Z.rx = 0;
                {
                    if (Zt && Ut(Zt))
                        var fo = Zt;
                    else {
                        var Hh = Wi()
                          , go = Hh.google_jobrunner;
                        fo = Vt(go) ? Zt = go : Hh.google_jobrunner = Zt = new Xt(Hh)
                    }
                    const u = fo;
                    var ho = Dg(u.tc) ? u.tc() : null
                }
                ho && (Z.jtc = ho);
                0 <= a.v && (Z.eae = a.v);
                const H = cr(x, a.j);
                H && (Z.fc = H);
                if (!Tg(x)) {
                    var Id = (a.iframeWin || a.pubWin).document
                      , io = "";
                    if (Id.documentMode) {
                        var cc = $d(new Nd(Id), "IFRAME");
                        cc.frameBorder = "0";
                        cc.style.height = 0;
                        cc.style.width = 0;
                        cc.style.position = "absolute";
                        if (Id.body) {
                            Id.body.appendChild(cc);
                            try {
                                var gf = cc.contentWindow.document;
                                gf.open();
                                gf.write("<!DOCTYPE html>");
                                gf.close();
                                io += gf.documentMode
                            } catch (u) {}
                            Id.body.removeChild(cc)
                        }
                    }
                    Z.docm = io
                }
                {
                    let u, E, ba, ea, ca, Ra;
                    try {
                        u = J.screenX,
                        E = J.screenY
                    } catch (Ha) {}
                    try {
                        ba = J.outerWidth,
                        ea = J.outerHeight
                    } catch (Ha) {}
                    try {
                        ca = J.innerWidth,
                        Ra = J.innerHeight
                    } catch (Ha) {}
                    var gx = [J.screenLeft, J.screenTop, u, E, J.screen ? J.screen.availWidth : void 0, J.screen ? J.screen.availTop : void 0, ba, ea, ca, Ra]
                }
                Z.brdim = gx.join();
                {
                    var jo = J;
                    {
                        const E = qj.ma;
                        var hx = Zh(oj(), 67) === E
                    }
                    let u = 0;
                    void 0 === q.postMessage && (u |= 1);
                    if (hx) {
                        {
                            const E = lg(jo);
                            var ix = !(!E || !E.observeIntersection)
                        }
                        ix && (u |= 256);
                        {
                            const E = jo.document;
                            var jx = E && pa(E.elementFromPoint)
                        }
                        jx && (u |= 1024)
                    }
                    var ko = u
                }
                0 < ko && (Z.osd = ko);
                Z.vis = Uj(J.document);
                if (b) {
                    {
                        var kx = J
                          , Ih = x;
                        const u = Dk(Ih) ? Mv : Av(new Kv(kx,b,null,{
                            width: 0,
                            height: 0
                        },Ih.google_ad_width,Ih.google_ad_height,!1));
                        Z.rsz = u.toString();
                        Z.abl = nv(u)
                    }
                }
                var Jh = x;
                if (!Dk(Jh)) {
                    var Kh = Wg(Jh);
                    if (Kh) {
                        let u = 0;
                        a: {
                            try {
                                {
                                    var lo = Jh.google_async_iframe_id;
                                    const ea = w().document;
                                    if (lo)
                                        var mo = ea.getElementById(lo);
                                    else {
                                        var no = ea.getElementsByTagName("script")
                                          , oo = no[no.length - 1];
                                        mo = oo && oo.parentNode || null
                                    }
                                }
                                const ba = mo;
                                if (ba) {
                                    {
                                        const ea = [];
                                        let ca = ba
                                          , Ra = 0;
                                        const Ha = Date.now();
                                        for (; 100 >= ++Ra && 50 > Date.now() - Ha && (ca = ww(ca)); )
                                            1 === ca.nodeType && ea.push(ca);
                                        var hf = ea
                                    }
                                    b: {
                                        for (let ea = 0; ea < hf.length; ea++) {
                                            c: {
                                                var yb = hf[ea];
                                                try {
                                                    if (yb.parentNode && 0 < yb.offsetWidth && 0 < yb.offsetHeight && yb.style && "none" !== yb.style.display && "hidden" !== yb.style.visibility && (!yb.style.opacity || 0 !== Number(yb.style.opacity))) {
                                                        const ca = yb.getBoundingClientRect();
                                                        var po = 0 < ca.right && 0 < ca.bottom;
                                                        break c
                                                    }
                                                } catch (ca) {}
                                                po = !1
                                            }
                                            if (!po) {
                                                var qo = !1;
                                                break b
                                            }
                                        }
                                        qo = !0
                                    }
                                    if (qo) {
                                        b: {
                                            const ea = Date.now()
                                              , ca = /^html|body$/i
                                              , Ra = /^fixed/i;
                                            for (let Ha = 0; Ha < hf.length && 50 > Date.now() - ea; Ha++) {
                                                const Nb = hf[Ha];
                                                if (!ca.test(Nb.tagName) && Ra.test(Nb.style.position || wg(Nb))) {
                                                    var Lh = Nb;
                                                    break b
                                                }
                                            }
                                            Lh = null
                                        }
                                        break a
                                    }
                                }
                            } catch (ba) {}
                            Lh = null
                        }
                        const E = Lh;
                        E && E.offsetWidth * E.offsetHeight <= 4 * Kh.width * Kh.height && (u = 1);
                        Z.pfx = u
                    }
                }
                if ("26835106" === Zh(oj(), 41) && a.j) {
                    try {
                        const E = a.j.document.getElementsByTagName("head")[0];
                        var ro = E ? qw(E) : 0
                    } catch (E) {
                        ro = 0
                    }
                    const u = ro;
                    0 !== u && (Z.cms = u)
                }
                x.google_lrv !== Lf() && (Z.alvm = x.google_lrv || "none")
            }
            K.fu = a.l;
            {
                const x = new sw;
                q.SVGElement && q.document.createElementNS && x.set(0);
                const J = nf();
                J["allow-top-navigation-by-user-activation"] && x.set(1);
                J["allow-popups-to-escape-sandbox"] && x.set(2);
                q.crypto && q.crypto.subtle && x.set(3);
                q.TextDecoder && q.TextEncoder && x.set(4);
                var mx = rw(x)
            }
            K.bc = mx;
            qu();
            K.jar = nu[4];
            var zb = K;
            if (Of) {
                if (Of) {
                    const x = Wh();
                    x && (zb.debug_experiment_id = x)
                }
                zb.creatives = xw(/\b(?:creatives)=([\d,]+)/);
                zb.adgroups = xw(/\b(?:adgroups)=([\d,]+)/);
                zb.adgroups && (zb.adtest = "on",
                zb.disable_budget_throttling = !0,
                zb.use_budget_filtering = !1,
                zb.retrieve_only = !0,
                zb.disable_fcap = !0)
            }
            Sj() && (K.atl = !0);
            var nx = K
        }
        {
            const K = a.B
              , x = K.google_ad_channel;
            let J = "/pagead/ads?";
            "ca-pub-6219811747049371" === K.google_ad_client && yw.test(x) && (J = "/pagead/lopri?");
            var px = J
        }
        let Mh = Oj(ma, px);
        3 === Uj(a.pubWin.document) && (a.C = !0,
        a.H = Mh,
        Mh = Oj(ma, "/pagead/blank.gif#?"));
        const qx = Gg(nx, Mh + (Of && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = qx
    }
      , ww = a=>{
        try {
            if (a.parentNode)
                return a.parentNode
        } catch (c) {
            return null
        }
        if (9 === a.nodeType)
            a: {
                try {
                    const c = Rd(a);
                    if (c) {
                        const d = c.frameElement;
                        if (d && De(c.parent)) {
                            var b = d;
                            break a
                        }
                    }
                } catch (c) {}
                b = null
            }
        else
            b = null;
        return b
    }
    ;
    const xw = a=>{
        try {
            const b = q.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch (b) {}
        return ""
    }
    ;
    var vw = (a,b)=>{
        const c = dj(b, 8, {});
        b = dj(b, 9, {});
        const d = a.google_ad_section
          , e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }
    ;
    const Aw = (a,b)=>{
        const c = a.D;
        c && (c.ud && (b.npa = 1),
        c.Rb && (b.guci = c.Rb),
        c.Dd && (b.gdpr_consent = c.Dd,
        c.Wc && (b.addtl_consent = c.Wc)));
        a.J && (b.us_privacy = a.J);
        a.tcString && (b.gdpr_consent = a.tcString);
        void 0 != a.gdprApplies && (b.gdpr = a.gdprApplies ? "1" : "0");
        a.addtlConsent && (b.addtl_consent = a.addtlConsent)
    }
    ;
    var uw = (a,b)=>{
        const c = a.B;
        T(ah, (d,e)=>{
            b[d] = c[e]
        }
        );
        Aw(a, b);
        T($g, (d,e)=>{
            b[d] = c[e]
        }
        );
        T(bh, (d,e)=>{
            b[d] = c[e]
        }
        );
        Dk(c) && (a = Ck(c),
        b.fa = a)
    }
    ;
    const yw = /YtLoPri/;
    var Bw = (a=q)=>a.ggeac || (a.ggeac = {});
    class Cw {
        constructor() {}
    }
    la(Cw);
    var Dw = (a=Bw())=>{
        gj(hj.F(), a);
        eg(S.F(), a);
        Cw.F();
        S.F().m()
    }
    ;
    function Ew(a) {
        if (a.j)
            return a.j;
        a.j = pf(a.m, "__uspapiLocator");
        return a.j
    }
    function Fw(a) {
        return pa(a.m.__uspapi) || null != Ew(a)
    }
    function Gw(a, b) {
        if (pa(a.m.__uspapi))
            a = a.m.__uspapi,
            a("getUSPData", 1, b);
        else if (Ew(a)) {
            Hw(a);
            const c = ++a.A;
            a.v[c] = b;
            a.j && a.j.postMessage({
                ["__uspapiCall"]: {
                    command: "getUSPData",
                    version: 1,
                    callId: c
                }
            }, "*")
        }
    }
    function Iw(a, b) {
        let c = {};
        if (Fw(a)) {
            var d = Za(()=>b(c));
            Gw(a, (e,f)=>{
                f && (c = e);
                d()
            }
            );
            setTimeout(d, a.C)
        } else
            b(c)
    }
    function Hw(a) {
        a.o || (a.o = b=>{
            try {
                {
                    let d;
                    "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                    var c = d.__uspapiReturn
                }
                a.v[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Q(a.m, "message", a.o))
    }
    class Jw extends Xf {
        constructor(a, b=500) {
            super();
            this.m = a;
            this.j = null;
            this.v = {};
            this.A = 0;
            this.C = b;
            this.o = null
        }
        l() {
            this.v = {};
            this.o && (de(this.m, "message", this.o),
            delete this.o);
            delete this.v;
            delete this.m;
            delete this.j;
            super.l()
        }
    }
    ;function Kw(a) {
        if (a.j)
            return a.j;
        a.j = pf(a.m, "__tcfapiLocator");
        return a.j
    }
    function Lw(a) {
        return pa(a.m.__tcfapi) || null != Kw(a)
    }
    function Mw(a, b, c, d) {
        if (pa(a.m.__tcfapi))
            a = a.m.__tcfapi,
            a(b, 2, c, d);
        else if (Kw(a)) {
            Nw(a);
            const e = ++a.A;
            a.v[e] = c;
            a.j && a.j.postMessage({
                ["__tcfapiCall"]: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        }
    }
    function Ow(a, b) {
        let c = {};
        const d = Za(()=>b(c));
        Mw(a, "addEventListener", (e,f)=>{
            f && (c = e);
            e = void 0 !== c.tcString && "string" !== typeof c.tcString || void 0 !== c.gdprApplies && "boolean" !== typeof c.gdprApplies || void 0 !== c.listenerId && "number" !== typeof c.listenerId || void 0 !== c.addtlConsent && "string" !== typeof c.addtlConsent || !c.cmpStatus || "error" === c.cmpStatus ? !1 : !0;
            e && ("loaded" !== c.cmpStatus || "tcloaded" !== c.eventStatus && "useractioncomplete" !== c.eventStatus) || (e || (c.tcString = "tcunavailable"),
            Mw(a, "removeEventListener", ()=>{}
            , c.listenerId),
            d())
        }
        )
    }
    function Nw(a) {
        a.o || (a.o = b=>{
            try {
                {
                    let d;
                    "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                    var c = d.__tcfapiReturn
                }
                a.v[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Q(a.m, "message", a.o))
    }
    class Pw extends Xf {
        constructor(a) {
            super();
            this.m = a;
            this.j = null;
            this.v = {};
            this.A = 0;
            this.o = null
        }
        l() {
            this.v = {};
            this.o && (de(this.m, "message", this.o),
            delete this.o);
            delete this.v;
            delete this.m;
            delete this.j;
            super.l()
        }
    }
    ;function Qw(a) {
        var b = Lf();
        if (S.F().j(215, !1) && !a.goog_sdr_l) {
            Object.defineProperty(a, "goog_sdr_l", {
                value: !0
            });
            var c = ()=>{
                const d = S.F().l(37, 0)
                  , e = ()=>{
                    var f = String(zf(a));
                    try {
                        var g = new je("gda",b,"pt");
                        g.ya = f;
                        g.win = a;
                        he(new ie(g))
                    } catch (h) {}
                }
                ;
                d ? a.setTimeout(e, d) : e()
            }
            ;
            "complete" === a.document.readyState ? c() : Q(a, "load", c)
        }
    }
    ;let Rw = void 0;
    class lx extends Xf {
        constructor() {
            super()
        }
        l() {
            super.l()
        }
    }
    ;var rx = a=>{
        var b = a.iframeWin;
        const c = a.vars;
        b && (c.google_iframe_start_time = b.google_iframe_start_time);
        const d = new Hf(Vg(a.pubWin),a.pubWin,b,c);
        d.T = Date.now();
        Tj(1, [d.B]);
        a = S.F().j(284, !1);
        b = S.F().j(283, !1);
        (a || b) && xi("cr_strt", a);
        wi(159, ()=>ox(d));
        wi(639, ()=>{
            {
                var e = d.B;
                const g = d.j;
                if (g && 1 === e.google_responsive_auto_format && !0 === e.google_full_width_responsive_allowed) {
                    var f;
                    (f = (f = g.document.getElementById(e.google_async_iframe_id)) ? Yd(f) : null) ? (e = new Tt(g,f,e),
                    e.l = q.setInterval(wa(e.C, e), 500),
                    e.C(),
                    e = !0) : e = !1
                } else
                    e = !1
            }
            return e
        }
        );
        wi(160, ()=>{
            var e = d.iframeWin;
            !Lg(d.B) && e ? ch(e) : (e = Wi().google_jobrunner,
            Vt(e) && e.rl(),
            eh(d))
        }
        )
    }
      , ox = a=>{
        if (!/_sdo/.test(a.B.google_ad_format)) {
            mj(c=>Ej(a, c));
            var b = oj();
            Zh(b, 108) && (Sf = Rf);
            a.A = !1;
            lg() || kc() || (a.A = sx(a, b));
            a.A || tx(a, b)
        }
    }
    ;
    const ux = (a,b,c=!1)=>{
        b = Ij(a, b);
        const d = ng() || Hj(Qg(a.pubWin));
        if (!b || -12245933 == b.y || -12245933 == d.width || -12245933 == d.height || !d.height)
            return 0;
        let e = 0;
        try {
            const f = Qg(a.pubWin);
            e = Fj(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }
    ;
    function vx(a) {
        try {
            return a.iframeWin.frameElement
        } catch (b) {}
        return null
    }
    function sx(a, b) {
        return wx(a, b) || xx(a, b)
    }
    function wx(a, b) {
        const c = a.B;
        if (!c.google_pause_ad_requests)
            return !1;
        const d = q.setTimeout(()=>{
            W("abg:cmppar", {
                client: a.B.google_ad_client,
                url: a.B.google_page_url
            })
        }
        , 1E4)
          , e = V(450, ()=>{
            c.google_pause_ad_requests = !1;
            q.clearTimeout(d);
            a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", e);
            sx(a, b) || tx(a, b)
        }
        );
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", e);
        return !0
    }
    function xx(a, b) {
        const c = a.pubWin.document
          , d = yx(a);
        if (0 > d.hidden && 0 > d.visible)
            return !1;
        const e = vx(a)
          , f = e || a.o;
        null == e && null != a.o && W("ins_no_ifr", {
            sf: a.B.google_enable_single_iframe
        });
        const g = Vj(c);
        if (!f || !g)
            return !1;
        if (!Wj(c))
            return zx(a, b, d.visible, f);
        if (ux(a, f) <= d.hidden)
            return !1;
        let h = V(332, ()=>{
            !Wj(c) && h && (de(c, g, h),
            zx(a, b, d.visible, f) || tx(a, b),
            h = null)
        }
        );
        return Q(c, g, h)
    }
    function yx(a) {
        const b = {
            hidden: 0,
            visible: S.F().l(30, 0) || 4
        };
        a = Ri(a.pubWin);
        var c;
        (c = !q.IntersectionObserver) || (c = We(a.j[118]));
        c && (b.visible = -1);
        ze() && (a = S.F().l(29, 0) || Math.max(Ti(a, 82), 1),
        b.visible *= a);
        return b
    }
    function zx(a, b, c, d) {
        if (!d || 0 > c)
            return !1;
        var e = a.B;
        if (Dk(e) || e.google_reactive_ads_config || !Gj(d) || ux(a, d) <= c)
            return !1;
        var f = Zi()
          , g = dj(f, 8, {});
        f = dj(f, 9, {});
        e = e.google_ad_section || e.google_ad_region || "";
        g = !g[e] && !f[e];
        e = S.F().j(205, !1) && !!a.pubWin.google_apltlad;
        if (g && !e)
            return !1;
        a.M = new q.IntersectionObserver((h,k)=>{
            Ea(h, l=>{
                0 >= l.intersectionRatio || (k.unobserve(l.target),
                wi(294, ()=>{
                    tx(a, b)
                }
                ))
            }
            )
        }
        ,{
            rootMargin: 100 * c + "%"
        });
        a.M.observe(d);
        return !0
    }
    var tx = (a,b)=>{
        wi(326, ()=>{
            var d = a.B;
            if (Lg(d) ? 1 == Jg(d) : !Jg(d)) {
                var e = (d = !!b.j["1337"]) || b.j["21060549"] || b.j["20040067"] || Zh(b, 87) == rj.Cb
                  , f = w();
                if (e && f === f.top) {
                    e = wd;
                    var g = b.j["21060549"] && b.j["21060624"]
                      , h = b.j["21062272"]
                      , k = new Lj;
                    var l = new Mj;
                    var m = zf(a.pubWin);
                    ud(k, 1, m, 0);
                    m = $h(b).join();
                    ud(k, 5, m, "");
                    ud(k, 2, 1, 0);
                    vd(l, 1, k);
                    k = new Jj;
                    k = ud(k, 10, !0, !1);
                    k = ud(k, 8, g, !1);
                    k = ud(k, 9, g, !1);
                    k = ud(k, 7, g, !1);
                    g = ud(k, 13, g, !1);
                    h = ud(g, 14, h, !1);
                    vd(l, 2, h);
                    f.google_rum_config = e(l);
                    f = f.document;
                    e = Pj(Ug(), "/pagead/js/r20200406/r20190131/rum.js");
                    Of && d && (e = e.replace("rum", "rum_debug"));
                    d = e;
                    He(f, d)
                } else
                    hi(si)
            }
        }
        );
        a.B.google_ad_channel = Ax(a, a.B.google_ad_channel);
        a.B.google_tag_partner = Bx(a, a.B.google_tag_partner);
        Cx(a);
        var c = a.B.google_start_time;
        "number" === typeof c && (du = c,
        a.B.google_start_time = null);
        wi(161, ()=>{
            {
                const f = a.B;
                null == f.google_ad_output && (f.google_ad_output = "html");
                if (null != f.google_ad_client) {
                    var d;
                    (d = String(f.google_ad_client)) ? (d = d.toLowerCase()) && "ca-" != d.substring(0, 3) && (d = "ca-" + d) : d = "";
                    f.google_ad_client = d
                }
                null != f.google_ad_slot && (f.google_ad_slot = String(f.google_ad_slot));
                if (null == f.google_flash_version) {
                    try {
                        var e = Sg()
                    } catch (g) {
                        e = "0"
                    }
                    f.google_flash_version = e
                }
                f.google_webgl_support = !!R.WebGLRenderingContext;
                f.google_ad_section = f.google_ad_section || f.google_ad_region || "";
                f.google_country = f.google_country || f.google_gl || "";
                e = (new Date).getTime();
                oa(f.google_color_bg) && (f.google_color_bg = dh(a, f.google_color_bg, e));
                oa(f.google_color_text) && (f.google_color_text = dh(a, f.google_color_text, e));
                oa(f.google_color_link) && (f.google_color_link = dh(a, f.google_color_link, e));
                oa(f.google_color_url) && (f.google_color_url = dh(a, f.google_color_url, e));
                oa(f.google_color_border) && (f.google_color_border = dh(a, f.google_color_border, e));
                oa(f.google_color_line) && (f.google_color_line = dh(a, f.google_color_line, e))
            }
        }
        );
        Dx(a);
        if (c = a.B.google_reactive_ads_config)
            if (gr(a.j, c),
            a.j)
                zt(c, a),
                c = c.page_level_pubvars,
                qa(c) && jb(a.B, c);
            else
                return;
        Dk(a.B) && (Oi() && (a.B.google_adtest = a.B.google_adtest || "on"),
        a.B.google_pgb_reactive = a.B.google_pgb_reactive || 3);
        Ex(a)
    }
      , Dx = a=>{
        a.j && (ar(a.j, a.B),
        Zq(a.j.location) && mr(a.j, {
            ["enable_page_level_ads"]: {
                ["pltais"]: !0
            },
            ["google_ad_client"]: a.B.google_ad_client
        }))
    }
      , Ax = (a,b)=>(b ? [b] : []).concat(Yg(a.B).ad_channels || []).join("+")
      , Bx = (a,b)=>(b ? [b] : []).concat(Yg(a.B).tag_partners || []).join("+")
      , Hx = (a,b,c,d)=>{
        const e = d.iframeWin ? d.B.google_container_id : d.o.id;
        c.src = fu(a);
        const f = (d.iframeWin || d.pubWin).document
          , g = f.currentScript || f.scripts && f.scripts[0]
          , h = w() == window.top;
        if (kc() || !g && !e)
            c = xu(c),
            h && (pg(d.pubWin),
            q.setTimeout(V(222, ()=>{
                const k = f.getElementById(b);
                k ? d.m.push(pg(d.pubWin, k)) : W("inabox:no-iframe", {
                    adUrl: a
                })
            }
            ), 0)),
            e ? Fx(e, f, c) : f.write(c);
        else {
            const k = $d(new Nd(f), "IFRAME");
            T(c, (l,m)=>{
                null != l && k.setAttribute(m, l)
            }
            );
            h && d.m.push(pg(d.pubWin, k));
            e ? Gx(e, f, k) : g.parentNode.insertBefore(k, g.nextSibling)
        }
        S.F().j(236, !1) && !d.B.google_refresh_count && q.setTimeout(V(644, ()=>{
            Bf(f.getElementById(b), ()=>{
                q.setTimeout(()=>{
                    for (const k of d.m)
                        k();
                    d.m.length = 0
                }
                , 200)
            }
            )
        }
        ), 0)
    }
      , Ix = (a,b,c)=>a.j ? ir(525, d=>{
        (a.iframeWin ? a.iframeWin.document.body : a.o).appendChild(b);
        d.createAdSlot(a.j, a.B, c, b);
        return b
    }
    ) : (W("jserror", {
        context: "ac_crai"
    }),
    null);
    function Jx(a, b, c, d, e=!1) {
        Qw(a.pubWin);
        const f = "string" === typeof b ? (a.iframeWin || a.pubWin).document.getElementById(b) : b;
        if (f) {
            var g = a.j
              , h = a.iframeWin && Lg(a.B) ? a.iframeWin.frameElement : f;
            Q(f, "load", ()=>{
                f && f.setAttribute("data-load-complete", !0);
                if ((a.B.ovlp || S.F().j(190, !1)) && g && g === a.pubWin && h) {
                    const l = h.ownerDocument.getElementById(h.id + "_expand");
                    l && Kx(g, a, l, f)
                }
            }
            );
            e = l=>{
                l && a.m.push(()=>l.Oa())
            }
            ;
            var k = Lx(a);
            !g || Dk(a.B) && !Ek(a.B) || (e(new Rv(g,f,h,a.B)),
            e(Lu(a, f)),
            e(Bu(a, f)),
            e(g.IntersectionObserver ? null : new Ju(g,f,a.o)),
            e(Yv(g, f, a.B, a.V, V(627, l=>{
                l || k();
                for (const m of a.m)
                    m();
                a.m.length = 0
            }
            ))));
            g && (e(new cu(g,f,a.B)),
            a.m.push(Nt(a.iframeWin, g, a.B)),
            a.m.push(Au(g, f)),
            Pt.F().O(g));
            a.C && Mx(a, f, a.pubWin.document);
            Nx(a, c, f);
            f && f.setAttribute("data-google-container-id", d);
            e = a.B.iaaso;
            if (null != e && h) {
                const l = h.ownerDocument.getElementById(h.id + "_expand")
                  , m = l.parentElement;
                (m && Og.test(m.className) ? m : l).setAttribute("data-auto-ad-size", e)
            }
            Ox(a)
        } else
            e ? W("jserror", {
                context: "ac::nfrm",
                url: c
            }) : (e = V(162, ()=>Jx(a, b, c, d, !0)),
            q.setTimeout(e, 0))
    }
    var Lx = a=>{
        const b = a.iframeWin || a.pubWin;
        if (!b)
            return ()=>{}
            ;
        const c = a.B.google_ad_client
          , d = fj();
        let e = null;
        const f = Ai(b, "pvt", (g,h)=>{
            var k;
            if (k = h.source && "string" === typeof g.token)
                a: {
                    try {
                        let l = h.source;
                        h = b || R;
                        for (let m = 0; 20 > m; m++) {
                            if (l == h) {
                                k = !0;
                                break a
                            }
                            if (l == h.top)
                                break;
                            l = l.parent
                        }
                    } catch (l) {}
                    k = !1
                }
            k && (e = g.token,
            f(),
            d[c] = d[c] || [],
            d[c].push(e),
            100 < d[c].length && d[c].shift())
        }
        );
        return ()=>{
            e && oa(d[c]) && (Ma(d[c], e),
            d[c].length || delete d[c],
            e = null)
        }
    }
    ;
    const Ox = a=>{
        const b = lg(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = a.iframeWin || a.pubWin
                  , d = f=>{
                    "fill_sticky" === f.data && (b.renderStart && b.renderStart(),
                    a.iframeWin && de(c, "message", d))
                }
                  , e = V(616, d, this);
                Q(c, "message", e);
                a.m.push(()=>{
                    de(c, "message", d)
                }
                )
            } else
                b.renderStart && b.renderStart()
    }
      , Kx = (a,b,c,d)=>{
        Uu(new cv(a,[5, 8, 9],[3, 4],void 0,2), c).then(e=>{
            Tj(8, [e]);
            return e
        }
        ).then(e=>{
            const f = c.parentElement;
            (f && Og.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }
        ).then(e=>{
            const f = b.B.armr || ""
              , g = (Yg(b.B).eids || []).join(",")
              , h = e.executionTime || ""
              , k = null == b.B.iaaso ? "" : Number(b.B.iaaso)
              , l = Number(e.isOverlappingOrOutsideViewport)
              , m = Ga(e.entries, t=>`${t.overlapType}:${t.overlapDepth}:${t.overlapDetectionPoint}`)
              , p = e.overlappedArea.toFixed(2);
            W("ovlp", {
                adf: b.B.google_ad_dom_fingerprint,
                armr: f,
                client: b.B.google_ad_client,
                eid: g,
                et: h,
                fwrattr: b.B.google_full_width_responsive,
                iaaso: k,
                io: l,
                saldr: b.B.google_loader_used,
                oa: p,
                oe: m.join(","),
                qid: d.dataset.googleQueryId || "",
                rafmt: b.B.google_responsive_auto_format,
                roa: p * e.targetRect.width * e.targetRect.height,
                slot: b.B.google_ad_slot,
                sp: e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                tgt: Kg(e.target),
                tr: [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join(),
                url: b.B.google_page_url,
                vp: e.viewportSize.width + "x" + e.viewportSize.height
            }, 1)
        }
        ).catch(e=>{
            Tj(8, ["Error:", e.message, c]);
            W("ovlp-err", {
                err: e.message
            }, 1)
        }
        )
    }
    ;
    var Mx = (a,b,c)=>{
        if (3 !== Uj(c))
            Px(a.H, b);
        else {
            const d = Vj(c);
            if (d) {
                let e = ()=>{
                    de(c, d, f);
                    e = null
                }
                ;
                const f = ()=>{
                    Px(a.H, b);
                    e && e()
                }
                ;
                Q(c, d, f);
                a.m.push(()=>e && e())
            }
        }
        a.C = !1
    }
      , Qx = a=>{
        var b = B("Edge") ? 4E3 : 8100;
        var c = a;
        var d = b - 8;
        c.length > b && (c = c.substring(0, d),
        c = c.replace(/%\w?$/, ""),
        c = c.replace(/&[^=]*=?$/, ""),
        c += "&trunc=1");
        c !== a && (b -= 8,
        d = a.lastIndexOf("&", b),
        -1 === d && (d = a.lastIndexOf("?", b)),
        b = -1 === d ? "" : a.substring(d + 1),
        W("trn", {
            ol: a.length,
            tr: b,
            url: a
        }, .01));
        return c
    }
      , Rx = (a,b)=>{
        var c = a.B
          , d = Jg(c);
        c = a.iframeWin ? "google_ads_frame" + d : c.google_async_iframe_id;
        var e = b
          , f = 0 === a.v;
        b = a.B;
        var g = b.google_async_iframe_id, h = a.iframeWin ? "google_ads_frame" + d : g, k = b.google_ad_width, l = b.google_ad_height, m = {
            id: h,
            name: h
        }, p = ut(b), t = !p && !tt(b) && Yq(b), z, C = nf();
        if (z = !(!C["allow-top-navigation-by-user-activation"] || !C["allow-popups-to-escape-sandbox"])) {
            var r = e;
            if (C = "fsb=" + encodeURIComponent("1")) {
                e = r.indexOf("#");
                0 > e && (e = r.length);
                var F = r.indexOf("?");
                if (0 > F || F > e) {
                    F = e;
                    var M = ""
                } else
                    M = r.substring(F + 1, e);
                r = [r.substr(0, F), M, r.substr(e)];
                e = r[1];
                r[1] = C ? e ? e + "&" + C : C : e;
                e = r[0] + (r[1] ? "?" + r[1] : "") + r[2]
            } else
                e = r;
            C = m;
            r = mf().join(" ");
            C.sandbox = r
        }
        r = e;
        e = Qx(e);
        M = f ? e.replace(/&ea=[^&]*/, "") + "&ea=0" : e;
        zu(m, k, l, fu(M));
        C = xu(m);
        F = "";
        if (f) {
            F = 10;
            for (M = ""; 0 < F--; )
                M += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
            F = M;
            e = yi(e, F);
            yi(r, F)
        } else
            e = M;
        b.dash && (m.srcdoc = b.dash);
        S.F().j(312, !1) && void 0 === Rw && (document.hasTrustToken ? Rw = new lx(a.pubWin) : Rw = null);
        r = null;
        p ? (m = e,
        r = g,
        M = a.B,
        p = M.google_ad_width,
        t = M.google_ad_height,
        M = M.google_reactive_sra_index,
        p && t && null != M ? (M = a.iframeWin ? "google_ads_frame_rsra_" + M : a.B.google_async_iframe_id,
        M = {
            id: M,
            name: M
        },
        z && (z = mf().join(" "),
        M.sandbox = z),
        zu(M, p, t, m),
        z = wu(M),
        r = Ix(a, z, r)) : r = null) : t ? (z = m,
        r = g,
        z.src = fu(e),
        z = wu(z),
        r = Ix(a, z, r)) : Hx(e, h, m, a);
        f && (f = h,
        h = e,
        z = F,
        F = g,
        e = Oj(Ug(), "/pagead/js/r20200406/r20190131/creativetoolset/xpc_expansion_embed.js"),
        d = {
            id: f,
            url: h,
            width: k,
            height: l,
            Ib: z,
            qd: a.pubWin,
            Fc: F || void 0,
            sh: "google_expandable_ad_slot" + d,
            bd: e,
            kb: a.iframeWin || a.pubWin
        },
        d = !d.id || !d.url || 0 >= d.width || 0 >= d.height || !d.Ib || !d.kb ? void 0 : Fi(d.kb, xa(Hi, d, e)),
        d && a.m.push(d));
        if (a.iframeWin && Lg(b)) {
            a = g;
            d = ["<!DOCTYPE html><html><body>", C, "</body></html>"].join("");
            d = String(d);
            b = ['"'];
            for (g = 0; g < d.length; g++) {
                k = d.charAt(g);
                f = k.charCodeAt(0);
                l = g + 1;
                if (!(h = Lc[k])) {
                    if (!(31 < f && 127 > f))
                        if (f = k,
                        f in Mc)
                            k = Mc[f];
                        else if (f in Lc)
                            k = Mc[f] = Lc[f];
                        else {
                            h = f.charCodeAt(0);
                            if (31 < h && 127 > h)
                                k = f;
                            else {
                                if (256 > h) {
                                    if (k = "\\x",
                                    16 > h || 256 < h)
                                        k += "0"
                                } else
                                    k = "\\u",
                                    4096 > h && (k += "0");
                                k += h.toString(16).toUpperCase()
                            }
                            k = Mc[f] = k
                        }
                    h = k
                }
                b[l] = h
            }
            b.push('"');
            d = "javascript:" + b.join("");
            b = w();
            (new gu(b)).set(a, d)
        }
        return (a = r) || c
    }
      , Nx = (a,b,c)=>{
        const d = !lc() || 0 <= Hb(pc(), 11) ? za() : jk();
        d.getOseId() && (ya(),
        d.registerAdBlock(b, 1, "", c),
        a.m.push(()=>{
            d.unloadAdBlock(c, !!a.B.google_refresh_count, !0)
        }
        ))
    }
    ;
    const Ux = (a,b,c)=>{
        var d = a.B;
        let e = "";
        ut(d) ? (e = Gg({
            ["adk"]: d.google_ad_unit_key,
            ["client"]: d.google_ad_client,
            ["fa"]: d.google_reactive_ad_format
        }, yu("RS-" + d.google_reactive_sra_index + "-")),
        vw(d, Zi()),
        Sx(d)) : (tt(d) || !Yq(d) || Xq(a.pubWin, d)) && Sx(d) && (e = zw(a, b));
        Tj(2, [a.B, e]);
        b && b.id == c && b && b.parentNode && b.parentNode.removeChild(b);
        if (e) {
            Lg(d) || Ig(a.pubWin);
            c = Jg(a.B);
            var f = q.window === q.window.top ? "a!" + c.toString(36) : `${c.toString(36)}.${Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ +new Date).toString(36)}`;
            b = b ? 0 < ux(a, b, !0) : !1;
            c = {
                ["ifi"]: c,
                ["uci"]: f
            };
            b && (b = Zi(),
            c.btvi = dj(b, 21, 1),
            ej(b, 21));
            e = Gg(c, e);
            c = S.F().j(284, !1);
            d = S.F().j(283, !1);
            (c || d) && xi("cr_urlbuilt", c);
            b = Rx(a, e);
            e = Qx(e);
            Tx(a, vx(a) || a.o);
            (c || d) && xi("cr_postwrite", c);
            c = g=>{
                Jx(a, g, e, f)
            }
            ;
            "string" === typeof b ? c(b) : b.then(c).then(null, g=>{
                qi.j(223, g, void 0, void 0)
            }
            )
        }
    }
      , Vx = (a,b,c)=>{
        var d = a.B;
        d = "aa" === d.google_loader_used || "sa" === d.google_loader_used;
        const e = V(449, Ux);
        d && (nc() ? 0 <= Hb(pc(), 11) : mc() && 0 <= Hb(pc(), 65)) ? (uu(()=>{
            e(a, b, c)
        }
        ),
        a.G = uu) : Ux(a, b, c)
    }
      , Xx = (a,b,c)=>{
        S.F().j(259, !1) ? Iw(new Jw(a.pubWin), d=>{
            d && "string" === typeof d.uspString && (a.J = d.uspString);
            Wx(a, b, c)
        }
        ) : Wx(a, b, c)
    }
    ;
    function Yx(a, b, c) {
        const d = new Pw(a.pubWin);
        S.F().j(279, !1) && Lw(d) ? Ow(d, e=>{
            a.tcString = e.tcString;
            a.gdprApplies = e.gdprApplies;
            a.addtlConsent = e.addtlConsent || "";
            Xx(a, b, c)
        }
        ) : Xx(a, b, c)
    }
    const Wx = (a,b,c)=>{
        var d = a.B;
        const e = "aa" === d.google_loader_used || "sa" === d.google_loader_used
          , f = d.google_ad_client;
        d = Ff(Qf, f);
        if (e && d.hc) {
            const g = q.setTimeout(()=>{
                W("abg:cmpnc", {
                    client: a.B.google_ad_client,
                    url: a.B.google_page_url,
                    consent: JSON.stringify(Ff(Qf, f))
                })
            }
            , 1E4);
            a.A = !0;
            Gf(Qf, f, V(450, h=>{
                q.clearTimeout(g);
                a.D = h;
                Vx(a, b, c)
            }
            ))
        } else
            a.D = d,
            Vx(a, b, c)
    }
    ;
    var Zx = (a,b,c)=>{
        lu = w;
        qu();
        ju.test(".google.co.jp") && !ku.test(".google.co.jp") && (pu[1] = ".google.co.jp");
        const d = ()=>{
            Yx(a, b, c)
        }
          , e = f=>{
            of(q.top, "googlefcLoaded") ? f() : q.setTimeout(()=>{
                e(V(679, f))
            }
            , 500)
        }
        ;
        (q.googlefc || of(q.top, "googlefcPresent")) && S.F().j(304, !1) ? e(d) : Yx(a, b, c)
    }
      , Ex = a=>{
        var b = a.B.google_ad_width;
        var c = a.B.google_ad_height
          , d = a.pubWin.document
          , e = a.B
          , f = 0;
        try {
            !1 === e.google_allow_expandable_ads && (f |= 1);
            if (!d.body || isNaN(e.google_ad_height) || isNaN(e.google_ad_width) || a.iframeWin && d.domain != a.iframeWin.location.hostname || !/^http/.test(d.location.protocol))
                f |= 2;
            a: {
                e = navigator;
                var g = e.userAgent;
                const k = e.platform
                  , l = /WebKit\/(\d+)/
                  , m = /rv:(\d+\.\d+)/
                  , p = /rv:1\.8([^.]|\.0)/;
                if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && !/^Opera/.test(g)) {
                    const t = (l.exec(g) || [0, 0])[1]
                      , z = (m.exec(g) || [0, 0])[1];
                    if (/Win/.test(k) && /Trident/.test(g) && 11 <= d.documentMode || !t && "Gecko" === e.product && 27 <= z && !p.test(g) || 536 <= t) {
                        var h = !0;
                        break a
                    }
                }
                h = !1
            }
            h || (f |= 4)
        } catch (k) {
            f |= 8
        }
        h = f;
        lk(a.pubWin, a.pubWin.document, b, c) && (h |= 2);
        b = h;
        a.v = b;
        0 === a.v || (a.B.google_allow_expandable_ads = !1);
        Wi() != a.pubWin && (a.l |= 4);
        Sf && (a.l |= 16);
        Pf && (a.l |= 8);
        3 === Uj(a.pubWin.document) && (a.l |= 32);
        if (b = a.j)
            b = a.j,
            b = !(X(b).scrollWidth <= X(b).clientWidth);
        b && (a.l |= 1024);
        null == a.iframeWin && (a.l |= 8192);
        a.B.google_loader_features_used && (a.l |= a.B.google_loader_features_used);
        hk = ek();
        Zj = Tf;
        Yj = Uf;
        b = !lc() || 0 <= Hb(pc(), 11) ? za() : jk();
        c = Zi();
        a.I = b.setupOse(dj(c, 7, Yi()));
        b = "";
        (c = a.B.google_async_iframe_id) && null == a.iframeWin ? c = a.o : c ? c = a.pubWin.document.getElementById(c) : (c = b = "google_temp_span",
        h = a.B.google_container_id,
        f = a.iframeWin.document,
        g = h && f.getElementById(h) || f.getElementById(c),
        g || h || !c || (f.write("<span id=" + c + "></span>"),
        g = f.getElementById(c)),
        c = g);
        Zx(a, c, b)
    }
      , Gx = (a,b,c)=>{
        if (a = b.getElementById(a)) {
            for (a.style.visibility = "visible"; b = a.firstChild; )
                a.removeChild(b);
            a.appendChild(c)
        }
    }
      , Fx = (a,b,c)=>{
        a && (a = b.getElementById(a)) && c && (a.style.visibility = "visible",
        a.innerHTML = c)
    }
      , Px = (a,b)=>{
        var c = b.src
          , d = c.indexOf("/pagead/blank.gif#?");
        a = -1 === d ? c : a + c.substr(d + 19);
        a !== c && (c = b.nextSibling,
        d = b.parentNode,
        d.removeChild(b),
        b.src = a,
        d.insertBefore(b, c))
    }
      , Sx = a=>{
        const b = Zi()
          , c = a.google_ad_section;
        Dk(a) && ej(b, 15);
        if (Tg(a)) {
            if (100 < ej(b, 5))
                return !1
        } else if (100 < ej(b, 6) - dj(b, 15, 0) && "" == c)
            return !1;
        return !0
    }
      , Tx = (a,b)=>{
        b && a.B.rpe && Lv(a.pubWin, b, {
            height: a.B.google_ad_height,
            Ab: "force",
            Gb: !0,
            cc: !0,
            Eb: a.B.google_ad_client
        })
    }
      , Cx = a=>{
        const b = a.j;
        if (b && !Yg(b).ads_density_stats_processed && !lg(b) && (Yg(b).ads_density_stats_processed = !0,
        S.F().j(290, !1) || .01 > Me(b))) {
            const c = ()=>{
                if (b) {
                    var d = ms(hs(b), a.B.google_ad_client, b.location.hostname, Yg(a.B).eids || []);
                    W("ama_stats", d, 1)
                }
            }
            ;
            "complete" === b.document.readyState ? q.setTimeout(c, 1E3) : Q(b, "load", ()=>{
                q.setTimeout(c, 1E3)
            }
            )
        }
    }
    ;
    {
        (()=>{
            var b = [St, Rt, pj, vi];
            qi.l = c=>{
                Ea(b, d=>{
                    d(c)
                }
                );
                ti(c);
                ri && (c.jc = ri);
                ui(c)
            }
        }
        )();
        const a = q.google_sl_win || q;
        a.google_sa_impl || (a.google_sa_impl = rx,
        Dw(Bw(a)),
        a.google_process_slots && a.google_process_slots())
    }
    ;
}
).call(this, window, document, location)
