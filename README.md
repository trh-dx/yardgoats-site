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
| `/` | Homepage — hero with tryout date callout, teams by age group, tiered sponsors strip, tryout CTA |
| `/teams` | Age group cards with tag badges (Coach Pitch / Kid Pitch / Tournament), player spotlights, CTA band |
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
  TeamsGrid.tsx       # Teams page age-group cards (7U, 8U, 9U, 11U) — imports from lib/data.ts
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
- **Premier Sponsors** — AmeriDream, GTG, Elite Metal Fabricators displayed at `aspect-[2/1]` in a 3-column row
- **Supporting Sponsors** — Edward Jones, Wise Powder Coating, ECS displayed at `aspect-[3/1]` (visually smaller) in a 3-column row below
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
6. **Logo Wall** — Tiered display matching the homepage sponsor strip:
   - **Premier Sponsors** — AmeriDream, GTG, Elite Metal Fabricators at `aspect-[2/1]` in a 3-column row
   - **Supporting Sponsors** — Edward Jones, Wise Powder Coating, ECS at `aspect-[3/1]` in a 4-column row, with a "Your Logo Here / Join our team of sponsors!" dashed placeholder as the fourth slot
7. **CTA Banner** — "Want to become a sponsor?" with email link (no logo placeholder)

### Adding a Sponsor Logo

To add a **Premier** sponsor, drop the logo in `public/images/sponsors/` and add an entry to `PREMIER_LOGOS` in `app/sponsors/page.tsx` and the premier grid in `components/Sponsors.tsx`:

```ts
{ src: "/images/sponsors/your-logo.png", alt: "Business Name", bg: "#ffffff" }
```

To add a **Supporting** sponsor, add to `SUPPORTING_LOGOS` in `app/sponsors/page.tsx` and the supporting grid in `components/Sponsors.tsx`.

Set `bg` to match the logo's intended background color (white for most, or a brand color).

### Updating Sponsor Packages

Package names, prices, and perks are defined in `lib/data.ts` under `export const sponsors`. Tier-specific card styling (colors, shadows, badges) lives in the `cfg` object in `components/SponsorPackages.tsx`.

## SEO & Metadata

Metadata is managed via the Next.js App Router `metadata` export.

- **`app/layout.tsx`** — sets `metadataBase` (`https://paradiseyardgoats.club`), a title template (`%s | Paradise Yard Goats Baseball`), a default description, and `openGraph` / `twitter` card defaults for every page
- **`app/page.tsx`** — overrides with a home-specific title (`"Home"`) and description
- **`app/tryouts/page.tsx`** — overrides with a tryouts-specific title and description including the July 12 date

To add metadata to a new page, export a `Metadata` object — the title template in `layout.tsx` will automatically append the site name:

```ts
export const metadata: Metadata = {
  title: "Page Name",
  description: "Page-specific description.",
};
```

Update `metadataBase` in `app/layout.tsx` if the domain changes.

## Mobile Considerations

### Homepage Hero
- **Overlay** — two separate overlays: desktop uses a left-heavy 105deg gradient (`lg:block`); mobile uses a softer vertical gradient (`block lg:hidden`) so the baseball field image remains visible on small screens
- **Tagline** — `clamp(0.9rem, 1.4vw, 1rem)` — readable at all sizes (minimum 14.4px)

### Teams Page (`/teams`)
- **Bottom CTA tagline** — "Find your team. Build your confidence. Have Fun." stacks vertically on mobile (`flex-col`) with pipes hidden; restores to inline pipe-separated row on `sm+`

### Sponsors Page (`/sponsors`)
- **Benefits grid** — 2-col on mobile, 4-col on `md`
- **Stats bar** — 2-col on mobile with row/column separators, 4-col on `md`
- **Sponsorship packages** — 1-col on mobile, 2-col on `sm`, 4-col on `xl`
- **Why Partner card** — padding scales: `p-6` mobile → `p-10` md → `p-16` lg
- **Logo wall label** — wraps naturally on small screens (no `whitespace-nowrap`)
- **CTA banner** — stacks vertically on mobile (`flex-col`), logo placeholder stretches full width; switches to horizontal row on `md`
- **YG logo image in hero** — hidden below `lg` breakpoint to keep hero clean on mobile

## Data

All editable content (teams, schedule, sponsor packages) lives in `lib/data.ts`. Site-wide links and contact info are in `lib/config.ts`.

### Teams data shape

```ts
{
  age: "9U",
  name: "9U Yard Goats",
  title: "Compete",           // card headline
  description: "...",         // card body copy
  tag: "Kid Pitch",           // pill badge shown below coach name (Coach Pitch / Kid Pitch / Tournament)
  coach: "Jesse Woskowicz",   // rendered as "Coach: Name" in the card header
  wins: 8,                    // used to display record and calculate win pct
  losses: 4,
}
```

All fields are used by `TeamsGrid.tsx` — update team details here only. `coach`, `wins`, and `losses` are optional; omitting them hides those elements from the card. Win pct is calculated automatically; displays `—` when both wins and losses are 0.

### TeamsGrid card design

Cards display in a 3-column grid (2-col tablet, 1-col mobile) with no photo. The header area shows "Paradise / Yard Goats" as a title with the age badge top-right, coach name, and tag pill. The card body shows the title, description, a record / win pct row (stats stretch full card width, split equally), and a green "View Roster" button at the bottom. Cards have a royal blue border at rest that brightens on hover with a blue glow shadow. The "View Roster" button links to `#` — update the `href` in `TeamsGrid.tsx` when roster pages are ready.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
```
