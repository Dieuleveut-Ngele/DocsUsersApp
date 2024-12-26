import { a as xr, b as Bs } from "./chunk-FPJRTKUA.js";
import { c as Be, d, f as Z } from "./chunk-WMVSLYLA.js";
var V = d((Ri, Us) => {
  "use strict";
  var Tr = function (i) {
    return i && i.Math === Math && i;
  };
  Us.exports =
    Tr(typeof globalThis == "object" && globalThis) ||
    Tr(typeof window == "object" && window) ||
    Tr(typeof self == "object" && self) ||
    Tr(typeof global == "object" && global) ||
    Tr(typeof Ri == "object" && Ri) ||
    (function () {
      return this;
    })() ||
    Function("return this")();
});
var D = d((AO, Fs) => {
  "use strict";
  Fs.exports = function (i) {
    try {
      return !!i();
    } catch {
      return !0;
    }
  };
});
var oe = d((PO, js) => {
  "use strict";
  var Og = D();
  js.exports = !Og(function () {
    return (
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1] !== 7
    );
  });
});
var Or = d((RO, zs) => {
  "use strict";
  var Sg = D();
  zs.exports = !Sg(function () {
    var i = function () {}.bind();
    return typeof i != "function" || i.hasOwnProperty("prototype");
  });
});
var G = d((NO, $s) => {
  "use strict";
  var Eg = Or(),
    ot = Function.prototype.call;
  $s.exports = Eg
    ? ot.bind(ot)
    : function () {
        return ot.apply(ot, arguments);
      };
});
var Xs = d((Ys) => {
  "use strict";
  var Hs = {}.propertyIsEnumerable,
    Gs = Object.getOwnPropertyDescriptor,
    wg = Gs && !Hs.call({ 1: 2 }, 1);
  Ys.f = wg
    ? function (e) {
        var r = Gs(this, e);
        return !!r && r.enumerable;
      }
    : Hs;
});
var ut = d((MO, Ws) => {
  "use strict";
  Ws.exports = function (i, e) {
    return {
      enumerable: !(i & 1),
      configurable: !(i & 2),
      writable: !(i & 4),
      value: e,
    };
  };
});
var L = d((VO, Zs) => {
  "use strict";
  var Qs = Or(),
    Ks = Function.prototype,
    Ni = Ks.call,
    Cg = Qs && Ks.bind.bind(Ni, Ni);
  Zs.exports = Qs
    ? Cg
    : function (i) {
        return function () {
          return Ni.apply(i, arguments);
        };
      };
});
var Ae = d((_O, eo) => {
  "use strict";
  var Js = L(),
    qg = Js({}.toString),
    Ag = Js("".slice);
  eo.exports = function (i) {
    return Ag(qg(i), 8, -1);
  };
});
var Mi = d((DO, ro) => {
  "use strict";
  var Pg = L(),
    Rg = D(),
    Ng = Ae(),
    Ii = Object,
    Ig = Pg("".split);
  ro.exports = Rg(function () {
    return !Ii("z").propertyIsEnumerable(0);
  })
    ? function (i) {
        return Ng(i) === "String" ? Ig(i, "") : Ii(i);
      }
    : Ii;
});
var Pe = d((LO, to) => {
  "use strict";
  to.exports = function (i) {
    return i == null;
  };
});
var ue = d((kO, io) => {
  "use strict";
  var Mg = Pe(),
    Vg = TypeError;
  io.exports = function (i) {
    if (Mg(i)) throw new Vg("Can't call method on " + i);
    return i;
  };
});
var Ke = d((BO, ao) => {
  "use strict";
  var _g = Mi(),
    Dg = ue();
  ao.exports = function (i) {
    return _g(Dg(i));
  };
});
var k = d((UO, no) => {
  "use strict";
  var Vi = typeof document == "object" && document.all;
  no.exports =
    typeof Vi > "u" && Vi !== void 0
      ? function (i) {
          return typeof i == "function" || i === Vi;
        }
      : function (i) {
          return typeof i == "function";
        };
});
var le = d((FO, so) => {
  "use strict";
  var Lg = k();
  so.exports = function (i) {
    return typeof i == "object" ? i !== null : Lg(i);
  };
});
var Re = d((jO, oo) => {
  "use strict";
  var _i = V(),
    kg = k(),
    Bg = function (i) {
      return kg(i) ? i : void 0;
    };
  oo.exports = function (i, e) {
    return arguments.length < 2 ? Bg(_i[i]) : _i[i] && _i[i][e];
  };
});
var Sr = d((zO, uo) => {
  "use strict";
  var Ug = L();
  uo.exports = Ug({}.isPrototypeOf);
});
var Ze = d(($O, co) => {
  "use strict";
  var Fg = V(),
    lo = Fg.navigator,
    ho = lo && lo.userAgent;
  co.exports = ho ? String(ho) : "";
});
var ht = d((HO, mo) => {
  "use strict";
  var yo = V(),
    Di = Ze(),
    fo = yo.process,
    vo = yo.Deno,
    go = (fo && fo.versions) || (vo && vo.version),
    po = go && go.v8,
    fe,
    lt;
  po &&
    ((fe = po.split(".")),
    (lt = fe[0] > 0 && fe[0] < 4 ? 1 : +(fe[0] + fe[1])));
  !lt &&
    Di &&
    ((fe = Di.match(/Edge\/(\d+)/)),
    (!fe || fe[1] >= 74) &&
      ((fe = Di.match(/Chrome\/(\d+)/)), fe && (lt = +fe[1])));
  mo.exports = lt;
});
var Li = d((GO, xo) => {
  "use strict";
  var bo = ht(),
    jg = D(),
    zg = V(),
    $g = zg.String;
  xo.exports =
    !!Object.getOwnPropertySymbols &&
    !jg(function () {
      var i = Symbol("symbol detection");
      return (
        !$g(i) ||
        !(Object(i) instanceof Symbol) ||
        (!Symbol.sham && bo && bo < 41)
      );
    });
});
var ki = d((YO, To) => {
  "use strict";
  var Hg = Li();
  To.exports = Hg && !Symbol.sham && typeof Symbol.iterator == "symbol";
});
var Bi = d((XO, Oo) => {
  "use strict";
  var Gg = Re(),
    Yg = k(),
    Xg = Sr(),
    Wg = ki(),
    Qg = Object;
  Oo.exports = Wg
    ? function (i) {
        return typeof i == "symbol";
      }
    : function (i) {
        var e = Gg("Symbol");
        return Yg(e) && Xg(e.prototype, Qg(i));
      };
});
var Er = d((WO, So) => {
  "use strict";
  var Kg = String;
  So.exports = function (i) {
    try {
      return Kg(i);
    } catch {
      return "Object";
    }
  };
});
var be = d((QO, Eo) => {
  "use strict";
  var Zg = k(),
    Jg = Er(),
    ed = TypeError;
  Eo.exports = function (i) {
    if (Zg(i)) return i;
    throw new ed(Jg(i) + " is not a function");
  };
});
var Ue = d((KO, wo) => {
  "use strict";
  var rd = be(),
    td = Pe();
  wo.exports = function (i, e) {
    var r = i[e];
    return td(r) ? void 0 : rd(r);
  };
});
var qo = d((ZO, Co) => {
  "use strict";
  var Ui = G(),
    Fi = k(),
    ji = le(),
    id = TypeError;
  Co.exports = function (i, e) {
    var r, t;
    if (
      (e === "string" && Fi((r = i.toString)) && !ji((t = Ui(r, i)))) ||
      (Fi((r = i.valueOf)) && !ji((t = Ui(r, i)))) ||
      (e !== "string" && Fi((r = i.toString)) && !ji((t = Ui(r, i))))
    )
      return t;
    throw new id("Can't convert object to primitive value");
  };
});
var ve = d((JO, Ao) => {
  "use strict";
  Ao.exports = !1;
});
var ct = d((eS, Ro) => {
  "use strict";
  var Po = V(),
    ad = Object.defineProperty;
  Ro.exports = function (i, e) {
    try {
      ad(Po, i, { value: e, configurable: !0, writable: !0 });
    } catch {
      Po[i] = e;
    }
    return e;
  };
});
var ft = d((rS, Mo) => {
  "use strict";
  var nd = ve(),
    sd = V(),
    od = ct(),
    No = "__core-js_shared__",
    Io = (Mo.exports = sd[No] || od(No, {}));
  (Io.versions || (Io.versions = [])).push({
    version: "3.38.1",
    mode: nd ? "pure" : "global",
    copyright: "\xA9 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
    source: "https://github.com/zloirock/core-js",
  });
});
var vt = d((tS, _o) => {
  "use strict";
  var Vo = ft();
  _o.exports = function (i, e) {
    return Vo[i] || (Vo[i] = e || {});
  };
});
var wr = d((iS, Do) => {
  "use strict";
  var ud = ue(),
    ld = Object;
  Do.exports = function (i) {
    return ld(ud(i));
  };
});
var he = d((aS, Lo) => {
  "use strict";
  var hd = L(),
    cd = wr(),
    fd = hd({}.hasOwnProperty);
  Lo.exports =
    Object.hasOwn ||
    function (e, r) {
      return fd(cd(e), r);
    };
});
var zi = d((nS, ko) => {
  "use strict";
  var vd = L(),
    gd = 0,
    dd = Math.random(),
    pd = vd((1).toString);
  ko.exports = function (i) {
    return "Symbol(" + (i === void 0 ? "" : i) + ")_" + pd(++gd + dd, 36);
  };
});
var z = d((sS, Uo) => {
  "use strict";
  var yd = V(),
    md = vt(),
    Bo = he(),
    bd = zi(),
    xd = Li(),
    Td = ki(),
    Je = yd.Symbol,
    $i = md("wks"),
    Od = Td ? Je.for || Je : (Je && Je.withoutSetter) || bd;
  Uo.exports = function (i) {
    return (
      Bo($i, i) || ($i[i] = xd && Bo(Je, i) ? Je[i] : Od("Symbol." + i)), $i[i]
    );
  };
});
var $o = d((oS, zo) => {
  "use strict";
  var Sd = G(),
    Fo = le(),
    jo = Bi(),
    Ed = Ue(),
    wd = qo(),
    Cd = z(),
    qd = TypeError,
    Ad = Cd("toPrimitive");
  zo.exports = function (i, e) {
    if (!Fo(i) || jo(i)) return i;
    var r = Ed(i, Ad),
      t;
    if (r) {
      if ((e === void 0 && (e = "default"), (t = Sd(r, i, e)), !Fo(t) || jo(t)))
        return t;
      throw new qd("Can't convert object to primitive value");
    }
    return e === void 0 && (e = "number"), wd(i, e);
  };
});
var Hi = d((uS, Ho) => {
  "use strict";
  var Pd = $o(),
    Rd = Bi();
  Ho.exports = function (i) {
    var e = Pd(i, "string");
    return Rd(e) ? e : e + "";
  };
});
var Cr = d((lS, Yo) => {
  "use strict";
  var Nd = V(),
    Go = le(),
    Gi = Nd.document,
    Id = Go(Gi) && Go(Gi.createElement);
  Yo.exports = function (i) {
    return Id ? Gi.createElement(i) : {};
  };
});
var Yi = d((hS, Xo) => {
  "use strict";
  var Md = oe(),
    Vd = D(),
    _d = Cr();
  Xo.exports =
    !Md &&
    !Vd(function () {
      return (
        Object.defineProperty(_d("div"), "a", {
          get: function () {
            return 7;
          },
        }).a !== 7
      );
    });
});
var qr = d((Qo) => {
  "use strict";
  var Dd = oe(),
    Ld = G(),
    kd = Xs(),
    Bd = ut(),
    Ud = Ke(),
    Fd = Hi(),
    jd = he(),
    zd = Yi(),
    Wo = Object.getOwnPropertyDescriptor;
  Qo.f = Dd
    ? Wo
    : function (e, r) {
        if (((e = Ud(e)), (r = Fd(r)), zd))
          try {
            return Wo(e, r);
          } catch {}
        if (jd(e, r)) return Bd(!Ld(kd.f, e, r), e[r]);
      };
});
var Xi = d((fS, Ko) => {
  "use strict";
  var $d = oe(),
    Hd = D();
  Ko.exports =
    $d &&
    Hd(function () {
      return (
        Object.defineProperty(function () {}, "prototype", {
          value: 42,
          writable: !1,
        }).prototype !== 42
      );
    });
});
var J = d((vS, Zo) => {
  "use strict";
  var Gd = le(),
    Yd = String,
    Xd = TypeError;
  Zo.exports = function (i) {
    if (Gd(i)) return i;
    throw new Xd(Yd(i) + " is not an object");
  };
});
var Te = d((eu) => {
  "use strict";
  var Wd = oe(),
    Qd = Yi(),
    Kd = Xi(),
    gt = J(),
    Jo = Hi(),
    Zd = TypeError,
    Wi = Object.defineProperty,
    Jd = Object.getOwnPropertyDescriptor,
    Qi = "enumerable",
    Ki = "configurable",
    Zi = "writable";
  eu.f = Wd
    ? Kd
      ? function (e, r, t) {
          if (
            (gt(e),
            (r = Jo(r)),
            gt(t),
            typeof e == "function" &&
              r === "prototype" &&
              "value" in t &&
              Zi in t &&
              !t[Zi])
          ) {
            var a = Jd(e, r);
            a &&
              a[Zi] &&
              ((e[r] = t.value),
              (t = {
                configurable: Ki in t ? t[Ki] : a[Ki],
                enumerable: Qi in t ? t[Qi] : a[Qi],
                writable: !1,
              }));
          }
          return Wi(e, r, t);
        }
      : Wi
    : function (e, r, t) {
        if ((gt(e), (r = Jo(r)), gt(t), Qd))
          try {
            return Wi(e, r, t);
          } catch {}
        if ("get" in t || "set" in t) throw new Zd("Accessors not supported");
        return "value" in t && (e[r] = t.value), e;
      };
});
var er = d((dS, ru) => {
  "use strict";
  var ep = oe(),
    rp = Te(),
    tp = ut();
  ru.exports = ep
    ? function (i, e, r) {
        return rp.f(i, e, tp(1, r));
      }
    : function (i, e, r) {
        return (i[e] = r), i;
      };
});
var Ar = d((pS, iu) => {
  "use strict";
  var Ji = oe(),
    ip = he(),
    tu = Function.prototype,
    ap = Ji && Object.getOwnPropertyDescriptor,
    ea = ip(tu, "name"),
    np = ea && function () {}.name === "something",
    sp = ea && (!Ji || (Ji && ap(tu, "name").configurable));
  iu.exports = { EXISTS: ea, PROPER: np, CONFIGURABLE: sp };
});
var dt = d((yS, au) => {
  "use strict";
  var op = L(),
    up = k(),
    ra = ft(),
    lp = op(Function.toString);
  up(ra.inspectSource) ||
    (ra.inspectSource = function (i) {
      return lp(i);
    });
  au.exports = ra.inspectSource;
});
var ou = d((mS, su) => {
  "use strict";
  var hp = V(),
    cp = k(),
    nu = hp.WeakMap;
  su.exports = cp(nu) && /native code/.test(String(nu));
});
var pt = d((bS, lu) => {
  "use strict";
  var fp = vt(),
    vp = zi(),
    uu = fp("keys");
  lu.exports = function (i) {
    return uu[i] || (uu[i] = vp(i));
  };
});
var yt = d((xS, hu) => {
  "use strict";
  hu.exports = {};
});
var Rr = d((TS, vu) => {
  "use strict";
  var gp = ou(),
    fu = V(),
    dp = le(),
    pp = er(),
    ta = he(),
    ia = ft(),
    yp = pt(),
    mp = yt(),
    cu = "Object already initialized",
    aa = fu.TypeError,
    bp = fu.WeakMap,
    mt,
    Pr,
    bt,
    xp = function (i) {
      return bt(i) ? Pr(i) : mt(i, {});
    },
    Tp = function (i) {
      return function (e) {
        var r;
        if (!dp(e) || (r = Pr(e)).type !== i)
          throw new aa("Incompatible receiver, " + i + " required");
        return r;
      };
    };
  gp || ia.state
    ? ((ge = ia.state || (ia.state = new bp())),
      (ge.get = ge.get),
      (ge.has = ge.has),
      (ge.set = ge.set),
      (mt = function (i, e) {
        if (ge.has(i)) throw new aa(cu);
        return (e.facade = i), ge.set(i, e), e;
      }),
      (Pr = function (i) {
        return ge.get(i) || {};
      }),
      (bt = function (i) {
        return ge.has(i);
      }))
    : ((Fe = yp("state")),
      (mp[Fe] = !0),
      (mt = function (i, e) {
        if (ta(i, Fe)) throw new aa(cu);
        return (e.facade = i), pp(i, Fe, e), e;
      }),
      (Pr = function (i) {
        return ta(i, Fe) ? i[Fe] : {};
      }),
      (bt = function (i) {
        return ta(i, Fe);
      }));
  var ge, Fe;
  vu.exports = { set: mt, get: Pr, has: bt, enforce: xp, getterFor: Tp };
});
var oa = d((OS, pu) => {
  "use strict";
  var sa = L(),
    Op = D(),
    Sp = k(),
    xt = he(),
    na = oe(),
    Ep = Ar().CONFIGURABLE,
    wp = dt(),
    du = Rr(),
    Cp = du.enforce,
    qp = du.get,
    gu = String,
    Tt = Object.defineProperty,
    Ap = sa("".slice),
    Pp = sa("".replace),
    Rp = sa([].join),
    Np =
      na &&
      !Op(function () {
        return Tt(function () {}, "length", { value: 8 }).length !== 8;
      }),
    Ip = String(String).split("String"),
    Mp = (pu.exports = function (i, e, r) {
      Ap(gu(e), 0, 7) === "Symbol(" &&
        (e = "[" + Pp(gu(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
        r && r.getter && (e = "get " + e),
        r && r.setter && (e = "set " + e),
        (!xt(i, "name") || (Ep && i.name !== e)) &&
          (na ? Tt(i, "name", { value: e, configurable: !0 }) : (i.name = e)),
        Np &&
          r &&
          xt(r, "arity") &&
          i.length !== r.arity &&
          Tt(i, "length", { value: r.arity });
      try {
        r && xt(r, "constructor") && r.constructor
          ? na && Tt(i, "prototype", { writable: !1 })
          : i.prototype && (i.prototype = void 0);
      } catch {}
      var t = Cp(i);
      return (
        xt(t, "source") || (t.source = Rp(Ip, typeof e == "string" ? e : "")), i
      );
    });
  Function.prototype.toString = Mp(function () {
    return (Sp(this) && qp(this).source) || wp(this);
  }, "toString");
});
var Ne = d((SS, yu) => {
  "use strict";
  var Vp = k(),
    _p = Te(),
    Dp = oa(),
    Lp = ct();
  yu.exports = function (i, e, r, t) {
    t || (t = {});
    var a = t.enumerable,
      n = t.name !== void 0 ? t.name : e;
    if ((Vp(r) && Dp(r, n, t), t.global)) a ? (i[e] = r) : Lp(e, r);
    else {
      try {
        t.unsafe ? i[e] && (a = !0) : delete i[e];
      } catch {}
      a
        ? (i[e] = r)
        : _p.f(i, e, {
            value: r,
            enumerable: !1,
            configurable: !t.nonConfigurable,
            writable: !t.nonWritable,
          });
    }
    return i;
  };
});
var bu = d((ES, mu) => {
  "use strict";
  var kp = Math.ceil,
    Bp = Math.floor;
  mu.exports =
    Math.trunc ||
    function (e) {
      var r = +e;
      return (r > 0 ? Bp : kp)(r);
    };
});
var Nr = d((wS, xu) => {
  "use strict";
  var Up = bu();
  xu.exports = function (i) {
    var e = +i;
    return e !== e || e === 0 ? 0 : Up(e);
  };
});
var Ou = d((CS, Tu) => {
  "use strict";
  var Fp = Nr(),
    jp = Math.max,
    zp = Math.min;
  Tu.exports = function (i, e) {
    var r = Fp(i);
    return r < 0 ? jp(r + e, 0) : zp(r, e);
  };
});
var je = d((qS, Su) => {
  "use strict";
  var $p = Nr(),
    Hp = Math.min;
  Su.exports = function (i) {
    var e = $p(i);
    return e > 0 ? Hp(e, 9007199254740991) : 0;
  };
});
var Ot = d((AS, Eu) => {
  "use strict";
  var Gp = je();
  Eu.exports = function (i) {
    return Gp(i.length);
  };
});
var ua = d((PS, Cu) => {
  "use strict";
  var Yp = Ke(),
    Xp = Ou(),
    Wp = Ot(),
    wu = function (i) {
      return function (e, r, t) {
        var a = Yp(e),
          n = Wp(a);
        if (n === 0) return !i && -1;
        var o = Xp(t, n),
          s;
        if (i && r !== r) {
          for (; n > o; ) if (((s = a[o++]), s !== s)) return !0;
        } else
          for (; n > o; o++)
            if ((i || o in a) && a[o] === r) return i || o || 0;
        return !i && -1;
      };
    };
  Cu.exports = { includes: wu(!0), indexOf: wu(!1) };
});
var ha = d((RS, Au) => {
  "use strict";
  var Qp = L(),
    la = he(),
    Kp = Ke(),
    Zp = ua().indexOf,
    Jp = yt(),
    qu = Qp([].push);
  Au.exports = function (i, e) {
    var r = Kp(i),
      t = 0,
      a = [],
      n;
    for (n in r) !la(Jp, n) && la(r, n) && qu(a, n);
    for (; e.length > t; ) la(r, (n = e[t++])) && (~Zp(a, n) || qu(a, n));
    return a;
  };
});
var St = d((NS, Pu) => {
  "use strict";
  Pu.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ];
});
var Nu = d((Ru) => {
  "use strict";
  var ey = ha(),
    ry = St(),
    ty = ry.concat("length", "prototype");
  Ru.f =
    Object.getOwnPropertyNames ||
    function (e) {
      return ey(e, ty);
    };
});
var Mu = d((Iu) => {
  "use strict";
  Iu.f = Object.getOwnPropertySymbols;
});
var _u = d((VS, Vu) => {
  "use strict";
  var iy = Re(),
    ay = L(),
    ny = Nu(),
    sy = Mu(),
    oy = J(),
    uy = ay([].concat);
  Vu.exports =
    iy("Reflect", "ownKeys") ||
    function (e) {
      var r = ny.f(oy(e)),
        t = sy.f;
      return t ? uy(r, t(e)) : r;
    };
});
var ku = d((_S, Lu) => {
  "use strict";
  var Du = he(),
    ly = _u(),
    hy = qr(),
    cy = Te();
  Lu.exports = function (i, e, r) {
    for (var t = ly(e), a = cy.f, n = hy.f, o = 0; o < t.length; o++) {
      var s = t[o];
      !Du(i, s) && !(r && Du(r, s)) && a(i, s, n(e, s));
    }
  };
});
var ca = d((DS, Bu) => {
  "use strict";
  var fy = D(),
    vy = k(),
    gy = /#|\.prototype\./,
    Ir = function (i, e) {
      var r = py[dy(i)];
      return r === my ? !0 : r === yy ? !1 : vy(e) ? fy(e) : !!e;
    },
    dy = (Ir.normalize = function (i) {
      return String(i).replace(gy, ".").toLowerCase();
    }),
    py = (Ir.data = {}),
    yy = (Ir.NATIVE = "N"),
    my = (Ir.POLYFILL = "P");
  Bu.exports = Ir;
});
var ee = d((LS, Uu) => {
  "use strict";
  var Et = V(),
    by = qr().f,
    xy = er(),
    Ty = Ne(),
    Oy = ct(),
    Sy = ku(),
    Ey = ca();
  Uu.exports = function (i, e) {
    var r = i.target,
      t = i.global,
      a = i.stat,
      n,
      o,
      s,
      u,
      l,
      h;
    if (
      (t
        ? (o = Et)
        : a
          ? (o = Et[r] || Oy(r, {}))
          : (o = Et[r] && Et[r].prototype),
      o)
    )
      for (s in e) {
        if (
          ((l = e[s]),
          i.dontCallGetSet ? ((h = by(o, s)), (u = h && h.value)) : (u = o[s]),
          (n = Ey(t ? s : r + (a ? "." : "#") + s, i.forced)),
          !n && u !== void 0)
        ) {
          if (typeof l == typeof u) continue;
          Sy(l, u);
        }
        (i.sham || (u && u.sham)) && xy(l, "sham", !0), Ty(o, s, l, i);
      }
  };
});
var fa = d((kS, Fu) => {
  "use strict";
  var Mr = V(),
    wy = Ze(),
    Cy = Ae(),
    wt = function (i) {
      return wy.slice(0, i.length) === i;
    };
  Fu.exports = (function () {
    return wt("Bun/")
      ? "BUN"
      : wt("Cloudflare-Workers")
        ? "CLOUDFLARE"
        : wt("Deno/")
          ? "DENO"
          : wt("Node.js/")
            ? "NODE"
            : Mr.Bun && typeof Bun.version == "string"
              ? "BUN"
              : Mr.Deno && typeof Deno.version == "object"
                ? "DENO"
                : Cy(Mr.process) === "process"
                  ? "NODE"
                  : Mr.window && Mr.document
                    ? "BROWSER"
                    : "REST";
  })();
});
var Vr = d((BS, ju) => {
  "use strict";
  var qy = fa();
  ju.exports = qy === "NODE";
});
var $u = d((US, zu) => {
  "use strict";
  var Ay = L(),
    Py = be();
  zu.exports = function (i, e, r) {
    try {
      return Ay(Py(Object.getOwnPropertyDescriptor(i, e)[r]));
    } catch {}
  };
});
var Gu = d((FS, Hu) => {
  "use strict";
  var Ry = le();
  Hu.exports = function (i) {
    return Ry(i) || i === null;
  };
});
var Xu = d((jS, Yu) => {
  "use strict";
  var Ny = Gu(),
    Iy = String,
    My = TypeError;
  Yu.exports = function (i) {
    if (Ny(i)) return i;
    throw new My("Can't set " + Iy(i) + " as a prototype");
  };
});
var va = d((zS, Wu) => {
  "use strict";
  var Vy = $u(),
    _y = le(),
    Dy = ue(),
    Ly = Xu();
  Wu.exports =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var i = !1,
            e = {},
            r;
          try {
            (r = Vy(Object.prototype, "__proto__", "set")),
              r(e, []),
              (i = e instanceof Array);
          } catch {}
          return function (a, n) {
            return Dy(a), Ly(n), _y(a) && (i ? r(a, n) : (a.__proto__ = n)), a;
          };
        })()
      : void 0);
});
var _r = d(($S, Ku) => {
  "use strict";
  var ky = Te().f,
    By = he(),
    Uy = z(),
    Qu = Uy("toStringTag");
  Ku.exports = function (i, e, r) {
    i && !r && (i = i.prototype),
      i && !By(i, Qu) && ky(i, Qu, { configurable: !0, value: e });
  };
});
var el = d((HS, Ju) => {
  "use strict";
  var Zu = oa(),
    Fy = Te();
  Ju.exports = function (i, e, r) {
    return (
      r.get && Zu(r.get, e, { getter: !0 }),
      r.set && Zu(r.set, e, { setter: !0 }),
      Fy.f(i, e, r)
    );
  };
});
var il = d((GS, tl) => {
  "use strict";
  var jy = Re(),
    zy = el(),
    $y = z(),
    Hy = oe(),
    rl = $y("species");
  tl.exports = function (i) {
    var e = jy(i);
    Hy &&
      e &&
      !e[rl] &&
      zy(e, rl, {
        configurable: !0,
        get: function () {
          return this;
        },
      });
  };
});
var nl = d((YS, al) => {
  "use strict";
  var Gy = Sr(),
    Yy = TypeError;
  al.exports = function (i, e) {
    if (Gy(e, i)) return i;
    throw new Yy("Incorrect invocation");
  };
});
var ul = d((XS, ol) => {
  "use strict";
  var Xy = z(),
    Wy = Xy("toStringTag"),
    sl = {};
  sl[Wy] = "z";
  ol.exports = String(sl) === "[object z]";
});
var qt = d((WS, ll) => {
  "use strict";
  var Qy = ul(),
    Ky = k(),
    Ct = Ae(),
    Zy = z(),
    Jy = Zy("toStringTag"),
    e0 = Object,
    r0 =
      Ct(
        (function () {
          return arguments;
        })(),
      ) === "Arguments",
    t0 = function (i, e) {
      try {
        return i[e];
      } catch {}
    };
  ll.exports = Qy
    ? Ct
    : function (i) {
        var e, r, t;
        return i === void 0
          ? "Undefined"
          : i === null
            ? "Null"
            : typeof (r = t0((e = e0(i)), Jy)) == "string"
              ? r
              : r0
                ? Ct(e)
                : (t = Ct(e)) === "Object" && Ky(e.callee)
                  ? "Arguments"
                  : t;
      };
});
var dl = d((QS, gl) => {
  "use strict";
  var i0 = L(),
    a0 = D(),
    hl = k(),
    n0 = qt(),
    s0 = Re(),
    o0 = dt(),
    cl = function () {},
    fl = s0("Reflect", "construct"),
    ga = /^\s*(?:class|function)\b/,
    u0 = i0(ga.exec),
    l0 = !ga.test(cl),
    Dr = function (e) {
      if (!hl(e)) return !1;
      try {
        return fl(cl, [], e), !0;
      } catch {
        return !1;
      }
    },
    vl = function (e) {
      if (!hl(e)) return !1;
      switch (n0(e)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return l0 || !!u0(ga, o0(e));
      } catch {
        return !0;
      }
    };
  vl.sham = !0;
  gl.exports =
    !fl ||
    a0(function () {
      var i;
      return (
        Dr(Dr.call) ||
        !Dr(Object) ||
        !Dr(function () {
          i = !0;
        }) ||
        i
      );
    })
      ? vl
      : Dr;
});
var yl = d((KS, pl) => {
  "use strict";
  var h0 = dl(),
    c0 = Er(),
    f0 = TypeError;
  pl.exports = function (i) {
    if (h0(i)) return i;
    throw new f0(c0(i) + " is not a constructor");
  };
});
var da = d((ZS, bl) => {
  "use strict";
  var ml = J(),
    v0 = yl(),
    g0 = Pe(),
    d0 = z(),
    p0 = d0("species");
  bl.exports = function (i, e) {
    var r = ml(i).constructor,
      t;
    return r === void 0 || g0((t = ml(r)[p0])) ? e : v0(t);
  };
});
var pa = d((JS, Sl) => {
  "use strict";
  var y0 = Or(),
    Ol = Function.prototype,
    xl = Ol.apply,
    Tl = Ol.call;
  Sl.exports =
    (typeof Reflect == "object" && Reflect.apply) ||
    (y0
      ? Tl.bind(xl)
      : function () {
          return Tl.apply(xl, arguments);
        });
});
var Lr = d((eE, El) => {
  "use strict";
  var m0 = Ae(),
    b0 = L();
  El.exports = function (i) {
    if (m0(i) === "Function") return b0(i);
  };
});
var At = d((rE, Cl) => {
  "use strict";
  var wl = Lr(),
    x0 = be(),
    T0 = Or(),
    O0 = wl(wl.bind);
  Cl.exports = function (i, e) {
    return (
      x0(i),
      e === void 0
        ? i
        : T0
          ? O0(i, e)
          : function () {
              return i.apply(e, arguments);
            }
    );
  };
});
var ya = d((tE, ql) => {
  "use strict";
  var S0 = Re();
  ql.exports = S0("document", "documentElement");
});
var Pl = d((iE, Al) => {
  "use strict";
  var E0 = L();
  Al.exports = E0([].slice);
});
var Nl = d((aE, Rl) => {
  "use strict";
  var w0 = TypeError;
  Rl.exports = function (i, e) {
    if (i < e) throw new w0("Not enough arguments");
    return i;
  };
});
var ma = d((nE, Il) => {
  "use strict";
  var C0 = Ze();
  Il.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(C0);
});
var qa = d((sE, Fl) => {
  "use strict";
  var ae = V(),
    q0 = pa(),
    A0 = At(),
    Ml = k(),
    P0 = he(),
    Ul = D(),
    Vl = ya(),
    R0 = Pl(),
    _l = Cr(),
    N0 = Nl(),
    I0 = ma(),
    M0 = Vr(),
    Ea = ae.setImmediate,
    wa = ae.clearImmediate,
    V0 = ae.process,
    ba = ae.Dispatch,
    _0 = ae.Function,
    Dl = ae.MessageChannel,
    D0 = ae.String,
    xa = 0,
    kr = {},
    Ll = "onreadystatechange",
    Br,
    ze,
    Ta,
    Oa;
  Ul(function () {
    Br = ae.location;
  });
  var Ca = function (i) {
      if (P0(kr, i)) {
        var e = kr[i];
        delete kr[i], e();
      }
    },
    Sa = function (i) {
      return function () {
        Ca(i);
      };
    },
    kl = function (i) {
      Ca(i.data);
    },
    Bl = function (i) {
      ae.postMessage(D0(i), Br.protocol + "//" + Br.host);
    };
  (!Ea || !wa) &&
    ((Ea = function (e) {
      N0(arguments.length, 1);
      var r = Ml(e) ? e : _0(e),
        t = R0(arguments, 1);
      return (
        (kr[++xa] = function () {
          q0(r, void 0, t);
        }),
        ze(xa),
        xa
      );
    }),
    (wa = function (e) {
      delete kr[e];
    }),
    M0
      ? (ze = function (i) {
          V0.nextTick(Sa(i));
        })
      : ba && ba.now
        ? (ze = function (i) {
            ba.now(Sa(i));
          })
        : Dl && !I0
          ? ((Ta = new Dl()),
            (Oa = Ta.port2),
            (Ta.port1.onmessage = kl),
            (ze = A0(Oa.postMessage, Oa)))
          : ae.addEventListener &&
              Ml(ae.postMessage) &&
              !ae.importScripts &&
              Br &&
              Br.protocol !== "file:" &&
              !Ul(Bl)
            ? ((ze = Bl), ae.addEventListener("message", kl, !1))
            : Ll in _l("script")
              ? (ze = function (i) {
                  Vl.appendChild(_l("script"))[Ll] = function () {
                    Vl.removeChild(this), Ca(i);
                  };
                })
              : (ze = function (i) {
                  setTimeout(Sa(i), 0);
                }));
  Fl.exports = { set: Ea, clear: wa };
});
var $l = d((oE, zl) => {
  "use strict";
  var jl = V(),
    L0 = oe(),
    k0 = Object.getOwnPropertyDescriptor;
  zl.exports = function (i) {
    if (!L0) return jl[i];
    var e = k0(jl, i);
    return e && e.value;
  };
});
var Aa = d((uE, Gl) => {
  "use strict";
  var Hl = function () {
    (this.head = null), (this.tail = null);
  };
  Hl.prototype = {
    add: function (i) {
      var e = { item: i, next: null },
        r = this.tail;
      r ? (r.next = e) : (this.head = e), (this.tail = e);
    },
    get: function () {
      var i = this.head;
      if (i) {
        var e = (this.head = i.next);
        return e === null && (this.tail = null), i.item;
      }
    },
  };
  Gl.exports = Hl;
});
var Xl = d((lE, Yl) => {
  "use strict";
  var B0 = Ze();
  Yl.exports = /ipad|iphone|ipod/i.test(B0) && typeof Pebble < "u";
});
var Ql = d((hE, Wl) => {
  "use strict";
  var U0 = Ze();
  Wl.exports = /web0s(?!.*chrome)/i.test(U0);
});
var ih = d((cE, th) => {
  "use strict";
  var tr = V(),
    F0 = $l(),
    Kl = At(),
    Pa = qa().set,
    j0 = Aa(),
    z0 = ma(),
    $0 = Xl(),
    H0 = Ql(),
    Ra = Vr(),
    Zl = tr.MutationObserver || tr.WebKitMutationObserver,
    Jl = tr.document,
    eh = tr.process,
    Pt = tr.Promise,
    Ma = F0("queueMicrotask"),
    rr,
    Na,
    Ia,
    Rt,
    rh;
  Ma ||
    ((Ur = new j0()),
    (Fr = function () {
      var i, e;
      for (Ra && (i = eh.domain) && i.exit(); (e = Ur.get()); )
        try {
          e();
        } catch (r) {
          throw (Ur.head && rr(), r);
        }
      i && i.enter();
    }),
    !z0 && !Ra && !H0 && Zl && Jl
      ? ((Na = !0),
        (Ia = Jl.createTextNode("")),
        new Zl(Fr).observe(Ia, { characterData: !0 }),
        (rr = function () {
          Ia.data = Na = !Na;
        }))
      : !$0 && Pt && Pt.resolve
        ? ((Rt = Pt.resolve(void 0)),
          (Rt.constructor = Pt),
          (rh = Kl(Rt.then, Rt)),
          (rr = function () {
            rh(Fr);
          }))
        : Ra
          ? (rr = function () {
              eh.nextTick(Fr);
            })
          : ((Pa = Kl(Pa, tr)),
            (rr = function () {
              Pa(Fr);
            })),
    (Ma = function (i) {
      Ur.head || rr(), Ur.add(i);
    }));
  var Ur, Fr;
  th.exports = Ma;
});
var nh = d((fE, ah) => {
  "use strict";
  ah.exports = function (i, e) {
    try {
      arguments.length === 1 ? console.error(i) : console.error(i, e);
    } catch {}
  };
});
var Nt = d((vE, sh) => {
  "use strict";
  sh.exports = function (i) {
    try {
      return { error: !1, value: i() };
    } catch (e) {
      return { error: !0, value: e };
    }
  };
});
var ir = d((gE, oh) => {
  "use strict";
  var G0 = V();
  oh.exports = G0.Promise;
});
var ar = d((dE, ch) => {
  "use strict";
  var Y0 = V(),
    jr = ir(),
    X0 = k(),
    W0 = ca(),
    Q0 = dt(),
    K0 = z(),
    uh = fa(),
    Z0 = ve(),
    Va = ht(),
    lh = jr && jr.prototype,
    J0 = K0("species"),
    _a = !1,
    hh = X0(Y0.PromiseRejectionEvent),
    em = W0("Promise", function () {
      var i = Q0(jr),
        e = i !== String(jr);
      if ((!e && Va === 66) || (Z0 && !(lh.catch && lh.finally))) return !0;
      if (!Va || Va < 51 || !/native code/.test(i)) {
        var r = new jr(function (n) {
            n(1);
          }),
          t = function (n) {
            n(
              function () {},
              function () {},
            );
          },
          a = (r.constructor = {});
        if (((a[J0] = t), (_a = r.then(function () {}) instanceof t), !_a))
          return !0;
      }
      return !e && (uh === "BROWSER" || uh === "DENO") && !hh;
    });
  ch.exports = { CONSTRUCTOR: em, REJECTION_EVENT: hh, SUBCLASSING: _a };
});
var nr = d((pE, vh) => {
  "use strict";
  var fh = be(),
    rm = TypeError,
    tm = function (i) {
      var e, r;
      (this.promise = new i(function (t, a) {
        if (e !== void 0 || r !== void 0)
          throw new rm("Bad Promise constructor");
        (e = t), (r = a);
      })),
        (this.resolve = fh(e)),
        (this.reject = fh(r));
    };
  vh.exports.f = function (i) {
    return new tm(i);
  };
});
var Ih = d(() => {
  "use strict";
  var im = ee(),
    am = ve(),
    _t = Vr(),
    Ie = V(),
    lr = G(),
    gh = Ne(),
    dh = va(),
    nm = _r(),
    sm = il(),
    om = be(),
    Vt = k(),
    um = le(),
    lm = nl(),
    hm = da(),
    xh = qa().set,
    Ua = ih(),
    cm = nh(),
    fm = Nt(),
    vm = Aa(),
    Th = Rr(),
    Dt = ir(),
    Fa = ar(),
    Oh = nr(),
    Lt = "Promise",
    Sh = Fa.CONSTRUCTOR,
    gm = Fa.REJECTION_EVENT,
    dm = Fa.SUBCLASSING,
    Da = Th.getterFor(Lt),
    pm = Th.set,
    sr = Dt && Dt.prototype,
    $e = Dt,
    It = sr,
    Eh = Ie.TypeError,
    La = Ie.document,
    ja = Ie.process,
    ka = Oh.f,
    ym = ka,
    mm = !!(La && La.createEvent && Ie.dispatchEvent),
    wh = "unhandledrejection",
    bm = "rejectionhandled",
    ph = 0,
    Ch = 1,
    xm = 2,
    za = 1,
    qh = 2,
    Mt,
    yh,
    Tm,
    mh,
    Ah = function (i) {
      var e;
      return um(i) && Vt((e = i.then)) ? e : !1;
    },
    Ph = function (i, e) {
      var r = e.value,
        t = e.state === Ch,
        a = t ? i.ok : i.fail,
        n = i.resolve,
        o = i.reject,
        s = i.domain,
        u,
        l,
        h;
      try {
        a
          ? (t || (e.rejection === qh && Sm(e), (e.rejection = za)),
            a === !0
              ? (u = r)
              : (s && s.enter(), (u = a(r)), s && (s.exit(), (h = !0))),
            u === i.promise
              ? o(new Eh("Promise-chain cycle"))
              : (l = Ah(u))
                ? lr(l, u, n, o)
                : n(u))
          : o(r);
      } catch (f) {
        s && !h && s.exit(), o(f);
      }
    },
    Rh = function (i, e) {
      i.notified ||
        ((i.notified = !0),
        Ua(function () {
          for (var r = i.reactions, t; (t = r.get()); ) Ph(t, i);
          (i.notified = !1), e && !i.rejection && Om(i);
        }));
    },
    Nh = function (i, e, r) {
      var t, a;
      mm
        ? ((t = La.createEvent("Event")),
          (t.promise = e),
          (t.reason = r),
          t.initEvent(i, !1, !0),
          Ie.dispatchEvent(t))
        : (t = { promise: e, reason: r }),
        !gm && (a = Ie["on" + i])
          ? a(t)
          : i === wh && cm("Unhandled promise rejection", r);
    },
    Om = function (i) {
      lr(xh, Ie, function () {
        var e = i.facade,
          r = i.value,
          t = bh(i),
          a;
        if (
          t &&
          ((a = fm(function () {
            _t ? ja.emit("unhandledRejection", r, e) : Nh(wh, e, r);
          })),
          (i.rejection = _t || bh(i) ? qh : za),
          a.error)
        )
          throw a.value;
      });
    },
    bh = function (i) {
      return i.rejection !== za && !i.parent;
    },
    Sm = function (i) {
      lr(xh, Ie, function () {
        var e = i.facade;
        _t ? ja.emit("rejectionHandled", e) : Nh(bm, e, i.value);
      });
    },
    or = function (i, e, r) {
      return function (t) {
        i(e, t, r);
      };
    },
    ur = function (i, e, r) {
      i.done ||
        ((i.done = !0), r && (i = r), (i.value = e), (i.state = xm), Rh(i, !0));
    },
    Ba = function (i, e, r) {
      if (!i.done) {
        (i.done = !0), r && (i = r);
        try {
          if (i.facade === e) throw new Eh("Promise can't be resolved itself");
          var t = Ah(e);
          t
            ? Ua(function () {
                var a = { done: !1 };
                try {
                  lr(t, e, or(Ba, a, i), or(ur, a, i));
                } catch (n) {
                  ur(a, n, i);
                }
              })
            : ((i.value = e), (i.state = Ch), Rh(i, !1));
        } catch (a) {
          ur({ done: !1 }, a, i);
        }
      }
    };
  if (
    Sh &&
    (($e = function (e) {
      lm(this, It), om(e), lr(Mt, this);
      var r = Da(this);
      try {
        e(or(Ba, r), or(ur, r));
      } catch (t) {
        ur(r, t);
      }
    }),
    (It = $e.prototype),
    (Mt = function (e) {
      pm(this, {
        type: Lt,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: new vm(),
        rejection: !1,
        state: ph,
        value: null,
      });
    }),
    (Mt.prototype = gh(It, "then", function (e, r) {
      var t = Da(this),
        a = ka(hm(this, $e));
      return (
        (t.parent = !0),
        (a.ok = Vt(e) ? e : !0),
        (a.fail = Vt(r) && r),
        (a.domain = _t ? ja.domain : void 0),
        t.state === ph
          ? t.reactions.add(a)
          : Ua(function () {
              Ph(a, t);
            }),
        a.promise
      );
    })),
    (yh = function () {
      var i = new Mt(),
        e = Da(i);
      (this.promise = i), (this.resolve = or(Ba, e)), (this.reject = or(ur, e));
    }),
    (Oh.f = ka =
      function (i) {
        return i === $e || i === Tm ? new yh(i) : ym(i);
      }),
    !am && Vt(Dt) && sr !== Object.prototype)
  ) {
    (mh = sr.then),
      dm ||
        gh(
          sr,
          "then",
          function (e, r) {
            var t = this;
            return new $e(function (a, n) {
              lr(mh, t, a, n);
            }).then(e, r);
          },
          { unsafe: !0 },
        );
    try {
      delete sr.constructor;
    } catch {}
    dh && dh(sr, It);
  }
  im({ global: !0, constructor: !0, wrap: !0, forced: Sh }, { Promise: $e });
  nm($e, Lt, !1, !0);
  sm(Lt);
});
var hr = d((bE, Mh) => {
  "use strict";
  Mh.exports = {};
});
var _h = d((xE, Vh) => {
  "use strict";
  var Em = z(),
    wm = hr(),
    Cm = Em("iterator"),
    qm = Array.prototype;
  Vh.exports = function (i) {
    return i !== void 0 && (wm.Array === i || qm[Cm] === i);
  };
});
var $a = d((TE, Lh) => {
  "use strict";
  var Am = qt(),
    Dh = Ue(),
    Pm = Pe(),
    Rm = hr(),
    Nm = z(),
    Im = Nm("iterator");
  Lh.exports = function (i) {
    if (!Pm(i)) return Dh(i, Im) || Dh(i, "@@iterator") || Rm[Am(i)];
  };
});
var Bh = d((OE, kh) => {
  "use strict";
  var Mm = G(),
    Vm = be(),
    _m = J(),
    Dm = Er(),
    Lm = $a(),
    km = TypeError;
  kh.exports = function (i, e) {
    var r = arguments.length < 2 ? Lm(i) : e;
    if (Vm(r)) return _m(Mm(r, i));
    throw new km(Dm(i) + " is not iterable");
  };
});
var jh = d((SE, Fh) => {
  "use strict";
  var Bm = G(),
    Uh = J(),
    Um = Ue();
  Fh.exports = function (i, e, r) {
    var t, a;
    Uh(i);
    try {
      if (((t = Um(i, "return")), !t)) {
        if (e === "throw") throw r;
        return r;
      }
      t = Bm(t, i);
    } catch (n) {
      (a = !0), (t = n);
    }
    if (e === "throw") throw r;
    if (a) throw t;
    return Uh(t), r;
  };
});
var Ha = d((EE, Gh) => {
  "use strict";
  var Fm = At(),
    jm = G(),
    zm = J(),
    $m = Er(),
    Hm = _h(),
    Gm = Ot(),
    zh = Sr(),
    Ym = Bh(),
    Xm = $a(),
    $h = jh(),
    Wm = TypeError,
    kt = function (i, e) {
      (this.stopped = i), (this.result = e);
    },
    Hh = kt.prototype;
  Gh.exports = function (i, e, r) {
    var t = r && r.that,
      a = !!(r && r.AS_ENTRIES),
      n = !!(r && r.IS_RECORD),
      o = !!(r && r.IS_ITERATOR),
      s = !!(r && r.INTERRUPTED),
      u = Fm(e, t),
      l,
      h,
      f,
      v,
      c,
      g,
      p,
      y = function (T) {
        return l && $h(l, "normal", T), new kt(!0, T);
      },
      m = function (T) {
        return a
          ? (zm(T), s ? u(T[0], T[1], y) : u(T[0], T[1]))
          : s
            ? u(T, y)
            : u(T);
      };
    if (n) l = i.iterator;
    else if (o) l = i;
    else {
      if (((h = Xm(i)), !h)) throw new Wm($m(i) + " is not iterable");
      if (Hm(h)) {
        for (f = 0, v = Gm(i); v > f; f++)
          if (((c = m(i[f])), c && zh(Hh, c))) return c;
        return new kt(!1);
      }
      l = Ym(i, h);
    }
    for (g = n ? i.next : l.next; !(p = jm(g, l)).done; ) {
      try {
        c = m(p.value);
      } catch (T) {
        $h(l, "throw", T);
      }
      if (typeof c == "object" && c && zh(Hh, c)) return c;
    }
    return new kt(!1);
  };
});
var Kh = d((wE, Qh) => {
  "use strict";
  var Qm = z(),
    Xh = Qm("iterator"),
    Wh = !1;
  try {
    (Yh = 0),
      (Ga = {
        next: function () {
          return { done: !!Yh++ };
        },
        return: function () {
          Wh = !0;
        },
      }),
      (Ga[Xh] = function () {
        return this;
      }),
      Array.from(Ga, function () {
        throw 2;
      });
  } catch {}
  var Yh, Ga;
  Qh.exports = function (i, e) {
    try {
      if (!e && !Wh) return !1;
    } catch {
      return !1;
    }
    var r = !1;
    try {
      var t = {};
      (t[Xh] = function () {
        return {
          next: function () {
            return { done: (r = !0) };
          },
        };
      }),
        i(t);
    } catch {}
    return r;
  };
});
var Ya = d((CE, Zh) => {
  "use strict";
  var Km = ir(),
    Zm = Kh(),
    Jm = ar().CONSTRUCTOR;
  Zh.exports =
    Jm ||
    !Zm(function (i) {
      Km.all(i).then(void 0, function () {});
    });
});
var Jh = d(() => {
  "use strict";
  var eb = ee(),
    rb = G(),
    tb = be(),
    ib = nr(),
    ab = Nt(),
    nb = Ha(),
    sb = Ya();
  eb(
    { target: "Promise", stat: !0, forced: sb },
    {
      all: function (e) {
        var r = this,
          t = ib.f(r),
          a = t.resolve,
          n = t.reject,
          o = ab(function () {
            var s = tb(r.resolve),
              u = [],
              l = 0,
              h = 1;
            nb(e, function (f) {
              var v = l++,
                c = !1;
              h++,
                rb(s, r, f).then(function (g) {
                  c || ((c = !0), (u[v] = g), --h || a(u));
                }, n);
            }),
              --h || a(u);
          });
        return o.error && n(o.value), t.promise;
      },
    },
  );
});
var rc = d(() => {
  "use strict";
  var ob = ee(),
    ub = ve(),
    lb = ar().CONSTRUCTOR,
    Wa = ir(),
    hb = Re(),
    cb = k(),
    fb = Ne(),
    ec = Wa && Wa.prototype;
  ob(
    { target: "Promise", proto: !0, forced: lb, real: !0 },
    {
      catch: function (i) {
        return this.then(void 0, i);
      },
    },
  );
  !ub &&
    cb(Wa) &&
    ((Xa = hb("Promise").prototype.catch),
    ec.catch !== Xa && fb(ec, "catch", Xa, { unsafe: !0 }));
  var Xa;
});
var tc = d(() => {
  "use strict";
  var vb = ee(),
    gb = G(),
    db = be(),
    pb = nr(),
    yb = Nt(),
    mb = Ha(),
    bb = Ya();
  vb(
    { target: "Promise", stat: !0, forced: bb },
    {
      race: function (e) {
        var r = this,
          t = pb.f(r),
          a = t.reject,
          n = yb(function () {
            var o = db(r.resolve);
            mb(e, function (s) {
              gb(o, r, s).then(t.resolve, a);
            });
          });
        return n.error && a(n.value), t.promise;
      },
    },
  );
});
var ic = d(() => {
  "use strict";
  var xb = ee(),
    Tb = nr(),
    Ob = ar().CONSTRUCTOR;
  xb(
    { target: "Promise", stat: !0, forced: Ob },
    {
      reject: function (e) {
        var r = Tb.f(this),
          t = r.reject;
        return t(e), r.promise;
      },
    },
  );
});
var nc = d((_E, ac) => {
  "use strict";
  var Sb = J(),
    Eb = le(),
    wb = nr();
  ac.exports = function (i, e) {
    if ((Sb(i), Eb(e) && e.constructor === i)) return e;
    var r = wb.f(i),
      t = r.resolve;
    return t(e), r.promise;
  };
});
var uc = d(() => {
  "use strict";
  var Cb = ee(),
    qb = Re(),
    sc = ve(),
    Ab = ir(),
    oc = ar().CONSTRUCTOR,
    Pb = nc(),
    Rb = qb("Promise"),
    Nb = sc && !oc;
  Cb(
    { target: "Promise", stat: !0, forced: sc || oc },
    {
      resolve: function (e) {
        return Pb(Nb && this === Rb ? Ab : this, e);
      },
    },
  );
});
var lc = d(() => {
  "use strict";
  Ih();
  Jh();
  rc();
  tc();
  ic();
  uc();
});
function hc(i, e, r, t, a, n, o) {
  try {
    var s = i[n](o),
      u = s.value;
  } catch (l) {
    return void r(l);
  }
  s.done ? e(u) : Promise.resolve(u).then(t, a);
}
function xe(i) {
  return function () {
    var e = this,
      r = arguments;
    return new Promise(function (t, a) {
      var n = i.apply(e, r);
      function o(u) {
        hc(n, t, a, o, s, "next", u);
      }
      function s(u) {
        hc(n, t, a, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var cc = Be(() => {
  "use strict";
});
var de = d((FE, fc) => {
  "use strict";
  var Ib = qt(),
    Mb = String;
  fc.exports = function (i) {
    if (Ib(i) === "Symbol")
      throw new TypeError("Cannot convert a Symbol value to a string");
    return Mb(i);
  };
});
var Qa = d((jE, vc) => {
  "use strict";
  var Vb = J();
  vc.exports = function () {
    var i = Vb(this),
      e = "";
    return (
      i.hasIndices && (e += "d"),
      i.global && (e += "g"),
      i.ignoreCase && (e += "i"),
      i.multiline && (e += "m"),
      i.dotAll && (e += "s"),
      i.unicode && (e += "u"),
      i.unicodeSets && (e += "v"),
      i.sticky && (e += "y"),
      e
    );
  };
});
var en = d((zE, gc) => {
  "use strict";
  var Ka = D(),
    _b = V(),
    Za = _b.RegExp,
    Ja = Ka(function () {
      var i = Za("a", "y");
      return (i.lastIndex = 2), i.exec("abcd") !== null;
    }),
    Db =
      Ja ||
      Ka(function () {
        return !Za("a", "y").sticky;
      }),
    Lb =
      Ja ||
      Ka(function () {
        var i = Za("^r", "gy");
        return (i.lastIndex = 2), i.exec("str") !== null;
      });
  gc.exports = { BROKEN_CARET: Lb, MISSED_STICKY: Db, UNSUPPORTED_Y: Ja };
});
var pc = d(($E, dc) => {
  "use strict";
  var kb = ha(),
    Bb = St();
  dc.exports =
    Object.keys ||
    function (e) {
      return kb(e, Bb);
    };
});
var mc = d((yc) => {
  "use strict";
  var Ub = oe(),
    Fb = Xi(),
    jb = Te(),
    zb = J(),
    $b = Ke(),
    Hb = pc();
  yc.f =
    Ub && !Fb
      ? Object.defineProperties
      : function (e, r) {
          zb(e);
          for (var t = $b(r), a = Hb(r), n = a.length, o = 0, s; n > o; )
            jb.f(e, (s = a[o++]), t[s]);
          return e;
        };
});
var zr = d((GE, wc) => {
  "use strict";
  var Gb = J(),
    Yb = mc(),
    bc = St(),
    Xb = yt(),
    Wb = ya(),
    Qb = Cr(),
    Kb = pt(),
    xc = ">",
    Tc = "<",
    tn = "prototype",
    an = "script",
    Sc = Kb("IE_PROTO"),
    rn = function () {},
    Ec = function (i) {
      return Tc + an + xc + i + Tc + "/" + an + xc;
    },
    Oc = function (i) {
      i.write(Ec("")), i.close();
      var e = i.parentWindow.Object;
      return (i = null), e;
    },
    Zb = function () {
      var i = Qb("iframe"),
        e = "java" + an + ":",
        r;
      return (
        (i.style.display = "none"),
        Wb.appendChild(i),
        (i.src = String(e)),
        (r = i.contentWindow.document),
        r.open(),
        r.write(Ec("document.F=Object")),
        r.close(),
        r.F
      );
    },
    Bt,
    Ut = function () {
      try {
        Bt = new ActiveXObject("htmlfile");
      } catch {}
      Ut =
        typeof document < "u"
          ? document.domain && Bt
            ? Oc(Bt)
            : Zb()
          : Oc(Bt);
      for (var i = bc.length; i--; ) delete Ut[tn][bc[i]];
      return Ut();
    };
  Xb[Sc] = !0;
  wc.exports =
    Object.create ||
    function (e, r) {
      var t;
      return (
        e !== null
          ? ((rn[tn] = Gb(e)), (t = new rn()), (rn[tn] = null), (t[Sc] = e))
          : (t = Ut()),
        r === void 0 ? t : Yb.f(t, r)
      );
    };
});
var qc = d((YE, Cc) => {
  "use strict";
  var Jb = D(),
    ex = V(),
    rx = ex.RegExp;
  Cc.exports = Jb(function () {
    var i = rx(".", "s");
    return !(
      i.dotAll &&
      i.test(`
`) &&
      i.flags === "s"
    );
  });
});
var Pc = d((XE, Ac) => {
  "use strict";
  var tx = D(),
    ix = V(),
    ax = ix.RegExp;
  Ac.exports = tx(function () {
    var i = ax("(?<a>b)", "g");
    return i.exec("b").groups.a !== "b" || "b".replace(i, "$<a>c") !== "bc";
  });
});
var zt = d((WE, Nc) => {
  "use strict";
  var cr = G(),
    jt = L(),
    nx = de(),
    sx = Qa(),
    ox = en(),
    ux = vt(),
    lx = zr(),
    hx = Rr().get,
    cx = qc(),
    fx = Pc(),
    vx = ux("native-string-replace", String.prototype.replace),
    Ft = RegExp.prototype.exec,
    sn = Ft,
    gx = jt("".charAt),
    dx = jt("".indexOf),
    px = jt("".replace),
    nn = jt("".slice),
    on = (function () {
      var i = /a/,
        e = /b*/g;
      return (
        cr(Ft, i, "a"), cr(Ft, e, "a"), i.lastIndex !== 0 || e.lastIndex !== 0
      );
    })(),
    Rc = ox.BROKEN_CARET,
    un = /()??/.exec("")[1] !== void 0,
    yx = on || un || Rc || cx || fx;
  yx &&
    (sn = function (e) {
      var r = this,
        t = hx(r),
        a = nx(e),
        n = t.raw,
        o,
        s,
        u,
        l,
        h,
        f,
        v;
      if (n)
        return (
          (n.lastIndex = r.lastIndex),
          (o = cr(sn, n, a)),
          (r.lastIndex = n.lastIndex),
          o
        );
      var c = t.groups,
        g = Rc && r.sticky,
        p = cr(sx, r),
        y = r.source,
        m = 0,
        T = a;
      if (
        (g &&
          ((p = px(p, "y", "")),
          dx(p, "g") === -1 && (p += "g"),
          (T = nn(a, r.lastIndex)),
          r.lastIndex > 0 &&
            (!r.multiline ||
              (r.multiline &&
                gx(a, r.lastIndex - 1) !==
                  `
`)) &&
            ((y = "(?: " + y + ")"), (T = " " + T), m++),
          (s = new RegExp("^(?:" + y + ")", p))),
        un && (s = new RegExp("^" + y + "$(?!\\s)", p)),
        on && (u = r.lastIndex),
        (l = cr(Ft, g ? s : r, T)),
        g
          ? l
            ? ((l.input = nn(l.input, m)),
              (l[0] = nn(l[0], m)),
              (l.index = r.lastIndex),
              (r.lastIndex += l[0].length))
            : (r.lastIndex = 0)
          : on && l && (r.lastIndex = r.global ? l.index + l[0].length : u),
        un &&
          l &&
          l.length > 1 &&
          cr(vx, l[0], s, function () {
            for (h = 1; h < arguments.length - 2; h++)
              arguments[h] === void 0 && (l[h] = void 0);
          }),
        l && c)
      )
        for (l.groups = f = lx(null), h = 0; h < c.length; h++)
          (v = c[h]), (f[v[0]] = l[v[1]]);
      return l;
    });
  Nc.exports = sn;
});
var Mc = d(() => {
  "use strict";
  var mx = ee(),
    Ic = zt();
  mx({ target: "RegExp", proto: !0, forced: /./.exec !== Ic }, { exec: Ic });
});
var $t = d((ZE, kc) => {
  "use strict";
  Mc();
  var Vc = G(),
    _c = Ne(),
    bx = zt(),
    Dc = D(),
    Lc = z(),
    xx = er(),
    Tx = Lc("species"),
    ln = RegExp.prototype;
  kc.exports = function (i, e, r, t) {
    var a = Lc(i),
      n = !Dc(function () {
        var l = {};
        return (
          (l[a] = function () {
            return 7;
          }),
          ""[i](l) !== 7
        );
      }),
      o =
        n &&
        !Dc(function () {
          var l = !1,
            h = /a/;
          return (
            i === "split" &&
              ((h = {}),
              (h.constructor = {}),
              (h.constructor[Tx] = function () {
                return h;
              }),
              (h.flags = ""),
              (h[a] = /./[a])),
            (h.exec = function () {
              return (l = !0), null;
            }),
            h[a](""),
            !l
          );
        });
    if (!n || !o || r) {
      var s = /./[a],
        u = e(a, ""[i], function (l, h, f, v, c) {
          var g = h.exec;
          return g === bx || g === ln.exec
            ? n && !c
              ? { done: !0, value: Vc(s, h, f, v) }
              : { done: !0, value: Vc(l, f, h, v) }
            : { done: !1 };
        });
      _c(String.prototype, i, u[0]), _c(ln, a, u[1]);
    }
    t && xx(ln[a], "sham", !0);
  };
});
var jc = d((JE, Fc) => {
  "use strict";
  var hn = L(),
    Ox = Nr(),
    Sx = de(),
    Ex = ue(),
    wx = hn("".charAt),
    Bc = hn("".charCodeAt),
    Cx = hn("".slice),
    Uc = function (i) {
      return function (e, r) {
        var t = Sx(Ex(e)),
          a = Ox(r),
          n = t.length,
          o,
          s;
        return a < 0 || a >= n
          ? i
            ? ""
            : void 0
          : ((o = Bc(t, a)),
            o < 55296 ||
            o > 56319 ||
            a + 1 === n ||
            (s = Bc(t, a + 1)) < 56320 ||
            s > 57343
              ? i
                ? wx(t, a)
                : o
              : i
                ? Cx(t, a, a + 2)
                : ((o - 55296) << 10) + (s - 56320) + 65536);
      };
    };
  Fc.exports = { codeAt: Uc(!1), charAt: Uc(!0) };
});
var Ht = d((ew, zc) => {
  "use strict";
  var qx = jc().charAt;
  zc.exports = function (i, e, r) {
    return e + (r ? qx(i, e).length : 1);
  };
});
var Gt = d((rw, Hc) => {
  "use strict";
  var $c = G(),
    Ax = J(),
    Px = k(),
    Rx = Ae(),
    Nx = zt(),
    Ix = TypeError;
  Hc.exports = function (i, e) {
    var r = i.exec;
    if (Px(r)) {
      var t = $c(r, i, e);
      return t !== null && Ax(t), t;
    }
    if (Rx(i) === "RegExp") return $c(Nx, i, e);
    throw new Ix("RegExp#exec called on incompatible receiver");
  };
});
var Yc = d(() => {
  "use strict";
  var Mx = G(),
    Vx = $t(),
    _x = J(),
    Dx = Pe(),
    Lx = je(),
    cn = de(),
    kx = ue(),
    Bx = Ue(),
    Ux = Ht(),
    Gc = Gt();
  Vx("match", function (i, e, r) {
    return [
      function (a) {
        var n = kx(this),
          o = Dx(a) ? void 0 : Bx(a, i);
        return o ? Mx(o, a, n) : new RegExp(a)[i](cn(n));
      },
      function (t) {
        var a = _x(this),
          n = cn(t),
          o = r(e, a, n);
        if (o.done) return o.value;
        if (!a.global) return Gc(a, n);
        var s = a.unicode;
        a.lastIndex = 0;
        for (var u = [], l = 0, h; (h = Gc(a, n)) !== null; ) {
          var f = cn(h[0]);
          (u[l] = f),
            f === "" && (a.lastIndex = Ux(n, Lx(a.lastIndex), s)),
            l++;
        }
        return l === 0 ? null : u;
      },
    ];
  });
});
var Wc = d((aw, Xc) => {
  "use strict";
  var gn = L(),
    Fx = wr(),
    jx = Math.floor,
    fn = gn("".charAt),
    zx = gn("".replace),
    vn = gn("".slice),
    $x = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    Hx = /\$([$&'`]|\d{1,2})/g;
  Xc.exports = function (i, e, r, t, a, n) {
    var o = r + i.length,
      s = t.length,
      u = Hx;
    return (
      a !== void 0 && ((a = Fx(a)), (u = $x)),
      zx(n, u, function (l, h) {
        var f;
        switch (fn(h, 0)) {
          case "$":
            return "$";
          case "&":
            return i;
          case "`":
            return vn(e, 0, r);
          case "'":
            return vn(e, o);
          case "<":
            f = a[vn(h, 1, -1)];
            break;
          default:
            var v = +h;
            if (v === 0) return l;
            if (v > s) {
              var c = jx(v / 10);
              return c === 0
                ? l
                : c <= s
                  ? t[c - 1] === void 0
                    ? fn(h, 1)
                    : t[c - 1] + fn(h, 1)
                  : l;
            }
            f = t[v - 1];
        }
        return f === void 0 ? "" : f;
      })
    );
  };
});
var ef = d(() => {
  "use strict";
  var Gx = pa(),
    Qc = G(),
    Yt = L(),
    Yx = $t(),
    Xx = D(),
    Wx = J(),
    Qx = k(),
    Kx = Pe(),
    Zx = Nr(),
    Jx = je(),
    fr = de(),
    e1 = ue(),
    r1 = Ht(),
    t1 = Ue(),
    i1 = Wc(),
    a1 = Gt(),
    n1 = z(),
    pn = n1("replace"),
    s1 = Math.max,
    o1 = Math.min,
    u1 = Yt([].concat),
    dn = Yt([].push),
    Kc = Yt("".indexOf),
    Zc = Yt("".slice),
    l1 = function (i) {
      return i === void 0 ? i : String(i);
    },
    h1 = (function () {
      return "a".replace(/./, "$0") === "$0";
    })(),
    Jc = (function () {
      return /./[pn] ? /./[pn]("a", "$0") === "" : !1;
    })(),
    c1 = !Xx(function () {
      var i = /./;
      return (
        (i.exec = function () {
          var e = [];
          return (e.groups = { a: "7" }), e;
        }),
        "".replace(i, "$<a>") !== "7"
      );
    });
  Yx(
    "replace",
    function (i, e, r) {
      var t = Jc ? "$" : "$0";
      return [
        function (n, o) {
          var s = e1(this),
            u = Kx(n) ? void 0 : t1(n, pn);
          return u ? Qc(u, n, s, o) : Qc(e, fr(s), n, o);
        },
        function (a, n) {
          var o = Wx(this),
            s = fr(a);
          if (typeof n == "string" && Kc(n, t) === -1 && Kc(n, "$<") === -1) {
            var u = r(e, o, s, n);
            if (u.done) return u.value;
          }
          var l = Qx(n);
          l || (n = fr(n));
          var h = o.global,
            f;
          h && ((f = o.unicode), (o.lastIndex = 0));
          for (
            var v = [], c;
            (c = a1(o, s)), !(c === null || (dn(v, c), !h));

          ) {
            var g = fr(c[0]);
            g === "" && (o.lastIndex = r1(s, Jx(o.lastIndex), f));
          }
          for (var p = "", y = 0, m = 0; m < v.length; m++) {
            c = v[m];
            for (
              var T = fr(c[0]),
                x = s1(o1(Zx(c.index), s.length), 0),
                O = [],
                E,
                C = 1;
              C < c.length;
              C++
            )
              dn(O, l1(c[C]));
            var S = c.groups;
            if (l) {
              var A = u1([T], O, x, s);
              S !== void 0 && dn(A, S), (E = fr(Gx(n, void 0, A)));
            } else E = i1(T, s, x, O, S, n);
            x >= y && ((p += Zc(s, y, x) + E), (y = x + T.length));
          }
          return p + Zc(s, y);
        },
      ];
    },
    !c1 || !h1 || Jc,
  );
});
var tf = d((ow, rf) => {
  "use strict";
  var f1 = le(),
    v1 = Ae(),
    g1 = z(),
    d1 = g1("match");
  rf.exports = function (i) {
    var e;
    return f1(i) && ((e = i[d1]) !== void 0 ? !!e : v1(i) === "RegExp");
  };
});
var Xt = d((uw, af) => {
  "use strict";
  var p1 = tf(),
    y1 = TypeError;
  af.exports = function (i) {
    if (p1(i)) throw new y1("The method doesn't accept regular expressions");
    return i;
  };
});
var Wt = d((lw, nf) => {
  "use strict";
  var m1 = z(),
    b1 = m1("match");
  nf.exports = function (i) {
    var e = /./;
    try {
      "/./"[i](e);
    } catch {
      try {
        return (e[b1] = !1), "/./"[i](e);
      } catch {}
    }
    return !1;
  };
});
var uf = d(() => {
  "use strict";
  var x1 = ee(),
    T1 = Lr(),
    O1 = qr().f,
    S1 = je(),
    sf = de(),
    E1 = Xt(),
    w1 = ue(),
    C1 = Wt(),
    q1 = ve(),
    A1 = T1("".slice),
    P1 = Math.min,
    of = C1("startsWith"),
    R1 =
      !q1 &&
      !of &&
      !!(function () {
        var i = O1(String.prototype, "startsWith");
        return i && !i.writable;
      })();
  x1(
    { target: "String", proto: !0, forced: !R1 && !of },
    {
      startsWith: function (e) {
        var r = sf(w1(this));
        E1(e);
        var t = S1(P1(arguments.length > 1 ? arguments[1] : void 0, r.length)),
          a = sf(e);
        return A1(r, t, t + a.length) === a;
      },
    },
  );
});
var hf = d((fw, lf) => {
  "use strict";
  var N1 = z(),
    I1 = zr(),
    M1 = Te().f,
    yn = N1("unscopables"),
    mn = Array.prototype;
  mn[yn] === void 0 && M1(mn, yn, { configurable: !0, value: I1(null) });
  lf.exports = function (i) {
    mn[yn][i] = !0;
  };
});
var ff = d((vw, cf) => {
  "use strict";
  var V1 = D();
  cf.exports = !V1(function () {
    function i() {}
    return (
      (i.prototype.constructor = null),
      Object.getPrototypeOf(new i()) !== i.prototype
    );
  });
});
var xn = d((gw, gf) => {
  "use strict";
  var _1 = he(),
    D1 = k(),
    L1 = wr(),
    k1 = pt(),
    B1 = ff(),
    vf = k1("IE_PROTO"),
    bn = Object,
    U1 = bn.prototype;
  gf.exports = B1
    ? bn.getPrototypeOf
    : function (i) {
        var e = L1(i);
        if (_1(e, vf)) return e[vf];
        var r = e.constructor;
        return D1(r) && e instanceof r
          ? r.prototype
          : e instanceof bn
            ? U1
            : null;
      };
});
var En = d((dw, yf) => {
  "use strict";
  var F1 = D(),
    j1 = k(),
    z1 = le(),
    $1 = zr(),
    df = xn(),
    H1 = Ne(),
    G1 = z(),
    Y1 = ve(),
    Sn = G1("iterator"),
    pf = !1,
    Oe,
    Tn,
    On;
  [].keys &&
    ((On = [].keys()),
    "next" in On
      ? ((Tn = df(df(On))), Tn !== Object.prototype && (Oe = Tn))
      : (pf = !0));
  var X1 =
    !z1(Oe) ||
    F1(function () {
      var i = {};
      return Oe[Sn].call(i) !== i;
    });
  X1 ? (Oe = {}) : Y1 && (Oe = $1(Oe));
  j1(Oe[Sn]) ||
    H1(Oe, Sn, function () {
      return this;
    });
  yf.exports = { IteratorPrototype: Oe, BUGGY_SAFARI_ITERATORS: pf };
});
var bf = d((pw, mf) => {
  "use strict";
  var W1 = En().IteratorPrototype,
    Q1 = zr(),
    K1 = ut(),
    Z1 = _r(),
    J1 = hr(),
    e2 = function () {
      return this;
    };
  mf.exports = function (i, e, r, t) {
    var a = e + " Iterator";
    return (
      (i.prototype = Q1(W1, { next: K1(+!t, r) })),
      Z1(i, a, !1, !0),
      (J1[a] = e2),
      i
    );
  };
});
var Rf = d((yw, Pf) => {
  "use strict";
  var r2 = ee(),
    t2 = G(),
    Qt = ve(),
    qf = Ar(),
    i2 = k(),
    a2 = bf(),
    xf = xn(),
    Tf = va(),
    n2 = _r(),
    s2 = er(),
    wn = Ne(),
    o2 = z(),
    Of = hr(),
    Af = En(),
    u2 = qf.PROPER,
    l2 = qf.CONFIGURABLE,
    Sf = Af.IteratorPrototype,
    Kt = Af.BUGGY_SAFARI_ITERATORS,
    $r = o2("iterator"),
    Ef = "keys",
    Hr = "values",
    wf = "entries",
    Cf = function () {
      return this;
    };
  Pf.exports = function (i, e, r, t, a, n, o) {
    a2(r, e, t);
    var s = function (m) {
        if (m === a && v) return v;
        if (!Kt && m && m in h) return h[m];
        switch (m) {
          case Ef:
            return function () {
              return new r(this, m);
            };
          case Hr:
            return function () {
              return new r(this, m);
            };
          case wf:
            return function () {
              return new r(this, m);
            };
        }
        return function () {
          return new r(this);
        };
      },
      u = e + " Iterator",
      l = !1,
      h = i.prototype,
      f = h[$r] || h["@@iterator"] || (a && h[a]),
      v = (!Kt && f) || s(a),
      c = (e === "Array" && h.entries) || f,
      g,
      p,
      y;
    if (
      (c &&
        ((g = xf(c.call(new i()))),
        g !== Object.prototype &&
          g.next &&
          (!Qt && xf(g) !== Sf && (Tf ? Tf(g, Sf) : i2(g[$r]) || wn(g, $r, Cf)),
          n2(g, u, !0, !0),
          Qt && (Of[u] = Cf))),
      u2 &&
        a === Hr &&
        f &&
        f.name !== Hr &&
        (!Qt && l2
          ? s2(h, "name", Hr)
          : ((l = !0),
            (v = function () {
              return t2(f, this);
            }))),
      a)
    )
      if (((p = { values: s(Hr), keys: n ? v : s(Ef), entries: s(wf) }), o))
        for (y in p) (Kt || l || !(y in h)) && wn(h, y, p[y]);
      else r2({ target: e, proto: !0, forced: Kt || l }, p);
    return (
      (!Qt || o) && h[$r] !== v && wn(h, $r, v, { name: a }), (Of[e] = v), p
    );
  };
});
var If = d((mw, Nf) => {
  "use strict";
  Nf.exports = function (i, e) {
    return { value: i, done: e };
  };
});
var qn = d((bw, Lf) => {
  "use strict";
  var h2 = Ke(),
    Cn = hf(),
    Mf = hr(),
    _f = Rr(),
    c2 = Te().f,
    f2 = Rf(),
    Zt = If(),
    v2 = ve(),
    g2 = oe(),
    Df = "Array Iterator",
    d2 = _f.set,
    p2 = _f.getterFor(Df);
  Lf.exports = f2(
    Array,
    "Array",
    function (i, e) {
      d2(this, { type: Df, target: h2(i), index: 0, kind: e });
    },
    function () {
      var i = p2(this),
        e = i.target,
        r = i.index++;
      if (!e || r >= e.length) return (i.target = null), Zt(void 0, !0);
      switch (i.kind) {
        case "keys":
          return Zt(r, !1);
        case "values":
          return Zt(e[r], !1);
      }
      return Zt([r, e[r]], !1);
    },
    "values",
  );
  var Vf = (Mf.Arguments = Mf.Array);
  Cn("keys");
  Cn("values");
  Cn("entries");
  if (!v2 && g2 && Vf.name !== "values")
    try {
      c2(Vf, "name", { value: "values" });
    } catch {}
});
var Bf = d((xw, kf) => {
  "use strict";
  kf.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  };
});
var jf = d((Tw, Ff) => {
  "use strict";
  var y2 = Cr(),
    An = y2("span").classList,
    Uf = An && An.constructor && An.constructor.prototype;
  Ff.exports = Uf === Object.prototype ? void 0 : Uf;
});
var Yf = d(() => {
  "use strict";
  var zf = V(),
    Hf = Bf(),
    m2 = jf(),
    Gr = qn(),
    $f = er(),
    b2 = _r(),
    x2 = z(),
    Pn = x2("iterator"),
    Rn = Gr.values,
    Gf = function (i, e) {
      if (i) {
        if (i[Pn] !== Rn)
          try {
            $f(i, Pn, Rn);
          } catch {
            i[Pn] = Rn;
          }
        if ((b2(i, e, !0), Hf[e])) {
          for (var r in Gr)
            if (i[r] !== Gr[r])
              try {
                $f(i, r, Gr[r]);
              } catch {
                i[r] = Gr[r];
              }
        }
      }
    };
  for (Jt in Hf) Gf(zf[Jt] && zf[Jt].prototype, Jt);
  var Jt;
  Gf(m2, "DOMTokenList");
});
function Xf(i, e) {
  if (xr(i) != "object" || !i) return i;
  var r = i[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(i, e || "default");
    if (xr(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
var Wf = Be(() => {
  "use strict";
  Bs();
});
function Qf(i) {
  var e = Xf(i, "string");
  return xr(e) == "symbol" ? e : e + "";
}
var Kf = Be(() => {
  "use strict";
  Bs();
  Wf();
});
function ei(i, e, r) {
  return (
    (e = Qf(e)) in i
      ? Object.defineProperty(i, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[e] = r),
    i
  );
}
var Zf = Be(() => {
  "use strict";
  Kf();
});
var iv = d((Nw, tv) => {
  "use strict";
  var T2 = be(),
    O2 = wr(),
    S2 = Mi(),
    E2 = Ot(),
    Jf = TypeError,
    ev = "Reduce of empty array with no initial value",
    rv = function (i) {
      return function (e, r, t, a) {
        var n = O2(e),
          o = S2(n),
          s = E2(n);
        if ((T2(r), s === 0 && t < 2)) throw new Jf(ev);
        var u = i ? s - 1 : 0,
          l = i ? -1 : 1;
        if (t < 2)
          for (;;) {
            if (u in o) {
              (a = o[u]), (u += l);
              break;
            }
            if (((u += l), i ? u < 0 : s <= u)) throw new Jf(ev);
          }
        for (; i ? u >= 0 : s > u; u += l) u in o && (a = r(a, o[u], u, n));
        return a;
      };
    };
  tv.exports = { left: rv(!1), right: rv(!0) };
});
var Nn = d((Iw, av) => {
  "use strict";
  var w2 = D();
  av.exports = function (i, e) {
    var r = [][i];
    return (
      !!r &&
      w2(function () {
        r.call(
          null,
          e ||
            function () {
              return 1;
            },
          1,
        );
      })
    );
  };
});
var sv = d(() => {
  "use strict";
  var C2 = ee(),
    q2 = iv().left,
    A2 = Nn(),
    nv = ht(),
    P2 = Vr(),
    R2 = !P2 && nv > 79 && nv < 83,
    N2 = R2 || !A2("reduce");
  C2(
    { target: "Array", proto: !0, forced: N2 },
    {
      reduce: function (e) {
        var r = arguments.length;
        return q2(this, e, r, r > 1 ? arguments[1] : void 0);
      },
    },
  );
});
var lv = d(() => {
  "use strict";
  var I2 = ee(),
    M2 = Lr(),
    V2 = qr().f,
    _2 = je(),
    ov = de(),
    D2 = Xt(),
    L2 = ue(),
    k2 = Wt(),
    B2 = ve(),
    U2 = M2("".slice),
    F2 = Math.min,
    uv = k2("endsWith"),
    j2 =
      !B2 &&
      !uv &&
      !!(function () {
        var i = V2(String.prototype, "endsWith");
        return i && !i.writable;
      })();
  I2(
    { target: "String", proto: !0, forced: !j2 && !uv },
    {
      endsWith: function (e) {
        var r = ov(L2(this));
        D2(e);
        var t = arguments.length > 1 ? arguments[1] : void 0,
          a = r.length,
          n = t === void 0 ? a : F2(_2(t), a),
          o = ov(e);
        return U2(r, n - o.length, n) === o;
      },
    },
  );
});
var gv = d(() => {
  "use strict";
  var In = G(),
    vv = L(),
    z2 = $t(),
    $2 = J(),
    H2 = Pe(),
    G2 = ue(),
    Y2 = da(),
    X2 = Ht(),
    W2 = je(),
    hv = de(),
    Q2 = Ue(),
    cv = Gt(),
    K2 = en(),
    Z2 = D(),
    vr = K2.UNSUPPORTED_Y,
    J2 = 4294967295,
    eT = Math.min,
    Mn = vv([].push),
    Vn = vv("".slice),
    rT = !Z2(function () {
      var i = /(?:)/,
        e = i.exec;
      i.exec = function () {
        return e.apply(this, arguments);
      };
      var r = "ab".split(i);
      return r.length !== 2 || r[0] !== "a" || r[1] !== "b";
    }),
    fv =
      "abbc".split(/(b)*/)[1] === "c" ||
      "test".split(/(?:)/, -1).length !== 4 ||
      "ab".split(/(?:ab)*/).length !== 2 ||
      ".".split(/(.?)(.?)/).length !== 4 ||
      ".".split(/()()/).length > 1 ||
      "".split(/.?/).length;
  z2(
    "split",
    function (i, e, r) {
      var t = "0".split(void 0, 0).length
        ? function (a, n) {
            return a === void 0 && n === 0 ? [] : In(e, this, a, n);
          }
        : e;
      return [
        function (n, o) {
          var s = G2(this),
            u = H2(n) ? void 0 : Q2(n, i);
          return u ? In(u, n, s, o) : In(t, hv(s), n, o);
        },
        function (a, n) {
          var o = $2(this),
            s = hv(a);
          if (!fv) {
            var u = r(t, o, s, n, t !== e);
            if (u.done) return u.value;
          }
          var l = Y2(o, RegExp),
            h = o.unicode,
            f =
              (o.ignoreCase ? "i" : "") +
              (o.multiline ? "m" : "") +
              (o.unicode ? "u" : "") +
              (vr ? "g" : "y"),
            v = new l(vr ? "^(?:" + o.source + ")" : o, f),
            c = n === void 0 ? J2 : n >>> 0;
          if (c === 0) return [];
          if (s.length === 0) return cv(v, s) === null ? [s] : [];
          for (var g = 0, p = 0, y = []; p < s.length; ) {
            v.lastIndex = vr ? 0 : p;
            var m = cv(v, vr ? Vn(s, p) : s),
              T;
            if (
              m === null ||
              (T = eT(W2(v.lastIndex + (vr ? p : 0)), s.length)) === g
            )
              p = X2(s, p, h);
            else {
              if ((Mn(y, Vn(s, g, p)), y.length === c)) return y;
              for (var x = 1; x <= m.length - 1; x++)
                if ((Mn(y, m[x]), y.length === c)) return y;
              p = g = T;
            }
          }
          return Mn(y, Vn(s, g)), y;
        },
      ];
    },
    fv || !rT,
    vr,
  );
});
var pv = d((dv, Yr) => {
  "use strict";
  (function () {
    var i, e, r, t, a, n;
    typeof performance < "u" && performance !== null && performance.now
      ? (Yr.exports = function () {
          return performance.now();
        })
      : typeof process < "u" && process !== null && process.hrtime
        ? ((Yr.exports = function () {
            return (i() - a) / 1e6;
          }),
          (e = process.hrtime),
          (i = function () {
            var o;
            return (o = e()), o[0] * 1e9 + o[1];
          }),
          (t = i()),
          (n = process.uptime() * 1e9),
          (a = t - n))
        : Date.now
          ? ((Yr.exports = function () {
              return Date.now() - r;
            }),
            (r = Date.now()))
          : ((Yr.exports = function () {
              return new Date().getTime() - r;
            }),
            (r = new Date().getTime()));
  }).call(dv);
});
var mv = d((Bw, ii) => {
  "use strict";
  var tT = pv(),
    Se = typeof window > "u" ? global : window,
    ri = ["moz", "webkit"],
    dr = "AnimationFrame",
    pr = Se["request" + dr],
    Xr = Se["cancel" + dr] || Se["cancelRequest" + dr];
  for (gr = 0; !pr && gr < ri.length; gr++)
    (pr = Se[ri[gr] + "Request" + dr]),
      (Xr = Se[ri[gr] + "Cancel" + dr] || Se[ri[gr] + "CancelRequest" + dr]);
  var gr;
  (!pr || !Xr) &&
    ((ti = 0),
    (_n = 0),
    (Me = []),
    (yv = 1e3 / 60),
    (pr = function (i) {
      if (Me.length === 0) {
        var e = tT(),
          r = Math.max(0, yv - (e - ti));
        (ti = r + e),
          setTimeout(function () {
            var t = Me.slice(0);
            Me.length = 0;
            for (var a = 0; a < t.length; a++)
              if (!t[a].cancelled)
                try {
                  t[a].callback(ti);
                } catch (n) {
                  setTimeout(function () {
                    throw n;
                  }, 0);
                }
          }, Math.round(r));
      }
      return Me.push({ handle: ++_n, callback: i, cancelled: !1 }), _n;
    }),
    (Xr = function (i) {
      for (var e = 0; e < Me.length; e++)
        Me[e].handle === i && (Me[e].cancelled = !0);
    }));
  var ti, _n, Me, yv;
  ii.exports = function (i) {
    return pr.call(Se, i);
  };
  ii.exports.cancel = function () {
    Xr.apply(Se, arguments);
  };
  ii.exports.polyfill = function (i) {
    i || (i = Se),
      (i.requestAnimationFrame = pr),
      (i.cancelAnimationFrame = Xr);
  };
});
var Dn = d((Uw, bv) => {
  "use strict";
  bv.exports = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`;
});
var Ov = d((Fw, Tv) => {
  "use strict";
  var iT = L(),
    aT = ue(),
    nT = de(),
    kn = Dn(),
    xv = iT("".replace),
    sT = RegExp("^[" + kn + "]+"),
    oT = RegExp("(^|[^" + kn + "])[" + kn + "]+$"),
    Ln = function (i) {
      return function (e) {
        var r = nT(aT(e));
        return i & 1 && (r = xv(r, sT, "")), i & 2 && (r = xv(r, oT, "$1")), r;
      };
    };
  Tv.exports = { start: Ln(1), end: Ln(2), trim: Ln(3) };
});
var Cv = d((jw, wv) => {
  "use strict";
  var uT = Ar().PROPER,
    lT = D(),
    Sv = Dn(),
    Ev = "\u200B\x85\u180E";
  wv.exports = function (i) {
    return lT(function () {
      return !!Sv[i]() || Ev[i]() !== Ev || (uT && Sv[i].name !== i);
    });
  };
});
var qv = d(() => {
  "use strict";
  var hT = ee(),
    cT = Ov().trim,
    fT = Cv();
  hT(
    { target: "String", proto: !0, forced: fT("trim") },
    {
      trim: function () {
        return cT(this);
      },
    },
  );
});
var Pv = d((Hw, Av) => {
  "use strict";
  Av.exports = function (i) {
    (this.ok = !1),
      (this.alpha = 1),
      i.charAt(0) == "#" && (i = i.substr(1, 6)),
      (i = i.replace(/ /g, "")),
      (i = i.toLowerCase());
    var e = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dodgerblue: "1e90ff",
      feldspar: "d19275",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "ff00ff",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgrey: "d3d3d3",
      lightgreen: "90ee90",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslateblue: "8470ff",
      lightslategray: "778899",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "00ff00",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "ff00ff",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370d8",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "d87093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "ff0000",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      violetred: "d02090",
      wheat: "f5deb3",
      white: "ffffff",
      whitesmoke: "f5f5f5",
      yellow: "ffff00",
      yellowgreen: "9acd32",
    };
    i = e[i] || i;
    for (
      var r = [
          {
            re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
            example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
            process: function (u) {
              return [
                parseInt(u[1]),
                parseInt(u[2]),
                parseInt(u[3]),
                parseFloat(u[4]),
              ];
            },
          },
          {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
            process: function (u) {
              return [parseInt(u[1]), parseInt(u[2]), parseInt(u[3])];
            },
          },
          {
            re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            example: ["#00ff00", "336699"],
            process: function (u) {
              return [
                parseInt(u[1], 16),
                parseInt(u[2], 16),
                parseInt(u[3], 16),
              ];
            },
          },
          {
            re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            example: ["#fb0", "f0f"],
            process: function (u) {
              return [
                parseInt(u[1] + u[1], 16),
                parseInt(u[2] + u[2], 16),
                parseInt(u[3] + u[3], 16),
              ];
            },
          },
        ],
        t = 0;
      t < r.length;
      t++
    ) {
      var a = r[t].re,
        n = r[t].process,
        o = a.exec(i);
      if (o) {
        var s = n(o);
        (this.r = s[0]),
          (this.g = s[1]),
          (this.b = s[2]),
          s.length > 3 && (this.alpha = s[3]),
          (this.ok = !0);
      }
    }
    (this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
      (this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
      (this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
      (this.alpha =
        this.alpha < 0
          ? 0
          : this.alpha > 1 || isNaN(this.alpha)
            ? 1
            : this.alpha),
      (this.toRGB = function () {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
      }),
      (this.toRGBA = function () {
        return (
          "rgba(" +
          this.r +
          ", " +
          this.g +
          ", " +
          this.b +
          ", " +
          this.alpha +
          ")"
        );
      }),
      (this.toHex = function () {
        var u = this.r.toString(16),
          l = this.g.toString(16),
          h = this.b.toString(16);
        return (
          u.length == 1 && (u = "0" + u),
          l.length == 1 && (l = "0" + l),
          h.length == 1 && (h = "0" + h),
          "#" + u + l + h
        );
      }),
      (this.getHelpXML = function () {
        for (var u = new Array(), l = 0; l < r.length; l++)
          for (var h = r[l].example, f = 0; f < h.length; f++)
            u[u.length] = h[f];
        for (var v in e) u[u.length] = v;
        var c = document.createElement("ul");
        c.setAttribute("id", "rgbcolor-examples");
        for (var l = 0; l < u.length; l++)
          try {
            var g = document.createElement("li"),
              p = new RGBColor(u[l]),
              y = document.createElement("div");
            (y.style.cssText =
              "margin: 3px; border: 1px solid black; background:" +
              p.toHex() +
              "; color:" +
              p.toHex()),
              y.appendChild(document.createTextNode("test"));
            var m = document.createTextNode(
              " " + u[l] + " -> " + p.toRGB() + " -> " + p.toHex(),
            );
            g.appendChild(y), g.appendChild(m), c.appendChild(g);
          } catch {}
        return c;
      });
  };
});
var Nv = d(() => {
  "use strict";
  var vT = ee(),
    gT = Lr(),
    dT = ua().indexOf,
    pT = Nn(),
    Bn = gT([].indexOf),
    Rv = !!Bn && 1 / Bn([1], 1, -0) < 0,
    yT = Rv || !pT("indexOf");
  vT(
    { target: "Array", proto: !0, forced: yT },
    {
      indexOf: function (e) {
        var r = arguments.length > 1 ? arguments[1] : void 0;
        return Rv ? Bn(this, e, r) || 0 : dT(this, e, r);
      },
    },
  );
});
var Mv = d(() => {
  "use strict";
  var mT = ee(),
    bT = L(),
    xT = Xt(),
    TT = ue(),
    Iv = de(),
    OT = Wt(),
    ST = bT("".indexOf);
  mT(
    { target: "String", proto: !0, forced: !OT("includes") },
    {
      includes: function (e) {
        return !!~ST(
          Iv(TT(this)),
          Iv(xT(e)),
          arguments.length > 1 ? arguments[1] : void 0,
        );
      },
    },
  );
});
var _v = d((Qw, Vv) => {
  "use strict";
  var ET = Ae();
  Vv.exports =
    Array.isArray ||
    function (e) {
      return ET(e) === "Array";
    };
});
var Lv = d(() => {
  "use strict";
  var wT = ee(),
    CT = L(),
    qT = _v(),
    AT = CT([].reverse),
    Dv = [1, 2];
  wT(
    { target: "Array", proto: !0, forced: String(Dv) === String(Dv.reverse()) },
    {
      reverse: function () {
        return qT(this) && (this.length = this.length), AT(this);
      },
    },
  );
});
function Hv(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null",
    );
  function r() {
    this.constructor = i;
  }
  $v(i, e),
    (i.prototype =
      e === null ? Object.create(e) : ((r.prototype = e.prototype), new r()));
}
function PT(i) {
  var e = "";
  Array.isArray(i) || (i = [i]);
  for (var r = 0; r < i.length; r++) {
    var t = i[r];
    if (t.type === b.CLOSE_PATH) e += "z";
    else if (t.type === b.HORIZ_LINE_TO) e += (t.relative ? "h" : "H") + t.x;
    else if (t.type === b.VERT_LINE_TO) e += (t.relative ? "v" : "V") + t.y;
    else if (t.type === b.MOVE_TO)
      e += (t.relative ? "m" : "M") + t.x + " " + t.y;
    else if (t.type === b.LINE_TO)
      e += (t.relative ? "l" : "L") + t.x + " " + t.y;
    else if (t.type === b.CURVE_TO)
      e +=
        (t.relative ? "c" : "C") +
        t.x1 +
        " " +
        t.y1 +
        " " +
        t.x2 +
        " " +
        t.y2 +
        " " +
        t.x +
        " " +
        t.y;
    else if (t.type === b.SMOOTH_CURVE_TO)
      e += (t.relative ? "s" : "S") + t.x2 + " " + t.y2 + " " + t.x + " " + t.y;
    else if (t.type === b.QUAD_TO)
      e += (t.relative ? "q" : "Q") + t.x1 + " " + t.y1 + " " + t.x + " " + t.y;
    else if (t.type === b.SMOOTH_QUAD_TO)
      e += (t.relative ? "t" : "T") + t.x + " " + t.y;
    else {
      if (t.type !== b.ARC)
        throw new Error(
          'Unexpected command type "' + t.type + '" at index ' + r + ".",
        );
      e +=
        (t.relative ? "a" : "A") +
        t.rX +
        " " +
        t.rY +
        " " +
        t.xRot +
        " " +
        +t.lArcFlag +
        " " +
        +t.sweepFlag +
        " " +
        t.x +
        " " +
        t.y;
    }
  }
  return e;
}
function Fn(i, e) {
  var r = i[0],
    t = i[1];
  return [r * Math.cos(e) - t * Math.sin(e), r * Math.sin(e) + t * Math.cos(e)];
}
function ye() {
  for (var i = [], e = 0; e < arguments.length; e++) i[e] = arguments[e];
  for (var r = 0; r < i.length; r++)
    if (typeof i[r] != "number")
      throw new Error(
        "assertNumbers arguments[" +
          r +
          "] is not a number. " +
          typeof i[r] +
          " == typeof " +
          i[r],
      );
  return !0;
}
function Un(i, e, r) {
  (i.lArcFlag = i.lArcFlag === 0 ? 0 : 1),
    (i.sweepFlag = i.sweepFlag === 0 ? 0 : 1);
  var t = i.rX,
    a = i.rY,
    n = i.x,
    o = i.y;
  (t = Math.abs(i.rX)), (a = Math.abs(i.rY));
  var s = Fn([(e - n) / 2, (r - o) / 2], (-i.xRot / 180) * Ve),
    u = s[0],
    l = s[1],
    h = Math.pow(u, 2) / Math.pow(t, 2) + Math.pow(l, 2) / Math.pow(a, 2);
  1 < h && ((t *= Math.sqrt(h)), (a *= Math.sqrt(h))), (i.rX = t), (i.rY = a);
  var f = Math.pow(t, 2) * Math.pow(l, 2) + Math.pow(a, 2) * Math.pow(u, 2),
    v =
      (i.lArcFlag !== i.sweepFlag ? 1 : -1) *
      Math.sqrt(Math.max(0, (Math.pow(t, 2) * Math.pow(a, 2) - f) / f)),
    c = ((t * l) / a) * v,
    g = ((-a * u) / t) * v,
    p = Fn([c, g], (i.xRot / 180) * Ve);
  (i.cX = p[0] + (e + n) / 2),
    (i.cY = p[1] + (r + o) / 2),
    (i.phi1 = Math.atan2((l - g) / a, (u - c) / t)),
    (i.phi2 = Math.atan2((-l - g) / a, (-u - c) / t)),
    i.sweepFlag === 0 && i.phi2 > i.phi1 && (i.phi2 -= 2 * Ve),
    i.sweepFlag === 1 && i.phi2 < i.phi1 && (i.phi2 += 2 * Ve),
    (i.phi1 *= 180 / Ve),
    (i.phi2 *= 180 / Ve);
}
function kv(i, e, r) {
  ye(i, e, r);
  var t = i * i + e * e - r * r;
  if (0 > t) return [];
  if (t === 0) return [[(i * r) / (i * i + e * e), (e * r) / (i * i + e * e)]];
  var a = Math.sqrt(t);
  return [
    [(i * r + e * a) / (i * i + e * e), (e * r - i * a) / (i * i + e * e)],
    [(i * r - e * a) / (i * i + e * e), (e * r + i * a) / (i * i + e * e)],
  ];
}
function Bv(i, e, r) {
  return (1 - r) * i + r * e;
}
function Uv(i, e, r, t) {
  return i + Math.cos((t / 180) * Ve) * e + Math.sin((t / 180) * Ve) * r;
}
function Fv(i, e, r, t) {
  var a = 1e-6,
    n = e - i,
    o = r - e,
    s = 3 * n + 3 * (t - r) - 6 * o,
    u = 6 * (o - n),
    l = 3 * n;
  return Math.abs(s) < a
    ? [-l / u]
    : (function (h, f, v) {
        v === void 0 && (v = 1e-6);
        var c = (h * h) / 4 - f;
        if (c < -v) return [];
        if (c <= v) return [-h / 2];
        var g = Math.sqrt(c);
        return [-h / 2 - g, -h / 2 + g];
      })(u / s, l / s, a);
}
function jv(i, e, r, t, a) {
  var n = 1 - a;
  return (
    i * (n * n * n) +
    e * (3 * n * n * a) +
    r * (3 * n * a * a) +
    t * (a * a * a)
  );
}
var $v,
  Ve,
  U,
  Ee,
  pe,
  Gv,
  RT,
  zv,
  NT,
  b,
  IT,
  Yv = Be(() => {
    "use strict";
    $v = function (i, e) {
      return ($v =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, t) {
            r.__proto__ = t;
          }) ||
        function (r, t) {
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (r[a] = t[a]);
        })(i, e);
    };
    Ve = Math.PI;
    Ee = Math.PI / 180;
    (function (i) {
      function e() {
        return a(function (s, u, l) {
          return (
            s.relative &&
              (s.x1 !== void 0 && (s.x1 += u),
              s.y1 !== void 0 && (s.y1 += l),
              s.x2 !== void 0 && (s.x2 += u),
              s.y2 !== void 0 && (s.y2 += l),
              s.x !== void 0 && (s.x += u),
              s.y !== void 0 && (s.y += l),
              (s.relative = !1)),
            s
          );
        });
      }
      function r() {
        var s = NaN,
          u = NaN,
          l = NaN,
          h = NaN;
        return a(function (f, v, c) {
          return (
            f.type & b.SMOOTH_CURVE_TO &&
              ((f.type = b.CURVE_TO),
              (s = isNaN(s) ? v : s),
              (u = isNaN(u) ? c : u),
              (f.x1 = f.relative ? v - s : 2 * v - s),
              (f.y1 = f.relative ? c - u : 2 * c - u)),
            f.type & b.CURVE_TO
              ? ((s = f.relative ? v + f.x2 : f.x2),
                (u = f.relative ? c + f.y2 : f.y2))
              : ((s = NaN), (u = NaN)),
            f.type & b.SMOOTH_QUAD_TO &&
              ((f.type = b.QUAD_TO),
              (l = isNaN(l) ? v : l),
              (h = isNaN(h) ? c : h),
              (f.x1 = f.relative ? v - l : 2 * v - l),
              (f.y1 = f.relative ? c - h : 2 * c - h)),
            f.type & b.QUAD_TO
              ? ((l = f.relative ? v + f.x1 : f.x1),
                (h = f.relative ? c + f.y1 : f.y1))
              : ((l = NaN), (h = NaN)),
            f
          );
        });
      }
      function t() {
        var s = NaN,
          u = NaN;
        return a(function (l, h, f) {
          if (
            (l.type & b.SMOOTH_QUAD_TO &&
              ((l.type = b.QUAD_TO),
              (s = isNaN(s) ? h : s),
              (u = isNaN(u) ? f : u),
              (l.x1 = l.relative ? h - s : 2 * h - s),
              (l.y1 = l.relative ? f - u : 2 * f - u)),
            l.type & b.QUAD_TO)
          ) {
            (s = l.relative ? h + l.x1 : l.x1),
              (u = l.relative ? f + l.y1 : l.y1);
            var v = l.x1,
              c = l.y1;
            (l.type = b.CURVE_TO),
              (l.x1 = ((l.relative ? 0 : h) + 2 * v) / 3),
              (l.y1 = ((l.relative ? 0 : f) + 2 * c) / 3),
              (l.x2 = (l.x + 2 * v) / 3),
              (l.y2 = (l.y + 2 * c) / 3);
          } else (s = NaN), (u = NaN);
          return l;
        });
      }
      function a(s) {
        var u = 0,
          l = 0,
          h = NaN,
          f = NaN;
        return function (v) {
          if (isNaN(h) && !(v.type & b.MOVE_TO))
            throw new Error("path must start with moveto");
          var c = s(v, u, l, h, f);
          return (
            v.type & b.CLOSE_PATH && ((u = h), (l = f)),
            v.x !== void 0 && (u = v.relative ? u + v.x : v.x),
            v.y !== void 0 && (l = v.relative ? l + v.y : v.y),
            v.type & b.MOVE_TO && ((h = u), (f = l)),
            c
          );
        };
      }
      function n(s, u, l, h, f, v) {
        return (
          ye(s, u, l, h, f, v),
          a(function (c, g, p, y) {
            var m = c.x1,
              T = c.x2,
              x = c.relative && !isNaN(y),
              O = c.x !== void 0 ? c.x : x ? 0 : g,
              E = c.y !== void 0 ? c.y : x ? 0 : p;
            function C(ce) {
              return ce * ce;
            }
            c.type & b.HORIZ_LINE_TO &&
              u !== 0 &&
              ((c.type = b.LINE_TO), (c.y = c.relative ? 0 : p)),
              c.type & b.VERT_LINE_TO &&
                l !== 0 &&
                ((c.type = b.LINE_TO), (c.x = c.relative ? 0 : g)),
              c.x !== void 0 && (c.x = c.x * s + E * l + (x ? 0 : f)),
              c.y !== void 0 && (c.y = O * u + c.y * h + (x ? 0 : v)),
              c.x1 !== void 0 && (c.x1 = c.x1 * s + c.y1 * l + (x ? 0 : f)),
              c.y1 !== void 0 && (c.y1 = m * u + c.y1 * h + (x ? 0 : v)),
              c.x2 !== void 0 && (c.x2 = c.x2 * s + c.y2 * l + (x ? 0 : f)),
              c.y2 !== void 0 && (c.y2 = T * u + c.y2 * h + (x ? 0 : v));
            var S = s * h - u * l;
            if (c.xRot !== void 0 && (s !== 1 || u !== 0 || l !== 0 || h !== 1))
              if (S === 0)
                delete c.rX,
                  delete c.rY,
                  delete c.xRot,
                  delete c.lArcFlag,
                  delete c.sweepFlag,
                  (c.type = b.LINE_TO);
              else {
                var A = (c.xRot * Math.PI) / 180,
                  R = Math.sin(A),
                  M = Math.cos(A),
                  _ = 1 / C(c.rX),
                  N = 1 / C(c.rY),
                  X = C(M) * _ + C(R) * N,
                  W = 2 * R * M * (_ - N),
                  H = C(R) * _ + C(M) * N,
                  Q = X * h * h - W * u * h + H * u * u,
                  Y = W * (s * h + u * l) - 2 * (X * l * h + H * s * u),
                  K = X * l * l - W * s * l + H * s * s,
                  I = ((Math.atan2(Y, Q - K) + Math.PI) % Math.PI) / 2,
                  P = Math.sin(I),
                  re = Math.cos(I);
                (c.rX =
                  Math.abs(S) / Math.sqrt(Q * C(re) + Y * P * re + K * C(P))),
                  (c.rY =
                    Math.abs(S) / Math.sqrt(Q * C(P) - Y * P * re + K * C(re))),
                  (c.xRot = (180 * I) / Math.PI);
              }
            return (
              c.sweepFlag !== void 0 && 0 > S && (c.sweepFlag = +!c.sweepFlag),
              c
            );
          })
        );
      }
      function o() {
        return function (s) {
          var u = {};
          for (var l in s) u[l] = s[l];
          return u;
        };
      }
      (i.ROUND = function (s) {
        function u(l) {
          return Math.round(l * s) / s;
        }
        return (
          s === void 0 && (s = 1e13),
          ye(s),
          function (l) {
            return (
              l.x1 !== void 0 && (l.x1 = u(l.x1)),
              l.y1 !== void 0 && (l.y1 = u(l.y1)),
              l.x2 !== void 0 && (l.x2 = u(l.x2)),
              l.y2 !== void 0 && (l.y2 = u(l.y2)),
              l.x !== void 0 && (l.x = u(l.x)),
              l.y !== void 0 && (l.y = u(l.y)),
              l.rX !== void 0 && (l.rX = u(l.rX)),
              l.rY !== void 0 && (l.rY = u(l.rY)),
              l
            );
          }
        );
      }),
        (i.TO_ABS = e),
        (i.TO_REL = function () {
          return a(function (s, u, l) {
            return (
              s.relative ||
                (s.x1 !== void 0 && (s.x1 -= u),
                s.y1 !== void 0 && (s.y1 -= l),
                s.x2 !== void 0 && (s.x2 -= u),
                s.y2 !== void 0 && (s.y2 -= l),
                s.x !== void 0 && (s.x -= u),
                s.y !== void 0 && (s.y -= l),
                (s.relative = !0)),
              s
            );
          });
        }),
        (i.NORMALIZE_HVZ = function (s, u, l) {
          return (
            s === void 0 && (s = !0),
            u === void 0 && (u = !0),
            l === void 0 && (l = !0),
            a(function (h, f, v, c, g) {
              if (isNaN(c) && !(h.type & b.MOVE_TO))
                throw new Error("path must start with moveto");
              return (
                u &&
                  h.type & b.HORIZ_LINE_TO &&
                  ((h.type = b.LINE_TO), (h.y = h.relative ? 0 : v)),
                l &&
                  h.type & b.VERT_LINE_TO &&
                  ((h.type = b.LINE_TO), (h.x = h.relative ? 0 : f)),
                s &&
                  h.type & b.CLOSE_PATH &&
                  ((h.type = b.LINE_TO),
                  (h.x = h.relative ? c - f : c),
                  (h.y = h.relative ? g - v : g)),
                h.type & b.ARC &&
                  (h.rX === 0 || h.rY === 0) &&
                  ((h.type = b.LINE_TO),
                  delete h.rX,
                  delete h.rY,
                  delete h.xRot,
                  delete h.lArcFlag,
                  delete h.sweepFlag),
                h
              );
            })
          );
        }),
        (i.NORMALIZE_ST = r),
        (i.QT_TO_C = t),
        (i.INFO = a),
        (i.SANITIZE = function (s) {
          s === void 0 && (s = 0), ye(s);
          var u = NaN,
            l = NaN,
            h = NaN,
            f = NaN;
          return a(function (v, c, g, p, y) {
            var m = Math.abs,
              T = !1,
              x = 0,
              O = 0;
            if (
              (v.type & b.SMOOTH_CURVE_TO &&
                ((x = isNaN(u) ? 0 : c - u), (O = isNaN(l) ? 0 : g - l)),
              v.type & (b.CURVE_TO | b.SMOOTH_CURVE_TO)
                ? ((u = v.relative ? c + v.x2 : v.x2),
                  (l = v.relative ? g + v.y2 : v.y2))
                : ((u = NaN), (l = NaN)),
              v.type & b.SMOOTH_QUAD_TO
                ? ((h = isNaN(h) ? c : 2 * c - h),
                  (f = isNaN(f) ? g : 2 * g - f))
                : v.type & b.QUAD_TO
                  ? ((h = v.relative ? c + v.x1 : v.x1),
                    (f = v.relative ? g + v.y1 : v.y2))
                  : ((h = NaN), (f = NaN)),
              v.type & b.LINE_COMMANDS ||
                (v.type & b.ARC && (v.rX === 0 || v.rY === 0 || !v.lArcFlag)) ||
                v.type & b.CURVE_TO ||
                v.type & b.SMOOTH_CURVE_TO ||
                v.type & b.QUAD_TO ||
                v.type & b.SMOOTH_QUAD_TO)
            ) {
              var E = v.x === void 0 ? 0 : v.relative ? v.x : v.x - c,
                C = v.y === void 0 ? 0 : v.relative ? v.y : v.y - g;
              (x = isNaN(h)
                ? v.x1 === void 0
                  ? x
                  : v.relative
                    ? v.x
                    : v.x1 - c
                : h - c),
                (O = isNaN(f)
                  ? v.y1 === void 0
                    ? O
                    : v.relative
                      ? v.y
                      : v.y1 - g
                  : f - g);
              var S = v.x2 === void 0 ? 0 : v.relative ? v.x : v.x2 - c,
                A = v.y2 === void 0 ? 0 : v.relative ? v.y : v.y2 - g;
              m(E) <= s &&
                m(C) <= s &&
                m(x) <= s &&
                m(O) <= s &&
                m(S) <= s &&
                m(A) <= s &&
                (T = !0);
            }
            return (
              v.type & b.CLOSE_PATH &&
                m(c - p) <= s &&
                m(g - y) <= s &&
                (T = !0),
              T ? [] : v
            );
          });
        }),
        (i.MATRIX = n),
        (i.ROTATE = function (s, u, l) {
          u === void 0 && (u = 0), l === void 0 && (l = 0), ye(s, u, l);
          var h = Math.sin(s),
            f = Math.cos(s);
          return n(f, h, -h, f, u - u * f + l * h, l - u * h - l * f);
        }),
        (i.TRANSLATE = function (s, u) {
          return u === void 0 && (u = 0), ye(s, u), n(1, 0, 0, 1, s, u);
        }),
        (i.SCALE = function (s, u) {
          return u === void 0 && (u = s), ye(s, u), n(s, 0, 0, u, 0, 0);
        }),
        (i.SKEW_X = function (s) {
          return ye(s), n(1, 0, Math.atan(s), 1, 0, 0);
        }),
        (i.SKEW_Y = function (s) {
          return ye(s), n(1, Math.atan(s), 0, 1, 0, 0);
        }),
        (i.X_AXIS_SYMMETRY = function (s) {
          return s === void 0 && (s = 0), ye(s), n(-1, 0, 0, 1, s, 0);
        }),
        (i.Y_AXIS_SYMMETRY = function (s) {
          return s === void 0 && (s = 0), ye(s), n(1, 0, 0, -1, 0, s);
        }),
        (i.A_TO_C = function () {
          return a(function (s, u, l) {
            return b.ARC === s.type
              ? (function (h, f, v) {
                  var c, g, p, y;
                  h.cX || Un(h, f, v);
                  for (
                    var m = Math.min(h.phi1, h.phi2),
                      T = Math.max(h.phi1, h.phi2) - m,
                      x = Math.ceil(T / 90),
                      O = new Array(x),
                      E = f,
                      C = v,
                      S = 0;
                    S < x;
                    S++
                  ) {
                    var A = Bv(h.phi1, h.phi2, S / x),
                      R = Bv(h.phi1, h.phi2, (S + 1) / x),
                      M = R - A,
                      _ = (4 / 3) * Math.tan((M * Ee) / 4),
                      N = [
                        Math.cos(A * Ee) - _ * Math.sin(A * Ee),
                        Math.sin(A * Ee) + _ * Math.cos(A * Ee),
                      ],
                      X = N[0],
                      W = N[1],
                      H = [Math.cos(R * Ee), Math.sin(R * Ee)],
                      Q = H[0],
                      Y = H[1],
                      K = [Q + _ * Math.sin(R * Ee), Y - _ * Math.cos(R * Ee)],
                      I = K[0],
                      P = K[1];
                    O[S] = { relative: h.relative, type: b.CURVE_TO };
                    var re = function (ce, me) {
                      var qe = Fn([ce * h.rX, me * h.rY], h.xRot),
                        We = qe[0],
                        Zr = qe[1];
                      return [h.cX + We, h.cY + Zr];
                    };
                    (c = re(X, W)),
                      (O[S].x1 = c[0]),
                      (O[S].y1 = c[1]),
                      (g = re(I, P)),
                      (O[S].x2 = g[0]),
                      (O[S].y2 = g[1]),
                      (p = re(Q, Y)),
                      (O[S].x = p[0]),
                      (O[S].y = p[1]),
                      h.relative &&
                        ((O[S].x1 -= E),
                        (O[S].y1 -= C),
                        (O[S].x2 -= E),
                        (O[S].y2 -= C),
                        (O[S].x -= E),
                        (O[S].y -= C)),
                      (E = (y = [O[S].x, O[S].y])[0]),
                      (C = y[1]);
                  }
                  return O;
                })(s, s.relative ? 0 : u, s.relative ? 0 : l)
              : s;
          });
        }),
        (i.ANNOTATE_ARCS = function () {
          return a(function (s, u, l) {
            return (
              s.relative && ((u = 0), (l = 0)),
              b.ARC === s.type && Un(s, u, l),
              s
            );
          });
        }),
        (i.CLONE = o),
        (i.CALCULATE_BOUNDS = function () {
          var s = function (v) {
              var c = {};
              for (var g in v) c[g] = v[g];
              return c;
            },
            u = e(),
            l = t(),
            h = r(),
            f = a(function (v, c, g) {
              var p = h(l(u(s(v))));
              function y(P) {
                P > f.maxX && (f.maxX = P), P < f.minX && (f.minX = P);
              }
              function m(P) {
                P > f.maxY && (f.maxY = P), P < f.minY && (f.minY = P);
              }
              if (
                (p.type & b.DRAWING_COMMANDS && (y(c), m(g)),
                p.type & b.HORIZ_LINE_TO && y(p.x),
                p.type & b.VERT_LINE_TO && m(p.y),
                p.type & b.LINE_TO && (y(p.x), m(p.y)),
                p.type & b.CURVE_TO)
              ) {
                y(p.x), m(p.y);
                for (var T = 0, x = Fv(c, p.x1, p.x2, p.x); T < x.length; T++)
                  0 < (I = x[T]) && 1 > I && y(jv(c, p.x1, p.x2, p.x, I));
                for (var O = 0, E = Fv(g, p.y1, p.y2, p.y); O < E.length; O++)
                  0 < (I = E[O]) && 1 > I && m(jv(g, p.y1, p.y2, p.y, I));
              }
              if (p.type & b.ARC) {
                y(p.x), m(p.y), Un(p, c, g);
                for (
                  var C = (p.xRot / 180) * Math.PI,
                    S = Math.cos(C) * p.rX,
                    A = Math.sin(C) * p.rX,
                    R = -Math.sin(C) * p.rY,
                    M = Math.cos(C) * p.rY,
                    _ =
                      p.phi1 < p.phi2
                        ? [p.phi1, p.phi2]
                        : -180 > p.phi2
                          ? [p.phi2 + 360, p.phi1 + 360]
                          : [p.phi2, p.phi1],
                    N = _[0],
                    X = _[1],
                    W = function (P) {
                      var re = P[0],
                        ce = P[1],
                        me = (180 * Math.atan2(ce, re)) / Math.PI;
                      return me < N ? me + 360 : me;
                    },
                    H = 0,
                    Q = kv(R, -S, 0).map(W);
                  H < Q.length;
                  H++
                )
                  (I = Q[H]) > N && I < X && y(Uv(p.cX, S, R, I));
                for (var Y = 0, K = kv(M, -A, 0).map(W); Y < K.length; Y++) {
                  var I;
                  (I = K[Y]) > N && I < X && m(Uv(p.cY, A, M, I));
                }
              }
              return v;
            });
          return (
            (f.minX = 1 / 0),
            (f.maxX = -1 / 0),
            (f.minY = 1 / 0),
            (f.maxY = -1 / 0),
            f
          );
        });
    })(U || (U = {}));
    (Gv = (function () {
      function i() {}
      return (
        (i.prototype.round = function (e) {
          return this.transform(U.ROUND(e));
        }),
        (i.prototype.toAbs = function () {
          return this.transform(U.TO_ABS());
        }),
        (i.prototype.toRel = function () {
          return this.transform(U.TO_REL());
        }),
        (i.prototype.normalizeHVZ = function (e, r, t) {
          return this.transform(U.NORMALIZE_HVZ(e, r, t));
        }),
        (i.prototype.normalizeST = function () {
          return this.transform(U.NORMALIZE_ST());
        }),
        (i.prototype.qtToC = function () {
          return this.transform(U.QT_TO_C());
        }),
        (i.prototype.aToC = function () {
          return this.transform(U.A_TO_C());
        }),
        (i.prototype.sanitize = function (e) {
          return this.transform(U.SANITIZE(e));
        }),
        (i.prototype.translate = function (e, r) {
          return this.transform(U.TRANSLATE(e, r));
        }),
        (i.prototype.scale = function (e, r) {
          return this.transform(U.SCALE(e, r));
        }),
        (i.prototype.rotate = function (e, r, t) {
          return this.transform(U.ROTATE(e, r, t));
        }),
        (i.prototype.matrix = function (e, r, t, a, n, o) {
          return this.transform(U.MATRIX(e, r, t, a, n, o));
        }),
        (i.prototype.skewX = function (e) {
          return this.transform(U.SKEW_X(e));
        }),
        (i.prototype.skewY = function (e) {
          return this.transform(U.SKEW_Y(e));
        }),
        (i.prototype.xSymmetry = function (e) {
          return this.transform(U.X_AXIS_SYMMETRY(e));
        }),
        (i.prototype.ySymmetry = function (e) {
          return this.transform(U.Y_AXIS_SYMMETRY(e));
        }),
        (i.prototype.annotateArcs = function () {
          return this.transform(U.ANNOTATE_ARCS());
        }),
        i
      );
    })()),
      (RT = function (i) {
        return (
          i === " " ||
          i === "	" ||
          i === "\r" ||
          i ===
            `
`
        );
      }),
      (zv = function (i) {
        return 48 <= i.charCodeAt(0) && i.charCodeAt(0) <= 57;
      }),
      (NT = (function (i) {
        function e() {
          var r = i.call(this) || this;
          return (
            (r.curNumber = ""),
            (r.curCommandType = -1),
            (r.curCommandRelative = !1),
            (r.canParseCommandOrComma = !0),
            (r.curNumberHasExp = !1),
            (r.curNumberHasExpDigits = !1),
            (r.curNumberHasDecimal = !1),
            (r.curArgs = []),
            r
          );
        }
        return (
          Hv(e, i),
          (e.prototype.finish = function (r) {
            if (
              (r === void 0 && (r = []),
              this.parse(" ", r),
              this.curArgs.length !== 0 || !this.canParseCommandOrComma)
            )
              throw new SyntaxError("Unterminated command at the path end.");
            return r;
          }),
          (e.prototype.parse = function (r, t) {
            var a = this;
            t === void 0 && (t = []);
            for (
              var n = function (f) {
                  t.push(f),
                    (a.curArgs.length = 0),
                    (a.canParseCommandOrComma = !0);
                },
                o = 0;
              o < r.length;
              o++
            ) {
              var s = r[o],
                u = !(
                  this.curCommandType !== b.ARC ||
                  (this.curArgs.length !== 3 && this.curArgs.length !== 4) ||
                  this.curNumber.length !== 1 ||
                  (this.curNumber !== "0" && this.curNumber !== "1")
                ),
                l = zv(s) && ((this.curNumber === "0" && s === "0") || u);
              if (!zv(s) || l)
                if (s !== "e" && s !== "E")
                  if (
                    (s !== "-" && s !== "+") ||
                    !this.curNumberHasExp ||
                    this.curNumberHasExpDigits
                  )
                    if (
                      s !== "." ||
                      this.curNumberHasExp ||
                      this.curNumberHasDecimal ||
                      u
                    ) {
                      if (this.curNumber && this.curCommandType !== -1) {
                        var h = Number(this.curNumber);
                        if (isNaN(h))
                          throw new SyntaxError(
                            "Invalid number ending at " + o,
                          );
                        if (this.curCommandType === b.ARC) {
                          if (
                            this.curArgs.length === 0 ||
                            this.curArgs.length === 1
                          ) {
                            if (0 > h)
                              throw new SyntaxError(
                                'Expected positive number, got "' +
                                  h +
                                  '" at index "' +
                                  o +
                                  '"',
                              );
                          } else if (
                            (this.curArgs.length === 3 ||
                              this.curArgs.length === 4) &&
                            this.curNumber !== "0" &&
                            this.curNumber !== "1"
                          )
                            throw new SyntaxError(
                              'Expected a flag, got "' +
                                this.curNumber +
                                '" at index "' +
                                o +
                                '"',
                            );
                        }
                        this.curArgs.push(h),
                          this.curArgs.length === IT[this.curCommandType] &&
                            (b.HORIZ_LINE_TO === this.curCommandType
                              ? n({
                                  type: b.HORIZ_LINE_TO,
                                  relative: this.curCommandRelative,
                                  x: h,
                                })
                              : b.VERT_LINE_TO === this.curCommandType
                                ? n({
                                    type: b.VERT_LINE_TO,
                                    relative: this.curCommandRelative,
                                    y: h,
                                  })
                                : this.curCommandType === b.MOVE_TO ||
                                    this.curCommandType === b.LINE_TO ||
                                    this.curCommandType === b.SMOOTH_QUAD_TO
                                  ? (n({
                                      type: this.curCommandType,
                                      relative: this.curCommandRelative,
                                      x: this.curArgs[0],
                                      y: this.curArgs[1],
                                    }),
                                    b.MOVE_TO === this.curCommandType &&
                                      (this.curCommandType = b.LINE_TO))
                                  : this.curCommandType === b.CURVE_TO
                                    ? n({
                                        type: b.CURVE_TO,
                                        relative: this.curCommandRelative,
                                        x1: this.curArgs[0],
                                        y1: this.curArgs[1],
                                        x2: this.curArgs[2],
                                        y2: this.curArgs[3],
                                        x: this.curArgs[4],
                                        y: this.curArgs[5],
                                      })
                                    : this.curCommandType === b.SMOOTH_CURVE_TO
                                      ? n({
                                          type: b.SMOOTH_CURVE_TO,
                                          relative: this.curCommandRelative,
                                          x2: this.curArgs[0],
                                          y2: this.curArgs[1],
                                          x: this.curArgs[2],
                                          y: this.curArgs[3],
                                        })
                                      : this.curCommandType === b.QUAD_TO
                                        ? n({
                                            type: b.QUAD_TO,
                                            relative: this.curCommandRelative,
                                            x1: this.curArgs[0],
                                            y1: this.curArgs[1],
                                            x: this.curArgs[2],
                                            y: this.curArgs[3],
                                          })
                                        : this.curCommandType === b.ARC &&
                                          n({
                                            type: b.ARC,
                                            relative: this.curCommandRelative,
                                            rX: this.curArgs[0],
                                            rY: this.curArgs[1],
                                            xRot: this.curArgs[2],
                                            lArcFlag: this.curArgs[3],
                                            sweepFlag: this.curArgs[4],
                                            x: this.curArgs[5],
                                            y: this.curArgs[6],
                                          })),
                          (this.curNumber = ""),
                          (this.curNumberHasExpDigits = !1),
                          (this.curNumberHasExp = !1),
                          (this.curNumberHasDecimal = !1),
                          (this.canParseCommandOrComma = !0);
                      }
                      if (!RT(s))
                        if (s === "," && this.canParseCommandOrComma)
                          this.canParseCommandOrComma = !1;
                        else if (s !== "+" && s !== "-" && s !== ".")
                          if (l)
                            (this.curNumber = s),
                              (this.curNumberHasDecimal = !1);
                          else {
                            if (this.curArgs.length !== 0)
                              throw new SyntaxError(
                                "Unterminated command at index " + o + ".",
                              );
                            if (!this.canParseCommandOrComma)
                              throw new SyntaxError(
                                'Unexpected character "' +
                                  s +
                                  '" at index ' +
                                  o +
                                  ". Command cannot follow comma",
                              );
                            if (
                              ((this.canParseCommandOrComma = !1),
                              s !== "z" && s !== "Z")
                            )
                              if (s === "h" || s === "H")
                                (this.curCommandType = b.HORIZ_LINE_TO),
                                  (this.curCommandRelative = s === "h");
                              else if (s === "v" || s === "V")
                                (this.curCommandType = b.VERT_LINE_TO),
                                  (this.curCommandRelative = s === "v");
                              else if (s === "m" || s === "M")
                                (this.curCommandType = b.MOVE_TO),
                                  (this.curCommandRelative = s === "m");
                              else if (s === "l" || s === "L")
                                (this.curCommandType = b.LINE_TO),
                                  (this.curCommandRelative = s === "l");
                              else if (s === "c" || s === "C")
                                (this.curCommandType = b.CURVE_TO),
                                  (this.curCommandRelative = s === "c");
                              else if (s === "s" || s === "S")
                                (this.curCommandType = b.SMOOTH_CURVE_TO),
                                  (this.curCommandRelative = s === "s");
                              else if (s === "q" || s === "Q")
                                (this.curCommandType = b.QUAD_TO),
                                  (this.curCommandRelative = s === "q");
                              else if (s === "t" || s === "T")
                                (this.curCommandType = b.SMOOTH_QUAD_TO),
                                  (this.curCommandRelative = s === "t");
                              else {
                                if (s !== "a" && s !== "A")
                                  throw new SyntaxError(
                                    'Unexpected character "' +
                                      s +
                                      '" at index ' +
                                      o +
                                      ".",
                                  );
                                (this.curCommandType = b.ARC),
                                  (this.curCommandRelative = s === "a");
                              }
                            else
                              t.push({ type: b.CLOSE_PATH }),
                                (this.canParseCommandOrComma = !0),
                                (this.curCommandType = -1);
                          }
                        else
                          (this.curNumber = s),
                            (this.curNumberHasDecimal = s === ".");
                    } else
                      (this.curNumber += s), (this.curNumberHasDecimal = !0);
                  else this.curNumber += s;
                else (this.curNumber += s), (this.curNumberHasExp = !0);
              else
                (this.curNumber += s),
                  (this.curNumberHasExpDigits = this.curNumberHasExp);
            }
            return t;
          }),
          (e.prototype.transform = function (r) {
            return Object.create(this, {
              parse: {
                value: function (t, a) {
                  a === void 0 && (a = []);
                  for (
                    var n = 0,
                      o = Object.getPrototypeOf(this).parse.call(this, t);
                    n < o.length;
                    n++
                  ) {
                    var s = o[n],
                      u = r(s);
                    Array.isArray(u) ? a.push.apply(a, u) : a.push(u);
                  }
                  return a;
                },
              },
            });
          }),
          e
        );
      })(Gv)),
      (b = (function (i) {
        function e(r) {
          var t = i.call(this) || this;
          return (t.commands = typeof r == "string" ? e.parse(r) : r), t;
        }
        return (
          Hv(e, i),
          (e.prototype.encode = function () {
            return e.encode(this.commands);
          }),
          (e.prototype.getBounds = function () {
            var r = U.CALCULATE_BOUNDS();
            return this.transform(r), r;
          }),
          (e.prototype.transform = function (r) {
            for (var t = [], a = 0, n = this.commands; a < n.length; a++) {
              var o = r(n[a]);
              Array.isArray(o) ? t.push.apply(t, o) : t.push(o);
            }
            return (this.commands = t), this;
          }),
          (e.encode = function (r) {
            return PT(r);
          }),
          (e.parse = function (r) {
            var t = new NT(),
              a = [];
            return t.parse(r, a), t.finish(a), a;
          }),
          (e.CLOSE_PATH = 1),
          (e.MOVE_TO = 2),
          (e.HORIZ_LINE_TO = 4),
          (e.VERT_LINE_TO = 8),
          (e.LINE_TO = 16),
          (e.CURVE_TO = 32),
          (e.SMOOTH_CURVE_TO = 64),
          (e.QUAD_TO = 128),
          (e.SMOOTH_QUAD_TO = 256),
          (e.ARC = 512),
          (e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO),
          (e.DRAWING_COMMANDS =
            e.HORIZ_LINE_TO |
            e.VERT_LINE_TO |
            e.LINE_TO |
            e.CURVE_TO |
            e.SMOOTH_CURVE_TO |
            e.QUAD_TO |
            e.SMOOTH_QUAD_TO |
            e.ARC),
          e
        );
      })(Gv)),
      (IT =
        (((pe = {})[b.MOVE_TO] = 2),
        (pe[b.LINE_TO] = 2),
        (pe[b.HORIZ_LINE_TO] = 1),
        (pe[b.VERT_LINE_TO] = 1),
        (pe[b.CLOSE_PATH] = 0),
        (pe[b.QUAD_TO] = 4),
        (pe[b.SMOOTH_QUAD_TO] = 2),
        (pe[b.CURVE_TO] = 6),
        (pe[b.SMOOTH_CURVE_TO] = 4),
        (pe[b.ARC] = 7),
        pe));
  });
var Qv = d((eC, Wv) => {
  "use strict";
  var MT = G(),
    VT = he(),
    _T = Sr(),
    DT = Qa(),
    Xv = RegExp.prototype;
  Wv.exports = function (i) {
    var e = i.flags;
    return e === void 0 && !("flags" in Xv) && !VT(i, "flags") && _T(Xv, i)
      ? MT(DT, i)
      : e;
  };
});
var eg = d(() => {
  "use strict";
  var LT = Ar().PROPER,
    kT = Ne(),
    BT = J(),
    Kv = de(),
    UT = D(),
    FT = Qv(),
    jn = "toString",
    Zv = RegExp.prototype,
    Jv = Zv[jn],
    jT = UT(function () {
      return Jv.call({ source: "a", flags: "b" }) !== "/a/b";
    }),
    zT = LT && Jv.name !== jn;
  (jT || zT) &&
    kT(
      Zv,
      jn,
      function () {
        var e = BT(this),
          r = Kv(e.source),
          t = Kv(FT(e));
        return "/" + r + "/" + t;
      },
      { unsafe: !0 },
    );
});
function ai(i) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ai = function (e) {
          return typeof e;
        })
      : (ai = function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        }),
    ai(i)
  );
}
function $T(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function YT(i, e, r, t, a) {
  if (
    (typeof i == "string" && (i = document.getElementById(i)),
    !i || ai(i) !== "object" || !("getContext" in i))
  )
    throw new TypeError(
      "Expecting canvas with `getContext` method in processCanvasRGB(A) calls!",
    );
  var n = i.getContext("2d");
  try {
    return n.getImageData(e, r, t, a);
  } catch (o) {
    throw new Error("unable to access image data: " + o);
  }
}
function tg(i, e, r, t, a, n) {
  if (!(isNaN(n) || n < 1)) {
    n |= 0;
    var o = YT(i, e, r, t, a);
    (o = XT(o, e, r, t, a, n)), i.getContext("2d").putImageData(o, e, r);
  }
}
function XT(i, e, r, t, a, n) {
  for (
    var o = i.data,
      s = 2 * n + 1,
      u = t - 1,
      l = a - 1,
      h = n + 1,
      f = (h * (h + 1)) / 2,
      v = new rg(),
      c = v,
      g,
      p = 1;
    p < s;
    p++
  )
    (c = c.next = new rg()), p === h && (g = c);
  c.next = v;
  for (
    var y = null, m = null, T = 0, x = 0, O = HT[n], E = GT[n], C = 0;
    C < a;
    C++
  ) {
    c = v;
    for (
      var S = o[x], A = o[x + 1], R = o[x + 2], M = o[x + 3], _ = 0;
      _ < h;
      _++
    )
      (c.r = S), (c.g = A), (c.b = R), (c.a = M), (c = c.next);
    for (
      var N = 0,
        X = 0,
        W = 0,
        H = 0,
        Q = h * S,
        Y = h * A,
        K = h * R,
        I = h * M,
        P = f * S,
        re = f * A,
        ce = f * R,
        me = f * M,
        qe = 1;
      qe < h;
      qe++
    ) {
      var We = x + ((u < qe ? u : qe) << 2),
        Zr = o[We],
        Rs = o[We + 1],
        Ns = o[We + 2],
        Is = o[We + 3],
        Jr = h - qe;
      (P += (c.r = Zr) * Jr),
        (re += (c.g = Rs) * Jr),
        (ce += (c.b = Ns) * Jr),
        (me += (c.a = Is) * Jr),
        (N += Zr),
        (X += Rs),
        (W += Ns),
        (H += Is),
        (c = c.next);
    }
    (y = v), (m = g);
    for (var mi = 0; mi < t; mi++) {
      var bi = (me * O) >>> E;
      if (((o[x + 3] = bi), bi !== 0)) {
        var xi = 255 / bi;
        (o[x] = ((P * O) >>> E) * xi),
          (o[x + 1] = ((re * O) >>> E) * xi),
          (o[x + 2] = ((ce * O) >>> E) * xi);
      } else o[x] = o[x + 1] = o[x + 2] = 0;
      (P -= Q),
        (re -= Y),
        (ce -= K),
        (me -= I),
        (Q -= y.r),
        (Y -= y.g),
        (K -= y.b),
        (I -= y.a);
      var _e = mi + n + 1;
      (_e = (T + (_e < u ? _e : u)) << 2),
        (N += y.r = o[_e]),
        (X += y.g = o[_e + 1]),
        (W += y.b = o[_e + 2]),
        (H += y.a = o[_e + 3]),
        (P += N),
        (re += X),
        (ce += W),
        (me += H),
        (y = y.next);
      var et = m,
        Ms = et.r,
        Vs = et.g,
        _s = et.b,
        Ds = et.a;
      (Q += Ms),
        (Y += Vs),
        (K += _s),
        (I += Ds),
        (N -= Ms),
        (X -= Vs),
        (W -= _s),
        (H -= Ds),
        (m = m.next),
        (x += 4);
    }
    T += t;
  }
  for (var Qe = 0; Qe < t; Qe++) {
    x = Qe << 2;
    var De = o[x],
      Le = o[x + 1],
      ke = o[x + 2],
      te = o[x + 3],
      Ti = h * De,
      Oi = h * Le,
      Si = h * ke,
      Ei = h * te,
      rt = f * De,
      tt = f * Le,
      it = f * ke,
      at = f * te;
    c = v;
    for (var Ls = 0; Ls < h; Ls++)
      (c.r = De), (c.g = Le), (c.b = ke), (c.a = te), (c = c.next);
    for (var ks = t, wi = 0, Ci = 0, qi = 0, Ai = 0, nt = 1; nt <= n; nt++) {
      x = (ks + Qe) << 2;
      var st = h - nt;
      (rt += (c.r = De = o[x]) * st),
        (tt += (c.g = Le = o[x + 1]) * st),
        (it += (c.b = ke = o[x + 2]) * st),
        (at += (c.a = te = o[x + 3]) * st),
        (Ai += De),
        (wi += Le),
        (Ci += ke),
        (qi += te),
        (c = c.next),
        nt < l && (ks += t);
    }
    (x = Qe), (y = v), (m = g);
    for (var Pi = 0; Pi < a; Pi++) {
      var ie = x << 2;
      (o[ie + 3] = te = (at * O) >>> E),
        te > 0
          ? ((te = 255 / te),
            (o[ie] = ((rt * O) >>> E) * te),
            (o[ie + 1] = ((tt * O) >>> E) * te),
            (o[ie + 2] = ((it * O) >>> E) * te))
          : (o[ie] = o[ie + 1] = o[ie + 2] = 0),
        (rt -= Ti),
        (tt -= Oi),
        (it -= Si),
        (at -= Ei),
        (Ti -= y.r),
        (Oi -= y.g),
        (Si -= y.b),
        (Ei -= y.a),
        (ie = (Qe + ((ie = Pi + h) < l ? ie : l) * t) << 2),
        (rt += Ai += y.r = o[ie]),
        (tt += wi += y.g = o[ie + 1]),
        (it += Ci += y.b = o[ie + 2]),
        (at += qi += y.a = o[ie + 3]),
        (y = y.next),
        (Ti += De = m.r),
        (Oi += Le = m.g),
        (Si += ke = m.b),
        (Ei += te = m.a),
        (Ai -= De),
        (wi -= Le),
        (Ci -= ke),
        (qi -= te),
        (m = m.next),
        (x += t);
    }
  }
  return i;
}
var HT,
  GT,
  rg,
  ig = Be(() => {
    "use strict";
    (HT = [
      512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292,
      512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292,
      273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259,
      496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292,
      282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373,
      364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259,
      507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381,
      374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292,
      287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461,
      454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373,
      368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309,
      305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259,
      257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442,
      437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
      377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332,
      329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
      289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259,
    ]),
      (GT = [
        9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17,
        17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19,
        19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21,
        21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
        22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
        22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
        22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24,
      ]);
    rg = function i() {
      $T(this, i),
        (this.r = 0),
        (this.g = 0),
        (this.b = 0),
        (this.a = 0),
        (this.next = null);
    };
  });
function WT() {
  var { DOMParser: i } =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = {
      window: null,
      ignoreAnimation: !0,
      ignoreMouse: !0,
      DOMParser: i,
      createCanvas(r, t) {
        return new OffscreenCanvas(r, t);
      },
      createImage(r) {
        return xe(function* () {
          var t = yield fetch(r),
            a = yield t.blob(),
            n = yield createImageBitmap(a);
          return n;
        })();
      },
    };
  return (
    (typeof DOMParser < "u" || typeof i > "u") &&
      Reflect.deleteProperty(e, "DOMParser"),
    e
  );
}
function QT(i) {
  var { DOMParser: e, canvas: r, fetch: t } = i;
  return {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: e,
    fetch: t,
    createCanvas: r.createCanvas,
    createImage: r.loadImage,
  };
}
function br(i) {
  return i.replace(/(?!\u3000)\s+/gm, " ");
}
function KT(i) {
  return i.replace(/^[\n \t]+/, "");
}
function ZT(i) {
  return i.replace(/[\n \t]+$/, "");
}
function ne(i) {
  var e =
    (i || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return e.map(parseFloat);
}
function eO(i) {
  return JT.test(i) ? i.toLowerCase() : i;
}
function ag(i) {
  var e = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(i) || [];
  return e[2] || e[3] || e[4];
}
function rO(i) {
  if (!i.startsWith("rgb")) return i;
  var e = 3,
    r = i.replace(/\d+(\.\d+)?/g, (t, a) =>
      e-- && a ? String(Math.round(parseFloat(t))) : t,
    );
  return r;
}
function He(i, e) {
  var r = e.exec(i);
  return r ? [i.replace(e, " "), r.length] : [i, 0];
}
function lO(i) {
  var e = [0, 0, 0],
    r = i.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "),
    t = 0;
  return (
    ([r, t] = He(r, tO)),
    (e[1] += t),
    ([r, t] = He(r, iO)),
    (e[0] += t),
    ([r, t] = He(r, aO)),
    (e[1] += t),
    ([r, t] = He(r, nO)),
    (e[2] += t),
    ([r, t] = He(r, sO)),
    (e[1] += t),
    ([r, t] = He(r, oO)),
    (e[1] += t),
    (r = r.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " ")),
    ([r, t] = He(r, uO)),
    (e[2] += t),
    e.join("")
  );
}
function ng(i) {
  return Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2));
}
function zn(i, e) {
  return (i[0] * e[0] + i[1] * e[1]) / (ng(i) * ng(e));
}
function sg(i, e) {
  return (i[0] * e[1] < i[1] * e[0] ? -1 : 1) * Math.acos(zn(i, e));
}
function og(i) {
  return i * i * i;
}
function ug(i) {
  return 3 * i * i * (1 - i);
}
function lg(i) {
  return 3 * i * (1 - i) * (1 - i);
}
function hg(i) {
  return (1 - i) * (1 - i) * (1 - i);
}
function cg(i) {
  return i * i;
}
function fg(i) {
  return 2 * i * (1 - i);
}
function vg(i) {
  return (1 - i) * (1 - i);
}
function fO(i) {
  return br(i)
    .trim()
    .replace(/\)([a-zA-Z])/g, ") $1")
    .replace(/\)(\s?,\s?)/g, ") ")
    .split(/\s(?=[a-z])/);
}
function vO(i) {
  var [e, r] = i.split("(");
  return [e.trim(), r.trim().replace(")", "")];
}
function gO(i) {
  var e = i.trim();
  return /^('|")/.test(e) ? e : '"'.concat(e, '"');
}
function dO(i) {
  return typeof process > "u" ? i : i.trim().split(",").map(gO).join(",");
}
function pO(i) {
  if (!i) return "";
  var e = i.trim().toLowerCase();
  switch (e) {
    case "normal":
    case "italic":
    case "oblique":
    case "inherit":
    case "initial":
    case "unset":
      return e;
    default:
      return /^oblique\s+(-|)\d+deg$/.test(e) ? e : "";
  }
}
function yO(i) {
  if (!i) return "";
  var e = i.trim().toLowerCase();
  switch (e) {
    case "normal":
    case "bold":
    case "lighter":
    case "bolder":
    case "inherit":
    case "initial":
    case "unset":
      return e;
    default:
      return /^[\d.]+$/.test(e) ? e : "";
  }
}
function pg(i, e) {
  var r = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    e &&
      (t = t.filter(function (a) {
        return Object.getOwnPropertyDescriptor(i, a).enumerable;
      })),
      r.push.apply(r, t);
  }
  return r;
}
function ni(i) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? pg(Object(r), !0).forEach(function (t) {
          ei(i, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
        : pg(Object(r)).forEach(function (t) {
            Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(r, t));
          });
  }
  return i;
}
function si(i, e, r, t, a, n) {
  return i[r * t * 4 + e * 4 + n];
}
function oi(i, e, r, t, a, n, o) {
  i[r * t * 4 + e * 4 + n] = o;
}
function F(i, e, r) {
  var t = i[e];
  return t * r;
}
function we(i, e, r, t) {
  return e + Math.cos(i) * r + Math.sin(i) * t;
}
function mg(i, e) {
  var r = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    e &&
      (t = t.filter(function (a) {
        return Object.getOwnPropertyDescriptor(i, a).enumerable;
      })),
      r.push.apply(r, t);
  }
  return r;
}
function SO(i) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? mg(Object(r), !0).forEach(function (t) {
          ei(i, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
        : mg(Object(r)).forEach(function (t) {
            Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(r, t));
          });
  }
  return i;
}
function EO(i, e) {
  var r = document.createElement("canvas");
  return (r.width = i), (r.height = e), r;
}
function wO(i) {
  return As.apply(this, arguments);
}
function As() {
  return (
    (As = xe(function* (i) {
      var e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        r = document.createElement("img");
      return (
        e && (r.crossOrigin = "Anonymous"),
        new Promise((t, a) => {
          (r.onload = () => {
            t(r);
          }),
            (r.onerror = (n, o, s, u, l) => {
              a(l);
            }),
            (r.src = i);
        })
      );
    })),
    As.apply(this, arguments)
  );
}
function bg(i, e) {
  var r = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    e &&
      (t = t.filter(function (a) {
        return Object.getOwnPropertyDescriptor(i, a).enumerable;
      })),
      r.push.apply(r, t);
  }
  return r;
}
function Ge(i) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? bg(Object(r), !0).forEach(function (t) {
          ei(i, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
        : bg(Object(r)).forEach(function (t) {
            Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(r, t));
          });
  }
  return i;
}
var aC,
  sC,
  oC,
  uC,
  lC,
  hC,
  fC,
  vC,
  gC,
  ui,
  dC,
  li,
  pC,
  yC,
  mC,
  xC,
  OC,
  JT,
  tO,
  iO,
  aO,
  nO,
  sO,
  oO,
  uO,
  yr,
  w,
  $n,
  $,
  Hn,
  gg,
  dg,
  Tg,
  hO,
  cO,
  Wr,
  Gn,
  Yn,
  Xn,
  hi,
  ci,
  Wn,
  Qn,
  Ps,
  B,
  Kn,
  mr,
  se,
  q,
  Ce,
  j,
  fi,
  Ye,
  vi,
  Zn,
  Xe,
  gi,
  Jn,
  es,
  rs,
  di,
  ts,
  is,
  as,
  ns,
  Qr,
  pi,
  ss,
  os,
  us,
  Kr,
  ls,
  hs,
  cs,
  fs,
  vs,
  gs,
  ds,
  ps,
  mO,
  ys,
  ms,
  bs,
  bO,
  xs,
  yi,
  xO,
  yg,
  Ts,
  TO,
  Os,
  Ss,
  Es,
  ws,
  Cs,
  qs,
  OO,
  CO,
  xg,
  qO = Be(() => {
    aC = Z(lc(), 1);
    cc();
    (sC = Z(Yc(), 1)),
      (oC = Z(ef(), 1)),
      (uC = Z(uf(), 1)),
      (lC = Z(qn(), 1)),
      (hC = Z(Yf(), 1));
    Zf();
    (fC = Z(sv(), 1)),
      (vC = Z(lv(), 1)),
      (gC = Z(gv(), 1)),
      (ui = Z(mv(), 1)),
      (dC = Z(qv(), 1)),
      (li = Z(Pv(), 1)),
      (pC = Z(Nv(), 1)),
      (yC = Z(Mv(), 1)),
      (mC = Z(Lv(), 1));
    Yv();
    xC = Z(eg(), 1);
    ig();
    OC = Object.freeze({ __proto__: null, offscreen: WT, node: QT });
    JT = /^[A-Z-]+$/;
    (tO = /(\[[^\]]+\])/g),
      (iO = /(#[^\s+>~.[:]+)/g),
      (aO = /(\.[^\s+>~.[:]+)/g),
      (nO = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi),
      (sO = /(:[\w-]+\([^)]*\))/gi),
      (oO = /(:[^\s+>~.[:]+)/g),
      (uO = /([^\s+>~.[:]+)/g);
    yr = 1e-8;
    (w = (() => {
      class i {
        constructor(r, t, a) {
          (this.document = r),
            (this.name = t),
            (this.value = a),
            (this.isNormalizedColor = !1);
        }
        static empty(r) {
          return new i(r, "EMPTY", "");
        }
        split() {
          var r =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : " ",
            { document: t, name: a } = this;
          return br(this.getString())
            .trim()
            .split(r)
            .map((n) => new i(t, a, n));
        }
        hasValue(r) {
          var { value: t } = this;
          return t !== null && t !== "" && (r || t !== 0) && typeof t < "u";
        }
        isString(r) {
          var { value: t } = this,
            a = typeof t == "string";
          return !a || !r ? a : r.test(t);
        }
        isUrlDefinition() {
          return this.isString(/^url\(/);
        }
        isPixels() {
          if (!this.hasValue()) return !1;
          var r = this.getString();
          switch (!0) {
            case r.endsWith("px"):
            case /^[0-9]+$/.test(r):
              return !0;
            default:
              return !1;
          }
        }
        setValue(r) {
          return (this.value = r), this;
        }
        getValue(r) {
          return typeof r > "u" || this.hasValue() ? this.value : r;
        }
        getNumber(r) {
          if (!this.hasValue()) return typeof r > "u" ? 0 : parseFloat(r);
          var { value: t } = this,
            a = parseFloat(t);
          return this.isString(/%$/) && (a /= 100), a;
        }
        getString(r) {
          return typeof r > "u" || this.hasValue()
            ? typeof this.value > "u"
              ? ""
              : String(this.value)
            : String(r);
        }
        getColor(r) {
          var t = this.getString(r);
          return (
            this.isNormalizedColor ||
              ((this.isNormalizedColor = !0), (t = rO(t)), (this.value = t)),
            t
          );
        }
        getDpi() {
          return 96;
        }
        getRem() {
          return this.document.rootEmSize;
        }
        getEm() {
          return this.document.emSize;
        }
        getUnits() {
          return this.getString().replace(/[0-9.-]/g, "");
        }
        getPixels(r) {
          var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          if (!this.hasValue()) return 0;
          var [a, n] = typeof r == "boolean" ? [void 0, r] : [r],
            { viewPort: o } = this.document.screen;
          switch (!0) {
            case this.isString(/vmin$/):
              return (
                (this.getNumber() / 100) *
                Math.min(o.computeSize("x"), o.computeSize("y"))
              );
            case this.isString(/vmax$/):
              return (
                (this.getNumber() / 100) *
                Math.max(o.computeSize("x"), o.computeSize("y"))
              );
            case this.isString(/vw$/):
              return (this.getNumber() / 100) * o.computeSize("x");
            case this.isString(/vh$/):
              return (this.getNumber() / 100) * o.computeSize("y");
            case this.isString(/rem$/):
              return this.getNumber() * this.getRem();
            case this.isString(/em$/):
              return this.getNumber() * this.getEm();
            case this.isString(/ex$/):
              return (this.getNumber() * this.getEm()) / 2;
            case this.isString(/px$/):
              return this.getNumber();
            case this.isString(/pt$/):
              return this.getNumber() * this.getDpi() * (1 / 72);
            case this.isString(/pc$/):
              return this.getNumber() * 15;
            case this.isString(/cm$/):
              return (this.getNumber() * this.getDpi()) / 2.54;
            case this.isString(/mm$/):
              return (this.getNumber() * this.getDpi()) / 25.4;
            case this.isString(/in$/):
              return this.getNumber() * this.getDpi();
            case this.isString(/%$/) && n:
              return this.getNumber() * this.getEm();
            case this.isString(/%$/):
              return this.getNumber() * o.computeSize(a);
            default: {
              var s = this.getNumber();
              return t && s < 1 ? s * o.computeSize(a) : s;
            }
          }
        }
        getMilliseconds() {
          return this.hasValue()
            ? this.isString(/ms$/)
              ? this.getNumber()
              : this.getNumber() * 1e3
            : 0;
        }
        getRadians() {
          if (!this.hasValue()) return 0;
          switch (!0) {
            case this.isString(/deg$/):
              return this.getNumber() * (Math.PI / 180);
            case this.isString(/grad$/):
              return this.getNumber() * (Math.PI / 200);
            case this.isString(/rad$/):
              return this.getNumber();
            default:
              return this.getNumber() * (Math.PI / 180);
          }
        }
        getDefinition() {
          var r = this.getString(),
            t = /#([^)'"]+)/.exec(r);
          return t && (t = t[1]), t || (t = r), this.document.definitions[t];
        }
        getFillStyleDefinition(r, t) {
          var a = this.getDefinition();
          if (!a) return null;
          if (typeof a.createGradient == "function")
            return a.createGradient(this.document.ctx, r, t);
          if (typeof a.createPattern == "function") {
            if (a.getHrefAttribute().hasValue()) {
              var n = a.getAttribute("patternTransform");
              (a = a.getHrefAttribute().getDefinition()),
                n.hasValue() &&
                  a.getAttribute("patternTransform", !0).setValue(n.value);
            }
            return a.createPattern(this.document.ctx, r, t);
          }
          return null;
        }
        getTextBaseline() {
          return this.hasValue()
            ? i.textBaselineMapping[this.getString()]
            : null;
        }
        addOpacity(r) {
          for (
            var t = this.getColor(), a = t.length, n = 0, o = 0;
            o < a && (t[o] === "," && n++, n !== 3);
            o++
          );
          if (r.hasValue() && this.isString() && n !== 3) {
            var s = new li.default(t);
            s.ok && ((s.alpha = r.getNumber()), (t = s.toRGBA()));
          }
          return new i(this.document, this.name, t);
        }
      }
      return (
        (i.textBaselineMapping = {
          baseline: "alphabetic",
          "before-edge": "top",
          "text-before-edge": "top",
          middle: "middle",
          central: "middle",
          "after-edge": "bottom",
          "text-after-edge": "bottom",
          ideographic: "ideographic",
          alphabetic: "alphabetic",
          hanging: "hanging",
          mathematical: "alphabetic",
        }),
        i
      );
    })()),
      ($n = class {
        constructor() {
          this.viewPorts = [];
        }
        clear() {
          this.viewPorts = [];
        }
        setCurrent(e, r) {
          this.viewPorts.push({ width: e, height: r });
        }
        removeCurrent() {
          this.viewPorts.pop();
        }
        getCurrent() {
          var { viewPorts: e } = this;
          return e[e.length - 1];
        }
        get width() {
          return this.getCurrent().width;
        }
        get height() {
          return this.getCurrent().height;
        }
        computeSize(e) {
          return typeof e == "number"
            ? e
            : e === "x"
              ? this.width
              : e === "y"
                ? this.height
                : Math.sqrt(
                    Math.pow(this.width, 2) + Math.pow(this.height, 2),
                  ) / Math.sqrt(2);
        }
      }),
      ($ = class i {
        constructor(e, r) {
          (this.x = e), (this.y = r);
        }
        static parse(e) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 0,
            [t = r, a = r] = ne(e);
          return new i(t, a);
        }
        static parseScale(e) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 1,
            [t = r, a = t] = ne(e);
          return new i(t, a);
        }
        static parsePath(e) {
          for (var r = ne(e), t = r.length, a = [], n = 0; n < t; n += 2)
            a.push(new i(r[n], r[n + 1]));
          return a;
        }
        angleTo(e) {
          return Math.atan2(e.y - this.y, e.x - this.x);
        }
        applyTransform(e) {
          var { x: r, y: t } = this,
            a = r * e[0] + t * e[2] + e[4],
            n = r * e[1] + t * e[3] + e[5];
          (this.x = a), (this.y = n);
        }
      }),
      (Hn = class {
        constructor(e) {
          (this.screen = e),
            (this.working = !1),
            (this.events = []),
            (this.eventElements = []),
            (this.onClick = this.onClick.bind(this)),
            (this.onMouseMove = this.onMouseMove.bind(this));
        }
        isWorking() {
          return this.working;
        }
        start() {
          if (!this.working) {
            var { screen: e, onClick: r, onMouseMove: t } = this,
              a = e.ctx.canvas;
            (a.onclick = r), (a.onmousemove = t), (this.working = !0);
          }
        }
        stop() {
          if (this.working) {
            var e = this.screen.ctx.canvas;
            (this.working = !1), (e.onclick = null), (e.onmousemove = null);
          }
        }
        hasEvents() {
          return this.working && this.events.length > 0;
        }
        runEvents() {
          if (this.working) {
            var { screen: e, events: r, eventElements: t } = this,
              { style: a } = e.ctx.canvas;
            a && (a.cursor = ""),
              r.forEach((n, o) => {
                for (var { run: s } = n, u = t[o]; u; ) s(u), (u = u.parent);
              }),
              (this.events = []),
              (this.eventElements = []);
          }
        }
        checkPath(e, r) {
          if (!(!this.working || !r)) {
            var { events: t, eventElements: a } = this;
            t.forEach((n, o) => {
              var { x: s, y: u } = n;
              !a[o] && r.isPointInPath && r.isPointInPath(s, u) && (a[o] = e);
            });
          }
        }
        checkBoundingBox(e, r) {
          if (!(!this.working || !r)) {
            var { events: t, eventElements: a } = this;
            t.forEach((n, o) => {
              var { x: s, y: u } = n;
              !a[o] && r.isPointInBox(s, u) && (a[o] = e);
            });
          }
        }
        mapXY(e, r) {
          for (
            var { window: t, ctx: a } = this.screen,
              n = new $(e, r),
              o = a.canvas;
            o;

          )
            (n.x -= o.offsetLeft), (n.y -= o.offsetTop), (o = o.offsetParent);
          return (
            t.scrollX && (n.x += t.scrollX), t.scrollY && (n.y += t.scrollY), n
          );
        }
        onClick(e) {
          var { x: r, y: t } = this.mapXY(e.clientX, e.clientY);
          this.events.push({
            type: "onclick",
            x: r,
            y: t,
            run(a) {
              a.onClick && a.onClick();
            },
          });
        }
        onMouseMove(e) {
          var { x: r, y: t } = this.mapXY(e.clientX, e.clientY);
          this.events.push({
            type: "onmousemove",
            x: r,
            y: t,
            run(a) {
              a.onMouseMove && a.onMouseMove();
            },
          });
        }
      }),
      (gg = typeof window < "u" ? window : null),
      (dg = typeof fetch < "u" ? fetch.bind(void 0) : null),
      (Tg = (() => {
        class i {
          constructor(r) {
            var { fetch: t = dg, window: a = gg } =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            (this.ctx = r),
              (this.FRAMERATE = 30),
              (this.MAX_VIRTUAL_PIXELS = 3e4),
              (this.CLIENT_WIDTH = 800),
              (this.CLIENT_HEIGHT = 600),
              (this.viewPort = new $n()),
              (this.mouse = new Hn(this)),
              (this.animations = []),
              (this.waits = []),
              (this.frameDuration = 0),
              (this.isReadyLock = !1),
              (this.isFirstRender = !0),
              (this.intervalId = null),
              (this.window = a),
              (this.fetch = t);
          }
          wait(r) {
            this.waits.push(r);
          }
          ready() {
            return this.readyPromise ? this.readyPromise : Promise.resolve();
          }
          isReady() {
            if (this.isReadyLock) return !0;
            var r = this.waits.every((t) => t());
            return (
              r &&
                ((this.waits = []), this.resolveReady && this.resolveReady()),
              (this.isReadyLock = r),
              r
            );
          }
          setDefaults(r) {
            (r.strokeStyle = "rgba(0,0,0,0)"),
              (r.lineCap = "butt"),
              (r.lineJoin = "miter"),
              (r.miterLimit = 4);
          }
          setViewBox(r) {
            var {
                document: t,
                ctx: a,
                aspectRatio: n,
                width: o,
                desiredWidth: s,
                height: u,
                desiredHeight: l,
                minX: h = 0,
                minY: f = 0,
                refX: v,
                refY: c,
                clip: g = !1,
                clipX: p = 0,
                clipY: y = 0,
              } = r,
              m = br(n).replace(/^defer\s/, ""),
              [T, x] = m.split(" "),
              O = T || "xMidYMid",
              E = x || "meet",
              C = o / s,
              S = u / l,
              A = Math.min(C, S),
              R = Math.max(C, S),
              M = s,
              _ = l;
            E === "meet" && ((M *= A), (_ *= A)),
              E === "slice" && ((M *= R), (_ *= R));
            var N = new w(t, "refX", v),
              X = new w(t, "refY", c),
              W = N.hasValue() && X.hasValue();
            if (
              (W && a.translate(-A * N.getPixels("x"), -A * X.getPixels("y")),
              g)
            ) {
              var H = A * p,
                Q = A * y;
              a.beginPath(),
                a.moveTo(H, Q),
                a.lineTo(o, Q),
                a.lineTo(o, u),
                a.lineTo(H, u),
                a.closePath(),
                a.clip();
            }
            if (!W) {
              var Y = E === "meet" && A === S,
                K = E === "slice" && R === S,
                I = E === "meet" && A === C,
                P = E === "slice" && R === C;
              O.startsWith("xMid") && (Y || K) && a.translate(o / 2 - M / 2, 0),
                O.endsWith("YMid") && (I || P) && a.translate(0, u / 2 - _ / 2),
                O.startsWith("xMax") && (Y || K) && a.translate(o - M, 0),
                O.endsWith("YMax") && (I || P) && a.translate(0, u - _);
            }
            switch (!0) {
              case O === "none":
                a.scale(C, S);
                break;
              case E === "meet":
                a.scale(A, A);
                break;
              case E === "slice":
                a.scale(R, R);
                break;
            }
            a.translate(-h, -f);
          }
          start(r) {
            var {
                enableRedraw: t = !1,
                ignoreMouse: a = !1,
                ignoreAnimation: n = !1,
                ignoreDimensions: o = !1,
                ignoreClear: s = !1,
                forceRedraw: u,
                scaleWidth: l,
                scaleHeight: h,
                offsetX: f,
                offsetY: v,
              } = arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
              { FRAMERATE: c, mouse: g } = this,
              p = 1e3 / c;
            if (
              ((this.frameDuration = p),
              (this.readyPromise = new Promise((O) => {
                this.resolveReady = O;
              })),
              this.isReady() && this.render(r, o, s, l, h, f, v),
              !!t)
            ) {
              var y = Date.now(),
                m = y,
                T = 0,
                x = () => {
                  (y = Date.now()),
                    (T = y - m),
                    T >= p &&
                      ((m = y - (T % p)),
                      this.shouldUpdate(n, u) &&
                        (this.render(r, o, s, l, h, f, v), g.runEvents())),
                    (this.intervalId = (0, ui.default)(x));
                };
              a || g.start(), (this.intervalId = (0, ui.default)(x));
            }
          }
          stop() {
            this.intervalId &&
              (ui.default.cancel(this.intervalId), (this.intervalId = null)),
              this.mouse.stop();
          }
          shouldUpdate(r, t) {
            if (!r) {
              var { frameDuration: a } = this,
                n = this.animations.reduce((o, s) => s.update(a) || o, !1);
              if (n) return !0;
            }
            return !!(
              (typeof t == "function" && t()) ||
              (!this.isReadyLock && this.isReady()) ||
              this.mouse.hasEvents()
            );
          }
          render(r, t, a, n, o, s, u) {
            var {
                CLIENT_WIDTH: l,
                CLIENT_HEIGHT: h,
                viewPort: f,
                ctx: v,
                isFirstRender: c,
              } = this,
              g = v.canvas;
            f.clear(),
              g.width && g.height
                ? f.setCurrent(g.width, g.height)
                : f.setCurrent(l, h);
            var p = r.getStyle("width"),
              y = r.getStyle("height");
            !t &&
              (c || (typeof n != "number" && typeof o != "number")) &&
              (p.hasValue() &&
                ((g.width = p.getPixels("x")),
                g.style && (g.style.width = "".concat(g.width, "px"))),
              y.hasValue() &&
                ((g.height = y.getPixels("y")),
                g.style && (g.style.height = "".concat(g.height, "px"))));
            var m = g.clientWidth || g.width,
              T = g.clientHeight || g.height;
            if (
              (t &&
                p.hasValue() &&
                y.hasValue() &&
                ((m = p.getPixels("x")), (T = y.getPixels("y"))),
              f.setCurrent(m, T),
              typeof s == "number" && r.getAttribute("x", !0).setValue(s),
              typeof u == "number" && r.getAttribute("y", !0).setValue(u),
              typeof n == "number" || typeof o == "number")
            ) {
              var x = ne(r.getAttribute("viewBox").getString()),
                O = 0,
                E = 0;
              if (typeof n == "number") {
                var C = r.getStyle("width");
                C.hasValue()
                  ? (O = C.getPixels("x") / n)
                  : isNaN(x[2]) || (O = x[2] / n);
              }
              if (typeof o == "number") {
                var S = r.getStyle("height");
                S.hasValue()
                  ? (E = S.getPixels("y") / o)
                  : isNaN(x[3]) || (E = x[3] / o);
              }
              O || (O = E),
                E || (E = O),
                r.getAttribute("width", !0).setValue(n),
                r.getAttribute("height", !0).setValue(o);
              var A = r.getStyle("transform", !0, !0);
              A.setValue(
                ""
                  .concat(A.getString(), " scale(")
                  .concat(1 / O, ", ")
                  .concat(1 / E, ")"),
              );
            }
            a || v.clearRect(0, 0, m, T),
              r.render(v),
              c && (this.isFirstRender = !1);
          }
        }
        return (i.defaultWindow = gg), (i.defaultFetch = dg), i;
      })()),
      ({ defaultFetch: hO } = Tg),
      (cO = typeof DOMParser < "u" ? DOMParser : null),
      (Wr = class {
        constructor() {
          var { fetch: e = hO, DOMParser: r = cO } =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          (this.fetch = e), (this.DOMParser = r);
        }
        parse(e) {
          var r = this;
          return xe(function* () {
            return e.startsWith("<") ? r.parseFromString(e) : r.load(e);
          })();
        }
        parseFromString(e) {
          var r = new this.DOMParser();
          try {
            return this.checkDocument(r.parseFromString(e, "image/svg+xml"));
          } catch {
            return this.checkDocument(r.parseFromString(e, "text/xml"));
          }
        }
        checkDocument(e) {
          var r = e.getElementsByTagName("parsererror")[0];
          if (r) throw new Error(r.textContent);
          return e;
        }
        load(e) {
          var r = this;
          return xe(function* () {
            var t = yield r.fetch(e),
              a = yield t.text();
            return r.parseFromString(a);
          })();
        }
      }),
      (Gn = class {
        constructor(e, r) {
          (this.type = "translate"),
            (this.point = null),
            (this.point = $.parse(r));
        }
        apply(e) {
          var { x: r, y: t } = this.point;
          e.translate(r || 0, t || 0);
        }
        unapply(e) {
          var { x: r, y: t } = this.point;
          e.translate(-1 * r || 0, -1 * t || 0);
        }
        applyToPoint(e) {
          var { x: r, y: t } = this.point;
          e.applyTransform([1, 0, 0, 1, r || 0, t || 0]);
        }
      }),
      (Yn = class {
        constructor(e, r, t) {
          (this.type = "rotate"),
            (this.angle = null),
            (this.originX = null),
            (this.originY = null),
            (this.cx = 0),
            (this.cy = 0);
          var a = ne(r);
          (this.angle = new w(e, "angle", a[0])),
            (this.originX = t[0]),
            (this.originY = t[1]),
            (this.cx = a[1] || 0),
            (this.cy = a[2] || 0);
        }
        apply(e) {
          var { cx: r, cy: t, originX: a, originY: n, angle: o } = this,
            s = r + a.getPixels("x"),
            u = t + n.getPixels("y");
          e.translate(s, u), e.rotate(o.getRadians()), e.translate(-s, -u);
        }
        unapply(e) {
          var { cx: r, cy: t, originX: a, originY: n, angle: o } = this,
            s = r + a.getPixels("x"),
            u = t + n.getPixels("y");
          e.translate(s, u), e.rotate(-1 * o.getRadians()), e.translate(-s, -u);
        }
        applyToPoint(e) {
          var { cx: r, cy: t, angle: a } = this,
            n = a.getRadians();
          e.applyTransform([1, 0, 0, 1, r || 0, t || 0]),
            e.applyTransform([
              Math.cos(n),
              Math.sin(n),
              -Math.sin(n),
              Math.cos(n),
              0,
              0,
            ]),
            e.applyTransform([1, 0, 0, 1, -r || 0, -t || 0]);
        }
      }),
      (Xn = class {
        constructor(e, r, t) {
          (this.type = "scale"),
            (this.scale = null),
            (this.originX = null),
            (this.originY = null);
          var a = $.parseScale(r);
          (a.x === 0 || a.y === 0) && ((a.x = yr), (a.y = yr)),
            (this.scale = a),
            (this.originX = t[0]),
            (this.originY = t[1]);
        }
        apply(e) {
          var {
              scale: { x: r, y: t },
              originX: a,
              originY: n,
            } = this,
            o = a.getPixels("x"),
            s = n.getPixels("y");
          e.translate(o, s), e.scale(r, t || r), e.translate(-o, -s);
        }
        unapply(e) {
          var {
              scale: { x: r, y: t },
              originX: a,
              originY: n,
            } = this,
            o = a.getPixels("x"),
            s = n.getPixels("y");
          e.translate(o, s), e.scale(1 / r, 1 / t || r), e.translate(-o, -s);
        }
        applyToPoint(e) {
          var { x: r, y: t } = this.scale;
          e.applyTransform([r || 0, 0, 0, t || 0, 0, 0]);
        }
      }),
      (hi = class {
        constructor(e, r, t) {
          (this.type = "matrix"),
            (this.matrix = []),
            (this.originX = null),
            (this.originY = null),
            (this.matrix = ne(r)),
            (this.originX = t[0]),
            (this.originY = t[1]);
        }
        apply(e) {
          var { originX: r, originY: t, matrix: a } = this,
            n = r.getPixels("x"),
            o = t.getPixels("y");
          e.translate(n, o),
            e.transform(a[0], a[1], a[2], a[3], a[4], a[5]),
            e.translate(-n, -o);
        }
        unapply(e) {
          var { originX: r, originY: t, matrix: a } = this,
            n = a[0],
            o = a[2],
            s = a[4],
            u = a[1],
            l = a[3],
            h = a[5],
            f = 0,
            v = 0,
            c = 1,
            g =
              1 /
              (n * (l * c - h * v) - o * (u * c - h * f) + s * (u * v - l * f)),
            p = r.getPixels("x"),
            y = t.getPixels("y");
          e.translate(p, y),
            e.transform(
              g * (l * c - h * v),
              g * (h * f - u * c),
              g * (s * v - o * c),
              g * (n * c - s * f),
              g * (o * h - s * l),
              g * (s * u - n * h),
            ),
            e.translate(-p, -y);
        }
        applyToPoint(e) {
          e.applyTransform(this.matrix);
        }
      }),
      (ci = class extends hi {
        constructor(e, r, t) {
          super(e, r, t),
            (this.type = "skew"),
            (this.angle = null),
            (this.angle = new w(e, "angle", r));
        }
      }),
      (Wn = class extends ci {
        constructor(e, r, t) {
          super(e, r, t),
            (this.type = "skewX"),
            (this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0]);
        }
      }),
      (Qn = class extends ci {
        constructor(e, r, t) {
          super(e, r, t),
            (this.type = "skewY"),
            (this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0]);
        }
      });
    (Ps = (() => {
      class i {
        constructor(r, t, a) {
          (this.document = r), (this.transforms = []);
          var n = fO(t);
          n.forEach((o) => {
            if (o !== "none") {
              var [s, u] = vO(o),
                l = i.transformTypes[s];
              typeof l < "u" &&
                this.transforms.push(new l(this.document, u, a));
            }
          });
        }
        static fromElement(r, t) {
          var a = t.getStyle("transform", !1, !0),
            [n, o = n] = t.getStyle("transform-origin", !1, !0).split(),
            s = [n, o];
          return a.hasValue() ? new i(r, a.getString(), s) : null;
        }
        apply(r) {
          for (var { transforms: t } = this, a = t.length, n = 0; n < a; n++)
            t[n].apply(r);
        }
        unapply(r) {
          for (
            var { transforms: t } = this, a = t.length, n = a - 1;
            n >= 0;
            n--
          )
            t[n].unapply(r);
        }
        applyToPoint(r) {
          for (var { transforms: t } = this, a = t.length, n = 0; n < a; n++)
            t[n].applyToPoint(r);
        }
      }
      return (
        (i.transformTypes = {
          translate: Gn,
          rotate: Yn,
          scale: Xn,
          matrix: hi,
          skewX: Wn,
          skewY: Qn,
        }),
        i
      );
    })()),
      (B = (() => {
        class i {
          constructor(r, t) {
            var a =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !1;
            if (
              ((this.document = r),
              (this.node = t),
              (this.captureTextNodes = a),
              (this.attributes = {}),
              (this.styles = {}),
              (this.stylesSpecificity = {}),
              (this.animationFrozen = !1),
              (this.animationFrozenValue = ""),
              (this.parent = null),
              (this.children = []),
              !(!t || t.nodeType !== 1))
            ) {
              if (
                (Array.from(t.attributes).forEach((u) => {
                  var l = eO(u.nodeName);
                  this.attributes[l] = new w(r, l, u.value);
                }),
                this.addStylesFromStyleDefinition(),
                this.getAttribute("style").hasValue())
              ) {
                var n = this.getAttribute("style")
                  .getString()
                  .split(";")
                  .map((u) => u.trim());
                n.forEach((u) => {
                  if (u) {
                    var [l, h] = u.split(":").map((f) => f.trim());
                    this.styles[l] = new w(r, l, h);
                  }
                });
              }
              var { definitions: o } = r,
                s = this.getAttribute("id");
              s.hasValue() && (o[s.getString()] || (o[s.getString()] = this)),
                Array.from(t.childNodes).forEach((u) => {
                  if (u.nodeType === 1) this.addChild(u);
                  else if (a && (u.nodeType === 3 || u.nodeType === 4)) {
                    var l = r.createTextNode(u);
                    l.getText().length > 0 && this.addChild(l);
                  }
                });
            }
          }
          getAttribute(r) {
            var t =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1,
              a = this.attributes[r];
            if (!a && t) {
              var n = new w(this.document, r, "");
              return (this.attributes[r] = n), n;
            }
            return a || w.empty(this.document);
          }
          getHrefAttribute() {
            for (var r in this.attributes)
              if (r === "href" || r.endsWith(":href"))
                return this.attributes[r];
            return w.empty(this.document);
          }
          getStyle(r) {
            var t =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1,
              a =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : !1,
              n = this.styles[r];
            if (n) return n;
            var o = this.getAttribute(r);
            if (o != null && o.hasValue()) return (this.styles[r] = o), o;
            if (!a) {
              var { parent: s } = this;
              if (s) {
                var u = s.getStyle(r);
                if (u != null && u.hasValue()) return u;
              }
            }
            if (t) {
              var l = new w(this.document, r, "");
              return (this.styles[r] = l), l;
            }
            return n || w.empty(this.document);
          }
          render(r) {
            if (
              !(
                this.getStyle("display").getString() === "none" ||
                this.getStyle("visibility").getString() === "hidden"
              )
            ) {
              if ((r.save(), this.getStyle("mask").hasValue())) {
                var t = this.getStyle("mask").getDefinition();
                t && (this.applyEffects(r), t.apply(r, this));
              } else if (this.getStyle("filter").getValue("none") !== "none") {
                var a = this.getStyle("filter").getDefinition();
                a && (this.applyEffects(r), a.apply(r, this));
              } else
                this.setContext(r),
                  this.renderChildren(r),
                  this.clearContext(r);
              r.restore();
            }
          }
          setContext(r) {}
          applyEffects(r) {
            var t = Ps.fromElement(this.document, this);
            t && t.apply(r);
            var a = this.getStyle("clip-path", !1, !0);
            if (a.hasValue()) {
              var n = a.getDefinition();
              n && n.apply(r);
            }
          }
          clearContext(r) {}
          renderChildren(r) {
            this.children.forEach((t) => {
              t.render(r);
            });
          }
          addChild(r) {
            var t = r instanceof i ? r : this.document.createElement(r);
            (t.parent = this),
              i.ignoreChildTypes.includes(t.type) || this.children.push(t);
          }
          matchesSelector(r) {
            var t,
              { node: a } = this;
            if (typeof a.matches == "function") return a.matches(r);
            var n =
              (t = a.getAttribute) === null || t === void 0
                ? void 0
                : t.call(a, "class");
            return !n || n === ""
              ? !1
              : n.split(" ").some((o) => ".".concat(o) === r);
          }
          addStylesFromStyleDefinition() {
            var { styles: r, stylesSpecificity: t } = this.document;
            for (var a in r)
              if (!a.startsWith("@") && this.matchesSelector(a)) {
                var n = r[a],
                  o = t[a];
                if (n)
                  for (var s in n) {
                    var u = this.stylesSpecificity[s];
                    typeof u > "u" && (u = "000"),
                      o >= u &&
                        ((this.styles[s] = n[s]),
                        (this.stylesSpecificity[s] = o));
                  }
              }
          }
          removeStyles(r, t) {
            var a = t.reduce((n, o) => {
              var s = r.getStyle(o);
              if (!s.hasValue()) return n;
              var u = s.getString();
              return s.setValue(""), [...n, [o, u]];
            }, []);
            return a;
          }
          restoreStyles(r, t) {
            t.forEach((a) => {
              var [n, o] = a;
              r.getStyle(n, !0).setValue(o);
            });
          }
          isFirstChild() {
            var r;
            return (
              ((r = this.parent) === null || r === void 0
                ? void 0
                : r.children.indexOf(this)) === 0
            );
          }
        }
        return (i.ignoreChildTypes = ["title"]), i;
      })()),
      (Kn = class extends B {
        constructor(e, r, t) {
          super(e, r, t);
        }
      });
    (mr = (() => {
      class i {
        constructor(r, t, a, n, o, s) {
          var u = s ? (typeof s == "string" ? i.parse(s) : s) : {};
          (this.fontFamily = o || u.fontFamily),
            (this.fontSize = n || u.fontSize),
            (this.fontStyle = r || u.fontStyle),
            (this.fontWeight = a || u.fontWeight),
            (this.fontVariant = t || u.fontVariant);
        }
        static parse() {
          var r =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : "",
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = "",
            n = "",
            o = "",
            s = "",
            u = "",
            l = br(r).trim().split(" "),
            h = {
              fontSize: !1,
              fontStyle: !1,
              fontWeight: !1,
              fontVariant: !1,
            };
          return (
            l.forEach((f) => {
              switch (!0) {
                case !h.fontStyle && i.styles.includes(f):
                  f !== "inherit" && (a = f), (h.fontStyle = !0);
                  break;
                case !h.fontVariant && i.variants.includes(f):
                  f !== "inherit" && (n = f),
                    (h.fontStyle = !0),
                    (h.fontVariant = !0);
                  break;
                case !h.fontWeight && i.weights.includes(f):
                  f !== "inherit" && (o = f),
                    (h.fontStyle = !0),
                    (h.fontVariant = !0),
                    (h.fontWeight = !0);
                  break;
                case !h.fontSize:
                  f !== "inherit" && ([s] = f.split("/")),
                    (h.fontStyle = !0),
                    (h.fontVariant = !0),
                    (h.fontWeight = !0),
                    (h.fontSize = !0);
                  break;
                default:
                  f !== "inherit" && (u += f);
              }
            }),
            new i(a, n, o, s, u, t)
          );
        }
        toString() {
          return [
            pO(this.fontStyle),
            this.fontVariant,
            yO(this.fontWeight),
            this.fontSize,
            dO(this.fontFamily),
          ]
            .join(" ")
            .trim();
        }
      }
      return (
        (i.styles = "normal|italic|oblique|inherit"),
        (i.variants = "normal|small-caps|inherit"),
        (i.weights =
          "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit"),
        i
      );
    })()),
      (se = class {
        constructor() {
          var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : Number.NaN,
            r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : Number.NaN,
            t =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : Number.NaN,
            a =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : Number.NaN;
          (this.x1 = e),
            (this.y1 = r),
            (this.x2 = t),
            (this.y2 = a),
            this.addPoint(e, r),
            this.addPoint(t, a);
        }
        get x() {
          return this.x1;
        }
        get y() {
          return this.y1;
        }
        get width() {
          return this.x2 - this.x1;
        }
        get height() {
          return this.y2 - this.y1;
        }
        addPoint(e, r) {
          typeof e < "u" &&
            ((isNaN(this.x1) || isNaN(this.x2)) &&
              ((this.x1 = e), (this.x2 = e)),
            e < this.x1 && (this.x1 = e),
            e > this.x2 && (this.x2 = e)),
            typeof r < "u" &&
              ((isNaN(this.y1) || isNaN(this.y2)) &&
                ((this.y1 = r), (this.y2 = r)),
              r < this.y1 && (this.y1 = r),
              r > this.y2 && (this.y2 = r));
        }
        addX(e) {
          this.addPoint(e, null);
        }
        addY(e) {
          this.addPoint(null, e);
        }
        addBoundingBox(e) {
          if (e) {
            var { x1: r, y1: t, x2: a, y2: n } = e;
            this.addPoint(r, t), this.addPoint(a, n);
          }
        }
        sumCubic(e, r, t, a, n) {
          return (
            Math.pow(1 - e, 3) * r +
            3 * Math.pow(1 - e, 2) * e * t +
            3 * (1 - e) * Math.pow(e, 2) * a +
            Math.pow(e, 3) * n
          );
        }
        bezierCurveAdd(e, r, t, a, n) {
          var o = 6 * r - 12 * t + 6 * a,
            s = -3 * r + 9 * t - 9 * a + 3 * n,
            u = 3 * t - 3 * r;
          if (s === 0) {
            if (o === 0) return;
            var l = -u / o;
            0 < l &&
              l < 1 &&
              (e
                ? this.addX(this.sumCubic(l, r, t, a, n))
                : this.addY(this.sumCubic(l, r, t, a, n)));
            return;
          }
          var h = Math.pow(o, 2) - 4 * u * s;
          if (!(h < 0)) {
            var f = (-o + Math.sqrt(h)) / (2 * s);
            0 < f &&
              f < 1 &&
              (e
                ? this.addX(this.sumCubic(f, r, t, a, n))
                : this.addY(this.sumCubic(f, r, t, a, n)));
            var v = (-o - Math.sqrt(h)) / (2 * s);
            0 < v &&
              v < 1 &&
              (e
                ? this.addX(this.sumCubic(v, r, t, a, n))
                : this.addY(this.sumCubic(v, r, t, a, n)));
          }
        }
        addBezierCurve(e, r, t, a, n, o, s, u) {
          this.addPoint(e, r),
            this.addPoint(s, u),
            this.bezierCurveAdd(!0, e, t, n, s),
            this.bezierCurveAdd(!1, r, a, o, u);
        }
        addQuadraticCurve(e, r, t, a, n, o) {
          var s = e + 0.6666666666666666 * (t - e),
            u = r + (2 / 3) * (a - r),
            l = s + (1 / 3) * (n - e),
            h = u + (1 / 3) * (o - r);
          this.addBezierCurve(e, r, s, l, u, h, n, o);
        }
        isPointInBox(e, r) {
          var { x1: t, y1: a, x2: n, y2: o } = this;
          return t <= e && e <= n && a <= r && r <= o;
        }
      }),
      (q = class extends b {
        constructor(e) {
          super(
            e
              .replace(/([+\-.])\s+/gm, "$1")
              .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ""),
          ),
            (this.control = null),
            (this.start = null),
            (this.current = null),
            (this.command = null),
            (this.commands = this.commands),
            (this.i = -1),
            (this.previousCommand = null),
            (this.points = []),
            (this.angles = []);
        }
        reset() {
          (this.i = -1),
            (this.command = null),
            (this.previousCommand = null),
            (this.start = new $(0, 0)),
            (this.control = new $(0, 0)),
            (this.current = new $(0, 0)),
            (this.points = []),
            (this.angles = []);
        }
        isEnd() {
          var { i: e, commands: r } = this;
          return e >= r.length - 1;
        }
        next() {
          var e = this.commands[++this.i];
          return (this.previousCommand = this.command), (this.command = e), e;
        }
        getPoint() {
          var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : "x",
            r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "y",
            t = new $(this.command[e], this.command[r]);
          return this.makeAbsolute(t);
        }
        getAsControlPoint(e, r) {
          var t = this.getPoint(e, r);
          return (this.control = t), t;
        }
        getAsCurrentPoint(e, r) {
          var t = this.getPoint(e, r);
          return (this.current = t), t;
        }
        getReflectedControlPoint() {
          var e = this.previousCommand.type;
          if (
            e !== b.CURVE_TO &&
            e !== b.SMOOTH_CURVE_TO &&
            e !== b.QUAD_TO &&
            e !== b.SMOOTH_QUAD_TO
          )
            return this.current;
          var {
              current: { x: r, y: t },
              control: { x: a, y: n },
            } = this,
            o = new $(2 * r - a, 2 * t - n);
          return o;
        }
        makeAbsolute(e) {
          if (this.command.relative) {
            var { x: r, y: t } = this.current;
            (e.x += r), (e.y += t);
          }
          return e;
        }
        addMarker(e, r, t) {
          var { points: a, angles: n } = this;
          t &&
            n.length > 0 &&
            !n[n.length - 1] &&
            (n[n.length - 1] = a[a.length - 1].angleTo(t)),
            this.addMarkerAngle(e, r ? r.angleTo(e) : null);
        }
        addMarkerAngle(e, r) {
          this.points.push(e), this.angles.push(r);
        }
        getMarkerPoints() {
          return this.points;
        }
        getMarkerAngles() {
          for (var { angles: e } = this, r = e.length, t = 0; t < r; t++)
            if (!e[t]) {
              for (var a = t + 1; a < r; a++)
                if (e[a]) {
                  e[t] = e[a];
                  break;
                }
            }
          return e;
        }
      }),
      (Ce = class extends B {
        constructor() {
          super(...arguments), (this.modifiedEmSizeStack = !1);
        }
        calculateOpacity() {
          for (var e = 1, r = this; r; ) {
            var t = r.getStyle("opacity", !1, !0);
            t.hasValue(!0) && (e *= t.getNumber()), (r = r.parent);
          }
          return e;
        }
        setContext(e) {
          var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          if (!r) {
            var t = this.getStyle("fill"),
              a = this.getStyle("fill-opacity"),
              n = this.getStyle("stroke"),
              o = this.getStyle("stroke-opacity");
            if (t.isUrlDefinition()) {
              var s = t.getFillStyleDefinition(this, a);
              s && (e.fillStyle = s);
            } else if (t.hasValue()) {
              t.getString() === "currentColor" &&
                t.setValue(this.getStyle("color").getColor());
              var u = t.getColor();
              u !== "inherit" &&
                (e.fillStyle = u === "none" ? "rgba(0,0,0,0)" : u);
            }
            if (a.hasValue()) {
              var l = new w(this.document, "fill", e.fillStyle)
                .addOpacity(a)
                .getColor();
              e.fillStyle = l;
            }
            if (n.isUrlDefinition()) {
              var h = n.getFillStyleDefinition(this, o);
              h && (e.strokeStyle = h);
            } else if (n.hasValue()) {
              n.getString() === "currentColor" &&
                n.setValue(this.getStyle("color").getColor());
              var f = n.getString();
              f !== "inherit" &&
                (e.strokeStyle = f === "none" ? "rgba(0,0,0,0)" : f);
            }
            if (o.hasValue()) {
              var v = new w(this.document, "stroke", e.strokeStyle)
                .addOpacity(o)
                .getString();
              e.strokeStyle = v;
            }
            var c = this.getStyle("stroke-width");
            if (c.hasValue()) {
              var g = c.getPixels();
              e.lineWidth = g || yr;
            }
            var p = this.getStyle("stroke-linecap"),
              y = this.getStyle("stroke-linejoin"),
              m = this.getStyle("stroke-miterlimit"),
              T = this.getStyle("stroke-dasharray"),
              x = this.getStyle("stroke-dashoffset");
            if (
              (p.hasValue() && (e.lineCap = p.getString()),
              y.hasValue() && (e.lineJoin = y.getString()),
              m.hasValue() && (e.miterLimit = m.getNumber()),
              T.hasValue() && T.getString() !== "none")
            ) {
              var O = ne(T.getString());
              typeof e.setLineDash < "u"
                ? e.setLineDash(O)
                : typeof e.webkitLineDash < "u"
                  ? (e.webkitLineDash = O)
                  : typeof e.mozDash < "u" &&
                    !(O.length === 1 && O[0] === 0) &&
                    (e.mozDash = O);
              var E = x.getPixels();
              typeof e.lineDashOffset < "u"
                ? (e.lineDashOffset = E)
                : typeof e.webkitLineDashOffset < "u"
                  ? (e.webkitLineDashOffset = E)
                  : typeof e.mozDashOffset < "u" && (e.mozDashOffset = E);
            }
          }
          if (((this.modifiedEmSizeStack = !1), typeof e.font < "u")) {
            var C = this.getStyle("font"),
              S = this.getStyle("font-style"),
              A = this.getStyle("font-variant"),
              R = this.getStyle("font-weight"),
              M = this.getStyle("font-size"),
              _ = this.getStyle("font-family"),
              N = new mr(
                S.getString(),
                A.getString(),
                R.getString(),
                M.hasValue() ? "".concat(M.getPixels(!0), "px") : "",
                _.getString(),
                mr.parse(C.getString(), e.font),
              );
            S.setValue(N.fontStyle),
              A.setValue(N.fontVariant),
              R.setValue(N.fontWeight),
              M.setValue(N.fontSize),
              _.setValue(N.fontFamily),
              (e.font = N.toString()),
              M.isPixels() &&
                ((this.document.emSize = M.getPixels()),
                (this.modifiedEmSizeStack = !0));
          }
          r ||
            (this.applyEffects(e), (e.globalAlpha = this.calculateOpacity()));
        }
        clearContext(e) {
          super.clearContext(e),
            this.modifiedEmSizeStack && this.document.popEmSize();
        }
      }),
      (j = class i extends Ce {
        constructor(e, r, t) {
          super(e, r, t),
            (this.type = "path"),
            (this.pathParser = null),
            (this.pathParser = new q(this.getAttribute("d").getString()));
        }
        path(e) {
          var { pathParser: r } = this,
            t = new se();
          for (r.reset(), e && e.beginPath(); !r.isEnd(); )
            switch (r.next().type) {
              case q.MOVE_TO:
                this.pathM(e, t);
                break;
              case q.LINE_TO:
                this.pathL(e, t);
                break;
              case q.HORIZ_LINE_TO:
                this.pathH(e, t);
                break;
              case q.VERT_LINE_TO:
                this.pathV(e, t);
                break;
              case q.CURVE_TO:
                this.pathC(e, t);
                break;
              case q.SMOOTH_CURVE_TO:
                this.pathS(e, t);
                break;
              case q.QUAD_TO:
                this.pathQ(e, t);
                break;
              case q.SMOOTH_QUAD_TO:
                this.pathT(e, t);
                break;
              case q.ARC:
                this.pathA(e, t);
                break;
              case q.CLOSE_PATH:
                this.pathZ(e, t);
                break;
            }
          return t;
        }
        getBoundingBox(e) {
          return this.path();
        }
        getMarkers() {
          var { pathParser: e } = this,
            r = e.getMarkerPoints(),
            t = e.getMarkerAngles(),
            a = r.map((n, o) => [n, t[o]]);
          return a;
        }
        renderChildren(e) {
          this.path(e), this.document.screen.mouse.checkPath(this, e);
          var r = this.getStyle("fill-rule");
          e.fillStyle !== "" &&
            (r.getString("inherit") !== "inherit"
              ? e.fill(r.getString())
              : e.fill()),
            e.strokeStyle !== "" &&
              (this.getAttribute("vector-effect").getString() ===
              "non-scaling-stroke"
                ? (e.save(),
                  e.setTransform(1, 0, 0, 1, 0, 0),
                  e.stroke(),
                  e.restore())
                : e.stroke());
          var t = this.getMarkers();
          if (t) {
            var a = t.length - 1,
              n = this.getStyle("marker-start"),
              o = this.getStyle("marker-mid"),
              s = this.getStyle("marker-end");
            if (n.isUrlDefinition()) {
              var u = n.getDefinition(),
                [l, h] = t[0];
              u.render(e, l, h);
            }
            if (o.isUrlDefinition())
              for (var f = o.getDefinition(), v = 1; v < a; v++) {
                var [c, g] = t[v];
                f.render(e, c, g);
              }
            if (s.isUrlDefinition()) {
              var p = s.getDefinition(),
                [y, m] = t[a];
              p.render(e, y, m);
            }
          }
        }
        static pathM(e) {
          var r = e.getAsCurrentPoint();
          return (e.start = e.current), { point: r };
        }
        pathM(e, r) {
          var { pathParser: t } = this,
            { point: a } = i.pathM(t),
            { x: n, y: o } = a;
          t.addMarker(a), r.addPoint(n, o), e && e.moveTo(n, o);
        }
        static pathL(e) {
          var { current: r } = e,
            t = e.getAsCurrentPoint();
          return { current: r, point: t };
        }
        pathL(e, r) {
          var { pathParser: t } = this,
            { current: a, point: n } = i.pathL(t),
            { x: o, y: s } = n;
          t.addMarker(n, a), r.addPoint(o, s), e && e.lineTo(o, s);
        }
        static pathH(e) {
          var { current: r, command: t } = e,
            a = new $((t.relative ? r.x : 0) + t.x, r.y);
          return (e.current = a), { current: r, point: a };
        }
        pathH(e, r) {
          var { pathParser: t } = this,
            { current: a, point: n } = i.pathH(t),
            { x: o, y: s } = n;
          t.addMarker(n, a), r.addPoint(o, s), e && e.lineTo(o, s);
        }
        static pathV(e) {
          var { current: r, command: t } = e,
            a = new $(r.x, (t.relative ? r.y : 0) + t.y);
          return (e.current = a), { current: r, point: a };
        }
        pathV(e, r) {
          var { pathParser: t } = this,
            { current: a, point: n } = i.pathV(t),
            { x: o, y: s } = n;
          t.addMarker(n, a), r.addPoint(o, s), e && e.lineTo(o, s);
        }
        static pathC(e) {
          var { current: r } = e,
            t = e.getPoint("x1", "y1"),
            a = e.getAsControlPoint("x2", "y2"),
            n = e.getAsCurrentPoint();
          return { current: r, point: t, controlPoint: a, currentPoint: n };
        }
        pathC(e, r) {
          var { pathParser: t } = this,
            {
              current: a,
              point: n,
              controlPoint: o,
              currentPoint: s,
            } = i.pathC(t);
          t.addMarker(s, o, n),
            r.addBezierCurve(a.x, a.y, n.x, n.y, o.x, o.y, s.x, s.y),
            e && e.bezierCurveTo(n.x, n.y, o.x, o.y, s.x, s.y);
        }
        static pathS(e) {
          var { current: r } = e,
            t = e.getReflectedControlPoint(),
            a = e.getAsControlPoint("x2", "y2"),
            n = e.getAsCurrentPoint();
          return { current: r, point: t, controlPoint: a, currentPoint: n };
        }
        pathS(e, r) {
          var { pathParser: t } = this,
            {
              current: a,
              point: n,
              controlPoint: o,
              currentPoint: s,
            } = i.pathS(t);
          t.addMarker(s, o, n),
            r.addBezierCurve(a.x, a.y, n.x, n.y, o.x, o.y, s.x, s.y),
            e && e.bezierCurveTo(n.x, n.y, o.x, o.y, s.x, s.y);
        }
        static pathQ(e) {
          var { current: r } = e,
            t = e.getAsControlPoint("x1", "y1"),
            a = e.getAsCurrentPoint();
          return { current: r, controlPoint: t, currentPoint: a };
        }
        pathQ(e, r) {
          var { pathParser: t } = this,
            { current: a, controlPoint: n, currentPoint: o } = i.pathQ(t);
          t.addMarker(o, n, n),
            r.addQuadraticCurve(a.x, a.y, n.x, n.y, o.x, o.y),
            e && e.quadraticCurveTo(n.x, n.y, o.x, o.y);
        }
        static pathT(e) {
          var { current: r } = e,
            t = e.getReflectedControlPoint();
          e.control = t;
          var a = e.getAsCurrentPoint();
          return { current: r, controlPoint: t, currentPoint: a };
        }
        pathT(e, r) {
          var { pathParser: t } = this,
            { current: a, controlPoint: n, currentPoint: o } = i.pathT(t);
          t.addMarker(o, n, n),
            r.addQuadraticCurve(a.x, a.y, n.x, n.y, o.x, o.y),
            e && e.quadraticCurveTo(n.x, n.y, o.x, o.y);
        }
        static pathA(e) {
          var { current: r, command: t } = e,
            { rX: a, rY: n, xRot: o, lArcFlag: s, sweepFlag: u } = t,
            l = o * (Math.PI / 180),
            h = e.getAsCurrentPoint(),
            f = new $(
              (Math.cos(l) * (r.x - h.x)) / 2 + (Math.sin(l) * (r.y - h.y)) / 2,
              (-Math.sin(l) * (r.x - h.x)) / 2 +
                (Math.cos(l) * (r.y - h.y)) / 2,
            ),
            v =
              Math.pow(f.x, 2) / Math.pow(a, 2) +
              Math.pow(f.y, 2) / Math.pow(n, 2);
          v > 1 && ((a *= Math.sqrt(v)), (n *= Math.sqrt(v)));
          var c =
            (s === u ? -1 : 1) *
            Math.sqrt(
              (Math.pow(a, 2) * Math.pow(n, 2) -
                Math.pow(a, 2) * Math.pow(f.y, 2) -
                Math.pow(n, 2) * Math.pow(f.x, 2)) /
                (Math.pow(a, 2) * Math.pow(f.y, 2) +
                  Math.pow(n, 2) * Math.pow(f.x, 2)),
            );
          isNaN(c) && (c = 0);
          var g = new $((c * a * f.y) / n, (c * -n * f.x) / a),
            p = new $(
              (r.x + h.x) / 2 + Math.cos(l) * g.x - Math.sin(l) * g.y,
              (r.y + h.y) / 2 + Math.sin(l) * g.x + Math.cos(l) * g.y,
            ),
            y = sg([1, 0], [(f.x - g.x) / a, (f.y - g.y) / n]),
            m = [(f.x - g.x) / a, (f.y - g.y) / n],
            T = [(-f.x - g.x) / a, (-f.y - g.y) / n],
            x = sg(m, T);
          return (
            zn(m, T) <= -1 && (x = Math.PI),
            zn(m, T) >= 1 && (x = 0),
            {
              currentPoint: h,
              rX: a,
              rY: n,
              sweepFlag: u,
              xAxisRotation: l,
              centp: p,
              a1: y,
              ad: x,
            }
          );
        }
        pathA(e, r) {
          var { pathParser: t } = this,
            {
              currentPoint: a,
              rX: n,
              rY: o,
              sweepFlag: s,
              xAxisRotation: u,
              centp: l,
              a1: h,
              ad: f,
            } = i.pathA(t),
            v = 1 - s ? 1 : -1,
            c = h + v * (f / 2),
            g = new $(l.x + n * Math.cos(c), l.y + o * Math.sin(c));
          if (
            (t.addMarkerAngle(g, c - (v * Math.PI) / 2),
            t.addMarkerAngle(a, c - v * Math.PI),
            r.addPoint(a.x, a.y),
            e && !isNaN(h) && !isNaN(f))
          ) {
            var p = n > o ? n : o,
              y = n > o ? 1 : n / o,
              m = n > o ? o / n : 1;
            e.translate(l.x, l.y),
              e.rotate(u),
              e.scale(y, m),
              e.arc(0, 0, p, h, h + f, !!(1 - s)),
              e.scale(1 / y, 1 / m),
              e.rotate(-u),
              e.translate(-l.x, -l.y);
          }
        }
        static pathZ(e) {
          e.current = e.start;
        }
        pathZ(e, r) {
          i.pathZ(this.pathParser),
            e && r.x1 !== r.x2 && r.y1 !== r.y2 && e.closePath();
        }
      }),
      (fi = class extends j {
        constructor(e, r, t) {
          super(e, r, t),
            (this.type = "glyph"),
            (this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber()),
            (this.unicode = this.getAttribute("unicode").getString()),
            (this.arabicForm = this.getAttribute("arabic-form").getString());
        }
      }),
      (Ye = class i extends Ce {
        constructor(e, r, t) {
          super(e, r, new.target === i ? !0 : t),
            (this.type = "text"),
            (this.x = 0),
            (this.y = 0),
            (this.measureCache = -1);
        }
        setContext(e) {
          var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          super.setContext(e, r);
          var t =
            this.getStyle("dominant-baseline").getTextBaseline() ||
            this.getStyle("alignment-baseline").getTextBaseline();
          t && (e.textBaseline = t);
        }
        initializeCoordinates() {
          (this.x = 0),
            (this.y = 0),
            (this.leafTexts = []),
            (this.textChunkStart = 0),
            (this.minX = Number.POSITIVE_INFINITY),
            (this.maxX = Number.NEGATIVE_INFINITY);
        }
        getBoundingBox(e) {
          if (this.type !== "text") return this.getTElementBoundingBox(e);
          this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(e);
          var r = null;
          return (
            this.children.forEach((t, a) => {
              var n = this.getChildBoundingBox(e, this, this, a);
              r ? r.addBoundingBox(n) : (r = n);
            }),
            r
          );
        }
        getFontSize() {
          var { document: e, parent: r } = this,
            t = mr.parse(e.ctx.font).fontSize,
            a = r.getStyle("font-size").getNumber(t);
          return a;
        }
        getTElementBoundingBox(e) {
          var r = this.getFontSize();
          return new se(
            this.x,
            this.y - r,
            this.x + this.measureText(e),
            this.y,
          );
        }
        getGlyph(e, r, t) {
          var a = r[t],
            n = null;
          if (e.isArabic) {
            var o = r.length,
              s = r[t - 1],
              u = r[t + 1],
              l = "isolated";
            if (
              ((t === 0 || s === " ") &&
                t < o - 1 &&
                u !== " " &&
                (l = "terminal"),
              t > 0 && s !== " " && t < o - 1 && u !== " " && (l = "medial"),
              t > 0 &&
                s !== " " &&
                (t === o - 1 || u === " ") &&
                (l = "initial"),
              typeof e.glyphs[a] < "u")
            ) {
              var h = e.glyphs[a];
              n = h instanceof fi ? h : h[l];
            }
          } else n = e.glyphs[a];
          return n || (n = e.missingGlyph), n;
        }
        getText() {
          return "";
        }
        getTextFromNode(e) {
          var r = e || this.node,
            t = Array.from(r.parentNode.childNodes),
            a = t.indexOf(r),
            n = t.length - 1,
            o = br(r.textContent || "");
          return a === 0 && (o = KT(o)), a === n && (o = ZT(o)), o;
        }
        renderChildren(e) {
          if (this.type !== "text") {
            this.renderTElementChildren(e);
            return;
          }
          this.initializeCoordinates(),
            this.adjustChildCoordinatesRecursive(e),
            this.children.forEach((t, a) => {
              this.renderChild(e, this, this, a);
            });
          var { mouse: r } = this.document.screen;
          r.isWorking() && r.checkBoundingBox(this, this.getBoundingBox(e));
        }
        renderTElementChildren(e) {
          var { document: r, parent: t } = this,
            a = this.getText(),
            n = t.getStyle("font-family").getDefinition();
          if (n) {
            for (
              var { unitsPerEm: o } = n.fontFace,
                s = mr.parse(r.ctx.font),
                u = t.getStyle("font-size").getNumber(s.fontSize),
                l = t.getStyle("font-style").getString(s.fontStyle),
                h = u / o,
                f = n.isRTL ? a.split("").reverse().join("") : a,
                v = ne(t.getAttribute("dx").getString()),
                c = f.length,
                g = 0;
              g < c;
              g++
            ) {
              var p = this.getGlyph(n, f, g);
              e.translate(this.x, this.y), e.scale(h, -h);
              var y = e.lineWidth;
              (e.lineWidth = (e.lineWidth * o) / u),
                l === "italic" && e.transform(1, 0, 0.4, 1, 0, 0),
                p.render(e),
                l === "italic" && e.transform(1, 0, -0.4, 1, 0, 0),
                (e.lineWidth = y),
                e.scale(1 / h, -1 / h),
                e.translate(-this.x, -this.y),
                (this.x += (u * (p.horizAdvX || n.horizAdvX)) / o),
                typeof v[g] < "u" && !isNaN(v[g]) && (this.x += v[g]);
            }
            return;
          }
          var { x: m, y: T } = this;
          e.fillStyle && e.fillText(a, m, T),
            e.strokeStyle && e.strokeText(a, m, T);
        }
        applyAnchoring() {
          if (!(this.textChunkStart >= this.leafTexts.length)) {
            var e = this.leafTexts[this.textChunkStart],
              r = e.getStyle("text-anchor").getString("start"),
              t = !1,
              a = 0;
            (r === "start" && !t) || (r === "end" && t)
              ? (a = e.x - this.minX)
              : (r === "end" && !t) || (r === "start" && t)
                ? (a = e.x - this.maxX)
                : (a = e.x - (this.minX + this.maxX) / 2);
            for (var n = this.textChunkStart; n < this.leafTexts.length; n++)
              this.leafTexts[n].x += a;
            (this.minX = Number.POSITIVE_INFINITY),
              (this.maxX = Number.NEGATIVE_INFINITY),
              (this.textChunkStart = this.leafTexts.length);
          }
        }
        adjustChildCoordinatesRecursive(e) {
          this.children.forEach((r, t) => {
            this.adjustChildCoordinatesRecursiveCore(e, this, this, t);
          }),
            this.applyAnchoring();
        }
        adjustChildCoordinatesRecursiveCore(e, r, t, a) {
          var n = t.children[a];
          n.children.length > 0
            ? n.children.forEach((o, s) => {
                r.adjustChildCoordinatesRecursiveCore(e, r, n, s);
              })
            : this.adjustChildCoordinates(e, r, t, a);
        }
        adjustChildCoordinates(e, r, t, a) {
          var n = t.children[a];
          if (typeof n.measureText != "function") return n;
          e.save(), n.setContext(e, !0);
          var o = n.getAttribute("x"),
            s = n.getAttribute("y"),
            u = n.getAttribute("dx"),
            l = n.getAttribute("dy"),
            h = n.getStyle("font-family").getDefinition(),
            f = !!h && h.isRTL;
          a === 0 &&
            (o.hasValue() || o.setValue(n.getInheritedAttribute("x")),
            s.hasValue() || s.setValue(n.getInheritedAttribute("y")),
            u.hasValue() || u.setValue(n.getInheritedAttribute("dx")),
            l.hasValue() || l.setValue(n.getInheritedAttribute("dy")));
          var v = n.measureText(e);
          return (
            f && (r.x -= v),
            o.hasValue()
              ? (r.applyAnchoring(),
                (n.x = o.getPixels("x")),
                u.hasValue() && (n.x += u.getPixels("x")))
              : (u.hasValue() && (r.x += u.getPixels("x")), (n.x = r.x)),
            (r.x = n.x),
            f || (r.x += v),
            s.hasValue()
              ? ((n.y = s.getPixels("y")),
                l.hasValue() && (n.y += l.getPixels("y")))
              : (l.hasValue() && (r.y += l.getPixels("y")), (n.y = r.y)),
            (r.y = n.y),
            r.leafTexts.push(n),
            (r.minX = Math.min(r.minX, n.x, n.x + v)),
            (r.maxX = Math.max(r.maxX, n.x, n.x + v)),
            n.clearContext(e),
            e.restore(),
            n
          );
        }
        getChildBoundingBox(e, r, t, a) {
          var n = t.children[a];
          if (typeof n.getBoundingBox != "function") return null;
          var o = n.getBoundingBox(e);
          return o
            ? (n.children.forEach((s, u) => {
                var l = r.getChildBoundingBox(e, r, n, u);
                o.addBoundingBox(l);
              }),
              o)
            : null;
        }
        renderChild(e, r, t, a) {
          var n = t.children[a];
          n.render(e),
            n.children.forEach((o, s) => {
              r.renderChild(e, r, n, s);
            });
        }
        measureText(e) {
          var { measureCache: r } = this;
          if (~r) return r;
          var t = this.getText(),
            a = this.measureTargetText(e, t);
          return (this.measureCache = a), a;
        }
        measureTargetText(e, r) {
          if (!r.length) return 0;
          var { parent: t } = this,
            a = t.getStyle("font-family").getDefinition();
          if (a) {
            for (
              var n = this.getFontSize(),
                o = a.isRTL ? r.split("").reverse().join("") : r,
                s = ne(t.getAttribute("dx").getString()),
                u = o.length,
                l = 0,
                h = 0;
              h < u;
              h++
            ) {
              var f = this.getGlyph(a, o, h);
              (l += ((f.horizAdvX || a.horizAdvX) * n) / a.fontFace.unitsPerEm),
                typeof s[h] < "u" && !isNaN(s[h]) && (l += s[h]);
            }
            return l;
          }
          if (!e.measureText) return r.length * 10;
          e.save(), this.setContext(e, !0);
          var { width: v } = e.measureText(r);
          return this.clearContext(e), e.restore(), v;
        }
        getInheritedAttribute(e) {
          for (var r = this; r instanceof i && r.isFirstChild(); ) {
            var t = r.parent.getAttribute(e);
            if (t.hasValue(!0)) return t.getValue("0");
            r = r.parent;
          }
          return null;
        }
      }),
      (vi = class i extends Ye {
        constructor(e, r, t) {
          super(e, r, new.target === i ? !0 : t),
            (this.type = "tspan"),
            (this.text =
              this.children.length > 0 ? "" : this.getTextFromNode());
        }
        getText() {
          return this.text;
        }
      }),
      (Zn = class extends vi {
        constructor() {
          super(...arguments), (this.type = "textNode");
        }
      }),
      (Xe = class extends Ce {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.root = !1);
        }
        setContext(e) {
          var r,
            { document: t } = this,
            { screen: a, window: n } = t,
            o = e.canvas;
          if (
            (a.setDefaults(e),
            o.style &&
              typeof e.font < "u" &&
              n &&
              typeof n.getComputedStyle < "u")
          ) {
            e.font = n.getComputedStyle(o).getPropertyValue("font");
            var s = new w(t, "fontSize", mr.parse(e.font).fontSize);
            s.hasValue() &&
              ((t.rootEmSize = s.getPixels("y")), (t.emSize = t.rootEmSize));
          }
          this.getAttribute("x").hasValue() ||
            this.getAttribute("x", !0).setValue(0),
            this.getAttribute("y").hasValue() ||
              this.getAttribute("y", !0).setValue(0);
          var { width: u, height: l } = a.viewPort;
          this.getStyle("width").hasValue() ||
            this.getStyle("width", !0).setValue("100%"),
            this.getStyle("height").hasValue() ||
              this.getStyle("height", !0).setValue("100%"),
            this.getStyle("color").hasValue() ||
              this.getStyle("color", !0).setValue("black");
          var h = this.getAttribute("refX"),
            f = this.getAttribute("refY"),
            v = this.getAttribute("viewBox"),
            c = v.hasValue() ? ne(v.getString()) : null,
            g =
              !this.root &&
              this.getStyle("overflow").getValue("hidden") !== "visible",
            p = 0,
            y = 0,
            m = 0,
            T = 0;
          c && ((p = c[0]), (y = c[1])),
            this.root ||
              ((u = this.getStyle("width").getPixels("x")),
              (l = this.getStyle("height").getPixels("y")),
              this.type === "marker" && ((m = p), (T = y), (p = 0), (y = 0))),
            a.viewPort.setCurrent(u, l),
            this.node &&
              (!this.parent ||
                ((r = this.node.parentNode) === null || r === void 0
                  ? void 0
                  : r.nodeName) === "foreignObject") &&
              this.getStyle("transform", !1, !0).hasValue() &&
              !this.getStyle("transform-origin", !1, !0).hasValue() &&
              this.getStyle("transform-origin", !0, !0).setValue("50% 50%"),
            super.setContext(e),
            e.translate(
              this.getAttribute("x").getPixels("x"),
              this.getAttribute("y").getPixels("y"),
            ),
            c && ((u = c[2]), (l = c[3])),
            t.setViewBox({
              ctx: e,
              aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
              width: a.viewPort.width,
              desiredWidth: u,
              height: a.viewPort.height,
              desiredHeight: l,
              minX: p,
              minY: y,
              refX: h.getValue(),
              refY: f.getValue(),
              clip: g,
              clipX: m,
              clipY: T,
            }),
            c && (a.viewPort.removeCurrent(), a.viewPort.setCurrent(u, l));
        }
        clearContext(e) {
          super.clearContext(e), this.document.screen.viewPort.removeCurrent();
        }
        resize(e) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : e,
            t =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !1,
            a = this.getAttribute("width", !0),
            n = this.getAttribute("height", !0),
            o = this.getAttribute("viewBox"),
            s = this.getAttribute("style"),
            u = a.getNumber(0),
            l = n.getNumber(0);
          if (t)
            if (typeof t == "string")
              this.getAttribute("preserveAspectRatio", !0).setValue(t);
            else {
              var h = this.getAttribute("preserveAspectRatio");
              h.hasValue() &&
                h.setValue(h.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
            }
          if (
            (a.setValue(e),
            n.setValue(r),
            o.hasValue() ||
              o.setValue("0 0 ".concat(u || e, " ").concat(l || r)),
            s.hasValue())
          ) {
            var f = this.getStyle("width"),
              v = this.getStyle("height");
            f.hasValue() && f.setValue("".concat(e, "px")),
              v.hasValue() && v.setValue("".concat(r, "px"));
          }
        }
      }),
      (gi = class extends j {
        constructor() {
          super(...arguments), (this.type = "rect");
        }
        path(e) {
          var r = this.getAttribute("x").getPixels("x"),
            t = this.getAttribute("y").getPixels("y"),
            a = this.getStyle("width", !1, !0).getPixels("x"),
            n = this.getStyle("height", !1, !0).getPixels("y"),
            o = this.getAttribute("rx"),
            s = this.getAttribute("ry"),
            u = o.getPixels("x"),
            l = s.getPixels("y");
          if (
            (o.hasValue() && !s.hasValue() && (l = u),
            s.hasValue() && !o.hasValue() && (u = l),
            (u = Math.min(u, a / 2)),
            (l = Math.min(l, n / 2)),
            e)
          ) {
            var h = 4 * ((Math.sqrt(2) - 1) / 3);
            e.beginPath(),
              n > 0 &&
                a > 0 &&
                (e.moveTo(r + u, t),
                e.lineTo(r + a - u, t),
                e.bezierCurveTo(
                  r + a - u + h * u,
                  t,
                  r + a,
                  t + l - h * l,
                  r + a,
                  t + l,
                ),
                e.lineTo(r + a, t + n - l),
                e.bezierCurveTo(
                  r + a,
                  t + n - l + h * l,
                  r + a - u + h * u,
                  t + n,
                  r + a - u,
                  t + n,
                ),
                e.lineTo(r + u, t + n),
                e.bezierCurveTo(
                  r + u - h * u,
                  t + n,
                  r,
                  t + n - l + h * l,
                  r,
                  t + n - l,
                ),
                e.lineTo(r, t + l),
                e.bezierCurveTo(r, t + l - h * l, r + u - h * u, t, r + u, t),
                e.closePath());
          }
          return new se(r, t, r + a, t + n);
        }
        getMarkers() {
          return null;
        }
      }),
      (Jn = class extends j {
        constructor() {
          super(...arguments), (this.type = "circle");
        }
        path(e) {
          var r = this.getAttribute("cx").getPixels("x"),
            t = this.getAttribute("cy").getPixels("y"),
            a = this.getAttribute("r").getPixels();
          return (
            e &&
              a > 0 &&
              (e.beginPath(),
              e.arc(r, t, a, 0, Math.PI * 2, !1),
              e.closePath()),
            new se(r - a, t - a, r + a, t + a)
          );
        }
        getMarkers() {
          return null;
        }
      }),
      (es = class extends j {
        constructor() {
          super(...arguments), (this.type = "ellipse");
        }
        path(e) {
          var r = 4 * ((Math.sqrt(2) - 1) / 3),
            t = this.getAttribute("rx").getPixels("x"),
            a = this.getAttribute("ry").getPixels("y"),
            n = this.getAttribute("cx").getPixels("x"),
            o = this.getAttribute("cy").getPixels("y");
          return (
            e &&
              t > 0 &&
              a > 0 &&
              (e.beginPath(),
              e.moveTo(n + t, o),
              e.bezierCurveTo(n + t, o + r * a, n + r * t, o + a, n, o + a),
              e.bezierCurveTo(n - r * t, o + a, n - t, o + r * a, n - t, o),
              e.bezierCurveTo(n - t, o - r * a, n - r * t, o - a, n, o - a),
              e.bezierCurveTo(n + r * t, o - a, n + t, o - r * a, n + t, o),
              e.closePath()),
            new se(n - t, o - a, n + t, o + a)
          );
        }
        getMarkers() {
          return null;
        }
      }),
      (rs = class extends j {
        constructor() {
          super(...arguments), (this.type = "line");
        }
        getPoints() {
          return [
            new $(
              this.getAttribute("x1").getPixels("x"),
              this.getAttribute("y1").getPixels("y"),
            ),
            new $(
              this.getAttribute("x2").getPixels("x"),
              this.getAttribute("y2").getPixels("y"),
            ),
          ];
        }
        path(e) {
          var [{ x: r, y: t }, { x: a, y: n }] = this.getPoints();
          return (
            e && (e.beginPath(), e.moveTo(r, t), e.lineTo(a, n)),
            new se(r, t, a, n)
          );
        }
        getMarkers() {
          var [e, r] = this.getPoints(),
            t = e.angleTo(r);
          return [
            [e, t],
            [r, t],
          ];
        }
      }),
      (di = class extends j {
        constructor(e, r, t) {
          super(e, r, t),
            (this.type = "polyline"),
            (this.points = []),
            (this.points = $.parsePath(
              this.getAttribute("points").getString(),
            ));
        }
        path(e) {
          var { points: r } = this,
            [{ x: t, y: a }] = r,
            n = new se(t, a);
          return (
            e && (e.beginPath(), e.moveTo(t, a)),
            r.forEach((o) => {
              var { x: s, y: u } = o;
              n.addPoint(s, u), e && e.lineTo(s, u);
            }),
            n
          );
        }
        getMarkers() {
          var { points: e } = this,
            r = e.length - 1,
            t = [];
          return (
            e.forEach((a, n) => {
              n !== r && t.push([a, a.angleTo(e[n + 1])]);
            }),
            t.length > 0 && t.push([e[e.length - 1], t[t.length - 1][1]]),
            t
          );
        }
      }),
      (ts = class extends di {
        constructor() {
          super(...arguments), (this.type = "polygon");
        }
        path(e) {
          var r = super.path(e),
            [{ x: t, y: a }] = this.points;
          return e && (e.lineTo(t, a), e.closePath()), r;
        }
      }),
      (is = class extends B {
        constructor() {
          super(...arguments), (this.type = "pattern");
        }
        createPattern(e, r, t) {
          var a = this.getStyle("width").getPixels("x", !0),
            n = this.getStyle("height").getPixels("y", !0),
            o = new Xe(this.document, null);
          (o.attributes.viewBox = new w(
            this.document,
            "viewBox",
            this.getAttribute("viewBox").getValue(),
          )),
            (o.attributes.width = new w(
              this.document,
              "width",
              "".concat(a, "px"),
            )),
            (o.attributes.height = new w(
              this.document,
              "height",
              "".concat(n, "px"),
            )),
            (o.attributes.transform = new w(
              this.document,
              "transform",
              this.getAttribute("patternTransform").getValue(),
            )),
            (o.children = this.children);
          var s = this.document.createCanvas(a, n),
            u = s.getContext("2d"),
            l = this.getAttribute("x"),
            h = this.getAttribute("y");
          l.hasValue() &&
            h.hasValue() &&
            u.translate(l.getPixels("x", !0), h.getPixels("y", !0)),
            t.hasValue()
              ? (this.styles["fill-opacity"] = t)
              : Reflect.deleteProperty(this.styles, "fill-opacity");
          for (var f = -1; f <= 1; f++)
            for (var v = -1; v <= 1; v++)
              u.save(),
                (o.attributes.x = new w(this.document, "x", f * s.width)),
                (o.attributes.y = new w(this.document, "y", v * s.height)),
                o.render(u),
                u.restore();
          var c = e.createPattern(s, "repeat");
          return c;
        }
      }),
      (as = class extends B {
        constructor() {
          super(...arguments), (this.type = "marker");
        }
        render(e, r, t) {
          if (r) {
            var { x: a, y: n } = r,
              o = this.getAttribute("orient").getString("auto"),
              s = this.getAttribute("markerUnits").getString("strokeWidth");
            e.translate(a, n),
              o === "auto" && e.rotate(t),
              s === "strokeWidth" && e.scale(e.lineWidth, e.lineWidth),
              e.save();
            var u = new Xe(this.document, null);
            (u.type = this.type),
              (u.attributes.viewBox = new w(
                this.document,
                "viewBox",
                this.getAttribute("viewBox").getValue(),
              )),
              (u.attributes.refX = new w(
                this.document,
                "refX",
                this.getAttribute("refX").getValue(),
              )),
              (u.attributes.refY = new w(
                this.document,
                "refY",
                this.getAttribute("refY").getValue(),
              )),
              (u.attributes.width = new w(
                this.document,
                "width",
                this.getAttribute("markerWidth").getValue(),
              )),
              (u.attributes.height = new w(
                this.document,
                "height",
                this.getAttribute("markerHeight").getValue(),
              )),
              (u.attributes.overflow = new w(
                this.document,
                "overflow",
                this.getAttribute("overflow").getValue(),
              )),
              (u.attributes.fill = new w(
                this.document,
                "fill",
                this.getAttribute("fill").getColor("black"),
              )),
              (u.attributes.stroke = new w(
                this.document,
                "stroke",
                this.getAttribute("stroke").getValue("none"),
              )),
              (u.children = this.children),
              u.render(e),
              e.restore(),
              s === "strokeWidth" && e.scale(1 / e.lineWidth, 1 / e.lineWidth),
              o === "auto" && e.rotate(-t),
              e.translate(-a, -n);
          }
        }
      }),
      (ns = class extends B {
        constructor() {
          super(...arguments), (this.type = "defs");
        }
        render() {}
      }),
      (Qr = class extends Ce {
        constructor() {
          super(...arguments), (this.type = "g");
        }
        getBoundingBox(e) {
          var r = new se();
          return (
            this.children.forEach((t) => {
              r.addBoundingBox(t.getBoundingBox(e));
            }),
            r
          );
        }
      }),
      (pi = class extends B {
        constructor(e, r, t) {
          super(e, r, t),
            (this.attributesToInherit = ["gradientUnits"]),
            (this.stops = []);
          var { stops: a, children: n } = this;
          n.forEach((o) => {
            o.type === "stop" && a.push(o);
          });
        }
        getGradientUnits() {
          return this.getAttribute("gradientUnits").getString(
            "objectBoundingBox",
          );
        }
        createGradient(e, r, t) {
          var a = this;
          this.getHrefAttribute().hasValue() &&
            ((a = this.getHrefAttribute().getDefinition()),
            this.inheritStopContainer(a));
          var { stops: n } = a,
            o = this.getGradient(e, r);
          if (!o) return this.addParentOpacity(t, n[n.length - 1].color);
          if (
            (n.forEach((y) => {
              o.addColorStop(y.offset, this.addParentOpacity(t, y.color));
            }),
            this.getAttribute("gradientTransform").hasValue())
          ) {
            var { document: s } = this,
              { MAX_VIRTUAL_PIXELS: u, viewPort: l } = s.screen,
              [h] = l.viewPorts,
              f = new gi(s, null);
            (f.attributes.x = new w(s, "x", -u / 3)),
              (f.attributes.y = new w(s, "y", -u / 3)),
              (f.attributes.width = new w(s, "width", u)),
              (f.attributes.height = new w(s, "height", u));
            var v = new Qr(s, null);
            (v.attributes.transform = new w(
              s,
              "transform",
              this.getAttribute("gradientTransform").getValue(),
            )),
              (v.children = [f]);
            var c = new Xe(s, null);
            (c.attributes.x = new w(s, "x", 0)),
              (c.attributes.y = new w(s, "y", 0)),
              (c.attributes.width = new w(s, "width", h.width)),
              (c.attributes.height = new w(s, "height", h.height)),
              (c.children = [v]);
            var g = s.createCanvas(h.width, h.height),
              p = g.getContext("2d");
            return (
              (p.fillStyle = o), c.render(p), p.createPattern(g, "no-repeat")
            );
          }
          return o;
        }
        inheritStopContainer(e) {
          this.attributesToInherit.forEach((r) => {
            !this.getAttribute(r).hasValue() &&
              e.getAttribute(r).hasValue() &&
              this.getAttribute(r, !0).setValue(e.getAttribute(r).getValue());
          });
        }
        addParentOpacity(e, r) {
          if (e.hasValue()) {
            var t = new w(this.document, "color", r);
            return t.addOpacity(e).getColor();
          }
          return r;
        }
      }),
      (ss = class extends pi {
        constructor(e, r, t) {
          super(e, r, t),
            (this.type = "linearGradient"),
            this.attributesToInherit.push("x1", "y1", "x2", "y2");
        }
        getGradient(e, r) {
          var t = this.getGradientUnits() === "objectBoundingBox",
            a = t ? r.getBoundingBox(e) : null;
          if (t && !a) return null;
          !this.getAttribute("x1").hasValue() &&
            !this.getAttribute("y1").hasValue() &&
            !this.getAttribute("x2").hasValue() &&
            !this.getAttribute("y2").hasValue() &&
            (this.getAttribute("x1", !0).setValue(0),
            this.getAttribute("y1", !0).setValue(0),
            this.getAttribute("x2", !0).setValue(1),
            this.getAttribute("y2", !0).setValue(0));
          var n = t
              ? a.x + a.width * this.getAttribute("x1").getNumber()
              : this.getAttribute("x1").getPixels("x"),
            o = t
              ? a.y + a.height * this.getAttribute("y1").getNumber()
              : this.getAttribute("y1").getPixels("y"),
            s = t
              ? a.x + a.width * this.getAttribute("x2").getNumber()
              : this.getAttribute("x2").getPixels("x"),
            u = t
              ? a.y + a.height * this.getAttribute("y2").getNumber()
              : this.getAttribute("y2").getPixels("y");
          return n === s && o === u ? null : e.createLinearGradient(n, o, s, u);
        }
      }),
      (os = class extends pi {
        constructor(e, r, t) {
          super(e, r, t),
            (this.type = "radialGradient"),
            this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
        }
        getGradient(e, r) {
          var t = this.getGradientUnits() === "objectBoundingBox",
            a = r.getBoundingBox(e);
          if (t && !a) return null;
          this.getAttribute("cx").hasValue() ||
            this.getAttribute("cx", !0).setValue("50%"),
            this.getAttribute("cy").hasValue() ||
              this.getAttribute("cy", !0).setValue("50%"),
            this.getAttribute("r").hasValue() ||
              this.getAttribute("r", !0).setValue("50%");
          var n = t
              ? a.x + a.width * this.getAttribute("cx").getNumber()
              : this.getAttribute("cx").getPixels("x"),
            o = t
              ? a.y + a.height * this.getAttribute("cy").getNumber()
              : this.getAttribute("cy").getPixels("y"),
            s = n,
            u = o;
          this.getAttribute("fx").hasValue() &&
            (s = t
              ? a.x + a.width * this.getAttribute("fx").getNumber()
              : this.getAttribute("fx").getPixels("x")),
            this.getAttribute("fy").hasValue() &&
              (u = t
                ? a.y + a.height * this.getAttribute("fy").getNumber()
                : this.getAttribute("fy").getPixels("y"));
          var l = t
              ? ((a.width + a.height) / 2) * this.getAttribute("r").getNumber()
              : this.getAttribute("r").getPixels(),
            h = this.getAttribute("fr").getPixels();
          return e.createRadialGradient(s, u, h, n, o, l);
        }
      }),
      (us = class extends B {
        constructor(e, r, t) {
          super(e, r, t), (this.type = "stop");
          var a = Math.max(
              0,
              Math.min(1, this.getAttribute("offset").getNumber()),
            ),
            n = this.getStyle("stop-opacity"),
            o = this.getStyle("stop-color", !0);
          o.getString() === "" && o.setValue("#000"),
            n.hasValue() && (o = o.addOpacity(n)),
            (this.offset = a),
            (this.color = o.getColor());
        }
      }),
      (Kr = class extends B {
        constructor(e, r, t) {
          super(e, r, t),
            (this.type = "animate"),
            (this.duration = 0),
            (this.initialValue = null),
            (this.initialUnits = ""),
            (this.removed = !1),
            (this.frozen = !1),
            e.screen.animations.push(this),
            (this.begin = this.getAttribute("begin").getMilliseconds()),
            (this.maxDuration =
              this.begin + this.getAttribute("dur").getMilliseconds()),
            (this.from = this.getAttribute("from")),
            (this.to = this.getAttribute("to")),
            (this.values = new w(e, "values", null));
          var a = this.getAttribute("values");
          a.hasValue() && this.values.setValue(a.getString().split(";"));
        }
        getProperty() {
          var e = this.getAttribute("attributeType").getString(),
            r = this.getAttribute("attributeName").getString();
          return e === "CSS"
            ? this.parent.getStyle(r, !0)
            : this.parent.getAttribute(r, !0);
        }
        calcValue() {
          var { initialUnits: e } = this,
            { progress: r, from: t, to: a } = this.getProgress(),
            n = t.getNumber() + (a.getNumber() - t.getNumber()) * r;
          return e === "%" && (n *= 100), "".concat(n).concat(e);
        }
        update(e) {
          var { parent: r } = this,
            t = this.getProperty();
          if (
            (this.initialValue ||
              ((this.initialValue = t.getString()),
              (this.initialUnits = t.getUnits())),
            this.duration > this.maxDuration)
          ) {
            var a = this.getAttribute("fill").getString("remove");
            if (
              this.getAttribute("repeatCount").getString() === "indefinite" ||
              this.getAttribute("repeatDur").getString() === "indefinite"
            )
              this.duration = 0;
            else if (a === "freeze" && !this.frozen)
              (this.frozen = !0),
                (r.animationFrozen = !0),
                (r.animationFrozenValue = t.getString());
            else if (a === "remove" && !this.removed)
              return (
                (this.removed = !0),
                t.setValue(
                  r.animationFrozen
                    ? r.animationFrozenValue
                    : this.initialValue,
                ),
                !0
              );
            return !1;
          }
          this.duration += e;
          var n = !1;
          if (this.begin < this.duration) {
            var o = this.calcValue(),
              s = this.getAttribute("type");
            if (s.hasValue()) {
              var u = s.getString();
              o = "".concat(u, "(").concat(o, ")");
            }
            t.setValue(o), (n = !0);
          }
          return n;
        }
        getProgress() {
          var { document: e, values: r } = this,
            t = {
              progress:
                (this.duration - this.begin) / (this.maxDuration - this.begin),
            };
          if (r.hasValue()) {
            var a = t.progress * (r.getValue().length - 1),
              n = Math.floor(a),
              o = Math.ceil(a);
            (t.from = new w(e, "from", parseFloat(r.getValue()[n]))),
              (t.to = new w(e, "to", parseFloat(r.getValue()[o]))),
              (t.progress = (a - n) / (o - n));
          } else (t.from = this.from), (t.to = this.to);
          return t;
        }
      }),
      (ls = class extends Kr {
        constructor() {
          super(...arguments), (this.type = "animateColor");
        }
        calcValue() {
          var { progress: e, from: r, to: t } = this.getProgress(),
            a = new li.default(r.getColor()),
            n = new li.default(t.getColor());
          if (a.ok && n.ok) {
            var o = a.r + (n.r - a.r) * e,
              s = a.g + (n.g - a.g) * e,
              u = a.b + (n.b - a.b) * e;
            return "rgb("
              .concat(Math.floor(o), ", ")
              .concat(Math.floor(s), ", ")
              .concat(Math.floor(u), ")");
          }
          return this.getAttribute("from").getColor();
        }
      }),
      (hs = class extends Kr {
        constructor() {
          super(...arguments), (this.type = "animateTransform");
        }
        calcValue() {
          var { progress: e, from: r, to: t } = this.getProgress(),
            a = ne(r.getString()),
            n = ne(t.getString()),
            o = a
              .map((s, u) => {
                var l = n[u];
                return s + (l - s) * e;
              })
              .join(" ");
          return o;
        }
      }),
      (cs = class extends B {
        constructor(e, r, t) {
          super(e, r, t),
            (this.type = "font"),
            (this.glyphs = {}),
            (this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber());
          var { definitions: a } = e,
            { children: n } = this;
          for (var o of n)
            switch (o.type) {
              case "font-face": {
                this.fontFace = o;
                var s = o.getStyle("font-family");
                s.hasValue() && (a[s.getString()] = this);
                break;
              }
              case "missing-glyph":
                this.missingGlyph = o;
                break;
              case "glyph": {
                var u = o;
                u.arabicForm
                  ? ((this.isRTL = !0),
                    (this.isArabic = !0),
                    typeof this.glyphs[u.unicode] > "u" &&
                      (this.glyphs[u.unicode] = {}),
                    (this.glyphs[u.unicode][u.arabicForm] = u))
                  : (this.glyphs[u.unicode] = u);
                break;
              }
            }
        }
        render() {}
      }),
      (fs = class extends B {
        constructor(e, r, t) {
          super(e, r, t),
            (this.type = "font-face"),
            (this.ascent = this.getAttribute("ascent").getNumber()),
            (this.descent = this.getAttribute("descent").getNumber()),
            (this.unitsPerEm = this.getAttribute("units-per-em").getNumber());
        }
      }),
      (vs = class extends j {
        constructor() {
          super(...arguments),
            (this.type = "missing-glyph"),
            (this.horizAdvX = 0);
        }
      }),
      (gs = class extends Ye {
        constructor() {
          super(...arguments), (this.type = "tref");
        }
        getText() {
          var e = this.getHrefAttribute().getDefinition();
          if (e) {
            var r = e.children[0];
            if (r) return r.getText();
          }
          return "";
        }
      }),
      (ds = class extends Ye {
        constructor(e, r, t) {
          super(e, r, t), (this.type = "a");
          var { childNodes: a } = r,
            n = a[0],
            o = a.length > 0 && Array.from(a).every((s) => s.nodeType === 3);
          (this.hasText = o), (this.text = o ? this.getTextFromNode(n) : "");
        }
        getText() {
          return this.text;
        }
        renderChildren(e) {
          if (this.hasText) {
            super.renderChildren(e);
            var { document: r, x: t, y: a } = this,
              { mouse: n } = r.screen,
              o = new w(r, "fontSize", mr.parse(r.ctx.font).fontSize);
            n.isWorking() &&
              n.checkBoundingBox(
                this,
                new se(t, a - o.getPixels("y"), t + this.measureText(e), a),
              );
          } else if (this.children.length > 0) {
            var s = new Qr(this.document, null);
            (s.children = this.children), (s.parent = this), s.render(e);
          }
        }
        onClick() {
          var { window: e } = this.document;
          e && e.open(this.getHrefAttribute().getString());
        }
        onMouseMove() {
          var e = this.document.ctx;
          e.canvas.style.cursor = "pointer";
        }
      });
    (ps = class extends Ye {
      constructor(e, r, t) {
        super(e, r, t),
          (this.type = "textPath"),
          (this.textWidth = 0),
          (this.textHeight = 0),
          (this.pathLength = -1),
          (this.glyphInfo = null),
          (this.letterSpacingCache = []),
          (this.measuresCache = new Map([["", 0]]));
        var a = this.getHrefAttribute().getDefinition();
        (this.text = this.getTextFromNode()),
          (this.dataArray = this.parsePathData(a));
      }
      getText() {
        return this.text;
      }
      path(e) {
        var { dataArray: r } = this;
        e && e.beginPath(),
          r.forEach((t) => {
            var { type: a, points: n } = t;
            switch (a) {
              case q.LINE_TO:
                e && e.lineTo(n[0], n[1]);
                break;
              case q.MOVE_TO:
                e && e.moveTo(n[0], n[1]);
                break;
              case q.CURVE_TO:
                e && e.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                break;
              case q.QUAD_TO:
                e && e.quadraticCurveTo(n[0], n[1], n[2], n[3]);
                break;
              case q.ARC: {
                var [o, s, u, l, h, f, v, c] = n,
                  g = u > l ? u : l,
                  p = u > l ? 1 : u / l,
                  y = u > l ? l / u : 1;
                e &&
                  (e.translate(o, s),
                  e.rotate(v),
                  e.scale(p, y),
                  e.arc(0, 0, g, h, h + f, !!(1 - c)),
                  e.scale(1 / p, 1 / y),
                  e.rotate(-v),
                  e.translate(-o, -s));
                break;
              }
              case q.CLOSE_PATH:
                e && e.closePath();
                break;
            }
          });
      }
      renderChildren(e) {
        this.setTextData(e), e.save();
        var r = this.parent.getStyle("text-decoration").getString(),
          t = this.getFontSize(),
          { glyphInfo: a } = this,
          n = e.fillStyle;
        r === "underline" && e.beginPath(),
          a.forEach((o, s) => {
            var { p0: u, p1: l, rotation: h, text: f } = o;
            e.save(),
              e.translate(u.x, u.y),
              e.rotate(h),
              e.fillStyle && e.fillText(f, 0, 0),
              e.strokeStyle && e.strokeText(f, 0, 0),
              e.restore(),
              r === "underline" &&
                (s === 0 && e.moveTo(u.x, u.y + t / 8),
                e.lineTo(l.x, l.y + t / 5));
          }),
          r === "underline" &&
            ((e.lineWidth = t / 20),
            (e.strokeStyle = n),
            e.stroke(),
            e.closePath()),
          e.restore();
      }
      getLetterSpacingAt() {
        var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        return this.letterSpacingCache[e] || 0;
      }
      findSegmentToFitChar(e, r, t, a, n, o, s, u, l) {
        var h = o,
          f = this.measureText(e, u);
        u === " " && r === "justify" && t < a && (f += (a - t) / n),
          l > -1 && (h += this.getLetterSpacingAt(l));
        var v = this.textHeight / 20,
          c = this.getEquidistantPointOnPath(h, v, 0),
          g = this.getEquidistantPointOnPath(h + f, v, 0),
          p = { p0: c, p1: g },
          y = c && g ? Math.atan2(g.y - c.y, g.x - c.x) : 0;
        if (s) {
          var m = Math.cos(Math.PI / 2 + y) * s,
            T = Math.cos(-y) * s;
          (p.p0 = ni(ni({}, c), {}, { x: c.x + m, y: c.y + T })),
            (p.p1 = ni(ni({}, g), {}, { x: g.x + m, y: g.y + T }));
        }
        return (h += f), { offset: h, segment: p, rotation: y };
      }
      measureText(e, r) {
        var { measuresCache: t } = this,
          a = r || this.getText();
        if (t.has(a)) return t.get(a);
        var n = this.measureTargetText(e, a);
        return t.set(a, n), n;
      }
      setTextData(e) {
        if (!this.glyphInfo) {
          var r = this.getText(),
            t = r.split(""),
            a = r.split(" ").length - 1,
            n = this.parent
              .getAttribute("dx")
              .split()
              .map((O) => O.getPixels("x")),
            o = this.parent.getAttribute("dy").getPixels("y"),
            s = this.parent.getStyle("text-anchor").getString("start"),
            u = this.getStyle("letter-spacing"),
            l = this.parent.getStyle("letter-spacing"),
            h = 0;
          !u.hasValue() || u.getValue() === "inherit"
            ? (h = l.getPixels())
            : u.hasValue() &&
              u.getValue() !== "initial" &&
              u.getValue() !== "unset" &&
              (h = u.getPixels());
          var f = [],
            v = r.length;
          this.letterSpacingCache = f;
          for (var c = 0; c < v; c++) f.push(typeof n[c] < "u" ? n[c] : h);
          var g = f.reduce((O, E, C) => (C === 0 ? 0 : O + E || 0), 0),
            p = this.measureText(e),
            y = Math.max(p + g, 0);
          (this.textWidth = p),
            (this.textHeight = this.getFontSize()),
            (this.glyphInfo = []);
          var m = this.getPathLength(),
            T = this.getStyle("startOffset").getNumber(0) * m,
            x = 0;
          (s === "middle" || s === "center") && (x = -y / 2),
            (s === "end" || s === "right") && (x = -y),
            (x += T),
            t.forEach((O, E) => {
              var {
                offset: C,
                segment: S,
                rotation: A,
              } = this.findSegmentToFitChar(e, s, y, m, a, x, o, O, E);
              (x = C),
                !(!S.p0 || !S.p1) &&
                  this.glyphInfo.push({
                    text: t[E],
                    p0: S.p0,
                    p1: S.p1,
                    rotation: A,
                  });
            });
        }
      }
      parsePathData(e) {
        if (((this.pathLength = -1), !e)) return [];
        var r = [],
          { pathParser: t } = e;
        for (t.reset(); !t.isEnd(); ) {
          var { current: a } = t,
            n = a ? a.x : 0,
            o = a ? a.y : 0,
            s = t.next(),
            u = s.type,
            l = [];
          switch (s.type) {
            case q.MOVE_TO:
              this.pathM(t, l);
              break;
            case q.LINE_TO:
              u = this.pathL(t, l);
              break;
            case q.HORIZ_LINE_TO:
              u = this.pathH(t, l);
              break;
            case q.VERT_LINE_TO:
              u = this.pathV(t, l);
              break;
            case q.CURVE_TO:
              this.pathC(t, l);
              break;
            case q.SMOOTH_CURVE_TO:
              u = this.pathS(t, l);
              break;
            case q.QUAD_TO:
              this.pathQ(t, l);
              break;
            case q.SMOOTH_QUAD_TO:
              u = this.pathT(t, l);
              break;
            case q.ARC:
              l = this.pathA(t);
              break;
            case q.CLOSE_PATH:
              j.pathZ(t);
              break;
          }
          s.type !== q.CLOSE_PATH
            ? r.push({
                type: u,
                points: l,
                start: { x: n, y: o },
                pathLength: this.calcLength(n, o, u, l),
              })
            : r.push({ type: q.CLOSE_PATH, points: [], pathLength: 0 });
        }
        return r;
      }
      pathM(e, r) {
        var { x: t, y: a } = j.pathM(e).point;
        r.push(t, a);
      }
      pathL(e, r) {
        var { x: t, y: a } = j.pathL(e).point;
        return r.push(t, a), q.LINE_TO;
      }
      pathH(e, r) {
        var { x: t, y: a } = j.pathH(e).point;
        return r.push(t, a), q.LINE_TO;
      }
      pathV(e, r) {
        var { x: t, y: a } = j.pathV(e).point;
        return r.push(t, a), q.LINE_TO;
      }
      pathC(e, r) {
        var { point: t, controlPoint: a, currentPoint: n } = j.pathC(e);
        r.push(t.x, t.y, a.x, a.y, n.x, n.y);
      }
      pathS(e, r) {
        var { point: t, controlPoint: a, currentPoint: n } = j.pathS(e);
        return r.push(t.x, t.y, a.x, a.y, n.x, n.y), q.CURVE_TO;
      }
      pathQ(e, r) {
        var { controlPoint: t, currentPoint: a } = j.pathQ(e);
        r.push(t.x, t.y, a.x, a.y);
      }
      pathT(e, r) {
        var { controlPoint: t, currentPoint: a } = j.pathT(e);
        return r.push(t.x, t.y, a.x, a.y), q.QUAD_TO;
      }
      pathA(e) {
        var {
          rX: r,
          rY: t,
          sweepFlag: a,
          xAxisRotation: n,
          centp: o,
          a1: s,
          ad: u,
        } = j.pathA(e);
        return (
          a === 0 && u > 0 && (u -= 2 * Math.PI),
          a === 1 && u < 0 && (u += 2 * Math.PI),
          [o.x, o.y, r, t, s, u, n, a]
        );
      }
      calcLength(e, r, t, a) {
        var n = 0,
          o = null,
          s = null,
          u = 0;
        switch (t) {
          case q.LINE_TO:
            return this.getLineLength(e, r, a[0], a[1]);
          case q.CURVE_TO:
            for (
              n = 0,
                o = this.getPointOnCubicBezier(
                  0,
                  e,
                  r,
                  a[0],
                  a[1],
                  a[2],
                  a[3],
                  a[4],
                  a[5],
                ),
                u = 0.01;
              u <= 1;
              u += 0.01
            )
              (s = this.getPointOnCubicBezier(
                u,
                e,
                r,
                a[0],
                a[1],
                a[2],
                a[3],
                a[4],
                a[5],
              )),
                (n += this.getLineLength(o.x, o.y, s.x, s.y)),
                (o = s);
            return n;
          case q.QUAD_TO:
            for (
              n = 0,
                o = this.getPointOnQuadraticBezier(
                  0,
                  e,
                  r,
                  a[0],
                  a[1],
                  a[2],
                  a[3],
                ),
                u = 0.01;
              u <= 1;
              u += 0.01
            )
              (s = this.getPointOnQuadraticBezier(
                u,
                e,
                r,
                a[0],
                a[1],
                a[2],
                a[3],
              )),
                (n += this.getLineLength(o.x, o.y, s.x, s.y)),
                (o = s);
            return n;
          case q.ARC: {
            n = 0;
            var l = a[4],
              h = a[5],
              f = a[4] + h,
              v = Math.PI / 180;
            if (
              (Math.abs(l - f) < v && (v = Math.abs(l - f)),
              (o = this.getPointOnEllipticalArc(a[0], a[1], a[2], a[3], l, 0)),
              h < 0)
            )
              for (u = l - v; u > f; u -= v)
                (s = this.getPointOnEllipticalArc(
                  a[0],
                  a[1],
                  a[2],
                  a[3],
                  u,
                  0,
                )),
                  (n += this.getLineLength(o.x, o.y, s.x, s.y)),
                  (o = s);
            else
              for (u = l + v; u < f; u += v)
                (s = this.getPointOnEllipticalArc(
                  a[0],
                  a[1],
                  a[2],
                  a[3],
                  u,
                  0,
                )),
                  (n += this.getLineLength(o.x, o.y, s.x, s.y)),
                  (o = s);
            return (
              (s = this.getPointOnEllipticalArc(a[0], a[1], a[2], a[3], f, 0)),
              (n += this.getLineLength(o.x, o.y, s.x, s.y)),
              n
            );
          }
        }
        return 0;
      }
      getPointOnLine(e, r, t, a, n) {
        var o =
            arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : r,
          s =
            arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : t,
          u = (n - t) / (a - r + yr),
          l = Math.sqrt((e * e) / (1 + u * u));
        a < r && (l *= -1);
        var h = u * l,
          f = null;
        if (a === r) f = { x: o, y: s + h };
        else if ((s - t) / (o - r + yr) === u) f = { x: o + l, y: s + h };
        else {
          var v = 0,
            c = 0,
            g = this.getLineLength(r, t, a, n);
          if (g < yr) return null;
          var p = (o - r) * (a - r) + (s - t) * (n - t);
          (p /= g * g), (v = r + p * (a - r)), (c = t + p * (n - t));
          var y = this.getLineLength(o, s, v, c),
            m = Math.sqrt(e * e - y * y);
          (l = Math.sqrt((m * m) / (1 + u * u))),
            a < r && (l *= -1),
            (h = u * l),
            (f = { x: v + l, y: c + h });
        }
        return f;
      }
      getPointOnPath(e) {
        var r = this.getPathLength(),
          t = 0,
          a = null;
        if (e < -5e-5 || e - 5e-5 > r) return null;
        var { dataArray: n } = this;
        for (var o of n) {
          if (o && (o.pathLength < 5e-5 || t + o.pathLength + 5e-5 < e)) {
            t += o.pathLength;
            continue;
          }
          var s = e - t,
            u = 0;
          switch (o.type) {
            case q.LINE_TO:
              a = this.getPointOnLine(
                s,
                o.start.x,
                o.start.y,
                o.points[0],
                o.points[1],
                o.start.x,
                o.start.y,
              );
              break;
            case q.ARC: {
              var l = o.points[4],
                h = o.points[5],
                f = o.points[4] + h;
              if (
                ((u = l + (s / o.pathLength) * h),
                (h < 0 && u < f) || (h >= 0 && u > f))
              )
                break;
              a = this.getPointOnEllipticalArc(
                o.points[0],
                o.points[1],
                o.points[2],
                o.points[3],
                u,
                o.points[6],
              );
              break;
            }
            case q.CURVE_TO:
              (u = s / o.pathLength),
                u > 1 && (u = 1),
                (a = this.getPointOnCubicBezier(
                  u,
                  o.start.x,
                  o.start.y,
                  o.points[0],
                  o.points[1],
                  o.points[2],
                  o.points[3],
                  o.points[4],
                  o.points[5],
                ));
              break;
            case q.QUAD_TO:
              (u = s / o.pathLength),
                u > 1 && (u = 1),
                (a = this.getPointOnQuadraticBezier(
                  u,
                  o.start.x,
                  o.start.y,
                  o.points[0],
                  o.points[1],
                  o.points[2],
                  o.points[3],
                ));
              break;
          }
          if (a) return a;
          break;
        }
        return null;
      }
      getLineLength(e, r, t, a) {
        return Math.sqrt((t - e) * (t - e) + (a - r) * (a - r));
      }
      getPathLength() {
        return (
          this.pathLength === -1 &&
            (this.pathLength = this.dataArray.reduce(
              (e, r) => (r.pathLength > 0 ? e + r.pathLength : e),
              0,
            )),
          this.pathLength
        );
      }
      getPointOnCubicBezier(e, r, t, a, n, o, s, u, l) {
        var h = u * og(e) + o * ug(e) + a * lg(e) + r * hg(e),
          f = l * og(e) + s * ug(e) + n * lg(e) + t * hg(e);
        return { x: h, y: f };
      }
      getPointOnQuadraticBezier(e, r, t, a, n, o, s) {
        var u = o * cg(e) + a * fg(e) + r * vg(e),
          l = s * cg(e) + n * fg(e) + t * vg(e);
        return { x: u, y: l };
      }
      getPointOnEllipticalArc(e, r, t, a, n, o) {
        var s = Math.cos(o),
          u = Math.sin(o),
          l = { x: t * Math.cos(n), y: a * Math.sin(n) };
        return { x: e + (l.x * s - l.y * u), y: r + (l.x * u + l.y * s) };
      }
      buildEquidistantCache(e, r) {
        var t = this.getPathLength(),
          a = r || 0.25,
          n = e || t / 100;
        if (
          !this.equidistantCache ||
          this.equidistantCache.step !== n ||
          this.equidistantCache.precision !== a
        ) {
          this.equidistantCache = { step: n, precision: a, points: [] };
          for (var o = 0, s = 0; s <= t; s += a) {
            var u = this.getPointOnPath(s),
              l = this.getPointOnPath(s + a);
            !u ||
              !l ||
              ((o += this.getLineLength(u.x, u.y, l.x, l.y)),
              o >= n &&
                (this.equidistantCache.points.push({
                  x: u.x,
                  y: u.y,
                  distance: s,
                }),
                (o -= n)));
          }
        }
      }
      getEquidistantPointOnPath(e, r, t) {
        if (
          (this.buildEquidistantCache(r, t),
          e < 0 || e - this.getPathLength() > 5e-5)
        )
          return null;
        var a = Math.round(
          (e / this.getPathLength()) *
            (this.equidistantCache.points.length - 1),
        );
        return this.equidistantCache.points[a] || null;
      }
    }),
      (mO =
        /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i),
      (ys = class extends Ce {
        constructor(e, r, t) {
          super(e, r, t), (this.type = "image"), (this.loaded = !1);
          var a = this.getHrefAttribute().getString();
          if (a) {
            var n = a.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(a);
            e.images.push(this),
              n ? this.loadSvg(a) : this.loadImage(a),
              (this.isSvg = n);
          }
        }
        loadImage(e) {
          var r = this;
          return xe(function* () {
            try {
              var t = yield r.document.createImage(e);
              r.image = t;
            } catch (a) {
              console.error('Error while loading image "'.concat(e, '":'), a);
            }
            r.loaded = !0;
          })();
        }
        loadSvg(e) {
          var r = this;
          return xe(function* () {
            var t = mO.exec(e);
            if (t) {
              var a = t[5];
              t[4] === "base64"
                ? (r.image = atob(a))
                : (r.image = decodeURIComponent(a));
            } else
              try {
                var n = yield r.document.fetch(e),
                  o = yield n.text();
                r.image = o;
              } catch (s) {
                console.error('Error while loading image "'.concat(e, '":'), s);
              }
            r.loaded = !0;
          })();
        }
        renderChildren(e) {
          var { document: r, image: t, loaded: a } = this,
            n = this.getAttribute("x").getPixels("x"),
            o = this.getAttribute("y").getPixels("y"),
            s = this.getStyle("width").getPixels("x"),
            u = this.getStyle("height").getPixels("y");
          if (!(!a || !t || !s || !u)) {
            if ((e.save(), e.translate(n, o), this.isSvg)) {
              var l = r.canvg.forkString(e, this.image, {
                ignoreMouse: !0,
                ignoreAnimation: !0,
                ignoreDimensions: !0,
                ignoreClear: !0,
                offsetX: 0,
                offsetY: 0,
                scaleWidth: s,
                scaleHeight: u,
              });
              (l.document.documentElement.parent = this), l.render();
            } else {
              var h = this.image;
              r.setViewBox({
                ctx: e,
                aspectRatio: this.getAttribute(
                  "preserveAspectRatio",
                ).getString(),
                width: s,
                desiredWidth: h.width,
                height: u,
                desiredHeight: h.height,
              }),
                this.loaded &&
                  (typeof h.complete > "u" || h.complete) &&
                  e.drawImage(h, 0, 0);
            }
            e.restore();
          }
        }
        getBoundingBox() {
          var e = this.getAttribute("x").getPixels("x"),
            r = this.getAttribute("y").getPixels("y"),
            t = this.getStyle("width").getPixels("x"),
            a = this.getStyle("height").getPixels("y");
          return new se(e, r, e + t, r + a);
        }
      }),
      (ms = class extends Ce {
        constructor() {
          super(...arguments), (this.type = "symbol");
        }
        render(e) {}
      }),
      (bs = class {
        constructor(e) {
          (this.document = e), (this.loaded = !1), e.fonts.push(this);
        }
        load(e, r) {
          var t = this;
          return xe(function* () {
            try {
              var { document: a } = t,
                n = yield a.canvg.parser.load(r),
                o = n.getElementsByTagName("font");
              Array.from(o).forEach((s) => {
                var u = a.createElement(s);
                a.definitions[e] = u;
              });
            } catch (s) {
              console.error('Error while loading font "'.concat(r, '":'), s);
            }
            t.loaded = !0;
          })();
        }
      }),
      (bO = (() => {
        class i extends B {
          constructor(r, t, a) {
            super(r, t, a), (this.type = "style");
            var n = br(
                Array.from(t.childNodes)
                  .map((s) => s.textContent)
                  .join("")
                  .replace(
                    /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,
                    "",
                  )
                  .replace(/@import.*;/g, ""),
              ),
              o = n.split("}");
            o.forEach((s) => {
              var u = s.trim();
              if (u) {
                var l = u.split("{"),
                  h = l[0].split(","),
                  f = l[1].split(";");
                h.forEach((v) => {
                  var c = v.trim();
                  if (c) {
                    var g = r.styles[c] || {};
                    if (
                      (f.forEach((m) => {
                        var T = m.indexOf(":"),
                          x = m.substr(0, T).trim(),
                          O = m.substr(T + 1, m.length - T).trim();
                        x && O && (g[x] = new w(r, x, O));
                      }),
                      (r.styles[c] = g),
                      (r.stylesSpecificity[c] = lO(c)),
                      c === "@font-face")
                    ) {
                      var p = g["font-family"].getString().replace(/"|'/g, ""),
                        y = g.src.getString().split(",");
                      y.forEach((m) => {
                        if (m.indexOf('format("svg")') > 0) {
                          var T = ag(m);
                          T && new bs(r).load(p, T);
                        }
                      });
                    }
                  }
                });
              }
            });
          }
        }
        return (i.parseExternalUrl = ag), i;
      })()),
      (xs = class extends Ce {
        constructor() {
          super(...arguments), (this.type = "use");
        }
        setContext(e) {
          super.setContext(e);
          var r = this.getAttribute("x"),
            t = this.getAttribute("y");
          r.hasValue() && e.translate(r.getPixels("x"), 0),
            t.hasValue() && e.translate(0, t.getPixels("y"));
        }
        path(e) {
          var { element: r } = this;
          r && r.path(e);
        }
        renderChildren(e) {
          var { document: r, element: t } = this;
          if (t) {
            var a = t;
            if (
              (t.type === "symbol" &&
                ((a = new Xe(r, null)),
                (a.attributes.viewBox = new w(
                  r,
                  "viewBox",
                  t.getAttribute("viewBox").getString(),
                )),
                (a.attributes.preserveAspectRatio = new w(
                  r,
                  "preserveAspectRatio",
                  t.getAttribute("preserveAspectRatio").getString(),
                )),
                (a.attributes.overflow = new w(
                  r,
                  "overflow",
                  t.getAttribute("overflow").getString(),
                )),
                (a.children = t.children),
                (t.styles.opacity = new w(
                  r,
                  "opacity",
                  this.calculateOpacity(),
                ))),
              a.type === "svg")
            ) {
              var n = this.getStyle("width", !1, !0),
                o = this.getStyle("height", !1, !0);
              n.hasValue() &&
                (a.attributes.width = new w(r, "width", n.getString())),
                o.hasValue() &&
                  (a.attributes.height = new w(r, "height", o.getString()));
            }
            var s = a.parent;
            (a.parent = this), a.render(e), (a.parent = s);
          }
        }
        getBoundingBox(e) {
          var { element: r } = this;
          return r ? r.getBoundingBox(e) : null;
        }
        elementTransform() {
          var { document: e, element: r } = this;
          return Ps.fromElement(e, r);
        }
        get element() {
          return (
            this.cachedElement ||
              (this.cachedElement = this.getHrefAttribute().getDefinition()),
            this.cachedElement
          );
        }
      });
    (yi = class extends B {
      constructor(e, r, t) {
        super(e, r, t), (this.type = "feColorMatrix");
        var a = ne(this.getAttribute("values").getString());
        switch (this.getAttribute("type").getString("matrix")) {
          case "saturate": {
            var n = a[0];
            a = [
              0.213 + 0.787 * n,
              0.715 - 0.715 * n,
              0.072 - 0.072 * n,
              0,
              0,
              0.213 - 0.213 * n,
              0.715 + 0.285 * n,
              0.072 - 0.072 * n,
              0,
              0,
              0.213 - 0.213 * n,
              0.715 - 0.715 * n,
              0.072 + 0.928 * n,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1,
            ];
            break;
          }
          case "hueRotate": {
            var o = (a[0] * Math.PI) / 180;
            a = [
              we(o, 0.213, 0.787, -0.213),
              we(o, 0.715, -0.715, -0.715),
              we(o, 0.072, -0.072, 0.928),
              0,
              0,
              we(o, 0.213, -0.213, 0.143),
              we(o, 0.715, 0.285, 0.14),
              we(o, 0.072, -0.072, -0.283),
              0,
              0,
              we(o, 0.213, -0.213, -0.787),
              we(o, 0.715, -0.715, 0.715),
              we(o, 0.072, 0.928, 0.072),
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1,
            ];
            break;
          }
          case "luminanceToAlpha":
            a = [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154,
              0.0721, 0, 0, 0, 0, 0, 0, 1,
            ];
            break;
        }
        (this.matrix = a),
          (this.includeOpacity =
            this.getAttribute("includeOpacity").hasValue());
      }
      apply(e, r, t, a, n) {
        for (
          var { includeOpacity: o, matrix: s } = this,
            u = e.getImageData(0, 0, a, n),
            l = 0;
          l < n;
          l++
        )
          for (var h = 0; h < a; h++) {
            var f = si(u.data, h, l, a, n, 0),
              v = si(u.data, h, l, a, n, 1),
              c = si(u.data, h, l, a, n, 2),
              g = si(u.data, h, l, a, n, 3),
              p =
                F(s, 0, f) + F(s, 1, v) + F(s, 2, c) + F(s, 3, g) + F(s, 4, 1),
              y =
                F(s, 5, f) + F(s, 6, v) + F(s, 7, c) + F(s, 8, g) + F(s, 9, 1),
              m =
                F(s, 10, f) +
                F(s, 11, v) +
                F(s, 12, c) +
                F(s, 13, g) +
                F(s, 14, 1),
              T =
                F(s, 15, f) +
                F(s, 16, v) +
                F(s, 17, c) +
                F(s, 18, g) +
                F(s, 19, 1);
            o && ((p = 0), (y = 0), (m = 0), (T *= g / 255)),
              oi(u.data, h, l, a, n, 0, p),
              oi(u.data, h, l, a, n, 1, y),
              oi(u.data, h, l, a, n, 2, m),
              oi(u.data, h, l, a, n, 3, T);
          }
        e.clearRect(0, 0, a, n), e.putImageData(u, 0, 0);
      }
    }),
      (xO = (() => {
        class i extends B {
          constructor() {
            super(...arguments), (this.type = "mask");
          }
          apply(r, t) {
            var { document: a } = this,
              n = this.getAttribute("x").getPixels("x"),
              o = this.getAttribute("y").getPixels("y"),
              s = this.getStyle("width").getPixels("x"),
              u = this.getStyle("height").getPixels("y");
            if (!s && !u) {
              var l = new se();
              this.children.forEach((p) => {
                l.addBoundingBox(p.getBoundingBox(r));
              }),
                (n = Math.floor(l.x1)),
                (o = Math.floor(l.y1)),
                (s = Math.floor(l.width)),
                (u = Math.floor(l.height));
            }
            var h = this.removeStyles(t, i.ignoreStyles),
              f = a.createCanvas(n + s, o + u),
              v = f.getContext("2d");
            a.screen.setDefaults(v),
              this.renderChildren(v),
              new yi(a, {
                nodeType: 1,
                childNodes: [],
                attributes: [
                  { nodeName: "type", value: "luminanceToAlpha" },
                  { nodeName: "includeOpacity", value: "true" },
                ],
              }).apply(v, 0, 0, n + s, o + u);
            var c = a.createCanvas(n + s, o + u),
              g = c.getContext("2d");
            a.screen.setDefaults(g),
              t.render(g),
              (g.globalCompositeOperation = "destination-in"),
              (g.fillStyle = v.createPattern(f, "no-repeat")),
              g.fillRect(0, 0, n + s, o + u),
              (r.fillStyle = g.createPattern(c, "no-repeat")),
              r.fillRect(0, 0, n + s, o + u),
              this.restoreStyles(t, h);
          }
          render(r) {}
        }
        return (i.ignoreStyles = ["mask", "transform", "clip-path"]), i;
      })()),
      (yg = () => {}),
      (Ts = class extends B {
        constructor() {
          super(...arguments), (this.type = "clipPath");
        }
        apply(e) {
          var { document: r } = this,
            t = Reflect.getPrototypeOf(e),
            { beginPath: a, closePath: n } = e;
          t && ((t.beginPath = yg), (t.closePath = yg)),
            Reflect.apply(a, e, []),
            this.children.forEach((o) => {
              if (!(typeof o.path > "u")) {
                var s =
                  typeof o.elementTransform < "u" ? o.elementTransform() : null;
                s || (s = Ps.fromElement(r, o)),
                  s && s.apply(e),
                  o.path(e),
                  t && (t.closePath = n),
                  s && s.unapply(e);
              }
            }),
            Reflect.apply(n, e, []),
            e.clip(),
            t && ((t.beginPath = a), (t.closePath = n));
        }
        render(e) {}
      }),
      (TO = (() => {
        class i extends B {
          constructor() {
            super(...arguments), (this.type = "filter");
          }
          apply(r, t) {
            var { document: a, children: n } = this,
              o = t.getBoundingBox(r);
            if (o) {
              var s = 0,
                u = 0;
              n.forEach((T) => {
                var x = T.extraFilterDistance || 0;
                (s = Math.max(s, x)), (u = Math.max(u, x));
              });
              var l = Math.floor(o.width),
                h = Math.floor(o.height),
                f = l + 2 * s,
                v = h + 2 * u;
              if (!(f < 1 || v < 1)) {
                var c = Math.floor(o.x),
                  g = Math.floor(o.y),
                  p = this.removeStyles(t, i.ignoreStyles),
                  y = a.createCanvas(f, v),
                  m = y.getContext("2d");
                a.screen.setDefaults(m),
                  m.translate(-c + s, -g + u),
                  t.render(m),
                  n.forEach((T) => {
                    typeof T.apply == "function" && T.apply(m, 0, 0, f, v);
                  }),
                  r.drawImage(y, 0, 0, f, v, c - s, g - u, f, v),
                  this.restoreStyles(t, p);
              }
            }
          }
          render(r) {}
        }
        return (i.ignoreStyles = ["filter", "transform", "clip-path"]), i;
      })()),
      (Os = class extends B {
        constructor(e, r, t) {
          super(e, r, t),
            (this.type = "feDropShadow"),
            this.addStylesFromStyleDefinition();
        }
        apply(e, r, t, a, n) {}
      }),
      (Ss = class extends B {
        constructor() {
          super(...arguments), (this.type = "feMorphology");
        }
        apply(e, r, t, a, n) {}
      }),
      (Es = class extends B {
        constructor() {
          super(...arguments), (this.type = "feComposite");
        }
        apply(e, r, t, a, n) {}
      }),
      (ws = class extends B {
        constructor(e, r, t) {
          super(e, r, t),
            (this.type = "feGaussianBlur"),
            (this.blurRadius = Math.floor(
              this.getAttribute("stdDeviation").getNumber(),
            )),
            (this.extraFilterDistance = this.blurRadius);
        }
        apply(e, r, t, a, n) {
          var { document: o, blurRadius: s } = this,
            u = o.window ? o.window.document.body : null,
            l = e.canvas;
          (l.id = o.getUniqueId()),
            u && ((l.style.display = "none"), u.appendChild(l)),
            tg(l, r, t, a, n, s),
            u && u.removeChild(l);
        }
      }),
      (Cs = class extends B {
        constructor() {
          super(...arguments), (this.type = "title");
        }
      }),
      (qs = class extends B {
        constructor() {
          super(...arguments), (this.type = "desc");
        }
      }),
      (OO = {
        svg: Xe,
        rect: gi,
        circle: Jn,
        ellipse: es,
        line: rs,
        polyline: di,
        polygon: ts,
        path: j,
        pattern: is,
        marker: as,
        defs: ns,
        linearGradient: ss,
        radialGradient: os,
        stop: us,
        animate: Kr,
        animateColor: ls,
        animateTransform: hs,
        font: cs,
        "font-face": fs,
        "missing-glyph": vs,
        glyph: fi,
        text: Ye,
        tspan: vi,
        tref: gs,
        a: ds,
        textPath: ps,
        image: ys,
        g: Qr,
        symbol: ms,
        style: bO,
        use: xs,
        mask: xO,
        clipPath: Ts,
        filter: TO,
        feDropShadow: Os,
        feMorphology: Ss,
        feComposite: Es,
        feColorMatrix: yi,
        feGaussianBlur: ws,
        title: Cs,
        desc: qs,
      });
    CO = (() => {
      class i {
        constructor(r) {
          var {
            rootEmSize: t = 12,
            emSize: a = 12,
            createCanvas: n = i.createCanvas,
            createImage: o = i.createImage,
            anonymousCrossOrigin: s,
          } = arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : {};
          (this.canvg = r),
            (this.definitions = {}),
            (this.styles = {}),
            (this.stylesSpecificity = {}),
            (this.images = []),
            (this.fonts = []),
            (this.emSizeStack = []),
            (this.uniqueId = 0),
            (this.screen = r.screen),
            (this.rootEmSize = t),
            (this.emSize = a),
            (this.createCanvas = n),
            (this.createImage = this.bindCreateImage(o, s)),
            this.screen.wait(this.isImagesLoaded.bind(this)),
            this.screen.wait(this.isFontsLoaded.bind(this));
        }
        bindCreateImage(r, t) {
          return typeof t == "boolean"
            ? (a, n) => r(a, typeof n == "boolean" ? n : t)
            : r;
        }
        get window() {
          return this.screen.window;
        }
        get fetch() {
          return this.screen.fetch;
        }
        get ctx() {
          return this.screen.ctx;
        }
        get emSize() {
          var { emSizeStack: r } = this;
          return r[r.length - 1];
        }
        set emSize(r) {
          var { emSizeStack: t } = this;
          t.push(r);
        }
        popEmSize() {
          var { emSizeStack: r } = this;
          r.pop();
        }
        getUniqueId() {
          return "canvg".concat(++this.uniqueId);
        }
        isImagesLoaded() {
          return this.images.every((r) => r.loaded);
        }
        isFontsLoaded() {
          return this.fonts.every((r) => r.loaded);
        }
        createDocumentElement(r) {
          var t = this.createElement(r.documentElement);
          return (
            (t.root = !0),
            t.addStylesFromStyleDefinition(),
            (this.documentElement = t),
            t
          );
        }
        createElement(r) {
          var t = r.nodeName.replace(/^[^:]+:/, ""),
            a = i.elementTypes[t];
          return typeof a < "u" ? new a(this, r) : new Kn(this, r);
        }
        createTextNode(r) {
          return new Zn(this, r);
        }
        setViewBox(r) {
          this.screen.setViewBox(SO({ document: this }, r));
        }
      }
      return (
        (i.createCanvas = EO), (i.createImage = wO), (i.elementTypes = OO), i
      );
    })();
    xg = class i {
      constructor(e, r) {
        var t =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        (this.parser = new Wr(t)),
          (this.screen = new Tg(e, t)),
          (this.options = t);
        var a = new CO(this, t),
          n = a.createDocumentElement(r);
        (this.document = a), (this.documentElement = n);
      }
      static from(e, r) {
        var t = arguments;
        return xe(function* () {
          var a = t.length > 2 && t[2] !== void 0 ? t[2] : {},
            n = new Wr(a),
            o = yield n.parse(r);
          return new i(e, o, a);
        })();
      }
      static fromString(e, r) {
        var t =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          a = new Wr(t),
          n = a.parseFromString(r);
        return new i(e, n, t);
      }
      fork(e, r) {
        var t =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return i.from(e, r, Ge(Ge({}, this.options), t));
      }
      forkString(e, r) {
        var t =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return i.fromString(e, r, Ge(Ge({}, this.options), t));
      }
      ready() {
        return this.screen.ready();
      }
      isReady() {
        return this.screen.isReady();
      }
      render() {
        var e = arguments,
          r = this;
        return xe(function* () {
          var t = e.length > 0 && e[0] !== void 0 ? e[0] : {};
          r.start(
            Ge({ enableRedraw: !0, ignoreAnimation: !0, ignoreMouse: !0 }, t),
          ),
            yield r.ready(),
            r.stop();
        })();
      }
      start() {
        var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          { documentElement: r, screen: t, options: a } = this;
        t.start(r, Ge(Ge({ enableRedraw: !0 }, a), e));
      }
      stop() {
        this.screen.stop();
      }
      resize(e) {
        var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e,
          t =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        this.documentElement.resize(e, r, t);
      }
    };
  });
qO();
export {
  ds as AElement,
  ls as AnimateColorElement,
  Kr as AnimateElement,
  hs as AnimateTransformElement,
  se as BoundingBox,
  og as CB1,
  ug as CB2,
  lg as CB3,
  hg as CB4,
  xg as Canvg,
  Jn as CircleElement,
  Ts as ClipPathElement,
  ns as DefsElement,
  qs as DescElement,
  CO as Document,
  B as Element,
  es as EllipseElement,
  yi as FeColorMatrixElement,
  Es as FeCompositeElement,
  Os as FeDropShadowElement,
  ws as FeGaussianBlurElement,
  Ss as FeMorphologyElement,
  TO as FilterElement,
  mr as Font,
  cs as FontElement,
  fs as FontFaceElement,
  Qr as GElement,
  fi as GlyphElement,
  pi as GradientElement,
  ys as ImageElement,
  rs as LineElement,
  ss as LinearGradientElement,
  as as MarkerElement,
  xO as MaskElement,
  hi as Matrix,
  vs as MissingGlyphElement,
  Hn as Mouse,
  yr as PSEUDO_ZERO,
  Wr as Parser,
  j as PathElement,
  q as PathParser,
  is as PatternElement,
  $ as Point,
  ts as PolygonElement,
  di as PolylineElement,
  w as Property,
  cg as QB1,
  fg as QB2,
  vg as QB3,
  os as RadialGradientElement,
  gi as RectElement,
  Ce as RenderedElement,
  Yn as Rotate,
  Xe as SVGElement,
  bs as SVGFontLoader,
  Xn as Scale,
  Tg as Screen,
  ci as Skew,
  Wn as SkewX,
  Qn as SkewY,
  us as StopElement,
  bO as StyleElement,
  ms as SymbolElement,
  gs as TRefElement,
  vi as TSpanElement,
  Ye as TextElement,
  ps as TextPathElement,
  Cs as TitleElement,
  Ps as Transform,
  Gn as Translate,
  Kn as UnknownElement,
  xs as UseElement,
  $n as ViewPort,
  br as compressSpaces,
  xg as default,
  lO as getSelectorSpecificity,
  eO as normalizeAttributeName,
  rO as normalizeColor,
  ag as parseExternalUrl,
  OC as presets,
  ne as toNumbers,
  KT as trimLeft,
  ZT as trimRight,
  ng as vectorMagnitude,
  sg as vectorsAngle,
  zn as vectorsRatio,
};
