//javascript:
const trackers = new Map([
  ["click.linksynergy.com", (url, sp) => sp.get("murl")],
  ["lenovo.evyy.net", (url, sp) => sp.get("u")],
  ["www.anrdoezrs.net", (url, sp) => sp.get("url")],
  ["go.redirectingat.com", (url, sp) => sp.get("url")],
  ["www.tkqlhce.com", (url, sp) => sp.get("url")],
  ["www.jdoqocy.com", (url, sp) => sp.get("url")],
  ["www.kqzyfj.com", (url, sp) => sp.get("url")],
  ["staplescanada.4u8mqw.net", (url, sp) => sp.get("u")],
  ["www.dpbolvw.net", (url, sp) => sp.get("url")],
  ["www.avantlink.com", (url, sp) => sp.get("url")],
  ["s.click.aliexpress.com", (url, sp) => sp.get("dl_target_url")],
  ["www.awin1.com", (url, sp) => sp.get("p")],
  ["www.gopjn.com", (url, sp) => sp.get("url")],
  ["the-home-depot-ca.pxf.io", (url, sp) => sp.get("u")],
]);
[...document.getElementsByTagName("a")].forEach((a) => {
  try {
    const currentUrl = new URL(a.href);
    if (trackers.has(currentUrl.host)) {
      let newUrl = trackers.get(currentUrl.host)(currentUrl, currentUrl.searchParams);
      if (newUrl) {
        a.href = newUrl;
      }
    }
  } catch {}
});
try {
  const currentUrl = new URL(window.location);
  if (trackers.has(currentUrl.host)) {
    let newUrl = trackers.get(currentUrl.host)(currentUrl, currentUrl.searchParams);
    if (newUrl) {
      window.location = newUrl;
    }
  }
} catch {}
