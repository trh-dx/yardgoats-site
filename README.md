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
| `/` | Homepage — hero ("Home of The / Paradise Yard Goats / Youth Baseball") with tryout callout, teams by age group, sponsors strip, tryout CTA |
| `/teams` | Hero: "5 Teams. / One Goat Nation." — age group cards (Team Overview header, 5 cards), player spotlights (hidden), CTA band |
| `/tryouts` | Tryout dates with age-group cards (clock icon, time, register CTA), what to expect, what to bring |
| `/schedule` | Game and tournament schedule |
| `/field-rentals` | Field rental page — "Baseball Field Rentals" hero, availability strip, facility features, rental option cards, rules checklist, booking CTA |
| `/about` | Organization story and coaches |
| `/sponsors` | Full sponsors page — hero, benefits, stats, packages, why partner, logo wall, CTA |
| `/contact` | "Contact Paradise Yard Goats Baseball" — contact form and info |

## Project Structure

```
app/                  # Next.js App Router pages
  sponsors/
    page.tsx          # Dedicated sponsors page
components/           # Shared UI components
  Nav.tsx             # Fixed top navigation (links: Home, Teams, Tryouts, Field Rentals, About, Sponsors, Contact)
  Footer.tsx          # Site footer (5-col grid; Quick Links includes Field Rentals; Age Groups shows "7U - 11U")
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

Pages that include the brand name in their title use `title: { absolute: "..." }` to bypass the layout template and avoid duplication.

### Current page metadata

| Page | Title | Uses absolute? |
|---|---|---|
| `/` | Paradise Yard Goats Baseball \| Youth Baseball in Paradise, TX | Yes |
| `/teams` | Youth Baseball Teams \| Paradise Yard Goats Baseball | No (template) |
| `/field-rentals` | Baseball Field Rentals in Paradise, TX \| The Goat Yard | Yes |
| `/sponsors` | Youth Baseball Sponsorships \| Paradise Yard Goats | Yes |
| `/about` | About Paradise Yard Goats Baseball | Yes |
| `/tryouts` | Tryouts \| Paradise Yard Goats Baseball | No (template) |
| `/schedule` | Schedule \| Paradise Yard Goats Baseball | No (template) |
| `/contact` | Contact Paradise Yard Goats Baseball | Yes (via contact/layout.tsx) |

To add metadata to a new page, export a `Metadata` object. If the title already contains the brand name, use `absolute` to skip the template:

```ts
// Simple (template appends site name)
export const metadata: Metadata = {
  title: "Page Name",
  description: "Page-specific description.",
};

// Absolute (full title, no template)
export const metadata: Metadata = {
  title: { absolute: "Full Title | Paradise Yard Goats" },
  description: "Page-specific description.",
};
```

Update `metadataBase` in `app/layout.tsx` if the domain changes.

## Mobile Considerations

### Homepage Hero
- **Overlay** — two separate overlays: desktop uses a left-heavy 105deg gradient (`lg:block`); mobile uses a softer vertical gradient (`block lg:hidden`) so the baseball field image remains visible on small screens
- **"Home of The"** — Permanent Marker font in green, `clamp(1.23rem, 2.8vw, 1.78rem)`
- **"Paradise Yard Goats"** — Bebas Neue in white, `clamp(3rem, 9vw, 9rem)`, `whitespace-nowrap`
- **"Youth Baseball"** — Bebas Neue in white with a thin royal-blue text stroke (`0.5px`) and subtle blue drop shadow accent; green `3px` bar sits underneath via a `w-fit` wrapper div
- **Tagline** — `clamp(0.85rem, 1.4vw, 1rem)`, `tracking-[0.8px]`, `leading-relaxed` — tightened from earlier wider spacing for better readability on mobile

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

## Tryouts Page

The tryout schedule is defined in the `tryouts` array at the top of `app/tryouts/page.tsx`. Each entry has an `age` label and a `time` string:

```ts
{ age: "7U & 8U", time: "12:00P - 12:45P" },
{ age: "9U",      time: "1:00P - 1:45P"   },
{ age: "11U",     time: "2:00P - 2:45P"   },
```

Each card displays a green clock icon, the age group in large Bebas Neue, and the time with the `P` suffix rendered slightly smaller. The register button links to `siteConfig.register`.

To add or remove a time slot, add or remove an entry from the `tryouts` array — the card grid adjusts automatically.

---

## Field Rentals Page

`/field-rentals` uses the Swift / RunSwiftApp booking system — no custom booking logic is built into the site. All booking buttons point to `siteConfig.fieldRentals` and open in a new tab.

Page sections (top to bottom):

1. **Hero** — "Baseball Field Rentals" (white + green) with "THE GOAT YARD" eyebrow, subtitle, green primary button (booking URL), white outline "Rental Rules" button (anchor-scrolls to rules section)
2. **Availability strip** — Royal blue band with calendar icon, description, and "Open Booking Calendar" button
3. **Facility Features** — 5-column grid (Lighted Field, Turf & Infield, Dugouts, Parking, Restrooms) with icon, title, and description
4. **Rental Options** — 4 cards in a 1→2→4 column responsive grid (Team Practice, Private Lesson, Weekend Block, Event/Tournament), each with a "Book Now" button
5. **Rental Rules** — Checklist section with green checkmark circles (anchor target `#rental-rules`)
6. **Bottom CTA** — Green banner with logo and "Book Field Time" button

