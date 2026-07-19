# Sektionsbaukasten — optionale Inhalte pro Hochzeit zuschalten

Der Baukasten liegt zentral in `shared/sections.js` + `shared/sections.css` und
liefert acht optionale Content-Sektionen, die **pro Hochzeit** über die
Konfiguration ein- und ausgeschaltet werden — rein statischer Inhalt, kein Backend:

| Schlüssel    | Sektion                                       |
| ------------ | --------------------------------------------- |
| `dresscode`  | Dresscode, optional mit Farbpaletten-Vorschau |
| `hotels`     | Hotels & Übernachtung (2–4 Empfehlungskarten) |
| `anfahrt`    | Anfahrt & Parken (ergänzend zur Karte)        |
| `ablauf`     | Ablauf des Tages (Timeline)                   |
| `geschenke`  | Geschenkewünsche (Freitext + Wunschlisten-Link) |
| `kinder`     | Kinder-Hinweis (Kurzblock)                    |
| `faq`        | FAQ (aufklappbare Fragen)                     |
| `trauzeugen` | Kontakt Trauzeugen (Name + WhatsApp-Link)     |

**Wichtig:** Die Demo-Seiten in `designs/…` bleiben unverändert — der Baukasten
wird nur in den Kunden-Kopien eines Designs eingebunden. Eine Sektion erscheint
ausschließlich mit `enabled: true`; ohne `sections`-Konfiguration ändert sich
nichts am Design.

## Einbinden (in der Kunden-Kopie eines Designs)

1. `sections.css` und `sections.js` aus `shared/` in die Kunden-Kopie übernehmen
   (gleiches Vorgehen wie bei `shared/rsvp.js`).
2. In der `index.html` des Kunden:

```html
<head>
  …
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="sections.css" />
</head>
<body>
  …
  <script src="js/config.js"></script>   <!-- bestehende Konfiguration -->
  <script src="sections.js"></script>    <!-- nach der Konfiguration laden -->
</body>
```

3. Einfügepunkt: Standardmäßig erscheinen die Sektionen **vor der Fußzeile**
   (`footer`/`.footer`). Alternativ:
   - ein leeres `<div id="extraSections"></div>` an die gewünschte Stelle setzen, oder
   - `insertBefore: ".rsvp"` in der Konfiguration angeben (Sektionen erscheinen davor).

## Konfiguration

In der bestehenden Config-Datei des Designs (`js/config.js` bei einladung-2/-4,
sonst als eigener `<script>`-Block vor `sections.js` mit
`window.WEDDING_SECTIONS = { … }`):

```js
window.INVITE_CONFIG = {
  // … bestehende Inhalte …

  sections: {
    // optional: insertBefore: ".rsvp",
    // optional: order: ["ablauf", "anfahrt", "hotels", "faq"],
    // optional: theme: { accent: "#5e1a24" },  // übersteuert Design-Token

    dresscode: {
      enabled: true,
      title: "Dresscode",
      text: "Festliche Sommergarderobe in gedeckten Tönen – Weiß überlassen wir der Braut.",
      colors: ["#7d8c6f", "#b3714e", "#c2a878"],   // optional
      colorsNote: "Unsere Farbwelt als Inspiration", // optional
    },

    hotels: {
      enabled: true,
      title: "Hotels & Übernachtung",
      text: "Für alle, die bleiben möchten – unsere Empfehlungen in der Nähe.",
      items: [ // 2–4 Karten
        { name: "Hotel Sonnenhof", distance: "300 m zur Location", price: "ab 95 € / Nacht", url: "https://…", note: "Stichwort „Hochzeit“ nennen" },
        { name: "Pension Lindenblick", distance: "2 km", price: "60–80 € / Nacht", url: "https://…" },
      ],
    },

    anfahrt: {
      enabled: true,
      title: "Anfahrt & Parken",
      items: [
        { title: "Mit dem Auto", text: "A65, Ausfahrt Musterstadt, dann 5 Minuten Richtung Zentrum." },
        { title: "Parken", text: "Kostenlose Parkplätze direkt am Gut – bitte der Beschilderung folgen." },
        { title: "Bahn & Taxi", text: "Bahnhof Musterstadt, von dort 10 Minuten mit dem Taxi." },
      ],
      mapsUrl: "https://maps.google.com/…", // optional
    },

    ablauf: {
      enabled: true,
      title: "Ablauf des Tages",
      items: [
        { time: "15:00", label: "Freie Trauung", note: "im Rosengarten" },
        { time: "16:00", label: "Empfang & Aperitif" },
        { time: "18:30", label: "Dinner" },
        { time: "21:00", label: "Party bis in die Nacht" },
      ],
    },

    geschenke: {
      enabled: true,
      title: "Geschenkewünsche",
      text: "Das größte Geschenk ist, dass ihr da seid. Wer uns darüber hinaus eine Freude machen möchte: Wir sparen auf unsere Flitterwochen.",
      linkUrl: "https://…",        // optional (Wunschliste)
      linkLabel: "Zur Wunschliste", // optional
    },

    kinder: {
      enabled: true,
      title: "Hinweis zu Kindern",
      text: "Wir feiern im Kreis der Erwachsenen – gönnt euch einen unbeschwerten Abend.",
    },

    faq: {
      enabled: true,
      title: "Fragen & Antworten",
      items: [
        { q: "Gibt es Parkplätze vor Ort?", a: "Ja, direkt an der Location – kostenlos." },
        { q: "Bis wann sollen wir zusagen?", a: "Bitte bis zum 1. August über den Rückmeldebogen." },
      ],
    },

    trauzeugen: {
      enabled: true,
      title: "Fragen? Unsere Trauzeugen helfen",
      text: "Für Überraschungen, Programmpunkte und alles, was das Brautpaar nicht wissen soll.",
      contacts: [
        { name: "Lisa Muster", role: "Trauzeugin", whatsapp: "4917612345678" },
        { name: "Jan Beispiel", role: "Trauzeuge", whatsapp: "4917698765432" },
      ],
    },
  },
};
```

## Gestaltung

`sections.css` nutzt automatisch die Design-Tokens des jeweiligen Designs
(Fallback-Ketten auf `--serif`/`--font-serif`, `--wine`/`--sage-deep`/`--olive`/`--teal`,
`--paper`/`--white`/`--panel-fill` …) — die Sektionen sehen also in jedem Design
nach dem Design aus, ohne dass etwas umgestylt werden muss. Über
`sections.theme` lassen sich einzelne Token pro Hochzeit übersteuern
(`accent`, `gold`, `panel`, `ink`, `serif`, `sans`, `line`, `shadow`).
