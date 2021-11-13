declare function removeTrackers(): void;
(function () {
  if (typeof removeTrackers === "function") {
    removeTrackers();
  } else {
    var new_script = document.createElement("script");
    new_script.src = "https://am0d.github.io/removeTrackers.js";
    document.body.appendChild(new_script);
  }
})();
