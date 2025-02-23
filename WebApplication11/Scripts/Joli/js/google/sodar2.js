(function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    'use strict';
    var aa = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , h;
    if ("function" == typeof Object.setPrototypeOf)
        h = Object.setPrototypeOf;
    else {
        var k;
        a: {
            var ba = {
                F: !0
            }
              , ca = {};
            try {
                ca.__proto__ = ba;
                k = ca.F;
                break a
            } catch (a) {}
            k = !1
        }
        h = k ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var da = h;
    function n(a, b) {
        a.prototype = aa(b.prototype);
        a.prototype.constructor = a;
        if (da)
            da(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c]
    }
    var p = this || self
      , ea = /^[\w+/_-]+[=]{0,2}$/
      , q = null;
    function r() {}
    function fa(a) {
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
    function t(a) {
        return "function" == fa(a)
    }
    function ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ia(a, b, c) {
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
    function u(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? u = ha : u = ia;
        return u.apply(null, arguments)
    }
    function ja(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    function ka(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    }
    ;function v(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }
    ;function w(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, w);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    ka(w, Error);
    w.prototype.name = "CustomError";
    var x;
    a: {
        var la = p.navigator;
        if (la) {
            var ma = la.userAgent;
            if (ma) {
                x = ma;
                break a
            }
        }
        x = ""
    }
    ;function y(a, b) {
        this.b = a === z && b || "";
        this.a = na
    }
    function A(a) {
        return a instanceof y && a.constructor === y && a.a === na ? a.b : "type_error:Const"
    }
    var na = {}
      , z = {}
      , oa = new y(z,"");
    function B(a, b) {
        this.b = a === C && b || "";
        this.a = pa
    }
    function qa(a) {
        return a instanceof B && a.constructor === B && a.a === pa ? a.b : "type_error:TrustedResourceUrl"
    }
    function ra(a, b) {
        var c = A(a);
        if (!sa.test(c))
            throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(ta, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e))
                throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof y ? A(d) : encodeURIComponent(String(d))
        });
        return new B(C,a)
    }
    var ta = /%{(\w+)}/g
      , sa = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i
      , pa = {}
      , C = {};
    function D() {
        this.a = "";
        this.b = ua
    }
    var ua = {};
    function E(a) {
        var b = new D;
        b.a = a;
        return b
    }
    E("<!DOCTYPE html>");
    var F = E("");
    E("<br>");
    function va(a, b) {
        a.src = qa(b).toString()
    }
    function wa(a, b) {
        a.src = qa(b);
        if (null === q)
            b: {
                b = p.document;
                if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && ea.test(b)) {
                    q = b;
                    break b
                }
                q = ""
            }
        b = q;
        b && a.setAttribute("nonce", b)
    }
    ;function G(a, b) {
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null
    }
    G.prototype.get = function() {
        if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else
            a = this.c();
        return a
    }
    ;
    function xa(a, b) {
        a.g(b);
        100 > a.b && (a.b++,
        b.next = a.a,
        a.a = b)
    }
    ;function ya() {
        var a = document;
        var b = "IFRAME";
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    ;function za(a) {
        p.setTimeout(function() {
            throw a;
        }, 0)
    }
    var H;
    function Aa() {
        var a = p.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == x.indexOf("Presto") && (a = function() {
            var e = ya();
            e.style.display = "none";
            va(e, new B(C,A(oa)));
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(F instanceof D && F.constructor === D && F.b === ua ? F.a : "type_error:SafeHtml");
            e.close();
            var g = "callImmediate" + Math.random()
              , l = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = u(function(m) {
                if (("*" == l || m.origin == l) && m.data == g)
                    this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, l)
                }
            }
        }
        );
        if ("undefined" !== typeof a && -1 == x.indexOf("Trident") && -1 == x.indexOf("MSIE")) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.A;
                    c.A = null;
                    e()
                }
            }
            ;
            return function(e) {
                d.next = {
                    A: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            p.setTimeout(e, 0)
        }
    }
    ;function Ba() {
        this.b = this.a = null
    }
    var Ca = new G(function() {
        return new I
    }
    ,function(a) {
        a.reset()
    }
    );
    Ba.prototype.add = function(a, b) {
        var c = Ca.get();
        c.set(a, b);
        this.b ? this.b.next = c : this.a = c;
        this.b = c
    }
    ;
    function Da() {
        var a = Ea
          , b = null;
        a.a && (b = a.a,
        a.a = a.a.next,
        a.a || (a.b = null),
        b.next = null);
        return b
    }
    function I() {
        this.next = this.b = this.a = null
    }
    I.prototype.set = function(a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    }
    ;
    I.prototype.reset = function() {
        this.next = this.b = this.a = null
    }
    ;
    function J(a, b) {
        K || Fa();
        L || (K(),
        L = !0);
        Ea.add(a, b)
    }
    var K;
    function Fa() {
        if (p.Promise && p.Promise.resolve) {
            var a = p.Promise.resolve(void 0);
            K = function() {
                a.then(Ga)
            }
        } else
            K = function() {
                var b = Ga, c;
                !(c = !t(p.setImmediate)) && (c = p.Window && p.Window.prototype) && (c = -1 == x.indexOf("Edge") && p.Window.prototype.setImmediate == p.setImmediate);
                c ? (H || (H = Aa()),
                H(b)) : p.setImmediate(b)
            }
    }
    var L = !1
      , Ea = new Ba;
    function Ga() {
        for (var a; a = Da(); ) {
            try {
                a.a.call(a.b)
            } catch (b) {
                za(b)
            }
            xa(Ca, a)
        }
        L = !1
    }
    ;function M(a) {
        this.f = 0;
        this.D = void 0;
        this.j = this.h = this.i = null;
        this.s = this.u = !1;
        if (a != r)
            try {
                var b = this;
                a.call(void 0, function(c) {
                    N(b, 2, c)
                }, function(c) {
                    N(b, 3, c)
                })
            } catch (c) {
                N(this, 3, c)
            }
    }
    function Ha() {
        this.next = this.context = this.b = this.c = this.a = null;
        this.g = !1
    }
    Ha.prototype.reset = function() {
        this.context = this.b = this.c = this.a = null;
        this.g = !1
    }
    ;
    var Ia = new G(function() {
        return new Ha
    }
    ,function(a) {
        a.reset()
    }
    );
    function Ja(a, b, c) {
        var d = Ia.get();
        d.c = a;
        d.b = b;
        d.context = c;
        return d
    }
    function Ka() {
        var a = new M(r);
        N(a, 2, void 0);
        return a
    }
    function La(a) {
        return new M(function(b, c) {
            a.length || b(void 0);
            for (var d = 0, e; d < a.length; d++) {
                e = a[d];
                var f = b;
                Ma(e, f, c, null) || J(ja(f, e))
            }
        }
        )
    }
    M.prototype.then = function(a, b, c) {
        return Na(this, t(a) ? a : null, t(b) ? b : null, c)
    }
    ;
    M.prototype.$goog_Thenable = !0;
    M.prototype.cancel = function(a) {
        if (0 == this.f) {
            var b = new O(a);
            J(function() {
                Oa(this, b)
            }, this)
        }
    }
    ;
    function Oa(a, b) {
        if (0 == a.f)
            if (a.i) {
                var c = a.i;
                if (c.h) {
                    for (var d = 0, e = null, f = null, g = c.h; g && (g.g || (d++,
                    g.a == a && (e = g),
                    !(e && 1 < d))); g = g.next)
                        e || (f = g);
                    e && (0 == c.f && 1 == d ? Oa(c, b) : (f ? (d = f,
                    d.next == c.j && (c.j = d),
                    d.next = d.next.next) : Pa(c),
                    Qa(c, e, 3, b)))
                }
                a.i = null
            } else
                N(a, 3, b)
    }
    function Ra(a, b) {
        a.h || 2 != a.f && 3 != a.f || Sa(a);
        a.j ? a.j.next = b : a.h = b;
        a.j = b
    }
    function Na(a, b, c, d) {
        var e = Ja(null, null, null);
        e.a = new M(function(f, g) {
            e.c = b ? function(l) {
                try {
                    var m = b.call(d, l);
                    f(m)
                } catch (R) {
                    g(R)
                }
            }
            : f;
            e.b = c ? function(l) {
                try {
                    var m = c.call(d, l);
                    void 0 === m && l instanceof O ? g(l) : f(m)
                } catch (R) {
                    g(R)
                }
            }
            : g
        }
        );
        e.a.i = a;
        Ra(a, e);
        return e.a
    }
    M.prototype.H = function(a) {
        this.f = 0;
        N(this, 2, a)
    }
    ;
    M.prototype.I = function(a) {
        this.f = 0;
        N(this, 3, a)
    }
    ;
    function N(a, b, c) {
        0 == a.f && (a === c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself")),
        a.f = 1,
        Ma(c, a.H, a.I, a) || (a.D = c,
        a.f = b,
        a.i = null,
        Sa(a),
        3 != b || c instanceof O || Ta(a, c)))
    }
    function Ma(a, b, c, d) {
        if (a instanceof M)
            return Ra(a, Ja(b || r, c || null, d)),
            !0;
        if (a)
            try {
                var e = !!a.$goog_Thenable
            } catch (g) {
                e = !1
            }
        else
            e = !1;
        if (e)
            return a.then(b, c, d),
            !0;
        e = typeof a;
        if ("object" == e && null != a || "function" == e)
            try {
                var f = a.then;
                if (t(f))
                    return Ua(a, f, b, c, d),
                    !0
            } catch (g) {
                return c.call(d, g),
                !0
            }
        return !1
    }
    function Ua(a, b, c, d, e) {
        function f(m) {
            l || (l = !0,
            d.call(e, m))
        }
        function g(m) {
            l || (l = !0,
            c.call(e, m))
        }
        var l = !1;
        try {
            b.call(a, g, f)
        } catch (m) {
            f(m)
        }
    }
    function Sa(a) {
        a.u || (a.u = !0,
        J(a.G, a))
    }
    function Pa(a) {
        var b = null;
        a.h && (b = a.h,
        a.h = b.next,
        b.next = null);
        a.h || (a.j = null);
        return b
    }
    M.prototype.G = function() {
        for (var a; a = Pa(this); )
            Qa(this, a, this.f, this.D);
        this.u = !1
    }
    ;
    function Qa(a, b, c, d) {
        if (3 == c && b.b && !b.g)
            for (; a && a.s; a = a.i)
                a.s = !1;
        if (b.a)
            b.a.i = null,
            Va(b, c, d);
        else
            try {
                b.g ? b.c.call(b.context) : Va(b, c, d)
            } catch (e) {
                Wa.call(null, e)
            }
        xa(Ia, b)
    }
    function Va(a, b, c) {
        2 == b ? a.c.call(a.context, c) : a.b && a.b.call(a.context, c)
    }
    function Ta(a, b) {
        a.s = !0;
        J(function() {
            a.s && Wa.call(null, b)
        })
    }
    var Wa = za;
    function O(a) {
        w.call(this, a)
    }
    ka(O, w);
    O.prototype.name = "cancel";
    function Xa(a, b) {
        var c = !1;
        c = void 0 === c ? !1 : c;
        return new M(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                b.document.body.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            }
            ;
            g.onerror = function() {
                f();
                e(7)
            }
            ;
            g.type = "text/javascript";
            wa(g, a);
            c && "complete" !== b.document.readyState ? v(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        }
        )
    }
    function Ya() {
        var a = new B(C,A(new y(z,"https://tpc.googlesyndication.com/sodar/sodar2/209/runner.html")))
          , b = window;
        return new M(function(c) {
            var d = b.document.createElement("iframe");
            d.addEventListener("load", function() {
                c(d)
            });
            va(d, a);
            d.width = "0";
            d.height = "0";
            d.style.display = "none";
            b.document.body.appendChild(d)
        }
        )
    }
    ;function P(a, b) {
        var c = window;
        c = void 0 === c ? window : c;
        this.v = b;
        this.b = c;
        this.c = ra(new y(z,"https://pagead2.googlesyndication.com/bg/%{basename}.js"), {
            basename: encodeURIComponent(a)
        })
    }
    function Za(a) {
        return $a(a).then(function() {
            return ab(a)
        }).then(function() {
            return bb(a)
        })
    }
    function $a(a) {
        var b = document.createElement("iframe");
        b.style.display = "none";
        document.body.appendChild(b);
        if (!b.contentWindow)
            throw 3;
        a.b = b.contentWindow;
        return Xa(a.c, a.b)
    }
    function ab(a) {
        return new M(function(b, c) {
            a.b.botguard && a.b.botguard.bg ? a.a = new a.b.botguard.bg(a.v,b) : c(5)
        }
        )
    }
    P.prototype.snapshotSync = function() {
        var a = void 0;
        if (this.a && this.a.invoke && (this.a.invoke(function(b) {
            a = b
        }, !1),
        a))
            return a;
        throw 6;
    }
    ;
    function bb(a) {
        return new M(function(b, c) {
            a.a && a.a.invoke ? a.a.invoke(function(d) {
                b(d)
            }, !0) : c(6)
        }
        )
    }
    ;function cb() {
        var a = window.GoogleGcLKhOms;
        if (a && 0 < a.length) {
            if (a = a.shift()) {
                a: {
                    var b = a._ctx_;
                    switch (b) {
                    case "pt":
                    case "cr":
                        break a;
                    default:
                        b = ""
                    }
                }
                a: {
                    var c = a._st_;
                    switch (c) {
                    case "env":
                    case "int":
                        break a;
                    default:
                        c = "env"
                    }
                }
                a = {
                    context: b,
                    o: a._bgv_,
                    m: a._bgp_,
                    C: a._li_,
                    B: a._jk_,
                    w: c
                }
            } else
                a = void 0;
            return a
        }
    }
    function db() {
        var a = window;
        if (a.GoogleDX5YKUSk)
            return a.GoogleDX5YKUSk[0];
        var b = new M(function(c) {
            a.GoogleDX5YKUSk = [b, c]
        }
        );
        return b
    }
    function eb() {
        return void 0 === window.GoogleGcLKhOms ? 13 : 1
    }
    function fb(a) {
        return JSON.stringify([a.context, a.o, a.m, a.C, a.B, a.w])
    }
    ;function Q(a) {
        this.a = a
    }
    function gb(a) {
        return window.hasOwnProperty("MessageChannel") ? new hb(a) : new ib(a)
    }
    function hb(a) {
        this.a = a;
        var b = this;
        this.b = !1;
        var c = new MessageChannel;
        this.port = c.port1;
        this.c = new M(function(d) {
            b.port.onmessage = function() {
                d()
            }
            ;
            b.a.postMessage("GoogleBasRYoCJlVEB", "https://tpc.googlesyndication.com", [c.port2])
        }
        )
    }
    n(hb, Q);
    function jb(a, b) {
        return a.c.then(function() {
            return new M(function(c, d) {
                var e = new MessageChannel;
                e.port1.onmessage = function(f) {
                    e.port1.close();
                    Array.isArray(f.data) ? c(f.data) : d(9)
                }
                ;
                a.port.postMessage(b, [e.port2])
            }
            )
        })
    }
    function kb(a, b) {
        return jb(a, [1, b.J, b.v]).then(function(c) {
            return {
                response: c[0],
                error: c[1]
            }
        }, function() {
            return {
                error: 9
            }
        })
    }
    function ib() {
        Q.apply(this, arguments);
        this.b = !0
    }
    n(ib, Q);
    function S(a) {
        this.a = a
    }
    function lb(a) {
        if (T(a))
            throw 7;
        a.b = new P(a.a.o,a.a.m);
        $a(a.b).then(function() {
            a.b && ab(a.b)
        })
    }
    S.prototype.snapshotSync = function() {
        if (this.b)
            return this.b.snapshotSync()
    }
    ;
    function mb(a) {
        if (T(a))
            return nb(a);
        a.b = new P(a.a.o,a.a.m);
        return Za(a.b)
    }
    function T(a) {
        return "tpc.googlesyndication.com" === window.location.host || "int" === a.a.w ? !1 : !0
    }
    function nb(a) {
        return Ya().then(function(b) {
            if (!b.contentWindow)
                throw 3;
            a.c = gb(b.contentWindow);
            if (!a.c.b)
                return kb(a.c, {
                    J: a.a.o,
                    v: a.a.m
                }).then(function(c) {
                    b.parentNode && b.parentNode.removeChild(b);
                    if (c.error)
                        throw c.error;
                    return c.response
                });
            a.c.a.postMessage(fb(a.a), "https://tpc.googlesyndication.com")
        })
    }
    ;function ob(a, b) {
        pb(a, void 0 === b ? null : b)
    }
    function pb(a, b) {
        var c = window;
        c.google_image_requests || (c.google_image_requests = []);
        var d = c.document.createElement("img");
        if (b) {
            var e = function(f) {
                b && b(f);
                d.removeEventListener && d.removeEventListener("load", e, !1);
                d.removeEventListener && d.removeEventListener("error", e, !1)
            };
            v(d, "load", e);
            v(d, "error", e)
        }
        d.src = a;
        c.google_image_requests.push(d)
    }
    ;function qb() {
        this.url = "https://pagead2.googlesyndication.com/pagead/gen_204?id=sodar2&v=209"
    }
    function U(a, b, c) {
        a.url += "&" + b + "=" + encodeURIComponent(c.toString())
    }
    function V(a, b) {
        var c = new qb;
        U(c, "t", a);
        b && (U(c, "li", b.C),
        U(c, "cr" === b.context ? "bgai" : "jk", b.B));
        return c
    }
    function W(a) {
        return new M(function(b) {
            ob(a, function() {
                b()
            })
        }
        )
    }
    function X(a, b) {
        b = V(1, b);
        U(b, "e", a);
        return W(b.url)
    }
    function rb(a, b) {
        var c = V(2, b);
        U(c, "bg", a);
        return 2E3 < c.url.length ? X(4, b) : W(c.url)
    }
    ;function Y() {
        S.apply(this, arguments)
    }
    n(Y, S);
    Y.prototype.g = function() {
        var a = this;
        if ("env" === this.a.w)
            return mb(this).then(function(c) {
                a.l = c;
                a.l && rb(a.l, a.a)
            });
        var b = window;
        b.GoogleA13IjpGc || (lb(this),
        b.GoogleA13IjpGc = this);
        return Ka()
    }
    ;
    function Z() {
        S.apply(this, arguments)
    }
    n(Z, S);
    Z.prototype.g = function() {
        var a = this;
        return mb(this).then(function(b) {
            a.l = b;
            if (a.l)
                return rb(a.l, a.a)
        })
    }
    ;
    function sb(a, b) {
        if ("number" === typeof a)
            b = X(a, b);
        else {
            var c = V(3, b);
            U(c, "c", "init");
            var d = a.toString();
            a.name && -1 == d.indexOf(a.name) && (d += ": " + a.name);
            a.message && -1 == d.indexOf(a.message) && (d += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                try {
                    -1 == a.indexOf(d) && (a = d + "\n" + a);
                    for (var e; a != e; )
                        e = a,
                        a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    d = a.replace(/\n */g, "\n")
                } catch (f) {}
            }
            U(c, "ex", d);
            b = 2E3 < c.url.length ? X(11, b) : W(c.url)
        }
        return b
    }
    function tb(a) {
        switch (a.context) {
        case "pt":
            a = new Z(a);
            break;
        case "cr":
            a = new Y(a);
            break;
        default:
            throw 2;
        }
        if (!window.postMessage && T(a))
            throw 8;
        return a.g()
    }
    ;(function() {
        var a = cb();
        try {
            return a ? tb(a) : La([db(), new M(function(b, c) {
                setTimeout(function() {
                    c(eb())
                }, 5E3)
            }
            )]).then(function() {
                a = cb();
                if (!a)
                    throw eb();
                return tb(a)
            }, function(b) {
                return sb(b, a)
            })
        } catch (b) {
            return sb(b, a)
        }
    }
    )();
}
).call(this);
