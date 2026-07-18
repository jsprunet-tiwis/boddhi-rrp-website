# BODDHI RRP® — Rapid Repair Protocol website

Static implementation of the **BODDHI RRP Website** from the Claude Design project
[RRP — Rapid Repair Protocol Design System](https://claude.ai/design/p/20258494-b19d-4a56-aaa1-d5bf1e3306d3)
(`ui_kits/website`, English copy, dark high-performance aesthetic).

## Structure

- `index.html` — the full one-page site in English (Nav, Hero, What is RRP®, The Science, Case Studies, Services, About, Work With Us, Footer)
- `fr/index.html` — the French version (same structure, translated copy following the brandbook tone)
- `css/tokens.css` — design tokens transcribed from the design system (colors, type, spacing, radii, shadows, motion)
- `css/site.css` — page styles, responsive at 1024px (tablet) and 640px (mobile)
- `js/main.js` — enquiry-button toast (mock, as in the design — no data is sent)
- `assets/` — brand assets exported from the design project

## External dependencies

- Google Fonts: Days One (display), Plus Jakarta Sans (text)
- Phosphor Icons web-font 2.1.1 (regular / bold / fill) from unpkg

## Run

Any static server, e.g.:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Languages

English is the default at `/`; French lives at `/fr/`. The EN | FR toggle sits in the nav (and a link in the footer). An explicit choice is stored in `localStorage` (`rrpLang`); the root page redirects to `/fr/` when the visitor previously picked French. Both pages carry cross-referencing `hreflang` tags for SEO.

## Notes

- The contact CTAs show a confirmation toast only (design parity). To make them functional, wire them to `mailto:clinic@boddhiclinic.com` or a form service.
- Per the design system readme: the isolated "R" emblem SVG doesn't rasterize, so nav/footer use the white lockup (`logo-white.png`). No favicon is set for the same reason.