### Updating the Booking URL

The Swift booking URL is stored in `lib/config.ts` under `siteConfig.fieldRentals`. Update it there and all buttons on the page update automatically.

```ts
fieldRentals: "https://book.runswiftapp.com/facilities/the-goat-yard"
```

### Adding or Editing Rental Rules

Rules are defined in the `rentalRules` array at the top of `app/field-rentals/page.tsx`. Add, remove, or reorder items there.

### Adding or Editing Rental Option Cards

Cards are defined in the `rentalOptions` array at the top of `app/field-rentals/page.tsx`. Each card has a `title` and `desc`.

---

## Data

All editable content (teams, schedule, sponsor packages) lives in `lib/data.ts`. Site-wide links and contact info are in `lib/config.ts`.

### Teams data shape

```ts
{
  age: "9U",
  name: "9U Yard Goats",
  title: "Challenge",         // card headline
  description: "...",         // card body copy
  tag: "Kid Pitch",           // pill badge shown below coach name (Coach Pitch / Kid Pitch / Tournament)
  coach: "Jake Smith",        // rendered as "Coach: Name" in the card header
  teamLabel: "SMITH",         // optional — adds a dark navy strip below the green age badge (used for 11U only)
  wins: 8,                    // used to display record and calculate win pct
  losses: 4,
}
```

`coach`, `wins`, and `losses` are optional; omitting them hides those elements from the card. Win pct is calculated automatically; displays `—` when both wins and losses are 0. `teamLabel` is optional — only add it when multiple teams share the same age group (currently the two 11U teams).

### Current teams

| Age | Coach | teamLabel | Tag | Record |
|---|---|---|---|---|
| 7U | Shawn Leach | — | Coach Pitch | 0-0 |
| 8U | Trey Miller | — | Coach Pitch | 0-0 |
| 9U | Jake Smith | — | Kid Pitch | 0-0 |
| 11U | Jesse Woskowicz | WOSKO | Tournament | 0-0 |
| 11U | Collin White | WHITE | Tournament | 0-0 |

### TeamsGrid card design

Cards use a 6-column CSS grid so the layout can be controlled precisely. The first three cards (7U, 8U, 9U) each span 2 of 6 columns, filling the row. The two 11U cards each span 2 columns with explicit `col-start` values (2 and 4) so they are centered below the top row with one empty column on each side.

The card header shows "Paradise / Yard Goats" with the age badge top-right, coach name, and tag pill. The age badge is a split two-tone design: green top section with the age, and — when `teamLabel` is set — a dark navy bottom strip with the label. A green border wraps the entire badge.

The card body shows the title, description, a record / win pct row, and a green "View Roster" button pinned to the bottom. Cards have a royal blue border at rest that brightens on hover with a blue glow shadow. The "View Roster" button links to `#` — update the `href` in `TeamsGrid.tsx` when roster pages are ready.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
```
