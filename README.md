# Handoff: CIC Sol Naciente de Pastos Grandes — Website Redesign

## Overview
A full single-page website for the **Comunidad Indígena Colla Sol Naciente de Pastos Grandes**, an Indigenous Colla community in the highlands of the Atacama Desert, northern Chile. The site is a redesign of the existing `cicsolnacientedepastosgrandes.cl` — an editorial, institutional presentation of the community's memory, territory, cosmovisión, and medicinal-herb project ("Proyecto Herbolaria"). All copy is in **Spanish** and must stay in Spanish.

## About the Design Files
The files in this bundle (`index.html`, `styles.css`, `app.js`, `assets/`, `fonts/`) are a **design reference created in HTML** — a working prototype showing the intended look, content, and behavior. They are already clean, dependency-free static files (no build step, no framework) and can be deployed nearly as-is, **or** recreated in whatever environment the target site uses (e.g. a CMS theme, React/Vue/Astro, static-site generator) following that environment's conventions. If there is no existing codebase, deploying these static files directly is a perfectly valid path.

There is no JS framework — `app.js` is ~60 lines of vanilla JS (sticky header, mobile drawer, IntersectionObserver scroll reveals). Fonts are self-hosted (League Spartan) + Google Fonts (Inter).

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, layout, and interactions. Recreate pixel-faithfully. The only placeholders are the **photographs** — see Assets.

## Design System Basis
Built on the **Personal DS** structure (League Spartan display + Inter body, 8px radii, soft flat shadows, 4-pt spacing) with an **earthy Andean palette** layered on top, anchored by the deep teal-navy brand. No gradients-as-decoration, no emoji. Editorial-institutional tone; UPPERCASE wide-tracked display type; sentence-case body.

## Design Tokens
All tokens are defined as CSS custom properties at the top of `styles.css` (`:root`). Key values:

### Colors
| Token | Value | Use |
|---|---|---|
| `--brand-900` | `rgb(10,59,88)` | Brand anchor: deep sections, footer, primary buttons |
| `--brand-800` | `rgb(12,74,110)` | Hover on brand |
| Cosmovisión bg | `#0c2c41` | Deep section variant |
| Footer bg | `#081d2e` | Darkest |
| `--sand-50` | `#f7f2e9` | Page background (warm paper) |
| `--sand-100` | `#f1e9da` | Alt section background |
| `--sand-200` | `#e7dcc7` | Portrait/placeholder tone |
| `--clay-700` | `#8f4327` | Clay dark (button hover, dates) |
| `--clay-600` | `#a8512f` | **Primary accent** (eyebrows, CTAs, icons) |
| `--clay-500` | `#bd6440` | Clay mid |
| `--clay-100` | `#ecd4c5` | Use-tag background |
| `--sun-600/500/400/200` | `#c2862f / #d59a3c / #e3b660 / #f0d8a4` | Ochre rising-sun accents (on dark) |
| `--sky-700…100` | `#3c5a6e … #d3e0e7` | Altiplano blue (bridges to brand) |
| `--ink-900` | `#2a241d` | Primary text on sand |
| `--ink-700` | `#453d31` | Body text |
| `--ink-500` | `#6c6253` | Muted text |
| `--on-deep` | `#f3ece0` | Text on deep teal |
| `--on-deep-2` | `#b9c8d2` | Muted text on deep teal |
| `--line` | `rgba(42,36,29,0.14)` | Hairline borders |

### Typography
- **Display** (`--font-display`): `"League Spartan", system-ui` — weight 500, UPPERCASE, `letter-spacing` 0.02–0.22em. Used for headings, eyebrows, numbers, wordmark, dates.
- **Body** (`--font-body`): `"Inter", system-ui` — weights 400/450/500/600/650/700.
- Base body: 17px / line-height 1.6 / weight 450.
- Hero H1: `clamp(48px, 8.4vw, 132px)`, line-height 0.92, letter-spacing 0.02em, white.
- Section H2: `clamp(32px, 4.6vw, 58px)`, line-height ~0.98.
- Eyebrow label: League Spartan, 13px, UPPERCASE, letter-spacing 0.22em, color `--clay-600`, with a 26px clay rule before it (`.eyebrow::before`).

