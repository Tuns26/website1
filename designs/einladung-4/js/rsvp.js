/* ============================================================
   WeddingLink – zentrales RSVP-Modul
   Diese Datei ist in allen Einladungs-Designs identisch.
   Quelle: website1/shared/rsvp.js – Änderungen zuerst hier machen,
   dann in die Einladungs-Repos kopieren.

   Sendet Rückmeldungen an die zentrale Datenbank (Supabase).
   Ist keine Datenbank konfiguriert (siehe rsvp-config.js), nutzt
   das jeweilige Design weiterhin seinen mailto-Weg als Fallback.
   ============================================================ */
(function () {
  'use strict';

  var cfg = window.RSVP_CONFIG || {};

  function configured() {
    return Boolean(cfg.supabaseUrl && cfg.supabaseAnonKey && cfg.weddingId);
  }

  /* payload: { name, email, attendance: 'yes'|'no', persons, events: [], food, message } */
  function submit(payload) {
    if (!configured()) {
      return Promise.reject(new Error('rsvp-not-configured'));
    }
    var body = {
      wedding_id: cfg.weddingId,
      name: (payload.name || '').trim(),
      email: (payload.email || '').trim() || null,
      attendance: payload.attendance === 'no' ? 'no' : 'yes',
      persons: Math.max(1, parseInt(payload.persons, 10) || 1),
      events: Array.isArray(payload.events) ? payload.events : [],
      food: (payload.food || '').trim() || null,
      message: (payload.message || '').trim() || null
    };
    return fetch(cfg.supabaseUrl.replace(/\/+$/, '') + '/rest/v1/rsvps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': cfg.supabaseAnonKey,
        'Authorization': 'Bearer ' + cfg.supabaseAnonKey,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(body)
    }).then(function (res) {
      if (!res.ok) throw new Error('rsvp-http-' + res.status);
    });
  }

  window.WeddingRsvp = { configured: configured, submit: submit };
})();
