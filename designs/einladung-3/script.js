(function () {
  'use strict';

  /* ═══════════ Übersetzungen ═══════════ */
  var I18N = {
    de: {
      'curtain.kicker': 'Die Hochzeit von',
      'curtain.hint': 'Tippe, um den Vorhang zu öffnen',
      'hero.kicker': 'Sie sind herzlich eingeladen zur Hochzeit von',
      'hero.request': 'Wir möchten den schönsten Tag unseres Lebens mit Ihnen feiern – es wäre uns eine große Ehre, Sie an diesem besonderen Moment an unserer Seite zu wissen.',
      'hero.heldAt': 'in der',
      'hero.time': 'Trauung um fünf Uhr nachmittags',
      'hero.scroll': 'Weiterscrollen & entdecken',
      'scratch.title': 'Enthüllung',
      'scratch.sub': 'Rubbeln Sie die goldenen Kreise frei und entdecken Sie unser Datum',
      'scratch.subDone': 'Save the Date – wir freuen uns auf Sie!',
      'scratch.month': 'Juli',
      'scratch.done': 'Wir heiraten!',
      'countdown.title': 'Countdown',
      'countdown.until': 'bis zum großen Tag',
      'countdown.days': 'Tage',
      'countdown.hours': 'Stunden',
      'countdown.minutes': 'Minuten',
      'countdown.seconds': 'Sekunden',
      'venue.title': 'Die Feier',
      'venue.sub': 'findet statt in der',
      'venue.note': 'Trauung und Empfang unter freiem Himmel in den Gärten der Villa – anschließend festliches Dinner im Spiegelsaal.',
      'program.title': 'Der Abend',
      'program.sub': 'Ablauf des Hochzeitstages',
      'program.dates': 'Samstag, 10. Juli 2027',
      'program.a': 'Ankunft der Gäste & Willkommensdrink',
      'program.b': 'Freie Trauung im Garten',
      'program.c': 'Aperitivo & Cocktails auf der Terrasse',
      'program.d': 'Festliches Dinner im Spiegelsaal',
      'program.e': 'Eröffnungstanz',
      'program.f': 'Party unter den Sternen',
      'menu.title': 'Das Menü',
      'menu.sub': 'Ein Abend voller Genuss',
      'menu.c1': 'Aperitivo',
      'menu.c1d': 'Prosecco, Cocktails & toskanische Häppchen',
      'menu.c2': 'Primo',
      'menu.c2d': 'Hausgemachte Tagliatelle mit Trüffel',
      'menu.c3': 'Secondo',
      'menu.c3d': 'Branzino vom Grill oder Rinderfilet in Barolo',
      'menu.c4': 'Dolce',
      'menu.c4d': 'Hochzeitstorte, Tiramisù & Mitternachtssnack',
      'menu.note': 'Vegetarische Alternativen sind selbstverständlich vorbereitet – teilen Sie uns Unverträglichkeiten gerne im RSVP mit.',
      'dress.title': 'Dresscode',
      'dress.main': 'Elegante Abendgarderobe',
      'dress.note': 'Wir freuen uns, wenn Sie sich festlich kleiden.<br>Bitte verzichten Sie auf Weiß – das gehört an diesem Tag der Braut.',
      'gift.title': 'Geschenke',
      'gift.text': 'Ihre Anwesenheit ist das größte Geschenk für uns. Wer uns darüber hinaus eine Freude machen möchte, darf gerne einen Beitrag zu unserer Hochzeitsreise beisteuern.',
      'gift.bank': 'Bankverbindung',
      'gift.ref': 'Verwendungszweck: Hochzeit Isabella & Maximilian',
      'gift.love': 'In Liebe',
      'transport.title': 'Anreise',
      'transport.sub': 'Shuttle-Service für unsere Gäste',
      'transport.thereK': 'Hinfahrt',
      'transport.there': 'Abfahrt Piazzale Michelangelo, Florenz',
      'transport.backK': 'Rückfahrt',
      'transport.back': 'Rückfahrt ins Stadtzentrum von Florenz',
      'transport.note': 'Bitte geben Sie in Ihrer Rückmeldung an, ob Sie den Shuttle nutzen möchten.',
      'rsvp.deadline': 'Wir bitten höflichst um Ihre Rückmeldung bis zum 1. Mai 2027',
      'rsvp.attendQ': 'Werden Sie uns beehren? *',
      'rsvp.attendYes': 'Mit Freude nehme ich an',
      'rsvp.attendNo': 'Leider bin ich verhindert',
      'rsvp.extrasQ': 'Was dürfen wir für Sie vormerken?',
      'rsvp.extraShuttle': 'Ich nutze den Shuttle-Service',
      'rsvp.extraVeggie': 'Vegetarisches Menü',
      'rsvp.guestsQ': 'Anzahl der Gäste in Ihrer Begleitung',
      'rsvp.mainGuest': 'Hauptgast',
      'rsvp.namePh': 'Vollständiger Name',
      'rsvp.emailPh': 'E-Mail-Adresse',
      'rsvp.msgPh': 'Eine Nachricht an das Brautpaar (optional)',
      'rsvp.submit': 'Rückmeldung senden',
      'rsvp.note': 'Es öffnet sich Ihr E-Mail-Programm mit der fertigen Rückmeldung.',
      'finale.thanks': 'Danke',
      'finale.text': 'dass Sie diesen besonderen Tag mit uns teilen.<br>Wir zählen die Tage!',
      'mail.subjectYes': 'Zusage zur Hochzeit von Isabella & Maximilian',
      'mail.subjectNo': 'Absage zur Hochzeit von Isabella & Maximilian',
      'mail.attendYes': 'Mit Freude nehme ich an.',
      'mail.attendNo': 'Leider bin ich verhindert.',
      'mail.extras': 'Vorgemerkt',
      'mail.shuttle': 'Shuttle-Service',
      'mail.veggie': 'Vegetarisches Menü',
      'mail.companions': 'Begleitpersonen',
      'mail.name': 'Name',
      'mail.email': 'E-Mail',
      'mail.message': 'Nachricht'
    },
    en: {
      'curtain.kicker': 'The Wedding of',
      'curtain.hint': 'Tap to raise the curtain',
      'hero.kicker': 'You are cordially invited to the wedding of',
      'hero.request': 'We would like to celebrate the most special day of our lives with you – it would be an honor to have you by our side at this important moment.',
      'hero.heldAt': 'to be held at',
      'hero.time': "ceremony at five o'clock in the afternoon",
      'hero.scroll': 'Keep scrolling & discover',
      'scratch.title': 'Reveal',
      'scratch.sub': 'Scratch the golden circles to discover our date',
      'scratch.subDone': 'Save the date – we can’t wait to see you!',
      'scratch.month': 'July',
      'scratch.done': 'We’re getting married!',
      'countdown.title': 'Countdown',
      'countdown.until': 'until the big day',
      'countdown.days': 'Days',
      'countdown.hours': 'Hours',
      'countdown.minutes': 'Minutes',
      'countdown.seconds': 'Seconds',
      'venue.title': 'The Celebration',
      'venue.sub': 'will take place at',
      'venue.note': 'Open-air ceremony and reception in the villa gardens – followed by a festive dinner in the Hall of Mirrors.',
      'program.title': 'The Evening',
      'program.sub': 'Schedule of the wedding day',
      'program.dates': 'Saturday, July 10, 2027',
      'program.a': 'Guest arrival & welcome drink',
      'program.b': 'Ceremony in the garden',
      'program.c': 'Aperitivo & cocktails on the terrace',
      'program.d': 'Festive dinner in the Hall of Mirrors',
      'program.e': 'First dance',
      'program.f': 'Party under the stars',
      'menu.title': 'The Menu',
      'menu.sub': 'An evening of indulgence',
      'menu.c1': 'Aperitivo',
      'menu.c1d': 'Prosecco, cocktails & Tuscan canapés',
      'menu.c2': 'Primo',
      'menu.c2d': 'Homemade tagliatelle with truffle',
      'menu.c3': 'Secondo',
      'menu.c3d': 'Grilled sea bass or beef fillet in Barolo',
      'menu.c4': 'Dolce',
      'menu.c4d': 'Wedding cake, tiramisù & midnight snack',
      'menu.note': 'Vegetarian alternatives are of course available – please let us know about intolerances in your RSVP.',
      'dress.title': 'Dress Code',
      'dress.main': 'Formal Evening Attire',
      'dress.note': 'We invite you to dress elegantly for the occasion.<br>Please avoid wearing white – that day it belongs to the bride.',
      'gift.title': 'Gifts',
      'gift.text': 'Your presence is the greatest gift of all. If you would like to give us something more, we would be grateful for a contribution to our honeymoon.',
      'gift.bank': 'Bank details',
      'gift.ref': 'Reference: Wedding Isabella & Maximilian',
      'gift.love': 'With all our love',
      'transport.title': 'Getting There',
      'transport.sub': 'Shuttle service for our guests',
      'transport.thereK': 'Departure',
      'transport.there': 'Departure from Piazzale Michelangelo, Florence',
      'transport.backK': 'Return',
      'transport.back': 'Return to the center of Florence',
      'transport.note': 'Please indicate in your RSVP if you would like to use the shuttle.',
      'rsvp.deadline': 'We kindly request your reply by May 1, 2027',
      'rsvp.attendQ': 'Will you be attending? *',
      'rsvp.attendYes': 'I joyfully accept',
      'rsvp.attendNo': 'I regretfully decline',
      'rsvp.extrasQ': 'What may we note down for you?',
      'rsvp.extraShuttle': 'I will use the shuttle service',
      'rsvp.extraVeggie': 'Vegetarian menu',
      'rsvp.guestsQ': 'Number of guests accompanying you',
      'rsvp.mainGuest': 'Main guest',
      'rsvp.namePh': 'Full name',
      'rsvp.emailPh': 'Email address',
      'rsvp.msgPh': 'A message for the couple (optional)',
      'rsvp.submit': 'Send reply',
      'rsvp.note': 'Your email app will open with the completed reply.',
      'finale.thanks': 'Thank You',
      'finale.text': 'for sharing this special day with us.<br>We are counting the days!',
      'mail.subjectYes': "RSVP – accepting with joy – Isabella & Maximilian's wedding",
      'mail.subjectNo': "RSVP – regretfully declining – Isabella & Maximilian's wedding",
      'mail.attendYes': 'I joyfully accept.',
      'mail.attendNo': 'I regretfully decline.',
      'mail.extras': 'Noted',
      'mail.shuttle': 'Shuttle service',
      'mail.veggie': 'Vegetarian menu',
      'mail.companions': 'Companions',
      'mail.name': 'Name',
      'mail.email': 'Email',
      'mail.message': 'Message'
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
    if (scratchComplete) {
      document.getElementById('scratchSub').innerHTML = t('scratch.subDone');
    }
  }

  document.querySelectorAll('.lang-toggle button').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = b.getAttribute('data-lang');
      applyLang();
    });
  });

  /* ═══════════ Vorhang (öffnet erst nach Klick) ═══════════ */
  var stage = document.getElementById('stage-curtain');
  var wrap = document.getElementById('curtainWrap');
  var video = document.getElementById('curtainVideo');
  var opened = false;

  function openCurtain() {
    if (opened) return;
    opened = true;
    stage.classList.add('opening');

    var finished = false;
    function done() {
      if (finished) return;
      finished = true;
      showInvitation();
    }

    // Die Nutzergeste startet die Hintergrundmusik; das Video bleibt stumm.
    startMusic();
    video.muted = true;
    var p = video.play();
    if (p && typeof p.catch === 'function') {
      p.catch(function () { setTimeout(done, 900); });
    }
    video.addEventListener('ended', done);
    setTimeout(done, 11000); // Sicherheitsnetz
  }

  wrap.addEventListener('click', openCurtain);
  wrap.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCurtain(); }
  });

  function showInvitation() {
    document.body.classList.add('opened');
    stage.classList.add('gone');
    revealHero();
    startDust();
  }

  function revealHero() {
    document.querySelectorAll('.hero .reveal').forEach(function (el, i) {
      setTimeout(function () { el.classList.add('in'); }, 350 + i * 200);
    });
    // Namen Buchstabe für Buchstabe einfliegen lassen
    ['nameA', 'nameB'].forEach(function (id, w) {
      var el = document.getElementById(id);
      var text = el.textContent;
      el.textContent = '';
      Array.prototype.forEach.call(text, function (ch, i) {
        var s = document.createElement('span');
        s.className = 'ltr';
        s.textContent = ch;
        s.style.animationDelay = (0.7 + w * 0.55 + i * 0.055) + 's';
        el.appendChild(s);
      });
    });
  }

  /* ═══════════ Musik ═══════════ */
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

  /* ═══════════ Scroll-Reveal & Fortschritt ═══════════ */
  var observer = null;
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          if (en.target.id === 'finaleSec') playFinale();
          observer.unobserve(en.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal, #timeline').forEach(function (el) { observer.observe(el); });
    observer.observe(document.getElementById('finaleSec'));
  } else {
    document.querySelectorAll('.reveal, #timeline').forEach(function (el) { el.classList.add('in'); });
  }

  var scrollBar = document.getElementById('scrollBar');
  var heroEl = document.querySelector('.hero');

  function updateDrapes() {
    // Vorhang-Bahnen nur auf der ersten Seite (Hero) zeigen
    var pastHero = window.scrollY > Math.max(120, heroEl.offsetHeight * 0.6);
    document.body.classList.toggle('past-hero', pastHero);
  }

  window.addEventListener('scroll', function () {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    scrollBar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    updateDrapes();
    parallaxTick();
  }, { passive: true });

  /* ═══════════ Parallax (Illustrationen schweben) ═══════════ */
  var parallaxEls = [];
  function collectParallax() {
    parallaxEls = Array.prototype.slice.call(document.querySelectorAll('.parallax'));
  }
  collectParallax();

  var pRaf = false;
  function parallaxTick() {
    if (pRaf) return;
    pRaf = true;
    requestAnimationFrame(function () {
      pRaf = false;
      var vh = window.innerHeight;
      parallaxEls.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        var progress = (r.top + r.height / 2 - vh / 2) / vh; // -0.5 … 0.5
        el.style.transform = 'translateY(' + (progress * -26).toFixed(1) + 'px)';
      });
    });
  }

  /* ═══════════ Goldstaub im Hero ═══════════ */
  var dustStarted = false;
  function startDust() {
    if (dustStarted) return;
    dustStarted = true;
    var canvas = document.getElementById('dustCanvas');
    var ctx = canvas.getContext('2d');
    var hero = canvas.parentElement;
    var parts = [];

    function resize() {
      canvas.width = hero.clientWidth;
      canvas.height = hero.clientHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (var i = 0; i < 42; i++) {
      parts.push({
        x: Math.random(), y: Math.random(),
        r: 0.8 + Math.random() * 1.9,
        s: 0.05 + Math.random() * 0.16,
        drift: (Math.random() - 0.5) * 0.12,
        tw: Math.random() * Math.PI * 2
      });
    }

    function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var now = Date.now() / 1000;
      parts.forEach(function (p) {
        p.y -= p.s / canvas.height * 60;
        p.x += p.drift / canvas.width * 60;
        if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
        var alpha = 0.25 + 0.3 * Math.abs(Math.sin(now * 1.3 + p.tw));
        ctx.beginPath();
        ctx.arc(p.x * canvas.width, p.y * canvas.height, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(185, 138, 62, ' + alpha.toFixed(2) + ')';
        ctx.fill();
      });
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ═══════════ Konfetti ═══════════ */
  var confCanvas = document.getElementById('confettiCanvas');
  var confCtx = confCanvas.getContext('2d');
  var confetti = [];
  var confRunning = false;
  var CONF_COLORS = ['#5e1a24', '#7a2b36', '#b98a3e', '#dcbd7d', '#f4e9d2'];

  function confettiBurst(count) {
    confCanvas.width = window.innerWidth;
    confCanvas.height = window.innerHeight;
    for (var i = 0; i < count; i++) {
      var fromLeft = i % 2 === 0;
      confetti.push({
        x: fromLeft ? -10 : confCanvas.width + 10,
        y: confCanvas.height * (0.35 + Math.random() * 0.4),
        vx: (fromLeft ? 1 : -1) * (3.5 + Math.random() * 6.5),
        vy: -(5 + Math.random() * 7),
        w: 5 + Math.random() * 6,
        h: 8 + Math.random() * 8,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.3,
        color: CONF_COLORS[i % CONF_COLORS.length],
        life: 0
      });
    }
    if (!confRunning) { confRunning = true; confFrame(); }
  }

  function confFrame() {
    confCtx.clearRect(0, 0, confCanvas.width, confCanvas.height);
    confetti = confetti.filter(function (c) { return c.life < 400 && c.y < confCanvas.height + 30; });
    if (!confetti.length) { confRunning = false; return; }
    confetti.forEach(function (c) {
      c.life++;
      c.vy += 0.16;         // Schwerkraft
      c.vx *= 0.992;        // Luftwiderstand
      c.x += c.vx;
      c.y += c.vy;
      c.rot += c.vr;
      confCtx.save();
      confCtx.translate(c.x, c.y);
      confCtx.rotate(c.rot);
      confCtx.fillStyle = c.color;
      confCtx.globalAlpha = Math.max(0, 1 - c.life / 380);
      confCtx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h * (0.6 + 0.4 * Math.sin(c.life / 7)));
      confCtx.restore();
    });
    requestAnimationFrame(confFrame);
  }

  /* ═══════════ Rubbel-Karten ═══════════ */
  var scratchComplete = false;
  var cells = Array.prototype.slice.call(document.querySelectorAll('.scratch-cell'));
  var clearedCount = 0;

  cells.forEach(function (cell) {
    var canvas = cell.querySelector('.scratch-canvas');
    var ctx = canvas.getContext('2d');
    var w = canvas.width, h = canvas.height;
    var scratching = false;
    var cleared = false;
    var strokes = 0;

    // Gold-Schicht malen
    var grad = ctx.createRadialGradient(w * 0.35, h * 0.3, 10, w / 2, h / 2, w * 0.75);
    grad.addColorStop(0, '#e8cf96');
    grad.addColorStop(0.45, '#c99f52');
    grad.addColorStop(0.8, '#a97f35');
    grad.addColorStop(1, '#8f6a2b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    // Schimmer-Streifen
    ctx.globalAlpha = 0.35;
    ctx.rotate(-0.5);
    ctx.fillStyle = '#f6e7c3';
    ctx.fillRect(-w, h * 0.28, w * 3, h * 0.09);
    ctx.fillRect(-w, h * 0.52, w * 3, h * 0.05);
    ctx.rotate(0.5);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'destination-out';

    function pos(e) {
      var r = canvas.getBoundingClientRect();
      var touch = e.touches && e.touches[0];
      var cx = (touch ? touch.clientX : e.clientX) - r.left;
      var cy = (touch ? touch.clientY : e.clientY) - r.top;
      return { x: cx * (w / r.width), y: cy * (h / r.height) };
    }

    function scratch(e) {
      if (cleared) return;
      var p = pos(e);
      ctx.beginPath();
      ctx.arc(p.x, p.y, 24, 0, Math.PI * 2);
      ctx.fill();
      strokes++;
      if (strokes % 8 === 0) check();
    }

    function check() {
      var data = ctx.getImageData(0, 0, w, h).data;
      var clearedPx = 0;
      for (var i = 3; i < data.length; i += 16) {
        if (data[i] === 0) clearedPx++;
      }
      if (clearedPx / (data.length / 16) > 0.5) done();
    }

    function done() {
      if (cleared) return;
      cleared = true;
      cell.classList.add('cleared');
      clearedCount++;
      if (clearedCount === cells.length) allScratched();
    }

    canvas.addEventListener('pointerdown', function (e) {
      scratching = true;
      canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId);
      scratch(e);
    });
    canvas.addEventListener('pointermove', function (e) { if (scratching) scratch(e); });
    window.addEventListener('pointerup', function () { scratching = false; if (!cleared) { /* letzter Stand prüfen */ } });
    canvas.addEventListener('pointerup', function () { if (!cleared) check(); });
  });

  function allScratched() {
    if (scratchComplete) return;
    scratchComplete = true;
    document.getElementById('scratchDone').classList.add('show');
    document.getElementById('scratchSub').innerHTML = t('scratch.subDone');
    confettiBurst(160);
    setTimeout(function () { confettiBurst(90); }, 700);
  }

  /* ═══════════ Countdown ═══════════ */
  var target = new Date('2027-07-10T17:00:00+02:00').getTime();
  var elD = document.getElementById('cdDays');
  var elH = document.getElementById('cdHours');
  var elM = document.getElementById('cdMins');
  var elS = document.getElementById('cdSecs');

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function setNum(el, val) {
    if (el.textContent === val) return;
    el.textContent = val;
    el.classList.remove('tick');
    void el.offsetWidth; // Animation neu starten
    el.classList.add('tick');
  }

  function tick() {
    var diff = Math.max(0, target - Date.now());
    var secs = Math.floor(diff / 1000);
    setNum(elD, pad(Math.floor(secs / 86400)));
    setNum(elH, pad(Math.floor(secs / 3600) % 24));
    setNum(elM, pad(Math.floor(secs / 60) % 60));
    setNum(elS, pad(secs % 60));
  }
  tick();
  setInterval(tick, 1000);

  /* ═══════════ Finale (Vorhang fällt) ═══════════ */
  var finalePlayed = false;
  function playFinale() {
    if (finalePlayed) return;
    finalePlayed = true;
    var v = document.getElementById('finaleVideo');
    v.muted = true;
    var p = v.play();
    if (p && typeof p.catch === 'function') { p.catch(function () { /* Poster bleibt */ }); }
    confettiBurst(120);
  }

  /* ═══════════ RSVP ═══════════ */
  var RSVP_EMAIL = 'tuna-1998@live.de';
  var form = document.getElementById('rsvpForm');
  var extrasField = document.getElementById('extrasField');
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
      extrasField.classList.toggle('disabled', declined);
    });
  });

  function buildRsvpMailto() {
    var attending = form.attend.value === 'yes';
    var name = document.getElementById('guestName').value.trim();
    var email = document.getElementById('guestEmail').value.trim();
    var msg = document.getElementById('guestMsg').value.trim();

    var lines = [];
    lines.push(attending ? t('mail.attendYes') : t('mail.attendNo'));
    lines.push('');
    if (attending) {
      var extras = [];
      form.querySelectorAll('input[name="extras"]:checked').forEach(function (c) {
        extras.push(c.value === 'shuttle' ? t('mail.shuttle') : t('mail.veggie'));
      });
      lines.push(t('mail.extras') + ': ' + (extras.length ? extras.join(', ') : '–'));
      lines.push(t('mail.companions') + ': ' + guests);
    }
    lines.push(t('mail.name') + ': ' + name);
    lines.push(t('mail.email') + ': ' + email);
    if (msg) {
      lines.push('');
      lines.push(t('mail.message') + ': ' + msg);
    }

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
