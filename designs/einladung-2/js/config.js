// ============================================================
//  EINLADUNGS-KONFIGURATION
//  Hier alle Texte, Namen, Datum und Ort anpassen.
// ============================================================
window.INVITE_CONFIG = {
  // Namen des Paares
  nameOne: "Anna",
  nameTwo: "Thomas",

  // Kleine Zeile über den Namen
  announcement: "Wir heiraten",

  // Datum & Uhrzeit des Events (für Anzeige + Countdown)
  dateDisplay: "12. September 2026",
  eventDate: "2026-09-12T15:00:00",

  // Countdown-Texte
  countdownTitle: "Countdown",
  countdownSubtitle: "Bis zum schönsten Tag unseres Lebens",

  // Ablauf des Tages
  scheduleTitle: "Details des Tages",
  scheduleSubtitle: "Alles, was ihr wissen müsst",
  schedule: [
    { time: "15:00", label: "Freie Trauung", icon: "rings" },
    { time: "16:00", label: "Empfang & Aperitif", icon: "glasses" },
    { time: "18:30", label: "Dinner", icon: "dinner" },
    { time: "21:00", label: "Party bis in die Nacht", icon: "music" },
  ],

  // Location
  locationTitle: "Location",
  locationName: "Gut Sonnenhof",
  locationTime: "Von 15:00 bis 01:00 Uhr",
  locationAddress: "Gut Sonnenhof, Musterweg 1, 12345 Musterstadt",
  // Link, der beim Klick auf "In Maps öffnen" geöffnet wird
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gut+Sonnenhof+Musterstadt",

  // Dresscode
  dresscodeTitle: "Dresscode",
  dresscodeSubtitle: "Damit wir alle ein schönes Bild abgeben",
  dresscodeText:
    "Wir wünschen uns festliche Sommergarderobe in gedeckten Tönen. " +
    "Lasst euch gern von unserer Farbwelt inspirieren – Weiß und Creme überlassen wir der Braut.",
  dresscodeColors: ["#7d8c6f", "#b3714e", "#c2a878", "#8d9bb0", "#6b5d4f"],

  // FAQ
  faqTitle: "Fragen & Antworten",
  faqSubtitle: "Das Wichtigste auf einen Blick",
  faqs: [
    {
      q: "Dürfen wir unsere Kinder mitbringen?",
      a: "Wir feiern im kleinen Kreis der Erwachsenen – gönnt euch einen unbeschwerten Abend! Sprecht uns bei Fragen gern an.",
    },
    {
      q: "Was wünscht ihr euch zur Hochzeit?",
      a: "Das größte Geschenk ist, dass ihr diesen Tag mit uns feiert. Wer uns darüber hinaus eine Freude machen möchte: Wir sparen auf unsere Flitterwochen.",
    },
    {
      q: "Gibt es Parkplätze vor Ort?",
      a: "Ja, direkt an der Location stehen ausreichend kostenlose Parkplätze zur Verfügung.",
    },
    {
      q: "Können wir in der Nähe übernachten?",
      a: "In der Umgebung gibt es mehrere Hotels und Pensionen. Meldet euch gern, wir schicken euch unsere Empfehlungen.",
    },
    {
      q: "An wen können wir uns bei Fragen wenden?",
      a: "Schreibt uns jederzeit eine Nachricht – die Kontaktdaten findet ihr im Rückmeldebogen.",
    },
  ],

  // Rückmeldebogen (RSVP)
  rsvpTitle: "Rückmeldebogen",
  rsvpText: "Bitte gebt uns bis zum 1. August 2026 Bescheid, ob ihr mit uns feiert.",
  rsvpEmail: "kingt-26@hotmail.com",
  rsvpWhatsapp: "", // z. B. "4917612345678" (mit Ländervorwahl, ohne +) – leer lassen, um den Button auszublenden

  // Fußzeile
  footerText: "Wir freuen uns auf euch",

  // Medien (generierte Aquarell-Assets)
  assets: {
    // Umschlag-Intro: Es wird direkt der erste Frame des Videos gezeigt
    // (bewusst kein separates Poster-Bild).
    envelopeVideo: "assets/envelope-open.mp4",
    heroImage: "https://d8j0ntlcm91z4.cloudfront.net/user_3FvydqbGOOHUpbISUQX0A2zheMB/hf_20260703_055741_967d9f0e-bcfe-4384-a287-7a6ab368a350.png",
    heroVideo: "https://d8j0ntlcm91z4.cloudfront.net/user_3FvydqbGOOHUpbISUQX0A2zheMB/hf_20260703_062111_ca39e378-ca0a-4f8c-8a4b-28bb91076abb.mp4",
    locationImage: "https://d8j0ntlcm91z4.cloudfront.net/user_3FvydqbGOOHUpbISUQX0A2zheMB/hf_20260703_060222_e5eb001d-4f76-4870-906e-1e03189b5b1c.png",
    // Melodie, die nach dem Öffnen des Umschlags startet
    music: "assets/melody.m4a",
  },
};
