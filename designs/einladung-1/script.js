(function () {
  'use strict';

  /* ═══════════ Übersetzungen ═══════════ */
  var I18N = {
    de: {
      'envelope.hint': 'Tippe auf das Siegel, um die Einladung zu öffnen',
      'bow.kicker': 'Wir heiraten',
      'bow.hint': 'Tippe auf die Schleife, um die Einladung zu öffnen',
      'hero.request': 'Wir bitten um die Ehre Ihrer Anwesenheit,<br>um unsere Hochzeit zu feiern am',
      'hero.month': 'September',
      'hero.weekday': 'Samstag',
      'hero.heldAt': 'im',
      'hero.time': 'um sechs Uhr abends',
      'hero.scroll': 'Weiterscrollen & RSVP',
      'countdown.title': 'Countdown',
      'countdown.until': 'bis zum 12. September 2026',
      'countdown.days': 'Tage',
      'countdown.hours': 'Stunden',
      'countdown.minutes': 'Minuten',
      'events.title': 'Die Feierlichkeiten',
      'events.cruiseKicker': 'Willkommensfahrt auf dem Bosporus',
      'events.cruiseDetail': 'Abfahrt vom The Peninsula Private Quay',
      'events.cruiseDate': '11. September 2026',
      'events.ceremonyKicker': 'Trauung & Empfang',
      'events.ceremonyDetail': 'Trauung am Wasser mit anschließendem Empfang',
      'events.ceremonyDate': '12. September 2026 · 18:00 Uhr',
      'program.title': 'Hochzeitswochenende',
      'program.sub': 'Ablauf',
      'program.dates': '11. – 12. September 2026',
      'program.day1Title': 'Willkommensfahrt auf dem Bosporus',
      'program.day1Date': '11. September 2026',
      'program.day1Desc': 'Begleiten Sie uns zu Cocktails und Häppchen auf unserer Fahrt über den Bosporus',
      'program.day1a': 'Abfahrt vom The Peninsula Private Quay',
      'program.day1b': 'Sonnenuntergangs-Cocktails & Häppchen',
      'program.day2Title': 'Trauung & Empfang',
      'program.day2Date': '12. September 2026',
      'program.day2a': 'Trauung am Wasser',
      'program.day2b': 'Empfang & festliches Dinner',
      'program.day2c': 'Party unter den Sternen',
      'hotels.title': 'Unterkünfte',
      'hotels.sub': 'Empfohlene Hotels in der Nähe des Veranstaltungsortes',
      'hotels.detail': 'pro Nacht · Doppelzimmer Standard · inkl. Steuern & Frühstück',
      'hotels.detail2': 'pro Nacht · Doppelzimmer Standard · inkl. Steuern & Frühstück',
      'hotels.linkSoon': 'Buchungslink folgt in Kürze',
      'hotels.linkSoon2': 'Buchungslink folgt in Kürze',
      'rsvp.deadline': 'Wir bitten höflichst um Ihre Rückmeldung bis zum ersten August 2026',
      'rsvp.attendQ': 'Werden Sie uns beehren? *',
      'rsvp.attendYes': 'Mit Freude nehme ich an',
      'rsvp.attendNo': 'Leider bin ich verhindert',
      'rsvp.eventsQ': 'An welchen Veranstaltungen werden Sie teilnehmen? *',
      'rsvp.eventCruise': 'Willkommensfahrt – 11. September',
      'rsvp.eventCeremony': 'Trauung & Empfang – 12. September',
      'rsvp.guestsQ': 'Anzahl der Gäste in Ihrer Begleitung',
      'rsvp.mainGuest': 'Hauptgast',
      'rsvp.namePh': 'Vollständiger Name',
      'rsvp.emailPh': 'E-Mail-Adresse',
      'rsvp.submit': 'Rückmeldung senden',
      'rsvp.note': 'Es öffnet sich Ihr E-Mail-Programm mit der fertigen Rückmeldung.',
      'mail.subjectYes': 'Zusage zur Hochzeit von Sophia & Alexander',
      'mail.subjectNo': 'Absage zur Hochzeit von Sophia & Alexander',
      'mail.attendYes': 'Mit Freude nehme ich an.',
      'mail.attendNo': 'Leider bin ich verhindert.',
      'mail.events': 'Veranstaltungen',
      'mail.cruise': 'Willkommensfahrt – 11. September',
      'mail.ceremony': 'Trauung & Empfang – 12. September',
      'mail.companions': 'Begleitpersonen',
      'mail.name': 'Name',
      'mail.email': 'E-Mail'
    },
    en: {
      'envelope.hint': 'Tap the seal to open the invitation',
      'bow.kicker': 'We are getting married',
      'bow.hint': 'Tap the bow to open the invitation',
      'hero.request': 'We request the pleasure of your company<br>to celebrate our wedding on',
      'hero.month': 'September',
      'hero.weekday': 'Saturday',
      'hero.heldAt': 'to be held at',
      'hero.time': "at six o'clock in the evening",
      'hero.scroll': 'Keep scrolling and RSVP',
      'countdown.title': 'Countdown',
      'countdown.until': 'until September 12, 2026',
      'countdown.days': 'Days',
      'countdown.hours': 'Hours',
      'countdown.minutes': 'Minutes',
      'events.title': 'The Celebrations',
      'events.cruiseKicker': 'Welcome Cruise on the Bosphorus',
      'events.cruiseDetail': 'Departure from The Peninsula Private Quay',
      'events.cruiseDate': 'September 11, 2026',
      'events.ceremonyKicker': 'Ceremony & Reception',
      'events.ceremonyDetail': 'Waterfront ceremony followed by the reception',
      'events.ceremonyDate': 'September 12, 2026 · 6:00 PM',
      'program.title': 'Wedding Weekend',
      'program.sub': 'Schedule',
      'program.dates': 'September 11 – 12, 2026',
      'program.day1Title': 'Welcome Cruise on the Bosphorus',
      'program.day1Date': 'September 11, 2026',
      'program.day1Desc': 'Join us for cocktails and canapés as we cruise the Bosphorus',
      'program.day1a': 'Departure from The Peninsula Private Quay',
      'program.day1b': 'Sunset cocktails & canapés',
      'program.day2Title': 'Ceremony & Reception',
      'program.day2Date': 'September 12, 2026',
      'program.day2a': 'Waterfront ceremony',
      'program.day2b': 'Reception & festive dinner',
      'program.day2c': 'Party under the stars',
      'hotels.title': 'Accommodations',
      'hotels.sub': 'Recommended hotels near the venue',
      'hotels.detail': 'per night · standard double room · incl. taxes & breakfast',
      'hotels.detail2': 'per night · standard double room · incl. taxes & breakfast',
      'hotels.linkSoon': 'Booking link coming soon',
      'hotels.linkSoon2': 'Booking link coming soon',
      'rsvp.deadline': 'We kindly request your reply by the first of August 2026',
      'rsvp.attendQ': 'Will you be attending? *',
      'rsvp.attendYes': 'I joyfully accept',
      'rsvp.attendNo': 'I regretfully decline',
      'rsvp.eventsQ': 'Which events will you attend? *',
      'rsvp.eventCruise': 'Welcome cruise – September 11',
      'rsvp.eventCeremony': 'Ceremony & reception – September 12',
      'rsvp.guestsQ': 'Number of guests accompanying you',
      'rsvp.mainGuest': 'Main guest',
      'rsvp.namePh': 'Full name',
      'rsvp.emailPh': 'Email address',
      'rsvp.submit': 'Send reply',
      'rsvp.note': 'Your email app will open with the completed reply.',
      'mail.subjectYes': "RSVP – accepting with joy – Sophia & Alexander's wedding",
      'mail.subjectNo': "RSVP – regretfully declining – Sophia & Alexander's wedding",
      'mail.attendYes': 'I joyfully accept.',
      'mail.attendNo': 'I regretfully decline.',
      'mail.events': 'Events',
      'mail.cruise': 'Welcome cruise – September 11',
      'mail.ceremony': 'Ceremony & reception – September 12',
      'mail.companions': 'Companions',
      'mail.name': 'Name',
      'mail.email': 'Email'
    }
  };

  var lang = 'de';

  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.de[key] || key; }

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-ph'));
    });
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
  }

  document.querySelectorAll('.lang-toggle button').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = b.getAttribute('data-lang');
      applyLang();
    });
  });

  /* ═══════════ Umschlag ═══════════ */
  var stage = document.getElementById('stage-envelope');
  var wrap = document.getElementById('envelopeWrap');
  var video = document.getElementById('envelopeVideo');
  var bowStage = document.getElementById('stage-bow');
  var opened = false;

  function openEnvelope() {
    if (opened) return;
    opened = true;
    stage.classList.add('opening');

    var finished = false;
    function done() {
      if (finished) return;
      finished = true;
      showBow();
    }

    // Die Nutzergeste startet die durchgehende Hintergrundmusik;
    // die Videos bleiben stumm, damit nichts dazwischenfunkt.
    startMusic();
    video.muted = true;
    var p = video.play();
    if (p && typeof p.catch === 'function') {
      p.catch(function () { setTimeout(done, 800); });
    }
    video.addEventListener('ended', done);
    setTimeout(done, 10000); // Sicherheitsnetz
  }

  wrap.addEventListener('click', openEnvelope);
  wrap.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openEnvelope(); }
  });

  /* ═══════════ Schleife (Video: bindet sich von selbst auf) ═══════════ */
  var bowVideo = document.getElementById('bowVideo');
  var bowDone = false;

  function showBow() {
    bowStage.classList.add('active');
    stage.classList.add('gone');
    // Video startet automatisch; kurze Pause, damit die Szene wirkt
    setTimeout(function () {
      var p = bowVideo.play();
      if (p && typeof p.catch === 'function') {
        // Video nicht abspielbar → nach kurzem Moment weiter
        p.catch(function () { setTimeout(finishBow, 2200); });
      }
    }, 700);
    bowVideo.addEventListener('ended', finishBow);
    setTimeout(finishBow, 12000); // Sicherheitsnetz
  }

  function finishBow() {
    if (bowDone) return;
    bowDone = true;
    bowStage.classList.add('gone');
    document.body.classList.add('opened');
    revealInView();
  }

  // Tippen überspringt das Schleifen-Video
  bowStage.addEventListener('click', finishBow);

  /* ═══════════ Musik (läuft ab dem ersten Tipp durchgehend) ═══════════ */
  var soundBtn = document.getElementById('soundBtn');
  var music = document.getElementById('bgMusic');
  var soundOn = false;
  soundBtn.classList.add('off');

  function setSoundUI() {
    soundBtn.classList.toggle('off', !soundOn);
    soundBtn.setAttribute('aria-pressed', String(soundOn));
  }

  function startMusic() {
    music.volume = 0.55;
    var p = music.play();
    if (p && typeof p.then === 'function') {
      p.then(function () {
        soundOn = true;
        setSoundUI();
      }).catch(function () { /* music.mp3 fehlt oder Autoplay blockiert */ });
    }
  }

  soundBtn.addEventListener('click', function () {
    soundOn = !soundOn;
    if (soundOn) {
      music.volume = 0.55;
      music.play().catch(function () { soundOn = false; setSoundUI(); });
    } else {
      music.pause();
    }
    setSoundUI();
  });

  /* ═══════════ Scroll-Reveal ═══════════ */
  var observer = null;
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          observer.unobserve(en.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  function revealInView() {
    // Hero-Elemente sofort einblenden, sobald der Umschlag verschwindet
    document.querySelectorAll('.hero .reveal').forEach(function (el, i) {
      setTimeout(function () { el.classList.add('in'); }, 300 + i * 180);
    });
  }

  /* ═══════════ Countdown ═══════════ */
  var target = new Date('2026-09-12T18:00:00+03:00').getTime();
  var elD = document.getElementById('cdDays');
  var elH = document.getElementById('cdHours');
  var elM = document.getElementById('cdMins');

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function tick() {
    var diff = Math.max(0, target - Date.now());
    var mins = Math.floor(diff / 60000);
    elD.textContent = pad(Math.floor(mins / 1440));
    elH.textContent = pad(Math.floor(mins / 60) % 24);
    elM.textContent = pad(mins % 60);
  }
  tick();
  setInterval(tick, 30000);

  /* ═══════════ RSVP ═══════════ */
  var RSVP_EMAIL = 'kingt-26@hotmail.com';
  var form = document.getElementById('rsvpForm');
  var eventsField = document.getElementById('eventsField');
  var guestCountEl = document.getElementById('guestCount');
  var guests = 0;

  document.getElementById('stepMinus').addEventListener('click', function () {
    guests = Math.max(0, guests - 1);
    guestCountEl.textContent = guests;
  });
  document.getElementById('stepPlus').addEventListener('click', function () {
    guests = Math.min(10, guests + 1);
    guestCountEl.textContent = guests;
  });

  form.querySelectorAll('input[name="attend"]').forEach(function (r) {
    r.addEventListener('change', function () {
      var declined = form.attend.value === 'no';
      eventsField.classList.toggle('disabled', declined);
    });
  });

  function buildRsvpMailto() {
    var attending = form.attend.value === 'yes';
    var name = document.getElementById('guestName').value.trim();
    var email = document.getElementById('guestEmail').value.trim();

    var lines = [];
    lines.push(attending ? t('mail.attendYes') : t('mail.attendNo'));
    lines.push('');
    if (attending) {
      var evs = [];
      form.querySelectorAll('input[name="events"]:checked').forEach(function (c) {
        evs.push(c.value === 'cruise' ? t('mail.cruise') : t('mail.ceremony'));
      });
      lines.push(t('mail.events') + ': ' + (evs.length ? evs.join(', ') : '–'));
      lines.push(t('mail.companions') + ': ' + guests);
    }
    lines.push(t('mail.name') + ': ' + name);
    lines.push(t('mail.email') + ': ' + email);

    var subject = attending ? t('mail.subjectYes') : t('mail.subjectNo');
    return 'mailto:' + RSVP_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(lines.join('\n'));
  }
  window.buildRsvpMailto = buildRsvpMailto;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    location.href = buildRsvpMailto();
  });

  applyLang();
})();
