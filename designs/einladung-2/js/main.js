/* ============================================================
   Aquarell-Einladung – Logik
   ============================================================ */
(function () {
  const cfg = window.INVITE_CONFIG || {};

  /* ---------- Medien aus der Konfiguration setzen ---------- */
  const assets = cfg.assets || {};
  const envVideoEl = document.getElementById("envelopeVideo");
  const heroVideoEl = document.querySelector(".hero__video");
  const locationImgEl = document.querySelector(".location__photo img");
  if (envVideoEl && assets.envelopeVideo) {
    envVideoEl.src = assets.envelopeVideo;
    if (assets.envelopeImage) envVideoEl.poster = assets.envelopeImage;
  }
  if (heroVideoEl && assets.heroVideo) {
    heroVideoEl.src = assets.heroVideo;
    if (assets.heroImage) heroVideoEl.poster = assets.heroImage;
  }
  if (locationImgEl && assets.locationImage) locationImgEl.src = assets.locationImage;

  /* ---------- Konfigurierte Texte einsetzen ---------- */
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (cfg[key]) el.textContent = cfg[key];
  });

  /* ---------- Links ---------- */
  const mapsLink = document.getElementById("mapsLink");
  if (mapsLink && cfg.mapsUrl) mapsLink.href = cfg.mapsUrl;

  const rsvpMail = document.getElementById("rsvpMail");
  if (rsvpMail && cfg.rsvpEmail) {
    const subject = encodeURIComponent("Zusage – " + (cfg.nameOne || "") + " & " + (cfg.nameTwo || ""));
    rsvpMail.href = "mailto:" + cfg.rsvpEmail + "?subject=" + subject;
  }

  const rsvpWhatsapp = document.getElementById("rsvpWhatsapp");
  if (rsvpWhatsapp && cfg.rsvpWhatsapp) {
    rsvpWhatsapp.href = "https://wa.me/" + cfg.rsvpWhatsapp;
    rsvpWhatsapp.hidden = false;
  }

  /* ---------- Rückmeldebogen: zentrale Speicherung, sonst E-Mail ---------- */
  const rsvpForm = document.getElementById("rsvpForm");
  if (rsvpForm) {
    const central = window.WeddingRsvp && window.WeddingRsvp.configured();
    const hint = rsvpForm.querySelector(".rsvp__hint");
    if (central && hint) hint.textContent = "Eure Rückmeldung wird direkt an uns übermittelt.";

    const buildMailto = (data) => {
      const lines = [
        "Rückmeldung zur Einladung",
        "",
        "Name: " + (data.get("name") || ""),
        "E-Mail: " + (data.get("email") || "-"),
        "Teilnahme: " + (data.get("attendance") || ""),
        "Anzahl Personen: " + (data.get("persons") || ""),
        "Essenswünsche/Allergien: " + (data.get("food") || "keine"),
        "",
        "Nachricht:",
        data.get("message") || "-",
      ];
      const subject = encodeURIComponent(
        "Rückmeldung – " + (cfg.nameOne || "") + " & " + (cfg.nameTwo || "")
      );
      const body = encodeURIComponent(lines.join("\n"));
      return "mailto:" + (cfg.rsvpEmail || "") + "?subject=" + subject + "&body=" + body;
    };

    rsvpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(rsvpForm);
      if (!central) {
        window.location.href = buildMailto(data);
        return;
      }
      const btn = rsvpForm.querySelector(".rsvp__submit");
      btn.disabled = true;
      btn.textContent = "Wird gesendet …";
      window.WeddingRsvp.submit({
        name: data.get("name"),
        email: data.get("email"),
        attendance: data.get("attendance") === "Leider nein" ? "no" : "yes",
        persons: data.get("persons"),
        events: [],
        food: data.get("food"),
        message: data.get("message"),
      }).then(() => {
        const ok = document.createElement("p");
        ok.className = "rsvp__success";
        ok.textContent = "Vielen Dank! Eure Rückmeldung ist bei uns angekommen.";
        rsvpForm.replaceWith(ok);
      }).catch(() => {
        btn.disabled = false;
        btn.textContent = "Rückmeldung senden";
        window.location.href = buildMailto(data);
      });
    });
  }

  /* ---------- Dresscode-Farbpalette ---------- */
  const colorsWrap = document.getElementById("dresscodeColors");
  if (colorsWrap && Array.isArray(cfg.dresscodeColors)) {
    cfg.dresscodeColors.forEach((c) => {
      const dot = document.createElement("span");
      dot.className = "dresscode__dot";
      dot.style.background = c;
      colorsWrap.appendChild(dot);
    });
  }

  /* ---------- FAQ ---------- */
  const faqList = document.getElementById("faqList");
  if (faqList && Array.isArray(cfg.faqs)) {
    cfg.faqs.forEach((item) => {
      const d = document.createElement("details");
      d.className = "faq__item";
      const s = document.createElement("summary");
      s.className = "faq__question";
      s.textContent = item.q;
      const a = document.createElement("p");
      a.className = "faq__answer";
      a.textContent = item.a;
      d.appendChild(s);
      d.appendChild(a);
      faqList.appendChild(d);
    });
  }

  /* ---------- Musik ---------- */
  const music = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");
  if (music && assets.music) music.src = assets.music;

  function startMusic() {
    if (!music || !music.src) return;
    music.volume = 0.55;
    music.play().catch(() => {});
    if (musicToggle) musicToggle.hidden = false;
  }

  if (musicToggle) {
    musicToggle.addEventListener("click", () => {
      music.muted = !music.muted;
      musicToggle.classList.toggle("music-toggle--muted", music.muted);
      musicToggle.setAttribute(
        "aria-label",
        music.muted ? "Musik einschalten" : "Musik stummschalten"
      );
    });
  }

  /* ---------- Ablauf / Timeline aufbauen ---------- */
  const icons = {
    rings:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="9.5" cy="13.5" r="5.5"/><circle cx="15" cy="10.5" r="5.5"/><path d="M14 3.5l1 1.5 1-1.5"/></svg>',
    glasses:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M7 3h4l-1 8c-.2 1.6-1.6 2.5-3 2.5S4.8 12.6 5 11z" transform="translate(1,0)"/><path d="M8 14v6M5.5 20h5" transform="translate(1,0)"/><path d="M16 4l4 .5-1.8 7.6c-.4 1.5-1.9 2.2-3.2 2S12.7 12.4 13 11z" transform="translate(-1,0)"/></svg>',
    dinner:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3.5"/><path d="M2.5 8v4M2.5 8c0-1.5 1-2 1-2M2.5 12v6M21.5 6v12M21.5 6c-1.5.5-2 2-2 3.5s.5 2.5 2 2.5"/></svg>',
    music:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M9 18V6l10-2v11.5"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="15.5" r="2.5"/></svg>',
  };

  const timeline = document.getElementById("timeline");
  if (timeline && Array.isArray(cfg.schedule)) {
    cfg.schedule.forEach((item) => {
      const li = document.createElement("li");
      li.className = "timeline__item";
      li.innerHTML =
        '<span class="timeline__icon">' + (icons[item.icon] || icons.rings) + "</span>" +
        '<span class="timeline__time"></span>' +
        '<span class="timeline__label"></span>';
      li.querySelector(".timeline__time").textContent = item.time;
      li.querySelector(".timeline__label").textContent = item.label;
      timeline.appendChild(li);
    });
  }

  /* ---------- Countdown ---------- */
  const target = new Date(cfg.eventDate || Date.now()).getTime();
  const els = {
    d: document.getElementById("cdDays"),
    h: document.getElementById("cdHours"),
    m: document.getElementById("cdMins"),
    s: document.getElementById("cdSecs"),
  };

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const mins = Math.floor(diff / 60000) % 60;
    const secs = Math.floor(diff / 1000) % 60;
    els.d.textContent = days;
    els.h.textContent = pad(hours);
    els.m.textContent = pad(mins);
    els.s.textContent = pad(secs);
  }

  tick();
  setInterval(tick, 1000);

  /* ---------- Briefumschlag-Intro ---------- */
  const envelope = document.getElementById("envelope");
  const envelopeVideo = document.getElementById("envelopeVideo");
  const invitation = document.getElementById("invitation");
  const heroVideo = document.querySelector(".hero__video");
  let opened = false;

  function revealInvitation() {
    if (invitation.hidden) {
      invitation.hidden = false;
      if (heroVideo) heroVideo.play().catch(() => {});
      requestAnimationFrame(initReveal);
    }
    envelope.classList.add("envelope--hidden");
    setTimeout(() => envelope.remove(), 1400);
  }

  function openEnvelope() {
    if (opened) return;
    opened = true;
    envelope.classList.add("envelope--opening");
    startMusic(); // Melodie startet mit der Nutzer-Interaktion
    if (!envelopeVideo.getAttribute("src")) {
      // Kein Umschlag-Video konfiguriert -> direkt öffnen
      revealInvitation();
      return;
    }
    const p = envelopeVideo.play();
    if (p && p.catch) {
      p.catch(revealInvitation); // Falls das Video nicht abspielbar ist, direkt öffnen
    }
    // Einladung kurz vor Videoende einblenden, damit der Übergang weich ist
    envelopeVideo.addEventListener("timeupdate", function onTime() {
      if (envelopeVideo.duration && envelopeVideo.currentTime > envelopeVideo.duration - 0.6) {
        envelopeVideo.removeEventListener("timeupdate", onTime);
        revealInvitation();
      }
    });
    envelopeVideo.addEventListener("ended", revealInvitation);
    // Sicherheitsnetz, falls Metadaten/Events nicht feuern
    setTimeout(() => { if (envelope.isConnected) revealInvitation(); }, 9000);
  }

  envelope.addEventListener("click", openEnvelope);
  envelope.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") openEnvelope();
  });

  /* ---------- Sektionen sanft einblenden ---------- */
  function initReveal() {
    const sections = document.querySelectorAll(
      ".countdown__inner, .details, .location__card, .dresscode, .faq__list, .rsvp, .footer"
    );
    sections.forEach((s) => s.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal--visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((s) => io.observe(s));
  }
})();
