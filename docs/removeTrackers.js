!(function (a, b) {
  if ("function" == typeof define && define.amd) define([], b);
  else if ("undefined" != typeof exports) b();
  else {
    var c = { exports: {} };
    b(), (a.removeTrackers = c.exports);
  }
})(this, function () {
  "use strict";
  function a(a) {
    var b;
    return function (c, d) {
      return null !== (b = d.get(a)) && void 0 !== b ? b : "";
    };
  }
  var a,
    c = new Map([
      ["click.linksynergy.com", a("murl")],
      ["lenovo.evyy.net", a("u")],
      ["www.anrdoezrs.net", a("url")],
      ["go.redirectingat.com", a("url")],
      ["www.tkqlhce.com", a("url")],
      ["www.jdoqocy.com", a("url")],
      ["www.kqzyfj.com", a("url")],
      ["staplescanada.4u8mqw.net", a("u")],
      ["www.dpbolvw.net", a("url")],
      ["www.avantlink.com", a("url")],
      ["s.click.aliexpress.com", a("dl_target_url")],
      ["www.awin1.com", a("p")],
      ["www.gopjn.com", a("url")],
      ["the-home-depot-ca.pxf.io", a("u")],
    ]);
  (
    (function (a) {
      if (Array.isArray(a)) {
        for (var b = 0, c = new Array(a.length); b < a.length; b++) c[b] = a[b];
        return c;
      }
    })((a = document.getElementsByTagName("a"))) ||
    (function (a) {
      if (Symbol.iterator in Object(a) || "[object Arguments]" === Object.prototype.toString.call(a))
        return Array.from(a);
    })(a) ||
    (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    })()
  ).forEach(function (a) {
    try {
      var b = new URL(a.href),
        d = c.get(b.host);
      if (d) {
        var e = d(b, b.searchParams);
        e && (a.href = e);
      }
    } catch (f) {}
  });
  try {
    var d = new URL(window.location.href);
    if (c.has(d.host)) {
      var e = c.get(d.host);
      if (e) {
        var f = e(d, d.searchParams);
        window.location.href = f;
      }
    }
  } catch (g) {}
});
