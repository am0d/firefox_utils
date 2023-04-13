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
  [
    "",
    (url, searchParams) => {
      if (url.protocol === "about" && url.pathname === "neterror") {
        const originalUrl = searchParams.get("u");
        if (originalUrl) {
          const newUrl = removeTracker(originalUrl);
          if (newUrl && newUrl !== originalUrl) {
            return newUrl;
          }
        }
      }
      return url.href;
    },
  ],
]);
function removeTracker(href: string): string {
  const url = new URL(href);
  const extractor = trackers.get(url.host);
  if (extractor) {
    let newUrl = extractor(url, url.searchParams);
    if (newUrl && newUrl != href) {
      return newUrl;
    }
  }
  return href;
}
export function removeTrackers() {
  [...document.getElementsByTagName("a")].forEach((a) => {
    try {
      let newUrl = removeTracker(a.href);
      if (newUrl !== a.href) {
        console.debug(`Replacing link ${a.href} with ${newUrl}`);
        a.href = newUrl;
      }
    } catch {}
  });
  try {
    let newUrl = removeTracker(window.location.href);
    if (newUrl !== window.location.href) {
      console.debug(`Replacing window location ${window.location.href} with ${newUrl}`);
      window.location.href = newUrl;
    }
  } catch {}
}
removeTrackers();
