# iconic-house-mvp

Drei saubere Landing-Page-Mockups für **The Iconic House**, vollständig getrennt in HTML, CSS und JavaScript.

## Struktur

- `index.html` – Variante 01 Rot
- `option-b.html` – Variante 02 Zebra
- `option-c.html` – Variante 03 Editorial
- `css/base.css` – Designsystem, Reset, Tokens und Accessibility-Basis
- `css/components.css` – gemeinsame UI-Komponenten
- `css/variants.css` – variantenspezifische Layouts
- `js/main.js` – gemeinsamer Einstiegspunkt
- `js/navigation.js` – Menü, Suche und Tastatursteuerung
- `js/reveal.js` – Scroll-Reveal mit Reduced-Motion-Fallback
- `assets/` – Bilder

## Nutzung

Die HTML-Dateien direkt öffnen oder GitHub Pages auf Branch `main` und Root `/` aktivieren. Die Seiten verlinken untereinander im Abschnitt „Konzept-Varianten“.

## Bilder

Alle Seiten laden direkt aus `assets/`:

- Hero: `AngieBannerNoBg.png`
- Teaser: `AngieBanner.jpg`

**Optional später:** Die optimierten Dateien `hero-model.webp` (63 KB) und
`backplate.webp` (60 KB) in `assets/` legen und die `src`-Pfade umstellen —
damit sinkt die Ladezeit von ~12 MB auf ~123 KB.

## Design

Farben: `#CA0205`, `#F2F2F2`, Schwarz und Weiß. Typografie: Playfair Display mit Didot/Bodoni-Fallback und Inter. Gemeinsames 8-Punkt-Spacing, responsive Breakpoints, Fokuszustände und Reduced-Motion-Unterstützung.
