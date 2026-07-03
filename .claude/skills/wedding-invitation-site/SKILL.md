---
name: wedding-invitation-site
description: Build an elegant single-page digital wedding-invitation website (like "WeddingLink") in a chosen design/theme. Use whenever the user wants to create, generate, or restyle a wedding / marriage invitation site, "Hochzeitseinladung", digital invite landing page, or asks for the same layout in a different color palette or style. Produces vanilla HTML/CSS/JS with no build step.
---

# Wedding Invitation Website

Generate a polished, single-page digital wedding-invitation website. The **layout and
structure stay the same** every time; only the **theme** (colors, fonts, ornaments,
copy) changes. This lets the user spin up many designs quickly from one proven base.

## What the base site contains

A complete responsive one-pager with these sections, top to bottom:

1. **Fixed nav** — brand mark + links + CTA, turns opaque on scroll, mobile hamburger
2. **Hero** — eyebrow, big serif title, script accent line, lead text, two CTAs,
   stats row, and an **animated phone mockup with a live countdown** to the wedding date
3. **Features** — "Alles, was Sie brauchen" card grid (RSVP, map, gallery, WhatsApp…)
4. **Collection** — four phone-style design cards in different color moods
5. **Testimonials** — quotes on a saturated accent-color band
6. **Team** — studio intro + photo block
7. **Process** — three numbered steps + CTA
8. **Pricing** — three tiers, middle one featured ("Beliebteste Wahl")
9. **Contact** — form (front-end only demo) with success note
10. **Footer** — brand, link columns, legal bar

Interactivity in `script.js`: sticky nav, mobile menu, scroll-reveal via
IntersectionObserver, the live countdown, and the demo contact form.
Accessibility: `prefers-reduced-motion` fallback is included.

## Files

The base template lives in `assets/` — three files, no dependencies, no build:

- `assets/index.html` — structure & copy
- `assets/styles.css` — all styling; **the theme lives in the `:root` block at the top**
- `assets/script.js` — interactivity (countdown date is set here)

## How to build a new design

1. **Copy the three files** from this skill's `assets/` into the target location
   (default: the repo/site root, or a subfolder like `designs/<name>/` if the user
   wants several side by side).

2. **Pick or ask for a theme.** If the user named a vibe (e.g. "sage green & gold",
   "dark modern", "beach", "boho") match it. Otherwise offer options from
   `references/themes.md`, which contains ready-made `:root` blocks + Google-Fonts
   links for several distinct styles. Don't ask more than one quick question — pick a
   sensible default and proceed if unsure.

3. **Apply the theme** by replacing:
   - the `:root { … }` variable block at the top of `styles.css` with the chosen theme's block
   - the two `<link … fonts.googleapis.com …>` tags in the `<head>` of `index.html`
     with the theme's font links (and the `--serif` / `--sans` / `--script` vars already
     reference those families)
   - ornament glyphs if the theme calls for it (search `styles.css`/`index.html` for
     `❦ ❧ ❀ ✿ ✦ ✧ ❤` and swap to match the motif — e.g. florals vs. geometric)

4. **Personalize the copy** in `index.html` when the user gives details: couple names,
   wedding date, venue, studio/brand name (`WeddingLink`), prices, testimonials.
   Keep the German copy unless the user wants another language.

5. **Update the countdown date** in `script.js`
   (`new Date("2026-08-23T15:00:00")`) and the matching text in the hero invite card,
   so the live counter is correct.

6. **Verify** by rendering the page and taking a full-page screenshot (see below),
   then show/describe the result. Because sections use scroll-reveal, capture with
   reduced-motion emulation so all content is visible in a static shot.

## Rendering a preview screenshot

Chromium + Playwright are preinstalled. Emulate reduced motion so scroll-reveal
elements aren't blank in a full-page capture:

```js
// node preview.js  — chrome path: /opt/pw-browsers/chromium-*/chrome-linux/chrome
const { chromium } = require('/opt/node22/lib/node_modules/playwright/index.js');
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('file://' + process.env.PAGE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await page.screenshot({ path: process.env.OUT, fullPage: true });
  await browser.close();
})();
```

## Design guardrails

- Keep it **one cohesive palette**: one deep accent, one warm/neutral background,
  one soft card surface, one metallic/secondary accent. Themes in `references/themes.md`
  already satisfy this — don't mix two themes.
- Preserve the typographic system: an elegant **serif** for headings, a clean **sans**
  for body, an optional **script** for the couple's names / accent lines.
- Keep contrast readable (body text on background, button label on button fill).
- Don't add external JS/CSS frameworks — the value here is a zero-dependency, instantly
  editable static site.
- Never invent testimonials as real people's endorsements beyond placeholder first names.

## Making several designs at once

If the user wants a set (e.g. "3 designs"), create `designs/<theme-name>/` folders,
each with its own copy of the three files and a different theme applied, and optionally
a small `index.html` gallery at the root linking to each. Confirm the folder layout
before generating many copies.
