var k = Object.create;
var e = Object.defineProperty,
  l = Object.defineProperties,
  m = Object.getOwnPropertyDescriptor,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertyNames,
  g = Object.getOwnPropertySymbols,
  p = Object.getPrototypeOf,
  i = Object.prototype.hasOwnProperty,
  q = Object.prototype.propertyIsEnumerable;
var h = (b, a, c) =>
    a in b
      ? e(b, a, { enumerable: !0, configurable: !0, writable: !0, value: c })
      : (b[a] = c),
  r = (b, a) => {
    for (var c in (a ||= {})) i.call(a, c) && h(b, c, a[c]);
    if (g) for (var c of g(a)) q.call(a, c) && h(b, c, a[c]);
    return b;
  },
  s = (b, a) => l(b, n(a));
var t = (b, a) => () => (b && (a = b((b = 0))), a);
var u = (b, a) => () => (a || b((a = { exports: {} }).exports, a), a.exports),
  v = (b, a) => {
    for (var c in a) e(b, c, { get: a[c], enumerable: !0 });
  },
  j = (b, a, c, f) => {
    if ((a && typeof a == "object") || typeof a == "function")
      for (let d of o(a))
        !i.call(b, d) &&
          d !== c &&
          e(b, d, {
            get: () => a[d],
            enumerable: !(f = m(a, d)) || f.enumerable,
          });
    return b;
  };
var w = (b, a, c) => (
    (c = b != null ? k(p(b)) : {}),
    j(
      a || !b || !b.__esModule
        ? e(c, "default", { value: b, enumerable: !0 })
        : c,
      b,
    )
  ),
  x = (b) => j(e({}, "__esModule", { value: !0 }), b);
export { r as a, s as b, t as c, u as d, v as e, w as f, x as g };
