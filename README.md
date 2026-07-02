# Ewig & Immer — Digitale Hochzeitseinladungen

Eine elegante, einseitige Website für digitale Hochzeitseinladungen. Warme Cremetöne,
Bordeaux-Akzente und feine Serifen-Typografie — inspiriert von handgefertigten Einladungen.

## Inhalt

| Datei | Beschreibung |
|-------|--------------|
| `index.html` | Struktur & Inhalte der Seite |
| `styles.css` | Design, Layout & Animationen |
| `script.js` | Navigation, Countdown, Scroll-Effekte & Kontaktformular |

## Abschnitte

- **Hero** mit animiertem Handy-Mockup und Live-Countdown
- **Features** — alles, was eine Einladung braucht
- **Kollektion** — vier Design-Stile
- **Kundenstimmen**
- **Team & Ablauf**
- **Preise** — Essentiell (175 €), Prämie (375 €), Exzellent (975 €)
- **Kontaktformular** & Footer

## Lokal ansehen

Einfach `index.html` im Browser öffnen — es sind keine Abhängigkeiten oder ein Build-Schritt nötig.

```bash
# oder mit einem lokalen Server:
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

## Anpassen

- **Farben & Schriften:** die CSS-Variablen ganz oben in `styles.css` (`:root`)
- **Texte, Namen, Datum:** direkt in `index.html`
- **Countdown-Datum:** in `script.js` (`new Date("2026-08-23T15:00:00")`)
