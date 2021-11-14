(function(global, factory) {
    if (typeof define === "function" && define.amd) {
        define([
            "exports"
        ], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {
            }
        };
        factory(mod.exports);
        global.removeTrackers = mod.exports;
    }
})(this, function(_exports) {
    "use strict";
    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.removeTrackers = removeTrackers;
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
                arr2[i] = arr[i];
            }
            return arr2;
        }
    }
    function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    function p(param_name) {
        var ref;
        return function(_u, sp) {
            return (ref = sp.get(param_name)) !== null && ref !== void 0 ? ref : "";
        };
    }
    var trackers = new Map([
        [
            "click.linksynergy.com",
            p("murl")
        ],
        [
            "lenovo.evyy.net",
            p("u")
        ],
        [
            "www.anrdoezrs.net",
            p("url")
        ],
        [
            "go.redirectingat.com",
            p("url")
        ],
        [
            "www.tkqlhce.com",
            p("url")
        ],
        [
            "www.jdoqocy.com",
            p("url")
        ],
        [
            "www.kqzyfj.com",
            p("url")
        ],
        [
            "staplescanada.4u8mqw.net",
            p("u")
        ],
        [
            "www.dpbolvw.net",
            p("url")
        ],
        [
            "www.avantlink.com",
            p("url")
        ],
        [
            "s.click.aliexpress.com",
            p("dl_target_url")
        ],
        [
            "www.awin1.com",
            p("p")
        ],
        [
            "www.gopjn.com",
            p("url")
        ],
        [
            "the-home-depot-ca.pxf.io",
            p("u")
        ],
        [
            "",
            function(url, searchParams) {
                if (url.protocol === "about" && url.pathname === "neterror") {
                    var originalUrl = searchParams.get("u");
                    if (originalUrl) {
                        var newUrl = removeTracker(originalUrl);
                        if (newUrl !== originalUrl) {
                            return newUrl;
                        }
                    }
                }
                return url.href;
            }, 
        ], 
    ]);
    function removeTracker(href) {
        var url = new URL(href);
        var extractor = trackers.get(url.host);
        if (extractor) {
            var newUrl = extractor(url, url.searchParams);
            return newUrl;
        }
        return href;
    }
    function removeTrackers() {
        _toConsumableArray(document.getElementsByTagName("a")).forEach(function(a) {
            try {
                var newUrl = removeTracker(a.href);
                if (newUrl !== a.href) {
                    console.debug("Replacing link ".concat(a.href, " with ").concat(newUrl));
                    a.href = newUrl;
                }
            } catch (e) {
            }
        });
        try {
            var newUrl1 = removeTracker(window.location.href);
            if (newUrl1 !== window.location.href) {
                console.debug("Replacing window location ".concat(window.location.href, " with ").concat(newUrl1));
                window.location.href = newUrl1;
            }
        } catch (e) {
        }
    }
    removeTrackers();
});

//# sourceMappingURL=removeTrackers.js.map