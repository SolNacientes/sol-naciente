// Sol Naciente — interactions: sticky header, mobile drawer, scroll reveals.
(function () {
  "use strict";

  // ---- Sticky header background on scroll ----
  var header = document.getElementById("site-header");
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // ---- Mobile drawer ----
  var drawer = document.getElementById("drawer");
  var toggle = document.getElementById("navToggle");
  var close = document.getElementById("drawerClose");
  function openDrawer() { drawer.classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeDrawer() { drawer.classList.remove("open"); document.body.style.overflow = ""; }
  if (toggle) toggle.addEventListener("click", openDrawer);
  if (close) close.addEventListener("click", closeDrawer);
  drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeDrawer); });

  // ---- Scroll reveal ----
  var reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var el = e.target;
          // gentle stagger for grouped siblings
          var sibs = el.parentElement ? Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList.contains("reveal"); }) : [el];
          var idx = sibs.indexOf(el);
          el.style.transitionDelay = (idx > 0 ? Math.min(idx, 4) * 80 : 0) + "ms";
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }
})();
