(function () {
  var FLAGS = { skipgc: "t", "umami.disabled": "1" };
  var button = document.querySelector(".visit-stats__optout");
  var status = document.querySelector(".visit-stats__status");
  if (!button) return;

  try {
    localStorage.setItem("visit-stats-check", "1");
    localStorage.removeItem("visit-stats-check");
  } catch (e) {
    return;
  }

  function optedOut() {
    return Object.keys(FLAGS).every(function (key) {
      return localStorage.getItem(key) === FLAGS[key];
    });
  }

  function render() {
    var out = optedOut();
    button.textContent = out ? "Opt back in" : "Opt out";
    button.hidden = false;
    if (status) {
      status.textContent = out
        ? "You’ve opted out: your visits aren’t counted in this browser."
        : "Your visits are currently counted.";
      status.hidden = false;
    }
  }

  button.addEventListener("click", function () {
    var out = optedOut();
    Object.keys(FLAGS).forEach(function (key) {
      if (out) localStorage.removeItem(key);
      else localStorage.setItem(key, FLAGS[key]);
    });
    render();
  });

  render();
})();
