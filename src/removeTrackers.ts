function p(param_name: string): (url: URL, searchParams: URLSearchParams) => string {
  return (_u, sp) => sp.get(param_name) ?? "";
}

const trackers = new Map<string, (url: URL, searchParams: URLSearchParams) => string>([
  ["click.linksynergy.com", p("murl")],
  ["lenovo.evyy.net", p("u")],
  ["www.anrdoezrs.net", p("url")],
  ["go.redirectingat.com", p("url")],
  ["www.tkqlhce.com", p("url")],
  ["www.jdoqocy.com", p("url")],
  ["www.kqzyfj.com", p("url")],
  ["staplescanada.4u8mqw.net", p("u")],
  ["www.dpbolvw.net", p("url")],
  ["www.avantlink.com", p("url")],
  ["s.click.aliexpress.com", p("dl_target_url")],
  ["www.awin1.com", p("p")],
  ["www.gopjn.com", p("url")],
  ["the-home-depot-ca.pxf.io", p("u")],
]);
export function removeTrackers() {
  [...document.getElementsByTagName("a")].forEach((a) => {
    try {
      const currentUrl = new URL(a.href);
      const extractor = trackers.get(currentUrl.host);
      if (extractor) {
        let newUrl = extractor(currentUrl, currentUrl.searchParams);
        if (newUrl) {
          a.href = newUrl;
        }
      }
    } catch {}
  });
  try {
    const currentUrl = new URL(window.location.href);
    if (trackers.has(currentUrl.host)) {
      const extractor = trackers.get(currentUrl.host);
      if (extractor) {
        let newUrl = extractor(currentUrl, currentUrl.searchParams);
        window.location.href = newUrl;
      }
    }
  } catch {}
}
removeTrackers();
