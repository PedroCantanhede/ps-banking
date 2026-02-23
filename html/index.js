var ed = Object.defineProperty;
var id = (i, t, e) =>
  t in i
    ? ed(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (i[t] = e);
var dl = (i, t, e) => (id(i, typeof t != "symbol" ? t + "" : t, e), e);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = e(s);
    fetch(s.href, o);
  }
})();
function be() {}
const Kl = (i) => i;
function nd(i, t) {
  for (const e in t) i[e] = t[e];
  return i;
}
function Vc(i) {
  return i();
}
function Fa() {
  return Object.create(null);
}
function Ce(i) {
  i.forEach(Vc);
}
function Vo(i) {
  return typeof i == "function";
}
function ii(i, t) {
  return i != i
    ? t == t
    : i !== t || (i && typeof i == "object") || typeof i == "function";
}
function sd(i) {
  return Object.keys(i).length === 0;
}
function od(i, ...t) {
  if (i == null) {
    for (const n of t) n(void 0);
    return be;
  }
  const e = i.subscribe(...t);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function mt(i, t, e) {
  i.$$.on_destroy.push(od(t, e));
}
function ld(i, t, e, n) {
  if (i) {
    const s = Uc(i, t, e, n);
    return i[0](s);
  }
}
function Uc(i, t, e, n) {
  return i[1] && n ? nd(e.ctx.slice(), i[1](n(t))) : e.ctx;
}
function ad(i, t, e, n) {
  if (i[2] && n) {
    const s = i[2](n(e));
    if (t.dirty === void 0) return s;
    if (typeof s == "object") {
      const o = [],
        l = Math.max(t.dirty.length, s.length);
      for (let a = 0; a < l; a += 1) o[a] = t.dirty[a] | s[a];
      return o;
    }
    return t.dirty | s;
  }
  return t.dirty;
}
function rd(i, t, e, n, s, o) {
  if (s) {
    const l = Uc(t, e, n, o);
    i.p(l, s);
  }
}
function cd(i) {
  if (i.ctx.length > 32) {
    const t = [],
      e = i.ctx.length / 32;
    for (let n = 0; n < e; n++) t[n] = -1;
    return t;
  }
  return -1;
}
const Yc = typeof window < "u";
let Xc = Yc ? () => window.performance.now() : () => Date.now(),
  ql = Yc ? (i) => requestAnimationFrame(i) : be;
const ts = new Set();
function Kc(i) {
  (ts.forEach((t) => {
    t.c(i) || (ts.delete(t), t.f());
  }),
    ts.size !== 0 && ql(Kc));
}
function qc(i) {
  let t;
  return (
    ts.size === 0 && ql(Kc),
    {
      promise: new Promise((e) => {
        ts.add((t = { c: i, f: e }));
      }),
      abort() {
        ts.delete(t);
      },
    }
  );
}
const ud =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function c(i, t) {
  i.appendChild(t);
}
function Gc(i) {
  if (!i) return document;
  const t = i.getRootNode ? i.getRootNode() : i.ownerDocument;
  return t && t.host ? t : i.ownerDocument;
}
function dd(i) {
  const t = h("style");
  return ((t.textContent = "/* empty */"), fd(Gc(i), t), t.sheet);
}
function fd(i, t) {
  return (c(i.head || i, t), t.sheet);
}
function A(i, t, e) {
  i.insertBefore(t, e || null);
}
function M(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function ns(i, t) {
  for (let e = 0; e < i.length; e += 1) i[e] && i[e].d(t);
}
function h(i) {
  return document.createElement(i);
}
function v(i) {
  return document.createTextNode(i);
}
function x() {
  return v(" ");
}
function nn() {
  return v("");
}
function ft(i, t, e, n) {
  return (i.addEventListener(t, e, n), () => i.removeEventListener(t, e, n));
}
function f(i, t, e) {
  e == null
    ? i.removeAttribute(t)
    : i.getAttribute(t) !== e && i.setAttribute(t, e);
}
function Qc(i) {
  let t;
  return {
    p(...e) {
      ((t = e), t.forEach((n) => i.push(n)));
    },
    r() {
      t.forEach((e) => i.splice(i.indexOf(e), 1));
    },
  };
}
function ze(i) {
  return i === "" ? null : +i;
}
function hd(i) {
  return Array.from(i.childNodes);
}
function L(i, t) {
  ((t = "" + t), i.data !== t && (i.data = t));
}
function ce(i, t) {
  i.value = t ?? "";
}
function Ea(i, t, e) {
  for (let n = 0; n < i.options.length; n += 1) {
    const s = i.options[n];
    if (s.__value === t) {
      s.selected = !0;
      return;
    }
  }
  (!e || t !== void 0) && (i.selectedIndex = -1);
}
function pd(i) {
  const t = i.querySelector(":checked");
  return t && t.__value;
}
function md(i, t, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: t, bubbles: e, cancelable: n });
}
const Co = new Map();
let To = 0;
function _d(i) {
  let t = 5381,
    e = i.length;
  for (; e--; ) t = ((t << 5) - t) ^ i.charCodeAt(e);
  return t >>> 0;
}
function gd(i, t) {
  const e = { stylesheet: dd(t), rules: {} };
  return (Co.set(i, e), e);
}
function Zc(i, t, e, n, s, o, l, a = 0) {
  const r = 16.666 / n;
  let u = `{
`;
  for (let w = 0; w <= 1; w += r) {
    const y = t + (e - t) * o(w);
    u +=
      w * 100 +
      `%{${l(y, 1 - y)}}
`;
  }
  const d =
      u +
      `100% {${l(e, 1 - e)}}
}`,
    p = `__svelte_${_d(d)}_${a}`,
    m = Gc(i),
    { stylesheet: _, rules: g } = Co.get(m) || gd(m, i);
  g[p] ||
    ((g[p] = !0), _.insertRule(`@keyframes ${p} ${d}`, _.cssRules.length));
  const b = i.style.animation || "";
  return (
    (i.style.animation = `${b ? `${b}, ` : ""}${p} ${n}ms linear ${s}ms 1 both`),
    (To += 1),
    p
  );
}
function Dl(i, t) {
  const e = (i.style.animation || "").split(", "),
    n = e.filter(
      t ? (o) => o.indexOf(t) < 0 : (o) => o.indexOf("__svelte") === -1,
    ),
    s = e.length - n.length;
  s && ((i.style.animation = n.join(", ")), (To -= s), To || bd());
}
function bd() {
  ql(() => {
    To ||
      (Co.forEach((i) => {
        const { ownerNode: t } = i.stylesheet;
        t && M(t);
      }),
      Co.clear());
  });
}
let Rs;
function Ss(i) {
  Rs = i;
}
function Jc() {
  if (!Rs) throw new Error("Function called outside component initialization");
  return Rs;
}
function sn(i) {
  Jc().$$.on_mount.push(i);
}
function vd(i) {
  Jc().$$.on_destroy.push(i);
}
const Jn = [],
  Rl = [];
let es = [];
const Ia = [],
  yd = Promise.resolve();
let Ol = !1;
function wd() {
  Ol || ((Ol = !0), yd.then(tu));
}
function he(i) {
  es.push(i);
}
const fl = new Set();
let qn = 0;
function tu() {
  if (qn !== 0) return;
  const i = Rs;
  do {
    try {
      for (; qn < Jn.length; ) {
        const t = Jn[qn];
        (qn++, Ss(t), xd(t.$$));
      }
    } catch (t) {
      throw ((Jn.length = 0), (qn = 0), t);
    }
    for (Ss(null), Jn.length = 0, qn = 0; Rl.length; ) Rl.pop()();
    for (let t = 0; t < es.length; t += 1) {
      const e = es[t];
      fl.has(e) || (fl.add(e), e());
    }
    es.length = 0;
  } while (Jn.length);
  for (; Ia.length; ) Ia.pop()();
  ((Ol = !1), fl.clear(), Ss(i));
}
function xd(i) {
  if (i.fragment !== null) {
    (i.update(), Ce(i.before_update));
    const t = i.dirty;
    ((i.dirty = [-1]),
      i.fragment && i.fragment.p(i.ctx, t),
      i.after_update.forEach(he));
  }
}
function kd(i) {
  const t = [],
    e = [];
  (es.forEach((n) => (i.indexOf(n) === -1 ? t.push(n) : e.push(n))),
    e.forEach((n) => n()),
    (es = t));
}
let hs;
function eu() {
  return (
    hs ||
      ((hs = Promise.resolve()),
      hs.then(() => {
        hs = null;
      })),
    hs
  );
}
function Do(i, t, e) {
  i.dispatchEvent(md(`${t ? "intro" : "outro"}${e}`));
}
const So = new Set();
let fn;
function Ee() {
  fn = { r: 0, c: [], p: fn };
}
function Ie() {
  (fn.r || Ce(fn.c), (fn = fn.p));
}
function Mt(i, t) {
  i && i.i && (So.delete(i), i.i(t));
}
function Wt(i, t, e, n) {
  if (i && i.o) {
    if (So.has(i)) return;
    (So.add(i),
      fn.c.push(() => {
        (So.delete(i), n && (e && i.d(1), n()));
      }),
      i.o(t));
  } else n && n();
}
const iu = { duration: 0 };
function Te(i, t, e) {
  const n = { direction: "in" };
  let s = t(i, e, n),
    o = !1,
    l,
    a,
    r = 0;
  function u() {
    l && Dl(i, l);
  }
  function d() {
    const {
      delay: m = 0,
      duration: _ = 300,
      easing: g = Kl,
      tick: b = be,
      css: w,
    } = s || iu;
    (w && (l = Zc(i, 0, 1, _, m, g, w, r++)), b(0, 1));
    const y = Xc() + m,
      S = y + _;
    (a && a.abort(),
      (o = !0),
      he(() => Do(i, !0, "start")),
      (a = qc((k) => {
        if (o) {
          if (k >= S) return (b(1, 0), Do(i, !0, "end"), u(), (o = !1));
          if (k >= y) {
            const C = g((k - y) / _);
            b(C, 1 - C);
          }
        }
        return o;
      })));
  }
  let p = !1;
  return {
    start() {
      p || ((p = !0), Dl(i), Vo(s) ? ((s = s(n)), eu().then(d)) : d());
    },
    invalidate() {
      p = !1;
    },
    end() {
      o && (u(), (o = !1));
    },
  };
}
function De(i, t, e) {
  const n = { direction: "out" };
  let s = t(i, e, n),
    o = !0,
    l;
  const a = fn;
  a.r += 1;
  let r;
  function u() {
    const {
      delay: d = 0,
      duration: p = 300,
      easing: m = Kl,
      tick: _ = be,
      css: g,
    } = s || iu;
    g && (l = Zc(i, 1, 0, p, d, m, g));
    const b = Xc() + d,
      w = b + p;
    (he(() => Do(i, !1, "start")),
      "inert" in i && ((r = i.inert), (i.inert = !0)),
      qc((y) => {
        if (o) {
          if (y >= w) return (_(0, 1), Do(i, !1, "end"), --a.r || Ce(a.c), !1);
          if (y >= b) {
            const S = m((y - b) / p);
            _(1 - S, S);
          }
        }
        return o;
      }));
  }
  return (
    Vo(s)
      ? eu().then(() => {
          ((s = s(n)), u());
        })
      : u(),
    {
      end(d) {
        (d && "inert" in i && (i.inert = r),
          d && s.tick && s.tick(1, 0),
          o && (l && Dl(i, l), (o = !1)));
      },
    }
  );
}
function xe(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Md(i, t) {
  (i.d(1), t.delete(i.key));
}
function Uo(i, t) {
  Wt(i, 1, 1, () => {
    t.delete(i.key);
  });
}
function $s(i, t, e, n, s, o, l, a, r, u, d, p) {
  let m = i.length,
    _ = o.length,
    g = m;
  const b = {};
  for (; g--; ) b[i[g].key] = g;
  const w = [],
    y = new Map(),
    S = new Map(),
    k = [];
  for (g = _; g--; ) {
    const R = p(s, o, g),
      F = e(R);
    let D = l.get(F);
    (D ? n && k.push(() => D.p(R, t)) : ((D = u(F, R)), D.c()),
      y.set(F, (w[g] = D)),
      F in b && S.set(F, Math.abs(g - b[F])));
  }
  const C = new Set(),
    P = new Set();
  function T(R) {
    (Mt(R, 1), R.m(a, d), l.set(R.key, R), (d = R.first), _--);
  }
  for (; m && _; ) {
    const R = w[_ - 1],
      F = i[m - 1],
      D = R.key,
      I = F.key;
    R === F
      ? ((d = R.first), m--, _--)
      : y.has(I)
        ? !l.has(D) || C.has(D)
          ? T(R)
          : P.has(I)
            ? m--
            : S.get(D) > S.get(I)
              ? (P.add(D), T(R))
              : (C.add(I), m--)
        : (r(F, l), m--);
  }
  for (; m--; ) {
    const R = i[m];
    y.has(R.key) || r(R, l);
  }
  for (; _; ) T(w[_ - 1]);
  return (Ce(k), w);
}
function Ei(i) {
  i && i.c();
}
function ai(i, t, e) {
  const { fragment: n, after_update: s } = i.$$;
  (n && n.m(t, e),
    he(() => {
      const o = i.$$.on_mount.map(Vc).filter(Vo);
      (i.$$.on_destroy ? i.$$.on_destroy.push(...o) : Ce(o),
        (i.$$.on_mount = []));
    }),
    s.forEach(he));
}
function ri(i, t) {
  const e = i.$$;
  e.fragment !== null &&
    (kd(e.after_update),
    Ce(e.on_destroy),
    e.fragment && e.fragment.d(t),
    (e.on_destroy = e.fragment = null),
    (e.ctx = []));
}
function Sd(i, t) {
  (i.$$.dirty[0] === -1 && (Jn.push(i), wd(), i.$$.dirty.fill(0)),
    (i.$$.dirty[(t / 31) | 0] |= 1 << (t % 31)));
}
function ci(i, t, e, n, s, o, l = null, a = [-1]) {
  const r = Rs;
  Ss(i);
  const u = (i.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: be,
    not_equal: s,
    bound: Fa(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (r ? r.$$.context : [])),
    callbacks: Fa(),
    dirty: a,
    skip_bound: !1,
    root: t.target || r.$$.root,
  });
  l && l(u.root);
  let d = !1;
  if (
    ((u.ctx = e
      ? e(i, t.props || {}, (p, m, ..._) => {
          const g = _.length ? _[0] : m;
          return (
            u.ctx &&
              s(u.ctx[p], (u.ctx[p] = g)) &&
              (!u.skip_bound && u.bound[p] && u.bound[p](g), d && Sd(i, p)),
            m
          );
        })
      : []),
    u.update(),
    (d = !0),
    Ce(u.before_update),
    (u.fragment = n ? n(u.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const p = hd(t.target);
      (u.fragment && u.fragment.l(p), p.forEach(M));
    } else u.fragment && u.fragment.c();
    (t.intro && Mt(i.$$.fragment), ai(i, t.target, t.anchor), tu());
  }
  Ss(r);
}
class ui {
  constructor() {
    dl(this, "$$");
    dl(this, "$$set");
  }
  $destroy() {
    (ri(this, 1), (this.$destroy = be));
  }
  $on(t, e) {
    if (!Vo(e)) return be;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      n.push(e),
      () => {
        const s = n.indexOf(e);
        s !== -1 && n.splice(s, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !sd(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const Ad = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(Ad);
const ys = new Map(),
  Ld = (i) => {
    const { action: t, data: e } = i.data,
      n = ys.get(t);
    n && n.forEach((s) => s(e));
  };
window.addEventListener("message", Ld);
function hl(i, t) {
  const e = ys.get(i) || [];
  (e.push(t),
    ys.set(i, e),
    vd(() => {
      const n = ys.get(i) || [];
      ys.set(
        i,
        n.filter((s) => s !== t),
      );
    }));
}
const Gl = () => !window.invokeNative,
  nu = (i) => {
    if (i === "#00000000" || i === "transparent") return "43, 196, 47";
    const t = i.replace("#", "");
    if (t.length === 3) {
      const e = t
        .split("")
        .map((n) => n + n)
        .join("");
      return nu("#" + e);
    }
    if (t.length === 6) {
      const e = parseInt(t.substr(0, 2), 16),
        n = parseInt(t.substr(2, 2), 16),
        s = parseInt(t.substr(4, 2), 16);
      return isNaN(e) || isNaN(n) || isNaN(s)
        ? "43, 196, 47"
        : `${e}, ${n}, ${s}`;
    }
    return "43, 196, 47";
  },
  Pd = (i) => {
    const [t, e, n] = i.split(", ").map((T) => parseInt(T)),
      s = t / 255,
      o = e / 255,
      l = n / 255,
      a = Math.max(s, o, l),
      r = Math.min(s, o, l),
      u = a - r;
    let d = 0;
    (u !== 0 &&
      (a === s
        ? (d = ((o - l) / u + 6) % 6)
        : a === o
          ? (d = (l - s) / u + 2)
          : (d = (s - o) / u + 4)),
      (d /= 6));
    const p = (a + r) / 2,
      m = u === 0 ? 0 : u / (1 - Math.abs(2 * p - 1));
    d = (d + 30 / 360) % 1;
    const _ = (1 - Math.abs(2 * p - 1)) * m,
      g = _ * (1 - Math.abs(((d * 6) % 2) - 1)),
      b = p - _ / 2;
    let w, y, S;
    d < 1 / 6
      ? ([w, y, S] = [_, g, 0])
      : d < 2 / 6
        ? ([w, y, S] = [g, _, 0])
        : d < 3 / 6
          ? ([w, y, S] = [0, _, g])
          : d < 4 / 6
            ? ([w, y, S] = [0, g, _])
            : d < 5 / 6
              ? ([w, y, S] = [g, 0, _])
              : ([w, y, S] = [_, 0, g]);
    const k = Math.round((w + b) * 255),
      C = Math.round((y + b) * 255),
      P = Math.round((S + b) * 255);
    return `${k}, ${C}, ${P}`;
  },
  Cd = (i) => {
    const t = nu(i),
      e = Pd(t),
      n = document.documentElement;
    (n.style.setProperty("--primary-color", t),
      n.style.setProperty("--secondary-color", e));
  },
  Td = {
    atm: "ATM",
    cash: "Dinheiro",
    bank_balance: "Saldo Bancário",
    deposit_amount: "Quantia do Depósito",
    withdraw_amount: "Quantia do Saque",
    submit: "Enviar",
    close: "Fechar",
    overview: "Visão Geral",
    bills: "Despesas",
    history: "Histórico",
    withdraw: "Saque",
    deposit: "Depósito",
    stats: "Status",
    transactions: "Transações",
    transaction: "Transação",
    total: "Total",
    search_transactions: "Procurando transações...",
    description: "Descrição",
    type: "Tipo",
    time_ago: "Há quanto tempo",
    amount: "Quantia",
    date: "Data",
    pay_invoice: "Pagar Fatura",
    payment_completed: "Pagamento Concluído",
    from: "De",
    delete_all_transactions: "Excluir Todas as Transações",
    are_you_sure: "Tem certeza?",
    delete_confirmation:
      "Tem certeza que deseja excluir todas as suas transações? (Faça isso apenas se o menu travar!)",
    cancel: "Cancelar",
    confirm: "Confirmar",
    history_empty: "Seu histórico está vazio",
    all_history_deleted: "Você excluiu todo o seu histórico",
    error: "Erro",
    success: "Sucesso",
    new_cash: "Novo Dinheiro",
    withdraw_success: "Saque Realizado",
    withdraw_error: "Sua conta bancária não tem fundos suficientes",
    withdraw_button: "SACAR",
    new_bank: "Novo Saldo Bancário",
    current_cash: "Dinheiro Atual",
    deposit_success: "Depósito Realizado",
    deposit_error: "Você não tem dinheiro suficiente",
    deposit_button: "DEPOSITAR",
    total_balance: "Saldo Total",
    quick_actions: "Ações Rápidas",
    transfer_money: "Transferir Dinheiro",
    easy_transfer: "Transfira dinheiro facilmente para outras pessoas",
    transfer: "Transferir",
    pay_bills: "Pagar Despesas",
    pay_pending_bills: "Pague suas despesas pendentes rapidamente",
    pay: "Pagar",
    withdraw_all_money: "Sacar Tudo",
    withdraw_all_from_account: "Saque todo o dinheiro da sua conta",
    deposit_cash: "Depositar Dinheiro",
    deposit_all_cash: "Deposite todo o seu dinheiro na conta",
    weekly_summary: "Resumo Semanal",
    income: "Receitas",
    expenses: "Despesas",
    report: "Relatório",
    latest_transactions: "Últimas Transações",
    see_all: "VER TUDO",
    unpaid_bills: "Faturas Pendentes",
    no_unpaid_bills: "Sem faturas pendentes",
    confirm_pay_all_bills: "Tem certeza que deseja pagar todas as suas despesas?",
    pay_all_bills: "Pagar Todas as Despesas",
    pay_all_bills_success: "Você pagou todas as suas despesas!",
    pay_all_bills_error: "Você não tem despesas pendentes",
    payment_method: "Método de Pagamento",
    phone_number: "Número de Telefone",
    id: "ID",
    id_or_phone_number: "ID ou Número de Telefone",
    no_cash_on_you: "Você não tem dinheiro em mãos",
    deposit_all_success: "Todo o seu dinheiro foi depositado",
    no_money_on_account: "Sua conta está vazia",
    withdraw_all_success: "Você sacou todo o dinheiro da conta",
    invoices: "Faturas",
    statistics_reports: "Estatísticas e Relatórios",
    balance_trend: "Tendência de Saldo",
    balance: "Saldo",
    used: "Usado",
    month: "Mês",
    balance_dkk: "Saldo",
    withdrawn: "Você sacou",
    deposited: "Você depositou",
    no_transactions: "Sem transações recentes",
    transactions_trend: "Tendência de Transações",
    total_transactions: "Total de Transações",
    accounts: "Contas",
    account_number_copied: "Número da conta copiado",
    new_user_to_account: "Novo usuário na conta",
    server_id: "ID do Servidor",
    add_user: "Adicionar Usuário",
    new_account_name: "Novo Nome da Conta",
    new_name: "Novo Nome",
    rename: "Renomear",
    create_new_account: "Criar Nova Conta",
    account_holder: "Titular da Conta",
    initial_balance: "Saldo Inicial",
    create: "Criar",
    delete_account: "Excluir Conta",
    are_you_sure_you_want_to_delete_this_account:
      "Tem certeza que deseja excluir esta conta?",
    delete: "Excluir",
    remove_user_from_account: "Remover Usuário da Conta",
    select_user: "Selecionar Usuário",
    remove: "Remover",
    withdraw_from_account: "Sacar da Conta",
    deposit_to_account: "Depositar na Conta",
    removed_successfully: "Removido com Sucesso",
    select_account_and_user: "Por favor, selecione uma conta e um usuário",
    account_deleted_successfully: "Conta excluída com sucesso",
    new_account_created_successfully: "Nova conta criada com sucesso",
    withdrew: "Sacou",
    successfully: "Com sucesso",
    select_valid_account_and_amount: "Por favor, selecione uma conta válida e uma quantia",
    openBank: "Acessar Banco",
    openATM: "Acessar ATM",
    account_deletion_failed: "Falha ao excluir conta",
    withdrawal_failed: "Falha no saque",
    deposit_failed: "Falha no depósito",
    user_added_successfully: "Usuário adicionado com sucesso",
    user_addition_failed: "Falha ao adicionar usuário",
    new_account_creation_failed: "Falha ao criar nova conta",
    account_renamed_successfully: "Conta renomeada com sucesso",
    account_rename_failed: "Falha ao renomear conta",
    rename_account: "Alterar nome",
    no_framework_found: "Framework não encontrado",
    cannot_send_self_money: "Você não pode enviar dinheiro para si mesmo",
    money_sent: "Você enviou %s para %s",
    received_money: "Você recebeu %s de %s",
    no_money: "Você não tem dinheiro suficiente",
    user_not_in_city: "Usuário não está na cidade",
    transaction_description: "Transação",
    cannot_add_self: "Você não pode se adicionar",
    player_not_found: "Jogador não encontrado",
    target_player_not_found: "Jogador alvo não encontrado",
    user_already_in_account: "Usuário já está na conta",
    account_not_found: "Conta não encontrada",
    invalid_amount: "Quantia inválida",
    quick_management: "Gerenciamento Rápido",
    enter_amount: "Digite a quantia",
    enter_account_name: "Digite o nome da conta",
    enter_player_server_id: "Digite o ID do servidor do jogador (ex: 1, 2, 3...)",
    delete_all: "Excluir Tudo",
    view_complete_transaction_history: "Veja seu histórico completo de transações",
    transactions_count: "Transações",
    no_transactions_found: "Nenhuma Transação Encontrada",
    no_transactions_match_search: "Nenhuma transação corresponde à sua busca.",
    transaction_history_empty: "Seu histórico de transações está vazio.",
    received: "Recebido",
    sent: "Enviado",
    withdraw_money_from_account: "Saque dinheiro da sua conta bancária",
    withdraw_status: "Saque",
    you_will_receive: "Você receberá",
    deposit_cash_into_account: "Deposite dinheiro na sua conta bancária",
    deposit_status: "Depósito",
    cash_on_hand: "Dinheiro em Mãos",
    new_bank_balance: "Novo Saldo Bancário",
    depositing: "Depositando",
    please_enter_account_name: "Por favor, insira um nome para a conta",
    failed_get_user_info: "Falha ao obter informações do usuário",
    account_created_success: "Conta criada com sucesso!",
    failed_create_account: "Falha ao criar conta",
    account_deleted_success: "Conta excluída com sucesso!",
    failed_delete_account: "Falha ao excluir conta",
    banco: "Banco",
    failed_fetch_accounts: "Falha ao carregar contas",
    please_enter_valid_amount: "Por favor, insira uma quantia válida",
    deposited_successfully: "Depositado com sucesso!",
    insufficient_funds_deposit: "Saldo insuficiente ou falha no depósito",
    failed_deposit_account: "Falha ao depositar na conta",
    withdrew_successfully: "Saque realizado com sucesso!",
    insufficient_funds_account: "Saldo insuficiente na conta",
    failed_withdraw_account: "Falha ao sacar da conta",
    please_enter_valid_user_id: "Por favor, insira um ID de usuário válido",
    please_enter_valid_numeric_player_id:
      "Por favor, insira um ID numérico válido",
    added_to_account_successfully: "adicionado à conta com sucesso!",
    removed_from_account_successfully: "removido da conta com sucesso!",
    enter_server_id_instruction:
      "Digite o ID do servidor do jogador que deseja adicionar (o jogador deve estar online)",
    all: "Todos",
    all_time_summary: "Resumo Geral",
    unknown_account: "Conta Desconhecida",
    unknown: "Desconhecido",
    monthly_summary: "Resumo Mensal",
    net_change: "Variação Líquida",
    total_income: "Total de Receitas",
    total_expenses: "Total de Despesas",
    net_lifetime: "Saldo Acumulado",
    financial_statistics_analytics: "Suas estatísticas e análises financeiras",
    analytics: "Análises",
    financial_summary_quick_actions: "Seu resumo financeiro e ações rápidas",
    live: "Ao Vivo",
    manage_pending_bills_payments: "Gerencie suas despesas e pagamentos pendentes",
    no_bills_found: "Nenhuma Despesa Encontrada",
    no_bills_match_search: "Nenhuma despesa corresponde à sua busca.",
    no_pending_bills_moment: "Você não tem despesas pendentes no momento.",
    bills_count: "Despesas",
    paid: "Pago",
    manage_bank_accounts_savings: "Gerencie suas contas bancárias e poupanças",
    primary_account: "Conta Principal",
    main_checking_account: "Conta Corrente Principal",
    current_balance: "Saldo Atual",
    create_account: "Criar Conta",
    active: "Ativo",
    inactive: "Inativo",
    savings_account: "Conta Poupança",
    created: "Criado",
    owner_you: "Titular: Você",
    shared_account: "Conta Compartilhada",
    no_additional_accounts: "Sem Contas Adicionais",
    create_savings_business_account:
      "Crie uma conta poupança ou empresarial para começar",
    create_your_first_account: "Crie Sua Primeira Conta",
    account_name: "Nome da Conta",
    account_type: "Tipo de Conta",
    business_account: "Conta Empresarial",
    investment_account: "Conta de Investimento",
    deposit_money: "Depositar Dinheiro",
    amount_to_deposit: "Quantia a Depositar",
    available: "Disponível",
    add_user_to_account: "Adicionar Usuário à Conta",
    player_id: "ID do Jogador",
    withdraw_money: "Sacar Dinheiro",
    shared_with: "Compartilhado com",
    remove_user: "Remover Usuário",
    failed_remove_user: "Falha ao remover usuário da conta",
    failed_add_user: "Falha ao adicionar usuário na conta",
    failed_add_user_invalid_response:
      "Falha ao adicionar usuário - Resposta inválida",
    adding: "Adicionando...",
    amount_to_withdraw: "Quantia a Sacar",
    account: "Conta",
    select_user_to_remove: "Selecionar Usuário para Remover",
    no_users_to_remove: "Sem usuários para remover desta conta",
    failed_load_accounts: "Falha ao carregar contas",
    player_not_found_offline:
      "Jogador não encontrado ou está offline. Apenas jogadores online podem ser adicionados às contas.",
    cannot_add_yourself: "Você não pode se adicionar à conta.",
    view_details: "Ver Detalhes",
    player_already_added: "Este jogador já foi adicionado à conta.",
    request_timed_out:
      "Tempo esgotado. O jogador pode estar offline ou inacessível.",
    account_suffix: "Conta",
  },
  Dd = [
    { name: "bank", amount: 154e4 },
    { name: "cash", amount: 3500 },
  ],
  Rd = { totalReceived: 25e3, totalUsed: 12500 },
  Od = [
    {
      id: 1,
      description: "Vehicle Tax",
      type: "Police",
      amount: 500,
      date: "2023-10-25",
      isIncome: !1,
      isPaid: !1,
    },
    {
      id: 2,
      description: "Mechanic Repair",
      type: "Mechanic",
      amount: 1200,
      date: "2023-10-24",
      isIncome: !1,
      isPaid: !1,
    },
    {
      id: 3,
      description: "Speeding Ticket",
      type: "Police",
      amount: 2500,
      date: "2023-10-23",
      isIncome: !1,
      isPaid: !0,
    },
  ],
  Fd = [
    {
      id: 101,
      description: "Salary Payment",
      isIncome: !0,
      amount: 5e3,
      timeAgo: "2 hours ago",
      date: "2023-10-26",
    },
    {
      id: 102,
      description: "Store Purchase",
      isIncome: !1,
      amount: 150,
      timeAgo: "5 hours ago",
      date: "2023-10-26",
    },
    {
      id: 103,
      description: "ATM Withdraw",
      isIncome: !1,
      amount: 2e3,
      timeAgo: "1 day ago",
      date: "2023-10-25",
    },
    {
      id: 104,
      description: "Gift from Friend",
      isIncome: !0,
      amount: 1e3,
      timeAgo: "2 days ago",
      date: "2023-10-24",
    },
  ],
  Ed = [
    {
      id: "account1",
      name: "Business Account",
      type: "Business",
      balance: 5e5,
      owner: "John Doe",
      users: [],
    },
    {
      id: "account2",
      name: "Savings",
      type: "Savings",
      balance: 1e4,
      owner: "John Doe",
      users: [],
    },
  ];
async function qt(i, t = {}) {
  if (Gl())
    switch (i) {
      case "ps-banking:client:getLocales":
        return Td;
      case "ps-banking:client:getMoneyTypes":
        return Dd;
      case "ps-banking:client:getWeeklySummary":
        return Rd;
      case "ps-banking:client:getBills":
        return Od;
      case "ps-banking:client:getHistory":
        return Fd;
      case "ps-banking:client:getAccounts":
        return Ed;
      case "ps-banking:client:phoneOption":
        return !1;
      case "ps-banking:client:ATMwithdraw":
      case "ps-banking:client:ATMdeposit":
      case "ps-banking:client:payAllBills":
      case "ps-banking:client:payBill":
        return !0;
      case "ps-banking:client:transferMoney":
        return { success: !0, message: "Transferred successfully" };
      case "ps-banking:client:getColorConfig":
        return { color: "#3b82f6" };
      default:
        return (console.warn(`No mock data found for event: ${i}`), null);
    }
  const e = {
      method: "post",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(t),
    },
    n = window.GetParentResourceName
      ? window.GetParentResourceName()
      : "nui-frame-app";
  return await (await fetch(`https://${n}/${i}`, e)).json();
}
const Gn = [];
function Et(i, t = be) {
  let e;
  const n = new Set();
  function s(a) {
    if (ii(i, a) && ((i = a), e)) {
      const r = !Gn.length;
      for (const u of n) (u[1](), Gn.push(u, i));
      if (r) {
        for (let u = 0; u < Gn.length; u += 2) Gn[u][0](Gn[u + 1]);
        Gn.length = 0;
      }
    }
  }
  function o(a) {
    s(a(i));
  }
  function l(a, r = be) {
    const u = [a, r];
    return (
      n.add(u),
      n.size === 1 && (e = t(s, o) || be),
      a(i),
      () => {
        (n.delete(u), n.size === 0 && e && (e(), (e = null)));
      }
    );
  }
  return { set: s, update: o, subscribe: l };
}
const ws = Et(!1);
function Ql(i) {
  const t = i - 1;
  return t * t * t + 1;
}
function ss(i) {
  return --i * i * i * i * i + 1;
}
function le(i, { delay: t = 0, duration: e = 400, easing: n = Kl } = {}) {
  const s = +getComputedStyle(i).opacity;
  return { delay: t, duration: e, easing: n, css: (o) => `opacity: ${o * s}` };
}
function Yo(
  i,
  { delay: t = 0, duration: e = 400, easing: n = Ql, axis: s = "y" } = {},
) {
  const o = getComputedStyle(i),
    l = +o.opacity,
    a = s === "y" ? "height" : "width",
    r = parseFloat(o[a]),
    u = s === "y" ? ["top", "bottom"] : ["left", "right"],
    d = u.map((y) => `${y[0].toUpperCase()}${y.slice(1)}`),
    p = parseFloat(o[`padding${d[0]}`]),
    m = parseFloat(o[`padding${d[1]}`]),
    _ = parseFloat(o[`margin${d[0]}`]),
    g = parseFloat(o[`margin${d[1]}`]),
    b = parseFloat(o[`border${d[0]}Width`]),
    w = parseFloat(o[`border${d[1]}Width`]);
  return {
    delay: t,
    duration: e,
    easing: n,
    css: (y) =>
      `overflow: hidden;opacity: ${Math.min(y * 20, 1) * l};${a}: ${y * r}px;padding-${u[0]}: ${y * p}px;padding-${u[1]}: ${y * m}px;margin-${u[0]}: ${y * _}px;margin-${u[1]}: ${y * g}px;border-${u[0]}-width: ${y * b}px;border-${u[1]}-width: ${y * w}px;`,
  };
}
function En(
  i,
  {
    delay: t = 0,
    duration: e = 400,
    easing: n = Ql,
    start: s = 0,
    opacity: o = 0,
  } = {},
) {
  const l = getComputedStyle(i),
    a = +l.opacity,
    r = l.transform === "none" ? "" : l.transform,
    u = 1 - s,
    d = a * (1 - o);
  return {
    delay: t,
    duration: e,
    easing: n,
    css: (p, m) => `
			transform: ${r} scale(${1 - u * m});
			opacity: ${a - d * m}
		`,
  };
}
const Fl = Et([]);
let Ba = 0;
function Ot(i, t, e) {
  Ba += 1;
  const n = { id: Ba, message: i, title: t, icon: e };
  (Fl.update((s) => [...s, n]),
    setTimeout(() => {
      Fl.update((s) => s.filter((o) => o.id !== n.id));
    }, 2e3));
}
const As = Et(!0),
  Ao = Et(!1),
  Lo = Et(!1),
  pl = Et(!1),
  ml = Et(!1),
  $a = Et(!1),
  _l = Et(!1),
  Ro = Et(!1),
  Fi = Et(0),
  qe = Et(0),
  Id = () => {
    const { subscribe: i, set: t, update: e } = Et("overview");
    return {
      subscribe: i,
      set: (n) => {
        t(n);
      },
      reset: () => t("overview"),
    };
  },
  gl = Id(),
  Zl = Et({ lang: "pt-BR", currency: "BRL" }),
  li = Et({}),
  El = Et([]),
  Oo = Et([]),
  { window: Bd } = ud;
function za(i, t, e) {
  const n = i.slice();
  return ((n[26] = t[e]), n);
}
function Na(i, t, e) {
  const n = i.slice();
  return ((n[26] = t[e]), n);
}
function ja(i) {
  let t,
    e,
    n,
    s,
    o,
    l,
    a,
    r,
    u,
    d = i[4].atm + "",
    p,
    m,
    _,
    g = i[4].quick_management + "",
    b,
    w,
    y,
    S,
    k,
    C,
    P,
    T,
    R,
    F,
    D,
    I = i[4].cash + "",
    W,
    N,
    O,
    V,
    j = i[0].toLocaleString() + "",
    U,
    $,
    nt,
    K,
    Z,
    et,
    lt,
    J = i[4].bank_balance + "",
    Q,
    q,
    ct,
    G,
    X = i[2].toLocaleString() + "",
    tt,
    H,
    st,
    dt,
    Y,
    z,
    B,
    wt,
    ot,
    ut,
    gt,
    It,
    Ut = i[4].withdraw_amount + "",
    Nt,
    Ct,
    Tt,
    vt,
    xt,
    ae,
    Zt,
    ue,
    Bt,
    zt = i[4].submit + "",
    de,
    Vt,
    se,
    At,
    jt,
    Ht,
    Dt,
    Gt,
    at = i[4].deposit_amount + "",
    E,
    pt,
    bt,
    kt,
    Lt,
    $t,
    Ft,
    _e,
    we,
    Me = i[4].submit + "",
    Jt,
    te,
    Re,
    ye,
    Rt,
    Se,
    Ae,
    Qt = xe(i[5]),
    Pt = [];
  for (let _t = 0; _t < Qt.length; _t += 1) Pt[_t] = Wa(Na(i, Qt, _t));
  let rt = xe(i[6]),
    ht = [];
  for (let _t = 0; _t < rt.length; _t += 1) ht[_t] = Ha(za(i, rt, _t));
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("div")),
        (o = h("div")),
        (l = h("div")),
        (l.innerHTML = '<i class="fas fa-credit-card text-white text-lg"></i>'),
        (a = x()),
        (r = h("div")),
        (u = h("h1")),
        (p = v(d)),
        (m = x()),
        (_ = h("p")),
        (b = v(g)),
        (w = x()),
        (y = h("button")),
        (y.innerHTML = '<i class="fas fa-times text-lg"></i>'),
        (S = x()),
        (k = h("div")),
        (C = h("div")),
        (P = h("div")),
        (T = h("div")),
        (R = h("i")),
        (F = x()),
        (D = h("span")),
        (W = v(I)),
        (N = x()),
        (O = h("p")),
        (V = v("R$ ")),
        (U = v(j)),
        ($ = x()),
        (nt = h("div")),
        (K = h("div")),
        (Z = h("i")),
        (et = x()),
        (lt = h("span")),
        (Q = v(J)),
        (q = x()),
        (ct = h("p")),
        (G = v("R$ ")),
        (tt = v(X)),
        (H = x()),
        (st = h("div")));
      for (let _t = 0; _t < Pt.length; _t += 1) Pt[_t].c();
      ((dt = x()), (Y = h("div")));
      for (let _t = 0; _t < ht.length; _t += 1) ht[_t].c();
      ((z = x()),
        (B = h("div")),
        (wt = h("div")),
        (ot = h("div")),
        (ut = h("i")),
        (gt = x()),
        (It = h("span")),
        (Nt = v(Ut)),
        (Ct = x()),
        (Tt = h("div")),
        (vt = h("input")),
        (ae = x()),
        (Zt = h("button")),
        (ue = h("div")),
        (Bt = x()),
        (de = v(zt)),
        (se = x()),
        (At = h("div")),
        (jt = h("div")),
        (Ht = h("i")),
        (Dt = x()),
        (Gt = h("span")),
        (E = v(at)),
        (pt = x()),
        (bt = h("div")),
        (kt = h("input")),
        ($t = x()),
        (Ft = h("button")),
        (_e = h("div")),
        (we = x()),
        (Jt = v(Me)),
        f(
          l,
          "class",
          "w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center",
        ),
        f(u, "class", "text-lg font-semibold text-white"),
        f(_, "class", "text-sm text-white/50"),
        f(o, "class", "flex items-center space-x-3"),
        f(
          y,
          "class",
          "w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/50 hover:text-white/80",
        ),
        f(
          s,
          "class",
          "p-4 border-b border-white/10 flex items-center justify-between",
        ),
        f(R, "class", "fas fa-wallet text-green-400 text-lg"),
        f(D, "class", "text-white/80"),
        f(T, "class", "flex items-center space-x-2 mb-1"),
        f(O, "class", "text-xl font-bold text-white"),
        f(P, "class", "bg-black/20 border border-white/10 rounded-lg p-4"),
        f(Z, "class", "fas fa-university text-blue-400 text-lg"),
        f(lt, "class", "text-white/80"),
        f(K, "class", "flex items-center space-x-2 mb-1"),
        f(ct, "class", "text-xl font-bold text-white"),
        f(nt, "class", "bg-black/20 border border-white/10 rounded-lg p-4"),
        f(C, "class", "grid grid-cols-2 gap-4"),
        f(st, "class", "grid grid-cols-3 gap-2"),
        f(Y, "class", "grid grid-cols-3 gap-2"),
        f(ut, "class", "fas fa-arrow-down text-red-400"),
        f(It, "class", "text-white/80"),
        f(ot, "class", "flex items-center space-x-2 mb-2"),
        f(vt, "type", "number"),
        f(
          vt,
          "class",
          "w-full bg-black/30 text-white px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-red-500/20",
        ),
        f(vt, "placeholder", (xt = i[4].enter_amount)),
        f(vt, "min", "0"),
        f(vt, "max", i[2]),
        f(
          ue,
          "class",
          "absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity",
        ),
        f(
          Zt,
          "class",
          "px-6 py-2 bg-red-500/20 hover:bg-red-500/30 transition-colors rounded-lg text-white relative overflow-hidden group flex items-center justify-center text-center min-w-[100px]",
        ),
        (Zt.disabled = Vt = i[7] <= 0 || i[7] > i[2]),
        f(Tt, "class", "flex space-x-2"),
        f(wt, "class", "bg-black/20 border border-white/10 rounded-lg p-4"),
        f(Ht, "class", "fas fa-arrow-up text-green-400"),
        f(Gt, "class", "text-white/80"),
        f(jt, "class", "flex items-center space-x-2 mb-2"),
        f(kt, "type", "number"),
        f(
          kt,
          "class",
          "w-full bg-black/30 text-white px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-green-500/20",
        ),
        f(kt, "placeholder", (Lt = i[4].enter_amount)),
        f(kt, "min", "0"),
        f(kt, "max", i[0]),
        f(
          _e,
          "class",
          "absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity",
        ),
        f(
          Ft,
          "class",
          "px-6 py-2 bg-green-500/20 hover:bg-green-500/30 transition-colors rounded-lg text-white relative overflow-hidden group flex items-center justify-center text-center min-w-[100px]",
        ),
        (Ft.disabled = te = i[1] <= 0 || i[1] > i[0]),
        f(bt, "class", "flex space-x-2"),
        f(At, "class", "bg-black/20 border border-white/10 rounded-lg p-4"),
        f(B, "class", "grid grid-cols-2 gap-4"),
        f(k, "class", "p-4 space-y-4"),
        f(n, "class", "w-[650px] modern-card overflow-hidden"),
        f(
          e,
          "class",
          "absolute w-screen h-screen flex items-center justify-center",
        ),
        f(t, "class", "fixed inset-0 z-50"));
    },
    m(_t, oe) {
      (A(_t, t, oe),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, o),
        c(o, l),
        c(o, a),
        c(o, r),
        c(r, u),
        c(u, p),
        c(r, m),
        c(r, _),
        c(_, b),
        c(s, w),
        c(s, y),
        c(n, S),
        c(n, k),
        c(k, C),
        c(C, P),
        c(P, T),
        c(T, R),
        c(T, F),
        c(T, D),
        c(D, W),
        c(P, N),
        c(P, O),
        c(O, V),
        c(O, U),
        c(C, $),
        c(C, nt),
        c(nt, K),
        c(K, Z),
        c(K, et),
        c(K, lt),
        c(lt, Q),
        c(nt, q),
        c(nt, ct),
        c(ct, G),
        c(ct, tt),
        c(k, H),
        c(k, st));
      for (let Xt = 0; Xt < Pt.length; Xt += 1) Pt[Xt] && Pt[Xt].m(st, null);
      (c(k, dt), c(k, Y));
      for (let Xt = 0; Xt < ht.length; Xt += 1) ht[Xt] && ht[Xt].m(Y, null);
      (c(k, z),
        c(k, B),
        c(B, wt),
        c(wt, ot),
        c(ot, ut),
        c(ot, gt),
        c(ot, It),
        c(It, Nt),
        c(wt, Ct),
        c(wt, Tt),
        c(Tt, vt),
        ce(vt, i[7]),
        c(Tt, ae),
        c(Tt, Zt),
        c(Zt, ue),
        c(Zt, Bt),
        c(Zt, de),
        c(B, se),
        c(B, At),
        c(At, jt),
        c(jt, Ht),
        c(jt, Dt),
        c(jt, Gt),
        c(Gt, E),
        c(At, pt),
        c(At, bt),
        c(bt, kt),
        ce(kt, i[1]),
        c(bt, $t),
        c(bt, Ft),
        c(Ft, _e),
        c(Ft, we),
        c(Ft, Jt),
        (Rt = !0),
        Se ||
          ((Ae = [
            ft(y, "click", i[14]),
            ft(vt, "input", i[18]),
            ft(Zt, "click", i[19]),
            ft(kt, "input", i[20]),
            ft(Ft, "click", i[21]),
          ]),
          (Se = !0)));
    },
    p(_t, oe) {
      if (
        ((!Rt || oe & 16) && d !== (d = _t[4].atm + "") && L(p, d),
        (!Rt || oe & 16) && g !== (g = _t[4].quick_management + "") && L(b, g),
        (!Rt || oe & 16) && I !== (I = _t[4].cash + "") && L(W, I),
        (!Rt || oe & 1) && j !== (j = _t[0].toLocaleString() + "") && L(U, j),
        (!Rt || oe & 16) && J !== (J = _t[4].bank_balance + "") && L(Q, J),
        (!Rt || oe & 4) && X !== (X = _t[2].toLocaleString() + "") && L(tt, X),
        oe & 4128)
      ) {
        Qt = xe(_t[5]);
        let Xt;
        for (Xt = 0; Xt < Qt.length; Xt += 1) {
          const Oe = Na(_t, Qt, Xt);
          Pt[Xt]
            ? Pt[Xt].p(Oe, oe)
            : ((Pt[Xt] = Wa(Oe)), Pt[Xt].c(), Pt[Xt].m(st, null));
        }
        for (; Xt < Pt.length; Xt += 1) Pt[Xt].d(1);
        Pt.length = Qt.length;
      }
      if (oe & 8256) {
        rt = xe(_t[6]);
        let Xt;
        for (Xt = 0; Xt < rt.length; Xt += 1) {
          const Oe = za(_t, rt, Xt);
          ht[Xt]
            ? ht[Xt].p(Oe, oe)
            : ((ht[Xt] = Ha(Oe)), ht[Xt].c(), ht[Xt].m(Y, null));
        }
        for (; Xt < ht.length; Xt += 1) ht[Xt].d(1);
        ht.length = rt.length;
      }
      ((!Rt || oe & 16) &&
        Ut !== (Ut = _t[4].withdraw_amount + "") &&
        L(Nt, Ut),
        (!Rt || (oe & 16 && xt !== (xt = _t[4].enter_amount))) &&
          f(vt, "placeholder", xt),
        (!Rt || oe & 4) && f(vt, "max", _t[2]),
        oe & 128 && ze(vt.value) !== _t[7] && ce(vt, _t[7]),
        (!Rt || oe & 16) && zt !== (zt = _t[4].submit + "") && L(de, zt),
        (!Rt || (oe & 132 && Vt !== (Vt = _t[7] <= 0 || _t[7] > _t[2]))) &&
          (Zt.disabled = Vt),
        (!Rt || oe & 16) && at !== (at = _t[4].deposit_amount + "") && L(E, at),
        (!Rt || (oe & 16 && Lt !== (Lt = _t[4].enter_amount))) &&
          f(kt, "placeholder", Lt),
        (!Rt || oe & 1) && f(kt, "max", _t[0]),
        oe & 2 && ze(kt.value) !== _t[1] && ce(kt, _t[1]),
        (!Rt || oe & 16) && Me !== (Me = _t[4].submit + "") && L(Jt, Me),
        (!Rt || (oe & 3 && te !== (te = _t[1] <= 0 || _t[1] > _t[0]))) &&
          (Ft.disabled = te));
    },
    i(_t) {
      Rt ||
        (_t &&
          he(() => {
            Rt &&
              (ye && ye.end(1),
              (Re = Te(n, le, { duration: 200 })),
              Re.start());
          }),
        (Rt = !0));
    },
    o(_t) {
      (Re && Re.invalidate(),
        _t && (ye = De(n, le, { duration: 150 })),
        (Rt = !1));
    },
    d(_t) {
      (_t && M(t),
        ns(Pt, _t),
        ns(ht, _t),
        _t && ye && ye.end(),
        (Se = !1),
        Ce(Ae));
    },
  };
}
function Wa(i) {
  let t,
    e,
    n,
    s,
    o,
    l,
    a,
    r = i[26].toLocaleString() + "",
    u,
    d,
    p,
    m;
  function _() {
    return i[16](i[26]);
  }
  return {
    c() {
      ((t = h("button")),
        (e = h("div")),
        (n = x()),
        (s = h("i")),
        (o = x()),
        (l = h("span")),
        (a = v("R$ ")),
        (u = v(r)),
        (d = x()),
        f(
          e,
          "class",
          "absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity",
        ),
        f(s, "class", "fas fa-arrow-down text-red-400 mr-2"),
        f(l, "class", "text-white/80"),
        f(
          t,
          "class",
          "bg-black/20 border border-white/10 hover:bg-white/5 transition-colors rounded-lg p-3 text-center group relative overflow-hidden",
        ));
    },
    m(g, b) {
      (A(g, t, b),
        c(t, e),
        c(t, n),
        c(t, s),
        c(t, o),
        c(t, l),
        c(l, a),
        c(l, u),
        c(t, d),
        p || ((m = ft(t, "click", _)), (p = !0)));
    },
    p(g, b) {
      ((i = g), b & 32 && r !== (r = i[26].toLocaleString() + "") && L(u, r));
    },
    d(g) {
      (g && M(t), (p = !1), m());
    },
  };
}
function Ha(i) {
  let t,
    e,
    n,
    s,
    o,
    l,
    a,
    r = i[26].toLocaleString() + "",
    u,
    d,
    p,
    m;
  function _() {
    return i[17](i[26]);
  }
  return {
    c() {
      ((t = h("button")),
        (e = h("div")),
        (n = x()),
        (s = h("i")),
        (o = x()),
        (l = h("span")),
        (a = v("R$ ")),
        (u = v(r)),
        (d = x()),
        f(
          e,
          "class",
          "absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity",
        ),
        f(s, "class", "fas fa-arrow-up text-green-400 mr-2"),
        f(l, "class", "text-white/80"),
        f(
          t,
          "class",
          "bg-black/20 border border-white/10 hover:bg-white/5 transition-colors rounded-lg p-3 text-center group relative overflow-hidden",
        ));
    },
    m(g, b) {
      (A(g, t, b),
        c(t, e),
        c(t, n),
        c(t, s),
        c(t, o),
        c(t, l),
        c(l, a),
        c(l, u),
        c(t, d),
        p || ((m = ft(t, "click", _)), (p = !0)));
    },
    p(g, b) {
      ((i = g), b & 64 && r !== (r = i[26].toLocaleString() + "") && L(u, r));
    },
    d(g) {
      (g && M(t), (p = !1), m());
    },
  };
}
function $d(i) {
  let t,
    e,
    n,
    s = i[3] && ja(i);
  return {
    c() {
      (s && s.c(), (t = nn()));
    },
    m(o, l) {
      (s && s.m(o, l),
        A(o, t, l),
        e || ((n = ft(Bd, "keydown", i[15])), (e = !0)));
    },
    p(o, [l]) {
      o[3]
        ? s
          ? (s.p(o, l), l & 8 && Mt(s, 1))
          : ((s = ja(o)), s.c(), Mt(s, 1), s.m(t.parentNode, t))
        : s &&
          (Ee(),
          Wt(s, 1, 1, () => {
            s = null;
          }),
          Ie());
    },
    i(o) {
      Mt(s);
    },
    o(o) {
      Wt(s);
    },
    d(o) {
      (o && M(t), s && s.d(o), (e = !1), n());
    },
  };
}
function zd(i, t, e) {
  let n, s, o, l, a, r, u, d;
  (mt(i, Fi, (O) => e(0, (n = O))),
    mt(i, qe, (O) => e(2, (s = O))),
    mt(i, Ro, (O) => e(3, (l = O))),
    mt(i, li, (O) => e(4, (a = O))));
  let p = Et([]);
  mt(i, p, (O) => e(5, (r = O)));
  let m = Et([]);
  mt(i, m, (O) => e(6, (u = O)));
  let _ = Et(3),
    g = Et(0);
  mt(i, g, (O) => e(7, (d = O)));
  let b = Et(0);
  mt(i, b, (O) => e(1, (o = O)));
  async function w() {
    try {
      const O = await qt("ps-banking:client:getAmountPresets", {}),
        V = JSON.parse(O);
      (p.set(V.withdrawAmounts), m.set(V.depositAmounts), _.set(V.grid));
    } catch (O) {
      console.error(O);
    }
  }
  async function y() {
    try {
      const O = await qt("ps-banking:client:getMoneyTypes", {}),
        V = O.find((U) => U.name === "bank"),
        j = O.find((U) => U.name === "cash");
      (V && qe.set(V.amount), j && Fi.set(j.amount));
    } catch (O) {
      console.error(O);
    }
  }
  async function S(O) {
    try {
      if (O <= 0 || O > s) return;
      (await qt("ps-banking:client:ATMwithdraw", { amount: O })) &&
        (await y(), g.set(0));
    } catch (V) {
      console.error(V);
    }
  }
  async function k(O) {
    try {
      if (O <= 0 || O > n) return;
      (await qt("ps-banking:client:ATMdeposit", { amount: O })) &&
        (await y(), b.set(0));
    } catch (V) {
      console.error(V);
    }
  }
  async function C() {
    try {
      const O = await qt("ps-banking:client:getLocales", {});
      li.set(O);
    } catch (O) {
      console.error(O);
    }
  }
  function P() {
    (Ro.set(!1), qt("ps-banking:client:hideUI"));
  }
  function T(O) {
    O.key === "Escape" && P();
  }
  sn(
    () => (
      w(),
      C(),
      y(),
      window.addEventListener("keydown", T),
      () => {
        window.removeEventListener("keydown", T);
      }
    ),
  );
  const R = (O) => S(O),
    F = (O) => k(O);
  function D() {
    ((d = ze(this.value)), g.set(d));
  }
  const I = () => S(d);
  function W() {
    ((o = ze(this.value)), b.set(o));
  }
  const N = () => k(o);
  return (
    (i.$$.update = () => {
      i.$$.dirty & 3 && o === 0 && b.set(n);
    }),
    [n, o, s, l, a, r, u, d, p, m, g, b, S, k, P, T, R, F, D, I, W, N]
  );
}
class Nd extends ui {
  constructor(t) {
    (super(), ci(this, t, zd, $d, ii, {}));
  }
}
function Va(i) {
  let t;
  const e = i[3].default,
    n = ld(e, i, i[2], null);
  return {
    c() {
      n && n.c();
    },
    m(s, o) {
      (n && n.m(s, o), (t = !0));
    },
    p(s, o) {
      n &&
        n.p &&
        (!t || o & 4) &&
        rd(n, e, s, s[2], t ? ad(e, s[2], o, null) : cd(s[2]), null);
    },
    i(s) {
      t || (Mt(n, s), (t = !0));
    },
    o(s) {
      (Wt(n, s), (t = !1));
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Ua(i) {
  let t, e;
  return (
    (t = new Nd({})),
    {
      c() {
        Ei(t.$$.fragment);
      },
      m(n, s) {
        (ai(t, n, s), (e = !0));
      },
      i(n) {
        e || (Mt(t.$$.fragment, n), (e = !0));
      },
      o(n) {
        (Wt(t.$$.fragment, n), (e = !1));
      },
      d(n) {
        ri(t, n);
      },
    }
  );
}
function jd(i) {
  let t,
    e,
    n,
    s = i[0] && Va(i),
    o = i[1] && Ua();
  return {
    c() {
      ((t = h("main")), s && s.c(), (e = x()), o && o.c());
    },
    m(l, a) {
      (A(l, t, a), s && s.m(t, null), c(t, e), o && o.m(t, null), (n = !0));
    },
    p(l, [a]) {
      (l[0]
        ? s
          ? (s.p(l, a), a & 1 && Mt(s, 1))
          : ((s = Va(l)), s.c(), Mt(s, 1), s.m(t, e))
        : s &&
          (Ee(),
          Wt(s, 1, 1, () => {
            s = null;
          }),
          Ie()),
        l[1]
          ? o
            ? a & 2 && Mt(o, 1)
            : ((o = Ua()), o.c(), Mt(o, 1), o.m(t, null))
          : o &&
            (Ee(),
            Wt(o, 1, 1, () => {
              o = null;
            }),
            Ie()));
    },
    i(l) {
      n || (Mt(s), Mt(o), (n = !0));
    },
    o(l) {
      (Wt(s), Wt(o), (n = !1));
    },
    d(l) {
      (l && M(t), s && s.d(), o && o.d());
    },
  };
}
function Wd(i, t, e) {
  let n;
  mt(i, Ro, (a) => e(1, (n = a)));
  let { $$slots: s = {}, $$scope: o } = t,
    l;
  return (
    hl("openATM", () => {
      Ro.set(!0);
    }),
    ws.subscribe((a) => {
      e(0, (l = a));
    }),
    hl("openBank", () => {
      ws.set(!0);
    }),
    hl("hideGarageMenu", () => {
      ws.set(!1);
    }),
    sn(() => {
      const a = (r) => {
        l &&
          ["Escape"].includes(r.code) &&
          (qt("ps-banking:client:hideUI"), ws.set(!1));
      };
      return (
        window.addEventListener("keydown", a),
        () => window.removeEventListener("keydown", a)
      );
    }),
    (i.$$set = (a) => {
      "$$scope" in a && e(2, (o = a.$$scope));
    }),
    [l, n, o, s]
  );
}
class Hd extends ui {
  constructor(t) {
    (super(), ci(this, t, Wd, jd, ii, {}));
  }
}
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ function Gi() {}
const Vd = (function () {
  let i = 0;
  return function () {
    return i++;
  };
})();
function ne(i) {
  return i === null || typeof i > "u";
}
function me(i) {
  if (Array.isArray && Array.isArray(i)) return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function ee(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
const Pe = (i) => (typeof i == "number" || i instanceof Number) && isFinite(+i);
function Je(i, t) {
  return Pe(i) ? i : t;
}
function Kt(i, t) {
  return typeof i > "u" ? t : i;
}
const Ud = (i, t) =>
    typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : i / t,
  su = (i, t) =>
    typeof i == "string" && i.endsWith("%") ? (parseFloat(i) / 100) * t : +i;
function pe(i, t, e) {
  if (i && typeof i.call == "function") return i.apply(e, t);
}
function re(i, t, e, n) {
  let s, o, l;
  if (me(i))
    if (((o = i.length), n)) for (s = o - 1; s >= 0; s--) t.call(e, i[s], s);
    else for (s = 0; s < o; s++) t.call(e, i[s], s);
  else if (ee(i))
    for (l = Object.keys(i), o = l.length, s = 0; s < o; s++)
      t.call(e, i[l[s]], l[s]);
}
function Fo(i, t) {
  let e, n, s, o;
  if (!i || !t || i.length !== t.length) return !1;
  for (e = 0, n = i.length; e < n; ++e)
    if (
      ((s = i[e]),
      (o = t[e]),
      s.datasetIndex !== o.datasetIndex || s.index !== o.index)
    )
      return !1;
  return !0;
}
function Eo(i) {
  if (me(i)) return i.map(Eo);
  if (ee(i)) {
    const t = Object.create(null),
      e = Object.keys(i),
      n = e.length;
    let s = 0;
    for (; s < n; ++s) t[e[s]] = Eo(i[e[s]]);
    return t;
  }
  return i;
}
function ou(i) {
  return ["__proto__", "prototype", "constructor"].indexOf(i) === -1;
}
function Yd(i, t, e, n) {
  if (!ou(i)) return;
  const s = t[i],
    o = e[i];
  ee(s) && ee(o) ? Os(s, o, n) : (t[i] = Eo(o));
}
function Os(i, t, e) {
  const n = me(t) ? t : [t],
    s = n.length;
  if (!ee(i)) return i;
  e = e || {};
  const o = e.merger || Yd;
  for (let l = 0; l < s; ++l) {
    if (((t = n[l]), !ee(t))) continue;
    const a = Object.keys(t);
    for (let r = 0, u = a.length; r < u; ++r) o(a[r], i, t, e);
  }
  return i;
}
function Ls(i, t) {
  return Os(i, t, { merger: Xd });
}
function Xd(i, t, e) {
  if (!ou(i)) return;
  const n = t[i],
    s = e[i];
  ee(n) && ee(s)
    ? Ls(n, s)
    : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Eo(s));
}
const Ya = { "": (i) => i, x: (i) => i.x, y: (i) => i.y };
function _n(i, t) {
  return (Ya[t] || (Ya[t] = Kd(t)))(i);
}
function Kd(i) {
  const t = qd(i);
  return (e) => {
    for (const n of t) {
      if (n === "") break;
      e = e && e[n];
    }
    return e;
  };
}
function qd(i) {
  const t = i.split("."),
    e = [];
  let n = "";
  for (const s of t)
    ((n += s),
      n.endsWith("\\") ? (n = n.slice(0, -1) + ".") : (e.push(n), (n = "")));
  return e;
}
function Jl(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const ei = (i) => typeof i < "u",
  gn = (i) => typeof i == "function",
  Xa = (i, t) => {
    if (i.size !== t.size) return !1;
    for (const e of i) if (!t.has(e)) return !1;
    return !0;
  };
function Gd(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const ve = Math.PI,
  fe = 2 * ve,
  Qd = fe + ve,
  Io = Number.POSITIVE_INFINITY,
  Zd = ve / 180,
  ke = ve / 2,
  ps = ve / 4,
  Ka = (ve * 2) / 3,
  ti = Math.log10,
  Oi = Math.sign;
function qa(i) {
  const t = Math.round(i);
  i = Ps(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(ti(i))),
    n = i / e;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * e;
}
function Jd(i) {
  const t = [],
    e = Math.sqrt(i);
  let n;
  for (n = 1; n < e; n++) i % n === 0 && (t.push(n), t.push(i / n));
  return (e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t);
}
function os(i) {
  return !isNaN(parseFloat(i)) && isFinite(i);
}
function Ps(i, t, e) {
  return Math.abs(i - t) < e;
}
function tf(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function lu(i, t, e) {
  let n, s, o;
  for (n = 0, s = i.length; n < s; n++)
    ((o = i[n][e]),
      isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o))));
}
function oi(i) {
  return i * (ve / 180);
}
function ta(i) {
  return i * (180 / ve);
}
function Ga(i) {
  if (!Pe(i)) return;
  let t = 1,
    e = 0;
  for (; Math.round(i * t) / t !== i; ) ((t *= 10), e++);
  return e;
}
function au(i, t) {
  const e = t.x - i.x,
    n = t.y - i.y,
    s = Math.sqrt(e * e + n * n);
  let o = Math.atan2(n, e);
  return (o < -0.5 * ve && (o += fe), { angle: o, distance: s });
}
function Il(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function ef(i, t) {
  return ((i - t + Qd) % fe) - ve;
}
function Ke(i) {
  return ((i % fe) + fe) % fe;
}
function Fs(i, t, e, n) {
  const s = Ke(i),
    o = Ke(t),
    l = Ke(e),
    a = Ke(o - s),
    r = Ke(l - s),
    u = Ke(s - o),
    d = Ke(s - l);
  return s === o || s === l || (n && o === l) || (a > r && u < d);
}
function $e(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function nf(i) {
  return $e(i, -32768, 32767);
}
function tn(i, t, e, n = 1e-6) {
  return i >= Math.min(t, e) - n && i <= Math.max(t, e) + n;
}
function ea(i, t, e) {
  e = e || ((l) => i[l] < t);
  let n = i.length - 1,
    s = 0,
    o;
  for (; n - s > 1; ) ((o = (s + n) >> 1), e(o) ? (s = o) : (n = o));
  return { lo: s, hi: n };
}
const en = (i, t, e, n) =>
    ea(i, e, n ? (s) => i[s][t] <= e : (s) => i[s][t] < e),
  sf = (i, t, e) => ea(i, e, (n) => i[n][t] >= e);
function of(i, t, e) {
  let n = 0,
    s = i.length;
  for (; n < s && i[n] < t; ) n++;
  for (; s > n && i[s - 1] > e; ) s--;
  return n > 0 || s < i.length ? i.slice(n, s) : i;
}
const ru = ["push", "pop", "shift", "splice", "unshift"];
function lf(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  (Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    ru.forEach((e) => {
      const n = "_onData" + Jl(e),
        s = i[e];
      Object.defineProperty(i, e, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const l = s.apply(this, o);
          return (
            i._chartjs.listeners.forEach((a) => {
              typeof a[n] == "function" && a[n](...o);
            }),
            l
          );
        },
      });
    }));
}
function Qa(i, t) {
  const e = i._chartjs;
  if (!e) return;
  const n = e.listeners,
    s = n.indexOf(t);
  (s !== -1 && n.splice(s, 1),
    !(n.length > 0) &&
      (ru.forEach((o) => {
        delete i[o];
      }),
      delete i._chartjs));
}
function cu(i) {
  const t = new Set();
  let e, n;
  for (e = 0, n = i.length; e < n; ++e) t.add(i[e]);
  return t.size === n ? i : Array.from(t);
}
const uu = (function () {
  return typeof window > "u"
    ? function (i) {
        return i();
      }
    : window.requestAnimationFrame;
})();
function du(i, t, e) {
  const n = e || ((l) => Array.prototype.slice.call(l));
  let s = !1,
    o = [];
  return function (...l) {
    ((o = n(l)),
      s ||
        ((s = !0),
        uu.call(window, () => {
          ((s = !1), i.apply(t, o));
        })));
  };
}
function af(i, t) {
  let e;
  return function (...n) {
    return (
      t ? (clearTimeout(e), (e = setTimeout(i, t, n))) : i.apply(this, n),
      t
    );
  };
}
const ia = (i) => (i === "start" ? "left" : i === "end" ? "right" : "center"),
  je = (i, t, e) => (i === "start" ? t : i === "end" ? e : (t + e) / 2),
  rf = (i, t, e, n) =>
    i === (n ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function fu(i, t, e) {
  const n = t.length;
  let s = 0,
    o = n;
  if (i._sorted) {
    const { iScale: l, _parsed: a } = i,
      r = l.axis,
      { min: u, max: d, minDefined: p, maxDefined: m } = l.getUserBounds();
    (p &&
      (s = $e(
        Math.min(
          en(a, l.axis, u).lo,
          e ? n : en(t, r, l.getPixelForValue(u)).lo,
        ),
        0,
        n - 1,
      )),
      m
        ? (o =
            $e(
              Math.max(
                en(a, l.axis, d, !0).hi + 1,
                e ? 0 : en(t, r, l.getPixelForValue(d), !0).hi + 1,
              ),
              s,
              n,
            ) - s)
        : (o = n - s));
  }
  return { start: s, count: o };
}
function hu(i) {
  const { xScale: t, yScale: e, _scaleRanges: n } = i,
    s = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
  if (!n) return ((i._scaleRanges = s), !0);
  const o =
    n.xmin !== t.min ||
    n.xmax !== t.max ||
    n.ymin !== e.min ||
    n.ymax !== e.max;
  return (Object.assign(n, s), o);
}
const ho = (i) => i === 0 || i === 1,
  Za = (i, t, e) =>
    -(Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - t) * fe) / e)),
  Ja = (i, t, e) => Math.pow(2, -10 * i) * Math.sin(((i - t) * fe) / e) + 1,
  Cs = {
    linear: (i) => i,
    easeInQuad: (i) => i * i,
    easeOutQuad: (i) => -i * (i - 2),
    easeInOutQuad: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
    easeInCubic: (i) => i * i * i,
    easeOutCubic: (i) => (i -= 1) * i * i + 1,
    easeInOutCubic: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
    easeInQuart: (i) => i * i * i * i,
    easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
    easeInOutQuart: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
    easeInQuint: (i) => i * i * i * i * i,
    easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
    easeInOutQuint: (i) =>
      (i /= 0.5) < 1
        ? 0.5 * i * i * i * i * i
        : 0.5 * ((i -= 2) * i * i * i * i + 2),
    easeInSine: (i) => -Math.cos(i * ke) + 1,
    easeOutSine: (i) => Math.sin(i * ke),
    easeInOutSine: (i) => -0.5 * (Math.cos(ve * i) - 1),
    easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * (i - 1))),
    easeOutExpo: (i) => (i === 1 ? 1 : -Math.pow(2, -10 * i) + 1),
    easeInOutExpo: (i) =>
      ho(i)
        ? i
        : i < 0.5
          ? 0.5 * Math.pow(2, 10 * (i * 2 - 1))
          : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
    easeInCirc: (i) => (i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)),
    easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
    easeInOutCirc: (i) =>
      (i /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - i * i) - 1)
        : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
    easeInElastic: (i) => (ho(i) ? i : Za(i, 0.075, 0.3)),
    easeOutElastic: (i) => (ho(i) ? i : Ja(i, 0.075, 0.3)),
    easeInOutElastic(i) {
      return ho(i)
        ? i
        : i < 0.5
          ? 0.5 * Za(i * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * Ja(i * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(i) {
      return i * i * ((1.70158 + 1) * i - 1.70158);
    },
    easeOutBack(i) {
      return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
    },
    easeInOutBack(i) {
      let t = 1.70158;
      return (i /= 0.5) < 1
        ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t))
        : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
    },
    easeInBounce: (i) => 1 - Cs.easeOutBounce(1 - i),
    easeOutBounce(i) {
      return i < 1 / 2.75
        ? 7.5625 * i * i
        : i < 2 / 2.75
          ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
          : i < 2.5 / 2.75
            ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
            : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
    },
    easeInOutBounce: (i) =>
      i < 0.5
        ? Cs.easeInBounce(i * 2) * 0.5
        : Cs.easeOutBounce(i * 2 - 1) * 0.5 + 0.5,
  };
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */ function zs(i) {
  return (i + 0.5) | 0;
}
const hn = (i, t, e) => Math.max(Math.min(i, e), t);
function xs(i) {
  return hn(zs(i * 2.55), 0, 255);
}
function mn(i) {
  return hn(zs(i * 255), 0, 255);
}
function Ji(i) {
  return hn(zs(i / 2.55) / 100, 0, 1);
}
function tr(i) {
  return hn(zs(i * 100), 0, 100);
}
const Ze = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Bl = [..."0123456789ABCDEF"],
  cf = (i) => Bl[i & 15],
  uf = (i) => Bl[(i & 240) >> 4] + Bl[i & 15],
  po = (i) => (i & 240) >> 4 === (i & 15),
  df = (i) => po(i.r) && po(i.g) && po(i.b) && po(i.a);
function ff(i) {
  var t = i.length,
    e;
  return (
    i[0] === "#" &&
      (t === 4 || t === 5
        ? (e = {
            r: 255 & (Ze[i[1]] * 17),
            g: 255 & (Ze[i[2]] * 17),
            b: 255 & (Ze[i[3]] * 17),
            a: t === 5 ? Ze[i[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (e = {
            r: (Ze[i[1]] << 4) | Ze[i[2]],
            g: (Ze[i[3]] << 4) | Ze[i[4]],
            b: (Ze[i[5]] << 4) | Ze[i[6]],
            a: t === 9 ? (Ze[i[7]] << 4) | Ze[i[8]] : 255,
          })),
    e
  );
}
const hf = (i, t) => (i < 255 ? t(i) : "");
function pf(i) {
  var t = df(i) ? cf : uf;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + hf(i.a, t) : void 0;
}
const mf =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function pu(i, t, e) {
  const n = t * Math.min(e, 1 - e),
    s = (o, l = (o + i / 30) % 12) =>
      e - n * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  return [s(0), s(8), s(4)];
}
function _f(i, t, e) {
  const n = (s, o = (s + i / 60) % 6) =>
    e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function gf(i, t, e) {
  const n = pu(i, 1, 0.5);
  let s;
  for (t + e > 1 && ((s = 1 / (t + e)), (t *= s), (e *= s)), s = 0; s < 3; s++)
    ((n[s] *= 1 - t - e), (n[s] += t));
  return n;
}
function bf(i, t, e, n, s) {
  return i === s
    ? (t - e) / n + (t < e ? 6 : 0)
    : t === s
      ? (e - i) / n + 2
      : (i - t) / n + 4;
}
function na(i) {
  const e = i.r / 255,
    n = i.g / 255,
    s = i.b / 255,
    o = Math.max(e, n, s),
    l = Math.min(e, n, s),
    a = (o + l) / 2;
  let r, u, d;
  return (
    o !== l &&
      ((d = o - l),
      (u = a > 0.5 ? d / (2 - o - l) : d / (o + l)),
      (r = bf(e, n, s, d, o)),
      (r = r * 60 + 0.5)),
    [r | 0, u || 0, a]
  );
}
function sa(i, t, e, n) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, n)).map(mn);
}
function oa(i, t, e) {
  return sa(pu, i, t, e);
}
function vf(i, t, e) {
  return sa(gf, i, t, e);
}
function yf(i, t, e) {
  return sa(_f, i, t, e);
}
function mu(i) {
  return ((i % 360) + 360) % 360;
}
function wf(i) {
  const t = mf.exec(i);
  let e = 255,
    n;
  if (!t) return;
  t[5] !== n && (e = t[6] ? xs(+t[5]) : mn(+t[5]));
  const s = mu(+t[2]),
    o = +t[3] / 100,
    l = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (n = vf(s, o, l))
      : t[1] === "hsv"
        ? (n = yf(s, o, l))
        : (n = oa(s, o, l)),
    { r: n[0], g: n[1], b: n[2], a: e }
  );
}
function xf(i, t) {
  var e = na(i);
  ((e[0] = mu(e[0] + t)),
    (e = oa(e)),
    (i.r = e[0]),
    (i.g = e[1]),
    (i.b = e[2]));
}
function kf(i) {
  if (!i) return;
  const t = na(i),
    e = t[0],
    n = tr(t[1]),
    s = tr(t[2]);
  return i.a < 255
    ? `hsla(${e}, ${n}%, ${s}%, ${Ji(i.a)})`
    : `hsl(${e}, ${n}%, ${s}%)`;
}
const er = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  ir = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function Mf() {
  const i = {},
    t = Object.keys(ir),
    e = Object.keys(er);
  let n, s, o, l, a;
  for (n = 0; n < t.length; n++) {
    for (l = a = t[n], s = 0; s < e.length; s++)
      ((o = e[s]), (a = a.replace(o, er[o])));
    ((o = parseInt(ir[l], 16)),
      (i[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]));
  }
  return i;
}
let mo;
function Sf(i) {
  mo || ((mo = Mf()), (mo.transparent = [0, 0, 0, 0]));
  const t = mo[i.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const Af =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Lf(i) {
  const t = Af.exec(i);
  let e = 255,
    n,
    s,
    o;
  if (t) {
    if (t[7] !== n) {
      const l = +t[7];
      e = t[8] ? xs(l) : hn(l * 255, 0, 255);
    }
    return (
      (n = +t[1]),
      (s = +t[3]),
      (o = +t[5]),
      (n = 255 & (t[2] ? xs(n) : hn(n, 0, 255))),
      (s = 255 & (t[4] ? xs(s) : hn(s, 0, 255))),
      (o = 255 & (t[6] ? xs(o) : hn(o, 0, 255))),
      { r: n, g: s, b: o, a: e }
    );
  }
}
function Pf(i) {
  return (
    i &&
    (i.a < 255
      ? `rgba(${i.r}, ${i.g}, ${i.b}, ${Ji(i.a)})`
      : `rgb(${i.r}, ${i.g}, ${i.b})`)
  );
}
const bl = (i) =>
    i <= 0.0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055,
  Qn = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
function Cf(i, t, e) {
  const n = Qn(Ji(i.r)),
    s = Qn(Ji(i.g)),
    o = Qn(Ji(i.b));
  return {
    r: mn(bl(n + e * (Qn(Ji(t.r)) - n))),
    g: mn(bl(s + e * (Qn(Ji(t.g)) - s))),
    b: mn(bl(o + e * (Qn(Ji(t.b)) - o))),
    a: i.a + e * (t.a - i.a),
  };
}
function _o(i, t, e) {
  if (i) {
    let n = na(i);
    ((n[t] = Math.max(0, Math.min(n[t] + n[t] * e, t === 0 ? 360 : 1))),
      (n = oa(n)),
      (i.r = n[0]),
      (i.g = n[1]),
      (i.b = n[2]));
  }
}
function _u(i, t) {
  return i && Object.assign(t || {}, i);
}
function nr(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(i)
      ? i.length >= 3 &&
        ((t = { r: i[0], g: i[1], b: i[2], a: 255 }),
        i.length > 3 && (t.a = mn(i[3])))
      : ((t = _u(i, { r: 0, g: 0, b: 0, a: 1 })), (t.a = mn(t.a))),
    t
  );
}
function Tf(i) {
  return i.charAt(0) === "r" ? Lf(i) : wf(i);
}
class Bo {
  constructor(t) {
    if (t instanceof Bo) return t;
    const e = typeof t;
    let n;
    (e === "object"
      ? (n = nr(t))
      : e === "string" && (n = ff(t) || Sf(t) || Tf(t)),
      (this._rgb = n),
      (this._valid = !!n));
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = _u(this._rgb);
    return (t && (t.a = Ji(t.a)), t);
  }
  set rgb(t) {
    this._rgb = nr(t);
  }
  rgbString() {
    return this._valid ? Pf(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? pf(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? kf(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const n = this.rgb,
        s = t.rgb;
      let o;
      const l = e === o ? 0.5 : e,
        a = 2 * l - 1,
        r = n.a - s.a,
        u = ((a * r === -1 ? a : (a + r) / (1 + a * r)) + 1) / 2;
      ((o = 1 - u),
        (n.r = 255 & (u * n.r + o * s.r + 0.5)),
        (n.g = 255 & (u * n.g + o * s.g + 0.5)),
        (n.b = 255 & (u * n.b + o * s.b + 0.5)),
        (n.a = l * n.a + (1 - l) * s.a),
        (this.rgb = n));
    }
    return this;
  }
  interpolate(t, e) {
    return (t && (this._rgb = Cf(this._rgb, t._rgb, e)), this);
  }
  clone() {
    return new Bo(this.rgb);
  }
  alpha(t) {
    return ((this._rgb.a = mn(t)), this);
  }
  clearer(t) {
    const e = this._rgb;
    return ((e.a *= 1 - t), this);
  }
  greyscale() {
    const t = this._rgb,
      e = zs(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return ((t.r = t.g = t.b = e), this);
  }
  opaquer(t) {
    const e = this._rgb;
    return ((e.a *= 1 + t), this);
  }
  negate() {
    const t = this._rgb;
    return ((t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this);
  }
  lighten(t) {
    return (_o(this._rgb, 2, t), this);
  }
  darken(t) {
    return (_o(this._rgb, 2, -t), this);
  }
  saturate(t) {
    return (_o(this._rgb, 1, t), this);
  }
  desaturate(t) {
    return (_o(this._rgb, 1, -t), this);
  }
  rotate(t) {
    return (xf(this._rgb, t), this);
  }
}
function gu(i) {
  return new Bo(i);
}
function bu(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function sr(i) {
  return bu(i) ? i : gu(i);
}
function vl(i) {
  return bu(i) ? i : gu(i).saturate(0.5).darken(0.1).hexString();
}
const In = Object.create(null),
  $l = Object.create(null);
function Ts(i, t) {
  if (!t) return i;
  const e = t.split(".");
  for (let n = 0, s = e.length; n < s; ++n) {
    const o = e[n];
    i = i[o] || (i[o] = Object.create(null));
  }
  return i;
}
function yl(i, t, e) {
  return typeof t == "string" ? Os(Ts(i, t), e) : Os(Ts(i, ""), t);
}
class Df {
  constructor(t) {
    ((this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (e) => e.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (e, n) => vl(n.backgroundColor)),
      (this.hoverBorderColor = (e, n) => vl(n.borderColor)),
      (this.hoverColor = (e, n) => vl(n.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t));
  }
  set(t, e) {
    return yl(this, t, e);
  }
  get(t) {
    return Ts(this, t);
  }
  describe(t, e) {
    return yl($l, t, e);
  }
  override(t, e) {
    return yl(In, t, e);
  }
  route(t, e, n, s) {
    const o = Ts(this, t),
      l = Ts(this, n),
      a = "_" + e;
    Object.defineProperties(o, {
      [a]: { value: o[e], writable: !0 },
      [e]: {
        enumerable: !0,
        get() {
          const r = this[a],
            u = l[s];
          return ee(r) ? Object.assign({}, u, r) : Kt(r, u);
        },
        set(r) {
          this[a] = r;
        },
      },
    });
  }
}
var ie = new Df({
  _scriptable: (i) => !i.startsWith("on"),
  _indexable: (i) => i !== "events",
  hover: { _fallback: "interaction" },
  interaction: { _scriptable: !1, _indexable: !1 },
});
function Rf(i) {
  return !i || ne(i.size) || ne(i.family)
    ? null
    : (i.style ? i.style + " " : "") +
        (i.weight ? i.weight + " " : "") +
        i.size +
        "px " +
        i.family;
}
function $o(i, t, e, n, s) {
  let o = t[s];
  return (
    o || ((o = t[s] = i.measureText(s).width), e.push(s)),
    o > n && (n = o),
    n
  );
}
function Of(i, t, e, n) {
  n = n || {};
  let s = (n.data = n.data || {}),
    o = (n.garbageCollect = n.garbageCollect || []);
  (n.font !== t &&
    ((s = n.data = {}), (o = n.garbageCollect = []), (n.font = t)),
    i.save(),
    (i.font = t));
  let l = 0;
  const a = e.length;
  let r, u, d, p, m;
  for (r = 0; r < a; r++)
    if (((p = e[r]), p != null && me(p) !== !0)) l = $o(i, s, o, l, p);
    else if (me(p))
      for (u = 0, d = p.length; u < d; u++)
        ((m = p[u]), m != null && !me(m) && (l = $o(i, s, o, l, m)));
  i.restore();
  const _ = o.length / 2;
  if (_ > e.length) {
    for (r = 0; r < _; r++) delete s[o[r]];
    o.splice(0, _);
  }
  return l;
}
function Cn(i, t, e) {
  const n = i.currentDevicePixelRatio,
    s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * n) / n + s;
}
function or(i, t) {
  ((t = t || i.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, i.width, i.height),
    t.restore());
}
function zl(i, t, e, n) {
  vu(i, t, e, n, null);
}
function vu(i, t, e, n, s) {
  let o, l, a, r, u, d;
  const p = t.pointStyle,
    m = t.rotation,
    _ = t.radius;
  let g = (m || 0) * Zd;
  if (
    p &&
    typeof p == "object" &&
    ((o = p.toString()),
    o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")
  ) {
    (i.save(),
      i.translate(e, n),
      i.rotate(g),
      i.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height),
      i.restore());
    return;
  }
  if (!(isNaN(_) || _ <= 0)) {
    switch ((i.beginPath(), p)) {
      default:
        (s ? i.ellipse(e, n, s / 2, _, 0, 0, fe) : i.arc(e, n, _, 0, fe),
          i.closePath());
        break;
      case "triangle":
        (i.moveTo(e + Math.sin(g) * _, n - Math.cos(g) * _),
          (g += Ka),
          i.lineTo(e + Math.sin(g) * _, n - Math.cos(g) * _),
          (g += Ka),
          i.lineTo(e + Math.sin(g) * _, n - Math.cos(g) * _),
          i.closePath());
        break;
      case "rectRounded":
        ((u = _ * 0.516),
          (r = _ - u),
          (l = Math.cos(g + ps) * r),
          (a = Math.sin(g + ps) * r),
          i.arc(e - l, n - a, u, g - ve, g - ke),
          i.arc(e + a, n - l, u, g - ke, g),
          i.arc(e + l, n + a, u, g, g + ke),
          i.arc(e - a, n + l, u, g + ke, g + ve),
          i.closePath());
        break;
      case "rect":
        if (!m) {
          ((r = Math.SQRT1_2 * _),
            (d = s ? s / 2 : r),
            i.rect(e - d, n - r, 2 * d, 2 * r));
          break;
        }
        g += ps;
      case "rectRot":
        ((l = Math.cos(g) * _),
          (a = Math.sin(g) * _),
          i.moveTo(e - l, n - a),
          i.lineTo(e + a, n - l),
          i.lineTo(e + l, n + a),
          i.lineTo(e - a, n + l),
          i.closePath());
        break;
      case "crossRot":
        g += ps;
      case "cross":
        ((l = Math.cos(g) * _),
          (a = Math.sin(g) * _),
          i.moveTo(e - l, n - a),
          i.lineTo(e + l, n + a),
          i.moveTo(e + a, n - l),
          i.lineTo(e - a, n + l));
        break;
      case "star":
        ((l = Math.cos(g) * _),
          (a = Math.sin(g) * _),
          i.moveTo(e - l, n - a),
          i.lineTo(e + l, n + a),
          i.moveTo(e + a, n - l),
          i.lineTo(e - a, n + l),
          (g += ps),
          (l = Math.cos(g) * _),
          (a = Math.sin(g) * _),
          i.moveTo(e - l, n - a),
          i.lineTo(e + l, n + a),
          i.moveTo(e + a, n - l),
          i.lineTo(e - a, n + l));
        break;
      case "line":
        ((l = s ? s / 2 : Math.cos(g) * _),
          (a = Math.sin(g) * _),
          i.moveTo(e - l, n - a),
          i.lineTo(e + l, n + a));
        break;
      case "dash":
        (i.moveTo(e, n), i.lineTo(e + Math.cos(g) * _, n + Math.sin(g) * _));
        break;
    }
    (i.fill(), t.borderWidth > 0 && i.stroke());
  }
}
function Es(i, t, e) {
  return (
    (e = e || 0.5),
    !t ||
      (i &&
        i.x > t.left - e &&
        i.x < t.right + e &&
        i.y > t.top - e &&
        i.y < t.bottom + e)
  );
}
function Xo(i, t) {
  (i.save(),
    i.beginPath(),
    i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    i.clip());
}
function Ko(i) {
  i.restore();
}
function Ff(i, t, e, n, s) {
  if (!t) return i.lineTo(e.x, e.y);
  if (s === "middle") {
    const o = (t.x + e.x) / 2;
    (i.lineTo(o, t.y), i.lineTo(o, e.y));
  } else (s === "after") != !!n ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function Ef(i, t, e, n) {
  if (!t) return i.lineTo(e.x, e.y);
  i.bezierCurveTo(
    n ? t.cp1x : t.cp2x,
    n ? t.cp1y : t.cp2y,
    n ? e.cp2x : e.cp1x,
    n ? e.cp2y : e.cp1y,
    e.x,
    e.y,
  );
}
function Bn(i, t, e, n, s, o = {}) {
  const l = me(t) ? t : [t],
    a = o.strokeWidth > 0 && o.strokeColor !== "";
  let r, u;
  for (i.save(), i.font = s.string, If(i, o), r = 0; r < l.length; ++r)
    ((u = l[r]),
      a &&
        (o.strokeColor && (i.strokeStyle = o.strokeColor),
        ne(o.strokeWidth) || (i.lineWidth = o.strokeWidth),
        i.strokeText(u, e, n, o.maxWidth)),
      i.fillText(u, e, n, o.maxWidth),
      Bf(i, e, n, u, o),
      (n += s.lineHeight));
  i.restore();
}
function If(i, t) {
  (t.translation && i.translate(t.translation[0], t.translation[1]),
    ne(t.rotation) || i.rotate(t.rotation),
    t.color && (i.fillStyle = t.color),
    t.textAlign && (i.textAlign = t.textAlign),
    t.textBaseline && (i.textBaseline = t.textBaseline));
}
function Bf(i, t, e, n, s) {
  if (s.strikethrough || s.underline) {
    const o = i.measureText(n),
      l = t - o.actualBoundingBoxLeft,
      a = t + o.actualBoundingBoxRight,
      r = e - o.actualBoundingBoxAscent,
      u = e + o.actualBoundingBoxDescent,
      d = s.strikethrough ? (r + u) / 2 : u;
    ((i.strokeStyle = i.fillStyle),
      i.beginPath(),
      (i.lineWidth = s.decorationWidth || 2),
      i.moveTo(l, d),
      i.lineTo(a, d),
      i.stroke());
  }
}
function Is(i, t) {
  const { x: e, y: n, w: s, h: o, radius: l } = t;
  (i.arc(e + l.topLeft, n + l.topLeft, l.topLeft, -ke, ve, !0),
    i.lineTo(e, n + o - l.bottomLeft),
    i.arc(e + l.bottomLeft, n + o - l.bottomLeft, l.bottomLeft, ve, ke, !0),
    i.lineTo(e + s - l.bottomRight, n + o),
    i.arc(
      e + s - l.bottomRight,
      n + o - l.bottomRight,
      l.bottomRight,
      ke,
      0,
      !0,
    ),
    i.lineTo(e + s, n + l.topRight),
    i.arc(e + s - l.topRight, n + l.topRight, l.topRight, 0, -ke, !0),
    i.lineTo(e + l.topLeft, n));
}
const $f = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
  zf = new RegExp(
    /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,
  );
function Nf(i, t) {
  const e = ("" + i).match($f);
  if (!e || e[1] === "normal") return t * 1.2;
  switch (((i = +e[2]), e[3])) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return t * i;
}
const jf = (i) => +i || 0;
function la(i, t) {
  const e = {},
    n = ee(t),
    s = n ? Object.keys(t) : t,
    o = ee(i) ? (n ? (l) => Kt(i[l], i[t[l]]) : (l) => i[l]) : () => i;
  for (const l of s) e[l] = jf(o(l));
  return e;
}
function yu(i) {
  return la(i, { top: "y", right: "x", bottom: "y", left: "x" });
}
function On(i) {
  return la(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function He(i) {
  const t = yu(i);
  return ((t.width = t.left + t.right), (t.height = t.top + t.bottom), t);
}
function Be(i, t) {
  ((i = i || {}), (t = t || ie.font));
  let e = Kt(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let n = Kt(i.style, t.style);
  n &&
    !("" + n).match(zf) &&
    (console.warn('Invalid font style specified: "' + n + '"'), (n = ""));
  const s = {
    family: Kt(i.family, t.family),
    lineHeight: Nf(Kt(i.lineHeight, t.lineHeight), e),
    size: e,
    style: n,
    weight: Kt(i.weight, t.weight),
    string: "",
  };
  return ((s.string = Rf(s)), s);
}
function ks(i, t, e, n) {
  let s = !0,
    o,
    l,
    a;
  for (o = 0, l = i.length; o < l; ++o)
    if (
      ((a = i[o]),
      a !== void 0 &&
        (t !== void 0 && typeof a == "function" && ((a = a(t)), (s = !1)),
        e !== void 0 && me(a) && ((a = a[e % a.length]), (s = !1)),
        a !== void 0))
    )
      return (n && !s && (n.cacheable = !1), a);
}
function Wf(i, t, e) {
  const { min: n, max: s } = i,
    o = su(t, (s - n) / 2),
    l = (a, r) => (e && a === 0 ? 0 : a + r);
  return { min: l(n, -Math.abs(o)), max: l(s, o) };
}
function bn(i, t) {
  return Object.assign(Object.create(i), t);
}
function aa(i, t = [""], e = i, n, s = () => i[0]) {
  ei(n) || (n = Mu("_fallback", i));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: e,
    _fallback: n,
    _getTarget: s,
    override: (l) => aa([l, ...i], t, e, n),
  };
  return new Proxy(o, {
    deleteProperty(l, a) {
      return (delete l[a], delete l._keys, delete i[0][a], !0);
    },
    get(l, a) {
      return xu(l, a, () => Gf(a, t, i, l));
    },
    getOwnPropertyDescriptor(l, a) {
      return Reflect.getOwnPropertyDescriptor(l._scopes[0], a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    has(l, a) {
      return ar(l).includes(a);
    },
    ownKeys(l) {
      return ar(l);
    },
    set(l, a, r) {
      const u = l._storage || (l._storage = s());
      return ((l[a] = u[a] = r), delete l._keys, !0);
    },
  });
}
function ls(i, t, e, n) {
  const s = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: new Set(),
    _descriptors: wu(i, n),
    setContext: (o) => ls(i, o, e, n),
    override: (o) => ls(i.override(o), t, e, n),
  };
  return new Proxy(s, {
    deleteProperty(o, l) {
      return (delete o[l], delete i[l], !0);
    },
    get(o, l, a) {
      return xu(o, l, () => Vf(o, l, a));
    },
    getOwnPropertyDescriptor(o, l) {
      return o._descriptors.allKeys
        ? Reflect.has(i, l)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(i, l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    has(o, l) {
      return Reflect.has(i, l);
    },
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    set(o, l, a) {
      return ((i[l] = a), delete o[l], !0);
    },
  });
}
function wu(i, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: e = t.scriptable,
    _indexable: n = t.indexable,
    _allKeys: s = t.allKeys,
  } = i;
  return {
    allKeys: s,
    scriptable: e,
    indexable: n,
    isScriptable: gn(e) ? e : () => e,
    isIndexable: gn(n) ? n : () => n,
  };
}
const Hf = (i, t) => (i ? i + Jl(t) : t),
  ra = (i, t) =>
    ee(t) &&
    i !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function xu(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
  const n = e();
  return ((i[t] = n), n);
}
function Vf(i, t, e) {
  const { _proxy: n, _context: s, _subProxy: o, _descriptors: l } = i;
  let a = n[t];
  return (
    gn(a) && l.isScriptable(t) && (a = Uf(t, a, i, e)),
    me(a) && a.length && (a = Yf(t, a, i, l.isIndexable)),
    ra(t, a) && (a = ls(a, s, o && o[t], l)),
    a
  );
}
function Uf(i, t, e, n) {
  const { _proxy: s, _context: o, _subProxy: l, _stack: a } = e;
  if (a.has(i))
    throw new Error(
      "Recursion detected: " + Array.from(a).join("->") + "->" + i,
    );
  return (
    a.add(i),
    (t = t(o, l || n)),
    a.delete(i),
    ra(i, t) && (t = ca(s._scopes, s, i, t)),
    t
  );
}
function Yf(i, t, e, n) {
  const { _proxy: s, _context: o, _subProxy: l, _descriptors: a } = e;
  if (ei(o.index) && n(i)) t = t[o.index % t.length];
  else if (ee(t[0])) {
    const r = t,
      u = s._scopes.filter((d) => d !== r);
    t = [];
    for (const d of r) {
      const p = ca(u, s, i, d);
      t.push(ls(p, o, l && l[i], a));
    }
  }
  return t;
}
function ku(i, t, e) {
  return gn(i) ? i(t, e) : i;
}
const Xf = (i, t) => (i === !0 ? t : typeof i == "string" ? _n(t, i) : void 0);
function Kf(i, t, e, n, s) {
  for (const o of t) {
    const l = Xf(e, o);
    if (l) {
      i.add(l);
      const a = ku(l._fallback, e, s);
      if (ei(a) && a !== e && a !== n) return a;
    } else if (l === !1 && ei(n) && e !== n) return null;
  }
  return !1;
}
function ca(i, t, e, n) {
  const s = t._rootScopes,
    o = ku(t._fallback, e, n),
    l = [...i, ...s],
    a = new Set();
  a.add(n);
  let r = lr(a, l, e, o || e, n);
  return r === null ||
    (ei(o) && o !== e && ((r = lr(a, l, o, r, n)), r === null))
    ? !1
    : aa(Array.from(a), [""], s, o, () => qf(t, e, n));
}
function lr(i, t, e, n, s) {
  for (; e; ) e = Kf(i, t, e, n, s);
  return e;
}
function qf(i, t, e) {
  const n = i._getTarget();
  t in n || (n[t] = {});
  const s = n[t];
  return me(s) && ee(e) ? e : s;
}
function Gf(i, t, e, n) {
  let s;
  for (const o of t)
    if (((s = Mu(Hf(o, i), e)), ei(s))) return ra(i, s) ? ca(e, n, i, s) : s;
}
function Mu(i, t) {
  for (const e of t) {
    if (!e) continue;
    const n = e[i];
    if (ei(n)) return n;
  }
}
function ar(i) {
  let t = i._keys;
  return (t || (t = i._keys = Qf(i._scopes)), t);
}
function Qf(i) {
  const t = new Set();
  for (const e of i)
    for (const n of Object.keys(e).filter((s) => !s.startsWith("_"))) t.add(n);
  return Array.from(t);
}
function Su(i, t, e, n) {
  const { iScale: s } = i,
    { key: o = "r" } = this._parsing,
    l = new Array(n);
  let a, r, u, d;
  for (a = 0, r = n; a < r; ++a)
    ((u = a + e), (d = t[u]), (l[a] = { r: s.parse(_n(d, o), u) }));
  return l;
}
const Zf = Number.EPSILON || 1e-14,
  as = (i, t) => t < i.length && !i[t].skip && i[t],
  Au = (i) => (i === "x" ? "y" : "x");
function Jf(i, t, e, n) {
  const s = i.skip ? t : i,
    o = t,
    l = e.skip ? t : e,
    a = Il(o, s),
    r = Il(l, o);
  let u = a / (a + r),
    d = r / (a + r);
  ((u = isNaN(u) ? 0 : u), (d = isNaN(d) ? 0 : d));
  const p = n * u,
    m = n * d;
  return {
    previous: { x: o.x - p * (l.x - s.x), y: o.y - p * (l.y - s.y) },
    next: { x: o.x + m * (l.x - s.x), y: o.y + m * (l.y - s.y) },
  };
}
function th(i, t, e) {
  const n = i.length;
  let s,
    o,
    l,
    a,
    r,
    u = as(i, 0);
  for (let d = 0; d < n - 1; ++d)
    if (((r = u), (u = as(i, d + 1)), !(!r || !u))) {
      if (Ps(t[d], 0, Zf)) {
        e[d] = e[d + 1] = 0;
        continue;
      }
      ((s = e[d] / t[d]),
        (o = e[d + 1] / t[d]),
        (a = Math.pow(s, 2) + Math.pow(o, 2)),
        !(a <= 9) &&
          ((l = 3 / Math.sqrt(a)),
          (e[d] = s * l * t[d]),
          (e[d + 1] = o * l * t[d])));
    }
}
function eh(i, t, e = "x") {
  const n = Au(e),
    s = i.length;
  let o,
    l,
    a,
    r = as(i, 0);
  for (let u = 0; u < s; ++u) {
    if (((l = a), (a = r), (r = as(i, u + 1)), !a)) continue;
    const d = a[e],
      p = a[n];
    (l &&
      ((o = (d - l[e]) / 3),
      (a[`cp1${e}`] = d - o),
      (a[`cp1${n}`] = p - o * t[u])),
      r &&
        ((o = (r[e] - d) / 3),
        (a[`cp2${e}`] = d + o),
        (a[`cp2${n}`] = p + o * t[u])));
  }
}
function ih(i, t = "x") {
  const e = Au(t),
    n = i.length,
    s = Array(n).fill(0),
    o = Array(n);
  let l,
    a,
    r,
    u = as(i, 0);
  for (l = 0; l < n; ++l)
    if (((a = r), (r = u), (u = as(i, l + 1)), !!r)) {
      if (u) {
        const d = u[t] - r[t];
        s[l] = d !== 0 ? (u[e] - r[e]) / d : 0;
      }
      o[l] = a
        ? u
          ? Oi(s[l - 1]) !== Oi(s[l])
            ? 0
            : (s[l - 1] + s[l]) / 2
          : s[l - 1]
        : s[l];
    }
  (th(i, s, o), eh(i, o, t));
}
function go(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function nh(i, t) {
  let e,
    n,
    s,
    o,
    l,
    a = Es(i[0], t);
  for (e = 0, n = i.length; e < n; ++e)
    ((l = o),
      (o = a),
      (a = e < n - 1 && Es(i[e + 1], t)),
      o &&
        ((s = i[e]),
        l &&
          ((s.cp1x = go(s.cp1x, t.left, t.right)),
          (s.cp1y = go(s.cp1y, t.top, t.bottom))),
        a &&
          ((s.cp2x = go(s.cp2x, t.left, t.right)),
          (s.cp2y = go(s.cp2y, t.top, t.bottom)))));
}
function sh(i, t, e, n, s) {
  let o, l, a, r;
  if (
    (t.spanGaps && (i = i.filter((u) => !u.skip)),
    t.cubicInterpolationMode === "monotone")
  )
    ih(i, s);
  else {
    let u = n ? i[i.length - 1] : i[0];
    for (o = 0, l = i.length; o < l; ++o)
      ((a = i[o]),
        (r = Jf(u, a, i[Math.min(o + 1, l - (n ? 0 : 1)) % l], t.tension)),
        (a.cp1x = r.previous.x),
        (a.cp1y = r.previous.y),
        (a.cp2x = r.next.x),
        (a.cp2y = r.next.y),
        (u = a));
  }
  t.capBezierPoints && nh(i, e);
}
function Lu() {
  return typeof window < "u" && typeof document < "u";
}
function ua(i) {
  let t = i.parentNode;
  return (t && t.toString() === "[object ShadowRoot]" && (t = t.host), t);
}
function zo(i, t, e) {
  let n;
  return (
    typeof i == "string"
      ? ((n = parseInt(i, 10)),
        i.indexOf("%") !== -1 && (n = (n / 100) * t.parentNode[e]))
      : (n = i),
    n
  );
}
const qo = (i) => window.getComputedStyle(i, null);
function oh(i, t) {
  return qo(i).getPropertyValue(t);
}
const lh = ["top", "right", "bottom", "left"];
function Fn(i, t, e) {
  const n = {};
  e = e ? "-" + e : "";
  for (let s = 0; s < 4; s++) {
    const o = lh[s];
    n[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return ((n.width = n.left + n.right), (n.height = n.top + n.bottom), n);
}
const ah = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function rh(i, t) {
  const e = i.touches,
    n = e && e.length ? e[0] : i,
    { offsetX: s, offsetY: o } = n;
  let l = !1,
    a,
    r;
  if (ah(s, o, i.target)) ((a = s), (r = o));
  else {
    const u = t.getBoundingClientRect();
    ((a = n.clientX - u.left), (r = n.clientY - u.top), (l = !0));
  }
  return { x: a, y: r, box: l };
}
function Dn(i, t) {
  if ("native" in i) return i;
  const { canvas: e, currentDevicePixelRatio: n } = t,
    s = qo(e),
    o = s.boxSizing === "border-box",
    l = Fn(s, "padding"),
    a = Fn(s, "border", "width"),
    { x: r, y: u, box: d } = rh(i, e),
    p = l.left + (d && a.left),
    m = l.top + (d && a.top);
  let { width: _, height: g } = t;
  return (
    o && ((_ -= l.width + a.width), (g -= l.height + a.height)),
    {
      x: Math.round((((r - p) / _) * e.width) / n),
      y: Math.round((((u - m) / g) * e.height) / n),
    }
  );
}
function ch(i, t, e) {
  let n, s;
  if (t === void 0 || e === void 0) {
    const o = ua(i);
    if (!o) ((t = i.clientWidth), (e = i.clientHeight));
    else {
      const l = o.getBoundingClientRect(),
        a = qo(o),
        r = Fn(a, "border", "width"),
        u = Fn(a, "padding");
      ((t = l.width - u.width - r.width),
        (e = l.height - u.height - r.height),
        (n = zo(a.maxWidth, o, "clientWidth")),
        (s = zo(a.maxHeight, o, "clientHeight")));
    }
  }
  return { width: t, height: e, maxWidth: n || Io, maxHeight: s || Io };
}
const wl = (i) => Math.round(i * 10) / 10;
function uh(i, t, e, n) {
  const s = qo(i),
    o = Fn(s, "margin"),
    l = zo(s.maxWidth, i, "clientWidth") || Io,
    a = zo(s.maxHeight, i, "clientHeight") || Io,
    r = ch(i, t, e);
  let { width: u, height: d } = r;
  if (s.boxSizing === "content-box") {
    const p = Fn(s, "border", "width"),
      m = Fn(s, "padding");
    ((u -= m.width + p.width), (d -= m.height + p.height));
  }
  return (
    (u = Math.max(0, u - o.width)),
    (d = Math.max(0, n ? Math.floor(u / n) : d - o.height)),
    (u = wl(Math.min(u, l, r.maxWidth))),
    (d = wl(Math.min(d, a, r.maxHeight))),
    u && !d && (d = wl(u / 2)),
    { width: u, height: d }
  );
}
function rr(i, t, e) {
  const n = t || 1,
    s = Math.floor(i.height * n),
    o = Math.floor(i.width * n);
  ((i.height = s / n), (i.width = o / n));
  const l = i.canvas;
  return (
    l.style &&
      (e || (!l.style.height && !l.style.width)) &&
      ((l.style.height = `${i.height}px`), (l.style.width = `${i.width}px`)),
    i.currentDevicePixelRatio !== n || l.height !== s || l.width !== o
      ? ((i.currentDevicePixelRatio = n),
        (l.height = s),
        (l.width = o),
        i.ctx.setTransform(n, 0, 0, n, 0, 0),
        !0)
      : !1
  );
}
const dh = (function () {
  let i = !1;
  try {
    const t = {
      get passive() {
        return ((i = !0), !1);
      },
    };
    (window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t));
  } catch {}
  return i;
})();
function cr(i, t) {
  const e = oh(i, t),
    n = e && e.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
function Rn(i, t, e, n) {
  return { x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) };
}
function fh(i, t, e, n) {
  return {
    x: i.x + e * (t.x - i.x),
    y:
      n === "middle"
        ? e < 0.5
          ? i.y
          : t.y
        : n === "after"
          ? e < 1
            ? i.y
            : t.y
          : e > 0
            ? t.y
            : i.y,
  };
}
function hh(i, t, e, n) {
  const s = { x: i.cp2x, y: i.cp2y },
    o = { x: t.cp1x, y: t.cp1y },
    l = Rn(i, s, e),
    a = Rn(s, o, e),
    r = Rn(o, t, e),
    u = Rn(l, a, e),
    d = Rn(a, r, e);
  return Rn(u, d, e);
}
const ur = new Map();
function ph(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let n = ur.get(e);
  return (n || ((n = new Intl.NumberFormat(i, t)), ur.set(e, n)), n);
}
function Ns(i, t, e) {
  return ph(t, e).format(i);
}
const mh = function (i, t) {
    return {
      x(e) {
        return i + i + t - e;
      },
      setWidth(e) {
        t = e;
      },
      textAlign(e) {
        return e === "center" ? e : e === "right" ? "left" : "right";
      },
      xPlus(e, n) {
        return e - n;
      },
      leftForLtr(e, n) {
        return e - n;
      },
    };
  },
  _h = function () {
    return {
      x(i) {
        return i;
      },
      setWidth(i) {},
      textAlign(i) {
        return i;
      },
      xPlus(i, t) {
        return i + t;
      },
      leftForLtr(i, t) {
        return i;
      },
    };
  };
function is(i, t, e) {
  return i ? mh(t, e) : _h();
}
function Pu(i, t) {
  let e, n;
  (t === "ltr" || t === "rtl") &&
    ((e = i.canvas.style),
    (n = [e.getPropertyValue("direction"), e.getPropertyPriority("direction")]),
    e.setProperty("direction", t, "important"),
    (i.prevTextDirection = n));
}
function Cu(i, t) {
  t !== void 0 &&
    (delete i.prevTextDirection,
    i.canvas.style.setProperty("direction", t[0], t[1]));
}
function Tu(i) {
  return i === "angle"
    ? { between: Fs, compare: ef, normalize: Ke }
    : { between: tn, compare: (t, e) => t - e, normalize: (t) => t };
}
function dr({ start: i, end: t, count: e, loop: n, style: s }) {
  return {
    start: i % e,
    end: t % e,
    loop: n && (t - i + 1) % e === 0,
    style: s,
  };
}
function gh(i, t, e) {
  const { property: n, start: s, end: o } = e,
    { between: l, normalize: a } = Tu(n),
    r = t.length;
  let { start: u, end: d, loop: p } = i,
    m,
    _;
  if (p) {
    for (u += r, d += r, m = 0, _ = r; m < _ && l(a(t[u % r][n]), s, o); ++m)
      (u--, d--);
    ((u %= r), (d %= r));
  }
  return (d < u && (d += r), { start: u, end: d, loop: p, style: i.style });
}
function Du(i, t, e) {
  if (!e) return [i];
  const { property: n, start: s, end: o } = e,
    l = t.length,
    { compare: a, between: r, normalize: u } = Tu(n),
    { start: d, end: p, loop: m, style: _ } = gh(i, t, e),
    g = [];
  let b = !1,
    w = null,
    y,
    S,
    k;
  const C = () => r(s, k, y) && a(s, k) !== 0,
    P = () => a(o, y) === 0 || r(o, k, y),
    T = () => b || C(),
    R = () => !b || P();
  for (let F = d, D = d; F <= p; ++F)
    ((S = t[F % l]),
      !S.skip &&
        ((y = u(S[n])),
        y !== k &&
          ((b = r(y, s, o)),
          w === null && T() && (w = a(y, s) === 0 ? F : D),
          w !== null &&
            R() &&
            (g.push(dr({ start: w, end: F, loop: m, count: l, style: _ })),
            (w = null)),
          (D = F),
          (k = y))));
  return (
    w !== null && g.push(dr({ start: w, end: p, loop: m, count: l, style: _ })),
    g
  );
}
function Ru(i, t) {
  const e = [],
    n = i.segments;
  for (let s = 0; s < n.length; s++) {
    const o = Du(n[s], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function bh(i, t, e, n) {
  let s = 0,
    o = t - 1;
  if (e && !n) for (; s < t && !i[s].skip; ) s++;
  for (; s < t && i[s].skip; ) s++;
  for (s %= t, e && (o += s); o > s && i[o % t].skip; ) o--;
  return ((o %= t), { start: s, end: o });
}
function vh(i, t, e, n) {
  const s = i.length,
    o = [];
  let l = t,
    a = i[t],
    r;
  for (r = t + 1; r <= e; ++r) {
    const u = i[r % s];
    (u.skip || u.stop
      ? a.skip ||
        ((n = !1),
        o.push({ start: t % s, end: (r - 1) % s, loop: n }),
        (t = l = u.stop ? r : null))
      : ((l = r), a.skip && (t = r)),
      (a = u));
  }
  return (l !== null && o.push({ start: t % s, end: l % s, loop: n }), o);
}
function yh(i, t) {
  const e = i.points,
    n = i.options.spanGaps,
    s = e.length;
  if (!s) return [];
  const o = !!i._loop,
    { start: l, end: a } = bh(e, s, o, n);
  if (n === !0) return fr(i, [{ start: l, end: a, loop: o }], e, t);
  const r = a < l ? a + s : a,
    u = !!i._fullLoop && l === 0 && a === s - 1;
  return fr(i, vh(e, l, r, u), e, t);
}
function fr(i, t, e, n) {
  return !n || !n.setContext || !e ? t : wh(i, t, e, n);
}
function wh(i, t, e, n) {
  const s = i._chart.getContext(),
    o = hr(i.options),
    {
      _datasetIndex: l,
      options: { spanGaps: a },
    } = i,
    r = e.length,
    u = [];
  let d = o,
    p = t[0].start,
    m = p;
  function _(g, b, w, y) {
    const S = a ? -1 : 1;
    if (g !== b) {
      for (g += r; e[g % r].skip; ) g -= S;
      for (; e[b % r].skip; ) b += S;
      g % r !== b % r &&
        (u.push({ start: g % r, end: b % r, loop: w, style: y }),
        (d = y),
        (p = b % r));
    }
  }
  for (const g of t) {
    p = a ? p : g.start;
    let b = e[p % r],
      w;
    for (m = p + 1; m <= g.end; m++) {
      const y = e[m % r];
      ((w = hr(
        n.setContext(
          bn(s, {
            type: "segment",
            p0: b,
            p1: y,
            p0DataIndex: (m - 1) % r,
            p1DataIndex: m % r,
            datasetIndex: l,
          }),
        ),
      )),
        xh(w, d) && _(p, m - 1, g.loop, d),
        (b = y),
        (d = w));
    }
    p < m - 1 && _(p, m - 1, g.loop, d);
  }
  return u;
}
function hr(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor,
  };
}
function xh(i, t) {
  return t && JSON.stringify(i) !== JSON.stringify(t);
}
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ class kh {
  constructor() {
    ((this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0));
  }
  _notify(t, e, n, s) {
    const o = e.listeners[s],
      l = e.duration;
    o.forEach((a) =>
      a({
        chart: t,
        initial: e.initial,
        numSteps: l,
        currentStep: Math.min(n - e.start, l),
      }),
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = uu.call(window, () => {
        (this._update(),
          (this._request = null),
          this._running && this._refresh());
      })));
  }
  _update(t = Date.now()) {
    let e = 0;
    (this._charts.forEach((n, s) => {
      if (!n.running || !n.items.length) return;
      const o = n.items;
      let l = o.length - 1,
        a = !1,
        r;
      for (; l >= 0; --l)
        ((r = o[l]),
          r._active
            ? (r._total > n.duration && (n.duration = r._total),
              r.tick(t),
              (a = !0))
            : ((o[l] = o[o.length - 1]), o.pop()));
      (a && (s.draw(), this._notify(s, n, t, "progress")),
        o.length ||
          ((n.running = !1),
          this._notify(s, n, t, "complete"),
          (n.initial = !1)),
        (e += o.length));
    }),
      (this._lastDate = t),
      e === 0 && (this._running = !1));
  }
  _getAnims(t) {
    const e = this._charts;
    let n = e.get(t);
    return (
      n ||
        ((n = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        e.set(t, n)),
      n
    );
  }
  listen(t, e, n) {
    this._getAnims(t).listeners[e].push(n);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e &&
      ((e.running = !0),
      (e.start = Date.now()),
      (e.duration = e.items.reduce((n, s) => Math.max(n, s._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length) return;
    const n = e.items;
    let s = n.length - 1;
    for (; s >= 0; --s) n[s].cancel();
    ((e.items = []), this._notify(t, e, Date.now(), "complete"));
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Qi = new kh();
const pr = "transparent",
  Mh = {
    boolean(i, t, e) {
      return e > 0.5 ? t : i;
    },
    color(i, t, e) {
      const n = sr(i || pr),
        s = n.valid && sr(t || pr);
      return s && s.valid ? s.mix(n, e).hexString() : t;
    },
    number(i, t, e) {
      return i + (t - i) * e;
    },
  };
class Sh {
  constructor(t, e, n, s) {
    const o = e[n];
    s = ks([t.to, s, o, t.from]);
    const l = ks([t.from, o, s]);
    ((this._active = !0),
      (this._fn = t.fn || Mh[t.type || typeof l]),
      (this._easing = Cs[t.easing] || Cs.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = e),
      (this._prop = n),
      (this._from = l),
      (this._to = s),
      (this._promises = void 0));
  }
  active() {
    return this._active;
  }
  update(t, e, n) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop],
        o = n - this._start,
        l = this._duration - o;
      ((this._start = n),
        (this._duration = Math.floor(Math.max(l, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = ks([t.to, e, s, t.from])),
        (this._from = ks([t.from, s, e])));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const e = t - this._start,
      n = this._duration,
      s = this._prop,
      o = this._from,
      l = this._loop,
      a = this._to;
    let r;
    if (((this._active = o !== a && (l || e < n)), !this._active)) {
      ((this._target[s] = a), this._notify(!0));
      return;
    }
    if (e < 0) {
      this._target[s] = o;
      return;
    }
    ((r = (e / n) % 2),
      (r = l && r > 1 ? 2 - r : r),
      (r = this._easing(Math.min(1, Math.max(0, r)))),
      (this._target[s] = this._fn(o, a, r)));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, n) => {
      t.push({ res: e, rej: n });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej",
      n = this._promises || [];
    for (let s = 0; s < n.length; s++) n[s][e]();
  }
}
const Ah = ["x", "y", "borderWidth", "radius", "tension"],
  Lh = ["color", "borderColor", "backgroundColor"];
ie.set("animation", {
  delay: void 0,
  duration: 1e3,
  easing: "easeOutQuart",
  fn: void 0,
  from: void 0,
  loop: void 0,
  to: void 0,
  type: void 0,
});
const Ph = Object.keys(ie.animation);
ie.describe("animation", {
  _fallback: !1,
  _indexable: !1,
  _scriptable: (i) => i !== "onProgress" && i !== "onComplete" && i !== "fn",
});
ie.set("animations", {
  colors: { type: "color", properties: Lh },
  numbers: { type: "number", properties: Ah },
});
ie.describe("animations", { _fallback: "animation" });
ie.set("transitions", {
  active: { animation: { duration: 400 } },
  resize: { animation: { duration: 0 } },
  show: {
    animations: {
      colors: { from: "transparent" },
      visible: { type: "boolean", duration: 0 },
    },
  },
  hide: {
    animations: {
      colors: { to: "transparent" },
      visible: { type: "boolean", easing: "linear", fn: (i) => i | 0 },
    },
  },
});
class Ou {
  constructor(t, e) {
    ((this._chart = t), (this._properties = new Map()), this.configure(e));
  }
  configure(t) {
    if (!ee(t)) return;
    const e = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const s = t[n];
      if (!ee(s)) return;
      const o = {};
      for (const l of Ph) o[l] = s[l];
      ((me(s.properties) && s.properties) || [n]).forEach((l) => {
        (l === n || !e.has(l)) && e.set(l, o);
      });
    });
  }
  _animateOptions(t, e) {
    const n = e.options,
      s = Th(t, n);
    if (!s) return [];
    const o = this._createAnimations(s, n);
    return (
      n.$shared &&
        Ch(t.options.$animations, n).then(
          () => {
            t.options = n;
          },
          () => {},
        ),
      o
    );
  }
  _createAnimations(t, e) {
    const n = this._properties,
      s = [],
      o = t.$animations || (t.$animations = {}),
      l = Object.keys(e),
      a = Date.now();
    let r;
    for (r = l.length - 1; r >= 0; --r) {
      const u = l[r];
      if (u.charAt(0) === "$") continue;
      if (u === "options") {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const d = e[u];
      let p = o[u];
      const m = n.get(u);
      if (p)
        if (m && p.active()) {
          p.update(m, d, a);
          continue;
        } else p.cancel();
      if (!m || !m.duration) {
        t[u] = d;
        continue;
      }
      ((o[u] = p = new Sh(m, t, u, d)), s.push(p));
    }
    return s;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const n = this._createAnimations(t, e);
    if (n.length) return (Qi.add(this._chart, n), !0);
  }
}
function Ch(i, t) {
  const e = [],
    n = Object.keys(t);
  for (let s = 0; s < n.length; s++) {
    const o = i[n[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function Th(i, t) {
  if (!t) return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return (
    e.$shared &&
      (i.options = e = Object.assign({}, e, { $shared: !1, $animations: {} })),
    e
  );
}
function mr(i, t) {
  const e = (i && i.options) || {},
    n = e.reverse,
    s = e.min === void 0 ? t : 0,
    o = e.max === void 0 ? t : 0;
  return { start: n ? o : s, end: n ? s : o };
}
function Dh(i, t, e) {
  if (e === !1) return !1;
  const n = mr(i, e),
    s = mr(t, e);
  return { top: s.end, right: n.end, bottom: s.start, left: n.start };
}
function Rh(i) {
  let t, e, n, s;
  return (
    ee(i)
      ? ((t = i.top), (e = i.right), (n = i.bottom), (s = i.left))
      : (t = e = n = s = i),
    { top: t, right: e, bottom: n, left: s, disabled: i === !1 }
  );
}
function Fu(i, t) {
  const e = [],
    n = i._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = n.length; s < o; ++s) e.push(n[s].index);
  return e;
}
function _r(i, t, e, n = {}) {
  const s = i.keys,
    o = n.mode === "single";
  let l, a, r, u;
  if (t !== null) {
    for (l = 0, a = s.length; l < a; ++l) {
      if (((r = +s[l]), r === e)) {
        if (n.all) continue;
        break;
      }
      ((u = i.values[r]),
        Pe(u) && (o || t === 0 || Oi(t) === Oi(u)) && (t += u));
    }
    return t;
  }
}
function Oh(i) {
  const t = Object.keys(i),
    e = new Array(t.length);
  let n, s, o;
  for (n = 0, s = t.length; n < s; ++n)
    ((o = t[n]), (e[n] = { x: o, y: i[o] }));
  return e;
}
function gr(i, t) {
  const e = i && i.options.stacked;
  return e || (e === void 0 && t.stack !== void 0);
}
function Fh(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function Eh(i) {
  const { min: t, max: e, minDefined: n, maxDefined: s } = i.getUserBounds();
  return {
    min: n ? t : Number.NEGATIVE_INFINITY,
    max: s ? e : Number.POSITIVE_INFINITY,
  };
}
function Ih(i, t, e) {
  const n = i[t] || (i[t] = {});
  return n[e] || (n[e] = {});
}
function br(i, t, e, n) {
  for (const s of t.getMatchingVisibleMetas(n).reverse()) {
    const o = i[s.index];
    if ((e && o > 0) || (!e && o < 0)) return s.index;
  }
  return null;
}
function vr(i, t) {
  const { chart: e, _cachedMeta: n } = i,
    s = e._stacks || (e._stacks = {}),
    { iScale: o, vScale: l, index: a } = n,
    r = o.axis,
    u = l.axis,
    d = Fh(o, l, n),
    p = t.length;
  let m;
  for (let _ = 0; _ < p; ++_) {
    const g = t[_],
      { [r]: b, [u]: w } = g,
      y = g._stacks || (g._stacks = {});
    ((m = y[u] = Ih(s, d, b)),
      (m[a] = w),
      (m._top = br(m, l, !0, n.type)),
      (m._bottom = br(m, l, !1, n.type)));
  }
}
function xl(i, t) {
  const e = i.scales;
  return Object.keys(e)
    .filter((n) => e[n].axis === t)
    .shift();
}
function Bh(i, t) {
  return bn(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function $h(i, t, e) {
  return bn(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data",
  });
}
function ms(i, t) {
  const e = i.controller.index,
    n = i.vScale && i.vScale.axis;
  if (n) {
    t = t || i._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[n] === void 0 || o[n][e] === void 0) return;
      delete o[n][e];
    }
  }
}
const kl = (i) => i === "reset" || i === "none",
  yr = (i, t) => (t ? i : Object.assign({}, i)),
  zh = (i, t, e) =>
    i && !t.hidden && t._stacked && { keys: Fu(e, !0), values: null };
class di {
  constructor(t, e) {
    ((this.chart = t),
      (this._ctx = t.ctx),
      (this.index = e),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      this.initialize());
  }
  initialize() {
    const t = this._cachedMeta;
    (this.configure(),
      this.linkScales(),
      (t._stacked = gr(t.vScale, t)),
      this.addElements());
  }
  updateIndex(t) {
    (this.index !== t && ms(this._cachedMeta), (this.index = t));
  }
  linkScales() {
    const t = this.chart,
      e = this._cachedMeta,
      n = this.getDataset(),
      s = (p, m, _, g) => (p === "x" ? m : p === "r" ? g : _),
      o = (e.xAxisID = Kt(n.xAxisID, xl(t, "x"))),
      l = (e.yAxisID = Kt(n.yAxisID, xl(t, "y"))),
      a = (e.rAxisID = Kt(n.rAxisID, xl(t, "r"))),
      r = e.indexAxis,
      u = (e.iAxisID = s(r, o, l, a)),
      d = (e.vAxisID = s(r, l, o, a));
    ((e.xScale = this.getScaleForId(o)),
      (e.yScale = this.getScaleForId(l)),
      (e.rScale = this.getScaleForId(a)),
      (e.iScale = this.getScaleForId(u)),
      (e.vScale = this.getScaleForId(d)));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    (this._data && Qa(this._data, this), t._stacked && ms(t));
  }
  _dataCheck() {
    const t = this.getDataset(),
      e = t.data || (t.data = []),
      n = this._data;
    if (ee(e)) this._data = Oh(e);
    else if (n !== e) {
      if (n) {
        Qa(n, this);
        const s = this._cachedMeta;
        (ms(s), (s._parsed = []));
      }
      (e && Object.isExtensible(e) && lf(e, this),
        (this._syncList = []),
        (this._data = e));
    }
  }
  addElements() {
    const t = this._cachedMeta;
    (this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType()));
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta,
      n = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = e._stacked;
    ((e._stacked = gr(e.vScale, e)),
      e.stack !== n.stack && ((s = !0), ms(e), (e.stack = n.stack)),
      this._resyncElements(t),
      (s || o !== e._stacked) && vr(this, e._parsed));
  }
  configure() {
    const t = this.chart.config,
      e = t.datasetScopeKeys(this._type),
      n = t.getOptionScopes(this.getDataset(), e, !0);
    ((this.options = t.createResolver(n, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {}));
  }
  parse(t, e) {
    const { _cachedMeta: n, _data: s } = this,
      { iScale: o, _stacked: l } = n,
      a = o.axis;
    let r = t === 0 && e === s.length ? !0 : n._sorted,
      u = t > 0 && n._parsed[t - 1],
      d,
      p,
      m;
    if (this._parsing === !1) ((n._parsed = s), (n._sorted = !0), (m = s));
    else {
      me(s[t])
        ? (m = this.parseArrayData(n, s, t, e))
        : ee(s[t])
          ? (m = this.parseObjectData(n, s, t, e))
          : (m = this.parsePrimitiveData(n, s, t, e));
      const _ = () => p[a] === null || (u && p[a] < u[a]);
      for (d = 0; d < e; ++d)
        ((n._parsed[d + t] = p = m[d]), r && (_() && (r = !1), (u = p)));
      n._sorted = r;
    }
    l && vr(this, m);
  }
  parsePrimitiveData(t, e, n, s) {
    const { iScale: o, vScale: l } = t,
      a = o.axis,
      r = l.axis,
      u = o.getLabels(),
      d = o === l,
      p = new Array(s);
    let m, _, g;
    for (m = 0, _ = s; m < _; ++m)
      ((g = m + n),
        (p[m] = { [a]: d || o.parse(u[g], g), [r]: l.parse(e[g], g) }));
    return p;
  }
  parseArrayData(t, e, n, s) {
    const { xScale: o, yScale: l } = t,
      a = new Array(s);
    let r, u, d, p;
    for (r = 0, u = s; r < u; ++r)
      ((d = r + n),
        (p = e[d]),
        (a[r] = { x: o.parse(p[0], d), y: l.parse(p[1], d) }));
    return a;
  }
  parseObjectData(t, e, n, s) {
    const { xScale: o, yScale: l } = t,
      { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing,
      u = new Array(s);
    let d, p, m, _;
    for (d = 0, p = s; d < p; ++d)
      ((m = d + n),
        (_ = e[m]),
        (u[d] = { x: o.parse(_n(_, a), m), y: l.parse(_n(_, r), m) }));
    return u;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, n) {
    const s = this.chart,
      o = this._cachedMeta,
      l = e[t.axis],
      a = { keys: Fu(s, !0), values: e._stacks[t.axis] };
    return _r(a, l, o.index, { mode: n });
  }
  updateRangeFromParsed(t, e, n, s) {
    const o = n[e.axis];
    let l = o === null ? NaN : o;
    const a = s && n._stacks[e.axis];
    (s && a && ((s.values = a), (l = _r(s, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, l)),
      (t.max = Math.max(t.max, l)));
  }
  getMinMax(t, e) {
    const n = this._cachedMeta,
      s = n._parsed,
      o = n._sorted && t === n.iScale,
      l = s.length,
      a = this._getOtherScale(t),
      r = zh(e, n, this.chart),
      u = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: d, max: p } = Eh(a);
    let m, _;
    function g() {
      _ = s[m];
      const b = _[a.axis];
      return !Pe(_[t.axis]) || d > b || p < b;
    }
    for (
      m = 0;
      m < l && !(!g() && (this.updateRangeFromParsed(u, t, _, r), o));
      ++m
    );
    if (o) {
      for (m = l - 1; m >= 0; --m)
        if (!g()) {
          this.updateRangeFromParsed(u, t, _, r);
          break;
        }
    }
    return u;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed,
      n = [];
    let s, o, l;
    for (s = 0, o = e.length; s < o; ++s)
      ((l = e[s][t.axis]), Pe(l) && n.push(l));
    return n;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = e.iScale,
      s = e.vScale,
      o = this.getParsed(t);
    return {
      label: n ? "" + n.getLabelForValue(o[n.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : "",
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    (this.update(t || "default"),
      (e._clip = Rh(
        Kt(this.options.clip, Dh(e.xScale, e.yScale, this.getMaxOverflow())),
      )));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      e = this.chart,
      n = this._cachedMeta,
      s = n.data || [],
      o = e.chartArea,
      l = [],
      a = this._drawStart || 0,
      r = this._drawCount || s.length - a,
      u = this.options.drawActiveElementsOnTop;
    let d;
    for (n.dataset && n.dataset.draw(t, o, a, r), d = a; d < a + r; ++d) {
      const p = s[d];
      p.hidden || (p.active && u ? l.push(p) : p.draw(t, o));
    }
    for (d = 0; d < l.length; ++d) l[d].draw(t, o);
  }
  getStyle(t, e) {
    const n = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(n)
      : this.resolveDataElementOptions(t || 0, n);
  }
  getContext(t, e, n) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const l = this._cachedMeta.data[t];
      ((o = l.$context || (l.$context = $h(this.getContext(), t, l))),
        (o.parsed = this.getParsed(t)),
        (o.raw = s.data[t]),
        (o.index = o.dataIndex = t));
    } else
      ((o =
        this.$context ||
        (this.$context = Bh(this.chart.getContext(), this.index))),
        (o.dataset = s),
        (o.index = o.datasetIndex = this.index));
    return ((o.active = !!e), (o.mode = n), o);
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", n) {
    const s = e === "active",
      o = this._cachedDataOpts,
      l = t + "-" + e,
      a = o[l],
      r = this.enableOptionSharing && ei(n);
    if (a) return yr(a, r);
    const u = this.chart.config,
      d = u.datasetElementScopeKeys(this._type, t),
      p = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      m = u.getOptionScopes(this.getDataset(), d),
      _ = Object.keys(ie.elements[t]),
      g = () => this.getContext(n, s),
      b = u.resolveNamedOptions(m, _, g, p);
    return (
      b.$shared && ((b.$shared = r), (o[l] = Object.freeze(yr(b, r)))),
      b
    );
  }
  _resolveAnimations(t, e, n) {
    const s = this.chart,
      o = this._cachedDataOpts,
      l = `animation-${e}`,
      a = o[l];
    if (a) return a;
    let r;
    if (s.options.animation !== !1) {
      const d = this.chart.config,
        p = d.datasetAnimationScopeKeys(this._type, e),
        m = d.getOptionScopes(this.getDataset(), p);
      r = d.createResolver(m, this.getContext(t, n, e));
    }
    const u = new Ou(s, r && r.animations);
    return (r && r._cacheable && (o[l] = Object.freeze(u)), u);
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, e) {
    return !e || kl(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const n = this.resolveDataElementOptions(t, e),
      s = this._sharedOptions,
      o = this.getSharedOptions(n),
      l = this.includeOptions(e, o) || o !== s;
    return (
      this.updateSharedOptions(o, e, n),
      { sharedOptions: o, includeOptions: l }
    );
  }
  updateElement(t, e, n, s) {
    kl(s) ? Object.assign(t, n) : this._resolveAnimations(e, s).update(t, n);
  }
  updateSharedOptions(t, e, n) {
    t && !kl(e) && this._resolveAnimations(void 0, e).update(t, n);
  }
  _setStyle(t, e, n, s) {
    t.active = s;
    const o = this.getStyle(e, s);
    this._resolveAnimations(e, n, s).update(t, {
      options: (!s && this.getSharedOptions(o)) || o,
    });
  }
  removeHoverStyle(t, e, n) {
    this._setStyle(t, n, "active", !1);
  }
  setHoverStyle(t, e, n) {
    this._setStyle(t, n, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data,
      n = this._cachedMeta.data;
    for (const [a, r, u] of this._syncList) this[a](r, u);
    this._syncList = [];
    const s = n.length,
      o = e.length,
      l = Math.min(o, s);
    (l && this.parse(0, l),
      o > s
        ? this._insertElements(s, o - s, t)
        : o < s && this._removeElements(o, s - o));
  }
  _insertElements(t, e, n = !0) {
    const s = this._cachedMeta,
      o = s.data,
      l = t + e;
    let a;
    const r = (u) => {
      for (u.length += e, a = u.length - 1; a >= l; a--) u[a] = u[a - e];
    };
    for (r(o), a = t; a < l; ++a) o[a] = new this.dataElementType();
    (this._parsing && r(s._parsed),
      this.parse(t, e),
      n && this.updateElements(o, t, e, "reset"));
  }
  updateElements(t, e, n, s) {}
  _removeElements(t, e) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const s = n._parsed.splice(t, e);
      n._stacked && ms(n, s);
    }
    n.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [e, n, s] = t;
      this[e](n, s);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, e) {
    e && this._sync(["_removeElements", t, e]);
    const n = arguments.length - 2;
    n && this._sync(["_insertElements", t, n]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
di.defaults = {};
di.prototype.datasetElementType = null;
di.prototype.dataElementType = null;
function Nh(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let n = [];
    for (let s = 0, o = e.length; s < o; s++)
      n = n.concat(e[s].controller.getAllParsedValues(i));
    i._cache.$bar = cu(n.sort((s, o) => s - o));
  }
  return i._cache.$bar;
}
function jh(i) {
  const t = i.iScale,
    e = Nh(t, i.type);
  let n = t._length,
    s,
    o,
    l,
    a;
  const r = () => {
    l === 32767 ||
      l === -32768 ||
      (ei(a) && (n = Math.min(n, Math.abs(l - a) || n)), (a = l));
  };
  for (s = 0, o = e.length; s < o; ++s) ((l = t.getPixelForValue(e[s])), r());
  for (a = void 0, s = 0, o = t.ticks.length; s < o; ++s)
    ((l = t.getPixelForTick(s)), r());
  return n;
}
function Wh(i, t, e, n) {
  const s = e.barThickness;
  let o, l;
  return (
    ne(s)
      ? ((o = t.min * e.categoryPercentage), (l = e.barPercentage))
      : ((o = s * n), (l = 1)),
    { chunk: o / n, ratio: l, start: t.pixels[i] - o / 2 }
  );
}
function Hh(i, t, e, n) {
  const s = t.pixels,
    o = s[i];
  let l = i > 0 ? s[i - 1] : null,
    a = i < s.length - 1 ? s[i + 1] : null;
  const r = e.categoryPercentage;
  (l === null && (l = o - (a === null ? t.end - t.start : a - o)),
    a === null && (a = o + o - l));
  const u = o - ((o - Math.min(l, a)) / 2) * r;
  return {
    chunk: ((Math.abs(a - l) / 2) * r) / n,
    ratio: e.barPercentage,
    start: u,
  };
}
function Vh(i, t, e, n) {
  const s = e.parse(i[0], n),
    o = e.parse(i[1], n),
    l = Math.min(s, o),
    a = Math.max(s, o);
  let r = l,
    u = a;
  (Math.abs(l) > Math.abs(a) && ((r = a), (u = l)),
    (t[e.axis] = u),
    (t._custom = { barStart: r, barEnd: u, start: s, end: o, min: l, max: a }));
}
function Eu(i, t, e, n) {
  return (me(i) ? Vh(i, t, e, n) : (t[e.axis] = e.parse(i, n)), t);
}
function wr(i, t, e, n) {
  const s = i.iScale,
    o = i.vScale,
    l = s.getLabels(),
    a = s === o,
    r = [];
  let u, d, p, m;
  for (u = e, d = e + n; u < d; ++u)
    ((m = t[u]),
      (p = {}),
      (p[s.axis] = a || s.parse(l[u], u)),
      r.push(Eu(m, p, o, u)));
  return r;
}
function Ml(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function Uh(i, t, e) {
  return i !== 0 ? Oi(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Yh(i) {
  let t, e, n, s, o;
  return (
    i.horizontal
      ? ((t = i.base > i.x), (e = "left"), (n = "right"))
      : ((t = i.base < i.y), (e = "bottom"), (n = "top")),
    t ? ((s = "end"), (o = "start")) : ((s = "start"), (o = "end")),
    { start: e, end: n, reverse: t, top: s, bottom: o }
  );
}
function Xh(i, t, e, n) {
  let s = t.borderSkipped;
  const o = {};
  if (!s) {
    i.borderSkipped = o;
    return;
  }
  if (s === !0) {
    i.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: l, end: a, reverse: r, top: u, bottom: d } = Yh(i);
  (s === "middle" &&
    e &&
    ((i.enableBorderRadius = !0),
    (e._top || 0) === n
      ? (s = u)
      : (e._bottom || 0) === n
        ? (s = d)
        : ((o[xr(d, l, a, r)] = !0), (s = u))),
    (o[xr(s, l, a, r)] = !0),
    (i.borderSkipped = o));
}
function xr(i, t, e, n) {
  return (n ? ((i = Kh(i, t, e)), (i = kr(i, e, t))) : (i = kr(i, t, e)), i);
}
function Kh(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function kr(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function qh(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? (e === 1 ? 0.33 : 0) : t;
}
class Go extends di {
  parsePrimitiveData(t, e, n, s) {
    return wr(t, e, n, s);
  }
  parseArrayData(t, e, n, s) {
    return wr(t, e, n, s);
  }
  parseObjectData(t, e, n, s) {
    const { iScale: o, vScale: l } = t,
      { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing,
      u = o.axis === "x" ? a : r,
      d = l.axis === "x" ? a : r,
      p = [];
    let m, _, g, b;
    for (m = n, _ = n + s; m < _; ++m)
      ((b = e[m]),
        (g = {}),
        (g[o.axis] = o.parse(_n(b, u), m)),
        p.push(Eu(_n(b, d), g, l, m)));
    return p;
  }
  updateRangeFromParsed(t, e, n, s) {
    super.updateRangeFromParsed(t, e, n, s);
    const o = n._custom;
    o &&
      e === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      { iScale: n, vScale: s } = e,
      o = this.getParsed(t),
      l = o._custom,
      a = Ml(l)
        ? "[" + l.start + ", " + l.end + "]"
        : "" + s.getLabelForValue(o[s.axis]);
    return { label: "" + n.getLabelForValue(o[n.axis]), value: a };
  }
  initialize() {
    ((this.enableOptionSharing = !0), super.initialize());
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      {
        index: l,
        _cachedMeta: { vScale: a },
      } = this,
      r = a.getBasePixel(),
      u = a.isHorizontal(),
      d = this._getRuler(),
      { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, s);
    for (let _ = e; _ < e + n; _++) {
      const g = this.getParsed(_),
        b =
          o || ne(g[a.axis])
            ? { base: r, head: r }
            : this._calculateBarValuePixels(_),
        w = this._calculateBarIndexPixels(_, d),
        y = (g._stacks || {})[a.axis],
        S = {
          horizontal: u,
          base: b.base,
          enableBorderRadius:
            !y || Ml(g._custom) || l === y._top || l === y._bottom,
          x: u ? b.head : w.center,
          y: u ? w.center : b.head,
          height: u ? w.size : Math.abs(b.size),
          width: u ? Math.abs(b.size) : w.size,
        };
      m &&
        (S.options =
          p || this.resolveDataElementOptions(_, t[_].active ? "active" : s));
      const k = S.options || t[_].options;
      (Xh(S, k, y, l), qh(S, k, d.ratio), this.updateElement(t[_], _, S, s));
    }
  }
  _getStacks(t, e) {
    const { iScale: n } = this._cachedMeta,
      s = n
        .getMatchingVisibleMetas(this._type)
        .filter((r) => r.controller.options.grouped),
      o = n.options.stacked,
      l = [],
      a = (r) => {
        const u = r.controller.getParsed(e),
          d = u && u[r.vScale.axis];
        if (ne(d) || isNaN(d)) return !0;
      };
    for (const r of s)
      if (
        !(e !== void 0 && a(r)) &&
        ((o === !1 ||
          l.indexOf(r.stack) === -1 ||
          (o === void 0 && r.stack === void 0)) &&
          l.push(r.stack),
        r.index === t)
      )
        break;
    return (l.length || l.push(void 0), l);
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, n) {
    const s = this._getStacks(t, n),
      o = e !== void 0 ? s.indexOf(e) : -1;
    return o === -1 ? s.length - 1 : o;
  }
  _getRuler() {
    const t = this.options,
      e = this._cachedMeta,
      n = e.iScale,
      s = [];
    let o, l;
    for (o = 0, l = e.data.length; o < l; ++o)
      s.push(n.getPixelForValue(this.getParsed(o)[n.axis], o));
    const a = t.barThickness;
    return {
      min: a || jh(e),
      pixels: s,
      start: n._startPixel,
      end: n._endPixel,
      stackCount: this._getStackCount(),
      scale: n,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: e, _stacked: n },
        options: { base: s, minBarLength: o },
      } = this,
      l = s || 0,
      a = this.getParsed(t),
      r = a._custom,
      u = Ml(r);
    let d = a[e.axis],
      p = 0,
      m = n ? this.applyStack(e, a, n) : d,
      _,
      g;
    (m !== d && ((p = m - d), (m = d)),
      u &&
        ((d = r.barStart),
        (m = r.barEnd - r.barStart),
        d !== 0 && Oi(d) !== Oi(r.barEnd) && (p = 0),
        (p += d)));
    const b = !ne(s) && !u ? s : p;
    let w = e.getPixelForValue(b);
    if (
      (this.chart.getDataVisibility(t)
        ? (_ = e.getPixelForValue(p + m))
        : (_ = w),
      (g = _ - w),
      Math.abs(g) < o)
    ) {
      ((g = Uh(g, e, l) * o), d === l && (w -= g / 2));
      const y = e.getPixelForDecimal(0),
        S = e.getPixelForDecimal(1),
        k = Math.min(y, S),
        C = Math.max(y, S);
      ((w = Math.max(Math.min(w, C), k)), (_ = w + g));
    }
    if (w === e.getPixelForValue(l)) {
      const y = (Oi(g) * e.getLineWidthForValue(l)) / 2;
      ((w += y), (g -= y));
    }
    return { size: g, base: w, head: _, center: _ + g / 2 };
  }
  _calculateBarIndexPixels(t, e) {
    const n = e.scale,
      s = this.options,
      o = s.skipNull,
      l = Kt(s.maxBarThickness, 1 / 0);
    let a, r;
    if (e.grouped) {
      const u = o ? this._getStackCount(t) : e.stackCount,
        d = s.barThickness === "flex" ? Hh(t, e, s, u) : Wh(t, e, s, u),
        p = this._getStackIndex(
          this.index,
          this._cachedMeta.stack,
          o ? t : void 0,
        );
      ((a = d.start + d.chunk * p + d.chunk / 2),
        (r = Math.min(l, d.chunk * d.ratio)));
    } else
      ((a = n.getPixelForValue(this.getParsed(t)[n.axis], t)),
        (r = Math.min(l, e.min * e.ratio)));
    return { base: a - r / 2, head: a + r / 2, center: a, size: r };
  }
  draw() {
    const t = this._cachedMeta,
      e = t.vScale,
      n = t.data,
      s = n.length;
    let o = 0;
    for (; o < s; ++o)
      this.getParsed(o)[e.axis] !== null && n[o].draw(this._ctx);
  }
}
Go.id = "bar";
Go.defaults = {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "base", "width", "height"],
    },
  },
};
Go.overrides = {
  scales: {
    _index_: { type: "category", offset: !0, grid: { offset: !0 } },
    _value_: { type: "linear", beginAtZero: !0 },
  },
};
class Qo extends di {
  initialize() {
    ((this.enableOptionSharing = !0), super.initialize());
  }
  parsePrimitiveData(t, e, n, s) {
    const o = super.parsePrimitiveData(t, e, n, s);
    for (let l = 0; l < o.length; l++)
      o[l]._custom = this.resolveDataElementOptions(l + n).radius;
    return o;
  }
  parseArrayData(t, e, n, s) {
    const o = super.parseArrayData(t, e, n, s);
    for (let l = 0; l < o.length; l++) {
      const a = e[n + l];
      o[l]._custom = Kt(a[2], this.resolveDataElementOptions(l + n).radius);
    }
    return o;
  }
  parseObjectData(t, e, n, s) {
    const o = super.parseObjectData(t, e, n, s);
    for (let l = 0; l < o.length; l++) {
      const a = e[n + l];
      o[l]._custom = Kt(
        a && a.r && +a.r,
        this.resolveDataElementOptions(l + n).radius,
      );
    }
    return o;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let e = 0;
    for (let n = t.length - 1; n >= 0; --n)
      e = Math.max(e, t[n].size(this.resolveDataElementOptions(n)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      { xScale: n, yScale: s } = e,
      o = this.getParsed(t),
      l = n.getLabelForValue(o.x),
      a = s.getLabelForValue(o.y),
      r = o._custom;
    return {
      label: e.label,
      value: "(" + l + ", " + a + (r ? ", " + r : "") + ")",
    };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      { iScale: l, vScale: a } = this._cachedMeta,
      { sharedOptions: r, includeOptions: u } = this._getSharedOptions(e, s),
      d = l.axis,
      p = a.axis;
    for (let m = e; m < e + n; m++) {
      const _ = t[m],
        g = !o && this.getParsed(m),
        b = {},
        w = (b[d] = o ? l.getPixelForDecimal(0.5) : l.getPixelForValue(g[d])),
        y = (b[p] = o ? a.getBasePixel() : a.getPixelForValue(g[p]));
      ((b.skip = isNaN(w) || isNaN(y)),
        u &&
          ((b.options =
            r || this.resolveDataElementOptions(m, _.active ? "active" : s)),
          o && (b.options.radius = 0)),
        this.updateElement(_, m, b, s));
    }
  }
  resolveDataElementOptions(t, e) {
    const n = this.getParsed(t);
    let s = super.resolveDataElementOptions(t, e);
    s.$shared && (s = Object.assign({}, s, { $shared: !1 }));
    const o = s.radius;
    return (
      e !== "active" && (s.radius = 0),
      (s.radius += Kt(n && n._custom, o)),
      s
    );
  }
}
Qo.id = "bubble";
Qo.defaults = {
  datasetElementType: !1,
  dataElementType: "point",
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "borderWidth", "radius"],
    },
  },
};
Qo.overrides = {
  scales: { x: { type: "linear" }, y: { type: "linear" } },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
      },
    },
  },
};
function Gh(i, t, e) {
  let n = 1,
    s = 1,
    o = 0,
    l = 0;
  if (t < fe) {
    const a = i,
      r = a + t,
      u = Math.cos(a),
      d = Math.sin(a),
      p = Math.cos(r),
      m = Math.sin(r),
      _ = (k, C, P) => (Fs(k, a, r, !0) ? 1 : Math.max(C, C * e, P, P * e)),
      g = (k, C, P) => (Fs(k, a, r, !0) ? -1 : Math.min(C, C * e, P, P * e)),
      b = _(0, u, p),
      w = _(ke, d, m),
      y = g(ve, u, p),
      S = g(ve + ke, d, m);
    ((n = (b - y) / 2),
      (s = (w - S) / 2),
      (o = -(b + y) / 2),
      (l = -(w + S) / 2));
  }
  return { ratioX: n, ratioY: s, offsetX: o, offsetY: l };
}
class rs extends di {
  constructor(t, e) {
    (super(t, e),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0));
  }
  linkScales() {}
  parse(t, e) {
    const n = this.getDataset().data,
      s = this._cachedMeta;
    if (this._parsing === !1) s._parsed = n;
    else {
      let o = (r) => +n[r];
      if (ee(n[t])) {
        const { key: r = "value" } = this._parsing;
        o = (u) => +_n(n[u], r);
      }
      let l, a;
      for (l = t, a = t + e; l < a; ++l) s._parsed[l] = o(l);
    }
  }
  _getRotation() {
    return oi(this.options.rotation - 90);
  }
  _getCircumference() {
    return oi(this.options.circumference);
  }
  _getRotationExtents() {
    let t = fe,
      e = -fe;
    for (let n = 0; n < this.chart.data.datasets.length; ++n)
      if (this.chart.isDatasetVisible(n)) {
        const s = this.chart.getDatasetMeta(n).controller,
          o = s._getRotation(),
          l = s._getCircumference();
        ((t = Math.min(t, o)), (e = Math.max(e, o + l)));
      }
    return { rotation: t, circumference: e - t };
  }
  update(t) {
    const e = this.chart,
      { chartArea: n } = e,
      s = this._cachedMeta,
      o = s.data,
      l =
        this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
      a = Math.max((Math.min(n.width, n.height) - l) / 2, 0),
      r = Math.min(Ud(this.options.cutout, a), 1),
      u = this._getRingWeight(this.index),
      { circumference: d, rotation: p } = this._getRotationExtents(),
      { ratioX: m, ratioY: _, offsetX: g, offsetY: b } = Gh(p, d, r),
      w = (n.width - l) / m,
      y = (n.height - l) / _,
      S = Math.max(Math.min(w, y) / 2, 0),
      k = su(this.options.radius, S),
      C = Math.max(k * r, 0),
      P = (k - C) / this._getVisibleDatasetWeightTotal();
    ((this.offsetX = g * k),
      (this.offsetY = b * k),
      (s.total = this.calculateTotal()),
      (this.outerRadius = k - P * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - P * u, 0)),
      this.updateElements(o, 0, o.length, t));
  }
  _circumference(t, e) {
    const n = this.options,
      s = this._cachedMeta,
      o = this._getCircumference();
    return (e && n.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      s._parsed[t] === null ||
      s.data[t].hidden
      ? 0
      : this.calculateCircumference((s._parsed[t] * o) / fe);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      l = this.chart,
      a = l.chartArea,
      u = l.options.animation,
      d = (a.left + a.right) / 2,
      p = (a.top + a.bottom) / 2,
      m = o && u.animateScale,
      _ = m ? 0 : this.innerRadius,
      g = m ? 0 : this.outerRadius,
      { sharedOptions: b, includeOptions: w } = this._getSharedOptions(e, s);
    let y = this._getRotation(),
      S;
    for (S = 0; S < e; ++S) y += this._circumference(S, o);
    for (S = e; S < e + n; ++S) {
      const k = this._circumference(S, o),
        C = t[S],
        P = {
          x: d + this.offsetX,
          y: p + this.offsetY,
          startAngle: y,
          endAngle: y + k,
          circumference: k,
          outerRadius: g,
          innerRadius: _,
        };
      (w &&
        (P.options =
          b || this.resolveDataElementOptions(S, C.active ? "active" : s)),
        (y += k),
        this.updateElement(C, S, P, s));
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      e = t.data;
    let n = 0,
      s;
    for (s = 0; s < e.length; s++) {
      const o = t._parsed[s];
      o !== null &&
        !isNaN(o) &&
        this.chart.getDataVisibility(s) &&
        !e[s].hidden &&
        (n += Math.abs(o));
    }
    return n;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? fe * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = this.chart,
      s = n.data.labels || [],
      o = Ns(e._parsed[t], n.options.locale);
    return { label: s[t] || "", value: o };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const n = this.chart;
    let s, o, l, a, r;
    if (!t) {
      for (s = 0, o = n.data.datasets.length; s < o; ++s)
        if (n.isDatasetVisible(s)) {
          ((l = n.getDatasetMeta(s)), (t = l.data), (a = l.controller));
          break;
        }
    }
    if (!t) return 0;
    for (s = 0, o = t.length; s < o; ++s)
      ((r = a.resolveDataElementOptions(s)),
        r.borderAlign !== "inner" &&
          (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0)));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let n = 0, s = t.length; n < s; ++n) {
      const o = this.resolveDataElementOptions(n);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let n = 0; n < t; ++n)
      this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(Kt(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
rs.id = "doughnut";
rs.defaults = {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: { animateRotate: !0, animateScale: !1 },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing",
      ],
    },
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r",
};
rs.descriptors = {
  _scriptable: (i) => i !== "spacing",
  _indexable: (i) => i !== "spacing",
};
rs.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(i) {
          const t = i.data;
          if (t.labels.length && t.datasets.length) {
            const {
              labels: { pointStyle: e },
            } = i.legend.options;
            return t.labels.map((n, s) => {
              const l = i.getDatasetMeta(0).controller.getStyle(s);
              return {
                text: n,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                lineWidth: l.borderWidth,
                pointStyle: e,
                hidden: !i.getDataVisibility(s),
                index: s,
              };
            });
          }
          return [];
        },
      },
      onClick(i, t, e) {
        (e.chart.toggleDataVisibility(t.index), e.chart.update());
      },
    },
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(i) {
          let t = i.label;
          const e = ": " + i.formattedValue;
          return (me(t) ? ((t = t.slice()), (t[0] += e)) : (t += e), t);
        },
      },
    },
  },
};
class Zo extends di {
  initialize() {
    ((this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize());
  }
  update(t) {
    const e = this._cachedMeta,
      { dataset: n, data: s = [], _dataset: o } = e,
      l = this.chart._animationsDisabled;
    let { start: a, count: r } = fu(e, s, l);
    ((this._drawStart = a),
      (this._drawCount = r),
      hu(e) && ((a = 0), (r = s.length)),
      (n._chart = this.chart),
      (n._datasetIndex = this.index),
      (n._decimated = !!o._decimated),
      (n.points = s));
    const u = this.resolveDatasetElementOptions(t);
    (this.options.showLine || (u.borderWidth = 0),
      (u.segment = this.options.segment),
      this.updateElement(n, void 0, { animated: !l, options: u }, t),
      this.updateElements(s, a, r, t));
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      { iScale: l, vScale: a, _stacked: r, _dataset: u } = this._cachedMeta,
      { sharedOptions: d, includeOptions: p } = this._getSharedOptions(e, s),
      m = l.axis,
      _ = a.axis,
      { spanGaps: g, segment: b } = this.options,
      w = os(g) ? g : Number.POSITIVE_INFINITY,
      y = this.chart._animationsDisabled || o || s === "none";
    let S = e > 0 && this.getParsed(e - 1);
    for (let k = e; k < e + n; ++k) {
      const C = t[k],
        P = this.getParsed(k),
        T = y ? C : {},
        R = ne(P[_]),
        F = (T[m] = l.getPixelForValue(P[m], k)),
        D = (T[_] =
          o || R
            ? a.getBasePixel()
            : a.getPixelForValue(r ? this.applyStack(a, P, r) : P[_], k));
      ((T.skip = isNaN(F) || isNaN(D) || R),
        (T.stop = k > 0 && Math.abs(P[m] - S[m]) > w),
        b && ((T.parsed = P), (T.raw = u.data[k])),
        p &&
          (T.options =
            d || this.resolveDataElementOptions(k, C.active ? "active" : s)),
        y || this.updateElement(C, k, T, s),
        (S = P));
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.dataset,
      n = (e.options && e.options.borderWidth) || 0,
      s = t.data || [];
    if (!s.length) return n;
    const o = s[0].size(this.resolveDataElementOptions(0)),
      l = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(n, o, l) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    (t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw());
  }
}
Zo.id = "line";
Zo.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1,
};
Zo.overrides = {
  scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
};
class Jo extends di {
  constructor(t, e) {
    (super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0));
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = this.chart,
      s = n.data.labels || [],
      o = Ns(e._parsed[t].r, n.options.locale);
    return { label: s[t] || "", value: o };
  }
  parseObjectData(t, e, n, s) {
    return Su.bind(this)(t, e, n, s);
  }
  update(t) {
    const e = this._cachedMeta.data;
    (this._updateRadius(), this.updateElements(e, 0, e.length, t));
  }
  getMinMax() {
    const t = this._cachedMeta,
      e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
    return (
      t.data.forEach((n, s) => {
        const o = this.getParsed(s).r;
        !isNaN(o) &&
          this.chart.getDataVisibility(s) &&
          (o < e.min && (e.min = o), o > e.max && (e.max = o));
      }),
      e
    );
  }
  _updateRadius() {
    const t = this.chart,
      e = t.chartArea,
      n = t.options,
      s = Math.min(e.right - e.left, e.bottom - e.top),
      o = Math.max(s / 2, 0),
      l = Math.max(n.cutoutPercentage ? (o / 100) * n.cutoutPercentage : 1, 0),
      a = (o - l) / t.getVisibleDatasetCount();
    ((this.outerRadius = o - a * this.index),
      (this.innerRadius = this.outerRadius - a));
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      l = this.chart,
      r = l.options.animation,
      u = this._cachedMeta.rScale,
      d = u.xCenter,
      p = u.yCenter,
      m = u.getIndexAngle(0) - 0.5 * ve;
    let _ = m,
      g;
    const b = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g) _ += this._computeAngle(g, s, b);
    for (g = e; g < e + n; g++) {
      const w = t[g];
      let y = _,
        S = _ + this._computeAngle(g, s, b),
        k = l.getDataVisibility(g)
          ? u.getDistanceFromCenterForValue(this.getParsed(g).r)
          : 0;
      ((_ = S),
        o && (r.animateScale && (k = 0), r.animateRotate && (y = S = m)));
      const C = {
        x: d,
        y: p,
        innerRadius: 0,
        outerRadius: k,
        startAngle: y,
        endAngle: S,
        options: this.resolveDataElementOptions(g, w.active ? "active" : s),
      };
      this.updateElement(w, g, C, s);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return (
      t.data.forEach((n, s) => {
        !isNaN(this.getParsed(s).r) && this.chart.getDataVisibility(s) && e++;
      }),
      e
    );
  }
  _computeAngle(t, e, n) {
    return this.chart.getDataVisibility(t)
      ? oi(this.resolveDataElementOptions(t, e).angle || n)
      : 0;
  }
}
Jo.id = "polarArea";
Jo.defaults = {
  dataElementType: "arc",
  animation: { animateRotate: !0, animateScale: !0 },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius",
      ],
    },
  },
  indexAxis: "r",
  startAngle: 0,
};
Jo.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(i) {
          const t = i.data;
          if (t.labels.length && t.datasets.length) {
            const {
              labels: { pointStyle: e },
            } = i.legend.options;
            return t.labels.map((n, s) => {
              const l = i.getDatasetMeta(0).controller.getStyle(s);
              return {
                text: n,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                lineWidth: l.borderWidth,
                pointStyle: e,
                hidden: !i.getDataVisibility(s),
                index: s,
              };
            });
          }
          return [];
        },
      },
      onClick(i, t, e) {
        (e.chart.toggleDataVisibility(t.index), e.chart.update());
      },
    },
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(i) {
          return i.chart.data.labels[i.dataIndex] + ": " + i.formattedValue;
        },
      },
    },
  },
  scales: {
    r: {
      type: "radialLinear",
      angleLines: { display: !1 },
      beginAtZero: !0,
      grid: { circular: !0 },
      pointLabels: { display: !1 },
      startAngle: 0,
    },
  },
};
class da extends rs {}
da.id = "pie";
da.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: "100%" };
class tl extends di {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale,
      n = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(n[e.axis]),
    };
  }
  parseObjectData(t, e, n, s) {
    return Su.bind(this)(t, e, n, s);
  }
  update(t) {
    const e = this._cachedMeta,
      n = e.dataset,
      s = e.data || [],
      o = e.iScale.getLabels();
    if (((n.points = s), t !== "resize")) {
      const l = this.resolveDatasetElementOptions(t);
      this.options.showLine || (l.borderWidth = 0);
      const a = { _loop: !0, _fullLoop: o.length === s.length, options: l };
      this.updateElement(n, void 0, a, t);
    }
    this.updateElements(s, 0, s.length, t);
  }
  updateElements(t, e, n, s) {
    const o = this._cachedMeta.rScale,
      l = s === "reset";
    for (let a = e; a < e + n; a++) {
      const r = t[a],
        u = this.resolveDataElementOptions(a, r.active ? "active" : s),
        d = o.getPointPositionForValue(a, this.getParsed(a).r),
        p = l ? o.xCenter : d.x,
        m = l ? o.yCenter : d.y,
        _ = {
          x: p,
          y: m,
          angle: d.angle,
          skip: isNaN(p) || isNaN(m),
          options: u,
        };
      this.updateElement(r, a, _, s);
    }
  }
}
tl.id = "radar";
tl.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: { line: { fill: "start" } },
};
tl.overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } };
class fi {
  constructor() {
    ((this.x = void 0),
      (this.y = void 0),
      (this.active = !1),
      (this.options = void 0),
      (this.$animations = void 0));
  }
  tooltipPosition(t) {
    const { x: e, y: n } = this.getProps(["x", "y"], t);
    return { x: e, y: n };
  }
  hasValue() {
    return os(this.x) && os(this.y);
  }
  getProps(t, e) {
    const n = this.$animations;
    if (!e || !n) return this;
    const s = {};
    return (
      t.forEach((o) => {
        s[o] = n[o] && n[o].active() ? n[o]._to : this[o];
      }),
      s
    );
  }
}
fi.defaults = {};
fi.defaultRoutes = void 0;
const Iu = {
  values(i) {
    return me(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0) return "0";
    const n = this.chart.options.locale;
    let s,
      o = i;
    if (e.length > 1) {
      const u = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      ((u < 1e-4 || u > 1e15) && (s = "scientific"), (o = Qh(i, e)));
    }
    const l = ti(Math.abs(o)),
      a = Math.max(Math.min(-1 * Math.floor(l), 20), 0),
      r = { notation: s, minimumFractionDigits: a, maximumFractionDigits: a };
    return (Object.assign(r, this.options.ticks.format), Ns(i, n, r));
  },
  logarithmic(i, t, e) {
    if (i === 0) return "0";
    const n = i / Math.pow(10, Math.floor(ti(i)));
    return n === 1 || n === 2 || n === 5 ? Iu.numeric.call(this, i, t, e) : "";
  },
};
function Qh(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return (
    Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)),
    e
  );
}
var el = { formatters: Iu };
ie.set("scale", {
  display: !0,
  offset: !1,
  reverse: !1,
  beginAtZero: !1,
  bounds: "ticks",
  grace: 0,
  grid: {
    display: !0,
    lineWidth: 1,
    drawBorder: !0,
    drawOnChartArea: !0,
    drawTicks: !0,
    tickLength: 8,
    tickWidth: (i, t) => t.lineWidth,
    tickColor: (i, t) => t.color,
    offset: !1,
    borderDash: [],
    borderDashOffset: 0,
    borderWidth: 1,
  },
  title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: !1,
    textStrokeWidth: 0,
    textStrokeColor: "",
    padding: 3,
    display: !0,
    autoSkip: !0,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: el.formatters.values,
    minor: {},
    major: {},
    align: "center",
    crossAlign: "near",
    showLabelBackdrop: !1,
    backdropColor: "rgba(255, 255, 255, 0.75)",
    backdropPadding: 2,
  },
});
ie.route("scale.ticks", "color", "", "color");
ie.route("scale.grid", "color", "", "borderColor");
ie.route("scale.grid", "borderColor", "", "borderColor");
ie.route("scale.title", "color", "", "color");
ie.describe("scale", {
  _fallback: !1,
  _scriptable: (i) =>
    !i.startsWith("before") &&
    !i.startsWith("after") &&
    i !== "callback" &&
    i !== "parser",
  _indexable: (i) => i !== "borderDash" && i !== "tickBorderDash",
});
ie.describe("scales", { _fallback: "scale" });
ie.describe("scale.ticks", {
  _scriptable: (i) => i !== "backdropPadding" && i !== "callback",
  _indexable: (i) => i !== "backdropPadding",
});
function Zh(i, t) {
  const e = i.options.ticks,
    n = e.maxTicksLimit || Jh(i),
    s = e.major.enabled ? ep(t) : [],
    o = s.length,
    l = s[0],
    a = s[o - 1],
    r = [];
  if (o > n) return (ip(t, r, s, o / n), r);
  const u = tp(s, t, n);
  if (o > 0) {
    let d, p;
    const m = o > 1 ? Math.round((a - l) / (o - 1)) : null;
    for (bo(t, r, u, ne(m) ? 0 : l - m, l), d = 0, p = o - 1; d < p; d++)
      bo(t, r, u, s[d], s[d + 1]);
    return (bo(t, r, u, a, ne(m) ? t.length : a + m), r);
  }
  return (bo(t, r, u), r);
}
function Jh(i) {
  const t = i.options.offset,
    e = i._tickSize(),
    n = i._length / e + (t ? 0 : 1),
    s = i._maxLength / e;
  return Math.floor(Math.min(n, s));
}
function tp(i, t, e) {
  const n = np(i),
    s = t.length / e;
  if (!n) return Math.max(s, 1);
  const o = Jd(n);
  for (let l = 0, a = o.length - 1; l < a; l++) {
    const r = o[l];
    if (r > s) return r;
  }
  return Math.max(s, 1);
}
function ep(i) {
  const t = [];
  let e, n;
  for (e = 0, n = i.length; e < n; e++) i[e].major && t.push(e);
  return t;
}
function ip(i, t, e, n) {
  let s = 0,
    o = e[0],
    l;
  for (n = Math.ceil(n), l = 0; l < i.length; l++)
    l === o && (t.push(i[l]), s++, (o = e[s * n]));
}
function bo(i, t, e, n, s) {
  const o = Kt(n, 0),
    l = Math.min(Kt(s, i.length), i.length);
  let a = 0,
    r,
    u,
    d;
  for (
    e = Math.ceil(e), s && ((r = s - n), (e = r / Math.floor(r / e))), d = o;
    d < 0;
  )
    (a++, (d = Math.round(o + a * e)));
  for (u = Math.max(o, 0); u < l; u++)
    u === d && (t.push(i[u]), a++, (d = Math.round(o + a * e)));
}
function np(i) {
  const t = i.length;
  let e, n;
  if (t < 2) return !1;
  for (n = i[0], e = 1; e < t; ++e) if (i[e] - i[e - 1] !== n) return !1;
  return n;
}
const sp = (i) => (i === "left" ? "right" : i === "right" ? "left" : i),
  Mr = (i, t, e) => (t === "top" || t === "left" ? i[t] + e : i[t] - e);
function Sr(i, t) {
  const e = [],
    n = i.length / t,
    s = i.length;
  let o = 0;
  for (; o < s; o += n) e.push(i[Math.floor(o)]);
  return e;
}
function op(i, t, e) {
  const n = i.ticks.length,
    s = Math.min(t, n - 1),
    o = i._startPixel,
    l = i._endPixel,
    a = 1e-6;
  let r = i.getPixelForTick(s),
    u;
  if (
    !(
      e &&
      (n === 1
        ? (u = Math.max(r - o, l - r))
        : t === 0
          ? (u = (i.getPixelForTick(1) - r) / 2)
          : (u = (r - i.getPixelForTick(s - 1)) / 2),
      (r += s < t ? u : -u),
      r < o - a || r > l + a)
    )
  )
    return r;
}
function lp(i, t) {
  re(i, (e) => {
    const n = e.gc,
      s = n.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o) delete e.data[n[o]];
      n.splice(0, s);
    }
  });
}
function _s(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function Ar(i, t) {
  if (!i.display) return 0;
  const e = Be(i.font, t),
    n = He(i.padding);
  return (me(i.text) ? i.text.length : 1) * e.lineHeight + n.height;
}
function ap(i, t) {
  return bn(i, { scale: t, type: "scale" });
}
function rp(i, t, e) {
  return bn(i, { tick: e, index: t, type: "tick" });
}
function cp(i, t, e) {
  let n = ia(i);
  return (((e && t !== "right") || (!e && t === "right")) && (n = sp(n)), n);
}
function up(i, t, e, n) {
  const { top: s, left: o, bottom: l, right: a, chart: r } = i,
    { chartArea: u, scales: d } = r;
  let p = 0,
    m,
    _,
    g;
  const b = l - s,
    w = a - o;
  if (i.isHorizontal()) {
    if (((_ = je(n, o, a)), ee(e))) {
      const y = Object.keys(e)[0],
        S = e[y];
      g = d[y].getPixelForValue(S) + b - t;
    } else
      e === "center" ? (g = (u.bottom + u.top) / 2 + b - t) : (g = Mr(i, e, t));
    m = a - o;
  } else {
    if (ee(e)) {
      const y = Object.keys(e)[0],
        S = e[y];
      _ = d[y].getPixelForValue(S) - w + t;
    } else
      e === "center" ? (_ = (u.left + u.right) / 2 - w + t) : (_ = Mr(i, e, t));
    ((g = je(n, l, s)), (p = e === "left" ? -ke : ke));
  }
  return { titleX: _, titleY: g, maxWidth: m, rotation: p };
}
class $n extends fi {
  constructor(t) {
    (super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0));
  }
  init(t) {
    ((this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax)));
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: s } = this;
    return (
      (t = Je(t, Number.POSITIVE_INFINITY)),
      (e = Je(e, Number.NEGATIVE_INFINITY)),
      (n = Je(n, Number.POSITIVE_INFINITY)),
      (s = Je(s, Number.NEGATIVE_INFINITY)),
      { min: Je(t, n), max: Je(e, s), minDefined: Pe(t), maxDefined: Pe(e) }
    );
  }
  getMinMax(t) {
    let { min: e, max: n, minDefined: s, maxDefined: o } = this.getUserBounds(),
      l;
    if (s && o) return { min: e, max: n };
    const a = this.getMatchingVisibleMetas();
    for (let r = 0, u = a.length; r < u; ++r)
      ((l = a[r].controller.getMinMax(this, t)),
        s || (e = Math.min(e, l.min)),
        o || (n = Math.max(n, l.max)));
    return (
      (e = o && e > n ? n : e),
      (n = s && e > n ? e : n),
      { min: Je(e, Je(n, e)), max: Je(n, Je(e, n)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  beforeLayout() {
    ((this._cache = {}), (this._dataLimitsCached = !1));
  }
  beforeUpdate() {
    pe(this.options.beforeUpdate, [this]);
  }
  update(t, e, n) {
    const { beginAtZero: s, grace: o, ticks: l } = this.options,
      a = l.sampleSize;
    (this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = n =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + n.left + n.right
        : this.height + n.top + n.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Wf(this, o, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks());
    const r = a < this.ticks.length;
    (this._convertTicksToLabels(r ? Sr(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      l.display &&
        (l.autoSkip || l.source === "auto") &&
        ((this.ticks = Zh(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      r && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate());
  }
  configure() {
    let t = this.options.reverse,
      e,
      n;
    (this.isHorizontal()
      ? ((e = this.left), (n = this.right))
      : ((e = this.top), (n = this.bottom), (t = !t)),
      (this._startPixel = e),
      (this._endPixel = n),
      (this._reversePixels = t),
      (this._length = n - e),
      (this._alignToPixels = this.options.alignToPixels));
  }
  afterUpdate() {
    pe(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    pe(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    (this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0));
  }
  afterSetDimensions() {
    pe(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    (this.chart.notifyPlugins(t, this.getContext()),
      pe(this.options[t], [this]));
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    pe(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let n, s, o;
    for (n = 0, s = t.length; n < s; n++)
      ((o = t[n]), (o.label = pe(e.callback, [o.value, n, t], this)));
  }
  afterTickToLabelConversion() {
    pe(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    pe(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      e = t.ticks,
      n = this.ticks.length,
      s = e.minRotation || 0,
      o = e.maxRotation;
    let l = s,
      a,
      r,
      u;
    if (
      !this._isVisible() ||
      !e.display ||
      s >= o ||
      n <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = s;
      return;
    }
    const d = this._getLabelSizes(),
      p = d.widest.width,
      m = d.highest.height,
      _ = $e(this.chart.width - p, 0, this.maxWidth);
    ((a = t.offset ? this.maxWidth / n : _ / (n - 1)),
      p + 6 > a &&
        ((a = _ / (n - (t.offset ? 0.5 : 1))),
        (r =
          this.maxHeight -
          _s(t.grid) -
          e.padding -
          Ar(t.title, this.chart.options.font)),
        (u = Math.sqrt(p * p + m * m)),
        (l = ta(
          Math.min(
            Math.asin($e((d.highest.height + 6) / a, -1, 1)),
            Math.asin($e(r / u, -1, 1)) - Math.asin($e(m / u, -1, 1)),
          ),
        )),
        (l = Math.max(s, Math.min(o, l)))),
      (this.labelRotation = l));
  }
  afterCalculateLabelRotation() {
    pe(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    pe(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: e,
        options: { ticks: n, title: s, grid: o },
      } = this,
      l = this._isVisible(),
      a = this.isHorizontal();
    if (l) {
      const r = Ar(s, e.options.font);
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = _s(o) + r))
          : ((t.height = this.maxHeight), (t.width = _s(o) + r)),
        n.display && this.ticks.length)
      ) {
        const {
            first: u,
            last: d,
            widest: p,
            highest: m,
          } = this._getLabelSizes(),
          _ = n.padding * 2,
          g = oi(this.labelRotation),
          b = Math.cos(g),
          w = Math.sin(g);
        if (a) {
          const y = n.mirror ? 0 : w * p.width + b * m.height;
          t.height = Math.min(this.maxHeight, t.height + y + _);
        } else {
          const y = n.mirror ? 0 : b * p.width + w * m.height;
          t.width = Math.min(this.maxWidth, t.width + y + _);
        }
        this._calculatePadding(u, d, w, b);
      }
    }
    (this._handleMargins(),
      a
        ? ((this.width = this._length =
            e.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            e.height - this._margins.top - this._margins.bottom)));
  }
  _calculatePadding(t, e, n, s) {
    const {
        ticks: { align: o, padding: l },
        position: a,
      } = this.options,
      r = this.labelRotation !== 0,
      u = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const d = this.getPixelForTick(0) - this.left,
        p = this.right - this.getPixelForTick(this.ticks.length - 1);
      let m = 0,
        _ = 0;
      (r
        ? u
          ? ((m = s * t.width), (_ = n * e.height))
          : ((m = n * t.height), (_ = s * e.width))
        : o === "start"
          ? (_ = e.width)
          : o === "end"
            ? (m = t.width)
            : o !== "inner" && ((m = t.width / 2), (_ = e.width / 2)),
        (this.paddingLeft = Math.max(
          ((m - d + l) * this.width) / (this.width - d),
          0,
        )),
        (this.paddingRight = Math.max(
          ((_ - p + l) * this.width) / (this.width - p),
          0,
        )));
    } else {
      let d = e.height / 2,
        p = t.height / 2;
      (o === "start"
        ? ((d = 0), (p = t.height))
        : o === "end" && ((d = e.height), (p = 0)),
        (this.paddingTop = d + l),
        (this.paddingBottom = p + l));
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom,
      )));
  }
  afterFit() {
    pe(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    (this.beforeTickToLabelConversion(), this.generateTickLabels(t));
    let e, n;
    for (e = 0, n = t.length; e < n; e++)
      ne(t[e].label) && (t.splice(e, 1), n--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let n = this.ticks;
      (e < n.length && (n = Sr(n, e)),
        (this._labelSizes = t = this._computeLabelSizes(n, n.length)));
    }
    return t;
  }
  _computeLabelSizes(t, e) {
    const { ctx: n, _longestTextCache: s } = this,
      o = [],
      l = [];
    let a = 0,
      r = 0,
      u,
      d,
      p,
      m,
      _,
      g,
      b,
      w,
      y,
      S,
      k;
    for (u = 0; u < e; ++u) {
      if (
        ((m = t[u].label),
        (_ = this._resolveTickFontOptions(u)),
        (n.font = g = _.string),
        (b = s[g] = s[g] || { data: {}, gc: [] }),
        (w = _.lineHeight),
        (y = S = 0),
        !ne(m) && !me(m))
      )
        ((y = $o(n, b.data, b.gc, y, m)), (S = w));
      else if (me(m))
        for (d = 0, p = m.length; d < p; ++d)
          ((k = m[d]),
            !ne(k) && !me(k) && ((y = $o(n, b.data, b.gc, y, k)), (S += w)));
      (o.push(y), l.push(S), (a = Math.max(y, a)), (r = Math.max(S, r)));
    }
    lp(s, e);
    const C = o.indexOf(a),
      P = l.indexOf(r),
      T = (R) => ({ width: o[R] || 0, height: l[R] || 0 });
    return {
      first: T(0),
      last: T(e - 1),
      widest: T(C),
      highest: T(P),
      widths: o,
      heights: l,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return nf(this._alignToPixels ? Cn(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const n = e[t];
      return n.$context || (n.$context = rp(this.getContext(), t, n));
    }
    return this.$context || (this.$context = ap(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      e = oi(this.labelRotation),
      n = Math.abs(Math.cos(e)),
      s = Math.abs(Math.sin(e)),
      o = this._getLabelSizes(),
      l = t.autoSkipPadding || 0,
      a = o ? o.widest.width + l : 0,
      r = o ? o.highest.height + l : 0;
    return this.isHorizontal()
      ? r * n > a * s
        ? a / n
        : r / s
      : r * s < a * n
        ? r / n
        : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis,
      n = this.chart,
      s = this.options,
      { grid: o, position: l } = s,
      a = o.offset,
      r = this.isHorizontal(),
      d = this.ticks.length + (a ? 1 : 0),
      p = _s(o),
      m = [],
      _ = o.setContext(this.getContext()),
      g = _.drawBorder ? _.borderWidth : 0,
      b = g / 2,
      w = function (j) {
        return Cn(n, j, g);
      };
    let y, S, k, C, P, T, R, F, D, I, W, N;
    if (l === "top")
      ((y = w(this.bottom)),
        (T = this.bottom - p),
        (F = y - b),
        (I = w(t.top) + b),
        (N = t.bottom));
    else if (l === "bottom")
      ((y = w(this.top)),
        (I = t.top),
        (N = w(t.bottom) - b),
        (T = y + b),
        (F = this.top + p));
    else if (l === "left")
      ((y = w(this.right)),
        (P = this.right - p),
        (R = y - b),
        (D = w(t.left) + b),
        (W = t.right));
    else if (l === "right")
      ((y = w(this.left)),
        (D = t.left),
        (W = w(t.right) - b),
        (P = y + b),
        (R = this.left + p));
    else if (e === "x") {
      if (l === "center") y = w((t.top + t.bottom) / 2 + 0.5);
      else if (ee(l)) {
        const j = Object.keys(l)[0],
          U = l[j];
        y = w(this.chart.scales[j].getPixelForValue(U));
      }
      ((I = t.top), (N = t.bottom), (T = y + b), (F = T + p));
    } else if (e === "y") {
      if (l === "center") y = w((t.left + t.right) / 2);
      else if (ee(l)) {
        const j = Object.keys(l)[0],
          U = l[j];
        y = w(this.chart.scales[j].getPixelForValue(U));
      }
      ((P = y - b), (R = P - p), (D = t.left), (W = t.right));
    }
    const O = Kt(s.ticks.maxTicksLimit, d),
      V = Math.max(1, Math.ceil(d / O));
    for (S = 0; S < d; S += V) {
      const j = o.setContext(this.getContext(S)),
        U = j.lineWidth,
        $ = j.color,
        nt = j.borderDash || [],
        K = j.borderDashOffset,
        Z = j.tickWidth,
        et = j.tickColor,
        lt = j.tickBorderDash || [],
        J = j.tickBorderDashOffset;
      ((k = op(this, S, a)),
        k !== void 0 &&
          ((C = Cn(n, k, U)),
          r ? (P = R = D = W = C) : (T = F = I = N = C),
          m.push({
            tx1: P,
            ty1: T,
            tx2: R,
            ty2: F,
            x1: D,
            y1: I,
            x2: W,
            y2: N,
            width: U,
            color: $,
            borderDash: nt,
            borderDashOffset: K,
            tickWidth: Z,
            tickColor: et,
            tickBorderDash: lt,
            tickBorderDashOffset: J,
          })));
    }
    return ((this._ticksLength = d), (this._borderValue = y), m);
  }
  _computeLabelItems(t) {
    const e = this.axis,
      n = this.options,
      { position: s, ticks: o } = n,
      l = this.isHorizontal(),
      a = this.ticks,
      { align: r, crossAlign: u, padding: d, mirror: p } = o,
      m = _s(n.grid),
      _ = m + d,
      g = p ? -d : _,
      b = -oi(this.labelRotation),
      w = [];
    let y,
      S,
      k,
      C,
      P,
      T,
      R,
      F,
      D,
      I,
      W,
      N,
      O = "middle";
    if (s === "top")
      ((T = this.bottom - g), (R = this._getXAxisLabelAlignment()));
    else if (s === "bottom")
      ((T = this.top + g), (R = this._getXAxisLabelAlignment()));
    else if (s === "left") {
      const j = this._getYAxisLabelAlignment(m);
      ((R = j.textAlign), (P = j.x));
    } else if (s === "right") {
      const j = this._getYAxisLabelAlignment(m);
      ((R = j.textAlign), (P = j.x));
    } else if (e === "x") {
      if (s === "center") T = (t.top + t.bottom) / 2 + _;
      else if (ee(s)) {
        const j = Object.keys(s)[0],
          U = s[j];
        T = this.chart.scales[j].getPixelForValue(U) + _;
      }
      R = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (s === "center") P = (t.left + t.right) / 2 - _;
      else if (ee(s)) {
        const j = Object.keys(s)[0],
          U = s[j];
        P = this.chart.scales[j].getPixelForValue(U);
      }
      R = this._getYAxisLabelAlignment(m).textAlign;
    }
    e === "y" && (r === "start" ? (O = "top") : r === "end" && (O = "bottom"));
    const V = this._getLabelSizes();
    for (y = 0, S = a.length; y < S; ++y) {
      ((k = a[y]), (C = k.label));
      const j = o.setContext(this.getContext(y));
      ((F = this.getPixelForTick(y) + o.labelOffset),
        (D = this._resolveTickFontOptions(y)),
        (I = D.lineHeight),
        (W = me(C) ? C.length : 1));
      const U = W / 2,
        $ = j.color,
        nt = j.textStrokeColor,
        K = j.textStrokeWidth;
      let Z = R;
      l
        ? ((P = F),
          R === "inner" &&
            (y === S - 1
              ? (Z = this.options.reverse ? "left" : "right")
              : y === 0
                ? (Z = this.options.reverse ? "right" : "left")
                : (Z = "center")),
          s === "top"
            ? u === "near" || b !== 0
              ? (N = -W * I + I / 2)
              : u === "center"
                ? (N = -V.highest.height / 2 - U * I + I)
                : (N = -V.highest.height + I / 2)
            : u === "near" || b !== 0
              ? (N = I / 2)
              : u === "center"
                ? (N = V.highest.height / 2 - U * I)
                : (N = V.highest.height - W * I),
          p && (N *= -1))
        : ((T = F), (N = ((1 - W) * I) / 2));
      let et;
      if (j.showLabelBackdrop) {
        const lt = He(j.backdropPadding),
          J = V.heights[y],
          Q = V.widths[y];
        let q = T + N - lt.top,
          ct = P - lt.left;
        switch (O) {
          case "middle":
            q -= J / 2;
            break;
          case "bottom":
            q -= J;
            break;
        }
        switch (R) {
          case "center":
            ct -= Q / 2;
            break;
          case "right":
            ct -= Q;
            break;
        }
        et = {
          left: ct,
          top: q,
          width: Q + lt.width,
          height: J + lt.height,
          color: j.backdropColor,
        };
      }
      w.push({
        rotation: b,
        label: C,
        font: D,
        color: $,
        strokeColor: nt,
        strokeWidth: K,
        textOffset: N,
        textAlign: Z,
        textBaseline: O,
        translation: [P, T],
        backdrop: et,
      });
    }
    return w;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-oi(this.labelRotation)) return t === "top" ? "left" : "right";
    let s = "center";
    return (
      e.align === "start"
        ? (s = "left")
        : e.align === "end"
          ? (s = "right")
          : e.align === "inner" && (s = "inner"),
      s
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: e,
        ticks: { crossAlign: n, mirror: s, padding: o },
      } = this.options,
      l = this._getLabelSizes(),
      a = t + o,
      r = l.widest.width;
    let u, d;
    return (
      e === "left"
        ? s
          ? ((d = this.right + o),
            n === "near"
              ? (u = "left")
              : n === "center"
                ? ((u = "center"), (d += r / 2))
                : ((u = "right"), (d += r)))
          : ((d = this.right - a),
            n === "near"
              ? (u = "right")
              : n === "center"
                ? ((u = "center"), (d -= r / 2))
                : ((u = "left"), (d = this.left)))
        : e === "right"
          ? s
            ? ((d = this.left + o),
              n === "near"
                ? (u = "right")
                : n === "center"
                  ? ((u = "center"), (d -= r / 2))
                  : ((u = "left"), (d -= r)))
            : ((d = this.left + a),
              n === "near"
                ? (u = "left")
                : n === "center"
                  ? ((u = "center"), (d += r / 2))
                  : ((u = "right"), (d = this.right)))
          : (u = "right"),
      { textAlign: u, x: d }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      e = this.options.position;
    if (e === "left" || e === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (e === "top" || e === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: e },
      left: n,
      top: s,
      width: o,
      height: l,
    } = this;
    e && (t.save(), (t.fillStyle = e), t.fillRect(n, s, o, l), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display) return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? e.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid,
      n = this.ctx,
      s =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let o, l;
    const a = (r, u, d) => {
      !d.width ||
        !d.color ||
        (n.save(),
        (n.lineWidth = d.width),
        (n.strokeStyle = d.color),
        n.setLineDash(d.borderDash || []),
        (n.lineDashOffset = d.borderDashOffset),
        n.beginPath(),
        n.moveTo(r.x, r.y),
        n.lineTo(u.x, u.y),
        n.stroke(),
        n.restore());
    };
    if (e.display)
      for (o = 0, l = s.length; o < l; ++o) {
        const r = s[o];
        (e.drawOnChartArea && a({ x: r.x1, y: r.y1 }, { x: r.x2, y: r.y2 }, r),
          e.drawTicks &&
            a(
              { x: r.tx1, y: r.ty1 },
              { x: r.tx2, y: r.ty2 },
              {
                color: r.tickColor,
                width: r.tickWidth,
                borderDash: r.tickBorderDash,
                borderDashOffset: r.tickBorderDashOffset,
              },
            ));
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: e,
        options: { grid: n },
      } = this,
      s = n.setContext(this.getContext()),
      o = n.drawBorder ? s.borderWidth : 0;
    if (!o) return;
    const l = n.setContext(this.getContext(0)).lineWidth,
      a = this._borderValue;
    let r, u, d, p;
    (this.isHorizontal()
      ? ((r = Cn(t, this.left, o) - o / 2),
        (u = Cn(t, this.right, l) + l / 2),
        (d = p = a))
      : ((d = Cn(t, this.top, o) - o / 2),
        (p = Cn(t, this.bottom, l) + l / 2),
        (r = u = a)),
      e.save(),
      (e.lineWidth = s.borderWidth),
      (e.strokeStyle = s.borderColor),
      e.beginPath(),
      e.moveTo(r, d),
      e.lineTo(u, p),
      e.stroke(),
      e.restore());
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const n = this.ctx,
      s = this._computeLabelArea();
    s && Xo(n, s);
    const o =
      this._labelItems || (this._labelItems = this._computeLabelItems(t));
    let l, a;
    for (l = 0, a = o.length; l < a; ++l) {
      const r = o[l],
        u = r.font,
        d = r.label;
      r.backdrop &&
        ((n.fillStyle = r.backdrop.color),
        n.fillRect(
          r.backdrop.left,
          r.backdrop.top,
          r.backdrop.width,
          r.backdrop.height,
        ));
      let p = r.textOffset;
      Bn(n, d, 0, p, u, r);
    }
    s && Ko(n);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: e, title: n, reverse: s },
    } = this;
    if (!n.display) return;
    const o = Be(n.font),
      l = He(n.padding),
      a = n.align;
    let r = o.lineHeight / 2;
    e === "bottom" || e === "center" || ee(e)
      ? ((r += l.bottom),
        me(n.text) && (r += o.lineHeight * (n.text.length - 1)))
      : (r += l.top);
    const {
      titleX: u,
      titleY: d,
      maxWidth: p,
      rotation: m,
    } = up(this, r, e, a);
    Bn(t, n.text, 0, 0, o, {
      color: n.color,
      maxWidth: p,
      rotation: m,
      textAlign: cp(a, e, s),
      textBaseline: "middle",
      translation: [u, d],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      e = (t.ticks && t.ticks.z) || 0,
      n = Kt(t.grid && t.grid.z, -1);
    return !this._isVisible() || this.draw !== $n.prototype.draw
      ? [
          {
            z: e,
            draw: (s) => {
              this.draw(s);
            },
          },
        ]
      : [
          {
            z: n,
            draw: (s) => {
              (this.drawBackground(), this.drawGrid(s), this.drawTitle());
            },
          },
          {
            z: n + 1,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: e,
            draw: (s) => {
              this.drawLabels(s);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(),
      n = this.axis + "AxisID",
      s = [];
    let o, l;
    for (o = 0, l = e.length; o < l; ++o) {
      const a = e[o];
      a[n] === this.id && (!t || a.type === t) && s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return Be(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class vo {
  constructor(t, e, n) {
    ((this.type = t),
      (this.scope = e),
      (this.override = n),
      (this.items = Object.create(null)));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype,
    );
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let n;
    hp(e) && (n = this.register(e));
    const s = this.items,
      o = t.id,
      l = this.scope + "." + o;
    if (!o) throw new Error("class does not have id: " + t);
    return (
      o in s ||
        ((s[o] = t),
        dp(t, l, n),
        this.override && ie.override(t.id, t.overrides)),
      l
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items,
      n = t.id,
      s = this.scope;
    (n in e && delete e[n],
      s && n in ie[s] && (delete ie[s][n], this.override && delete In[n]));
  }
}
function dp(i, t, e) {
  const n = Os(Object.create(null), [
    e ? ie.get(e) : {},
    ie.get(t),
    i.defaults,
  ]);
  (ie.set(t, n),
    i.defaultRoutes && fp(t, i.defaultRoutes),
    i.descriptors && ie.describe(t, i.descriptors));
}
function fp(i, t) {
  Object.keys(t).forEach((e) => {
    const n = e.split("."),
      s = n.pop(),
      o = [i].concat(n).join("."),
      l = t[e].split("."),
      a = l.pop(),
      r = l.join(".");
    ie.route(o, s, r, a);
  });
}
function hp(i) {
  return "id" in i && "defaults" in i;
}
class pp {
  constructor() {
    ((this.controllers = new vo(di, "datasets", !0)),
      (this.elements = new vo(fi, "elements")),
      (this.plugins = new vo(Object, "plugins")),
      (this.scales = new vo($n, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]));
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, n) {
    [...e].forEach((s) => {
      const o = n || this._getRegistryForType(s);
      n || o.isForType(s) || (o === this.plugins && s.id)
        ? this._exec(t, o, s)
        : re(s, (l) => {
            const a = n || this._getRegistryForType(l);
            this._exec(t, a, l);
          });
    });
  }
  _exec(t, e, n) {
    const s = Jl(t);
    (pe(n["before" + s], [], n), e[t](n), pe(n["after" + s], [], n));
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const n = this._typedRegistries[e];
      if (n.isForType(t)) return n;
    }
    return this.plugins;
  }
  _get(t, e, n) {
    const s = e.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + n + ".");
    return s;
  }
}
var Ri = new pp();
class il extends di {
  update(t) {
    const e = this._cachedMeta,
      { data: n = [] } = e,
      s = this.chart._animationsDisabled;
    let { start: o, count: l } = fu(e, n, s);
    if (
      ((this._drawStart = o),
      (this._drawCount = l),
      hu(e) && ((o = 0), (l = n.length)),
      this.options.showLine)
    ) {
      const { dataset: a, _dataset: r } = e;
      ((a._chart = this.chart),
        (a._datasetIndex = this.index),
        (a._decimated = !!r._decimated),
        (a.points = n));
      const u = this.resolveDatasetElementOptions(t);
      ((u.segment = this.options.segment),
        this.updateElement(a, void 0, { animated: !s, options: u }, t));
    }
    this.updateElements(n, o, l, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    (!this.datasetElementType &&
      t &&
      (this.datasetElementType = Ri.getElement("line")),
      super.addElements());
  }
  updateElements(t, e, n, s) {
    const o = s === "reset",
      { iScale: l, vScale: a, _stacked: r, _dataset: u } = this._cachedMeta,
      d = this.resolveDataElementOptions(e, s),
      p = this.getSharedOptions(d),
      m = this.includeOptions(s, p),
      _ = l.axis,
      g = a.axis,
      { spanGaps: b, segment: w } = this.options,
      y = os(b) ? b : Number.POSITIVE_INFINITY,
      S = this.chart._animationsDisabled || o || s === "none";
    let k = e > 0 && this.getParsed(e - 1);
    for (let C = e; C < e + n; ++C) {
      const P = t[C],
        T = this.getParsed(C),
        R = S ? P : {},
        F = ne(T[g]),
        D = (R[_] = l.getPixelForValue(T[_], C)),
        I = (R[g] =
          o || F
            ? a.getBasePixel()
            : a.getPixelForValue(r ? this.applyStack(a, T, r) : T[g], C));
      ((R.skip = isNaN(D) || isNaN(I) || F),
        (R.stop = C > 0 && Math.abs(T[_] - k[_]) > y),
        w && ((R.parsed = T), (R.raw = u.data[C])),
        m &&
          (R.options =
            p || this.resolveDataElementOptions(C, P.active ? "active" : s)),
        S || this.updateElement(P, C, R, s),
        (k = T));
    }
    this.updateSharedOptions(p, s, d);
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.data || [];
    if (!this.options.showLine) {
      let a = 0;
      for (let r = e.length - 1; r >= 0; --r)
        a = Math.max(a, e[r].size(this.resolveDataElementOptions(r)) / 2);
      return a > 0 && a;
    }
    const n = t.dataset,
      s = (n.options && n.options.borderWidth) || 0;
    if (!e.length) return s;
    const o = e[0].size(this.resolveDataElementOptions(0)),
      l = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(s, o, l) / 2;
  }
}
il.id = "scatter";
il.defaults = {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1,
};
il.overrides = {
  interaction: { mode: "point" },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(i) {
          return "(" + i.label + ", " + i.formattedValue + ")";
        },
      },
    },
  },
  scales: { x: { type: "linear" }, y: { type: "linear" } },
};
var mp = Object.freeze({
  __proto__: null,
  BarController: Go,
  BubbleController: Qo,
  DoughnutController: rs,
  LineController: Zo,
  PolarAreaController: Jo,
  PieController: da,
  RadarController: tl,
  ScatterController: il,
});
function Tn() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided.",
  );
}
class Nl {
  constructor(t) {
    this.options = t || {};
  }
  init(t) {}
  formats() {
    return Tn();
  }
  parse(t, e) {
    return Tn();
  }
  format(t, e) {
    return Tn();
  }
  add(t, e, n) {
    return Tn();
  }
  diff(t, e, n) {
    return Tn();
  }
  startOf(t, e, n) {
    return Tn();
  }
  endOf(t, e) {
    return Tn();
  }
}
Nl.override = function (i) {
  Object.assign(Nl.prototype, i);
};
var _p = { _date: Nl };
function gp(i, t, e, n) {
  const { controller: s, data: o, _sorted: l } = i,
    a = s._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && l && o.length) {
    const r = a._reversePixels ? sf : en;
    if (n) {
      if (s._sharedOptions) {
        const u = o[0],
          d = typeof u.getRange == "function" && u.getRange(t);
        if (d) {
          const p = r(o, t, e - d),
            m = r(o, t, e + d);
          return { lo: p.lo, hi: m.hi };
        }
      }
    } else return r(o, t, e);
  }
  return { lo: 0, hi: o.length - 1 };
}
function js(i, t, e, n, s) {
  const o = i.getSortedVisibleDatasetMetas(),
    l = e[t];
  for (let a = 0, r = o.length; a < r; ++a) {
    const { index: u, data: d } = o[a],
      { lo: p, hi: m } = gp(o[a], t, l, s);
    for (let _ = p; _ <= m; ++_) {
      const g = d[_];
      g.skip || n(g, u, _);
    }
  }
}
function bp(i) {
  const t = i.indexOf("x") !== -1,
    e = i.indexOf("y") !== -1;
  return function (n, s) {
    const o = t ? Math.abs(n.x - s.x) : 0,
      l = e ? Math.abs(n.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(l, 2));
  };
}
function Sl(i, t, e, n, s) {
  const o = [];
  return (
    (!s && !i.isPointInArea(t)) ||
      js(
        i,
        e,
        t,
        function (a, r, u) {
          (!s && !Es(a, i.chartArea, 0)) ||
            (a.inRange(t.x, t.y, n) &&
              o.push({ element: a, datasetIndex: r, index: u }));
        },
        !0,
      ),
    o
  );
}
function vp(i, t, e, n) {
  let s = [];
  function o(l, a, r) {
    const { startAngle: u, endAngle: d } = l.getProps(
        ["startAngle", "endAngle"],
        n,
      ),
      { angle: p } = au(l, { x: t.x, y: t.y });
    Fs(p, u, d) && s.push({ element: l, datasetIndex: a, index: r });
  }
  return (js(i, e, t, o), s);
}
function yp(i, t, e, n, s, o) {
  let l = [];
  const a = bp(e);
  let r = Number.POSITIVE_INFINITY;
  function u(d, p, m) {
    const _ = d.inRange(t.x, t.y, s);
    if (n && !_) return;
    const g = d.getCenterPoint(s);
    if (!(!!o || i.isPointInArea(g)) && !_) return;
    const w = a(t, g);
    w < r
      ? ((l = [{ element: d, datasetIndex: p, index: m }]), (r = w))
      : w === r && l.push({ element: d, datasetIndex: p, index: m });
  }
  return (js(i, e, t, u), l);
}
function Al(i, t, e, n, s, o) {
  return !o && !i.isPointInArea(t)
    ? []
    : e === "r" && !n
      ? vp(i, t, e, s)
      : yp(i, t, e, n, s, o);
}
function Lr(i, t, e, n, s) {
  const o = [],
    l = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    js(i, e, t, (r, u, d) => {
      r[l](t[e], s) &&
        (o.push({ element: r, datasetIndex: u, index: d }),
        (a = a || r.inRange(t.x, t.y, s)));
    }),
    n && !a ? [] : o
  );
}
var wp = {
  evaluateInteractionItems: js,
  modes: {
    index(i, t, e, n) {
      const s = Dn(t, i),
        o = e.axis || "x",
        l = e.includeInvisible || !1,
        a = e.intersect ? Sl(i, s, o, n, l) : Al(i, s, o, !1, n, l),
        r = [];
      return a.length
        ? (i.getSortedVisibleDatasetMetas().forEach((u) => {
            const d = a[0].index,
              p = u.data[d];
            p &&
              !p.skip &&
              r.push({ element: p, datasetIndex: u.index, index: d });
          }),
          r)
        : [];
    },
    dataset(i, t, e, n) {
      const s = Dn(t, i),
        o = e.axis || "xy",
        l = e.includeInvisible || !1;
      let a = e.intersect ? Sl(i, s, o, n, l) : Al(i, s, o, !1, n, l);
      if (a.length > 0) {
        const r = a[0].datasetIndex,
          u = i.getDatasetMeta(r).data;
        a = [];
        for (let d = 0; d < u.length; ++d)
          a.push({ element: u[d], datasetIndex: r, index: d });
      }
      return a;
    },
    point(i, t, e, n) {
      const s = Dn(t, i),
        o = e.axis || "xy",
        l = e.includeInvisible || !1;
      return Sl(i, s, o, n, l);
    },
    nearest(i, t, e, n) {
      const s = Dn(t, i),
        o = e.axis || "xy",
        l = e.includeInvisible || !1;
      return Al(i, s, o, e.intersect, n, l);
    },
    x(i, t, e, n) {
      const s = Dn(t, i);
      return Lr(i, s, "x", e.intersect, n);
    },
    y(i, t, e, n) {
      const s = Dn(t, i);
      return Lr(i, s, "y", e.intersect, n);
    },
  },
};
const Bu = ["left", "top", "right", "bottom"];
function gs(i, t) {
  return i.filter((e) => e.pos === t);
}
function Pr(i, t) {
  return i.filter((e) => Bu.indexOf(e.pos) === -1 && e.box.axis === t);
}
function bs(i, t) {
  return i.sort((e, n) => {
    const s = t ? n : e,
      o = t ? e : n;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function xp(i) {
  const t = [];
  let e, n, s, o, l, a;
  for (e = 0, n = (i || []).length; e < n; ++e)
    ((s = i[e]),
      ({
        position: o,
        options: { stack: l, stackWeight: a = 1 },
      } = s),
      t.push({
        index: e,
        box: s,
        pos: o,
        horizontal: s.isHorizontal(),
        weight: s.weight,
        stack: l && o + l,
        stackWeight: a,
      }));
  return t;
}
function kp(i) {
  const t = {};
  for (const e of i) {
    const { stack: n, pos: s, stackWeight: o } = e;
    if (!n || !Bu.includes(s)) continue;
    const l = t[n] || (t[n] = { count: 0, placed: 0, weight: 0, size: 0 });
    (l.count++, (l.weight += o));
  }
  return t;
}
function Mp(i, t) {
  const e = kp(i),
    { vBoxMaxWidth: n, hBoxMaxHeight: s } = t;
  let o, l, a;
  for (o = 0, l = i.length; o < l; ++o) {
    a = i[o];
    const { fullSize: r } = a.box,
      u = e[a.stack],
      d = u && a.stackWeight / u.weight;
    a.horizontal
      ? ((a.width = d ? d * n : r && t.availableWidth), (a.height = s))
      : ((a.width = n), (a.height = d ? d * s : r && t.availableHeight));
  }
  return e;
}
function Sp(i) {
  const t = xp(i),
    e = bs(
      t.filter((u) => u.box.fullSize),
      !0,
    ),
    n = bs(gs(t, "left"), !0),
    s = bs(gs(t, "right")),
    o = bs(gs(t, "top"), !0),
    l = bs(gs(t, "bottom")),
    a = Pr(t, "x"),
    r = Pr(t, "y");
  return {
    fullSize: e,
    leftAndTop: n.concat(o),
    rightAndBottom: s.concat(r).concat(l).concat(a),
    chartArea: gs(t, "chartArea"),
    vertical: n.concat(s).concat(r),
    horizontal: o.concat(l).concat(a),
  };
}
function Cr(i, t, e, n) {
  return Math.max(i[e], t[e]) + Math.max(i[n], t[n]);
}
function $u(i, t) {
  ((i.top = Math.max(i.top, t.top)),
    (i.left = Math.max(i.left, t.left)),
    (i.bottom = Math.max(i.bottom, t.bottom)),
    (i.right = Math.max(i.right, t.right)));
}
function Ap(i, t, e, n) {
  const { pos: s, box: o } = e,
    l = i.maxPadding;
  if (!ee(s)) {
    e.size && (i[s] -= e.size);
    const p = n[e.stack] || { size: 0, count: 1 };
    ((p.size = Math.max(p.size, e.horizontal ? o.height : o.width)),
      (e.size = p.size / p.count),
      (i[s] += e.size));
  }
  o.getPadding && $u(l, o.getPadding());
  const a = Math.max(0, t.outerWidth - Cr(l, i, "left", "right")),
    r = Math.max(0, t.outerHeight - Cr(l, i, "top", "bottom")),
    u = a !== i.w,
    d = r !== i.h;
  return (
    (i.w = a),
    (i.h = r),
    e.horizontal ? { same: u, other: d } : { same: d, other: u }
  );
}
function Lp(i) {
  const t = i.maxPadding;
  function e(n) {
    const s = Math.max(t[n] - i[n], 0);
    return ((i[n] += s), s);
  }
  ((i.y += e("top")), (i.x += e("left")), e("right"), e("bottom"));
}
function Pp(i, t) {
  const e = t.maxPadding;
  function n(s) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      s.forEach((l) => {
        o[l] = Math.max(t[l], e[l]);
      }),
      o
    );
  }
  return n(i ? ["left", "right"] : ["top", "bottom"]);
}
function Ms(i, t, e, n) {
  const s = [];
  let o, l, a, r, u, d;
  for (o = 0, l = i.length, u = 0; o < l; ++o) {
    ((a = i[o]),
      (r = a.box),
      r.update(a.width || t.w, a.height || t.h, Pp(a.horizontal, t)));
    const { same: p, other: m } = Ap(t, e, a, n);
    ((u |= p && s.length), (d = d || m), r.fullSize || s.push(a));
  }
  return (u && Ms(s, t, e, n)) || d;
}
function yo(i, t, e, n, s) {
  ((i.top = e),
    (i.left = t),
    (i.right = t + n),
    (i.bottom = e + s),
    (i.width = n),
    (i.height = s));
}
function Tr(i, t, e, n) {
  const s = e.padding;
  let { x: o, y: l } = t;
  for (const a of i) {
    const r = a.box,
      u = n[a.stack] || { count: 1, placed: 0, weight: 1 },
      d = a.stackWeight / u.weight || 1;
    if (a.horizontal) {
      const p = t.w * d,
        m = u.size || r.height;
      (ei(u.start) && (l = u.start),
        r.fullSize
          ? yo(r, s.left, l, e.outerWidth - s.right - s.left, m)
          : yo(r, t.left + u.placed, l, p, m),
        (u.start = l),
        (u.placed += p),
        (l = r.bottom));
    } else {
      const p = t.h * d,
        m = u.size || r.width;
      (ei(u.start) && (o = u.start),
        r.fullSize
          ? yo(r, o, s.top, m, e.outerHeight - s.bottom - s.top)
          : yo(r, o, t.top + u.placed, m, p),
        (u.start = o),
        (u.placed += p),
        (o = r.right));
    }
  }
  ((t.x = o), (t.y = l));
}
ie.set("layout", {
  autoPadding: !0,
  padding: { top: 0, right: 0, bottom: 0, left: 0 },
});
var We = {
  addBox(i, t) {
    (i.boxes || (i.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(e) {
                t.draw(e);
              },
            },
          ];
        }),
      i.boxes.push(t));
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    ((t.fullSize = e.fullSize),
      (t.position = e.position),
      (t.weight = e.weight));
  },
  update(i, t, e, n) {
    if (!i) return;
    const s = He(i.options.layout.padding),
      o = Math.max(t - s.width, 0),
      l = Math.max(e - s.height, 0),
      a = Sp(i.boxes),
      r = a.vertical,
      u = a.horizontal;
    re(i.boxes, (b) => {
      typeof b.beforeLayout == "function" && b.beforeLayout();
    });
    const d =
        r.reduce(
          (b, w) => (w.box.options && w.box.options.display === !1 ? b : b + 1),
          0,
        ) || 1,
      p = Object.freeze({
        outerWidth: t,
        outerHeight: e,
        padding: s,
        availableWidth: o,
        availableHeight: l,
        vBoxMaxWidth: o / 2 / d,
        hBoxMaxHeight: l / 2,
      }),
      m = Object.assign({}, s);
    $u(m, He(n));
    const _ = Object.assign(
        { maxPadding: m, w: o, h: l, x: s.left, y: s.top },
        s,
      ),
      g = Mp(r.concat(u), p);
    (Ms(a.fullSize, _, p, g),
      Ms(r, _, p, g),
      Ms(u, _, p, g) && Ms(r, _, p, g),
      Lp(_),
      Tr(a.leftAndTop, _, p, g),
      (_.x += _.w),
      (_.y += _.h),
      Tr(a.rightAndBottom, _, p, g),
      (i.chartArea = {
        left: _.left,
        top: _.top,
        right: _.left + _.w,
        bottom: _.top + _.h,
        height: _.h,
        width: _.w,
      }),
      re(a.chartArea, (b) => {
        const w = b.box;
        (Object.assign(w, i.chartArea),
          w.update(_.w, _.h, { left: 0, top: 0, right: 0, bottom: 0 }));
      }));
  },
};
class zu {
  acquireContext(t, e) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, n) {}
  removeEventListener(t, e, n) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, n, s) {
    return (
      (e = Math.max(0, e || t.width)),
      (n = n || t.height),
      { width: e, height: Math.max(0, s ? Math.floor(e / s) : n) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class Cp extends zu {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Po = "$chartjs",
  Tp = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  Dr = (i) => i === null || i === "";
function Dp(i, t) {
  const e = i.style,
    n = i.getAttribute("height"),
    s = i.getAttribute("width");
  if (
    ((i[Po] = {
      initial: {
        height: n,
        width: s,
        style: { display: e.display, height: e.height, width: e.width },
      },
    }),
    (e.display = e.display || "block"),
    (e.boxSizing = e.boxSizing || "border-box"),
    Dr(s))
  ) {
    const o = cr(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Dr(n))
    if (i.style.height === "") i.height = i.width / (t || 2);
    else {
      const o = cr(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Nu = dh ? { passive: !0 } : !1;
function Rp(i, t, e) {
  i.addEventListener(t, e, Nu);
}
function Op(i, t, e) {
  i.canvas.removeEventListener(t, e, Nu);
}
function Fp(i, t) {
  const e = Tp[i.type] || i.type,
    { x: n, y: s } = Dn(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: n !== void 0 ? n : null,
    y: s !== void 0 ? s : null,
  };
}
function No(i, t) {
  for (const e of i) if (e === t || e.contains(t)) return !0;
}
function Ep(i, t, e) {
  const n = i.canvas,
    s = new MutationObserver((o) => {
      let l = !1;
      for (const a of o)
        ((l = l || No(a.addedNodes, n)), (l = l && !No(a.removedNodes, n)));
      l && e();
    });
  return (s.observe(document, { childList: !0, subtree: !0 }), s);
}
function Ip(i, t, e) {
  const n = i.canvas,
    s = new MutationObserver((o) => {
      let l = !1;
      for (const a of o)
        ((l = l || No(a.removedNodes, n)), (l = l && !No(a.addedNodes, n)));
      l && e();
    });
  return (s.observe(document, { childList: !0, subtree: !0 }), s);
}
const Bs = new Map();
let Rr = 0;
function ju() {
  const i = window.devicePixelRatio;
  i !== Rr &&
    ((Rr = i),
    Bs.forEach((t, e) => {
      e.currentDevicePixelRatio !== i && t();
    }));
}
function Bp(i, t) {
  (Bs.size || window.addEventListener("resize", ju), Bs.set(i, t));
}
function $p(i) {
  (Bs.delete(i), Bs.size || window.removeEventListener("resize", ju));
}
function zp(i, t, e) {
  const n = i.canvas,
    s = n && ua(n);
  if (!s) return;
  const o = du((a, r) => {
      const u = s.clientWidth;
      (e(a, r), u < s.clientWidth && e());
    }, window),
    l = new ResizeObserver((a) => {
      const r = a[0],
        u = r.contentRect.width,
        d = r.contentRect.height;
      (u === 0 && d === 0) || o(u, d);
    });
  return (l.observe(s), Bp(i, o), l);
}
function Ll(i, t, e) {
  (e && e.disconnect(), t === "resize" && $p(i));
}
function Np(i, t, e) {
  const n = i.canvas,
    s = du(
      (o) => {
        i.ctx !== null && e(Fp(o, i));
      },
      i,
      (o) => {
        const l = o[0];
        return [l, l.offsetX, l.offsetY];
      },
    );
  return (Rp(n, t, s), s);
}
class jp extends zu {
  acquireContext(t, e) {
    const n = t && t.getContext && t.getContext("2d");
    return n && n.canvas === t ? (Dp(t, e), n) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Po]) return !1;
    const n = e[Po].initial;
    ["height", "width"].forEach((o) => {
      const l = n[o];
      ne(l) ? e.removeAttribute(o) : e.setAttribute(o, l);
    });
    const s = n.style || {};
    return (
      Object.keys(s).forEach((o) => {
        e.style[o] = s[o];
      }),
      (e.width = e.width),
      delete e[Po],
      !0
    );
  }
  addEventListener(t, e, n) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}),
      l = { attach: Ep, detach: Ip, resize: zp }[e] || Np;
    s[e] = l(t, e, n);
  }
  removeEventListener(t, e) {
    const n = t.$proxies || (t.$proxies = {}),
      s = n[e];
    if (!s) return;
    ((({ attach: Ll, detach: Ll, resize: Ll })[e] || Op)(t, e, s),
      (n[e] = void 0));
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, n, s) {
    return uh(t, e, n, s);
  }
  isAttached(t) {
    const e = ua(t);
    return !!(e && e.isConnected);
  }
}
function Wp(i) {
  return !Lu() || (typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas)
    ? Cp
    : jp;
}
class Hp {
  constructor() {
    this._init = [];
  }
  notify(t, e, n, s) {
    e === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t),
      l = this._notify(o, t, e, n);
    return (
      e === "afterDestroy" &&
        (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")),
      l
    );
  }
  _notify(t, e, n, s) {
    s = s || {};
    for (const o of t) {
      const l = o.plugin,
        a = l[n],
        r = [e, s, o.options];
      if (pe(a, r, l) === !1 && s.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    ne(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const e = (this._cache = this._createDescriptors(t));
    return (this._notifyStateChanges(t), e);
  }
  _createDescriptors(t, e) {
    const n = t && t.config,
      s = Kt(n.options && n.options.plugins, {}),
      o = Vp(n);
    return s === !1 && !e ? [] : Yp(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      n = this._cache,
      s = (o, l) =>
        o.filter((a) => !l.some((r) => a.plugin.id === r.plugin.id));
    (this._notify(s(e, n), t, "stop"), this._notify(s(n, e), t, "start"));
  }
}
function Vp(i) {
  const t = {},
    e = [],
    n = Object.keys(Ri.plugins.items);
  for (let o = 0; o < n.length; o++) e.push(Ri.getPlugin(n[o]));
  const s = i.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    e.indexOf(l) === -1 && (e.push(l), (t[l.id] = !0));
  }
  return { plugins: e, localIds: t };
}
function Up(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function Yp(i, { plugins: t, localIds: e }, n, s) {
  const o = [],
    l = i.getContext();
  for (const a of t) {
    const r = a.id,
      u = Up(n[r], s);
    u !== null &&
      o.push({
        plugin: a,
        options: Xp(i.config, { plugin: a, local: e[r] }, u, l),
      });
  }
  return o;
}
function Xp(i, { plugin: t, local: e }, n, s) {
  const o = i.pluginScopeKeys(t),
    l = i.getOptionScopes(n, o);
  return (
    e && t.defaults && l.push(t.defaults),
    i.createResolver(l, s, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function jl(i, t) {
  const e = ie.datasets[i] || {};
  return (
    ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x"
  );
}
function Kp(i, t) {
  let e = i;
  return (
    i === "_index_" ? (e = t) : i === "_value_" && (e = t === "x" ? "y" : "x"),
    e
  );
}
function qp(i, t) {
  return i === t ? "_index_" : "_value_";
}
function Gp(i) {
  if (i === "top" || i === "bottom") return "x";
  if (i === "left" || i === "right") return "y";
}
function Wl(i, t) {
  return i === "x" || i === "y"
    ? i
    : t.axis || Gp(t.position) || i.charAt(0).toLowerCase();
}
function Qp(i, t) {
  const e = In[i.type] || { scales: {} },
    n = t.scales || {},
    s = jl(i.type, t),
    o = Object.create(null),
    l = Object.create(null);
  return (
    Object.keys(n).forEach((a) => {
      const r = n[a];
      if (!ee(r))
        return console.error(`Invalid scale configuration for scale: ${a}`);
      if (r._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${a}`,
        );
      const u = Wl(a, r),
        d = qp(u, s),
        p = e.scales || {};
      ((o[u] = o[u] || a),
        (l[a] = Ls(Object.create(null), [{ axis: u }, r, p[u], p[d]])));
    }),
    i.data.datasets.forEach((a) => {
      const r = a.type || i.type,
        u = a.indexAxis || jl(r, t),
        p = (In[r] || {}).scales || {};
      Object.keys(p).forEach((m) => {
        const _ = Kp(m, u),
          g = a[_ + "AxisID"] || o[_] || _;
        ((l[g] = l[g] || Object.create(null)),
          Ls(l[g], [{ axis: _ }, n[g], p[m]]));
      });
    }),
    Object.keys(l).forEach((a) => {
      const r = l[a];
      Ls(r, [ie.scales[r.type], ie.scale]);
    }),
    l
  );
}
function Wu(i) {
  const t = i.options || (i.options = {});
  ((t.plugins = Kt(t.plugins, {})), (t.scales = Qp(i, t)));
}
function Hu(i) {
  return (
    (i = i || {}),
    (i.datasets = i.datasets || []),
    (i.labels = i.labels || []),
    i
  );
}
function Zp(i) {
  return ((i = i || {}), (i.data = Hu(i.data)), Wu(i), i);
}
const Or = new Map(),
  Vu = new Set();
function wo(i, t) {
  let e = Or.get(i);
  return (e || ((e = t()), Or.set(i, e), Vu.add(e)), e);
}
const vs = (i, t, e) => {
  const n = _n(t, e);
  n !== void 0 && i.add(n);
};
class Jp {
  constructor(t) {
    ((this._config = Zp(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map()));
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Hu(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    (this.clearCache(), Wu(t));
  }
  clearCache() {
    (this._scopeCache.clear(), this._resolverCache.clear());
  }
  datasetScopeKeys(t) {
    return wo(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, e) {
    return wo(`${t}.transition.${e}`, () => [
      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return wo(`${t}-${e}`, () => [
      [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id,
      n = this.type;
    return wo(`${n}-plugin-${e}`, () => [
      [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, e) {
    const n = this._scopeCache;
    let s = n.get(t);
    return ((!s || e) && ((s = new Map()), n.set(t, s)), s);
  }
  getOptionScopes(t, e, n) {
    const { options: s, type: o } = this,
      l = this._cachedScopes(t, n),
      a = l.get(e);
    if (a) return a;
    const r = new Set();
    e.forEach((d) => {
      (t && (r.add(t), d.forEach((p) => vs(r, t, p))),
        d.forEach((p) => vs(r, s, p)),
        d.forEach((p) => vs(r, In[o] || {}, p)),
        d.forEach((p) => vs(r, ie, p)),
        d.forEach((p) => vs(r, $l, p)));
    });
    const u = Array.from(r);
    return (
      u.length === 0 && u.push(Object.create(null)),
      Vu.has(e) && l.set(e, u),
      u
    );
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [t, In[e] || {}, ie.datasets[e] || {}, { type: e }, ie, $l];
  }
  resolveNamedOptions(t, e, n, s = [""]) {
    const o = { $shared: !0 },
      { resolver: l, subPrefixes: a } = Fr(this._resolverCache, t, s);
    let r = l;
    if (e0(l, e)) {
      ((o.$shared = !1), (n = gn(n) ? n() : n));
      const u = this.createResolver(t, n, a);
      r = ls(l, n, u);
    }
    for (const u of e) o[u] = r[u];
    return o;
  }
  createResolver(t, e, n = [""], s) {
    const { resolver: o } = Fr(this._resolverCache, t, n);
    return ee(e) ? ls(o, e, void 0, s) : o;
  }
}
function Fr(i, t, e) {
  let n = i.get(t);
  n || ((n = new Map()), i.set(t, n));
  const s = e.join();
  let o = n.get(s);
  return (
    o ||
      ((o = {
        resolver: aa(t, e),
        subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover")),
      }),
      n.set(s, o)),
    o
  );
}
const t0 = (i) =>
  ee(i) && Object.getOwnPropertyNames(i).reduce((t, e) => t || gn(i[e]), !1);
function e0(i, t) {
  const { isScriptable: e, isIndexable: n } = wu(i);
  for (const s of t) {
    const o = e(s),
      l = n(s),
      a = (l || o) && i[s];
    if ((o && (gn(a) || t0(a))) || (l && me(a))) return !0;
  }
  return !1;
}
var i0 = "3.9.1";
const n0 = ["top", "bottom", "left", "right", "chartArea"];
function Er(i, t) {
  return i === "top" || i === "bottom" || (n0.indexOf(i) === -1 && t === "x");
}
function Ir(i, t) {
  return function (e, n) {
    return e[i] === n[i] ? e[t] - n[t] : e[i] - n[i];
  };
}
function Br(i) {
  const t = i.chart,
    e = t.options.animation;
  (t.notifyPlugins("afterRender"), pe(e && e.onComplete, [i], t));
}
function s0(i) {
  const t = i.chart,
    e = t.options.animation;
  pe(e && e.onProgress, [i], t);
}
function Uu(i) {
  return (
    Lu() && typeof i == "string"
      ? (i = document.getElementById(i))
      : i && i.length && (i = i[0]),
    i && i.canvas && (i = i.canvas),
    i
  );
}
const jo = {},
  Yu = (i) => {
    const t = Uu(i);
    return Object.values(jo)
      .filter((e) => e.canvas === t)
      .pop();
  };
function o0(i, t, e) {
  const n = Object.keys(i);
  for (const s of n) {
    const o = +s;
    if (o >= t) {
      const l = i[s];
      (delete i[s], (e > 0 || o > t) && (i[o + e] = l));
    }
  }
}
function l0(i, t, e, n) {
  return !e || i.type === "mouseout" ? null : n ? t : i;
}
class nl {
  constructor(t, e) {
    const n = (this.config = new Jp(e)),
      s = Uu(t),
      o = Yu(s);
    if (o)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          o.id +
          "' must be destroyed before the canvas with ID '" +
          o.canvas.id +
          "' can be reused.",
      );
    const l = n.createResolver(n.chartOptionScopes(), this.getContext());
    ((this.platform = new (n.platform || Wp(s))()),
      this.platform.updateConfig(n));
    const a = this.platform.acquireContext(s, l.aspectRatio),
      r = a && a.canvas,
      u = r && r.height,
      d = r && r.width;
    if (
      ((this.id = Vd()),
      (this.ctx = a),
      (this.canvas = r),
      (this.width = d),
      (this.height = u),
      (this._options = l),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new Hp()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = af((p) => this.update(p), l.resizeDelay || 0)),
      (this._dataChanges = []),
      (jo[this.id] = this),
      !a || !r)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item",
      );
      return;
    }
    (Qi.listen(this, "complete", Br),
      Qi.listen(this, "progress", s0),
      this._initialize(),
      this.attached && this.update());
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: e },
      width: n,
      height: s,
      _aspectRatio: o,
    } = this;
    return ne(t) ? (e && o ? o : s ? n / s : null) : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  _initialize() {
    return (
      this.notifyPlugins("beforeInit"),
      this.options.responsive
        ? this.resize()
        : rr(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins("afterInit"),
      this
    );
  }
  clear() {
    return (or(this.canvas, this.ctx), this);
  }
  stop() {
    return (Qi.stop(this), this);
  }
  resize(t, e) {
    Qi.running(this)
      ? (this._resizeBeforeDraw = { width: t, height: e })
      : this._resize(t, e);
  }
  _resize(t, e) {
    const n = this.options,
      s = this.canvas,
      o = n.maintainAspectRatio && this.aspectRatio,
      l = this.platform.getMaximumSize(s, t, e, o),
      a = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
      r = this.width ? "resize" : "attach";
    ((this.width = l.width),
      (this.height = l.height),
      (this._aspectRatio = this.aspectRatio),
      rr(this, a, !0) &&
        (this.notifyPlugins("resize", { size: l }),
        pe(n.onResize, [this, l], this),
        this.attached && this._doResize(r) && this.render()));
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    re(e, (n, s) => {
      n.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options,
      e = t.scales,
      n = this.scales,
      s = Object.keys(n).reduce((l, a) => ((l[a] = !1), l), {});
    let o = [];
    (e &&
      (o = o.concat(
        Object.keys(e).map((l) => {
          const a = e[l],
            r = Wl(l, a),
            u = r === "r",
            d = r === "x";
          return {
            options: a,
            dposition: u ? "chartArea" : d ? "bottom" : "left",
            dtype: u ? "radialLinear" : d ? "category" : "linear",
          };
        }),
      )),
      re(o, (l) => {
        const a = l.options,
          r = a.id,
          u = Wl(r, a),
          d = Kt(a.type, l.dtype);
        ((a.position === void 0 || Er(a.position, u) !== Er(l.dposition)) &&
          (a.position = l.dposition),
          (s[r] = !0));
        let p = null;
        if (r in n && n[r].type === d) p = n[r];
        else {
          const m = Ri.getScale(d);
          ((p = new m({ id: r, type: d, ctx: this.ctx, chart: this })),
            (n[p.id] = p));
        }
        p.init(a, t);
      }),
      re(s, (l, a) => {
        l || delete n[a];
      }),
      re(n, (l) => {
        (We.configure(this, l, l.options), We.addBox(this, l));
      }));
  }
  _updateMetasets() {
    const t = this._metasets,
      e = this.data.datasets.length,
      n = t.length;
    if ((t.sort((s, o) => s.index - o.index), n > e)) {
      for (let s = e; s < n; ++s) this._destroyDatasetMeta(s);
      t.splice(e, n - e);
    }
    this._sortedMetasets = t.slice(0).sort(Ir("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: { datasets: e },
    } = this;
    (t.length > e.length && delete this._stacks,
      t.forEach((n, s) => {
        e.filter((o) => o === n._dataset).length === 0 &&
          this._destroyDatasetMeta(s);
      }));
  }
  buildOrUpdateControllers() {
    const t = [],
      e = this.data.datasets;
    let n, s;
    for (this._removeUnreferencedMetasets(), n = 0, s = e.length; n < s; n++) {
      const o = e[n];
      let l = this.getDatasetMeta(n);
      const a = o.type || this.config.type;
      if (
        (l.type &&
          l.type !== a &&
          (this._destroyDatasetMeta(n), (l = this.getDatasetMeta(n))),
        (l.type = a),
        (l.indexAxis = o.indexAxis || jl(a, this.options)),
        (l.order = o.order || 0),
        (l.index = n),
        (l.label = "" + o.label),
        (l.visible = this.isDatasetVisible(n)),
        l.controller)
      )
        (l.controller.updateIndex(n), l.controller.linkScales());
      else {
        const r = Ri.getController(a),
          { datasetElementType: u, dataElementType: d } = ie.datasets[a];
        (Object.assign(r.prototype, {
          dataElementType: Ri.getElement(d),
          datasetElementType: u && Ri.getElement(u),
        }),
          (l.controller = new r(this, n)),
          t.push(l.controller));
      }
    }
    return (this._updateMetasets(), t);
  }
  _resetElements() {
    re(
      this.data.datasets,
      (t, e) => {
        this.getDatasetMeta(e).controller.reset();
      },
      this,
    );
  }
  reset() {
    (this._resetElements(), this.notifyPlugins("reset"));
  }
  update(t) {
    const e = this.config;
    e.update();
    const n = (this._options = e.createResolver(
        e.chartOptionScopes(),
        this.getContext(),
      )),
      s = (this._animationsDisabled = !n.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
    )
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let l = 0;
    for (let u = 0, d = this.data.datasets.length; u < d; u++) {
      const { controller: p } = this.getDatasetMeta(u),
        m = !s && o.indexOf(p) === -1;
      (p.buildOrUpdateElements(m), (l = Math.max(+p.getMaxOverflow(), l)));
    }
    ((l = this._minPadding = n.layout.autoPadding ? l : 0),
      this._updateLayout(l),
      s ||
        re(o, (u) => {
          u.reset();
        }),
      this._updateDatasets(t),
      this.notifyPlugins("afterUpdate", { mode: t }),
      this._layers.sort(Ir("z", "_idx")));
    const { _active: a, _lastEvent: r } = this;
    (r
      ? this._eventHandler(r, !0)
      : a.length && this._updateHoverStyles(a, a, !0),
      this.render());
  }
  _updateScales() {
    (re(this.scales, (t) => {
      We.removeBox(this, t);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales());
  }
  _checkEventBindings() {
    const t = this.options,
      e = new Set(Object.keys(this._listeners)),
      n = new Set(t.events);
    (!Xa(e, n) || !!this._responsiveListeners !== t.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      e = this._getUniformDataChanges() || [];
    for (const { method: n, start: s, count: o } of e) {
      const l = n === "_removeElements" ? -o : o;
      o0(t, s, l);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length) return;
    this._dataChanges = [];
    const e = this.data.datasets.length,
      n = (o) =>
        new Set(
          t
            .filter((l) => l[0] === o)
            .map((l, a) => a + "," + l.splice(1).join(",")),
        ),
      s = n(0);
    for (let o = 1; o < e; o++) if (!Xa(s, n(o))) return;
    return Array.from(s)
      .map((o) => o.split(","))
      .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
    We.update(this, this.width, this.height, t);
    const e = this.chartArea,
      n = e.width <= 0 || e.height <= 0;
    ((this._layers = []),
      re(
        this.boxes,
        (s) => {
          (n && s.position === "chartArea") ||
            (s.configure && s.configure(), this._layers.push(...s._layers()));
        },
        this,
      ),
      this._layers.forEach((s, o) => {
        s._idx = o;
      }),
      this.notifyPlugins("afterLayout"));
  }
  _updateDatasets(t) {
    if (
      this.notifyPlugins("beforeDatasetsUpdate", {
        mode: t,
        cancelable: !0,
      }) !== !1
    ) {
      for (let e = 0, n = this.data.datasets.length; e < n; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, n = this.data.datasets.length; e < n; ++e)
        this._updateDataset(e, gn(t) ? t({ datasetIndex: e }) : t);
      this.notifyPlugins("afterDatasetsUpdate", { mode: t });
    }
  }
  _updateDataset(t, e) {
    const n = this.getDatasetMeta(t),
      s = { meta: n, index: t, mode: e, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", s) !== !1 &&
      (n.controller._update(e),
      (s.cancelable = !1),
      this.notifyPlugins("afterDatasetUpdate", s));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
      (Qi.has(this)
        ? this.attached && !Qi.running(this) && Qi.start(this)
        : (this.draw(), Br({ chart: this })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: n, height: s } = this._resizeBeforeDraw;
      (this._resize(n, s), (this._resizeBeforeDraw = null));
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
    )
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets,
      n = [];
    let s, o;
    for (s = 0, o = e.length; s < o; ++s) {
      const l = e[s];
      (!t || l.visible) && n.push(l);
    }
    return n;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx,
      n = t._clip,
      s = !n.disabled,
      o = this.chartArea,
      l = { meta: t, index: t.index, cancelable: !0 };
    this.notifyPlugins("beforeDatasetDraw", l) !== !1 &&
      (s &&
        Xo(e, {
          left: n.left === !1 ? 0 : o.left - n.left,
          right: n.right === !1 ? this.width : o.right + n.right,
          top: n.top === !1 ? 0 : o.top - n.top,
          bottom: n.bottom === !1 ? this.height : o.bottom + n.bottom,
        }),
      t.controller.draw(),
      s && Ko(e),
      (l.cancelable = !1),
      this.notifyPlugins("afterDatasetDraw", l));
  }
  isPointInArea(t) {
    return Es(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, n, s) {
    const o = wp.modes[e];
    return typeof o == "function" ? o(this, t, n, s) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t],
      n = this._metasets;
    let s = n.filter((o) => o && o._dataset === e).pop();
    return (
      s ||
        ((s = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (e && e.order) || 0,
          index: t,
          _dataset: e,
          _parsed: [],
          _sorted: !1,
        }),
        n.push(s)),
      s
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = bn(null, { chart: this, type: "chart" }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e) return !1;
    const n = this.getDatasetMeta(t);
    return typeof n.hidden == "boolean" ? !n.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const n = this.getDatasetMeta(t);
    n.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, n) {
    const s = n ? "show" : "hide",
      o = this.getDatasetMeta(t),
      l = o.controller._resolveAnimations(void 0, s);
    ei(e)
      ? ((o.data[e].hidden = !n), this.update())
      : (this.setDatasetVisibility(t, n),
        l.update(o, { visible: n }),
        this.update((a) => (a.datasetIndex === t ? s : void 0)));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    (e && e.controller && e.controller._destroy(), delete this._metasets[t]);
  }
  _stop() {
    let t, e;
    for (
      this.stop(), Qi.remove(this), t = 0, e = this.data.datasets.length;
      t < e;
      ++t
    )
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    (this._stop(),
      this.config.clearCache(),
      t &&
        (this.unbindEvents(),
        or(t, e),
        this.platform.releaseContext(e),
        (this.canvas = null),
        (this.ctx = null)),
      this.notifyPlugins("destroy"),
      delete jo[this.id],
      this.notifyPlugins("afterDestroy"));
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    (this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0));
  }
  bindUserEvents() {
    const t = this._listeners,
      e = this.platform,
      n = (o, l) => {
        (e.addEventListener(this, o, l), (t[o] = l));
      },
      s = (o, l, a) => {
        ((o.offsetX = l), (o.offsetY = a), this._eventHandler(o));
      };
    re(this.options.events, (o) => n(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners,
      e = this.platform,
      n = (r, u) => {
        (e.addEventListener(this, r, u), (t[r] = u));
      },
      s = (r, u) => {
        t[r] && (e.removeEventListener(this, r, u), delete t[r]);
      },
      o = (r, u) => {
        this.canvas && this.resize(r, u);
      };
    let l;
    const a = () => {
      (s("attach", a),
        (this.attached = !0),
        this.resize(),
        n("resize", o),
        n("detach", l));
    };
    ((l = () => {
      ((this.attached = !1),
        s("resize", o),
        this._stop(),
        this._resize(0, 0),
        n("attach", a));
    }),
      e.isAttached(this.canvas) ? a() : l());
  }
  unbindEvents() {
    (re(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }),
      (this._listeners = {}),
      re(this._responsiveListeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
      (this._responsiveListeners = void 0));
  }
  updateHoverStyle(t, e, n) {
    const s = n ? "set" : "remove";
    let o, l, a, r;
    for (
      e === "dataset" &&
        ((o = this.getDatasetMeta(t[0].datasetIndex)),
        o.controller["_" + s + "DatasetHoverStyle"]()),
        a = 0,
        r = t.length;
      a < r;
      ++a
    ) {
      l = t[a];
      const u = l && this.getDatasetMeta(l.datasetIndex).controller;
      u && u[s + "HoverStyle"](l.element, l.datasetIndex, l.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [],
      n = t.map(({ datasetIndex: o, index: l }) => {
        const a = this.getDatasetMeta(o);
        if (!a) throw new Error("No dataset found at index " + o);
        return { datasetIndex: o, element: a.data[l], index: l };
      });
    !Fo(n, e) &&
      ((this._active = n),
      (this._lastEvent = null),
      this._updateHoverStyles(n, e));
  }
  notifyPlugins(t, e, n) {
    return this._plugins.notify(this, t, e, n);
  }
  _updateHoverStyles(t, e, n) {
    const s = this.options.hover,
      o = (r, u) =>
        r.filter(
          (d) =>
            !u.some(
              (p) => d.datasetIndex === p.datasetIndex && d.index === p.index,
            ),
        ),
      l = o(e, t),
      a = n ? t : o(t, e);
    (l.length && this.updateHoverStyle(l, s.mode, !1),
      a.length && s.mode && this.updateHoverStyle(a, s.mode, !0));
  }
  _eventHandler(t, e) {
    const n = {
        event: t,
        replay: e,
        cancelable: !0,
        inChartArea: this.isPointInArea(t),
      },
      s = (l) =>
        (l.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", n, s) === !1) return;
    const o = this._handleEvent(t, e, n.inChartArea);
    return (
      (n.cancelable = !1),
      this.notifyPlugins("afterEvent", n, s),
      (o || n.changed) && this.render(),
      this
    );
  }
  _handleEvent(t, e, n) {
    const { _active: s = [], options: o } = this,
      l = e,
      a = this._getActiveElements(t, s, n, l),
      r = Gd(t),
      u = l0(t, this._lastEvent, n, r);
    n &&
      ((this._lastEvent = null),
      pe(o.onHover, [t, a, this], this),
      r && pe(o.onClick, [t, a, this], this));
    const d = !Fo(a, s);
    return (
      (d || e) && ((this._active = a), this._updateHoverStyles(a, s, e)),
      (this._lastEvent = u),
      d
    );
  }
  _getActiveElements(t, e, n, s) {
    if (t.type === "mouseout") return [];
    if (!n) return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
}
const $r = () => re(nl.instances, (i) => i._plugins.invalidate()),
  dn = !0;
Object.defineProperties(nl, {
  defaults: { enumerable: dn, value: ie },
  instances: { enumerable: dn, value: jo },
  overrides: { enumerable: dn, value: In },
  registry: { enumerable: dn, value: Ri },
  version: { enumerable: dn, value: i0 },
  getChart: { enumerable: dn, value: Yu },
  register: {
    enumerable: dn,
    value: (...i) => {
      (Ri.add(...i), $r());
    },
  },
  unregister: {
    enumerable: dn,
    value: (...i) => {
      (Ri.remove(...i), $r());
    },
  },
});
function Xu(i, t, e) {
  const {
    startAngle: n,
    pixelMargin: s,
    x: o,
    y: l,
    outerRadius: a,
    innerRadius: r,
  } = t;
  let u = s / a;
  (i.beginPath(),
    i.arc(o, l, a, n - u, e + u),
    r > s
      ? ((u = s / r), i.arc(o, l, r, e + u, n - u, !0))
      : i.arc(o, l, s, e + ke, n - ke),
    i.closePath(),
    i.clip());
}
function a0(i) {
  return la(i, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function r0(i, t, e, n) {
  const s = a0(i.options.borderRadius),
    o = (e - t) / 2,
    l = Math.min(o, (n * t) / 2),
    a = (r) => {
      const u = ((e - Math.min(o, r)) * n) / 2;
      return $e(r, 0, Math.min(o, u));
    };
  return {
    outerStart: a(s.outerStart),
    outerEnd: a(s.outerEnd),
    innerStart: $e(s.innerStart, 0, l),
    innerEnd: $e(s.innerEnd, 0, l),
  };
}
function Zn(i, t, e, n) {
  return { x: e + i * Math.cos(t), y: n + i * Math.sin(t) };
}
function Hl(i, t, e, n, s, o) {
  const { x: l, y: a, startAngle: r, pixelMargin: u, innerRadius: d } = t,
    p = Math.max(t.outerRadius + n + e - u, 0),
    m = d > 0 ? d + n + e + u : 0;
  let _ = 0;
  const g = s - r;
  if (n) {
    const j = d > 0 ? d - n : 0,
      U = p > 0 ? p - n : 0,
      $ = (j + U) / 2,
      nt = $ !== 0 ? (g * $) / ($ + n) : g;
    _ = (g - nt) / 2;
  }
  const b = Math.max(0.001, g * p - e / ve) / p,
    w = (g - b) / 2,
    y = r + w + _,
    S = s - w - _,
    {
      outerStart: k,
      outerEnd: C,
      innerStart: P,
      innerEnd: T,
    } = r0(t, m, p, S - y),
    R = p - k,
    F = p - C,
    D = y + k / R,
    I = S - C / F,
    W = m + P,
    N = m + T,
    O = y + P / W,
    V = S - T / N;
  if ((i.beginPath(), o)) {
    if ((i.arc(l, a, p, D, I), C > 0)) {
      const $ = Zn(F, I, l, a);
      i.arc($.x, $.y, C, I, S + ke);
    }
    const j = Zn(N, S, l, a);
    if ((i.lineTo(j.x, j.y), T > 0)) {
      const $ = Zn(N, V, l, a);
      i.arc($.x, $.y, T, S + ke, V + Math.PI);
    }
    if ((i.arc(l, a, m, S - T / m, y + P / m, !0), P > 0)) {
      const $ = Zn(W, O, l, a);
      i.arc($.x, $.y, P, O + Math.PI, y - ke);
    }
    const U = Zn(R, y, l, a);
    if ((i.lineTo(U.x, U.y), k > 0)) {
      const $ = Zn(R, D, l, a);
      i.arc($.x, $.y, k, y - ke, D);
    }
  } else {
    i.moveTo(l, a);
    const j = Math.cos(D) * p + l,
      U = Math.sin(D) * p + a;
    i.lineTo(j, U);
    const $ = Math.cos(I) * p + l,
      nt = Math.sin(I) * p + a;
    i.lineTo($, nt);
  }
  i.closePath();
}
function c0(i, t, e, n, s) {
  const { fullCircles: o, startAngle: l, circumference: a } = t;
  let r = t.endAngle;
  if (o) {
    Hl(i, t, e, n, l + fe, s);
    for (let u = 0; u < o; ++u) i.fill();
    isNaN(a) || ((r = l + (a % fe)), a % fe === 0 && (r += fe));
  }
  return (Hl(i, t, e, n, r, s), i.fill(), r);
}
function u0(i, t, e) {
  const { x: n, y: s, startAngle: o, pixelMargin: l, fullCircles: a } = t,
    r = Math.max(t.outerRadius - l, 0),
    u = t.innerRadius + l;
  let d;
  for (
    e && Xu(i, t, o + fe), i.beginPath(), i.arc(n, s, u, o + fe, o, !0), d = 0;
    d < a;
    ++d
  )
    i.stroke();
  for (i.beginPath(), i.arc(n, s, r, o, o + fe), d = 0; d < a; ++d) i.stroke();
}
function d0(i, t, e, n, s, o) {
  const { options: l } = t,
    { borderWidth: a, borderJoinStyle: r } = l,
    u = l.borderAlign === "inner";
  a &&
    (u
      ? ((i.lineWidth = a * 2), (i.lineJoin = r || "round"))
      : ((i.lineWidth = a), (i.lineJoin = r || "bevel")),
    t.fullCircles && u0(i, t, u),
    u && Xu(i, t, s),
    Hl(i, t, e, n, s, o),
    i.stroke());
}
class sl extends fi {
  constructor(t) {
    (super(),
      (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      t && Object.assign(this, t));
  }
  inRange(t, e, n) {
    const s = this.getProps(["x", "y"], n),
      { angle: o, distance: l } = au(s, { x: t, y: e }),
      {
        startAngle: a,
        endAngle: r,
        innerRadius: u,
        outerRadius: d,
        circumference: p,
      } = this.getProps(
        [
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        n,
      ),
      m = this.options.spacing / 2,
      g = Kt(p, r - a) >= fe || Fs(o, a, r),
      b = tn(l, u + m, d + m);
    return g && b;
  }
  getCenterPoint(t) {
    const {
        x: e,
        y: n,
        startAngle: s,
        endAngle: o,
        innerRadius: l,
        outerRadius: a,
      } = this.getProps(
        [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        t,
      ),
      { offset: r, spacing: u } = this.options,
      d = (s + o) / 2,
      p = (l + a + u + r) / 2;
    return { x: e + Math.cos(d) * p, y: n + Math.sin(d) * p };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: n } = this,
      s = (e.offset || 0) / 2,
      o = (e.spacing || 0) / 2,
      l = e.circular;
    if (
      ((this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0),
      (this.fullCircles = n > fe ? Math.floor(n / fe) : 0),
      n === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    t.save();
    let a = 0;
    if (s) {
      a = s / 2;
      const u = (this.startAngle + this.endAngle) / 2;
      (t.translate(Math.cos(u) * a, Math.sin(u) * a),
        this.circumference >= ve && (a = s));
    }
    ((t.fillStyle = e.backgroundColor), (t.strokeStyle = e.borderColor));
    const r = c0(t, this, a, o, l);
    (d0(t, this, a, o, r, l), t.restore());
  }
}
sl.id = "arc";
sl.defaults = {
  borderAlign: "center",
  borderColor: "#fff",
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0,
};
sl.defaultRoutes = { backgroundColor: "backgroundColor" };
function Ku(i, t, e = t) {
  ((i.lineCap = Kt(e.borderCapStyle, t.borderCapStyle)),
    i.setLineDash(Kt(e.borderDash, t.borderDash)),
    (i.lineDashOffset = Kt(e.borderDashOffset, t.borderDashOffset)),
    (i.lineJoin = Kt(e.borderJoinStyle, t.borderJoinStyle)),
    (i.lineWidth = Kt(e.borderWidth, t.borderWidth)),
    (i.strokeStyle = Kt(e.borderColor, t.borderColor)));
}
function f0(i, t, e) {
  i.lineTo(e.x, e.y);
}
function h0(i) {
  return i.stepped
    ? Ff
    : i.tension || i.cubicInterpolationMode === "monotone"
      ? Ef
      : f0;
}
function qu(i, t, e = {}) {
  const n = i.length,
    { start: s = 0, end: o = n - 1 } = e,
    { start: l, end: a } = t,
    r = Math.max(s, l),
    u = Math.min(o, a),
    d = (s < l && o < l) || (s > a && o > a);
  return {
    count: n,
    start: r,
    loop: t.loop,
    ilen: u < r && !d ? n + u - r : u - r,
  };
}
function p0(i, t, e, n) {
  const { points: s, options: o } = t,
    { count: l, start: a, loop: r, ilen: u } = qu(s, e, n),
    d = h0(o);
  let { move: p = !0, reverse: m } = n || {},
    _,
    g,
    b;
  for (_ = 0; _ <= u; ++_)
    ((g = s[(a + (m ? u - _ : _)) % l]),
      !g.skip &&
        (p ? (i.moveTo(g.x, g.y), (p = !1)) : d(i, b, g, m, o.stepped),
        (b = g)));
  return (r && ((g = s[(a + (m ? u : 0)) % l]), d(i, b, g, m, o.stepped)), !!r);
}
function m0(i, t, e, n) {
  const s = t.points,
    { count: o, start: l, ilen: a } = qu(s, e, n),
    { move: r = !0, reverse: u } = n || {};
  let d = 0,
    p = 0,
    m,
    _,
    g,
    b,
    w,
    y;
  const S = (C) => (l + (u ? a - C : C)) % o,
    k = () => {
      b !== w && (i.lineTo(d, w), i.lineTo(d, b), i.lineTo(d, y));
    };
  for (r && ((_ = s[S(0)]), i.moveTo(_.x, _.y)), m = 0; m <= a; ++m) {
    if (((_ = s[S(m)]), _.skip)) continue;
    const C = _.x,
      P = _.y,
      T = C | 0;
    (T === g
      ? (P < b ? (b = P) : P > w && (w = P), (d = (p * d + C) / ++p))
      : (k(), i.lineTo(C, P), (g = T), (p = 0), (b = w = P)),
      (y = P));
  }
  k();
}
function Vl(i) {
  const t = i.options,
    e = t.borderDash && t.borderDash.length;
  return !i._decimated &&
    !i._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== "monotone" &&
    !t.stepped &&
    !e
    ? m0
    : p0;
}
function _0(i) {
  return i.stepped
    ? fh
    : i.tension || i.cubicInterpolationMode === "monotone"
      ? hh
      : Rn;
}
function g0(i, t, e, n) {
  let s = t._path;
  (s || ((s = t._path = new Path2D()), t.path(s, e, n) && s.closePath()),
    Ku(i, t.options),
    i.stroke(s));
}
function b0(i, t, e, n) {
  const { segments: s, options: o } = t,
    l = Vl(t);
  for (const a of s)
    (Ku(i, o, a.style),
      i.beginPath(),
      l(i, t, a, { start: e, end: e + n - 1 }) && i.closePath(),
      i.stroke());
}
const v0 = typeof Path2D == "function";
function y0(i, t, e, n) {
  v0 && !t.options.segment ? g0(i, t, e, n) : b0(i, t, e, n);
}
class vn extends fi {
  constructor(t) {
    (super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t));
  }
  updateControlPoints(t, e) {
    const n = this.options;
    if (
      (n.tension || n.cubicInterpolationMode === "monotone") &&
      !n.stepped &&
      !this._pointsUpdated
    ) {
      const s = n.spanGaps ? this._loop : this._fullLoop;
      (sh(this._points, n, t, s, e), (this._pointsUpdated = !0));
    }
  }
  set points(t) {
    ((this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1));
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = yh(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments,
      e = this.points,
      n = t.length;
    return n && e[t[n - 1].end];
  }
  interpolate(t, e) {
    const n = this.options,
      s = t[e],
      o = this.points,
      l = Ru(this, { property: e, start: s, end: s });
    if (!l.length) return;
    const a = [],
      r = _0(n);
    let u, d;
    for (u = 0, d = l.length; u < d; ++u) {
      const { start: p, end: m } = l[u],
        _ = o[p],
        g = o[m];
      if (_ === g) {
        a.push(_);
        continue;
      }
      const b = Math.abs((s - _[e]) / (g[e] - _[e])),
        w = r(_, g, b, n.stepped);
      ((w[e] = t[e]), a.push(w));
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, n) {
    return Vl(this)(t, this, e, n);
  }
  path(t, e, n) {
    const s = this.segments,
      o = Vl(this);
    let l = this._loop;
    ((e = e || 0), (n = n || this.points.length - e));
    for (const a of s) l &= o(t, this, a, { start: e, end: e + n - 1 });
    return !!l;
  }
  draw(t, e, n, s) {
    const o = this.options || {};
    ((this.points || []).length &&
      o.borderWidth &&
      (t.save(), y0(t, this, n, s), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0)));
  }
}
vn.id = "line";
vn.defaults = {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0,
};
vn.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor",
};
vn.descriptors = {
  _scriptable: !0,
  _indexable: (i) => i !== "borderDash" && i !== "fill",
};
function zr(i, t, e, n) {
  const s = i.options,
    { [e]: o } = i.getProps([e], n);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class ol extends fi {
  constructor(t) {
    (super(),
      (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      t && Object.assign(this, t));
  }
  inRange(t, e, n) {
    const s = this.options,
      { x: o, y: l } = this.getProps(["x", "y"], n);
    return (
      Math.pow(t - o, 2) + Math.pow(e - l, 2) <
      Math.pow(s.hitRadius + s.radius, 2)
    );
  }
  inXRange(t, e) {
    return zr(this, t, "x", e);
  }
  inYRange(t, e) {
    return zr(this, t, "y", e);
  }
  getCenterPoint(t) {
    const { x: e, y: n } = this.getProps(["x", "y"], t);
    return { x: e, y: n };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, (e && t.hoverRadius) || 0);
    const n = (e && t.borderWidth) || 0;
    return (e + n) * 2;
  }
  draw(t, e) {
    const n = this.options;
    this.skip ||
      n.radius < 0.1 ||
      !Es(this, e, this.size(n) / 2) ||
      ((t.strokeStyle = n.borderColor),
      (t.lineWidth = n.borderWidth),
      (t.fillStyle = n.backgroundColor),
      zl(t, n, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
ol.id = "point";
ol.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0,
};
ol.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor",
};
function Gu(i, t) {
  const {
    x: e,
    y: n,
    base: s,
    width: o,
    height: l,
  } = i.getProps(["x", "y", "base", "width", "height"], t);
  let a, r, u, d, p;
  return (
    i.horizontal
      ? ((p = l / 2),
        (a = Math.min(e, s)),
        (r = Math.max(e, s)),
        (u = n - p),
        (d = n + p))
      : ((p = o / 2),
        (a = e - p),
        (r = e + p),
        (u = Math.min(n, s)),
        (d = Math.max(n, s))),
    { left: a, top: u, right: r, bottom: d }
  );
}
function pn(i, t, e, n) {
  return i ? 0 : $e(t, e, n);
}
function w0(i, t, e) {
  const n = i.options.borderWidth,
    s = i.borderSkipped,
    o = yu(n);
  return {
    t: pn(s.top, o.top, 0, e),
    r: pn(s.right, o.right, 0, t),
    b: pn(s.bottom, o.bottom, 0, e),
    l: pn(s.left, o.left, 0, t),
  };
}
function x0(i, t, e) {
  const { enableBorderRadius: n } = i.getProps(["enableBorderRadius"]),
    s = i.options.borderRadius,
    o = On(s),
    l = Math.min(t, e),
    a = i.borderSkipped,
    r = n || ee(s);
  return {
    topLeft: pn(!r || a.top || a.left, o.topLeft, 0, l),
    topRight: pn(!r || a.top || a.right, o.topRight, 0, l),
    bottomLeft: pn(!r || a.bottom || a.left, o.bottomLeft, 0, l),
    bottomRight: pn(!r || a.bottom || a.right, o.bottomRight, 0, l),
  };
}
function k0(i) {
  const t = Gu(i),
    e = t.right - t.left,
    n = t.bottom - t.top,
    s = w0(i, e / 2, n / 2),
    o = x0(i, e / 2, n / 2);
  return {
    outer: { x: t.left, y: t.top, w: e, h: n, radius: o },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: e - s.l - s.r,
      h: n - s.t - s.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r)),
      },
    },
  };
}
function Pl(i, t, e, n) {
  const s = t === null,
    o = e === null,
    a = i && !(s && o) && Gu(i, n);
  return a && (s || tn(t, a.left, a.right)) && (o || tn(e, a.top, a.bottom));
}
function M0(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function S0(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function Cl(i, t, e = {}) {
  const n = i.x !== e.x ? -t : 0,
    s = i.y !== e.y ? -t : 0,
    o = (i.x + i.w !== e.x + e.w ? t : 0) - n,
    l = (i.y + i.h !== e.y + e.h ? t : 0) - s;
  return { x: i.x + n, y: i.y + s, w: i.w + o, h: i.h + l, radius: i.radius };
}
class ll extends fi {
  constructor(t) {
    (super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t));
  }
  draw(t) {
    const {
        inflateAmount: e,
        options: { borderColor: n, backgroundColor: s },
      } = this,
      { inner: o, outer: l } = k0(this),
      a = M0(l.radius) ? Is : S0;
    (t.save(),
      (l.w !== o.w || l.h !== o.h) &&
        (t.beginPath(),
        a(t, Cl(l, e, o)),
        t.clip(),
        a(t, Cl(o, -e, l)),
        (t.fillStyle = n),
        t.fill("evenodd")),
      t.beginPath(),
      a(t, Cl(o, e)),
      (t.fillStyle = s),
      t.fill(),
      t.restore());
  }
  inRange(t, e, n) {
    return Pl(this, t, e, n);
  }
  inXRange(t, e) {
    return Pl(this, t, null, e);
  }
  inYRange(t, e) {
    return Pl(this, null, t, e);
  }
  getCenterPoint(t) {
    const {
      x: e,
      y: n,
      base: s,
      horizontal: o,
    } = this.getProps(["x", "y", "base", "horizontal"], t);
    return { x: o ? (e + s) / 2 : e, y: o ? n : (n + s) / 2 };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
ll.id = "bar";
ll.defaults = {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0,
};
ll.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor",
};
var A0 = Object.freeze({
  __proto__: null,
  ArcElement: sl,
  LineElement: vn,
  PointElement: ol,
  BarElement: ll,
});
function L0(i, t, e, n, s) {
  const o = s.samples || n;
  if (o >= e) return i.slice(t, t + e);
  const l = [],
    a = (e - 2) / (o - 2);
  let r = 0;
  const u = t + e - 1;
  let d = t,
    p,
    m,
    _,
    g,
    b;
  for (l[r++] = i[d], p = 0; p < o - 2; p++) {
    let w = 0,
      y = 0,
      S;
    const k = Math.floor((p + 1) * a) + 1 + t,
      C = Math.min(Math.floor((p + 2) * a) + 1, e) + t,
      P = C - k;
    for (S = k; S < C; S++) ((w += i[S].x), (y += i[S].y));
    ((w /= P), (y /= P));
    const T = Math.floor(p * a) + 1 + t,
      R = Math.min(Math.floor((p + 1) * a) + 1, e) + t,
      { x: F, y: D } = i[d];
    for (_ = g = -1, S = T; S < R; S++)
      ((g = 0.5 * Math.abs((F - w) * (i[S].y - D) - (F - i[S].x) * (y - D))),
        g > _ && ((_ = g), (m = i[S]), (b = S)));
    ((l[r++] = m), (d = b));
  }
  return ((l[r++] = i[u]), l);
}
function P0(i, t, e, n) {
  let s = 0,
    o = 0,
    l,
    a,
    r,
    u,
    d,
    p,
    m,
    _,
    g,
    b;
  const w = [],
    y = t + e - 1,
    S = i[t].x,
    C = i[y].x - S;
  for (l = t; l < t + e; ++l) {
    ((a = i[l]), (r = ((a.x - S) / C) * n), (u = a.y));
    const P = r | 0;
    if (P === d)
      (u < g ? ((g = u), (p = l)) : u > b && ((b = u), (m = l)),
        (s = (o * s + a.x) / ++o));
    else {
      const T = l - 1;
      if (!ne(p) && !ne(m)) {
        const R = Math.min(p, m),
          F = Math.max(p, m);
        (R !== _ && R !== T && w.push({ ...i[R], x: s }),
          F !== _ && F !== T && w.push({ ...i[F], x: s }));
      }
      (l > 0 && T !== _ && w.push(i[T]),
        w.push(a),
        (d = P),
        (o = 0),
        (g = b = u),
        (p = m = _ = l));
    }
  }
  return w;
}
function Qu(i) {
  if (i._decimated) {
    const t = i._data;
    (delete i._decimated,
      delete i._data,
      Object.defineProperty(i, "data", { value: t }));
  }
}
function Nr(i) {
  i.data.datasets.forEach((t) => {
    Qu(t);
  });
}
function C0(i, t) {
  const e = t.length;
  let n = 0,
    s;
  const { iScale: o } = i,
    { min: l, max: a, minDefined: r, maxDefined: u } = o.getUserBounds();
  return (
    r && (n = $e(en(t, o.axis, l).lo, 0, e - 1)),
    u ? (s = $e(en(t, o.axis, a).hi + 1, n, e) - n) : (s = e - n),
    { start: n, count: s }
  );
}
var T0 = {
  id: "decimation",
  defaults: { algorithm: "min-max", enabled: !1 },
  beforeElementsUpdate: (i, t, e) => {
    if (!e.enabled) {
      Nr(i);
      return;
    }
    const n = i.width;
    i.data.datasets.forEach((s, o) => {
      const { _data: l, indexAxis: a } = s,
        r = i.getDatasetMeta(o),
        u = l || s.data;
      if (
        ks([a, i.options.indexAxis]) === "y" ||
        !r.controller.supportsDecimation
      )
        return;
      const d = i.scales[r.xAxisID];
      if ((d.type !== "linear" && d.type !== "time") || i.options.parsing)
        return;
      let { start: p, count: m } = C0(r, u);
      const _ = e.threshold || 4 * n;
      if (m <= _) {
        Qu(s);
        return;
      }
      ne(l) &&
        ((s._data = u),
        delete s.data,
        Object.defineProperty(s, "data", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this._decimated;
          },
          set: function (b) {
            this._data = b;
          },
        }));
      let g;
      switch (e.algorithm) {
        case "lttb":
          g = L0(u, p, m, n, e);
          break;
        case "min-max":
          g = P0(u, p, m, n);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      s._decimated = g;
    });
  },
  destroy(i) {
    Nr(i);
  },
};
function D0(i, t, e) {
  const n = i.segments,
    s = i.points,
    o = t.points,
    l = [];
  for (const a of n) {
    let { start: r, end: u } = a;
    u = fa(r, u, s);
    const d = Ul(e, s[r], s[u], a.loop);
    if (!t.segments) {
      l.push({ source: a, target: d, start: s[r], end: s[u] });
      continue;
    }
    const p = Ru(t, d);
    for (const m of p) {
      const _ = Ul(e, o[m.start], o[m.end], m.loop),
        g = Du(a, s, _);
      for (const b of g)
        l.push({
          source: b,
          target: m,
          start: { [e]: jr(d, _, "start", Math.max) },
          end: { [e]: jr(d, _, "end", Math.min) },
        });
    }
  }
  return l;
}
function Ul(i, t, e, n) {
  if (n) return;
  let s = t[i],
    o = e[i];
  return (
    i === "angle" && ((s = Ke(s)), (o = Ke(o))),
    { property: i, start: s, end: o }
  );
}
function R0(i, t) {
  const { x: e = null, y: n = null } = i || {},
    s = t.points,
    o = [];
  return (
    t.segments.forEach(({ start: l, end: a }) => {
      a = fa(l, a, s);
      const r = s[l],
        u = s[a];
      n !== null
        ? (o.push({ x: r.x, y: n }), o.push({ x: u.x, y: n }))
        : e !== null && (o.push({ x: e, y: r.y }), o.push({ x: e, y: u.y }));
    }),
    o
  );
}
function fa(i, t, e) {
  for (; t > i; t--) {
    const n = e[t];
    if (!isNaN(n.x) && !isNaN(n.y)) break;
  }
  return t;
}
function jr(i, t, e, n) {
  return i && t ? n(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function Zu(i, t) {
  let e = [],
    n = !1;
  return (
    me(i) ? ((n = !0), (e = i)) : (e = R0(i, t)),
    e.length
      ? new vn({ points: e, options: { tension: 0 }, _loop: n, _fullLoop: n })
      : null
  );
}
function Wr(i) {
  return i && i.fill !== !1;
}
function O0(i, t, e) {
  let s = i[t].fill;
  const o = [t];
  let l;
  if (!e) return s;
  for (; s !== !1 && o.indexOf(s) === -1; ) {
    if (!Pe(s)) return s;
    if (((l = i[s]), !l)) return !1;
    if (l.visible) return s;
    (o.push(s), (s = l.fill));
  }
  return !1;
}
function F0(i, t, e) {
  const n = $0(i);
  if (ee(n)) return isNaN(n.value) ? !1 : n;
  let s = parseFloat(n);
  return Pe(s) && Math.floor(s) === s
    ? E0(n[0], t, s, e)
    : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n;
}
function E0(i, t, e, n) {
  return (
    (i === "-" || i === "+") && (e = t + e),
    e === t || e < 0 || e >= n ? !1 : e
  );
}
function I0(i, t) {
  let e = null;
  return (
    i === "start"
      ? (e = t.bottom)
      : i === "end"
        ? (e = t.top)
        : ee(i)
          ? (e = t.getPixelForValue(i.value))
          : t.getBasePixel && (e = t.getBasePixel()),
    e
  );
}
function B0(i, t, e) {
  let n;
  return (
    i === "start"
      ? (n = e)
      : i === "end"
        ? (n = t.options.reverse ? t.min : t.max)
        : ee(i)
          ? (n = i.value)
          : (n = t.getBaseValue()),
    n
  );
}
function $0(i) {
  const t = i.options,
    e = t.fill;
  let n = Kt(e && e.target, e);
  return (
    n === void 0 && (n = !!t.backgroundColor),
    n === !1 || n === null ? !1 : n === !0 ? "origin" : n
  );
}
function z0(i) {
  const { scale: t, index: e, line: n } = i,
    s = [],
    o = n.segments,
    l = n.points,
    a = N0(t, e);
  a.push(Zu({ x: null, y: t.bottom }, n));
  for (let r = 0; r < o.length; r++) {
    const u = o[r];
    for (let d = u.start; d <= u.end; d++) j0(s, l[d], a);
  }
  return new vn({ points: s, options: {} });
}
function N0(i, t) {
  const e = [],
    n = i.getMatchingVisibleMetas("line");
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (o.index === t) break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function j0(i, t, e) {
  const n = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s],
      { first: l, last: a, point: r } = W0(o, t, "x");
    if (!(!r || (l && a))) {
      if (l) n.unshift(r);
      else if ((i.push(r), !a)) break;
    }
  }
  i.push(...n);
}
function W0(i, t, e) {
  const n = i.interpolate(t, e);
  if (!n) return {};
  const s = n[e],
    o = i.segments,
    l = i.points;
  let a = !1,
    r = !1;
  for (let u = 0; u < o.length; u++) {
    const d = o[u],
      p = l[d.start][e],
      m = l[d.end][e];
    if (tn(s, p, m)) {
      ((a = s === p), (r = s === m));
      break;
    }
  }
  return { first: a, last: r, point: n };
}
class Ju {
  constructor(t) {
    ((this.x = t.x), (this.y = t.y), (this.radius = t.radius));
  }
  pathSegment(t, e, n) {
    const { x: s, y: o, radius: l } = this;
    return (
      (e = e || { start: 0, end: fe }),
      t.arc(s, o, l, e.end, e.start, !0),
      !n.bounds
    );
  }
  interpolate(t) {
    const { x: e, y: n, radius: s } = this,
      o = t.angle;
    return { x: e + Math.cos(o) * s, y: n + Math.sin(o) * s, angle: o };
  }
}
function H0(i) {
  const { chart: t, fill: e, line: n } = i;
  if (Pe(e)) return V0(t, e);
  if (e === "stack") return z0(i);
  if (e === "shape") return !0;
  const s = U0(i);
  return s instanceof Ju ? s : Zu(s, n);
}
function V0(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function U0(i) {
  return (i.scale || {}).getPointPositionForValue ? X0(i) : Y0(i);
}
function Y0(i) {
  const { scale: t = {}, fill: e } = i,
    n = I0(e, t);
  if (Pe(n)) {
    const s = t.isHorizontal();
    return { x: s ? n : null, y: s ? null : n };
  }
  return null;
}
function X0(i) {
  const { scale: t, fill: e } = i,
    n = t.options,
    s = t.getLabels().length,
    o = n.reverse ? t.max : t.min,
    l = B0(e, t, o),
    a = [];
  if (n.grid.circular) {
    const r = t.getPointPositionForValue(0, o);
    return new Ju({
      x: r.x,
      y: r.y,
      radius: t.getDistanceFromCenterForValue(l),
    });
  }
  for (let r = 0; r < s; ++r) a.push(t.getPointPositionForValue(r, l));
  return a;
}
function Tl(i, t, e) {
  const n = H0(t),
    { line: s, scale: o, axis: l } = t,
    a = s.options,
    r = a.fill,
    u = a.backgroundColor,
    { above: d = u, below: p = u } = r || {};
  n &&
    s.points.length &&
    (Xo(i, e),
    K0(i, {
      line: s,
      target: n,
      above: d,
      below: p,
      area: e,
      scale: o,
      axis: l,
    }),
    Ko(i));
}
function K0(i, t) {
  const { line: e, target: n, above: s, below: o, area: l, scale: a } = t,
    r = e._loop ? "angle" : t.axis;
  (i.save(),
    r === "x" &&
      o !== s &&
      (Hr(i, n, l.top),
      Vr(i, { line: e, target: n, color: s, scale: a, property: r }),
      i.restore(),
      i.save(),
      Hr(i, n, l.bottom)),
    Vr(i, { line: e, target: n, color: o, scale: a, property: r }),
    i.restore());
}
function Hr(i, t, e) {
  const { segments: n, points: s } = t;
  let o = !0,
    l = !1;
  i.beginPath();
  for (const a of n) {
    const { start: r, end: u } = a,
      d = s[r],
      p = s[fa(r, u, s)];
    (o
      ? (i.moveTo(d.x, d.y), (o = !1))
      : (i.lineTo(d.x, e), i.lineTo(d.x, d.y)),
      (l = !!t.pathSegment(i, a, { move: l })),
      l ? i.closePath() : i.lineTo(p.x, e));
  }
  (i.lineTo(t.first().x, e), i.closePath(), i.clip());
}
function Vr(i, t) {
  const { line: e, target: n, property: s, color: o, scale: l } = t,
    a = D0(e, n, s);
  for (const { source: r, target: u, start: d, end: p } of a) {
    const { style: { backgroundColor: m = o } = {} } = r,
      _ = n !== !0;
    (i.save(), (i.fillStyle = m), q0(i, l, _ && Ul(s, d, p)), i.beginPath());
    const g = !!e.pathSegment(i, r);
    let b;
    if (_) {
      g ? i.closePath() : Ur(i, n, p, s);
      const w = !!n.pathSegment(i, u, { move: g, reverse: !0 });
      ((b = g && w), b || Ur(i, n, d, s));
    }
    (i.closePath(), i.fill(b ? "evenodd" : "nonzero"), i.restore());
  }
}
function q0(i, t, e) {
  const { top: n, bottom: s } = t.chart.chartArea,
    { property: o, start: l, end: a } = e || {};
  o === "x" && (i.beginPath(), i.rect(l, n, a - l, s - n), i.clip());
}
function Ur(i, t, e, n) {
  const s = t.interpolate(e, n);
  s && i.lineTo(s.x, s.y);
}
var G0 = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const n = (i.data.datasets || []).length,
      s = [];
    let o, l, a, r;
    for (l = 0; l < n; ++l)
      ((o = i.getDatasetMeta(l)),
        (a = o.dataset),
        (r = null),
        a &&
          a.options &&
          a instanceof vn &&
          (r = {
            visible: i.isDatasetVisible(l),
            index: l,
            fill: F0(a, l, n),
            chart: i,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: a,
          }),
        (o.$filler = r),
        s.push(r));
    for (l = 0; l < n; ++l)
      ((r = s[l]), !(!r || r.fill === !1) && (r.fill = O0(s, l, e.propagate)));
  },
  beforeDraw(i, t, e) {
    const n = e.drawTime === "beforeDraw",
      s = i.getSortedVisibleDatasetMetas(),
      o = i.chartArea;
    for (let l = s.length - 1; l >= 0; --l) {
      const a = s[l].$filler;
      a &&
        (a.line.updateControlPoints(o, a.axis), n && a.fill && Tl(i.ctx, a, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw") return;
    const n = i.getSortedVisibleDatasetMetas();
    for (let s = n.length - 1; s >= 0; --s) {
      const o = n[s].$filler;
      Wr(o) && Tl(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const n = t.meta.$filler;
    !Wr(n) || e.drawTime !== "beforeDatasetDraw" || Tl(i.ctx, n, i.chartArea);
  },
  defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
};
const Yr = (i, t) => {
    let { boxHeight: e = t, boxWidth: n = t } = i;
    return (
      i.usePointStyle &&
        ((e = Math.min(e, t)), (n = i.pointStyleWidth || Math.min(n, t))),
      { boxWidth: n, boxHeight: e, itemHeight: Math.max(t, e) }
    );
  },
  Q0 = (i, t) =>
    i !== null &&
    t !== null &&
    i.datasetIndex === t.datasetIndex &&
    i.index === t.index;
class Xr extends fi {
  constructor(t) {
    (super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0));
  }
  update(t, e, n) {
    ((this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = n),
      this.setDimensions(),
      this.buildLabels(),
      this.fit());
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = pe(t.generateLabels, [this.chart], this) || [];
    (t.filter && (e = e.filter((n) => t.filter(n, this.chart.data))),
      t.sort && (e = e.sort((n, s) => t.sort(n, s, this.chart.data))),
      this.options.reverse && e.reverse(),
      (this.legendItems = e));
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const n = t.labels,
      s = Be(n.font),
      o = s.size,
      l = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: r } = Yr(n, o);
    let u, d;
    ((e.font = s.string),
      this.isHorizontal()
        ? ((u = this.maxWidth), (d = this._fitRows(l, o, a, r) + 10))
        : ((d = this.maxHeight), (u = this._fitCols(l, o, a, r) + 10)),
      (this.width = Math.min(u, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(d, t.maxHeight || this.maxHeight)));
  }
  _fitRows(t, e, n, s) {
    const {
        ctx: o,
        maxWidth: l,
        options: {
          labels: { padding: a },
        },
      } = this,
      r = (this.legendHitBoxes = []),
      u = (this.lineWidths = [0]),
      d = s + a;
    let p = t;
    ((o.textAlign = "left"), (o.textBaseline = "middle"));
    let m = -1,
      _ = -d;
    return (
      this.legendItems.forEach((g, b) => {
        const w = n + e / 2 + o.measureText(g.text).width;
        ((b === 0 || u[u.length - 1] + w + 2 * a > l) &&
          ((p += d), (u[u.length - (b > 0 ? 0 : 1)] = 0), (_ += d), m++),
          (r[b] = { left: 0, top: _, row: m, width: w, height: s }),
          (u[u.length - 1] += w + a));
      }),
      p
    );
  }
  _fitCols(t, e, n, s) {
    const {
        ctx: o,
        maxHeight: l,
        options: {
          labels: { padding: a },
        },
      } = this,
      r = (this.legendHitBoxes = []),
      u = (this.columnSizes = []),
      d = l - t;
    let p = a,
      m = 0,
      _ = 0,
      g = 0,
      b = 0;
    return (
      this.legendItems.forEach((w, y) => {
        const S = n + e / 2 + o.measureText(w.text).width;
        (y > 0 &&
          _ + s + 2 * a > d &&
          ((p += m + a),
          u.push({ width: m, height: _ }),
          (g += m + a),
          b++,
          (m = _ = 0)),
          (r[y] = { left: g, top: _, col: b, width: S, height: s }),
          (m = Math.max(m, S)),
          (_ += s + a));
      }),
      (p += m),
      u.push({ width: m, height: _ }),
      p
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: e,
        options: {
          align: n,
          labels: { padding: s },
          rtl: o,
        },
      } = this,
      l = is(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        r = je(n, this.left + s, this.right - this.lineWidths[a]);
      for (const u of e)
        (a !== u.row &&
          ((a = u.row),
          (r = je(n, this.left + s, this.right - this.lineWidths[a]))),
          (u.top += this.top + t + s),
          (u.left = l.leftForLtr(l.x(r), u.width)),
          (r += u.width + s));
    } else {
      let a = 0,
        r = je(n, this.top + t + s, this.bottom - this.columnSizes[a].height);
      for (const u of e)
        (u.col !== a &&
          ((a = u.col),
          (r = je(
            n,
            this.top + t + s,
            this.bottom - this.columnSizes[a].height,
          ))),
          (u.top = r),
          (u.left += this.left + s),
          (u.left = l.leftForLtr(l.x(u.left), u.width)),
          (r += u.height + s));
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      (Xo(t, this), this._draw(), Ko(t));
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: n, ctx: s } = this,
      { align: o, labels: l } = t,
      a = ie.color,
      r = is(t.rtl, this.left, this.width),
      u = Be(l.font),
      { color: d, padding: p } = l,
      m = u.size,
      _ = m / 2;
    let g;
    (this.drawTitle(),
      (s.textAlign = r.textAlign("left")),
      (s.textBaseline = "middle"),
      (s.lineWidth = 0.5),
      (s.font = u.string));
    const { boxWidth: b, boxHeight: w, itemHeight: y } = Yr(l, m),
      S = function (R, F, D) {
        if (isNaN(b) || b <= 0 || isNaN(w) || w < 0) return;
        s.save();
        const I = Kt(D.lineWidth, 1);
        if (
          ((s.fillStyle = Kt(D.fillStyle, a)),
          (s.lineCap = Kt(D.lineCap, "butt")),
          (s.lineDashOffset = Kt(D.lineDashOffset, 0)),
          (s.lineJoin = Kt(D.lineJoin, "miter")),
          (s.lineWidth = I),
          (s.strokeStyle = Kt(D.strokeStyle, a)),
          s.setLineDash(Kt(D.lineDash, [])),
          l.usePointStyle)
        ) {
          const W = {
              radius: (w * Math.SQRT2) / 2,
              pointStyle: D.pointStyle,
              rotation: D.rotation,
              borderWidth: I,
            },
            N = r.xPlus(R, b / 2),
            O = F + _;
          vu(s, W, N, O, l.pointStyleWidth && b);
        } else {
          const W = F + Math.max((m - w) / 2, 0),
            N = r.leftForLtr(R, b),
            O = On(D.borderRadius);
          (s.beginPath(),
            Object.values(O).some((V) => V !== 0)
              ? Is(s, { x: N, y: W, w: b, h: w, radius: O })
              : s.rect(N, W, b, w),
            s.fill(),
            I !== 0 && s.stroke());
        }
        s.restore();
      },
      k = function (R, F, D) {
        Bn(s, D.text, R, F + y / 2, u, {
          strikethrough: D.hidden,
          textAlign: r.textAlign(D.textAlign),
        });
      },
      C = this.isHorizontal(),
      P = this._computeTitleHeight();
    (C
      ? (g = {
          x: je(o, this.left + p, this.right - n[0]),
          y: this.top + p + P,
          line: 0,
        })
      : (g = {
          x: this.left + p,
          y: je(o, this.top + P + p, this.bottom - e[0].height),
          line: 0,
        }),
      Pu(this.ctx, t.textDirection));
    const T = y + p;
    (this.legendItems.forEach((R, F) => {
      ((s.strokeStyle = R.fontColor || d), (s.fillStyle = R.fontColor || d));
      const D = s.measureText(R.text).width,
        I = r.textAlign(R.textAlign || (R.textAlign = l.textAlign)),
        W = b + _ + D;
      let N = g.x,
        O = g.y;
      (r.setWidth(this.width),
        C
          ? F > 0 &&
            N + W + p > this.right &&
            ((O = g.y += T),
            g.line++,
            (N = g.x = je(o, this.left + p, this.right - n[g.line])))
          : F > 0 &&
            O + T > this.bottom &&
            ((N = g.x = N + e[g.line].width + p),
            g.line++,
            (O = g.y =
              je(o, this.top + P + p, this.bottom - e[g.line].height))));
      const V = r.x(N);
      (S(V, O, R),
        (N = rf(I, N + b + _, C ? N + W : this.right, t.rtl)),
        k(r.x(N), O, R),
        C ? (g.x += W + p) : (g.y += T));
    }),
      Cu(this.ctx, t.textDirection));
  }
  drawTitle() {
    const t = this.options,
      e = t.title,
      n = Be(e.font),
      s = He(e.padding);
    if (!e.display) return;
    const o = is(t.rtl, this.left, this.width),
      l = this.ctx,
      a = e.position,
      r = n.size / 2,
      u = s.top + r;
    let d,
      p = this.left,
      m = this.width;
    if (this.isHorizontal())
      ((m = Math.max(...this.lineWidths)),
        (d = this.top + u),
        (p = je(t.align, p, this.right - m)));
    else {
      const g = this.columnSizes.reduce((b, w) => Math.max(b, w.height), 0);
      d =
        u +
        je(
          t.align,
          this.top,
          this.bottom - g - t.labels.padding - this._computeTitleHeight(),
        );
    }
    const _ = je(a, p, p + m);
    ((l.textAlign = o.textAlign(ia(a))),
      (l.textBaseline = "middle"),
      (l.strokeStyle = e.color),
      (l.fillStyle = e.color),
      (l.font = n.string),
      Bn(l, e.text, _, d, n));
  }
  _computeTitleHeight() {
    const t = this.options.title,
      e = Be(t.font),
      n = He(t.padding);
    return t.display ? e.lineHeight + n.height : 0;
  }
  _getLegendItemAt(t, e) {
    let n, s, o;
    if (tn(t, this.left, this.right) && tn(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, n = 0; n < o.length; ++n)
        if (
          ((s = o[n]),
          tn(t, s.left, s.left + s.width) && tn(e, s.top, s.top + s.height))
        )
          return this.legendItems[n];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!Z0(t.type, e)) return;
    const n = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem,
        o = Q0(s, n);
      (s && !o && pe(e.onLeave, [t, s, this], this),
        (this._hoveredItem = n),
        n && !o && pe(e.onHover, [t, n, this], this));
    } else n && pe(e.onClick, [t, n, this], this);
  }
}
function Z0(i, t) {
  return !!(
    ((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (i === "click" || i === "mouseup"))
  );
}
var J0 = {
  id: "legend",
  _element: Xr,
  start(i, t, e) {
    const n = (i.legend = new Xr({ ctx: i.ctx, options: e, chart: i }));
    (We.configure(i, n, e), We.addBox(i, n));
  },
  stop(i) {
    (We.removeBox(i, i.legend), delete i.legend);
  },
  beforeUpdate(i, t, e) {
    const n = i.legend;
    (We.configure(i, n, e), (n.options = e));
  },
  afterUpdate(i) {
    const t = i.legend;
    (t.buildLabels(), t.adjustHitBoxes());
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const n = t.datasetIndex,
        s = e.chart;
      s.isDatasetVisible(n)
        ? (s.hide(n), (t.hidden = !0))
        : (s.show(n), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets,
          {
            labels: { usePointStyle: e, pointStyle: n, textAlign: s, color: o },
          } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const a = l.controller.getStyle(e ? 0 : void 0),
            r = He(a.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: a.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: a.borderCapStyle,
            lineDash: a.borderDash,
            lineDashOffset: a.borderDashOffset,
            lineJoin: a.borderJoinStyle,
            lineWidth: (r.width + r.height) / 4,
            strokeStyle: a.borderColor,
            pointStyle: n || a.pointStyle,
            rotation: a.rotation,
            textAlign: s || a.textAlign,
            borderRadius: 0,
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => !["generateLabels", "filter", "sort"].includes(i),
    },
  },
};
class ha extends fi {
  constructor(t) {
    (super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0));
  }
  update(t, e) {
    const n = this.options;
    if (((this.left = 0), (this.top = 0), !n.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    ((this.width = this.right = t), (this.height = this.bottom = e));
    const s = me(n.text) ? n.text.length : 1;
    this._padding = He(n.padding);
    const o = s * Be(n.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = o) : (this.width = o);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: n, bottom: s, right: o, options: l } = this,
      a = l.align;
    let r = 0,
      u,
      d,
      p;
    return (
      this.isHorizontal()
        ? ((d = je(a, n, o)), (p = e + t), (u = o - n))
        : (l.position === "left"
            ? ((d = n + t), (p = je(a, s, e)), (r = ve * -0.5))
            : ((d = o - t), (p = je(a, e, s)), (r = ve * 0.5)),
          (u = s - e)),
      { titleX: d, titleY: p, maxWidth: u, rotation: r }
    );
  }
  draw() {
    const t = this.ctx,
      e = this.options;
    if (!e.display) return;
    const n = Be(e.font),
      o = n.lineHeight / 2 + this._padding.top,
      { titleX: l, titleY: a, maxWidth: r, rotation: u } = this._drawArgs(o);
    Bn(t, e.text, 0, 0, n, {
      color: e.color,
      maxWidth: r,
      rotation: u,
      textAlign: ia(e.align),
      textBaseline: "middle",
      translation: [l, a],
    });
  }
}
function tm(i, t) {
  const e = new ha({ ctx: i.ctx, options: t, chart: i });
  (We.configure(i, e, t), We.addBox(i, e), (i.titleBlock = e));
}
var em = {
  id: "title",
  _element: ha,
  start(i, t, e) {
    tm(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    (We.removeBox(i, t), delete i.titleBlock);
  },
  beforeUpdate(i, t, e) {
    const n = i.titleBlock;
    (We.configure(i, n, e), (n.options = e));
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const xo = new WeakMap();
var im = {
  id: "subtitle",
  start(i, t, e) {
    const n = new ha({ ctx: i.ctx, options: e, chart: i });
    (We.configure(i, n, e), We.addBox(i, n), xo.set(i, n));
  },
  stop(i) {
    (We.removeBox(i, xo.get(i)), xo.delete(i));
  },
  beforeUpdate(i, t, e) {
    const n = xo.get(i);
    (We.configure(i, n, e), (n.options = e));
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "normal" },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Ds = {
  average(i) {
    if (!i.length) return !1;
    let t,
      e,
      n = 0,
      s = 0,
      o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const l = i[t].element;
      if (l && l.hasValue()) {
        const a = l.tooltipPosition();
        ((n += a.x), (s += a.y), ++o);
      }
    }
    return { x: n / o, y: s / o };
  },
  nearest(i, t) {
    if (!i.length) return !1;
    let e = t.x,
      n = t.y,
      s = Number.POSITIVE_INFINITY,
      o,
      l,
      a;
    for (o = 0, l = i.length; o < l; ++o) {
      const r = i[o].element;
      if (r && r.hasValue()) {
        const u = r.getCenterPoint(),
          d = Il(t, u);
        d < s && ((s = d), (a = r));
      }
    }
    if (a) {
      const r = a.tooltipPosition();
      ((e = r.x), (n = r.y));
    }
    return { x: e, y: n };
  },
};
function Di(i, t) {
  return (t && (me(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i);
}
function Zi(i) {
  return (typeof i == "string" || i instanceof String) &&
    i.indexOf(`
`) > -1
    ? i.split(`
`)
    : i;
}
function nm(i, t) {
  const { element: e, datasetIndex: n, index: s } = t,
    o = i.getDatasetMeta(n).controller,
    { label: l, value: a } = o.getLabelAndValue(s);
  return {
    chart: i,
    label: l,
    parsed: o.getParsed(s),
    raw: i.data.datasets[n].data[s],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: n,
    element: e,
  };
}
function Kr(i, t) {
  const e = i.chart.ctx,
    { body: n, footer: s, title: o } = i,
    { boxWidth: l, boxHeight: a } = t,
    r = Be(t.bodyFont),
    u = Be(t.titleFont),
    d = Be(t.footerFont),
    p = o.length,
    m = s.length,
    _ = n.length,
    g = He(t.padding);
  let b = g.height,
    w = 0,
    y = n.reduce(
      (C, P) => C + P.before.length + P.lines.length + P.after.length,
      0,
    );
  if (
    ((y += i.beforeBody.length + i.afterBody.length),
    p &&
      (b += p * u.lineHeight + (p - 1) * t.titleSpacing + t.titleMarginBottom),
    y)
  ) {
    const C = t.displayColors ? Math.max(a, r.lineHeight) : r.lineHeight;
    b += _ * C + (y - _) * r.lineHeight + (y - 1) * t.bodySpacing;
  }
  m && (b += t.footerMarginTop + m * d.lineHeight + (m - 1) * t.footerSpacing);
  let S = 0;
  const k = function (C) {
    w = Math.max(w, e.measureText(C).width + S);
  };
  return (
    e.save(),
    (e.font = u.string),
    re(i.title, k),
    (e.font = r.string),
    re(i.beforeBody.concat(i.afterBody), k),
    (S = t.displayColors ? l + 2 + t.boxPadding : 0),
    re(n, (C) => {
      (re(C.before, k), re(C.lines, k), re(C.after, k));
    }),
    (S = 0),
    (e.font = d.string),
    re(i.footer, k),
    e.restore(),
    (w += g.width),
    { width: w, height: b }
  );
}
function sm(i, t) {
  const { y: e, height: n } = t;
  return e < n / 2 ? "top" : e > i.height - n / 2 ? "bottom" : "center";
}
function om(i, t, e, n) {
  const { x: s, width: o } = n,
    l = e.caretSize + e.caretPadding;
  if ((i === "left" && s + o + l > t.width) || (i === "right" && s - o - l < 0))
    return !0;
}
function lm(i, t, e, n) {
  const { x: s, width: o } = e,
    {
      width: l,
      chartArea: { left: a, right: r },
    } = i;
  let u = "center";
  return (
    n === "center"
      ? (u = s <= (a + r) / 2 ? "left" : "right")
      : s <= o / 2
        ? (u = "left")
        : s >= l - o / 2 && (u = "right"),
    om(u, i, t, e) && (u = "center"),
    u
  );
}
function qr(i, t, e) {
  const n = e.yAlign || t.yAlign || sm(i, e);
  return { xAlign: e.xAlign || t.xAlign || lm(i, t, e, n), yAlign: n };
}
function am(i, t) {
  let { x: e, width: n } = i;
  return (t === "right" ? (e -= n) : t === "center" && (e -= n / 2), e);
}
function rm(i, t, e) {
  let { y: n, height: s } = i;
  return (
    t === "top" ? (n += e) : t === "bottom" ? (n -= s + e) : (n -= s / 2),
    n
  );
}
function Gr(i, t, e, n) {
  const { caretSize: s, caretPadding: o, cornerRadius: l } = i,
    { xAlign: a, yAlign: r } = e,
    u = s + o,
    { topLeft: d, topRight: p, bottomLeft: m, bottomRight: _ } = On(l);
  let g = am(t, a);
  const b = rm(t, r, u);
  return (
    r === "center"
      ? a === "left"
        ? (g += u)
        : a === "right" && (g -= u)
      : a === "left"
        ? (g -= Math.max(d, m) + s)
        : a === "right" && (g += Math.max(p, _) + s),
    { x: $e(g, 0, n.width - t.width), y: $e(b, 0, n.height - t.height) }
  );
}
function ko(i, t, e) {
  const n = He(e.padding);
  return t === "center"
    ? i.x + i.width / 2
    : t === "right"
      ? i.x + i.width - n.right
      : i.x + n.left;
}
function Qr(i) {
  return Di([], Zi(i));
}
function cm(i, t, e) {
  return bn(i, { tooltip: t, tooltipItems: e, type: "tooltip" });
}
function Zr(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
class Yl extends fi {
  constructor(t) {
    (super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart || t._chart),
      (this._chart = this.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0));
  }
  initialize(t) {
    ((this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0));
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const e = this.chart,
      n = this.options.setContext(this.getContext()),
      s = n.enabled && e.options.animation && n.animations,
      o = new Ou(this.chart, s);
    return (s._cacheable && (this._cachedAnimations = Object.freeze(o)), o);
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = cm(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, e) {
    const { callbacks: n } = e,
      s = n.beforeTitle.apply(this, [t]),
      o = n.title.apply(this, [t]),
      l = n.afterTitle.apply(this, [t]);
    let a = [];
    return ((a = Di(a, Zi(s))), (a = Di(a, Zi(o))), (a = Di(a, Zi(l))), a);
  }
  getBeforeBody(t, e) {
    return Qr(e.callbacks.beforeBody.apply(this, [t]));
  }
  getBody(t, e) {
    const { callbacks: n } = e,
      s = [];
    return (
      re(t, (o) => {
        const l = { before: [], lines: [], after: [] },
          a = Zr(n, o);
        (Di(l.before, Zi(a.beforeLabel.call(this, o))),
          Di(l.lines, a.label.call(this, o)),
          Di(l.after, Zi(a.afterLabel.call(this, o))),
          s.push(l));
      }),
      s
    );
  }
  getAfterBody(t, e) {
    return Qr(e.callbacks.afterBody.apply(this, [t]));
  }
  getFooter(t, e) {
    const { callbacks: n } = e,
      s = n.beforeFooter.apply(this, [t]),
      o = n.footer.apply(this, [t]),
      l = n.afterFooter.apply(this, [t]);
    let a = [];
    return ((a = Di(a, Zi(s))), (a = Di(a, Zi(o))), (a = Di(a, Zi(l))), a);
  }
  _createItems(t) {
    const e = this._active,
      n = this.chart.data,
      s = [],
      o = [],
      l = [];
    let a = [],
      r,
      u;
    for (r = 0, u = e.length; r < u; ++r) a.push(nm(this.chart, e[r]));
    return (
      t.filter && (a = a.filter((d, p, m) => t.filter(d, p, m, n))),
      t.itemSort && (a = a.sort((d, p) => t.itemSort(d, p, n))),
      re(a, (d) => {
        const p = Zr(t.callbacks, d);
        (s.push(p.labelColor.call(this, d)),
          o.push(p.labelPointStyle.call(this, d)),
          l.push(p.labelTextColor.call(this, d)));
      }),
      (this.labelColors = s),
      (this.labelPointStyles = o),
      (this.labelTextColors = l),
      (this.dataPoints = a),
      a
    );
  }
  update(t, e) {
    const n = this.options.setContext(this.getContext()),
      s = this._active;
    let o,
      l = [];
    if (!s.length) this.opacity !== 0 && (o = { opacity: 0 });
    else {
      const a = Ds[n.position].call(this, s, this._eventPosition);
      ((l = this._createItems(n)),
        (this.title = this.getTitle(l, n)),
        (this.beforeBody = this.getBeforeBody(l, n)),
        (this.body = this.getBody(l, n)),
        (this.afterBody = this.getAfterBody(l, n)),
        (this.footer = this.getFooter(l, n)));
      const r = (this._size = Kr(this, n)),
        u = Object.assign({}, a, r),
        d = qr(this.chart, n, u),
        p = Gr(n, u, d, this.chart);
      ((this.xAlign = d.xAlign),
        (this.yAlign = d.yAlign),
        (o = {
          opacity: 1,
          x: p.x,
          y: p.y,
          width: r.width,
          height: r.height,
          caretX: a.x,
          caretY: a.y,
        }));
    }
    ((this._tooltipItems = l),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t &&
        n.external &&
        n.external.call(this, { chart: this.chart, tooltip: this, replay: e }));
  }
  drawCaret(t, e, n, s) {
    const o = this.getCaretPosition(t, n, s);
    (e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3));
  }
  getCaretPosition(t, e, n) {
    const { xAlign: s, yAlign: o } = this,
      { caretSize: l, cornerRadius: a } = n,
      { topLeft: r, topRight: u, bottomLeft: d, bottomRight: p } = On(a),
      { x: m, y: _ } = t,
      { width: g, height: b } = e;
    let w, y, S, k, C, P;
    return (
      o === "center"
        ? ((C = _ + b / 2),
          s === "left"
            ? ((w = m), (y = w - l), (k = C + l), (P = C - l))
            : ((w = m + g), (y = w + l), (k = C - l), (P = C + l)),
          (S = w))
        : (s === "left"
            ? (y = m + Math.max(r, d) + l)
            : s === "right"
              ? (y = m + g - Math.max(u, p) - l)
              : (y = this.caretX),
          o === "top"
            ? ((k = _), (C = k - l), (w = y - l), (S = y + l))
            : ((k = _ + b), (C = k + l), (w = y + l), (S = y - l)),
          (P = k)),
      { x1: w, x2: y, x3: S, y1: k, y2: C, y3: P }
    );
  }
  drawTitle(t, e, n) {
    const s = this.title,
      o = s.length;
    let l, a, r;
    if (o) {
      const u = is(n.rtl, this.x, this.width);
      for (
        t.x = ko(this, n.titleAlign, n),
          e.textAlign = u.textAlign(n.titleAlign),
          e.textBaseline = "middle",
          l = Be(n.titleFont),
          a = n.titleSpacing,
          e.fillStyle = n.titleColor,
          e.font = l.string,
          r = 0;
        r < o;
        ++r
      )
        (e.fillText(s[r], u.x(t.x), t.y + l.lineHeight / 2),
          (t.y += l.lineHeight + a),
          r + 1 === o && (t.y += n.titleMarginBottom - a));
    }
  }
  _drawColorBox(t, e, n, s, o) {
    const l = this.labelColors[n],
      a = this.labelPointStyles[n],
      { boxHeight: r, boxWidth: u, boxPadding: d } = o,
      p = Be(o.bodyFont),
      m = ko(this, "left", o),
      _ = s.x(m),
      g = r < p.lineHeight ? (p.lineHeight - r) / 2 : 0,
      b = e.y + g;
    if (o.usePointStyle) {
      const w = {
          radius: Math.min(u, r) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        y = s.leftForLtr(_, u) + u / 2,
        S = b + r / 2;
      ((t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        zl(t, w, y, S),
        (t.strokeStyle = l.borderColor),
        (t.fillStyle = l.backgroundColor),
        zl(t, w, y, S));
    } else {
      ((t.lineWidth = ee(l.borderWidth)
        ? Math.max(...Object.values(l.borderWidth))
        : l.borderWidth || 1),
        (t.strokeStyle = l.borderColor),
        t.setLineDash(l.borderDash || []),
        (t.lineDashOffset = l.borderDashOffset || 0));
      const w = s.leftForLtr(_, u - d),
        y = s.leftForLtr(s.xPlus(_, 1), u - d - 2),
        S = On(l.borderRadius);
      Object.values(S).some((k) => k !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          Is(t, { x: w, y: b, w: u, h: r, radius: S }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = l.backgroundColor),
          t.beginPath(),
          Is(t, { x: y, y: b + 1, w: u - 2, h: r - 2, radius: S }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(w, b, u, r),
          t.strokeRect(w, b, u, r),
          (t.fillStyle = l.backgroundColor),
          t.fillRect(y, b + 1, u - 2, r - 2));
    }
    t.fillStyle = this.labelTextColors[n];
  }
  drawBody(t, e, n) {
    const { body: s } = this,
      {
        bodySpacing: o,
        bodyAlign: l,
        displayColors: a,
        boxHeight: r,
        boxWidth: u,
        boxPadding: d,
      } = n,
      p = Be(n.bodyFont);
    let m = p.lineHeight,
      _ = 0;
    const g = is(n.rtl, this.x, this.width),
      b = function (F) {
        (e.fillText(F, g.x(t.x + _), t.y + m / 2), (t.y += m + o));
      },
      w = g.textAlign(l);
    let y, S, k, C, P, T, R;
    for (
      e.textAlign = l,
        e.textBaseline = "middle",
        e.font = p.string,
        t.x = ko(this, w, n),
        e.fillStyle = n.bodyColor,
        re(this.beforeBody, b),
        _ = a && w !== "right" ? (l === "center" ? u / 2 + d : u + 2 + d) : 0,
        C = 0,
        T = s.length;
      C < T;
      ++C
    ) {
      for (
        y = s[C],
          S = this.labelTextColors[C],
          e.fillStyle = S,
          re(y.before, b),
          k = y.lines,
          a &&
            k.length &&
            (this._drawColorBox(e, t, C, g, n),
            (m = Math.max(p.lineHeight, r))),
          P = 0,
          R = k.length;
        P < R;
        ++P
      )
        (b(k[P]), (m = p.lineHeight));
      re(y.after, b);
    }
    ((_ = 0), (m = p.lineHeight), re(this.afterBody, b), (t.y -= o));
  }
  drawFooter(t, e, n) {
    const s = this.footer,
      o = s.length;
    let l, a;
    if (o) {
      const r = is(n.rtl, this.x, this.width);
      for (
        t.x = ko(this, n.footerAlign, n),
          t.y += n.footerMarginTop,
          e.textAlign = r.textAlign(n.footerAlign),
          e.textBaseline = "middle",
          l = Be(n.footerFont),
          e.fillStyle = n.footerColor,
          e.font = l.string,
          a = 0;
        a < o;
        ++a
      )
        (e.fillText(s[a], r.x(t.x), t.y + l.lineHeight / 2),
          (t.y += l.lineHeight + n.footerSpacing));
    }
  }
  drawBackground(t, e, n, s) {
    const { xAlign: o, yAlign: l } = this,
      { x: a, y: r } = t,
      { width: u, height: d } = n,
      {
        topLeft: p,
        topRight: m,
        bottomLeft: _,
        bottomRight: g,
      } = On(s.cornerRadius);
    ((e.fillStyle = s.backgroundColor),
      (e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      e.beginPath(),
      e.moveTo(a + p, r),
      l === "top" && this.drawCaret(t, e, n, s),
      e.lineTo(a + u - m, r),
      e.quadraticCurveTo(a + u, r, a + u, r + m),
      l === "center" && o === "right" && this.drawCaret(t, e, n, s),
      e.lineTo(a + u, r + d - g),
      e.quadraticCurveTo(a + u, r + d, a + u - g, r + d),
      l === "bottom" && this.drawCaret(t, e, n, s),
      e.lineTo(a + _, r + d),
      e.quadraticCurveTo(a, r + d, a, r + d - _),
      l === "center" && o === "left" && this.drawCaret(t, e, n, s),
      e.lineTo(a, r + p),
      e.quadraticCurveTo(a, r, a + p, r),
      e.closePath(),
      e.fill(),
      s.borderWidth > 0 && e.stroke());
  }
  _updateAnimationTarget(t) {
    const e = this.chart,
      n = this.$animations,
      s = n && n.x,
      o = n && n.y;
    if (s || o) {
      const l = Ds[t.position].call(this, this._active, this._eventPosition);
      if (!l) return;
      const a = (this._size = Kr(this, t)),
        r = Object.assign({}, l, this._size),
        u = qr(e, t, r),
        d = Gr(t, r, u, e);
      (s._to !== d.x || o._to !== d.y) &&
        ((this.xAlign = u.xAlign),
        (this.yAlign = u.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = l.x),
        (this.caretY = l.y),
        this._resolveAnimations().update(this, d));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let n = this.opacity;
    if (!n) return;
    this._updateAnimationTarget(e);
    const s = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y };
    n = Math.abs(n) < 0.001 ? 0 : n;
    const l = He(e.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    e.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = n),
      this.drawBackground(o, t, s, e),
      Pu(t, e.textDirection),
      (o.y += l.top),
      this.drawTitle(o, t, e),
      this.drawBody(o, t, e),
      this.drawFooter(o, t, e),
      Cu(t, e.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const n = this._active,
      s = t.map(({ datasetIndex: a, index: r }) => {
        const u = this.chart.getDatasetMeta(a);
        if (!u) throw new Error("Cannot find a dataset at index " + a);
        return { datasetIndex: a, element: u.data[r], index: r };
      }),
      o = !Fo(n, s),
      l = this._positionChanged(s, e);
    (o || l) &&
      ((this._active = s),
      (this._eventPosition = e),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, e, n = !0) {
    if (e && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options,
      o = this._active || [],
      l = this._getActiveElements(t, o, e, n),
      a = this._positionChanged(l, t),
      r = e || !Fo(l, o) || a;
    return (
      r &&
        ((this._active = l),
        (s.enabled || s.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
      r
    );
  }
  _getActiveElements(t, e, n, s) {
    const o = this.options;
    if (t.type === "mouseout") return [];
    if (!s) return e;
    const l = this.chart.getElementsAtEventForMode(t, o.mode, o, n);
    return (o.reverse && l.reverse(), l);
  }
  _positionChanged(t, e) {
    const { caretX: n, caretY: s, options: o } = this,
      l = Ds[o.position].call(this, t, e);
    return l !== !1 && (n !== l.x || s !== l.y);
  }
}
Yl.positioners = Ds;
var um = {
    id: "tooltip",
    _element: Yl,
    positioners: Ds,
    afterInit(i, t, e) {
      e && (i.tooltip = new Yl({ chart: i, options: e }));
    },
    beforeUpdate(i, t, e) {
      i.tooltip && i.tooltip.initialize(e);
    },
    reset(i, t, e) {
      i.tooltip && i.tooltip.initialize(e);
    },
    afterDraw(i) {
      const t = i.tooltip;
      if (t && t._willRender()) {
        const e = { tooltip: t };
        if (i.notifyPlugins("beforeTooltipDraw", e) === !1) return;
        (t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e));
      }
    },
    afterEvent(i, t) {
      if (i.tooltip) {
        const e = t.replay;
        i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: { weight: "bold" },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: "left",
      bodyColor: "#fff",
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: "left",
      footerColor: "#fff",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: "bold" },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (i, t) => t.bodyFont.size,
      boxWidth: (i, t) => t.bodyFont.size,
      multiKeyBackground: "#fff",
      displayColors: !0,
      boxPadding: 0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: { duration: 400, easing: "easeOutQuart" },
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "width", "height", "caretX", "caretY"],
        },
        opacity: { easing: "linear", duration: 200 },
      },
      callbacks: {
        beforeTitle: Gi,
        title(i) {
          if (i.length > 0) {
            const t = i[0],
              e = t.chart.data.labels,
              n = e ? e.length : 0;
            if (this && this.options && this.options.mode === "dataset")
              return t.dataset.label || "";
            if (t.label) return t.label;
            if (n > 0 && t.dataIndex < n) return e[t.dataIndex];
          }
          return "";
        },
        afterTitle: Gi,
        beforeBody: Gi,
        beforeLabel: Gi,
        label(i) {
          if (this && this.options && this.options.mode === "dataset")
            return i.label + ": " + i.formattedValue || i.formattedValue;
          let t = i.dataset.label || "";
          t && (t += ": ");
          const e = i.formattedValue;
          return (ne(e) || (t += e), t);
        },
        labelColor(i) {
          const e = i.chart
            .getDatasetMeta(i.datasetIndex)
            .controller.getStyle(i.dataIndex);
          return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0,
          };
        },
        labelTextColor() {
          return this.options.bodyColor;
        },
        labelPointStyle(i) {
          const e = i.chart
            .getDatasetMeta(i.datasetIndex)
            .controller.getStyle(i.dataIndex);
          return { pointStyle: e.pointStyle, rotation: e.rotation };
        },
        afterLabel: Gi,
        afterBody: Gi,
        beforeFooter: Gi,
        footer: Gi,
        afterFooter: Gi,
      },
    },
    defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
    descriptors: {
      _scriptable: (i) =>
        i !== "filter" && i !== "itemSort" && i !== "external",
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: "animation" },
    },
    additionalOptionScopes: ["interaction"],
  },
  dm = Object.freeze({
    __proto__: null,
    Decimation: T0,
    Filler: G0,
    Legend: J0,
    SubTitle: im,
    Title: em,
    Tooltip: um,
  });
const fm = (i, t, e, n) => (
  typeof t == "string"
    ? ((e = i.push(t) - 1), n.unshift({ index: e, label: t }))
    : isNaN(t) && (e = null),
  e
);
function hm(i, t, e, n) {
  const s = i.indexOf(t);
  if (s === -1) return fm(i, t, e, n);
  const o = i.lastIndexOf(t);
  return s !== o ? e : s;
}
const pm = (i, t) => (i === null ? null : $e(Math.round(i), 0, t));
class Wo extends $n {
  constructor(t) {
    (super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []));
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const n = this.getLabels();
      for (const { index: s, label: o } of e) n[s] === o && n.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (ne(t)) return null;
    const n = this.getLabels();
    return (
      (e =
        isFinite(e) && n[e] === t ? e : hm(n, t, Kt(e, t), this._addedLabels)),
      pm(e, n.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: n, max: s } = this.getMinMax(!0);
    (this.options.bounds === "ticks" &&
      (t || (n = 0), e || (s = this.getLabels().length - 1)),
      (this.min = n),
      (this.max = s));
  }
  buildTicks() {
    const t = this.min,
      e = this.max,
      n = this.options.offset,
      s = [];
    let o = this.getLabels();
    ((o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1)),
      (this._valueRange = Math.max(o.length - (n ? 0 : 1), 1)),
      (this._startValue = this.min - (n ? 0.5 : 0)));
    for (let l = t; l <= e; l++) s.push({ value: l });
    return s;
  }
  getLabelForValue(t) {
    const e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
  }
  configure() {
    (super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels));
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange,
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
Wo.id = "category";
Wo.defaults = { ticks: { callback: Wo.prototype.getLabelForValue } };
function mm(i, t) {
  const e = [],
    {
      bounds: s,
      step: o,
      min: l,
      max: a,
      precision: r,
      count: u,
      maxTicks: d,
      maxDigits: p,
      includeBounds: m,
    } = i,
    _ = o || 1,
    g = d - 1,
    { min: b, max: w } = t,
    y = !ne(l),
    S = !ne(a),
    k = !ne(u),
    C = (w - b) / (p + 1);
  let P = qa((w - b) / g / _) * _,
    T,
    R,
    F,
    D;
  if (P < 1e-14 && !y && !S) return [{ value: b }, { value: w }];
  ((D = Math.ceil(w / P) - Math.floor(b / P)),
    D > g && (P = qa((D * P) / g / _) * _),
    ne(r) || ((T = Math.pow(10, r)), (P = Math.ceil(P * T) / T)),
    s === "ticks"
      ? ((R = Math.floor(b / P) * P), (F = Math.ceil(w / P) * P))
      : ((R = b), (F = w)),
    y && S && o && tf((a - l) / o, P / 1e3)
      ? ((D = Math.round(Math.min((a - l) / P, d))),
        (P = (a - l) / D),
        (R = l),
        (F = a))
      : k
        ? ((R = y ? l : R), (F = S ? a : F), (D = u - 1), (P = (F - R) / D))
        : ((D = (F - R) / P),
          Ps(D, Math.round(D), P / 1e3)
            ? (D = Math.round(D))
            : (D = Math.ceil(D))));
  const I = Math.max(Ga(P), Ga(R));
  ((T = Math.pow(10, ne(r) ? I : r)),
    (R = Math.round(R * T) / T),
    (F = Math.round(F * T) / T));
  let W = 0;
  for (
    y &&
    (m && R !== l
      ? (e.push({ value: l }),
        R < l && W++,
        Ps(Math.round((R + W * P) * T) / T, l, Jr(l, C, i)) && W++)
      : R < l && W++);
    W < D;
    ++W
  )
    e.push({ value: Math.round((R + W * P) * T) / T });
  return (
    S && m && F !== a
      ? e.length && Ps(e[e.length - 1].value, a, Jr(a, C, i))
        ? (e[e.length - 1].value = a)
        : e.push({ value: a })
      : (!S || F === a) && e.push({ value: F }),
    e
  );
}
function Jr(i, t, { horizontal: e, minRotation: n }) {
  const s = oi(n),
    o = (e ? Math.sin(s) : Math.cos(s)) || 0.001,
    l = 0.75 * t * ("" + i).length;
  return Math.min(t / o, l);
}
class Ho extends $n {
  constructor(t) {
    (super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0));
  }
  parse(t, e) {
    return ne(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: e, maxDefined: n } = this.getUserBounds();
    let { min: s, max: o } = this;
    const l = (r) => (s = e ? s : r),
      a = (r) => (o = n ? o : r);
    if (t) {
      const r = Oi(s),
        u = Oi(o);
      r < 0 && u < 0 ? a(0) : r > 0 && u > 0 && l(0);
    }
    if (s === o) {
      let r = 1;
      ((o >= Number.MAX_SAFE_INTEGER || s <= Number.MIN_SAFE_INTEGER) &&
        (r = Math.abs(o * 0.05)),
        a(o + r),
        t || l(s - r));
    }
    ((this.min = s), (this.max = o));
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: n } = t,
      s;
    return (
      n
        ? ((s = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1),
          s > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`,
            ),
            (s = 1e3)))
        : ((s = this.computeTickLimit()), (e = e || 11)),
      e && (s = Math.min(e, s)),
      s
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      e = t.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const s = {
        maxTicks: n,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: e.precision,
        step: e.stepSize,
        count: e.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: e.minRotation || 0,
        includeBounds: e.includeBounds !== !1,
      },
      o = this._range || this,
      l = mm(s, o);
    return (
      t.bounds === "ticks" && lu(l, this, "value"),
      t.reverse
        ? (l.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      l
    );
  }
  configure() {
    const t = this.ticks;
    let e = this.min,
      n = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const s = (n - e) / Math.max(t.length - 1, 1) / 2;
      ((e -= s), (n += s));
    }
    ((this._startValue = e), (this._endValue = n), (this._valueRange = n - e));
  }
  getLabelForValue(t) {
    return Ns(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class pa extends Ho {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    ((this.min = Pe(t) ? t : 0),
      (this.max = Pe(e) ? e : 1),
      this.handleTickRangeOptions());
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      e = t ? this.width : this.height,
      n = oi(this.options.ticks.minRotation),
      s = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
      o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
pa.id = "linear";
pa.defaults = { ticks: { callback: el.formatters.numeric } };
function tc(i) {
  return i / Math.pow(10, Math.floor(ti(i))) === 1;
}
function _m(i, t) {
  const e = Math.floor(ti(t.max)),
    n = Math.ceil(t.max / Math.pow(10, e)),
    s = [];
  let o = Je(i.min, Math.pow(10, Math.floor(ti(t.min)))),
    l = Math.floor(ti(o)),
    a = Math.floor(o / Math.pow(10, l)),
    r = l < 0 ? Math.pow(10, Math.abs(l)) : 1;
  do
    (s.push({ value: o, major: tc(o) }),
      ++a,
      a === 10 && ((a = 1), ++l, (r = l >= 0 ? 1 : r)),
      (o = Math.round(a * Math.pow(10, l) * r) / r));
  while (l < e || (l === e && a < n));
  const u = Je(i.max, o);
  return (s.push({ value: u, major: tc(o) }), s);
}
class ma extends $n {
  constructor(t) {
    (super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0));
  }
  parse(t, e) {
    const n = Ho.prototype.parse.apply(this, [t, e]);
    if (n === 0) {
      this._zero = !0;
      return;
    }
    return Pe(n) && n > 0 ? n : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    ((this.min = Pe(t) ? Math.max(0, t) : null),
      (this.max = Pe(e) ? Math.max(0, e) : null),
      this.options.beginAtZero && (this._zero = !0),
      this.handleTickRangeOptions());
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let n = this.min,
      s = this.max;
    const o = (r) => (n = t ? n : r),
      l = (r) => (s = e ? s : r),
      a = (r, u) => Math.pow(10, Math.floor(ti(r)) + u);
    (n === s && (n <= 0 ? (o(1), l(10)) : (o(a(n, -1)), l(a(s, 1)))),
      n <= 0 && o(a(s, -1)),
      s <= 0 && l(a(n, 1)),
      this._zero &&
        this.min !== this._suggestedMin &&
        n === a(this.min, 0) &&
        o(a(n, -1)),
      (this.min = n),
      (this.max = s));
  }
  buildTicks() {
    const t = this.options,
      e = { min: this._userMin, max: this._userMax },
      n = _m(e, this);
    return (
      t.bounds === "ticks" && lu(n, this, "value"),
      t.reverse
        ? (n.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      n
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : Ns(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    (super.configure(),
      (this._startValue = ti(t)),
      (this._valueRange = ti(this.max) - ti(t)));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (ti(t) - this._startValue) / this._valueRange,
          )
    );
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
ma.id = "logarithmic";
ma.defaults = {
  ticks: { callback: el.formatters.logarithmic, major: { enabled: !0 } },
};
function Xl(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = He(t.backdropPadding);
    return Kt(t.font && t.font.size, ie.font.size) + e.height;
  }
  return 0;
}
function gm(i, t, e) {
  return (
    (e = me(e) ? e : [e]),
    { w: Of(i, t.string, e), h: e.length * t.lineHeight }
  );
}
function ec(i, t, e, n, s) {
  return i === n || i === s
    ? { start: t - e / 2, end: t + e / 2 }
    : i < n || i > s
      ? { start: t - e, end: t }
      : { start: t, end: t + e };
}
function bm(i) {
  const t = {
      l: i.left + i._padding.left,
      r: i.right - i._padding.right,
      t: i.top + i._padding.top,
      b: i.bottom - i._padding.bottom,
    },
    e = Object.assign({}, t),
    n = [],
    s = [],
    o = i._pointLabels.length,
    l = i.options.pointLabels,
    a = l.centerPointLabels ? ve / o : 0;
  for (let r = 0; r < o; r++) {
    const u = l.setContext(i.getPointLabelContext(r));
    s[r] = u.padding;
    const d = i.getPointPosition(r, i.drawingArea + s[r], a),
      p = Be(u.font),
      m = gm(i.ctx, p, i._pointLabels[r]);
    n[r] = m;
    const _ = Ke(i.getIndexAngle(r) + a),
      g = Math.round(ta(_)),
      b = ec(g, d.x, m.w, 0, 180),
      w = ec(g, d.y, m.h, 90, 270);
    vm(e, t, _, b, w);
  }
  (i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
    (i._pointLabelItems = ym(i, n, s)));
}
function vm(i, t, e, n, s) {
  const o = Math.abs(Math.sin(e)),
    l = Math.abs(Math.cos(e));
  let a = 0,
    r = 0;
  (n.start < t.l
    ? ((a = (t.l - n.start) / o), (i.l = Math.min(i.l, t.l - a)))
    : n.end > t.r && ((a = (n.end - t.r) / o), (i.r = Math.max(i.r, t.r + a))),
    s.start < t.t
      ? ((r = (t.t - s.start) / l), (i.t = Math.min(i.t, t.t - r)))
      : s.end > t.b &&
        ((r = (s.end - t.b) / l), (i.b = Math.max(i.b, t.b + r))));
}
function ym(i, t, e) {
  const n = [],
    s = i._pointLabels.length,
    o = i.options,
    l = Xl(o) / 2,
    a = i.drawingArea,
    r = o.pointLabels.centerPointLabels ? ve / s : 0;
  for (let u = 0; u < s; u++) {
    const d = i.getPointPosition(u, a + l + e[u], r),
      p = Math.round(ta(Ke(d.angle + ke))),
      m = t[u],
      _ = km(d.y, m.h, p),
      g = wm(p),
      b = xm(d.x, m.w, g);
    n.push({
      x: d.x,
      y: _,
      textAlign: g,
      left: b,
      top: _,
      right: b + m.w,
      bottom: _ + m.h,
    });
  }
  return n;
}
function wm(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function xm(i, t, e) {
  return (e === "right" ? (i -= t) : e === "center" && (i -= t / 2), i);
}
function km(i, t, e) {
  return (
    e === 90 || e === 270 ? (i -= t / 2) : (e > 270 || e < 90) && (i -= t),
    i
  );
}
function Mm(i, t) {
  const {
    ctx: e,
    options: { pointLabels: n },
  } = i;
  for (let s = t - 1; s >= 0; s--) {
    const o = n.setContext(i.getPointLabelContext(s)),
      l = Be(o.font),
      {
        x: a,
        y: r,
        textAlign: u,
        left: d,
        top: p,
        right: m,
        bottom: _,
      } = i._pointLabelItems[s],
      { backdropColor: g } = o;
    if (!ne(g)) {
      const b = On(o.borderRadius),
        w = He(o.backdropPadding);
      e.fillStyle = g;
      const y = d - w.left,
        S = p - w.top,
        k = m - d + w.width,
        C = _ - p + w.height;
      Object.values(b).some((P) => P !== 0)
        ? (e.beginPath(),
          Is(e, { x: y, y: S, w: k, h: C, radius: b }),
          e.fill())
        : e.fillRect(y, S, k, C);
    }
    Bn(e, i._pointLabels[s], a, r + l.lineHeight / 2, l, {
      color: o.color,
      textAlign: u,
      textBaseline: "middle",
    });
  }
}
function td(i, t, e, n) {
  const { ctx: s } = i;
  if (e) s.arc(i.xCenter, i.yCenter, t, 0, fe);
  else {
    let o = i.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let l = 1; l < n; l++)
      ((o = i.getPointPosition(l, t)), s.lineTo(o.x, o.y));
  }
}
function Sm(i, t, e, n) {
  const s = i.ctx,
    o = t.circular,
    { color: l, lineWidth: a } = t;
  (!o && !n) ||
    !l ||
    !a ||
    e < 0 ||
    (s.save(),
    (s.strokeStyle = l),
    (s.lineWidth = a),
    s.setLineDash(t.borderDash),
    (s.lineDashOffset = t.borderDashOffset),
    s.beginPath(),
    td(i, e, o, n),
    s.closePath(),
    s.stroke(),
    s.restore());
}
function Am(i, t, e) {
  return bn(i, { label: e, index: t, type: "pointLabel" });
}
class Ws extends Ho {
  constructor(t) {
    (super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []));
  }
  setDimensions() {
    const t = (this._padding = He(Xl(this.options) / 2)),
      e = (this.width = this.maxWidth - t.width),
      n = (this.height = this.maxHeight - t.height);
    ((this.xCenter = Math.floor(this.left + e / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + n / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(e, n) / 2)));
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    ((this.min = Pe(t) && !isNaN(t) ? t : 0),
      (this.max = Pe(e) && !isNaN(e) ? e : 0),
      this.handleTickRangeOptions());
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Xl(this.options));
  }
  generateTickLabels(t) {
    (Ho.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((e, n) => {
          const s = pe(this.options.pointLabels.callback, [e, n], this);
          return s || s === 0 ? s : "";
        })
        .filter((e, n) => this.chart.getDataVisibility(n))));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? bm(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, n, s) {
    ((this.xCenter += Math.floor((t - e) / 2)),
      (this.yCenter += Math.floor((n - s) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, e, n, s),
      )));
  }
  getIndexAngle(t) {
    const e = fe / (this._pointLabels.length || 1),
      n = this.options.startAngle || 0;
    return Ke(t * e + oi(n));
  }
  getDistanceFromCenterForValue(t) {
    if (ne(t)) return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (ne(t)) return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const n = e[t];
      return Am(this.getContext(), t, n);
    }
  }
  getPointPosition(t, e, n = 0) {
    const s = this.getIndexAngle(t) - ke + n;
    return {
      x: Math.cos(s) * e + this.xCenter,
      y: Math.sin(s) * e + this.yCenter,
      angle: s,
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: n, right: s, bottom: o } = this._pointLabelItems[t];
    return { left: e, top: n, right: s, bottom: o };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: e },
    } = this.options;
    if (t) {
      const n = this.ctx;
      (n.save(),
        n.beginPath(),
        td(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          e,
          this._pointLabels.length,
        ),
        n.closePath(),
        (n.fillStyle = t),
        n.fill(),
        n.restore());
    }
  }
  drawGrid() {
    const t = this.ctx,
      e = this.options,
      { angleLines: n, grid: s } = e,
      o = this._pointLabels.length;
    let l, a, r;
    if (
      (e.pointLabels.display && Mm(this, o),
      s.display &&
        this.ticks.forEach((u, d) => {
          if (d !== 0) {
            a = this.getDistanceFromCenterForValue(u.value);
            const p = s.setContext(this.getContext(d - 1));
            Sm(this, p, a, o);
          }
        }),
      n.display)
    ) {
      for (t.save(), l = o - 1; l >= 0; l--) {
        const u = n.setContext(this.getPointLabelContext(l)),
          { color: d, lineWidth: p } = u;
        !p ||
          !d ||
          ((t.lineWidth = p),
          (t.strokeStyle = d),
          t.setLineDash(u.borderDash),
          (t.lineDashOffset = u.borderDashOffset),
          (a = this.getDistanceFromCenterForValue(
            e.ticks.reverse ? this.min : this.max,
          )),
          (r = this.getPointPosition(l, a)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(r.x, r.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      e = this.options,
      n = e.ticks;
    if (!n.display) return;
    const s = this.getIndexAngle(0);
    let o, l;
    (t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(s),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((a, r) => {
        if (r === 0 && !e.reverse) return;
        const u = n.setContext(this.getContext(r)),
          d = Be(u.font);
        if (
          ((o = this.getDistanceFromCenterForValue(this.ticks[r].value)),
          u.showLabelBackdrop)
        ) {
          ((t.font = d.string),
            (l = t.measureText(a.label).width),
            (t.fillStyle = u.backdropColor));
          const p = He(u.backdropPadding);
          t.fillRect(
            -l / 2 - p.left,
            -o - d.size / 2 - p.top,
            l + p.width,
            d.size + p.height,
          );
        }
        Bn(t, a.label, 0, -o, d, { color: u.color });
      }),
      t.restore());
  }
  drawTitle() {}
}
Ws.id = "radialLinear";
Ws.defaults = {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0,
  },
  grid: { circular: !1 },
  startAngle: 0,
  ticks: { showLabelBackdrop: !0, callback: el.formatters.numeric },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: { size: 10 },
    callback(i) {
      return i;
    },
    padding: 5,
    centerPointLabels: !1,
  },
};
Ws.defaultRoutes = {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color",
};
Ws.descriptors = { angleLines: { _fallback: "grid" } };
const al = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Ye = Object.keys(al);
function Lm(i, t) {
  return i - t;
}
function ic(i, t) {
  if (ne(t)) return null;
  const e = i._adapter,
    { parser: n, round: s, isoWeekday: o } = i._parseOpts;
  let l = t;
  return (
    typeof n == "function" && (l = n(l)),
    Pe(l) || (l = typeof n == "string" ? e.parse(l, n) : e.parse(l)),
    l === null
      ? null
      : (s &&
          (l =
            s === "week" && (os(o) || o === !0)
              ? e.startOf(l, "isoWeek", o)
              : e.startOf(l, s)),
        +l)
  );
}
function nc(i, t, e, n) {
  const s = Ye.length;
  for (let o = Ye.indexOf(i); o < s - 1; ++o) {
    const l = al[Ye[o]],
      a = l.steps ? l.steps : Number.MAX_SAFE_INTEGER;
    if (l.common && Math.ceil((e - t) / (a * l.size)) <= n) return Ye[o];
  }
  return Ye[s - 1];
}
function Pm(i, t, e, n, s) {
  for (let o = Ye.length - 1; o >= Ye.indexOf(e); o--) {
    const l = Ye[o];
    if (al[l].common && i._adapter.diff(s, n, l) >= t - 1) return l;
  }
  return Ye[e ? Ye.indexOf(e) : 0];
}
function Cm(i) {
  for (let t = Ye.indexOf(i) + 1, e = Ye.length; t < e; ++t)
    if (al[Ye[t]].common) return Ye[t];
}
function sc(i, t, e) {
  if (!e) i[t] = !0;
  else if (e.length) {
    const { lo: n, hi: s } = ea(e, t),
      o = e[n] >= t ? e[n] : e[s];
    i[o] = !0;
  }
}
function Tm(i, t, e, n) {
  const s = i._adapter,
    o = +s.startOf(t[0].value, n),
    l = t[t.length - 1].value;
  let a, r;
  for (a = o; a <= l; a = +s.add(a, 1, n))
    ((r = e[a]), r >= 0 && (t[r].major = !0));
  return t;
}
function oc(i, t, e) {
  const n = [],
    s = {},
    o = t.length;
  let l, a;
  for (l = 0; l < o; ++l)
    ((a = t[l]), (s[a] = l), n.push({ value: a, major: !1 }));
  return o === 0 || !e ? n : Tm(i, n, s, e);
}
class Hs extends $n {
  constructor(t) {
    (super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0));
  }
  init(t, e) {
    const n = t.time || (t.time = {}),
      s = (this._adapter = new _p._date(t.adapters.date));
    (s.init(e),
      Ls(n.displayFormats, s.formats()),
      (this._parseOpts = {
        parser: n.parser,
        round: n.round,
        isoWeekday: n.isoWeekday,
      }),
      super.init(t),
      (this._normalized = e.normalized));
  }
  parse(t, e) {
    return t === void 0 ? null : ic(this, t);
  }
  beforeLayout() {
    (super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] }));
  }
  determineDataLimits() {
    const t = this.options,
      e = this._adapter,
      n = t.time.unit || "day";
    let { min: s, max: o, minDefined: l, maxDefined: a } = this.getUserBounds();
    function r(u) {
      (!l && !isNaN(u.min) && (s = Math.min(s, u.min)),
        !a && !isNaN(u.max) && (o = Math.max(o, u.max)));
    }
    ((!l || !a) &&
      (r(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        r(this.getMinMax(!1))),
      (s = Pe(s) && !isNaN(s) ? s : +e.startOf(Date.now(), n)),
      (o = Pe(o) && !isNaN(o) ? o : +e.endOf(Date.now(), n) + 1),
      (this.min = Math.min(s, o - 1)),
      (this.max = Math.max(s + 1, o)));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY,
      n = Number.NEGATIVE_INFINITY;
    return (
      t.length && ((e = t[0]), (n = t[t.length - 1])),
      { min: e, max: n }
    );
  }
  buildTicks() {
    const t = this.options,
      e = t.time,
      n = t.ticks,
      s = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      s.length &&
      ((this.min = this._userMin || s[0]),
      (this.max = this._userMax || s[s.length - 1]));
    const o = this.min,
      l = this.max,
      a = of(s, o, l);
    return (
      (this._unit =
        e.unit ||
        (n.autoSkip
          ? nc(e.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : Pm(this, a.length, e.minUnit, this.min, this.max))),
      (this._majorUnit =
        !n.major.enabled || this._unit === "year" ? void 0 : Cm(this._unit)),
      this.initOffsets(s),
      t.reverse && a.reverse(),
      oc(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t) {
    let e = 0,
      n = 0,
      s,
      o;
    this.options.offset &&
      t.length &&
      ((s = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (e = 1 - s)
        : (e = (this.getDecimalForValue(t[1]) - s) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (n = o)
        : (n = (o - this.getDecimalForValue(t[t.length - 2])) / 2));
    const l = t.length < 3 ? 0.5 : 0.25;
    ((e = $e(e, 0, l)),
      (n = $e(n, 0, l)),
      (this._offsets = { start: e, end: n, factor: 1 / (e + 1 + n) }));
  }
  _generate() {
    const t = this._adapter,
      e = this.min,
      n = this.max,
      s = this.options,
      o = s.time,
      l = o.unit || nc(o.minUnit, e, n, this._getLabelCapacity(e)),
      a = Kt(o.stepSize, 1),
      r = l === "week" ? o.isoWeekday : !1,
      u = os(r) || r === !0,
      d = {};
    let p = e,
      m,
      _;
    if (
      (u && (p = +t.startOf(p, "isoWeek", r)),
      (p = +t.startOf(p, u ? "day" : l)),
      t.diff(n, e, l) > 1e5 * a)
    )
      throw new Error(
        e + " and " + n + " are too far apart with stepSize of " + a + " " + l,
      );
    const g = s.ticks.source === "data" && this.getDataTimestamps();
    for (m = p, _ = 0; m < n; m = +t.add(m, a, l), _++) sc(d, m, g);
    return (
      (m === n || s.bounds === "ticks" || _ === 1) && sc(d, m, g),
      Object.keys(d)
        .sort((b, w) => b - w)
        .map((b) => +b)
    );
  }
  getLabelForValue(t) {
    const e = this._adapter,
      n = this.options.time;
    return n.tooltipFormat
      ? e.format(t, n.tooltipFormat)
      : e.format(t, n.displayFormats.datetime);
  }
  _tickFormatFunction(t, e, n, s) {
    const o = this.options,
      l = o.time.displayFormats,
      a = this._unit,
      r = this._majorUnit,
      u = a && l[a],
      d = r && l[r],
      p = n[e],
      m = r && d && p && p.major,
      _ = this._adapter.format(t, s || (m ? d : u)),
      g = o.ticks.callback;
    return g ? pe(g, [_, e, n], this) : _;
  }
  generateTickLabels(t) {
    let e, n, s;
    for (e = 0, n = t.length; e < n; ++e)
      ((s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t)));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets,
      n = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + n) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets,
      n = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks,
      n = this.ctx.measureText(t).width,
      s = oi(this.isHorizontal() ? e.maxRotation : e.minRotation),
      o = Math.cos(s),
      l = Math.sin(s),
      a = this._resolveTickFontOptions(0).size;
    return { w: n * o + a * l, h: n * l + a * o };
  }
  _getLabelCapacity(t) {
    const e = this.options.time,
      n = e.displayFormats,
      s = n[e.unit] || n.millisecond,
      o = this._tickFormatFunction(t, 0, oc(this, [t], this._majorUnit), s),
      l = this._getLabelSize(o),
      a =
        Math.floor(this.isHorizontal() ? this.width / l.w : this.height / l.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      e,
      n;
    if (t.length) return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this));
    for (e = 0, n = s.length; e < n; ++e)
      t = t.concat(s[e].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, n;
    if (t.length) return t;
    const s = this.getLabels();
    for (e = 0, n = s.length; e < n; ++e) t.push(ic(this, s[e]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return cu(t.sort(Lm));
  }
}
Hs.id = "time";
Hs.defaults = {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {},
  },
  ticks: { source: "auto", major: { enabled: !1 } },
};
function Mo(i, t, e) {
  let n = 0,
    s = i.length - 1,
    o,
    l,
    a,
    r;
  e
    ? (t >= i[n].pos && t <= i[s].pos && ({ lo: n, hi: s } = en(i, "pos", t)),
      ({ pos: o, time: a } = i[n]),
      ({ pos: l, time: r } = i[s]))
    : (t >= i[n].time &&
        t <= i[s].time &&
        ({ lo: n, hi: s } = en(i, "time", t)),
      ({ time: o, pos: a } = i[n]),
      ({ time: l, pos: r } = i[s]));
  const u = l - o;
  return u ? a + ((r - a) * (t - o)) / u : a;
}
class _a extends Hs {
  constructor(t) {
    (super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0));
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      e = (this._table = this.buildLookupTable(t));
    ((this._minPos = Mo(e, this.min)),
      (this._tableRange = Mo(e, this.max) - this._minPos),
      super.initOffsets(t));
  }
  buildLookupTable(t) {
    const { min: e, max: n } = this,
      s = [],
      o = [];
    let l, a, r, u, d;
    for (l = 0, a = t.length; l < a; ++l)
      ((u = t[l]), u >= e && u <= n && s.push(u));
    if (s.length < 2)
      return [
        { time: e, pos: 0 },
        { time: n, pos: 1 },
      ];
    for (l = 0, a = s.length; l < a; ++l)
      ((d = s[l + 1]),
        (r = s[l - 1]),
        (u = s[l]),
        Math.round((d + r) / 2) !== u && o.push({ time: u, pos: l / (a - 1) }));
    return o;
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const e = this.getDataTimestamps(),
      n = this.getLabelTimestamps();
    return (
      e.length && n.length
        ? (t = this.normalize(e.concat(n)))
        : (t = e.length ? e : n),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (Mo(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets,
      n = this.getDecimalForPixel(t) / e.factor - e.end;
    return Mo(this._table, n * this._tableRange + this._minPos, !0);
  }
}
_a.id = "timeseries";
_a.defaults = Hs.defaults;
var Dm = Object.freeze({
  __proto__: null,
  CategoryScale: Wo,
  LinearScale: pa,
  LogarithmicScale: ma,
  RadialLinearScale: Ws,
  TimeScale: Hs,
  TimeSeriesScale: _a,
});
const Rm = [mp, A0, dm, Dm];
nl.register(...Rm);
function lc(i, t, e) {
  const n = i.slice();
  return ((n[48] = t[e]), n);
}
function ac(i, t, e) {
  const n = i.slice();
  return ((n[48] = t[e]), n);
}
function Om(i) {
  let t;
  return {
    c() {
      t = v("$0");
    },
    m(e, n) {
      A(e, t, n);
    },
    p: be,
    d(e) {
      e && M(t);
    },
  };
}
function Fm(i) {
  let t =
      (i[6].totalReceived || 0).toLocaleString(i[7].lang, {
        style: "currency",
        currency: i[7].currency,
        minimumFractionDigits: 0,
      }) + "",
    e;
  return {
    c() {
      e = v(t);
    },
    m(n, s) {
      A(n, e, s);
    },
    p(n, s) {
      s[0] & 192 &&
        t !==
          (t =
            (n[6].totalReceived || 0).toLocaleString(n[7].lang, {
              style: "currency",
              currency: n[7].currency,
              minimumFractionDigits: 0,
            }) + "") &&
        L(e, t);
    },
    d(n) {
      n && M(e);
    },
  };
}
function Em(i) {
  let t;
  return {
    c() {
      t = v("$0");
    },
    m(e, n) {
      A(e, t, n);
    },
    p: be,
    d(e) {
      e && M(t);
    },
  };
}
function Im(i) {
  let t =
      (i[6].totalUsed || 0).toLocaleString(i[7].lang, {
        style: "currency",
        currency: i[7].currency,
        minimumFractionDigits: 0,
      }) + "",
    e;
  return {
    c() {
      e = v(t);
    },
    m(n, s) {
      A(n, e, s);
    },
    p(n, s) {
      s[0] & 192 &&
        t !==
          (t =
            (n[6].totalUsed || 0).toLocaleString(n[7].lang, {
              style: "currency",
              currency: n[7].currency,
              minimumFractionDigits: 0,
            }) + "") &&
        L(e, t);
    },
    d(n) {
      n && M(e);
    },
  };
}
function Bm(i) {
  let t,
    e,
    n,
    s,
    o = i[5].no_transactions + "",
    l;
  return {
    c() {
      ((t = h("div")),
        (e = h("i")),
        (n = x()),
        (s = h("p")),
        (l = v(o)),
        f(e, "class", "fas fa-receipt text-white/30 text-3xl mb-3"),
        f(s, "class", "text-white/60"),
        f(t, "class", "text-center py-8"));
    },
    m(a, r) {
      (A(a, t, r), c(t, e), c(t, n), c(t, s), c(s, l));
    },
    p(a, r) {
      r[0] & 32 && o !== (o = a[5].no_transactions + "") && L(l, o);
    },
    d(a) {
      a && M(t);
    },
  };
}
function $m(i) {
  let t,
    e,
    n,
    s = i[5].see_all + "",
    o,
    l,
    a,
    r = xe(i[4].transactions.slice(0, 6)),
    u = [];
  for (let d = 0; d < r.length; d += 1) u[d] = rc(ac(i, r, d));
  return {
    c() {
      for (let d = 0; d < u.length; d += 1) u[d].c();
      ((t = x()),
        (e = h("div")),
        (n = h("button")),
        (o = v(s)),
        f(n, "class", "action-button w-full"),
        f(e, "class", "pt-4"));
    },
    m(d, p) {
      for (let m = 0; m < u.length; m += 1) u[m] && u[m].m(d, p);
      (A(d, t, p),
        A(d, e, p),
        c(e, n),
        c(n, o),
        l || ((a = ft(n, "click", i[31])), (l = !0)));
    },
    p(d, p) {
      if (p[0] & 176) {
        r = xe(d[4].transactions.slice(0, 6));
        let m;
        for (m = 0; m < r.length; m += 1) {
          const _ = ac(d, r, m);
          u[m]
            ? u[m].p(_, p)
            : ((u[m] = rc(_)), u[m].c(), u[m].m(t.parentNode, t));
        }
        for (; m < u.length; m += 1) u[m].d(1);
        u.length = r.length;
      }
      p[0] & 32 && s !== (s = d[5].see_all + "") && L(o, s);
    },
    d(d) {
      (d && (M(t), M(e)), ns(u, d), (l = !1), a());
    },
  };
}
function rc(i) {
  let t,
    e,
    n,
    s = i[48].description + "",
    o,
    l,
    a,
    r = i[5].transaction + "",
    u,
    d,
    p,
    m,
    _ = i[48].isIncome ? "+" : "-",
    g,
    b,
    w =
      (i[48].amount || 0).toLocaleString(i[7].lang, {
        style: "currency",
        currency: i[7].currency,
        minimumFractionDigits: 0,
      }) + "",
    y,
    S;
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("p")),
        (o = v(s)),
        (l = x()),
        (a = h("p")),
        (u = v(r)),
        (d = x()),
        (p = h("div")),
        (m = h("span")),
        (g = v(_)),
        (b = x()),
        (y = v(w)),
        f(n, "class", "text-white/90 text-sm font-medium truncate"),
        f(a, "class", "text-white/50 text-xs"),
        f(e, "class", "flex-1"),
        f(
          m,
          "class",
          (S = `font-semibold ${i[48].isIncome ? "text-blue-400" : "text-orange-400"}`),
        ),
        f(p, "class", "text-right"),
        f(
          t,
          "class",
          "flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors",
        ));
    },
    m(k, C) {
      (A(k, t, C),
        c(t, e),
        c(e, n),
        c(n, o),
        c(e, l),
        c(e, a),
        c(a, u),
        c(t, d),
        c(t, p),
        c(p, m),
        c(m, g),
        c(m, b),
        c(m, y));
    },
    p(k, C) {
      (C[0] & 16 && s !== (s = k[48].description + "") && L(o, s),
        C[0] & 32 && r !== (r = k[5].transaction + "") && L(u, r),
        C[0] & 16 && _ !== (_ = k[48].isIncome ? "+" : "-") && L(g, _),
        C[0] & 144 &&
          w !==
            (w =
              (k[48].amount || 0).toLocaleString(k[7].lang, {
                style: "currency",
                currency: k[7].currency,
                minimumFractionDigits: 0,
              }) + "") &&
          L(y, w),
        C[0] & 16 &&
          S !==
            (S = `font-semibold ${k[48].isIncome ? "text-blue-400" : "text-orange-400"}`) &&
          f(m, "class", S));
    },
    d(k) {
      k && M(t);
    },
  };
}
function zm(i) {
  let t,
    e,
    n,
    s,
    o = i[5].no_unpaid_bills + "",
    l;
  return {
    c() {
      ((t = h("div")),
        (e = h("i")),
        (n = x()),
        (s = h("p")),
        (l = v(o)),
        f(e, "class", "fas fa-check-circle text-green-400 text-3xl mb-3"),
        f(s, "class", "text-white/60"),
        f(t, "class", "text-center py-8"));
    },
    m(a, r) {
      (A(a, t, r), c(t, e), c(t, n), c(t, s), c(s, l));
    },
    p(a, r) {
      r[0] & 32 && o !== (o = a[5].no_unpaid_bills + "") && L(l, o);
    },
    d(a) {
      a && M(t);
    },
  };
}
function Nm(i) {
  let t = [],
    e = new Map(),
    n,
    s,
    o,
    l = i[5].see_all + "",
    a,
    r,
    u,
    d = xe(i[8].slice(0, 4));
  const p = (m) => m[48].id;
  for (let m = 0; m < d.length; m += 1) {
    let _ = lc(i, d, m),
      g = p(_);
    e.set(g, (t[m] = uc(g, _)));
  }
  return {
    c() {
      for (let m = 0; m < t.length; m += 1) t[m].c();
      ((n = x()),
        (s = h("div")),
        (o = h("button")),
        (a = v(l)),
        f(o, "class", "action-button w-full"),
        f(s, "class", "pt-4"));
    },
    m(m, _) {
      for (let g = 0; g < t.length; g += 1) t[g] && t[g].m(m, _);
      (A(m, n, _),
        A(m, s, _),
        c(s, o),
        c(o, a),
        r || ((u = ft(o, "click", i[32])), (r = !0)));
    },
    p(m, _) {
      (_[0] & 384 &&
        ((d = xe(m[8].slice(0, 4))),
        (t = $s(t, _, p, 1, m, d, e, n.parentNode, Md, uc, n, lc))),
        _[0] & 32 && l !== (l = m[5].see_all + "") && L(a, l));
    },
    d(m) {
      m && (M(n), M(s));
      for (let _ = 0; _ < t.length; _ += 1) t[_].d(m);
      ((r = !1), u());
    },
  };
}
function cc(i) {
  let t,
    e,
    n,
    s,
    o = i[48].description + "",
    l,
    a,
    r,
    u,
    d = i[48].id + "",
    p,
    m,
    _,
    g = i[48].isIncome ? "+" : "-",
    b,
    w,
    y =
      (i[48].amount || 0).toLocaleString(i[7].lang, {
        style: "currency",
        currency: i[7].currency,
        minimumFractionDigits: 0,
      }) + "",
    S,
    k,
    C,
    P,
    T,
    R = i[48].timeAgo + "",
    F,
    D,
    I,
    W = i[48].date + "",
    N;
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("p")),
        (l = v(o)),
        (a = x()),
        (r = h("p")),
        (u = v("#")),
        (p = v(d)),
        (m = x()),
        (_ = h("span")),
        (b = v(g)),
        (w = x()),
        (S = v(y)),
        (C = x()),
        (P = h("div")),
        (T = h("span")),
        (F = v(R)),
        (D = x()),
        (I = h("span")),
        (N = v(W)),
        f(s, "class", "text-white/90 font-medium text-sm"),
        f(r, "class", "text-white/50 text-xs"),
        f(n, "class", "flex-1"),
        f(
          _,
          "class",
          (k = `font-semibold text-sm ${i[48].isIncome ? "text-blue-400" : "text-orange-400"}`),
        ),
        f(e, "class", "flex justify-between items-start mb-2"),
        f(T, "class", "text-white/50 text-xs"),
        f(I, "class", "text-white/50 text-xs"),
        f(P, "class", "flex items-center justify-between"),
        f(
          t,
          "class",
          "p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors",
        ));
    },
    m(O, V) {
      (A(O, t, V),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, l),
        c(n, a),
        c(n, r),
        c(r, u),
        c(r, p),
        c(e, m),
        c(e, _),
        c(_, b),
        c(_, w),
        c(_, S),
        c(t, C),
        c(t, P),
        c(P, T),
        c(T, F),
        c(P, D),
        c(P, I),
        c(I, N));
    },
    p(O, V) {
      (V[0] & 256 && o !== (o = O[48].description + "") && L(l, o),
        V[0] & 256 && d !== (d = O[48].id + "") && L(p, d),
        V[0] & 256 && g !== (g = O[48].isIncome ? "+" : "-") && L(b, g),
        V[0] & 384 &&
          y !==
            (y =
              (O[48].amount || 0).toLocaleString(O[7].lang, {
                style: "currency",
                currency: O[7].currency,
                minimumFractionDigits: 0,
              }) + "") &&
          L(S, y),
        V[0] & 256 &&
          k !==
            (k = `font-semibold text-sm ${O[48].isIncome ? "text-blue-400" : "text-orange-400"}`) &&
          f(_, "class", k),
        V[0] & 256 && R !== (R = O[48].timeAgo + "") && L(F, R),
        V[0] & 256 && W !== (W = O[48].date + "") && L(N, W));
    },
    d(O) {
      O && M(t);
    },
  };
}
function uc(i, t) {
  let e,
    n,
    s = !t[48].isPaid && cc(t);
  return {
    key: i,
    first: null,
    c() {
      ((e = nn()), s && s.c(), (n = nn()), (this.first = e));
    },
    m(o, l) {
      (A(o, e, l), s && s.m(o, l), A(o, n, l));
    },
    p(o, l) {
      ((t = o),
        t[48].isPaid
          ? s && (s.d(1), (s = null))
          : s
            ? s.p(t, l)
            : ((s = cc(t)), s.c(), s.m(n.parentNode, n)));
    },
    d(o) {
      (o && (M(e), M(n)), s && s.d(o));
    },
  };
}
function dc(i) {
  let t,
    e,
    n,
    s,
    o,
    l,
    a,
    r = i[5].transfer_money + "",
    u,
    d,
    p,
    m,
    _,
    g,
    b = i[5].payment_method + "",
    w,
    y,
    S,
    k,
    C,
    P,
    T,
    R,
    F,
    D,
    I = i[5].id + "",
    W,
    N,
    O,
    V,
    j,
    U,
    $,
    nt,
    K = i[5].amount + "",
    Z,
    et,
    lt,
    J,
    Q,
    q,
    ct,
    G,
    X,
    tt,
    H = i[5].cancel + "",
    st,
    dt,
    Y,
    z,
    B = i[5].confirm + "",
    wt,
    ot,
    ut,
    gt,
    It,
    Ut,
    Nt,
    Ct = i[2] && fc(i),
    Tt = (i[10].contactType === "phone" || i[10].contactType === "id") && hc(i);
  return (
    (It = Qc(i[34][0])),
    {
      c() {
        ((t = h("div")),
          (e = h("div")),
          (n = h("div")),
          (s = h("div")),
          (o = h("div")),
          (o.innerHTML =
            '<i class="fas fa-exchange-alt text-blue-400 text-xl"></i>'),
          (l = x()),
          (a = h("h2")),
          (u = v(r)),
          (d = x()),
          (p = h("button")),
          (p.innerHTML = '<i class="fas fa-times text-white/60"></i>'),
          (m = x()),
          (_ = h("div")),
          (g = h("span")),
          (w = v(b)),
          (y = x()),
          (S = h("div")),
          Ct && Ct.c(),
          (k = x()),
          (C = h("label")),
          (P = h("input")),
          (T = x()),
          (R = h("i")),
          (F = x()),
          (D = h("span")),
          (W = v(I)),
          (N = x()),
          (O = h("div")),
          (O.innerHTML =
            '<i class="fa-duotone fa-check-circle text-blue-400"></i>'),
          (V = x()),
          Tt && Tt.c(),
          (j = x()),
          (U = h("div")),
          ($ = h("label")),
          (nt = h("i")),
          (Z = v(K)),
          (et = x()),
          (lt = h("div")),
          (J = h("input")),
          (Q = x()),
          (q = h("i")),
          (ct = x()),
          (G = h("div")),
          (X = h("button")),
          (tt = h("i")),
          (st = v(H)),
          (dt = x()),
          (Y = h("button")),
          (z = h("i")),
          (wt = v(B)),
          f(
            o,
            "class",
            "w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center",
          ),
          f(a, "class", "text-2xl font-bold text-white"),
          f(s, "class", "flex items-center space-x-3"),
          f(
            p,
            "class",
            "w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors",
          ),
          f(n, "class", "flex items-center justify-between mb-6"),
          f(g, "class", "block text-white/80 font-medium mb-3"),
          f(P, "type", "radio"),
          f(P, "name", "payment"),
          (P.__value = "id"),
          ce(P, P.__value),
          f(P, "class", "hidden peer"),
          f(R, "class", "fa-duotone fa-id-badge text-lg text-blue-400 mr-3"),
          f(D, "class", "text-white font-bold"),
          f(O, "class", "ml-auto hidden peer-checked:block"),
          f(
            C,
            "class",
            "flex items-center cursor-pointer bg-gray-700/50 rounded-lg p-3 border border-gray-600/20 hover:border-blue-400 transition duration-300",
          ),
          f(S, "class", "space-y-3"),
          f(_, "class", "mb-6"),
          f(nt, "class", "fa-duotone fa-money-bill-wave text-blue-400 mr-2"),
          f($, "for", "transfer-amount"),
          f($, "class", "block text-gray-400 mb-2"),
          f(J, "id", "transfer-amount"),
          f(J, "type", "number"),
          f(J, "min", "1"),
          f(
            J,
            "class",
            "w-full p-3 bg-gray-700/50 text-white pr-10 border border-blue-200/10 rounded-lg focus:outline-none focus:border-blue-400/50 transition-colors duration-500",
          ),
          f(
            q,
            "class",
            "fa-duotone fa-dollar-sign absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400",
          ),
          f(lt, "class", "relative"),
          f(U, "class", "mb-6"),
          f(tt, "class", "fas fa-times text-red-400 mr-2"),
          f(
            X,
            "class",
            "flex items-center justify-center px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-colors text-red-400 font-medium",
          ),
          f(z, "class", "fas fa-check text-blue-400 mr-2"),
          f(
            Y,
            "class",
            "flex items-center justify-center px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-colors text-blue-400 font-medium",
          ),
          f(G, "class", "flex justify-between items-center mt-6"),
          f(e, "class", "modern-card p-8 w-full max-w-md mx-4"),
          f(
            t,
            "class",
            "modal-backdrop fixed inset-0 flex items-center justify-center z-50",
          ),
          It.p(P));
      },
      m(vt, xt) {
        (A(vt, t, xt),
          c(t, e),
          c(e, n),
          c(n, s),
          c(s, o),
          c(s, l),
          c(s, a),
          c(a, u),
          c(n, d),
          c(n, p),
          c(e, m),
          c(e, _),
          c(_, g),
          c(g, w),
          c(_, y),
          c(_, S),
          Ct && Ct.m(S, null),
          c(S, k),
          c(S, C),
          c(C, P),
          (P.checked = P.__value === i[10].contactType),
          c(C, T),
          c(C, R),
          c(C, F),
          c(C, D),
          c(D, W),
          c(C, N),
          c(C, O),
          c(e, V),
          Tt && Tt.m(e, null),
          c(e, j),
          c(e, U),
          c(U, $),
          c($, nt),
          c($, Z),
          c(U, et),
          c(U, lt),
          c(lt, J),
          ce(J, i[10].amount),
          c(lt, Q),
          c(lt, q),
          c(e, ct),
          c(e, G),
          c(G, X),
          c(X, tt),
          c(X, st),
          c(G, dt),
          c(G, Y),
          c(Y, z),
          c(Y, wt),
          (gt = !0),
          Ut ||
            ((Nt = [
              ft(p, "click", i[19]),
              ft(P, "change", i[35]),
              ft(J, "input", i[37]),
              ft(X, "click", i[19]),
              ft(Y, "click", i[38]),
            ]),
            (Ut = !0)));
      },
      p(vt, xt) {
        ((!gt || xt[0] & 32) &&
          r !== (r = vt[5].transfer_money + "") &&
          L(u, r),
          (!gt || xt[0] & 32) &&
            b !== (b = vt[5].payment_method + "") &&
            L(w, b),
          vt[2]
            ? Ct
              ? Ct.p(vt, xt)
              : ((Ct = fc(vt)), Ct.c(), Ct.m(S, k))
            : Ct && (Ct.d(1), (Ct = null)),
          xt[0] & 1024 && (P.checked = P.__value === vt[10].contactType),
          (!gt || xt[0] & 32) && I !== (I = vt[5].id + "") && L(W, I),
          vt[10].contactType === "phone" || vt[10].contactType === "id"
            ? Tt
              ? Tt.p(vt, xt)
              : ((Tt = hc(vt)), Tt.c(), Tt.m(e, j))
            : Tt && (Tt.d(1), (Tt = null)),
          (!gt || xt[0] & 32) && K !== (K = vt[5].amount + "") && L(Z, K),
          xt[0] & 1024 && ze(J.value) !== vt[10].amount && ce(J, vt[10].amount),
          (!gt || xt[0] & 32) && H !== (H = vt[5].cancel + "") && L(st, H),
          (!gt || xt[0] & 32) && B !== (B = vt[5].confirm + "") && L(wt, B));
      },
      i(vt) {
        gt ||
          (vt &&
            he(() => {
              gt &&
                (ut && ut.end(1),
                (ot = Te(e, En, { duration: 300, easing: ss })),
                ot.start());
            }),
          (gt = !0));
      },
      o(vt) {
        (ot && ot.invalidate(),
          vt && (ut = De(e, En, { duration: 250, easing: ss })),
          (gt = !1));
      },
      d(vt) {
        (vt && M(t),
          Ct && Ct.d(),
          Tt && Tt.d(),
          vt && ut && ut.end(),
          It.r(),
          (Ut = !1),
          Ce(Nt));
      },
    }
  );
}
function fc(i) {
  let t,
    e,
    n,
    s,
    o,
    l,
    a = i[5].phone_number + "",
    r,
    u,
    d,
    p,
    m,
    _;
  return (
    (p = Qc(i[34][0])),
    {
      c() {
        ((t = h("label")),
          (e = h("input")),
          (n = x()),
          (s = h("i")),
          (o = x()),
          (l = h("span")),
          (r = v(a)),
          (u = x()),
          (d = h("div")),
          (d.innerHTML =
            '<i class="fa-duotone fa-check-circle text-blue-400"></i>'),
          f(e, "type", "radio"),
          f(e, "name", "payment"),
          (e.__value = "phone"),
          ce(e, e.__value),
          f(e, "class", "hidden peer"),
          f(s, "class", "fa-duotone fa-phone text-lg text-blue-400 mr-3"),
          f(l, "class", "text-white font-bold"),
          f(d, "class", "ml-auto hidden peer-checked:block"),
          f(
            t,
            "class",
            "flex items-center p-4 bg-white/5 rounded-xl cursor-pointer border border-white/10 hover:border-white/20 transition-colors",
          ),
          p.p(e));
      },
      m(g, b) {
        (A(g, t, b),
          c(t, e),
          (e.checked = e.__value === i[10].contactType),
          c(t, n),
          c(t, s),
          c(t, o),
          c(t, l),
          c(l, r),
          c(t, u),
          c(t, d),
          m || ((_ = ft(e, "change", i[33])), (m = !0)));
      },
      p(g, b) {
        (b[0] & 1024 && (e.checked = e.__value === g[10].contactType),
          b[0] & 32 && a !== (a = g[5].phone_number + "") && L(r, a));
      },
      d(g) {
        (g && M(t), p.r(), (m = !1), _());
      },
    }
  );
}
function hc(i) {
  let t, e, n, s, o, l, a, r, u, d, p;
  function m(b, w) {
    return b[2] ? Wm : jm;
  }
  let _ = m(i),
    g = _(i);
  return {
    c() {
      ((t = h("div")),
        (e = h("label")),
        (n = h("i")),
        (s = x()),
        g.c(),
        (o = x()),
        (l = h("div")),
        (a = h("input")),
        (r = x()),
        (u = h("i")),
        f(n, "class", "fa-duotone fa-id-card text-blue-400 mr-2"),
        f(e, "for", "transfer-id-phone"),
        f(e, "class", "block text-gray-400 mb-2"),
        f(a, "id", "transfer-id-phone"),
        f(a, "type", "number"),
        f(a, "min", "1"),
        f(
          a,
          "class",
          "w-full p-3 bg-gray-700/50 text-white pr-10 border border-blue-200/10 rounded-lg focus:outline-none focus:border-blue-400/50 transition-colors duration-500",
        ),
        f(
          u,
          "class",
          "fa-duotone fa-user absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400",
        ),
        f(l, "class", "relative"),
        f(t, "class", "mb-6"));
    },
    m(b, w) {
      (A(b, t, w),
        c(t, e),
        c(e, n),
        c(e, s),
        g.m(e, null),
        c(t, o),
        c(t, l),
        c(l, a),
        ce(a, i[10].idOrPhone),
        c(l, r),
        c(l, u),
        d || ((p = ft(a, "input", i[36])), (d = !0)));
    },
    p(b, w) {
      (_ === (_ = m(b)) && g
        ? g.p(b, w)
        : (g.d(1), (g = _(b)), g && (g.c(), g.m(e, null))),
        w[0] & 1024 &&
          ze(a.value) !== b[10].idOrPhone &&
          ce(a, b[10].idOrPhone));
    },
    d(b) {
      (b && M(t), g.d(), (d = !1), p());
    },
  };
}
function jm(i) {
  let t = i[5].id + "",
    e;
  return {
    c() {
      e = v(t);
    },
    m(n, s) {
      A(n, e, s);
    },
    p(n, s) {
      s[0] & 32 && t !== (t = n[5].id + "") && L(e, t);
    },
    d(n) {
      n && M(e);
    },
  };
}
function Wm(i) {
  let t = i[5].id_or_phone_number + "",
    e;
  return {
    c() {
      e = v(t);
    },
    m(n, s) {
      A(n, e, s);
    },
    p(n, s) {
      s[0] & 32 && t !== (t = n[5].id_or_phone_number + "") && L(e, t);
    },
    d(n) {
      n && M(e);
    },
  };
}
function pc(i) {
  let t,
    e,
    n,
    s,
    o,
    l,
    a = i[5].are_you_sure + "",
    r,
    u,
    d,
    p = i[5].confirm_pay_all_bills + "",
    m,
    _,
    g,
    b,
    w,
    y = i[5].cancel + "",
    S,
    k,
    C,
    P,
    T = i[5].confirm + "",
    R,
    F,
    D,
    I,
    W,
    N;
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("i")),
        (o = x()),
        (l = h("h2")),
        (r = v(a)),
        (u = x()),
        (d = h("p")),
        (m = v(p)),
        (_ = x()),
        (g = h("div")),
        (b = h("button")),
        (w = h("i")),
        (S = v(y)),
        (k = x()),
        (C = h("button")),
        (P = h("i")),
        (R = v(T)),
        f(
          s,
          "class",
          "fa-duotone fa-question-circle text-3xl text-blue-400 mr-3",
        ),
        f(l, "class", "text-2xl text-blue-200 font-bold"),
        f(n, "class", "flex items-center mb-4"),
        f(d, "class", "text-gray-300 mb-6"),
        f(w, "class", "fas fa-times text-red-400 mr-2"),
        f(
          b,
          "class",
          "flex items-center justify-center px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-colors text-red-400 font-medium",
        ),
        f(P, "class", "fas fa-check text-blue-400 mr-2"),
        f(
          C,
          "class",
          "flex items-center justify-center px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-colors text-blue-400 font-medium",
        ),
        f(g, "class", "flex justify-between items-center mt-6"),
        f(e, "class", "modern-card p-8 w-full max-w-md mx-4"),
        f(
          t,
          "class",
          "modal-backdrop fixed inset-0 flex items-center justify-center z-50",
        ));
    },
    m(O, V) {
      (A(O, t, V),
        c(t, e),
        c(e, n),
        c(n, s),
        c(n, o),
        c(n, l),
        c(l, r),
        c(e, u),
        c(e, d),
        c(d, m),
        c(e, _),
        c(e, g),
        c(g, b),
        c(b, w),
        c(b, S),
        c(g, k),
        c(g, C),
        c(C, P),
        c(C, R),
        (I = !0),
        W || ((N = [ft(b, "click", i[39]), ft(C, "click", i[40])]), (W = !0)));
    },
    p(O, V) {
      ((!I || V[0] & 32) && a !== (a = O[5].are_you_sure + "") && L(r, a),
        (!I || V[0] & 32) &&
          p !== (p = O[5].confirm_pay_all_bills + "") &&
          L(m, p),
        (!I || V[0] & 32) && y !== (y = O[5].cancel + "") && L(S, y),
        (!I || V[0] & 32) && T !== (T = O[5].confirm + "") && L(R, T));
    },
    i(O) {
      I ||
        (O &&
          he(() => {
            I &&
              (D && D.end(1),
              (F = Te(e, En, { duration: 250, easing: ss })),
              F.start());
          }),
        (I = !0));
    },
    o(O) {
      (F && F.invalidate(),
        O && (D = De(e, En, { duration: 250, easing: ss })),
        (I = !1));
    },
    d(O) {
      (O && M(t), O && D && D.end(), (W = !1), Ce(N));
    },
  };
}
function Hm(i) {
  let t,
    e,
    n,
    s,
    o = i[5].overview + "",
    l,
    a,
    r,
    u = i[5].financial_summary_quick_actions + "",
    d,
    p,
    m,
    _,
    g,
    b,
    w,
    y,
    S = i[5].live + "",
    k,
    C,
    P,
    T,
    R,
    F,
    D,
    I = i[5].transfer_money + "",
    W,
    N,
    O,
    V = i[5].easy_transfer + "",
    j,
    U,
    $,
    nt,
    K,
    Z,
    et = i[5].pay_bills + "",
    lt,
    J,
    Q,
    q = i[5].pay_pending_bills + "",
    ct,
    G,
    X,
    tt,
    H,
    st,
    dt = i[5].withdraw_all_money + "",
    Y,
    z,
    B,
    wt = i[5].withdraw_all_from_account + "",
    ot,
    ut,
    gt,
    It,
    Ut,
    Nt,
    Ct = i[5].deposit_cash + "",
    Tt,
    vt,
    xt,
    ae = i[5].deposit_all_cash + "",
    Zt,
    ue,
    Bt,
    zt,
    de,
    Vt,
    se,
    At,
    jt,
    Ht = i[5].weekly_summary + "",
    Dt,
    Gt,
    at,
    E,
    pt,
    bt,
    kt,
    Lt,
    $t = i[5].income + "",
    Ft,
    _e,
    we,
    Me,
    Jt,
    te,
    Re,
    ye,
    Rt,
    Se = i[5].expenses + "",
    Ae,
    Qt,
    Pt,
    rt,
    ht,
    _t,
    oe,
    Xt,
    Oe,
    Ii = i[5].report + "",
    hi,
    on,
    Bi,
    yn,
    pi,
    $i,
    Ge,
    wn,
    zn,
    xn,
    zi = i[5].latest_transactions + "",
    mi,
    ln,
    Ni,
    ji,
    an = i[4].transactions.length + "",
    Nn,
    rn,
    cn,
    jn,
    Wi,
    ni,
    Xe,
    _i,
    kn,
    Hi,
    un = i[5].unpaid_bills + "",
    Wn,
    Vi,
    Ui,
    Yi,
    Xi = i[8].length + "",
    Hn,
    Mn,
    gi,
    Vn,
    Qe,
    bi,
    vi,
    Sn;
  function cs(yt, Yt) {
    return yt[6].totalReceived != null ? Fm : Om;
  }
  let Ki = cs(i),
    Ve = Ki(i);
  function Un(yt, Yt) {
    return yt[6].totalUsed != null ? Im : Em;
  }
  let An = Un(i),
    Fe = An(i);
  function Ln(yt, Yt) {
    return yt[4].transactions.length > 0 ? $m : Bm;
  }
  let si = Ln(i),
    Ne = si(i);
  function Pn(yt, Yt) {
    return yt[8].length > 0 ? Nm : zm;
  }
  let qi = Pn(i),
    Ue = qi(i),
    Le = i[9] && dc(i),
    ge = i[11] && pc(i);
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("h1")),
        (l = v(o)),
        (a = x()),
        (r = h("p")),
        (d = v(u)),
        (p = x()),
        (m = h("div")),
        (_ = h("div")),
        (g = h("div")),
        (b = h("img")),
        (w = x()),
        (y = h("span")),
        (k = v(S)),
        (C = x()),
        (P = h("div")),
        (T = h("div")),
        (R = h("div")),
        (R.innerHTML =
          '<div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors"><i class="fas fa-exchange-alt text-blue-400 text-xl"></i></div> <i class="fas fa-arrow-right text-white/30 group-hover:text-white/60 transition-colors"></i>'),
        (F = x()),
        (D = h("h3")),
        (W = v(I)),
        (N = x()),
        (O = h("p")),
        (j = v(V)),
        (U = x()),
        ($ = h("div")),
        (nt = h("div")),
        (nt.innerHTML =
          '<div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors"><i class="fas fa-file-invoice-dollar text-blue-400 text-xl"></i></div> <i class="fas fa-arrow-right text-white/30 group-hover:text-white/60 transition-colors"></i>'),
        (K = x()),
        (Z = h("h3")),
        (lt = v(et)),
        (J = x()),
        (Q = h("p")),
        (ct = v(q)),
        (G = x()),
        (X = h("div")),
        (tt = h("div")),
        (tt.innerHTML =
          '<div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors"><i class="fas fa-arrow-down text-blue-400 text-xl"></i></div> <i class="fas fa-arrow-right text-white/30 group-hover:text-white/60 transition-colors"></i>'),
        (H = x()),
        (st = h("h3")),
        (Y = v(dt)),
        (z = x()),
        (B = h("p")),
        (ot = v(wt)),
        (ut = x()),
        (gt = h("div")),
        (It = h("div")),
        (It.innerHTML =
          '<div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors"><i class="fas fa-arrow-up text-blue-400 text-xl"></i></div> <i class="fas fa-arrow-right text-white/30 group-hover:text-white/60 transition-colors"></i>'),
        (Ut = x()),
        (Nt = h("h3")),
        (Tt = v(Ct)),
        (vt = x()),
        (xt = h("p")),
        (Zt = v(ae)),
        (ue = x()),
        (Bt = h("div")),
        (zt = h("div")),
        (de = h("div")),
        (Vt = h("div")),
        (se = h("div")),
        (se.innerHTML = '<i class="fas fa-calendar-week text-blue-400"></i>'),
        (At = x()),
        (jt = h("h3")),
        (Dt = v(Ht)),
        (Gt = x()),
        (at = h("div")),
        (E = h("div")),
        (pt = h("div")),
        (bt = h("div")),
        (bt.innerHTML =
          '<i class="fas fa-arrow-up text-blue-400 text-sm"></i>'),
        (kt = x()),
        (Lt = h("span")),
        (Ft = v($t)),
        (_e = x()),
        (we = h("span")),
        Ve.c(),
        (Me = x()),
        (Jt = h("div")),
        (te = h("div")),
        (Re = h("div")),
        (Re.innerHTML =
          '<i class="fas fa-arrow-down text-orange-400 text-sm"></i>'),
        (ye = x()),
        (Rt = h("span")),
        (Ae = v(Se)),
        (Qt = x()),
        (Pt = h("span")),
        Fe.c(),
        (rt = x()),
        (ht = h("div")),
        (_t = h("div")),
        (oe = h("i")),
        (Xt = x()),
        (Oe = h("span")),
        (hi = v(Ii)),
        (on = x()),
        (Bi = h("canvas")),
        (yn = x()),
        (pi = h("div")),
        ($i = h("div")),
        (Ge = h("div")),
        (wn = h("div")),
        (wn.innerHTML = '<i class="fas fa-history text-blue-400"></i>'),
        (zn = x()),
        (xn = h("h3")),
        (mi = v(zi)),
        (ln = x()),
        (Ni = h("div")),
        (ji = h("span")),
        (Nn = v(an)),
        (rn = x()),
        (cn = h("div")),
        Ne.c(),
        (jn = x()),
        (Wi = h("div")),
        (ni = h("div")),
        (Xe = h("div")),
        (_i = h("div")),
        (_i.innerHTML =
          '<i class="fas fa-exclamation-triangle text-yellow-400"></i>'),
        (kn = x()),
        (Hi = h("h3")),
        (Wn = v(un)),
        (Vi = x()),
        (Ui = h("div")),
        (Yi = h("span")),
        (Hn = v(Xi)),
        (Mn = x()),
        (gi = h("div")),
        Ue.c(),
        (Vn = x()),
        Le && Le.c(),
        (Qe = x()),
        ge && ge.c(),
        (bi = nn()),
        f(s, "class", "text-3xl font-bold text-white mb-2"),
        f(r, "class", "text-white/60"),
        f(b, "src", "../web/src/assets/images/zona-norte-logo.png"),
        f(b, "class", "object-contain"),
        f(b, "style", "height: 6.5rem"),
        f(b, "alt", "Zona Norte"),
        f(y, "class", "hidden"),
        f(g, "class", ""),
        f(_, "class", ""),
        f(m, "class", "flex items-center space-x-4"),
        f(e, "class", "flex items-center justify-between mb-8"),
        f(R, "class", "flex items-center justify-between mb-4"),
        f(D, "class", "text-lg font-semibold text-white mb-2"),
        f(O, "class", "text-sm text-white/60"),
        f(T, "class", "modern-card modern-card-hover p-6 group cursor-pointer"),
        f(T, "role", "button"),
        f(T, "tabindex", "0"),
        f(nt, "class", "flex items-center justify-between mb-4"),
        f(Z, "class", "text-lg font-semibold text-white mb-2"),
        f(Q, "class", "text-sm text-white/60"),
        f($, "class", "modern-card modern-card-hover p-6 group cursor-pointer"),
        f($, "role", "button"),
        f($, "tabindex", "0"),
        f(tt, "class", "flex items-center justify-between mb-4"),
        f(st, "class", "text-lg font-semibold text-white mb-2"),
        f(B, "class", "text-sm text-white/60"),
        f(X, "class", "modern-card modern-card-hover p-6 group cursor-pointer"),
        f(X, "role", "button"),
        f(X, "tabindex", "0"),
        f(It, "class", "flex items-center justify-between mb-4"),
        f(Nt, "class", "text-lg font-semibold text-white mb-2"),
        f(xt, "class", "text-sm text-white/60"),
        f(
          gt,
          "class",
          "modern-card modern-card-hover p-6 group cursor-pointer",
        ),
        f(gt, "role", "button"),
        f(gt, "tabindex", "0"),
        f(
          P,
          "class",
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
        ),
        f(
          se,
          "class",
          "w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center",
        ),
        f(jt, "class", "text-xl font-semibold text-white"),
        f(Vt, "class", "flex items-center space-x-3"),
        f(de, "class", "flex items-center justify-between mb-6"),
        f(
          bt,
          "class",
          "w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center",
        ),
        f(Lt, "class", "text-white/80"),
        f(pt, "class", "flex items-center space-x-3"),
        f(we, "class", "text-blue-400 font-semibold"),
        f(
          E,
          "class",
          "flex items-center justify-between p-4 bg-white/5 rounded-xl",
        ),
        f(
          Re,
          "class",
          "w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center",
        ),
        f(Rt, "class", "text-white/80"),
        f(te, "class", "flex items-center space-x-3"),
        f(Pt, "class", "text-orange-400 font-semibold"),
        f(
          Jt,
          "class",
          "flex items-center justify-between p-4 bg-white/5 rounded-xl",
        ),
        f(oe, "class", "fas fa-chart-bar text-white/60 mr-2"),
        f(Oe, "class", "text-white/80 text-sm"),
        f(_t, "class", "flex items-center mb-3"),
        f(Bi, "class", "w-full h-32"),
        f(ht, "class", "mt-6 bg-white/5 rounded-xl p-4"),
        f(at, "class", "space-y-4"),
        f(zt, "class", "modern-card p-6"),
        f(
          wn,
          "class",
          "w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center",
        ),
        f(xn, "class", "text-xl font-semibold text-white"),
        f(Ge, "class", "flex items-center space-x-3"),
        f(ji, "class", "text-white/80 text-sm"),
        f(Ni, "class", "bg-white/10 rounded-full px-3 py-1"),
        f($i, "class", "flex items-center justify-between mb-6"),
        f(cn, "class", "space-y-3 max-h-80 overflow-y-auto"),
        f(pi, "class", "modern-card p-6"),
        f(
          _i,
          "class",
          "w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center",
        ),
        f(Hi, "class", "text-xl font-semibold text-white"),
        f(Xe, "class", "flex items-center space-x-3"),
        f(Yi, "class", "text-white/80 text-sm"),
        f(Ui, "class", "bg-white/10 rounded-full px-3 py-1"),
        f(ni, "class", "flex items-center justify-between mb-6"),
        f(gi, "class", "space-y-3 max-h-80 overflow-y-auto"),
        f(Wi, "class", "modern-card p-6"),
        f(Bt, "class", "grid grid-cols-1 lg:grid-cols-3 gap-6"),
        f(t, "class", "h-full flex flex-col p-8 overflow-y-auto"));
    },
    m(yt, Yt) {
      (A(yt, t, Yt),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, l),
        c(n, a),
        c(n, r),
        c(r, d),
        c(e, p),
        c(e, m),
        c(m, _),
        c(_, g),
        c(g, b),
        c(g, w),
        c(g, y),
        c(y, k),
        c(t, C),
        c(t, P),
        c(P, T),
        c(T, R),
        c(T, F),
        c(T, D),
        c(D, W),
        c(T, N),
        c(T, O),
        c(O, j),
        c(P, U),
        c(P, $),
        c($, nt),
        c($, K),
        c($, Z),
        c(Z, lt),
        c($, J),
        c($, Q),
        c(Q, ct),
        c(P, G),
        c(P, X),
        c(X, tt),
        c(X, H),
        c(X, st),
        c(st, Y),
        c(X, z),
        c(X, B),
        c(B, ot),
        c(P, ut),
        c(P, gt),
        c(gt, It),
        c(gt, Ut),
        c(gt, Nt),
        c(Nt, Tt),
        c(gt, vt),
        c(gt, xt),
        c(xt, Zt),
        c(t, ue),
        c(t, Bt),
        c(Bt, zt),
        c(zt, de),
        c(de, Vt),
        c(Vt, se),
        c(Vt, At),
        c(Vt, jt),
        c(jt, Dt),
        c(zt, Gt),
        c(zt, at),
        c(at, E),
        c(E, pt),
        c(pt, bt),
        c(pt, kt),
        c(pt, Lt),
        c(Lt, Ft),
        c(E, _e),
        c(E, we),
        Ve.m(we, null),
        c(at, Me),
        c(at, Jt),
        c(Jt, te),
        c(te, Re),
        c(te, ye),
        c(te, Rt),
        c(Rt, Ae),
        c(Jt, Qt),
        c(Jt, Pt),
        Fe.m(Pt, null),
        c(at, rt),
        c(at, ht),
        c(ht, _t),
        c(_t, oe),
        c(_t, Xt),
        c(_t, Oe),
        c(Oe, hi),
        c(ht, on),
        c(ht, Bi),
        i[30](Bi),
        c(Bt, yn),
        c(Bt, pi),
        c(pi, $i),
        c($i, Ge),
        c(Ge, wn),
        c(Ge, zn),
        c(Ge, xn),
        c(xn, mi),
        c($i, ln),
        c($i, Ni),
        c(Ni, ji),
        c(ji, Nn),
        c(pi, rn),
        c(pi, cn),
        Ne.m(cn, null),
        c(Bt, jn),
        c(Bt, Wi),
        c(Wi, ni),
        c(ni, Xe),
        c(Xe, _i),
        c(Xe, kn),
        c(Xe, Hi),
        c(Hi, Wn),
        c(ni, Vi),
        c(ni, Ui),
        c(Ui, Yi),
        c(Yi, Hn),
        c(Wi, Mn),
        c(Wi, gi),
        Ue.m(gi, null),
        A(yt, Vn, Yt),
        Le && Le.m(yt, Yt),
        A(yt, Qe, Yt),
        ge && ge.m(yt, Yt),
        A(yt, bi, Yt),
        vi ||
          ((Sn = [
            ft(T, "click", i[18]),
            ft(T, "keyup", i[25]),
            ft($, "click", i[26]),
            ft($, "keyup", i[27]),
            ft(X, "keyup", Vm),
            ft(X, "click", i[28]),
            ft(gt, "keyup", Um),
            ft(gt, "click", i[29]),
          ]),
          (vi = !0)));
    },
    p(yt, Yt) {
      (Yt[0] & 32 && o !== (o = yt[5].overview + "") && L(l, o),
        Yt[0] & 32 &&
          u !== (u = yt[5].financial_summary_quick_actions + "") &&
          L(d, u),
        Yt[0] & 32 && S !== (S = yt[5].live + "") && L(k, S),
        Yt[0] & 32 && I !== (I = yt[5].transfer_money + "") && L(W, I),
        Yt[0] & 32 && V !== (V = yt[5].easy_transfer + "") && L(j, V),
        Yt[0] & 32 && et !== (et = yt[5].pay_bills + "") && L(lt, et),
        Yt[0] & 32 && q !== (q = yt[5].pay_pending_bills + "") && L(ct, q),
        Yt[0] & 32 && dt !== (dt = yt[5].withdraw_all_money + "") && L(Y, dt),
        Yt[0] & 32 &&
          wt !== (wt = yt[5].withdraw_all_from_account + "") &&
          L(ot, wt),
        Yt[0] & 32 && Ct !== (Ct = yt[5].deposit_cash + "") && L(Tt, Ct),
        Yt[0] & 32 && ae !== (ae = yt[5].deposit_all_cash + "") && L(Zt, ae),
        Yt[0] & 32 && Ht !== (Ht = yt[5].weekly_summary + "") && L(Dt, Ht),
        Yt[0] & 32 && $t !== ($t = yt[5].income + "") && L(Ft, $t),
        Ki === (Ki = cs(yt)) && Ve
          ? Ve.p(yt, Yt)
          : (Ve.d(1), (Ve = Ki(yt)), Ve && (Ve.c(), Ve.m(we, null))),
        Yt[0] & 32 && Se !== (Se = yt[5].expenses + "") && L(Ae, Se),
        An === (An = Un(yt)) && Fe
          ? Fe.p(yt, Yt)
          : (Fe.d(1), (Fe = An(yt)), Fe && (Fe.c(), Fe.m(Pt, null))),
        Yt[0] & 32 && Ii !== (Ii = yt[5].report + "") && L(hi, Ii),
        Yt[0] & 32 && zi !== (zi = yt[5].latest_transactions + "") && L(mi, zi),
        Yt[0] & 16 && an !== (an = yt[4].transactions.length + "") && L(Nn, an),
        si === (si = Ln(yt)) && Ne
          ? Ne.p(yt, Yt)
          : (Ne.d(1), (Ne = si(yt)), Ne && (Ne.c(), Ne.m(cn, null))),
        Yt[0] & 32 && un !== (un = yt[5].unpaid_bills + "") && L(Wn, un),
        Yt[0] & 256 && Xi !== (Xi = yt[8].length + "") && L(Hn, Xi),
        qi === (qi = Pn(yt)) && Ue
          ? Ue.p(yt, Yt)
          : (Ue.d(1), (Ue = qi(yt)), Ue && (Ue.c(), Ue.m(gi, null))),
        yt[9]
          ? Le
            ? (Le.p(yt, Yt), Yt[0] & 512 && Mt(Le, 1))
            : ((Le = dc(yt)), Le.c(), Mt(Le, 1), Le.m(Qe.parentNode, Qe))
          : Le &&
            (Ee(),
            Wt(Le, 1, 1, () => {
              Le = null;
            }),
            Ie()),
        yt[11]
          ? ge
            ? (ge.p(yt, Yt), Yt[0] & 2048 && Mt(ge, 1))
            : ((ge = pc(yt)), ge.c(), Mt(ge, 1), ge.m(bi.parentNode, bi))
          : ge &&
            (Ee(),
            Wt(ge, 1, 1, () => {
              ge = null;
            }),
            Ie()));
    },
    i(yt) {
      (Mt(Le), Mt(ge));
    },
    o(yt) {
      (Wt(Le), Wt(ge));
    },
    d(yt) {
      (yt && (M(t), M(Vn), M(Qe), M(bi)),
        Ve.d(),
        Fe.d(),
        i[30](null),
        Ne.d(),
        Ue.d(),
        Le && Le.d(yt),
        ge && ge.d(yt),
        (vi = !1),
        Ce(Sn));
    },
  };
}
const Vm = () => {},
  Um = () => {};
function Ym(i, t, e) {
  let n, s, o, l, a, r, u, d, p, m;
  (mt(i, li, (B) => e(5, (n = B))),
    mt(i, Fi, (B) => e(0, (s = B))),
    mt(i, qe, (B) => e(1, (o = B))),
    mt(i, El, (B) => e(24, (l = B))),
    mt(i, Zl, (B) => e(7, (r = B))));
  let _ = Oo;
  mt(i, _, (B) => e(8, (u = B)));
  let g = !1,
    b = Et(!1);
  mt(i, b, (B) => e(11, (m = B)));
  let w = Et(!1);
  mt(i, w, (B) => e(9, (d = B)));
  let y = Et({ idOrPhone: "", amount: 0, confirm: !1, contactType: "none" });
  mt(i, y, (B) => e(10, (p = B)));
  let S = Et({ totalReceived: 0, totalUsed: 0 });
  mt(i, S, (B) => e(6, (a = B)));
  let k, C;
  async function P() {
    try {
      const B = await qt("ps-banking:client:getWeeklySummary", {});
      B && S.set(B);
    } catch (B) {
      console.error(B);
    }
  }
  async function T() {
    try {
      const B = await qt("ps-banking:client:getMoneyTypes", {}),
        wt = B.find((ut) => ut.name === "bank"),
        ot = B.find((ut) => ut.name === "cash");
      (wt && qe.set(wt.amount), ot && Fi.set(ot.amount));
    } catch (B) {
      console.error(B);
    }
  }
  async function R() {
    (await qt("ps-banking:client:payAllBills", {}))
      ? (await I(),
        Ot(n.pay_all_bills_success, n.payment_completed, "money-bill"))
      : Ot(n.pay_all_bills_error, n.error, "circle-exclamation");
  }
  function F() {
    w.set(!0);
  }
  function D() {
    (w.set(!1),
      y.set({ idOrPhone: "", amount: 0, confirm: !1, contactType: "none" }));
  }
  async function I() {
    try {
      const B = await qt("ps-banking:client:getBills", {});
      Oo.set(B);
    } catch (B) {
      console.error(B);
    }
  }
  async function W() {
    try {
      const B = await qt("ps-banking:client:getHistory", {});
      El.set(B);
    } catch (B) {
      console.error(B);
    }
  }
  async function N(B, wt, ot) {
    try {
      const ut = await qt("ps-banking:client:transferMoney", {
        id: B,
        amount: wt,
        method: ot,
      });
      ut.success
        ? Ot(ut.message, n.payment_completed, "user")
        : Ot(ut.message, n.error, "user");
    } catch (ut) {
      console.error(ut);
    }
    (y.update((ut) => ((ut.confirm = !0), ut)),
      w.set(!1),
      y.set({ idOrPhone: "", amount: 0, confirm: !1, contactType: "none" }));
  }
  let O = { balance: o, cash: s, transactions: l };
  async function V() {
    try {
      (await qt("ps-banking:client:ATMwithdraw", { amount: o })) && $();
    } catch (B) {
      console.error(B);
    }
  }
  async function j() {
    try {
      (await qt("ps-banking:client:ATMdeposit", { amount: s })) && $();
    } catch (B) {
      console.error(B);
    }
  }
  function U() {
    C &&
      e(
        23,
        (k = new nl(C, {
          type: "bar",
          data: {
            labels: [(n && n.income) || "Income", (n && n.expenses) || "Expenses"],
            datasets: [
              {
                label: (n && n.weekly_summary) || "Weekly Summary",
                data: [0, 0],
                backgroundColor: ["#3b82f6", "#fb923c"],
              },
            ],
          },
          options: { responsive: !0, scales: { y: { beginAtZero: !0 } } },
        })),
      );
  }
  async function $() {
    (await I(), await W(), await P(), await T());
  }
  async function nt() {
    try {
      const B = await qt("ps-banking:client:phoneOption", {});
      e(2, (g = B));
    } catch (B) {
      console.error(B);
    }
  }
  sn(async () => {
    (U(), $(), $(), nt());
  });
  const K = [[]],
    Z = (B) => B.key === "Enter" && F(),
    et = () => b.set(!0),
    lt = (B) => B.key === "Enter" && b.set(!0),
    J = () => {
      o <= 0
        ? Ot(n.no_money_on_account, n.error, "credit-card")
        : (Ot(n.withdraw_all_success, n.success, "credit-card"),
          setTimeout(() => {
            V();
          }, 200));
    },
    Q = () => {
      s <= 0
        ? Ot(n.no_cash_on_you, n.error, "coins")
        : (Ot(n.deposit_all_success, n.success, "coins"),
          setTimeout(() => {
            j();
          }, 200));
    };
  function q(B) {
    Rl[B ? "unshift" : "push"](() => {
      ((C = B), e(3, C));
    });
  }
  const ct = () => {
      (As.set(!1), Ao.set(!1), pl.set(!1), ml.set(!1), $a.set(!1), _l.set(!1), Lo.set(!0), gl.set("history"));
    },
    G = () => {
      (As.set(!1), Lo.set(!1), pl.set(!1), ml.set(!1), $a.set(!1), _l.set(!1), Ao.set(!0), gl.set("bills"));
    };
  function X() {
    ((p.contactType = this.__value), y.set(p));
  }
  function tt() {
    ((p.contactType = this.__value), y.set(p));
  }
  function H() {
    ((p.idOrPhone = ze(this.value)), y.set(p));
  }
  function st() {
    ((p.amount = ze(this.value)), y.set(p));
  }
  const dt = async () => {
      N(p.idOrPhone, p.amount, p.contactType);
    },
    Y = () => {
      b.set(!1);
    },
    z = async () => {
      u.length > 0
        ? (await R(), b.set(!1))
        : (b.set(!1), Ot(n.pay_all_bills_error, n.error, "circle-exclamation"));
    };
  return (
    (i.$$.update = () => {
      (i.$$.dirty[0] & 16777219 &&
        e(4, (O = { balance: o, cash: s, transactions: l })),
        i.$$.dirty[0] & 32 &&
          k &&
          n &&
          ((k.data.labels = [n.income, n.expenses]),
          (k.data.datasets[0].label = n.weekly_summary),
          k.update()),
        i.$$.dirty[0] & 8388608 &&
          S.subscribe((B) => {
            k &&
              (e(
                23,
                (k.data.datasets[0].data = [B.totalReceived, B.totalUsed]),
                k,
              ),
              k.update());
          }));
    }),
    [
      s,
      o,
      g,
      C,
      O,
      n,
      a,
      r,
      u,
      d,
      p,
      m,
      _,
      b,
      w,
      y,
      S,
      R,
      F,
      D,
      N,
      V,
      j,
      k,
      l,
      Z,
      et,
      lt,
      J,
      Q,
      q,
      ct,
      G,
      X,
      K,
      tt,
      H,
      st,
      dt,
      Y,
      z,
    ]
  );
}
class Xm extends ui {
  constructor(t) {
    (super(), ci(this, t, Ym, Hm, ii, {}, null, [-1, -1]));
  }
}
function mc(i, t, e) {
  const n = i.slice();
  return ((n[9] = t[e]), n);
}
function Km(i) {
  let t,
    e,
    n,
    s,
    o = i[3].no_bills_found + "",
    l,
    a,
    r,
    u = (i[0] ? i[3].no_bills_match_search : i[3].no_pending_bills_moment) + "",
    d;
  return {
    c() {
      ((t = h("div")),
        (e = h("i")),
        (n = x()),
        (s = h("h3")),
        (l = v(o)),
        (a = x()),
        (r = h("p")),
        (d = v(u)),
        f(e, "class", "fas fa-file-invoice text-white/30 text-5xl mb-4"),
        f(s, "class", "text-xl font-semibold text-white mb-2"),
        f(r, "class", "text-white/60"),
        f(t, "class", "modern-card p-12 text-center"));
    },
    m(p, m) {
      (A(p, t, m),
        c(t, e),
        c(t, n),
        c(t, s),
        c(s, l),
        c(t, a),
        c(t, r),
        c(r, d));
    },
    p(p, m) {
      (m & 8 && o !== (o = p[3].no_bills_found + "") && L(l, o),
        m & 9 &&
          u !==
            (u =
              (p[0]
                ? p[3].no_bills_match_search
                : p[3].no_pending_bills_moment) + "") &&
          L(d, u));
    },
    i: be,
    o: be,
    d(p) {
      p && M(t);
    },
  };
}
function qm(i) {
  let t = [],
    e = new Map(),
    n,
    s,
    o = xe(i[2]);
  const l = (a) => a[9].id;
  for (let a = 0; a < o.length; a += 1) {
    let r = mc(i, o, a),
      u = l(r);
    e.set(u, (t[a] = _c(u, r)));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1) t[a].c();
      n = nn();
    },
    m(a, r) {
      for (let u = 0; u < t.length; u += 1) t[u] && t[u].m(a, r);
      (A(a, n, r), (s = !0));
    },
    p(a, r) {
      r & 76 &&
        ((o = xe(a[2])),
        Ee(),
        (t = $s(t, r, l, 1, a, o, e, n.parentNode, Uo, _c, n, mc)),
        Ie());
    },
    i(a) {
      if (!s) {
        for (let r = 0; r < o.length; r += 1) Mt(t[r]);
        s = !0;
      }
    },
    o(a) {
      for (let r = 0; r < t.length; r += 1) Wt(t[r]);
      s = !1;
    },
    d(a) {
      a && M(n);
      for (let r = 0; r < t.length; r += 1) t[r].d(a);
    },
  };
}
function Gm(i) {
  let t,
    e = (i[9].amount || 0).toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 4 && e !== (e = (s[9].amount || 0).toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function Qm(i) {
  let t,
    e = ((i[9].amount || 0) / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 4 &&
        e !== (e = ((o[9].amount || 0) / 1e3).toFixed(1) + "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function Zm(i) {
  let t,
    e = ((i[9].amount || 0) / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 4 &&
        e !== (e = ((o[9].amount || 0) / 1e6).toFixed(1) + "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function Jm(i) {
  let t,
    e,
    n = i[3].paid + "",
    s;
  return {
    c() {
      ((t = h("div")),
        (e = h("span")),
        (s = v(n)),
        f(e, "class", "text-blue-400 text-sm font-medium"),
        f(
          t,
          "class",
          "px-4 py-2 bg-blue-500/20 rounded-lg border border-blue-500/30",
        ));
    },
    m(o, l) {
      (A(o, t, l), c(t, e), c(e, s));
    },
    p(o, l) {
      l & 8 && n !== (n = o[3].paid + "") && L(s, n);
    },
    d(o) {
      o && M(t);
    },
  };
}
function t_(i) {
  let t,
    e,
    n,
    s,
    o = i[3].pay_invoice + "",
    l,
    a,
    r;
  function u() {
    return i[8](i[9]);
  }
  return {
    c() {
      ((t = h("button")),
        (e = h("i")),
        (n = x()),
        (s = h("span")),
        (l = v(o)),
        f(e, "class", "fas fa-credit-card"),
        f(t, "class", "action-button flex items-center space-x-2"));
    },
    m(d, p) {
      (A(d, t, p),
        c(t, e),
        c(t, n),
        c(t, s),
        c(s, l),
        a || ((r = ft(t, "click", u)), (a = !0)));
    },
    p(d, p) {
      ((i = d), p & 8 && o !== (o = i[3].pay_invoice + "") && L(l, o));
    },
    d(d) {
      (d && M(t), (a = !1), r());
    },
  };
}
function _c(i, t) {
  let e,
    n,
    s,
    o,
    l,
    a,
    r,
    u,
    d = t[9].description + "",
    p,
    m,
    _,
    g,
    b = t[9].id + "",
    w,
    y,
    S,
    k,
    C = t[9].type + "",
    P,
    T,
    R,
    F = gc(t[9].date) + "",
    D,
    I,
    W,
    N,
    O = t[9].isIncome ? "+" : "-",
    V,
    j,
    U,
    $,
    nt,
    K,
    Z,
    et;
  function lt(X, tt) {
    return (X[9].amount || 0) >= 1e6 ? Zm : (X[9].amount || 0) >= 1e3 ? Qm : Gm;
  }
  let J = lt(t),
    Q = J(t);
  function q(X, tt) {
    return X[9].isPaid ? Jm : t_;
  }
  let ct = q(t),
    G = ct(t);
  return {
    key: i,
    first: null,
    c() {
      ((e = h("div")),
        (n = h("div")),
        (s = h("div")),
        (o = h("div")),
        (o.innerHTML =
          '<i class="fas fa-file-invoice text-orange-400 text-lg"></i>'),
        (l = x()),
        (a = h("div")),
        (r = h("div")),
        (u = h("h3")),
        (p = v(d)),
        (m = x()),
        (_ = h("span")),
        (g = v("#")),
        (w = v(b)),
        (y = x()),
        (S = h("div")),
        (k = h("span")),
        (P = v(C)),
        (T = x()),
        (R = h("span")),
        (D = v(F)),
        (I = x()),
        (W = h("div")),
        (N = h("span")),
        (V = v(O)),
        (j = x()),
        Q.c(),
        ($ = x()),
        G.c(),
        (nt = x()),
        f(
          o,
          "class",
          "w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center",
        ),
        f(u, "class", "text-white font-semibold truncate"),
        f(_, "class", "text-white/50 text-sm"),
        f(r, "class", "flex items-center space-x-2 mb-1"),
        f(S, "class", "flex items-center space-x-4 text-sm text-white/60"),
        f(a, "class", "flex-1 min-w-0"),
        f(s, "class", "flex items-center space-x-4 flex-1"),
        f(
          N,
          "class",
          (U = `text-lg font-bold ${t[9].isIncome ? "text-blue-400" : "text-orange-400"}`),
        ),
        f(W, "class", "flex items-center space-x-4"),
        f(n, "class", "flex items-center justify-between"),
        f(e, "class", "modern-card modern-card-hover p-6"),
        (this.first = e));
    },
    m(X, tt) {
      (A(X, e, tt),
        c(e, n),
        c(n, s),
        c(s, o),
        c(s, l),
        c(s, a),
        c(a, r),
        c(r, u),
        c(u, p),
        c(r, m),
        c(r, _),
        c(_, g),
        c(_, w),
        c(a, y),
        c(a, S),
        c(S, k),
        c(k, P),
        c(S, T),
        c(S, R),
        c(R, D),
        c(n, I),
        c(n, W),
        c(W, N),
        c(N, V),
        c(N, j),
        Q.m(N, null),
        c(W, $),
        G.m(W, null),
        c(e, nt),
        (et = !0));
    },
    p(X, tt) {
      ((t = X),
        (!et || tt & 4) && d !== (d = t[9].description + "") && L(p, d),
        (!et || tt & 4) && b !== (b = t[9].id + "") && L(w, b),
        (!et || tt & 4) && C !== (C = t[9].type + "") && L(P, C),
        (!et || tt & 4) && F !== (F = gc(t[9].date) + "") && L(D, F),
        (!et || tt & 4) && O !== (O = t[9].isIncome ? "+" : "-") && L(V, O),
        J === (J = lt(t)) && Q
          ? Q.p(t, tt)
          : (Q.d(1), (Q = J(t)), Q && (Q.c(), Q.m(N, null))),
        (!et ||
          (tt & 4 &&
            U !==
              (U = `text-lg font-bold ${t[9].isIncome ? "text-blue-400" : "text-orange-400"}`))) &&
          f(N, "class", U),
        ct === (ct = q(t)) && G
          ? G.p(t, tt)
          : (G.d(1), (G = ct(t)), G && (G.c(), G.m(W, null))));
    },
    i(X) {
      et ||
        (X &&
          he(() => {
            et &&
              (Z && Z.end(1), (K = Te(e, le, { duration: 300 })), K.start());
          }),
        (et = !0));
    },
    o(X) {
      (K && K.invalidate(), X && (Z = De(e, Yo, { duration: 300 })), (et = !1));
    },
    d(X) {
      (X && M(e), Q.d(), G.d(), X && Z && Z.end());
    },
  };
}
function e_(i) {
  let t,
    e,
    n,
    s,
    o = i[3].bills + "",
    l,
    a,
    r,
    u = i[3].manage_pending_bills_payments + "",
    d,
    p,
    m,
    _,
    g,
    b,
    w,
    y,
    S = i[1].length + "",
    k,
    C,
    P = i[3].bills_count + "",
    T,
    R,
    F,
    D,
    I,
    W,
    N,
    O,
    V,
    j,
    U,
    $,
    nt,
    K,
    Z,
    et;
  const lt = [qm, Km],
    J = [];
  function Q(q, ct) {
    return q[2].length > 0 ? 0 : 1;
  }
  return (
    ($ = Q(i)),
    (nt = J[$] = lt[$](i)),
    {
      c() {
        ((t = h("div")),
          (e = h("div")),
          (n = h("div")),
          (s = h("h1")),
          (l = v(o)),
          (a = x()),
          (r = h("p")),
          (d = v(u)),
          (p = x()),
          (m = h("div")),
          (_ = h("div")),
          (g = h("div")),
          (b = h("div")),
          (w = x()),
          (y = h("span")),
          (k = v(S)),
          (C = x()),
          (T = v(P)),
          (R = x()),
          (F = h("div")),
          (D = h("div")),
          (I = h("div")),
          (W = h("i")),
          (N = x()),
          (O = h("input")),
          (j = x()),
          (U = h("div")),
          nt.c(),
          f(s, "class", "text-3xl font-bold text-white mb-2"),
          f(r, "class", "text-white/60"),
          f(b, "class", "w-2 h-2 bg-orange-400 rounded-full"),
          f(y, "class", "text-sm text-white/80"),
          f(g, "class", "flex items-center space-x-2"),
          f(_, "class", "modern-card px-4 py-2"),
          f(m, "class", "flex items-center space-x-4"),
          f(e, "class", "flex items-center justify-between mb-8"),
          f(
            W,
            "class",
            "fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40",
          ),
          f(O, "type", "text"),
          f(
            O,
            "class",
            "w-full bg-transparent text-white pl-12 pr-4 py-3 focus:outline-none placeholder-white/40",
          ),
          f(O, "placeholder", (V = i[3].search_transactions)),
          f(I, "class", "relative"),
          f(D, "class", "modern-card p-4"),
          f(F, "class", "mb-8"),
          f(U, "class", "grid gap-4"),
          f(t, "class", "h-full flex flex-col p-8 overflow-y-auto"));
      },
      m(q, ct) {
        (A(q, t, ct),
          c(t, e),
          c(e, n),
          c(n, s),
          c(s, l),
          c(n, a),
          c(n, r),
          c(r, d),
          c(e, p),
          c(e, m),
          c(m, _),
          c(_, g),
          c(g, b),
          c(g, w),
          c(g, y),
          c(y, k),
          c(y, C),
          c(y, T),
          c(t, R),
          c(t, F),
          c(F, D),
          c(D, I),
          c(I, W),
          c(I, N),
          c(I, O),
          ce(O, i[0]),
          c(t, j),
          c(t, U),
          J[$].m(U, null),
          (K = !0),
          Z || ((et = ft(O, "input", i[7])), (Z = !0)));
      },
      p(q, [ct]) {
        ((!K || ct & 8) && o !== (o = q[3].bills + "") && L(l, o),
          (!K || ct & 8) &&
            u !== (u = q[3].manage_pending_bills_payments + "") &&
            L(d, u),
          (!K || ct & 2) && S !== (S = q[1].length + "") && L(k, S),
          (!K || ct & 8) && P !== (P = q[3].bills_count + "") && L(T, P),
          (!K || (ct & 8 && V !== (V = q[3].search_transactions))) &&
            f(O, "placeholder", V),
          ct & 1 && O.value !== q[0] && ce(O, q[0]));
        let G = $;
        (($ = Q(q)),
          $ === G
            ? J[$].p(q, ct)
            : (Ee(),
              Wt(J[G], 1, 1, () => {
                J[G] = null;
              }),
              Ie(),
              (nt = J[$]),
              nt ? nt.p(q, ct) : ((nt = J[$] = lt[$](q)), nt.c()),
              Mt(nt, 1),
              nt.m(U, null)));
      },
      i(q) {
        K || (Mt(nt), (K = !0));
      },
      o(q) {
        (Wt(nt), (K = !1));
      },
      d(q) {
        (q && M(t), J[$].d(), (Z = !1), et());
      },
    }
  );
}
function gc(i) {
  const t = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(i).toLocaleDateString(void 0, t);
}
function i_(i, t, e) {
  let n, s, o, l;
  mt(i, li, (m) => e(3, (s = m)));
  let a = Oo;
  mt(i, a, (m) => e(1, (l = m)));
  let r = Et("");
  mt(i, r, (m) => e(0, (o = m)));
  async function u(m) {
    try {
      return (await qt("ps-banking:client:payBill", { id: m.id }))
        ? (Ot(
            `${s.pay_invoice} #${m.id} ${s.from} ${m.type}`,
            s.payment_completed,
            "coins",
          ),
          a.update((g) => {
            const b = g.findIndex((w) => m.id === w.id);
            return (b !== -1 && g.splice(b, 1), g);
          }),
          !0)
        : (Ot(`${s.no_money_on_account}`, `${s.error}`, "coins"), !1);
    } catch (_) {
      return (console.error(_), !1);
    }
  }
  sn(async () => {
    try {
      const m = await qt("ps-banking:client:getBills", {});
      Oo.set(m);
    } catch (m) {
      console.error(m);
    }
  });
  function d() {
    ((o = this.value), r.set(o));
  }
  const p = (m) => u(m);
  return (
    (i.$$.update = () => {
      i.$$.dirty & 3 &&
        e(
          2,
          (n = l.filter(
            (m) =>
              m.description.toLowerCase().includes(o.toLowerCase()) ||
              m.type.toLowerCase().includes(o.toLowerCase()),
          )),
        );
    }),
    [o, l, n, s, a, r, u, d, p]
  );
}
class n_ extends ui {
  constructor(t) {
    (super(), ci(this, t, i_, e_, ii, {}));
  }
}
function bc(i, t, e) {
  const n = i.slice();
  return ((n[12] = t[e]), n);
}
function s_(i) {
  let t,
    e,
    n,
    s,
    o = i[2].no_transactions_found + "",
    l,
    a,
    r,
    u =
      (i[0]
        ? i[2].no_transactions_match_search
        : i[2].transaction_history_empty) + "",
    d;
  return {
    c() {
      ((t = h("div")),
        (e = h("i")),
        (n = x()),
        (s = h("h3")),
        (l = v(o)),
        (a = x()),
        (r = h("p")),
        (d = v(u)),
        f(e, "class", "fas fa-history text-white/30 text-5xl mb-4"),
        f(s, "class", "text-xl font-semibold text-white mb-2"),
        f(r, "class", "text-white/60"),
        f(t, "class", "modern-card p-12 text-center"));
    },
    m(p, m) {
      (A(p, t, m),
        c(t, e),
        c(t, n),
        c(t, s),
        c(s, l),
        c(t, a),
        c(t, r),
        c(r, d));
    },
    p(p, m) {
      (m & 4 && o !== (o = p[2].no_transactions_found + "") && L(l, o),
        m & 5 &&
          u !==
            (u =
              (p[0]
                ? p[2].no_transactions_match_search
                : p[2].transaction_history_empty) + "") &&
          L(d, u));
    },
    i: be,
    o: be,
    d(p) {
      p && M(t);
    },
  };
}
function o_(i) {
  let t = [],
    e = new Map(),
    n,
    s,
    o = xe(i[1]);
  const l = (a) => a[12].id;
  for (let a = 0; a < o.length; a += 1) {
    let r = bc(i, o, a),
      u = l(r);
    e.set(u, (t[a] = vc(u, r)));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1) t[a].c();
      n = nn();
    },
    m(a, r) {
      for (let u = 0; u < t.length; u += 1) t[u] && t[u].m(a, r);
      (A(a, n, r), (s = !0));
    },
    p(a, r) {
      r & 6 &&
        ((o = xe(a[1])),
        Ee(),
        (t = $s(t, r, l, 1, a, o, e, n.parentNode, Uo, vc, n, bc)),
        Ie());
    },
    i(a) {
      if (!s) {
        for (let r = 0; r < o.length; r += 1) Mt(t[r]);
        s = !0;
      }
    },
    o(a) {
      for (let r = 0; r < t.length; r += 1) Wt(t[r]);
      s = !1;
    },
    d(a) {
      a && M(n);
      for (let r = 0; r < t.length; r += 1) t[r].d(a);
    },
  };
}
function l_(i) {
  let t,
    e = (i[12].amount || 0).toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 2 && e !== (e = (s[12].amount || 0).toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function a_(i) {
  let t,
    e = ((i[12].amount || 0) / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 2 &&
        e !== (e = ((o[12].amount || 0) / 1e3).toFixed(1) + "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function r_(i) {
  let t,
    e = ((i[12].amount || 0) / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 2 &&
        e !== (e = ((o[12].amount || 0) / 1e6).toFixed(1) + "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function vc(i, t) {
  let e,
    n,
    s,
    o,
    l,
    a,
    r,
    u,
    d,
    p,
    m,
    _ = t[12].description + "",
    g,
    b,
    w,
    y,
    S = t[12].id + "",
    k,
    C,
    P,
    T,
    R = t[12].type + "",
    F,
    D,
    I,
    W = wc(t[12].date) + "",
    N,
    O,
    V,
    j,
    U = t[12].isIncome ? "+" : "-",
    $,
    nt,
    K,
    Z,
    et,
    lt = (t[12].isIncome ? t[2].received : t[2].sent) + "",
    J,
    Q,
    q,
    ct,
    G;
  function X(st, dt) {
    return (st[12].amount || 0) >= 1e6
      ? r_
      : (st[12].amount || 0) >= 1e3
        ? a_
        : l_;
  }
  let tt = X(t),
    H = tt(t);
  return {
    key: i,
    first: null,
    c() {
      ((e = h("div")),
        (n = h("div")),
        (s = h("div")),
        (o = h("div")),
        (l = h("i")),
        (u = x()),
        (d = h("div")),
        (p = h("div")),
        (m = h("h3")),
        (g = v(_)),
        (b = x()),
        (w = h("span")),
        (y = v("#")),
        (k = v(S)),
        (C = x()),
        (P = h("div")),
        (T = h("span")),
        (F = v(R)),
        (D = x()),
        (I = h("span")),
        (N = v(W)),
        (O = x()),
        (V = h("div")),
        (j = h("span")),
        ($ = v(U)),
        (nt = x()),
        H.c(),
        (Z = x()),
        (et = h("div")),
        (J = v(lt)),
        (Q = x()),
        f(
          l,
          "class",
          (a = `fas ${t[12].isIncome ? "fa-arrow-down text-blue-400" : "fa-arrow-up text-orange-400"} text-lg`),
        ),
        f(
          o,
          "class",
          (r = `w-12 h-12 rounded-xl flex items-center justify-center ${t[12].isIncome ? "bg-blue-500/20" : "bg-orange-500/20"}`),
        ),
        f(m, "class", "text-white font-semibold truncate"),
        f(w, "class", "text-white/50 text-sm"),
        f(p, "class", "flex items-center space-x-2 mb-1"),
        f(P, "class", "flex items-center space-x-4 text-sm text-white/60"),
        f(d, "class", "flex-1 min-w-0"),
        f(s, "class", "flex items-center space-x-4 flex-1"),
        f(
          j,
          "class",
          (K = `text-lg font-bold ${t[12].isIncome ? "text-blue-400" : "text-orange-400"}`),
        ),
        f(et, "class", "text-xs text-white/50 mt-1"),
        f(V, "class", "text-right"),
        f(n, "class", "flex items-center justify-between"),
        f(e, "class", "modern-card modern-card-hover p-6"),
        (this.first = e));
    },
    m(st, dt) {
      (A(st, e, dt),
        c(e, n),
        c(n, s),
        c(s, o),
        c(o, l),
        c(s, u),
        c(s, d),
        c(d, p),
        c(p, m),
        c(m, g),
        c(p, b),
        c(p, w),
        c(w, y),
        c(w, k),
        c(d, C),
        c(d, P),
        c(P, T),
        c(T, F),
        c(P, D),
        c(P, I),
        c(I, N),
        c(n, O),
        c(n, V),
        c(V, j),
        c(j, $),
        c(j, nt),
        H.m(j, null),
        c(V, Z),
        c(V, et),
        c(et, J),
        c(e, Q),
        (G = !0));
    },
    p(st, dt) {
      ((t = st),
        (!G ||
          (dt & 2 &&
            a !==
              (a = `fas ${t[12].isIncome ? "fa-arrow-down text-blue-400" : "fa-arrow-up text-orange-400"} text-lg`))) &&
          f(l, "class", a),
        (!G ||
          (dt & 2 &&
            r !==
              (r = `w-12 h-12 rounded-xl flex items-center justify-center ${t[12].isIncome ? "bg-blue-500/20" : "bg-orange-500/20"}`))) &&
          f(o, "class", r),
        (!G || dt & 2) && _ !== (_ = t[12].description + "") && L(g, _),
        (!G || dt & 2) && S !== (S = t[12].id + "") && L(k, S),
        (!G || dt & 2) && R !== (R = t[12].type + "") && L(F, R),
        (!G || dt & 2) && W !== (W = wc(t[12].date) + "") && L(N, W),
        (!G || dt & 2) && U !== (U = t[12].isIncome ? "+" : "-") && L($, U),
        tt === (tt = X(t)) && H
          ? H.p(t, dt)
          : (H.d(1), (H = tt(t)), H && (H.c(), H.m(j, null))),
        (!G ||
          (dt & 2 &&
            K !==
              (K = `text-lg font-bold ${t[12].isIncome ? "text-blue-400" : "text-orange-400"}`))) &&
          f(j, "class", K),
        (!G || dt & 6) &&
          lt !== (lt = (t[12].isIncome ? t[2].received : t[2].sent) + "") &&
          L(J, lt));
    },
    i(st) {
      G ||
        (st &&
          he(() => {
            G &&
              (ct && ct.end(1), (q = Te(e, le, { duration: 300 })), q.start());
          }),
        (G = !0));
    },
    o(st) {
      (q && q.invalidate(),
        st && (ct = De(e, Yo, { duration: 300 })),
        (G = !1));
    },
    d(st) {
      (st && M(e), H.d(), st && ct && ct.end());
    },
  };
}
function yc(i) {
  let t,
    e,
    n,
    s,
    o,
    l,
    a,
    r = i[2].are_you_sure + "",
    u,
    d,
    p,
    m = i[2].delete_confirmation + "",
    _,
    g,
    b,
    w,
    y,
    S,
    k = i[2].cancel + "",
    C,
    P,
    T,
    R,
    F,
    D = i[2].delete_all + "",
    I,
    W,
    N,
    O,
    V,
    j;
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("div")),
        (o = h("div")),
        (o.innerHTML =
          '<i class="fas fa-exclamation-triangle text-red-400 text-xl"></i>'),
        (l = x()),
        (a = h("h2")),
        (u = v(r)),
        (d = x()),
        (p = h("p")),
        (_ = v(m)),
        (g = x()),
        (b = h("div")),
        (w = h("button")),
        (y = h("i")),
        (S = x()),
        (C = v(k)),
        (P = x()),
        (T = h("button")),
        (R = h("i")),
        (F = x()),
        (I = v(D)),
        f(
          o,
          "class",
          "w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center",
        ),
        f(a, "class", "text-2xl font-bold text-white"),
        f(s, "class", "flex items-center space-x-3"),
        f(n, "class", "flex items-center justify-between mb-6"),
        f(p, "class", "text-white/70 mb-6"),
        f(y, "class", "fas fa-times mr-2"),
        f(
          w,
          "class",
          "flex-1 px-4 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors",
        ),
        f(R, "class", "fas fa-trash mr-2"),
        f(
          T,
          "class",
          "flex-1 px-4 py-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/30 transition-colors",
        ),
        f(b, "class", "flex space-x-4"),
        f(e, "class", "modern-card p-8 w-full max-w-md mx-4"),
        f(
          t,
          "class",
          "modal-backdrop fixed inset-0 flex items-center justify-center z-50",
        ));
    },
    m(U, $) {
      (A(U, t, $),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, o),
        c(s, l),
        c(s, a),
        c(a, u),
        c(e, d),
        c(e, p),
        c(p, _),
        c(e, g),
        c(e, b),
        c(b, w),
        c(w, y),
        c(w, S),
        c(w, C),
        c(b, P),
        c(b, T),
        c(T, R),
        c(T, F),
        c(T, I),
        (O = !0),
        V || ((j = [ft(w, "click", i[11]), ft(T, "click", i[8])]), (V = !0)));
    },
    p(U, $) {
      ((!O || $ & 4) && r !== (r = U[2].are_you_sure + "") && L(u, r),
        (!O || $ & 4) && m !== (m = U[2].delete_confirmation + "") && L(_, m),
        (!O || $ & 4) && k !== (k = U[2].cancel + "") && L(C, k),
        (!O || $ & 4) && D !== (D = U[2].delete_all + "") && L(I, D));
    },
    i(U) {
      O ||
        (U &&
          he(() => {
            O &&
              (N && N.end(1),
              (W = Te(e, En, { duration: 300, easing: ss })),
              W.start());
          }),
        (O = !0));
    },
    o(U) {
      (W && W.invalidate(),
        U && (N = De(e, En, { duration: 250, easing: ss })),
        (O = !1));
    },
    d(U) {
      (U && M(t), U && N && N.end(), (V = !1), Ce(j));
    },
  };
}
function c_(i) {
  let t,
    e,
    n,
    s,
    o = i[2].history + "",
    l,
    a,
    r,
    u = i[2].view_complete_transaction_history + "",
    d,
    p,
    m,
    _,
    g,
    b,
    w,
    y,
    S = i[1].length + "",
    k,
    C,
    P = i[2].transactions_count + "",
    T,
    R,
    F,
    D,
    I,
    W,
    N = i[2].delete_all_transactions + "",
    O,
    V,
    j,
    U,
    $,
    nt,
    K,
    Z,
    et,
    lt,
    J,
    Q,
    q,
    ct,
    G,
    X,
    tt,
    H;
  const st = [o_, s_],
    dt = [];
  function Y(B, wt) {
    return B[1].length > 0 ? 0 : 1;
  }
  ((Q = Y(i)), (q = dt[Q] = st[Q](i)));
  let z = i[3] && yc(i);
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("h1")),
        (l = v(o)),
        (a = x()),
        (r = h("p")),
        (d = v(u)),
        (p = x()),
        (m = h("div")),
        (_ = h("div")),
        (g = h("div")),
        (b = h("i")),
        (w = x()),
        (y = h("span")),
        (k = v(S)),
        (C = x()),
        (T = v(P)),
        (R = x()),
        (F = h("button")),
        (D = h("i")),
        (I = x()),
        (W = h("span")),
        (O = v(N)),
        (V = x()),
        (j = h("div")),
        (U = h("div")),
        ($ = h("div")),
        (nt = h("i")),
        (K = x()),
        (Z = h("input")),
        (lt = x()),
        (J = h("div")),
        q.c(),
        (ct = x()),
        z && z.c(),
        (G = nn()),
        f(s, "class", "text-3xl font-bold text-white mb-2"),
        f(r, "class", "text-white/60"),
        f(b, "class", "fas fa-receipt text-blue-400"),
        f(y, "class", "text-sm text-white/80"),
        f(g, "class", "flex items-center space-x-2"),
        f(_, "class", "modern-card px-4 py-2"),
        f(D, "class", "fas fa-trash-alt text-red-400"),
        f(W, "class", "text-red-400"),
        f(
          F,
          "class",
          "action-button flex items-center space-x-2 bg-red-500/10 border-red-500/30 hover:bg-red-500/20",
        ),
        f(m, "class", "flex items-center space-x-4"),
        f(e, "class", "flex items-center justify-between mb-8"),
        f(
          nt,
          "class",
          "fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40",
        ),
        f(Z, "type", "text"),
        f(
          Z,
          "class",
          "w-full bg-transparent text-white pl-12 pr-4 py-3 focus:outline-none placeholder-white/40",
        ),
        f(Z, "placeholder", (et = i[2].search_transactions)),
        f($, "class", "relative"),
        f(U, "class", "modern-card p-4"),
        f(j, "class", "mb-8"),
        f(J, "class", "grid gap-4"),
        f(t, "class", "h-full flex flex-col p-8 overflow-y-auto"));
    },
    m(B, wt) {
      (A(B, t, wt),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, l),
        c(n, a),
        c(n, r),
        c(r, d),
        c(e, p),
        c(e, m),
        c(m, _),
        c(_, g),
        c(g, b),
        c(g, w),
        c(g, y),
        c(y, k),
        c(y, C),
        c(y, T),
        c(m, R),
        c(m, F),
        c(F, D),
        c(F, I),
        c(F, W),
        c(W, O),
        c(t, V),
        c(t, j),
        c(j, U),
        c(U, $),
        c($, nt),
        c($, K),
        c($, Z),
        ce(Z, i[0]),
        c(t, lt),
        c(t, J),
        dt[Q].m(J, null),
        A(B, ct, wt),
        z && z.m(B, wt),
        A(B, G, wt),
        (X = !0),
        tt || ((H = [ft(F, "click", i[7]), ft(Z, "input", i[10])]), (tt = !0)));
    },
    p(B, [wt]) {
      ((!X || wt & 4) && o !== (o = B[2].history + "") && L(l, o),
        (!X || wt & 4) &&
          u !== (u = B[2].view_complete_transaction_history + "") &&
          L(d, u),
        (!X || wt & 2) && S !== (S = B[1].length + "") && L(k, S),
        (!X || wt & 4) && P !== (P = B[2].transactions_count + "") && L(T, P),
        (!X || wt & 4) &&
          N !== (N = B[2].delete_all_transactions + "") &&
          L(O, N),
        (!X || (wt & 4 && et !== (et = B[2].search_transactions))) &&
          f(Z, "placeholder", et),
        wt & 1 && Z.value !== B[0] && ce(Z, B[0]));
      let ot = Q;
      ((Q = Y(B)),
        Q === ot
          ? dt[Q].p(B, wt)
          : (Ee(),
            Wt(dt[ot], 1, 1, () => {
              dt[ot] = null;
            }),
            Ie(),
            (q = dt[Q]),
            q ? q.p(B, wt) : ((q = dt[Q] = st[Q](B)), q.c()),
            Mt(q, 1),
            q.m(J, null)),
        B[3]
          ? z
            ? (z.p(B, wt), wt & 8 && Mt(z, 1))
            : ((z = yc(B)), z.c(), Mt(z, 1), z.m(G.parentNode, G))
          : z &&
            (Ee(),
            Wt(z, 1, 1, () => {
              z = null;
            }),
            Ie()));
    },
    i(B) {
      X || (Mt(q), Mt(z), (X = !0));
    },
    o(B) {
      (Wt(q), Wt(z), (X = !1));
    },
    d(B) {
      (B && (M(t), M(ct), M(G)), dt[Q].d(), z && z.d(B), (tt = !1), Ce(H));
    },
  };
}
function wc(i) {
  const t = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(i).toLocaleDateString(void 0, t);
}
function u_(i, t, e) {
  let n, s, o, l, a;
  mt(i, li, (b) => e(2, (s = b)));
  let r = El;
  mt(i, r, (b) => e(9, (o = b)));
  let u = Et("");
  mt(i, u, (b) => e(0, (l = b)));
  let d = Et(!1);
  mt(i, d, (b) => e(3, (a = b)));
  function p() {
    d.set(!0);
  }
  async function m() {
    if (o.length === 0)
      (Ot(s.history_empty, s.error, "file-invoice"), d.set(!1));
    else {
      (r.set([]),
        d.set(!1),
        Ot(s.all_history_deleted, s.success, "file-invoice"));
      try {
        const b = await qt("ps-banking:client:deleteHistory", {});
        r.set([]);
      } catch (b) {
        console.error(b);
      }
    }
  }
  sn(async () => {
    try {
      const b = await qt("ps-banking:client:getHistory", {});
      r.set(b);
    } catch (b) {
      console.error(b);
    }
  });
  function _() {
    ((l = this.value), u.set(l));
  }
  const g = () => d.set(!1);
  return (
    (i.$$.update = () => {
      i.$$.dirty & 513 &&
        e(
          1,
          (n = o.filter(
            (b) =>
              b.description.toLowerCase().includes(l.toLowerCase()) ||
              b.type.toLowerCase().includes(l.toLowerCase()),
          )),
        );
    }),
    [l, n, s, a, r, u, d, p, m, o, _, g]
  );
}
class d_ extends ui {
  constructor(t) {
    (super(), ci(this, t, u_, c_, ii, {}));
  }
}
function f_(i) {
  let t,
    e = (i[1] || 0).toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 2 && e !== (e = (s[1] || 0).toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function h_(i) {
  let t,
    e = (i[1] / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 2 && e !== (e = (o[1] / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function p_(i) {
  let t,
    e = (i[1] / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 2 && e !== (e = (o[1] / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function m_(i) {
  let t,
    e = i[2].toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 4 && e !== (e = s[2].toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function __(i) {
  let t,
    e = (i[2] / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 4 && e !== (e = (o[2] / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function g_(i) {
  let t,
    e = (i[2] / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 4 && e !== (e = (o[2] / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function b_(i) {
  let t,
    e = (i[0] || 0).toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 1 && e !== (e = (s[0] || 0).toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function v_(i) {
  let t,
    e = ((i[0] || 0) / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 1 && e !== (e = ((o[0] || 0) / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function y_(i) {
  let t,
    e = ((i[0] || 0) / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 1 && e !== (e = ((o[0] || 0) / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function xc(i) {
  let t;
  return {
    c() {
      ((t = h("p")),
        (t.innerHTML = `<i class="fas fa-exclamation-triangle mr-2"></i>
            Insufficient funds`),
        f(t, "class", "text-red-400 text-sm mt-3 text-center"));
    },
    m(e, n) {
      A(e, t, n);
    },
    d(e) {
      e && M(t);
    },
  };
}
function w_(i) {
  let t,
    e,
    n,
    s,
    o = i[3].withdraw + "",
    l,
    a,
    r,
    u = i[3].withdraw_money_from_account + "",
    d,
    p,
    m,
    _,
    g,
    b,
    w,
    y,
    S = i[3].withdraw_status + "",
    k,
    C,
    P,
    T,
    R,
    F,
    D,
    I,
    W,
    N,
    O,
    V = i[3].bank_balance + "",
    j,
    U,
    $,
    nt,
    K,
    Z,
    et = i[3].amount + "",
    lt,
    J,
    Q,
    q,
    ct,
    G,
    X,
    tt,
    H,
    st,
    dt,
    Y,
    z,
    B,
    wt,
    ot,
    ut = i[3].all + "",
    gt,
    It,
    Ut,
    Nt,
    Ct,
    Tt,
    vt,
    xt,
    ae,
    Zt = i[3].new_bank + "",
    ue,
    Bt,
    zt,
    de,
    Vt,
    se,
    At = i[3].you_will_receive + "",
    jt,
    Ht,
    Dt,
    Gt,
    at,
    E,
    pt,
    bt,
    kt = i[3].withdraw_button + "",
    Lt,
    $t,
    Ft,
    _e,
    we;
  function Me(rt, ht) {
    return rt[1] >= 1e6 ? p_ : rt[1] >= 1e3 ? h_ : f_;
  }
  let Jt = Me(i),
    te = Jt(i);
  function Re(rt, ht) {
    return rt[2] >= 1e6 ? g_ : rt[2] >= 1e3 ? __ : m_;
  }
  let ye = Re(i),
    Rt = ye(i);
  function Se(rt, ht) {
    return (rt[0] || 0) >= 1e6 ? y_ : (rt[0] || 0) >= 1e3 ? v_ : b_;
  }
  let Ae = Se(i),
    Qt = Ae(i),
    Pt = i[0] > i[1] && xc();
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("h1")),
        (l = v(o)),
        (a = x()),
        (r = h("p")),
        (d = v(u)),
        (p = x()),
        (m = h("div")),
        (_ = h("div")),
        (g = h("div")),
        (b = h("div")),
        (w = x()),
        (y = h("span")),
        (k = v(S)),
        (C = x()),
        (P = h("div")),
        (T = h("div")),
        (R = h("div")),
        (F = h("div")),
        (D = h("div")),
        (I = h("div")),
        (I.innerHTML =
          '<i class="fas fa-university text-blue-400 text-lg"></i>'),
        (W = x()),
        (N = h("div")),
        (O = h("p")),
        (j = v(V)),
        (U = x()),
        ($ = h("p")),
        te.c(),
        (nt = x()),
        (K = h("div")),
        (Z = h("label")),
        (lt = v(et)),
        (J = x()),
        (Q = h("div")),
        (q = h("div")),
        (q.innerHTML = '<i class="fas fa-dollar-sign"></i>'),
        (ct = x()),
        (G = h("input")),
        (tt = x()),
        (H = h("div")),
        (st = h("button")),
        (st.textContent = "25%"),
        (dt = x()),
        (Y = h("button")),
        (Y.textContent = "50%"),
        (z = x()),
        (B = h("button")),
        (B.textContent = "75%"),
        (wt = x()),
        (ot = h("button")),
        (gt = v(ut)),
        (It = x()),
        (Ut = h("div")),
        (Nt = h("div")),
        (Ct = h("div")),
        (Tt = h("div")),
        (Tt.innerHTML = '<i class="fas fa-wallet text-blue-400 text-lg"></i>'),
        (vt = x()),
        (xt = h("div")),
        (ae = h("p")),
        (ue = v(Zt)),
        (Bt = x()),
        (zt = h("p")),
        Rt.c(),
        (de = x()),
        (Vt = h("div")),
        (se = h("p")),
        (jt = v(At)),
        (Ht = x()),
        (Dt = h("p")),
        Qt.c(),
        (Gt = x()),
        (at = h("div")),
        (E = h("button")),
        (pt = h("i")),
        (bt = x()),
        (Lt = v(kt)),
        (Ft = x()),
        Pt && Pt.c(),
        f(s, "class", "text-3xl font-bold text-white mb-2"),
        f(r, "class", "text-white/60"),
        f(b, "class", "w-2 h-2 bg-orange-400 rounded-full animate-pulse"),
        f(y, "class", "text-sm text-white/80"),
        f(g, "class", "flex items-center space-x-2"),
        f(_, "class", "modern-card px-4 py-2"),
        f(m, "class", "flex items-center space-x-4"),
        f(e, "class", "flex items-center justify-between mb-8"),
        f(
          I,
          "class",
          "w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center",
        ),
        f(O, "class", "text-white/60 text-sm"),
        f($, "class", "text-2xl font-bold text-white"),
        f(D, "class", "flex items-center space-x-4"),
        f(F, "class", "flex items-center justify-between"),
        f(R, "class", "modern-card p-6"),
        f(Z, "for", "withdraw-amount"),
        f(Z, "class", "block text-white/80 text-sm font-medium mb-4"),
        f(
          q,
          "class",
          "absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40",
        ),
        f(G, "id", "withdraw-amount"),
        f(G, "type", "number"),
        f(
          G,
          "class",
          "w-full bg-white/5 text-white text-xl font-semibold pl-12 pr-4 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-orange-500/50 transition-colors",
        ),
        f(G, "placeholder", (X = i[3].enter_amount)),
        f(G, "max", i[1]),
        f(G, "min", "0"),
        f(Q, "class", "relative"),
        f(
          st,
          "class",
          "px-3 py-2 bg-white/5 rounded-lg text-white/70 hover:bg-white/10 transition-colors text-sm",
        ),
        f(
          Y,
          "class",
          "px-3 py-2 bg-white/5 rounded-lg text-white/70 hover:bg-white/10 transition-colors text-sm",
        ),
        f(
          B,
          "class",
          "px-3 py-2 bg-white/5 rounded-lg text-white/70 hover:bg-white/10 transition-colors text-sm",
        ),
        f(
          ot,
          "class",
          "px-3 py-2 bg-white/5 rounded-lg text-white/70 hover:bg-white/10 transition-colors text-sm",
        ),
        f(H, "class", "grid grid-cols-4 gap-3 mt-4"),
        f(K, "class", "modern-card p-6"),
        f(
          Tt,
          "class",
          "w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center",
        ),
        f(ae, "class", "text-white/60 text-sm"),
        f(zt, "class", "text-2xl font-bold text-white"),
        f(Ct, "class", "flex items-center space-x-4"),
        f(se, "class", "text-white/60 text-sm"),
        f(Dt, "class", "text-xl font-bold text-orange-400"),
        f(Vt, "class", "text-right"),
        f(Nt, "class", "flex items-center justify-between"),
        f(Ut, "class", "modern-card p-6"),
        f(pt, "class", "fas fa-arrow-down mr-3"),
        f(
          E,
          "class",
          "w-full action-button py-4 text-lg font-semibold bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed",
        ),
        (E.disabled = $t = i[0] <= 0 || i[0] > i[1]),
        f(at, "class", "modern-card p-6"),
        f(T, "class", "grid gap-8"),
        f(P, "class", "max-w-2xl mx-auto w-full"),
        f(t, "class", "h-full flex flex-col p-8 overflow-y-auto"));
    },
    m(rt, ht) {
      (A(rt, t, ht),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, l),
        c(n, a),
        c(n, r),
        c(r, d),
        c(e, p),
        c(e, m),
        c(m, _),
        c(_, g),
        c(g, b),
        c(g, w),
        c(g, y),
        c(y, k),
        c(t, C),
        c(t, P),
        c(P, T),
        c(T, R),
        c(R, F),
        c(F, D),
        c(D, I),
        c(D, W),
        c(D, N),
        c(N, O),
        c(O, j),
        c(N, U),
        c(N, $),
        te.m($, null),
        c(T, nt),
        c(T, K),
        c(K, Z),
        c(Z, lt),
        c(K, J),
        c(K, Q),
        c(Q, q),
        c(Q, ct),
        c(Q, G),
        ce(G, i[0]),
        c(K, tt),
        c(K, H),
        c(H, st),
        c(H, dt),
        c(H, Y),
        c(H, z),
        c(H, B),
        c(H, wt),
        c(H, ot),
        c(ot, gt),
        c(T, It),
        c(T, Ut),
        c(Ut, Nt),
        c(Nt, Ct),
        c(Ct, Tt),
        c(Ct, vt),
        c(Ct, xt),
        c(xt, ae),
        c(ae, ue),
        c(xt, Bt),
        c(xt, zt),
        Rt.m(zt, null),
        c(Nt, de),
        c(Nt, Vt),
        c(Vt, se),
        c(se, jt),
        c(Vt, Ht),
        c(Vt, Dt),
        Qt.m(Dt, null),
        c(T, Gt),
        c(T, at),
        c(at, E),
        c(E, pt),
        c(E, bt),
        c(E, Lt),
        c(at, Ft),
        Pt && Pt.m(at, null),
        _e ||
          ((we = [
            ft(G, "input", i[5]),
            ft(st, "click", i[6]),
            ft(Y, "click", i[7]),
            ft(B, "click", i[8]),
            ft(ot, "click", i[9]),
            ft(E, "click", i[4]),
          ]),
          (_e = !0)));
    },
    p(rt, [ht]) {
      (ht & 8 && o !== (o = rt[3].withdraw + "") && L(l, o),
        ht & 8 && u !== (u = rt[3].withdraw_money_from_account + "") && L(d, u),
        ht & 8 && S !== (S = rt[3].withdraw_status + "") && L(k, S),
        ht & 8 && V !== (V = rt[3].bank_balance + "") && L(j, V),
        Jt === (Jt = Me(rt)) && te
          ? te.p(rt, ht)
          : (te.d(1), (te = Jt(rt)), te && (te.c(), te.m($, null))),
        ht & 8 && et !== (et = rt[3].amount + "") && L(lt, et),
        ht & 8 && X !== (X = rt[3].enter_amount) && f(G, "placeholder", X),
        ht & 2 && f(G, "max", rt[1]),
        ht & 1 && ze(G.value) !== rt[0] && ce(G, rt[0]),
        ht & 8 && ut !== (ut = rt[3].all + "") && L(gt, ut),
        ht & 8 && Zt !== (Zt = rt[3].new_bank + "") && L(ue, Zt),
        ye === (ye = Re(rt)) && Rt
          ? Rt.p(rt, ht)
          : (Rt.d(1), (Rt = ye(rt)), Rt && (Rt.c(), Rt.m(zt, null))),
        ht & 8 && At !== (At = rt[3].you_will_receive + "") && L(jt, At),
        Ae === (Ae = Se(rt)) && Qt
          ? Qt.p(rt, ht)
          : (Qt.d(1), (Qt = Ae(rt)), Qt && (Qt.c(), Qt.m(Dt, null))),
        ht & 8 && kt !== (kt = rt[3].withdraw_button + "") && L(Lt, kt),
        ht & 3 &&
          $t !== ($t = rt[0] <= 0 || rt[0] > rt[1]) &&
          (E.disabled = $t),
        rt[0] > rt[1]
          ? Pt || ((Pt = xc()), Pt.c(), Pt.m(at, null))
          : Pt && (Pt.d(1), (Pt = null)));
    },
    i: be,
    o: be,
    d(rt) {
      (rt && M(t), te.d(), Rt.d(), Qt.d(), Pt && Pt.d(), (_e = !1), Ce(we));
    },
  };
}
function x_(i, t, e) {
  let n, s, o, l;
  (mt(i, li, (b) => e(3, (s = b))),
    mt(i, Zl, (b) => e(10, (o = b))),
    mt(i, qe, (b) => e(1, (l = b))));
  let a = 0;
  async function r() {
    try {
      const b = await qt("ps-banking:client:getMoneyTypes", {}),
        w = b.find((S) => S.name === "bank"),
        y = b.find((S) => S.name === "cash");
      (w && qe.set(w.amount), y && Fi.set(y.amount));
    } catch (b) {
      console.error(b);
    }
  }
  async function u() {
    l < a
      ? Ot(
          `${s.withdraw_error} ${a.toLocaleString(o.lang, { style: "currency", currency: o.currency, minimumFractionDigits: 0 })} (${s.available_balance}: ${(l || 0).toLocaleString(o.lang, { style: "currency", currency: o.currency, minimumFractionDigits: 0 })})`,
          s.error,
          "coins",
        )
      : (await qt("ps-banking:client:ATMwithdraw", { amount: a }))
        ? (Ot(
            `${s.withdraw_success} ${a.toLocaleString(o.lang, { style: "currency", currency: o.currency, minimumFractionDigits: 0 })}`,
            s.withdraw_success,
            "coins",
          ),
          await r(),
          e(0, (a = 0)))
        : Ot(`${s.withdraw_error}`, s.error, "coins");
  }
  function d() {
    ((a = ze(this.value)), e(0, a));
  }
  const p = () => e(0, (a = Math.floor(l * 0.25))),
    m = () => e(0, (a = Math.floor(l * 0.5))),
    _ = () => e(0, (a = Math.floor(l * 0.75))),
    g = () => e(0, (a = l));
  return (
    (i.$$.update = () => {
      i.$$.dirty & 3 && e(2, (n = (l || 0) - (Number(a) || 0)));
    }),
    [a, l, n, s, u, d, p, m, _, g]
  );
}
class k_ extends ui {
  constructor(t) {
    (super(), ci(this, t, x_, w_, ii, {}));
  }
}
function M_(i) {
  let t,
    e = (i[3] || 0).toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 8 && e !== (e = (s[3] || 0).toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function S_(i) {
  let t,
    e = (i[3] / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 8 && e !== (e = (o[3] / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function A_(i) {
  let t,
    e = (i[3] / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 8 && e !== (e = (o[3] / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function L_(i) {
  let t,
    e = i[1].toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 2 && e !== (e = s[1].toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function P_(i) {
  let t,
    e = (i[1] / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 2 && e !== (e = (o[1] / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function C_(i) {
  let t,
    e = (i[1] / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 2 && e !== (e = (o[1] / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function T_(i) {
  let t,
    e = (i[0] || 0).toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 1 && e !== (e = (s[0] || 0).toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function D_(i) {
  let t,
    e = ((i[0] || 0) / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 1 && e !== (e = ((o[0] || 0) / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function R_(i) {
  let t,
    e = ((i[0] || 0) / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 1 && e !== (e = ((o[0] || 0) / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function kc(i) {
  let t;
  return {
    c() {
      ((t = h("p")),
        (t.innerHTML = `<i class="fas fa-exclamation-triangle mr-2"></i>
            Insufficient cash`),
        f(t, "class", "text-red-400 text-sm mt-3 text-center"));
    },
    m(e, n) {
      A(e, t, n);
    },
    d(e) {
      e && M(t);
    },
  };
}
function O_(i) {
  let t,
    e,
    n,
    s,
    o = i[2].deposit + "",
    l,
    a,
    r,
    u = i[2].deposit_cash_into_account + "",
    d,
    p,
    m,
    _,
    g,
    b,
    w,
    y,
    S = i[2].deposit_status + "",
    k,
    C,
    P,
    T,
    R,
    F,
    D,
    I,
    W,
    N,
    O,
    V = i[2].cash_on_hand + "",
    j,
    U,
    $,
    nt,
    K,
    Z,
    et = i[2].amount + "",
    lt,
    J,
    Q,
    q,
    ct,
    G,
    X,
    tt,
    H,
    st,
    dt,
    Y,
    z,
    B,
    wt,
    ot,
    ut = i[2].all + "",
    gt,
    It,
    Ut,
    Nt,
    Ct,
    Tt,
    vt,
    xt,
    ae,
    Zt = i[2].new_bank_balance + "",
    ue,
    Bt,
    zt,
    de,
    Vt,
    se,
    At = i[2].depositing + "",
    jt,
    Ht,
    Dt,
    Gt,
    at,
    E,
    pt,
    bt,
    kt = i[2].deposit_button + "",
    Lt,
    $t,
    Ft,
    _e,
    we;
  function Me(rt, ht) {
    return rt[3] >= 1e6 ? A_ : rt[3] >= 1e3 ? S_ : M_;
  }
  let Jt = Me(i),
    te = Jt(i);
  function Re(rt, ht) {
    return rt[1] >= 1e6 ? C_ : rt[1] >= 1e3 ? P_ : L_;
  }
  let ye = Re(i),
    Rt = ye(i);
  function Se(rt, ht) {
    return (rt[0] || 0) >= 1e6 ? R_ : (rt[0] || 0) >= 1e3 ? D_ : T_;
  }
  let Ae = Se(i),
    Qt = Ae(i),
    Pt = i[0] > i[3] && kc();
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("h1")),
        (l = v(o)),
        (a = x()),
        (r = h("p")),
        (d = v(u)),
        (p = x()),
        (m = h("div")),
        (_ = h("div")),
        (g = h("div")),
        (b = h("div")),
        (w = x()),
        (y = h("span")),
        (k = v(S)),
        (C = x()),
        (P = h("div")),
        (T = h("div")),
        (R = h("div")),
        (F = h("div")),
        (D = h("div")),
        (I = h("div")),
        (I.innerHTML = '<i class="fas fa-wallet text-blue-400 text-lg"></i>'),
        (W = x()),
        (N = h("div")),
        (O = h("p")),
        (j = v(V)),
        (U = x()),
        ($ = h("p")),
        te.c(),
        (nt = x()),
        (K = h("div")),
        (Z = h("label")),
        (lt = v(et)),
        (J = x()),
        (Q = h("div")),
        (q = h("div")),
        (q.innerHTML = '<i class="fas fa-dollar-sign"></i>'),
        (ct = x()),
        (G = h("input")),
        (tt = x()),
        (H = h("div")),
        (st = h("button")),
        (st.textContent = "25%"),
        (dt = x()),
        (Y = h("button")),
        (Y.textContent = "50%"),
        (z = x()),
        (B = h("button")),
        (B.textContent = "75%"),
        (wt = x()),
        (ot = h("button")),
        (gt = v(ut)),
        (It = x()),
        (Ut = h("div")),
        (Nt = h("div")),
        (Ct = h("div")),
        (Tt = h("div")),
        (Tt.innerHTML =
          '<i class="fas fa-university text-blue-400 text-lg"></i>'),
        (vt = x()),
        (xt = h("div")),
        (ae = h("p")),
        (ue = v(Zt)),
        (Bt = x()),
        (zt = h("p")),
        Rt.c(),
        (de = x()),
        (Vt = h("div")),
        (se = h("p")),
        (jt = v(At)),
        (Ht = x()),
        (Dt = h("p")),
        Qt.c(),
        (Gt = x()),
        (at = h("div")),
        (E = h("button")),
        (pt = h("i")),
        (bt = x()),
        (Lt = v(kt)),
        (Ft = x()),
        Pt && Pt.c(),
        f(s, "class", "text-3xl font-bold text-white mb-2"),
        f(r, "class", "text-white/60"),
        f(b, "class", "w-2 h-2 bg-blue-400 rounded-full animate-pulse"),
        f(y, "class", "text-sm text-white/80"),
        f(g, "class", "flex items-center space-x-2"),
        f(_, "class", "modern-card px-4 py-2"),
        f(m, "class", "flex items-center space-x-4"),
        f(e, "class", "flex items-center justify-between mb-8"),
        f(
          I,
          "class",
          "w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center",
        ),
        f(O, "class", "text-white/60 text-sm"),
        f($, "class", "text-2xl font-bold text-white"),
        f(D, "class", "flex items-center space-x-4"),
        f(F, "class", "flex items-center justify-between"),
        f(R, "class", "modern-card p-6"),
        f(Z, "for", "deposit-amount"),
        f(Z, "class", "block text-white/80 text-sm font-medium mb-4"),
        f(
          q,
          "class",
          "absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40",
        ),
        f(G, "id", "deposit-amount"),
        f(G, "type", "number"),
        f(
          G,
          "class",
          "w-full bg-white/5 text-white text-xl font-semibold pl-12 pr-4 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500/50 transition-colors",
        ),
        f(G, "placeholder", (X = i[2].enter_amount)),
        f(G, "max", i[3]),
        f(G, "min", "0"),
        f(Q, "class", "relative"),
        f(
          st,
          "class",
          "px-3 py-2 bg-white/5 rounded-lg text-white/70 hover:bg-white/10 transition-colors text-sm",
        ),
        f(
          Y,
          "class",
          "px-3 py-2 bg-white/5 rounded-lg text-white/70 hover:bg-white/10 transition-colors text-sm",
        ),
        f(
          B,
          "class",
          "px-3 py-2 bg-white/5 rounded-lg text-white/70 hover:bg-white/10 transition-colors text-sm",
        ),
        f(
          ot,
          "class",
          "px-3 py-2 bg-white/5 rounded-lg text-white/70 hover:bg-white/10 transition-colors text-sm",
        ),
        f(H, "class", "grid grid-cols-4 gap-3 mt-4"),
        f(K, "class", "modern-card p-6"),
        f(
          Tt,
          "class",
          "w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center",
        ),
        f(ae, "class", "text-white/60 text-sm"),
        f(zt, "class", "text-2xl font-bold text-white"),
        f(Ct, "class", "flex items-center space-x-4"),
        f(se, "class", "text-white/60 text-sm"),
        f(Dt, "class", "text-xl font-bold text-blue-400"),
        f(Vt, "class", "text-right"),
        f(Nt, "class", "flex items-center justify-between"),
        f(Ut, "class", "modern-card p-6"),
        f(pt, "class", "fas fa-arrow-up mr-3"),
        f(
          E,
          "class",
          "w-full action-button py-4 text-lg font-semibold bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed",
        ),
        (E.disabled = $t = i[0] <= 0 || i[0] > i[3]),
        f(at, "class", "modern-card p-6"),
        f(T, "class", "grid gap-8"),
        f(P, "class", "max-w-2xl mx-auto w-full"),
        f(t, "class", "h-full flex flex-col p-8 overflow-y-auto"));
    },
    m(rt, ht) {
      (A(rt, t, ht),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, l),
        c(n, a),
        c(n, r),
        c(r, d),
        c(e, p),
        c(e, m),
        c(m, _),
        c(_, g),
        c(g, b),
        c(g, w),
        c(g, y),
        c(y, k),
        c(t, C),
        c(t, P),
        c(P, T),
        c(T, R),
        c(R, F),
        c(F, D),
        c(D, I),
        c(D, W),
        c(D, N),
        c(N, O),
        c(O, j),
        c(N, U),
        c(N, $),
        te.m($, null),
        c(T, nt),
        c(T, K),
        c(K, Z),
        c(Z, lt),
        c(K, J),
        c(K, Q),
        c(Q, q),
        c(Q, ct),
        c(Q, G),
        ce(G, i[0]),
        c(K, tt),
        c(K, H),
        c(H, st),
        c(H, dt),
        c(H, Y),
        c(H, z),
        c(H, B),
        c(H, wt),
        c(H, ot),
        c(ot, gt),
        c(T, It),
        c(T, Ut),
        c(Ut, Nt),
        c(Nt, Ct),
        c(Ct, Tt),
        c(Ct, vt),
        c(Ct, xt),
        c(xt, ae),
        c(ae, ue),
        c(xt, Bt),
        c(xt, zt),
        Rt.m(zt, null),
        c(Nt, de),
        c(Nt, Vt),
        c(Vt, se),
        c(se, jt),
        c(Vt, Ht),
        c(Vt, Dt),
        Qt.m(Dt, null),
        c(T, Gt),
        c(T, at),
        c(at, E),
        c(E, pt),
        c(E, bt),
        c(E, Lt),
        c(at, Ft),
        Pt && Pt.m(at, null),
        _e ||
          ((we = [
            ft(G, "input", i[6]),
            ft(st, "click", i[7]),
            ft(Y, "click", i[8]),
            ft(B, "click", i[9]),
            ft(ot, "click", i[10]),
            ft(E, "click", i[4]),
          ]),
          (_e = !0)));
    },
    p(rt, [ht]) {
      (ht & 4 && o !== (o = rt[2].deposit + "") && L(l, o),
        ht & 4 && u !== (u = rt[2].deposit_cash_into_account + "") && L(d, u),
        ht & 4 && S !== (S = rt[2].deposit_status + "") && L(k, S),
        ht & 4 && V !== (V = rt[2].cash_on_hand + "") && L(j, V),
        Jt === (Jt = Me(rt)) && te
          ? te.p(rt, ht)
          : (te.d(1), (te = Jt(rt)), te && (te.c(), te.m($, null))),
        ht & 4 && et !== (et = rt[2].amount + "") && L(lt, et),
        ht & 4 && X !== (X = rt[2].enter_amount) && f(G, "placeholder", X),
        ht & 8 && f(G, "max", rt[3]),
        ht & 1 && ze(G.value) !== rt[0] && ce(G, rt[0]),
        ht & 4 && ut !== (ut = rt[2].all + "") && L(gt, ut),
        ht & 4 && Zt !== (Zt = rt[2].new_bank_balance + "") && L(ue, Zt),
        ye === (ye = Re(rt)) && Rt
          ? Rt.p(rt, ht)
          : (Rt.d(1), (Rt = ye(rt)), Rt && (Rt.c(), Rt.m(zt, null))),
        ht & 4 && At !== (At = rt[2].depositing + "") && L(jt, At),
        Ae === (Ae = Se(rt)) && Qt
          ? Qt.p(rt, ht)
          : (Qt.d(1), (Qt = Ae(rt)), Qt && (Qt.c(), Qt.m(Dt, null))),
        ht & 4 && kt !== (kt = rt[2].deposit_button + "") && L(Lt, kt),
        ht & 9 &&
          $t !== ($t = rt[0] <= 0 || rt[0] > rt[3]) &&
          (E.disabled = $t),
        rt[0] > rt[3]
          ? Pt || ((Pt = kc()), Pt.c(), Pt.m(at, null))
          : Pt && (Pt.d(1), (Pt = null)));
    },
    i: be,
    o: be,
    d(rt) {
      (rt && M(t), te.d(), Rt.d(), Qt.d(), Pt && Pt.d(), (_e = !1), Ce(we));
    },
  };
}
function F_(i, t, e) {
  let n, s, o, l, a;
  (mt(i, li, (w) => e(2, (s = w))),
    mt(i, Zl, (w) => e(11, (o = w))),
    mt(i, Fi, (w) => e(3, (l = w))),
    mt(i, qe, (w) => e(5, (a = w))));
  let r = 0;
  async function u() {
    try {
      const w = await qt("ps-banking:client:getMoneyTypes", {}),
        y = w.find((k) => k.name === "bank"),
        S = w.find((k) => k.name === "cash");
      (y && qe.set(y.amount), S && Fi.set(S.amount));
    } catch (w) {
      console.error(w);
    }
  }
  async function d() {
    l < r
      ? Ot(
          `${s.deposit_error} ${r.toLocaleString(o.lang, { style: "currency", currency: o.currency, minimumFractionDigits: 0 })}`,
          s.error,
          "coins",
        )
      : (await qt("ps-banking:client:ATMdeposit", { amount: r }))
        ? (Ot(
            `${s.deposit_success} ${r.toLocaleString(o.lang, { style: "currency", currency: o.currency, minimumFractionDigits: 0 })}`,
            s.deposit_success,
            "coins",
          ),
          await u(),
          e(0, (r = 0)))
        : Ot(`${s.deposit_error}`, s.error, "coins");
  }
  function p() {
    ((r = ze(this.value)), e(0, r));
  }
  const m = () => e(0, (r = Math.floor(l * 0.25))),
    _ = () => e(0, (r = Math.floor(l * 0.5))),
    g = () => e(0, (r = Math.floor(l * 0.75))),
    b = () => e(0, (r = l));
  return (
    (i.$$.update = () => {
      i.$$.dirty & 33 && e(1, (n = (Number(a) || 0) + (Number(r) || 0)));
    }),
    [r, n, s, l, d, a, p, m, _, g, b]
  );
}
class E_ extends ui {
  constructor(t) {
    (super(), ci(this, t, F_, O_, ii, {}));
  }
}
function I_(i) {
  let t,
    e = i[1].toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 2 && e !== (e = s[1].toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function B_(i) {
  let t,
    e = (i[1] / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 2 && e !== (e = (o[1] / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function $_(i) {
  let t,
    e = (i[1] / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 2 && e !== (e = (o[1] / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function z_(i) {
  let t,
    e = i[2].toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 4 && e !== (e = s[2].toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function N_(i) {
  let t,
    e = (i[2] / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 4 && e !== (e = (o[2] / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function j_(i) {
  let t,
    e = (i[2] / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 4 && e !== (e = (o[2] / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function W_(i) {
  let t,
    e = i[3].totalReceived.toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 8 && e !== (e = s[3].totalReceived.toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function H_(i) {
  let t,
    e = (i[3].totalReceived / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 8 &&
        e !== (e = (o[3].totalReceived / 1e3).toFixed(1) + "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function V_(i) {
  let t,
    e = (i[3].totalReceived / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 8 &&
        e !== (e = (o[3].totalReceived / 1e6).toFixed(1) + "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function U_(i) {
  let t,
    e = i[3].totalUsed.toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 8 && e !== (e = s[3].totalUsed.toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function Y_(i) {
  let t,
    e = (i[3].totalUsed / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 8 && e !== (e = (o[3].totalUsed / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function X_(i) {
  let t,
    e = (i[3].totalUsed / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 8 && e !== (e = (o[3].totalUsed / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function K_(i) {
  let t,
    e = Math.abs(i[3].totalReceived - i[3].totalUsed).toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 8 &&
        e !==
          (e =
            Math.abs(s[3].totalReceived - s[3].totalUsed).toLocaleString() +
            "") &&
        L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function q_(i) {
  let t,
    e = (Math.abs(i[3].totalReceived - i[3].totalUsed) / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 8 &&
        e !==
          (e =
            (Math.abs(o[3].totalReceived - o[3].totalUsed) / 1e3).toFixed(1) +
            "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function G_(i) {
  let t,
    e = (Math.abs(i[3].totalReceived - i[3].totalUsed) / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 8 &&
        e !==
          (e =
            (Math.abs(o[3].totalReceived - o[3].totalUsed) / 1e6).toFixed(1) +
            "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function Q_(i) {
  let t,
    e = i[4].totalReceived.toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 16 && e !== (e = s[4].totalReceived.toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function Z_(i) {
  let t,
    e = (i[4].totalReceived / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 16 &&
        e !== (e = (o[4].totalReceived / 1e3).toFixed(1) + "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function J_(i) {
  let t,
    e = (i[4].totalReceived / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 16 &&
        e !== (e = (o[4].totalReceived / 1e6).toFixed(1) + "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function tg(i) {
  let t,
    e = i[4].totalUsed.toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("$")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 16 && e !== (e = s[4].totalUsed.toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function eg(i) {
  let t,
    e = (i[4].totalUsed / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 16 && e !== (e = (o[4].totalUsed / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function ig(i) {
  let t,
    e = (i[4].totalUsed / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 16 && e !== (e = (o[4].totalUsed / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function ng(i) {
  let t,
    e = Math.abs(i[4].totalReceived - i[4].totalUsed).toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("$")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 16 &&
        e !==
          (e =
            Math.abs(s[4].totalReceived - s[4].totalUsed).toLocaleString() +
            "") &&
        L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function sg(i) {
  let t,
    e = (Math.abs(i[4].totalReceived - i[4].totalUsed) / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 16 &&
        e !==
          (e =
            (Math.abs(o[4].totalReceived - o[4].totalUsed) / 1e3).toFixed(1) +
            "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function og(i) {
  let t,
    e = (Math.abs(i[4].totalReceived - i[4].totalUsed) / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 16 &&
        e !==
          (e =
            (Math.abs(o[4].totalReceived - o[4].totalUsed) / 1e6).toFixed(1) +
            "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function lg(i) {
  let t,
    e = i[5].totalReceived.toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("$")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 32 && e !== (e = s[5].totalReceived.toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function ag(i) {
  let t,
    e = (i[5].totalReceived / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 32 &&
        e !== (e = (o[5].totalReceived / 1e3).toFixed(1) + "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function rg(i) {
  let t,
    e = (i[5].totalReceived / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 32 &&
        e !== (e = (o[5].totalReceived / 1e6).toFixed(1) + "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function cg(i) {
  let t,
    e = i[5].totalUsed.toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("$")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 32 && e !== (e = s[5].totalUsed.toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function ug(i) {
  let t,
    e = (i[5].totalUsed / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 32 && e !== (e = (o[5].totalUsed / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function dg(i) {
  let t,
    e = (i[5].totalUsed / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 32 && e !== (e = (o[5].totalUsed / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function fg(i) {
  let t,
    e = Math.abs(i[5].totalReceived - i[5].totalUsed).toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("$")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 32 &&
        e !==
          (e =
            Math.abs(s[5].totalReceived - s[5].totalUsed).toLocaleString() +
            "") &&
        L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function hg(i) {
  let t,
    e = (Math.abs(i[5].totalReceived - i[5].totalUsed) / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 32 &&
        e !==
          (e =
            (Math.abs(o[5].totalReceived - o[5].totalUsed) / 1e3).toFixed(1) +
            "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function pg(i) {
  let t,
    e = (Math.abs(i[5].totalReceived - i[5].totalUsed) / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 32 &&
        e !==
          (e =
            (Math.abs(o[5].totalReceived - o[5].totalUsed) / 1e6).toFixed(1) +
            "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function mg(i) {
  let t,
    e,
    n,
    s,
    o = i[0].stats + "",
    l,
    a,
    r,
    u = i[0].financial_statistics_analytics + "",
    d,
    p,
    m,
    _,
    g,
    b,
    w,
    y,
    S = i[0].analytics + "",
    k,
    C,
    P,
    T,
    R,
    F,
    D,
    I,
    W,
    N = i[0].bank_balance + "",
    O,
    V,
    j,
    U,
    $,
    nt,
    K,
    Z,
    et,
    lt,
    J = i[0].cash_on_hand + "",
    Q,
    q,
    ct,
    G,
    X,
    tt,
    H,
    st,
    dt,
    Y,
    z,
    B = i[0].weekly_summary + "",
    wt,
    ot,
    ut,
    gt,
    It,
    Ut,
    Nt,
    Ct = i[0].income + "",
    Tt,
    vt,
    xt,
    ae,
    Zt,
    ue,
    Bt,
    zt,
    de,
    Vt,
    se = i[0].expenses + "",
    At,
    jt,
    Ht,
    Dt,
    Gt,
    at,
    E,
    pt,
    bt,
    kt,
    Lt = i[0].net_change + "",
    $t,
    Ft,
    _e,
    we,
    Me,
    Jt,
    te,
    Re,
    ye,
    Rt,
    Se,
    Ae,
    Qt,
    Pt,
    rt,
    ht,
    _t = i[0].monthly_summary + "",
    oe,
    Xt,
    Oe,
    Ii,
    hi,
    on,
    Bi,
    yn = i[0].income + "",
    pi,
    $i,
    Ge,
    wn,
    zn,
    xn,
    zi,
    mi,
    ln,
    Ni,
    ji = i[0].expenses + "",
    an,
    Nn,
    rn,
    cn,
    jn,
    Wi,
    ni,
    Xe,
    _i,
    kn,
    Hi = i[0].net_change + "",
    un,
    Wn,
    Vi,
    Ui,
    Yi,
    Xi,
    Hn,
    Mn,
    gi,
    Vn,
    Qe,
    bi,
    vi,
    Sn,
    cs,
    Ki,
    Ve = i[0].all_time_summary + "",
    Un,
    An,
    Fe,
    Ln,
    si,
    Ne,
    Pn,
    qi = i[0].total_income + "",
    Ue,
    Le,
    ge,
    yt,
    Yt,
    ga,
    Vs,
    Yn,
    us,
    Us,
    Ys = i[0].total_expenses + "",
    rl,
    ba,
    ds,
    va,
    cl,
    ya,
    Xs,
    Xn,
    fs,
    Ks,
    qs = i[0].net_lifetime + "",
    ul,
    wa,
    Kn,
    Gs,
    Qs,
    Zs,
    xa,
    Js,
    to;
  function ka(it, St) {
    return it[1] >= 1e6 ? $_ : it[1] >= 1e3 ? B_ : I_;
  }
  let eo = ka(i),
    yi = eo(i);
  function Ma(it, St) {
    return it[2] >= 1e6 ? j_ : it[2] >= 1e3 ? N_ : z_;
  }
  let io = Ma(i),
    wi = io(i);
  function Sa(it, St) {
    return it[3].totalReceived >= 1e6
      ? V_
      : it[3].totalReceived >= 1e3
        ? H_
        : W_;
  }
  let no = Sa(i),
    xi = no(i);
  function Aa(it, St) {
    return it[3].totalUsed >= 1e6 ? X_ : it[3].totalUsed >= 1e3 ? Y_ : U_;
  }
  let so = Aa(i),
    ki = so(i);
  function La(it, St) {
    return (
      St & 8 && (we = null),
      St & 8 && (Me = null),
      we == null &&
        (we = Math.abs(it[3].totalReceived - it[3].totalUsed) >= 1e6),
      we
        ? G_
        : (Me == null &&
            (Me = Math.abs(it[3].totalReceived - it[3].totalUsed) >= 1e3),
          Me ? q_ : K_)
    );
  }
  let oo = La(i, -1),
    Mi = oo(i);
  function Pa(it, St) {
    return it[4].totalReceived >= 1e6
      ? J_
      : it[4].totalReceived >= 1e3
        ? Z_
        : Q_;
  }
  let lo = Pa(i),
    Si = lo(i);
  function Ca(it, St) {
    return it[4].totalUsed >= 1e6 ? ig : it[4].totalUsed >= 1e3 ? eg : tg;
  }
  let ao = Ca(i),
    Ai = ao(i);
  function Ta(it, St) {
    return (
      St & 16 && (Ui = null),
      St & 16 && (Yi = null),
      Ui == null &&
        (Ui = Math.abs(it[4].totalReceived - it[4].totalUsed) >= 1e6),
      Ui
        ? og
        : (Yi == null &&
            (Yi = Math.abs(it[4].totalReceived - it[4].totalUsed) >= 1e3),
          Yi ? sg : ng)
    );
  }
  let ro = Ta(i, -1),
    Li = ro(i);
  function Da(it, St) {
    return it[5].totalReceived >= 1e6
      ? rg
      : it[5].totalReceived >= 1e3
        ? ag
        : lg;
  }
  let co = Da(i),
    Pi = co(i);
  function Ra(it, St) {
    return it[5].totalUsed >= 1e6 ? dg : it[5].totalUsed >= 1e3 ? ug : cg;
  }
  let uo = Ra(i),
    Ci = uo(i);
  function Oa(it, St) {
    return (
      St & 32 && (Gs = null),
      St & 32 && (Qs = null),
      Gs == null &&
        (Gs = Math.abs(it[5].totalReceived - it[5].totalUsed) >= 1e6),
      Gs
        ? pg
        : (Qs == null &&
            (Qs = Math.abs(it[5].totalReceived - it[5].totalUsed) >= 1e3),
          Qs ? hg : fg)
    );
  }
  let fo = Oa(i, -1),
    Ti = fo(i);
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("h1")),
        (l = v(o)),
        (a = x()),
        (r = h("p")),
        (d = v(u)),
        (p = x()),
        (m = h("div")),
        (_ = h("div")),
        (g = h("div")),
        (b = h("i")),
        (w = x()),
        (y = h("span")),
        (k = v(S)),
        (C = x()),
        (P = h("div")),
        (T = h("div")),
        (R = h("div")),
        (F = h("div")),
        (F.innerHTML =
          '<i class="fas fa-university text-blue-400 text-lg"></i>'),
        (D = x()),
        (I = h("div")),
        (W = h("p")),
        (O = v(N)),
        (V = x()),
        (j = h("p")),
        yi.c(),
        (U = x()),
        ($ = h("div")),
        (nt = h("div")),
        (K = h("div")),
        (K.innerHTML = '<i class="fas fa-wallet text-green-400 text-lg"></i>'),
        (Z = x()),
        (et = h("div")),
        (lt = h("p")),
        (Q = v(J)),
        (q = x()),
        (ct = h("p")),
        wi.c(),
        (G = x()),
        (X = h("div")),
        (tt = h("div")),
        (H = h("div")),
        (st = h("div")),
        (dt = h("div")),
        (dt.innerHTML = '<i class="fas fa-calendar-week text-green-400"></i>'),
        (Y = x()),
        (z = h("h3")),
        (wt = v(B)),
        (ot = x()),
        (ut = h("div")),
        (gt = h("div")),
        (It = h("div")),
        (Ut = h("div")),
        (Nt = h("p")),
        (Tt = v(Ct)),
        (vt = x()),
        (xt = h("p")),
        xi.c(),
        (ae = x()),
        (Zt = h("i")),
        (ue = x()),
        (Bt = h("div")),
        (zt = h("div")),
        (de = h("div")),
        (Vt = h("p")),
        (At = v(se)),
        (jt = x()),
        (Ht = h("p")),
        ki.c(),
        (Dt = x()),
        (Gt = h("i")),
        (at = x()),
        (E = h("div")),
        (pt = h("div")),
        (bt = h("div")),
        (kt = h("p")),
        ($t = v(Lt)),
        (Ft = x()),
        (_e = h("p")),
        Mi.c(),
        (te = x()),
        (Re = h("i")),
        (Rt = x()),
        (Se = h("div")),
        (Ae = h("div")),
        (Qt = h("div")),
        (Pt = h("div")),
        (Pt.innerHTML = '<i class="fas fa-calendar-alt text-blue-400"></i>'),
        (rt = x()),
        (ht = h("h3")),
        (oe = v(_t)),
        (Xt = x()),
        (Oe = h("div")),
        (Ii = h("div")),
        (hi = h("div")),
        (on = h("div")),
        (Bi = h("p")),
        (pi = v(yn)),
        ($i = x()),
        (Ge = h("p")),
        Si.c(),
        (wn = x()),
        (zn = h("i")),
        (xn = x()),
        (zi = h("div")),
        (mi = h("div")),
        (ln = h("div")),
        (Ni = h("p")),
        (an = v(ji)),
        (Nn = x()),
        (rn = h("p")),
        Ai.c(),
        (cn = x()),
        (jn = h("i")),
        (Wi = x()),
        (ni = h("div")),
        (Xe = h("div")),
        (_i = h("div")),
        (kn = h("p")),
        (un = v(Hi)),
        (Wn = x()),
        (Vi = h("p")),
        Li.c(),
        (Hn = x()),
        (Mn = h("i")),
        (Vn = x()),
        (Qe = h("div")),
        (bi = h("div")),
        (vi = h("div")),
        (Sn = h("div")),
        (Sn.innerHTML = '<i class="fas fa-infinity text-yellow-400"></i>'),
        (cs = x()),
        (Ki = h("h3")),
        (Un = v(Ve)),
        (An = x()),
        (Fe = h("div")),
        (Ln = h("div")),
        (si = h("div")),
        (Ne = h("div")),
        (Pn = h("p")),
        (Ue = v(qi)),
        (Le = x()),
        (ge = h("p")),
        Pi.c(),
        (yt = x()),
        (Yt = h("i")),
        (ga = x()),
        (Vs = h("div")),
        (Yn = h("div")),
        (us = h("div")),
        (Us = h("p")),
        (rl = v(Ys)),
        (ba = x()),
        (ds = h("p")),
        Ci.c(),
        (va = x()),
        (cl = h("i")),
        (ya = x()),
        (Xs = h("div")),
        (Xn = h("div")),
        (fs = h("div")),
        (Ks = h("p")),
        (ul = v(qs)),
        (wa = x()),
        (Kn = h("p")),
        Ti.c(),
        (xa = x()),
        (Js = h("i")),
        f(s, "class", "text-3xl font-bold text-white mb-2"),
        f(r, "class", "text-white/60"),
        f(b, "class", "fas fa-chart-line text-green-400"),
        f(y, "class", "text-sm text-white/80"),
        f(g, "class", "flex items-center space-x-2"),
        f(_, "class", "modern-card px-4 py-2"),
        f(m, "class", "flex items-center space-x-4"),
        f(e, "class", "flex items-center justify-between mb-8"),
        f(
          F,
          "class",
          "w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center",
        ),
        f(W, "class", "text-white/60 text-sm"),
        f(j, "class", "text-2xl font-bold text-white"),
        f(R, "class", "flex items-center space-x-4"),
        f(T, "class", "modern-card p-6"),
        f(
          K,
          "class",
          "w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center",
        ),
        f(lt, "class", "text-white/60 text-sm"),
        f(ct, "class", "text-2xl font-bold text-white"),
        f(nt, "class", "flex items-center space-x-4"),
        f($, "class", "modern-card p-6"),
        f(P, "class", "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"),
        f(
          dt,
          "class",
          "w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center",
        ),
        f(z, "class", "text-xl font-semibold text-white"),
        f(st, "class", "flex items-center space-x-3"),
        f(H, "class", "flex items-center justify-between mb-6"),
        f(Nt, "class", "text-white/60 text-sm"),
        f(xt, "class", "text-lg font-bold text-green-400"),
        f(Zt, "class", "fas fa-arrow-up text-green-400"),
        f(It, "class", "flex items-center justify-between"),
        f(gt, "class", "bg-white/5 rounded-xl p-4"),
        f(Vt, "class", "text-white/60 text-sm"),
        f(Ht, "class", "text-lg font-bold text-red-400"),
        f(Gt, "class", "fas fa-arrow-down text-red-400"),
        f(zt, "class", "flex items-center justify-between"),
        f(Bt, "class", "bg-white/5 rounded-xl p-4"),
        f(kt, "class", "text-white/60 text-sm"),
        f(
          _e,
          "class",
          (Jt = `text-lg font-bold ${i[3].totalReceived - i[3].totalUsed >= 0 ? "text-green-400" : "text-red-400"}`),
        ),
        f(
          Re,
          "class",
          (ye = `fas ${i[3].totalReceived - i[3].totalUsed >= 0 ? "fa-chart-line text-green-400" : "fa-chart-line-down text-red-400"}`),
        ),
        f(pt, "class", "flex items-center justify-between"),
        f(E, "class", "bg-white/5 rounded-xl p-4"),
        f(ut, "class", "grid grid-cols-1 md:grid-cols-3 gap-4"),
        f(tt, "class", "modern-card p-6"),
        f(
          Pt,
          "class",
          "w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center",
        ),
        f(ht, "class", "text-xl font-semibold text-white"),
        f(Qt, "class", "flex items-center space-x-3"),
        f(Ae, "class", "flex items-center justify-between mb-6"),
        f(Bi, "class", "text-white/60 text-sm"),
        f(Ge, "class", "text-lg font-bold text-green-400"),
        f(zn, "class", "fas fa-arrow-up text-green-400"),
        f(hi, "class", "flex items-center justify-between"),
        f(Ii, "class", "bg-white/5 rounded-xl p-4"),
        f(Ni, "class", "text-white/60 text-sm"),
        f(rn, "class", "text-lg font-bold text-red-400"),
        f(jn, "class", "fas fa-arrow-down text-red-400"),
        f(mi, "class", "flex items-center justify-between"),
        f(zi, "class", "bg-white/5 rounded-xl p-4"),
        f(kn, "class", "text-white/60 text-sm"),
        f(
          Vi,
          "class",
          (Xi = `text-lg font-bold ${i[4].totalReceived - i[4].totalUsed >= 0 ? "text-green-400" : "text-red-400"}`),
        ),
        f(
          Mn,
          "class",
          (gi = `fas ${i[4].totalReceived - i[4].totalUsed >= 0 ? "fa-chart-line text-green-400" : "fa-chart-line-down text-red-400"}`),
        ),
        f(Xe, "class", "flex items-center justify-between"),
        f(ni, "class", "bg-white/5 rounded-xl p-4"),
        f(Oe, "class", "grid grid-cols-1 md:grid-cols-3 gap-4"),
        f(Se, "class", "modern-card p-6"),
        f(
          Sn,
          "class",
          "w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center",
        ),
        f(Ki, "class", "text-xl font-semibold text-white"),
        f(vi, "class", "flex items-center space-x-3"),
        f(bi, "class", "flex items-center justify-between mb-6"),
        f(Pn, "class", "text-white/60 text-sm"),
        f(ge, "class", "text-lg font-bold text-green-400"),
        f(Yt, "class", "fas fa-arrow-up text-green-400"),
        f(si, "class", "flex items-center justify-between"),
        f(Ln, "class", "bg-white/5 rounded-xl p-4"),
        f(Us, "class", "text-white/60 text-sm"),
        f(ds, "class", "text-lg font-bold text-red-400"),
        f(cl, "class", "fas fa-arrow-down text-red-400"),
        f(Yn, "class", "flex items-center justify-between"),
        f(Vs, "class", "bg-white/5 rounded-xl p-4"),
        f(Ks, "class", "text-white/60 text-sm"),
        f(
          Kn,
          "class",
          (Zs = `text-lg font-bold ${i[5].totalReceived - i[5].totalUsed >= 0 ? "text-green-400" : "text-red-400"}`),
        ),
        f(
          Js,
          "class",
          (to = `fas ${i[5].totalReceived - i[5].totalUsed >= 0 ? "fa-trophy text-yellow-400" : "fa-chart-line-down text-red-400"}`),
        ),
        f(Xn, "class", "flex items-center justify-between"),
        f(Xs, "class", "bg-white/5 rounded-xl p-4"),
        f(Fe, "class", "grid grid-cols-1 md:grid-cols-3 gap-4"),
        f(Qe, "class", "modern-card p-6"),
        f(X, "class", "grid gap-8"),
        f(t, "class", "h-full flex flex-col p-8 overflow-y-auto"));
    },
    m(it, St) {
      (A(it, t, St),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, l),
        c(n, a),
        c(n, r),
        c(r, d),
        c(e, p),
        c(e, m),
        c(m, _),
        c(_, g),
        c(g, b),
        c(g, w),
        c(g, y),
        c(y, k),
        c(t, C),
        c(t, P),
        c(P, T),
        c(T, R),
        c(R, F),
        c(R, D),
        c(R, I),
        c(I, W),
        c(W, O),
        c(I, V),
        c(I, j),
        yi.m(j, null),
        c(P, U),
        c(P, $),
        c($, nt),
        c(nt, K),
        c(nt, Z),
        c(nt, et),
        c(et, lt),
        c(lt, Q),
        c(et, q),
        c(et, ct),
        wi.m(ct, null),
        c(t, G),
        c(t, X),
        c(X, tt),
        c(tt, H),
        c(H, st),
        c(st, dt),
        c(st, Y),
        c(st, z),
        c(z, wt),
        c(tt, ot),
        c(tt, ut),
        c(ut, gt),
        c(gt, It),
        c(It, Ut),
        c(Ut, Nt),
        c(Nt, Tt),
        c(Ut, vt),
        c(Ut, xt),
        xi.m(xt, null),
        c(It, ae),
        c(It, Zt),
        c(ut, ue),
        c(ut, Bt),
        c(Bt, zt),
        c(zt, de),
        c(de, Vt),
        c(Vt, At),
        c(de, jt),
        c(de, Ht),
        ki.m(Ht, null),
        c(zt, Dt),
        c(zt, Gt),
        c(ut, at),
        c(ut, E),
        c(E, pt),
        c(pt, bt),
        c(bt, kt),
        c(kt, $t),
        c(bt, Ft),
        c(bt, _e),
        Mi.m(_e, null),
        c(pt, te),
        c(pt, Re),
        c(X, Rt),
        c(X, Se),
        c(Se, Ae),
        c(Ae, Qt),
        c(Qt, Pt),
        c(Qt, rt),
        c(Qt, ht),
        c(ht, oe),
        c(Se, Xt),
        c(Se, Oe),
        c(Oe, Ii),
        c(Ii, hi),
        c(hi, on),
        c(on, Bi),
        c(Bi, pi),
        c(on, $i),
        c(on, Ge),
        Si.m(Ge, null),
        c(hi, wn),
        c(hi, zn),
        c(Oe, xn),
        c(Oe, zi),
        c(zi, mi),
        c(mi, ln),
        c(ln, Ni),
        c(Ni, an),
        c(ln, Nn),
        c(ln, rn),
        Ai.m(rn, null),
        c(mi, cn),
        c(mi, jn),
        c(Oe, Wi),
        c(Oe, ni),
        c(ni, Xe),
        c(Xe, _i),
        c(_i, kn),
        c(kn, un),
        c(_i, Wn),
        c(_i, Vi),
        Li.m(Vi, null),
        c(Xe, Hn),
        c(Xe, Mn),
        c(X, Vn),
        c(X, Qe),
        c(Qe, bi),
        c(bi, vi),
        c(vi, Sn),
        c(vi, cs),
        c(vi, Ki),
        c(Ki, Un),
        c(Qe, An),
        c(Qe, Fe),
        c(Fe, Ln),
        c(Ln, si),
        c(si, Ne),
        c(Ne, Pn),
        c(Pn, Ue),
        c(Ne, Le),
        c(Ne, ge),
        Pi.m(ge, null),
        c(si, yt),
        c(si, Yt),
        c(Fe, ga),
        c(Fe, Vs),
        c(Vs, Yn),
        c(Yn, us),
        c(us, Us),
        c(Us, rl),
        c(us, ba),
        c(us, ds),
        Ci.m(ds, null),
        c(Yn, va),
        c(Yn, cl),
        c(Fe, ya),
        c(Fe, Xs),
        c(Xs, Xn),
        c(Xn, fs),
        c(fs, Ks),
        c(Ks, ul),
        c(fs, wa),
        c(fs, Kn),
        Ti.m(Kn, null),
        c(Xn, xa),
        c(Xn, Js));
    },
    p(it, [St]) {
      (St & 1 && o !== (o = it[0].stats + "") && L(l, o),
        St & 1 &&
          u !== (u = it[0].financial_statistics_analytics + "") &&
          L(d, u),
        St & 1 && S !== (S = it[0].analytics + "") && L(k, S),
        St & 1 && N !== (N = it[0].bank_balance + "") && L(O, N),
        eo === (eo = ka(it)) && yi
          ? yi.p(it, St)
          : (yi.d(1), (yi = eo(it)), yi && (yi.c(), yi.m(j, null))),
        St & 1 && J !== (J = it[0].cash_on_hand + "") && L(Q, J),
        io === (io = Ma(it)) && wi
          ? wi.p(it, St)
          : (wi.d(1), (wi = io(it)), wi && (wi.c(), wi.m(ct, null))),
        St & 1 && B !== (B = it[0].weekly_summary + "") && L(wt, B),
        St & 1 && Ct !== (Ct = it[0].income + "") && L(Tt, Ct),
        no === (no = Sa(it)) && xi
          ? xi.p(it, St)
          : (xi.d(1), (xi = no(it)), xi && (xi.c(), xi.m(xt, null))),
        St & 1 && se !== (se = it[0].expenses + "") && L(At, se),
        so === (so = Aa(it)) && ki
          ? ki.p(it, St)
          : (ki.d(1), (ki = so(it)), ki && (ki.c(), ki.m(Ht, null))),
        St & 1 && Lt !== (Lt = it[0].net_change + "") && L($t, Lt),
        oo === (oo = La(it, St)) && Mi
          ? Mi.p(it, St)
          : (Mi.d(1), (Mi = oo(it)), Mi && (Mi.c(), Mi.m(_e, null))),
        St & 8 &&
          Jt !==
            (Jt = `text-lg font-bold ${it[3].totalReceived - it[3].totalUsed >= 0 ? "text-green-400" : "text-red-400"}`) &&
          f(_e, "class", Jt),
        St & 8 &&
          ye !==
            (ye = `fas ${it[3].totalReceived - it[3].totalUsed >= 0 ? "fa-chart-line text-green-400" : "fa-chart-line-down text-red-400"}`) &&
          f(Re, "class", ye),
        St & 1 && _t !== (_t = it[0].monthly_summary + "") && L(oe, _t),
        St & 1 && yn !== (yn = it[0].income + "") && L(pi, yn),
        lo === (lo = Pa(it)) && Si
          ? Si.p(it, St)
          : (Si.d(1), (Si = lo(it)), Si && (Si.c(), Si.m(Ge, null))),
        St & 1 && ji !== (ji = it[0].expenses + "") && L(an, ji),
        ao === (ao = Ca(it)) && Ai
          ? Ai.p(it, St)
          : (Ai.d(1), (Ai = ao(it)), Ai && (Ai.c(), Ai.m(rn, null))),
        St & 1 && Hi !== (Hi = it[0].net_change + "") && L(un, Hi),
        ro === (ro = Ta(it, St)) && Li
          ? Li.p(it, St)
          : (Li.d(1), (Li = ro(it)), Li && (Li.c(), Li.m(Vi, null))),
        St & 16 &&
          Xi !==
            (Xi = `text-lg font-bold ${it[4].totalReceived - it[4].totalUsed >= 0 ? "text-green-400" : "text-red-400"}`) &&
          f(Vi, "class", Xi),
        St & 16 &&
          gi !==
            (gi = `fas ${it[4].totalReceived - it[4].totalUsed >= 0 ? "fa-chart-line text-green-400" : "fa-chart-line-down text-red-400"}`) &&
          f(Mn, "class", gi),
        St & 1 && Ve !== (Ve = it[0].all_time_summary + "") && L(Un, Ve),
        St & 1 && qi !== (qi = it[0].total_income + "") && L(Ue, qi),
        co === (co = Da(it)) && Pi
          ? Pi.p(it, St)
          : (Pi.d(1), (Pi = co(it)), Pi && (Pi.c(), Pi.m(ge, null))),
        St & 1 && Ys !== (Ys = it[0].total_expenses + "") && L(rl, Ys),
        uo === (uo = Ra(it)) && Ci
          ? Ci.p(it, St)
          : (Ci.d(1), (Ci = uo(it)), Ci && (Ci.c(), Ci.m(ds, null))),
        St & 1 && qs !== (qs = it[0].net_lifetime + "") && L(ul, qs),
        fo === (fo = Oa(it, St)) && Ti
          ? Ti.p(it, St)
          : (Ti.d(1), (Ti = fo(it)), Ti && (Ti.c(), Ti.m(Kn, null))),
        St & 32 &&
          Zs !==
            (Zs = `text-lg font-bold ${it[5].totalReceived - it[5].totalUsed >= 0 ? "text-green-400" : "text-red-400"}`) &&
          f(Kn, "class", Zs),
        St & 32 &&
          to !==
            (to = `fas ${it[5].totalReceived - it[5].totalUsed >= 0 ? "fa-trophy text-yellow-400" : "fa-chart-line-down text-red-400"}`) &&
          f(Js, "class", to));
    },
    i: be,
    o: be,
    d(it) {
      (it && M(t),
        yi.d(),
        wi.d(),
        xi.d(),
        ki.d(),
        Mi.d(),
        Si.d(),
        Ai.d(),
        Li.d(),
        Pi.d(),
        Ci.d(),
        Ti.d());
    },
  };
}
function _g(i, t, e) {
  let n, s, o, l, a, r;
  (mt(i, li, (_) => e(0, (n = _))),
    mt(i, qe, (_) => e(1, (s = _))),
    mt(i, Fi, (_) => e(2, (o = _))));
  let u = Et({ totalReceived: 0, totalUsed: 0, totalTransactions: 0 });
  mt(i, u, (_) => e(3, (l = _)));
  let d = Et({ totalReceived: 0, totalUsed: 0, totalTransactions: 0 });
  mt(i, d, (_) => e(4, (a = _)));
  let p = Et({ totalReceived: 0, totalUsed: 0, totalTransactions: 0 });
  mt(i, p, (_) => e(5, (r = _)));
  async function m() {
    try {
      const _ = await qt("ps-banking:client:getWeeklySummary", {}),
        g = await qt("ps-banking:client:getMonthlySummary", {}),
        b = await qt("ps-banking:client:getAllTimeSummary", {});
      (u.set(_ || { totalReceived: 0, totalUsed: 0, totalTransactions: 0 }),
        d.set(g || { totalReceived: 0, totalUsed: 0, totalTransactions: 0 }),
        p.set(b || { totalReceived: 0, totalUsed: 0, totalTransactions: 0 }));
    } catch (_) {
      console.error(_);
    }
  }
  return (
    sn(() => {
      m();
    }),
    [n, s, o, l, a, r, u, d, p]
  );
}
class gg extends ui {
  constructor(t) {
    (super(), ci(this, t, _g, mg, ii, {}));
  }
}
function Mc(i, t, e) {
  const n = i.slice();
  return ((n[74] = t[e]), n);
}
function Sc(i, t, e) {
  const n = i.slice();
  return ((n[77] = t[e]), n);
}
function Ac(i, t, e) {
  const n = i.slice();
  return ((n[74] = t[e]), n);
}
function bg(i) {
  let t,
    e = i[18].toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("$")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o[0] & 262144 && e !== (e = s[18].toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function vg(i) {
  let t,
    e = (i[18] / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l[0] & 262144 && e !== (e = (o[18] / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function yg(i) {
  let t,
    e = (i[18] / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l[0] & 262144 && e !== (e = (o[18] / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function wg(i) {
  let t,
    e,
    n,
    s,
    o = i[0].no_additional_accounts + "",
    l,
    a,
    r,
    u = i[0].create_savings_business_account + "",
    d,
    p,
    m,
    _,
    g,
    b = i[0].create_your_first_account + "",
    w,
    y,
    S;
  return {
    c() {
      ((t = h("div")),
        (e = h("i")),
        (n = x()),
        (s = h("h3")),
        (l = v(o)),
        (a = x()),
        (r = h("p")),
        (d = v(u)),
        (p = x()),
        (m = h("button")),
        (_ = h("i")),
        (g = x()),
        (w = v(b)),
        f(e, "class", "fas fa-piggy-bank text-white/30 text-5xl mb-4"),
        f(s, "class", "text-xl font-semibold text-white mb-2"),
        f(r, "class", "text-white/60 mb-6"),
        f(_, "class", "fas fa-plus mr-2"),
        f(m, "class", "action-button"),
        f(t, "class", "modern-card p-12 text-center"));
    },
    m(k, C) {
      (A(k, t, C),
        c(t, e),
        c(t, n),
        c(t, s),
        c(s, l),
        c(t, a),
        c(t, r),
        c(r, d),
        c(t, p),
        c(t, m),
        c(m, _),
        c(m, g),
        c(m, w),
        y || ((S = ft(m, "click", i[54])), (y = !0)));
    },
    p(k, C) {
      (C[0] & 1 && o !== (o = k[0].no_additional_accounts + "") && L(l, o),
        C[0] & 1 &&
          u !== (u = k[0].create_savings_business_account + "") &&
          L(d, u),
        C[0] & 1 && b !== (b = k[0].create_your_first_account + "") && L(w, b));
    },
    i: be,
    o: be,
    d(k) {
      (k && M(t), (y = !1), S());
    },
  };
}
function xg(i) {
  let t = [],
    e = new Map(),
    n,
    s,
    o = xe(i[17]);
  const l = (a) => a[77].id;
  for (let a = 0; a < o.length; a += 1) {
    let r = Sc(i, o, a),
      u = l(r);
    e.set(u, (t[a] = Dc(u, r)));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1) t[a].c();
      n = nn();
    },
    m(a, r) {
      for (let u = 0; u < t.length; u += 1) t[u] && t[u].m(a, r);
      (A(a, n, r), (s = !0));
    },
    p(a, r) {
      (r[0] & 131073) | (r[1] & 47168) &&
        ((o = xe(a[17])),
        Ee(),
        (t = $s(t, r, l, 1, a, o, e, n.parentNode, Uo, Dc, n, Sc)),
        Ie());
    },
    i(a) {
      if (!s) {
        for (let r = 0; r < o.length; r += 1) Mt(t[r]);
        s = !0;
      }
    },
    o(a) {
      for (let r = 0; r < t.length; r += 1) Wt(t[r]);
      s = !1;
    },
    d(a) {
      a && M(n);
      for (let r = 0; r < t.length; r += 1) t[r].d(a);
    },
  };
}
function kg(i) {
  let t,
    e = i[0].inactive + "",
    n;
  return {
    c() {
      ((t = h("span")),
        (n = v(e)),
        f(
          t,
          "class",
          "px-2 py-1 bg-red-500/20 rounded-full text-red-400 text-xs",
        ));
    },
    m(s, o) {
      (A(s, t, o), c(t, n));
    },
    p(s, o) {
      o[0] & 1 && e !== (e = s[0].inactive + "") && L(n, e);
    },
    d(s) {
      s && M(t);
    },
  };
}
function Mg(i) {
  let t,
    e = i[0].active + "",
    n;
  return {
    c() {
      ((t = h("span")),
        (n = v(e)),
        f(
          t,
          "class",
          "px-2 py-1 bg-blue-500/20 rounded-full text-blue-400 text-xs",
        ));
    },
    m(s, o) {
      (A(s, t, o), c(t, n));
    },
    p(s, o) {
      o[0] & 1 && e !== (e = s[0].active + "") && L(n, e);
    },
    d(s) {
      s && M(t);
    },
  };
}
function Sg(i) {
  let t,
    e = i[77].balance.toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("$")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o[0] & 131072 &&
        e !== (e = s[77].balance.toLocaleString() + "") &&
        L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function Ag(i) {
  let t,
    e = (i[77].balance / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l[0] & 131072 &&
        e !== (e = (o[77].balance / 1e3).toFixed(1) + "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function Lg(i) {
  let t,
    e = (i[77].balance / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("$")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l[0] & 131072 &&
        e !== (e = (o[77].balance / 1e6).toFixed(1) + "") &&
        L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function Lc(i) {
  let t, e, n, s, o;
  function l() {
    return i[52](i[77]);
  }
  return {
    c() {
      ((t = h("button")),
        (e = h("i")),
        f(e, "class", "fas fa-user-minus"),
        f(
          t,
          "class",
          "p-2 bg-yellow-500/20 rounded-lg text-yellow-400 hover:bg-yellow-500/30 transition-colors",
        ),
        f(t, "title", (n = i[0].remove_user)));
    },
    m(a, r) {
      (A(a, t, r), c(t, e), s || ((o = ft(t, "click", l)), (s = !0)));
    },
    p(a, r) {
      ((i = a), r[0] & 1 && n !== (n = i[0].remove_user) && f(t, "title", n));
    },
    d(a) {
      (a && M(t), (s = !1), o());
    },
  };
}
function Pc(i) {
  let t,
    e,
    n = i[0].shared_with + "",
    s,
    o,
    l = i[77].users.length + "",
    a,
    r,
    u,
    d,
    p = xe(i[77].users),
    m = [];
  for (let _ = 0; _ < p.length; _ += 1) m[_] = Cc(Ac(i, p, _));
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (s = v(n)),
        (o = v(" (")),
        (a = v(l)),
        (r = v("):")),
        (u = x()),
        (d = h("div")));
      for (let _ = 0; _ < m.length; _ += 1) m[_].c();
      (f(e, "class", "text-white/80 text-xs font-medium mb-2"),
        f(d, "class", "flex flex-wrap gap-1"),
        f(t, "class", "mt-3 pt-3 border-t border-white/10"));
    },
    m(_, g) {
      (A(_, t, g),
        c(t, e),
        c(e, s),
        c(e, o),
        c(e, a),
        c(e, r),
        c(t, u),
        c(t, d));
      for (let b = 0; b < m.length; b += 1) m[b] && m[b].m(d, null);
    },
    p(_, g) {
      if (
        (g[0] & 1 && n !== (n = _[0].shared_with + "") && L(s, n),
        g[0] & 131072 && l !== (l = _[77].users.length + "") && L(a, l),
        g[0] & 131072)
      ) {
        p = xe(_[77].users);
        let b;
        for (b = 0; b < p.length; b += 1) {
          const w = Ac(_, p, b);
          m[b] ? m[b].p(w, g) : ((m[b] = Cc(w)), m[b].c(), m[b].m(d, null));
        }
        for (; b < m.length; b += 1) m[b].d(1);
        m.length = p.length;
      }
    },
    d(_) {
      (_ && M(t), ns(m, _));
    },
  };
}
function Cc(i) {
  let t,
    e,
    n = i[74].name + "",
    s,
    o;
  return {
    c() {
      ((t = h("span")),
        (e = h("i")),
        (s = v(n)),
        (o = x()),
        f(e, "class", "fas fa-user mr-1"),
        f(
          t,
          "class",
          "px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-lg",
        ));
    },
    m(l, a) {
      (A(l, t, a), c(t, e), c(t, s), c(t, o));
    },
    p(l, a) {
      a[0] & 131072 && n !== (n = l[74].name + "") && L(s, n);
    },
    d(l) {
      l && M(t);
    },
  };
}
function Tc(i) {
  let t;
  function e(o, l) {
    return o[77].owner.state ? Cg : Pg;
  }
  let n = e(i),
    s = n(i);
  return {
    c() {
      ((t = h("div")), s.c(), f(t, "class", "mt-2 text-xs text-white/60"));
    },
    m(o, l) {
      (A(o, t, l), s.m(t, null));
    },
    p(o, l) {
      n === (n = e(o)) && s
        ? s.p(o, l)
        : (s.d(1), (s = n(o)), s && (s.c(), s.m(t, null)));
    },
    d(o) {
      (o && M(t), s.d());
    },
  };
}
function Pg(i) {
  let t,
    e = i[0].shared_account + "",
    n;
  return {
    c() {
      ((t = h("i")),
        (n = v(e)),
        f(t, "class", "fas fa-users text-blue-400 mr-1"));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o[0] & 1 && e !== (e = s[0].shared_account + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function Cg(i) {
  let t,
    e = i[0].owner_you + "",
    n;
  return {
    c() {
      ((t = h("i")),
        (n = v(e)),
        f(t, "class", "fas fa-crown text-yellow-400 mr-1"));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o[0] & 1 && e !== (e = s[0].owner_you + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function Dc(i, t) {
  let e,
    n,
    s,
    o,
    l,
    a,
    r,
    u,
    d,
    p,
    m,
    _ = t[77].name + "",
    g,
    b,
    w,
    y,
    S,
    k = t[77].type + "",
    C,
    P,
    T = t[0].account_suffix + "",
    R,
    F,
    D,
    I = t[0].created + "",
    W,
    N,
    O = $c(t[77].created) + "",
    V,
    j,
    U,
    $,
    nt,
    K = t[0].balance + "",
    Z,
    et,
    lt,
    J,
    Q,
    q,
    ct,
    G,
    X,
    tt,
    H,
    st,
    dt,
    Y,
    z,
    B,
    wt,
    ot,
    ut,
    gt,
    It,
    Ut,
    Nt,
    Ct,
    Tt,
    vt,
    xt,
    ae,
    Zt,
    ue,
    Bt,
    zt,
    de;
  function Vt($t, Ft) {
    return $t[77].isActive ? Mg : kg;
  }
  let se = Vt(t),
    At = se(t);
  function jt($t, Ft) {
    return $t[77].balance >= 1e6 ? Lg : $t[77].balance >= 1e3 ? Ag : Sg;
  }
  let Ht = jt(t),
    Dt = Ht(t);
  function Gt() {
    return t[49](t[77]);
  }
  function at() {
    return t[50](t[77]);
  }
  function E() {
    return t[51](t[77]);
  }
  let pt = t[77].users && t[77].users.length > 0 && Lc(t);
  function bt() {
    return t[53](t[77]);
  }
  let kt = t[77].users && t[77].users.length > 0 && Pc(t),
    Lt = t[77].owner && Tc(t);
  return {
    key: i,
    first: null,
    c() {
      ((e = h("div")),
        (n = h("div")),
        (s = h("div")),
        (o = h("div")),
        (l = h("i")),
        (u = x()),
        (d = h("div")),
        (p = h("div")),
        (m = h("h3")),
        (g = v(_)),
        (b = x()),
        At.c(),
        (w = x()),
        (y = h("div")),
        (S = h("span")),
        (C = v(k)),
        (P = x()),
        (R = v(T)),
        (F = x()),
        (D = h("span")),
        (W = v(I)),
        (N = x()),
        (V = v(O)),
        (j = x()),
        (U = h("div")),
        ($ = h("div")),
        (nt = h("p")),
        (Z = v(K)),
        (et = x()),
        (lt = h("p")),
        Dt.c(),
        (J = x()),
        (Q = h("div")),
        (q = h("button")),
        (ct = h("i")),
        (X = x()),
        (tt = h("button")),
        (H = h("i")),
        (dt = x()),
        (Y = h("button")),
        (z = h("i")),
        (wt = x()),
        (ot = h("button")),
        (ut = h("i")),
        (It = x()),
        pt && pt.c(),
        (Ut = x()),
        (Nt = h("button")),
        (Ct = h("i")),
        (vt = x()),
        kt && kt.c(),
        (xt = x()),
        Lt && Lt.c(),
        (ae = x()),
        f(
          l,
          "class",
          (a = `fas ${t[77].type === "savings" ? "fa-piggy-bank text-white/40" : t[77].type === "business" ? "fa-briefcase text-green-400" : "fa-wallet text-orange-400"} text-lg`),
        ),
        f(
          o,
          "class",
          (r = `w-12 h-12 rounded-xl flex items-center justify-center ${t[77].type === "savings" ? "bg-white/5" : t[77].type === "business" ? "bg-green-500/20" : "bg-orange-500/20"}`),
        ),
        f(m, "class", "text-white font-semibold truncate"),
        f(p, "class", "flex items-center space-x-2 mb-1"),
        f(S, "class", "capitalize"),
        f(y, "class", "flex items-center space-x-4 text-sm text-white/60"),
        f(d, "class", "flex-1 min-w-0"),
        f(s, "class", "flex items-center space-x-4 flex-1"),
        f(nt, "class", "text-sm text-white/60"),
        f(lt, "class", "text-xl font-bold text-white"),
        f($, "class", "text-right"),
        f(ct, "class", "fas fa-eye"),
        f(
          q,
          "class",
          "p-2 bg-white/5 rounded-lg text-white/40 hover:bg-white/10 transition-colors",
        ),
        f(q, "title", (G = t[0].view_details)),
        f(H, "class", "fas fa-plus"),
        f(
          tt,
          "class",
          "p-2 bg-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors",
        ),
        f(tt, "title", (st = t[0].deposit_money)),
        f(z, "class", "fas fa-minus"),
        f(
          Y,
          "class",
          "p-2 bg-orange-500/20 rounded-lg text-orange-400 hover:bg-orange-500/30 transition-colors",
        ),
        f(Y, "title", (B = t[0].withdraw_money)),
        f(ut, "class", "fas fa-user-plus"),
        f(
          ot,
          "class",
          "p-2 bg-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors",
        ),
        f(ot, "title", (gt = t[0].add_user)),
        f(Ct, "class", "fas fa-trash"),
        f(
          Nt,
          "class",
          "p-2 bg-red-500/20 rounded-lg text-red-400 hover:bg-red-500/30 transition-colors",
        ),
        f(Nt, "title", (Tt = t[0].delete_account)),
        f(Q, "class", "flex space-x-2"),
        f(U, "class", "flex items-center space-x-4"),
        f(n, "class", "flex items-center justify-between"),
        f(e, "class", "modern-card modern-card-hover p-6"),
        (this.first = e));
    },
    m($t, Ft) {
      (A($t, e, Ft),
        c(e, n),
        c(n, s),
        c(s, o),
        c(o, l),
        c(s, u),
        c(s, d),
        c(d, p),
        c(p, m),
        c(m, g),
        c(p, b),
        At.m(p, null),
        c(d, w),
        c(d, y),
        c(y, S),
        c(S, C),
        c(S, P),
        c(S, R),
        c(y, F),
        c(y, D),
        c(D, W),
        c(D, N),
        c(D, V),
        c(n, j),
        c(n, U),
        c(U, $),
        c($, nt),
        c(nt, Z),
        c($, et),
        c($, lt),
        Dt.m(lt, null),
        c(U, J),
        c(U, Q),
        c(Q, q),
        c(q, ct),
        c(Q, X),
        c(Q, tt),
        c(tt, H),
        c(Q, dt),
        c(Q, Y),
        c(Y, z),
        c(Q, wt),
        c(Q, ot),
        c(ot, ut),
        c(Q, It),
        pt && pt.m(Q, null),
        c(Q, Ut),
        c(Q, Nt),
        c(Nt, Ct),
        c(e, vt),
        kt && kt.m(e, null),
        c(e, xt),
        Lt && Lt.m(e, null),
        c(e, ae),
        (Bt = !0),
        zt ||
          ((de = [
            ft(tt, "click", Gt),
            ft(Y, "click", at),
            ft(ot, "click", E),
            ft(Nt, "click", bt),
          ]),
          (zt = !0)));
    },
    p($t, Ft) {
      ((t = $t),
        (!Bt ||
          (Ft[0] & 131072 &&
            a !==
              (a = `fas ${t[77].type === "savings" ? "fa-piggy-bank text-white/40" : t[77].type === "business" ? "fa-briefcase text-green-400" : "fa-wallet text-orange-400"} text-lg`))) &&
          f(l, "class", a),
        (!Bt ||
          (Ft[0] & 131072 &&
            r !==
              (r = `w-12 h-12 rounded-xl flex items-center justify-center ${t[77].type === "savings" ? "bg-white/5" : t[77].type === "business" ? "bg-green-500/20" : "bg-orange-500/20"}`))) &&
          f(o, "class", r),
        (!Bt || Ft[0] & 131072) && _ !== (_ = t[77].name + "") && L(g, _),
        se === (se = Vt(t)) && At
          ? At.p(t, Ft)
          : (At.d(1), (At = se(t)), At && (At.c(), At.m(p, null))),
        (!Bt || Ft[0] & 131072) && k !== (k = t[77].type + "") && L(C, k),
        (!Bt || Ft[0] & 1) && T !== (T = t[0].account_suffix + "") && L(R, T),
        (!Bt || Ft[0] & 1) && I !== (I = t[0].created + "") && L(W, I),
        (!Bt || Ft[0] & 131072) &&
          O !== (O = $c(t[77].created) + "") &&
          L(V, O),
        (!Bt || Ft[0] & 1) && K !== (K = t[0].balance + "") && L(Z, K),
        Ht === (Ht = jt(t)) && Dt
          ? Dt.p(t, Ft)
          : (Dt.d(1), (Dt = Ht(t)), Dt && (Dt.c(), Dt.m(lt, null))),
        (!Bt || (Ft[0] & 1 && G !== (G = t[0].view_details))) &&
          f(q, "title", G),
        (!Bt || (Ft[0] & 1 && st !== (st = t[0].deposit_money))) &&
          f(tt, "title", st),
        (!Bt || (Ft[0] & 1 && B !== (B = t[0].withdraw_money))) &&
          f(Y, "title", B),
        (!Bt || (Ft[0] & 1 && gt !== (gt = t[0].add_user))) &&
          f(ot, "title", gt),
        t[77].users && t[77].users.length > 0
          ? pt
            ? pt.p(t, Ft)
            : ((pt = Lc(t)), pt.c(), pt.m(Q, Ut))
          : pt && (pt.d(1), (pt = null)),
        (!Bt || (Ft[0] & 1 && Tt !== (Tt = t[0].delete_account))) &&
          f(Nt, "title", Tt),
        t[77].users && t[77].users.length > 0
          ? kt
            ? kt.p(t, Ft)
            : ((kt = Pc(t)), kt.c(), kt.m(e, xt))
          : kt && (kt.d(1), (kt = null)),
        t[77].owner
          ? Lt
            ? Lt.p(t, Ft)
            : ((Lt = Tc(t)), Lt.c(), Lt.m(e, ae))
          : Lt && (Lt.d(1), (Lt = null)));
    },
    i($t) {
      Bt ||
        ($t &&
          he(() => {
            Bt &&
              (ue && ue.end(1),
              (Zt = Te(e, le, { duration: 300 })),
              Zt.start());
          }),
        (Bt = !0));
    },
    o($t) {
      (Zt && Zt.invalidate(),
        $t && (ue = De(e, Yo, { duration: 300 })),
        (Bt = !1));
    },
    d($t) {
      ($t && M(e),
        At.d(),
        Dt.d(),
        pt && pt.d(),
        kt && kt.d(),
        Lt && Lt.d(),
        $t && ue && ue.end(),
        (zt = !1),
        Ce(de));
    },
  };
}
function Rc(i) {
  let t,
    e,
    n,
    s,
    o = i[0].create_new_account + "",
    l,
    a,
    r,
    u,
    d,
    p,
    m,
    _ = i[0].account_name + "",
    g,
    b,
    w,
    y,
    S,
    k,
    C,
    P = i[0].account_type + "",
    T,
    R,
    F,
    D,
    I = i[0].savings_account + "",
    W,
    N,
    O = i[0].business_account + "",
    V,
    j,
    U = i[0].investment_account + "",
    $,
    nt,
    K,
    Z,
    et = i[0].cancel + "",
    lt,
    J,
    Q,
    q = i[0].create_account + "",
    ct,
    G,
    X,
    tt,
    H,
    st,
    dt;
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("h2")),
        (l = v(o)),
        (a = x()),
        (r = h("button")),
        (r.innerHTML = '<i class="fas fa-times text-white/60"></i>'),
        (u = x()),
        (d = h("div")),
        (p = h("div")),
        (m = h("label")),
        (g = v(_)),
        (b = x()),
        (w = h("input")),
        (S = x()),
        (k = h("div")),
        (C = h("label")),
        (T = v(P)),
        (R = x()),
        (F = h("select")),
        (D = h("option")),
        (W = v(I)),
        (N = h("option")),
        (V = v(O)),
        (j = h("option")),
        ($ = v(U)),
        (nt = x()),
        (K = h("div")),
        (Z = h("button")),
        (lt = v(et)),
        (J = x()),
        (Q = h("button")),
        (ct = v(q)),
        f(s, "class", "text-2xl font-bold text-white"),
        f(r, "class", "p-2 hover:bg-white/10 rounded-lg transition-colors"),
        f(n, "class", "flex items-center justify-between mb-6"),
        f(m, "for", "create-account-name"),
        f(m, "class", "block text-white/80 text-sm font-medium mb-2"),
        f(w, "id", "create-account-name"),
        f(w, "type", "text"),
        f(
          w,
          "class",
          "w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500/50 transition-colors",
        ),
        f(w, "placeholder", (y = i[0].enter_account_name)),
        f(C, "for", "create-account-type"),
        f(C, "class", "block text-white/80 text-sm font-medium mb-2"),
        (D.__value = "savings"),
        ce(D, D.__value),
        (N.__value = "business"),
        ce(N, N.__value),
        (j.__value = "investment"),
        ce(j, j.__value),
        f(F, "id", "create-account-type"),
        f(
          F,
          "class",
          "w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500/50 transition-colors",
        ),
        i[15] === void 0 && he(() => i[57].call(F)),
        f(d, "class", "space-y-4"),
        f(
          Z,
          "class",
          "flex-1 px-4 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors",
        ),
        f(Q, "class", "flex-1 action-button"),
        (Q.disabled = G = !i[16].trim()),
        f(K, "class", "flex space-x-4 mt-8"),
        f(e, "class", "modern-card p-8 w-full max-w-md mx-4"),
        f(
          t,
          "class",
          "modal-w fixed inset-0 flex items-center justify-center z-50",
        ));
    },
    m(Y, z) {
      (A(Y, t, z),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, l),
        c(n, a),
        c(n, r),
        c(e, u),
        c(e, d),
        c(d, p),
        c(p, m),
        c(m, g),
        c(p, b),
        c(p, w),
        ce(w, i[16]),
        c(d, S),
        c(d, k),
        c(k, C),
        c(C, T),
        c(k, R),
        c(k, F),
        c(F, D),
        c(D, W),
        c(F, N),
        c(N, V),
        c(F, j),
        c(j, $),
        Ea(F, i[15], !0),
        c(e, nt),
        c(e, K),
        c(K, Z),
        c(Z, lt),
        c(K, J),
        c(K, Q),
        c(Q, ct),
        (H = !0),
        st ||
          ((dt = [
            ft(r, "click", i[55]),
            ft(w, "input", i[56]),
            ft(F, "change", i[57]),
            ft(Z, "click", i[58]),
            ft(Q, "click", i[36]),
          ]),
          (st = !0)));
    },
    p(Y, z) {
      ((!H || z[0] & 1) && o !== (o = Y[0].create_new_account + "") && L(l, o),
        (!H || z[0] & 1) && _ !== (_ = Y[0].account_name + "") && L(g, _),
        (!H || (z[0] & 1 && y !== (y = Y[0].enter_account_name))) &&
          f(w, "placeholder", y),
        z[0] & 65536 && w.value !== Y[16] && ce(w, Y[16]),
        (!H || z[0] & 1) && P !== (P = Y[0].account_type + "") && L(T, P),
        (!H || z[0] & 1) && I !== (I = Y[0].savings_account + "") && L(W, I),
        (!H || z[0] & 1) && O !== (O = Y[0].business_account + "") && L(V, O),
        (!H || z[0] & 1) && U !== (U = Y[0].investment_account + "") && L($, U),
        z[0] & 32768 && Ea(F, Y[15]),
        (!H || z[0] & 1) && et !== (et = Y[0].cancel + "") && L(lt, et),
        (!H || z[0] & 1) && q !== (q = Y[0].create_account + "") && L(ct, q),
        (!H || (z[0] & 65536 && G !== (G = !Y[16].trim()))) &&
          (Q.disabled = G));
    },
    i(Y) {
      H ||
        (Y &&
          he(() => {
            H &&
              (tt && tt.end(1), (X = Te(e, le, { duration: 300 })), X.start());
          }),
        (H = !0));
    },
    o(Y) {
      (X && X.invalidate(), Y && (tt = De(e, le, { duration: 250 })), (H = !1));
    },
    d(Y) {
      (Y && M(t), Y && tt && tt.end(), (st = !1), Ce(dt));
    },
  };
}
function Oc(i) {
  let t,
    e,
    n,
    s,
    o = i[0].deposit_money + "",
    l,
    a,
    r,
    u,
    d,
    p,
    m,
    _ = i[0].account + "",
    g,
    b,
    w,
    y = i[14].name + "",
    S,
    k,
    C,
    P,
    T = i[0].amount_to_deposit + "",
    R,
    F,
    D,
    I,
    W,
    N,
    O = i[0].available + "",
    V,
    j,
    U = i[18].toLocaleString() + "",
    $,
    nt,
    K,
    Z,
    et = i[0].cancel + "",
    lt,
    J,
    Q,
    q = i[0].deposit + "",
    ct,
    G,
    X,
    tt,
    H,
    st,
    dt;
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("h2")),
        (l = v(o)),
        (a = x()),
        (r = h("button")),
        (r.innerHTML = '<i class="fas fa-times text-white/60"></i>'),
        (u = x()),
        (d = h("div")),
        (p = h("div")),
        (m = h("span")),
        (g = v(_)),
        (b = x()),
        (w = h("div")),
        (S = v(y)),
        (k = x()),
        (C = h("div")),
        (P = h("label")),
        (R = v(T)),
        (F = x()),
        (D = h("input")),
        (W = x()),
        (N = h("p")),
        (V = v(O)),
        (j = v(": R$ ")),
        ($ = v(U)),
        (nt = x()),
        (K = h("div")),
        (Z = h("button")),
        (lt = v(et)),
        (J = x()),
        (Q = h("button")),
        (ct = v(q)),
        f(s, "class", "text-2xl font-bold text-white"),
        f(r, "class", "p-2 hover:bg-white/10 rounded-lg transition-colors"),
        f(n, "class", "flex items-center justify-between mb-6"),
        f(m, "class", "block text-white/80 text-sm font-medium mb-2"),
        f(
          w,
          "class",
          "w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10",
        ),
        f(P, "for", "deposit-amount"),
        f(P, "class", "block text-white/80 text-sm font-medium mb-2"),
        f(D, "id", "deposit-amount"),
        f(D, "type", "number"),
        f(
          D,
          "class",
          "w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-green-500/50 transition-colors",
        ),
        f(D, "placeholder", (I = i[0].enter_amount)),
        f(D, "min", "1"),
        f(D, "max", i[18]),
        f(N, "class", "text-white/60 text-sm mt-2"),
        f(d, "class", "space-y-4"),
        f(
          Z,
          "class",
          "flex-1 px-4 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors",
        ),
        f(
          Q,
          "class",
          "flex-1 action-button bg-green-500/10 border-green-500/30 hover:bg-green-500/20",
        ),
        (Q.disabled = G = i[13] <= 0 || i[13] > i[18]),
        f(K, "class", "flex space-x-4 mt-8"),
        f(e, "class", "modern-card p-8 w-full max-w-md mx-4"),
        f(
          t,
          "class",
          "modal-backdrop fixed inset-0 flex items-center justify-center z-50",
        ));
    },
    m(Y, z) {
      (A(Y, t, z),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, l),
        c(n, a),
        c(n, r),
        c(e, u),
        c(e, d),
        c(d, p),
        c(p, m),
        c(m, g),
        c(p, b),
        c(p, w),
        c(w, S),
        c(d, k),
        c(d, C),
        c(C, P),
        c(P, R),
        c(C, F),
        c(C, D),
        ce(D, i[13]),
        c(C, W),
        c(C, N),
        c(N, V),
        c(N, j),
        c(N, $),
        c(e, nt),
        c(e, K),
        c(K, Z),
        c(Z, lt),
        c(K, J),
        c(K, Q),
        c(Q, ct),
        (H = !0),
        st ||
          ((dt = [
            ft(r, "click", i[59]),
            ft(D, "input", i[60]),
            ft(Z, "click", i[61]),
            ft(Q, "click", i[38]),
          ]),
          (st = !0)));
    },
    p(Y, z) {
      ((!H || z[0] & 1) && o !== (o = Y[0].deposit_money + "") && L(l, o),
        (!H || z[0] & 1) && _ !== (_ = Y[0].account + "") && L(g, _),
        (!H || z[0] & 16384) && y !== (y = Y[14].name + "") && L(S, y),
        (!H || z[0] & 1) && T !== (T = Y[0].amount_to_deposit + "") && L(R, T),
        (!H || (z[0] & 1 && I !== (I = Y[0].enter_amount))) &&
          f(D, "placeholder", I),
        (!H || z[0] & 262144) && f(D, "max", Y[18]),
        z[0] & 8192 && ze(D.value) !== Y[13] && ce(D, Y[13]),
        (!H || z[0] & 1) && O !== (O = Y[0].available + "") && L(V, O),
        (!H || z[0] & 262144) &&
          U !== (U = Y[18].toLocaleString() + "") &&
          L($, U),
        (!H || z[0] & 1) && et !== (et = Y[0].cancel + "") && L(lt, et),
        (!H || z[0] & 1) && q !== (q = Y[0].deposit + "") && L(ct, q),
        (!H || (z[0] & 270336 && G !== (G = Y[13] <= 0 || Y[13] > Y[18]))) &&
          (Q.disabled = G));
    },
    i(Y) {
      H ||
        (Y &&
          he(() => {
            H &&
              (tt && tt.end(1), (X = Te(e, le, { duration: 300 })), X.start());
          }),
        (H = !0));
    },
    o(Y) {
      (X && X.invalidate(), Y && (tt = De(e, le, { duration: 250 })), (H = !1));
    },
    d(Y) {
      (Y && M(t), Y && tt && tt.end(), (st = !1), Ce(dt));
    },
  };
}
function Fc(i) {
  let t,
    e,
    n,
    s,
    o = i[0].add_user_to_account + "",
    l,
    a,
    r,
    u,
    d,
    p,
    m,
    _,
    g = i[0].account + "",
    b,
    w,
    y,
    S = i[9].name + "",
    k,
    C,
    P,
    T,
    R = i[0].player_id + "",
    F,
    D,
    I,
    W,
    N,
    O,
    V,
    j,
    U,
    $,
    nt = i[0].cancel + "",
    K,
    Z,
    et,
    lt,
    J,
    Q,
    q,
    ct,
    G;
  function X(z, B) {
    return (
      B[0] & 1024 && (V = null),
      V == null &&
        (V = !!(
          z[10] &&
          (isNaN(parseInt(String(z[10]))) || parseInt(String(z[10])) <= 0)
        )),
      V ? Dg : Tg
    );
  }
  let tt = X(i, [-1, -1, -1]),
    H = tt(i);
  function st(z, B) {
    return z[5] ? Og : Rg;
  }
  let dt = st(i),
    Y = dt(i);
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("h2")),
        (l = v(o)),
        (a = x()),
        (r = h("button")),
        (u = h("i")),
        (d = x()),
        (p = h("div")),
        (m = h("div")),
        (_ = h("span")),
        (b = v(g)),
        (w = x()),
        (y = h("div")),
        (k = v(S)),
        (C = x()),
        (P = h("div")),
        (T = h("label")),
        (F = v(R)),
        (D = x()),
        (I = h("input")),
        (N = x()),
        (O = h("p")),
        H.c(),
        (j = x()),
        (U = h("div")),
        ($ = h("button")),
        (K = v(nt)),
        (Z = x()),
        (et = h("button")),
        Y.c(),
        f(s, "class", "text-2xl font-bold text-white"),
        f(u, "class", "fas fa-times text-white/60"),
        f(r, "class", "p-2 hover:bg-white/10 rounded-lg transition-colors"),
        (r.disabled = i[5]),
        f(n, "class", "flex items-center justify-between mb-6"),
        f(_, "class", "block text-white/80 text-sm font-medium mb-2"),
        f(
          y,
          "class",
          "w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10",
        ),
        f(T, "for", "add-user-id"),
        f(T, "class", "block text-white/80 text-sm font-medium mb-2"),
        f(I, "id", "add-user-id"),
        f(I, "type", "number"),
        f(
          I,
          "class",
          "w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-green-500/50 transition-colors",
        ),
        f(I, "placeholder", (W = i[0].enter_player_server_id)),
        f(I, "min", "1"),
        f(I, "max", "9999"),
        (I.disabled = i[5]),
        f(O, "class", "text-white/60 text-sm mt-2"),
        f(p, "class", "space-y-4"),
        f(
          $,
          "class",
          "flex-1 px-4 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors",
        ),
        ($.disabled = i[5]),
        f(
          et,
          "class",
          "flex-1 action-button bg-green-500/10 border-green-500/30 hover:bg-green-500/20",
        ),
        (et.disabled = lt = !String(i[10] || "").trim() || i[5]),
        f(U, "class", "flex space-x-4 mt-8"),
        f(e, "class", "modern-card p-8 w-full max-w-md mx-4"),
        f(
          t,
          "class",
          "modal-backdrop fixed inset-0 flex items-center justify-center z-50",
        ));
    },
    m(z, B) {
      (A(z, t, B),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, l),
        c(n, a),
        c(n, r),
        c(r, u),
        c(e, d),
        c(e, p),
        c(p, m),
        c(m, _),
        c(_, b),
        c(m, w),
        c(m, y),
        c(y, k),
        c(p, C),
        c(p, P),
        c(P, T),
        c(T, F),
        c(P, D),
        c(P, I),
        ce(I, i[10]),
        c(P, N),
        c(P, O),
        H.m(O, null),
        c(e, j),
        c(e, U),
        c(U, $),
        c($, K),
        c(U, Z),
        c(U, et),
        Y.m(et, null),
        (q = !0),
        ct ||
          ((G = [
            ft(r, "click", i[45]),
            ft(I, "input", i[62]),
            ft(I, "keydown", i[63]),
            ft($, "click", i[45]),
            ft(et, "click", i[40]),
          ]),
          (ct = !0)));
    },
    p(z, B) {
      ((!q || B[0] & 1) && o !== (o = z[0].add_user_to_account + "") && L(l, o),
        (!q || B[0] & 32) && (r.disabled = z[5]),
        (!q || B[0] & 1) && g !== (g = z[0].account + "") && L(b, g),
        (!q || B[0] & 512) && S !== (S = z[9].name + "") && L(k, S),
        (!q || B[0] & 1) && R !== (R = z[0].player_id + "") && L(F, R),
        (!q || (B[0] & 1 && W !== (W = z[0].enter_player_server_id))) &&
          f(I, "placeholder", W),
        (!q || B[0] & 32) && (I.disabled = z[5]),
        B[0] & 1024 && ze(I.value) !== z[10] && ce(I, z[10]),
        tt === (tt = X(z, B)) && H
          ? H.p(z, B)
          : (H.d(1), (H = tt(z)), H && (H.c(), H.m(O, null))),
        (!q || B[0] & 1) && nt !== (nt = z[0].cancel + "") && L(K, nt),
        (!q || B[0] & 32) && ($.disabled = z[5]),
        dt === (dt = st(z)) && Y
          ? Y.p(z, B)
          : (Y.d(1), (Y = dt(z)), Y && (Y.c(), Y.m(et, null))),
        (!q ||
          (B[0] & 1056 && lt !== (lt = !String(z[10] || "").trim() || z[5]))) &&
          (et.disabled = lt));
    },
    i(z) {
      q ||
        (z &&
          he(() => {
            q && (Q && Q.end(1), (J = Te(e, le, { duration: 300 })), J.start());
          }),
        (q = !0));
    },
    o(z) {
      (J && J.invalidate(), z && (Q = De(e, le, { duration: 250 })), (q = !1));
    },
    d(z) {
      (z && M(t), H.d(), Y.d(), z && Q && Q.end(), (ct = !1), Ce(G));
    },
  };
}
function Tg(i) {
  let t = i[0].enter_server_id_instruction + "",
    e;
  return {
    c() {
      e = v(t);
    },
    m(n, s) {
      A(n, e, s);
    },
    p(n, s) {
      s[0] & 1 && t !== (t = n[0].enter_server_id_instruction + "") && L(e, t);
    },
    d(n) {
      n && M(e);
    },
  };
}
function Dg(i) {
  let t,
    e,
    n = i[0].please_enter_valid_numeric_player_id + "",
    s;
  return {
    c() {
      ((t = h("span")),
        (e = v("⚠️ ")),
        (s = v(n)),
        f(t, "class", "text-red-400"));
    },
    m(o, l) {
      (A(o, t, l), c(t, e), c(t, s));
    },
    p(o, l) {
      l[0] & 1 &&
        n !== (n = o[0].please_enter_valid_numeric_player_id + "") &&
        L(s, n);
    },
    d(o) {
      o && M(t);
    },
  };
}
function Rg(i) {
  let t = i[0].add_user + "",
    e;
  return {
    c() {
      e = v(t);
    },
    m(n, s) {
      A(n, e, s);
    },
    p(n, s) {
      s[0] & 1 && t !== (t = n[0].add_user + "") && L(e, t);
    },
    d(n) {
      n && M(e);
    },
  };
}
function Og(i) {
  let t,
    e,
    n = i[0].adding + "",
    s;
  return {
    c() {
      ((t = h("i")),
        (e = x()),
        (s = v(n)),
        f(t, "class", "fas fa-spinner fa-spin mr-2"));
    },
    m(o, l) {
      (A(o, t, l), A(o, e, l), A(o, s, l));
    },
    p(o, l) {
      l[0] & 1 && n !== (n = o[0].adding + "") && L(s, n);
    },
    d(o) {
      o && (M(t), M(e), M(s));
    },
  };
}
function Ec(i) {
  let t,
    e,
    n,
    s,
    o = i[0].withdraw_money + "",
    l,
    a,
    r,
    u,
    d,
    p,
    m,
    _ = i[0].account + "",
    g,
    b,
    w,
    y = i[12].name + "",
    S,
    k,
    C,
    P,
    T = i[0].amount_to_withdraw + "",
    R,
    F,
    D,
    I,
    W,
    N,
    O,
    V = i[0].available + "",
    j,
    U,
    $ = i[12].balance.toLocaleString() + "",
    nt,
    K,
    Z,
    et,
    lt = i[0].cancel + "",
    J,
    Q,
    q,
    ct = i[0].withdraw + "",
    G,
    X,
    tt,
    H,
    st,
    dt,
    Y;
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("h2")),
        (l = v(o)),
        (a = x()),
        (r = h("button")),
        (r.innerHTML = '<i class="fas fa-times text-white/60"></i>'),
        (u = x()),
        (d = h("div")),
        (p = h("div")),
        (m = h("span")),
        (g = v(_)),
        (b = x()),
        (w = h("div")),
        (S = v(y)),
        (k = x()),
        (C = h("div")),
        (P = h("label")),
        (R = v(T)),
        (F = x()),
        (D = h("input")),
        (N = x()),
        (O = h("p")),
        (j = v(V)),
        (U = v(": R$ ")),
        (nt = v($)),
        (K = x()),
        (Z = h("div")),
        (et = h("button")),
        (J = v(lt)),
        (Q = x()),
        (q = h("button")),
        (G = v(ct)),
        f(s, "class", "text-2xl font-bold text-white"),
        f(r, "class", "p-2 hover:bg-white/10 rounded-lg transition-colors"),
        f(n, "class", "flex items-center justify-between mb-6"),
        f(m, "class", "block text-white/80 text-sm font-medium mb-2"),
        f(
          w,
          "class",
          "w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10",
        ),
        f(P, "for", "withdraw-amount"),
        f(P, "class", "block text-white/80 text-sm font-medium mb-2"),
        f(D, "id", "withdraw-amount"),
        f(D, "type", "number"),
        f(
          D,
          "class",
          "w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-orange-500/50 transition-colors",
        ),
        f(D, "placeholder", (I = i[0].enter_amount)),
        f(D, "min", "1"),
        f(D, "max", (W = i[12].balance)),
        f(O, "class", "text-white/60 text-sm mt-2"),
        f(d, "class", "space-y-4"),
        f(
          et,
          "class",
          "flex-1 px-4 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors",
        ),
        f(
          q,
          "class",
          "flex-1 action-button bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20",
        ),
        (q.disabled = X = i[11] <= 0 || i[11] > i[12].balance),
        f(Z, "class", "flex space-x-4 mt-8"),
        f(e, "class", "modern-card p-8 w-full max-w-md mx-4"),
        f(
          t,
          "class",
          "modal-backdrop fixed inset-0 flex items-center justify-center z-50",
        ));
    },
    m(z, B) {
      (A(z, t, B),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, l),
        c(n, a),
        c(n, r),
        c(e, u),
        c(e, d),
        c(d, p),
        c(p, m),
        c(m, g),
        c(p, b),
        c(p, w),
        c(w, S),
        c(d, k),
        c(d, C),
        c(C, P),
        c(P, R),
        c(C, F),
        c(C, D),
        ce(D, i[11]),
        c(C, N),
        c(C, O),
        c(O, j),
        c(O, U),
        c(O, nt),
        c(e, K),
        c(e, Z),
        c(Z, et),
        c(et, J),
        c(Z, Q),
        c(Z, q),
        c(q, G),
        (st = !0),
        dt ||
          ((Y = [
            ft(r, "click", i[64]),
            ft(D, "input", i[65]),
            ft(et, "click", i[66]),
            ft(q, "click", i[39]),
          ]),
          (dt = !0)));
    },
    p(z, B) {
      ((!st || B[0] & 1) && o !== (o = z[0].withdraw_money + "") && L(l, o),
        (!st || B[0] & 1) && _ !== (_ = z[0].account + "") && L(g, _),
        (!st || B[0] & 4096) && y !== (y = z[12].name + "") && L(S, y),
        (!st || B[0] & 1) &&
          T !== (T = z[0].amount_to_withdraw + "") &&
          L(R, T),
        (!st || (B[0] & 1 && I !== (I = z[0].enter_amount))) &&
          f(D, "placeholder", I),
        (!st || (B[0] & 4096 && W !== (W = z[12].balance))) && f(D, "max", W),
        B[0] & 2048 && ze(D.value) !== z[11] && ce(D, z[11]),
        (!st || B[0] & 1) && V !== (V = z[0].available + "") && L(j, V),
        (!st || B[0] & 4096) &&
          $ !== ($ = z[12].balance.toLocaleString() + "") &&
          L(nt, $),
        (!st || B[0] & 1) && lt !== (lt = z[0].cancel + "") && L(J, lt),
        (!st || B[0] & 1) && ct !== (ct = z[0].withdraw + "") && L(G, ct),
        (!st ||
          (B[0] & 6144 && X !== (X = z[11] <= 0 || z[11] > z[12].balance))) &&
          (q.disabled = X));
    },
    i(z) {
      st ||
        (z &&
          he(() => {
            st &&
              (H && H.end(1), (tt = Te(e, le, { duration: 300 })), tt.start());
          }),
        (st = !0));
    },
    o(z) {
      (tt && tt.invalidate(),
        z && (H = De(e, le, { duration: 250 })),
        (st = !1));
    },
    d(z) {
      (z && M(t), z && H && H.end(), (dt = !1), Ce(Y));
    },
  };
}
function Ic(i) {
  let t,
    e,
    n,
    s,
    o = i[0].remove_user_from_account + "",
    l,
    a,
    r,
    u,
    d,
    p,
    m,
    _ = i[0].account + "",
    g,
    b,
    w,
    y = i[8].name + "",
    S,
    k,
    C,
    P,
    T = i[0].select_user_to_remove + "",
    R,
    F,
    D,
    I,
    W,
    N = i[0].cancel + "",
    O,
    V,
    j,
    U,
    $,
    nt = i[0].remove_user + "",
    K,
    Z,
    et,
    lt,
    J,
    Q,
    q;
  function ct(tt, H) {
    return tt[8].users && tt[8].users.length > 0 ? Eg : Fg;
  }
  let G = ct(i),
    X = G(i);
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("h2")),
        (l = v(o)),
        (a = x()),
        (r = h("button")),
        (r.innerHTML = '<i class="fas fa-times text-white/60"></i>'),
        (u = x()),
        (d = h("div")),
        (p = h("div")),
        (m = h("span")),
        (g = v(_)),
        (b = x()),
        (w = h("div")),
        (S = v(y)),
        (k = x()),
        (C = h("div")),
        (P = h("span")),
        (R = v(T)),
        (F = x()),
        X.c(),
        (D = x()),
        (I = h("div")),
        (W = h("button")),
        (O = v(N)),
        (V = x()),
        (j = h("button")),
        (U = h("i")),
        ($ = x()),
        (K = v(nt)),
        f(s, "class", "text-2xl font-bold text-white"),
        f(r, "class", "p-2 hover:bg-white/10 rounded-lg transition-colors"),
        f(n, "class", "flex items-center justify-between mb-6"),
        f(m, "class", "block text-white/80 text-sm font-medium mb-2"),
        f(
          w,
          "class",
          "w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10",
        ),
        f(P, "class", "block text-white/80 text-sm font-medium mb-2"),
        f(d, "class", "space-y-4"),
        f(
          W,
          "class",
          "flex-1 px-4 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors",
        ),
        f(U, "class", "fas fa-user-minus mr-2"),
        f(
          j,
          "class",
          "flex-1 action-button bg-red-500/10 border-red-500/30 hover:bg-red-500/20",
        ),
        (j.disabled = Z = !i[7]),
        f(I, "class", "flex space-x-4 mt-8"),
        f(e, "class", "modern-card p-8 w-full max-w-md mx-4"),
        f(
          t,
          "class",
          "modal-backdrop fixed inset-0 flex items-center justify-center z-50",
        ));
    },
    m(tt, H) {
      (A(tt, t, H),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, l),
        c(n, a),
        c(n, r),
        c(e, u),
        c(e, d),
        c(d, p),
        c(p, m),
        c(m, g),
        c(p, b),
        c(p, w),
        c(w, S),
        c(d, k),
        c(d, C),
        c(C, P),
        c(P, R),
        c(C, F),
        X.m(C, null),
        c(e, D),
        c(e, I),
        c(I, W),
        c(W, O),
        c(I, V),
        c(I, j),
        c(j, U),
        c(j, $),
        c(j, K),
        (J = !0),
        Q ||
          ((q = [
            ft(r, "click", i[67]),
            ft(W, "click", i[69]),
            ft(j, "click", i[41]),
          ]),
          (Q = !0)));
    },
    p(tt, H) {
      ((!J || H[0] & 1) &&
        o !== (o = tt[0].remove_user_from_account + "") &&
        L(l, o),
        (!J || H[0] & 1) && _ !== (_ = tt[0].account + "") && L(g, _),
        (!J || H[0] & 256) && y !== (y = tt[8].name + "") && L(S, y),
        (!J || H[0] & 1) &&
          T !== (T = tt[0].select_user_to_remove + "") &&
          L(R, T),
        G === (G = ct(tt)) && X
          ? X.p(tt, H)
          : (X.d(1), (X = G(tt)), X && (X.c(), X.m(C, null))),
        (!J || H[0] & 1) && N !== (N = tt[0].cancel + "") && L(O, N),
        (!J || H[0] & 1) && nt !== (nt = tt[0].remove_user + "") && L(K, nt),
        (!J || (H[0] & 128 && Z !== (Z = !tt[7]))) && (j.disabled = Z));
    },
    i(tt) {
      J ||
        (tt &&
          he(() => {
            J &&
              (lt && lt.end(1),
              (et = Te(e, le, { duration: 300 })),
              et.start());
          }),
        (J = !0));
    },
    o(tt) {
      (et && et.invalidate(),
        tt && (lt = De(e, le, { duration: 250 })),
        (J = !1));
    },
    d(tt) {
      (tt && M(t), X.d(), tt && lt && lt.end(), (Q = !1), Ce(q));
    },
  };
}
function Fg(i) {
  let t,
    e = i[0].no_users_to_remove + "",
    n;
  return {
    c() {
      ((t = h("div")),
        (n = v(e)),
        f(t, "class", "text-white/60 text-center py-4"));
    },
    m(s, o) {
      (A(s, t, o), c(t, n));
    },
    p(s, o) {
      o[0] & 1 && e !== (e = s[0].no_users_to_remove + "") && L(n, e);
    },
    d(s) {
      s && M(t);
    },
  };
}
function Eg(i) {
  let t,
    e = xe(i[8].users),
    n = [];
  for (let s = 0; s < e.length; s += 1) n[s] = Bc(Mc(i, e, s));
  return {
    c() {
      t = h("div");
      for (let s = 0; s < n.length; s += 1) n[s].c();
      f(t, "class", "space-y-2");
    },
    m(s, o) {
      A(s, t, o);
      for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(t, null);
    },
    p(s, o) {
      if ((o[0] & 384) | (o[1] & 16)) {
        e = xe(s[8].users);
        let l;
        for (l = 0; l < e.length; l += 1) {
          const a = Mc(s, e, l);
          n[l] ? n[l].p(a, o) : ((n[l] = Bc(a)), n[l].c(), n[l].m(t, null));
        }
        for (; l < n.length; l += 1) n[l].d(1);
        n.length = e.length;
      }
    },
    d(s) {
      (s && M(t), ns(n, s));
    },
  };
}
function Bc(i) {
  let t,
    e,
    n,
    s,
    o,
    l,
    a = i[74].name + "",
    r,
    u,
    d,
    p,
    m = i[74].identifier + "",
    _,
    g,
    b,
    w,
    y;
  function S() {
    return i[68](i[74]);
  }
  return {
    c() {
      var k;
      ((t = h("button")),
        (e = h("div")),
        (n = h("i")),
        (s = x()),
        (o = h("div")),
        (l = h("div")),
        (r = v(a)),
        (u = x()),
        (d = h("div")),
        (p = v("ID: ")),
        (_ = v(m)),
        (g = x()),
        f(n, "class", "fas fa-user text-white/60"),
        f(l, "class", "font-medium"),
        f(d, "class", "text-xs text-white/60"),
        f(e, "class", "flex items-center space-x-3"),
        f(
          t,
          "class",
          (b =
            "w-full p-3 rounded-xl border transition-colors text-left " +
            (((k = i[7]) == null ? void 0 : k.identifier) === i[74].identifier
              ? "bg-red-500/20 border-red-500/50 text-red-300"
              : "bg-white/5 border-white/10 text-white hover:bg-white/10")),
        ));
    },
    m(k, C) {
      (A(k, t, C),
        c(t, e),
        c(e, n),
        c(e, s),
        c(e, o),
        c(o, l),
        c(l, r),
        c(o, u),
        c(o, d),
        c(d, p),
        c(d, _),
        c(t, g),
        w || ((y = ft(t, "click", S)), (w = !0)));
    },
    p(k, C) {
      var P;
      ((i = k),
        C[0] & 256 && a !== (a = i[74].name + "") && L(r, a),
        C[0] & 256 && m !== (m = i[74].identifier + "") && L(_, m),
        C[0] & 384 &&
          b !==
            (b =
              "w-full p-3 rounded-xl border transition-colors text-left " +
              (((P = i[7]) == null ? void 0 : P.identifier) === i[74].identifier
                ? "bg-red-500/20 border-red-500/50 text-red-300"
                : "bg-white/5 border-white/10 text-white hover:bg-white/10")) &&
          f(t, "class", b));
    },
    d(k) {
      (k && M(t), (w = !1), y());
    },
  };
}
function Ig(i) {
  let t,
    e,
    n,
    s,
    o = i[0].accounts + "",
    l,
    a,
    r,
    u = i[0].manage_bank_accounts_savings + "",
    d,
    p,
    m,
    _,
    g,
    b,
    w,
    y,
    S = i[17].length + "",
    k,
    C,
    P = i[0].accounts + "",
    T,
    R,
    F,
    D,
    I,
    W,
    N = i[0].create_account + "",
    O,
    V,
    j,
    U,
    $,
    nt,
    K,
    Z,
    et,
    lt,
    J = i[0].primary_account + "",
    Q,
    q,
    ct,
    G = i[0].main_checking_account + "",
    X,
    tt,
    H,
    st,
    dt = i[0].current_balance + "",
    Y,
    z,
    B,
    wt,
    ot,
    ut,
    gt,
    It,
    Ut,
    Nt,
    Ct,
    Tt,
    vt,
    xt,
    ae,
    Zt;
  function ue(at, E) {
    return at[18] >= 1e6 ? yg : at[18] >= 1e3 ? vg : bg;
  }
  let Bt = ue(i),
    zt = Bt(i);
  const de = [xg, wg],
    Vt = [];
  function se(at, E) {
    return at[17].length > 0 ? 0 : 1;
  }
  ((ut = se(i)), (gt = Vt[ut] = de[ut](i)));
  let At = i[1] && Rc(i),
    jt = i[3] && i[14] && Oc(i),
    Ht = i[6] && i[9] && Fc(i),
    Dt = i[2] && i[12] && Ec(i),
    Gt = i[4] && i[8] && Ic(i);
  return {
    c() {
      ((t = h("div")),
        (e = h("div")),
        (n = h("div")),
        (s = h("h1")),
        (l = v(o)),
        (a = x()),
        (r = h("p")),
        (d = v(u)),
        (p = x()),
        (m = h("div")),
        (_ = h("div")),
        (g = h("div")),
        (b = h("i")),
        (w = x()),
        (y = h("span")),
        (k = v(S)),
        (C = x()),
        (T = v(P)),
        (R = x()),
        (F = h("button")),
        (D = h("i")),
        (I = x()),
        (W = h("span")),
        (O = v(N)),
        (V = x()),
        (j = h("div")),
        (U = h("div")),
        ($ = h("div")),
        (nt = h("div")),
        (K = h("div")),
        (K.innerHTML =
          '<i class="fas fa-piggy-bank text-blue-400 text-lg"></i>'),
        (Z = x()),
        (et = h("div")),
        (lt = h("h3")),
        (Q = v(J)),
        (q = x()),
        (ct = h("p")),
        (X = v(G)),
        (tt = x()),
        (H = h("div")),
        (st = h("p")),
        (Y = v(dt)),
        (z = x()),
        (B = h("p")),
        zt.c(),
        (wt = x()),
        (ot = h("div")),
        gt.c(),
        (It = x()),
        At && At.c(),
        (Ut = x()),
        jt && jt.c(),
        (Nt = x()),
        Ht && Ht.c(),
        (Ct = x()),
        Dt && Dt.c(),
        (Tt = x()),
        Gt && Gt.c(),
        (vt = nn()),
        f(s, "class", "text-3xl font-bold text-white mb-2"),
        f(r, "class", "text-white/60"),
        f(b, "class", "fas fa-piggy-bank text-white/40"),
        f(y, "class", "text-sm text-white/80"),
        f(g, "class", "flex items-center space-x-2"),
        f(_, "class", "modern-card px-4 py-2"),
        f(D, "class", "fas fa-plus"),
        f(F, "class", "action-button flex items-center space-x-2"),
        f(m, "class", "flex items-center space-x-4"),
        f(e, "class", "flex items-center justify-between mb-8"),
        f(
          K,
          "class",
          "w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center",
        ),
        f(lt, "class", "text-xl font-semibold text-white"),
        f(ct, "class", "text-white/60 text-sm"),
        f(nt, "class", "flex items-center space-x-4"),
        f(st, "class", "text-sm text-white/60"),
        f(B, "class", "text-2xl font-bold text-white"),
        f(H, "class", "text-right"),
        f($, "class", "flex items-center justify-between"),
        f(U, "class", "modern-card p-6"),
        f(j, "class", "mb-8"),
        f(ot, "class", "grid gap-4"),
        f(t, "class", "h-full flex flex-col p-8 overflow-y-auto"));
    },
    m(at, E) {
      (A(at, t, E),
        c(t, e),
        c(e, n),
        c(n, s),
        c(s, l),
        c(n, a),
        c(n, r),
        c(r, d),
        c(e, p),
        c(e, m),
        c(m, _),
        c(_, g),
        c(g, b),
        c(g, w),
        c(g, y),
        c(y, k),
        c(y, C),
        c(y, T),
        c(m, R),
        c(m, F),
        c(F, D),
        c(F, I),
        c(F, W),
        c(W, O),
        c(t, V),
        c(t, j),
        c(j, U),
        c(U, $),
        c($, nt),
        c(nt, K),
        c(nt, Z),
        c(nt, et),
        c(et, lt),
        c(lt, Q),
        c(et, q),
        c(et, ct),
        c(ct, X),
        c($, tt),
        c($, H),
        c(H, st),
        c(st, Y),
        c(H, z),
        c(H, B),
        zt.m(B, null),
        c(t, wt),
        c(t, ot),
        Vt[ut].m(ot, null),
        A(at, It, E),
        At && At.m(at, E),
        A(at, Ut, E),
        jt && jt.m(at, E),
        A(at, Nt, E),
        Ht && Ht.m(at, E),
        A(at, Ct, E),
        Dt && Dt.m(at, E),
        A(at, Tt, E),
        Gt && Gt.m(at, E),
        A(at, vt, E),
        (xt = !0),
        ae || ((Zt = ft(F, "click", i[48])), (ae = !0)));
    },
    p(at, E) {
      ((!xt || E[0] & 1) && o !== (o = at[0].accounts + "") && L(l, o),
        (!xt || E[0] & 1) &&
          u !== (u = at[0].manage_bank_accounts_savings + "") &&
          L(d, u),
        (!xt || E[0] & 131072) && S !== (S = at[17].length + "") && L(k, S),
        (!xt || E[0] & 1) && P !== (P = at[0].accounts + "") && L(T, P),
        (!xt || E[0] & 1) && N !== (N = at[0].create_account + "") && L(O, N),
        (!xt || E[0] & 1) && J !== (J = at[0].primary_account + "") && L(Q, J),
        (!xt || E[0] & 1) &&
          G !== (G = at[0].main_checking_account + "") &&
          L(X, G),
        (!xt || E[0] & 1) &&
          dt !== (dt = at[0].current_balance + "") &&
          L(Y, dt),
        Bt === (Bt = ue(at)) && zt
          ? zt.p(at, E)
          : (zt.d(1), (zt = Bt(at)), zt && (zt.c(), zt.m(B, null))));
      let pt = ut;
      ((ut = se(at)),
        ut === pt
          ? Vt[ut].p(at, E)
          : (Ee(),
            Wt(Vt[pt], 1, 1, () => {
              Vt[pt] = null;
            }),
            Ie(),
            (gt = Vt[ut]),
            gt ? gt.p(at, E) : ((gt = Vt[ut] = de[ut](at)), gt.c()),
            Mt(gt, 1),
            gt.m(ot, null)),
        at[1]
          ? At
            ? (At.p(at, E), E[0] & 2 && Mt(At, 1))
            : ((At = Rc(at)), At.c(), Mt(At, 1), At.m(Ut.parentNode, Ut))
          : At &&
            (Ee(),
            Wt(At, 1, 1, () => {
              At = null;
            }),
            Ie()),
        at[3] && at[14]
          ? jt
            ? (jt.p(at, E), E[0] & 16392 && Mt(jt, 1))
            : ((jt = Oc(at)), jt.c(), Mt(jt, 1), jt.m(Nt.parentNode, Nt))
          : jt &&
            (Ee(),
            Wt(jt, 1, 1, () => {
              jt = null;
            }),
            Ie()),
        at[6] && at[9]
          ? Ht
            ? (Ht.p(at, E), E[0] & 576 && Mt(Ht, 1))
            : ((Ht = Fc(at)), Ht.c(), Mt(Ht, 1), Ht.m(Ct.parentNode, Ct))
          : Ht &&
            (Ee(),
            Wt(Ht, 1, 1, () => {
              Ht = null;
            }),
            Ie()),
        at[2] && at[12]
          ? Dt
            ? (Dt.p(at, E), E[0] & 4100 && Mt(Dt, 1))
            : ((Dt = Ec(at)), Dt.c(), Mt(Dt, 1), Dt.m(Tt.parentNode, Tt))
          : Dt &&
            (Ee(),
            Wt(Dt, 1, 1, () => {
              Dt = null;
            }),
            Ie()),
        at[4] && at[8]
          ? Gt
            ? (Gt.p(at, E), E[0] & 272 && Mt(Gt, 1))
            : ((Gt = Ic(at)), Gt.c(), Mt(Gt, 1), Gt.m(vt.parentNode, vt))
          : Gt &&
            (Ee(),
            Wt(Gt, 1, 1, () => {
              Gt = null;
            }),
            Ie()));
    },
    i(at) {
      xt || (Mt(gt), Mt(At), Mt(jt), Mt(Ht), Mt(Dt), Mt(Gt), (xt = !0));
    },
    o(at) {
      (Wt(gt), Wt(At), Wt(jt), Wt(Ht), Wt(Dt), Wt(Gt), (xt = !1));
    },
    d(at) {
      (at && (M(t), M(It), M(Ut), M(Nt), M(Ct), M(Tt), M(vt)),
        zt.d(),
        Vt[ut].d(),
        At && At.d(at),
        jt && jt.d(at),
        Ht && Ht.d(at),
        Dt && Dt.d(at),
        Gt && Gt.d(at),
        (ae = !1),
        Zt());
    },
  };
}
function $c(i) {
  return new Date(i).toLocaleDateString();
}
function Bg(i, t, e) {
  let n, s, o, l, a, r, u, d, p, m, _, g, b, w, y, S, k, C, P;
  (mt(i, li, (E) => e(0, (n = E))), mt(i, qe, (E) => e(18, (P = E))));
  let T = Et([]);
  mt(i, T, (E) => e(17, (C = E)));
  let R = Et(!1);
  mt(i, R, (E) => e(1, (s = E)));
  let F = Et("");
  mt(i, F, (E) => e(16, (k = E)));
  let D = Et("savings");
  mt(i, D, (E) => e(15, (S = E)));
  let I = Et(!1);
  mt(i, I, (E) => e(3, (l = E)));
  let W = Et(null);
  mt(i, W, (E) => e(14, (y = E)));
  let N = Et(0);
  mt(i, N, (E) => e(13, (w = E)));
  let O = Et(!1);
  mt(i, O, (E) => e(6, (u = E)));
  let V = Et(null);
  mt(i, V, (E) => e(9, (m = E)));
  let j = Et("");
  mt(i, j, (E) => e(10, (_ = E)));
  let U = Et(!1);
  mt(i, U, (E) => e(5, (r = E)));
  let $ = Et(!1);
  mt(i, $, (E) => e(2, (o = E)));
  let nt = Et(null);
  mt(i, nt, (E) => e(12, (b = E)));
  let K = Et(0);
  mt(i, K, (E) => e(11, (g = E)));
  let Z = Et(!1);
  mt(i, Z, (E) => e(4, (a = E)));
  let et = Et(null);
  mt(i, et, (E) => e(8, (p = E)));
  let lt = Et(null);
  mt(i, lt, (E) => e(7, (d = E)));
  async function J() {
    try {
      const E = await qt("ps-banking:client:getAccounts", {});
      if ((console.log("Raw server response:", E), !E || !Array.isArray(E))) {
        (console.error("Invalid response format:", E), T.set([]));
        return;
      }
      const pt = E.map((bt, kt) => {
        try {
          if (
            (console.log(`Processing account ${kt}:`, bt),
            !bt || typeof bt != "object")
          )
            return (console.error(`Invalid account at index ${kt}:`, bt), null);
          const Lt = bt.id ? bt.id.toString() : `temp_${kt}`,
            $t =
              bt.holder && typeof bt.holder == "string"
                ? bt.holder
                : n.unknown_account,
            Ft = typeof bt.balance == "number" ? bt.balance : 0;
          let _e = "savings";
          try {
            bt.owner &&
              typeof bt.owner == "object" &&
              bt.owner.accountType &&
              (_e = bt.owner.accountType);
          } catch (Jt) {
            console.warn("Failed to extract account type:", Jt);
          }
          let we = [];
          try {
            bt.users &&
              Array.isArray(bt.users) &&
              (we = bt.users.filter(
                (Jt) => Jt && typeof Jt == "object" && Jt.name && Jt.identifier,
              ));
          } catch (Jt) {
            console.warn("Failed to extract users:", Jt);
          }
          let Me = null;
          try {
            bt.owner &&
              typeof bt.owner == "object" &&
              (Me = {
                name: bt.owner.name || n.unknown,
                identifier: bt.owner.identifier || "",
                state: bt.owner.state || !1,
              });
          } catch (Jt) {
            console.warn("Failed to extract owner:", Jt);
          }
          return {
            id: Lt,
            name: $t,
            balance: Ft,
            type: _e,
            isActive: !0,
            created: "2024-01-01",
            users: we,
            owner: Me,
          };
        } catch (Lt) {
          return (
            console.error(`Error processing account at index ${kt}:`, Lt, bt),
            null
          );
        }
      }).filter((bt) => bt !== null);
      (console.log("Transformed accounts:", pt), ot(pt));
    } catch (E) {
      (console.error("Error fetching accounts:", E),
        Ot(n.failed_fetch_accounts, n.error, "user"),
        ot([]));
    }
  }
  async function Q() {
    if (!k.trim()) {
      Ot(n.please_enter_account_name, n.error, "user");
      return;
    }
    try {
      const E = await qt("ps-banking:client:getUser", {});
      if (!E) {
        Ot(n.failed_get_user_info, n.error, "user");
        return;
      }
      const pt = Math.floor(Math.random() * 9e15) + 1e15,
        bt = {
          newAccount: {
            balance: 0,
            holder: k.trim(),
            cardNumber: pt.toString(),
            users: [],
            owner: { name: E.name, identifier: E.identifier, accountType: S },
          },
        },
        kt = await qt("ps-banking:client:createNewAccount", bt);
      (console.log("Create account result:", kt),
        kt && kt.success
          ? (Ot(n.account_created_success, n.success, "user"),
            R.set(!1),
            F.set(""),
            D.set("savings"),
            J())
          : (console.error("Failed to create account:", kt),
            Ot(n.failed_create_account, n.error, "user")));
    } catch (E) {
      (console.error(E), Ot(n.failed_create_account, n.error, "user"));
    }
  }
  async function q(E) {
    try {
      const pt = await qt("ps-banking:client:deleteAccount", { accountId: E });
      pt && pt.success
        ? (Ot(n.account_deleted_success, n.success, "user"), J())
        : Ot(n.failed_delete_account, n.error, "user");
    } catch (pt) {
      (console.error(pt), Ot(n.failed_delete_account, n.error, "user"));
    }
  }
  async function ct() {
    if (!y || w <= 0) {
      Ot(n.please_enter_valid_amount, n.error, "user");
      return;
    }
    try {
      const E = await qt("ps-banking:client:depositToAccount", {
        accountId: parseInt(y.id),
        amount: w,
      });
      E && E.success
        ? (Ot(
            `R$ ${w.toLocaleString()} ${n.deposited_successfully}`,
            n.success,
            "user",
          ),
          I.set(!1),
          N.set(0),
          W.set(null),
          J(),
          wt())
        : Ot(n.insufficient_funds_deposit, n.error, "user");
    } catch (E) {
      (console.error(E), Ot(n.failed_deposit_account, n.error, "user"));
    }
  }
  async function G() {
    if (!b || g <= 0) {
      Ot(n.please_enter_valid_amount, n.error, "user");
      return;
    }
    try {
      const E = await qt("ps-banking:client:withdrawFromAccount", {
        accountId: parseInt(b.id),
        amount: g,
      });
      E && E.success
        ? (Ot(
            `R$ ${g.toLocaleString()} ${n.withdrew_successfully}`,
            n.success,
            "user",
          ),
          $.set(!1),
          K.set(0),
          nt.set(null),
          J(),
          wt())
        : Ot(n.insufficient_funds_account, n.error, "user");
    } catch (E) {
      (console.error(E), Ot(n.failed_withdraw_account, n.error, "user"));
    }
  }
  async function X() {
    if (!m || !_) {
      Ot(n.please_enter_valid_user_id, n.error, "user");
      return;
    }
    const E = String(_ || "").trim();
    if (!E) {
      Ot(n.please_enter_valid_user_id, n.error, "user");
      return;
    }
    const pt = parseInt(E);
    if (isNaN(pt) || pt <= 0) {
      Ot(n.please_enter_valid_numeric_player_id, n.error, "user");
      return;
    }
    U.set(!0);
    try {
      const bt = new Promise(($t, Ft) =>
          setTimeout(() => Ft(new Error("Request timeout")), 1e4),
        ),
        kt = qt("ps-banking:client:addUserToAccount", {
          accountId: parseInt(m.id),
          userId: pt,
        }),
        Lt = await Promise.race([kt, bt]);
      if ((console.log("Add user result:", Lt), Lt && typeof Lt == "object"))
        if (Lt.success === !0) {
          const $t = Lt.userName || "Player";
          (Ot(`${$t} ${n.added_to_account_successfully}`, n.success, "user"),
            ut("addUser"),
            J());
        } else {
          let $t = n.failed_add_user;
          (Lt.message &&
            (Lt.message.includes("target_player_not_found") ||
            Lt.message.includes("not found")
              ? ($t = n.player_not_found_offline)
              : Lt.message.includes("cannot_add_self")
                ? ($t = n.cannot_add_yourself)
                : Lt.message.includes("user_already_in_account")
                  ? ($t = n.player_already_added)
                  : ($t = Lt.message)),
            Ot($t, n.error, "user"),
            console.error("Add user failed:", Lt));
        }
      else
        (Ot(n.failed_add_user_invalid_response, n.error, "user"),
          console.error("Invalid response:", Lt));
    } catch (bt) {
      (console.error("Add user error:", bt),
        bt.message === "Request timeout"
          ? Ot(n.request_timed_out, n.error, "user")
          : Ot(n.failed_add_user, n.error, "user"),
        ut("addUser"));
    } finally {
      try {
        U.set(!1);
      } catch (bt) {
        console.error("Error resetting loading state:", bt);
      }
    }
  }
  async function tt() {
    if (!p || !d) {
      Ot("Please select a user to remove", n.error, "user");
      return;
    }
    try {
      const E = await qt("ps-banking:client:removeUserFromAccount", {
        accountId: parseInt(p.id),
        user: d.identifier,
      });
      (console.log("Remove user result:", E),
        E && E.success
          ? (Ot(
              `${d.name} ${n.removed_from_account_successfully}`,
              n.success,
              "user",
            ),
            ut("removeUser"),
            J())
          : (Ot(n.failed_remove_user, n.error, "user"),
            console.error("Remove user failed:", E)));
    } catch (E) {
      (console.error("Remove user error:", E),
        Ot(n.failed_remove_user, n.error, "user"),
        ut("removeUser"));
    }
  }
  function H(E) {
    (W.set(E), N.set(0), I.set(!0));
  }
  function st(E) {
    (V.set(E), j.set(""), O.set(!0));
  }
  function dt(E) {
    (et.set(E), lt.set(null), Z.set(!0));
  }
  function Y() {
    r || ut("addUser");
  }
  function z(E) {
    E.key === "Escape" &&
      (u && !r
        ? Y()
        : a
          ? ut("removeUser")
          : l
            ? I.set(!1)
            : o
              ? $.set(!1)
              : s && R.set(!1));
  }
  function B(E) {
    (nt.set(E), K.set(0), $.set(!0));
  }
  async function wt() {
    try {
      const pt = (await qt("ps-banking:client:getMoneyTypes", {})).find(
        (bt) => bt.name === "bank",
      );
      pt && qe.set(pt.amount);
    } catch (E) {
      console.error("Failed to update money types:", E);
    }
  }
  function ot(E) {
    try {
      Array.isArray(E)
        ? T.set(E)
        : (console.error("Invalid accounts data:", E), T.set([]));
    } catch (pt) {
      (console.error("Error setting accounts:", pt), T.set([]));
    }
  }
  function ut(E) {
    try {
      switch (E) {
        case "addUser":
          (O.set(!1), j.set(""), V.set(null), U.set(!1));
          break;
        case "removeUser":
          (Z.set(!1), et.set(null), lt.set(null));
          break;
        case "deposit":
          (I.set(!1), N.set(0), W.set(null));
          break;
        case "withdraw":
          ($.set(!1), K.set(0), nt.set(null));
          break;
        case "create":
          (R.set(!1), F.set(""), D.set("savings"));
          break;
      }
    } catch (pt) {
      console.error(`Error closing ${E} modal:`, pt);
    }
  }
  sn(() => {
    const E = (pt) => {
      (console.error("Global error caught:", pt.error),
        Ot("An error occurred. Please try again.", n.error, "user"),
        O.set(!1),
        Z.set(!1),
        I.set(!1),
        $.set(!1),
        R.set(!1),
        U.set(!1));
    };
    (window.addEventListener("error", E),
      window.addEventListener("unhandledrejection", (pt) => {
        (console.error("Unhandled promise rejection:", pt.reason),
          Ot("An error occurred. Please try again.", n.error, "user"),
          O.set(!1),
          Z.set(!1),
          I.set(!1),
          $.set(!1),
          R.set(!1),
          U.set(!1));
      }));
    try {
      J();
    } catch (pt) {
      (console.error("Error in initial fetchAccounts:", pt),
        Ot(n.failed_load_accounts, n.error, "user"));
    }
    return (
      document.addEventListener("keydown", z),
      () => {
        (document.removeEventListener("keydown", z),
          window.removeEventListener("error", E));
      }
    );
  });
  const gt = () => R.set(!0),
    It = (E) => H(E),
    Ut = (E) => B(E),
    Nt = (E) => st(E),
    Ct = (E) => dt(E),
    Tt = (E) => q(E.id),
    vt = () => R.set(!0),
    xt = () => R.set(!1);
  function ae() {
    ((k = this.value), F.set(k));
  }
  function Zt() {
    ((S = pd(this)), D.set(S));
  }
  const ue = () => R.set(!1),
    Bt = () => I.set(!1);
  function zt() {
    ((w = ze(this.value)), N.set(w));
  }
  const de = () => I.set(!1);
  function Vt() {
    ((_ = ze(this.value)), j.set(_));
  }
  const se = (E) => {
      E.key === "Enter" && !r && String(_ || "").trim() && X();
    },
    At = () => $.set(!1);
  function jt() {
    ((g = ze(this.value)), K.set(g));
  }
  return [
    n,
    s,
    o,
    l,
    a,
    r,
    u,
    d,
    p,
    m,
    _,
    g,
    b,
    w,
    y,
    S,
    k,
    C,
    P,
    T,
    R,
    F,
    D,
    I,
    W,
    N,
    O,
    V,
    j,
    U,
    $,
    nt,
    K,
    Z,
    et,
    lt,
    Q,
    q,
    ct,
    G,
    X,
    tt,
    H,
    st,
    dt,
    Y,
    B,
    ut,
    gt,
    It,
    Ut,
    Nt,
    Ct,
    Tt,
    vt,
    xt,
    ae,
    Zt,
    ue,
    Bt,
    zt,
    de,
    Vt,
    se,
    At,
    jt,
    () => $.set(!1),
    () => ut("removeUser"),
    (E) => lt.set(E),
    () => ut("removeUser"),
  ];
}
class $g extends ui {
  constructor(t) {
    (super(), ci(this, t, Bg, Ig, ii, {}, null, [-1, -1, -1]));
  }
}
function zc(i, t, e) {
  const n = i.slice();
  return ((n[17] = t[e]), n);
}
function zg(i) {
  let t,
    e = i[0].toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 1 && e !== (e = s[0].toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function Ng(i) {
  let t,
    e = (i[0] / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 1 && e !== (e = (o[0] / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function jg(i) {
  let t,
    e = (i[0] / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 1 && e !== (e = (o[0] / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function Wg(i) {
  let t,
    e = i[1].toLocaleString() + "",
    n;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)));
    },
    m(s, o) {
      (A(s, t, o), A(s, n, o));
    },
    p(s, o) {
      o & 2 && e !== (e = s[1].toLocaleString() + "") && L(n, e);
    },
    d(s) {
      s && (M(t), M(n));
    },
  };
}
function Hg(i) {
  let t,
    e = (i[1] / 1e3).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("K")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 2 && e !== (e = (o[1] / 1e3).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function Vg(i) {
  let t,
    e = (i[1] / 1e6).toFixed(1) + "",
    n,
    s;
  return {
    c() {
      ((t = v("R$ ")), (n = v(e)), (s = v("M")));
    },
    m(o, l) {
      (A(o, t, l), A(o, n, l), A(o, s, l));
    },
    p(o, l) {
      l & 2 && e !== (e = (o[1] / 1e6).toFixed(1) + "") && L(n, e);
    },
    d(o) {
      o && (M(t), M(n), M(s));
    },
  };
}
function Nc(i) {
  let t;
  return {
    c() {
      ((t = h("div")), f(t, "class", "w-2 h-2 bg-indigo-400 rounded-full"));
    },
    m(e, n) {
      A(e, t, n);
    },
    d(e) {
      e && M(t);
    },
  };
}
function jc(i) {
  let t,
    e,
    n,
    s,
    o,
    l,
    a,
    r,
    u = (i[3][i[17].label] || i[17].label) + "",
    d,
    p,
    m,
    _,
    g,
    b,
    w,
    y = i[2] === i[17].key && Nc();
  function S() {
    return i[13](i[17]);
  }
  return {
    c() {
      ((t = h("button")),
        (e = h("div")),
        (n = h("i")),
        (l = x()),
        (a = h("div")),
        (r = h("p")),
        (d = v(u)),
        (m = x()),
        y && y.c(),
        (_ = x()),
        f(
          n,
          "class",
          (s =
            "fas fa-" +
            i[17].icon +
            " " +
            (i[2] === i[17].key ? "text-white" : "text-white/70") +
            " text-lg"),
        ),
        f(
          e,
          "class",
          (o =
            "w-10 h-10 " +
            (i[2] === i[17].key ? "bg-white/10" : "bg-white/5") +
            " rounded-lg flex items-center justify-center"),
        ),
        f(
          r,
          "class",
          (p =
            "font-medium capitalize " +
            (i[2] === i[17].key ? "text-white" : "text-white/80")),
        ),
        f(a, "class", "flex-1"),
        f(
          t,
          "class",
          (g =
            "nav-item w-full p-4 flex items-center space-x-3 text-left " +
            (i[2] === i[17].key ? "active" : "")),
        ));
    },
    m(k, C) {
      (A(k, t, C),
        c(t, e),
        c(e, n),
        c(t, l),
        c(t, a),
        c(a, r),
        c(r, d),
        c(t, m),
        y && y.m(t, null),
        c(t, _),
        b || ((w = ft(t, "click", S)), (b = !0)));
    },
    p(k, C) {
      ((i = k),
        C & 4 &&
          s !==
            (s =
              "fas fa-" +
              i[17].icon +
              " " +
              (i[2] === i[17].key ? "text-white" : "text-white/70") +
              " text-lg") &&
          f(n, "class", s),
        C & 4 &&
          o !==
            (o =
              "w-10 h-10 " +
              (i[2] === i[17].key ? "bg-white/10" : "bg-white/5") +
              " rounded-lg flex items-center justify-center") &&
          f(e, "class", o),
        C & 8 && u !== (u = (i[3][i[17].label] || i[17].label) + "") && L(d, u),
        C & 4 &&
          p !==
            (p =
              "font-medium capitalize " +
              (i[2] === i[17].key ? "text-white" : "text-white/80")) &&
          f(r, "class", p),
        i[2] === i[17].key
          ? y || ((y = Nc()), y.c(), y.m(t, _))
          : y && (y.d(1), (y = null)),
        C & 4 &&
          g !==
            (g =
              "nav-item w-full p-4 flex items-center space-x-3 text-left " +
              (i[2] === i[17].key ? "active" : "")) &&
          f(t, "class", g));
    },
    d(k) {
      (k && M(t), y && y.d(), (b = !1), w());
    },
  };
}
function Ug(i) {
  let t, e, n, s, o;
  return (
    (e = new $g({})),
    {
      c() {
        ((t = h("div")), Ei(e.$$.fragment));
      },
      m(l, a) {
        (A(l, t, a), ai(e, t, null), (o = !0));
      },
      i(l) {
        o ||
          (Mt(e.$$.fragment, l),
          l &&
            he(() => {
              o &&
                (s && s.end(1), (n = Te(t, le, { duration: 150 })), n.start());
            }),
          (o = !0));
      },
      o(l) {
        (Wt(e.$$.fragment, l),
          n && n.invalidate(),
          l && (s = De(t, le, { duration: 75 })),
          (o = !1));
      },
      d(l) {
        (l && M(t), ri(e), l && s && s.end());
      },
    }
  );
}
function Yg(i) {
  let t, e, n, s, o;
  return (
    (e = new gg({})),
    {
      c() {
        ((t = h("div")), Ei(e.$$.fragment));
      },
      m(l, a) {
        (A(l, t, a), ai(e, t, null), (o = !0));
      },
      i(l) {
        o ||
          (Mt(e.$$.fragment, l),
          l &&
            he(() => {
              o &&
                (s && s.end(1), (n = Te(t, le, { duration: 150 })), n.start());
            }),
          (o = !0));
      },
      o(l) {
        (Wt(e.$$.fragment, l),
          n && n.invalidate(),
          l && (s = De(t, le, { duration: 75 })),
          (o = !1));
      },
      d(l) {
        (l && M(t), ri(e), l && s && s.end());
      },
    }
  );
}
function Xg(i) {
  let t, e, n, s, o;
  return (
    (e = new E_({})),
    {
      c() {
        ((t = h("div")), Ei(e.$$.fragment));
      },
      m(l, a) {
        (A(l, t, a), ai(e, t, null), (o = !0));
      },
      i(l) {
        o ||
          (Mt(e.$$.fragment, l),
          l &&
            he(() => {
              o &&
                (s && s.end(1), (n = Te(t, le, { duration: 150 })), n.start());
            }),
          (o = !0));
      },
      o(l) {
        (Wt(e.$$.fragment, l),
          n && n.invalidate(),
          l && (s = De(t, le, { duration: 75 })),
          (o = !1));
      },
      d(l) {
        (l && M(t), ri(e), l && s && s.end());
      },
    }
  );
}
function Kg(i) {
  let t, e, n, s, o;
  return (
    (e = new k_({})),
    {
      c() {
        ((t = h("div")), Ei(e.$$.fragment));
      },
      m(l, a) {
        (A(l, t, a), ai(e, t, null), (o = !0));
      },
      i(l) {
        o ||
          (Mt(e.$$.fragment, l),
          l &&
            he(() => {
              o &&
                (s && s.end(1), (n = Te(t, le, { duration: 150 })), n.start());
            }),
          (o = !0));
      },
      o(l) {
        (Wt(e.$$.fragment, l),
          n && n.invalidate(),
          l && (s = De(t, le, { duration: 75 })),
          (o = !1));
      },
      d(l) {
        (l && M(t), ri(e), l && s && s.end());
      },
    }
  );
}
function qg(i) {
  let t, e, n, s, o;
  return (
    (e = new d_({})),
    {
      c() {
        ((t = h("div")), Ei(e.$$.fragment));
      },
      m(l, a) {
        (A(l, t, a), ai(e, t, null), (o = !0));
      },
      i(l) {
        o ||
          (Mt(e.$$.fragment, l),
          l &&
            he(() => {
              o &&
                (s && s.end(1), (n = Te(t, le, { duration: 150 })), n.start());
            }),
          (o = !0));
      },
      o(l) {
        (Wt(e.$$.fragment, l),
          n && n.invalidate(),
          l && (s = De(t, le, { duration: 75 })),
          (o = !1));
      },
      d(l) {
        (l && M(t), ri(e), l && s && s.end());
      },
    }
  );
}
function Gg(i) {
  let t, e, n, s, o;
  return (
    (e = new n_({})),
    {
      c() {
        ((t = h("div")), Ei(e.$$.fragment));
      },
      m(l, a) {
        (A(l, t, a), ai(e, t, null), (o = !0));
      },
      i(l) {
        o ||
          (Mt(e.$$.fragment, l),
          l &&
            he(() => {
              o &&
                (s && s.end(1), (n = Te(t, le, { duration: 150 })), n.start());
            }),
          (o = !0));
      },
      o(l) {
        (Wt(e.$$.fragment, l),
          n && n.invalidate(),
          l && (s = De(t, le, { duration: 75 })),
          (o = !1));
      },
      d(l) {
        (l && M(t), ri(e), l && s && s.end());
      },
    }
  );
}
function Qg(i) {
  let t, e, n, s, o;
  return (
    (e = new Xm({})),
    {
      c() {
        ((t = h("div")), Ei(e.$$.fragment));
      },
      m(l, a) {
        (A(l, t, a), ai(e, t, null), (o = !0));
      },
      i(l) {
        o ||
          (Mt(e.$$.fragment, l),
          l &&
            he(() => {
              o &&
                (s && s.end(1), (n = Te(t, le, { duration: 150 })), n.start());
            }),
          (o = !0));
      },
      o(l) {
        (Wt(e.$$.fragment, l),
          n && n.invalidate(),
          l && (s = De(t, le, { duration: 75 })),
          (o = !1));
      },
      d(l) {
        (l && M(t), ri(e), l && s && s.end());
      },
    }
  );
}
function Zg(i) {
  let t,
    e,
    n,
    s,
    o,
    l,
    a,
    r,
    u,
    d,
    p,
    m,
    _,
    g,
    b,
    w,
    y,
    S,
    k,
    C,
    P,
    T,
    R,
    F,
    D,
    I,
    W,
    N,
    O,
    V = (i[3].close || "Fechar") + "",
    j,
    U,
    $,
    nt,
    K,
    Z,
    et,
    lt,
    J,
    Q,
    q;
  function ct(ot, ut) {
    return ot[0] >= 1e6 ? jg : ot[0] >= 1e3 ? Ng : zg;
  }
  let G = ct(i),
    X = G(i);
  function tt(ot, ut) {
    return ot[1] >= 1e6 ? Vg : ot[1] >= 1e3 ? Hg : Wg;
  }
  let H = tt(i),
    st = H(i),
    dt = xe(i[11]),
    Y = [];
  for (let ot = 0; ot < dt.length; ot += 1) Y[ot] = jc(zc(i, dt, ot));
  const z = [Qg, Gg, qg, Kg, Xg, Yg, Ug],
    B = [];
  function wt(ot, ut) {
    return ot[4]
      ? 0
      : ot[5]
        ? 1
        : ot[6]
          ? 2
          : ot[7]
            ? 3
            : ot[8]
              ? 4
              : ot[9]
                ? 5
                : ot[10]
                  ? 6
                  : -1;
  }
  return (
    ~(K = wt(i)) && (Z = B[K] = z[K](i)),
    {
      c() {
        ((t = h("div")),
          (e = h("div")),
          (n = h("div")),
          (s = h("div")),
          (o = h("div")),
          (o.innerHTML =
            '<div class="flex items-center space-x-3"><div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center"><i class="fas fa-building-columns text-white text-xl"></i></div> <div><h1 class="text-xl font-bold text-white">Banco</h1> <p class="text-sm text-white/60">Painel Financeiro</p></div></div>'),
          (l = x()),
          (a = h("div")),
          (r = h("div")),
          (u = h("div")),
          (d = h("div")),
          (p = h("div")),
          (p.innerHTML =
            '<i class="fas fa-wallet text-blue-400 text-lg"></i>'),
          (m = x()),
          (_ = h("div")),
          (g = h("p")),
          (g.textContent = "Saldo Total"),
          (b = x()),
          (w = h("p")),
          X.c(),
          (S = x()),
          (k = h("div")),
          (C = v("Dinheiro: ")),
          st.c(),
          (P = x()),
          (T = h("div")),
          (R = h("div")));
        for (let ot = 0; ot < Y.length; ot += 1) Y[ot].c();
        ((F = x()),
          (D = h("div")),
          (I = h("button")),
          (W = h("i")),
          (N = x()),
          (O = h("span")),
          (j = v(V)),
          (U = x()),
          ($ = h("div")),
          (nt = h("div")),
          Z && Z.c(),
          f(o, "class", "p-6 border-b border-white/10"),
          f(
            p,
            "class",
            "w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center",
          ),
          f(g, "class", "text-sm text-white/60"),
          f(w, "class", "text-xl font-bold text-white truncate"),
          f(
            w,
            "title",
            (y = i[0].toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
            })),
          ),
          f(_, "class", "flex-1 min-w-0"),
          f(d, "class", "flex items-center space-x-3"),
          f(u, "class", "flex items-center justify-between mb-4"),
          f(k, "class", "text-xs text-white/50"),
          f(r, "class", "stat-card"),
          f(a, "class", "p-6"),
          f(R, "class", "space-y-2"),
          f(T, "class", "flex-1 px-4 pb-4"),
          f(W, "class", "fas fa-times text-red-400 text-lg"),
          f(O, "class", "text-red-400 font-medium"),
          f(
            I,
            "class",
            "w-full p-3 rounded-xl bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-colors flex items-center justify-center space-x-3",
          ),
          f(D, "class", "p-4 border-t border-white/10"),
          f(
            s,
            "class",
            "w-72 flex flex-col bg-black/20 border-r border-white/10",
          ),
          f(nt, "class", "flex-1 overflow-hidden"),
          f($, "class", "flex-1 flex flex-col"),
          f(n, "class", "flex h-full"),
          f(
            e,
            "class",
            "w-full max-w-7xl h-full max-h-[900px] modern-card overflow-hidden",
          ),
          f(
            t,
            "class",
            "fixed inset-0 flex items-center justify-center p-4 z-10",
          ));
      },
      m(ot, ut) {
        (A(ot, t, ut),
          c(t, e),
          c(e, n),
          c(n, s),
          c(s, o),
          c(s, l),
          c(s, a),
          c(a, r),
          c(r, u),
          c(u, d),
          c(d, p),
          c(d, m),
          c(d, _),
          c(_, g),
          c(_, b),
          c(_, w),
          X.m(w, null),
          c(r, S),
          c(r, k),
          c(k, C),
          st.m(k, null),
          c(s, P),
          c(s, T),
          c(T, R));
        for (let gt = 0; gt < Y.length; gt += 1) Y[gt] && Y[gt].m(R, null);
        (c(s, F),
          c(s, D),
          c(D, I),
          c(I, W),
          c(I, N),
          c(I, O),
          c(O, j),
          c(n, U),
          c(n, $),
          c($, nt),
          ~K && B[K].m(nt, null),
          (J = !0),
          Q || ((q = ft(I, "click", i[14])), (Q = !0)));
      },
      p(ot, [ut]) {
        if (
          (G === (G = ct(ot)) && X
            ? X.p(ot, ut)
            : (X.d(1), (X = G(ot)), X && (X.c(), X.m(w, null))),
          (!J ||
            (ut & 1 &&
              y !==
                (y = ot[0].toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 0,
                })))) &&
            f(w, "title", y),
          H === (H = tt(ot)) && st
            ? st.p(ot, ut)
            : (st.d(1), (st = H(ot)), st && (st.c(), st.m(k, null))),
          ut & 6156)
        ) {
          dt = xe(ot[11]);
          let It;
          for (It = 0; It < dt.length; It += 1) {
            const Ut = zc(ot, dt, It);
            Y[It]
              ? Y[It].p(Ut, ut)
              : ((Y[It] = jc(Ut)), Y[It].c(), Y[It].m(R, null));
          }
          for (; It < Y.length; It += 1) Y[It].d(1);
          Y.length = dt.length;
        }
        (!J || ut & 8) && V !== (V = (ot[3].close || "Fechar") + "") && L(j, V);
        let gt = K;
        ((K = wt(ot)),
          K !== gt &&
            (Z &&
              (Ee(),
              Wt(B[gt], 1, 1, () => {
                B[gt] = null;
              }),
              Ie()),
            ~K
              ? ((Z = B[K]),
                Z || ((Z = B[K] = z[K](ot)), Z.c()),
                Mt(Z, 1),
                Z.m(nt, null))
              : (Z = null)));
      },
      i(ot) {
        J ||
          (Mt(Z),
          ot &&
            he(() => {
              J &&
                (lt && lt.end(1),
                (et = Te(e, En, { duration: 600, easing: Ql })),
                et.start());
            }),
          (J = !0));
      },
      o(ot) {
        (Wt(Z),
          et && et.invalidate(),
          ot && (lt = De(e, le, { duration: 400 })),
          (J = !1));
      },
      d(ot) {
        (ot && M(t),
          X.d(),
          st.d(),
          ns(Y, ot),
          ~K && B[K].d(),
          ot && lt && lt.end(),
          (Q = !1),
          q());
      },
    }
  );
}
function Jg(i, t, e) {
  let n, s, o, l, a, r, u, d, p, m, _;
  (mt(i, qe, (k) => e(0, (n = k))),
    mt(i, Fi, (k) => e(1, (s = k))),
    mt(i, gl, (k) => e(2, (o = k))),
    mt(i, li, (k) => e(3, (l = k))),
    mt(i, As, (k) => e(4, (a = k))),
    mt(i, Ao, (k) => e(5, (r = k))),
    mt(i, Lo, (k) => e(6, (u = k))),
    mt(i, pl, (k) => e(7, (d = k))),
    mt(i, ml, (k) => e(8, (p = k))),
    mt(i, $a, (k) => e(9, (m = k))),
    mt(i, _l, (k) => e(10, (_ = k))),
    gl.subscribe((k) => {}));
  async function g() {
    try {
      const k = await qt("ps-banking:client:getMoneyTypes", {}),
        C = k.find((T) => T.name === "bank"),
        P = k.find((T) => T.name === "cash");
      (C && qe.set(C.amount), P && Fi.set(P.amount));
    } catch (k) {
      console.error(k);
    }
  }
  sn(async () => {
    g();
    try {
      const k = await qt("ps-banking:client:getLocales", {});
      li.set(k);
    } catch (k) {
      console.error(k);
    }
  });
  const b = [
    { key: "overview", icon: "house", label: "overview" },
    { key: "bills", icon: "file-invoice", label: "bills" },
    { key: "history", icon: "clock-rotate-left", label: "history" },
    { key: "withdraw", icon: "arrow-down", label: "withdraw" },
    { key: "deposit", icon: "arrow-up", label: "deposit" },
    { key: "accounts", icon: "piggy-bank", label: "accounts" },
  ];
  function w(k) {
    switch (
      (As.set(!1),
      Ao.set(!1),
      Lo.set(!1),
      pl.set(!1),
      ml.set(!1),
      $a.set(!1),
      _l.set(!1),
      gl.set(k),
      k)
    ) {
      case "overview":
        As.set(!0);
        break;
      case "bills":
        Ao.set(!0);
        break;
      case "history":
        Lo.set(!0);
        break;
      case "withdraw":
        pl.set(!0);
        break;
      case "deposit":
        ml.set(!0);
        break;
      case "accounts":
        _l.set(!0);
        break;
    }
  }
  return [
    n,
    s,
    o,
    l,
    a,
    r,
    u,
    d,
    p,
    m,
    _,
    b,
    w,
    (k) => w(k.key),
    () => {
      (qt("ps-banking:client:hideUI"), ws.set(!1));
    },
  ];
}
class tb extends ui {
  constructor(t) {
    (super(), ci(this, t, Jg, Zg, ii, {}));
  }
}
const eb = (i, t = 1e3) => {
  if (Gl())
    for (const e of i)
      setTimeout(() => {
        window.dispatchEvent(
          new MessageEvent("message", {
            data: { action: e.action, data: e.data },
          }),
        );
      }, t);
};
function Wc(i, t, e) {
  const n = i.slice();
  return ((n[1] = t[e]), n);
}
function ib(i) {
  let t, e;
  return (
    (t = new tb({})),
    {
      c() {
        Ei(t.$$.fragment);
      },
      m(n, s) {
        (ai(t, n, s), (e = !0));
      },
      i(n) {
        e || (Mt(t.$$.fragment, n), (e = !0));
      },
      o(n) {
        (Wt(t.$$.fragment, n), (e = !1));
      },
      d(n) {
        ri(t, n);
      },
    }
  );
}
function Hc(i, t) {
  let e,
    n,
    s,
    o,
    l,
    a,
    r,
    u,
    d = t[1].title + "",
    p,
    m,
    _,
    g = t[1].message + "",
    b,
    w,
    y,
    S,
    k,
    C,
    P,
    T,
    R,
    F;
  return {
    key: i,
    first: null,
    c() {
      ((e = h("div")),
        (n = h("div")),
        (s = h("i")),
        (a = x()),
        (r = h("div")),
        (u = h("h4")),
        (p = v(d)),
        (m = x()),
        (_ = h("p")),
        (b = v(g)),
        (w = x()),
        (y = h("div")),
        (S = h("div")),
        (C = x()),
        f(
          s,
          "class",
          (o =
            "fas fa-" +
            t[1].icon +
            " " +
            (t[1].title.toLowerCase().includes("error") ||
            t[1].title.toLowerCase().includes("erro")
              ? "text-red-400"
              : t[1].title.toLowerCase().includes("saque")
                ? "text-orange-400"
                : "text-blue-400") +
            " text-lg"),
        ),
        f(
          n,
          "class",
          (l =
            "flex-shrink-0 w-12 h-12 " +
            (t[1].title.toLowerCase().includes("error") ||
            t[1].title.toLowerCase().includes("erro")
              ? "bg-red-500/20"
              : t[1].title.toLowerCase().includes("saque")
                ? "bg-orange-500/20"
                : "bg-blue-500/20") +
            " rounded-xl flex items-center justify-center"),
        ),
        f(u, "class", "text-white font-semibold text-sm mb-1"),
        f(_, "class", "text-white/80 text-sm leading-relaxed"),
        f(r, "class", "flex-1 min-w-0"),
        f(
          S,
          "class",
          (k =
            "w-2 h-2 " +
            (t[1].title.toLowerCase().includes("error") ||
            t[1].title.toLowerCase().includes("erro")
              ? "bg-red-400"
              : t[1].title.toLowerCase().includes("saque")
                ? "bg-orange-400"
                : "bg-blue-400") +
            " rounded-full animate-pulse-soft"),
        ),
        f(y, "class", "flex-shrink-0"),
        f(
          e,
          "class",
          (P =
            "notification-card p-4 flex items-start space-x-4 min-w-[320px] " +
            (t[1].title.toLowerCase().includes("error") ||
            t[1].title.toLowerCase().includes("erro")
              ? "border-red-500/30 bg-red-500/5"
              : t[1].title.toLowerCase().includes("saque")
                ? "border-orange-500/30 bg-orange-500/10"
                : "border-blue-500/30 bg-blue-500/10")),
        ),
        (this.first = e));
    },
    m(D, I) {
      (A(D, e, I),
        c(e, n),
        c(n, s),
        c(e, a),
        c(e, r),
        c(r, u),
        c(u, p),
        c(r, m),
        c(r, _),
        c(_, b),
        c(e, w),
        c(e, y),
        c(y, S),
        c(e, C),
        (F = !0));
    },
    p(D, I) {
      ((t = D),
        (!F ||
          (I & 1 &&
            o !==
              (o =
                "fas fa-" +
                t[1].icon +
                " " +
                (t[1].title.toLowerCase().includes("error") ||
                t[1].title.toLowerCase().includes("erro")
                  ? "text-red-400"
                  : t[1].title.toLowerCase().includes("saque")
                    ? "text-orange-400"
                    : "text-blue-400") +
                " text-lg"))) &&
          f(s, "class", o),
        (!F ||
          (I & 1 &&
            l !==
              (l =
                "flex-shrink-0 w-12 h-12 " +
                (t[1].title.toLowerCase().includes("error") ||
                t[1].title.toLowerCase().includes("erro")
                  ? "bg-red-500/20"
                  : t[1].title.toLowerCase().includes("saque")
                    ? "bg-orange-500/20"
                    : "bg-blue-500/20") +
                " rounded-xl flex items-center justify-center"))) &&
          f(n, "class", l),
        (!F || I & 1) && d !== (d = t[1].title + "") && L(p, d),
        (!F || I & 1) && g !== (g = t[1].message + "") && L(b, g),
        (!F ||
          (I & 1 &&
            k !==
              (k =
                "w-2 h-2 " +
                (t[1].title.toLowerCase().includes("error") ||
                t[1].title.toLowerCase().includes("erro")
                  ? "bg-red-400"
                  : t[1].title.toLowerCase().includes("saque")
                    ? "bg-orange-400"
                    : "bg-blue-400") +
                " rounded-full animate-pulse-soft"))) &&
          f(S, "class", k),
        (!F ||
          (I & 1 &&
            P !==
              (P =
                "notification-card p-4 flex items-start space-x-4 min-w-[320px] " +
                (t[1].title.toLowerCase().includes("error") ||
                t[1].title.toLowerCase().includes("erro")
                  ? "border-red-500/30 bg-red-500/5"
                  : t[1].title.toLowerCase().includes("saque")
                    ? "border-orange-500/30 bg-orange-500/10"
                    : "border-blue-500/30 bg-blue-500/10")))) &&
          f(e, "class", P));
    },
    i(D) {
      F ||
        (D &&
          he(() => {
            F &&
              (R && R.end(1),
              (T = Te(e, Yo, { duration: 400, x: 300 })),
              T.start());
          }),
        (F = !0));
    },
    o(D) {
      (T && T.invalidate(), D && (R = De(e, le, { duration: 300 })), (F = !1));
    },
    d(D) {
      (D && M(e), D && R && R.end());
    },
  };
}
function nb(i) {
  let t,
    e,
    n,
    s,
    o = [],
    l = new Map(),
    a;
  e = new Hd({ props: { $$slots: { default: [ib] }, $$scope: { ctx: i } } });
  let r = xe(i[0]);
  const u = (d) => d[1].id;
  for (let d = 0; d < r.length; d += 1) {
    let p = Wc(i, r, d),
      m = u(p);
    l.set(m, (o[d] = Hc(m, p)));
  }
  return {
    c() {
      ((t = h("main")), Ei(e.$$.fragment), (n = x()), (s = h("div")));
      for (let d = 0; d < o.length; d += 1) o[d].c();
      (f(
        s,
        "class",
        "fixed bottom-20 right-8 flex flex-col gap-4 z-[100] max-w-sm",
      ),
        f(t, "class", "relative"));
    },
    m(d, p) {
      (A(d, t, p), ai(e, t, null), c(t, n), c(t, s));
      for (let m = 0; m < o.length; m += 1) o[m] && o[m].m(s, null);
      a = !0;
    },
    p(d, [p]) {
      const m = {};
      (p & 16 && (m.$$scope = { dirty: p, ctx: d }),
        e.$set(m),
        p & 1 &&
          ((r = xe(d[0])),
          Ee(),
          (o = $s(o, p, u, 1, d, r, l, s, Uo, Hc, null, Wc)),
          Ie()));
    },
    i(d) {
      if (!a) {
        Mt(e.$$.fragment, d);
        for (let p = 0; p < r.length; p += 1) Mt(o[p]);
        a = !0;
      }
    },
    o(d) {
      Wt(e.$$.fragment, d);
      for (let p = 0; p < o.length; p += 1) Wt(o[p]);
      a = !1;
    },
    d(d) {
      (d && M(t), ri(e));
      for (let p = 0; p < o.length; p += 1) o[p].d();
    },
  };
}
function sb(i, t, e) {
  let n;
  return (
    mt(i, Fl, (s) => e(0, (n = s))),
    sn(async () => {
      if (!Gl())
        try {
          const s = await qt("ps-banking:client:getColorConfig");
          s && s.color && Cd(s.color);
        } catch (s) {
          console.warn(
            "Failed to load color configuration, using defaults:",
            s,
          );
        }
    }),
    eb([{ action: "openBank", data: !0 }]),
    [n]
  );
}
class ob extends ui {
  constructor(t) {
    (super(), ci(this, t, sb, nb, ii, {}));
  }
}
new ob({ target: document.getElementById("app") });
