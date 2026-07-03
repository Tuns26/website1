# Themes

Each theme = one `:root { … }` block (paste over the existing one at the top of
`styles.css`) + one pair of Google-Fonts `<link>` tags (paste over the existing font
links in `index.html`'s `<head>`).

The CSS variable **names stay the same across every theme** (`--wine` is simply "the deep
accent", even when it's green or blue) so `styles.css` never needs renaming. Only the
values and fonts change. Also swap the `--serif` / `--sans` / `--script` families to the
ones listed with each theme, and consider the suggested **ornament glyph**.

---

## 1. Classic Bordeaux  *(base / default)*
Warm cream, deep wine red, gold. Timeless & formal. Ornament: `❦ ❧`

Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&family=Tangerine:wght@700&display=swap" rel="stylesheet" />
```
```css
:root {
  --wine: #6d1f2f; --wine-dark: #521623; --wine-soft: #8a3a48;
  --cream: #f7f1e8; --cream-2: #f1e8db; --sand: #e8dcc9;
  --ink: #3a2f2a; --ink-soft: #6b5d54; --gold: #c8a96a; --white: #fffdf9;
  --shadow: 0 20px 60px -20px rgba(82, 22, 35, 0.28); --radius: 18px;
  --serif: "Cormorant Garamond", Georgia, serif;
  --sans: "Jost", system-ui, sans-serif;
  --script: "Tangerine", cursive;
}
```

---

## 2. Sage & Gold
Soft botanical green, warm ivory, antique gold. Fresh & natural. Ornament: `❀ ❧`

Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Mulish:wght@300;400;500;600&family=Great+Vibes&display=swap" rel="stylesheet" />
```
```css
:root {
  --wine: #6a7857; --wine-dark: #4c5940; --wine-soft: #8a9873;
  --cream: #f6f4ec; --cream-2: #eef0e4; --sand: #dfe2cf;
  --ink: #37392f; --ink-soft: #626454; --gold: #c2a86b; --white: #fffef9;
  --shadow: 0 20px 60px -20px rgba(76, 89, 64, 0.28); --radius: 18px;
  --serif: "Marcellus", Georgia, serif;
  --sans: "Mulish", system-ui, sans-serif;
  --script: "Great Vibes", cursive;
}
```

---

## 3. Dusty Blue & Silver
Powder blue, soft slate, cool white. Calm & elegant. Ornament: `✦ ❧`

Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Nunito+Sans:wght@300;400;600&family=Sacramento&display=swap" rel="stylesheet" />
```
```css
:root {
  --wine: #5a7089; --wine-dark: #3f5265; --wine-soft: #7b90a6;
  --cream: #f4f6f8; --cream-2: #e9eef2; --sand: #d5dde4;
  --ink: #313a44; --ink-soft: #5c6771; --gold: #a9b7c4; --white: #ffffff;
  --shadow: 0 20px 60px -20px rgba(63, 82, 101, 0.26); --radius: 18px;
  --serif: "Playfair Display", Georgia, serif;
  --sans: "Nunito Sans", system-ui, sans-serif;
  --script: "Sacramento", cursive;
}
```

---

## 4. Blush & Rose Gold
Soft pink, rose, warm blush neutrals. Romantic & delicate. Ornament: `✿ ❀`

Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Jost:wght@300;400;500;600&family=Pinyon+Script&display=swap" rel="stylesheet" />
```
```css
:root {
  --wine: #b5738a; --wine-dark: #8f5069; --wine-soft: #c78fa2;
  --cream: #fbf4f2; --cream-2: #f7e9e7; --sand: #eecfd2; /* soft rose */
  --ink: #4a3a3f; --ink-soft: #7a666c; --gold: #d8a48f; --white: #fffdfc;
  --shadow: 0 20px 60px -20px rgba(143, 80, 105, 0.24); --radius: 18px;
  --serif: "Cormorant Garamond", Georgia, serif;
  --sans: "Jost", system-ui, sans-serif;
  --script: "Pinyon Script", cursive;
}
```

---

## 5. Midnight & Gold  *(dark, modern glam)*
Deep charcoal-navy, champagne gold. Dramatic & luxe. Ornament: `✦ ✧`
This one flips light/dark — see note below.

Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,500;0,600;1,500&family=Jost:wght@300;400;500;600&family=Tangerine:wght@700&display=swap" rel="stylesheet" />
```
```css
:root {
  --wine: #c8a96a;        /* gold becomes the accent */
  --wine-dark: #a98844; --wine-soft: #d8c08a;
  --cream: #1c1a20; --cream-2: #24222a; --sand: #34313b;
  --ink: #f3efe6; --ink-soft: #b8b2a6; --gold: #c8a96a; --white: #16151a;
  --shadow: 0 20px 60px -20px rgba(0, 0, 0, 0.6); --radius: 18px;
  --serif: "Bodoni Moda", Georgia, serif;
  --sans: "Jost", system-ui, sans-serif;
  --script: "Tangerine", cursive;
}
```
> Dark-theme note: `--cream*` are now dark surfaces and `--ink*` are light text — the
> existing rules still work because they reference these tokens. Check that the
> testimonials band (uses `--wine-dark`/`--wine`) and buttons (`--white` label on
> `--wine` fill) still read well; if a button label is too light, set the button text
> to `#16151a` for this theme.

---

## 6. Terracotta Boho
Burnt terracotta, ochre, warm sand. Earthy & relaxed. Ornament: `❋ ✿`

Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Mulish:wght@300;400;500;600&family=Sacramento&display=swap" rel="stylesheet" />
```
```css
:root {
  --wine: #b5603a; --wine-dark: #8f4526; --wine-soft: #c67d5b;
  --cream: #f8f1e7; --cream-2: #f0e5d5; --sand: #e3d0b8;
  --ink: #443528; --ink-soft: #715d49; --gold: #cc9a5a; --white: #fffdf8;
  --shadow: 0 20px 60px -20px rgba(143, 69, 38, 0.26); --radius: 18px;
  --serif: "Fraunces", Georgia, serif;
  --sans: "Mulish", system-ui, sans-serif;
  --script: "Sacramento", cursive;
}
```

---

## 7. Emerald & Champagne
Rich emerald green, champagne gold, ivory. Regal & lush. Ornament: `❦ ✦`

Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Jost:wght@300;400;500;600&family=Tangerine:wght@700&display=swap" rel="stylesheet" />
```
```css
:root {
  --wine: #1f5945; --wine-dark: #143b2e; --wine-soft: #3d745f;
  --cream: #f5f2e9; --cream-2: #ece7d8; --sand: #dcd6c2;
  --ink: #2b332e; --ink-soft: #566058; --gold: #c6ab6f; --white: #fffefa;
  --shadow: 0 20px 60px -20px rgba(20, 59, 46, 0.28); --radius: 18px;
  --serif: "EB Garamond", Georgia, serif;
  --sans: "Jost", system-ui, sans-serif;
  --script: "Tangerine", cursive;
}
```

---

## Building a custom palette (if none of the above fit)

Fill these six roles, then map them to the variables:

| Role | Variable(s) | Guidance |
|------|-------------|----------|
| Deep accent | `--wine`, `--wine-dark`, `--wine-soft` | headings-accent, buttons, testimonial band. Dark→light shades. |
| Background | `--cream`, `--cream-2` | page + section backgrounds. Keep light & warm/neutral. |
| Border/edge | `--sand` | card borders, dividers. Mid-tone of the background. |
| Text | `--ink`, `--ink-soft` | body text + muted text. High contrast on `--cream`. |
| Metallic/secondary | `--gold` | ornaments, stars, small accents. |
| Surface | `--white` | card surfaces (usually near-white; dark for dark themes). |

Keep `--shadow` tinted with the deep accent's dark shade at ~0.26 alpha.
The four **Collection** phone cards use their own inline gradients in `styles.css`
(`.design-card__phone--sage/-wine/-blush/-noir`) — recolor those to echo the theme
if you want them on-palette.
