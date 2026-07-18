/* ============================================================
   RSVP-Konfiguration dieser Einladung
   ------------------------------------------------------------
   supabaseUrl + supabaseAnonKey einmal eintragen, dann werden
   alle Rückmeldungen zentral gespeichert und erscheinen im
   Dashboard (website1/dashboard.html) – nur mit Zugangscode.

   Bleiben die Felder leer, öffnet das Formular wie bisher das
   E-Mail-Programm des Gastes (mailto-Fallback).
   ============================================================ */
window.RSVP_CONFIG = {
  weddingId: "einladung-3",
  supabaseUrl: "",     /* z. B. "https://abcdefgh.supabase.co" */
  supabaseAnonKey: ""  /* Supabase: Project Settings → API → anon public */
};
