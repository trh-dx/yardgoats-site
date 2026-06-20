# Paradise Yard Goats Baseball — Website

Official website for the Paradise Yard Goats youth travel baseball organization based in Paradise, Texas.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, teams by age group, simplified sponsors strip with CTA to /sponsors, tryout CTA |
| `/teams` | Team roster and age group breakdown |
| `/tryouts` | Tryout dates, what to expect, what to bring |
| `/schedule` | Game and tournament schedule |
| `/about` | Organization story and coaches |
| `/sponsors` | Full sponsors page — hero, benefits, stats, packages, why partner, logo wall, CTA |
| `/contact` | Contact form and info |

## Project Structure

```
app/                  # Next.js App Router pages
  sponsors/
    page.tsx          # Dedicated sponsors page
components/           # Shared UI components
  Nav.tsx             # Fixed top navigation (Sponsors link → /sponsors)
  Footer.tsx          # Site footer (5-col grid; Age Groups shows "7U - 11U")
  Scoreboard.tsx      # Homepage score/stats bar
  Sponsors.tsx        # Homepage sponsors strip — headline, logo wall, starting price, CTA to /sponsors
  SponsorPackages.tsx # Interactive pricing cards used on /sponsors (client component)
  TeamsGrid.tsx       # Teams page age-group cards (7U, 8U, 9U, 11U)
  Schedule.tsx        # Schedule table/list
lib/
  data.ts             # Teams, schedule, and sponsor package data
  config.ts           # Site-wide config (social links, email, external URLs)
public/
  images/             # Photos and sponsor logos
    sponsors/         # Individual sponsor logo files
  yardgoatsimage.png  # Primary team logo
```

## Design System

Fonts loaded via `next/font/google`:
- **Bebas Neue** (`font-bebas`) — headings and display text
- **Inter** (`font-inter`) — body, buttons, labels
- **Permanent Marker** (`font-marker`) — accent script lines

Key colors:
- Deep navy `#07111F` — page background (used consistently throughout `/sponsors`)
- Green `#7AC143` — primary accent
- Royal blue `#003DA5` — structural/info elements
- Red `#B3261E` — section heading dividers

See `.claude/skills/yardgoats-design-system/` for the full design system reference.

## Homepage Sponsors Section

`components/Sponsors.tsx` is a lightweight strip on the homepage designed to drive traffic to `/sponsors`:

- Headline: "Support Local Players. Grow Your Local Brand."
- Supporting copy about what sponsorships fund
- Current sponsor logo strip (6 logos + "Your Logo Here" placeholder)
- "Packages starting at $250" callout
- Single CTA button → `/sponsors`

The full tier breakdown lives on the dedicated sponsors page (see below).

## Sponsors Page

`/sponsors` is a full dedicated page with these sections (top to bottom):

1. **Hero** — "Invest in Players / Impact the Community" with YG logo
2. **Benefits** — 4-icon grid (Tournament Fees, Equipment, Practice Facilities, Player Development)
3. **Stats** — 250+ players, 10+ tournaments, 1 mission, COUNTLESS memories
4. **Sponsorship Packages** — Single ($250), Double ($500), Triple ($1,000), Home Run ($2,000+)
5. **Why Partner** — 4-reason grid inside a bordered card
6. **Logo Wall** — "Proudly Supported By Local Businesses" with current sponsor logos
7. **CTA Banner** — "Want to become a sponsor?" with email link

### Adding a Sponsor Logo

Drop the logo file in `public/images/sponsors/` and add an entry to the `SPONSOR_LOGOS` array in `app/sponsors/page.tsx`:

```ts
{ src: "/images/sponsors/your-logo.png", alt: "Business Name", bg: "#ffffff" }
```

Set `bg` to match the logo's intended background color (white for most, or a brand color).

### Updating Sponsor Packages

Package names, prices, and perks are defined in `lib/data.ts` under `export const sponsors`. Tier-specific card styling (colors, shadows, badges) lives in the `cfg` object in `components/SponsorPackages.tsx`.

## Mobile Considerations

The `/sponsors` page is fully responsive. Key breakpoints:

- **Benefits grid** — 2-col on mobile, 4-col on `md`
- **Stats bar** — 2-col on mobile with row/column separators, 4-col on `md`
- **Sponsorship packages** — 1-col on mobile, 2-col on `sm`, 4-col on `xl`
- **Why Partner card** — padding scales: `p-6` mobile → `p-10` md → `p-16` lg
- **Logo wall label** — wraps naturally on small screens (no `whitespace-nowrap`)
- **CTA banner** — stacks vertically on mobile (`flex-col`), logo placeholder stretches full width; switches to horizontal row on `md`
- **YG logo image in hero** — hidden below `lg` breakpoint to keep hero clean on mobile

## Data

All editable content (teams, schedule, sponsor packages) lives in `lib/data.ts`. Site-wide links and contact info are in `lib/config.ts`.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
```
