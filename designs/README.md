# Designs — deine fertigen Einladungen einbinden

Jedes Design bekommt hier einen eigenen Unterordner mit einer `index.html` als Startseite:

```
designs/
├── design-1/          ← dein erstes Design (kompletter Repo-Inhalt)
│   └── index.html
└── design-2/          ← dein zweites Design
    └── index.html
```

## So ersetzt du die Platzhalter

1. Kopiere **alle Dateien** aus deinem Design-Repository in den jeweiligen Ordner
   (die `index.html` des Designs muss direkt im Ordner liegen).
   - Am einfachsten über die GitHub-Weboberfläche: diesen Ordner öffnen →
     *Add file → Upload files* → alle Dateien des Designs hochladen.
   - Oder lokal: beide Repos klonen und die Dateien hierher kopieren.
2. Fertig — die „Demo ansehen"-Buttons auf der Startseite zeigen bereits auf
   `designs/design-1/index.html` und `designs/design-2/index.html`.

## Ordner umbenennen oder Designs ergänzen

Der Dateiname ist mit der Design-Karte in `index.html` (Abschnitt „Kollektion")
verknüpft — dort steht bei jeder Karte:

```html
<article class="design-card" data-demo="designs/design-1/index.html" data-stil="…">
```

- `data-demo` = Pfad zur Demo-Startseite
- `data-stil` = Stil-Name, der auf der Bestellseite vorausgewählt wird
  (muss einer Option im „Gewünschter Stil"-Dropdown in `bestellen.html` entsprechen)

Für ein weiteres Design: neuen Ordner anlegen, eine Karte in der Kollektion
kopieren und beide Attribute anpassen.

## Wichtig für die Demos

- Die Demo läuft in einem eingebetteten Rahmen (iframe) im Hochformat —
  Designs, die für Mobilgeräte gebaut sind, sehen darin automatisch richtig aus.
- Relative Pfade innerhalb des Designs (Bilder, CSS, JS) funktionieren normal.
- Externe Links im Design öffnen sich im Rahmen — für reine Demos am besten
  Platzhalter-Daten und keine echten RSVP-Formulare verwenden.
