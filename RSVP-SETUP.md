# Einheitliches RSVP & Gäste-Dashboard — Einrichtung

Alle vier Einladungs-Designs melden Rückmeldungen jetzt einheitlich an eine
zentrale Datenbank (Supabase). Das Brautpaar sieht seine Antworten im
gemeinsamen **Gäste-Dashboard** (`dashboard.html`) — aber nur mit seinem
persönlichen Zugangscode. Öffentlich ist nichts einsehbar.

## Wie es zusammenhängt

```
Gast füllt Formular aus (einladung_1 … einladung_4)
        │  rsvp.js  →  POST an Supabase (Tabelle rsvps)
        ▼
zentrale Datenbank (pro Rückmeldung: wedding_id, Name, Zusage/Absage, …)
        │  dashboard_data(zugangscode)  ← nur mit gültigem Code
        ▼
dashboard.html  →  Kennzahlen, Programmpunkte, Tabelle, CSV-Export
```

- **Einreichen** dürfen Gäste anonym (Insert-Policy).
- **Lesen** geht ausschließlich über die Funktion `dashboard_data(code)`.
  Es gibt keine Select-Policy — ohne Code liefert die Datenbank nichts.
- Jeder Code gehört zu genau einer Hochzeit → jedes Brautpaar sieht nur die
  eigenen Rückmeldungen.
- Ist keine Datenbank konfiguriert, funktionieren die Formulare wie bisher
  über das E-Mail-Programm (mailto-Fallback). Der Fallback greift auch,
  wenn die Datenbank einmal nicht erreichbar ist.

## Einrichtung (einmalig, ca. 15 Minuten)

1. **Supabase-Projekt anlegen** — <https://supabase.com>, kostenloses Projekt
   erstellen.
2. **Schema einspielen** — im Supabase *SQL Editor* den Inhalt von
   `setup/supabase-schema.sql` ausführen. Vorher die Platzhalter
   `HIER-ZUFALLSCODE-…` durch lange Zufallscodes ersetzen
   (im SQL Editor erzeugen: `select encode(gen_random_bytes(16), 'hex');`).
3. **Schlüssel kopieren** — unter *Project Settings → API* die Projekt-URL und
   den `anon public`-Key kopieren.
4. **Dashboard konfigurieren** — in `dashboard.html` oben im Skript
   `SUPABASE_URL` und `SUPABASE_ANON_KEY` eintragen.
5. **Einladungen konfigurieren** — in jedem Einladungs-Repo dieselben zwei
   Werte in `rsvp-config.js` eintragen:
   - `einladung_1/rsvp-config.js`
   - `einladung_2/js/rsvp-config.js`
   - `einladung_3/rsvp-config.js`
   - `einladung_4/js/rsvp-config.js`
   Die `weddingId` ist bereits gesetzt und muss zur Zeile in der Tabelle
   `weddings` passen.
6. **Zugangscode übergeben** — jedes Brautpaar bekommt seinen Code persönlich
   (nicht veröffentlichen). Anmeldung: `dashboard.html` öffnen und Code
   eingeben. Ein Direktlink `dashboard.html?code=…` funktioniert auch; die
   Seite entfernt den Code sofort aus der Adresszeile und merkt ihn sich
   lokal im Browser.

## Neuen Kunden anlegen

```sql
insert into weddings (id, couple, dashboard_token)
values ('einladung-5', 'Vorname & Vorname', '<zufallscode>');
```

Dann im neuen Einladungs-Repo `rsvp-config.js` mit `weddingId: "einladung-5"`
und den Supabase-Zugangsdaten füllen.

## Sicherheit — Kurzfassung

- Der `anon public`-Key darf im Frontend stehen; er erlaubt nur, was die
  Policies erlauben: Rückmeldungen **einreichen**, nichts lesen.
- Die Zugangscodes sind lange Zufallswerte und wirken wie ein Passwort pro
  Hochzeit. Bei Verlust: in der Tabelle `weddings` einfach einen neuen Code
  setzen.
- `dashboard.html` ist mit `noindex` markiert und zeigt ohne gültigen Code
  keinerlei Daten an.

## Gemeinsamer Code

`shared/rsvp.js` ist die Quelle des RSVP-Moduls; identische Kopien liegen in
den vier Einladungs-Repos (`rsvp.js` bzw. `js/rsvp.js`). Änderungen zuerst in
`shared/rsvp.js` machen und dann in die Repos kopieren.
