# Paradise Yard Goats Baseball — Website

Official website for the Paradise Yard Goats Baseball organization based in Paradise, Texas.  
Teams: **7U · 8U · 9U · 11U**

**GitHub:** https://github.com/trh-dx/yardgoats-site  
**Live site:** https://yardgoats-site.vercel.app

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16 | Framework, App Router |
| React | 19 | UI components |
| Tailwind CSS | 4 | Styling via `@theme` tokens (no config file) |
| TypeScript | 5 | Type safety |
| next/font | built-in | Google Fonts — zero layout shift |

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

Dev server runs on port 3000 by default. If that port is in use:

```bash
npm run dev -- -p 3001
```

---

## Project Structure

```
yardgoats-site/
├── app/
│   ├── globals.css           # Tailwind v4 @theme brand tokens + CSS animations
│   ├── layout.tsx            # Root layout — fonts, metadata, html/body
│   ├── page.tsx              # Home page — imports and orders all sections
│   ├── teams/
│   │   └── page.tsx          # Teams page — divisions, coaches, spotlights, philosophy, CTA
│   ├── schedule/
│   │   └── page.tsx          # Schedule page — tournament calendar, full schedule, external links
│   └── tryouts/
│       └── page.tsx          # Tryouts page — schedule, divisions, register CTA
├── components/
│   ├── Nav.tsx               # Sticky nav, mobile hamburger, active-page detection
│   ├── Hero.tsx              # Full-viewport hero with animated logo and CTA
│   ├── Scoreboard.tsx        # Stats strip: location, age groups, level, support
│   ├── StitchDivider.tsx     # Red baseball stitch SVG divider
│   ├── About.tsx             # About section with value cards
│   ├── Teams.tsx             # Team cards component (homepage)
│   ├── CoachCards.tsx        # Coach cards — Client Component (hover effects)
│   ├── SpotlightCards.tsx    # Player spotlight cards — Client Component (hover effects)
│   ├── Schedule.tsx          # Game/tournament schedule table with division filters
│   ├── Sponsors.tsx          # Single / Double / Triple / Home Run sponsor packages
│   ├── Gallery.tsx           # Game day photo grid with placeholders
│   ├── Contact.tsx           # Contact form with validation (Client Component)
│   └── Footer.tsx            # Logo, quick links, external links, copyright
├── lib/
│   ├── config.ts             # All external URLs — edit here to update every link
│   └── data.ts               # All site content — edit here to update the site
└── public/
    ├── yardgoatsimage.png    # Team logo (goat mascot)
    └── images/
        └── baseball-tryout-image.png  # Hero banner photo (Teams, Schedule, Tryouts pages)
```

---

## Updating External Links

All external URLs live in **`lib/config.ts`**. Update once and every button on the site updates automatically.

```ts
export const siteConfig = {
  facebook:    "https://www.facebook.com/p/Paradise-Yard-Goats-61575015420696/",
  register:    "https://form.jotform.com/261348363828162",
  gameChanger: "#",   // replace with your GameChanger schedule URL
  ncs:         "#",   // replace with your NCS events URL
  email:       "paradiseyardgoats@gmail.com",
};
```

| Key | Used in |
|---|---|
| `facebook` | Nav, Hero, Gallery, Contact, Footer, Tryouts |
| `register` | Tryouts page — banner button + schedule section |
| `gameChanger` | Schedule page, Schedule component, Footer |
| `ncs` | Schedule page, Schedule component, Footer |
| `email` | Contact section, Footer |

---

## Updating Content

All schedule rows, team info, sponsor packages, and gallery items live in **`lib/data.ts`**. Edit that file — no component changes needed.

### Add or edit a schedule game

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

Set `isTournament: true` to show the "Tournament" badge in the table.

### Add or edit a team

```ts
{
  age: "12U",
  name: "12U Yard Goats",
  description: "Competitive tournament baseball for older players.",
  tag: "Tournament",
},
```

Current divisions: **7U · 8U · 9U · 11U**

### Update sponsor packages

Four tiers are defined in `lib/data.ts`:

| Tier | Name | Price |
|---|---|---|
| Base Hit | Single | $250 |
| Extra Base | Double | $500 |
| Triple Play | Triple | $1,000 |
| Premier Partner | Home Run | $2,000+ |

Set `featured: true` to highlight a package with the red "Featured" badge.

---

## Tryouts Page

The tryouts page lives at `/tryouts` (`app/tryouts/page.tsx`). Key content to keep updated each year:

| Item | Where to edit |
|---|---|
| Tryout year ("2026 YG Tryouts") | `<h1>` in the Page Header section |
| Date in facts bar | `val: "July 12th"` in the Key Facts array |
| Location name & address | `val: "The Goat Yard"` / `sub: "Pecan St, Paradise, TX"` |
| Time slots per division | slot objects in the Tryout Schedule section |
| Division details (age, format, highlights) | `divisions` array near top of file |
| Register link | `siteConfig.register` in `lib/config.ts` |

---

## Animations

Defined as CSS `@keyframes` in `app/globals.css` and applied via utility classes:

| Class | Effect | Used on |
|---|---|---|
| `.logo-float` | Entrance bounce + continuous gentle float | Hero logo |
| `.btn-glow` | Pulsing green glow + lift | "View Tryout Info" button on Hero |
| `.nav-pulse` | Alternating green color glow | Tryouts link in Nav (when not on Tryouts page) |