### Spacing / radii / shadows
- 4-pt scale. Section vertical padding: `clamp(72px, 11vh, 136px)`. Page gutter: `clamp(20px, 5vw, 64px)`. Max content width: `1180px`.
- Radii: `--radius-sm 5px`, `--radius-md 8px` (buttons), `--radius-lg 14px` (cards), `--radius-pill 9999px`.
- Shadows: `--shadow-xs`, `--shadow-sm 0 2px 8px rgba(42,36,29,.07)`, `--shadow-md 0 12px 34px rgba(42,36,29,.12)` (card hover).

## Screens / Views
Single scrolling page. Sections in order (each has an `id` used by nav + smooth-scroll):

1. **Header / nav** (`.site-header`, fixed) — Rising-sun SVG mark + two-line wordmark ("Comunidad Colla / SOL NACIENTE"). Nav links: Quiénes somos, Cosmovisión, Herbolaria, Herbario, Noticias. Clay "Contacto" button. Transparent over hero; on scroll >40px gains `.scrolled` (blurred sand background, hairline border) via `app.js`. Collapses to a hamburger + full-screen `.drawer` below 900px.

2. **Hero** (`#inicio`, `.hero`, 100svh) — Full-bleed background photo (`assets/hero.jpg`) with a dark gradient overlay (`.hero::after`). Location pill ("Pastos Grandes · Atacama · Chile"). H1 "SOL NACIENTE" with ochre subtitle "de Pastos Grandes". Lede paragraph (the poetic intro). Two buttons: clay "Conoce nuestra historia" (→ #quienes), ghost "Proyecto Herbolaria" (→ #herbolaria). Animated scroll cue bottom-center.

3. **Lede band** (`.lede-band`) — Single large statement: "Un tronco familiar, *una decisión histórica:* quedarse." (accent words in clay italic).

4. **Quiénes somos** (`#quienes`, `.story-grid`, 2-col) — Left: eyebrow, founded pill "24·11·2012", two prose paragraphs, outline button "Nuestra cosmovisión". Right: two `.ancestor` cards (portrait + role label + name + bio) for Don Marcos Bordones Quiroga (linaje paterno) and Doña Pabla Segura Villanueva (linaje materno).

5. **Manifesto quote** (`.section-deep`) — Deep teal band. Large ochre quotation mark + the patriarch's blockquote about "un hombre sin tierra y sin agua no es nada" + cite.

6. **Cosmovisión** (`#cosmovision`, bg `#0c2c41`, `.relation-grid` 2-col) — Left: eyebrow "Nuestra cosmovisión", H2 "La vida es relación", paragraph, `.cerros-note` (left ochre border) about cerros tutelares. Right: 7 pill `.chip`s with line icons — Aves, Animales, Insectos, Plantas, Piedras, Aguas, Espíritus (hover lifts + ochre border).

7. **Herbolaria** (`#herbolaria`, `.section-alt`) — Section head (eyebrow "Proyecto Herbolaria · Un sistema vivo", H2, deck). `.triad`: three `.card`s numbered 01/02/03 — "Su hábitat", "Su tiempo", "Su palabra" (icon, hover lifts + top clay→sun bar reveals). Below, `.cartografia` 2-col: map image + "Un mapa que se hereda" text.

8. **Herbario** *(PROPOSED — labelled "Sección propuesta")* (`#herbario`, `.herbario-grid` 4-col) — Header with "Aportar conocimiento" outline button. 8 `.plant` cards: square photo, scientific name (clay italic), common name (League Spartan), habitat tag + use tag (clay). Plants: Rica rica, Bailahuén, Chachacoma, Pingo-pingo, Copa-copa, Tola, Cachiyuyo, Muña-muña. Disclaimer footnote that uses are traditional knowledge, not medical advice. **Verify species/uses with the community before publishing.**

9. **Manual** (`.section-alt`, `.manual` 2-col) — Book-cover image + "Nacido de la tierra" text, 3-item check feature list, primary "Solicitar el manual" button.

10. **Timeline** *(PROPOSED)* (`#historia`, `.timeline-wrap` 2-col) — Header + vertical `.timeline` with 4 `.tl-item`s (Generaciones / 2012 / 2018 / Hoy), each a clay dot on a gradient rail, year (League Spartan), title, description.

11. **Noticias** *(PROPOSED template)* (`#noticias`, `.section-alt`, `.news-grid` 3-col) — 3 `.news` cards (image, date eyebrow, title, excerpt, "Leer más" with arrow). Placeholder content to be replaced with real news.

12. **Closing manifesto** (`.closing`, clay `#a8512f` background) — Centered eyebrow "Resistencia y ternura", large H2, paragraph. Faint large rising-sun mark bleeding off the bottom.

13. **Contacto** (`#contacto`, `.contact`, deep teal, 2-col) — Left: "Escríbenos" + deck. Right: `.contact-card` with email, territory, community rows (ochre icons). Email is a placeholder `contacto@cicsolnacientedepastosgrandes.cl` — confirm the real address (original site obfuscated it).

14. **Footer** (`.site-footer`, darkest `#081d2e`) — Wordmark + copyright.

## Interactions & Behavior (`app.js`)
- **Sticky header**: toggles `.scrolled` on `<header id="site-header">` when `scrollY > 40` (background blur + border).
- **Mobile drawer**: `#navToggle` opens `#drawer` (translateX slide-in, locks body scroll); `#drawerClose` and any drawer link closes it. Shown < 900px.
- **Scroll reveal**: elements with `.reveal` start `opacity:0; translateY(22px)`; IntersectionObserver (threshold 0.12, rootMargin `-8%`) adds `.in` to animate in, with an 80ms-per-sibling stagger. Honors `prefers-reduced-motion` (instantly shown).
- **Smooth scroll** via CSS `scroll-behavior: smooth` + anchor links.
- Card/chip/news hover: `translateY(-2…-4px)`, shadow upgrade, accent reveals. Transitions 120–260ms ease.

## Responsive Behavior
- `≤1024px`: herbario grid → 3 col.
- `≤900px`: nav links hide, hamburger shows; all 2-col grids → 1 col; triad → 1 col; news → 2 col; herbario → 2 col; manifesto quote stacks.
- `≤560px`: body 16px; news → 1 col; ancestor portrait shrinks; hero top padding reduced.
- No horizontal overflow at any width (verified).

## State Management
Minimal — no app state. Only ephemeral UI state: header scrolled flag, drawer open/closed, per-element reveal flag. No data fetching. (If integrating into a CMS, the Noticias and Herbario cards are the natural collections to make data-driven.)

## Assets
All in `assets/` — **all photographic images are AI-generated placeholders** evoking the Atacama (cordillera silhouettes, portrait silhouettes, plant sprigs, a book cover). **Replace each with the community's real photography, keeping the same filename**, or rewire the `src` paths:
- `hero.jpg` (1800×1100) — cordillera of Pastos Grandes at dawn (needs to be dark enough for white hero text; the gradient overlay helps).
- `portrait-1.jpg`, `portrait-2.jpg` — Don Marcos / Doña Pabla portraits.
- `cartografia.jpg` — territory / landscape.
- `manual.jpg` — Manual de Herbolaria cover.
- `news-1/2/3.jpg` — news images.
- `plant-1…8.jpg` — the 8 herbario species, in card order.
- **Icons** are inline stroke-2 SVGs (Lucide-style) in `index.html`; no icon font/library needed.
- **Logo**: the rising-sun mark is an original inline SVG `<symbol id="sol-mark">` in `index.html` (reused via `<use>`). If the community has an official logo, swap the symbol.
- **Fonts**: `fonts/LeagueSpartan-*.ttf` (self-hosted, OFL — license included). Inter via Google Fonts `<link>`.

## Files
- `index.html` — full markup (all sections, inline SVG icons + logo symbol).
- `styles.css` — all tokens + component styles (~26KB, single file).
- `app.js` — vanilla JS interactions.
- `assets/` — placeholder images (replace with real photos).
- `fonts/` — League Spartan TTFs + OFL license.

## Notes / Open Items for the Community
1. **Confirm herbario species + traditional uses** before publishing (drafted as plausible Atacama examples).
2. **Confirm the contact email** (original site obfuscated it).
3. **Proposed sections** (Herbario, Timeline, Noticias) are labelled "Sección propuesta" in the design — keep, trim, or replace with real content.
4. Keep all copy in **Spanish**.
