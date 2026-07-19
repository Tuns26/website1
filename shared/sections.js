/* ============================================================
   WeddingLink – modularer Sektionsbaukasten
   Diese Datei ist in allen Einladungs-Designs identisch.
   Quelle: website1/shared/sections.js – Änderungen zuerst hier
   machen, dann in die Einladungs-Repos kopieren.

   Optionale, pro Hochzeit zuschaltbare Content-Sektionen:
   Dresscode · Hotels & Übernachtung · Anfahrt & Parken ·
   Ablauf des Tages · Geschenkewünsche · Kinder-Hinweis ·
   FAQ · Kontakt Trauzeugen

   Aktivierung über die bestehende Konfiguration des Designs:

     window.INVITE_CONFIG.sections = {
       dresscode: { enabled: true, text: "…", colors: ["#7d8c6f"] },
       hotels:    { enabled: true, items: [{ name, distance, price, url }] },
       …
     };

   Eine Sektion erscheint nur mit enabled: true – ohne Konfiguration
   bleibt die Einladung exakt wie bisher (Demos unverändert).
   Rein statischer Inhalt, kein Backend. Die Optik kommt aus
   sections.css und den Design-Tokens des jeweiligen Designs.
   ============================================================ */
(function () {
  'use strict';

  var root = (window.INVITE_CONFIG && window.INVITE_CONFIG.sections) || window.WEDDING_SECTIONS;
  if (!root) return;

  /* ---------- Mini-Helfer (alle Inhalte als Text, nie als HTML) ---------- */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null && text !== '') node.textContent = text;
    return node;
  }
  function section(mod, title, subtitle) {
    var sec = el('section', 'ws ws--' + mod);
    if (title) sec.appendChild(el('h2', 'ws__title', title));
    if (subtitle) sec.appendChild(el('p', 'ws__sub', subtitle));
    return sec;
  }
  function on(s) { return s && s.enabled === true; }
  function link(url, label) {
    var a = el('a', 'ws__link', label);
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    return a;
  }

  /* ---------- Dresscode (optional mit Farbpalette) ---------- */
  function renderDresscode(s) {
    var sec = section('dresscode', s.title || 'Dresscode', s.subtitle);
    if (s.text) sec.appendChild(el('p', 'ws__text', s.text));
    if (Array.isArray(s.colors) && s.colors.length) {
      var pal = el('div', 'ws-palette');
      pal.setAttribute('aria-label', 'Farbpalette');
      s.colors.forEach(function (c) {
        var dot = el('span', 'ws-palette__dot');
        dot.style.background = c;
        pal.appendChild(dot);
      });
      sec.appendChild(pal);
      if (s.colorsNote) sec.appendChild(el('p', 'ws__note', s.colorsNote));
    }
    return sec;
  }

  /* ---------- Hotels & Übernachtung ---------- */
  function renderHotels(s) {
    if (!Array.isArray(s.items) || !s.items.length) return null;
    var sec = section('hotels', s.title || 'Hotels & Übernachtung', s.subtitle);
    if (s.text) sec.appendChild(el('p', 'ws__text', s.text));
    var grid = el('div', 'ws-hotels');
    s.items.forEach(function (h) {
      var card = el('article', 'ws-hotel');
      card.appendChild(el('h3', 'ws-hotel__name', h.name));
      if (h.distance) card.appendChild(el('p', 'ws-hotel__meta', h.distance));
      if (h.price) card.appendChild(el('p', 'ws-hotel__price', h.price));
      if (h.note) card.appendChild(el('p', 'ws-hotel__note', h.note));
      if (h.url) card.appendChild(link(h.url, h.linkLabel || 'Zur Website'));
      grid.appendChild(card);
    });
    sec.appendChild(grid);
    return sec;
  }

  /* ---------- Anfahrt & Parken (ergänzend zur Karte) ---------- */
  function renderAnfahrt(s) {
    var sec = section('anfahrt', s.title || 'Anfahrt & Parken', s.subtitle);
    if (s.text) sec.appendChild(el('p', 'ws__text', s.text));
    if (Array.isArray(s.items) && s.items.length) {
      var list = el('div', 'ws-infos');
      s.items.forEach(function (i) {
        var row = el('div', 'ws-info');
        if (i.title) row.appendChild(el('h3', 'ws-info__title', i.title));
        if (i.text) row.appendChild(el('p', 'ws-info__text', i.text));
        list.appendChild(row);
      });
      sec.appendChild(list);
    }
    if (s.mapsUrl) sec.appendChild(link(s.mapsUrl, s.mapsLabel || 'Route in Maps öffnen'));
    return sec;
  }

  /* ---------- Ablauf des Tages (Timeline) ---------- */
  function renderAblauf(s) {
    if (!Array.isArray(s.items) || !s.items.length) return null;
    var sec = section('ablauf', s.title || 'Ablauf des Tages', s.subtitle);
    var ol = el('ol', 'ws-timeline');
    s.items.forEach(function (i) {
      var li = el('li', 'ws-timeline__item');
      li.appendChild(el('span', 'ws-timeline__time', i.time));
      var body = el('div', 'ws-timeline__body');
      body.appendChild(el('span', 'ws-timeline__label', i.label));
      if (i.note) body.appendChild(el('span', 'ws-timeline__note', i.note));
      li.appendChild(body);
      ol.appendChild(li);
    });
    sec.appendChild(ol);
    return sec;
  }

  /* ---------- Geschenkewünsche ---------- */
  function renderGeschenke(s) {
    var sec = section('geschenke', s.title || 'Geschenkewünsche', s.subtitle);
    if (s.text) sec.appendChild(el('p', 'ws__text', s.text));
    if (s.linkUrl) sec.appendChild(link(s.linkUrl, s.linkLabel || 'Zur Wunschliste'));
    return sec;
  }

  /* ---------- Kinder-Hinweis (Kurzblock) ---------- */
  function renderKinder(s) {
    var sec = section('kinder', s.title || 'Hinweis zu Kindern');
    if (s.text) sec.appendChild(el('p', 'ws__text', s.text));
    return sec;
  }

  /* ---------- FAQ (aufklappbar) ---------- */
  function renderFaq(s) {
    if (!Array.isArray(s.items) || !s.items.length) return null;
    var sec = section('faq', s.title || 'Fragen & Antworten', s.subtitle);
    var list = el('div', 'ws-faq');
    s.items.forEach(function (item) {
      var d = el('details', 'ws-faq__item');
      d.appendChild(el('summary', 'ws-faq__q', item.q));
      d.appendChild(el('p', 'ws-faq__a', item.a));
      list.appendChild(d);
    });
    sec.appendChild(list);
    return sec;
  }

  /* ---------- Kontakt Trauzeugen (Name + WhatsApp) ---------- */
  function renderTrauzeugen(s) {
    if (!Array.isArray(s.contacts) || !s.contacts.length) return null;
    var sec = section('trauzeugen', s.title || 'Fragen? Unsere Trauzeugen helfen', s.subtitle);
    if (s.text) sec.appendChild(el('p', 'ws__text', s.text));
    var grid = el('div', 'ws-contacts');
    s.contacts.forEach(function (c) {
      var card = el('div', 'ws-contact');
      card.appendChild(el('p', 'ws-contact__name', c.name));
      if (c.role) card.appendChild(el('p', 'ws-contact__role', c.role));
      if (c.whatsapp) {
        var wa = link('https://wa.me/' + String(c.whatsapp).replace(/[^0-9]/g, ''), 'Per WhatsApp schreiben');
        wa.className = 'ws__link ws-contact__wa';
        card.appendChild(wa);
      }
      grid.appendChild(card);
    });
    sec.appendChild(grid);
    return sec;
  }

  var RENDERERS = {
    dresscode: renderDresscode,
    hotels: renderHotels,
    anfahrt: renderAnfahrt,
    ablauf: renderAblauf,
    geschenke: renderGeschenke,
    kinder: renderKinder,
    faq: renderFaq,
    trauzeugen: renderTrauzeugen
  };
  var DEFAULT_ORDER = ['dresscode', 'hotels', 'anfahrt', 'ablauf', 'geschenke', 'kinder', 'faq', 'trauzeugen'];

  function build() {
    var wrap = el('div', 'ws-sections');
    if (root.theme) {
      Object.keys(root.theme).forEach(function (k) {
        wrap.style.setProperty('--ws-' + k, root.theme[k]);
      });
    }
    var count = 0;
    (Array.isArray(root.order) ? root.order : DEFAULT_ORDER).forEach(function (key) {
      var cfg = root[key];
      if (!on(cfg) || !RENDERERS[key]) return;
      var sec = RENDERERS[key](cfg);
      if (sec) { wrap.appendChild(sec); count++; }
    });
    return count ? wrap : null;
  }

  function mount() {
    var wrap = build();
    if (!wrap) return;
    // 1. Expliziter Ankerpunkt im Design
    var host = document.getElementById('extraSections');
    if (host) { host.appendChild(wrap); return; }
    // 2. Konfigurierter Einfügepunkt (Sektionen erscheinen davor)
    var ref = root.insertBefore ? document.querySelector(root.insertBefore) : null;
    // 3. Standard: vor der Fußzeile des Designs
    if (!ref) ref = document.querySelector('footer, .footer');
    if (ref && ref.parentNode) ref.parentNode.insertBefore(wrap, ref);
    else (document.querySelector('main') || document.body).appendChild(wrap);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
