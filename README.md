# The Rangoon Gazette

A vintage broadsheet of Rangoon — the Golden City upon the Irrawaddy.

A single-page web rendition of a late-colonial-era newspaper devoted to
Rangoon (Yangon, Burma): the Shwedagon, the Sule, the Strand, the
Secretariat, the High Court, the City Hall, and Bogyoke Market; the
quarters of the city; an almanack of weather and tides; and a feature on
Rangoon University and the student movements that have shaped modern
Burma.

Live at **[rangoon.asia](https://rangoon.asia)**.

## Stack

- [Next.js 13.5](https://nextjs.org) (App Router)
- React 18
- TypeScript 5
- Tailwind CSS 3
- `next/font` for [IM Fell English](https://fonts.google.com/specimen/IM+Fell+English),
  [IM Fell DW Pica SC](https://fonts.google.com/specimen/IM+Fell+DW+Pica+SC),
  [Playfair Display](https://fonts.google.com/specimen/Playfair+Display),
  and [UnifrakturMaguntia](https://fonts.google.com/specimen/UnifrakturMaguntia)
- `@vercel/og` for the OpenGraph card

No UI library, no animation library, no icon library — pure Tailwind +
hand-coded inline SVG.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Where things live

```
app/
  layout.tsx                  fonts, metadata, JSON-LD
  page.tsx                    the broadsheet itself
  globals.css                 paper grain, base styles
  icon.svg                    the "RG" mark
  opengraph-image.tsx         dynamic 1200×630 OG card
  robots.ts                   /robots.txt
  sitemap.ts                  /sitemap.xml
  components/
    Masthead.tsx              blackletter title, mottos, folio strip
    Engravings.tsx            seven hand-coded SVG landmarks
    Ornaments.tsx             fleurons, dividers, section headers
public/
  manifest.json               web app manifest
tailwind.config.ts            paper / ink palette, font slots
```

## Design notes

- **Palette** — paper `#f3eee2`, ink `#0e0d0b`. No greys, no gradients.
  Anything that needs to look "white" is a punched-out cut-out filled
  with the paper colour.
- **Typography** — UnifrakturMaguntia for the masthead wordmark, Playfair
  Display for display headlines, IM Fell English for body, IM Fell DW
  Pica SC for small-caps eyebrows.
- **Engravings** — every landmark in `Engravings.tsx` is hand-coded SVG
  (no images). Buildings are big black silhouettes with paper-cream
  cut-outs for windows and arches; pagodas are stacked geometric
  primitives. Each is bottom-anchored via
  `preserveAspectRatio="xMidYMax meet"` so the grid in the *Notable
  Edifices* section reads as a uniform height.
- **Paper grain** — an inline SVG `feTurbulence` filter applied as the
  body background so the cream isn't perfectly flat.

## Sections

1. **Masthead** — blackletter wordmark, side mottos, folio strip
2. **The Leading Article** — four-column lede with drop cap and
   Shwedagon engraving
3. **Notable Edifices of the City** — six landmark cards
4. **Quarters of the City** — leader-dot table of contents
5. **Almanack & Weather** — barometer, tides, observances
6. **Of the University & Her Students** — five date cards on student
   movements (1920, 1936, 1962, 1974, 1988)
7. **Footer Colophon** — printer's mark, imprint, editorial offices

## Licence

Code is MIT. Period prose is original (in pastiche of the era).
