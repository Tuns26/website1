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
    ".feature-card, .design-card, .quote, .step, .plan, .addon-card, .paper__cta, .dashsec__shot, .team__photo, .section-title, .section-sub"
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

  // Design-Slider: horizontal swipen, Pfeile blättern kartenweise
  const carousel = document.querySelector(".cards-carousel");
  if (carousel) {
    const track = carousel.querySelector(".cards");
    const prevBtn = carousel.querySelector(".cards-nav--prev");
    const nextBtn = carousel.querySelector(".cards-nav--next");

    const cardStep = () => {
      const card = track.querySelector(".design-card");
      if (!card) return track.clientWidth;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card.getBoundingClientRect().width + gap;
    };

    const goTo = (dir) => {
      const step = cardStep();
      const idx = Math.round(track.scrollLeft / step) + dir;
      track.scrollTo({ left: idx * step, behavior: "smooth" });
    };
    prevBtn.addEventListener("click", () => goTo(-1));
    nextBtn.addEventListener("click", () => goTo(1));

    const updateNav = () => {
      prevBtn.disabled = track.scrollLeft <= 4;
      nextBtn.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
    };
    track.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", updateNav);
    updateNav();

    // Alle Karten gemeinsam einblenden, damit beim Swipen keine leere Karte auftaucht
    if ("IntersectionObserver" in window) {
      const cardsIo = new IntersectionObserver((entries, obs) => {
        if (entries.some((e) => e.isIntersecting)) {
          track.querySelectorAll(".design-card").forEach((c) => c.classList.add("visible"));
          obs.disconnect();
        }
      }, { threshold: 0.1 });
      cardsIo.observe(track);
    }
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

  // Design-Demo-Modal: Karte anklicken → Einladung im Handy-Rahmen durchklicken
  const modal = document.getElementById("demoModal");
  if (modal) {
    const frame = document.getElementById("demoFrame");
    const cta = document.getElementById("demoCta");
    const phone = modal.querySelector(".demo-modal__frame");

    // Display bleibt intern immer 360×780 (9:19,5 wie moderne Smartphones) und wird
    // nur optisch skaliert, damit die Demos exakt wie auf einem echten Handy umbrechen
    const SCREEN_W = 360, SCREEN_H = 780, BEZEL = 11;
    const fitDemoFrame = () => {
      const maxW = window.innerWidth * 0.92;
      const maxH = window.innerHeight - 140; // Platz für CTA-Button und Abstände
      const s = Math.min(1, maxW / (SCREEN_W + 2 * BEZEL), maxH / (SCREEN_H + 2 * BEZEL));
      phone.style.width = SCREEN_W * s + 2 * BEZEL + "px";
      phone.style.height = SCREEN_H * s + 2 * BEZEL + "px";
      frame.style.transform = "scale(" + s + ")";
    };
    window.addEventListener("resize", fitDemoFrame);

    const openDemo = (card) => {
      fitDemoFrame();
      frame.src = card.dataset.demo;
      // CTA führt zur Bestellseite mit vorgewähltem Stil
      const stil = card.dataset.stil;
      cta.href = "bestellen.html" + (stil ? "?stil=" + encodeURIComponent(stil) : "");
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("demo-open");
    };
    const closeDemo = () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("demo-open");
      frame.src = ""; // stoppt Animationen/Timer der Demo
    };

    document.querySelectorAll(".design-card[data-demo]").forEach((card) => {
      card.addEventListener("click", () => openDemo(card));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDemo(card); }
      });
    });
    modal.querySelectorAll("[data-demo-close]").forEach((el) =>
      el.addEventListener("click", closeDemo)
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) closeDemo();
    });
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
