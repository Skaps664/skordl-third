# Skord Labs — Company Profile Deck

A 19-slide company profile, styled to match skordlabs.com exactly. Built as plain
HTML so you can edit the text yourself and re-export the PDF whenever you like.

```
company-profile/
├── index.html                        ← the deck (edit this)
├── Skord-Labs-Company-Profile.pdf    ← ready to send (19 pages, ~5 MB)
├── assets/                           ← images + the Inter Tight font file
└── README.md
```

## Sending it

`Skord-Labs-Company-Profile.pdf` is finished and ready to email. Slides are
16:9 (1280 × 720), so it looks right full-screen and prints cleanly.

## Editing it

1. Open `index.html` in any text editor and change the words.
2. Open it in Chrome (double-click the file).
3. Click the **Save as PDF** button, bottom right.
4. In the print dialog: **Destination → Save as PDF**, **Margins → None**,
   and tick **Background graphics**. Chrome picks up the 1280 × 720 page size
   automatically.

Use Chrome or Edge. Firefox and Safari handle the fixed page size less reliably.

## What's on each slide

| # | Slide |
|---|---|
| 01 | Cover |
| 02 | Contents |
| 03 | Who we are |
| 04 | What makes us different |
| 05 | Results so far |
| 06–07 | What we do (six services) |
| 08 | AI, explained simply |
| 09 | Who we work with |
| 10 | Industries we know |
| 11 | Our own products |
| 12–13 | Selected work (11 projects) |
| 14 | How we work with you |
| 15 | Beyond the build (talent & teams) |
| 16 | The team |
| 17 | Founder's note |
| 18 | What clients say |
| 19 | Let's talk |

## Design notes

Everything is pulled from the live site so the deck and the website look like
one brand:

- **Font** — Inter Tight, the real file lifted out of your Next.js build
  (`assets/inter-tight.woff2`). Embedded, so the deck renders identically
  offline and on any machine.
- **Colours** — `#203eec` blue, `#00d4ff` cyan, `#8b5cf6` violet, `#ff006e` rose.
  Same near-black `#060606` ink and `#e2e2e2` hairline borders as the site.
- **Gradients** — the two from the site, unchanged: the blue→cyan button
  gradient and the four-stop rose→violet→blue→cyan headline gradient, always on
  the second line of a heading.
- **Devices carried over** — mono uppercase eyebrow labels, 16px rounded cards,
  pill buttons, blurred colour orbs, and the thin animated gradient rule (held
  static at the top edge of every slide).

Every value lives in the `:root` block at the top of `index.html`, so a colour
change is a one-line edit.

## Two things I changed from the site copy

- The homepage testimonials say **"skordl"** (lowercase). I wrote **"Skord Labs"**
  in the deck — worth fixing on the site too.
- Job titles are spelled out (*"Founder & Backend Engineer"* rather than
  *"Founder & Backend Engr."*) since this goes to non-technical readers.

All figures — $2.4M raised, 1.2M+ users, 99.9% uptime, 40% faster, 15+ team,
11 projects, 7 products — come straight from the site. Worth a check before you
send this to anyone who might ask you to back them up.
