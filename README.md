# Paradise Yard Goats Baseball — Website

Official website for the Paradise Yard Goats Baseball organization.  
Teams: **7U · 8U · 9U · 11U**

**GitHub:** https://github.com/trh-dx/yardgoats-site  
**Live site:** https://yardgoats-site.vercel.app

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16 | Framework, App Router |
| React | 19 | UI components |
| Tailwind CSS | 4 | Styling via `@theme` tokens — no config file |
| TypeScript | 5 | Type safety |
| next/font | built-in | Google Fonts with zero layout shift |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Dev server runs on **port 3000** by default. To use a different port:

```bash
npm run dev -- -p 3001
```

---

## Project Structure

```
yardgoats-site/
├── app/
│   ├── globals.css           # Tailwind v4 @theme brand tokens, named font utilities, CSS animations
│   ├── layout.tsx            # Root layout — fonts (Bebas Neue, Inter, Permanent Marker), metadata
│   ├── page.tsx              # Home page — Hero, Feature Bar, Teams Grid, CTA, Footer
│   ├── teams/
│   │   └── page.tsx          # Teams page — hero, filter tabs, team cards, CTA band
│   ├── schedule/
│   │   └── page.tsx          # Schedule page — tournament calendar, full schedule table
│   └── tryouts/
│       └── page.tsx          # Tryouts page — see Page Map below
├── components/
│   ├── Nav.tsx               # Sticky nav — logo, links, JOIN THE HERD button, mobile hamburger
│   ├── Footer.tsx            # 4-column footer — brand, quick links, social, contact
│   ├── TeamsGrid.tsx         # Client component — filter tabs + team cards (Teams page)
│   ├── TeamCards.tsx         # Team card grid (used by schedule/other pages)
│   ├── CoachCards.tsx        # Coach cards — hover glow (Client Component)
│   ├── SpotlightCards.tsx    # Player spotlight cards (Client Component)
│   ├── Hero.tsx              # Legacy hero component
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact form with validation (Client Component)
│   ├── Schedule.tsx          # Game/tournament schedule table
│   ├── Scoreboard.tsx        # Stats strip — location, age groups, level
│   ├── Sponsors.tsx          # Sponsor tier cards
│   ├── Gallery.tsx           # Game day photo grid
│   ├── Reel.tsx              # Highlight reel component
│   └── StitchDivider.tsx     # Baseball stitch SVG section divider
├── lib/
│   ├── config.ts             # All external URLs — edit once, updates every button site-wide
│   └── data.ts               # All site content — teams, schedule, sponsors, gallery
└── public/
    ├── yardgoatsimage.png         # Team logo (goat mascot)
    └── images/
        ├── baseball-tryout-image.png  # Baseball on infield dirt — used in hero/CTA backgrounds
        ├── 7u-card.png                # 7U team card photo (helmet + ball)
        └── 8u-card.png                # 8U team card photo (glove on grass)
```

---

## Design System

### Colors

Defined in `app/globals.css` under `@theme`. Tailwind utilities are generated automatically — no config file needed.

| Token | Hex | Tailwind class | Role |
|---|---|---|---|
| `--color-deep-navy` | `#07111F` | `bg-deep-navy` | Page background, hero overlay |
| `--color-charcoal` | `#0F172A` | `bg-charcoal` | Card backgrounds |
| `--color-slate` | `#1E293B` | `bg-slate` | Card borders, icon backgrounds |
| `--color-royal-blue` | `#003DA5` | `bg-royal-blue` | Feature bar, CTA bands, accents |
| `--color-darker-blue` | `#002B7F` | `bg-darker-blue` | Hover states on blue elements |
| `--color-green` | `#7AC143` | `bg-green` | Primary accent — buttons, badges, active states |
| `--color-green-dk` | `#5A9132` | `bg-green-dk` | Green hover states |
| `--color-green-lt` | `#94D45A` | `bg-green-lt` | Light green tints |
| `--color-muted-gray` | `#94A3B8` | `text-muted-gray` | Body copy, labels, subtitles |
| `--color-light-gray` | `#CBD5E1` | `text-light-gray` | Secondary text |

