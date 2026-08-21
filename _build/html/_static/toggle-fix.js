/* Fix for dead sidebar toggle buttons (sphinx-book-theme 1.3.0 +
 * pydata-sphinx-theme 0.17.1).
 *
 * The page contains TWO buttons with class .primary-toggle (and two with
 * .secondary-toggle): one inside the hidden pydata navbar (#pst-header) and
 * one in the visible sphinx-book-theme article header. Both themes bind
 * their click handlers with document.querySelector(...), which returns only
 * the FIRST match — the hidden navbar button. Result: tapping the visible
 * hamburger / table-of-contents buttons does nothing, on mobile and desktop.
 *
 * This shim forwards clicks from every additional toggle button to the
 * first (bound) one, so the theme's own handlers run: the pydata handler
 * opens the sidebar as a modal drawer on mobile, and the sphinx-book-theme
 * handler collapses/expands the sidebar on wide screens.
 *
 * If a future theme upgrade fixes the binding upstream, this shim becomes a
 * harmless no-op (it only acts when 2+ buttons share the class).
 */
(function () {
  function fixToggles() {
    ["primary-toggle", "secondary-toggle"].forEach(function (cls) {
      var buttons = document.querySelectorAll("." + cls);
      if (buttons.length < 2) return;
      var bound = buttons[0];
      for (var i = 1; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          bound.click();
        });
      }
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixToggles);
  } else {
    fixToggles();
  }
})();
