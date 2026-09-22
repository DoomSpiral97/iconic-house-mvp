# iconic-house-mvp

MVP/Size-Test-Screendesign für das Fashion-Banner von **The Iconic House**.

## Assets

Im Ordner `assets/` (bereits committet):

- `AngieBannerNoBg.png` – freigestelltes Model mit Transparenz, wird im
  Hero-Banner verwendet (Achtung: ~9,7 MB – für den Launch als WebP mit
  Alphakanal optimieren, lädt dann ca. 10× schneller)
- `AngieBanner.jpg` – Originalfoto mit Backplate (~2,8 MB)

## Nutzung

`index.html` im Browser öffnen oder per GitHub Pages hosten. Die Seite enthält
ein **Bildgrößen-Audit**: Es vergleicht pro Bild die Original-Pixel mit der
Display-Größe und zeigt eine Bewertung (OK / Knapp / Zu klein). Fenstergröße
ändern und neu laden, um Geräte zu simulieren.

## Styleguide-Kerne

- Farben: `#D60413` (Red), `#0A0A0A` (Black), `#F7F7F5` (Off-White)
- Serifen: Playfair Display (Fallback Didot/Bodoni), Sans: Inter
- Nav-Trennlinie 4 px rot, Sektionstrenner 1 px schwarz