**Color usage rules:**
- Green is used **only as an accent** — buttons, badges, active indicators
- Royal blue is used for **section bands and borders** (feature bar, CTA bands, card hover borders)
- Deep navy / charcoal are the **primary dark backgrounds**

### Fonts

Loaded via `next/font/google` in `app/layout.tsx`. Named utility classes are defined in `app/globals.css` under `@layer utilities`. Use only the named classes below — Tailwind v4 has a known bug where arbitrary font-family values trigger invalid wildcard CSS generation that breaks the build.

| Font | CSS variable | Utility class | Used for |
|---|---|---|---|
| Bebas Neue | `--font-bebas` | `font-bebas` | Page titles, section headings, team ages, card titles |
| Inter | `--font-inter` | `font-inter` | Body copy, nav links, buttons, labels, descriptions |
| Permanent Marker | `--font-marker` | `font-marker` | Accent / script lines — "Welcome To", "Develop. Compete. Win." |
| Barlow Condensed | `--font-barlow` | `font-barlow` | Schedule page headers and labels |

```tsx
// Usage example
<h1 className="font-bebas">Yard Goats</h1>
<p  className="font-marker text-green">Welcome To</p>
<p  className="font-inter">Body copy here</p>
```

### Animations

Defined as `@keyframes` in `app/globals.css`:

| Class | Effect |
|---|---|
| `.nav-pulse` | Alternating green glow — Tryouts link in Nav when not on that page |
| `.logo-float` | Gentle continuous float — decorative logo usage |

---

## Page Map

### Home (`/`)

| Section | Description |
|---|---|
| **Hero** | Full-screen — baseball stadium image, dark left-heavy overlay, "Welcome To / Yard Goats / Baseball" headline, two CTA buttons |
| **Feature Bar** | Royal blue strip — 3 columns: Compete Nationwide · Player Development · Built on Trust & Grit |
| **Teams Grid** | Dark section — 4 cards (7U, 8U, 9U, 11U) with age, label, View Team button |
| **Join The Herd CTA** | Baseball-on-dirt background — Permanent Marker accent, massive headline, Register button |

### Teams (`/teams`)

| Section | Description |
|---|---|
| **Hero** | Photo background with royal-blue tinted overlay — "Our Teams" + "Develop. Compete. Win." + breadcrumb |
| **Filter Tabs + Cards** | `TeamsGrid.tsx` (client) — All Teams / 7U / 8U / 9U / 11U filter; dark cards with image, age badge, title, description, Learn More button |
| **CTA Band** | Royal blue — logo + "Ready to Join the Herd?" + Register for Tryouts button |

### Tryouts (`/tryouts`)

| Section | Description |
|---|---|
| **Header** | Baseball image background, breadcrumb, green accent line, "2026 YG TRYOUTS" title, subline |
| **Info Strip** | Royal blue bar — Date (July 12) · Location (The Goat Yard, Pecan St, Paradise TX) · Age Groups (7U · 8U · 9U · 11U) |
| **Upcoming Tryouts** | 3 cards — 7U & 8U (12:00–12:45PM) · 9U (1:00–1:45PM) · 11U (2:00–2:45PM) — each with age group and Register Now button |
| **What To Expect** | Numbered steps 01–04: Show Up · Warm Up · Skills Evaluation · Hear Back |
| **What To Bring** | Checklist with green circle checkmarks + gear note |
| **Bottom CTA** | Green banner — logo, "Think You Have What It Takes?", Register Now button |

### Schedule (`/schedule`)

| Section | Description |
|---|---|
| **Hero** | Photo background |
| **Tournament Calendar** | Upcoming tournament cards |
| **Full Schedule Table** | Filterable by division — data from `lib/data.ts` |
| **External Links** | GameChanger + NCS Events |

---

