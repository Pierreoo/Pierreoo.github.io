(function () {
  var btn = document.getElementById("pp-more-btn");
  var menu = document.getElementById("pp-more-menu");
  if (!btn || !menu) return;

  function setOpen(open) {
    menu.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
  }

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(menu.hidden);
  });

  if (window.matchMedia("(hover: hover)").matches) {
    var container = btn.parentNode;
    var closeTimer;
    container.addEventListener("mouseenter", function () {
      window.clearTimeout(closeTimer);
      setOpen(true);
    });
    container.addEventListener("mouseleave", function () {
      closeTimer = window.setTimeout(function () { setOpen(false); }, 220);
    });
  }

  document.addEventListener("click", function (e) {
    if (!menu.hidden && !menu.contains(e.target)) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !menu.hidden) { setOpen(false); btn.focus(); }
  });
})();

document.querySelectorAll(".pp__copy").forEach(function (button) {
  button.addEventListener("click", function () {
    var source = document.getElementById(button.dataset.copyTarget);
    if (!source) return;

    var text = source.textContent;
    var done = function () {
      button.textContent = "Copied";
      button.classList.add("is-copied");
      window.setTimeout(function () {
        button.textContent = "Copy";
        button.classList.remove("is-copied");
      }, 1600);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done);
      return;
    }

    var scratch = document.createElement("textarea");
    scratch.value = text;
    scratch.setAttribute("readonly", "");
    scratch.style.position = "absolute";
    scratch.style.left = "-9999px";
    document.body.appendChild(scratch);
    scratch.select();
    try { document.execCommand("copy"); done(); } catch (e) {}
    document.body.removeChild(scratch);
  });
});
