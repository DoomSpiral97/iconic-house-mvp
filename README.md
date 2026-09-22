# iconic-house-mvp

Drei Landing-Page-Mockups für **The Iconic House**, vollständig getrennt in HTML, CSS und JavaScript. Stand **v2.0**.

## Struktur

- `index.html` – Variante 01 Rot
- `option-b.html` – Variante 02 Zebra
- `option-c.html` – Variante 03 Editorial
- `css/base.css` – Designsystem, Reset, Tokens, Reduced Motion
- `css/components.css` – UI-Komponenten (Hero, Claim, Editorial, Warteliste, Footer)
- `css/variants.css` – variantenspezifische Layouts, responsive Editorial-Split
- `js/main.js` / `js/navigation.js` / `js/reveal.js` / `js/waitlist.js`
- `assets/` – Bilder (`AngieBannerNoBg.png`, `AngieBanner.jpg`)

## Features v2.0

- Stabile Heroes ohne Layout-Jank (konstante Höhen, Fade-In nur einmalig)
- Mobile-Optimierung: Burger-Menü mit Fullscreen-Overlay, einspaltige Layouts, griffgroße Inputs
- Warteliste (Salon Privé) auf allen Varianten mit Client-seitiger Validierung und `aria-live`-Feedback
- Scroll-Reveal mit `prefers-reduced-motion`-Fallback
- Fokus-Styles, semantische Landmarks, `aria-current` auf aktiver Variante

## Nutzung

HTML-Dateien direkt öffnen oder GitHub Pages auf Branch `main` / Root aktivieren. Die Warteliste ist eine Demo ohne Backend – für den Livegang E-Mail-Service (z. B. Mailchimp, Buttondown oder eigene API) an `js/waitlist.js` anschließen.

## Design

Farben: `#CA0205`, `#F2F2F2`, `#0A0A0A`. Typografie: Playfair Display (Fallback Didot/Bodoni) + Inter. System: 8-Punkt-basierte Tokens, fluid type, Sticky-Nav mit 4-px-Redline.
