/*! For license information please see 469.cae11941.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkshield_sld_project = self.webpackChunkshield_sld_project || []).push([
    [469], {
        61469: (e, t, o) => {
            o.r(t), o.d(t, {
                WcmModal: () => ri,
                WcmQrCode: () => Xr
            });
            var r = o(30168),
                a = o(78058);
            const i = e => t => "function" == typeof t ? ((e, t) => (customElements.define(e, t), t))(e, t) : ((e, t) => {
                    const {
                        kind: o,
                        elements: r
                    } = t;
                    return {
                        kind: o,
                        elements: r,
                        finisher(t) {
                            customElements.define(e, t)
                        }
                    }
                })(e, t),
                l = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? { ...t,
                    finisher(o) {
                        o.createProperty(t.key, e)
                    }
                } : {
                    kind: "field",
                    key: Symbol(),
                    placement: "own",
                    descriptor: {},
                    originalKey: t.key,
                    initializer() {
                        "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
                    },
                    finisher(o) {
                        o.createProperty(t.key, e)
                    }
                },
                n = (e, t, o) => {
                    t.constructor.createProperty(o, e)
                };

            function c(e) {
                return (t, o) => void 0 !== o ? n(e, t, o) : l(e, t)
            }

            function s(e) {
                return c({ ...e,
                    state: !0
                })
            }
            var d;
            null === (d = window.HTMLSlotElement) || void 0 === d || d.prototype.assignedElements;
            var m = o(85323);
            const h = 1;
            class p {
                constructor(e) {}
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AT(e, t, o) {
                    this._$Ct = e, this._$AM = t, this._$Ci = o
                }
                _$AS(e, t) {
                    return this.update(e, t)
                }
                update(e, t) {
                    return this.render(...t)
                }
            }
            const w = (e => function() {
                for (var t = arguments.length, o = new Array(t), r = 0; r < t; r++) o[r] = arguments[r];
                return {
                    _$litDirective$: e,
                    values: o
                }
            })(class extends p {
                constructor(e) {
                    var t;
                    if (super(e), e.type !== h || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
                }
                render(e) {
                    return " " + Object.keys(e).filter((t => e[t])).join(" ") + " "
                }
                update(e, t) {
                    let [o] = t;
                    var r, a;
                    if (void 0 === this.it) {
                        this.it = new Set, void 0 !== e.strings && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((e => "" !== e))));
                        for (const e in o) o[e] && !(null === (r = this.nt) || void 0 === r ? void 0 : r.has(e)) && this.it.add(e);
                        return this.render(o)
                    }
                    const i = e.element.classList;
                    this.it.forEach((e => {
                        e in o || (i.remove(e), this.it.delete(e))
                    }));
                    for (const l in o) {
                        const e = !!o[l];
                        e === this.it.has(l) || (null === (a = this.nt) || void 0 === a ? void 0 : a.has(l)) || (e ? (i.add(l), this.it.add(l)) : (i.remove(l), this.it.delete(l)))
                    }
                    return m.Jb
                }
            });
            var g = o(9386);
            const u = {
                    duration: .3,
                    delay: 0,
                    endDelay: 0,
                    repeat: 0,
                    easing: "ease"
                },
                v = {
                    ms: e => 1e3 * e,
                    s: e => e / 1e3
                },
                f = () => {},
                b = e => e;

            function y(e) {
                let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (e && "finished" !== e.playState) try {
                    e.stop ? e.stop() : (t && e.commitStyles(), e.cancel())
                } catch (o) {}
            }
            const x = e => e(),
                C = function(e, t) {
                    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.duration;
                    return new Proxy({
                        animations: e.map(x).filter(Boolean),
                        duration: o,
                        options: t
                    }, k)
                },
                k = {
                    get: (e, t) => {
                        const o = e.animations[0];
                        switch (t) {
                            case "duration":
                                return e.duration;
                            case "currentTime":
                                return v.s((null === o || void 0 === o ? void 0 : o[t]) || 0);
                            case "playbackRate":
                            case "playState":
                                return null === o || void 0 === o ? void 0 : o[t];
                            case "finished":
                                return e.finished || (e.finished = Promise.all(e.animations.map(O)).catch(f)), e.finished;
                            case "stop":
                                return () => {
                                    e.animations.forEach((e => y(e)))
                                };
                            case "forEachNative":
                                return t => {
                                    e.animations.forEach((o => t(o, e)))
                                };
                            default:
                                return "undefined" === typeof(null === o || void 0 === o ? void 0 : o[t]) ? void 0 : () => e.animations.forEach((e => e[t]()))
                        }
                    },
                    set: (e, t, o) => {
                        switch (t) {
                            case "currentTime":
                                o = v.ms(o);
                            case "currentTime":
                            case "playbackRate":
                                for (let r = 0; r < e.animations.length; r++) e.animations[r][t] = o;
                                return !0
                        }
                        return !1
                    }
                },
                O = e => e.finished,
                Z = e => "object" === typeof e && Boolean(e.createAnimation),
                E = e => "number" === typeof e,
                I = e => Array.isArray(e) && !E(e[0]),
                A = (e, t, o) => -o * e + o * t + e,
                P = (e, t, o) => t - e === 0 ? 1 : (o - e) / (t - e);

            function T(e, t) {
                const o = e[e.length - 1];
                for (let r = 1; r <= t; r++) {
                    const a = P(0, t, r);
                    e.push(A(o, 1, a))
                }
            }
            const M = (e, t, o) => {
                const r = t - e;
                return ((o - e) % r + r) % r + e
            };
            const W = (e, t, o) => Math.min(Math.max(o, e), t);

            function R(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                        const t = [0];
                        return T(t, e - 1), t
                    }(e.length),
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
                const r = e.length,
                    a = r - t.length;
                return a > 0 && T(t, a), a => {
                    let i = 0;
                    for (; i < r - 2 && !(a < t[i + 1]); i++);
                    let l = W(0, 1, P(t[i], t[i + 1], a));
                    const n = function(e, t) {
                        return I(e) ? e[M(0, e.length, t)] : e
                    }(o, i);
                    return l = n(l), A(e[i], e[i + 1], l)
                }
            }
            const L = (e, t, o) => (((1 - 3 * o + 3 * t) * e + (3 * o - 6 * t)) * e + 3 * t) * e,
                j = 1e-7,
                _ = 12;

            function D(e, t, o, r) {
                if (e === t && o === r) return b;
                const a = t => function(e, t, o, r, a) {
                    let i, l, n = 0;
                    do {
                        l = t + (o - t) / 2, i = L(l, r, a) - e, i > 0 ? o = l : t = l
                    } while (Math.abs(i) > j && ++n < _);
                    return l
                }(t, 0, 1, e, o);
                return e => 0 === e || 1 === e ? e : L(a(e), t, r)
            }
            const z = e => "function" === typeof e,
                S = e => Array.isArray(e) && E(e[0]),
                N = {
                    ease: D(.25, .1, .25, 1),
                    "ease-in": D(.42, 0, 1, 1),
                    "ease-in-out": D(.42, 0, .58, 1),
                    "ease-out": D(0, 0, .58, 1)
                },
                B = /\((.*?)\)/;

            function U(e) {
                if (z(e)) return e;
                if (S(e)) return D(...e);
                if (N[e]) return N[e];
                if (e.startsWith("steps")) {
                    const t = B.exec(e);
                    if (t) {
                        const e = t[1].split(",");
                        return function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "end";
                            return o => {
                                const r = (o = "end" === t ? Math.min(o, .999) : Math.max(o, .001)) * e,
                                    a = "end" === t ? Math.floor(r) : Math.ceil(r);
                                return W(0, 1, a / e)
                            }
                        }(parseFloat(e[0]), e[1].trim())
                    }
                }
                return b
            }
            class H {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 1],
                        {
                            easing: o,
                            duration: r = u.duration,
                            delay: a = u.delay,
                            endDelay: i = u.endDelay,
                            repeat: l = u.repeat,
                            offset: n,
                            direction: c = "normal"
                        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = b, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise(((e, t) => {
                            this.resolve = e, this.reject = t
                        })), o = o || u.easing, Z(o)) {
                        const e = o.createAnimation(t);
                        o = e.easing, t = e.keyframes || t, r = e.duration || r
                    }
                    this.repeat = l, this.easing = I(o) ? b : U(o), this.updateDuration(r);
                    const s = R(t, n, I(o) ? o.map(U) : b);
                    this.tick = t => {
                        var o;
                        let r = 0;
                        r = void 0 !== this.pauseTime ? this.pauseTime : (t - this.startTime) * this.rate, this.t = r, r /= 1e3, r = Math.max(r - a, 0), "finished" === this.playState && void 0 === this.pauseTime && (r = this.totalDuration);
                        const l = r / this.duration;
                        let n = Math.floor(l),
                            d = l % 1;
                        !d && l >= 1 && (d = 1), 1 === d && n--;
                        const m = n % 2;
                        ("reverse" === c || "alternate" === c && m || "alternate-reverse" === c && !m) && (d = 1 - d);
                        const h = r >= this.totalDuration ? 1 : Math.min(d, 1),
                            p = s(this.easing(h));
                        e(p);
                        void 0 === this.pauseTime && ("finished" === this.playState || r >= this.totalDuration + i) ? (this.playState = "finished", null === (o = this.resolve) || void 0 === o || o.call(this, p)) : "idle" !== this.playState && (this.frameRequestId = requestAnimationFrame(this.tick))
                    }, this.play()
                }
                play() {
                    const e = performance.now();
                    this.playState = "running", void 0 !== this.pauseTime ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
                }
                pause() {
                    this.playState = "paused", this.pauseTime = this.t
                }
                finish() {
                    this.playState = "finished", this.tick(0)
                }
                stop() {
                    var e;
                    this.playState = "idle", void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId), null === (e = this.reject) || void 0 === e || e.call(this, !1)
                }
                cancel() {
                    this.stop(), this.tick(this.cancelTimestamp)
                }
                reverse() {
                    this.rate *= -1
                }
                commitStyles() {}
                updateDuration(e) {
                    this.duration = e, this.totalDuration = e * (this.repeat + 1)
                }
                get currentTime() {
                    return this.t
                }
                set currentTime(e) {
                    void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate
                }
                get playbackRate() {
                    return this.rate
                }
                set playbackRate(e) {
                    this.rate = e
                }
            }
            class V {
                setAnimation(e) {
                    this.animation = e, null === e || void 0 === e || e.finished.then((() => this.clearAnimation())).catch((() => {}))
                }
                clearAnimation() {
                    this.animation = this.generator = void 0
                }
            }
            const F = new WeakMap;

            function Y(e) {
                return F.has(e) || F.set(e, {
                    transforms: [],
                    values: new Map
                }), F.get(e)
            }
            const q = ["", "X", "Y", "Z"],
                K = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ"
                },
                Q = {
                    syntax: "<angle>",
                    initialValue: "0deg",
                    toDefaultUnit: e => e + "deg"
                },
                G = {
                    translate: {
                        syntax: "<length-percentage>",
                        initialValue: "0px",
                        toDefaultUnit: e => e + "px"
                    },
                    rotate: Q,
                    scale: {
                        syntax: "<number>",
                        initialValue: 1,
                        toDefaultUnit: b
                    },
                    skew: Q
                },
                $ = new Map,
                X = e => "--motion-".concat(e),
                J = ["x", "y", "z"];
            ["translate", "scale", "rotate", "skew"].forEach((e => {
                q.forEach((t => {
                    J.push(e + t), $.set(X(e + t), G[e])
                }))
            }));
            const ee = (e, t) => J.indexOf(e) - J.indexOf(t),
                te = new Set(J),
                oe = e => te.has(e),
                re = (e, t) => {
                    K[t] && (t = K[t]);
                    const {
                        transforms: o
                    } = Y(e);
                    var r, a;
                    a = t, -1 === (r = o).indexOf(a) && r.push(a), e.style.transform = ae(o)
                },
                ae = e => e.sort(ee).reduce(ie, "").trim(),
                ie = (e, t) => "".concat(e, " ").concat(t, "(var(").concat(X(t), "))"),
                le = e => e.startsWith("--"),
                ne = new Set;
            const ce = (e, t) => document.createElement("div").animate(e, t),
                se = {
                    cssRegisterProperty: () => "undefined" !== typeof CSS && Object.hasOwnProperty.call(CSS, "registerProperty"),
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
                    partialKeyframes: () => {
                        try {
                            ce({
                                opacity: [1]
                            })
                        } catch (e) {
                            return !1
                        }
                        return !0
                    },
                    finished: () => Boolean(ce({
                        opacity: [0, 1]
                    }, {
                        duration: .001
                    }).finished),
                    linearEasing: () => {
                        try {
                            ce({
                                opacity: 0
                            }, {
                                easing: "linear(0, 1)"
                            })
                        } catch (e) {
                            return !1
                        }
                        return !0
                    }
                },
                de = {},
                me = {};
            for (const Xi in se) me[Xi] = () => (void 0 === de[Xi] && (de[Xi] = se[Xi]()), de[Xi]);
            const he = (e, t) => z(e) ? me.linearEasing() ? "linear(".concat(((e, t) => {
                    let o = "";
                    const r = Math.round(t / .015);
                    for (let a = 0; a < r; a++) o += e(P(0, r - 1, a)) + ", ";
                    return o.substring(0, o.length - 2)
                })(e, t), ")") : u.easing : S(e) ? pe(e) : e,
                pe = e => {
                    let [t, o, r, a] = e;
                    return "cubic-bezier(".concat(t, ", ").concat(o, ", ").concat(r, ", ").concat(a, ")")
                };
            const we = e => Array.isArray(e) ? e : [e];

            function ge(e) {
                return K[e] && (e = K[e]), oe(e) ? X(e) : e
            }
            const ue = {
                    get: (e, t) => {
                        t = ge(t);
                        let o = le(t) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
                        if (!o && 0 !== o) {
                            const e = $.get(t);
                            e && (o = e.initialValue)
                        }
                        return o
                    },
                    set: (e, t, o) => {
                        t = ge(t), le(t) ? e.style.setProperty(t, o) : e.style[t] = o
                    }
                },
                ve = e => "string" === typeof e;

            function fe(e, t, o) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = arguments.length > 4 ? arguments[4] : void 0;
                const i = window.__MOTION_DEV_TOOLS_RECORD,
                    l = !1 !== r.record && i;
                let n, {
                    duration: c = u.duration,
                    delay: s = u.delay,
                    endDelay: d = u.endDelay,
                    repeat: m = u.repeat,
                    easing: h = u.easing,
                    persist: p = !1,
                    direction: w,
                    offset: g,
                    allowWebkitAcceleration: x = !1
                } = r;
                const C = Y(e),
                    k = oe(t);
                let O = me.waapi();
                k && re(e, t);
                const A = ge(t),
                    P = function(e, t) {
                        return e.has(t) || e.set(t, new V), e.get(t)
                    }(C.values, A),
                    T = $.get(A);
                return y(P.animation, !(Z(h) && P.generator) && !1 !== r.record), () => {
                    const u = () => {
                        var t, o;
                        return null !== (o = null !== (t = ue.get(e, A)) && void 0 !== t ? t : null === T || void 0 === T ? void 0 : T.initialValue) && void 0 !== o ? o : 0
                    };
                    let y = function(e, t) {
                        for (let o = 0; o < e.length; o++) null === e[o] && (e[o] = o ? e[o - 1] : t());
                        return e
                    }(we(o), u);
                    const C = function(e, t) {
                        var o;
                        let r = (null === t || void 0 === t ? void 0 : t.toDefaultUnit) || b;
                        const a = e[e.length - 1];
                        if (ve(a)) {
                            const e = (null === (o = a.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === o ? void 0 : o[2]) || "";
                            e && (r = t => t + e)
                        }
                        return r
                    }(y, T);
                    if (Z(h)) {
                        const e = h.createAnimation(y, "opacity" !== t, u, A, P);
                        h = e.easing, y = e.keyframes || y, c = e.duration || c
                    }
                    if (le(A) && (me.cssRegisterProperty() ? function(e) {
                            if (!ne.has(e)) {
                                ne.add(e);
                                try {
                                    const {
                                        syntax: t,
                                        initialValue: o
                                    } = $.has(e) ? $.get(e) : {};
                                    CSS.registerProperty({
                                        name: e,
                                        inherits: !1,
                                        syntax: t,
                                        initialValue: o
                                    })
                                } catch (t) {}
                            }
                        }(A) : O = !1), k && !me.linearEasing() && (z(h) || I(h) && h.some(z)) && (O = !1), O) {
                        T && (y = y.map((e => E(e) ? T.toDefaultUnit(e) : e))), 1 !== y.length || me.partialKeyframes() && !l || y.unshift(u());
                        const t = {
                            delay: v.ms(s),
                            duration: v.ms(c),
                            endDelay: v.ms(d),
                            easing: I(h) ? void 0 : he(h, c),
                            direction: w,
                            iterations: m + 1,
                            fill: "both"
                        };
                        n = e.animate({
                            [A]: y,
                            offset: g,
                            easing: I(h) ? h.map((e => he(e, c))) : void 0
                        }, t), n.finished || (n.finished = new Promise(((e, t) => {
                            n.onfinish = e, n.oncancel = t
                        })));
                        const o = y[y.length - 1];
                        n.finished.then((() => {
                            p || (ue.set(e, A, o), n.cancel())
                        })).catch(f), x || (n.playbackRate = 1.000001)
                    } else if (a && k) y = y.map((e => "string" === typeof e ? parseFloat(e) : e)), 1 === y.length && y.unshift(parseFloat(u())), n = new a((t => {
                        ue.set(e, A, C ? C(t) : t)
                    }), y, Object.assign(Object.assign({}, r), {
                        duration: c,
                        easing: h
                    }));
                    else {
                        const t = y[y.length - 1];
                        ue.set(e, A, T && E(t) ? T.toDefaultUnit(t) : t)
                    }
                    return l && i(e, t, y, {
                        duration: c,
                        delay: s,
                        easing: h,
                        repeat: m,
                        offset: g
                    }, "motion-one"), P.setAnimation(n), n
                }
            }
            const be = (e, t) => e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e);

            function ye(e, t, o) {
                return z(e) ? e(t, o) : e
            }
            const xe = (Ce = H, function(e, t) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const r = (e = function(e, t) {
                    var o;
                    return "string" === typeof e ? t ? (null !== (o = t[e]) && void 0 !== o || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || [])
                }(e)).length;
                Boolean(r), Boolean(t);
                const a = [];
                for (let i = 0; i < r; i++) {
                    const l = e[i];
                    for (const e in t) {
                        const n = be(o, e);
                        n.delay = ye(n.delay, i, r);
                        const c = fe(l, e, t[e], n, Ce);
                        a.push(c)
                    }
                }
                return C(a, o, o.duration)
            });
            var Ce;

            function ke(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return C([() => {
                    const o = new H(e, [0, 1], t);
                    return o.finished.catch((() => {})), o
                }], t, t.duration)
            }

            function Oe(e, t, o) {
                return (z(e) ? ke : xe)(e, t, o)
            }
            const Ze = e => null != e ? e : m.Ld;
            var Ee, Ie, Ae, Pe, Te, Me, We, Re, Le, je, _e, De, ze, Se, Ne, Be, Ue, He, Ve, Fe, Ye, qe, Ke, Qe, Ge, $e, Xe, Je, et, tt, ot, rt, at, it, lt, nt, ct, st, dt, mt, ht, pt, wt, gt, ut, vt, ft, bt, yt, xt, Ct, kt, Ot, Zt, Et, It, At, Pt, Tt, Mt, Wt, Rt, Lt, jt, _t, Dt, zt, St, Nt, Bt, Ut, Ht, Vt, Ft, Yt, qt, Kt, Qt, Gt, $t, Xt, Jt, eo, to, oo, ro, ao, io, lo, no, co, so, mo, ho, po, wo, go, uo, vo, fo, bo, yo, xo, Co, ko, Oo, Zo, Eo, Io, Ao, Po, To, Mo, Wo, Ro, Lo, jo, _o, Do, zo, So, No, Bo, Uo, Ho, Vo, Fo, Yo, qo, Ko, Qo = o(46316),
                Go = Object.defineProperty,
                $o = Object.getOwnPropertySymbols,
                Xo = Object.prototype.hasOwnProperty,
                Jo = Object.prototype.propertyIsEnumerable,
                er = (e, t, o) => t in e ? Go(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : e[t] = o,
                tr = (e, t) => {
                    for (var o in t || (t = {})) Xo.call(t, o) && er(e, o, t[o]);
                    if ($o)
                        for (var o of $o(t)) Jo.call(t, o) && er(e, o, t[o]);
                    return e
                };
            const or = {
                    getPreset: e => ({
                        "--wcm-accent-color": "#3396FF",
                        "--wcm-accent-fill-color": "#FFFFFF",
                        "--wcm-z-index": "89",
                        "--wcm-background-color": "#3396FF",
                        "--wcm-background-border-radius": "8px",
                        "--wcm-container-border-radius": "30px",
                        "--wcm-wallet-icon-border-radius": "15px",
                        "--wcm-wallet-icon-large-border-radius": "30px",
                        "--wcm-wallet-icon-small-border-radius": "7px",
                        "--wcm-input-border-radius": "28px",
                        "--wcm-button-border-radius": "10px",
                        "--wcm-notification-border-radius": "36px",
                        "--wcm-secondary-button-border-radius": "28px",
                        "--wcm-icon-button-border-radius": "50%",
                        "--wcm-button-hover-highlight-border-radius": "10px",
                        "--wcm-text-big-bold-size": "20px",
                        "--wcm-text-big-bold-weight": "600",
                        "--wcm-text-big-bold-line-height": "24px",
                        "--wcm-text-big-bold-letter-spacing": "-0.03em",
                        "--wcm-text-big-bold-text-transform": "none",
                        "--wcm-text-xsmall-bold-size": "10px",
                        "--wcm-text-xsmall-bold-weight": "700",
                        "--wcm-text-xsmall-bold-line-height": "12px",
                        "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                        "--wcm-text-xsmall-bold-text-transform": "uppercase",
                        "--wcm-text-xsmall-regular-size": "12px",
                        "--wcm-text-xsmall-regular-weight": "600",
                        "--wcm-text-xsmall-regular-line-height": "14px",
                        "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                        "--wcm-text-xsmall-regular-text-transform": "none",
                        "--wcm-text-small-thin-size": "14px",
                        "--wcm-text-small-thin-weight": "500",
                        "--wcm-text-small-thin-line-height": "16px",
                        "--wcm-text-small-thin-letter-spacing": "-0.03em",
                        "--wcm-text-small-thin-text-transform": "none",
                        "--wcm-text-small-regular-size": "14px",
                        "--wcm-text-small-regular-weight": "600",
                        "--wcm-text-small-regular-line-height": "16px",
                        "--wcm-text-small-regular-letter-spacing": "-0.03em",
                        "--wcm-text-small-regular-text-transform": "none",
                        "--wcm-text-medium-regular-size": "16px",
                        "--wcm-text-medium-regular-weight": "600",
                        "--wcm-text-medium-regular-line-height": "20px",
                        "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                        "--wcm-text-medium-regular-text-transform": "none",
                        "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                        "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
                        "--wcm-success-color": "rgb(38,181,98)",
                        "--wcm-error-color": "rgb(242, 90, 103)",
                        "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                        "--wcm-overlay-backdrop-filter": "none"
                    }[e]),
                    setTheme() {
                        const e = document.querySelector(":root"),
                            {
                                themeVariables: t
                            } = g.ThemeCtrl.state;
                        if (e) {
                            const o = tr(tr(tr({}, function() {
                                var e;
                                const t = {
                                    light: {
                                        foreground: {
                                            1: "rgb(20,20,20)",
                                            2: "rgb(121,134,134)",
                                            3: "rgb(158,169,169)"
                                        },
                                        background: {
                                            1: "rgb(255,255,255)",
                                            2: "rgb(241,243,243)",
                                            3: "rgb(228,231,231)"
                                        },
                                        overlay: "rgba(0,0,0,0.1)"
                                    },
                                    dark: {
                                        foreground: {
                                            1: "rgb(228,231,231)",
                                            2: "rgb(148,158,158)",
                                            3: "rgb(110,119,119)"
                                        },
                                        background: {
                                            1: "rgb(20,20,20)",
                                            2: "rgb(39,42,42)",
                                            3: "rgb(59,64,64)"
                                        },
                                        overlay: "rgba(255,255,255,0.1)"
                                    }
                                }[null != (e = g.ThemeCtrl.state.themeMode) ? e : "dark"];
                                return {
                                    "--wcm-color-fg-1": t.foreground[1],
                                    "--wcm-color-fg-2": t.foreground[2],
                                    "--wcm-color-fg-3": t.foreground[3],
                                    "--wcm-color-bg-1": t.background[1],
                                    "--wcm-color-bg-2": t.background[2],
                                    "--wcm-color-bg-3": t.background[3],
                                    "--wcm-color-overlay": t.overlay
                                }
                            }()), {
                                "--wcm-accent-color": "#3396FF",
                                "--wcm-accent-fill-color": "#FFFFFF",
                                "--wcm-z-index": "89",
                                "--wcm-background-color": "#3396FF",
                                "--wcm-background-border-radius": "8px",
                                "--wcm-container-border-radius": "30px",
                                "--wcm-wallet-icon-border-radius": "15px",
                                "--wcm-wallet-icon-large-border-radius": "30px",
                                "--wcm-wallet-icon-small-border-radius": "7px",
                                "--wcm-input-border-radius": "28px",
                                "--wcm-button-border-radius": "10px",
                                "--wcm-notification-border-radius": "36px",
                                "--wcm-secondary-button-border-radius": "28px",
                                "--wcm-icon-button-border-radius": "50%",
                                "--wcm-button-hover-highlight-border-radius": "10px",
                                "--wcm-text-big-bold-size": "20px",
                                "--wcm-text-big-bold-weight": "600",
                                "--wcm-text-big-bold-line-height": "24px",
                                "--wcm-text-big-bold-letter-spacing": "-0.03em",
                                "--wcm-text-big-bold-text-transform": "none",
                                "--wcm-text-xsmall-bold-size": "10px",
                                "--wcm-text-xsmall-bold-weight": "700",
                                "--wcm-text-xsmall-bold-line-height": "12px",
                                "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                                "--wcm-text-xsmall-bold-text-transform": "uppercase",
                                "--wcm-text-xsmall-regular-size": "12px",
                                "--wcm-text-xsmall-regular-weight": "600",
                                "--wcm-text-xsmall-regular-line-height": "14px",
                                "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                                "--wcm-text-xsmall-regular-text-transform": "none",
                                "--wcm-text-small-thin-size": "14px",
                                "--wcm-text-small-thin-weight": "500",
                                "--wcm-text-small-thin-line-height": "16px",
                                "--wcm-text-small-thin-letter-spacing": "-0.03em",
                                "--wcm-text-small-thin-text-transform": "none",
                                "--wcm-text-small-regular-size": "14px",
                                "--wcm-text-small-regular-weight": "600",
                                "--wcm-text-small-regular-line-height": "16px",
                                "--wcm-text-small-regular-letter-spacing": "-0.03em",
                                "--wcm-text-small-regular-text-transform": "none",
                                "--wcm-text-medium-regular-size": "16px",
                                "--wcm-text-medium-regular-weight": "600",
                                "--wcm-text-medium-regular-line-height": "20px",
                                "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                                "--wcm-text-medium-regular-text-transform": "none",
                                "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                                "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
                                "--wcm-success-color": "rgb(38,181,98)",
                                "--wcm-error-color": "rgb(242, 90, 103)",
                                "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                                "--wcm-overlay-backdrop-filter": "none"
                            }), t);
                            Object.entries(o).forEach((t => {
                                let [o, r] = t;
                                return e.style.setProperty(o, r)
                            }))
                        }
                    },
                    globalCss: (0, a.iv)(Ee || (Ee = (0, r.Z)(["*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}"])))
                },
                rr = (0, a.iv)(Ie || (Ie = (0, r.Z)(["button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}"])));
            var ar = Object.defineProperty,
                ir = Object.getOwnPropertyDescriptor,
                lr = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? ir(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && ar(t, o, i), i
                };
            let nr = class extends a.oi {
                constructor() {
                    super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default"
                }
                render() {
                    const e = {
                        "wcm-icon-left": void 0 !== this.iconLeft,
                        "wcm-icon-right": void 0 !== this.iconRight,
                        "wcm-ghost": "ghost" === this.variant,
                        "wcm-outline": "outline" === this.variant
                    };
                    let t = "inverse";
                    return "ghost" === this.variant && (t = "secondary"), "outline" === this.variant && (t = "accent"), (0, a.dy)(Ae || (Ae = (0, r.Z)(['<button class="', '" ?disabled="', '" @click="', '">', '<wcm-text variant="small-regular" color="', '"><slot></slot></wcm-text>', "</button>"])), w(e), this.disabled, this.onClick, this.iconLeft, t, this.iconRight)
                }
            };
            nr.styles = [or.globalCss, rr], lr([c({
                type: Boolean
            })], nr.prototype, "disabled", 2), lr([c()], nr.prototype, "iconLeft", 2), lr([c()], nr.prototype, "iconRight", 2), lr([c()], nr.prototype, "onClick", 2), lr([c()], nr.prototype, "variant", 2), nr = lr([i("wcm-button")], nr);
            const cr = (0, a.iv)(Pe || (Pe = (0, r.Z)([":host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}"])));
            var sr = Object.defineProperty,
                dr = Object.getOwnPropertyDescriptor,
                mr = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? dr(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && sr(t, o, i), i
                };
            let hr = class extends a.oi {
                constructor() {
                    super(...arguments), this.disabled = !1, this.variant = "primary"
                }
                render() {
                    const e = {
                        "wcm-secondary": "secondary" === this.variant
                    };
                    return (0, a.dy)(Te || (Te = (0, r.Z)(['<button ?disabled="', '" class="', '"><slot></slot></button>'])), this.disabled, w(e))
                }
            };
            hr.styles = [or.globalCss, cr], mr([c({
                type: Boolean
            })], hr.prototype, "disabled", 2), mr([c()], hr.prototype, "variant", 2), hr = mr([i("wcm-button-big")], hr);
            const pr = (0, a.iv)(Me || (Me = (0, r.Z)([":host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}"])));
            var wr = Object.defineProperty,
                gr = Object.getOwnPropertyDescriptor;
            let ur = class extends a.oi {
                render() {
                    return (0, a.dy)(We || (We = (0, r.Z)(["<div><slot></slot></div>"])))
                }
            };
            ur.styles = [or.globalCss, pr], ur = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? gr(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && wr(t, o, i), i
            })([i("wcm-info-footer")], ur);
            const vr = {
                    CROSS_ICON: (0, m.YP)(Re || (Re = (0, r.Z)(['<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>']))),
                    WALLET_CONNECT_LOGO: (0, m.YP)(Le || (Le = (0, r.Z)(['<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>']))),
                    WALLET_CONNECT_ICON: (0, m.YP)(je || (je = (0, r.Z)(['<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>']))),
                    WALLET_CONNECT_ICON_COLORED: (0, m.YP)(_e || (_e = (0, r.Z)(['<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>']))),
                    BACK_ICON: (0, m.YP)(De || (De = (0, r.Z)(['<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>']))),
                    COPY_ICON: (0, m.YP)(ze || (ze = (0, r.Z)(['<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>']))),
                    RETRY_ICON: (0, m.YP)(Se || (Se = (0, r.Z)(['<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>']))),
                    DESKTOP_ICON: (0, m.YP)(Ne || (Ne = (0, r.Z)(['<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>']))),
                    MOBILE_ICON: (0, m.YP)(Be || (Be = (0, r.Z)(['<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>']))),
                    ARROW_DOWN_ICON: (0, m.YP)(Ue || (Ue = (0, r.Z)(['<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>']))),
                    ARROW_UP_RIGHT_ICON: (0, m.YP)(He || (He = (0, r.Z)(['<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>']))),
                    ARROW_RIGHT_ICON: (0, m.YP)(Ve || (Ve = (0, r.Z)(['<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>']))),
                    QRCODE_ICON: (0, m.YP)(Fe || (Fe = (0, r.Z)(['<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>']))),
                    SCAN_ICON: (0, m.YP)(Ye || (Ye = (0, r.Z)(['<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>']))),
                    CHECKMARK_ICON: (0, m.YP)(qe || (qe = (0, r.Z)(['<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>']))),
                    SEARCH_ICON: (0, m.YP)(Ke || (Ke = (0, r.Z)(['<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>']))),
                    WALLET_PLACEHOLDER: (0, m.YP)(Qe || (Qe = (0, r.Z)(['<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>']))),
                    GLOBE_ICON: (0, m.YP)(Ge || (Ge = (0, r.Z)(['<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>'])))
                },
                fr = (0, a.iv)($e || ($e = (0, r.Z)([".wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}"])));
            var br = Object.defineProperty,
                yr = Object.getOwnPropertyDescriptor;
            let xr = class extends a.oi {
                render() {
                    return (0, a.dy)(Xe || (Xe = (0, r.Z)(['<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">', ' <button @click="', '">', "</button></div>"])), vr.WALLET_CONNECT_LOGO, g.jb.close, vr.CROSS_ICON)
                }
            };
            xr.styles = [or.globalCss, fr], xr = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? yr(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && br(t, o, i), i
            })([i("wcm-modal-backcard")], xr);
            const Cr = (0, a.iv)(Je || (Je = (0, r.Z)(["main{padding:20px;padding-top:0;width:100%}"])));
            var kr = Object.defineProperty,
                Or = Object.getOwnPropertyDescriptor;
            let Zr = class extends a.oi {
                render() {
                    return (0, a.dy)(et || (et = (0, r.Z)(["<main><slot></slot></main>"])))
                }
            };
            Zr.styles = [or.globalCss, Cr], Zr = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? Or(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && kr(t, o, i), i
            })([i("wcm-modal-content")], Zr);
            const Er = (0, a.iv)(tt || (tt = (0, r.Z)(["footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}"])));
            var Ir = Object.defineProperty,
                Ar = Object.getOwnPropertyDescriptor;
            let Pr = class extends a.oi {
                render() {
                    return (0, a.dy)(ot || (ot = (0, r.Z)(["<footer><slot></slot></footer>"])))
                }
            };
            Pr.styles = [or.globalCss, Er], Pr = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? Ar(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && Ir(t, o, i), i
            })([i("wcm-modal-footer")], Pr);
            const Tr = (0, a.iv)(rt || (rt = (0, r.Z)(["header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}"])));
            var Mr = Object.defineProperty,
                Wr = Object.getOwnPropertyDescriptor,
                Rr = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? Wr(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && Mr(t, o, i), i
                };
            let Lr = class extends a.oi {
                constructor() {
                    super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1
                }
                backBtnTemplate() {
                    return (0, a.dy)(at || (at = (0, r.Z)(['<button class="wcm-back-btn" @click="', '">', "</button>"])), g.AV.goBack, vr.BACK_ICON)
                }
                actionBtnTemplate() {
                    return (0, a.dy)(it || (it = (0, r.Z)(['<button class="wcm-action-btn" @click="', '">', "</button>"])), this.onAction, this.actionIcon)
                }
                render() {
                    const e = {
                            "wcm-border": this.border
                        },
                        t = g.AV.state.history.length > 1,
                        o = this.title ? (0, a.dy)(lt || (lt = (0, r.Z)(['<wcm-text variant="big-bold">', "</wcm-text>"])), this.title) : (0, a.dy)(nt || (nt = (0, r.Z)(["<slot></slot>"])));
                    return (0, a.dy)(ct || (ct = (0, r.Z)(['<header class="', '">', " ", " ", "</header>"])), w(e), t ? this.backBtnTemplate() : null, o, this.onAction ? this.actionBtnTemplate() : null)
                }
            };
            Lr.styles = [or.globalCss, Tr], Rr([c()], Lr.prototype, "title", 2), Rr([c()], Lr.prototype, "onAction", 2), Rr([c()], Lr.prototype, "actionIcon", 2), Rr([c({
                type: Boolean
            })], Lr.prototype, "border", 2), Lr = Rr([i("wcm-modal-header")], Lr);
            const jr = {
                    MOBILE_BREAKPOINT: 600,
                    WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
                    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
                    getShadowRootElement(e, t) {
                        const o = e.renderRoot.querySelector(t);
                        if (!o) throw new Error("".concat(t, " not found"));
                        return o
                    },
                    getWalletIcon(e) {
                        let {
                            id: t,
                            image_id: o
                        } = e;
                        const {
                            walletImages: r
                        } = g.ConfigCtrl.state;
                        return null != r && r[t] ? r[t] : o ? g.ExplorerCtrl.getWalletImageUrl(o) : ""
                    },
                    getWalletName(e) {
                        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && e.length > 8 ? "".concat(e.substring(0, 8), "..") : e
                    },
                    isMobileAnimation: () => window.innerWidth <= jr.MOBILE_BREAKPOINT,
                    async preloadImage(e) {
                        const t = new Promise(((t, o) => {
                            const r = new Image;
                            r.onload = t, r.onerror = o, r.src = e
                        }));
                        return Promise.race([t, g.zv.wait(3e3)])
                    },
                    getErrorMessage: e => e instanceof Error ? e.message : "Unknown Error",
                    debounce(e) {
                        let t, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
                        return function() {
                            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                            t && clearTimeout(t), t = setTimeout((function() {
                                e(...a)
                            }), o)
                        }
                    },
                    handleMobileLinking(e) {
                        const {
                            walletConnectUri: t
                        } = g.OptionsCtrl.state, {
                            mobile: o,
                            name: r
                        } = e, a = null === o || void 0 === o ? void 0 : o.native, i = null === o || void 0 === o ? void 0 : o.universal;
                        jr.setRecentWallet(e), t && function(e) {
                            let t = "";
                            a ? t = g.zv.formatUniversalUrl(a, e, r) : i && (t = g.zv.formatNativeUrl(i, e, r)), g.zv.openHref(t, "_self")
                        }(t)
                    },
                    handleAndroidLinking() {
                        const {
                            walletConnectUri: e
                        } = g.OptionsCtrl.state;
                        e && (g.zv.setWalletConnectAndroidDeepLink(e), g.zv.openHref(e, "_self"))
                    },
                    async handleUriCopy() {
                        const {
                            walletConnectUri: e
                        } = g.OptionsCtrl.state;
                        if (e) try {
                            await navigator.clipboard.writeText(e), g.ToastCtrl.openToast("Link copied", "success")
                        } catch {
                            g.ToastCtrl.openToast("Failed to copy", "error")
                        }
                    },
                    getCustomImageUrls() {
                        const {
                            walletImages: e
                        } = g.ConfigCtrl.state, t = Object.values(null !== e && void 0 !== e ? e : {});
                        return Object.values(t)
                    },
                    truncate(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
                        return e.length <= t ? e : "".concat(e.substring(0, 4), "...").concat(e.substring(e.length - 4))
                    },
                    setRecentWallet(e) {
                        try {
                            localStorage.setItem(jr.WCM_RECENT_WALLET_DATA, JSON.stringify(e))
                        } catch {
                            console.info("Unable to set recent wallet")
                        }
                    },
                    getRecentWallet() {
                        try {
                            const e = localStorage.getItem(jr.WCM_RECENT_WALLET_DATA);
                            return e ? JSON.parse(e) : void 0
                        } catch {
                            console.info("Unable to get recent wallet")
                        }
                    },
                    caseSafeIncludes: (e, t) => e.toUpperCase().includes(t.toUpperCase()),
                    openWalletExplorerUrl() {
                        g.zv.openHref(jr.EXPLORER_WALLET_URL, "_blank")
                    },
                    getCachedRouterWalletPlatforms() {
                        const {
                            desktop: e,
                            mobile: t
                        } = g.zv.getWalletRouterData(), o = Boolean(null === e || void 0 === e ? void 0 : e.native), r = Boolean(null === e || void 0 === e ? void 0 : e.universal);
                        return {
                            isDesktop: o,
                            isMobile: Boolean(null === t || void 0 === t ? void 0 : t.native) || Boolean(null === t || void 0 === t ? void 0 : t.universal),
                            isWeb: r
                        }
                    },
                    goToConnectingView(e) {
                        g.AV.setData({
                            Wallet: e
                        });
                        const t = g.zv.isMobile(),
                            {
                                isDesktop: o,
                                isWeb: r,
                                isMobile: a
                            } = jr.getCachedRouterWalletPlatforms();
                        t ? a ? g.AV.push("MobileConnecting") : r ? g.AV.push("WebConnecting") : g.AV.push("InstallWallet") : o ? g.AV.push("DesktopConnecting") : r ? g.AV.push("WebConnecting") : a ? g.AV.push("MobileQrcodeConnecting") : g.AV.push("InstallWallet")
                    }
                },
                _r = (0, a.iv)(st || (st = (0, r.Z)([".wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}"])));
            var Dr = Object.defineProperty,
                zr = Object.getOwnPropertyDescriptor,
                Sr = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? zr(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && Dr(t, o, i), i
                };
            let Nr = class extends a.oi {
                constructor() {
                    super(), this.view = g.AV.state.view, this.prevView = g.AV.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = g.AV.subscribe((e => {
                        this.view !== e.view && this.onChangeRoute()
                    }))
                }
                firstUpdated() {
                    this.resizeObserver = new ResizeObserver((e => {
                        let [t] = e;
                        const o = "".concat(t.contentRect.height, "px");
                        "0px" !== this.oldHeight && Oe(this.routerEl, {
                            height: [this.oldHeight, o]
                        }, {
                            duration: .2
                        }), this.oldHeight = o
                    })), this.resizeObserver.observe(this.contentEl)
                }
                disconnectedCallback() {
                    var e, t;
                    null == (e = this.unsubscribe) || e.call(this), null == (t = this.resizeObserver) || t.disconnect()
                }
                get routerEl() {
                    return jr.getShadowRootElement(this, ".wcm-router")
                }
                get contentEl() {
                    return jr.getShadowRootElement(this, ".wcm-content")
                }
                viewTemplate() {
                    switch (this.view) {
                        case "ConnectWallet":
                            return (0, a.dy)(dt || (dt = (0, r.Z)(["<wcm-connect-wallet-view></wcm-connect-wallet-view>"])));
                        case "DesktopConnecting":
                            return (0, a.dy)(mt || (mt = (0, r.Z)(["<wcm-desktop-connecting-view></wcm-desktop-connecting-view>"])));
                        case "MobileConnecting":
                            return (0, a.dy)(ht || (ht = (0, r.Z)(["<wcm-mobile-connecting-view></wcm-mobile-connecting-view>"])));
                        case "WebConnecting":
                            return (0, a.dy)(pt || (pt = (0, r.Z)(["<wcm-web-connecting-view></wcm-web-connecting-view>"])));
                        case "MobileQrcodeConnecting":
                            return (0, a.dy)(wt || (wt = (0, r.Z)(["<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>"])));
                        case "WalletExplorer":
                            return (0, a.dy)(gt || (gt = (0, r.Z)(["<wcm-wallet-explorer-view></wcm-wallet-explorer-view>"])));
                        case "Qrcode":
                            return (0, a.dy)(ut || (ut = (0, r.Z)(["<wcm-qrcode-view></wcm-qrcode-view>"])));
                        case "InstallWallet":
                            return (0, a.dy)(vt || (vt = (0, r.Z)(["<wcm-install-wallet-view></wcm-install-wallet-view>"])));
                        default:
                            return (0, a.dy)(ft || (ft = (0, r.Z)(["<div>Not Found</div>"])))
                    }
                }
                async onChangeRoute() {
                    await Oe(this.routerEl, {
                        opacity: [1, 0],
                        scale: [1, 1.02]
                    }, {
                        duration: .15,
                        delay: .1
                    }).finished, this.view = g.AV.state.view, Oe(this.routerEl, {
                        opacity: [0, 1],
                        scale: [.99, 1]
                    }, {
                        duration: .37,
                        delay: .05
                    })
                }
                render() {
                    return (0, a.dy)(bt || (bt = (0, r.Z)(['<div class="wcm-router"><div class="wcm-content">', "</div></div>"])), this.viewTemplate())
                }
            };
            Nr.styles = [or.globalCss, _r], Sr([s()], Nr.prototype, "view", 2), Sr([s()], Nr.prototype, "prevView", 2), Nr = Sr([i("wcm-modal-router")], Nr);
            const Br = (0, a.iv)(yt || (yt = (0, r.Z)(["div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}"])));
            var Ur = Object.defineProperty,
                Hr = Object.getOwnPropertyDescriptor,
                Vr = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? Hr(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && Ur(t, o, i), i
                };
            let Fr = class extends a.oi {
                constructor() {
                    super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = g.ToastCtrl.subscribe((e => {
                        e.open ? (this.open = !0, this.timeout = setTimeout((() => g.ToastCtrl.closeToast()), 2200)) : (this.open = !1, clearTimeout(this.timeout))
                    }))
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.unsubscribe) || e.call(this), clearTimeout(this.timeout), g.ToastCtrl.closeToast()
                }
                render() {
                    const {
                        message: e,
                        variant: t
                    } = g.ToastCtrl.state, o = {
                        "wcm-success": "success" === t,
                        "wcm-error": "error" === t
                    };
                    return this.open ? (0, a.dy)(xt || (xt = (0, r.Z)(['<div class="', '">', " ", '<wcm-text variant="small-regular">', "</wcm-text></div>"])), w(o), "success" === t ? vr.CHECKMARK_ICON : null, "error" === t ? vr.CROSS_ICON : null, e) : null
                }
            };
            Fr.styles = [or.globalCss, Br], Vr([s()], Fr.prototype, "open", 2), Fr = Vr([i("wcm-modal-toast")], Fr);

            function Yr(e, t, o) {
                return e !== t && (e - t < 0 ? t - e : e - t) <= o + .1
            }
            const qr = {
                    generate(e, t, o) {
                        const i = "#141414",
                            l = [],
                            n = function(e, t) {
                                const o = Array.prototype.slice.call(Qo.create(e, {
                                        errorCorrectionLevel: t
                                    }).modules.data, 0),
                                    r = Math.sqrt(o.length);
                                return o.reduce(((e, t, o) => (o % r === 0 ? e.push([t]) : e[e.length - 1].push(t)) && e), [])
                            }(e, "Q"),
                            c = t / n.length,
                            s = [{
                                x: 0,
                                y: 0
                            }, {
                                x: 1,
                                y: 0
                            }, {
                                x: 0,
                                y: 1
                            }];
                        s.forEach((e => {
                            let {
                                x: t,
                                y: o
                            } = e;
                            const d = (n.length - 7) * c * t,
                                m = (n.length - 7) * c * o;
                            for (let n = 0; n < s.length; n += 1) {
                                const e = c * (7 - 2 * n);
                                l.push((0, a.YP)(Ct || (Ct = (0, r.Z)(['<rect fill="', '" height="', '" rx="', '" ry="', '" width="', '" x="', '" y="', '">'])), n % 2 === 0 ? i : "#ffffff", e, .45 * e, .45 * e, e, d + c * n, m + c * n))
                            }
                        }));
                        const d = Math.floor((o + 25) / c),
                            m = n.length / 2 - d / 2,
                            h = n.length / 2 + d / 2 - 1,
                            p = [];
                        n.forEach(((e, t) => {
                            e.forEach(((e, o) => {
                                if (n[t][o] && !(t < 7 && o < 7 || t > n.length - 8 && o < 7 || t < 7 && o > n.length - 8) && !(t > m && t < h && o > m && o < h)) {
                                    const e = t * c + c / 2,
                                        r = o * c + c / 2;
                                    p.push([e, r])
                                }
                            }))
                        }));
                        const w = {};
                        return p.forEach((e => {
                            let [t, o] = e;
                            w[t] ? w[t].push(o) : w[t] = [o]
                        })), Object.entries(w).map((e => {
                            let [t, o] = e;
                            const r = o.filter((e => o.every((t => !Yr(e, t, c)))));
                            return [Number(t), r]
                        })).forEach((e => {
                            let [t, o] = e;
                            o.forEach((e => {
                                l.push((0, a.YP)(kt || (kt = (0, r.Z)(['<circle cx="', '" cy="', '" fill="', '" r="', '">'])), t, e, i, c / 2.5))
                            }))
                        })), Object.entries(w).filter((e => {
                            let [t, o] = e;
                            return o.length > 1
                        })).map((e => {
                            let [t, o] = e;
                            const r = o.filter((e => o.some((t => Yr(e, t, c)))));
                            return [Number(t), r]
                        })).map((e => {
                            let [t, o] = e;
                            o.sort(((e, t) => e < t ? -1 : 1));
                            const r = [];
                            for (const a of o) {
                                const e = r.find((e => e.some((e => Yr(a, e, c)))));
                                e ? e.push(a) : r.push([a])
                            }
                            return [t, r.map((e => [e[0], e[e.length - 1]]))]
                        })).forEach((e => {
                            let [t, o] = e;
                            o.forEach((e => {
                                let [o, n] = e;
                                l.push((0, a.YP)(Ot || (Ot = (0, r.Z)(['<line x1="', '" x2="', '" y1="', '" y2="', '" stroke="', '" stroke-width="', '" stroke-linecap="round">'])), t, t, o, n, i, c / 1.25))
                            }))
                        })), l
                    }
                },
                Kr = (0, a.iv)(Zt || (Zt = (0, r.Z)(["@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}"])));
            var Qr = Object.defineProperty,
                Gr = Object.getOwnPropertyDescriptor,
                $r = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? Gr(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && Qr(t, o, i), i
                };
            let Xr = class extends a.oi {
                constructor() {
                    super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0
                }
                svgTemplate() {
                    const e = "light" === g.ThemeCtrl.state.themeMode ? this.size : this.size - 36;
                    return (0, a.YP)(Et || (Et = (0, r.Z)(['<svg height="', '" width="', '">', "</svg>"])), e, e, qr.generate(this.uri, e, e / 4))
                }
                render() {
                    const e = {
                        "wcm-dark": "dark" === g.ThemeCtrl.state.themeMode
                    };
                    return (0, a.dy)(It || (It = (0, r.Z)(['<div style="', '" class="', '">', " ", "</div>"])), "width: ".concat(this.size, "px"), w(e), this.walletId || this.imageUrl ? (0, a.dy)(At || (At = (0, r.Z)(['<wcm-wallet-image walletId="', '" imageId="', '" imageUrl="', '"></wcm-wallet-image>'])), Ze(this.walletId), Ze(this.imageId), Ze(this.imageUrl)) : vr.WALLET_CONNECT_ICON_COLORED, this.svgTemplate())
                }
            };
            Xr.styles = [or.globalCss, Kr], $r([c()], Xr.prototype, "uri", 2), $r([c({
                type: Number
            })], Xr.prototype, "size", 2), $r([c()], Xr.prototype, "imageId", 2), $r([c()], Xr.prototype, "walletId", 2), $r([c()], Xr.prototype, "imageUrl", 2), Xr = $r([i("wcm-qrcode")], Xr);
            const Jr = (0, a.iv)(Pt || (Pt = (0, r.Z)([":host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}"])));
            var ea = Object.defineProperty,
                ta = Object.getOwnPropertyDescriptor,
                oa = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? ta(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && ea(t, o, i), i
                };
            let ra = class extends a.oi {
                constructor() {
                    super(...arguments), this.onChange = () => null
                }
                render() {
                    return (0, a.dy)(Tt || (Tt = (0, r.Z)(['<input type="text" @input="', '" placeholder="Search wallets"> ', ""])), this.onChange, vr.SEARCH_ICON)
                }
            };
            ra.styles = [or.globalCss, Jr], oa([c()], ra.prototype, "onChange", 2), ra = oa([i("wcm-search-input")], ra);
            const aa = (0, a.iv)(Mt || (Mt = (0, r.Z)(["@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}"])));
            var ia = Object.defineProperty,
                la = Object.getOwnPropertyDescriptor;
            let na = class extends a.oi {
                render() {
                    return (0, a.dy)(Wt || (Wt = (0, r.Z)(['<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>'])))
                }
            };
            na.styles = [or.globalCss, aa], na = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? la(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && ia(t, o, i), i
            })([i("wcm-spinner")], na);
            const ca = (0, a.iv)(Rt || (Rt = (0, r.Z)(["span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}"])));
            var sa = Object.defineProperty,
                da = Object.getOwnPropertyDescriptor,
                ma = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? da(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && sa(t, o, i), i
                };
            let ha = class extends a.oi {
                constructor() {
                    super(...arguments), this.variant = "medium-regular", this.color = "primary"
                }
                render() {
                    const e = {
                        "wcm-big-bold": "big-bold" === this.variant,
                        "wcm-medium-regular": "medium-regular" === this.variant,
                        "wcm-small-regular": "small-regular" === this.variant,
                        "wcm-small-thin": "small-thin" === this.variant,
                        "wcm-xsmall-regular": "xsmall-regular" === this.variant,
                        "wcm-xsmall-bold": "xsmall-bold" === this.variant,
                        "wcm-color-primary": "primary" === this.color,
                        "wcm-color-secondary": "secondary" === this.color,
                        "wcm-color-tertiary": "tertiary" === this.color,
                        "wcm-color-inverse": "inverse" === this.color,
                        "wcm-color-accnt": "accent" === this.color,
                        "wcm-color-error": "error" === this.color
                    };
                    return (0, a.dy)(Lt || (Lt = (0, r.Z)(['<span><slot class="', '"></slot></span>'])), w(e))
                }
            };
            ha.styles = [or.globalCss, ca], ma([c()], ha.prototype, "variant", 2), ma([c()], ha.prototype, "color", 2), ha = ma([i("wcm-text")], ha);
            const pa = (0, a.iv)(jt || (jt = (0, r.Z)(["button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}"])));
            var wa = Object.defineProperty,
                ga = Object.getOwnPropertyDescriptor,
                ua = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? ga(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && wa(t, o, i), i
                };
            let va = class extends a.oi {
                constructor() {
                    super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = !1, this.recent = !1
                }
                sublabelTemplate() {
                    return this.recent ? (0, a.dy)(_t || (_t = (0, r.Z)(['<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>']))) : this.installed ? (0, a.dy)(Dt || (Dt = (0, r.Z)(['<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>']))) : null
                }
                handleClick() {
                    g.uA.click({
                        name: "WALLET_BUTTON",
                        walletId: this.walletId
                    }), this.onClick()
                }
                render() {
                    var e;
                    return (0, a.dy)(zt || (zt = (0, r.Z)(['<button @click="', '"><div><wcm-wallet-image walletId="', '" imageId="', '"></wcm-wallet-image><wcm-text variant="xsmall-regular">', "</wcm-text>", "</div></button>"])), this.handleClick.bind(this), this.walletId, Ze(this.imageId), null != (e = this.label) ? e : jr.getWalletName(this.name, !0), this.sublabelTemplate())
                }
            };
            va.styles = [or.globalCss, pa], ua([c()], va.prototype, "onClick", 2), ua([c()], va.prototype, "name", 2), ua([c()], va.prototype, "walletId", 2), ua([c()], va.prototype, "label", 2), ua([c()], va.prototype, "imageId", 2), ua([c({
                type: Boolean
            })], va.prototype, "installed", 2), ua([c({
                type: Boolean
            })], va.prototype, "recent", 2), va = ua([i("wcm-wallet-button")], va);
            const fa = (0, a.iv)(St || (St = (0, r.Z)([":host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}"])));
            var ba = Object.defineProperty,
                ya = Object.getOwnPropertyDescriptor,
                xa = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? ya(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && ba(t, o, i), i
                };
            let Ca = class extends a.oi {
                constructor() {
                    super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0
                }
                render() {
                    var e;
                    const t = null != (e = this.imageUrl) && e.length ? this.imageUrl : jr.getWalletIcon({
                        id: this.walletId,
                        image_id: this.imageId
                    });
                    return (0, a.dy)(Nt || (Nt = (0, r.Z)(["", ""])), t.length ? (0, a.dy)(Bt || (Bt = (0, r.Z)(['<div><img src="', '" alt="', '"></div>'])), t, this.id) : vr.WALLET_PLACEHOLDER)
                }
            };
            Ca.styles = [or.globalCss, fa], xa([c()], Ca.prototype, "walletId", 2), xa([c()], Ca.prototype, "imageId", 2), xa([c()], Ca.prototype, "imageUrl", 2), Ca = xa([i("wcm-wallet-image")], Ca);
            var ka = Object.defineProperty,
                Oa = Object.getOwnPropertyDescriptor,
                Za = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? Oa(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && ka(t, o, i), i
                };
            let Ea = class extends a.oi {
                constructor() {
                    super(), this.preload = !0, this.preloadData()
                }
                async loadImages(e) {
                    try {
                        null != e && e.length && await Promise.all(e.map((async e => jr.preloadImage(e))))
                    } catch {
                        console.info("Unsuccessful attempt at preloading some images", e)
                    }
                }
                async preloadListings() {
                    if (g.ConfigCtrl.state.enableExplorer) {
                        await g.ExplorerCtrl.getRecomendedWallets(), g.OptionsCtrl.setIsDataLoaded(!0);
                        const {
                            recomendedWallets: e
                        } = g.ExplorerCtrl.state, t = e.map((e => jr.getWalletIcon(e)));
                        await this.loadImages(t)
                    } else g.OptionsCtrl.setIsDataLoaded(!0)
                }
                async preloadCustomImages() {
                    const e = jr.getCustomImageUrls();
                    await this.loadImages(e)
                }
                async preloadData() {
                    try {
                        this.preload && (this.preload = !1, await Promise.all([this.preloadListings(), this.preloadCustomImages()]))
                    } catch (e) {
                        console.error(e), g.ToastCtrl.openToast("Failed preloading", "error")
                    }
                }
            };
            Za([s()], Ea.prototype, "preload", 2), Ea = Za([i("wcm-explorer-context")], Ea);
            var Ia = Object.defineProperty,
                Aa = Object.getOwnPropertyDescriptor;
            let Pa = class extends a.oi {
                constructor() {
                    super(), this.unsubscribeTheme = void 0, or.setTheme(), this.unsubscribeTheme = g.ThemeCtrl.subscribe(or.setTheme)
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.unsubscribeTheme) || e.call(this)
                }
            };
            Pa = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? Aa(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && Ia(t, o, i), i
            })([i("wcm-theme-context")], Pa);
            const Ta = (0, a.iv)(Ut || (Ut = (0, r.Z)(["@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}"])));
            var Ma = Object.defineProperty,
                Wa = Object.getOwnPropertyDescriptor;
            let Ra = class extends a.oi {
                onGoToQrcode() {
                    g.AV.push("Qrcode")
                }
                render() {
                    const {
                        recomendedWallets: e
                    } = g.ExplorerCtrl.state, t = [...e, ...e], o = 2 * g.zv.RECOMMENDED_WALLET_AMOUNT;
                    return (0, a.dy)(Ht || (Ht = (0, r.Z)(['<wcm-modal-header title="Connect your wallet" .onAction="', '" .actionIcon="', '"></wcm-modal-header><wcm-modal-content><div class="wcm-title">', '<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">', '</div><wcm-button-big @click="', '"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>'])), this.onGoToQrcode, vr.QRCODE_ICON, vr.MOBILE_ICON, [...Array(o)].map(((e, o) => {
                        const i = t[o % t.length];
                        return i ? (0, a.dy)(Vt || (Vt = (0, r.Z)(['<wcm-wallet-image walletId="', '" imageId="', '"></wcm-wallet-image>'])), i.id, i.image_id) : vr.WALLET_PLACEHOLDER
                    })), jr.handleAndroidLinking)
                }
            };
            Ra.styles = [or.globalCss, Ta], Ra = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? Wa(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && Ma(t, o, i), i
            })([i("wcm-android-wallet-selection")], Ra);
            const La = (0, a.iv)(Ft || (Ft = (0, r.Z)(["@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}"])));
            var ja = Object.defineProperty,
                _a = Object.getOwnPropertyDescriptor,
                Da = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? _a(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && ja(t, o, i), i
                };
            let za = class extends a.oi {
                constructor() {
                    super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = !1, this.isStale = !1, this.label = ""
                }
                svgLoaderTemplate() {
                    var e, t;
                    const o = null != (t = null == (e = g.ThemeCtrl.state.themeVariables) ? void 0 : e["--wcm-wallet-icon-large-border-radius"]) ? t : or.getPreset("--wcm-wallet-icon-large-border-radius");
                    let i = 0;
                    i = o.includes("%") ? .88 * parseInt(o, 10) : parseInt(o, 10), i *= 1.17;
                    const l = 317 - 1.57 * i,
                        n = 425 - 1.8 * i;
                    return (0, a.dy)(Yt || (Yt = (0, r.Z)(['<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="', '"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ', '" stroke-dashoffset="', '"></use></svg>'])), i, l, n)
                }
                render() {
                    const e = {
                        "wcm-error": this.isError,
                        "wcm-stale": this.isStale
                    };
                    return (0, a.dy)(qt || (qt = (0, r.Z)(['<div class="', '">', '<wcm-wallet-image walletId="', '" imageId="', '"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="', '">', "</wcm-text>"])), w(e), this.svgLoaderTemplate(), Ze(this.walletId), Ze(this.imageId), this.isError ? "error" : "primary", this.isError ? "Connection declined" : this.label)
                }
            };
            za.styles = [or.globalCss, La], Da([c()], za.prototype, "walletId", 2), Da([c()], za.prototype, "imageId", 2), Da([c({
                type: Boolean
            })], za.prototype, "isError", 2), Da([c({
                type: Boolean
            })], za.prototype, "isStale", 2), Da([c()], za.prototype, "label", 2), za = Da([i("wcm-connector-waiting")], za);
            const Sa = {
                    manualWallets() {
                        var e, t;
                        const {
                            mobileWallets: o,
                            desktopWallets: r
                        } = g.ConfigCtrl.state, a = null == (e = Sa.recentWallet()) ? void 0 : e.id, i = g.zv.isMobile() ? o : r, l = null === i || void 0 === i ? void 0 : i.filter((e => a !== e.id));
                        return null != (t = g.zv.isMobile() ? null === l || void 0 === l ? void 0 : l.map((e => {
                            let {
                                id: t,
                                name: o,
                                links: r
                            } = e;
                            return {
                                id: t,
                                name: o,
                                mobile: r,
                                links: r
                            }
                        })) : null === l || void 0 === l ? void 0 : l.map((e => {
                            let {
                                id: t,
                                name: o,
                                links: r
                            } = e;
                            return {
                                id: t,
                                name: o,
                                desktop: r,
                                links: r
                            }
                        }))) ? t : []
                    },
                    recentWallet: () => jr.getRecentWallet(),
                    recomendedWallets() {
                        var e;
                        const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || null == (e = Sa.recentWallet()) ? void 0 : e.id,
                            {
                                recomendedWallets: o
                            } = g.ExplorerCtrl.state;
                        return o.filter((e => t !== e.id))
                    }
                },
                Na = {
                    onConnecting(e) {
                        jr.goToConnectingView(e)
                    },
                    manualWalletsTemplate() {
                        return Sa.manualWallets().map((e => (0, a.dy)(Kt || (Kt = (0, r.Z)(['<wcm-wallet-button walletId="', '" name="', '" .onClick="', '"></wcm-wallet-button>'])), e.id, e.name, (() => this.onConnecting(e)))))
                    },
                    recomendedWalletsTemplate() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return Sa.recomendedWallets(e).map((e => (0, a.dy)(Qt || (Qt = (0, r.Z)(['<wcm-wallet-button name="', '" walletId="', '" imageId="', '" .onClick="', '"></wcm-wallet-button>'])), e.name, e.id, e.image_id, (() => this.onConnecting(e)))))
                    },
                    recentWalletTemplate() {
                        const e = Sa.recentWallet();
                        if (e) return (0, a.dy)(Gt || (Gt = (0, r.Z)(['<wcm-wallet-button name="', '" walletId="', '" imageId="', '" .recent="', '" .onClick="', '"></wcm-wallet-button>'])), e.name, e.id, Ze(e.image_id), !0, (() => this.onConnecting(e)))
                    }
                },
                Ba = (0, a.iv)($t || ($t = (0, r.Z)([".wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}"])));
            var Ua = Object.defineProperty,
                Ha = Object.getOwnPropertyDescriptor;
            let Va = class extends a.oi {
                render() {
                    const {
                        explorerExcludedWalletIds: e,
                        enableExplorer: t
                    } = g.ConfigCtrl.state, o = "ALL" !== e && t, i = Na.manualWalletsTemplate(), l = Na.recomendedWalletsTemplate();
                    let n = [Na.recentWalletTemplate(), ...i, ...l];
                    n = n.filter(Boolean);
                    const c = n.length > 4 || o;
                    let s = [];
                    s = c ? n.slice(0, 3) : n;
                    const d = Boolean(s.length);
                    return (0, a.dy)(Xt || (Xt = (0, r.Z)(['<wcm-modal-header .border="', '" title="Connect your wallet" .onAction="', '" .actionIcon="', '"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">', '<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">', '<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>', ""])), !0, jr.handleUriCopy, vr.COPY_ICON, vr.MOBILE_ICON, vr.SCAN_ICON, d ? (0, a.dy)(Jt || (Jt = (0, r.Z)(['<wcm-modal-footer><div class="wcm-desktop-title">', '<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">', " ", "</div></wcm-modal-footer>"])), vr.DESKTOP_ICON, s, c ? (0, a.dy)(eo || (eo = (0, r.Z)(["<wcm-view-all-wallets-button></wcm-view-all-wallets-button>"]))) : null) : null)
                }
            };
            Va.styles = [or.globalCss, Ba], Va = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? Ha(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && Ua(t, o, i), i
            })([i("wcm-desktop-wallet-selection")], Va);
            const Fa = (0, a.iv)(to || (to = (0, r.Z)(["div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}"])));
            var Ya = Object.defineProperty,
                qa = Object.getOwnPropertyDescriptor;
            let Ka = class extends a.oi {
                render() {
                    const {
                        termsOfServiceUrl: e,
                        privacyPolicyUrl: t
                    } = g.ConfigCtrl.state;
                    return (null !== e && void 0 !== e ? e : t) ? (0, a.dy)(oo || (oo = (0, r.Z)(['<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app\'s ', " ", " ", "</wcm-text></div>"])), e ? (0, a.dy)(ro || (ro = (0, r.Z)(['<a href="', '" target="_blank" rel="noopener noreferrer">Terms of Service</a>'])), e) : null, e && t ? "and" : null, t ? (0, a.dy)(ao || (ao = (0, r.Z)(['<a href="', '" target="_blank" rel="noopener noreferrer">Privacy Policy</a>'])), t) : null) : null
                }
            };
            Ka.styles = [or.globalCss, Fa], Ka = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? qa(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && Ya(t, o, i), i
            })([i("wcm-legal-notice")], Ka);
            const Qa = (0, a.iv)(io || (io = (0, r.Z)(["div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}"])));
            var Ga = Object.defineProperty,
                $a = Object.getOwnPropertyDescriptor;
            let Xa = class extends a.oi {
                onQrcode() {
                    g.AV.push("Qrcode")
                }
                render() {
                    const {
                        explorerExcludedWalletIds: e,
                        enableExplorer: t
                    } = g.ConfigCtrl.state, o = "ALL" !== e && t, i = Na.manualWalletsTemplate(), l = Na.recomendedWalletsTemplate();
                    let n = [Na.recentWalletTemplate(), ...i, ...l];
                    n = n.filter(Boolean);
                    const c = n.length > 8 || o;
                    let s = [];
                    s = c ? n.slice(0, 7) : n;
                    const d = Boolean(s.length);
                    return (0, a.dy)(lo || (lo = (0, r.Z)(['<wcm-modal-header title="Connect your wallet" .onAction="', '" .actionIcon="', '"></wcm-modal-header>', ""])), this.onQrcode, vr.QRCODE_ICON, d ? (0, a.dy)(no || (no = (0, r.Z)(["<wcm-modal-content><div>", " ", "</div></wcm-modal-content>"])), s, c ? (0, a.dy)(co || (co = (0, r.Z)(["<wcm-view-all-wallets-button></wcm-view-all-wallets-button>"]))) : null) : null)
                }
            };
            Xa.styles = [or.globalCss, Qa], Xa = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? $a(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && Ga(t, o, i), i
            })([i("wcm-mobile-wallet-selection")], Xa);
            const Ja = (0, a.iv)(so || (so = (0, r.Z)([":host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}"])));
            var ei = Object.defineProperty,
                ti = Object.getOwnPropertyDescriptor,
                oi = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? ti(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && ei(t, o, i), i
                };
            let ri = class extends a.oi {
                constructor() {
                    super(), this.open = !1, this.active = !1, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = g.jb.subscribe((e => {
                        e.open ? this.onOpenModalEvent() : this.onCloseModalEvent()
                    }))
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.unsubscribeModal) || e.call(this)
                }
                get overlayEl() {
                    return jr.getShadowRootElement(this, ".wcm-overlay")
                }
                get containerEl() {
                    return jr.getShadowRootElement(this, ".wcm-container")
                }
                toggleBodyScroll(e) {
                    if (document.querySelector("body"))
                        if (e) {
                            const e = document.getElementById("wcm-styles");
                            null === e || void 0 === e || e.remove()
                        } else document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>')
                }
                onCloseModal(e) {
                    e.target === e.currentTarget && g.jb.close()
                }
                onOpenModalEvent() {
                    this.toggleBodyScroll(!1), this.addKeyboardEvents(), this.open = !0, setTimeout((async () => {
                        const e = jr.isMobileAnimation() ? {
                            y: ["50vh", "0vh"]
                        } : {
                            scale: [.98, 1]
                        };
                        await Promise.all([Oe(this.overlayEl, {
                            opacity: [0, 1]
                        }, {
                            delay: .1,
                            duration: .2
                        }).finished, Oe(this.containerEl, e, {
                            delay: .1,
                            duration: .2
                        }).finished]), this.active = !0
                    }), 0)
                }
                async onCloseModalEvent() {
                    this.toggleBodyScroll(!0), this.removeKeyboardEvents();
                    const e = jr.isMobileAnimation() ? {
                        y: ["0vh", "50vh"]
                    } : {
                        scale: [1, .98]
                    };
                    await Promise.all([Oe(this.overlayEl, {
                        opacity: [1, 0]
                    }, {
                        duration: .2
                    }).finished, Oe(this.containerEl, e, {
                        duration: .2
                    }).finished]), this.containerEl.removeAttribute("style"), this.active = !1, this.open = !1
                }
                addKeyboardEvents() {
                    this.abortController = new AbortController, window.addEventListener("keydown", (e => {
                        var t;
                        "Escape" === e.key ? g.jb.close() : "Tab" === e.key && (null != (t = e.target) && t.tagName.includes("wcm-") || this.containerEl.focus())
                    }), this.abortController), this.containerEl.focus()
                }
                removeKeyboardEvents() {
                    var e;
                    null == (e = this.abortController) || e.abort(), this.abortController = void 0
                }
                render() {
                    const e = {
                        "wcm-overlay": !0,
                        "wcm-active": this.active
                    };
                    return (0, a.dy)(mo || (mo = (0, r.Z)(['<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="', '" @click="', '" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">', "</div></div>"])), w(e), this.onCloseModal, this.open ? (0, a.dy)(ho || (ho = (0, r.Z)(['<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>']))) : null)
                }
            };
            ri.styles = [or.globalCss, Ja], oi([s()], ri.prototype, "open", 2), oi([s()], ri.prototype, "active", 2), ri = oi([i("wcm-modal")], ri);
            const ai = (0, a.iv)(po || (po = (0, r.Z)(["div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}"])));
            var ii = Object.defineProperty,
                li = Object.getOwnPropertyDescriptor,
                ni = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? li(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && ii(t, o, i), i
                };
            let ci = class extends a.oi {
                constructor() {
                    super(...arguments), this.isMobile = !1, this.isDesktop = !1, this.isWeb = !1, this.isRetry = !1
                }
                onMobile() {
                    g.zv.isMobile() ? g.AV.replace("MobileConnecting") : g.AV.replace("MobileQrcodeConnecting")
                }
                onDesktop() {
                    g.AV.replace("DesktopConnecting")
                }
                onWeb() {
                    g.AV.replace("WebConnecting")
                }
                render() {
                    return (0, a.dy)(wo || (wo = (0, r.Z)(["<div>", " ", " ", " ", "</div>"])), this.isRetry ? (0, a.dy)(go || (go = (0, r.Z)(["<slot></slot>"]))) : null, this.isMobile ? (0, a.dy)(uo || (uo = (0, r.Z)(['<wcm-button .onClick="', '" .iconLeft="', '" variant="outline">Mobile</wcm-button>'])), this.onMobile, vr.MOBILE_ICON) : null, this.isDesktop ? (0, a.dy)(vo || (vo = (0, r.Z)(['<wcm-button .onClick="', '" .iconLeft="', '" variant="outline">Desktop</wcm-button>'])), this.onDesktop, vr.DESKTOP_ICON) : null, this.isWeb ? (0, a.dy)(fo || (fo = (0, r.Z)(['<wcm-button .onClick="', '" .iconLeft="', '" variant="outline">Web</wcm-button>'])), this.onWeb, vr.GLOBE_ICON) : null)
                }
            };
            ci.styles = [or.globalCss, ai], ni([c({
                type: Boolean
            })], ci.prototype, "isMobile", 2), ni([c({
                type: Boolean
            })], ci.prototype, "isDesktop", 2), ni([c({
                type: Boolean
            })], ci.prototype, "isWeb", 2), ni([c({
                type: Boolean
            })], ci.prototype, "isRetry", 2), ci = ni([i("wcm-platform-selection")], ci);
            const si = (0, a.iv)(bo || (bo = (0, r.Z)(["button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}"])));
            var di = Object.defineProperty,
                mi = Object.getOwnPropertyDescriptor;
            let hi = class extends a.oi {
                onClick() {
                    g.AV.push("WalletExplorer")
                }
                render() {
                    const {
                        recomendedWallets: e
                    } = g.ExplorerCtrl.state, t = [...e, ...Sa.manualWallets()].reverse().slice(0, 4);
                    return (0, a.dy)(yo || (yo = (0, r.Z)(['<button @click="', '"><div class="wcm-icons">', " ", '</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>'])), this.onClick, t.map((e => {
                        const t = jr.getWalletIcon(e);
                        if (t) return (0, a.dy)(xo || (xo = (0, r.Z)(['<img src="', '">'])), t);
                        const o = jr.getWalletIcon({
                            id: e.id
                        });
                        return o ? (0, a.dy)(Co || (Co = (0, r.Z)(['<img src="', '">'])), o) : vr.WALLET_PLACEHOLDER
                    })), [...Array(4 - t.length)].map((() => vr.WALLET_PLACEHOLDER)))
                }
            };
            hi.styles = [or.globalCss, si], hi = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? mi(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && di(t, o, i), i
            })([i("wcm-view-all-wallets-button")], hi);
            const pi = (0, a.iv)(ko || (ko = (0, r.Z)([".wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}"])));
            var wi = Object.defineProperty,
                gi = Object.getOwnPropertyDescriptor,
                ui = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? gi(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && wi(t, o, i), i
                };
            let vi = class extends a.oi {
                constructor() {
                    super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout((() => {
                        const {
                            walletConnectUri: e
                        } = g.OptionsCtrl.state;
                        this.uri = e
                    }), 0)
                }
                get overlayEl() {
                    return jr.getShadowRootElement(this, ".wcm-qr-container")
                }
                render() {
                    return (0, a.dy)(Oo || (Oo = (0, r.Z)(['<div class="wcm-qr-container">', "</div>"])), this.uri ? (0, a.dy)(Zo || (Zo = (0, r.Z)(['<wcm-qrcode size="', '" uri="', '" walletId="', '" imageId="', '"></wcm-qrcode>'])), this.overlayEl.offsetWidth, this.uri, Ze(this.walletId), Ze(this.imageId)) : (0, a.dy)(Eo || (Eo = (0, r.Z)(["<wcm-spinner></wcm-spinner>"]))))
                }
            };
            vi.styles = [or.globalCss, pi], ui([c()], vi.prototype, "walletId", 2), ui([c()], vi.prototype, "imageId", 2), ui([s()], vi.prototype, "uri", 2), vi = ui([i("wcm-walletconnect-qr")], vi);
            var fi = Object.defineProperty,
                bi = Object.getOwnPropertyDescriptor;
            let yi = class extends a.oi {
                viewTemplate() {
                    return g.zv.isAndroid() ? (0, a.dy)(Io || (Io = (0, r.Z)(["<wcm-android-wallet-selection></wcm-android-wallet-selection>"]))) : g.zv.isMobile() ? (0, a.dy)(Ao || (Ao = (0, r.Z)(["<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>"]))) : (0, a.dy)(Po || (Po = (0, r.Z)(["<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>"])))
                }
                render() {
                    return (0, a.dy)(To || (To = (0, r.Z)(["", "<wcm-legal-notice></wcm-legal-notice>"])), this.viewTemplate())
                }
            };
            yi.styles = [or.globalCss], yi = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? bi(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && fi(t, o, i), i
            })([i("wcm-connect-wallet-view")], yi);
            const xi = (0, a.iv)(Mo || (Mo = (0, r.Z)(["wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}"])));
            var Ci = Object.defineProperty,
                ki = Object.getOwnPropertyDescriptor,
                Oi = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? ki(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && Ci(t, o, i), i
                };
            let Zi = class extends a.oi {
                constructor() {
                    super(), this.isError = !1, this.openDesktopApp()
                }
                onFormatAndRedirect(e) {
                    const {
                        desktop: t,
                        name: o
                    } = g.zv.getWalletRouterData(), r = null === t || void 0 === t ? void 0 : t.native;
                    if (r) {
                        const t = g.zv.formatNativeUrl(r, e, o);
                        g.zv.openHref(t, "_self")
                    }
                }
                openDesktopApp() {
                    const {
                        walletConnectUri: e
                    } = g.OptionsCtrl.state, t = g.zv.getWalletRouterData();
                    jr.setRecentWallet(t), e && this.onFormatAndRedirect(e)
                }
                render() {
                    const {
                        name: e,
                        id: t,
                        image_id: o
                    } = g.zv.getWalletRouterData(), {
                        isMobile: i,
                        isWeb: l
                    } = jr.getCachedRouterWalletPlatforms();
                    return (0, a.dy)(Wo || (Wo = (0, r.Z)(['<wcm-modal-header title="', '" .onAction="', '" .actionIcon="', '"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="', '" imageId="', '" label="', '" .isError="', '"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">', '</wcm-text><wcm-platform-selection .isMobile="', '" .isWeb="', '" .isRetry="', '"><wcm-button .onClick="', '" .iconRight="', '">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>'])), e, jr.handleUriCopy, vr.COPY_ICON, t, Ze(o), "Continue in ".concat(e, "..."), this.isError, "Connection can continue loading if ".concat(e, " is not installed on your device"), i, l, !0, this.openDesktopApp.bind(this), vr.RETRY_ICON)
                }
            };
            Zi.styles = [or.globalCss, xi], Oi([s()], Zi.prototype, "isError", 2), Zi = Oi([i("wcm-desktop-connecting-view")], Zi);
            const Ei = (0, a.iv)(Ro || (Ro = (0, r.Z)(["wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}"])));
            var Ii = Object.defineProperty,
                Ai = Object.getOwnPropertyDescriptor;
            let Pi = class extends a.oi {
                onInstall(e) {
                    e && g.zv.openHref(e, "_blank")
                }
                render() {
                    const {
                        name: e,
                        id: t,
                        image_id: o,
                        homepage: i
                    } = g.zv.getWalletRouterData();
                    return (0, a.dy)(Lo || (Lo = (0, r.Z)(['<wcm-modal-header title="', '"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="', '" imageId="', '" label="Not Detected" .isStale="', '"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">', '</wcm-text><wcm-button .onClick="', '" .iconLeft="', '">Download</wcm-button></wcm-info-footer>'])), e, t, Ze(o), !0, "Download ".concat(e, " to continue. If multiple browser extensions are installed, disable non ").concat(e, " ones and try again"), (() => this.onInstall(i)), vr.ARROW_DOWN_ICON)
                }
            };
            Pi.styles = [or.globalCss, Ei], Pi = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? Ai(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && Ii(t, o, i), i
            })([i("wcm-install-wallet-view")], Pi);
            const Ti = (0, a.iv)(jo || (jo = (0, r.Z)(["wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}"])));
            var Mi = Object.defineProperty,
                Wi = Object.getOwnPropertyDescriptor,
                Ri = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? Wi(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && Mi(t, o, i), i
                };
            let Li = class extends a.oi {
                constructor() {
                    super(), this.isError = !1, this.openMobileApp()
                }
                onFormatAndRedirect(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    const {
                        mobile: o,
                        name: r
                    } = g.zv.getWalletRouterData(), a = null === o || void 0 === o ? void 0 : o.native, i = null === o || void 0 === o ? void 0 : o.universal;
                    if (a && !t) {
                        const t = g.zv.formatNativeUrl(a, e, r);
                        g.zv.openHref(t, "_self")
                    } else if (i) {
                        const t = g.zv.formatUniversalUrl(i, e, r);
                        g.zv.openHref(t, "_self")
                    }
                }
                openMobileApp() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const {
                        walletConnectUri: t
                    } = g.OptionsCtrl.state, o = g.zv.getWalletRouterData();
                    jr.setRecentWallet(o), t && this.onFormatAndRedirect(t, e)
                }
                onGoToAppStore(e) {
                    e && g.zv.openHref(e, "_blank")
                }
                render() {
                    const {
                        name: e,
                        id: t,
                        image_id: o,
                        app: i,
                        mobile: l
                    } = g.zv.getWalletRouterData(), {
                        isWeb: n
                    } = jr.getCachedRouterWalletPlatforms(), c = null === i || void 0 === i ? void 0 : i.ios, s = null === l || void 0 === l ? void 0 : l.universal;
                    return (0, a.dy)(_o || (_o = (0, r.Z)(['<wcm-modal-header title="', '"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="', '" imageId="', '" label="Tap \'Open\' to continue\u2026" .isError="', '"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="', '" .isRetry="', '"><wcm-button .onClick="', '" .iconRight="', '">Retry</wcm-button></wcm-platform-selection>', '</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="', '" imageId="', '"></wcm-wallet-image><wcm-text>', '</wcm-text></div><wcm-button .iconRight="', '" .onClick="', '" variant="ghost">App Store</wcm-button></wcm-info-footer>'])), e, t, Ze(o), this.isError, n, !0, (() => this.openMobileApp(!1)), vr.RETRY_ICON, s ? (0, a.dy)(Do || (Do = (0, r.Z)(['<wcm-text color="secondary" variant="small-thin">Still doesn\'t work? <span tabindex="0" @click="', '">Try this alternate link</span></wcm-text>'])), (() => this.openMobileApp(!0))) : null, t, Ze(o), "Get ".concat(e), vr.ARROW_RIGHT_ICON, (() => this.onGoToAppStore(c)))
                }
            };
            Li.styles = [or.globalCss, Ti], Ri([s()], Li.prototype, "isError", 2), Li = Ri([i("wcm-mobile-connecting-view")], Li);
            const ji = (0, a.iv)(zo || (zo = (0, r.Z)(["wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}"])));
            var _i = Object.defineProperty,
                Di = Object.getOwnPropertyDescriptor;
            let zi = class extends a.oi {
                render() {
                    const {
                        name: e,
                        id: t,
                        image_id: o
                    } = g.zv.getWalletRouterData(), {
                        isDesktop: i,
                        isWeb: l
                    } = jr.getCachedRouterWalletPlatforms();
                    return (0, a.dy)(So || (So = (0, r.Z)(['<wcm-modal-header title="', '" .onAction="', '" .actionIcon="', '"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="', '" imageId="', '"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">', '</wcm-text><wcm-platform-selection .isDesktop="', '" .isWeb="', '"></wcm-platform-selection></wcm-info-footer>'])), e, jr.handleUriCopy, vr.COPY_ICON, t, Ze(o), "Scan this QR Code with your phone's camera or inside ".concat(e, " app"), i, l)
                }
            };
            zi.styles = [or.globalCss, ji], zi = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? Di(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && _i(t, o, i), i
            })([i("wcm-mobile-qr-connecting-view")], zi);
            var Si = Object.defineProperty,
                Ni = Object.getOwnPropertyDescriptor;
            let Bi = class extends a.oi {
                render() {
                    return (0, a.dy)(No || (No = (0, r.Z)(['<wcm-modal-header title="Scan the code" .onAction="', '" .actionIcon="', '"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>'])), jr.handleUriCopy, vr.COPY_ICON)
                }
            };
            Bi.styles = [or.globalCss], Bi = ((e, t, o, r) => {
                for (var a, i = r > 1 ? void 0 : r ? Ni(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                return r && i && Si(t, o, i), i
            })([i("wcm-qrcode-view")], Bi);
            const Ui = (0, a.iv)(Bo || (Bo = (0, r.Z)(["wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}"])));
            var Hi = Object.defineProperty,
                Vi = Object.getOwnPropertyDescriptor,
                Fi = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? Vi(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && Hi(t, o, i), i
                };
            let Yi = class extends a.oi {
                constructor() {
                    super(...arguments), this.loading = !g.ExplorerCtrl.state.wallets.listings.length, this.firstFetch = !g.ExplorerCtrl.state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = jr.debounce((e => {
                        e.length >= 1 ? (this.firstFetch = !0, this.endReached = !1, this.search = e, g.ExplorerCtrl.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), g.ExplorerCtrl.resetSearch())
                    }))
                }
                firstUpdated() {
                    this.createPaginationObserver()
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.intersectionObserver) || e.disconnect()
                }
                get placeholderEl() {
                    return jr.getShadowRootElement(this, ".wcm-placeholder-block")
                }
                createPaginationObserver() {
                    this.intersectionObserver = new IntersectionObserver((e => {
                        let [t] = e;
                        t.isIntersecting && (!this.search || !this.firstFetch) && this.fetchWallets()
                    })), this.intersectionObserver.observe(this.placeholderEl)
                }
                isLastPage() {
                    const {
                        wallets: e,
                        search: t
                    } = g.ExplorerCtrl.state, {
                        listings: o,
                        total: r
                    } = this.search ? t : e;
                    return r <= 40 || o.length >= r
                }
                async fetchWallets() {
                    var e;
                    const {
                        wallets: t,
                        search: o
                    } = g.ExplorerCtrl.state, {
                        listings: r,
                        total: a,
                        page: i
                    } = this.search ? o : t;
                    if (!this.endReached && (this.firstFetch || a > 40 && r.length < a)) try {
                        this.loading = !0;
                        const t = null == (e = g.OptionsCtrl.state.chains) ? void 0 : e.join(","),
                            {
                                listings: o
                            } = await g.ExplorerCtrl.getWallets({
                                page: this.firstFetch ? 1 : i + 1,
                                entries: 40,
                                search: this.search,
                                version: 2,
                                chains: t
                            }),
                            r = o.map((e => jr.getWalletIcon(e)));
                        await Promise.all([...r.map((async e => jr.preloadImage(e))), g.zv.wait(300)]), this.endReached = this.isLastPage()
                    } catch (l) {
                        console.error(l), g.ToastCtrl.openToast(jr.getErrorMessage(l), "error")
                    } finally {
                        this.loading = !1, this.firstFetch = !1
                    }
                }
                onConnect(e) {
                    g.zv.isAndroid() ? jr.handleMobileLinking(e) : jr.goToConnectingView(e)
                }
                onSearchChange(e) {
                    const {
                        value: t
                    } = e.target;
                    this.searchDebounce(t)
                }
                render() {
                    const {
                        wallets: e,
                        search: t
                    } = g.ExplorerCtrl.state, {
                        listings: o
                    } = this.search ? t : e, i = this.loading && !o.length, l = this.search.length >= 3;
                    let n = Na.manualWalletsTemplate(),
                        c = Na.recomendedWalletsTemplate(!0);
                    l && (n = n.filter((e => {
                        let {
                            values: t
                        } = e;
                        return jr.caseSafeIncludes(t[0], this.search)
                    })), c = c.filter((e => {
                        let {
                            values: t
                        } = e;
                        return jr.caseSafeIncludes(t[0], this.search)
                    })));
                    const s = !this.loading && !o.length && !c.length,
                        d = {
                            "wcm-loading": i,
                            "wcm-end-reached": this.endReached || !this.loading,
                            "wcm-empty": s
                        };
                    return (0, a.dy)(Uo || (Uo = (0, r.Z)(['<wcm-modal-header><wcm-search-input .onChange="', '"></wcm-search-input></wcm-modal-header><wcm-modal-content class="', '"><div class="wcm-grid">', " ", " ", '</div><div class="wcm-placeholder-block">', " ", "</div></wcm-modal-content>"])), this.onSearchChange.bind(this), w(d), i ? null : n, i ? null : c, i ? null : o.map((e => (0, a.dy)(Ho || (Ho = (0, r.Z)(["", ""])), e ? (0, a.dy)(Vo || (Vo = (0, r.Z)(['<wcm-wallet-button imageId="', '" name="', '" walletId="', '" .onClick="', '"></wcm-wallet-button>'])), e.image_id, e.name, e.id, (() => this.onConnect(e))) : null))), s ? (0, a.dy)(Fo || (Fo = (0, r.Z)(['<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>']))) : null, !s && this.loading ? (0, a.dy)(Yo || (Yo = (0, r.Z)(["<wcm-spinner></wcm-spinner>"]))) : null)
                }
            };
            Yi.styles = [or.globalCss, Ui], Fi([s()], Yi.prototype, "loading", 2), Fi([s()], Yi.prototype, "firstFetch", 2), Fi([s()], Yi.prototype, "search", 2), Fi([s()], Yi.prototype, "endReached", 2), Yi = Fi([i("wcm-wallet-explorer-view")], Yi);
            const qi = (0, a.iv)(qo || (qo = (0, r.Z)(["wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}"])));
            var Ki = Object.defineProperty,
                Qi = Object.getOwnPropertyDescriptor,
                Gi = (e, t, o, r) => {
                    for (var a, i = r > 1 ? void 0 : r ? Qi(t, o) : t, l = e.length - 1; l >= 0; l--)(a = e[l]) && (i = (r ? a(t, o, i) : a(i)) || i);
                    return r && i && Ki(t, o, i), i
                };
            let $i = class extends a.oi {
                constructor() {
                    super(), this.isError = !1, this.openWebWallet()
                }
                onFormatAndRedirect(e) {
                    const {
                        desktop: t,
                        name: o
                    } = g.zv.getWalletRouterData(), r = null === t || void 0 === t ? void 0 : t.universal;
                    if (r) {
                        const t = g.zv.formatUniversalUrl(r, e, o);
                        g.zv.openHref(t, "_blank")
                    }
                }
                openWebWallet() {
                    const {
                        walletConnectUri: e
                    } = g.OptionsCtrl.state, t = g.zv.getWalletRouterData();
                    jr.setRecentWallet(t), e && this.onFormatAndRedirect(e)
                }
                render() {
                    const {
                        name: e,
                        id: t,
                        image_id: o
                    } = g.zv.getWalletRouterData(), {
                        isMobile: i,
                        isDesktop: l
                    } = jr.getCachedRouterWalletPlatforms(), n = g.zv.isMobile();
                    return (0, a.dy)(Ko || (Ko = (0, r.Z)(['<wcm-modal-header title="', '" .onAction="', '" .actionIcon="', '"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="', '" imageId="', '" label="', '" .isError="', '"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">', '</wcm-text><wcm-platform-selection .isMobile="', '" .isDesktop="', '" .isRetry="', '"><wcm-button .onClick="', '" .iconRight="', '">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>'])), e, jr.handleUriCopy, vr.COPY_ICON, t, Ze(o), "Continue in ".concat(e, "..."), this.isError, "".concat(e, " web app has opened in a new tab. Go there, accept the connection, and come back"), i, !n && l, !0, this.openWebWallet.bind(this), vr.RETRY_ICON)
                }
            };
            $i.styles = [or.globalCss, qi], Gi([s()], $i.prototype, "isError", 2), $i = Gi([i("wcm-web-connecting-view")], $i)
        }
    }
]);