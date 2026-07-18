/* ============================================================
   Aquarell-Hochzeitseinladung – Logik
   ============================================================ */
(function () {
  const cfg = window.INVITE_CONFIG || {};
  const assets = cfg.assets || {};

  /* ---------- Medien aus der Konfiguration setzen ---------- */
  const envVideoEl = document.getElementById("envelopeVideo");
  const envCss = document.getElementById("envelopeCss");
  const heroVideoEl = document.querySelector(".hero__video");
  const garlandVideoEl = document.querySelector(".garland__video");
  const borderVideoEl = document.querySelector(".ceremony__borderVideo");
  const venueImgEl = document.querySelector(".ceremony__venueArt img");

  if (envVideoEl && assets.envelopeVideo) {
    envVideoEl.src = assets.envelopeVideo;
    if (assets.envelopeImage) envVideoEl.poster = assets.envelopeImage;
  }
  if (envCss && assets.envelopeImage) {
    envCss.querySelectorAll(".envelope__half").forEach((h) => {
      h.style.backgroundImage = "url('" + assets.envelopeImage + "')";
    });
  }
  // Video setzen; fehlt es (noch), zeigt das Poster-Bild dieselbe Szene
  function wireVideo(el, videoSrc, imageSrc) {
    if (!el) return;
    if (imageSrc) el.poster = imageSrc;
    if (videoSrc) el.src = videoSrc;
    else if (imageSrc) {
      el.removeAttribute("autoplay");
      el.style.background = "url('" + imageSrc + "') center / cover no-repeat";
    }
  }
  wireVideo(heroVideoEl, assets.heroVideo, assets.heroImage);
  wireVideo(garlandVideoEl, assets.garlandVideo, assets.garlandImage);
  wireVideo(borderVideoEl, assets.borderVideo, assets.borderImage);
  if (venueImgEl && assets.venueImage) venueImgEl.src = assets.venueImage;

  const ceremony = document.querySelector(".ceremony");
  if (ceremony && assets.ceremonyBackground) {
    ceremony.style.backgroundImage = "url('" + assets.ceremonyBackground + "')";
  }

  /* ---------- Bilder der neuen Abschnitte ---------- */
  function setImg(selector, src) {
    const el = document.querySelector(selector);
    if (el && src) el.src = src;
    else if (el && !src) el.remove();
  }
  setImg(".weekend__emblem", assets.emblemImage);
  setImg(".card__flower--tr", assets.flowerCutoutImage || assets.garlandImage);
  setImg(".travel__deco", assets.beachImage);
  setImg(".hotels__bellhop", assets.bellhopImage);
  setImg(".hotels__loungers", assets.loungersImage);
  setImg(".programme__frameImg", assets.programmeFrameImage);

  // Gäste-Reihe: animiertes Video, sonst Standbild
  const guestsImg = document.querySelector(".dresscode__guests");
  if (guestsImg && assets.guestsVideo) {
    const v = document.createElement("video");
    v.className = guestsImg.className;
    v.muted = true;
    v.loop = true;
    v.autoplay = true;
    v.playsInline = true;
    v.preload = "auto";
    if (assets.guestsImage) v.poster = assets.guestsImage;
    v.src = assets.guestsVideo;
    guestsImg.replaceWith(v);
  } else if (guestsImg && assets.guestsImage) {
    guestsImg.src = assets.guestsImage;
  } else if (guestsImg) {
    guestsImg.remove();
  }

  /* ---------- Konfigurierte Texte einsetzen ---------- */
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (cfg[key]) el.textContent = cfg[key];
  });

  /* ---------- Links ---------- */
  const mapsLink = document.getElementById("mapsLink");
  if (mapsLink && cfg.mapsUrl) mapsLink.href = cfg.mapsUrl;

  document.querySelectorAll("[data-config-href]").forEach((el) => {
    const key = el.getAttribute("data-config-href");
    if (cfg[key]) el.href = cfg[key];
  });

  /* ---------- Unsere Geschichte: Text + Bilderkarussell ---------- */
  const storyToggle = document.getElementById("storyToggle");
  const storyTextEl = document.getElementById("storyText");
  if (storyToggle && storyTextEl) {
    storyToggle.addEventListener("click", () => {
      storyTextEl.hidden = !storyTextEl.hidden;
    });
  }

  const storyTrack = document.getElementById("storyTrack");
  if (storyTrack && Array.isArray(assets.storyImages)) {
    assets.storyImages.forEach((src, i) => {
      const fig = document.createElement("figure");
      fig.className = "story__slide";
      const isLast = i === assets.storyImages.length - 1;
      if (isLast && assets.storyVideo) {
        // letztes Bild als animierte Aquarell-Szene
        const v = document.createElement("video");
        v.muted = true;
        v.loop = true;
        v.autoplay = true;
        v.playsInline = true;
        v.preload = "auto";
        v.poster = src;
        v.src = assets.storyVideo;
        fig.appendChild(v);
      } else {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Unsere Geschichte, Bild " + (i + 1);
        img.loading = "lazy";
        fig.appendChild(img);
      }
      storyTrack.appendChild(fig);
    });
    // sanftes automatisches Weiterblättern
    let slide = 0;
    setInterval(() => {
      if (!storyTrack.isConnected || storyTrack.matches(":hover")) return;
      slide = (slide + 1) % storyTrack.children.length;
      const target = storyTrack.children[slide];
      storyTrack.scrollTo({ left: target.offsetLeft - storyTrack.offsetLeft, behavior: "smooth" });
    }, 4200);
  }

  /* ---------- Tagesprogramm ---------- */
  const programmeList = document.getElementById("programmeList");
  if (programmeList && Array.isArray(cfg.programme)) {
    cfg.programme.forEach((item) => {
      const li = document.createElement("li");
      li.className = "programme__item";
      const t = document.createElement("span");
      t.className = "programme__time";
      t.textContent = item.time;
      const l = document.createElement("span");
      l.className = "programme__label";
      l.textContent = item.label;
      li.appendChild(t);
      li.appendChild(l);
      programmeList.appendChild(li);
    });
  }

  /* ---------- Kalender (.ics) ---------- */
  const calendarLink = document.getElementById("calendarLink");
  if (calendarLink && cfg.eventDate) {
    const toIcs = (iso) => iso.replace(/[-:]/g, "").replace(/\.\d+/, "");
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Einladung//DE",
      "BEGIN:VEVENT",
      "UID:" + Date.now() + "@einladung",
      "DTSTART:" + toIcs(cfg.eventDate),
      "DTEND:" + toIcs(cfg.eventEnd || cfg.eventDate),
      "SUMMARY:Hochzeit " + (cfg.nameOne || "") + " & " + (cfg.nameTwo || ""),
      "LOCATION:" + (cfg.locationAddress || ""),
      "END:VEVENT",
      "END:VCALENDAR",
    ];
    const blob = new Blob([lines.join("\r\n")], { type: "text/calendar" });
    calendarLink.href = URL.createObjectURL(blob);
    calendarLink.download = "hochzeit.ics";
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

  /* ---------- Countdown (Tage / Stunden / Minuten) ---------- */
  const target = new Date(cfg.eventDate || Date.now()).getTime();
  const els = {
    d: document.getElementById("cdDays"),
    h: document.getElementById("cdHours"),
    m: document.getElementById("cdMins"),
  };
  const pad = (n) => String(n).padStart(2, "0");

  function tick() {
    const diff = Math.max(0, target - Date.now());
    els.d.textContent = Math.floor(diff / 86400000);
    els.h.textContent = pad(Math.floor(diff / 3600000) % 24);
    els.m.textContent = pad(Math.floor(diff / 60000) % 60);
  }
  tick();
  setInterval(tick, 15000);

  /* ---------- Blütenblätter im Hero ---------- */
  function spawnPetals() {
    const wrap = document.querySelector(".hero__petals");
    if (!wrap) return;
    const COUNT = 14;
    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement("span");
      p.className = "petal";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDuration = 9 + Math.random() * 10 + "s";
      p.style.animationDelay = -Math.random() * 18 + "s";
      p.style.setProperty("--drift", (Math.random() * 2 - 1).toFixed(2));
      p.style.setProperty("--size", (0.6 + Math.random() * 0.9).toFixed(2));
      wrap.appendChild(p);
    }
  }

  /* ---------- Briefumschlag-Intro ---------- */
  const envelope = document.getElementById("envelope");
  const envelopeVideo = document.getElementById("envelopeVideo");
  const invitation = document.getElementById("invitation");
  const heroVideo = document.querySelector(".hero__video");
  let opened = false;

  function revealInvitation() {
    if (invitation.hidden) {
      invitation.hidden = false;
      document.body.classList.add("is-open");
      if (heroVideo) heroVideo.play().catch(() => {});
      spawnPetals();
      requestAnimationFrame(initReveal);
    }
    envelope.classList.add("envelope--hidden");
    setTimeout(() => envelope.remove(), 1600);
  }

  function openEnvelope() {
    if (opened) return;
    opened = true;
    envelope.classList.add("envelope--opening");
    startMusic(); // Melodie startet mit der Nutzer-Interaktion

    const hasVideo = envelopeVideo && envelopeVideo.getAttribute("src");
    if (!hasVideo) {
      // Kein Video konfiguriert -> CSS-Klappe: obere Hälfte klappt mit dem
      // Siegel komplett nach oben, dann weicher Übergang zur Einladung
      envelope.classList.add("envelope--css-open");
      setTimeout(revealInvitation, 1500);
      return;
    }
    const p = envelopeVideo.play();
    if (p && p.then) {
      p.then(() => {
        // Video läuft: CSS-Fallback (geschlossener Umschlag) entfernen,
        // damit er nie hinter dem Video durchscheinen kann
        const cssLayer = document.getElementById("envelopeCss");
        if (cssLayer) cssLayer.remove();
      });
    }
    if (p && p.catch) p.catch(() => {
      envelope.classList.add("envelope--css-open");
      setTimeout(revealInvitation, 1500);
    });
    // Einladung kurz vor Videoende einblenden, damit der Übergang weich ist
    envelopeVideo.addEventListener("timeupdate", function onTime() {
      if (envelopeVideo.duration && envelopeVideo.currentTime > envelopeVideo.duration - 0.55) {
        envelopeVideo.removeEventListener("timeupdate", onTime);
        revealInvitation();
      }
    });
    // Kurz vor dem Ende einfrieren: verhindert, dass Safari & Co. nach
    // "ended" wieder das Poster (geschlossener Umschlag) einblenden
    envelopeVideo.addEventListener("timeupdate", function onFreeze() {
      if (envelopeVideo.duration && envelopeVideo.currentTime > envelopeVideo.duration - 0.12) {
        envelopeVideo.removeEventListener("timeupdate", onFreeze);
        envelopeVideo.pause();
        revealInvitation();
      }
    });
    // Sicherheitsnetz, falls Metadaten/Events nicht feuern
    setTimeout(() => { if (envelope.isConnected) revealInvitation(); }, 11000);
  }

  envelope.addEventListener("click", openEnvelope);
  envelope.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") openEnvelope();
  });

  /* ---------- Rückmeldebogen: zentrale Speicherung, sonst E-Mail ---------- */
  const rsvpForm = document.getElementById("rsvpForm");
  if (rsvpForm) {
    const central = window.WeddingRsvp && window.WeddingRsvp.configured();
    const hint = rsvpForm.querySelector(".rsvp__hint");
    if (central && hint) hint.textContent = "Eure Rückmeldung wird direkt an uns übermittelt.";

    const weekendChoice = document.getElementById("weekendChoice");
    if (weekendChoice && cfg.rsvpWeekendLabel) weekendChoice.hidden = false;

    const buildMailto = (data) => {
      const lines = [
        "Rückmeldung zur Einladung",
        "",
        "Name: " + (data.get("name") || ""),
        "E-Mail: " + (data.get("email") || "-"),
        "Teilnahme: " + (data.get("attendance") || ""),
        "Anzahl Personen: " + (data.get("persons") || ""),
        "Vorabend: " + (data.get("weekend") ? "ja" : "nein"),
        "Essenswünsche/Allergien: " + (data.get("food") || "keine"),
        "",
        "Nachricht:",
        data.get("message") || "-",
      ];
      const subject = encodeURIComponent(
        "Rückmeldung – " + (cfg.nameOne || "") + " & " + (cfg.nameTwo || "")
      );
      return "mailto:" + (cfg.rsvpEmail || "") + "?subject=" + subject +
        "&body=" + encodeURIComponent(lines.join("\n"));
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
        events: data.get("weekend") ? [cfg.rsvpWeekendLabel || "Vorabend"] : [],
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

  /* ---------- Sektionen sanft einblenden ---------- */
  function initReveal() {
    const sections = document.querySelectorAll(".reveal, .footer");
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
