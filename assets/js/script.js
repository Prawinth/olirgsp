/*!
 * Bootstrap v5.3.0 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
  "use strict";
  const t = new Map,
      e = {
          set(e, i, n) {
              t.has(e) || t.set(e, new Map);
              const s = t.get(e);
              s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
          },
          get: (e, i) => t.has(e) && t.get(e).get(i) || null,
          remove(e, i) {
              if (!t.has(e)) return;
              const n = t.get(e);
              n.delete(i), 0 === n.size && t.delete(e)
          }
      },
      i = "transitionend",
      n = t => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, ((t, e) => `#${CSS.escape(e)}`))), t),
      s = t => {
          t.dispatchEvent(new Event(i))
      },
      o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
      r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null,
      a = t => {
          if (!o(t) || 0 === t.getClientRects().length) return !1;
          const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
              i = t.closest("details:not([open])");
          if (!i) return e;
          if (i !== t) {
              const e = t.closest("summary");
              if (e && e.parentNode !== i) return !1;
              if (null === e) return !1
          }
          return e
      },
      l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
      c = t => {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof t.getRootNode) {
              const e = t.getRootNode();
              return e instanceof ShadowRoot ? e : null
          }
          return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
      },
      h = () => {},
      d = t => {
          t.offsetHeight
      },
      u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
      f = [],
      p = () => "rtl" === document.documentElement.dir,
      m = t => {
          var e;
          e = () => {
              const e = u();
              if (e) {
                  const i = t.NAME,
                      n = e.fn[i];
                  e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
              }
          }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", (() => {
              for (const t of f) t()
          })), f.push(e)) : e()
      },
      g = (t, e = [], i = t) => "function" == typeof t ? t(...e) : i,
      _ = (t, e, n = !0) => {
          if (!n) return void g(t);
          const o = (t => {
              if (!t) return 0;
              let {
                  transitionDuration: e,
                  transitionDelay: i
              } = window.getComputedStyle(t);
              const n = Number.parseFloat(e),
                  s = Number.parseFloat(i);
              return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
          })(e) + 5;
          let r = !1;
          const a = ({
              target: n
          }) => {
              n === e && (r = !0, e.removeEventListener(i, a), g(t))
          };
          e.addEventListener(i, a), setTimeout((() => {
              r || s(e)
          }), o)
      },
      b = (t, e, i, n) => {
          const s = t.length;
          let o = t.indexOf(e);
          return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))])
      },
      v = /[^.]*(?=\..*)\.|.*/,
      y = /\..*/,
      w = /::\d+$/,
      A = {};
  let E = 1;
  const T = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
      },
      C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function O(t, e) {
      return e && `${e}::${E++}` || t.uidEvent || E++
  }

  function x(t) {
      const e = O(t);
      return t.uidEvent = e, A[e] = A[e] || {}, A[e]
  }

  function k(t, e, i = null) {
      return Object.values(t).find((t => t.callable === e && t.delegationSelector === i))
  }

  function L(t, e, i) {
      const n = "string" == typeof e,
          s = n ? i : e || i;
      let o = N(t);
      return C.has(o) || (o = t), [n, s, o]
  }

  function S(t, e, i, n, s) {
      if ("string" != typeof e || !t) return;
      let [o, r, a] = L(e, i, n);
      if (e in T) {
          const t = t => function(e) {
              if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
          };
          r = t(r)
      }
      const l = x(t),
          c = l[a] || (l[a] = {}),
          h = k(c, r, o ? i : null);
      if (h) return void(h.oneOff = h.oneOff && s);
      const d = O(r, e.replace(v, "")),
          u = o ? function(t, e, i) {
              return function n(s) {
                  const o = t.querySelectorAll(e);
                  for (let {
                          target: r
                      } = s; r && r !== this; r = r.parentNode)
                      for (const a of o)
                          if (a === r) return M(s, {
                              delegateTarget: r
                          }), n.oneOff && P.off(t, s.type, e, i), i.apply(r, [s])
              }
          }(t, i, r) : function(t, e) {
              return function i(n) {
                  return M(n, {
                      delegateTarget: t
                  }), i.oneOff && P.off(t, n.type, e), e.apply(t, [n])
              }
          }(t, r);
      u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
  }

  function D(t, e, i, n, s) {
      const o = k(e[i], n, s);
      o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
  }

  function I(t, e, i, n) {
      const s = e[i] || {};
      for (const [o, r] of Object.entries(s)) o.includes(n) && D(t, e, i, r.callable, r.delegationSelector)
  }

  function N(t) {
      return t = t.replace(y, ""), T[t] || t
  }
  const P = {
      on(t, e, i, n) {
          S(t, e, i, n, !1)
      },
      one(t, e, i, n) {
          S(t, e, i, n, !0)
      },
      off(t, e, i, n) {
          if ("string" != typeof e || !t) return;
          const [s, o, r] = L(e, i, n), a = r !== e, l = x(t), c = l[r] || {}, h = e.startsWith(".");
          if (void 0 === o) {
              if (h)
                  for (const i of Object.keys(l)) I(t, l, i, e.slice(1));
              for (const [i, n] of Object.entries(c)) {
                  const s = i.replace(w, "");
                  a && !e.includes(s) || D(t, l, r, n.callable, n.delegationSelector)
              }
          } else {
              if (!Object.keys(c).length) return;
              D(t, l, r, o, s ? i : null)
          }
      },
      trigger(t, e, i) {
          if ("string" != typeof e || !t) return null;
          const n = u();
          let s = null,
              o = !0,
              r = !0,
              a = !1;
          e !== N(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
          const l = M(new Event(e, {
              bubbles: o,
              cancelable: !0
          }), i);
          return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l
      }
  };

  function M(t, e = {}) {
      for (const [i, n] of Object.entries(e)) try {
          t[i] = n
      } catch (e) {
          Object.defineProperty(t, i, {
              configurable: !0,
              get: () => n
          })
      }
      return t
  }

  function j(t) {
      if ("true" === t) return !0;
      if ("false" === t) return !1;
      if (t === Number(t).toString()) return Number(t);
      if ("" === t || "null" === t) return null;
      if ("string" != typeof t) return t;
      try {
          return JSON.parse(decodeURIComponent(t))
      } catch (e) {
          return t
      }
  }

  function F(t) {
      return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
  }
  const H = {
      setDataAttribute(t, e, i) {
          t.setAttribute(`data-bs-${F(e)}`, i)
      },
      removeDataAttribute(t, e) {
          t.removeAttribute(`data-bs-${F(e)}`)
      },
      getDataAttributes(t) {
          if (!t) return {};
          const e = {},
              i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
          for (const n of i) {
              let i = n.replace(/^bs/, "");
              i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = j(t.dataset[n])
          }
          return e
      },
      getDataAttribute: (t, e) => j(t.getAttribute(`data-bs-${F(e)}`))
  };
  class $ {
      static get Default() {
          return {}
      }
      static get DefaultType() {
          return {}
      }
      static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!')
      }
      _getConfig(t) {
          return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
      }
      _configAfterMerge(t) {
          return t
      }
      _mergeConfigObj(t, e) {
          const i = o(e) ? H.getDataAttribute(e, "config") : {};
          return {
              ...this.constructor.Default,
              ..."object" == typeof i ? i : {},
              ...o(e) ? H.getDataAttributes(e) : {},
              ..."object" == typeof t ? t : {}
          }
      }
      _typeCheckConfig(t, e = this.constructor.DefaultType) {
          for (const [n, s] of Object.entries(e)) {
              const e = t[n],
                  r = o(e) ? "element" : null == (i = e) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
              if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)
          }
          var i
      }
  }
  class W extends $ {
      constructor(t, i) {
          super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(i), e.set(this._element, this.constructor.DATA_KEY, this))
      }
      dispose() {
          e.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
          for (const t of Object.getOwnPropertyNames(this)) this[t] = null
      }
      _queueCallback(t, e, i = !0) {
          _(t, e, i)
      }
      _getConfig(t) {
          return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
      }
      static getInstance(t) {
          return e.get(r(t), this.DATA_KEY)
      }
      static getOrCreateInstance(t, e = {}) {
          return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      }
      static get VERSION() {
          return "5.3.0"
      }
      static get DATA_KEY() {
          return `bs.${this.NAME}`
      }
      static get EVENT_KEY() {
          return `.${this.DATA_KEY}`
      }
      static eventName(t) {
          return `${t}${this.EVENT_KEY}`
      }
  }
  const B = t => {
          let e = t.getAttribute("data-bs-target");
          if (!e || "#" === e) {
              let i = t.getAttribute("href");
              if (!i || !i.includes("#") && !i.startsWith(".")) return null;
              i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
          }
          return n(e)
      },
      z = {
          find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
          findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
          children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
          parents(t, e) {
              const i = [];
              let n = t.parentNode.closest(e);
              for (; n;) i.push(n), n = n.parentNode.closest(e);
              return i
          },
          prev(t, e) {
              let i = t.previousElementSibling;
              for (; i;) {
                  if (i.matches(e)) return [i];
                  i = i.previousElementSibling
              }
              return []
          },
          next(t, e) {
              let i = t.nextElementSibling;
              for (; i;) {
                  if (i.matches(e)) return [i];
                  i = i.nextElementSibling
              }
              return []
          },
          focusableChildren(t) {
              const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(",");
              return this.find(e, t).filter((t => !l(t) && a(t)))
          },
          getSelectorFromElement(t) {
              const e = B(t);
              return e && z.findOne(e) ? e : null
          },
          getElementFromSelector(t) {
              const e = B(t);
              return e ? z.findOne(e) : null
          },
          getMultipleElementsFromSelector(t) {
              const e = B(t);
              return e ? z.find(e) : []
          }
      },
      R = (t, e = "hide") => {
          const i = `click.dismiss${t.EVENT_KEY}`,
              n = t.NAME;
          P.on(document, i, `[data-bs-dismiss="${n}"]`, (function(i) {
              if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
              const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
              t.getOrCreateInstance(s)[e]()
          }))
      };
  class q extends W {
      static get NAME() {
          return "alert"
      }
      close() {
          if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return;
          this._element.classList.remove("show");
          const t = this._element.classList.contains("fade");
          this._queueCallback((() => this._destroyElement()), this._element, t)
      }
      _destroyElement() {
          this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose()
      }
      static jQueryInterface(t) {
          return this.each((function() {
              const e = q.getOrCreateInstance(this);
              if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                  e[t](this)
              }
          }))
      }
  }
  R(q, "close"), m(q);
  const V = '[data-bs-toggle="button"]';
  class K extends W {
      static get NAME() {
          return "button"
      }
      toggle() {
          this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
      }
      static jQueryInterface(t) {
          return this.each((function() {
              const e = K.getOrCreateInstance(this);
              "toggle" === t && e[t]()
          }))
      }
  }
  P.on(document, "click.bs.button.data-api", V, (t => {
      t.preventDefault();
      const e = t.target.closest(V);
      K.getOrCreateInstance(e).toggle()
  })), m(K);
  const Q = {
          endCallback: null,
          leftCallback: null,
          rightCallback: null
      },
      X = {
          endCallback: "(function|null)",
          leftCallback: "(function|null)",
          rightCallback: "(function|null)"
      };
  class Y extends $ {
      constructor(t, e) {
          super(), this._element = t, t && Y.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
      }
      static get Default() {
          return Q
      }
      static get DefaultType() {
          return X
      }
      static get NAME() {
          return "swipe"
      }
      dispose() {
          P.off(this._element, ".bs.swipe")
      }
      _start(t) {
          this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
      }
      _end(t) {
          this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback)
      }
      _move(t) {
          this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
      }
      _handleSwipe() {
          const t = Math.abs(this._deltaX);
          if (t <= 40) return;
          const e = t / this._deltaX;
          this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback)
      }
      _initEvents() {
          this._supportPointerEvents ? (P.on(this._element, "pointerdown.bs.swipe", (t => this._start(t))), P.on(this._element, "pointerup.bs.swipe", (t => this._end(t))), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.swipe", (t => this._start(t))), P.on(this._element, "touchmove.bs.swipe", (t => this._move(t))), P.on(this._element, "touchend.bs.swipe", (t => this._end(t))))
      }
      _eventIsPointerPenTouch(t) {
          return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
      }
      static isSupported() {
          return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
      }
  }
  const U = "next",
      G = "prev",
      J = "left",
      Z = "right",
      tt = "slid.bs.carousel",
      et = "carousel",
      it = "active",
      nt = {
          ArrowLeft: Z,
          ArrowRight: J
      },
      st = {
          interval: 5e3,
          keyboard: !0,
          pause: "hover",
          ride: !1,
          touch: !0,
          wrap: !0
      },
      ot = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          pause: "(string|boolean)",
          ride: "(boolean|string)",
          touch: "boolean",
          wrap: "boolean"
      };
  class rt extends W {
      constructor(t, e) {
          super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === et && this.cycle()
      }
      static get Default() {
          return st
      }
      static get DefaultType() {
          return ot
      }
      static get NAME() {
          return "carousel"
      }
      next() {
          this._slide(U)
      }
      nextWhenVisible() {
          !document.hidden && a(this._element) && this.next()
      }
      prev() {
          this._slide(G)
      }
      pause() {
          this._isSliding && s(this._element), this._clearInterval()
      }
      cycle() {
          this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
      }
      _maybeEnableCycle() {
          this._config.ride && (this._isSliding ? P.one(this._element, tt, (() => this.cycle())) : this.cycle())
      }
      to(t) {
          const e = this._getItems();
          if (t > e.length - 1 || t < 0) return;
          if (this._isSliding) return void P.one(this._element, tt, (() => this.to(t)));
          const i = this._getItemIndex(this._getActive());
          if (i === t) return;
          const n = t > i ? U : G;
          this._slide(n, e[t])
      }
      dispose() {
          this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
      }
      _configAfterMerge(t) {
          return t.defaultInterval = t.interval, t
      }
      _addEventListeners() {
          this._config.keyboard && P.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", (() => this.pause())), P.on(this._element, "mouseleave.bs.carousel", (() => this._maybeEnableCycle()))), this._config.touch && Y.isSupported() && this._addTouchEventListeners()
      }
      _addTouchEventListeners() {
          for (const t of z.find(".carousel-item img", this._element)) P.on(t, "dragstart.bs.carousel", (t => t.preventDefault()));
          const t = {
              leftCallback: () => this._slide(this._directionToOrder(J)),
              rightCallback: () => this._slide(this._directionToOrder(Z)),
              endCallback: () => {
                  "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
              }
          };
          this._swipeHelper = new Y(this._element, t)
      }
      _keydown(t) {
          if (/input|textarea/i.test(t.target.tagName)) return;
          const e = nt[t.key];
          e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
      }
      _getItemIndex(t) {
          return this._getItems().indexOf(t)
      }
      _setActiveIndicatorElement(t) {
          if (!this._indicatorsElement) return;
          const e = z.findOne(".active", this._indicatorsElement);
          e.classList.remove(it), e.removeAttribute("aria-current");
          const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
          i && (i.classList.add(it), i.setAttribute("aria-current", "true"))
      }
      _updateInterval() {
          const t = this._activeElement || this._getActive();
          if (!t) return;
          const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
          this._config.interval = e || this._config.defaultInterval
      }
      _slide(t, e = null) {
          if (this._isSliding) return;
          const i = this._getActive(),
              n = t === U,
              s = e || b(this._getItems(), i, n, this._config.wrap);
          if (s === i) return;
          const o = this._getItemIndex(s),
              r = e => P.trigger(this._element, e, {
                  relatedTarget: s,
                  direction: this._orderToDirection(t),
                  from: this._getItemIndex(i),
                  to: o
              });
          if (r("slide.bs.carousel").defaultPrevented) return;
          if (!i || !s) return;
          const a = Boolean(this._interval);
          this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
          const l = n ? "carousel-item-start" : "carousel-item-end",
              c = n ? "carousel-item-next" : "carousel-item-prev";
          s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback((() => {
              s.classList.remove(l, c), s.classList.add(it), i.classList.remove(it, c, l), this._isSliding = !1, r(tt)
          }), i, this._isAnimated()), a && this.cycle()
      }
      _isAnimated() {
          return this._element.classList.contains("slide")
      }
      _getActive() {
          return z.findOne(".active.carousel-item", this._element)
      }
      _getItems() {
          return z.find(".carousel-item", this._element)
      }
      _clearInterval() {
          this._interval && (clearInterval(this._interval), this._interval = null)
      }
      _directionToOrder(t) {
          return p() ? t === J ? G : U : t === J ? U : G
      }
      _orderToDirection(t) {
          return p() ? t === G ? J : Z : t === G ? Z : J
      }
      static jQueryInterface(t) {
          return this.each((function() {
              const e = rt.getOrCreateInstance(this, t);
              if ("number" != typeof t) {
                  if ("string" == typeof t) {
                      if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                      e[t]()
                  }
              } else e.to(t)
          }))
      }
  }
  P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", (function(t) {
      const e = z.getElementFromSelector(this);
      if (!e || !e.classList.contains(et)) return;
      t.preventDefault();
      const i = rt.getOrCreateInstance(e),
          n = this.getAttribute("data-bs-slide-to");
      return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === H.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
  })), P.on(window, "load.bs.carousel.data-api", (() => {
      const t = z.find('[data-bs-ride="carousel"]');
      for (const e of t) rt.getOrCreateInstance(e)
  })), m(rt);
  const at = "show",
      lt = "collapse",
      ct = "collapsing",
      ht = '[data-bs-toggle="collapse"]',
      dt = {
          parent: null,
          toggle: !0
      },
      ut = {
          parent: "(null|element)",
          toggle: "boolean"
      };
  class ft extends W {
      constructor(t, e) {
          super(t, e), this._isTransitioning = !1, this._triggerArray = [];
          const i = z.find(ht);
          for (const t of i) {
              const e = z.getSelectorFromElement(t),
                  i = z.find(e).filter((t => t === this._element));
              null !== e && i.length && this._triggerArray.push(t)
          }
          this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
      }
      static get Default() {
          return dt
      }
      static get DefaultType() {
          return ut
      }
      static get NAME() {
          return "collapse"
      }
      toggle() {
          this._isShown() ? this.hide() : this.show()
      }
      show() {
          if (this._isTransitioning || this._isShown()) return;
          let t = [];
          if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => ft.getOrCreateInstance(t, {
                  toggle: !1
              })))), t.length && t[0]._isTransitioning) return;
          if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
          for (const e of t) e.hide();
          const e = this._getDimension();
          this._element.classList.remove(lt), this._element.classList.add(ct), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
          const i = `scroll${e[0].toUpperCase()+e.slice(1)}`;
          this._queueCallback((() => {
              this._isTransitioning = !1, this._element.classList.remove(ct), this._element.classList.add(lt, at), this._element.style[e] = "", P.trigger(this._element, "shown.bs.collapse")
          }), this._element, !0), this._element.style[e] = `${this._element[i]}px`
      }
      hide() {
          if (this._isTransitioning || !this._isShown()) return;
          if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
          const t = this._getDimension();
          this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(ct), this._element.classList.remove(lt, at);
          for (const t of this._triggerArray) {
              const e = z.getElementFromSelector(t);
              e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
          }
          this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => {
              this._isTransitioning = !1, this._element.classList.remove(ct), this._element.classList.add(lt), P.trigger(this._element, "hidden.bs.collapse")
          }), this._element, !0)
      }
      _isShown(t = this._element) {
          return t.classList.contains(at)
      }
      _configAfterMerge(t) {
          return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t
      }
      _getDimension() {
          return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
      }
      _initializeChildren() {
          if (!this._config.parent) return;
          const t = this._getFirstLevelChildren(ht);
          for (const e of t) {
              const t = z.getElementFromSelector(e);
              t && this._addAriaAndCollapsedClass([e], this._isShown(t))
          }
      }
      _getFirstLevelChildren(t) {
          const e = z.find(":scope .collapse .collapse", this._config.parent);
          return z.find(t, this._config.parent).filter((t => !e.includes(t)))
      }
      _addAriaAndCollapsedClass(t, e) {
          if (t.length)
              for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e)
      }
      static jQueryInterface(t) {
          const e = {};
          return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function() {
              const i = ft.getOrCreateInstance(this, e);
              if ("string" == typeof t) {
                  if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                  i[t]()
              }
          }))
      }
  }
  P.on(document, "click.bs.collapse.data-api", ht, (function(t) {
      ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
      for (const t of z.getMultipleElementsFromSelector(this)) ft.getOrCreateInstance(t, {
          toggle: !1
      }).toggle()
  })), m(ft);
  var pt = "top",
      mt = "bottom",
      gt = "right",
      _t = "left",
      bt = "auto",
      vt = [pt, mt, gt, _t],
      yt = "start",
      wt = "end",
      At = "clippingParents",
      Et = "viewport",
      Tt = "popper",
      Ct = "reference",
      Ot = vt.reduce((function(t, e) {
          return t.concat([e + "-" + yt, e + "-" + wt])
      }), []),
      xt = [].concat(vt, [bt]).reduce((function(t, e) {
          return t.concat([e, e + "-" + yt, e + "-" + wt])
      }), []),
      kt = "beforeRead",
      Lt = "read",
      St = "afterRead",
      Dt = "beforeMain",
      It = "main",
      Nt = "afterMain",
      Pt = "beforeWrite",
      Mt = "write",
      jt = "afterWrite",
      Ft = [kt, Lt, St, Dt, It, Nt, Pt, Mt, jt];

  function Ht(t) {
      return t ? (t.nodeName || "").toLowerCase() : null
  }

  function $t(t) {
      if (null == t) return window;
      if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return e && e.defaultView || window
      }
      return t
  }

  function Wt(t) {
      return t instanceof $t(t).Element || t instanceof Element
  }

  function Bt(t) {
      return t instanceof $t(t).HTMLElement || t instanceof HTMLElement
  }

  function zt(t) {
      return "undefined" != typeof ShadowRoot && (t instanceof $t(t).ShadowRoot || t instanceof ShadowRoot)
  }
  const Rt = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function(t) {
          var e = t.state;
          Object.keys(e.elements).forEach((function(t) {
              var i = e.styles[t] || {},
                  n = e.attributes[t] || {},
                  s = e.elements[t];
              Bt(s) && Ht(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function(t) {
                  var e = n[t];
                  !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
              })))
          }))
      },
      effect: function(t) {
          var e = t.state,
              i = {
                  popper: {
                      position: e.options.strategy,
                      left: "0",
                      top: "0",
                      margin: "0"
                  },
                  arrow: {
                      position: "absolute"
                  },
                  reference: {}
              };
          return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
              function() {
                  Object.keys(e.elements).forEach((function(t) {
                      var n = e.elements[t],
                          s = e.attributes[t] || {},
                          o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                              return t[e] = "", t
                          }), {});
                      Bt(n) && Ht(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(t) {
                          n.removeAttribute(t)
                      })))
                  }))
              }
      },
      requires: ["computeStyles"]
  };

  function qt(t) {
      return t.split("-")[0]
  }
  var Vt = Math.max,
      Kt = Math.min,
      Qt = Math.round;

  function Xt() {
      var t = navigator.userAgentData;
      return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map((function(t) {
          return t.brand + "/" + t.version
      })).join(" ") : navigator.userAgent
  }

  function Yt() {
      return !/^((?!chrome|android).)*safari/i.test(Xt())
  }

  function Ut(t, e, i) {
      void 0 === e && (e = !1), void 0 === i && (i = !1);
      var n = t.getBoundingClientRect(),
          s = 1,
          o = 1;
      e && Bt(t) && (s = t.offsetWidth > 0 && Qt(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && Qt(n.height) / t.offsetHeight || 1);
      var r = (Wt(t) ? $t(t) : window).visualViewport,
          a = !Yt() && i,
          l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
          c = (n.top + (a && r ? r.offsetTop : 0)) / o,
          h = n.width / s,
          d = n.height / o;
      return {
          width: h,
          height: d,
          top: c,
          right: l + h,
          bottom: c + d,
          left: l,
          x: l,
          y: c
      }
  }

  function Gt(t) {
      var e = Ut(t),
          i = t.offsetWidth,
          n = t.offsetHeight;
      return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
          x: t.offsetLeft,
          y: t.offsetTop,
          width: i,
          height: n
      }
  }

  function Jt(t, e) {
      var i = e.getRootNode && e.getRootNode();
      if (t.contains(e)) return !0;
      if (i && zt(i)) {
          var n = e;
          do {
              if (n && t.isSameNode(n)) return !0;
              n = n.parentNode || n.host
          } while (n)
      }
      return !1
  }

  function Zt(t) {
      return $t(t).getComputedStyle(t)
  }

  function te(t) {
      return ["table", "td", "th"].indexOf(Ht(t)) >= 0
  }

  function ee(t) {
      return ((Wt(t) ? t.ownerDocument : t.document) || window.document).documentElement
  }

  function ie(t) {
      return "html" === Ht(t) ? t : t.assignedSlot || t.parentNode || (zt(t) ? t.host : null) || ee(t)
  }

  function ne(t) {
      return Bt(t) && "fixed" !== Zt(t).position ? t.offsetParent : null
  }

  function se(t) {
      for (var e = $t(t), i = ne(t); i && te(i) && "static" === Zt(i).position;) i = ne(i);
      return i && ("html" === Ht(i) || "body" === Ht(i) && "static" === Zt(i).position) ? e : i || function(t) {
          var e = /firefox/i.test(Xt());
          if (/Trident/i.test(Xt()) && Bt(t) && "fixed" === Zt(t).position) return null;
          var i = ie(t);
          for (zt(i) && (i = i.host); Bt(i) && ["html", "body"].indexOf(Ht(i)) < 0;) {
              var n = Zt(i);
              if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
              i = i.parentNode
          }
          return null
      }(t) || e
  }

  function oe(t) {
      return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
  }

  function re(t, e, i) {
      return Vt(t, Kt(e, i))
  }

  function ae(t) {
      return Object.assign({}, {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
      }, t)
  }

  function le(t, e) {
      return e.reduce((function(e, i) {
          return e[i] = t, e
      }), {})
  }
  const ce = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function(t) {
          var e, i = t.state,
              n = t.name,
              s = t.options,
              o = i.elements.arrow,
              r = i.modifiersData.popperOffsets,
              a = qt(i.placement),
              l = oe(a),
              c = [_t, gt].indexOf(a) >= 0 ? "height" : "width";
          if (o && r) {
              var h = function(t, e) {
                      return ae("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                          placement: e.placement
                      })) : t) ? t : le(t, vt))
                  }(s.padding, i),
                  d = Gt(o),
                  u = "y" === l ? pt : _t,
                  f = "y" === l ? mt : gt,
                  p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                  m = r[l] - i.rects.reference[l],
                  g = se(o),
                  _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                  b = p / 2 - m / 2,
                  v = h[u],
                  y = _ - d[c] - h[f],
                  w = _ / 2 - d[c] / 2 + b,
                  A = re(v, w, y),
                  E = l;
              i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e)
          }
      },
      effect: function(t) {
          var e = t.state,
              i = t.options.element,
              n = void 0 === i ? "[data-popper-arrow]" : i;
          null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Jt(e.elements.popper, n) && (e.elements.arrow = n)
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
  };

  function he(t) {
      return t.split("-")[1]
  }
  var de = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
  };

  function ue(t) {
      var e, i = t.popper,
          n = t.popperRect,
          s = t.placement,
          o = t.variation,
          r = t.offsets,
          a = t.position,
          l = t.gpuAcceleration,
          c = t.adaptive,
          h = t.roundOffsets,
          d = t.isFixed,
          u = r.x,
          f = void 0 === u ? 0 : u,
          p = r.y,
          m = void 0 === p ? 0 : p,
          g = "function" == typeof h ? h({
              x: f,
              y: m
          }) : {
              x: f,
              y: m
          };
      f = g.x, m = g.y;
      var _ = r.hasOwnProperty("x"),
          b = r.hasOwnProperty("y"),
          v = _t,
          y = pt,
          w = window;
      if (c) {
          var A = se(i),
              E = "clientHeight",
              T = "clientWidth";
          A === $t(i) && "static" !== Zt(A = ee(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === pt || (s === _t || s === gt) && o === wt) && (y = mt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== _t && (s !== pt && s !== mt || o !== wt) || (v = gt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1)
      }
      var C, O = Object.assign({
              position: a
          }, c && de),
          x = !0 === h ? function(t, e) {
              var i = t.x,
                  n = t.y,
                  s = e.devicePixelRatio || 1;
              return {
                  x: Qt(i * s) / s || 0,
                  y: Qt(n * s) / s || 0
              }
          }({
              x: f,
              y: m
          }, $t(i)) : {
              x: f,
              y: m
          };
      return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e))
  }
  const fe = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function(t) {
          var e = t.state,
              i = t.options,
              n = i.gpuAcceleration,
              s = void 0 === n || n,
              o = i.adaptive,
              r = void 0 === o || o,
              a = i.roundOffsets,
              l = void 0 === a || a,
              c = {
                  placement: qt(e.placement),
                  variation: he(e.placement),
                  popper: e.elements.popper,
                  popperRect: e.rects.popper,
                  gpuAcceleration: s,
                  isFixed: "fixed" === e.options.strategy
              };
          null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, ue(Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l
          })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, ue(Object.assign({}, c, {
              offsets: e.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: l
          })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-placement": e.placement
          })
      },
      data: {}
  };
  var pe = {
      passive: !0
  };
  const me = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function() {},
      effect: function(t) {
          var e = t.state,
              i = t.instance,
              n = t.options,
              s = n.scroll,
              o = void 0 === s || s,
              r = n.resize,
              a = void 0 === r || r,
              l = $t(e.elements.popper),
              c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
          return o && c.forEach((function(t) {
                  t.addEventListener("scroll", i.update, pe)
              })), a && l.addEventListener("resize", i.update, pe),
              function() {
                  o && c.forEach((function(t) {
                      t.removeEventListener("scroll", i.update, pe)
                  })), a && l.removeEventListener("resize", i.update, pe)
              }
      },
      data: {}
  };
  var ge = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
  };

  function _e(t) {
      return t.replace(/left|right|bottom|top/g, (function(t) {
          return ge[t]
      }))
  }
  var be = {
      start: "end",
      end: "start"
  };

  function ve(t) {
      return t.replace(/start|end/g, (function(t) {
          return be[t]
      }))
  }

  function ye(t) {
      var e = $t(t);
      return {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
      }
  }

  function we(t) {
      return Ut(ee(t)).left + ye(t).scrollLeft
  }

  function Ae(t) {
      var e = Zt(t),
          i = e.overflow,
          n = e.overflowX,
          s = e.overflowY;
      return /auto|scroll|overlay|hidden/.test(i + s + n)
  }

  function Ee(t) {
      return ["html", "body", "#document"].indexOf(Ht(t)) >= 0 ? t.ownerDocument.body : Bt(t) && Ae(t) ? t : Ee(ie(t))
  }

  function Te(t, e) {
      var i;
      void 0 === e && (e = []);
      var n = Ee(t),
          s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
          o = $t(n),
          r = s ? [o].concat(o.visualViewport || [], Ae(n) ? n : []) : n,
          a = e.concat(r);
      return s ? a : a.concat(Te(ie(r)))
  }

  function Ce(t) {
      return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height
      })
  }

  function Oe(t, e, i) {
      return e === Et ? Ce(function(t, e) {
          var i = $t(t),
              n = ee(t),
              s = i.visualViewport,
              o = n.clientWidth,
              r = n.clientHeight,
              a = 0,
              l = 0;
          if (s) {
              o = s.width, r = s.height;
              var c = Yt();
              (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop)
          }
          return {
              width: o,
              height: r,
              x: a + we(t),
              y: l
          }
      }(t, i)) : Wt(e) ? function(t, e) {
          var i = Ut(t, !1, "fixed" === e);
          return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i
      }(e, i) : Ce(function(t) {
          var e, i = ee(t),
              n = ye(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = Vt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
              r = Vt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
              a = -n.scrollLeft + we(t),
              l = -n.scrollTop;
          return "rtl" === Zt(s || i).direction && (a += Vt(i.clientWidth, s ? s.clientWidth : 0) - o), {
              width: o,
              height: r,
              x: a,
              y: l
          }
      }(ee(t)))
  }

  function xe(t) {
      var e, i = t.reference,
          n = t.element,
          s = t.placement,
          o = s ? qt(s) : null,
          r = s ? he(s) : null,
          a = i.x + i.width / 2 - n.width / 2,
          l = i.y + i.height / 2 - n.height / 2;
      switch (o) {
          case pt:
              e = {
                  x: a,
                  y: i.y - n.height
              };
              break;
          case mt:
              e = {
                  x: a,
                  y: i.y + i.height
              };
              break;
          case gt:
              e = {
                  x: i.x + i.width,
                  y: l
              };
              break;
          case _t:
              e = {
                  x: i.x - n.width,
                  y: l
              };
              break;
          default:
              e = {
                  x: i.x,
                  y: i.y
              }
      }
      var c = o ? oe(o) : null;
      if (null != c) {
          var h = "y" === c ? "height" : "width";
          switch (r) {
              case yt:
                  e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                  break;
              case wt:
                  e[c] = e[c] + (i[h] / 2 - n[h] / 2)
          }
      }
      return e
  }

  function ke(t, e) {
      void 0 === e && (e = {});
      var i = e,
          n = i.placement,
          s = void 0 === n ? t.placement : n,
          o = i.strategy,
          r = void 0 === o ? t.strategy : o,
          a = i.boundary,
          l = void 0 === a ? At : a,
          c = i.rootBoundary,
          h = void 0 === c ? Et : c,
          d = i.elementContext,
          u = void 0 === d ? Tt : d,
          f = i.altBoundary,
          p = void 0 !== f && f,
          m = i.padding,
          g = void 0 === m ? 0 : m,
          _ = ae("number" != typeof g ? g : le(g, vt)),
          b = u === Tt ? Ct : Tt,
          v = t.rects.popper,
          y = t.elements[p ? b : u],
          w = function(t, e, i, n) {
              var s = "clippingParents" === e ? function(t) {
                      var e = Te(ie(t)),
                          i = ["absolute", "fixed"].indexOf(Zt(t).position) >= 0 && Bt(t) ? se(t) : t;
                      return Wt(i) ? e.filter((function(t) {
                          return Wt(t) && Jt(t, i) && "body" !== Ht(t)
                      })) : []
                  }(t) : [].concat(e),
                  o = [].concat(s, [i]),
                  r = o[0],
                  a = o.reduce((function(e, i) {
                      var s = Oe(t, i, n);
                      return e.top = Vt(s.top, e.top), e.right = Kt(s.right, e.right), e.bottom = Kt(s.bottom, e.bottom), e.left = Vt(s.left, e.left), e
                  }), Oe(t, r, n));
              return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
          }(Wt(y) ? y : y.contextElement || ee(t.elements.popper), l, h, r),
          A = Ut(t.elements.reference),
          E = xe({
              reference: A,
              element: v,
              strategy: "absolute",
              placement: s
          }),
          T = Ce(Object.assign({}, v, E)),
          C = u === Tt ? T : A,
          O = {
              top: w.top - C.top + _.top,
              bottom: C.bottom - w.bottom + _.bottom,
              left: w.left - C.left + _.left,
              right: C.right - w.right + _.right
          },
          x = t.modifiersData.offset;
      if (u === Tt && x) {
          var k = x[s];
          Object.keys(O).forEach((function(t) {
              var e = [gt, mt].indexOf(t) >= 0 ? 1 : -1,
                  i = [pt, mt].indexOf(t) >= 0 ? "y" : "x";
              O[t] += k[i] * e
          }))
      }
      return O
  }

  function Le(t, e) {
      void 0 === e && (e = {});
      var i = e,
          n = i.placement,
          s = i.boundary,
          o = i.rootBoundary,
          r = i.padding,
          a = i.flipVariations,
          l = i.allowedAutoPlacements,
          c = void 0 === l ? xt : l,
          h = he(n),
          d = h ? a ? Ot : Ot.filter((function(t) {
              return he(t) === h
          })) : vt,
          u = d.filter((function(t) {
              return c.indexOf(t) >= 0
          }));
      0 === u.length && (u = d);
      var f = u.reduce((function(e, i) {
          return e[i] = ke(t, {
              placement: i,
              boundary: s,
              rootBoundary: o,
              padding: r
          })[qt(i)], e
      }), {});
      return Object.keys(f).sort((function(t, e) {
          return f[t] - f[e]
      }))
  }
  const Se = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function(t) {
          var e = t.state,
              i = t.options,
              n = t.name;
          if (!e.modifiersData[n]._skip) {
              for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = qt(g), b = l || (_ !== g && p ? function(t) {
                      if (qt(t) === bt) return [];
                      var e = _e(t);
                      return [ve(t), e, ve(e)]
                  }(g) : [_e(g)]), v = [g].concat(b).reduce((function(t, i) {
                      return t.concat(qt(i) === bt ? Le(e, {
                          placement: i,
                          boundary: h,
                          rootBoundary: d,
                          padding: c,
                          flipVariations: p,
                          allowedAutoPlacements: m
                      }) : i)
                  }), []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++) {
                  var O = v[C],
                      x = qt(O),
                      k = he(O) === yt,
                      L = [pt, mt].indexOf(x) >= 0,
                      S = L ? "width" : "height",
                      D = ke(e, {
                          placement: O,
                          boundary: h,
                          rootBoundary: d,
                          altBoundary: u,
                          padding: c
                      }),
                      I = L ? k ? gt : _t : k ? mt : pt;
                  y[S] > w[S] && (I = _e(I));
                  var N = _e(I),
                      P = [];
                  if (o && P.push(D[x] <= 0), a && P.push(D[I] <= 0, D[N] <= 0), P.every((function(t) {
                          return t
                      }))) {
                      T = O, E = !1;
                      break
                  }
                  A.set(O, P)
              }
              if (E)
                  for (var M = function(t) {
                          var e = v.find((function(e) {
                              var i = A.get(e);
                              if (i) return i.slice(0, t).every((function(t) {
                                  return t
                              }))
                          }));
                          if (e) return T = e, "break"
                      }, j = p ? 3 : 1; j > 0 && "break" !== M(j); j--);
              e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
          }
      },
      requiresIfExists: ["offset"],
      data: {
          _skip: !1
      }
  };

  function De(t, e, i) {
      return void 0 === i && (i = {
          x: 0,
          y: 0
      }), {
          top: t.top - e.height - i.y,
          right: t.right - e.width + i.x,
          bottom: t.bottom - e.height + i.y,
          left: t.left - e.width - i.x
      }
  }

  function Ie(t) {
      return [pt, gt, mt, _t].some((function(e) {
          return t[e] >= 0
      }))
  }
  const Ne = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function(t) {
              var e = t.state,
                  i = t.name,
                  n = e.rects.reference,
                  s = e.rects.popper,
                  o = e.modifiersData.preventOverflow,
                  r = ke(e, {
                      elementContext: "reference"
                  }),
                  a = ke(e, {
                      altBoundary: !0
                  }),
                  l = De(r, n),
                  c = De(a, s, o),
                  h = Ie(l),
                  d = Ie(c);
              e.modifiersData[i] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: h,
                  hasPopperEscaped: d
              }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                  "data-popper-reference-hidden": h,
                  "data-popper-escaped": d
              })
          }
      },
      Pe = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function(t) {
              var e = t.state,
                  i = t.options,
                  n = t.name,
                  s = i.offset,
                  o = void 0 === s ? [0, 0] : s,
                  r = xt.reduce((function(t, i) {
                      return t[i] = function(t, e, i) {
                          var n = qt(t),
                              s = [_t, pt].indexOf(n) >= 0 ? -1 : 1,
                              o = "function" == typeof i ? i(Object.assign({}, e, {
                                  placement: t
                              })) : i,
                              r = o[0],
                              a = o[1];
                          return r = r || 0, a = (a || 0) * s, [_t, gt].indexOf(n) >= 0 ? {
                              x: a,
                              y: r
                          } : {
                              x: r,
                              y: a
                          }
                      }(i, e.rects, o), t
                  }), {}),
                  a = r[e.placement],
                  l = a.x,
                  c = a.y;
              null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
          }
      },
      Me = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function(t) {
              var e = t.state,
                  i = t.name;
              e.modifiersData[i] = xe({
                  reference: e.rects.reference,
                  element: e.rects.popper,
                  strategy: "absolute",
                  placement: e.placement
              })
          },
          data: {}
      },
      je = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function(t) {
              var e = t.state,
                  i = t.options,
                  n = t.name,
                  s = i.mainAxis,
                  o = void 0 === s || s,
                  r = i.altAxis,
                  a = void 0 !== r && r,
                  l = i.boundary,
                  c = i.rootBoundary,
                  h = i.altBoundary,
                  d = i.padding,
                  u = i.tether,
                  f = void 0 === u || u,
                  p = i.tetherOffset,
                  m = void 0 === p ? 0 : p,
                  g = ke(e, {
                      boundary: l,
                      rootBoundary: c,
                      padding: d,
                      altBoundary: h
                  }),
                  _ = qt(e.placement),
                  b = he(e.placement),
                  v = !b,
                  y = oe(_),
                  w = "x" === y ? "y" : "x",
                  A = e.modifiersData.popperOffsets,
                  E = e.rects.reference,
                  T = e.rects.popper,
                  C = "function" == typeof m ? m(Object.assign({}, e.rects, {
                      placement: e.placement
                  })) : m,
                  O = "number" == typeof C ? {
                      mainAxis: C,
                      altAxis: C
                  } : Object.assign({
                      mainAxis: 0,
                      altAxis: 0
                  }, C),
                  x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                  k = {
                      x: 0,
                      y: 0
                  };
              if (A) {
                  if (o) {
                      var L, S = "y" === y ? pt : _t,
                          D = "y" === y ? mt : gt,
                          I = "y" === y ? "height" : "width",
                          N = A[y],
                          P = N + g[S],
                          M = N - g[D],
                          j = f ? -T[I] / 2 : 0,
                          F = b === yt ? E[I] : T[I],
                          H = b === yt ? -T[I] : -E[I],
                          $ = e.elements.arrow,
                          W = f && $ ? Gt($) : {
                              width: 0,
                              height: 0
                          },
                          B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0
                          },
                          z = B[S],
                          R = B[D],
                          q = re(0, E[I], W[I]),
                          V = v ? E[I] / 2 - j - q - z - O.mainAxis : F - q - z - O.mainAxis,
                          K = v ? -E[I] / 2 + j + q + R + O.mainAxis : H + q + R + O.mainAxis,
                          Q = e.elements.arrow && se(e.elements.arrow),
                          X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
                          Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
                          U = N + K - Y,
                          G = re(f ? Kt(P, N + V - Y - X) : P, N, f ? Vt(M, U) : M);
                      A[y] = G, k[y] = G - N
                  }
                  if (a) {
                      var J, Z = "x" === y ? pt : _t,
                          tt = "x" === y ? mt : gt,
                          et = A[w],
                          it = "y" === w ? "height" : "width",
                          nt = et + g[Z],
                          st = et - g[tt],
                          ot = -1 !== [pt, _t].indexOf(_),
                          rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
                          at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
                          lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
                          ct = f && ot ? function(t, e, i) {
                              var n = re(t, e, i);
                              return n > i ? i : n
                          }(at, et, lt) : re(f ? at : nt, et, f ? lt : st);
                      A[w] = ct, k[w] = ct - et
                  }
                  e.modifiersData[n] = k
              }
          },
          requiresIfExists: ["offset"]
      };

  function Fe(t, e, i) {
      void 0 === i && (i = !1);
      var n, s, o = Bt(e),
          r = Bt(e) && function(t) {
              var e = t.getBoundingClientRect(),
                  i = Qt(e.width) / t.offsetWidth || 1,
                  n = Qt(e.height) / t.offsetHeight || 1;
              return 1 !== i || 1 !== n
          }(e),
          a = ee(e),
          l = Ut(t, r, i),
          c = {
              scrollLeft: 0,
              scrollTop: 0
          },
          h = {
              x: 0,
              y: 0
          };
      return (o || !o && !i) && (("body" !== Ht(e) || Ae(a)) && (c = (n = e) !== $t(n) && Bt(n) ? {
          scrollLeft: (s = n).scrollLeft,
          scrollTop: s.scrollTop
      } : ye(n)), Bt(e) ? ((h = Ut(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = we(a))), {
          x: l.left + c.scrollLeft - h.x,
          y: l.top + c.scrollTop - h.y,
          width: l.width,
          height: l.height
      }
  }

  function He(t) {
      var e = new Map,
          i = new Set,
          n = [];

      function s(t) {
          i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
              if (!i.has(t)) {
                  var n = e.get(t);
                  n && s(n)
              }
          })), n.push(t)
      }
      return t.forEach((function(t) {
          e.set(t.name, t)
      })), t.forEach((function(t) {
          i.has(t.name) || s(t)
      })), n
  }
  var $e = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
  };

  function We() {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
      return !e.some((function(t) {
          return !(t && "function" == typeof t.getBoundingClientRect)
      }))
  }

  function Be(t) {
      void 0 === t && (t = {});
      var e = t,
          i = e.defaultModifiers,
          n = void 0 === i ? [] : i,
          s = e.defaultOptions,
          o = void 0 === s ? $e : s;
      return function(t, e, i) {
          void 0 === i && (i = o);
          var s, r, a = {
                  placement: "bottom",
                  orderedModifiers: [],
                  options: Object.assign({}, $e, o),
                  modifiersData: {},
                  elements: {
                      reference: t,
                      popper: e
                  },
                  attributes: {},
                  styles: {}
              },
              l = [],
              c = !1,
              h = {
                  state: a,
                  setOptions: function(i) {
                      var s = "function" == typeof i ? i(a.options) : i;
                      d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                          reference: Wt(t) ? Te(t) : t.contextElement ? Te(t.contextElement) : [],
                          popper: Te(e)
                      };
                      var r, c, u = function(t) {
                          var e = He(t);
                          return Ft.reduce((function(t, i) {
                              return t.concat(e.filter((function(t) {
                                  return t.phase === i
                              })))
                          }), [])
                      }((r = [].concat(n, a.options.modifiers), c = r.reduce((function(t, e) {
                          var i = t[e.name];
                          return t[e.name] = i ? Object.assign({}, i, e, {
                              options: Object.assign({}, i.options, e.options),
                              data: Object.assign({}, i.data, e.data)
                          }) : e, t
                      }), {}), Object.keys(c).map((function(t) {
                          return c[t]
                      }))));
                      return a.orderedModifiers = u.filter((function(t) {
                          return t.enabled
                      })), a.orderedModifiers.forEach((function(t) {
                          var e = t.name,
                              i = t.options,
                              n = void 0 === i ? {} : i,
                              s = t.effect;
                          if ("function" == typeof s) {
                              var o = s({
                                  state: a,
                                  name: e,
                                  instance: h,
                                  options: n
                              });
                              l.push(o || function() {})
                          }
                      })), h.update()
                  },
                  forceUpdate: function() {
                      if (!c) {
                          var t = a.elements,
                              e = t.reference,
                              i = t.popper;
                          if (We(e, i)) {
                              a.rects = {
                                  reference: Fe(e, se(i), "fixed" === a.options.strategy),
                                  popper: Gt(i)
                              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
                                  return a.modifiersData[t.name] = Object.assign({}, t.data)
                              }));
                              for (var n = 0; n < a.orderedModifiers.length; n++)
                                  if (!0 !== a.reset) {
                                      var s = a.orderedModifiers[n],
                                          o = s.fn,
                                          r = s.options,
                                          l = void 0 === r ? {} : r,
                                          d = s.name;
                                      "function" == typeof o && (a = o({
                                          state: a,
                                          options: l,
                                          name: d,
                                          instance: h
                                      }) || a)
                                  } else a.reset = !1, n = -1
                          }
                      }
                  },
                  update: (s = function() {
                      return new Promise((function(t) {
                          h.forceUpdate(), t(a)
                      }))
                  }, function() {
                      return r || (r = new Promise((function(t) {
                          Promise.resolve().then((function() {
                              r = void 0, t(s())
                          }))
                      }))), r
                  }),
                  destroy: function() {
                      d(), c = !0
                  }
              };
          if (!We(t, e)) return h;

          function d() {
              l.forEach((function(t) {
                  return t()
              })), l = []
          }
          return h.setOptions(i).then((function(t) {
              !c && i.onFirstUpdate && i.onFirstUpdate(t)
          })), h
      }
  }
  var ze = Be(),
      Re = Be({
          defaultModifiers: [me, Me, fe, Rt]
      }),
      qe = Be({
          defaultModifiers: [me, Me, fe, Rt, Pe, Se, je, ce, Ne]
      });
  const Ve = Object.freeze(Object.defineProperty({
          __proto__: null,
          afterMain: Nt,
          afterRead: St,
          afterWrite: jt,
          applyStyles: Rt,
          arrow: ce,
          auto: bt,
          basePlacements: vt,
          beforeMain: Dt,
          beforeRead: kt,
          beforeWrite: Pt,
          bottom: mt,
          clippingParents: At,
          computeStyles: fe,
          createPopper: qe,
          createPopperBase: ze,
          createPopperLite: Re,
          detectOverflow: ke,
          end: wt,
          eventListeners: me,
          flip: Se,
          hide: Ne,
          left: _t,
          main: It,
          modifierPhases: Ft,
          offset: Pe,
          placements: xt,
          popper: Tt,
          popperGenerator: Be,
          popperOffsets: Me,
          preventOverflow: je,
          read: Lt,
          reference: Ct,
          right: gt,
          start: yt,
          top: pt,
          variationPlacements: Ot,
          viewport: Et,
          write: Mt
      }, Symbol.toStringTag, {
          value: "Module"
      })),
      Ke = "dropdown",
      Qe = "ArrowUp",
      Xe = "ArrowDown",
      Ye = "click.bs.dropdown.data-api",
      Ue = "keydown.bs.dropdown.data-api",
      Ge = "show",
      Je = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      Ze = `${Je}.show`,
      ti = ".dropdown-menu",
      ei = p() ? "top-end" : "top-start",
      ii = p() ? "top-start" : "top-end",
      ni = p() ? "bottom-end" : "bottom-start",
      si = p() ? "bottom-start" : "bottom-end",
      oi = p() ? "left-start" : "right-start",
      ri = p() ? "right-start" : "left-start",
      ai = {
          autoClose: !0,
          boundary: "clippingParents",
          display: "dynamic",
          offset: [0, 2],
          popperConfig: null,
          reference: "toggle"
      },
      li = {
          autoClose: "(boolean|string)",
          boundary: "(string|element)",
          display: "string",
          offset: "(array|string|function)",
          popperConfig: "(null|object|function)",
          reference: "(string|element|object)"
      };
  class ci extends W {
      constructor(t, e) {
          super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, ti)[0] || z.prev(this._element, ti)[0] || z.findOne(ti, this._parent), this._inNavbar = this._detectNavbar()
      }
      static get Default() {
          return ai
      }
      static get DefaultType() {
          return li
      }
      static get NAME() {
          return Ke
      }
      toggle() {
          return this._isShown() ? this.hide() : this.show()
      }
      show() {
          if (l(this._element) || this._isShown()) return;
          const t = {
              relatedTarget: this._element
          };
          if (!P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
              if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                  for (const t of [].concat(...document.body.children)) P.on(t, "mouseover", h);
              this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ge), this._element.classList.add(Ge), P.trigger(this._element, "shown.bs.dropdown", t)
          }
      }
      hide() {
          if (l(this._element) || !this._isShown()) return;
          const t = {
              relatedTarget: this._element
          };
          this._completeHide(t)
      }
      dispose() {
          this._popper && this._popper.destroy(), super.dispose()
      }
      update() {
          this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
      }
      _completeHide(t) {
          if (!P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
              if ("ontouchstart" in document.documentElement)
                  for (const t of [].concat(...document.body.children)) P.off(t, "mouseover", h);
              this._popper && this._popper.destroy(), this._menu.classList.remove(Ge), this._element.classList.remove(Ge), this._element.setAttribute("aria-expanded", "false"), H.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t)
          }
      }
      _getConfig(t) {
          if ("object" == typeof(t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ke.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
          return t
      }
      _createPopper() {
          if (void 0 === Ve) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
          let t = this._element;
          "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
          const e = this._getPopperConfig();
          this._popper = qe(t, this._menu, e)
      }
      _isShown() {
          return this._menu.classList.contains(Ge)
      }
      _getPlacement() {
          const t = this._parent;
          if (t.classList.contains("dropend")) return oi;
          if (t.classList.contains("dropstart")) return ri;
          if (t.classList.contains("dropup-center")) return "top";
          if (t.classList.contains("dropdown-center")) return "bottom";
          const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
          return t.classList.contains("dropup") ? e ? ii : ei : e ? si : ni
      }
      _detectNavbar() {
          return null !== this._element.closest(".navbar")
      }
      _getOffset() {
          const {
              offset: t
          } = this._config;
          return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
      }
      _getPopperConfig() {
          const t = {
              placement: this._getPlacement(),
              modifiers: [{
                  name: "preventOverflow",
                  options: {
                      boundary: this._config.boundary
                  }
              }, {
                  name: "offset",
                  options: {
                      offset: this._getOffset()
                  }
              }]
          };
          return (this._inNavbar || "static" === this._config.display) && (H.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
              name: "applyStyles",
              enabled: !1
          }]), {
              ...t,
              ...g(this._config.popperConfig, [t])
          }
      }
      _selectMenuItem({
          key: t,
          target: e
      }) {
          const i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => a(t)));
          i.length && b(i, e, t === Xe, !i.includes(e)).focus()
      }
      static jQueryInterface(t) {
          return this.each((function() {
              const e = ci.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                  e[t]()
              }
          }))
      }
      static clearMenus(t) {
          if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
          const e = z.find(Ze);
          for (const i of e) {
              const e = ci.getInstance(i);
              if (!e || !1 === e._config.autoClose) continue;
              const n = t.composedPath(),
                  s = n.includes(e._menu);
              if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
              if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
              const o = {
                  relatedTarget: e._element
              };
              "click" === t.type && (o.clickEvent = t), e._completeHide(o)
          }
      }
      static dataApiKeydownHandler(t) {
          const e = /input|textarea/i.test(t.target.tagName),
              i = "Escape" === t.key,
              n = [Qe, Xe].includes(t.key);
          if (!n && !i) return;
          if (e && !i) return;
          t.preventDefault();
          const s = this.matches(Je) ? this : z.prev(this, Je)[0] || z.next(this, Je)[0] || z.findOne(Je, t.delegateTarget.parentNode),
              o = ci.getOrCreateInstance(s);
          if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
          o._isShown() && (t.stopPropagation(), o.hide(), s.focus())
      }
  }
  P.on(document, Ue, Je, ci.dataApiKeydownHandler), P.on(document, Ue, ti, ci.dataApiKeydownHandler), P.on(document, Ye, ci.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", ci.clearMenus), P.on(document, Ye, Je, (function(t) {
      t.preventDefault(), ci.getOrCreateInstance(this).toggle()
  })), m(ci);
  const hi = "show",
      di = "mousedown.bs.backdrop",
      ui = {
          className: "modal-backdrop",
          clickCallback: null,
          isAnimated: !1,
          isVisible: !0,
          rootElement: "body"
      },
      fi = {
          className: "string",
          clickCallback: "(function|null)",
          isAnimated: "boolean",
          isVisible: "boolean",
          rootElement: "(element|string)"
      };
  class pi extends $ {
      constructor(t) {
          super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
      }
      static get Default() {
          return ui
      }
      static get DefaultType() {
          return fi
      }
      static get NAME() {
          return "backdrop"
      }
      show(t) {
          if (!this._config.isVisible) return void g(t);
          this._append();
          const e = this._getElement();
          this._config.isAnimated && d(e), e.classList.add(hi), this._emulateAnimation((() => {
              g(t)
          }))
      }
      hide(t) {
          this._config.isVisible ? (this._getElement().classList.remove(hi), this._emulateAnimation((() => {
              this.dispose(), g(t)
          }))) : g(t)
      }
      dispose() {
          this._isAppended && (P.off(this._element, di), this._element.remove(), this._isAppended = !1)
      }
      _getElement() {
          if (!this._element) {
              const t = document.createElement("div");
              t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
          }
          return this._element
      }
      _configAfterMerge(t) {
          return t.rootElement = r(t.rootElement), t
      }
      _append() {
          if (this._isAppended) return;
          const t = this._getElement();
          this._config.rootElement.append(t), P.on(t, di, (() => {
              g(this._config.clickCallback)
          })), this._isAppended = !0
      }
      _emulateAnimation(t) {
          _(t, this._getElement(), this._config.isAnimated)
      }
  }
  const mi = ".bs.focustrap",
      gi = "backward",
      _i = {
          autofocus: !0,
          trapElement: null
      },
      bi = {
          autofocus: "boolean",
          trapElement: "element"
      };
  class vi extends $ {
      constructor(t) {
          super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
      }
      static get Default() {
          return _i
      }
      static get DefaultType() {
          return bi
      }
      static get NAME() {
          return "focustrap"
      }
      activate() {
          this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, mi), P.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), P.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0)
      }
      deactivate() {
          this._isActive && (this._isActive = !1, P.off(document, mi))
      }
      _handleFocusin(t) {
          const {
              trapElement: e
          } = this._config;
          if (t.target === document || t.target === e || e.contains(t.target)) return;
          const i = z.focusableChildren(e);
          0 === i.length ? e.focus() : this._lastTabNavDirection === gi ? i[i.length - 1].focus() : i[0].focus()
      }
      _handleKeydown(t) {
          "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? gi : "forward")
      }
  }
  const yi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      wi = ".sticky-top",
      Ai = "padding-right",
      Ei = "margin-right";
  class Ti {
      constructor() {
          this._element = document.body
      }
      getWidth() {
          const t = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - t)
      }
      hide() {
          const t = this.getWidth();
          this._disableOverFlow(), this._setElementAttributes(this._element, Ai, (e => e + t)), this._setElementAttributes(yi, Ai, (e => e + t)), this._setElementAttributes(wi, Ei, (e => e - t))
      }
      reset() {
          this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ai), this._resetElementAttributes(yi, Ai), this._resetElementAttributes(wi, Ei)
      }
      isOverflowing() {
          return this.getWidth() > 0
      }
      _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
      }
      _setElementAttributes(t, e, i) {
          const n = this.getWidth();
          this._applyManipulationCallback(t, (t => {
              if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
              this._saveInitialAttribute(t, e);
              const s = window.getComputedStyle(t).getPropertyValue(e);
              t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
          }))
      }
      _saveInitialAttribute(t, e) {
          const i = t.style.getPropertyValue(e);
          i && H.setDataAttribute(t, e, i)
      }
      _resetElementAttributes(t, e) {
          this._applyManipulationCallback(t, (t => {
              const i = H.getDataAttribute(t, e);
              null !== i ? (H.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e)
          }))
      }
      _applyManipulationCallback(t, e) {
          if (o(t)) e(t);
          else
              for (const i of z.find(t, this._element)) e(i)
      }
  }
  const Ci = ".bs.modal",
      Oi = "hidden.bs.modal",
      xi = "show.bs.modal",
      ki = "modal-open",
      Li = "show",
      Si = "modal-static",
      Di = {
          backdrop: !0,
          focus: !0,
          keyboard: !0
      },
      Ii = {
          backdrop: "(boolean|string)",
          focus: "boolean",
          keyboard: "boolean"
      };
  class Ni extends W {
      constructor(t, e) {
          super(t, e), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Ti, this._addEventListeners()
      }
      static get Default() {
          return Di
      }
      static get DefaultType() {
          return Ii
      }
      static get NAME() {
          return "modal"
      }
      toggle(t) {
          return this._isShown ? this.hide() : this.show(t)
      }
      show(t) {
          this._isShown || this._isTransitioning || P.trigger(this._element, xi, {
              relatedTarget: t
          }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(ki), this._adjustDialog(), this._backdrop.show((() => this._showElement(t))))
      }
      hide() {
          this._isShown && !this._isTransitioning && (P.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Li), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated())))
      }
      dispose() {
          P.off(window, Ci), P.off(this._dialog, Ci), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
      }
      handleUpdate() {
          this._adjustDialog()
      }
      _initializeBackDrop() {
          return new pi({
              isVisible: Boolean(this._config.backdrop),
              isAnimated: this._isAnimated()
          })
      }
      _initializeFocusTrap() {
          return new vi({
              trapElement: this._element
          })
      }
      _showElement(t) {
          document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
          const e = z.findOne(".modal-body", this._dialog);
          e && (e.scrollTop = 0), d(this._element), this._element.classList.add(Li), this._queueCallback((() => {
              this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, P.trigger(this._element, "shown.bs.modal", {
                  relatedTarget: t
              })
          }), this._dialog, this._isAnimated())
      }
      _addEventListeners() {
          P.on(this._element, "keydown.dismiss.bs.modal", (t => {
              "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
          })), P.on(window, "resize.bs.modal", (() => {
              this._isShown && !this._isTransitioning && this._adjustDialog()
          })), P.on(this._element, "mousedown.dismiss.bs.modal", (t => {
              P.one(this._element, "click.dismiss.bs.modal", (e => {
                  this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
              }))
          }))
      }
      _hideModal() {
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
              document.body.classList.remove(ki), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, Oi)
          }))
      }
      _isAnimated() {
          return this._element.classList.contains("fade")
      }
      _triggerBackdropTransition() {
          if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
          const t = this._element.scrollHeight > document.documentElement.clientHeight,
              e = this._element.style.overflowY;
          "hidden" === e || this._element.classList.contains(Si) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Si), this._queueCallback((() => {
              this._element.classList.remove(Si), this._queueCallback((() => {
                  this._element.style.overflowY = e
              }), this._dialog)
          }), this._dialog), this._element.focus())
      }
      _adjustDialog() {
          const t = this._element.scrollHeight > document.documentElement.clientHeight,
              e = this._scrollBar.getWidth(),
              i = e > 0;
          if (i && !t) {
              const t = p() ? "paddingLeft" : "paddingRight";
              this._element.style[t] = `${e}px`
          }
          if (!i && t) {
              const t = p() ? "paddingRight" : "paddingLeft";
              this._element.style[t] = `${e}px`
          }
      }
      _resetAdjustments() {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
      }
      static jQueryInterface(t, e) {
          return this.each((function() {
              const i = Ni.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                  i[t](e)
              }
          }))
      }
  }
  P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
      const e = z.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, xi, (t => {
          t.defaultPrevented || P.one(e, Oi, (() => {
              a(this) && this.focus()
          }))
      }));
      const i = z.findOne(".modal.show");
      i && Ni.getInstance(i).hide(), Ni.getOrCreateInstance(e).toggle(this)
  })), R(Ni), m(Ni);
  const Pi = "show",
      Mi = "showing",
      ji = "hiding",
      Fi = ".offcanvas.show",
      Hi = "hidePrevented.bs.offcanvas",
      $i = "hidden.bs.offcanvas",
      Wi = {
          backdrop: !0,
          keyboard: !0,
          scroll: !1
      },
      Bi = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          scroll: "boolean"
      };
  class zi extends W {
      constructor(t, e) {
          super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
      }
      static get Default() {
          return Wi
      }
      static get DefaultType() {
          return Bi
      }
      static get NAME() {
          return "offcanvas"
      }
      toggle(t) {
          return this._isShown ? this.hide() : this.show(t)
      }
      show(t) {
          this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
              relatedTarget: t
          }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new Ti).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Mi), this._queueCallback((() => {
              this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Pi), this._element.classList.remove(Mi), P.trigger(this._element, "shown.bs.offcanvas", {
                  relatedTarget: t
              })
          }), this._element, !0))
      }
      hide() {
          this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(ji), this._backdrop.hide(), this._queueCallback((() => {
              this._element.classList.remove(Pi, ji), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new Ti).reset(), P.trigger(this._element, $i)
          }), this._element, !0)))
      }
      dispose() {
          this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
      }
      _initializeBackDrop() {
          const t = Boolean(this._config.backdrop);
          return new pi({
              className: "offcanvas-backdrop",
              isVisible: t,
              isAnimated: !0,
              rootElement: this._element.parentNode,
              clickCallback: t ? () => {
                  "static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, Hi)
              } : null
          })
      }
      _initializeFocusTrap() {
          return new vi({
              trapElement: this._element
          })
      }
      _addEventListeners() {
          P.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
              "Escape" === t.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, Hi))
          }))
      }
      static jQueryInterface(t) {
          return this.each((function() {
              const e = zi.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                  e[t](this)
              }
          }))
      }
  }
  P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
      const e = z.getElementFromSelector(this);
      if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
      P.one(e, $i, (() => {
          a(this) && this.focus()
      }));
      const i = z.findOne(Fi);
      i && i !== e && zi.getInstance(i).hide(), zi.getOrCreateInstance(e).toggle(this)
  })), P.on(window, "load.bs.offcanvas.data-api", (() => {
      for (const t of z.find(Fi)) zi.getOrCreateInstance(t).show()
  })), P.on(window, "resize.bs.offcanvas", (() => {
      for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && zi.getOrCreateInstance(t).hide()
  })), R(zi), m(zi);
  const Ri = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: []
      },
      qi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Vi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      Ki = (t, e) => {
          const i = t.nodeName.toLowerCase();
          return e.includes(i) ? !qi.has(i) || Boolean(Vi.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
      },
      Qi = {
          allowList: Ri,
          content: {},
          extraClass: "",
          html: !1,
          sanitize: !0,
          sanitizeFn: null,
          template: "<div></div>"
      },
      Xi = {
          allowList: "object",
          content: "object",
          extraClass: "(string|function)",
          html: "boolean",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          template: "string"
      },
      Yi = {
          entry: "(string|element|function|null)",
          selector: "(string|element)"
      };
  class Ui extends $ {
      constructor(t) {
          super(), this._config = this._getConfig(t)
      }
      static get Default() {
          return Qi
      }
      static get DefaultType() {
          return Xi
      }
      static get NAME() {
          return "TemplateFactory"
      }
      getContent() {
          return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean)
      }
      hasContent() {
          return this.getContent().length > 0
      }
      changeContent(t) {
          return this._checkContent(t), this._config.content = {
              ...this._config.content,
              ...t
          }, this
      }
      toHtml() {
          const t = document.createElement("div");
          t.innerHTML = this._maybeSanitize(this._config.template);
          for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
          const e = t.children[0],
              i = this._resolvePossibleFunction(this._config.extraClass);
          return i && e.classList.add(...i.split(" ")), e
      }
      _typeCheckConfig(t) {
          super._typeCheckConfig(t), this._checkContent(t.content)
      }
      _checkContent(t) {
          for (const [e, i] of Object.entries(t)) super._typeCheckConfig({
              selector: e,
              entry: i
          }, Yi)
      }
      _setContent(t, e, i) {
          const n = z.findOne(i, t);
          n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
      }
      _maybeSanitize(t) {
          return this._config.sanitize ? function(t, e, i) {
              if (!t.length) return t;
              if (i && "function" == typeof i) return i(t);
              const n = (new window.DOMParser).parseFromString(t, "text/html"),
                  s = [].concat(...n.body.querySelectorAll("*"));
              for (const t of s) {
                  const i = t.nodeName.toLowerCase();
                  if (!Object.keys(e).includes(i)) {
                      t.remove();
                      continue
                  }
                  const n = [].concat(...t.attributes),
                      s = [].concat(e["*"] || [], e[i] || []);
                  for (const e of n) Ki(e, s) || t.removeAttribute(e.nodeName)
              }
              return n.body.innerHTML
          }(t, this._config.allowList, this._config.sanitizeFn) : t
      }
      _resolvePossibleFunction(t) {
          return g(t, [this])
      }
      _putElementInTemplate(t, e) {
          if (this._config.html) return e.innerHTML = "", void e.append(t);
          e.textContent = t.textContent
      }
  }
  const Gi = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Ji = "fade",
      Zi = "show",
      tn = ".modal",
      en = "hide.bs.modal",
      nn = "hover",
      sn = "focus",
      on = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: p() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: p() ? "right" : "left"
      },
      rn = {
          allowList: Ri,
          animation: !0,
          boundary: "clippingParents",
          container: !1,
          customClass: "",
          delay: 0,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          html: !1,
          offset: [0, 6],
          placement: "top",
          popperConfig: null,
          sanitize: !0,
          sanitizeFn: null,
          selector: !1,
          template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          title: "",
          trigger: "hover focus"
      },
      an = {
          allowList: "object",
          animation: "boolean",
          boundary: "(string|element)",
          container: "(string|element|boolean)",
          customClass: "(string|function)",
          delay: "(number|object)",
          fallbackPlacements: "array",
          html: "boolean",
          offset: "(array|string|function)",
          placement: "(string|function)",
          popperConfig: "(null|object|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          selector: "(string|boolean)",
          template: "string",
          title: "(string|element|function)",
          trigger: "string"
      };
  class ln extends W {
      constructor(t, e) {
          if (void 0 === Ve) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
          super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
      }
      static get Default() {
          return rn
      }
      static get DefaultType() {
          return an
      }
      static get NAME() {
          return "tooltip"
      }
      enable() {
          this._isEnabled = !0
      }
      disable() {
          this._isEnabled = !1
      }
      toggleEnabled() {
          this._isEnabled = !this._isEnabled
      }
      toggle() {
          this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
      }
      dispose() {
          clearTimeout(this._timeout), P.off(this._element.closest(tn), en, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
      }
      show() {
          if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
          if (!this._isWithContent() || !this._isEnabled) return;
          const t = P.trigger(this._element, this.constructor.eventName("show")),
              e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
          if (t.defaultPrevented || !e) return;
          this._disposePopper();
          const i = this._getTipElement();
          this._element.setAttribute("aria-describedby", i.getAttribute("id"));
          const {
              container: n
          } = this._config;
          if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(Zi), "ontouchstart" in document.documentElement)
              for (const t of [].concat(...document.body.children)) P.on(t, "mouseover", h);
          this._queueCallback((() => {
              P.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
          }), this.tip, this._isAnimated())
      }
      hide() {
          if (this._isShown() && !P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
              if (this._getTipElement().classList.remove(Zi), "ontouchstart" in document.documentElement)
                  for (const t of [].concat(...document.body.children)) P.off(t, "mouseover", h);
              this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null, this._queueCallback((() => {
                  this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName("hidden")))
              }), this.tip, this._isAnimated())
          }
      }
      update() {
          this._popper && this._popper.update()
      }
      _isWithContent() {
          return Boolean(this._getTitle())
      }
      _getTipElement() {
          return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
      }
      _createTipElement(t) {
          const e = this._getTemplateFactory(t).toHtml();
          if (!e) return null;
          e.classList.remove(Ji, Zi), e.classList.add(`bs-${this.constructor.NAME}-auto`);
          const i = (t => {
              do {
                  t += Math.floor(1e6 * Math.random())
              } while (document.getElementById(t));
              return t
          })(this.constructor.NAME).toString();
          return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Ji), e
      }
      setContent(t) {
          this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
      }
      _getTemplateFactory(t) {
          return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Ui({
              ...this._config,
              content: t,
              extraClass: this._resolvePossibleFunction(this._config.customClass)
          }), this._templateFactory
      }
      _getContentForTemplate() {
          return {
              ".tooltip-inner": this._getTitle()
          }
      }
      _getTitle() {
          return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
      }
      _initializeOnDelegatedTarget(t) {
          return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
      }
      _isAnimated() {
          return this._config.animation || this.tip && this.tip.classList.contains(Ji)
      }
      _isShown() {
          return this.tip && this.tip.classList.contains(Zi)
      }
      _createPopper(t) {
          const e = g(this._config.placement, [this, t, this._element]),
              i = on[e.toUpperCase()];
          return qe(this._element, t, this._getPopperConfig(i))
      }
      _getOffset() {
          const {
              offset: t
          } = this._config;
          return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
      }
      _resolvePossibleFunction(t) {
          return g(t, [this._element])
      }
      _getPopperConfig(t) {
          const e = {
              placement: t,
              modifiers: [{
                  name: "flip",
                  options: {
                      fallbackPlacements: this._config.fallbackPlacements
                  }
              }, {
                  name: "offset",
                  options: {
                      offset: this._getOffset()
                  }
              }, {
                  name: "preventOverflow",
                  options: {
                      boundary: this._config.boundary
                  }
              }, {
                  name: "arrow",
                  options: {
                      element: `.${this.constructor.NAME}-arrow`
                  }
              }, {
                  name: "preSetPlacement",
                  enabled: !0,
                  phase: "beforeMain",
                  fn: t => {
                      this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                  }
              }]
          };
          return {
              ...e,
              ...g(this._config.popperConfig, [e])
          }
      }
      _setListeners() {
          const t = this._config.trigger.split(" ");
          for (const e of t)
              if ("click" === e) P.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => {
                  this._initializeOnDelegatedTarget(t).toggle()
              }));
              else if ("manual" !== e) {
              const t = e === nn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                  i = e === nn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
              P.on(this._element, t, this._config.selector, (t => {
                  const e = this._initializeOnDelegatedTarget(t);
                  e._activeTrigger["focusin" === t.type ? sn : nn] = !0, e._enter()
              })), P.on(this._element, i, this._config.selector, (t => {
                  const e = this._initializeOnDelegatedTarget(t);
                  e._activeTrigger["focusout" === t.type ? sn : nn] = e._element.contains(t.relatedTarget), e._leave()
              }))
          }
          this._hideModalHandler = () => {
              this._element && this.hide()
          }, P.on(this._element.closest(tn), en, this._hideModalHandler)
      }
      _fixTitle() {
          const t = this._element.getAttribute("title");
          t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"))
      }
      _enter() {
          this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
              this._isHovered && this.show()
          }), this._config.delay.show))
      }
      _leave() {
          this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
              this._isHovered || this.hide()
          }), this._config.delay.hide))
      }
      _setTimeout(t, e) {
          clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
      }
      _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0)
      }
      _getConfig(t) {
          const e = H.getDataAttributes(this._element);
          for (const t of Object.keys(e)) Gi.has(t) && delete e[t];
          return t = {
              ...e,
              ..."object" == typeof t && t ? t : {}
          }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
      }
      _configAfterMerge(t) {
          return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
              show: t.delay,
              hide: t.delay
          }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
      }
      _getDelegateConfig() {
          const t = {};
          for (const [e, i] of Object.entries(this._config)) this.constructor.Default[e] !== i && (t[e] = i);
          return t.selector = !1, t.trigger = "manual", t
      }
      _disposePopper() {
          this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
      }
      static jQueryInterface(t) {
          return this.each((function() {
              const e = ln.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                  e[t]()
              }
          }))
      }
  }
  m(ln);
  const cn = {
          ...ln.Default,
          content: "",
          offset: [0, 8],
          placement: "right",
          template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          trigger: "click"
      },
      hn = {
          ...ln.DefaultType,
          content: "(null|string|element|function)"
      };
  class dn extends ln {
      static get Default() {
          return cn
      }
      static get DefaultType() {
          return hn
      }
      static get NAME() {
          return "popover"
      }
      _isWithContent() {
          return this._getTitle() || this._getContent()
      }
      _getContentForTemplate() {
          return {
              ".popover-header": this._getTitle(),
              ".popover-body": this._getContent()
          }
      }
      _getContent() {
          return this._resolvePossibleFunction(this._config.content)
      }
      static jQueryInterface(t) {
          return this.each((function() {
              const e = dn.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                  e[t]()
              }
          }))
      }
  }
  m(dn);
  const un = "click.bs.scrollspy",
      fn = "active",
      pn = "[href]",
      mn = {
          offset: null,
          rootMargin: "0px 0px -25%",
          smoothScroll: !1,
          target: null,
          threshold: [.1, .5, 1]
      },
      gn = {
          offset: "(number|null)",
          rootMargin: "string",
          smoothScroll: "boolean",
          target: "element",
          threshold: "array"
      };
  class _n extends W {
      constructor(t, e) {
          super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
              visibleEntryTop: 0,
              parentScrollTop: 0
          }, this.refresh()
      }
      static get Default() {
          return mn
      }
      static get DefaultType() {
          return gn
      }
      static get NAME() {
          return "scrollspy"
      }
      refresh() {
          this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
          for (const t of this._observableSections.values()) this._observer.observe(t)
      }
      dispose() {
          this._observer.disconnect(), super.dispose()
      }
      _configAfterMerge(t) {
          return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t => Number.parseFloat(t)))), t
      }
      _maybeEnableSmoothScroll() {
          this._config.smoothScroll && (P.off(this._config.target, un), P.on(this._config.target, un, pn, (t => {
              const e = this._observableSections.get(t.target.hash);
              if (e) {
                  t.preventDefault();
                  const i = this._rootElement || window,
                      n = e.offsetTop - this._element.offsetTop;
                  if (i.scrollTo) return void i.scrollTo({
                      top: n,
                      behavior: "smooth"
                  });
                  i.scrollTop = n
              }
          })))
      }
      _getNewObserver() {
          const t = {
              root: this._rootElement,
              threshold: this._config.threshold,
              rootMargin: this._config.rootMargin
          };
          return new IntersectionObserver((t => this._observerCallback(t)), t)
      }
      _observerCallback(t) {
          const e = t => this._targetLinks.get(`#${t.target.id}`),
              i = t => {
                  this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
              },
              n = (this._rootElement || document.documentElement).scrollTop,
              s = n >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = n;
          for (const o of t) {
              if (!o.isIntersecting) {
                  this._activeTarget = null, this._clearActiveClass(e(o));
                  continue
              }
              const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
              if (s && t) {
                  if (i(o), !n) return
              } else s || t || i(o)
          }
      }
      _initializeTargetsAndObservables() {
          this._targetLinks = new Map, this._observableSections = new Map;
          const t = z.find(pn, this._config.target);
          for (const e of t) {
              if (!e.hash || l(e)) continue;
              const t = z.findOne(decodeURI(e.hash), this._element);
              a(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t))
          }
      }
      _process(t) {
          this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(fn), this._activateParents(t), P.trigger(this._element, "activate.bs.scrollspy", {
              relatedTarget: t
          }))
      }
      _activateParents(t) {
          if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(fn);
          else
              for (const e of z.parents(t, ".nav, .list-group"))
                  for (const t of z.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item")) t.classList.add(fn)
      }
      _clearActiveClass(t) {
          t.classList.remove(fn);
          const e = z.find("[href].active", t);
          for (const t of e) t.classList.remove(fn)
      }
      static jQueryInterface(t) {
          return this.each((function() {
              const e = _n.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                  e[t]()
              }
          }))
      }
  }
  P.on(window, "load.bs.scrollspy.data-api", (() => {
      for (const t of z.find('[data-bs-spy="scroll"]')) _n.getOrCreateInstance(t)
  })), m(_n);
  const bn = "ArrowLeft",
      vn = "ArrowRight",
      yn = "ArrowUp",
      wn = "ArrowDown",
      An = "active",
      En = "fade",
      Tn = "show",
      Cn = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      On = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Cn}`;
  class xn extends W {
      constructor(t) {
          super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, "keydown.bs.tab", (t => this._keydown(t))))
      }
      static get NAME() {
          return "tab"
      }
      show() {
          const t = this._element;
          if (this._elemIsActive(t)) return;
          const e = this._getActiveElem(),
              i = e ? P.trigger(e, "hide.bs.tab", {
                  relatedTarget: t
              }) : null;
          P.trigger(t, "show.bs.tab", {
              relatedTarget: e
          }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e))
      }
      _activate(t, e) {
          t && (t.classList.add(An), this._activate(z.getElementFromSelector(t)), this._queueCallback((() => {
              "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), P.trigger(t, "shown.bs.tab", {
                  relatedTarget: e
              })) : t.classList.add(Tn)
          }), t, t.classList.contains(En)))
      }
      _deactivate(t, e) {
          t && (t.classList.remove(An), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback((() => {
              "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), P.trigger(t, "hidden.bs.tab", {
                  relatedTarget: e
              })) : t.classList.remove(Tn)
          }), t, t.classList.contains(En)))
      }
      _keydown(t) {
          if (![bn, vn, yn, wn].includes(t.key)) return;
          t.stopPropagation(), t.preventDefault();
          const e = [vn, wn].includes(t.key),
              i = b(this._getChildren().filter((t => !l(t))), t.target, e, !0);
          i && (i.focus({
              preventScroll: !0
          }), xn.getOrCreateInstance(i).show())
      }
      _getChildren() {
          return z.find(On, this._parent)
      }
      _getActiveElem() {
          return this._getChildren().find((t => this._elemIsActive(t))) || null
      }
      _setInitialAttributes(t, e) {
          this._setAttributeIfNotExists(t, "role", "tablist");
          for (const t of e) this._setInitialAttributesOnChild(t)
      }
      _setInitialAttributesOnChild(t) {
          t = this._getInnerElement(t);
          const e = this._elemIsActive(t),
              i = this._getOuterElement(t);
          t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
      }
      _setInitialAttributesOnTargetPanel(t) {
          const e = z.getElementFromSelector(t);
          e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`))
      }
      _toggleDropDown(t, e) {
          const i = this._getOuterElement(t);
          if (!i.classList.contains("dropdown")) return;
          const n = (t, n) => {
              const s = z.findOne(t, i);
              s && s.classList.toggle(n, e)
          };
          n(".dropdown-toggle", An), n(".dropdown-menu", Tn), i.setAttribute("aria-expanded", e)
      }
      _setAttributeIfNotExists(t, e, i) {
          t.hasAttribute(e) || t.setAttribute(e, i)
      }
      _elemIsActive(t) {
          return t.classList.contains(An)
      }
      _getInnerElement(t) {
          return t.matches(On) ? t : z.findOne(On, t)
      }
      _getOuterElement(t) {
          return t.closest(".nav-item, .list-group-item") || t
      }
      static jQueryInterface(t) {
          return this.each((function() {
              const e = xn.getOrCreateInstance(this);
              if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                  e[t]()
              }
          }))
      }
  }
  P.on(document, "click.bs.tab", Cn, (function(t) {
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || xn.getOrCreateInstance(this).show()
  })), P.on(window, "load.bs.tab", (() => {
      for (const t of z.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) xn.getOrCreateInstance(t)
  })), m(xn);
  const kn = "hide",
      Ln = "show",
      Sn = "showing",
      Dn = {
          animation: "boolean",
          autohide: "boolean",
          delay: "number"
      },
      In = {
          animation: !0,
          autohide: !0,
          delay: 5e3
      };
  class Nn extends W {
      constructor(t, e) {
          super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
      }
      static get Default() {
          return In
      }
      static get DefaultType() {
          return Dn
      }
      static get NAME() {
          return "toast"
      }
      show() {
          P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(kn), d(this._element), this._element.classList.add(Ln, Sn), this._queueCallback((() => {
              this._element.classList.remove(Sn), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
          }), this._element, this._config.animation))
      }
      hide() {
          this.isShown() && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(Sn), this._queueCallback((() => {
              this._element.classList.add(kn), this._element.classList.remove(Sn, Ln), P.trigger(this._element, "hidden.bs.toast")
          }), this._element, this._config.animation)))
      }
      dispose() {
          this._clearTimeout(), this.isShown() && this._element.classList.remove(Ln), super.dispose()
      }
      isShown() {
          return this._element.classList.contains(Ln)
      }
      _maybeScheduleHide() {
          this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
              this.hide()
          }), this._config.delay)))
      }
      _onInteraction(t, e) {
          switch (t.type) {
              case "mouseover":
              case "mouseout":
                  this._hasMouseInteraction = e;
                  break;
              case "focusin":
              case "focusout":
                  this._hasKeyboardInteraction = e
          }
          if (e) return void this._clearTimeout();
          const i = t.relatedTarget;
          this._element === i || this._element.contains(i) || this._maybeScheduleHide()
      }
      _setListeners() {
          P.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), P.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), P.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), P.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1)))
      }
      _clearTimeout() {
          clearTimeout(this._timeout), this._timeout = null
      }
      static jQueryInterface(t) {
          return this.each((function() {
              const e = Nn.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                  e[t](this)
              }
          }))
      }
  }
  return R(Nn), m(Nn), {
      Alert: q,
      Button: K,
      Carousel: rt,
      Collapse: ft,
      Dropdown: ci,
      Modal: Ni,
      Offcanvas: zi,
      Popover: dn,
      ScrollSpy: _n,
      Tab: xn,
      Toast: Nn,
      Tooltip: ln
  }
}));
//# sourceMappingURL=bootstrap.bundle.min.js.map