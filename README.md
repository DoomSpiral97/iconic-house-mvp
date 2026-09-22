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
- `assets/` – Bilder und optimierte WebP-Dateien

## Nutzung

Die HTML-Dateien direkt öffnen oder GitHub Pages auf Branch `main` und Root `/` aktivieren. Die Seiten verlinken untereinander im Abschnitt „Konzept-Varianten“.

## Performance

Die Seiten versuchen zuerst `hero-model.webp` und `backplate.webp` zu laden. Falls diese Dateien noch nicht in `assets/` liegen, greift das `<picture>` automatisch auf `AngieBannerNoBg.png` beziehungsweise `AngieBanner.jpg` zurück.

## Design

Farben: `#CA0205`, `#F2F2F2`, Schwarz und Weiß. Typografie: Playfair Display mit Didot/Bodoni-Fallback und Inter. Das Layout verwendet ein gemeinsames 8-Punkt-Spacingsystem, responsive Breakpoints, Fokuszustände und Reduced-Motion-Unterstützung.
