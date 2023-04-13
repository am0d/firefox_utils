declare function removeTrackers(): void;
(function () {
  if (typeof removeTrackers === "function") {
    removeTrackers();
  } else {
    var new_script = document.createElement("script");
    new_script.setAttribute("src", "https://am0d.github.io/firefox_utils/removeTrackers.js");
    document.body.appendChild(new_script);
  }
})();
