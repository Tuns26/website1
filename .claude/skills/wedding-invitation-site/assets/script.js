// ===== WeddingLink — Interaktivität =====
(function () {
  "use strict";

  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");

  // Sticky nav background on scroll
  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  navToggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll(".nav__links a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );

  // Scroll reveal for sections
  const revealEls = document.querySelectorAll(
    ".feature-card, .design-card, .quote, .step, .plan, .team__photo, .section-title, .section-sub"
  );
  revealEls.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  // Live countdown in the hero phone mockup
  const target = new Date("2026-08-23T15:00:00");
  const counters = document.querySelectorAll(".invite__count b");
  if (counters.length === 3) {
    const update = () => {
      const diff = target - new Date();
      if (diff <= 0) return;
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      counters[0].textContent = String(days);
      counters[1].textContent = String(hours).padStart(2, "0");
      counters[2].textContent = String(mins).padStart(2, "0");
    };
    update();
    setInterval(update, 30000);
  }

  // Contact form (front-end only demo)
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      form.querySelector(".cta__submit").style.display = "none";
      note.hidden = false;
      form.reset();
    });
  }
})();