## Updating Content

### External links — `lib/config.ts`

All external URLs live in one file. Update once and every button on the site updates.

```ts
export const siteConfig = {
  facebook:    "https://www.facebook.com/p/Paradise-Yard-Goats-61575015420696/",
  register:    "https://form.jotform.com/261348363828162",
  gameChanger: "#",   // replace with your GameChanger schedule URL
  ncs:         "#",   // replace with your NCS events URL
  email:       "paradiseyardgoats@gmail.com",
};
```

### Schedule, teams, sponsors — `lib/data.ts`

All schedule rows, team descriptions, sponsor tiers, and gallery placeholders are in `lib/data.ts`. No component edits needed.

**Add a game:**
```ts
{
  date: "Aug 2",
  event: "Paradise Summer League",
  isTournament: false,
  location: "Paradise Community Park",
  team: "8U",
  time: "9:00 AM",
},
```

**Sponsor tiers:**

| Tier | Name | Price |
|---|---|---|
| Base Hit | Single | $250 |
| Extra Base | Double | $500 |
| Triple Play | Triple | $1,000 |
| Premier Partner | Home Run | $2,000+ |

Set `featured: true` to highlight a tier with the Featured badge.

### Tryouts page — `app/tryouts/page.tsx`

All tryout content is inline at the top of the file.

| Item | Where to edit |
|---|---|
| Page title / year | `<h1>` in the header section |
| Subline | `<p>` beneath the `<h1>` |
| Info strip (date, location, age groups) | The "Info Strip" `<div>` — hardcoded strings |
| Tryout cards | `tryouts` array — `age`, `time` fields |
| What To Expect steps | Inline array inside the "process steps" column |
| What To Bring list | Inline array inside the "bring checklist" column |
| Register link | `siteConfig.register` in `lib/config.ts` |

---

## Client Components

Pages use Server Components by default (preserves `metadata` exports). These components require `"use client"`:

| Component | Why |
|---|---|
| `Nav.tsx` | `usePathname` for active-link detection, scroll listener, mobile open state |
| `TeamsGrid.tsx` | `useState` for filter tab selection |
| `CoachCards.tsx` | Hover glow via mouse event handlers |
| `SpotlightCards.tsx` | Hover glow via mouse event handlers |
| `Contact.tsx` | Form field state + validation |

---

## Swapping in Real Photos

### Team logo
Replace `public/yardgoatsimage.png`. Keep the same filename, or update the `src` in `Nav.tsx` and `Footer.tsx`.

### Hero / background photos
All hero sections reference images in `public/images/`. Drop in a wider landscape photo and update the `src` in the relevant page file. The gradient overlays handle contrast automatically.

### Team card photos
The Teams page uses these card images:

| Card | Current file | Replace with |
|---|---|---|
| 7U | `public/images/7u-card.png` | Action photo of 7U players |
| 8U | `public/images/8u-card.png` | Action photo of 8U players |
| 9U | `public/images/baseball-tryout-image.png` | Action photo of 9U players |
| 11U | `public/images/baseball-tryout-image.png` | Action photo of 11U players |

Update the `image` field in the `TEAMS` array inside `components/TeamsGrid.tsx`.

### Gallery photos
In `components/Gallery.tsx`, replace placeholder blocks with:

```tsx
import Image from "next/image";
<Image src="/photos/game-1.jpg" alt="Game action" fill className="object-cover" />
```

Add photos to `public/photos/`.

---

## Deployment

### Vercel (recommended)
1. Push to GitHub
2. Import at vercel.com — Vercel auto-detects Next.js, no config needed
3. Auto-deploys on every push to `main`

### Static export (Netlify, GitHub Pages, S3)

Add to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
};
```

Run `npm run build` — upload the `/out` folder.

---

## Contact

Paradise Yard Goats Baseball  
Email: paradiseyardgoats@gmail.com  
Facebook: https://www.facebook.com/p/Paradise-Yard-Goats-61575015420696/