---

## Brand Colors

Defined in `app/globals.css` under `@theme`. Official Yard Goats palette.

| Token | Hex | Tailwind class |
|---|---|---|
| `--color-navy` | `#001A3D` | `bg-navy`, `text-navy` |
| `--color-navy-mid` | `#002255` | `bg-navy-mid`, `text-navy-mid` |
| `--color-royal-blue` | `#003DA5` | `bg-royal-blue`, `text-royal-blue` |
| `--color-green` | `#7AC143` | `bg-green`, `text-green` |
| `--color-green-lt` | `#94D45A` | `bg-green-lt`, `text-green-lt` |
| `--color-green-dk` | `#5A9132` | `bg-green-dk`, `text-green-dk` |
| `--color-red` | `#B3261E` | `bg-red`, `text-red` |
| `--color-gray` | `#A7A8AA` | `bg-gray`, `text-gray` |
| `--color-gray-lt` | `#D0D1D2` | `bg-gray-lt`, `text-gray-lt` |
| `--color-white` | `#F8F7F2` | `bg-white`, `text-white` |

Section background pattern (Teams page):
- `#001A3D` — base navy (S2 Our Teams, S4 Spotlights)
- `#002255` — mid navy (S3 Coaches, S5 Philosophy)

---

## Fonts

Loaded via `next/font/google` in `app/layout.tsx`.

| Font | CSS variable | Used for |
|---|---|---|
| Bebas Neue | `--font-bebas` | Section titles, hero headline, card names |
| Barlow Condensed | `--font-barlow` | Labels, buttons, nav, badges |
| DM Sans | `--font-dm-sans` | Body copy, form inputs, descriptions |

Apply in JSX: `className="font-[family-name:var(--font-bebas)]"`

---

## Page & Section Map

### Home page (`/`)

| Section ID | Component | Nav label |
|---|---|---|
| `#home` | `Hero.tsx` | — |
| `#about` | `About.tsx` | About |
| `#schedule` | `Schedule.tsx` | — |
| `#sponsors` | `Sponsors.tsx` | Sponsors |
| `#gallery` | `Gallery.tsx` | Photos |
| `#contact` | `Contact.tsx` | Get Involved |

### Teams page (`/teams`)

| Section | Description |
|---|---|
| Hero | "Built on Dirt. Driven by Development." — photo background |
| Team Directory | 7U, 8U, 9U, 11U cards with coach, format, record |
| Meet the Coaches | `CoachCards.tsx` — bio, years, quote, hover glow |
| Player Spotlights | `SpotlightCards.tsx` — recognition cards with badge, position, team |
| Development Philosophy | Four pillars: Skills, Teamwork, Confidence, Sportsmanship |
| Join the Herd CTA | Radial gradient + logo watermark, Register + Contact buttons |

### Schedule page (`/schedule`)

| Section | Description |
|---|---|
| Hero | "From the Dugout" — photo background |
| Tournament Calendar | Key tournament cards with dates, location, teams |
| Full Schedule Table | Filterable by division — pulls from `lib/data.ts` |
| External Links | GameChanger live scoring + NCS Events cards |
| Join CTA | Register for Tryouts + Contact buttons with logo watermark |

### Tryouts page (`/tryouts`)

| Section | Description |
|---|---|
| Banner header | Full-width photo background, title, Register CTA |
| Key facts bar | Date, location, age groups, cost — Royal Blue ribbon |
| Tryout schedule | July 12th, home-plate time cards per division |
| Age divisions | 7U, 8U, 9U, 11U cards with format + highlights |
| What to Expect | 4-step process |
| What to Bring | Checklist |
| CTA | Register + Facebook + Contact buttons |

---

## Client Components

Pages use Server Components by default. The following are `"use client"` components that require interactivity:

| Component | Why client |
|---|---|
| `CoachCards.tsx` | `onMouseEnter`/`onMouseLeave` for border hover glow |
| `SpotlightCards.tsx` | `onMouseEnter`/`onMouseLeave` for border hover glow |
| `Contact.tsx` | Form state + validation |
| `Nav.tsx` | `usePathname` for active link detection |

---

## Swapping in Real Photos

### Team logo
Replace `public/yardgoatsimage.png`. Keep the same filename, or update the `src` prop in `Nav.tsx`, `Hero.tsx`, `Footer.tsx`, and `app/tryouts/page.tsx`.

### Tryouts banner
Replace `public/images/baseball-tryout-image.png` with any wide landscape photo. The gradient overlay handles contrast automatically.

### Gallery photos
In `components/Gallery.tsx`, replace the placeholder `<span>` blocks with real images:

```tsx
import Image from "next/image";
<Image src="/photos/game-1.jpg" alt="Game action" fill className="object-cover" />
```

Add photos to `public/photos/`.

### Sponsor logos
In `components/Sponsors.tsx`:

```tsx
<Image src="/sponsors/acme.png" alt="Acme Co" width={160} height={80} className="object-contain" />
```

---

## Deployment

### Vercel (recommended)
1. Push to GitHub
2. Import at vercel.com — Vercel auto-detects Next.js
3. Deploy — no config needed

Auto-deploys on every push to `main`.

### Static export (Netlify, GitHub Pages, S3)

Add to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
};
```

Run `npm run build` and upload the `/out` folder.

---

## Contact

Paradise Yard Goats Baseball — Paradise, Texas  
Email: paradiseyardgoats@gmail.com
