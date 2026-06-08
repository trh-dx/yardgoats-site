# Paradise Yard Goats Baseball — Website

Official website for the Paradise Yard Goats Baseball organization based in Paradise, Texas.  
Teams: **7U · 8U · 9U · 11U**

**GitHub:** https://github.com/trh-dx/yardgoats-site

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
│   └── tryouts/
│       └── page.tsx          # Tryouts page — schedule, divisions, register CTA
├── components/
│   ├── Nav.tsx               # Sticky nav, mobile hamburger, active-page detection
│   ├── Hero.tsx              # Full-viewport hero with animated logo and CTA
│   ├── Scoreboard.tsx        # Stats strip: location, age groups, level, support
│   ├── StitchDivider.tsx     # Red baseball stitch SVG divider
│   ├── About.tsx             # About section with value cards
│   ├── Teams.tsx             # Baseball card style team cards (7U, 8U, 9U, 11U)
│   ├── Schedule.tsx          # Game/tournament schedule table with division filters
│   ├── Sponsors.tsx          # Single / Double / Home Run sponsor packages
│   ├── Gallery.tsx           # Game day photo grid with placeholders
│   ├── Contact.tsx           # Contact form with validation (Client Component)
│   └── Footer.tsx            # Logo, quick links, external links, copyright
├── lib/
│   ├── config.ts             # All external URLs — edit here to update every link
│   └── data.ts               # All site content — edit here to update the site
└── public/
    ├── yardgoatsimage.png    # Team logo (goat mascot)
    └── images/
        └── baseball-tryout-image.png  # Tryouts page banner photo
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
  email:       "paradiseyardgoats@email.com",
};
```

| Key | Used in |
|---|---|
| `facebook` | Nav, Hero, Gallery, Contact, Footer, Tryouts |
| `register` | Tryouts page — banner button + schedule section |
| `gameChanger` | Schedule section, Contact, Footer |
| `ncs` | Schedule section, Footer |
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

```ts
{
  tier: "Base Hit",
  name: "Single",
  price: "$300",
  priceSuffix: "",
  perks: ["Website listing", "Social media shoutout"],
  featured: false,
  cta: "Get Started",
},
```

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
| `.btn-glow` | Pulsing tan glow + lift | "View Tryout Info" button on Hero |
| `.nav-pulse` | Alternating tan color glow | Tryouts link in Nav (when not on Tryouts page) |

---

## Brand Colors

Defined in `app/globals.css` under `@theme`.

| Token | Hex | Tailwind class |
|---|---|---|
| `--color-navy` | `#08111F` | `bg-navy`, `text-navy` |
| `--color-green` | `#2E7D32` | `bg-green`, `text-green` |
| `--color-green-lt` | `#43a047` | `bg-green-lt`, `text-green-lt` |
| `--color-tan` | `#C49A6C` | `bg-tan`, `text-tan` |
| `--color-red` | `#B3261E` | `bg-red`, `text-red` |
| `--color-charcoal` | `#1F2933` | `bg-charcoal`, `text-charcoal` |

---

## Fonts

Loaded via `next/font/google` in `app/layout.tsx`.

| Font | CSS variable | Used for |
|---|---|---|
| Bebas Neue | `--font-bebas` | Section titles, hero headline, card names |
| Barlow Condensed | `--font-barlow` | Labels, buttons, nav, badges (normal + italic) |
| DM Sans | `--font-dm-sans` | Body copy, form inputs, descriptions |

Apply in JSX: `className="font-[family-name:var(--font-bebas)]"`

---

## Page & Section Map

### Home page (`/`)

| Section ID | Component | Nav label |
|---|---|---|
| `#home` | `Hero.tsx` | — |
| `#about` | `About.tsx` | About |
| `#teams` | `Teams.tsx` | Teams |
| `#schedule` | `Schedule.tsx` | Schedule |
| `#sponsors` | `Sponsors.tsx` | Sponsors |
| `#gallery` | `Gallery.tsx` | Photos |
| `#contact` | `Contact.tsx` | Get Involved |

### Tryouts page (`/tryouts`)

| Section | Description |
|---|---|
| Banner header | Full-width photo background, title, Register CTA |
| Key facts bar | Date, location, age groups, cost |
| Tryout schedule | July 12th, home-plate time cards per division |
| Age divisions | 7U, 8U, 9U, 11U cards with format + highlights |
| What to Expect | 4-step process |
| What to Bring | Checklist |
| CTA | Register + Facebook + Contact buttons |

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
Update `paradiseyardgoats@email.com` in `lib/config.ts` with the real team email address.
